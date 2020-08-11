import React from 'react'
import spinner from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <img
            alt="Loading"
            src={spinner}
            style={{ width: '200', margin: 'auto', display: 'block' }}
        >
        </img>
    )
}

export default Spinner
