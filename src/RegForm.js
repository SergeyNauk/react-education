import React, { Component } from 'react';

class RegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {email: ''}
    }

    handleSubmit(event){
        event.preventDefault();
       /* console.log('submit' + ' '+ this.state.email);*/
    }

    handleEmail(event) {
        console.log('email change');
        this.setState({email: event.target.value})
    }

    componentWillMount(){
        console.log('before');
    }

    componentDidMount(){
        console.log('after');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                    onChange={this.handleEmail.bind(this)}
                />
                <button>save</button>
            </form>
        )

    }
}

export default RegForm;