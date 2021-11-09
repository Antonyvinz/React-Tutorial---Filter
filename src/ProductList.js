import React from "react";
import SingleProduct from "./singleProduct";

export default function ProductList(props) {
  return (
    <React.Fragment>
      <div className="btns">
        {/* Static Way */}
        {/* <button value="All" onClick={props.handleBtns}>
          All
        </button>
        <button value="javascript" onClick={props.handleBtns}>
          Javacscript
        </button>
        <button value="react" onClick={props.handleBtns}>
          React
        </button>
        <button value="angular" onClick={props.handleBtns}>
          Angular
        </button> */}

        {/* Dynamic Way */}
        {props.btns.map((btn, index) => {
          return (
            <button ket={index} value={btn} onClick={props.handleBtns}>
              {btn}
            </button>
          );
        })}
      </div>

      <div className="products-center">
        {props.products.map((product) => {
          return <SingleProduct key={product.id} product={product} />;
        })}
      </div>
    </React.Fragment>
  );
}
