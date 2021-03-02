import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    minWidth: 305,
    marginBottom: 0,
    marginTop: 0,
  },
  media: {
    height: 320,
  },
});

const MediaCard = ({ serial }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={serial.title_img}
          title={serial.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {serial.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;