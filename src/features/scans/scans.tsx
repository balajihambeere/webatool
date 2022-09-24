import * as React from 'react';
import { useRouter } from 'next/router';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export interface ScansProps {
  items: any;
}

const Scans = (props: ScansProps) => {
  const router = useRouter();
  const { items } = props;

  const handleClick = (event: React.MouseEvent, id: any) => {
    event.preventDefault();
    router.push(`/dashboard/scans/${id}`)
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box>
              <Title>Scans</Title>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Url</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Results</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items && items.map((row: any) => (
                    <TableRow key={row.id}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.url}</TableCell>
                      <TableCell>{row.createdDate}</TableCell>
                      <TableCell>
                        <Link color="primary" href='' onClick={(e) => handleClick(e, row?.id)} sx={{ mt: 3 }}>
                          View Details
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Scans;
