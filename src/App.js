import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './views/Home'
import About from './views/About'
import MyWork from './views/MyWork'
import Resume from './views/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  return (
    <div className='bg-gradient-to-tr from-teal-500 to-blue-500 top-0 left-0 min-h-screen'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/mywork'>
            <MyWork />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
