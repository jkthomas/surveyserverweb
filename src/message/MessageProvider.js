import React from 'react';

const MessageProvider = (props) => {
    return (
        <div className="message">
            <p>{props.message}</p>
        </div>
    )
};

export default MessageProvider;