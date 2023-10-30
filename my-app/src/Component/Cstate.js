import React, { Component } from 'react'

export default class Cstate extends Component {
    constructor() {
        super()
        this.state={
            name:'Ram'
        }
    }
    submit(){
        this.setState({
            name:'Sita'
        })
    }
    render() {
        return (
            <>
            <h1>classState</h1>
            <h2>{this.state.name}</h2>
            <button className='btn btn-info' onClick={()=>this.submit()} >Click me</button>
            </>

        )
    }
}
