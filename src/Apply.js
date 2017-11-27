import React, { Component } from 'react';

class Apply extends Component {
  render() {

    const schools = [
        'Alppila Upper Secondary School',
        'Deutsche Schule Helsinki',
        'The English School (Helsinki)',
        'Helsingin normaalilyseo',
        'Helsingin Suomalainen Yhteiskoulu',
        'Helsingin yhteislyseo',
        'International School of Helsinki',
        'Jokela High School',
        'Postipuu School',
        'Ressu Comprehensive School',
        'Ressu Upper Secondary School',
        'Tikkurilan lukio'
    ];

    return (
      <div>

        <h3>Apply</h3>
        <p>Select the school name in prefrence order from most favored to least favored.</p>

        <form>
          <div className="form-group">
            <label htmlFor="schoolchoice1">Preference 1</label>
            <select className="form-control" id="schoolpreference1">
              <option>School Name</option>
              {schools.map(school => <option key={school}>{school}</option>)}
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="schoolchoice2">Preference 2</label>
            <select className="form-control" id="schoolpreference2">
              <option>School Name</option>
              {schools.map(school => <option key={school}>{school}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="schoolchoice2">Preference 3</label>
            <select className="form-control" id="schoolpreference2">
              <option>School Name</option>
              {schools.map(school => <option key={school}>{school}</option>)}
            </select>
          </div>

          <button type="submit" className="btn btn-default">Send</button>
        </form>
      </div>
    );
  }
}

export default Apply;
