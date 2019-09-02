import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

export default class App extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    handleSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  state = {
    selectedOption: { value: ' ', label: this.props.label },
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.handleSelect(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const { options } = this.props;

    return (
      <Select
        blurInputOnSelect
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
