import { Typography, } from "@mui/material";
import styled from "styled-components";

export const DelightStyle = styled(Typography)`
    font-family: Playfair Display;
    font-size: 30px;
    width:580px;
    margin-top:150px;
    margin-left:30px;
    font-weight: 500;
    line-height: 45px;
    @media(max-width:600px){
        margin-top:-150px;
        margin-left:17px;
        width:500px;
    }
    @media(min-width:750px){
         margin-top:-250px;
         margin-left:75px;
         font-size:34px;
    }
    @media(min-width:1024px){
         margin-top:-30px;
         margin-left:50px;
         width:400px;
    }
    @media(min-width:1200px){
        width:580px;
        margin-top:150px;
        margin-left:30px;
   }
   @media(min-width:1300px){
        margin-top:200px;
        margin-left:30px;
}

`
export const StyledDiv = styled("div")`
    margin-top:50px;
    margin-left:30px;
    @media(max-width:600px){
        margin-left:0px; 
    }
    @media(min-width:750px){
        margin-top:-80px;
        margin-left:110px;
    }
    @media(min-width:1024px){
        margin-top:-90px;
        margin-left:20px;
        width:400px;
   }
   @media(min-width:1200px){
        margin-top:50px;
        margin-left:30px;
   }
   @media(min-width:1300px){
        margin-top:100px;
        margin-left:30px;
   }
`