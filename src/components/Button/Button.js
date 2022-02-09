import styles from './button.module.css'

function Button ( {title, type} ){
    
    return(
        <button className={`${styles.button} ${styles[type]}`}>
            {title}
        </button>
    )
}
export default Button
Button.defaultProps = {
    title:'Title',
    type:'primary',
    type: 'secondary'
}