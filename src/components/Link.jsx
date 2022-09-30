import styles from './link.module.css'
import { MapPin, Suitcase, GithubLogo, LinkedinLogo, TwitterLogo, Globe, Calendar } from 'phosphor-react';
export function Link () {
    return (
        <aside className={styles.link}>
            <div className={styles.pin}>
                <button>
                    <a className={styles.anchor} target="_blank" href='https://www.google.com.br/maps/dir//Q+804+-+Recanto+das+Emas,+Bras%C3%ADlia+-+DF,+72650-800/@-15.9220173,-48.0605658,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a2c941e4c13f3:0x4596aca093680409!2m2!1d-48.0568158!2d-15.9196722'>
                        <MapPin size={24} />
                    </a>
                </button>
                
                <button>
                    <a className={styles.anchor} target="_blank" href='https://site.deliverydireto.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=Institucional-Exata_Delivery-Direto&utm_content=responsivo&gclid=CjwKCAjw4c-ZBhAEEiwAZ105RYjFzOizYRaN72WaIdxNGwlsNRETqQJjvEP9dlW0pbm1iH-NePDd8xoCReIQAvD_BwE'>
                        <Suitcase size={24} />
                    </a>
                </button>
                
                <button>
                    <a className={styles.anchor} target="_blank" href='https://github.com/F3lipedaniel'>
                        <GithubLogo size={24} />
                        </a>
                </button>
                
                
                <button>
                    <a className={styles.anchor} target="_blank" href='https://www.linkedin.com/in/felipe-daniel-20b7221a4/'>
                        <LinkedinLogo size={24} />
                    </a>
                </button>
                
                
                <button>
                    <a className={styles.anchor} target="_blank" href=''>
                        <TwitterLogo size={24} />
                    </a>
                </button>
                
                
                <button>
                    <a className={styles.anchor} target="_blank" href=''>
                        <Globe size={24} />
                    </a>    
                </button>
                
                
                <button>
                    <a className={styles.anchor} target="_blank" href='https://calendly.com/f3lipedaniel/30min'>
                        <Calendar size={24} />
                    </a>    
                </button>
                
                
                <span className={styles.brasilText}>
                    <a className={styles.anchor} target="_blank" 
                        href='https://www.google.com.br/maps/dir//Q+804+-+Recanto+das+Emas,+Bras%C3%ADlia+-+DF,+72650-800/@-15.9220173,-48.0605658,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x935a2c941e4c13f3:0x4596aca093680409!2m2!1d-48.0568158!2d-15.9196722'>
                            Brasil
                    </a>
                </span>
                

                
                <span className={styles.briefcaseText}>
                    <a className={styles.anchor} target="_blank" 
                        href='https://site.deliverydireto.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=Institucional-Exata_Delivery-Direto&utm_content=responsivo&gclid=CjwKCAjw4c-ZBhAEEiwAZ105RYjFzOizYRaN72WaIdxNGwlsNRETqQJjvEP9dlW0pbm1iH-NePDd8xoCReIQAvD_BwE'>
                            Delivery Direto
                    </a>
                </span>
                
                
                
                <span className={styles.githubText}>
                    <a className={styles.anchor} target="_blank" 
                        href='https://github.com/F3lipedaniel'>
                            F3lipedaniel
                        </a>
                </span>
                
                
                <span className={styles.linkedinText}>
                    <a className={styles.anchor} target="_blank"
                        href='https://www.linkedin.com/in/felipe-daniel-20b7221a4/'>
                            F3lipedaniel
                    </a>
                </span>
                
                
                <span className={styles.twitterText}>
                    <a className={styles.anchor} target="_blank"
                        href='https://twitter.com/f3lipedaniel'>
                            F3lipedaniel
                    </a>
                </span>
                
                <span className={styles.siteText}>-</span>
                
                <span className={styles.meetText} src=''>
                    <a className={styles.anchor} target="_blank"
                        href='https://calendly.com/f3lipedaniel/30min'>
                            F3lipedaniel@gmail.com
                    </a>
                </span>
            
                

            </div>
            </aside>


    )
}