import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Block } from '../components';

export default class Welcome extends React.Component {

  render(){
    return (
      <Block center middle>
        <Text>Welcome</Text>
      </Block>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});