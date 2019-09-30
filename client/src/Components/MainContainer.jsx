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
    console.log(lesson)
    axios.post('http://localhost:3001/lessons', { lesson: lesson } )
      .then((response) => {
        const newData = update(this.state.lessons, { $push:[response.data] })
        this.setState({ lessons: newData })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  deleteLesson = (id) => {
    axios.delete(`http://localhost:3001/lessons/${id}`)
      .then((response) => {
        const lessonIndex = this.state.lessons.findIndex(x => x.id === id)
        const deletedLessons = update(this.state.lessons, { $splice: [[lessonIndex, 1]] })
        this.setState({ lessons: deletedLessons })
        console.log('set')
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="app-main">
        <FormContainer handleAdd={ this.handleAdd } createLesson={ this.createLesson } />
        <LessonsContainer lessonData={ this.state.lessons } deleteLesson={ this.deleteLesson } />
      </div>
    );
  }
}
