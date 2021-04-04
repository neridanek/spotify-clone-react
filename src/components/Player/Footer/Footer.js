import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import styles from './Footer.module.scss';
import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useStateValue();

 

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

    return (
        <div className={styles.footer}>
            <div className={styles.footerLeft}>
                <img className={styles.footerAlbumLogo} src={item?.album.images[0].url} alt={item?.name}/>
                {item ?<div className={styles.footerSongInfo}>
                        <h4>{item.name}</h4>
                        <p>{item.artists.map(artist=>artist.name.join(", "))}</p>
                    </div> 
                :
                    <div className={styles.footerSongInfo}>
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>}
            </div>
            <div className={styles.footerCenter}>
                <ShuffleIcon />
                <SkipPreviousIcon onClick={skipPrevious} className={styles.footerIcon}/>
                {playing ? <PlayCircleOutlineIcon onClick={handlePlayPause}className={styles.footerIcon} fontSize="large"/> : <PauseCircleOutlineIcon onClick={handlePlayPause}className={styles.footerIcon} fontSize="large"/>}
                <SkipNextIcon onClick={skipNext} className={styles.footerIcon}/>
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