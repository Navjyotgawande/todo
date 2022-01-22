import React from 'react';
import './Todo.css';
const Todo =(props) =>{
    
  return(
   <div className='todoList'>
   <h3>{props.data}</h3>
   <button  className="btn btn-success complete" onClick={()=>{
       props.onSelect(props.id)
   }}>Completed</button>
   </div>
  )
}
export default Todo; 
