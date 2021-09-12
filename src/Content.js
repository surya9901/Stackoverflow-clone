import { useEffect, useState } from "react"
import React from 'react'
import axios from "axios"

function Content() {

    const [questiondata, setQuestiondata] = useState([]);

    useEffect(async () => {
        try {
            const question = await axios.get("http://localhost:3001/Questions")
            setQuestiondata([...question.data])
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            {
                questiondata.map((item) => {
                    return (
                        <>
                            <div class="row" style={{ "border-left": "2px solid grey", "border-right": "2px solid grey" }}>
                                <div class="col-lg-2">
                                    <div class="stats mr-2 text-center">
                                        <b class="text-muted">91</b>
                                        <p class="text-muted">votes</p>
                                        <b class="text-muted">91</b>
                                        <p class="text-muted">Answers</p>
                                        <p class="text-muted">100 views</p>
                                    </div>
                                </div>
                                <div class="bodycontent col-lg-9">
                                    <a style={{ "fontSize": "25px", "textDecoration": "none" }}>{item.message}</a>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
        </>
    )
}

export default Content
