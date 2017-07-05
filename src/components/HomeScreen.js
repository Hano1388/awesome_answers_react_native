import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, world!</Text>
        <Button
          onPress={() => navigate('Questions') }
          title='Questions'
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: 'Home'
};

export default HomeScreen;
