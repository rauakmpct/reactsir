import React, { useEffect, useState } from 'react'

function UseEffect1() {
       const [content, setContent] = useState('posts')
       const [count, setCount] = useState(0)
       const [item, setItems] = useState([])

       useEffect(() => {
              console.log('ComponentDidMount') //jab component load hota hai
       }, [])

       useEffect(() => {
              console.log('ComponentDidupdate') //jab component load hota hai
       }, [count])

       useEffect(() => {
              console.log('api call') //  api call ke liye
       }, [count])

       fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then((response) => response.json())
              .then((json) => console.log(json))


       return (
              <>
              <h1>Get all data api</h1>
              </>
       )
}

export default UseEffect1