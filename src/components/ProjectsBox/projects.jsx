import styles from './projects.module.css'
import { Star,GitBranch, FolderSimple, Circle } from 'phosphor-react';


const boxes = [
    {
        link:'https://github.com/F3lipedaniel/NLW_IGNITE',
        title: 'NLW eSports',
        description: 'Aplicação desenvolvida em ReactJs E ReactNative que publica anúncios e escolhe parceiros para jogar',
    },
    {
        link:'https://github.com/F3lipedaniel/redeSocial',
        title: 'Rede social',
        description: 'Página que simula uma rede social feita em ReactJs no curso ignite da Rocketseat',
    },
    {
        link: 'https://site.deliverydireto.com.br/',
        title: 'Delivery Direto (Grupo LOCAWEB)',
        description: 'Analista de processos, atualização e transferência de aplicativos, apresentação de métricas, resultados e metas para líderes e colaboradores.',
    },
    {
        link:'https://www.linkedin.com/posts/felipe-daniel-20b7221a4_software-negaejcios-treinamento-activity-6911396401587314688-N4IZ?utm_source=share&utm_medium=member_desktop',
        title: 'Sayonara Gourmet',
        description: 'Supervisor de T.I | Implementação de sistemas e processos, manutenção diária de hardwares, atualização de sistemas, treinamento de colaboradores e processos a serem implementados, documentação  e infraestrutura.',

    },
    {
        link:'https://github.com/F3lipedaniel/Calcula-comissao',
        title: 'Calculadora de comissão',
        description: 'Calculadora que simular a porcentagem ganha por cada colaboradores de acordo com a quantidade vendida',
    },
    {
        link:'',
        title: 'S.A assessoria e contabilidade',
        description: 'Rotinas trabalhistas de admissão, demissão, folha de pagamento, rescisão e afins.',
    },
]


export function ProjectsHead ( ) {
    return (
        <aside className={styles.projectsHead}>
            <div>
                <h1>My Projects</h1>
                <span>Ver Todos</span>
            
            </div>
                {
                 boxes.map(i => (
                    <ProjectBox
                    link={i.link}
                    title={i.title}
                    description={i.description}
                    
                    />
                    
                 )
                 )
             }
        
        </aside>
    )
}

export function ProjectBox ({ title, description, link}) {
    return (                
    <aside className={styles.projectsBox}>
        <div >
            <div>
            <header>
                <button title='Acessar Projeto'>
                    <a className={styles.title1} target={'_blank'} href={link}>
                        <FolderSimple size={24} />
                    </a>
                </button>
                <h1>
                    <a className={styles.title1} target={'_blank'} href={link}>
                        {title}
                    </a>
                </h1>
                <h3>
                    <a className={styles.description} target={'_blank'} href={link}>
                        {description}
                    </a>
                </h3>
            </header>
            <footer>
                <button title='Gostei'>
                    <a className={styles.title1} target={'_blank'} href={link}>
                        <Star size={20} />
                    </a>
                </button>
                <button title='Commits'>
                    <a className={styles.title1} target={'_blank'} href={link}>
                        <GitBranch size={20} />
                    </a>
                </button>
            <footer className={styles.content}>
                    <button>
                        
                            <Circle color='lightblue' size={20}  weight="duotone" />
                        
                    </button>
            </footer>
            </footer>

            </div>
            
        </div>
        
        </aside>

        )
    }
    
