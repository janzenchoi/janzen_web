import { useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { ViewportProvider } from "./context/Viewport";
import { Template } from './page/Template';
import { Settings } from './page/Settings';
import { getStoredValue } from "./helper/storage";
import { DEFAULT_MODE } from "./helper/brightness";

function App() {
  
  // Persist colour theme on refresh
  useEffect(() => {
    const saved = getStoredValue("colour-theme");
    if (saved)
      document.documentElement.setAttribute("colour-theme", saved);
    else
      document.documentElement.setAttribute("colour-theme", DEFAULT_MODE);
  });

  // Define colour template
  const appStyle = {
    backgroundColor: "var(--colour-1)",
    transition: "background-color 0.3s",
    // minHeight: "100vh",
    // minWidth: "100vw",
    // paddingTop: "env(safe-area-inset-top)",
    // paddingBottom: "env(safe-area-inset-bottom)",
    // paddingLeft: "env(safe-area-inset-left)",
    // paddingRight: "env(safe-area-inset-right)",
    // boxSizing: "border-box",
  };

  // Return
  return (
    <ViewportProvider>
      <div style={appStyle}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Template />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </HashRouter>
      </div>
    </ViewportProvider>
  );
}

export default App;
