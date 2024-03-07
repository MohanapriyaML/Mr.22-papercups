import { Box, Button, Link, Typography } from "@mui/material";
import styled from "styled-components";


export const ListNavbar = styled("ul") <{ isClick?: boolean }>`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 20px;
    position: absolute;
    top: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    display: ${(props) => (props.isClick ? "flex" : "none")};
  }
`;

export const LinkProduct = styled('ul')`
   font-family:Oswald;
   color:#1f5b36;
   margin-top:40px;
   margin-right: 15px;
   margin-left: 15px;
   font-size:18px;
   @media(max-width:600px){
     margin-top:0px;
     margin-left:10px;
     margin-bottom:10px;
   }  
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f5b36;
  font-size: 14px;
  display: block;
  margin-top: 15px;
  padding: 5px;
 
`;
export const StyledImage = styled("div")`
  position: absolute;
  height: 500px;
  top: 42px;
  left:41%;
  @media (max-width: 600px){
    top: 0px; 
    height:280px;
    left:0;
  }
  @media(min-width:750px){
     top: -20px;
  }
  @media(min-width:1024px){
     top: 42px;
     width:500px;
     left:50%;
  }
  @media(min-width:1200px){
     width:700px;
     left:44%;
  }
  @media(min-width:1300px){
      top:120px;
      width:750px;
      left:45%;
  }
`
export const MenuIconOpen = styled("div")`
  display: none;
  @media (max-width: 600px) {
    display: block;
    left: 85%;
    top: 35px;
    position: absolute;
    cursor: pointer;
  }
`;
export const IconClose = styled("div")`
  display: none;
  @media (max-width: 600px) {
    position: absolute;
    cursor: pointer;
    display: block;
    top: 70px;
    left: 80%;
    font-size: 10px;  
    z-index: 9999;
    top: 10px;
  }
`;

export const StyledIcon = styled("div")`
      
`;

export const StyledBox = styled(Box)`
    background:#FDEFEA;
    position:absolute;
    z-index:-1;
    padding-left:36%;
`
export const StyledTypo = styled(Typography)`
    font-size:57px;
    line-height:45px;
    position:absolute;
    margin-top:200px;
    font-family:Georgia;
    @media(max-width:600px){
      font-size:47px;
      margin-top:200px;
    }
    @media(min-width:750px){
       font-size:42px;
       margin-top:80px;
    }
    @media(min-width:900px){
       font-size:57px;
       margin-top:200px;
    }
    @media(min-width:1300px){
       margin-top:240px;
    }
`
export const StyledGraph = styled(Typography)`
    position:absolute;
    margin-top:350px;
    margin-left:45px;
    font-family:Playfair Display;
    font-weight:400;
    font-size:27px;
    line-height:45px;
    width:435px;
    height:180px;
    @media (max-width:600px){
        margin-left:30px;
        margin-top:230px;
        font-size:18px;
        width:300px;
    }
    @media (min-width:750px){
        margin-top:230px;
        margin-left:30px;
        width:300px;
        font-size:18px;
    }
    @media(min-width:1024px){
        margin-top:350px;
        margin-left:60px;
        width:435px;
        font-size:27px;
    }
    @media(min-width:1200px){
         margin-left:80px;
    }
    @media(min-width:1300px){
       margin-top:410px;
       margin-left:80px;
    }
`
export const ButtonStyle = styled(Button)`
    positon:relative;
    top:455px;
    background:black;
    cursor:pointer;
    color:#fff;
    border-radious:12px;
    font-family:Playfair Display;
    font-weight:400;
    &:hover{
      background:black;
      color:#fff;
    }
    @media(max-width:600px){
       top:435px;
    }
    @media(min-width:750px){
        top:300px;
        width:130px;
    }
     @media(min-width:900px){
        top:445px;
        width:100%;
    }
    @media(min-width:1300px){
        top:495px;
    }
    
`