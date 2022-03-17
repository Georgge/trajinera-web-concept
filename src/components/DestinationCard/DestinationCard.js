import styles from './DestinationCard.module.css'
import Category from '../Category/Category'
import DestinationTitle from '../DestinationTitle/DestinationTitle'
import DestinationPrice from '../DestinationPrice/DestinationPrice'
import Button from '../Button/Button'


const DestinationCard = props => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.container1}`}>
                <img src={props.imgSrc} alt='Imagen'/>
                <p>{props.date}</p>
            </div>
            <div className={`${styles.container2}`}>
                <Category categoryTitle={props.categoryTitle} categoryColor={props.categoryColor}/>
                <p className={`${styles.days}`}>{props.days}</p>
            </div>
            <div className={`${styles.destTitle}`} >
                <DestinationTitle title={props.destinationTitle}/>
            </div>
            <div className={`${styles.container3}`} >
                <DestinationPrice/>
                <Button title={props.btnTitle} size='auto-size'/>
            </div>
        </div>
    )
}

export default DestinationCard