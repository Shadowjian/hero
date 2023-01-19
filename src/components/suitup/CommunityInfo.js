import styled from "@emotion/styled"
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material"
import React from "react"
import image1 from "../../assets/images/img1.jpg"
import image2 from "../../assets/images/img2.jpg"

const BoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  maxHeight: "auto",
  paddingBottom: "30px",
})

// const GridWrapper = styled(Box)({
//   height: "40vh",
//   width: "80%",
//   marginLeft: "10px",
//   marginRight: "10px",
// })

const StyledBox = styled(Box)({
  height: "40vh",
  width: "300px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
})

const TextStyle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "700",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  color: "black",
  padding: "2px 7px",
})

const CommunityInfo = () => {
  return (
    <>
      <BoxContainer>
        <Stack
          mt={5}
          direction={{ lg: "row", md: "row", sm: "column" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StyledBox sx={{ backgroundImage: `url(${image1})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox sx={{ backgroundImage: `url(${image2})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox sx={{ backgroundImage: `url(${image1})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox sx={{ backgroundImage: `url(${image2})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>
        </Stack>
      </BoxContainer>

      <BoxContainer>
        <Stack
          mt={1}
          direction={{ lg: "row", md: "row", sm: "column" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <StyledBox sx={{ backgroundImage: `url(${image1})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox sx={{ backgroundImage: `url(${image2})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox sx={{ backgroundImage: `url(${image1})` }}>
            <TextStyle>I'm a Contruction Worker</TextStyle>
          </StyledBox>

          <StyledBox
            sx={{
              backgroundColor: "whitesmoke",
              border: "solid black 1px",
            }}
          >
            <TextStyle>Show people your powers!</TextStyle>
            <Button variant="contained" color="success">
              Become a Hero
            </Button>
          </StyledBox>
        </Stack>
      </BoxContainer>
      <Divider variant="middle" />
    </>
  )
}

export default CommunityInfo

// <BoxContainer>
//   <GridWrapper>
//     <Grid container spacing={2}>
//       <StyledBox
//         item
//         lg={3}
//         sm={6}
//         sx={{ backgroundImage: `url(${image1})` }}
//       >
//         <Typography>I'm a Contruction Worker</Typography>
//       </StyledBox>

//       <StyledBox
//         item
//         lg={3}
//         sm={6}
//         sx={{ backgroundImage: `url(${image2})` }}
//       >
//         <Typography>I'm a Contruction Worker</Typography>
//       </StyledBox>

//       <StyledBox
//         item
//         lg={3}
//         sm={6}
//         sx={{ backgroundImage: `url(${image1})` }}
//       >
//         <Typography>I'm a Contruction Worker</Typography>
//       </StyledBox>

//       <StyledBox
//         item
//         lg={3}
//         sm={6}
//         sx={{ backgroundImage: `url(${image2})` }}
//       >
//         <Typography>I'm a Contruction Worker</Typography>
//       </StyledBox>
//     </Grid>
//   </GridWrapper>
// </BoxContainer>
