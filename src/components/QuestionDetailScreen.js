    // console.dir(this.props);
    {/* <Text>{params.id}</Text> */}
    import React, {Component} from 'react';
    import {View, Text, ScrollView} from 'react-native';
    import {getQuestion} from '../requests';

    class QuestionDetailScreen extends Component {
      state = {
        question: {
          answers: []
        }
      };

      componentDidMount () {
        const {params} = this.props.navigation.state;

        getQuestion(params.id)
          .then(question => this.setState({question}));
      }

      render () {
        const {params} = this.props.navigation.state;
        const {question} = this.state;
        return (
          <View>
            <Text style={{fontSize: 30}}>{question.title}</Text>
            <Text>{question.body}</Text>
            <Text style={{fontSize: 20}}>Answers</Text>
            <ScrollView>
              {
                question.answers.map(
                  answer => <Text
                    style={{
                      marginLeft: 5,
                      marginBottom: 5,
                      color: 'grey'
                    }}
                    key={answer.id}>{answer.body}
                  </Text>
                )
              }
            </ScrollView>
          </View>
        );
      }
    }

    export default QuestionDetailScreen;
