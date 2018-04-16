import React from 'react';
import { Link } from 'react-router-dom';

const styles =  {
    titleContainer: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      height: '100vh'
    },
    title: {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      fontSize: '50px'
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
               <div>Github Users Excercise</div>
               <div style={styles.buttonContainer}>
               <Link className="button is-primary" to="/users">
                  Github Users
               </Link>
               </div>
            </div>
            </div>
        </div>
    )
}

export default Main;