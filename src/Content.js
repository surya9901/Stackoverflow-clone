import React from 'react'

function Content() {
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
                    <a href="#" style={{ "fontSize": "25px", "textDecoration": "none" }}>this is the question</a>
                    <p>this is the question</p>
                </div>
            </div>
        </>
    )
}

export default Content
