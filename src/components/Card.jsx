import React from "react";
import Button from "./Button";
function Card(props) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.content}</p>
          <hr />
          <h6>POPULAR FEATURES</h6>
          <ul>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              {props.popular[0]}
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              {props.popular[1]}
            </li>
            <li>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
              {props.popular[2]}
            </li>
          </ul>
          <Button name="Go SomeWhere" />
        </div>
      </div>
    </div>
  );
}

export default Card;
