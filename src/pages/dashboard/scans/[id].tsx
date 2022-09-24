import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Section from '../../../features/scans/sections';
import Layout from '../../../features/dashboard/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Title from '../../../components/Title';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useScans from '../../../features/scans/useScans';

const ScanItem: NextPage = () => {
    const router = useRouter();
    const { id } = router.query
    const { data } = useScans(Number(id));
    const { results } = data && data;
    console.log(router.query);
    return (<Layout>
        <Box>
            <Title>URL: {data?.url}</Title>
            <Typography component="p" variant="h4" mt={2}>
                Metrics
            </Typography>
            <Grid container spacing={2} mt={2}>
                <Grid item xs={3}>
                    <Section name='Passes' items={results?.passes} />
                </Grid>
                <Grid item xs={3}>
                    <Section name='Inapplicable' items={results?.inapplicable} />
                </Grid>
                <Grid item xs={3}>
                    <Section name='InComplete' items={results?.incomplete} />
                </Grid>
                <Grid item xs={3}>
                    <Section name='Violations' items={results?.violations} />
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 275, height: 120 }}>
                        <CardContent>
                            <Title>Test Engine </Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                <strong>Name : </strong>   {results?.testEngine?.name}
                            </Typography>

                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                <strong>Version : </strong>   {results?.testEngine?.version}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ minWidth: 275, height: 120 }}>
                        <CardContent>
                            <Title>Test Runner </Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                <strong>Name : </strong>   {results?.testRunner?.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} mt={1}>
                <Grid item xs={12}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Title>Test Environment </Title>
                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                <strong>UserAgent : </strong>   {results?.testEnvironment?.userAgent}
                            </Typography>

                            <Typography color="text.secondary" sx={{ flex: 1 }}>
                                <strong>Orientation Type : </strong>   {results?.testEnvironment?.orientationType}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </Layout>)
}
export default ScanItem;