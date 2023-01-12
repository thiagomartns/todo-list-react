import React, { useEffect } from 'react'
import './input.scss'
import { BsPlusCircle } from 'react-icons/bs'

const Input = ({ newTask, setNewTask }) => {

  useEffect(() => {
    
  }, [])

  return (
    <div className='input'>
      <input type="text" placeholder='Adicione uma tarefa' onChange={(e) => setNewTask(e.target.value)} />
      <button className='inputBtn'>
        Criar
        <BsPlusCircle />
      </button>
    </div>
  )
}

export default Input