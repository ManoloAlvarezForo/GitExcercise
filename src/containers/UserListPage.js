import React, { Component } from 'react';
import CardList from '../components/CardList';
import UserCard from '../components/UserCard';
import { loadUsers } from '../actions/usersActions'
import { connect } from 'react-redux';
import store from '../store/store';

const styles ={
    mainContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    navTitle: {
         flexDirection: 'column',
         display: 'flex', 
         justifyContent: 'center',
    },
    title: {
        flexDirection: 'column',
         display: 'flex', 
         justifyContent: 'center',
        marginLeft: '10px'
    }
}


class UserListPage extends Component {

    componentDidMount() {
        store.dispatch(loadUsers());
    }
    render() {
        
        return (
            <div style={styles.mainContainer}>
                <nav className="navbar" style={styles.navTitle} aria-label="main navigation">
                    <div style={styles.title}>
                            Git Users
                    </div>
                </nav>
                <CardList cards={ this.props.users.map((user, index) => <UserCard key={user.id} user={user} />)} />
            </div>
        )
    }
}


const mapStateToProps = state => {
    if (!state.users) {
        state = {
            users: []
        }
    }

    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);