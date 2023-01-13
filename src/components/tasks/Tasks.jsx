import React from 'react'
import './tasks.scss'
import { BsTrash } from 'react-icons/bs'

const Tasks = ({ newTask, setNewTask, tasksArray, setTasksArray }) => {

  const deleteTask = (index) => {
    setTasksArray(tasksArray.filter((task, i) => i !== index))
  }

  return (
    <div className='tasks'>
      <div className="tasksCounter">
        <div className="tasksCreated">
          <p>Tarefas Criadas</p>
          <span className='counterSpan'>{tasksArray.length}</span>
        </div>
        <div className="tasksCompleted">
          <p>Concluídas</p>
          <span className='counterSpan'>0 de {tasksArray.length}</span>
        </div>
      </div>
      <div className="tasksAppContainer">
        {tasksArray.length === 0 && 
          <div className="emptyTasksContainer">
            <img src="/assets/img/ClipBoard.svg" alt="" />
            <p className='noTask-1'>Você ainda não tem tarefas cadastradas</p>
            <p className='noTask-2'>Crie tarefas e organize seus itens a fazer</p>
          </div>}
        {tasksArray.length > 0 &&
          <div className='tasksContainer'>
            {tasksArray.map((task, index) => (
              <div key={index} className='tasksContainerItem'>
                <input type="radio" />
                <p>{task}</p>
                <BsTrash className='icon' onClick={() => deleteTask(index)} />
              </div>
          ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Tasks