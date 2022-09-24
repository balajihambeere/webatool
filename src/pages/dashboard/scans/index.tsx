import type { NextPage } from 'next';
import Layout from '../../../features/dashboard/Layout';
import Scans from '../../../features/scans/scans';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useScans from '../../../features/scans/useScans';

const DashBoard: NextPage = () => {
  const { data, loading } = useScans(0);

  return (
    <Layout maxWidth="xl">
      {data?.length === 0 && (<Box>
        <Typography variant='h4'>Entries Not Found.</Typography>
        <Link href="/scans/new">
          <a>New Scan</a>
        </Link>
      </Box>)}
      {data?.length > 0 && !loading && (<Scans items={data} />)}
    </Layout>
  );
};

export default DashBoard;
