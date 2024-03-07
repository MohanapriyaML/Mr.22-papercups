import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Container, Grid, Typography } from '@mui/material';
import { StyledCardContent, StyledThypography, ThypographyProduct } from './ProductCard.styled';

const ActionAreaCard = () => {

  const image = [
    {
      "id": 3,
      "img": "/images/Delights.png",
      "text": "Paper Bowls",
      "lable":"View Product"
    },
    {
      "id": 4,
      "img": "/images/Tubs.png",
      "text": "Paper Tubs",
      "lable":"View Product"
    },
    {
      "id": 6,
      "img": "/images/Cups.png",
      "text": "Paper Cups",
      "lable":"View Product"
    },
    {
      "id": 7,
      "img": "/images/Glass.png",
      "text": "Paper Glass",
      "lable":"View Product"
    },
    {
      "id": 8,
      "img": "/images/Containers.png",
      "text": "Paper Containers",
      "lable":"View Product"
    },
  ]
  return (
    <Box sx={{background:"#FDEFEA",marginTop:"50px",height:{xs:"1700px",sm:"1150px",md:"850px"}}}>
    <Container sx={{paddingLeft:{xs:0,sm:"75px"}}}>
      <Typography variant="h4" sx={{fontFamily:"Georgia",fontWeight:"400",fontSize:"40px",paddingTop:"50px",marginLeft:{xs:"30px"}}}>Our Products</Typography>
      <Grid container  sx={{ marginTop: '40px',alignItems:"center",justifyContent:"center"}}>
        {image.map((result, index) => (
          <Grid xs={12} sm={6} md={3.1} key={index}>
            <Box sx={{ marginTop: {xs:"20px",sm:'30px',md:"30px"},boxShadow:'none'}}>
                <CardMedia
                  component="img"
                  width="210px"
                  height= "220px"
                  image={result.img}
                  sx={{borderRadius:"20px",width:{xs:"90%",sm:"210px"},marginLeft:{xs:"25px",sm:"45px",md:"0px"}}}
                />
              <StyledCardContent >
                    <ThypographyProduct variant="h6">
                      {result.text}
                    </ThypographyProduct>
                    <StyledThypography variant="subtitle1" color='#FFEF62' style={{cursor:'pointer'}}>
                      {result.lable}
                    </StyledThypography>
              </StyledCardContent >
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Box>
  );
}

export default ActionAreaCard;
