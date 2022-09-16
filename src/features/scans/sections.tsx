import * as React from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Title from '../../components/Title';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useAppContext } from '../../contextState';

export interface SectionProps {
  name: string;
  items: any;
};

const Section = (props: SectionProps) => {
  const { name, items } = props;
  const router = useRouter();
  const { id } = router.query;
  const { addItem, removeItem, } = useAppContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeItem();
    addItem(items);
    router.push(`${id}/${name?.toLowerCase()}`)
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Title>{name}</Title>
        <Typography component="p" variant="h3">
          {items?.length}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          on 15 March, 2019
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">View More</Button>
      </CardActions>
    </Card>
  );
}

export default Section;
