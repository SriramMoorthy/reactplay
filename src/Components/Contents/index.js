import React, { Component } from "react";
import Grid from "material-ui/Grid";

import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 20 }
};

export default class extends Component {
  render() {
    return (
      <Grid container>
        <LeftPane styles={styles} />
        <RightPane styles={styles} />
      </Grid>
    );
  }
}
