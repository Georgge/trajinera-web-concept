import Promotion from "../../../components/Promotion/Promotion";
import styles from './PromosSection.module.css'
import axios from "axios"
import { useState, useEffect } from 'react';



function PromosSection () {
    const [state, setState] = useState([])
    useEffect (() => {
        axios.get("https://trajinera-api-qa.herokuapp.com/promotion").then(({data}) => {
            setState(data.data)
        })
    }, [])
    return (
        <div className={`${styles.promos}`}>
            {state.map((item) => (
                <Promotion title={item?.title} description={item?.description} background={item?.place?.cover?.normal}/>
            ))}
        </div>
    )
}

export default PromosSection
