import { Box, CardMedia, styled, Typography } from "@mui/material"
import { padding } from "@mui/system"
import StepsImage from "../../assets/images/StepsImage.jpg"
import React from "react"
import SecTwo from "./SecTwo"

const StepsHeading = styled(Typography)({})

const StepsHeadingTwo = styled(Typography)({
  textAlign: "center",
  // width: "150px",
  color: "#424242",
})

const Steps = styled(Typography)({
  textAlign: "center",
  padding: "20px",
  fontSize: "20px",
  color: "grey",
})

const SImage = styled(CardMedia)({
  height: "200px",
  width: "375px",
})

function SecOne() {
  return (
    <>
      <Box
        sx={{
          // bgcolor: { xs: "rgba(106, 100, 100,  )" },

          width: { xs: "100%" },

          display: { xs: "flex", sm: "block" },
          flexDirection: { xs: "column" },
          alignItems: { xs: "center", sm: "left" },
          textAlign: { xs: "center", sm: "left" },

          //  padding:{sm:'20px'}
        }}
      >
        <Box
          // padding={"40px"}
          // padding={"50px"}
          bgcolor={"#F5F5F5"}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Typography
            variant="h6"
            sx={{
              padding: "13px",
              color: "#494747",
              textAlign: "center",
              fontSize: { md: "30px" },

              // padding: { xs: "20px", sm: "20px" },
            }}
          >
            A whole world of talented professional at your fingertips
          </Typography>
          <Box
            sx={{
              display: { xs: "flex" },
              justifyContent: { xs: "center" },
              flexDirection: { xs: "column" },
            }}
          >
            <Steps>
              <StepsHeadingTwo
                sx={
                  {
                    // padding:{sm:'20px'}
                  }
                }
                fontWeight={"bold"}
              >
                Tell us what you need
              </StepsHeadingTwo>
              Whatever the service you're looking for, we'll help you find the
              best professional for the job.
            </Steps>

            <Steps>
              <StepsHeadingTwo fontWeight={"bold"}>
                Let us do the Legwork
              </StepsHeadingTwo>
              We’ll search thousands of professionals to find the best ones for
              what you need.
            </Steps>

            <Steps>
              <StepsHeadingTwo fontWeight={"bold"}>
                Compare and Pick the Best
              </StepsHeadingTwo>
              Check out their profiles, reviews and portfolio to help you make a
              decision. From the Selection, pick the best professional for what
              you need.
            </Steps>

            <Steps>
              <StepsHeadingTwo fontWeight={"bold"}>
                Leave a Review
              </StepsHeadingTwo>
              After they’ve done the work, please make sure to leave a review on
              Hero, to help fellow customers find the best professionals.
            </Steps>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              sx={{
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <SImage
                flex={4}
                sx={{
                  // width: { sm: "450px", lg: "100%" },

                  height: { sm: "30vh", md: "40vh" },
                }}
                image={StepsImage}
              />
              <SecTwo />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SecOne
