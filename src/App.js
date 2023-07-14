import React from 'react';
import Header from './components/general-content/Header';
import Footer from './components/general-content/Footer';
import ThemeContext from './components/context/ThemeContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NAV_URLS from './components/general-content/NAV_URLS';
import pathBuilder from './components/general-content/pathBuilder';
import AppManager from './components/AppManager';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './components/general-content/Basic.css';

function App() {

  const [theme, setTheme] = React.useState("Brazil");

  const themeContext = {
    theme: theme,
    updateTheme: setTheme
  };


  return (
        <div className="App">
            <ThemeContext.Provider value={themeContext} >
                    <div className={theme}>
                        <BrowserRouter>
                            <Header />
                                <Routes>
                                    <Route exact path={pathBuilder(NAV_URLS.HOME)} element={<AppManager />} />
                                    <Route path={pathBuilder("*")} element={<AppManager />} status={404}/>
                                </Routes>
                            <Footer />
                        </BrowserRouter>
                    </div>
            </ThemeContext.Provider>
        </div>
        );
}

export default App;
