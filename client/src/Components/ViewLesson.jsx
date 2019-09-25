import React from 'react';

export default class ViewLesson extends React.Component {

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
            </tr>
        </tbody>
        </table>
      </div>
    )
  }

}
