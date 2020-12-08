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
        return <div>{this.state.email.sender}</div>
    }
}

export default withRouter(Email)