import React, { Fragment } from "react";
import "./App.css";

//Import Components
import Button from "./components/layout/Button";
import Title from "./components/layout/Title";
import Menu from "./components/layout/Menu";

const App = () => {
  return (
    <Fragment>
      <Button></Button>
      <Title></Title>
      <Menu></Menu>
    </Fragment>
  );
};

export default App;
