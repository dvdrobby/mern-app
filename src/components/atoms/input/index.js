import React from 'react'

function Input({title, ...rest}) {
  return (
    <>
        <span className='input-group-text'>{title}</span>
        <input id={title} {...rest} />
    </>
  )
}

export default Input