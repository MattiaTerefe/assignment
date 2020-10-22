import React from "react";
import { useState } from "react";
//come props prendo da joblist tutto quel che mi serve
export const Job = (props) => {
  const skillz = props.skills.map((el) => {
    return <li>{el + " "}</li>;
  });
  return (
    <>
      <ul>
        <li>Titolo lavoro:{props.titolo}</li>
        <li>Seniority richiesta:{props.seniority}</li>
        <li>Categoria (linguaggio):{props.categoria}</li>
        <li>
          <ul>Skills: {skillz}</ul>
        </li>
      </ul>
    </>
  );
};
