import React from 'react'
import { BackgroundImage, Overlay, Title } from '../contact/Contact.styled'
import { ImageContainer, StyledBox, StyledButton, StyledDate, StyledDescription, StyledLink, StyledSubtitle, StyledTitle } from './Blog.styled'
import { Box, Card, CardContent, CardMedia, Container, Grid, Link, Typography } from '@mui/material'
import Person2Icon from '@mui/icons-material/Person2';


const Blog = () => {
    const Cards = [
        {
            "id": 1,
            "img": "/images/cup1.jpeg",
            "Date":" 14 nov 2023 ",
            "title":"THE NEED TO INCREASE THE USAGE OF PAPER GLASS IN INDIA",
            "subtitle":" The Need to Increase the Usage of Paper Glass in India ",
            "description":" As nations grapple with environmental challenges, India stands at a crucial juncture. One of the key areas where significant progress can be made is in reducing single-use plastic consumption. One effective alternative that holds .... "
        },
        {
            "id": 2,
            "img": "/images/cup2.jpg",
            "Date":" 19 oct 2023 ",
            "title":"RISE OF PAPER TUBS IN INDIA A SUSTAINABLE PACKAGING SOLUTION",
            "subtitle":" Rise of paper tubs in india a sustainable packaging solution ",
            "description":" In a world where environmental concerns are paramount, India is taking a monumental step towards a greener future with the widespread adoption of paper tubs. These eco-friendly containers are revolutionizing the way we packa .... "
        },
        {
            "id": 3,
            "img": "/images/cup3.jpg",
            "Date":" 11 sep 2023 ",
            "title":"ENVIRONMENT FRIENDLY PAPER CUPS IN DELHI NCR BY ISHWARA",
            "subtitle":" Environment-Friendly paper cups in Delhi NCR by Ishwara ",
            "description":" In a world that is constantly moving towards a more sustainable future, it is important to take every step possible towards creating a healthier planet. In a city like Delhi NCR, where pollution levels are alarmi .... "
        },
        {
            "id": 4,
            "img": "/images/cup4.jpg",
            "Date":" 9 jun 2023 ",
            "title":"VARIOUS TYPES OF PAPER FOOD CONTAINERS THAT ARE EASY TO USE",
            "subtitle":" Various types of paper food containers that are easy to use ",
            "description":" In recent years, there has been an increasing shift towards sustainable packaging. And with the global pandemic highlighting the importance of hygienic packaging, there is no better time to start exploring va .... "
        },
        {
            "id": 10,
            "img": "/images/cup10.jpg",
            "Date":" 19 Aug 2023 ",
            "title":" DISPOSABLE FOOD CONTAINERS YOUR SOLUTION FOR ON THE GO MEAL ",
            "subtitle":" Disposable Food Containers: Your Solution for On-the-Go Meal ",
            "description":" Are you always on the move but can't seem to find a suitable container for your meal? Then you'll be happy to know that disposable food containers are here to solve your problem. Whether you're a student, busy mo .... "
        },
        {
            "id": 5,
            "img": "/images/cup5.jpeg",
            "Date":" 7 sep 2021 ",
            "title":" WHY PAPER GLASS IN INDIA IS BETTER THAN PLASTIC GLASSES ",
            "subtitle":" Why Paper Glass in India is better than Plastic Glasses ",
            "description":" Both paper glass in India and plastic glasses are effective for drinking while traveling but still the latter one is chosen over the first one since it is less impactful to nature. Disposable paper glass in Noida .... "
        },
        {
            "id": 6,
            "img": "/images/cup6.jpeg",
            "Date":" 16 Aug 2021 ",
            "title":" WHY PAPER GLASS IN NOIDA IS GETTING POPULAR ",
            "subtitle":" Why paper glass in Noida is getting popular  ",
            "description":" Use of plastic made products has always been a subject of criticism. Single use plastic has numerous harmful effects on the environment  and even manufacturers of paper glass in India are making e .... "
        },
        {
            "id": 7,
            "img": "/images/cup7.jpeg",
            "Date":" 14 Aug 2021 ",
            "title":" HOW PAPER CUPS IN DELHI NCR ARE BETTER THAN YOUR PLASTIC CUPS ",
            "subtitle":" How Paper Cups in Delhi NCR are better than your Plastic Cups ",
            "description":" Ishwara takes high esteem in producing their paper cups in India and Delhi NCR. Ishwara has taken its step towards green and clean earth, now is your turn b .... "
        },
        {
            "id": 8,
            "img": "/images/cup8.jpeg",
            "Date":" 10 Jan 2021 ",
            "title":" MYTH FACT REVOLUTION IN THE CUTLERY INDUSTRY ",
            "subtitle":" Myth V/S Fact - Revolution In The Cutlery Industry ",
            "description":" It's been seen that producers of plastic crockeries always raise questions contradicting our notion of saving the environment. They usually debate with the reasoning that ‘ not all paper is reusable or .... "
        },
        {
            "id": 9,
            "img": "/images/cup9.jpeg",
            "Date":" 2 Feb 2020 ",
            "title":" A STEP TOWARDS SAVING AND CARING ",
            "subtitle":" A Step Towards Saving And Caring! ",
            "description":" Natural resources are on the edge of extinction and scientists have predicted that our future position can be fatal and life-threatening. Nature-lovers around the world are working hard to spread the word about our depleting resources .... "
        }
    ]
    return (
        <>
            <BackgroundImage>
                <Overlay>
                    <Title>Blog</Title>
                </Overlay>
                <ImageContainer>
                    <StyledLink href='/'>Home</StyledLink>| Blog
                </ImageContainer>
            </BackgroundImage>
            <Box sx={{marginLeft:'40px',marginRight:'30px'}}>
                <Grid container>
                {Cards.map((result,index) => (
                  <Grid xs={12} sm={4} key={index} sx={{marginBottom:'20px'}}>
                     <Card sx={{
                        maxWidth:{xs:"100%",sm:'380px'},
                        height:'auto',
                        boxShadow:'none',
                        border:'1px solid silver',
                        borderBottom:'none',
                        }}>
                        <StyledDate>
                                 {result.Date}
                        </StyledDate>
                        <CardMedia
                            component="img"
                            image={result.img}
                            sx={{
                                cursor:'pointer',
                                ":hover":{
                                    transform:"scale(1.2)",
                                    transition:"all 0.4s ease 0s",
                                    opacity:"0.5"
                                }
                            }}
                        />
                        
                        </Card>
                        <CardContent sx={{
                            border:'1px solid silver',
                            borderTop:'none',
                            maxWidth:{xs:"100%",sm:'380px'},
                        }}>
                            <StyledTitle href='/' variant="h4">
                                {result.title}
                            </StyledTitle>
                            <StyledBox>
                               <Person2Icon sx={{fontSize:'16px',color:'#a1a1a1'}}/>  
                                <Typography sx={{
                                  fontSize:'12px',
                                  color:'#a1a1a1',
                                  position:'relative',
                                  marginTop:'-19px',
                                  marginLeft:'25px',
                                  fontStyle: "italic",
                                  fontWeight: 300,
                                  }}>
                                    By
                                    <Link href='/' sx={{
                                    textDecoration:'none',
                                    color:'#a1a1a1',
                                    ":hover":{
                                        color:'#ce9634'
                                    }
                                    }}> admin</Link>
                                </Typography>
                            </StyledBox>
                            <StyledSubtitle href='/' variant="h4">
                                  {result.subtitle}  
                            </StyledSubtitle><br />
                            <StyledDescription href='/' variant="body2">
                                  {result.description}
                            </StyledDescription>
                            <Box>
                                 <StyledButton href='/'>Read more</StyledButton>
                            </Box>
                        </CardContent>
                  </Grid>  
                ))}
                </Grid>
            </Box>
        </>
    )
}

export default Blog;