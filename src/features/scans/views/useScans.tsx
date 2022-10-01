import { useCallback, useEffect, useState } from 'react';

const useScans = (id?: number) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const fetchById = async () => {
            setLoading(true);
            fetch(`/api/scans/${id}`)
                .then(res => res.json())
                .then(scanItems => {
                    setData(scanItems?.data);
                    setLoading(false);
                }).catch(err => setError(err?.message));
        };

        const fetchAllScan = async () => {
            setLoading(true);
            fetch(`/api/scans`)
                .then(res => res.json())
                .then(scanItems => {
                    setData(scanItems?.data)
                    setLoading(false);
                }).catch(err => setError(err?.message));
        };
        if (id) {
            fetchById();
        } else if (id === 0) {
            fetchAllScan();
        }
    }, [id]);

    const newScan = useCallback((url?: string) => {
        function fetchApi() {
            setLoading(true);
            fetch('/api/scans', {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify({ url: url })
            }).then(res => res.json()).then(result => {
                setLoading(false);
                setData({ id: result?.id });
            }).catch(err => setError(err?.message));
        }
        if (url) {
            fetchApi();
        }
    }, []);

    return { data, loading, error, newScan };
}

export default useScans