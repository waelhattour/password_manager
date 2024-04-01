import { useState } from 'react';
import './App.css';
import Axios from 'axios';
function App() {
  const [password,setPassword]=useState('')
  const [title,setTitle]=useState('')
  const addPassword=()=>{
    Axios.post('http://localhost:3001/addPassword',{password:password,title:title})
  }
  return (
    <div className="App">
      <div className='AddingPassword'>
        <input type='password' placeholder='Example password 123' onChange={(e)=>setPassword(e.target.value)}/>
        <input type='text' placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={addPassword}>Add Password</button>
      </div>
    </div>
  );
}

export default App;
