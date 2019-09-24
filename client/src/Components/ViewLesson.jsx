import React from 'react';

export default class ViewLesson extends React.Component {

  render() {
    return (
      <div>
        <span>{ this.props.data.lesson }</span>
      </div>
    )
  }

}
