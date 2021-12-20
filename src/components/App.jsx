import { useState } from "react";
import Header from "./Header";
import AddTeam from "./AddTeam";
import TeamList from "./TeamList";
import TeamMemberInfo from "./TeamMemberInfo";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Nivetha",
      email: "Nivetha11n@gmail.com",
    },
    {
      id: "2",
      name: "Ankita",
      email: "Ankita.Rathi@gmail.com",
    },
  ]);

  const onDelete = (item) => {
    let choice = window.confirm("Do you want to Delete this Member");
    if (!choice) {
      return;
    }
    let newMembers = members.filter((member) => member.id !== item.id);
    setMembers(newMembers);
    console.log(item);
  };

  const onAdd = (item) => {
    let newMember = {
      name: item.name,
      email: item.email,
      id: members.length + 1,
    };
    setMembers((old) => {
      return [...old, newMember];
    });
  };

  const onEdit = (item) => {
    setMembers((old) => {
      return old.map((i) => {
        if (item.id === i.id) {
          i.name = item.name;
          i.email = item.email;
        }
        return i;
      });
    });
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<TeamList members={members} onDelete={onDelete} />}
        />
        <Route path="/add" element={<AddTeam onAdd={onAdd} />} />
        <Route
          path="/edit/:id"
          element={<AddTeam onEdit={onEdit} members={members} />}
        />
      </Routes>
    </div>
  );
}

export default App;
