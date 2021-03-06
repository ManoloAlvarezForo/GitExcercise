import React, { Component } from 'react';
import CardList from '../components/CardList';
import UserCard from '../components/UserCard';
import { loadUsers } from '../actions/usersActions'
import { connect } from 'react-redux';
import store from '../store/store';

const styles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    navTitle: {
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '10px',
        color: 'white'
    }
}


class UserListPage extends Component {

    componentDidMount() {
        store.dispatch(loadUsers());
    }
    render() {

        return (
            <div style={styles.mainContainer}>
                <nav className="navbar is-fixed-top" style={styles.navTitle} aria-label="main navigation">
                    <div style={styles.title}>
                     <i className="fa fa-github" style={{fontSize: '32px'}}></i> 
                     <div style={{ marginLeft:'5px', display: 'flex', justifyContent:'center', flexDirection:'column'}}>Github Users</div>
                    </div>
                </nav>
                <CardList cards={this.props.users.map((user, index) => <UserCard key={user.id} user={user} />)} />
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