import { Box, Button, Container, Link, MobileStepper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import styled from "styled-components";

export const StyledClientContainer = styled.section`
     margin-top:-43px;
     @media(max-width:600px){
        margin-top:620px;
     }
`;

export const ClientContainer = styled('div')`
    background:#875240;
    height:366px;
    @media(max-width:600px){
        height:680px;
    }
    @media(min-width:750px){
        height:730px;
    }
    @media(min-width:900px){
        height:400px;
    }
`;

export const Header = styled(Typography)`
    color: #fff;
    font-family: Georgia;
    font-weight:40;
    font-size: 34px;
    margin-left:45px;
    padding-top:50p;,
    line-height: 29px;
    margin-bottom: 10px;
    transition: opacity 0.24s ease-in-out 0s;
    @media(max-width:600px){
        margin-left:25px;
        padding-top:20px;
    }
    @media(min-width:750px){
        text-align:center;
        padding-top:50px;
    }
    @media(min-width:900px){
        text-align:start;
    }
`;

export const StyledBox = styled(Box)`
     display:flex;
     margin-left:150px;
     margin-top:50px;
     gap:120px; 
     @media(max-width:600px){
        flex-direction:column;
        margin-left:0px;
        margin-top:50px;
     } 
     @media(min-width:750px){
        flex-direction:column;
        margin-top:90px;
        margin-left:210px;
     }
     @media(min-width:1024px){
         flex-direction:row;
         margin-top:50px;
         margin-left:90px;
     }
     @media(min-width:1200px){
         flex-direction:row;
        justify-content:center;
     }
     @media(min-width:1300px){
        flex-direction:row;
        justify-content:center;
    }
   
`
export const TypographyContent = styled(Typography)`
      color:#fff;
      padding:20px 7px 5px 7px;
      font-family:Playfair Display;
      font-weight:400;
      font-size:16px;
      width:400px;
      text-align:center;
      @media(max-width:600px){
         width:350px;
         margin-left:18px;
      }
      @media(min-width:750px){
         width:400px;
         font-size:14px;
      }
      @media(min-width:1024px){
         width:370px;
         font-size:16px;
      }
      @media(min-width:1200px){
         width:400px;
      }
`
