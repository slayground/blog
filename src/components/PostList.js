import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'

class PostList extends Component {
    
    // redux listener: 148-150 udemy "Redux is not magic"
    componentDidMount() {
        this.props.fetchPosts();
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
    { fetchPosts }
)(PostList);