import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Layout from '../../features/dashboard/Layout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import useScans from '../../features/scans/useScans';

const NewScan: NextPage = () => {
    const router = useRouter();
    const [url, setUrl] = useState<string>('');
    const { data, loading, newScan } = useScans();

    if (data.id) {
        router.push(`/scans/${data?.id}`)
    }
    return (
        <Layout maxWidth="xl">
            <Typography variant='h4'>Check Accessibility of your web application here.</Typography>
            <TextField
                id="url-text"
                variant='outlined'
                placeholder='Url Here'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{ width: 1 / 2, mt: 2 }}
                InputProps={{
                    endAdornment: <Button onClick={() => newScan(url)}
                        sx={{ textTransform: 'none', width: 150 }}
                        size="large">Test</Button>
                }}
            />
            {loading && (<Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>)
            }
        </Layout>
    );
};

export default NewScan;
