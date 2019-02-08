import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends Component {
    
    // redux listener: 148-150 udemy "Redux is not magic"
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

// The connect function will dispatch behind the screen for us
export default connect(
    null, //suppose to be mapStateToPosts
    { fetchPosts }
)(PostList);