import React from 'react'

function FunctionClick() {
    function eventOccur() {
        console.log("function event triggered")
    }
    return (
        <div>
            <button onClick={eventOccur}>Click me</button>
        </div>
    )
}

export default FunctionClick
