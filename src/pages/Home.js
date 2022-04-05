import HeroSection from '../sections/home/HeroSection/HeroSection'
import { Button, Icon } from '../components'
import ActivitiesSection from '../sections/home/ActivitiesSection/ActivitiesSection'
import PromosSection from '../sections/home/PromosSections/PromosSection'
import RegisterSection from '../sections/home/RegisterSection/RegisterSection'
import DestinationsSection from '../sections/home/DestinationsSection/DestinationsSection'

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
            <div>
                <Button type="primary" size="auto-size" />
                <br />
                <Button type="primary" size="small" />
                <br />
                <Button type="primary" size="large" />
                <br />
                <Button type="primary" iconPrefix="" />
                <br />
                <Button type="primary" size="large" iconSufix="" />
            </div>
            <PromosSection/>
            <DestinationsSection/>
            <RegisterSection/>
        </div>
    )
}

export default Home