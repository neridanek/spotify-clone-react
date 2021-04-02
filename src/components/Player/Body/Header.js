import React from 'react'
import styles from './Header.module.scss'
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core'
import { useStateValue } from '../../../StateProvider';

const Header = () => {
    const [{user},dispatch] = useStateValue();
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <SearchIcon/>
                <input placeholder="" type="text"/>
            </div>
            <div className={styles.headerRight}>
            <Avatar alt={user?.display_name} src={user?.images[0].url} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;