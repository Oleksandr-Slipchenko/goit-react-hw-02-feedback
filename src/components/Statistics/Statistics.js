import React, { Component } from 'react';

export default class Statistics extends Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            console.log('Increment');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('Increment');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('Increment');
          }}
        >
          Bad
        </button>
        Statistics
      </div>
    );
  }
}
