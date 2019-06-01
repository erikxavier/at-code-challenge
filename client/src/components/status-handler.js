import React from 'react'
import "../assets/loader.css"

export default (props) => {
    return props.status === false ?
        <Loader /> : <Error message={props.status} />
}

const Error = ({ message }) => {
    return (<h2>An error has ocurred: {message}</h2>)
}

const Loader = () => {
    return (<div className='loader'>Loading...</div>)
}