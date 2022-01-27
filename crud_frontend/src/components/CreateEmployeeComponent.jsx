import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function CreateEmployeeComponent() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (id == "_add") return;

    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmailId(employee.emailId);
    });
  }, []);

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee => " + JSON.stringify(employee));

    if (id == "_add") {
      EmployeeService.createEmployee(employee).then((res) => {
        navigate("/employees");
      });
    } else {
      EmployeeService.updateEmployee(employee, id).then((res) => {
        navigate("/employees");
      });
    }
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

  const getTitle = () => {
    if (id == "_add") return "Add Employee";
    else return "Update Employee";
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">{getTitle()}</h3>
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

                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Save
                </button>
                <Link to="/">
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
