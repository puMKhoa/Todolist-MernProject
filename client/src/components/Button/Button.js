import React from 'react'
import {ButtonTodo} from './styled';
const Button = ({onClick}) => {
    return (
        <>
          <ButtonTodo onClick={onClick}>Add your work</ButtonTodo>
        </>
    )
}

export default Button
