import React from 'react';

const shyAnimate = (props) => {
  const componentClasses = ['shy'];
  if (props.shy) { componentClasses.push('show'); }

  return (
    <p className={componentClasses.join(' ')}>{"Don't be shy, say hi!"}</p>
  );
};


export default shyAnimate;
