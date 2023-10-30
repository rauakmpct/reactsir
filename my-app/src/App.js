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

function App() {
  const [title,setTitle] = useState('ram')
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
   <UseEffecct2/>
   </>
  );
}

export default App;
