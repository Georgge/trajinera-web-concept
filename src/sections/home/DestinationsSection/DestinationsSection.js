import DestinationCard from '../../../components/DestinationCard/DestinationCard'
import styles from './destinationssection.module.css'
import { useEffect } from 'react'
import { fetchDestinations } from '../../../store/destinationsSlice/destinations.reducers'
import { useDispatch, useSelector } from "react-redux"

function DestinationsSection () {
    const {entities} = useSelector(state => state.destinations);
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchDestinations());
      }, []);

      console.log(entities);
  
      return (
          <div className={`${styles.mainContainer}`}>
            <h2>Nuestros <span>destinos</span> más populares</h2>
            <div className={`${styles.cardContainer}`}>
                {entities.map((item) => (
                    <DestinationCard imgSrc={item?.place?.cover?.normal} date={item?.startDate} destinationTitle={item?.place?.name} price={item?.price} days={item?.description} btnTitle='Reservar'
                    categoryTitle={item?.type?.title} categoryColor={item?.type?.bgColor} titleColor={item?.type?.textColor}/>
                ))}
            </div>
          </div>
      )
}

export default DestinationsSection