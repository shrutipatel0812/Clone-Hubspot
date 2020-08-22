import React from "react";
import Button from "./Button";

function Home() {
  return (
    <div>
      <div id="home">
        <div className=" row ">
          <div className=" container col-lg-4">
            <div className="content">
              <h1>There’s a better way to grow.</h1>
              <h3>
                Marketing, sales, and service software that helps your business
                grow without compromise. Because “good for the business” should
                also mean “good for the customer.”
              </h3>

              <Button name="get a HubSpot Free" />
              <p>Get started with FREE tools, and upgrade as you grow.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
