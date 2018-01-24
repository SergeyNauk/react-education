import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PTypes extends Component {

    static propTypes = {
    message: PropTypes.string
    };

    render() {
        return(
            <div>{this.props.message}</div>
        );
    }
}

export default PTypes;