import React from 'react'

export const ShowTask = ({taskList,setTaskList,task,setTask}) => {

  const deleteTask = (id) => {
    const updateTaskList = taskList.filter(todo => todo.id !== id);
    setTaskList(updateTaskList);
  }

  
  const editTask = (id) => {
   const selectedTask = taskList.find(todo => todo.id === id);
   setTask(selectedTask);
  }

  return (
        <section className='showTask'>
               <div className='head'>
                    <div>
                        <span className='title'>Todo</span>
                        <span className='count'>{taskList.length}</span>
                    </div>
                    <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
                </div> 
                <ul>
                    {taskList && taskList.map((task) => (
                        <li key={task.id}>
                        <p>
                            <span className='name'>{ task.name}</span>
                            <span className='time'>{ task.time}</span>
                        </p>
                        <i onClick={() => editTask(task.id)} className='bi bi-pencil-square'></i>
                        <i onClick={() => deleteTask(task.id)} className='bi bi-trash'></i>
                        </li>

                    ))}
                </ul>

        </section>
    )
}
