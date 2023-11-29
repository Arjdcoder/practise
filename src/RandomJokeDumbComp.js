import React from "react";
import PropTypes from 'prop-types';
class RandomJokeDumbComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { joke } = this.props;

        return (
            <div>
                Dumb component
                <br />
                {joke}
            </div>
        )
    }
}

RandomJokeDumbComp.defaultProps= {
    joke: 'A random joke'
}
RandomJokeDumbComp.propTypes = {
    joke: PropTypes.string
}
export default RandomJokeDumbComp;