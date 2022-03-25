import React from 'react'
import BaseInput from './BaseInput'
import { InputProps } from './Input.types'
import "./input.css"


const Input = (props: InputProps) => {
  return (
    <div className='input-container'>
      <BaseInput />
    </div>
  )
}

export default Input
