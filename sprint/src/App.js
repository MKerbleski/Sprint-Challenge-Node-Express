import React, { Component } from 'react';

import './App.css';
import styled from 'styled-components';
import axios from 'axios';
// import cors from 'cors';




class App extends Component {
  state = {

  }

  componentDidMount(){
    console.log("CDM")
    axios.get('http://localhost:7000/projects').then(res => { console.log(res);
      this.setState({
        projects: res.data,
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <AppDiv>
        <h1>div</h1>
      </AppDiv>
    );
  }
}

export default App;

const AppDiv = styled.div`
    border: 3px solid red;
`;
