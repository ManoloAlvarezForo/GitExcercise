import React, { Component } from 'react';
import CardList from '../components/CardList';
import UserCard from '../components/UserCard';
import usersMock  from '../mocks/users'

const styles ={
    mainContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    navTitle: {
         flexDirection: 'column',
         display: 'flex', 
         justifyContent: 'center',
         marginLeft: '10px'
    }
}


class UserListPage extends Component {

    constructor(props) {
        super();
        this.state = {
            users: usersMock
        }
    }

    render() {
        
        return (
            <div style={styles.mainContainer}>
                <nav className="navbar" style={styles.navTitle} aria-label="main navigation">
                    <div style={styles.navTitle}>
                            Git Users
                    </div>
                </nav>
                <CardList cards={ this.state.users.map((user, index) => <UserCard key={user.id} user={user} />)} />
            </div>
        )
    }
}


export default UserListPage;