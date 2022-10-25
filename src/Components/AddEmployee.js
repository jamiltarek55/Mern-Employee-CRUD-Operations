import React, { Component } from 'react';
import axios from 'axios';

const customStyle = {
  width: '300px',
  margin: '0 auto'
}

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexID: '',
      firstName: '',
      lastName: '',
      email: '',
      designation: '',
      salary: '',
      present_address: '',
      permanentAddress: '',
      increment: '',
      mobile: '',
      phone: '',
      workingDays: '',
      leaveDays: '',
      leavingCauses: ''
    }
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // To add new employee when user submits the form
  handleSubmit = (event) => {
    event.preventDefault();
    const { indexID, firstName, lastName, fullName, email, designation, salary, presentAddress, permanentAddress, increment, mobile, phone, workingDays, leaveDays, leavingCauses } = this.state;
    axios.post('http://localhost:5000/employees/addEmployee', {
      indexID: indexID,
      firstName: firstName,
      lastName: lastName,
      fullName: fullName,
      email: email,
      designation: designation,
      salary: salary,
      presentAddress: presentAddress,
      permanentAddress: permanentAddress,
      increment: increment,
      mobile: mobile,
      phone: phone,
      workingDays: workingDays,
      leaveDays: leaveDays,
      leavingCauses: leavingCauses,
    })
      .then((response) => {
        console.log(response);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
        <label>
            ID Number
            <input
              name="indexID"
              type="text"
              value={this.state.indexID}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            First Name
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Last Name
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={this.state.fullName}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Email
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Designation
            <input
              name="designation"
              type="text"
              value={this.state.designation}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Salary
            <input
              name="salary"
              type="text"
              value={this.state.salary}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Present_Address
            <input
              name="presentAddress"
              type="text"
              value={this.state.presentAddress}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Permanent_Address
            <input
              name="permanentAddress"
              type="text"
              value={this.state.permanentAddress}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Increment
            <input
              name="increment"
              type="text"
              value={this.state.increment}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Mobile No
            <input
              name="mobile"
              type="text"
              value={this.state.mobile}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Phone No
            <input
              name="phone"
              type="text"
              value={this.state.phone}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Working Days
            <input
              name="workingDays"
              type="text"
              value={this.state.workingDays}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Leave Days
            <input
              name="leaveDays"
              type="text"
              value={this.state.leaveDays}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Leaving Causes
            <input
              name="leavingCauses"
              type="text"
              value={this.state.leavingCauses}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <input
            type="submit"
            value="submit"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}

export default AddEmployee;
