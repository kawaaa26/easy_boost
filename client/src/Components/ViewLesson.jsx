import React from 'react';
import { Button } from 'react-bootstrap'

export default class ViewLesson extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     lesson: '',
  //     name: '',
  //     studio: '',
  //     prformer: '',
  //     bag_number: ''
  //   }
  // }

  handleDelete = () => {
    this.props.onDelete(this.props.data.id)
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>NAME</td>
              <td>STUDIO</td>
              <td>PERFORMER</td>
              <td>BAG NUMBER</td>
              <td>CANCELLATION</td>
            </tr>
            <tr>
              <td>
                { this.props.data.name }
              </td>
              <td>
                { this.props.data.studio }
              </td>
              <td>
                { this.props.data.performer }
              </td>
              <td>
                { this.props.data.bag_number }
              </td>
              <td>
                { this.props.data.cancellation }
              </td>
              <td>
                <Button className="deleteButton" onClick={ this.handleDelete }>X</Button>
              </td>
            </tr>
        </tbody>
        </table>
      </div>
    )
  }

}
