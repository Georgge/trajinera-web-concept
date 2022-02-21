import { Icon } from '..'
import styles from './activitycard.module.css'

function ActivityCard({ title, icon, text, link }) {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.icon}`}><Icon icon={icon} color='pureWhite'/>
            </div>
            <div className={`${styles.title}`}>
                {title}
            </div>
            <hr />
            <div className={`${styles.text}`}>
                {text}
            </div>
            <div className={`${styles.link}`}>
                {link}
                <Icon icon='' color='--primaryBlack' size={14}/>
            </div>
        </div>
    )
}

export default ActivityCard
ActivityCard.defaultProps = {
    title: 'Paseos Turisticos',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    link: 'Conocer más'
}