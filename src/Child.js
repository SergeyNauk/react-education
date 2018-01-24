import React, { Component } from 'react';
import Childtwo from './Childtwo';

class Child extends Component {
    constructor(props){
        super(props);

    }

    exportDefault(){
       this.setState({
           defProp: 'i am a string'
       });
    }

    componentDidUpdate(){
        console.log('-------------', this.props.childMessage);
    }

    componentWillReceiveProps(){
        console.log('i am ready');
    }



    render() {
        return(
            <div>{this.props.childMessage}
                <button onClick={this.exportDefault.bind(this)}>Default prop</button>
                <Childtwo />
            </div>
        )
    }
}

export default Child;