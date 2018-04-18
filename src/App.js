import React, {Component} from 'react';
import Mapple from './components/Mapple'
import {Apple, Mango, SayHello} from "./components/Apple";
import {Ball, Greeting} from "./components/Ball";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Badge } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            level: 1,
            roll_no: "This is the roll no"
        }
    }

    componentDidMount() {
        console.log("This is from did", this.state.level + 100);
        console.log("This is from did", this.state.roll_no + " " + this.state.level);
    }

    componentWillMount() {
        console.log("This is from will");
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Heading <Badge color="success">New</Badge></h1>
                    <h2>Heading <Badge color="secondary">New</Badge></h2>
                    <h3>Heading <Badge color="secondary">New</Badge></h3>
                    <h4>Heading <Badge color="secondary">New</Badge></h4>
                    <h5>Heading <Badge color="secondary">New</Badge></h5>
                    <h6>Heading <Badge color="secondary">New</Badge></h6>
                </div>
            </div>
        );
    }
}

export default App;
