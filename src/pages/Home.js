import HeroSection from '../sections/home/HeroSection/HeroSection'
import { Button, Icon } from '../components'
import ActivitiesSection from '../sections/home/ActivitiesSection/ActivitiesSection'


function Home() {
    return (
        <div >
            <HeroSection />
            <Button type='primary' />
            <Icon />
            <Icon icon="" type="brand" color="ligthSilver" size={42} />
            <Icon icon="" color="primaryBlack" />
            <Icon icon="" color="ligthPrimary" />
            <Icon icon="" color="neutralGray" />
            <ActivitiesSection />
        </div>

    )
}
export default Home