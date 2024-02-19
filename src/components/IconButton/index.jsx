import styles from './iconbutton.module.css'

export const IconButton = ({ icon, ...rest }) => {
    return <button {...rest} className={styles['btn-icon']}>
        {icon}
    </button>
}