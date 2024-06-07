import React from "react";
import "./style/Home.css";
import Typography from "@mui/material/Typography";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="background-img">
        <Container>
          <div className="typo-div">
            <Typography
              variant="h2"
              sx={{ color: "white", textAlign: "center" }}
            >
              Hello I'am a Full stack developer <br />/ Software Engineer
            </Typography>
            <Typography
              variant="h6"
              mt={2}
              sx={{ color: "white", textAlign: "center" }}
            >
              This is Jom portfolio website Let's connect! <br /> This website
              is not the lastest version :)
            </Typography>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
