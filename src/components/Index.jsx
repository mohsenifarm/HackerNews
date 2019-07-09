import React, { Component } from 'react';
import { getPosts } from '../services/api'
import { Link } from 'react-router-dom'

class Index extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }

    }

    componentDidMount() {
        var self = this;
        getPosts().then(function(json) {
            self.setState({posts:json})
        })
    }
    render() {
        var posts = this.state.posts.map((post, idx) => 
            <li key={idx}>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
                <span>Upvote: {post.upvotes}</span>
                <br/>
                <a href="" className="btn btn-success">Upvote</a>
                <br/>
                <a href="" className="btn btn-danger">Downvote</a>
                <br/>
                <hr/>
            </li>
        );
        return(
            <div>
            <h2>React HN</h2>
            <hr/>
            <br/>
            <ul>
                {posts}
            </ul>
            </div>
        )
    }
}
export default Index;