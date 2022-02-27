import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('Yogeeswari')}>Child button</button>
        </div>
    )
}
export default ChildComponent
