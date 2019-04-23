import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import Tabs from "material-ui/Tabs";
import Tab from "material-ui/Tabs/Tab";

export default class extends Component {
  render() {
    return (
      <Paper>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
  }
}
