import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from '@material-ui/core/Button'
import { Link, Redirect } from 'react-router-dom'
const Start = () => {
  const [redirect, setRedirect] = useState(false)
  return (


    <div className="App">
      { redirect ? <Redirect to='/comments' /> : null
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
      <div className="content">
        <h1>Requirements</h1>
        <ul>
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component is built using React.js
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component uses ES6 syntax and features
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Component is built as a Functional Component
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Uses React Hooks
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Comments are ordered in reverse chronological order (newest comments
            first).
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Ability to mark comments as "seen" / acknowledged
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            If there are unseen comments the button is blue
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Once all comments are marked as "seen" / acknowledged the button
            returns to its default state
          </li>{" "}
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Deployed online on EC2 AWS served by Nginx server
          </li>{" "}
          <li></li>
        </ul>
        <ul>
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            A unseen comment count bubble/icon
          </li>
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Simple and elegant animation
          </li>{" "}
          <li></li>
        </ul>
        <ul>
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Used Context API to manage master state. 
          </li>
          <li>
            <input
              type="checkbox"
              checked
              onChange={() => {
                return;
              }}
            />
            Mobile first UI
          </li>
         
        </ul>
        <Button variant="contained" color="secondary" onClick={() => { setRedirect(true) }} >Comments</Button>
      </div>
    </div>
  );
};

export default Start;
