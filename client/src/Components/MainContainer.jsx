import React from 'react';
import axios from 'axios';
import update from 'react-addons-update';
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

  createLesson = (lesson) => {
    axios.post('http://localhost:3001/lessons', { lesson: lesson } )
      .then((response) => {
        const newData = update(this.state.lessons, { $push:[response.data]})
        this.setState({lessons: newData})
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="app-main">
        <FormContainer createLesson={ this.createLesson } />
        <LessonsContainer lessonData={ this.state.lessons } />
      </div>
    );
  }
}
