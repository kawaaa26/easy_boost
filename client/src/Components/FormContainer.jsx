import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class FormContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lesson: '',
      name: '',
      studio: '',
      performer: '',
      bag_number: ''
    }
  }

  onChange(key, value) {
    console.log('a')
    this.setState({ [key]: value })
  }

  handleSubmit = () => {
    this.props.createLesson(this.state)
    this.setState({name:'', studio: '', performer: '', bag_number: ''})
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
              onChange={ event => this.onChange("name", event.target.value) }
            />
            <FormControl
              type="text"
              value={ this.state.studio }
              placeholder="STUDIO NAME"
              onChange={ event => this.onChange("studio", event.target.value) }
            />
            <FormControl
              type="text"
              value={ this.state.performer }
              placeholder="PERFORMER NAME"
              onChange={ event => this.onChange("performer", event.target.value) }
            />
            <FormControl
              type="integer"
              value={ this.state.bag_number }
              onChange={ event => this.onChange("bag_number", event.target.value) }
            />
          </FormGroup>
        </form>
        <Button type="submit" onClick={ this.handleSubmit }>Create a New Lesson</Button>
      </div>
    )
  }
}
