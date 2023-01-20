import { Box, Button, Card, Grid, Typography } from "@mui/material"
import { styled } from "@mui/system"
import React from "react"
import profileImg from "../../assets/images/profile.jpg"
import BadgeIcon from "@mui/icons-material/Badge"
import AddLinkIcon from "@mui/icons-material/AddLink"
import DescriptionIcon from "@mui/icons-material/Description"
import PortraitIcon from "@mui/icons-material/Portrait"
import FingerprintIcon from "@mui/icons-material/Fingerprint"

const GridContainer = styled(Grid)({
  // backgroundColor: "blue",
  height: "90vh",
  alignItems: "center"
})

const GridBox1 = styled(Grid)({
  // backgroundColor: "red",
  height: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const GridBox2 = styled(Grid)({
  // backgroundColor: "green",
  height: "50vh"
})

const ImageBox = styled(Box)({
  // backgroundColor: "yellow",
  height: "47vh",
  width: "80%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexWrap: "nowrap"
})

const ContentGrid = styled(Grid)({
  // backgroundColor: "yellow",
  height: "13vh",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column"
})

const Overview = () => {
  return (
    <>
      <GridContainer container spacing={2}>
        <GridBox1 xs={12} sm={3} md={3}>
          <ImageBox>
            <img
              src={profileImg}
              alt="profile image"
              style={{ height: "45vh" }}
              width={{ xl: "50%", xs: "50%" }}
            />
          </ImageBox>
        </GridBox1>
        <GridBox2 container spacing={2} xs={12} sm={9} md={9}>
          <ContentGrid xs={12}>
            <Typography variant="h4">
              What are the key elements of a thriving Hero profile?
            </Typography>
            <Typography variant="subtitle1">
              Make a lasting first impression! Develop a profile that stands out
              on Hero.
            </Typography>
          </ContentGrid>
          <ContentGrid xs={12} sm={12} md={4}>
            <BadgeIcon fontSize="large" color="success" />
            <Typography variant="subtitle1">
              Be thorough in crafting your profile to make it just as you
              envision it.
            </Typography>
          </ContentGrid>
          <ContentGrid xs={12} sm={12} md={4}>
            <AddLinkIcon fontSize="large" color="primary" />
            <Typography variant="subtitle1">
              Establish credibility by connecting to relevant professional
              networks.
            </Typography>
          </ContentGrid>
          <ContentGrid xs={12} sm={12} md={4}>
            <DescriptionIcon fontSize="large" color="black" />
            <Typography variant="subtitle1">
              Provide an accurate account of your professional abilities to
              increase job opportunities
            </Typography>
          </ContentGrid>
          <ContentGrid xs={12} sm={12} md={4}>
            <PortraitIcon fontSize="large" color="action" />
            <Typography variant="subtitle1">
              Make it personal! Include a profile picture that clearly displays
              your face
            </Typography>
          </ContentGrid>
          <ContentGrid xs={12} sm={12} md={4}>
            <FingerprintIcon fontSize="large" color="error" />
            <Typography variant="subtitle1">
              To ensure the security of our community for all users, you may be
              required to verify your identity.
            </Typography>
          </ContentGrid>
          <GridBox2>
            <ContentGrid xs={12} sm={12} md={12}>
              <Button variant="contained" color="success" size="large">
                Create an Account
              </Button>
            </ContentGrid>
          </GridBox2>
        </GridBox2>
      </GridContainer>
    </>
  )
}

export default Overview
