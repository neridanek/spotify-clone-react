import React from 'react' 
import styles from './SidebarOption.module.scss'

const SidebarOption = ({title,Icon}) => {
    return (
        <div className={styles.sidebarOption}>
        {Icon && <Icon className={styles.sidebarOptionIcon}/>} 
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}
export default SidebarOption