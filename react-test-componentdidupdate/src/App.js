import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Test componentDidUpdate in ReactJS</h1>

      <TestComponentDidUpdate />
    </div>
  );
}

class TestComponentDidUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      showMessage: false
    };
  }

  // Similar to document.onReady in jQuery, executes once when the app loads:
  componentDidMount() {
   console.log("componentDidMount - START the Component for first time");
   console.log("Current State: " + JSON.stringify(this.state));
  }

  // Called when "state", "props", or "snapshot" change:
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate - CALLED when state, props, or snapshot change");
    console.log("componentDidUpdate - PrevProps Value: " + JSON.stringify(prevProps));
    console.log("componentDidUpdate - PrevState Value: " + JSON.stringify(prevState));
    console.log("componentDidUpdate - Snapshot: " + snapshot);

    // Only gets called when the previous state was empty:
    if(prevState.first_name === "") {
      console.log("Show Form");
      this.setState({ showMessage: true });
    } 
    
  }

  // Called when the input changes:
  changeFirstName = event => {
    console.log("changeFirstName - event.target.value: " + event.target.value);
    
    // Change the state's value, which will then call componentDidUpdate:
    this.setState({ first_name: event.target.value});
  }

  // Sample submission.
  handleSubmit = event => {
    console.log("handleSubmit -- Submitted...");
    console.log("handleSubmit -- Values from State: " + JSON.stringify(this.state));
  }

  render() {
   const { first_name, showMessage } = this.state;

    return (
     <div style={{'marginTop':'20px'}}>
      <form>
	 <input type="text" value={first_name} onChange={this.changeFirstName} placeholder="First Name" />
          <br />
	 <input type="button" onClick={this.handleSubmit} value="Submit" /> 
     </form>

     {showMessage && <div>Thanks. You are typing your name..</div>}
    </div>
   
  )};
}

export default App;
