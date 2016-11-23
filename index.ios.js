/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

var MOCKED_MOVIES_DATA = [
                          {title: 'Wallace and Gromit - A Grand Day Out', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
                          ];

export default class ReactNativeApp extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0]
    return (
      <View style={styles.container}>
        <Image
            source={{uri:movie.posters.thumbnail}}
            style={styles.thumbnail}
        />
        <View style={styles.containerRight}>
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
                                 container: {
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#F5FCFF',
                                 },
                                 containerRight: {
                                    flex: 0,
                                 },
                                 welcome: {
                                    fontSize: 20,
                                    textAlign: 'center',
                                    margin: 10,
                                 },
                                 instructions: {
                                    textAlign: 'center',
                                    color: '#333333',
                                    marginBottom: 10,
                                 },
                                 thumbnail: {
                                    width: 53,
                                    height: 81,
                                 },
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
