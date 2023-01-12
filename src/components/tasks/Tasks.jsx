import React from 'react'
import './tasks.scss'

const Tasks = () => {
  return (
    <div className='tasks'>
      <div className="tasksCounter">
        <div className="tasksCreated">
          <p>Tarefas Criadas</p>
          <span className='counterSpan'>0</span>
        </div>
        <div className="tasksCompleted">
          <p>Concluídas</p>
          <span className='counterSpan'>0</span>
        </div>
      </div>
      <div className="tasksAppContainer">
        <div className="emptyTasksContainer">
          <img src="/assets/img/ClipBoard.svg" alt="" />
          <p className='noTask-1'>Você ainda não tem tarefas cadastradas</p>
          <p className='noTask-2'>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}

export default Tasks