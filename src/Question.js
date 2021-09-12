import React, { useState, useEffect } from 'react'

function Question() {

    const [question, setQuestion] = useState("")
    let handlesubmit = () => {
        window.alert(question);
    }

    return (
        <div class="Question-Container">
            <h4>Question tab:</h4>
            <label>Ask your  question here:</label>
            <input placeholder="type here" size="45" style={{ "margin-left": "5px", "padding": "4px" }} value={question} onChange={(e)=>setQuestion(e.target.value)}/>
            <span style={{ "marginLeft": "4px" }}>
                <button class="btn btn-primary mb-1" size="3" type="button" onClick={() => handlesubmit()}>
                    Search
                </button>
            </span>
        </div>
    )
}

export default Question
