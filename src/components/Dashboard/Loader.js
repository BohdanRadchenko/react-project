/* eslint-disable*/
import React from 'react';
import Loaders from './Currencies/loaders';
import css from './Loader.module.css';

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
    return (
      <div className={css.loaderWrapper}>
        <Loaders />
      </div>
    );
  }

  return null;
};

export default Loading;
