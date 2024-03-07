"use client"
import React from 'react'
import { ClientContainer, Header, StyledBox, StyledClientContainer, TypographyContent} from './helper-component/client.styled'
import { Box } from '@mui/material'

export const Client = () => {

    return (
        <>
            <StyledClientContainer>
                <ClientContainer>
                        <Header variant='h4'>Trusted by 50+ Clients</Header>
                        <StyledBox>
                            <Box>
                                <img src="images/rating.png" alt="Rating" style={{marginLeft:"120px",width:"150px"}}/>
                                <TypographyContent>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the”</TypographyContent>
                                <img src="images/Haldrims.png" alt="Haldrims" style={{marginLeft:"120px",width:"130px",marginTop:"10px"}}/>
                            </Box>
                            <Box sx={{marginTop:{xs:"-50px",sm:"-50px",md:"0px"}}}>
                                <img src="images/rating.png" alt="Rating" style={{marginLeft:"120px",width:"150px"}}/>
                                <TypographyContent>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the”</TypographyContent>
                                <img src="images/Dominos.png" alt="Dominos" style={{marginLeft:"120px",width:"150px",marginTop:"20px"}}/>
                            </Box>
                        </StyledBox>
                </ClientContainer>
            </StyledClientContainer>
        </>
    )
}
