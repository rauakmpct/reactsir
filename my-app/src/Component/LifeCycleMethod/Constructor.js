import React, { Component } from 'react'

export default class Constructor extends Component {
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
    console.log('render')
    return (
      <>
      <h1>Constructor {this.state.name}</h1>
      <button className='btn btn-info' onClick={()=>this.submit()} >Click me</button>

      </>
    )
  }
}
