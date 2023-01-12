import React from 'react';
import Header from './components/general-content/Header';
import Home from './components/home/Home';
import Test from './components/test/Test';
import Results from './components/results/Results';

import Error from './components/general-content/Error';
import Footer from './components/general-content/Footer';
import ThemeContext from './components/context/ThemeContext';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

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
                                <Switch>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/test" component={Test} />
                                    <Route path="/results" component={Results} />
                                    <Route path="/error" component={Error} />
                                    <Redirect to="/" />
                                </Switch>
                            <Footer />
                        </BrowserRouter>
                    </div>
            </ThemeContext.Provider>
        </div>
        );
}

export default App;
