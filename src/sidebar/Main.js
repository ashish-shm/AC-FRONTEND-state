import React from 'react'
import Heading from './Components/Heading'
import Menu from './Components/Menu'


class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: true,
    }
  }
  handleShow = () => {
    this.setState({
      visibility: true,
    })
  }
  handleHide = () => {
    this.setState({
      visibility: false,
    })
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <Heading />
          <button onClick={this.handleHide}>Hide</button>
          <Menu />
        </div>
      )
    } else {
      return (
        <div>
          <Heading />
          <button onClick={this.handleShow}>Show</button>
        </div>
      )
    }
  }
}

export default Main
