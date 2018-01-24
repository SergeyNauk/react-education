import React, { Component } from 'react';

class Ref extends Component {
    submit() {
        console.log('submited ref', this.testInput.value);
    }

    render() {
        return(
            <div>
                <input
                    type="text"
                    placeholder="test"
                    ref = {(input)=>{this.testInput = input}}
                />
                <button onClick={this.submit.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default Ref;