import React from 'react';
import RandomJokeDumbComp from './RandomJokeDumbComp';
class RandomJokeSmartComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: 'Ashish', lastName: 'Jha', joke: '' }
    }

    componentDidMount() {
        fetch(`http://api.icndb.com/jokes/random?firstName=${this.state.firstName}&lastName=${this.state.lastName}`).then((res) => res.json().then((data) => { console.log("data", data["value"]); this.setState({ ...this.state, joke: data.value.joke }) }))
    }
    render() {
        const {joke} = this.state;
        return (
            <div>
                Smart Component
                <br />
                <RandomJokeDumbComp joke={joke} />
            </div>
        )
    }
}
export default RandomJokeSmartComp;