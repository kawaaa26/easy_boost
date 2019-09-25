import React from 'react';
import axios from 'axios';
import LessonsContainer from './LessonsContainer';
import FormContainer from './FormContainer';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lessons: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/lessons')
      .then((results) => {
        console.log(results)
        this.setState({lessons: results.data})
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="app-main">
        <FormContainer />
        <LessonsContainer lessonData={ this.state.lessons } />
      </div>
    );
  }
}
