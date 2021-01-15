import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, Button, Paper, Grid, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import LayerIcon from '@material-ui/icons/Layers'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'

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
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  // затеменение изображения
  overlay:{
    position: "absolute",
    top: 0,
    bottom: 1,
    right: 5,
    left:4,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  cardMedia:{
    paddingTop: "56.25%"
  },
  cardContent:{
    flexGrow:1
  },
  cardGrid:{
    marginTop: theme.spacing(4)
  }
}))

const cards = [1,2,3,4,5,6,7,8,9]

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
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom> Web Developer Blog</Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph> С начала снегопада утилизировано уже более 240 тыс. кубометров снега, а всего в январе - уже свыше 1 млн. кубометров. Такой подход не позволяет загрязненному снегу попадать водоемы, сохраняет экологию города.
          </Typography>
          <div className={classes.menuButtons}>
            <Grid container spacing={3} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlinaed" color="primary">Learn more</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography >
                      Blog post. Web Developer Blog. Blog post. Web Developer Blog.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">view</Button>
                    <Button size="small" color="primary">edit</Button>

                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </main>
    </>
  );
}

export default App;
