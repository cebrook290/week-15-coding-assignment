import React, { Component } from 'react';
import HouseList from './Components/HouseList';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>House List</h1>
        <HouseList />
      </div>
    )
  }
}

