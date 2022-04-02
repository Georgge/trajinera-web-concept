import styles from './registersection.module.css'
import img2 from '../../../assets/images/img2.png'
import Register from "../../../components/Register/Register";


function RegisterSection() {


    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.title}>No lo olvides, registrate hoy y recibe un <span className={styles.desc}>30% de descuento</span> en tu primer viaje.
                </div>
            </div>

            <div className={styles.img}>
                <img src={img2}></img>

                <div className={styles.cont}>
                    <Register/>
                </div>
            </div>
            <div className={styles.textend}>
                © 2022 Trajinera Concept All rigths reserved
            </div>
        </div>

    )
}
export default RegisterSection