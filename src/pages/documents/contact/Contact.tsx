import React from "react";
import { Box, TextField, TextareaAutosize, Typography } from "@mui/material";
import {
  BackgroundImage,
  Contactdiv,
  FormGroup1,
  LabelContainer,
  MapDiv,
  NavbarContainer,
  Overlay,
  StyledButton,
  StyledFormContainer,
  StyledLink,
  Styledcontainer,
  Title,
  TypographyStyled,
} from "./Contact.styled";

export const Contact = () => {
  return (
    <>
      <BackgroundImage>
        <Overlay>
          <Title>Contact</Title>
        </Overlay>
        <NavbarContainer>
          <StyledLink href="/"> Home</StyledLink>| Contact
        </NavbarContainer>
      </BackgroundImage>
      <Styledcontainer>
        <StyledFormContainer>
          <Contactdiv>
            <form style={{ display: "flex", flexDirection: "column" }}>
              <LabelContainer>
                <TypographyStyled variant="body2">Name*</TypographyStyled>
                <TextField
                  required
                  id="name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">Email*</TypographyStyled>
                <TextField
                  required
                  id="email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">phone No*</TypographyStyled>
                <TextField
                  required
                  id="phone"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </LabelContainer>
              <LabelContainer>
                <TypographyStyled variant="body2">Message*</TypographyStyled>
                <TextareaAutosize
                  id="message"
                  aria-label="message"
                  style={{
                    width: "100%",
                    height: "181px",
                    padding: "8px",
                    resize: "vertical",
                  }}
                />
              </LabelContainer>
              <LabelContainer>
                <FormGroup1>
                  <StyledButton type="submit" variant="contained">
                    SEND MESSAGE
                  </StyledButton>
                </FormGroup1>
              </LabelContainer>
            </form>
          </Contactdiv>
          <Contactdiv>
            <div>
              <Typography
                variant="h1"
                sx={{ fontSize: "17px", marginBottom: "10px" }}
              >
                Meet Our Managing Director:
              </Typography>
              <Box mb={3}>
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  Saurabh Jain{" "}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                  Managing Director
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                  Ph- 9811062289
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ fontSize: "13px" }}
                >
                  Mail- md@ishwara.in
                </Typography>
              </Box>
            </div>
            <MapDiv>
              <img
                src="https://i.stack.imgur.com/HILmr.png"
                alt="Map Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </MapDiv>
         
          </Contactdiv>
        </StyledFormContainer>
      </Styledcontainer>
    </>
  );
};
