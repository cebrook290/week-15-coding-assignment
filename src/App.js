import React, { Component } from 'react';
import HouseList from './Components/HouseList';
import '../node_modules/bootstrap/dist/css/bootstrap.css' 
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
        <h1 className='p-5 bg-secondary text-white text-center'>House List</h1> <br/>
        <HouseList />
      </div></div>
    )
  }
}

