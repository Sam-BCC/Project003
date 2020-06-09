import React from 'react';

// Gate Assignment

const Gate = ({isOpen}) => (
    <div style={{marginTop: "10px",marginBottom: "20px"}}>
       I am practising social distancing! The Gate is <strong style={{color: "Black"}}>{isOpen === true ? "Open" : "Closed"}</strong>
    </div>
    );

export default Gate;