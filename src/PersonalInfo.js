import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">

        <form>

          <h4>Your Information</h4>
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input type="text" className="form-control" id="firstname" placeholder="Matti" />

            <label htmlFor="lastname">Last name</label>
            <input type="text" className="form-control" id="lastname" placeholder="Korhonen" />

            <label htmlFor="phonenumber">Phone number</label>
            <input type="text" className="form-control" id="phonenumber" placeholder="040 123 4567" />

            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="matti.korhonen@gmail.com" />

            <label htmlFor="primaryaddress">Primary address</label>
            <input type="text" className="form-control" id="primaryaddress" placeholder="Kaivopuisto tie 1, Helsinki" />

            <label htmlFor="secondaryaddress">Secondary address</label>
            <input type="text" className="form-control" id="secondaryaddress" placeholder="Lauttasaarinkuja 2, Helsinki" />
          </div>

          <div className="row">
           <div className="col-md-6">
              <h4>First Child's Information</h4>
              <div className="form-group">
                <label htmlFor="child1firstname">First name</label>
                <input type="text" className="form-control" id="child1firstname" placeholder="Ritva" />

                <label htmlFor="childlastname">Last name</label>
                <input type="text" className="form-control" id="childlastname" placeholder="Korhonen" />

                <label htmlFor="birthdate">Birthdate</label>
                <input type="date" className="form-control" id="birthdate" defaultValue="2010-01-20" />
              </div>
            </div>

            <div className="col-md-6">
              <h4>Second Child's Information</h4>
              <div className="form-group">
                <label htmlFor="child2firstname">First name</label>
                <input type="text" className="form-control" id="child2firstname" placeholder="Timo" />

                <label htmlFor="child2lastname">Last name</label>
                <input type="text" className="form-control" id="child2lastname" placeholder="Korhonen" />

                <label htmlFor="birthdate2">Birthdate</label>
                <input type="date" className="form-control" id="birthdate2" defaultValue="2010-01-20" />
              </div>
            </div>
          </div>

          {/*<button className="btn btn-default">Add</button>*/}

          <button type="submit" className="btn btn-default">Save</button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
