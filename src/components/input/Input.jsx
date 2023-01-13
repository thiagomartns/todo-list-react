import React, { useEffect } from 'react'
import './input.scss'
import { BsPlusCircle } from 'react-icons/bs'

const Input = ({ newTask, setNewTask, tasksArray, setTasksArray }) => {

  const handleClick = () => {
    if (newTask) {
      setTasksArray([...tasksArray, newTask])
      setNewTask('')
    }
  }

  return (
    <div className='input'>
      <input type="text" placeholder='Adicione uma tarefa' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button className='inputBtn' onClick={handleClick}>
        Criar
        <BsPlusCircle />
      </button>
    </div>
  )
}

export default Input