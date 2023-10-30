import React, { Component } from 'react'

export default class ShouldComponentUpdate extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Ram'
        }
        console.log('constructor')
    }
    submit() {
        this.setState({
            name: 'Sita',
            count:0
        })
    }
    componentDidMount() {
        console.log('Hello ComponentDidMount')    //  when load state or props  and use for API 
    }
    componentDidUpdate() {
        console.log('Hello ComponentDidUpdate')  //  when update state or props 
    }
    shouldComponentUpdate(){
        console.log('Hello ShouldComponentUpdate')
        return false;
    }
    render() {
        console.log('render')
        return (

            <>
                <h1>Constructor {this.state.name}</h1>
                <button className='btn btn-info' onClick={() => this.submit()} >Click me</button>
            </>


        )
    }
}

