import React, { Component } from 'react';

class Status extends Component {
  render() {
    return (
      <div>
        <h3>Your Information</h3>
        <form className="form-inline">
          <div className="form-group">
            <label for="exampleInputName2">Name</label>
            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail2">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com" />
          </div>
          <button type="submit" className="btn btn-default">Send invitation</button>
        </form>
      </div>
    );
  }
}

export default Status;
