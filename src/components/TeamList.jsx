import React from "react";
import { Link } from "react-router-dom";

const TeamList = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.members.map((member, i) => {
          return (
            <tr key={i}>
              <th scope="row">{member.id}</th>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>
                <Link to={`/edit/${member.id}`}>
                  <button className="btn btn-primary me-2">Edit</button>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={(e) => props.onDelete(member)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TeamList;
