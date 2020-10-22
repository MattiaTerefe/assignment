import React from "react";

export const Search = (props) => {
  return (
    <div className="form">
      <form>
        <label>
          Titolo:
          <input id="titolo" type="text" />
        </label>
        <br />
        <label>
          Seniority:
          <input id="seniority" type="text" />
        </label>
        <br />
        <label>
          Categoria:
          <input id="categoria" type="text" />
        </label>
        <br />
        <label>
          Skills:
          <input id="skills" type="text" />
        </label>
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.upSkills(document.getElementById("skills").value);
            props.upTitolo(document.getElementById("titolo").value);
            props.upSenior(document.getElementById("seniority").value);
            props.upCat(document.getElementById("categoria").value);
          }}
        >
          CERCA
        </button>
      </form>
    </div>
  );
};
