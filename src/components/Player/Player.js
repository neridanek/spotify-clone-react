import React from 'react';
import styles from './Player.module.scss'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const Player = ({spotify}) => {
    return (
        <div className={styles.player}>
            <div className={styles.playerBody}>
            <Sidebar/>
            <Body spotify={spotify}/>
            </div>

            <Footer/>
            <h1>Welcome in spotify</h1>
        </div>
    )
}

export default Player