import React from 'react'

const Progress = props => {
    return (
        <div className="container">
            <h1>Progress</h1>
            <h2>{props.progress}</h2>
        </div>
    )
}

export default Progress