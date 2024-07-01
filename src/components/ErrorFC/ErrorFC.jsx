import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

export const ErrorFC = () => {
    const [data, loading, error] = useJsonFetch('https://use-json-fetch-back.onrender.com/', 'error');

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.status}</div>
    if (data) return <div>{data.status}</div>
    
    return null
}
