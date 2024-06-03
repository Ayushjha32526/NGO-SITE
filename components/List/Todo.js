"use client"

import "./List.css"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from  "./List.js";
import { ListItem } from '@mui/material';

function App() {
const [text , settext]= useState(" ")
const [todolist , settodolist] = useState("")


function handlesubmit  (event) {
    event.preventDefault();
   console.log(text); 
   settext(event.target.value)
}

const additem = (event) =>{
 const newTodoItem ={
   id:uuidv4(),
   item:text,
   completed:false
 }
 settodolist([...todolist,newTodoItem])
 settext("")
}

const handleToggle =(itemId) => {
 const newTodoList = todolist.map((ListItem)=>{
  if (ListItem.id===itemId){
    return {...ListItem,completed:!ListItem.completed}
  }
  return ListItem;
 })
 settodolist(newTodoList)
}

const handleDelete = (itemId) => {
  const newTodoList = todolist.filter((ListItem)=>
    ListItem.id!==itemId)
    settodolist(newTodoList)
  }



  return (
 <div className='App'>
  <h1>Reviews</h1>
  <div className='adder'>
    <input onChange={handlesubmit}
    type='text' placeholder='Give Us Ur Reviews'
    value={text} />
 <span onClick={additem}>+</span>
  </div>
  <List todolist={todolist} handleToggle={handleToggle} handleDelete={handleDelete}></List>
 </div>
  );
}

export default App;
