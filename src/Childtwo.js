import React, { Component } from 'react';

class Childtwo extends Component {
    static defaultProps = {
        messChildtwo: 'stranger'
    }

    render(){
        return(
            <p>{this.props.messChildtwo}</p>
        )
    }
}

export default Childtwo;