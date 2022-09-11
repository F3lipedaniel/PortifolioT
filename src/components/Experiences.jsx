import styles from './experience.module.css'

export function Experience () {
    return (
        <aside className={styles.experienceBox}>
            <div className={styles.experienceHead}>
             Experiência

             <div className={styles.container1}>
                <div>   
                    <h1>Delivery Direto</h1>
                    <span>2022 - Atualmente <br/>
                    Cx Ops | Metodologias ageis e Aplicativos</span>
                </div>
                <div> 
                    <h1>Grupo Sayonara Gourmet</h1>
                    <span>2021 - 2022 <br/>
                    Supervisor de T.I.</span>
                </div>
                <div> 
                    <h1>Atacadista Mestre</h1>
                    <span>2020 - 2021 <br/>
                    Supervisor de T.I.</span>
                </div>
                <div>   
                    <h1>Supermercado Minas</h1>
                    <span>2017 - 2019 <br/>
                    Supervisor de T.I.</span>
                </div>
              </div>
            </div>
        </aside>
    )
}