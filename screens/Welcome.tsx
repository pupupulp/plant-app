import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Block, Button, Text } from '../components';
import { theme } from '../constants';

export default class Welcome extends React.Component {

  renderIllustrations(){
    return(
      <Block>
        <Text>Image</Text>
      </Block>
    )
  }

  renderSteps(){
    return(
      <Block>
        <Text>* * *</Text>
      </Block>
    )
  }

  render(){
    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Your Home.
            <Text h1 primary> Greener.</Text>
          </Text>
          <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
            Enjoy the experience.
          </Text>
        </Block>
        <Block center middle>
          {this.renderIllustrations()}
          {this.renderSteps()}
        </Block>
        <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => this.props.navigation.navigate('Login')}>
            <Text center semibold white>Login</Text>
          </Button>
          <Button shadow onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text center semibold>Signup</Text>
          </Button>
          <Button onPress={() => {}}>
            <Text center caption gray>Terms of service</Text>
          </Button>
        </Block>
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