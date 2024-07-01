import { useState, useEffect } from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}${opts}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, opts])

    return [data, loading, error];

}