import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper } from '@mui/material';
import './Cards.css'


export default function CardsComponents(props) {
    const { img, description, title, link, children } = props
  return (
    <Paper className='card'>
    <Card className='container'
    // sx={{ 
    //   maxWidth: 290,
    //   bgcolor: '#46505A', 
    //   p: 0.5, 
    //   boxShadow: 10,
    //   borderRadius: 3,
    // }}
    >
      <CardActionArea >
        <CardMedia
          component="img"
          height="220"
          image={img}
        />
        <CardContent className='cardAction'>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
  );
}
