import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CodeIcon from '@material-ui/icons/Code';
import CreateIcon from '@material-ui/icons/Create';

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
  

function Eachtask(props) {
    const classes = useStyles();
    return ( 
    <Grid item xs={4}>
        <Paper className={classes.paper}>
            <h5>{props.task_num}</h5>
            <h3>{props.task_heading}</h3>
            <h6>{props.task_des}</h6>           
            <Link href="https://codesandbox.io/s/new" target="_blank" rel="noopener noreferrer" > <CreateIcon></CreateIcon></Link>&nbsp;
            <Link href={props.sample_code_link} target="_blank" rel="noopener noreferrer" ><CodeIcon></CodeIcon></Link>
        </Paper>
    </Grid>
      );
}

export default Eachtask;

