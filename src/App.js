import React, { Component } from 'react';
import classNames from 'classnames';
import Header from './Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "personal-info"
    };
  }

  changeContent(contentId) {
    this.setState({
      content: contentId
    });
  }

  render() {
    return (
      <div className="app">
        <Header/>

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <ul className="nav nav-pills nav-stacked">
                <li className={classNames({active: this.state.content === 'personal-info'})}><a onClick={this.changeContent.bind(this, 'personal-info')}>Personal Info</a></li>
                <li className={classNames({active: this.state.content === 'timeline'})}><a onClick={this.changeContent.bind(this, 'timeline')}>Timeline</a></li>
                <li className={classNames({active: this.state.content === 'applications'})}><a onClick={this.changeContent.bind(this, 'applications')}>Applications</a></li>
                <li className={classNames({active: this.state.content === 'messages'})}><a onClick={this.changeContent.bind(this, 'messages')}>Messages</a></li>
              </ul>
            </div>
            <div className="col-md-9">{this.state.content}</div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
