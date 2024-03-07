import { CardActionArea, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledCardContent = styled(CardContent)`
    padding:30px;
    background:#C27054;
    width:210px;
    border-radius:20px;
    margin-top:-40px;
    position:relative;
    z-index:999;
    @media(max-width:600px){
        width:90%;
        margin-left:25px;
    }
    @media(min-width:750px){
        margin-left:45px;
    }
    @media(min-width:900px){
        margin-left:0px;
    }
`
export const StyledThypography = styled(Typography)`
    text-align:center;
    font-family:Playfair Display;
    font-weight:400;
    font-size:12px;
`
export const ThypographyProduct = styled(Typography)`
    text-align:center;
    font-family:Playfair Display;
    font-weight:500;
    font-size:16px;
    color:#fff;
    @media(max-width:900px){
        font-size:13px;
    } 
`