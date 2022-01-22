import react, { useState } from "react";
import Todo from "./Todo";
import "./App.css";
const App = () => {
  const [showTask, setShowTask] = useState();
  const [task, setTask] = useState([]);

  const changeInputHandler = (e) => {
    setShowTask(e.target.value);
  };
  const listOfTask = (e) => {
      e.preventDefault();
    setTask((oldArr) => {
      return [...oldArr, showTask];
    });
    setShowTask("");
  };
  const deleteTask = (id)=>{
   setTask((oldArr)=>{
     return oldArr.filter( (arr , index)=>{
         return(index !== id);
     })
   })
}
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <form className="addTask" >
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Enter a quick task"
            onChange={changeInputHandler}
            value={showTask}
          />
          <button
            type="submit"
            className="btn btn-success"
            onClick={listOfTask}
          >
            Add
          </button>
        </form>
      </div>
      <div>
        {task.map((item ,index) => {
          return (
            <Todo data={item} key={index} id={index} onSelect ={deleteTask}/>
              );
        })}
      </div>
    </div>
  );
};
export default App;
