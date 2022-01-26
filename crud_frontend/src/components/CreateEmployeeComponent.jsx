import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee => " + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then((res) => {
      navigate("/employees");
    });
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const changeEmailIdHandler = (event) => {
    setEmailId(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form action="" method="post">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailId">Email Id</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Id"
                    id="emailId"
                    name="emailId"
                    value={emailId}
                    onChange={changeEmailIdHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={saveEmployee}>
                  Save
                </button>
                <Link to="/employees">
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEmployeeComponent;
