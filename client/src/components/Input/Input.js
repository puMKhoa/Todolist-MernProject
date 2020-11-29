import React from 'react'
import {InputHere} from './styled.js';
import {useState} from 'react';

const Input = ({value, onChange}) => {
    return (
        <>
            <InputHere value = {value} onChange={onChange} type="text" placeholder="Enter your work..."/>
        </>
    )
}

export default Input;
