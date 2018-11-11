import React from 'react';

const MessageProvider = (props) => {
    return (
        <div className="Message">
            <p>{props.message}</p>
        </div>
    )
};

export default MessageProvider;