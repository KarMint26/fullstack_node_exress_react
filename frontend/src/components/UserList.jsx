import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(0);
  const apiUrl = import.meta.env.VITE_URL_API;

  const getDataUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteDataUsers = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/users/${id}`);
      setActiveModal(false)
      getDataUsers();
      console.log(response.data)
      toast.success("Delete Data Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <React.Fragment>
      <div className={`modal ${activeModal ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              Are you sure to delete this data?
            </p>
            <button onClick={() => setActiveModal(false)} className="delete" aria-label="close"></button>
          </header>
          <footer className="modal-card-foot">
            <div className="buttons">
              <button
                onClick={() => deleteDataUsers(id)}
                className="button is-success has-text-white"
              >
                Delete
              </button>
              <button className="button" onClick={() => setActiveModal(false)}>Cancel</button>
            </div>
          </footer>
        </div>
      </div>
      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Link to={"/add"} className="button is-primary has-text-white my-3">
            Add User
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th className="has-text-centered">No</th>
                <th>Name</th>
                <th>Email</th>
                <th className="has-text-centered">Gender</th>
                <th className="has-text-centered">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td className="has-text-centered">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td
                    className="is-flex is-justify-content-center is-align-items-center"
                    style={{ gap: "0.5rem" }}
                  >
                    <Link
                      to={`/edit/${user.id}`}
                      className="button is-small is-warning has-text-white"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        setId(user.id);
                        setActiveModal(true);
                      }}
                      className="button is-small is-danger has-text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserList;
