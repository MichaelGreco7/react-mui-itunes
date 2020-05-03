import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from './Popover';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 100,
    width: 100
  },
});

export default function MediaCard({ el, toggle, setToggle }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={el.artworkUrl100}
          title="album-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {el.trackName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {el.collectionName}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Popover toggle={toggle} setToggle={setToggle} el={el} size="small" color="primary">
          Learn More
        </Popover>

      </CardActions>
    </Card>
  );
}