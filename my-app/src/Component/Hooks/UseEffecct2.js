import React,{useEffect,useState} from 'react'

function UseEffecct2() {

       const [content, setContent] = useState('posts')
       const [count, setCount] = useState(0)
       const [items, setItems] = useState([])
       useEffect(()=>{
              console.log('api')
              fetch('https://jsonplaceholder.typicode.com/'+content)
              // https://jsonplaceholder.typicode.com/posts
              .then(response => response.json())
              // .then(json => console.log(json))
              .then(json =>setItems(json))
              console.log("ComponentDidUpdate")
       },[content])
       // console.log('items')

  return (
    <>
    <button onClick={()=> setContent('posts')}>Posts</button>
    <button onClick={()=> setContent('users')}>Users</button>
    <button onClick={()=> setContent('comments')}>comments</button>
    <h1>{content}</h1>
    <button onClick={()=> setContent('count + 1')}>count {count}</button>
    <ul>
       <li>
              {
                     items.map((data)=>{
                            return <li key={data.id}>{data.id}</li>
                     })
              }
       </li>
    </ul>



      
    </>
  )
}

export default UseEffecct2