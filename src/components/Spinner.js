import React, { Component } from 'react'
import loading from "../Loader/loader.gif"
export class Spinner extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='text-center'>
          <img src={loading} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="loading"/>
      </div>
    )
  }
}

export default Spinner