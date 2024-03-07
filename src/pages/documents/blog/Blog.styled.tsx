import { Box, Card, Link, Typography } from "@mui/material";
import styled from "styled-components";


export const ImageContainer = styled(Typography)`
    color: #fff;
    bottom: 60px;
    position: absolute;
    top:60%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    display: flex;
    gap: 5px;
`
export const StyledLink = styled(Link)`
    color: #dedede;
    font-size: 15px;
    font-style: normal;
    opacity: 1;
    text-decoration: none;
    &:hover{
        color:#fff;
    }
`
export const StyledBox = styled(Box)`
    color:#a1a1a1;
    margin-top:20px;
    margin-bottom:20px; 
`
export const StyledButton = styled(Link)`
    border: 1px solid #c5c5c5;
    cursor:pointer;
    text-decoration:none;
    border-radius: 30px;
    color: #747474;
    display: inline-block;
    margin-top: 25px;
    padding: 13px 45px;
    text-align: center;
    text-transform: uppercase;
    width: initial;
    transition: all 0.4s ease 0s;
    font-family: Oswald;
    background: #266949;
    color: #fff;
`
export const StyledTitle = styled(Link)`
     text-decoration:none;
     line-height:1.5;
     color:#3f3f3f;
     font-family: Oswald;
     font-weight:400;
     text-transform: uppercase;
     font-size:15px;
     cursor:pointer;
     &:hover{
        color:#ce9634;
     }
`
export const StyledSubtitle = styled(Link)`
     text-decoration:none;
     color:#6e6e6e;
     font-size:20px;
     font-weight:bold;
     cursor:pointer;
     &:hover{
        color:#ce9634;
     }
`
export const StyledDescription = styled(Link)`
     text-decoration:none;
     position:relative;
     top:10px;
     color:#6e6e6e;
     font-size:14px;
     cursor:pointer;
     &:hover{
        color:#ce9634;
     }
`
export const StyledDate = styled(Typography)`
     position:absolute;
     background:#686868;
     text-transform: uppercase;
     font-size:13px;
     color:#fff;
     padding:10px;
`