import React, { Component } from 'react';

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      children: []
    };
  }

  componentDidMount() {
    fetch('/api/children_schools.json')
      .then(data => data.json())
      .then(data => this.setState({children: data}));
  }

  school(title, name) {
    return (
      <div className="col-xs-6 col-sm-3">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h5 className="panel-title">{title}</h5>
          </div>
          <div className="panel-body">
            <div>{name}</div>
            <button class="btn btn-default btn-sm">Change School</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {children} = this.state;

    return (
      <div>
        <h3>Preliminary study path</h3>

        {children.map(child =>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">{child.name}</h4>
            </div>

            <div className="panel-body">
              <div className="container-fluid">
                <div className="row">
                  {this.school('Kindergarten', child.kindergarten)}
                  {this.school('Pre-school', child.preSchool)}
                  {this.school('Primary school', child.primaryschool)}
                  {this.school('Middle school', child.middleschool)}
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    );
  }
}

export default Timeline;
