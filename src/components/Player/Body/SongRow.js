import React from 'react'
import styles from "./SongRow.module.scss"

const SongRow = ({track,playSong}) =>{
    return(
        <div className={styles.songRow} onClick={playSong(track.id)}>
            <img className={styles.songRowAlbum} src={track.album.images[0].url} alt=""/>
            <div className={styles.songRowInfo}>
                <h1>{track.name}</h1>
                <p>{track.artists.map((artist)=>artist.name).join(", ")}-{""}
                {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow