import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { ToastContainer } from "react-toastify";
import EditUser from "./components/EditUser";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
