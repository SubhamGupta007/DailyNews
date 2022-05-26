import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import {Router,Routes,Route} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  pageSize = 8;
 
  state = {
    progres:0
  }
 
  setprogress=(progress)=>{
    this.setstate({progres:progress})
  }

  render() {
    return (
      <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={<News setprogress={this.setprogress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
        <Route exact path="/business" element={<News setprogress={this.setprogress} key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route> 
        <Route exact path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route> 
        <Route exact path="/general" element={<News setprogress={this.setprogress} key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route> 
        <Route exact path="/health" element={<News setprogress={this.setprogress} key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route> 
        <Route exact path="/science" element={<News setprogress={this.setprogress} key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route> 
        <Route exact path="/sports" element={<News setprogress={this.setprogress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route> 
        <Route exact path="/technology" element={<News setprogress={this.setprogress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route> 
      </Routes>
    
    </div>
      
    )
  }
}

