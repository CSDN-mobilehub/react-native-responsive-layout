/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build();

export default class ExtendedResponsiveFlexbox extends Component {
  render() {
    const navElement = <View style={ styles.nav }>
      <View style={ [ styles.nav1, styles.white ] }></View>
      <View style={ [ styles.nav2, styles.grey ] }></View>
      <View style={ [ styles.nav3, styles.yellow ] }></View>
    </View>;

    return (
      <ScrollView style={ { flex: 1, backgroundColor: '#000' } }>
        <View style={ [
          styles.composition
        ] } onLayout={ () => EStyleSheet.build() }>
          <View style={ styles.container }>
            <View style={ styles.header }>
              <View style={ [ styles.header1, styles.grey ] }></View>
              <View style={ [ styles.header2, styles.white ] }></View>
              <View style={ [ styles.header3, styles.yellow ] }></View>
            </View>
            <View style={ styles.content }>
              { Platform.OS === 'ios' && navElement }
              <View style={ styles.article }>
                <View style={ styles.articleMain }>
                  <View style={ [
                    styles.section1,
                    styles.red
                  ] }>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                  </View>
                  <View style={ [
                    styles.section2,
                    styles.grey
                  ] }></View>
                  <View style={ [
                    styles.section3,
                    styles.grey
                  ] }></View>
                  <View style={ [
                    styles.section4,
                    styles.white
                  ] }></View>
                </View>
                <View style={ styles.articleWidget }>
                  <View style={ [ styles.widget1, styles.yellow ] }></View>
                  <View style={ styles.widget2 }>
                    <View style={ [ styles.widget21, styles.white ] }></View>
                    <View style={ [ styles.widget22, styles.white ] }></View>
                  </View>
                  <View style={ [ styles.widget3, styles.white ] }></View>
                  <View style={ [
                    styles.widget4,
                    styles.blue
                  ] }></View>
                </View>
                <View style={ [
                  styles.articleFooter,
                  styles.white
                ] }></View>
              </View>
              { Platform.OS === 'android' && navElement }
            </View>
          </View>
          <View style={ styles.sidebar }>
            <View style={ [
              styles.sidebar1,
              styles.grey
            ] }></View>
            <View style={ [
              styles.sidebar2,
              styles.red
            ] }></View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = EStyleSheet.create({
  white: {
    backgroundColor: '#daebf2'
  },
  grey: {
    backgroundColor: '#cbdaef'
  },
  red: {
    backgroundColor: '#d90b0f'
  },
  yellow: {
    backgroundColor: '#f7c049'
  },
  blue: {
    backgroundColor: '#020a2e'
  },
  composition: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    '@media (min-width: 641)': {
      flexDirection: 'row'
    }
  },
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    height: 40,
    flex: 0,
    marginBottom: 10
  },
  header1: {
    width: 90,
    flex: 0
  },
  header2: {
    flex: 1,
    marginLeft: 10
  },
  header3: {
    width: 110,
    flex: 0,
    marginLeft: 10
  },
  content: {
    flex: 1,
    '@media (min-width: 641)': {
      flexDirection: 'row'
    }
  },
  nav: {
    flexDirection: 'column',
    height: 200,
    flex: 0,
    '@media (min-width: 641)': {
      width: 40,
      height: null,
      marginTop: 0,
      marginRight: 10,
      marginBottom: 0
    },
    '@media ios': {
      marginBottom: 10
    },
    '@media android': {
      marginTop: 10
    }
  },
  nav1: {
    flex: 9
  },
  nav2: {
    flex: 15,
    marginTop: 10
  },
  nav3: {
    height: 90,
    flex: 0,
    marginTop: 10
  },
  article: {
    flex: 1,
    flexDirection: 'column',
    '@media (min-width: 376)': {
      flexDirection: 'row'
    }
  },
  articleMain: {
    flexDirection: 'column',
    flex: 1
  },
  section1: {
    flexGrow: 1,
    flexShrink: 0
  },
  section2: {
    marginTop: 10,
    height: 50,
    flex: 0,
    '@media (min-width: 376)': {
      alignSelf: 'flex-end',
      width: '50% - 65'
    },
    '@media (min-width: 641)': {
      width: '50% - 105'
    }
  },
  section3: {
    marginTop: 10,
    height: 40,
    flex: 0,
    '@media (min-width: 376)': {
      alignSelf: 'flex-end',
      width: '50% - 65'
    },
    '@media (min-width: 641)': {
      width: '50% - 105'
    }
  },
  section4: {
    marginTop: 10,
    height: 40,
    flex: 0,
    '@media (min-width: 376)': {
      width: '50% - 65'
    },
    '@media (min-width: 641)': {
      width: '50% - 105'
    }
  },
  articleWidget: {
    flexDirection: 'column',
    height: 240,
    flex: 0,
    marginTop: 10,
    '@media (min-width: 376)': {
      width: 110,
      flex: 0,
      height: null,
      marginLeft: 10,
      marginTop: 0
    }
  },
  widget1: {
    flex: 9
  },
  widget2: {
    flexDirection: 'row',
    flex: 9,
    marginTop: 10
  },
  widget21: {
    flex: 1
  },
  widget22: {
    flex: 1,
    marginLeft: 10
  },
  widget3: {
    height: 50,
    flex: 0,
    marginTop: 10
  },
  widget4: {
    height: 60,
    flex: 0,
    marginTop: 10,
    '@media (min-width: 376)': {
      marginBottom: 30
    }
  },
  articleFooter: {
    marginTop: 10,
    height: 20,
    '@media (min-width: 376)': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      left: '50% - 55'
    },
    '@media (min-width: 641)': {
      left: '50% - 95'
    }
  },
  sidebar: {
    marginTop: 10,
    height: 80,
    flex: 0,
    '@media (min-width: 641)': {
      marginTop: 0,
      marginLeft: 10,
      width: 20,
      height: null,
      flex: 0
    }
  },
  sidebar1: {
    flex: 1
  },
  sidebar2: {
    height: 20,
    flex: 0,
    marginTop: 10,
    '@media (min-width: 641)': {
      height: 90,
      flex: 0
    }
  }
});
