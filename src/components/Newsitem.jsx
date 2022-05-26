import PropTypes from 'prop-types'
import React, { Component } from 'react'
import def from "../images/newsimage.jpg"


export class Newsitem extends Component {
  static propTypes = {}
  

  render() {
      let {title,description,imageurl,newsurl,author,date,source} = this.props
    return (
      <div className="container my-3">
          {/* <h5>24hrNews - Top Headlines </h5> */}
         
        <div className="card w-100 h-75" >
                <img src={imageurl==null ? def : imageurl} className="card-img-top h-50 " alt="..."/>
                <div className="card-body">
                  
                <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%"}}>
    {source}</span></h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {author===null ? 'anonymous' : author} on {new Date(date).toGMTString()} </small></p>
                <a href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
                </div>
        </div>
      </div>
       
    )
  }
}

export default Newsitem