import styled from "@emotion/styled"
import { Box, Divider, Paper, Stack, Typography } from "@mui/material"
import React from "react"

const StyledBox = styled(Paper)({
  height: 250,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
})

const StyledTypography = styled(Typography)({
  // margin:'10px',
  fontSize: "20px",
})

const StyledTypography2 = styled(Typography)({
  margin: "10px",
  fontSize: "15px",
})

const Steps = () => {
  return (
    <>
      <Box p={5}>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt={1}
        >
          <StyledBox elevation={12}>
            <StyledTypography align="center">Create a Gig</StyledTypography>
            <StyledTypography2
              pl={{ xs: 7, sm: 1, md: 3, lg: 8, xl: 20 }}
              pr={{ xs: 7, sm: 1, md: 3, lg: 8, xl: 20 }}
              align="center"
            >
              Sign up for free, set up your Gig, and offer your work to our
              global audience.
            </StyledTypography2>
          </StyledBox>
          <StyledBox elevation={12}>
            <StyledTypography align="center">
              Deliver great work
            </StyledTypography>
            <StyledTypography2
              pl={{ xs: 1, sm: 1, md: 5, lg: 10, xl: 20 }}
              pr={{ xs: 1, sm: 1, md: 5, lg: 10, xl: 20 }}
              align="center"
            >
              Get notified when you get an order and use our system to discuss
              details with customers.
            </StyledTypography2>
          </StyledBox>
          <StyledBox elevation={12}>
            <StyledTypography align="center">Get Paid</StyledTypography>
            <StyledTypography2
              pl={{ xs: 7, sm: 1, md: 3, lg: 8, xl: 20 }}
              pr={{ xs: 7, sm: 1, md: 3, lg: 8, xl: 20 }}
              align="center"
            >
              Get paid on time, every time. Payment is available for withdrawal
              as soon as it clears.
            </StyledTypography2>
          </StyledBox>
        </Stack>
      </Box>

      <Divider variant="middle" />
    </>
  )
}

export default Steps
