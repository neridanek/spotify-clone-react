import React from 'react'
import styles from './Footer.module.scss'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {Grid,Slider} from '@material-ui/core'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLeft}>
                <img className={styles.footerAlbumLogo} src="https://b.allegroimg.com/s512/03fac3/4a887cd2420aa3a80959aac324ab/USHER-8701-OKAZJA-24H-APOGEUM" alt=""/>
                <div className={styles.footerSongInfo}>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className={styles.footerCenter}>
                <ShuffleIcon />
                <SkipPreviousIcon className={styles.footerIcon}/>
                <PlayCircleOutlineIcon className={styles.footerIcon}/>
                <SkipNextIcon className={styles.footerIcon}/>
                <RepeatIcon />
            </div>
            <div className={styles.footerRight}>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer