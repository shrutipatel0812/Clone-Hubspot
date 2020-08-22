import React from "react";
import Card from "./Card";
import CardDetails from "../CardDetails";

function Home2() {
  return (
    <div>
      <div className="container " id="home2">
        <div className="row ">
          <div className="col-lg-4 col-sm-6">
            <h1 className="card-title">Powerful alone. Better together.</h1>

            <h4>
              HubSpot offers a full stack of software for marketing, sales, and
              customer service, with a completely free CRM at its core. They’re
              powerful alone — but even better when used together.
            </h4>
          </div>

          {CardDetails.map((card) => {
            return (
              <Card
                Key={card.key}
                title={card.title}
                content={card.content}
                popular={card.popularFeature}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home2;
