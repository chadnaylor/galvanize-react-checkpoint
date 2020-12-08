import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Emails from './Components/emails'
import Send from './Components/send'
import Email from './Components/email'
class App extends React.Component {
  render() {
    return (
      <Router className="App">

        <ul>
          <li><Link to="/">Emails</Link></li>
          <li><Link to="/Send">Send</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={Emails} />
        <Route exact path="/email" component={Emails} />

        <Route path="/send" component={Send} />
        <Route path={`/email/:id`} component={Email} />

      </Router>
    );
  }
}

export default App;
