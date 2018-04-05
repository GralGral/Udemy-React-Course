import React from 'react';

const withClass2 = (WrappedComponent, ClassName) => {
  return (props) => (
    <div className={ClassName}>
      <WrappedComponent {...props} />
    </div>
  )
};

export default withClass2;
