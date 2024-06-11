import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
// import Fade from "@mui/material/Fade";
import me3 from "../assets/me3.jpg";
import "./style/About.css";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  textAlign: "center",
  //   color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }} mt={4}>
          <Grid
            container
            spacing={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
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
                About me <br />
              </Typography>
              <Typography variant="subtitle1">
                Hi There! I'm Jomchai suksungvarn Age 22 I'm a full stack
                developer and Software engineer Graduated with a bachelor's
                degree from Bangkok University faculty of Engineering Artificial
                Intelligence and Data Science major and I live in Bangkok <br />
                tel. 0619414519
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              display="flex"
              justifyContent={{ xs: "center", md: "right" }}
            >
              <div className="img">
                <img src={me3} className="img-me" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
