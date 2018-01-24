import React, { Component } from 'react';

class First extends Component {

    componentWillMount(){
        console.log('before f');
    }

    componentDidMount(){
        console.log('after f');
    }

    render() {
        return(
            <div>hello i am first</div>
        )
    }
}

export default First;