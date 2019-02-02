import { appName, developer, licence } from "Config";
import React from "react";

export default function Header() {
  return (
    <div className="jumbotron-fluid text-center header">
      <h1 className="display-4">{appName}</h1>
      <p className="info"><i>Author:</i> {developer} <span>&bull;</span> <i>Licence:</i> {licence}</p>
      <hr className="my-4"/>
      <h2>Mongodb - ExpressJs - ReactJs - NodeJs</h2>
    </div>
  );
}
