import React, {Component} from 'react';

class Ball extends Component
{
    render()
    {
        return (
            <div>This is from ball</div>
        );
    }
}
class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
Greeting.defaultProps = {name: "Mary"};
export {Ball, Greeting};