import React, { Component } from 'react';
import { getPosts, createPost } from '../services/api';

class Create extends Component {
  constructor() {
    super();
    this.state = {
        title: '',
        body: ''
    }
  }
  handleSubmit = (e) => {
      e.preventDefault()
      createPost(this.state).then(function() {
          window.location=('/');
      })
  }
  handleTitle = (e) => {
    this.setState({title: e.target.value})
  }
  handleBody = (e) => {
    this.setState({body: e.target.value})
  }

  render() {
    return(
      <div>
          <h1>Add New Post</h1>
          <hr/>
          <form onSubmit={this.handleSubmit}>
            <label>Post Title : </label>
            <br/>
            <input onChange={this.handleTitle} value={this.state.title} />
            <br/>

            <label>Post Body : </label>
            <br/>
            <textarea onChange={this.handleBody} value={this.state.body}></textarea>
            <br/>

            <input type="submit" className="btn btn-primary" value="Submit Post" />
          </form>
      </div>
    )
  }
}

export default Create;