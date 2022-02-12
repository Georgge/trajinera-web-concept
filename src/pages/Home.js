import HeroSection from '../sections/home/HeroSection/HeroSection'
import { Button, Icon } from '../components'

function Home() {
    return (
        <div >
            <HeroSection/>
            <Button type='primary'/> 
            <Icon />
            <Icon icon="" type="brand" color="ligthSilver" size={42} />
            <Icon icon="" color="primaryBlack" />
            <Icon icon="" color="ligthPrimary" />
            <Icon icon="" color="neutralGray" />
        </div>
        
    )
}
export default Home