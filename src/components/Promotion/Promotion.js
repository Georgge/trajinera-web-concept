import Button from '../Button/Button'
import styles from './promotion.module.css'


function Promotion ({title, description, background, width, buttonTitle, handleButtonClick}) {
    return (
        <div className={`${styles.promo}`} style={{ width: `${width}`, backgroundSize: "cover", backgroundImage: `url(${background})` }}>
            <div className={`${styles.container}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button title={buttonTitle} onClick={handleButtonClick}/>
            </div>
        </div>
    )
}

Promotion.defaultProps = {
    buttonTitle: 'Descubre más',
}

export default Promotion