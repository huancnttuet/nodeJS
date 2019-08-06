import React from "react";
import { Button } from "antd";

import "antd/dist/antd.css";

function MyComponent(props) {
  const goToNextPage = () => {
    props.history.push("/next");
  };
  return <Button onClick={goToNextPage}>Next</Button>;
}

export default MyComponent;
