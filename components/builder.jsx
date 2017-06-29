// import React from 'react'
import ReactDom from 'react-dom'
import Greetings from './greetings.jsx'
const {Component} = React
class Hello extends Component {
  render() {
    return(
      <Greetings />
    )
  }
}

ReactDom.render(
  <Hello />,
  document.getElementById('main')
)
