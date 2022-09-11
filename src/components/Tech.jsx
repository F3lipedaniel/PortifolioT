import styles from './tech.module.css';

export function Tech () {
    return (
        <aside className={styles.techBox}>
            <div className={styles.techHead}>
                Tecnologias
            </div>
            
            <div className={styles.techComponentsBox1}>
                <span>HTML</span>
                
            
            </div>
            <div className={styles.techComponentsBox2}>
                <span>CSS</span>
                
            
            </div>
            <div className={styles.techComponentsBox3}>
                <span>javascript</span>
                
            
            </div>
            <div className={styles.techComponentsBox4}>
                <span>REACTJS</span>
                
            
            </div>
            <div className={styles.techComponentsBox5}>
                <span>GIT</span>
                
            
            </div>
            <div className={styles.techComponentsBox6}>
                <span>GITHUB</span>
                
            
            </div>
        </aside>
        
    )
}