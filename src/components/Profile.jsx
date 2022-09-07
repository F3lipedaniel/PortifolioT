import styles from './Profile.module.css'

export function Profile () {
    return (
        <aside className={styles.profile}>
            <img className={styles.profileAvatar} 
            src="https://github.com/f3lipedaniel.png"/>
            <strong>Felipe Daniel</strong>
            <span>Front-End Developer</span>
        </aside>
    )
}