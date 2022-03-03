const [state, setState] = useState({})
    useEffect (() => {
        axios.get("https://trajinera-api-qa.herokuapp.com/promotion").then(({data}) => {
            setState(data.data)
        })
    }, [])
    console.log(state)