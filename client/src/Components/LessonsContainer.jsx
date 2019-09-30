import React from 'react';
import ViewLesson from './ViewLesson'

export default class LessonsContainer extends React.Component {
  render() {
    return (
      <div className="lessonsList">
        { this.props.lessonData.map((data) => {
          return (
            <ViewLesson data={ data } key={ data.id } onDelete={ this.props.deleteLesson } />
          )
        })}
      </div>
    )
  }
}

