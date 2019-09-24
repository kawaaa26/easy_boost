import React from 'react';
import ViewLesson from './ViewLesson'

export default class LessonsContainerV extends React.Component {
  render() {
    return (
      <div className="lessonsList">
        { this.props.lessonData.map((data) => {
          return (
            <ViewLesson data={ data } key={ data.id } />
          )
        })}
      </div>
    )
  }
}

