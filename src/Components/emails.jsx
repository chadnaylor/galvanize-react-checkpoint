import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import Email from './email'

class Emails extends React.Component {

    state = {
        emails: [],
        filter: '',
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3001/emails')
        const json = await response.json()
        this.setState({ emails: json })
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='search by subject or sender' onChange={(ev) =>
                    this.setState({ filter: ev.target.value })}></input>
                <ul>
                    {
                        this.state.emails.length ?
                            this.state.emails.filter((email) => {
                                return this.state.filter.length > 0 ?
                                    email.subject.includes(this.state.filter) ||
                                    email.sender.includes(this.state.filter) :
                                    true
                            }).map((email) => {
                                //server has off-by-one error with ids
                                return <li>{email.sender}: <Link to={`/email/${email.id - 1}`}>{email.subject}</Link></li>
                            }) :
                            <p>No emails yet :(</p>
                    }
                </ul>
            </div >
        )
    }
}

export default Emails