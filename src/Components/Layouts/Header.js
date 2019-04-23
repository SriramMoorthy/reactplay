import React, { Component, Fragment } from "react";
import { AppBar } from "material-ui";
import { Toolbar } from "material-ui";

export default class extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>CASM Portal</Toolbar>
      </AppBar>
    );
  }
}
