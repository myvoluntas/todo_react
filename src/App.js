import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal/Modal";
import TodoInput from "./components/Modal/TodoInput/TodoInput";
import ColorPicker from "./components/Modal/ColorPicker/ColorPicker";

class App extends Component {
  state = {
    todoText: '',
    todoDate: '',
    todoTime: '',
    todo: [],
    colour: {
      headerIsActive: true,
      bodyIsActive: false
    },
    headerColour: '#000',
    bodyColour: '',
    modal: {
      modalTodoIsActive: false,
      modalColourIsActive: false
    }
  };
  
  handleColourHead = () => {
    let colourCopy = {...this.state.colour};
    colourCopy.headerIsActive = true;
    colourCopy.bodyIsActive = false;
    this.setState({colour: colourCopy})
  };

  handleColourBody = () => {
    let colourCopy = {...this.state.colour};
    colourCopy.headerIsActive = false;
    colourCopy.bodyIsActive = true;
    this.setState({colour: colourCopy})

  };

  setHeaderColour = () => {
    let headerColourCopy = this.state.headerColour;
    headerColourCopy = ''
    this.setState({headerColour: headerColourCopy})
  }


  /* handleColourArea = (e) => {
    let colourCopy = {...this.state.colour};
    if (e.target.id === "colourYourHeader"){
    colourCopy.headerIsActive = true;
    colourCopy.bodyIsActive = false;
    } else if (e.target.id === "colourYourBody"){
      colourCopy.headerIsActive = false;
      colourCopy.bodyIsActive = true;    
    };
    this.setState({colour: colourCopy})
  }; */

  handleModalTodo = () => {
    let modalCopy = { ...this.state.modal }; // {modalTodoIsActive: false, modalColourIsActive: false}
    if (modalCopy.modalTodoIsActive) {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    } else {
      modalCopy.modalTodoIsActive = !modalCopy.modalTodoIsActive;
      this.setState({ modal: modalCopy });
    }
  };


  handleModalColour = () => {
    let modalColourCopy = { ...this.state.modal };
    if (modalColourCopy.modalColourIsActive) {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({modal: modalColourCopy});
    } else {
      modalColourCopy.modalColourIsActive = !modalColourCopy.modalColourIsActive;
      this.setState({modal: modalColourCopy});
    }
  };


  render() {
    const displayTodoInput = (
    <Modal>
      <TodoInput 
      handleModalTodo={this.handleModalTodo} // For the Modal (TodoInput) close button
      />
      </Modal>)

    const displayColorPicker = (
    <Modal>
      <ColorPicker 
      headColourProp={this.state.colour.headerIsActive}
      bodyColourProp={this.state.colour.bodyIsActive}
      defaultHeaderColor={this.state.headerColour}
      bodyColourChange={this.handleColourBody}  // Makes the BODY colour options show
      headColourChange={this.handleColourHead} // Makes the HEAD colour options show
      handleModalColour={this.handleModalColour}  // For the Modal (ColorPicker) close button
      /* handleColourArea={this.handleColourArea} */
      />
      </Modal>)
    let displayModal =
    this.state.modal.modalColourIsActive ? displayColorPicker  
    : this.state.modal.modalTodoIsActive ? displayTodoInput
    : null

    
    return (
      <>
        <Navbar 
        setHeaderColour={this.setHeaderColour} // To set the default colour of the header
        defaultHeaderColor={this.state.headerColour}
        handleModalTodo={this.handleModalTodo} // For the Modal (TodoInput) to show
        handleModalColour={this.handleModalColour} // For the Modal (ColorPicker) to show
        />
        {displayModal}
      </>
    );
  }
}

export default App;