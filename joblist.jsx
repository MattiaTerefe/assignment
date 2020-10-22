import { Job } from "./job.jsx";
import React from "react";
import { useState } from "react";

export const Joblist = (props) => {
  //l'array mockato
  const fullList = [
    {
      titolo: "frontend developer",
      seniority: "junior",
      skills: ["HTML", "CSS", "Javascript", "ReactJS", "Redux"],
      categoria: "Javascript",
    },
    {
      titolo: "frontend developer",
      seniority: "senior",
      skills: ["HTML", "CSS", "Javascript", "Angular"],
      categoria: "Javascript",
    },
    {
      titolo: "backend developer",
      seniority: "senior",
      skills: ["NodeJS", "Express", "Javascript", "MongoDB"],
      categoria: "Javascript",
    },
    {
      titolo: "wordpress developer",
      seniority: "intermediate",
      skills: ["HTML", "MySQL", "CSS", "Javascript", "PHP"],
      categoria: "PHP",
    },
  ];

  let filtered = fullList.filter(
    (el) =>
      el.titolo.includes(props.titolo) &&
      el.seniority.includes(props.senior) &&
      el.skills.toString().includes(props.skills) &&
      el.categoria.includes(props.cat)
  );
  //ottengo la lista di componenti da renderizzare
  const jList = filtered.map((el) => {
    return (
      <Job
        titolo={" " + el.titolo}
        seniority={" " + el.seniority}
        skills={el.skills}
        categoria={" " + el.categoria}
      />
    );
  });
  return (
    <>
      <hr />
      {jList}
    </>
  );
};
