import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }

    render() {
        const { user } = this.props

        if (!user) {
            return(
                <div>
                    Loading...
                </div>
            )
        }
        return(
            <div>
                {user.name}{': '}{user.email}
            </div>
        )
    }
}

// ownProps: get props from <UserHeader userId={userId} /> at parent
const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(user => user.id === ownProps.userId)

    return {
        user: user
    }
}

export default connect(
    mapStateToProps,
    { fetchUser }
)(UserHeader)