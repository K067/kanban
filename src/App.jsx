import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';
import { Context } from './Context/Context';
import { useContent } from './Hooks/useContent';
import { Description } from './Components/Description/Description';


function App() {
  const tasks = useContent();

  return (
    <Context.Provider value={{
      tasks
    }}>
      <div className='wrapper'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main />
            }
          />
          <Route
            path="tasks/:taskId"
            element={
              <Description />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
