import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Layout from '../../../features/dashboard/Layout';
import { useAppContext } from '../../../contextState';
import Title from '../../../components/Title';

const ScanDetails: NextPage = () => {
    const { items } = useAppContext();
    const router = useRouter();
    const { section } = router.query
    
    return (
        <Layout>
            {section && <Title>{String(section)?.charAt(0).toUpperCase() + String(section).slice(1)}</Title>}
            {items && items[0]?.map((item: any, index: number) => {
                return <Accordion key={item.id + index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="result-content"
                        id="result-header">
                        <Typography>{item?.id}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <strong>Description: </strong> {item?.description}
                        </Typography>
                        <Typography>
                            <strong>Help: </strong> {item?.help}
                        </Typography>
                        <Typography>
                            <strong>Help Url: </strong> <a href={item.helpUrl} target="_blank" rel="noopener noreferrer">click here</a>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            })}
        </Layout>
    );
}

export default ScanDetails;