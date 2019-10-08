import React from 'react';

import './Input.css'

const InfoBar = ( { message, setMessage, sendMessage }) => (
<form className="form">
    <input 
    className="input" 
    text="text"
    placeholder="type a Message..."
    value={message}
    onChange={({ target: { value } }) => setMessage(value)}
    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} 
    />
    <button className="sendButton" onClick={(event => sendMessage(event))}>Send</button>
</form>
)

export default InfoBar;
