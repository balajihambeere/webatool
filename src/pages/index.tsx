import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import useScans from '../features/scans/useScans';
import HomeLayout from '../features/home/Layout';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';

function SelectModule() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (<FormControl sx={{ mt: 2, ml: 2, minWidth: 200 }}>
        <InputLabel id="module-select">Select Module</InputLabel>
        <Select
            labelId="module-select"
            id="module-select-id"
            value={age}
            onChange={handleChange}>
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>DashBoard</MenuItem>
            <MenuItem value={20}>Scan</MenuItem>
            <MenuItem value={30}>Chart</MenuItem>
        </Select>
    </FormControl>
    );
}

const NewScan: NextPage = () => {
    const router = useRouter();
    const [url, setUrl] = useState<string>('');
    const { data, loading, newScan } = useScans();

    if (data.id) {
        router.push(`/scans/${data?.id}`)
    }
    return (
        <HomeLayout maxWidth="xl">
            <Grid item xs={4} style={{ textAlign: "center" }}>
                <Typography variant='h4'>Check Accessibility of your web application here.</Typography>
                <Box>
                    <TextField
                        id="url-text"
                        variant='outlined'
                        placeholder='Url Goes Here'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        sx={{ width: 700, mt: 2, height: 50 }}
                        InputProps={{
                            endAdornment: <Button variant="contained" onClick={() => newScan(url)}
                                sx={{ color: '#fff', width: 150 }}
                                size="large">Test</Button>
                        }}
                    />
                    <SelectModule />
                    {loading && (<Box sx={{ width: '100%' }}>
                        <LinearProgress />
                    </Box>)
                    }
                </Box>
            </Grid>
        </HomeLayout >
    );
};

export default NewScan;
