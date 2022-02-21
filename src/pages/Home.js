import HeroSection from '../sections/home/HeroSection/HeroSection'
import { Button, Icon } from '../components'

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
        </div>

    )
}
export default Home