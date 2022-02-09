import NavbarOption from './NavbarOption'

function TopNavbar() {
    return (
        <div>
            <NavbarOption nav='INICIO'/>
            <NavbarOption nav='ACTIVIDADES'/>
            <NavbarOption nav='PROMOCIONES'/>
            <NavbarOption nav='POPULARES'/>
            <NavbarOption nav='ENTRAR' type='primary'/>
        </div>
    )
}
export default TopNavbar