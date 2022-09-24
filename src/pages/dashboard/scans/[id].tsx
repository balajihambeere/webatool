import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
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
// import ScanChart from '../../../features/chart/ScanChart';


const ScanChart = dynamic(() => import('../../../features/chart/ScanChart'), {
    ssr: false,
});

const ScanItem: NextPage = () => {
    const router = useRouter();
    const { id } = router.query
    const { data } = useScans(Number(id));
    const { scanhistories } = data || {};
    const details = scanhistories?.length > 0 ? scanhistories[0] : [];
    const charData = [
        { name: "Passes", value: details?.results?.passes?.length },
        { name: "Inapplicable", value: details?.results?.inapplicable?.length },
        { name: "Incomplete", value: details?.results?.incomplete?.length },
        { name: "Violations", value: details?.results?.violations?.length }
    ];

    return (<Layout>
        <Box>
            {
                data ? (<Box sx={{ width: 1 }}>
                    <Title>URL: {data?.url}</Title>
                    <Typography component="p" variant="h4" mt={2}>
                        Metrics
                    </Typography>
                    <ScanChart data={charData} />

                    <Grid container spacing={2} mt={2}>
                        <Grid item xs={3}>
                            <Section name='Passes' items={details?.results?.passes} />
                        </Grid>
                        <Grid item xs={3}>
                            <Section name='Inapplicable' items={details?.results?.inapplicable} />
                        </Grid>
                        <Grid item xs={3}>
                            <Section name='Incomplete' items={details?.results?.incomplete} />
                        </Grid>
                        <Grid item xs={3}>
                            <Section name='Violations' items={details?.results?.violations} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={6}>
                            <Card sx={{ height: 120 }}>
                                <CardContent>
                                    <Title>Test Engine </Title>
                                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                                        <strong>Name : </strong>   {details?.results?.testEngine?.name}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                                        <strong>Version : </strong>   {details?.results?.testEngine?.version}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minWidth: 275, height: 120 }}>
                                <CardContent>
                                    <Title>Test Runner </Title>
                                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                                        <strong>Name : </strong>   {details?.results?.testRunner?.name}
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
                                        <strong>UserAgent : </strong>   {details?.results?.testEnvironment?.userAgent}
                                    </Typography>

                                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                                        <strong>Orientation Type : </strong>   {details?.results?.testEnvironment?.orientationType}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>) : <>Records Not found</>
            }
        </Box>

    </Layout>)
}
export default ScanItem;