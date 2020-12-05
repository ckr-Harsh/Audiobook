import React from 'react'

function AudioX(props) {
    console.log(props.audio);
    let audio = props.audio
    return (
        <div className=''>
           <audio src={audio} controls autoPlay/>
        </div>
    )
}

export default AudioX
