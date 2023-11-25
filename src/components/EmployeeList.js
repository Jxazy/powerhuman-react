import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmployeeList = () => {
  const [employees, setEmployee] = useState([])

    useEffect(() => {
        getEmployee();
    }, []);

    const getEmployee = async () => {
        const response = await axios.get('http://localhost:5000/api/employees', {
            headers: {
                'X-API-Key': 'RAHASIA',
            }
        });
        setEmployee(response.data.data);
    }

    const deleteEmployee = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);
        getEmployee();
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
          <Link to='/add' className='button is-primary mb-3'>Add Employee</Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>
                  <Link to={`/edit/${employee.id}`} className="button is-small is-primary mr-2">Edit</Link>
                  <button className="button is-small is-danger" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
    </div>
  )
}

export default EmployeeList