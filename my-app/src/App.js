import React, { useState } from "react";
import { Input, Table, Button } from "antd";
import MyComponent from "./MyComponent";
import NextPage from "./NextPage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";

function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" render={props => <MyComponent {...props} />} />
      <Route path="/next" render={props => <NextPage {...props} />} />
    </BrowserRouter>
  );
}

export default App;
