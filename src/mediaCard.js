  
import React from 'react';

const MediaCard = ({title,body,imageUrl}) => (
  <div style={{marginTop: "10px"}}>
    <h4 style={{color:"Brown"}}>{title}</h4>
    <p>{body}</p>
    <img src= {imageUrl} alt="Cat"/>
  </div>
);

export default MediaCard