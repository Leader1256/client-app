import React from 'react';
import './App.css';
import { NewMsg } from './NewMsg';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MainPage } from './MainPage';
function App() {
 
  return (
    <div className="App">
        
        
         <BrowserRouter>
         <Routes>
         <Route path='/' element={<MainPage/>}></Route>
          <Route path='/NewMsg' element={<NewMsg/>}></Route>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
