
import {Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './component/Navbar';
import ColorPicker from './component/ColorPicker';
import ToDoList from './component/ToDoList';
import FormSubmit from './component/FormSubmit';
import LocalStorage from './component/LocalStorage';
import SignIn from './component/SignIn';


function App() {

  const [btn , setBtn] = useState(true);
  const [btn1, setBtn1] = useState(true);
  const [text,setText] = useState(true);


  function toggle(){
    if(text){
      return setText(false);
    }
    else{
      return setText(true);
    }
  }

  function check(){
    if(btn){

      setBtn(false);
    }
    else{
      setBtn(true);
    }
  }

  function change1(){
    if(btn1){
      setBtn1(false)
    }
    else{
      setBtn1(true)
    }
  }


  return (
 
     <>
     <Navbar/>
     <Routes>
  
    <Route path='/colorpicker' element={<ColorPicker/>}/>
    <Route path = '/todolist' element={<ToDoList/>} />
    <Route path = '/formsubmit' element={<FormSubmit/>} />
    <Route path='/localstorage' element={<LocalStorage/>}/>
    <Route path='/signin' element={<SignIn/>}/>
      </Routes>
     
     <div className='bg-red-300  hidden'>

     <h1>HELLO THIS IS PRACTICE</h1>
     <h1>Yes, it is also practice</h1>

     {btn?<button className='btn'>True</button>: <button className='btn1'>False</button>}<br></br>

     <button onClick={check}>Toggle</button>
     <br></br>
     <button onClick={change1}>{btn1? "TRUE" : "FALSE"}</button>
     <br>
     </br>
     <button onClick={toggle} className='btn'>{text}</button>
           
     </div>




     
     </>
  );
}

export default App;
