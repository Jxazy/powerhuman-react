import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

axios.defaults.headers.common['X-API-Key'] = 'RAHASIA';

const EditEmployee = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("MALE");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState("");
    const [team_id, setTeam_id] = useState(0);
    const [role_id, setRole_id] = useState(0);
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      getEmployeeById();
    }, []);
  
    const updateEmployee = async (e) => {
      e.preventDefault();
      try {
        
        await axios.put(`http://localhost:5000/api/employees/${id}`, {
          name,
          email,
          gender,
          age,
          phone,
          team_id,
          role_id,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };

  const getEmployeeById = async () => {
    const response = await axios.get(`http://localhost:5000/api/employees/${id}`);
    setName(response.data.data.name);
    setEmail(response.data.data.email);
    setGender(response.data.data.gender);
    setAge(response.data.data.age);
    setPhone(response.data.data.phone);
    setTeam_id(response.data.data.team_id);
    setRole_id(response.data.data.role_id);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateEmployee}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Age"
              />
            </div>
            </div>
            <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Team ID</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    value={team_id}
                    onChange={(e) => setTeam_id(Number(e.target.value))}
                    placeholder="Team"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Role ID</label>
                <div className="control">
                <input
                    type="text"
                    className="input"
                    value={role_id}
                    onChange={(e) => setRole_id(Number(e.target.value))}
                    placeholder="Role"
                />
                </div>
            </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;