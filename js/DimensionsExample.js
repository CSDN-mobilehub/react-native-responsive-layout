/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

export default class DimensionsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width,
      height:  Dimensions.get('window').height
    };

    this.onLayout = this.onLayout.bind(this);
  }

  onLayout() {
    this.setState({
      width: Dimensions.get('window').width,
      height:  Dimensions.get('window').height
    });
  }

  render() {
    return (
      <View style={ {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      } } onLayout={ this.onLayout }>
        <Text>Width:{ this.state.width }</Text>
        <Text>Height:{ this.state.height }</Text>
      </View>
    );
  }
};
