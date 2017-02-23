/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Platform
} from 'react-native';

export default class PlatformExample extends Component {
  render() {
    return (
      <View style={ {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      } }>
        <Text>{ Platform.OS }</Text>
        { Platform.select({
          android: <Text>{ Platform.version }</Text>
        }) }
        <Text>Company: { Platform.select({
          'ios': 'Apple',
          'android': 'Google'
        }) }</Text>
      </View>
    );
  }
};
