import React from "react";

function Services() {
  return (
    <div>
      <div id="service">
        <div id="spara">
          <h2>
            Learn and grow with award-winning support and a thriving community
            behind you.
          </h2>
          <p>
            You don't have to go it alone. Master the inbound methodology and
            get the most out of your tools with HubSpot's legendary customer
            support team and a community of thousands of marketing and sales
            pros just like you
          </p>
        </div>

        <div className="row ">
          <div className="col-lg-3 col-sm-6">
            <h5>Featured</h5>
            <i className="fa fa-handshake-o fa-4x" aria-hidden="true"></i>
            <div>
              <h2>150 +</h2>
              <p>HubSpot user groups</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h5>HubSport Blogs</h5>
            <div>
              <h2>7M +</h2>
              <p>monthly visits</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <i className="fa fa-graduation-cap fa-4x" aria-hidden="true"></i>
            <div>
              <h2>276K +</h2>
              <p>certified professionals</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <h5>INBOUND</h5>
            <div>
              <h2>26K </h2>
              <p>registered attendees</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <h5>HunSport App MarketPlace</h5>
            <div>
              <h2>500 +</h2>
              <p>integrations</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <i className="fa fa-globe fa-4x" aria-hidden="true"></i>
            <div>
              <h2>6 </h2>
              <p>languages</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <i className="fa fa-comments-o fa-4x" aria-hidden="true"></i>
            <div>
              <h2>2.6M+</h2>
              <p>social followers</p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 ">
            <i className="fa fa-users fa-4x" aria-hidden="true"></i>
            <div>
              <h2>86,000</h2>
              <p>customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row  justify-content-between">
          <div className="col-lg-4">
            <div className="content">
              <h1>Start Growing With HubSpot Today</h1>
              <h3>
                With tools to make every part of your process more human and a
                support team excited to help you, getting started with inbound
                has never been easier.
              </h3>

              <button type="button" className="btn btn-primary ">
                Get HubSport Free
              </button>
              <p>
                Get started with FREE tools, or get more with our premium
                software.
              </p>
            </div>
          </div>

          <div id="hubsport" className="col-lg-4">
            <img
              src="https://cdn2.hubspot.net/hubfs/53/assets/hubspot.com/_style-guide/sword-sprocket/Variation-2@2x.png"
              alt="img not found"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
