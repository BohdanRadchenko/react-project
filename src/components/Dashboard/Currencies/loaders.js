/*eslint-disable*/
import React from 'react';
import Loader from 'react-loader-spinner';

export default class Loaders extends React.Component {
  render() {
    return <Loader type="Oval" color="#3d5575" height={140} width={315} />;
  }
}
