import React, { Component } from 'react';
import Apple from "./components/Apple";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            level: "This is the level 1",
        }
    }
    componentDidMount(){
     console.log("This is from did", this.state.level);
    }
    componentWillMount(){
     console.log("This is from will");
    }
  render() {
    return (
      <div >
          <Apple text="hello apple" test="test"></Apple>
      </div>
    );
  }
}

export default App;
