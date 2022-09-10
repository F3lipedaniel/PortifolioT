import styles from './link.module.css'

export function Link () {
    return (
        <aside className={styles.link}>
            <div className={styles.pin}>
                <img className={styles.mapPin} src='src\assets\map-pin.svg'></img>
                <img className={styles.briefcasePin} src='src\assets\briefcase.svg'></img>
                <img className={styles.githubPin} src='src\assets\github.svg'></img>
                <img className={styles.linkedinPin} src='src\assets\linkedin.svg'></img>
                <img className={styles.twitterPin} src='src\assets\twitter.svg'></img>
                <img className={styles.globePin} src='src\assets\globe.svg'></img>
                <img className={styles.mailPin} src='src\assets\mail.svg'></img>
            </div>
            <div>
                <span className={styles.brasilText}>Brasil</span>
                <span className={styles.briefcaseText}>Delivery Direto</span>
                <span className={styles.githubText}>F3lipedaniel</span>
                <span className={styles.linkedinText}>F3lipedaniel</span>
                <span className={styles.twitterText}>F3lipedaniel</span>
                <span className={styles.siteText}>-</span>
                <span className={styles.emailText} src=''>F3lipedaniel@gmail.com</span>
            </div>
        </aside>
    )
}