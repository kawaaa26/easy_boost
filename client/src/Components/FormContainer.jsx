import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class FormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lesson: ''
    }
  }

  onChangetext(e) {
    this.setState({ lesson: e.target.value })
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              value={ this.state.name }
              placeholder="LESSON NAME"
              onChange={ e => this.onChangetext(e) }
            />
            <FormControl
              type="text"
              value={ this.state.studio }
              placeholder="STUDIO NAME"
              onChange={ e => this.onChangetext(e) }
            />
            <FormControl
              type="text"
              value={ this.state.performer }
              placeholder="PERFORMER NAME"
              onChange={ e => this.onChangetext(e) }
            />
            <FormControl
              type="integer"
              value={ this.state.bag_number }
              onChange={ e => this.onChangetext(e) }
            />
          </FormGroup>
        </form>
        <Button type="submit" onClick={ this.handleSubmit }>Create a New Lesson</Button>
      </div>
    )
  }
}
