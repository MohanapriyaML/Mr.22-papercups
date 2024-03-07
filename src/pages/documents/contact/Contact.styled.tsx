import { Button, Container, Link, Typography } from "@mui/material";
import styled from "styled-components";

export const BackgroundImage = styled("div")`
  margin-bottom:60px;
  position: relative;
  background: url('http://ishwara.in/img/contact.jpg');
  height: 27vh;
  background-color: transparent;
    background-position-x: center;
    background-repeat: no-repeat;

    
`;
export const Overlay = styled("div")`
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 40px;
  line-height: 40px;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Title = styled("h2")`
  position: relative;
  top: 30px;
  margin: 0;
  font-family: oswald;
  padding: 0;
  text-transform: uppercase;
  font-size: 1em;
`;
export const NavbarContainer = styled("div")`
  color: white;
  bottom: 60px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  display: flex;
  gap: 5px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: normal;
  opacity: 1;
  text-decoration: none;
`;

export const Styledcontainer = styled("div")`
  margin: 50px 0;   
`;
export const Contactdiv = styled("div")`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  color: #747474;
  line-height: 24px;

`;
export const TypographyStyled = styled(Typography)`
    padding-bottom:10px

`;

export const StyledFormContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const StyledButton = styled(Button)`
  border-radius: 30px;
  display: inline-block;
  background-color: #266949 ;
  line-height: 1;
  margin-top: 10px;
  padding: 13px 45px;
  text-transform: uppercase;
  width: initial;
  transition: all 0.4s ease 0s;
  font-family: Oswald;
  &:hover {
    background-color: #1f5b36;
  }
`;
export const FormGroup1 = styled("div")`
  float: right;
  margin-top: 15px;
`;
export const LabelContainer = styled("div")`
  margin-bottom: 1rem;
  border-radius: 0.25rem;

  input:focus,
  textarea:focus {
    border-color: orange;
    outline: none;
  }
`;
export const MapDiv = styled("div")``;
