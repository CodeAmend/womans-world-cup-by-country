import React, {Component} from 'react';

class FifaCodeInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fifaCode: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({ fifaCode: '' })
  }

  handleChange(event) {
    this.setState({ fifaCode: event.target.value })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="fifa-code-input">
        <input
          type="text"
          value={this.state.fifaCode}
          onChange={this.handleChange.bind(this)}/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default FifaCodeInput;
