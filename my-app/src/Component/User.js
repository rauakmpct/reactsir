import React, { Component } from 'react'

export default class User extends Component {
  render() {
    console.log(this.props)
    return (
        <>
        <h1>class Component</h1>
        <h1>{this.props.name}</h1>
        </>
    )
  }
}
