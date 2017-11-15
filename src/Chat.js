import React, {Component} from 'react';
import io from 'socket.io-client';

class Chat extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[],
      socket: io('http://localhost:3030'),
      user: undefined
    };
  }
  componentDidMount(){
    var self = this;
    this.state.socket.on("receive-message", function(msg){
      var messages = self.state.messages;
          messages.push(msg);
      self.setState({messages: messages});
      console.log(self.state.messages);
    });
  }
  submitMessage(){
    var d = new Date();
    var body = document.getElementById("message").value;
    var message = {
        date: "|| Received " + d.toUTCString(),
        body: body,
        user: this.state.user || "guest"
    };
    this.state.socket.emit("new-message", message);
  }
  pickUser(){
    var user = document.getElementById("user").value;
    this.setState({user:user});
  }
  render(){
    var d = new Date();
    var self = this;
    var messages = self.state.messages.map(function(msg){
      return <li><strong>{msg.user}: </strong>
      <span>{msg.body}</span><p>  </p><em>{msg.date}</em></li>

    });
    return(
      <div>
       <ul className="chatbox">
       {messages}
       </ul>
       <div className ="alasisennys"></div>
       <textarea className="textarea" rows="5" cols="100" id="message" type="text" placeholder="Insert message here"/><br/>
       <button onClick={() => self.submitMessage()} class="btn btn-default btn-lg">Send message</button> <br/>
       <input id="user" type="text" placeholder="Choose a username" /> <button onClick={() => self.pickUser()} class="btn btn-default btn-sm">select user</button>
      </div>
    )

  }
}

export default Chat;
