import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  state = {
    emails: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/emails')
    const json = await response.json()
    this.setState({ emails: json })
  }

  render() {
    return (
      <div className="App">
        {this.state.emails.map((email) => {
          return <p>{email.sender}: {email.message}</p>
        })}
      </div>
    );
  }

}

export default App;
