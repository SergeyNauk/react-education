import React, { Component } from 'react';
import Child from './Child';

class Update extends Component {
    constructor(props){
        super(props);
        this.state = {userNick: 'hallo'};
    }

    updateState(){
       this.setState({userNick: this.myInput.value});
        setTimeout(()=>{console.log(this.state.userNick)},100);

    }

    render() {
        return(
            <div>
                <input
                    value={this.state.userNick}
                    type="text"
                    placeholder="update"
                    onChange={this.updateState.bind(this)}
                    ref = {(input)=>{this.myInput=input}}
                />
                <Child childMessage = {this.state.userNick} />
            </div>
        )
    }
}

export default Update;