import styles from './herosection.module.css'
import logo from '../../../assets/icons/logo.png'
import TopNavbar from '../../../components/TopNavbar/TopNavbar'

function HeroSection() {
    return (
        <div className={styles["hero-container"]}>
            <div className={styles.logo}>
                <img src={logo}></img>
                <div className={styles.navbar}>
                    <TopNavbar />
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.tittle}>Explora<span className={styles.mexico}>México</span> de otra manera.
                </div>
            </div>
        </div>
    )
}
export default HeroSection