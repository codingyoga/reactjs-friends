import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/Create';
import beer from './assets/beer.gif'
import './Tasks.css';

//Five levels - Sober,Buzzed,Tipsy,Drunk,Wasted 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Tasks() {
  const classes = useStyles();

  return (
    <header className="App-header">
        <br></br><br></br>     
  <div>
      <div class="neon">React </div>
      <div class="flux">Friends </div>
  </div>
  <div>A fun way to learn reactjs.</div>
    <img src={beer} alt="loading..." /> 
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h5>Task 1 </h5>
              <h3>Cheers React Friends</h3>
              <h6>Display Cheers React Friends on UI</h6>           
              <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
              <Link href="https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h5>Task 2</h5>
              <h3>Birthday Picker</h3>
              <h6>Pop-up Calender and display selected date on UI</h6>
              <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
              <Link href="https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h5>Task 3</h5>
              <h3>Cocktail Mocktail</h3>
              <h6>Display Cocktail menu in horizontal nav bar and Mocktail menu in vertical nav bar</h6>
              <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
              <Link href="https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h5>Task 4</h5>
              <h3>Offer Drink</h3>
              <h6>Choose your fav drink from menu and display that image</h6>
              <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
              <Link href="https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              <h5>Task 5</h5>
              <h3>Order One More</h3>
              <h6>Create a button to order drink and display drink count</h6>
              <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
              <Link href="https://codesandbox.io/s/modest-pine-89j19?file=/src/App.js" target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
    <br>
    </br>
    <br>
    </br>
    </header>
  );
}

export default Tasks;
