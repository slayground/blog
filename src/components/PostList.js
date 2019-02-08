import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends Component {
    
    // redux listener: 148-150 udemy
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return(
            <div>
                Post List
            </div>
        )
    }
}

export default connect(
    null, //suppose to be mapStateToPosts
    { fetchPosts }
)(PostList);