import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux'

@onClickOutside
@connect()
class App extends React.Component {

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default App;
