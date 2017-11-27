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
          <div className="col-sm-6 col-md-4">
            <button type="button" className="btn btn-default">
              <img src="images/apply.png" alt="apply" />
                <a onClick={this.changeContent.bind(this, 'apply')}>
                  <h3>Apply</h3>
                </a>
            </button>
          </div>
          <div className="col-sm-6 col-md-4">
            <button type="button" className="btn btn-default">
              <img src="images/check.png" alt="status" />
                <a onClick={this.changeContent.bind(this, 'status')}>
                  <h3>Status</h3>
                </a>
            </button>
          </div>
        </div>

        {this.getComponent(this.state.content)}

      </div>

    );
  }
}

export default ApplicationStatus;
