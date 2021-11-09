import React, { Component } from "react";
import { data } from "./data";
import ProductList from "./ProductList";
import "./App.css";

export default class App extends Component {
  state = {
    products: data,
    productCopy: data,
    btns: ["All", "javascript", "react", "angular"],
  };

  // filtering button functionality
  handleBtns = (e) => {
    console.log(e.target.value);
    let productCopy;

    if (e.target.value === "All") {
      productCopy = this.state.products;
    } else {
      productCopy = this.state.products.filter((item) => item.cat === e.target.value);
    }

    this.setState({
      productCopy: productCopy,
    });
  };

  render() {
    return (
      <div>
        <ProductList products={this.state.productCopy} handleBtns={this.handleBtns} btns={this.state.btns} />
      </div>
    );
  }
}
