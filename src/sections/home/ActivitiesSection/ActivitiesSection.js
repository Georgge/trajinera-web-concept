import { ActivityCard } from "../../../components"
import styles from './activities.module.css'


function ActivitiesSection (){
    return(
        <div className={styles.card}>
            <ActivityCard title='Paseos Turisticos' icon=''/>
            <ActivityCard title='Campamento' icon=''/>
            <ActivityCard title='Viaje de Aventura' icon=''/>
            <ActivityCard title='Pueblos Mágicos' icon=''/>
        </div>
    )
}
export default ActivitiesSection