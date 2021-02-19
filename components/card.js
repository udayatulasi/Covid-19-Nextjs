import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


import Link from "next/link"


const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 300
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
    height: 10,
    padding: '25%', // 16:9
  },
});

export default function countryCard(props) {
  const classes = useStyles();

  return (
      <Link href="/[country]" as={`/${props.country.name}`}>
         
      <Grid item xs={6} md={2}>
    <Card className={classes.root} >
         <CardMedia
        className={classes.media}
        image={`https://flagcdn.com/256x192/${props.country.code}.png`}
        title={props.country.name}
      />
      <CardContent>
      <Button color="inherit" label={props.country.name}>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom> */}
          {props.country.name}
        {/* </Typography> */}
    </Button>
        </CardContent>

    </Card>
    </Grid>
    </Link>
  );
}
