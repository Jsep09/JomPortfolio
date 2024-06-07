import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./style/Skill.css";

import jsLogo from "../assets/Logo.png/pngegg (1).png";
import pythonlogo from "../assets/Logo.png/pngegg (2).png";
import reactlogo from "../assets/Logo.png/pngegg (3).png";
import htmllogo from "../assets/Logo.png/pngegg (4).png";
import csslogo from "../assets/Logo.png/pngegg (5).png";
import nodelogo from "../assets/Logo.png/pngegg (6).png";
import gitlogo from "../assets/Logo.png/pngegg (7).png";
import postmanlogo from "../assets/Logo.png/pngegg (8).png";
import dockerlogo from "../assets/Logo.png/pngegg (9).png";
import tablogo from "../assets/Logo.png/Tableau.png";
import mongologo from "../assets/Logo.png/mongodb.png";
import flutterlogo from "../assets/Logo.png/pngwing.com (1).png";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#161616",
      light: "#ffff",
    },
  },
});

export default function Skill() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#161616",
          height: "100%",
          paddingBottom: "40px",
        }}
        mt={10}
      >
        <Grid display="flex" justifyContent="center">
          <Grid item xs={12} height={100} display="flex" alignItems="center">
            <Typography sx={{ color: "white" }} variant="h4">
              My skill set
            </Typography>
          </Grid>
        </Grid>
        <Container maxWidth="lg" display="flex">
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={jsLogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={pythonlogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={reactlogo} alt="" className="Logo-img-react" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={htmllogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={csslogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={nodelogo} alt="" className="Logo-img-node" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={gitlogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={postmanlogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={dockerlogo} alt="" className="Logo-img" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={tablogo} alt="" className="Logo-img-tab" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={mongologo} alt="" className="Logo-img-tab" />
            </Grid>
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img src={flutterlogo} alt="" className="Logo-img-tab" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
