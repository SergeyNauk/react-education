import React, { Component } from 'react';

class Newtest extends Component {
    constructor(props){
        super(props);
        this.state = ({ arrLinks: [
            {path: '#1',
                value: 'linkOne'},
            {path: '#2',
                value: 'linkTwo'},
            {path: '#3',
                value: 'linkTree'}
        ]})
    }

   /* componentDidMount(){
        this.state.arrLinks.map((elem, number) => {
            <a href=elem.path key=number>elem.value</a>
        });
    }*/

    render(){
        return(
            <div>
            {this.state.arrLinks.map((elem, number) => {
               return <a href={elem.path} key={number}>{elem.value}</a>
            })}
            </div>
        )
    }
}

export default Newtest;