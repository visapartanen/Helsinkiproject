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
    var body = document.getElementById("message").value;
    var message = {
        body: body,
        user: this.state.user || "guest "
    };
    this.state.socket.emit("new-message", message);
  }
  pickUser(){
    var user = document.getElementById("user").value;
    this.setState({user: user});
  }
  render(){
    var self = this;
    var messages = self.state.messages.map(function(msg){
      return <li><strong>{msg.user}</strong><span>{msg.body}</span></li>
    });
    return(
      <div>
       <ul>
       {messages}
       </ul>
       <input id="message" type="text"/><button onClick={() => self.submitMessage()}>send message</button><br/>
       <input id="user" type="text" placeholder="choose a username" /> <button onClick={() => self.pickUser()}> select user </button>
      </div>
    )

  }
}

export default Chat;
