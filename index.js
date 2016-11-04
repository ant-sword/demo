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
    this.state = {
      status: 'Loading..'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Text>{this.state.status}</Text>
      </View>
    );
  }

  componentDidMount() {
    const { setBottomBarStyle, regOnBack, regOnAction } = this.props;
    setBottomBarStyle && setBottomBarStyle({
      color: '#09F',
      borderColor: '#EEE',
      backgroundColor: '#FFF'
    });
    
    regOnBack && regOnBack(() => {
      this.setState({
        status: '点击了返回' + String(+new Date)
      });
    });
    
    regOnAction && regOnAction(() => {
      setBottomBarStyle({
        color: 'red',
        backgroundColor: '#FFF',
        borderColor: 'red',
      });
      this.setState({
        status: '点击了菜单'
      });
    });
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
