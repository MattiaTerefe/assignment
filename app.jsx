import React from "react";
import { Header } from "./header.jsx";
import { Main } from "./main.jsx";

/*
Il bug nella visualizzazione
era dovuto al mancato import 
di React in uno dei file
*/

export const App = (props) => {
  return (
    <>
      <Header
        logoUrl="https://i.imgur.com/Pp8vmSn.png"
        appName="Consegna Mattia Terefe"
      />
      <Main title="LE RICERCHE SONO CASE SENSITIVE!!!" />
    </>
  );
};
