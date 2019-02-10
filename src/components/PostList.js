import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions'

import UserHeader from './UserHeader'

class PostList extends Component {
    
    // redux listener: 148-150 udemy "Redux is not magic"
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return(
                <div key={post.id}>
                    <div>
                        <h3>
                            {post.id}{'. '}{post.title}
                        </h3>
                    </div>
                    <div>
                        <p>
                            {post.body}
                        </p>
                    </div>
                    <UserHeader userId={post.userId} />
                    <br />
                </div>
            )
        })
    }

    render() {
        return(
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToPosts = (state) => {
    return {
        posts: state.posts
    }
}

// The connect function will store.dispatch(action) behind the screen for us
export default connect(
    mapStateToPosts, //suppose to be mapStateToPosts
    { fetchPostsAndUsers }
)(PostList);