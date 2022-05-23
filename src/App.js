import React from "react";
import TaskHeader from "./components/TaskHeader/TaskHeader";
import AddTask from "./components/AddTask/AddTask"

function App() {
  return <div>{<TaskHeader></TaskHeader>}
  {<AddTask></AddTask>}
  
  
  </div>;
}

export default App;
