import React from "react";
import { Joblist } from "./joblist.jsx";
import { Search } from "./search.jsx";
import { useState } from "react";

export const Main = (props) => {
  const [titolo, setTitolo] = useState("");
  const upTitolo = (val) => setTitolo(val);
  const [senior, setSenior] = useState("");
  const upSenior = (val) => setSenior(val);
  const [cat, setCat] = useState("");
  const upCat = (val) => setCat(val);
  const [skills, setSkills] = useState([]);
  const upSkills = (val) => setSkills(val);
  return (
    <main className="card m-4">
      <div className="card-header">{props.title}</div>
      <div className="card-body">
        <div className="card-text">
          <Search
            upTitolo={upTitolo}
            upSkills={upSkills}
            upCat={upCat}
            upSenior={upSenior}
          />
          <Joblist senior={senior} cat={cat} skills={skills} titolo={titolo} />
        </div>
      </div>
    </main>
  );
};
