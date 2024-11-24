import React from "react";
import Gallery from "./cont/Gallery";
import List from "./cont/List";
import PackingList from "./cont/PackingList";
import Profile from "./cont/Profile";
import TeaGathering from "./cont/TeaGathering";
import TeaSet from "./cont/TeaSet";
import TodoList from "./cont/TodoList";
import "./Atv03.scss";

const Atv03Component = () => {
  return (
    <div className="body">
      <div className="component">
        <h2>Gallery component</h2>
        <Gallery />
      </div>
      <div className="component">
        <h2>List component</h2>
        <List />
      </div>
      <div className="component">
        <h2>PackingList component</h2>
        <PackingList />
      </div>
      <div className="component">
        <h2>Profile component</h2>
        <Profile />
      </div>
      <div className="component">
        <h2>TeaGathering component</h2>
        <TeaGathering />
      </div>
      <div className="component">
        <h2>TeaSet component</h2>
        <TeaSet />
      </div>
      <div className="component">
        <h2>TodoList component</h2>
        <TodoList />
      </div>
    </div>
  );
};

export default Atv03Component;
