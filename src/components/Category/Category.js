import styles from './Category.module.css'


const Category = props => {
    return (
        <div className={`${styles.category}`} style={{ backgroundColor: `${props.categoryColor}` }}>
            <p style={{ color: `${props.categoryTitleColor}` }}>{props.categoryTitle}</p>
        </div>
    )
}

Category.defaultProps = {
    categoryTitle: 'Relajación',
    categoryColor: '#CCC8E6',
    categoryTitleColor: '#8477D9'
}

export default Category