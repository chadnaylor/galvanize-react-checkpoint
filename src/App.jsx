import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Emails from './Components/emails'

class App extends React.Component {
  render() {
    return (
      <Router className="App">

        <ul>
          <li><Link to="/">Emails</Link></li>
          {/* <li><Link to="/about">About</Link></li> */}
        </ul>

        <hr />

        <Route exact path="/" component={Emails} />
        {/* <Route path="/about" component={About} /> */}

      </Router>
    );
  }
}

export default App;
