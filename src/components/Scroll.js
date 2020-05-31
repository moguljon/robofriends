import React from 'react';

const Scroll = (props) => {
  return (
    //how to add style in jsx 1 curly braces of js and another curly braces for js styling
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;