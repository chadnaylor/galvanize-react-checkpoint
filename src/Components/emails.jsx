import React from 'react'


class Emails extends React.Component {

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
            this.state.emails.map((email) => {
                return <p>{email.sender}: {email.message}</p>
            })
        )


    }
}

export default Emails