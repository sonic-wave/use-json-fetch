import React from 'react'
import useJsonFetch from '../../hooks/useJsonFetch'

export const LoadingFC = () => {
    const [data, loading, error] = useJsonFetch(' http://localhost:7070/', 'loading');

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.status}</div>
    if (data) return <div>{data.status}</div>
    
    return null
}
