import React from 'react'

function Question() {
    return (
        <div class="Question-Container">
            <h4>Question tab:</h4>
            <label>Ask your  question here:</label>
            <input placeholder="type here" size="45" style={{"margin-left":"5px", "padding":"4px"}}/>
            <span style={{"marginLeft":"4px"}}><button class="btn btn-primary mb-1" size="3" type="button">Search</button></span>
        </div>
    )
}

export default Question
