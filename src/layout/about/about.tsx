"use client";
import React from "react";
import {
  ContentWrapper,
  Head,
  StyledAboutUsContainer,
  StyledBox,
  StyledImage,
  StyledLeftContent,
  StyledLeftPara,
} from "./about.styled";

const AboutUs = () => {
  const LeftContent = () => {
    return (
      <StyledLeftContent>
        <StyledImage>
          <img
            src="images/backcups.png"
            style={{
              height: "592px",
              width: "770px",
              marginTop: "-35px",
              backgroundImage: "images/backcups.png",
              background:
                "linear-gradient(90.51deg, #FCFAFA -23.69%, rgba(252, 250, 250, 0) 65.2%)",
            }}
          />
        </StyledImage>
        <StyledBox>
          <Head variant="h2">About Us</Head>
          <StyledLeftPara>
            The very idea of plastic-free earth is no less than a dream for
            millions. Every single step can be a revolution in the times to
            come. What matters is the choices that we make today in order to
            give our generations a clean and green earth.
            <br />
            With the same ideologies our CEO, Mr.Saurabh Jain had founded Brand
            ISHWARA under the grand umbrella of Shanti Auto Industries in 2019.
            The idea behind ISHWARA was to invent user-friendly paper disposals
            that are safe for the environment and would be ideal in eradicating
            the usage of plastic from the industry in the times to come.
            <br />
            From single machinery to the overhaul of 15 machines, we have been
            able to build a reliable and reputed brand setup in the paper cup
            industry in the span of 2 years respectively. At Ishwara, we
            manufacture our tableware with 100% ITC paper with high GSM, thus
            delivering efficiency and quality at one place only. Everything from
            mini cups to big tubs is produced under a single roof to ensure
            maximum uniformity, efficiency, and efficacy.
            <br />
            Our esteemed clients include some of the most household names like
            Haldiram, Chaayos, Giani's, and Bikanervala, so on and so forth,
            Contact us if you wish to enroute your brand for the eco-friendly
            alternative. For more information, scroll our website .
          </StyledLeftPara>
        </StyledBox>
      </StyledLeftContent>
    );
  };

  return (
    <StyledAboutUsContainer>
      <ContentWrapper>{LeftContent()}</ContentWrapper>
    </StyledAboutUsContainer>
  );
};

export default AboutUs;
