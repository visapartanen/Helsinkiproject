import React, { Component } from 'react';
import Apply from './Apply';
import Status from './Status';

class ApplicationStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null // the default content id
    };
  }

  changeContent(contentId) {
    // set state for selected item
    this.setState({
      content: contentId
    });
  }

  getComponent(componentId) {
    // get react component for the component in the state
    switch(componentId) {
      case 'apply':
        return <Apply/>;
      case 'status':
        return <Status/>;
      default:
        return <div></div>;
    }
  }

  render() {
    return (

      <div>
        <div className="row">
          <div className="col-sm-6">
            <a className="application-button" onClick={this.changeContent.bind(this, 'apply')}>
              <img src="images/apply.png" alt="apply"/>
              <h3>Apply</h3>
            </a>
          </div>
          <div className="col-sm-6">
            <a className="application-button" onClick={this.changeContent.bind(this, 'status')}>
              <img src="images/check.png" alt="status"/>
              <h3>Status</h3>
            </a>
          </div>
        </div>

        {this.getComponent(this.state.content)}

      </div>

    );
  }
}

export default ApplicationStatus;
