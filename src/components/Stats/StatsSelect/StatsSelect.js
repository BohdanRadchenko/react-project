/*eslint-disable*/
import React, { Component } from 'react';
import Select from 'react-select';

export default class App extends Component {
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
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
