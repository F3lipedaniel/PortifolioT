import styles from './education.module.css'

export function Education () {
    return (
        <aside className={styles.educationBox}>
            <div className={styles.educationHead}>
                Educação
                
                <div className={styles.container1}>
                <div>   
                    <h1>Uniceub</h1>
                    <span>2022 - Atualmente <br/>
                    Análise e Desenvolvimento de Sistemas</span>
                </div>
                <div> 
                    <h1>Rocketseat</h1>
                    <span> 2022 <br/>
                    ReactJs
                    </span>
                </div>
                <div> 
                    <h1>Rocketseat</h1>
                    <span>2022 <br/>
                    Trilha - Conectar</span>
                </div>
                <div>   
                    <h1>B7 Web</h1>
                    <span>2021 - 2022<br/>
                    Desenvolvimento Web</span>
                </div>
                </div>
            </div>
        </aside>
    )
}