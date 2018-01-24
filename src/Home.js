import React, { Component } from 'react';
import Props from './Props';
import './Home.css';

const sax = 'men';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { nameUser: 'Vasya', surnameUser: 'ChrenZnaetKto'};
    }

    showNameUser() {
        this.setState({nameUser: 'Vasya Pupkin'});
        this.consL();
    }

    consL(){
        console.log(this.state.nameUser + ' ' + this.state.surnameUser);
    }

    render() {
        console.log(this.props.homeMess);
        let newDiv;
         newDiv = <div>hello new div</div>;
        return (
            <div className="homeClass" onClick={this.showNameUser.bind(this)}>
                hello {this.state.nameUser} home component click {newDiv} <Props item={this.state.surnameUser} userSax={sax} />
                </div>
        )
    }
}

export default Home;