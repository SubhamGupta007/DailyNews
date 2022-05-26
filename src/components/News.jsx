import PropTypes from 'prop-types'
import React, { Component , useState} from 'react'
import Newsitem from './Newsitem'
import axios from 'axios'
import Spinner from './Spinner'

export class News extends Component {



    static defaultProps={
        country:'in',
        pagesize:8,
        category:'general',
        
    }
    static propTypes = {
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string,
        
    }

    
    constructor(props) {
        super(props);
        this.state={
            articles:[],
            loading:false,
            page:1,
        }
        document.title=`DailyNews-${this.props.category} news`
    }
    
 
  componentDidMount(){
    //   this.props.setprogress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=324b748578a5453fa17b3a2f660c6b62&page=${this.state.page}&pagesize=${this.props.pagesize}`
    const data = axios.get(url).then((data)=>{
    
        // console.log(data);
        this.setState({articles:data.data.articles});

        // console.log(this.articles);
        
    });
    // this.props.setprogress(100)
   
  }
    handlenextclick=()=>{
 
        this.setState({page:this.state.page+1})
        this.componentDidMount();
    }
    handlepreviousclick=()=>{
        this.state({page:this.state.page-1});
        this.componentDidMount();
    }   
  render() {
    
    return (
        <>

        <div className="container">
            <h1 className="text-center my-3">
            DailyNews - Top Headlines on {this.props.category}
            </h1>
            {this.state.loading && <Spinner/>}
           
            <div className="row">
                {!this.state.loading && this.state.articles.map((elem)=>{
                    console.log(elem);
                    return <div className="col-md-4">
                    <Newsitem key={elem.content} author={elem.author} source={elem.source.name} date={elem.publishedAt} title={elem.description} description={elem.title} imageurl={elem.urlToImage} newsurl={elem.url}/>
                    </div>
                })}
            </div>

        </div>
        <div className="container d-flex justify-content-between">
            <button  disabled={this.state.page<1}  className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; Previous</button>
            <button className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>

        </div>
        
     
        </>
      
    )
  }
}

export default News