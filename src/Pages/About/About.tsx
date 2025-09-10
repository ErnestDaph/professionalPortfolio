import styles from '../About/About.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

function About() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <h1>À propos de moi</h1>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2>Qui suis-je ? </h2>
                        <p> Je m'appelle Daphnée Ernest, de nature curieuse et créative, je suis guidée par mes valeurs d'innovation et d'excellence. J'aime explorer de nouvelles idées et les transformer en solutions concrètes.</p>
                    </div>
                </div>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2> - Une cheffe de projets -</h2>
                    </div>
                    <div className={styles.h2body}>
                        <p>Passionnée par la création d'application innovantes et performantes, c'est en enfilant ma casquette de cheffe de projet que j'exploite mon plein potentiel.</p>
                        <p>Mon parcours professionnel m'a permis de travailler sur divers projets, allant de petites applications à des plateformes complexes. J'aime relever les défis techniques et collaborer avec des équipes multidisciplinaires pour atteindre des objectifs communs.</p>
                    </div>
                    <Button variant="secondary" onClick={() => navigate('/experiences')}>Voir mes expériences</Button>
                    {/* mettre un lien vers experiences en particulier vers la partie gestion de projet */}
                </div>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2> - Une marketeuse spécialisée dans le digital -</h2>
                    </div>
                    <div className={styles.h2body}>
                        <p>Passionnée par la création d'application innovantes et performantes, c'est en enfilant ma casquette de marketeuse que j'exploite mon plein potentiel.</p>
                    </div>
                    <Button variant="secondary" onClick={() => navigate('/experiences')}>Voir mes expériences</Button>
                    {/* mettre un lien vers experiences en particulier vers la partie marketing */}
                </div>
                <div className={styles.h2Container}>
                    <div className= {styles.h2header}>
                        <h2> - Une développeuse full stack -</h2>
                    </div>
                    <div className={styles.h2body}>
                        <p>Aujourd'hui, je possède des connaissances solides dans le développement full stack, ce qui me permet de travailler sur l'ensemble du processus de création d'applications, de la conception à la mise en production.</p>
                        <p>En dehors du développement, je suis également intéressée par le design UX/UI, ce qui me permet d'avoir une approche centrée sur l'utilisateur dans mes projets. Je crois fermement que la technologie doit être accessible et utile pour tous.</p>
                    </div>
                </div>
                <div className={styles.h2footer}>
                    <p>Pour en savoir plus, je vous invite à directement me contacter</p>
                    <Button variant="secondary" onClick={() => navigate('/contact')}>Me contacter</Button>
                </div>
            </div>
        </div>
    );
}
export default About;