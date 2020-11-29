import styled from 'styled-components'
import {ImCancelCircle} from 'react-icons/im';
export const TagContainer = styled.div`
    background-color: ${({complete}) => (complete ? '#FFD5C2' : '#C1D7D7')};
    transition: 0.4s;
    border-bottom: 2px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0px 5px 0px 5px;
`

export const TagIconCancel = styled(ImCancelCircle)`
    color: #C8553D;
    cursor: pointer;
`

export const TagContent = styled.h4`
  color: black;
  text-decoration: ${({complete}) => (complete ? 'line-through' : 'none')}; 
` 

export const TagCheck = styled.input`
   cursor: pointer;
`