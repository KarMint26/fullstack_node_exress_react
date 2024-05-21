import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "Male",
  });
  const apiUrl = import.meta.env.VITE_URL_API;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiUrl}/users`, user);
      toast.success("User Data Added Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={addUser}>
          <div className="field">
            <label htmlFor="name" className="label">
              Name
            </label>
            <div className="control">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name..."
                className="input"
                value={user.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email..."
                className="input"
                value={user.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="gender" className="label">
              Gender
            </label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field mt-5">
            <button type="submit" className="button is-success has-text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
