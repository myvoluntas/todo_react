import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoItems from "./components/TodoItem/TodoItems";
import Modal from "./components/Modal/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TodoItems />
        <Modal />
        <p>Hello</p>
      </>
    );
  }
}

export default App;
