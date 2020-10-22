import React from "react";

export const Header = (props) => {
  return (
    <header className="bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-md-left text-center">
            <img className="img-fluid" src={props.logoUrl} />
          </div>
          <div className="col-md-6 text-md-right text-center align-self-end">
            <h1>{props.appName}</h1>
          </div>
        </div>
      </div>
    </header>
  );
};
