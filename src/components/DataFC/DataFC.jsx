import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

export const DataFC = () => {
    const [data, loading, error] = useJsonFetch(' http://localhost:7070/', 'data');

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    if (data) return <div>{data.status}</div>
    
    return null
}
