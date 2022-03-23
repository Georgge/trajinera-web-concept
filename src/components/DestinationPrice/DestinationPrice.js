import styles from './DestinationPrice.module.css'


const DestinationPrice = props => {
    return (
        <div className={`${styles.price}`}>
            <h4>${props.price}</h4><p>/{props.persons}</p>
        </div>
    )
}

DestinationPrice.defaultProps = {
    price: '2,500',
    persons: 'Persona'
}

export default DestinationPrice