import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Layout from '../features/dashboard/Layout';
import Scans from '../features/scans/scans';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useScans from '../features/scans/useScans';

const Home: NextPage = () => {
  const { data, loading } = useScans()
  return (
    <Layout maxWidth="xl">
      {loading && data.length === 0 && (<Box>
        <Typography variant='h4'>Entries Not Found.</Typography>
        <Link href="/scans/new">
          <a>New Scan</a>
        </Link>
      </Box>)}
      {data.length > 0 && !loading && (<Scans items={data} />)}
    </Layout>
  );
};

export default Home;
