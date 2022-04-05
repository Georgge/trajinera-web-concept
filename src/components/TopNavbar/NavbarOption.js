import styles from './topnavbar.module.css'

function NavbarOption({ nav, type }) {

    return (

        <div className={` ${styles[type]}`}>
        {nav}
        </div>
    )
}
export default NavbarOption
NavbarOption.defaultProps = {
    type: 'secondary'
}