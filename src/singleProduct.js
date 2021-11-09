import React from "react";

export default function singleProduct(props) {
  return (
    <React.Fragment>
      <div className="single">
        <h1>{props.product.title}</h1>
        <p>{props.product.desc}</p>
      </div>
    </React.Fragment>
  );
}
