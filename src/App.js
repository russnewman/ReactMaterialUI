import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Paper, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles'
import { Repeat, SportsRugbySharp } from '@material-ui/icons';


const useStyles = makeStyles((theme)=>({
  route:{
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  }, 
  title: { 
    flexGrow: 1
  },
  mainFeaturesPost:{
    position:"relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-Repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent:{
    position: "relative",
    padding: theme.spacing(9)
  },
  // затеменение изображения
  overlay:{
    position: "absolute",
    top: 0,
    bottom: 1,
    right: 5,
    left:4,
    backgroundColor: "rgba(0,0,0,.3)"
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon>
            </MenuIcon>
          </IconButton>
          {/* Компонент куда записываем текст */}
          <Typography variant="h6" className={classes.title}>
            Web Developer Blog
          </Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log In</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{backgroundImage:`url(https://source.unsplash.com/random)`}} >
        <Container fixed>
          <div className={classes.overlay}/>
          <Grid container>
            <Grid item md={7}>
              <div className={classes.mainFeaturesPostContent}>
                <Typography 
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  Web Developer BLog
                </Typography>
                <Typography
                  component="h1"
                  variant="h5"
                  color="inherit"
                  paragraph
                >
                   С начала снегопада утилизировано уже более 240 тыс. кубометров снега,
                   а всего в январе - уже свыше 1 млн. кубометров. Такой подход не позволяет
                   загрязненному снегу попадать водоемы, сохраняет экологию города.
                </Typography>
                <Button variant="contained" color="secondary">
                  Learn more
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </main>
    </>
  );
}

export default App;
