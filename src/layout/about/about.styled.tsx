import { Box, Typography, styled } from "@mui/material";


export const StyledAboutUsContainer = styled('div')`
    margin-top:-35px;
    background:#FCF9F9;
`;

export const StyledLeftContent = styled('div')`
  margin-right: 20px;
  width: 58%;
  display: block;
  padding: 0 20px;
  color: white;
  font-size: 13px;
  line-height: 24px;
  @media (max-width: 772px ) {
    width: 100%;
  }
`;

export const StyledLeftPara = styled(Typography)`
  font-family:Playfair Display;
  font-weight:400;
  font-size:14px;
  color: black;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 5px;
  @media(max-width:400px){
    margin-left:-20px;
  }
`;

export const Head = styled(Typography)`
  font-family:Georgia;
  font-weight:400;
  line-height: 1.2;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 500;
  color:black;
  @media(max-width:400px){
    margin-left:-20px;
  }
}
`;

export const StyledRightContent = styled('div')`
  padding: 0 15px;
  max-width: 41%;
  float: right;
  margin: 0 auto;
@media(max-width:912px){
  width:30%;
  margin:0px;
}
@media(max-width:524px){
    width:20%;
    margin:0px;
  }
`;

export const ContentWrapper = styled('div')`
    display: flex;
    flex-wrap: wrap;
    flex-basis:58.333%;
    padding: 35px 50px 35px 48px;
`;

export const StyledBox = styled(Box)`
    position:absolute;
    margin-top:-500px;
    left:50px;
    width:650px;
    background: linear-gradient(90.51deg, #FCFAFA -23.69%, rgba(252, 250, 250, 0) 65.2%);
    @media(max-width:600px){
       margin-top:0px;
       background:none;
       width:85%;
    }
    @media(min-width:750px){
       background:none;
    }
`
export const StyledImage = styled(Box)`
     display:block;
     margin-left:185px;
     @media(max-width:600px){
       display:none;
     }
     @media(min-width:750px){
       margin-left:-70px;
     }
     @media(min-width:1024px){
       margin-left:185px;
     }
     @media(min-width:1200px){
        margin-left:423px
     }
     @media(min-width:1330px){
        margin-left:600px;
     }

`
