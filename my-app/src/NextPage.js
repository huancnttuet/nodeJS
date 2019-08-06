import React from "react";
import { Button } from "antd";
function NextPage(props) {
  const goToBackPage = () => {
    props.history.push("/");
  };
  return (
    <>
      <div>Next Page</div>
      <Button onClick={goToBackPage}>Back</Button>
    </>
  );
}

export default NextPage;
