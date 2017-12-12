import React, { Component } from 'react';

class Apply extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const school1 = data.get('schoolchoice1');
    const school2 = data.get('schoolchoice2');
    const school3 = data.get('schoolchoice3');

    const schools = [school1, school2, school3].filter(s => s);
    this.props.setSchools(schools);
  }

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

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="schoolchoice1">Preference 1</label>
            <select className="form-control" id="schoolchoice1" name="schoolchoice1">
              <option value="">School Name</option>
              {schools.map(school => <option value={school} key={school}>{school}</option>)}
            </select>
          </div>


          <div className="form-group">
            <label htmlFor="schoolchoice2">Preference 2</label>
            <select className="form-control" id="schoolchoice2" name="schoolchoice2">
              <option value="">School Name</option>
              {schools.map(school => <option value={school} key={school}>{school}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="schoolchoice3">Preference 3</label>
            <select className="form-control" id="schoolchoice3" name="schoolchoice3">
              <option value="">School Name</option>
              {schools.map(school => <option value={school} key={school}>{school}</option>)}
            </select>
          </div>

          <button type="submit" className="btn btn-default">Send</button>
        </form>
      </div>
    );
  }
}

export default Apply;
