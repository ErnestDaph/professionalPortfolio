import styles from '../About/About.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function About() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>Créer, partager, inspirer : bienvenue dans mon univers</h1>
                <p>
                    Bienvenue dans mon univers ! Je suis votre hôte : Daphnée Ernest. Une passionnée de technologie et de marketing digital. Mon parcours est un mélange UNIQUE de compétences en gestion de projet, marketing digital et développement full stack.
                </p>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2>Un apperçu de ma personne : </h2>
                        <p>
                            Guidée par mes valeurs et l'envie de partager, je conçois et réalise des projets mêlant à la fois créativité et authenticité.
                        </p>
                    </div>
                    <div className={styles.h2footer}>
                     <Button variant="secondary" onClick={() => navigate('/about')}>A propos de moi</Button>   
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2>Mes différentes compétences</h2>
                        {/* Trouver des icônes et/ou visuels */} 
                    </div>
                    <div className={styles.h2body}>
                        <div className={styles.listCompetences}>
                            <h3>- ma technique</h3>
                            <ul>
                                <li>Adapation du contenu selon le support et/ou le public</li>
                                <li>Création de projet créatifs et authentiques</li>
                                <li>Design UX/UI et communication visuelle</li>
                                <li>Développement web</li>
                                <li>Gestion campagne SEO & SEA</li>
                                <li>Mise en valeur de projets et storytelling</li>
                            </ul>
                        </div>
                        <div className={styles.listCompetences}>
                            <h3>- mon savoir-être</h3>
                            <ul>
                                <li>Adaptabilité et polyvalence</li>
                                <li>Capacité à partager et collaborer </li>
                                <li>Créativité et sens de l'innovation</li>
                                <li>Curiosité et soif d'apprendre</li>
                                <li>Esprit positif et énergie communicative</li>
                                <li>Ouverture et écoute des autres</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.h2footer}>
                        <p>Mes compétences ont été dévelopées durant mes différentes expériences professionnelles.</p>
                        <p>Pour les décourvrir en détails, rendez-vous dans la section "Expériences"</p>
                     <Button variant="secondary" onClick={() => navigate('/experiences')}>Voir mes expériences</Button>   
                    </div>
                </div>
                     <div className={styles.mainContainer}>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2>Mes actualités </h2>
                        <p>
                            Mon expériences professionnelles ne sont pas les seuls éléments qui attestent de mes compétences. En dehors du travail, je réalise des projets qui me tiennent à coeurs.
                            Je vous propose une autre facette de moi à travers mes actualités. 
                        </p>
                    </div>
                    <div className={styles.h2footer}>
                     <Button variant="secondary" onClick={() => navigate('/blog')}>Voir mes actualités</Button>   
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default About;