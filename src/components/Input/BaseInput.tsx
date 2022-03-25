import React from 'react'



const BaseInput = ({type = "text", ...props}:any) => {
  return (
    <input className='input-base' type={type} {...props} />
  )
}

export default BaseInput
