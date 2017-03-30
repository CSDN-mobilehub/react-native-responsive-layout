/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  Platform
} from 'react-native';
import Menu from './Menu';
import FlexboxBasics from './FlexboxBasics';
import Flexbox from './Flexbox';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ExtendedResponsiveFlexbox from './ExtendedResponsiveFlexbox';
import PlatformExample from './PlatformExample';
import DimensionsExample from './DimensionsExample';
import MailAppExample from './MailAppExample';

export default class App extends Component {
  render() {
    const routes = [
      {
        title: 'Menu',
        render: (route, navigator) =>
          <Menu onNavigate={ (nextRoute) => navigator.push(nextRoute) }
            routes={ routes }/>
      },
      {
        title: 'FlexboxBasics',
        render: (route, navigator) =>
          <FlexboxBasics />
      },
      {
        title: 'Flexbox',
        render: (route, navigator) =>
          <Flexbox />
      },
      {
        title: 'ResponsiveFlexbox',
        render: (route, navigator) =>
          <ResponsiveFlexbox />
      },
      {
        title: 'ExtendedResponsiveFlexbox',
        render: (route, navigator) =>
          <ExtendedResponsiveFlexbox />
      },
      {
        title: 'PlatformExample',
        render: (route, navigator) =>
          <PlatformExample />
      },
      {
        title: 'DimensionsExample',
        render: (route, navigator) =>
          <DimensionsExample />
      },
      {
        title: 'MailAppExample',
        render: (route, navigator) =>
          <MailAppExample />
      }
    ];

    return (
      <Navigator
        initialRoute={ { title: routes[0].title } }
        renderScene={ (route, navigator) => {
          return (
            <View style={ styles.container }>
              {
                routes.find(({ title }) => title === route.title)
                  .render(route, navigator)
              }
            </View>
          );
        } }
        navigationBar={
          <Navigator.NavigationBar
            style={ {
              borderBottomWidth: 1,
              borderBottomColor: '#cccc'
            } }
            routeMapper={ {
              LeftButton: (route, navigator, index, navState) => index && (
                <TouchableOpacity
                  onPress={ () => navigator.pop() }>
                  <Text style={ { padding: 10, fontSize: 16 } }>Back</Text>
                </TouchableOpacity>
              ),
              RightButton: (route, navigator, index, navState) => null,
              Title: (route, navigator, index, navState) => (
                <Text style={ { padding: 10, fontSize: 16 } }>{ route.title }</Text>
              )
            } }
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.select({
      ios: 64,
      android: 56
    }),
    right: 0,
    bottom: 0,
    left: 0
  }
});
