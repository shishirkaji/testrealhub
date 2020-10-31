import React, { useEffect, useState, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import "./style.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./partials/Header";
const ArtworkComments = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="gen_bg">
          {/* create a top bar */}
          <Header />
        </div>
      </Container>
    </Fragment>
  );
};

export default ArtworkComments;
