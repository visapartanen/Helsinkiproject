import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div>

        <form>

          <label for="title">Your Information</label>
            <div className="form-group">
              <label for="firstname">First name</label>
              <input type="text" className="form-control" id="firstname" placeholder="Matti" />

              <label for="lastname">Last name</label>
              <input type="text" className="form-control" id="lastname" placeholder="Korhonen" />

              <label for="phonenumber">Phone number</label>
              <input type="text" className="form-control" id="phonenumber" placeholder="040 123 4567" />

              <label for="emailaddress">Email address</label>
              <input type="email" className="form-control" id="emailaddress" placeholder="matti.korhonen@gmail.com" />
            </div>

          <label for="title">First Child's Information</label>
            <div className="form-group">
              <label for="child1firstname">First name</label>
              <input type="text" className="form-control" id="child1firstname" placeholder="Ritva" />

              <label for="childlastname">Last name</label>
              <input type="text" className="form-control" id="childlastname" placeholder="Korhonen" />

              <label for="birthdate">Birthdate</label>
              <input type="date" className="form-control" id="birthdate" value="2010-01-20" />
            </div>

            <label for="title">Second Child's Information</label>
              <div className="form-group">
                <label for="child2firstname">First name</label>
                <input type="text" className="form-control" id="child2firstname" placeholder="Timo" />

                <label for="child2lastname">Last name</label>
                <input type="text" className="form-control" id="child2lastname" placeholder="Korhonen" />

                <label for="birthdate2">Birthdate</label>
                <input type="date" className="form-control" id="birthdate2" value="2010-01-20" />
              </div>

          {/*<button className="btn btn-default">Add</button>*/}

          <button type="submit" className="btn btn-default">Save</button>
        </form>
      </div>
    );
  }
}

export default PersonalInfo;
