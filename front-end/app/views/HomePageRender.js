import React from "react";
import Card from "../components/Card";

export default function HomePageRender() {
  const Packages = () => (
    <div>
      <h4 className="text-center highlight-text">Some of the packages used in this Boilerplate</h4>
      <div className="card-columns">
        { this.corePackages.map(({ name, description, homePage }, key) =>
          <Card
            key={key}
            name={name}
            description={description}
            img={`${name.toLowerCase().replace(/[^a-z]/g, "")}-logo.png`}
            btn={{
              block: true,
              link: homePage,
              target: "_blank",
              color: "info",
              text: "Read More"
            }}/>
        )}
      </div>

      <h4 className="text-center highlight-text">Other great package tools</h4>
      <div className="card-columns">
        { this.toolPackages.map(({ name, description, homePage }, key) =>
          <Card
            key={key}
            name={name}
            description={description}
            btn={{
              block: true,
              link:homePage,
              target: "_blank",
              color: "info",
              text: "Read More"
            }}/>
        )}
      </div>
    </div>
  );

  const Initialize = () => (
    <div>
      <h4 className="text-center highlight-text">No packages to display.</h4>
      <p className="text-center highlight-text msg">
        Clicking the button bellow will initialize default package information in your local DB assuming you're running the entire Boilerplate.
        <br/>
        To see these before adding them, checkout the packages controller
        <br/>
        /back-end/controllers/packages.js
      </p>
      <button className="btn btn-primary" onClick={() => this.initialize()}>Initialize</button>
    </div>
  );

  return (
    <div className="home-page">
      { !!this.packages && this.packages.length > 0
          ? <Packages />
          : <Initialize />
      }
    </div>
  );
}
