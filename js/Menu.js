/**
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  TouchableOpacity
} from 'react-native';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      routes: ds.cloneWithRows(props.routes || [])
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      routes: this.state.routes.cloneWithRows(nextProps.routes || [])
    });
  }

  render() {
    const { onNavigate } = this.props;

    return (
      <ListView
        dataSource={ this.state.routes }
        renderRow={ (rowData) => (
          <TouchableOpacity
            onPress={ () => onNavigate({
              title: rowData.title
            }) }
            style={ {
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc'
            } }
          >
            <Text style={ { fontSize: 16 } }>{ rowData.title }</Text>
          </TouchableOpacity>
        )}
        style={ { backgroundColor: '#fff' } }/>
    );
  }
};
