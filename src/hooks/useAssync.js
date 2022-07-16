import {useState, useEffect} from 'react'

export const useAssync = (fn, dependencies = []) => {
    const [data, setData] = useState(fn())
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        fn().then(response => {
            setData(response)
            setLoading(false)
        }).catch(err => {
            setError(err)
            setLoading(false)
        }).finally(() => {
            setLoading(false)
        })
    }, dependencies)

    return {data, loading, error}	
}