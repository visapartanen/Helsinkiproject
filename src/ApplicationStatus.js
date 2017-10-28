import React, { Component } from 'react';
import Apply from './Apply';
import Status from './Status';

class ApplicationStatus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: null
    };
  }

  changeContent(contentId) {
    this.setState({
      content: contentId
    });
  }

  getComponent(componentId) {
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
            <button c type="button" class="btn btn-default">
              <img src="images/apply.png" alt="apply image" />
                <a onClick={this.changeContent.bind(this, 'apply')}>
                  <h3>Apply</h3>
                </a>
            </button>
          </div>
          <div className="col-sm-6 col-md-4">
            <button c type="button" class="btn btn-default">
              <img src="images/check.png" alt="status image" />
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
