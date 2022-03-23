import { Icon } from '..'
import styles from './DestinationTitle.module.css'


const DestinationTitle = props => {
    return (
        <div className={`${styles.destination}`}>
            <Icon icon='&#xf5a0;' color='mainBrand' size={17}/>
            <h4>{props.title}</h4>
        </div>
    )
}

DestinationTitle.defaultProps = {
    title: 'Destination'
}

export default DestinationTitle