import LinkButton from '../layout/LinkButton';
import styles from './Home.module.css';


function Home(){
    
    return (
    <section className={styles.homeContainer}>
        <h1>Bem Vindo ao <span>Wemeson</span></h1>
        <p>Comece a gerenciar os seus projetos agora mesmo!</p>
        <LinkButton to="/newproject" text="Criar Projetos" />
    </section>
    )
}

export default Home;