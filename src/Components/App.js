import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Contents from "./Contents";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contents />
        <Footer />
      </Fragment>
    );
  }
}
