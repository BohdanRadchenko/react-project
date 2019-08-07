/*eslint-disable*/
import React from 'react';
import Loader from 'react-loader-spinner';

export default class Loaders extends React.Component {
  render() {
    return <Loader type="Rings" color="#00BF21" height={48} width={48} />;
  }
}
