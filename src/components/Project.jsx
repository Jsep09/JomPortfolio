import React from "react";
import Container from "@mui/material/Container";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import thaifoodimg from "../assets/Thaifood.png";
import airbnbimg from "../assets/airbnb.png";
import flutterappimg from "../assets/flutterapp.png";
import loginimg from "../assets/login.png";
import ximg from "../assets/xClone.png";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const Project = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }} mt={4}>
          <Grid container spacing={2} display="flex" alignItems="center">
            <Grid
              display="flex"
              flexDirection="column"
              item
              xs={10}
              sm={6}
              md={6}
            >
              <Typography variant="h4">
                {" "}
                Project
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1 }} mt={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 400 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={thaifoodimg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Thaifood Project
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Web application for classification thaifood using AI And
                      have another feature (React framework).
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 400 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={airbnbimg}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      airbnb clone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Static website using Html and Css
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 400 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={ximg}
                    alt="in progress"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      X clone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Static website using Html and Css <br />
                      <span> (In progress) </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 400 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={flutterappimg}
                    alt="in progress"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Check In app
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Static Application using Flutter framework by dart
                      language
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: 400 }}>
                <CardActionArea sx={{ height: 400 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={loginimg}
                    alt="loginimg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      login website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Static website using Html and Css
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      GitHub
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Project;
