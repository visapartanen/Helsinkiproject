import React, { Component } from 'react';

class Apply extends Component {
  render() {

    // const school = [
    //     'Alppila Upper Secondary School',
    //     'Deutsche Schule Helsinki',
    //     'The English School (Helsinki)',
    //     'Helsingin normaalilyseo',
    //     'Helsingin Suomalainen Yhteiskoulu',
    //     'Helsingin yhteislyseo',
    //     'International School of Helsinki',
    //     'Jokela High School',
    //     'Postipuu School',
    //     'Ressu Comprehensive School',
    //     'Ressu Upper Secondary School',
    //     'Tikkurilan lukio'
    // ];

    return (
      <div>

        <h3>Apply</h3>
        <p>Select the school name in prefrence order from most favored to least favored.</p>

        <form>
          <div className="form-group">
            <label htmlFor="schoolchoice1">Preference 1</label>
            <select className="form-control" id="schoolpreference1">
              <option>School Name</option>
              <option>Alppila Upper Secondary School</option>
              <option>Deutsche Schule Helsinki</option>
              <option>The English School (Helsinki)</option>
              <option>Helsingin normaalilyseo</option>
              <option>Helsingin Suomalainen Yhteiskoulu</option>
              <option>International School of Helsinki</option>
              <option>Jokela High School</option>
              <option>Postipuu School</option>
              <option>Ressu Comprehensive School</option>
              <option>Ressu Upper Secondary School</option>
              <option>Tikkurilan lukio</option>
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="schoolchoice2">Preference 2</label>
            <select className="form-control" id="schoolpreference2">
              <option>School Name</option>
              <option>Alppila Upper Secondary School</option>
              <option>Deutsche Schule Helsinki</option>
              <option>The English School (Helsinki)</option>
              <option>Helsingin normaalilyseo</option>
              <option>Helsingin Suomalainen Yhteiskoulu</option>
              <option>International School of Helsinki</option>
              <option>Jokela High School</option>
              <option>Postipuu School</option>
              <option>Ressu Comprehensive School</option>
              <option>Ressu Upper Secondary School</option>
              <option>Tikkurilan lukio</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="schoolchoice2">Preference 3</label>
            <select className="form-control" id="schoolpreference2">
              <option>School Name</option>
              <option>Alppila Upper Secondary School</option>
              <option>Deutsche Schule Helsinki</option>
              <option>The English School (Helsinki)</option>
              <option>Helsingin normaalilyseo</option>
              <option>Helsingin Suomalainen Yhteiskoulu</option>
              <option>International School of Helsinki</option>
              <option>Jokela High School</option>
              <option>Postipuu School</option>
              <option>Ressu Comprehensive School</option>
              <option>Ressu Upper Secondary School</option>
              <option>Tikkurilan lukio</option>
            </select>
          </div>

          <button type="submit" className="btn btn-default">Send</button>
        </form>
      </div>
    );
  }
}

export default Apply;
