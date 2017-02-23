/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Flexbox extends Component {
  render() {
    return (
      <View style={ {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
      } }>
        <View style={ { width: 400, height: 400 } }>
          <View style={ styles.composition } onLayout={ this.onCompositionLayout }>
            <View style={ styles.container }>
              <View style={ styles.header }>
                <View style={ [ styles.header1, styles.grey ] }></View>
                <View style={ [ styles.header2, styles.white ] }></View>
                <View style={ [ styles.header3, styles.yellow ] }></View>
              </View>
              <View style={ styles.content }>
                <View style={ styles.nav }>
                  <View style={ [ styles.nav1, styles.white ] }></View>
                  <View style={ [ styles.nav2, styles.grey ] }></View>
                  <View style={ [ styles.nav3, styles.yellow ] }></View>
                </View>
                <View style={ styles.article }>
                  <View style={ styles.articleMain }
                    onLayout={ this.onArticleMainLayout }>
                    <View style={ [ styles.section1, styles.red ] }></View>
                    <View style={ [ styles.section2, styles.grey ] }></View>
                    <View style={ [ styles.section3, styles.grey ] }></View>
                    <View style={ [ styles.section4, styles.white ] }></View>
                  </View>
                  <View style={ [ styles.articleWidget ] }>
                    <View style={ [ styles.widget1, styles.yellow ] }></View>
                    <View style={ styles.widget2 }>
                      <View style={ [ styles.widget21, styles.white ] }></View>
                      <View style={ [ styles.widget22, styles.white ] }></View>
                    </View>
                    <View style={ [ styles.widget3, styles.white ] }></View>
                    <View style={ [ styles.widget4, styles.blue ] }></View>
                  </View>
                  <View style={ [ styles.articleFooter, styles.white ] }></View>
                </View>
              </View>
            </View>
            <View style={ styles.sidebar }>
              <View style={ [ styles.sidebar1, styles.grey ] }></View>
              <View style={ [ styles.sidebar2, styles.red ] }></View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
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
    flexDirection: 'row'
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
    flexDirection: 'row'
  },
  nav: {
    flexDirection: 'column',
    width: 40,
    marginRight: 10,
    flex: 0
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
    flexDirection: 'row'
  },
  articleMain: {
    flexDirection: 'column',
    flex: 1
  },
  section1: {
    minHeight: 190,
    flexGrow: 1,
    flexShrink: 0
  },
  section2: {
    marginTop: 10,
    width: 95,
    height: 50,
    flex: 0,
    alignSelf: 'flex-end'
  },
  section3: {
    marginTop: 10,
    width: 95,
    height: 40,
    flex: 0,
    alignSelf: 'flex-end'
  },
  section4: {
    marginTop: 10,
    width: 95,
    height: 40,
    flex: 0
  },
  articleWidget: {
    flexDirection: 'column',
    flex: 0,
    width: 110,
    marginLeft: 10
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
    marginBottom: 30
  },
  articleFooter: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 105,
    height: 20
  },
  sidebar: {
    flex: 0,
    marginLeft: 10,
    width: 20
  },
  sidebar1: {
    flex: 1
  },
  sidebar2: {
    height: 90,
    flex: 0,
    marginTop: 10
  }
});
