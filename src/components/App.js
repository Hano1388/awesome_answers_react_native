import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import QuestionsScreen from './QuestionsScreen';
import QuestionDetailScreen from './QuestionDetailScreen';

const App = StackNavigator({
  Home: {screen: HomeScreen},
  Questions: {screen: QuestionsScreen},
  QuestionDetail: {screen: QuestionDetailScreen}
});

// AppRegistry is a part of React Native and is used much like
// ReactDOM to render our main component. In this, we're making our
// application
AppRegistry.registerComponent(
  'awesome_answers_react_native',
  () => App
);
