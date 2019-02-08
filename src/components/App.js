import React, { Component } from 'react';
import PostList from './PostList'

class App extends Component {
    render() {
        return (
            <div>
                Hello, blog
                <PostList />
            </div>
        )
    }
}

export default App;