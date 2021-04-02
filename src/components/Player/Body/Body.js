import React from 'react'
import styles from './Body.module.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Header from './Header'
import {useStateValue} from '../../../StateProvider'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow'



const Body = ({spotify}) => {
    const [{discover_weekly},dispatch] = useStateValue();
    return (
        <div className={styles.body}>
          <Header spotify={spotify} />
    
          <div className={styles.bodyInfo}>
            <img src={discover_weekly?.images[0].url} alt="" />
            <div className={styles.bodyInfoText}>
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description}</p>
            </div>
          </div>
    
          <div className={styles.bodySongs}>
            <div className={styles.icons}>
              <PlayCircleFilledIcon  className={styles.bodyShuffle}/>
              <FavoriteIcon className={styles.bodyfavourite} />
              <MoreHorizIcon className={styles.bodymoreIcon} />
            </div>
    
            {discover_weekly?.tracks.items.map((item) => (
              <SongRow track={item.track} />
            ))}
          </div>
        </div>
      );
}

export default Body;