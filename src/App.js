import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { CommonHeader } from './components'
import { Routes } from './configs'

export default class App extends Component {

  render() {

    return (
      <div>
        <CommonHeader link={this.getLink}></CommonHeader>
        <Container fluid>
          <Routes />
        </Container>
      </div>
    );

  }

}
