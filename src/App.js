import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Template } from './pages/Template';
import { Settings } from './pages/Settings';
import { useDarkModeColour } from './helper/brightness';
import { light1, dark1 } from './helper/colour';

function App() {
  
  // Define colour template
  const backgroundColour = useDarkModeColour(light1, dark1);
  const appStyle = {
    backgroundColor: backgroundColour,
    transition: "background-color 0.3s",
  };

  // Return
  return (
    <div style={{ ...appStyle }}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Template />}/>
          <Route path='/website' element={<Template />}/>
          <Route path='/website/settings' element={<Settings />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
