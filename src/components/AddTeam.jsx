import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddTeam = (props) => {
  const params = useParams();
  let editedMember;
  if (params.id) {
    editedMember = props.members.find((member) => member.id === params.id);
  }
  const [email, setEmail] = useState(editedMember ? editedMember.email : "");
  const [name, setName] = useState(editedMember ? editedMember.name : "");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      props.onEdit({
        name: name,
        email: email,
        id: params.id,
      });
    } else {
      props.onAdd({
        name: name,
        email: email,
      });
    }
    navigate("/");
  };

  return (
    <form className="container mt-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {params.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddTeam;
