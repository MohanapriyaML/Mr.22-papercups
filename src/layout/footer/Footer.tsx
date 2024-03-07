import Typography from "@mui/material/Typography";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import {
  CustomTypography,
  DivWrapper,
  FooterWrapper,
  StyledLink,
  TypographyStyled,
} from "./Footer.styled";
import Link from "next/link";

const FooterMain = () => {
  return (
    <>
      <FooterWrapper>
        <Grid container spacing={4.7}>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3" sx={{ marginLeft: {xs: 0 , lg: '-90px'} }}>CONTACT US</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px", marginLeft: {xs: 0 , lg: '-90px'}, lineHeight: '30px',fontFamily:"Playfair Display" }}>
              <RoomIcon sx={{ fontSize: 15, marginRight: 1 }} /> Shanti Auto
              Industries Plot No. 402- 403, Sector 7, Phase-II, Gurgaon -
              122052, Haryana, India
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "15px" ,fontFamily:"Playfair Display"}}>
              <EmailIcon sx={{ fontSize: 15, marginRight: 1, marginLeft: {xs: 0 , lg: '-90px'} }} /> Email:-
              sales@ishwara.in marketing@ishwara.in
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "15px",fontFamily:"Playfair Display" }}>
              <PhoneIcon sx={{ fontSize: 15, marginRight: 1, marginLeft:{xs: 0 , lg: '-90px'} }} /> 9811062289
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 }, marginLeft: {xs: 0 , lg: '30px'} }}>
            <CustomTypography variant="h3">COMPANY PROFILE</CustomTypography>
            <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>
              Home
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display"}}>
              Profile
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>
              Corporate Video
            </Typography>
            <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginBottom: { xs: "20px", sm: 0 } }}>
            <CustomTypography variant="h3">
              PRODUCTS & SERVICES
            </CustomTypography>
            <Grid container spacing={0} sx={{ marginTop: "10px" }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body2" sx={{fontFamily:"Playfair Display" }}>Paper Bowls</Typography>
                <Typography variant="body2" sx={{marginTop: "10px",fontFamily:"Playfair Display" }}>Paper tubs</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>Paper cups</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>Paper glass</Typography>
                <Typography variant="body2" sx={{ marginTop: "10px",fontFamily:"Playfair Display" }}>Paper containers</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ marginRight: '-50px', marginLeft: {xs: 0 , lg: '20px'} }}>
            <CustomTypography variant="h3">CONNECT WITH US</CustomTypography>
            <DivWrapper
              sx={{
                gap: "20px",
              }}
            >
              <FacebookRoundedIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <TwitterIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <InstagramIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <LinkedInIcon sx={{
                fontSize: 28,
                marginRight: 2,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
              <WhatsAppIcon sx={{
                fontSize: 28,
                marginRight: 1,
                border: '1px solid #fff',
                borderRadius: '50%',
                padding: '5px',
                ":hover": { background: '#fd7e14' }
              }} />
            </DivWrapper>
            <Typography variant="body2" sx={{ marginTop: "10px", lineHeight: '25px' ,fontFamily:"Playfair Display"}}>
              We are known for manufacturing and supplying of a wide assortment
              of Paper Glasses and Bowls
            </Typography>
          </Grid>
        </Grid>
      </FooterWrapper>
    </>
  );
};

export default FooterMain;
