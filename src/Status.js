import React, { Component } from 'react';

class Status extends Component {
  render() {
    const schools = this.props.schools;
    console.log(schools);

    const statuses = [
      ['Completed', 'Accepted'],
      ['Processing', 'Undecided'],
      ['Received', 'Undecided'],
    ];

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

              {schools.map((school, i) =>
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{school}</td>
                  <td>{statuses[i % 3][0]}</td>
                  <td>{statuses[i % 3][1]}</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    );
  }
}

export default Status;
