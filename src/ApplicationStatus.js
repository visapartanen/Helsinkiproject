import React, { Component } from 'react';
import Apply from './Apply';
import Status from './Status';

const APPLIED_SCHOOLS = 'helsinki-enlearner-service-applied-schools'

class ApplicationStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null, // the default content id
      appliedSchools: this.getAppliedSchools() // get applied schools from local storage
    };
  }

  getAppliedSchools() {
    // get applied schools from local storage
    return JSON.parse(localStorage.getItem(APPLIED_SCHOOLS)) || [];
  }

  saveAppliedSchools(schools) {
    // save applied schools to local storage
    return localStorage.setItem(APPLIED_SCHOOLS, JSON.stringify(schools));
  }

  setAppliedSchools(schools) {
    // set applied schools to state and save in local storage
    this.setState({content: null, appliedSchools: schools});
    this.saveAppliedSchools(schools);
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
        return <Apply schools={this.state.appliedSchools} setSchools={this.setAppliedSchools.bind(this)}/>;
      case 'status':
        return <Status schools={this.state.appliedSchools}/>;
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
