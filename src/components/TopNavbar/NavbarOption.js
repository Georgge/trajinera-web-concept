import styles from './topnavbar.module.css'
import {Link} from 'react-router-dom'

function NavbarOption({ nav, type }) {

    return (
        <div className={` ${styles[type]}`}>
           {nav} 
        </div>
    )
}
export default NavbarOption
NavbarOption.defaultProps = {
    type: 'primary',
    type: 'secondary'
}