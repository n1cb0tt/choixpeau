import React from 'react';

function Message(props) {
  return (
    <div>
      <p className="selectedHouse">{props.message}</p>
    </div>
  );
}

export default Message;
