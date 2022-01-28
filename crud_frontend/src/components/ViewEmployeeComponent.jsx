import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useParams } from "react-router-dom";

function ViewEmployeeComponent() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center">View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label htmlFor="firstName">Employee First Name: </label>
            <div id="firstName">{employee.firstName}</div>
          </div>
          <div className="row">
            <label htmlFor="lastName">Employee Last Name: </label>
            <div id="lastName">{employee.lastName}</div>
          </div>
          <div className="row">
            <label htmlFor="emailId">Employee Email Id: </label>
            <div id="emailId">{employee.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeComponent;
