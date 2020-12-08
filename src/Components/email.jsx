import React from 'react'
import { withRouter } from 'react-router-dom'

class Email extends React.Component {
    constructor() {
        super()

    }
    state = {
        email: {}

    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        const response = await fetch(`http://localhost:3001/emails/${id}`)
        const json = await response.json()
        this.setState({ email: json })
    }
    render() {
        return <div>
            <p>
                Sender: {this.state.email.sender}
            </p>
            <p>
                Recipient: {this.state.email.recipient}
            </p>
            <p>
                Subject: {this.state.email.subject}
            </p>
            <p>
                Message: {this.state.email.message}
            </p>
        </div>
    }
}

export default withRouter(Email)