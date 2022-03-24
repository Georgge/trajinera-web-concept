import Promotion from "../../../components/Promotion/Promotion";
import styles from './PromosSection.module.css'
import { useEffect } from 'react';
import {fetchPromotions} from "../../../store/promotionsSlice/promotions.reducers";
import {useDispatch, useSelector} from "react-redux";



function PromosSection () {
    const {entities} = useSelector(state => state.promotions);
    const dispatch = useDispatch();

    useEffect (() => {
      dispatch(fetchPromotions());
    }, []);

    return (
        <div className={`${styles.promos}`}>
            {entities.map((item) => (
                <Promotion title={item?.title} description={item?.description} background={item?.place?.cover?.normal}/>
            ))}
        </div>
    )
}

export default PromosSection
