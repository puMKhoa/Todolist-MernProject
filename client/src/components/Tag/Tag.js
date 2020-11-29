import React, { useState} from 'react'
import axios from 'axios'
import {useEffect} from 'react';
import {TagContainer, TagIconCancel, TagContent, TagCheck} from './styled.js'
function Tag({content, complete, _id}){
        // Check Is Completed
        const [isCompleted, setIsCompleted] = useState(complete);
        const handleCheck = () => {setIsCompleted(!isCompleted);
          console.log(isCompleted);
        }
        // Remove Tag
        // const [ toDoList, setToDoList ] = useState([]);
        const Delete = () => {
          axios.get(`http://localhost:3001/todolist/delete/${_id}`,{
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }). then(function() {
            window.location.reload();
          })
        };
         

    return (
        <>  
        <TagContainer complete = {isCompleted}>
                <TagIconCancel onClick= {Delete}/>
                <TagContent complete = {isCompleted}>{content}</TagContent>
                <TagCheck type="checkbox" onClick={handleCheck}/>
        </TagContainer>
        </>
    )
}

export default Tag
