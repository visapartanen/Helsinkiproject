import React, { Component } from 'react';
import classNames from 'classnames';
import Header from './Header';
import PersonalInfo from './PersonalInfo';
import Timeline from './Timeline';
import ApplicationStatus from './ApplicationStatus';
import Chat from './Chat';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "applications" // default component id
    };
  }

  changeContent(contentId) {
    // set state for selected menu item
    this.setState({
      content: contentId
    });
  }

  getComponent(componentId) {
    // get react component for the selected menu item
    switch(componentId) {
      case 'personal-info':
        return <PersonalInfo/>;
      case 'timeline':
        return <Timeline/>;
      case 'applications':
        return <ApplicationStatus/>;
      case 'messages':
        return <Chat/>;
      case 'search':
        return <Search/>;
      default:
        return <div>Not found</div>;
    }
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
                <li className={classNames({active: this.state.content === 'applications'})}><a onClick={this.changeContent.bind(this, 'applications')}>Application Status</a></li>
                <li className={classNames({active: this.state.content === 'messages'})}><a onClick={this.changeContent.bind(this, 'messages')}>Messages<span className="badge">4</span></a></li>
                <li className={classNames({active: this.state.content === 'search'})}><a onClick={this.changeContent.bind(this, 'search')}>Search</a></li>
              </ul>
            </div>
            <div className="col-md-9">{this.getComponent(this.state.content)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
