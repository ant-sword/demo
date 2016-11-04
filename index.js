'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }

  componentDidMount() {
    const { setBottomBarStyle } = this.props;
    console.log('setBottomBarStyle=', setBottomBarStyle);
    window.setBottomBarStyle = setBottomBarStyle;
    this.props.setBottomBarStyle({
      color: '#09F',
      borderColor: '#EEE',
      backgroundColor: '#FFF'
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default App;
