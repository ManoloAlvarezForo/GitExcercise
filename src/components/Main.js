import React from 'react';
import { Link } from 'react-router-dom';

const styles =  {
    titleContainer: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center'
    },
    title: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    },
    buttonContainer: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
 }

const Main = () => {
    return(
        <div>
            <div style={styles.titleContainer}>
            <div style={styles.title}>
               <h1>Github Users Excercise</h1>
               <div style={styles.buttonContainer}>
               <Link to="/users">
                 <button>Gihub Users</button>
               </Link>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Main;