import React, { Component } from 'react';
import {Apple, Mango, SayHello} from "./components/Apple";
import {Ball, Greeting} from "./components/Ball";

class App extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            level: 1,
            roll_no: "This is the roll no"
        }
    }
    componentDidMount(){
     console.log("This is from did", this.state.level + 100);
     console.log("This is from did", this.state.roll_no + " " + this.state.level);
    }
    componentWillMount(){
     console.log("This is from will");
    }
    render(){
        return(
        <div>
            <Apple/><Mango/><Ball/><Greeting/><SayHello/>
            This is a div
        </div>
        );
    }
}

export default App;
