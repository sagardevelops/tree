import React from "react";
import "./App.css";
import treeData from "./DATA.json";
import Menu from "./Menu";

function App() {

  const menu = treeData.vpcs;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tree View</h1>
        <Menu items={menu} status={true}/>
      </header>
    </div>
  );
}

export default App;
