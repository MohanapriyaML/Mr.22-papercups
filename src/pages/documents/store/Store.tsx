/* eslint-disable @next/next/no-img-element */
"use client";
import { Grid, Typography } from "@mui/material";
import {
  SlideContainer,
  SlideItem,
  StyledLink,
  StyledTypography,
  StyledTypographyWrapper,
} from "./Store.styled";

const imageUrls = [
  "http://ishwara.in/admin/img/11.png",
  "http://ishwara.in/admin/img/2.png",
  "http://ishwara.in/admin/img/3.png",
  "http://ishwara.in/admin/img/4.png",
  "http://ishwara.in/admin/img/5.png",
  "http://ishwara.in/admin/img/6.png",
];

const Store = () => {
  return (
    <>
      <SlideContainer>
        <Grid container>
          {imageUrls.map((url, index) => (
            <Grid item key={index}>
              <SlideItem>
                <img
                  src={url}
                  alt={`item-${index}`}
                  style={{ width: "100%" }}
                />
              </SlideItem>
            </Grid>
          ))}
        </Grid>
      </SlideContainer>
      <StyledTypographyWrapper variant="h1">
        One Store For All Your Disposable Paper Products
      </StyledTypographyWrapper>
      <StyledTypography variant="body2">
        If you too are a supporter of the green revolution, then stop harming
        the earth with non-biodegradable plastic products. Ishwara supplies all
        the disposable paper products under one roof. It takes care of all its
        clients demands. We also provide logo printing, design printing, and
        promotion for our clients. Our goal is to bring a better change with our
        nature-friendly, superior quality, and user-friendly products. Ishwara
        has emerged as one of the top suppliers of disposable paper products in
        Delhi NCR and other parts of India.
      </StyledTypography>
      
      <StyledTypography variant="body2">
        <StyledLink href="#paper-tubs">Paper Tubs in India :</StyledLink>
        Ishwara paper tubs are known for their sizes and perfect fitting of
        their lids. Our paper tubs are user-friendly and can be used to store
        any kind of material, solid or liquid. Ishwara is just not known as the
        best disposable paper cups manufacturer but its paper tubs have also
        gained high popularity in the market. Our paper tubs are designed in
        such a way that they look attractive as well as they are also
        user-friendly. There is a high demand for our disposable paper tubs as
        along with paper tubs, we also deliver its perfect fitting paper lids.
        If you are looking for any of these products, order these disposable
        paper products from the best disposable paper products dealer, Ishwara.
      </StyledTypography>

      <StyledTypography variant="body2">
        <StyledLink href="#paper-cups">Paper Cups in India :</StyledLink>
        Ishwara has a wide range of paper cups with different sizes, colors, and
        shapes. It is known as the best disposable paper cups manufacturer in
        India. We supply our disposable paper cups in Delhi NCR and different
        parts of India. Our products are high in demand in all the sectors, be
        it healthcare, banks, restaurants, railways, airways, etc. Our products
        are manufactured with all the precision and are delivered after various
        quality checks. We also take care of our clients other demands like
        printing logo, image, brand promotion, etc. We take pride in being
        recognized as the best disposable paper cups manufacturer in India.
      </StyledTypography>

      <StyledTypography variant="body2">
        <StyledLink href="#paper-glass">Paper Glass in India :</StyledLink>
        Disposable glasses have always been in high demand. Be it any industry,
        food industry, transportation industry, railway, government sector,
        water, and the disposable glass is the basic necessity. Ishwara paper
        glass is of superior quality and has high durability. Our paper glass is
        designed in such a way that it is made leak-proof and the material in it
        can be stored for up to 12 days. Ishwara is raising its step towards a
        safer earth; we need to do the same by using disposable paper products.
      </StyledTypography> 
    </>
  );
};

export default Store;
