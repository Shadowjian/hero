import React from "react"
import Container from "@mui/material/Container"
import { Box, Button, Stack, Typography } from "@mui/material"
import worker from "../../assets/videos/worker.mp4"
import styled from "@emotion/styled"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import { Link } from "react-router-dom"
import { heroPalette } from "../../utils/heroPalette"

const BoxStyle = styled(Box)({
  height: 100,
  width: "100%",
  padding: "10px",
  display: "flex",
  paddingBottom: "10px"
})

const IconBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingRight: "5px"
})

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
})

const ButtonBox = styled(Box)({
  height: 100,
  width: "100%",
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
})

const Onboarding = () => {
  return (
    <Container maxWidth="xl">
      <Stack direction={{ xl: "row", sm: "column" }} p={{ lg: 10, md: 5 }}>
        <Box flex={1}>
          <Typography
            fontSize={{ lg: "40px", md: "30px", sm: "20px" }}
            padding={{
              lg: "30px",
              md: "20px",
              sm: "30px",
              xs: "30px"
            }}
            fontWeight={700}
          >
            Want to begin your Hero journey? Here's how it works:
          </Typography>

          <BoxStyle>
            {/* <IconBox>
              <LightbulbIcon fontSize="large" color="success" />
            </IconBox> */}
            <ContentBox>
              <Typography
                fontSize={{ lg: "25px", md: "25px", sm: "20px", xs: "13px" }}
                fontWeight={700}
              >
                Discover the key elements of a winning profile
              </Typography>
              <Typography
                fontSize={{ lg: "20px", md: "23px", sm: "18px", xs: "12px" }}
                fontStyle={"italic"}
              >
                Learn the dos and don'ts to stay on the correct path
              </Typography>
            </ContentBox>
          </BoxStyle>

          <BoxStyle>
            {/* <IconBox>
              <AccountBoxIcon fontSize="large" color="primary" />
            </IconBox> */}

            <ContentBox>
              <Typography
                fontSize={{ lg: "25px", md: "25px", sm: "20px", xs: "13px" }}
                fontWeight={700}
              >
                Build your Hero profile
              </Typography>
              <Typography
                fontSize={{ lg: "20px", md: "23px", sm: "18px", xs: "12px" }}
                fontStyle={"italic"}
              >
                Include a profile picture, bio, and professional details
              </Typography>
            </ContentBox>
          </BoxStyle>

          <BoxStyle>
            {/* <IconBox>
              <HomeWorkIcon fontSize="large" color="error" />
            </IconBox> */}

            <ContentBox>
              <Typography
                fontSize={{ lg: "25px", md: "25px", sm: "20px", xs: "13px" }}
                fontWeight={700}
              >
                Make your services live
              </Typography>
              <Typography
                fontSize={{ lg: "20px", md: "23px", sm: "18px", xs: "12px" }}
                fontStyle={"italic"}
              >
                Create a listing for your services and begin offering right away
              </Typography>
            </ContentBox>
          </BoxStyle>

          <ButtonBox>
            <Link to="../../overview">
              <Button variant="contained" color="success" size="large">
                Begin the Journey
              </Button>
            </Link>
          </ButtonBox>
        </Box>

        <Box
          flex={1}
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <video
            src={worker}
            autoPlay
            loop
            muted
            width="100%"
            height="auto"
            maxWidth={{ sm: "100px", md: "200px", lg: "300px" }}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Onboarding
