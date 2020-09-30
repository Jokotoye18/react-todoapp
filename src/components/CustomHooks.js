import {useState, useEffect} from 'react'
import axios from 'axios'

export const useAPI = (endpoint) => {
    const [value, setValue] = useState([])

    useEffect(() => {
        axios.get(endpoint)
        .then(res => {
            setValue(res.data)
        })
        .catch(error => console.log(error))

    }, [endpoint])

    return value
}


const useMike = () => {
    const [mike, setMike] = useState([])


    return mike
}