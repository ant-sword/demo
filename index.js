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
    this.inter = null;
    this.state = {
      num: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>测试应用</Text>
        <Text>{this.state.num}</Text>
        <TouchableOpacity
          onPress={this.props.onClose}>
          <Text>关闭</Text>
        </TouchableOpacity>
      </View>
    );
  }

  componentDidMount() {
    this.inter = setInterval(() => {
      this.setState({
        num: this.state.num + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('bye bye');
    clearInterval(this.inter);
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
