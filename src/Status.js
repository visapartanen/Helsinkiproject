import React, { Component } from 'react';

class Status extends Component {
  render() {
    return (
      <div>
        <h3>Status</h3>
        <p>Here is the application results.</p>

        <div>
          <table className="table">
            <thead>
              <tr>
                <th>No.</th>
                <th>School</th>
                <th>Process</th>
                <th>Results</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Ressu Upper Secondary School</td>
                <td>Completed</td>
                <td>Acpeted</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>International School of Helsinki</td>
                <td>Processing</td>
                <td>Undecided</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>The English School (Helsinki)</td>
                <td>Received</td>
                <td>Undecided</td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default Status;
