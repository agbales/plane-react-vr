import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Box,
} from 'react-vr';
import TextEditor from './components/TextEditor/index.js';
import TextInput from 'react-vr-textinput';

export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColor: '#181818',
      text: 'Plane Mode'
    };
  }

  submitHandler(string) {
    console.log('the text received by the submitHandler is ' + string);
  }
  render() {
    return (
      <View onInput={this.handleInput}>
        <Pano source={asset('small-cabin.jpg')}/>
        <Text
          style={{
            backgroundColor: this.state.bgColor,
            fontSize: .5,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -5]}],
          }}
          onEnter={() => this.setState({bgColor: 'pink'})}
          onExit={() => this.setState({bgColor: '#181818'})}
          >
          {this.state.text}
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
