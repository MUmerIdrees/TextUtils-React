import React from 'react'

export default function About(props) {
 
    let myStyle = {
        color: props.mode !== 0 ? 'white' : '#042743',
        backgroundColor: props.mode === 1 ? 'rgb(36, 74, 104)' :
                         props.mode === 2 ? 'rgb(30, 89, 45)' : 
                         props.mode === 3 ? 'rgb(89, 37, 30)': 
                         'white'
    }

    return (
        <div className="container my-3" 
        style={{color: props.mode !== 0 ? 'white' : '#042743'}}>
            <h1 className="pt-3 mb-4" >About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" 
                        data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                        aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" 
                    data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way to analyze your text quickly and 
                            efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} 
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                        aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" 
                    data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils is a free characters counter tool that provides instant 
                            character count  & word count statistics for a given text. 
                            Textutils report the number of words and characters. Thus it is
                            suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} 
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                        aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" 
                    data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any browser such as Chrome, 
                            Firefox, Internet Explorer, Safari, Opera. It suits to count characters
                            in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
