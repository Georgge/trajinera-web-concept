import NavbarOption from './NavbarOption'
import { Link } from 'react-router-dom'

function TopNavbar() {
    return (
        <div> 
            <NavbarOption nav='INICIO' />
            <NavbarOption nav='ACTIVIDADES'/>
            <NavbarOption nav='PROMOCIONES'/>
            <NavbarOption nav='POPULARES'/>
            <Link to='/login'><NavbarOption nav='LOGIN' type='primary' /></Link>
        </div>
    )
}
export default TopNavbar