import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class FlexboxBasics extends Component {
  render() {
    return (
      <View style={{width: 240, flexDirection: 'row', flexWrap: 'nowrap'}}>
        <View style={{flex: -1, width: 100, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{flex: 0, width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{flex: 0, width: 100, height: 100, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
