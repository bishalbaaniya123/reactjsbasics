import React from 'react';

const Apple = () => {
    return (<div>
        This is from apple <p>This is paragraph from apple</p>
    </div>);
};
const Mango = () => {
    return (<div>This is a mango</div>);
};

class SayHello extends React.Component {
    constructor(props) {
        super();
        var list = [1, 2222, 22];
        var x = 0;
        if (x == 0) {
            x = "x is zero";
        } else {
            x = "x is one";
        }
        this.state = {
            message: 'Hello!',
            x: x,
            randomNo1: Math.floor((Math.random() * 100) + 1),
            randomNo2: Math.floor((Math.random() * 100) + 1),
            playerOneWins : 0,
            playerTwoWins : 0
        };
        // This line is important!
        // this.handleClick = this.handleClick.bind(this);
        this.randomlyHandleClick = this.randomlyHandleClick.bind(this);
    }

    handleClick() {
        this.setState({x: 1});
        console.log(this.state.x);
    }

    randomlyHandleClick() {
        this.setState({randomNo1: Math.floor((Math.random() * 100) + 1)});
        this.setState({randomNo2: Math.floor((Math.random() * 100) + 1)});
        var difference = Math.abs(this.state.randomNo1 - this.state.randomNo2);
        if (this.state.randomNo1 > this.state.randomNo2) {
            this.setState({playerOneWins : this.state.playerOneWins + 1});
            console.log("Player 1 wins with score " + this.state.randomNo1 + " when Player 2 had " + this.state.randomNo2 + "with a difference of " + difference);
        }
        else {
            this.setState({playerTwoWins : this.state.playerTwoWins + 1});
            console.log("Player 2 wins with score " + this.state.randomNo2 + " when Player 1 had " + this.state.randomNo1 + "with a difference of " + difference);

        }
        console.log("Player one has won " + this.state.playerOneWins + " Times and Player two has won " + this.state.playerTwoWins + " times");
        if (this.state.playerOneWins || this.state.playerTwoWins > 10){
            console.log("Someone has won!!!!!!");
        }
    }

    render(){
        // Because `this.handleClick` is bound, we can use it as an event handler.
        return (
            <button onClick={this.randomlyHandleClick}>
                Say hello
            </button>
        );
    }
}


export {Apple, Mango, SayHello};