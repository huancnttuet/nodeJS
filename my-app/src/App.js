import React, { useState } from "react";
import { Input, Table, Button } from "antd";
import "./App.css";
import "antd/dist/antd.css";
var nameSets = [];
var dataSource = [];
function App() {
  const [name, setName] = useState("");
  const [change, setChange] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  const handleSubmit = () => {
    nameSets.push(name);
    //data mapping dataTable
    nameSets.map((value, index) => {
      dataSource[index] = { key: index, name: value };
    });
    setChange(true);
  };
  return (
    <div className="App">
      {change ? (
        <Table dataSource={dataSource} columns={columns} />
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}

      <Input
        placeholder="name"
        onChange={e => {
          setName(e.target.value);
          setChange(false);
        }}
      />
      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default App;
