import {Container} from './style/global';
import Header from './components/Header/Header.js';
import Input from './components/Input/Input.js';
import Button from './components/Button/Button.js';
import Tag from './components/Tag/Tag.js';
import axios from 'axios';
import {useEffect, useState} from 'react';
function App() {
  // STORE DATA
  const [ toDoList, setToDoList ] = useState([]);
  // GET DATA
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:3001/todolist');
        setToDoList(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  // RENDER TASKS FROM DATA
  const renderData = toDoList.map(toDo => { 
    console.log(toDo._id);
    return <Tag content={toDo.task} complete={toDo.complete} _id={toDo._id} />;
  });
  // CONTROL INPUT VALUE
  const [ content, setContent ] = useState('');
  const onChange = (e) => {
      setContent(e.currentTarget.value)
  }
  // ADD TAG FUNCTION
  const addTag = () => {
    // POST DATA
    axios.post('http://localhost:3001/todolist', {
      task: content,
      complete: false
    }).then(function (response) {
      console.log(response.data._id);
    })
    .catch(function (error) {
      console.log(error);
    }).then(function (){
      setContent('');
      window.location.reload();
    })
    
    // Get Data
    

  }
  // ROOT
  return (
    <>
      <Container>
        <Header />
        <Input value ={content} onChange={onChange}/>
        <Button onClick={addTag}/>
        {renderData}
      </Container>
    </>
  );
}

export default App;
