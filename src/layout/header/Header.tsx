"use client";
import React, { useState } from "react";        
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Link, Typography } from "@mui/material";
import { ButtonStyle, IconClose, ListNavbar, MenuIconOpen, StyledBox, StyledGraph, StyledIcon, StyledImage, StyledTypo } from "./Header.styled";
import { DivWrapper } from "../footer/Footer.styled";
const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <DivWrapper sx={{width: "100%",height: "715px",position:"relative",}}>
      <StyledBox>
        <img src="images/backimg.png" width="100%" height="100%"/>
        <StyledImage>
          <img src="images/wholeproducts.png" width="100%" height="100%" />
        </StyledImage>     
      </StyledBox>
      <Box
        sx={{
          display: { xs: 'block', sm: 'flex' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{
          textAlign:{xs:"none",sm:"center"},
          paddingTop: "15px",
          marginLeft:{xs:"25px",md:"55px",lg:"80px"},
        }}>
          <Box sx={{
            marginLeft:{xs:"30px",sm:"-40px",md:"0px",lg:"0px"}
          }}>
          <img src="images/Group 23.png" alt="Mr22 logo" height="44.54px" width="42px"/>
          </Box>
          <Typography
            sx={{
              height: "22px",
              width: "96px",
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              fontSize: "8px",
            }}
          >No mess, No fuss, Just toss – with disposables
          </Typography>
          <Box>
            <StyledTypo variant="h2">Lorem Ipsum</StyledTypo>
            <ButtonStyle variant="contained">Read More</ButtonStyle>
          </Box>
        </Box>
        <StyledGraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </StyledGraph>
        <ListNavbar isClick={isClick}>
          <Link href='/' sx={{
            marginLeft: "30px",
            marginBottom: "20px",
            textDecoration: "none",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            lineHeight: "45px",
            color: {xs:"black",sm:"#fff"},
            fontSize: "18px",
            marginTop: "40px",
            cursor:"pointer",
          }}>
            Home</Link>
          <Link href='/' sx={{
            marginLeft: "30px",
            marginBottom: "20px",
            textDecoration: "none",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            lineHeight: "45px",
            color: {xs:"black",sm:"#fff"},
            fontSize: "18px",
            marginTop: { xs: '10px', sm: "40px" },
            cursor:"pointer",
          }}>
            About</Link>
          <Link href='/' sx={{
            marginLeft: "30px",
            marginBottom: "20px",
            textDecoration: "none",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            lineHeight: "45px",
            color: {xs:"black",sm:"#fff"},
            fontSize: "18px",
            marginTop: { xs: '10px', sm: "40px" },
            cursor:"pointer",
          }}>
            Products</Link>
          <Link href='/' sx={{
            marginLeft: { xs: '30px' },
            marginBottom: "20px",
            textDecoration: "none",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            lineHeight: "45px",
            color: {xs:"black",sm:"#fff"},
            fontSize: "18px",
            marginTop: { xs: '10px', sm: "40px" },
            cursor:"pointer",
          }}>
            Blog</Link>
          <Link href='/' sx={{
            marginLeft: "30px",
            marginBottom: "20px",
            textDecoration: "none",
            fontFamily: "Playfair Display",
            fontWeight: 400,
            lineHeight: "45px",
            color: {xs:"black",sm:"#fff"},
            fontSize: "18px",
            marginTop: { xs: '10px', sm: "40px" },
            cursor:"pointer",
          }}>
            Contact</Link>
          <Button variant="contained"
            sx={{
              fontSize: "15px",
              height: {sm:"45px",lg:"35px"},
              background: {xs:"black",sm:"#fff"},
              fontFamily: "Playfair Display",
              fontWeight: "800",
              marginBottom: { xs: '10px', sm: 0 },
              marginTop: { xs: 0, sm: "45px" },
              color: {xs:"#fff",sm:"black"},
              marginRight: {xs:"0",sm:"35px",md:"70px",lg:"100px"},
              marginLeft: "25px",
              paddingLeft: "10px",
              cursor: "pointer",
              border: "none",
              borderRadius: "12px",
              lineHeight: {md:"45px"},
              ":hover": { background: '#fff', color: 'black' }
            }}
          >Download Brochure</Button>
        </ListNavbar>
      </Box>
      <StyledIcon onClick={toggleNavbar}>
        {isClick ? (
          <IconClose>
            <CloseIcon />
          </IconClose>
        ) : (
          <>
            <MenuIconOpen>
              <MenuIcon sx={{ fontSize: '28px', fontWeight: 'bold' }} />
            </MenuIconOpen>
          </>
        )}
      </StyledIcon>
    </DivWrapper>
  );
};

export default Header;