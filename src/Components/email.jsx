import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Email = () => {

    let { id } = useParams()


    useEffect(() => {
        async function fetchData() {
            console.log('test')
            const response = await fetch(`http://localhost:3001/emails/${id}`)
            const json = await response.json()
            this.setState({ email: json })
        }
        fetchData()
    })

    return <div></div>

}

export default Email