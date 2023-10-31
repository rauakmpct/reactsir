import React, { useState } from 'react';
import {Form, Route,Routes} from 'react-router-dom'
import Footer from './Component/Layouts/Footer';
import Header from './Component/Layouts/Header';
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Updatevariable from './Component/Updatevariable';
import State from './Component/State';
import State1 from './Component/State1';
import Props from './Component/Props';
import Showhide from './Component/Showhide';
import Form1 from './Component/Form1';
import Form2 from './Component/Form2';
import User from './Component/User';
import Cstate from './Component/Cstate';
import Constructor from './Component/LifeCycleMethod/Constructor';
import ComponentDidMount from './Component/LifeCycleMethod/ComponentDidMount';
import ShouldComponentUpdate from './Component/LifeCycleMethod/ShouldComponentUpdate';
import UseState from './Component/Hooks/UseState';
import UseState1 from './Component/Hooks/UseState1';
import UseEffects from './Component/Hooks/UseEffects';
import UseEffect1 from './Component/Hooks/UseEffect1';
import UseEffect2 from './Component/Hooks/UseEffecct2';
import UseEffecct2 from './Component/Hooks/UseEffecct2';
import SendDataChildTo from './Component/Hooks/SendDataChildTo';
import UseMemo from './Component/Hooks/UseMemo';
import Ref from './Component/Hooks/Ref';
import GetApi from './Component/Hooks/GetApi';
import ArrayListingWithMapFunction from './Component/Hooks/ArrayListingWithMapFunction';
import ReUseComponent from './Component/Hooks/ReUseComponent';

function App() {
  const students = [
    { name: "anil", email: "ram@gmail.com", phone: "84651" },
    { name: "hima", email: "ram@gmail.com", phone: "84651" },
    { name: "sagar", email: "ram@gmail.com", phone: "84651" },
    { name: "rahu", email: "ram@gmail.com", phone: "84651" },
]
  const [title,setTitle] = useState('ram')
  // Parent Alert
  function Parentalert(data){
    console.log(data);
  }
  return (
   <>
  {/* <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   <Footer/> */}

   {/* <Updatevariable/> */}
   {/* <State/> */}
   {/* <State1/> */}
   {/* <Props title={title} phon='12345' />
   <button onClick={()=>{setTitle('rohit')}} >click me</button> */}
   {/* <Showhide/> */}
   {/* <Form1/> */}
   {/* <Form2/> */}
   {/* <User name='Ram'/> */}
   {/* <Cstate/> */}
   {/* <Constructor/> */}
   {/* <ComponentDidMount/> */}
   {/* <ShouldComponentUpdate/> */}
   {/* <UseState/> */}
   {/* <UseState1/> */}
   {/* <UseEffects/> */}
   {/* <UseEffect1/> */}
   {/* <UseEffecct2/> */}
   {/* <GetApi/> */}
   {/* <ArrayListingWithMapFunction/> */}
   {/* {
    students.map((data)=>
    <ReUseComponent item={data} />
    )
   } */}
   {/* <SendDataChildTo alert={Parentalert}/> */}
   {/* <UseMemo/> */}
   <Ref/>
   </>
  );
}

export default App;
