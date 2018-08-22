import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img src={props.src} alt="purple wine"/>
    </div>
  );
};

export default Image;