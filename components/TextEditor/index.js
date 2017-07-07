import React, { Component } from 'react';
import { View, Text } from 'react-vr';

export default class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      text: this.props.text
    };
  }

  handleInput(e){
      console.log('text editor "e"' + e)
      console.log(this.state.text);
  }

  render() {
    return(<View onkeypress={this.handleInput}>
            <Text>TEXT EDITOR</Text>
          </View>);
  }
};
