import React from "react";
import logo from "./logo.svg";
import "./App.css";
const Start = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
            Deployed online
          </li>{" "}
          <li></li>
        </ul>
      </header>
    </div>
  );
};

export default Start;
