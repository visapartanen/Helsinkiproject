import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo"/>
            </div>
            <div className="col-md-9">
              <h1>Helsinki Enlearner Service</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
