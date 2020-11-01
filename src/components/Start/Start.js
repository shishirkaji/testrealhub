import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
const Start = () => {
  let history = useHistory();
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div className="content">
        <div style={{ display: "flex", justifyContent: "center" }}><h1>Requirements</h1></div>
        <ul>
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component is built using React.js
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component uses ES6 syntax and features
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component is built as a Functional Component
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Uses React Hooks
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Comments are ordered in reverse chronological order (newest comments
            first).
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Abipty to mark comments as "seen" / acknowledged
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            If there are unseen comments the button is blue
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Once all comments are marked as "seen" / acknowledged the button
            returns to its default state
          </p>{" "}
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Deployed online on EC2 AWS served by Nginx server
          </p>{" "}
        </ul>
        <ul>
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            A unseen comment count bubble/icon
          </p>
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Simple and elegant animation
          </p>{" "}

        </ul>
        <ul>
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Used Context API to manage master state.
          </p>
          <p>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Mobile first UI
          </p>
        </ul>

      </div>
      <div style={{ display: "flex", justifyContent: "space-between", paddingLeft : "50px" , paddingRight : "50px", backgroundColor: "#282c34", paddingBottom: "32px" }}>
        <div> <Button variant="contained" color="secondary" href = "https://github.com/shishirkaji/testrealhub.git" target="_blank">Code</Button>
        
        </div>
        <div> <Button variant="contained" color="secondary" onClick={() => {
          history.push('/comments')
        }} >Comments</Button> </div></div>
    </React.Fragment>
  );
};

export default Start;
