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
        date: "Received " + d.toUTCString(),
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
      return (
      <div class="chatbox1">
        <p class = "messageschat">
        <strong>{msg.user}: </strong>
        <span>{msg.body}</span><p>  </p><em>{msg.date}</em>
        </p>
      </div>
    )
    });
    return(
      <div>
       <ul className="chatbox">
       {messages}
       </ul>
       <div className ="alasisennys"></div>

       <input id="user" type="text" placeholder="Choose a username" className="changeuser" /> <button onClick={() => self.pickUser()} className="changeuser">Select user</button>
       <div className="paddingchat"></div>
       <textarea className="textareachat" rows="5" cols="116" id="message" type="text" placeholder="Insert message here"/><br/>
       <button onClick={() => self.submitMessage()} className="sendbutton">Send message</button> <br/>
       <div className= "alasisennys1"></div>
      </div>
    )

  }
}

export default Chat;
