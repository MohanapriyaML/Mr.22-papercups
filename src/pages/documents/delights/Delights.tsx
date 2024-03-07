import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import { DelightStyle, StyledDiv } from "./Delights.styled";

const Delights = () => {
  const src = "https://www.youtube.com/shorts/NKLnFJ66Dsk";
  return (
    <>
      <Container sx={{ height: {lg:"394px"}, marginTop: "50px" }}>
        <Grid xs={12} sm={6}>
          <Grid container>
            <DelightStyle>
              "Disposable Delights - Effortless Solutions for Everyday
              Convenience"
            </DelightStyle>
            <StyledDiv>
              <Box
                sx={{
                  width: { xs: "200px", sm: "200px" },
                  height: { xs: "200px", sm: "190px" },
                  background: "#7C4A39",
                  borderRadius: "50px",
                  marginLeft: { xs: "155px", sm: "250px" },
                }}
              ></Box>
              <Box
                sx={{
                  width: { xs: "200px", sm: "200px" },
                  height: { xs: "200px", sm: "190px" },
                  background: "#7C4A39",
                  borderRadius: "50px",
                  marginTop: "-80px",
                  marginLeft: { xs: "25px", sm: "70px" },
                }}
              ></Box>
              <Box sx={{marginLeft:{xs:"-65px",sm:"0"},marginTop:{xs:"-15px",sm:"0"}}}>
                <iframe
                  width="300"
                  height="270px"
                  src="https://www.youtube.com/embed/NKLnFJ66Dsk"
                  style={{
                    position: "absolute",
                    marginTop: "-285px",
                    marginLeft: "105px",
                    borderRadius: "50px",
                  }}
                ></iframe>
              </Box>
            </StyledDiv>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Delights;
