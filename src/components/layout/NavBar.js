import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Company</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/newProject'>NewProject</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;