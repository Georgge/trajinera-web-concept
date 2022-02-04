import styles from './herosection.module.css'
import logo from '../../../assets/icons/logo.png'

function HeroSection() {
    return (
            <div className={styles["hero-container"]}>
                <img src={logo} className={styles.logo}></img>
                <p className={styles.tittle}>Explora <span className={styles.México}>México</span> de otra manera.</p>
            </div>
    )
}
export default HeroSection