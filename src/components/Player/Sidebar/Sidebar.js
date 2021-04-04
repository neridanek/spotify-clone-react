import React from 'react'
import styles from './Sidebar.module.scss'
import SidebarOption from './SidebarOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useStateValue} from '../../../StateProvider'

const Sidebar = () => {
    const [{playlists},dispatch] = useStateValue()
    return (
        <div className={styles.sidebar}>
            <img className={styles.sidebarLogo} src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>

            <SidebarOption icon={HomeIcon} title="Home"/>
            <SidebarOption icon={SearchIcon}title="Search"/>
            <SidebarOption icon={LibraryMusicIcon}title="Your library"/>
            <br/>
            <strong className={styles.sidebarTitle}>PLAYLISTS</strong>
            <hr/>
            {playlists?.items?.map(playlist=>(<SidebarOption title={playlist.name}/>))}


        </div>
    )
}

export default Sidebar