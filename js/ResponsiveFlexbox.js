/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';

export default class ResponsiveFlexbox extends Component {
  constructor(props) {
    super(props);
    this.onCompositionLayout = this.onCompositionLayout.bind(this);
    this.onArticleMainLayout = this.onArticleMainLayout.bind(this);

    this.state = {
      isGrande: false,
      isVenti: false,
      articleMainWidth: 0
    };
  }

  onArticleMainLayout(e) {
    this.setState({
      articleMainWidth: e.nativeEvent.layout.width
    });
  }

  onCompositionLayout() {
    const { width, height } = Dimensions.get('window');

    this.setState({
      isGrande: width > 375,
      isVenti: width > 640
    });
  }

  render() {
    const {
      isGrande,
      isVenti,
      articleMainWidth
    } = this.state;

    const { width, height } = Dimensions.get('window');

    const navElement = <View style={ [
      styles.nav,
      Platform.OS === 'ios' && styles.navIOS,
      Platform.OS === 'android' && styles.navAndroid,
      isVenti && styles.navVenti
    ] }>
      <View style={ [ styles.nav1, styles.white ] }></View>
      <View style={ [ styles.nav2, styles.grey ] }></View>
      <View style={ [ styles.nav3, styles.yellow ] }></View>
    </View>;

    return (
      <ScrollView style={ { flex: 1, backgroundColor: '#000' } }>
        <View style={ [
          styles.composition,
          isVenti && styles.compositionVenti
        ] } onLayout={ this.onCompositionLayout }>
          <View style={ styles.container }>
            <View style={ styles.header }>
              <View style={ [ styles.header1, styles.grey ] }></View>
              <View style={ [ styles.header2, styles.white ] }></View>
              <View style={ [ styles.header3, styles.yellow ] }></View>
            </View>
            <View style={ [
              styles.content,
              isVenti && styles.contentVenti
            ] }>
              { Platform.OS === 'ios' && navElement }
              <View style={ [
                styles.article,
                isGrande && styles.articleGrande
              ] }>
                <View style={ styles.articleMain }
                  onLayout={ this.onArticleMainLayout }>
                  <View style={ [
                    styles.section1,
                    isGrande && styles.section1Grande,
                    styles.red
                  ] }></View>
                  <View style={ [
                    styles.section2,
                    isGrande && styles.section2Grande,
                    isGrande && {
                      width: articleMainWidth / 2 - 5
                    },
                    styles.grey
                  ] }></View>
                  <View style={ [
                    styles.section3,
                    isGrande && styles.section3Grande,
                    isGrande && {
                      width: articleMainWidth / 2 - 5
                    },
                    styles.grey
                  ] }></View>
                  <View style={ [
                    styles.section4,
                    isGrande && {
                      width: articleMainWidth / 2 - 5
                    },
                    styles.white
                  ] }></View>
                </View>
                <View style={ [
                  styles.articleWidget,
                  isGrande && styles.articleWidgetGrande
                ] }>
                  <View style={ [ styles.widget1, styles.yellow ] }></View>
                  <View style={ styles.widget2 }>
                    <View style={ [ styles.widget21, styles.white ] }></View>
                    <View style={ [ styles.widget22, styles.white ] }></View>
                  </View>
                  <View style={ [ styles.widget3, styles.white ] }></View>
                  <View style={ [
                    styles.widget4,
                    isGrande && styles.widget4Grande,
                    styles.blue
                  ] }></View>
                </View>
                <View style={ [
                  styles.articleFooter,
                  isGrande && styles.articleFooterGrande,
                  isGrande && {
                    left: articleMainWidth / 2 + 5
                  },
                  styles.white
                ] }></View>
              </View>
              { Platform.OS === 'android' && navElement }
            </View>
          </View>
          <View style={ [
            styles.sidebar,
            isVenti && styles.sidebarVenti
          ] }>
            <View style={ [
              styles.sidebar1,
              styles.grey
            ] }></View>
            <View style={ [
              styles.sidebar2,
              isVenti && styles.sidebar2Venti,
              styles.red
            ] }></View>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'column'
  },
  compositionVenti: {
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
    flex: 1
  },
  contentVenti: {
    flexDirection: 'row'
  },
  nav: {
    flexDirection: 'column',
    height: 200,
    flex: 0
  },
  navVenti: {
    width: 40,
    height: null,
    marginTop: 0,
    marginRight: 10,
    marginBottom: 0
  },
  navIOS: {
    marginBottom: 10
  },
  navAndroid: {
    marginTop: 10
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
    flexDirection: 'column'
  },
  articleGrande: {
    flexDirection: 'row'
  },
  articleMain: {
    flexDirection: 'column',
    flex: 1
  },
  section1: {
    height: 190,
    minHeight: 190,
    flexGrow: 1,
    flexShrink: 0
  },
  section1Grande: {
    height: null
  },
  section2: {
    marginTop: 10,
    height: 50,
    flex: 0
  },
  section2Grande: {
    alignSelf: 'flex-end'
  },
  section3: {
    marginTop: 10,
    height: 40,
    flex: 0
  },
  section3Grande: {
    alignSelf: 'flex-end'
  },
  section4: {
    marginTop: 10,
    height: 40,
    flex: 0
  },
  articleWidget: {
    flexDirection: 'column',
    height: 240,
    flex: 0,
    marginTop: 10
  },
  articleWidgetGrande: {
    width: 110,
    flex: 0,
    height: null,
    marginLeft: 10,
    marginTop: 0
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
    marginTop: 10
  },
  widget4Grande: {
    marginBottom: 30
  },
  articleFooter: {
    marginTop: 10,
    height: 20
  },
  articleFooterGrande: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  sidebar: {
    marginTop: 10,
    height: 80,
    flex: 0
  },
  sidebarVenti: {
    marginTop: 0,
    marginLeft: 10,
    width: 20,
    height: null,
    flex: 0
  },
  sidebar1: {
    flex: 1
  },
  sidebar2: {
    height: 20,
    flex: 0,
    marginTop: 10
  },
  sidebar2Venti: {
    height: 90,
    flex: 0
  }
});
