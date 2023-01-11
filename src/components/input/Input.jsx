import React from 'react'
import './input.scss'
import { BsPlusCircle } from 'react-icons/bs'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Adicione uma tarefa' />
      <button className='inputBtn'>
        Criar
        <BsPlusCircle />
      </button>
    </div>
  )
}

export default Input