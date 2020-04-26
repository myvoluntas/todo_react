import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TodoItems from "./components/TodoItem/TodoItem";
import Modal from "./components/Modal/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <TodoItems />
        </div>
        <Modal />
        <p>Hello</p>
      </>
    );
  }
}

export default App;
