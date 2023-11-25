import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("MALE");
  const [age, setAge] = useState(0);
  const [phone, setPhone] = useState("");
  const [team_id, setTeam_id] = useState(0);
  const [role_id, setRole_id] = useState(0);

  const navigate = useNavigate();

  const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
      'X-API-Key': 'RAHASIA',
    },
  });
  
  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await api.post("/employees", {
        name,
        email,
        gender,
        age,
        phone,
        team_id,
        role_id
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveEmployee}>
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
                  <option value="MALE">MALE</option>
                  <option value="FEMALE">FEMALE</option>
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
                    type="number"
                    className="input"
                    value={team_id}
                    onChange={(e) => setTeam_id(Number(e.target.value))}
                    placeholder="Team ID"
                />
                </div>
            </div>
            <div className="field">
                <label className="label">Role ID</label>
                <div className="control">
                <input
                    type="number"
                    className="input"
                    value={role_id}
                    onChange={(e) => setRole_id(Number(e.target.value))}
                    placeholder="Role ID"
                />
                </div>
            </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;