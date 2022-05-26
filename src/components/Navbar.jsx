import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item"><NavLink to="/about" className="nav-link" href="#">About</NavLink></li>
              <li className="nav-item"><NavLink to="/business" className="nav-link" href="#">business</NavLink></li>
              <li className="nav-item"><NavLink to="/entertainment" className="nav-link" href="#">entertainment</NavLink></li>
              <li className="nav-item"><NavLink to="/general" className="nav-link" href="#">general</NavLink></li>
              <li className="nav-item"><NavLink to="/health" className="nav-link" href="#">health</NavLink></li>
              <li className="nav-item"><NavLink to="/science" className="nav-link" href="#">science</NavLink></li>           
              <li className="nav-item"><NavLink to="/sports" className="nav-link" href="#">sports</NavLink></li>           
              <li className="nav-item"><NavLink to="/technology" className="nav-link" href="#">technology</NavLink></li>
              
             
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar