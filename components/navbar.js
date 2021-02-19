import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
function navbar({children}) {
    const classes = useStyles();
    return (
        <AppBar position="sticky">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      Covid-19
    </Typography>
   <Link href="/"> 
   <Button color="inherit">Home</Button>
   
   </Link>
   {children}
  </Toolbar>
</AppBar>
    )
}

export default navbar
