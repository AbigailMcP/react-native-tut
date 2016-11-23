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
  Image,
  ListView,
} from 'react-native';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

var MOCKED_MOVIES_DATA = [
                          {title: 'Wallace and Gromit - A Grand Day Out', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
                          ];

export default class ReactNativeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
              this.setState({
                            movies: responseData.movies,
                            });
              })
        .done();
    }
    render() {
        if (!this.state.movies) {
            return this.renderLoadingView();
        } else {
            var movie = this.state.movies[0];
            return this.renderMovie(movie);
        }
    }
    renderLoadingView() {
        return (
                <View style={styles.container}>
                    <Text>
                        Loading movies...
                    </Text>
                </View>
                );
    }
    renderMovie(movie) {
        return (
                <View style={styles.container}>
                    <Image
                        source={{uri:movie.posters.thumbnail}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.containerRight}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
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
                                    padding: 15,
                                 },
                                 containerRight: {
                                    flex: 1,
                                 },
                                 thumbnail: {
                                    width: 53,
                                    height: 81,
                                 },
                                 title: {
                                    fontSize: 15,
                                    marginBottom: 8,
                                    textAlign: 'center',
                                 },
                                 year: {
                                    textAlign: 'center',
                                 },
});

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
