import React from 'react'
import { withRouter } from 'react-router-dom'

class Send extends React.Component {
    state = {
        email: {},

    }
    sendEmail() {
        fetch('http://localhost:3001/send', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.email),
        }).then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Your message sent successfully!')
                this.props.history.push("/");
            })
    }
    render() {
        return (<div>
            <input type='text' placeholder='sender' onChange={(ev) =>
                this.setState({ email: { ...this.state.email, sender: ev.target.value } })}></input>
            <input type='text' placeholder='recipient' onChange={(ev) =>
                this.setState({ email: { ...this.state.email, recipient: ev.target.value } })}></input>
            <p>
                <input type='text' placeholder='subject' onChange={(ev) =>
                    this.setState({ email: { ...this.state.email, subject: ev.target.value } })}></input>
            </p>
            <p>
                <input type='text' placeholder='message' onChange={(ev) =>
                    this.setState({ email: { ...this.state.email, message: ev.target.value } })}></input>
            </p>
            <button onClick={() => this.sendEmail()}>Send it!</button>
        </div>

        )
    }
}

export default withRouter(Send)