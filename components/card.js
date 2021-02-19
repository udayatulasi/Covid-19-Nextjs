import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    display: "center",
    textAlign:"center"
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 0,
    padding: '20%', // 16:9
  },
});

export default function countryCard(props) {
  const classes = useStyles();

  return (
      <Grid item xs={6} md={4}>
    <Card className={classes.root} >
         <CardMedia
        className={classes.media}
        image={props.country.flag}
        title="Paella dish"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.country.name}
        </Typography>
        </CardContent>
    </Card>
    </Grid>
  );
}
