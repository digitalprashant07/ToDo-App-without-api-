import React, { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import UpdateTask from './Components/UpdateTask';
import ToDo from './Components/ToDo';


function App() {

  const [toDo, setToDo] = useState([ 
    {
      id:1, title:"Learn Javascript", status:false,
    },
    {
      id:2, title:"Focus on Tasks", status:false,
    },
    {
      id:3, title:"Be consistent", status:false,
    },
    {
      id:4, title:"Learn Daily", status:false,
    },
    {
      id:5, title:"CRUD operation", status:false,
    },
  ]);

  const [newTask, setNewTask] = useState('');



  const [updateData, setUpdateData] = useState('');

  //add task here
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  };

  //delete task here
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
  };

  //markdone task
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  };

  //cancel update task
  const cancelUpdate = () => {
    setUpdateData('');
  };

  //change task
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  };

  // update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData('');
  };

  return (
    <div className=" container App">
      <br></br>
      <h2 className='__h2'>Microsoft To Do</h2>
      <br></br>

      {/* update task */}

      {updateData && updateData ? (
        <UpdateTask
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTask
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

      )}



      {toDo && toDo.length ? '' : 'No Tasks...'}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />

    </div>
  );
}

export default App;
