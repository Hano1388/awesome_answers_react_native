// import React, {Component} from 'react';
// import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { getQuestions } from '../requests';
//
// function QuestionSummary (props) {
//   const {navigate} = props;
//   return (
//
//     <View style={{marginBottom: 10}}>
//       <TouchableOpacity onPress={() => navigate('QuestionDetail', {id: props.id})}>
//         <Text>{props.title}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
//
// class QuestionsScreen extends Component {
//   // Another feature of ES7, allows to declared "class variables"
//   // by prefixing a variable inside a class with static
//   static navigationOptions = {
//     title: 'Questions'
//   };
//
//   // This is syntax sugar for declaring a property state of
//   // this in the constructor. It's a feature of ES7 which can
//   // be used in react-native
//   state = {
//     questions: []
//   }
//
//   componentDidMount () {
//     getQuestions()
//       .then(questions => {
//         this.setState({questions});
//       })
//   }
//
//   render() {
//     const {questions} = this.state;
//     const {navigate} = this.props.navigation;
//     return (
//       <View>
//         <ScrollView>{
//           questions.map(
//             question => <QuestionSummary
//               key={question.id}
//               navigate={navigate}
//               {...question} />
//           )
//         }</ScrollView>
//         {/* <FlatList
//           data={questions}
//           extraData={this.state}
//           renderItem={question => <QuestionSummary {...question} />}
//           keyExtractor={question => question.id}
//         /> */}
//       </View>
//     );
//   }
// }
//
// export default QuestionsScreen;

/////////////////////=====THE QUESTION LIST STATE ==========////////////


////////////////////===== QUESTION SHOW STATE ========== ////////////////
import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { getQuestions } from '../requests';

function QuestionSummary (props) {
  const {navigate} = props;
  // When using the navigate of react-navigation, you first pass it a string that's
  // name of a route you've declared, then you can pass an object that will hold
  // parameters. In this case, we pass the question id as a parameter.
  // This will be available in the component routed to in
  // this.props.navigation.state.params
  return (
    <View style={{marginBottom: 10}}>
      <TouchableOpacity onPress={() => navigate('QuestionDetail', {id: props.id})}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

class QuestionsScreen extends Component {
  // Another feature of ES7, allows to declared "class variables"
  // by prefixing a variable inside a class with static
  static navigationOptions = {
    title: 'Questions'
  };

  // This is syntax sugar for declaring a property state of
  // this in the constructor. It's a feature of ES7 which can
  // be used in react-native
  state = {
    questions: []
  }

  componentDidMount () {
    getQuestions()
      .then(questions => {
        this.setState({questions});
      })
  }

  render() {
    const {questions} = this.state;
    const {navigate} = this.props.navigation;
    return (
      <View>
        <ScrollView>{
          questions.map(
            question => <QuestionSummary
              key={question.id}
              navigate={navigate}
              {...question} />
          )
        }</ScrollView>
        {/* <FlatList
          data={questions}
          extraData={this.state}
          renderItem={question => <QuestionSummary {...question} />}
          keyExtractor={question => question.id}
        /> */}
      </View>
    );
  }
}

export default QuestionsScreen;
