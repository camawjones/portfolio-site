import React from 'react';

const LittleBitAnimate = props => {
  const componentClasses = ['page2-t'];
  if (props.show) {
    componentClasses.push('typewriter');
  }

  return (
    <div className="page2-title">
      <h1 className={componentClasses.join(' ')}>
        a little <span className="bit">bit</span> about me...
      </h1>
    </div>
  );
};

export default LittleBitAnimate;
