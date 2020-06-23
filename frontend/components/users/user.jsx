import React from "react";

class User extends React.Component {

    componentDidMount() {
        this.props.fetchUser(this.props.user.id);
    }

    render () {
        return (
            <div>This is the user page</div>
        );
    }
}

export default User;