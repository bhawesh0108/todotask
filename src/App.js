import './App.css';
import Header from './components/Header'
import Items from './components/Items'
import Form from './components/Form'
import { useContext,useState} from 'react';
import { TaskContext } from './utils/TaskContext';


function App() {

  
  
  return  (
    <div className="App px-4 mt-8 w-[100%] sm:px-10 sm:mt-16 sm:w-[80%] sm:mx-auto">
      <Header />
      <Items  />
      <Form />
    </div>
  );
}

export default App;
