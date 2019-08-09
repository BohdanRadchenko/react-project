/*eslint-disable*/
import React from 'react';
import Loaders from '../Dashboard/Currencies/loaders';

const Loading = ({ error, timedOut, pastDelay, retry }) => {
  if (error) {
    return (
      <div>
        Error!
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (timedOut) {
    return (
      <div>
        Taking a long time...
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }

  if (pastDelay) {
    // return <div>Loading...</div>;
    return <Loaders />;
  }

  return null;
};

export default Loading;
