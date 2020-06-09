import React from 'react';

//Print Name With Plain Function

function PlainFunction({firstName,lastName}){
  return <div>
    <p style={{fontSize: "18px", color: "darkblue"}}>Hello, My name is <strong>{firstName} {lastName}</strong>! I am a Coder Cat!</p>
    </div>;
}

export default PlainFunction