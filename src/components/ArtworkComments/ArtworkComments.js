import React, { useEffect, useState, Fragment } from "react";
import "./style.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./partials/Header";
import Comment from './partials/Comment'
const ArtworkComments = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm" style={{ border: "1px solid rgba(0, 0, 0, 0.23)", paddingRight: "7px", paddingLeft: "7px" }}>
        <div className="gen_bg">
          {/* create a top bar */}
          <Header />
          <hr />
          <Comment />
        </div>
      </Container>
    </Fragment>
  );
};

export default ArtworkComments;
