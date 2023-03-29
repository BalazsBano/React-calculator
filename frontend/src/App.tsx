import React, { createContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Calculator } from './components';
import './App.scss';

const ThemeContext = createContext("light");
 
function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={ theme }>
      <div className="App" id={theme}>
        <Calculator theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
