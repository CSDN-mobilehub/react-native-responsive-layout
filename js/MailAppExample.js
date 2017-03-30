/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';

const MailAppNavigator = () => (
  <View style={ {
    flex: 0,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1
  } }>
    <Text>MailAppNavigator</Text>
  </View>
);

const MailList = () => (
  <View style={ {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } }>
    <Text>MailList</Text>
  </View>
);

const Toolbar = ({ isTabletLayout }) => (
  <View style={ [
    {
      flex: 0,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 1
    },
    isTabletLayout && {
      borderTopWidth: 0,
      borderBottomWidth: 1
    }
  ] }>
    <Text>Toolbar</Text>
  </View>
);

const MailDetail = () => (
  <View style={ {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } }>
    <Text>MailDetail</Text>
  </View>
);


export default class MailAppExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...Dimensions.get('window')
    };
  }

  render() {
    const isTabletLayout = this.state.width >= 768;

    return (
      <View style={ {
        flex: 1,
        alignItems: 'stretch',
        flexDirection: isTabletLayout ? 'row' : 'column'
      } } onLayout={ () => this.setState({
        ...Dimensions.get('window')
      }) }>
      <View style={ [
        {
          flex: 1,
          alignItems: 'stretch'
        },
        isTabletLayout && {
          flex: 0,
          width: 320
        }
      ] }>
        <MailAppNavigator />
        <MailList />
        { !isTabletLayout && <Toolbar /> }
      </View>
      { isTabletLayout && (
        <View style={ {
          flex: 2,
          alignItems: 'stretch',
          borderLeftWidth: 1
        } }>
          <Toolbar isTabletLayout />
          <MailDetail />
        </View>
      ) }
      </View>
    );
  }
}
