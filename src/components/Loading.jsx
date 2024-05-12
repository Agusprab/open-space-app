import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="loading">
      {/* @TODO: use react-redux-loading-bar to show loading bar */}
      <LoadingBar />
    </div>
  );
}

export default Loading;
