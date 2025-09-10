import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import styles from './NavBar.module.css';
import barMenu from '../../assets/icons/barMenu.svg';


function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const localisation = useLocation();
    const toggleMenu = () => setIsOpen(prev => !prev);
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
               <a href="/home" className={styles.link}>
                   <p className={styles.name}>Daphnée Ernest</p>
               </a>
            </div>
            <a href="#menu" className={styles.burger} onClick={toggleMenu}><img src={barMenu} alt="Menu" /></a>
            <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
                <li><a href='/about' className={localisation.pathname === '/about' ? styles.active : ''}>À propos</a></li>
                <li><a href="/experiences" className={localisation.pathname === '/experiences' ? styles.active : ''}>Expériences</a></li>
                <li><a href='/blog' className={localisation.pathname === '/blog' ? styles.active : ''}>Actualités</a></li>
                <li><a href='/contact' className={localisation.pathname === '/contact' ? styles.active : ''}>Contact</a></li>
                </ul>
        </nav>
    );
}

export default Navbar;

