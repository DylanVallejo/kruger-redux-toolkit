
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
//useDispatch (hacer) hace las funciones que queremos llamar para actualizar el estado
// useSelector (traer) trae los datos dentro del estado
// import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


function App() {
  //useSelector tiene acceso a todo el estado
  //trayendo unicamente el estado tasks puede ser alamcenado en var
    // const taskState = useSelector(state => state.tasks)
    // console.log(taskState)
  return (
    <div className="bg-zinc-900 h-screen text-white">   
          <div className='flex items-center justify-center h-full'>
            <BrowserRouter >
                <Routes>
                  <Route path="/" element={<TaskList />} />
                  <Route path="/create-task" element={<TaskForm />} />
                  <Route path="/edit-task/:id" element={<TaskForm />} />
              </Routes>
            </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
