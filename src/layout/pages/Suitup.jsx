import React from "react"
import videoBanner from "../../assets/videos/worker.mp4"
import { Box, Button, Typography } from "@mui/material"
import CommunityTitle from "../../components/suitup/CommunityTitle"
import Steps from "../../components/suitup/Steps"
import Faq from "../../components/suitup/Faq"
import Calltoaction from "../../components/suitup/Calltoaction"
import CommunityInfo from "../../components/suitup/CommunityInfo"
import StepsTitle from "../../components/suitup/StepsTitle"

const StyledVideo = {
  width: "100%",
  height: "70vh",
  objectFit: "cover",
  opacity: "0.6",
}

const textOverlay1 = {
  position: "absolute",
  height: "80%",
  top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "45px",
  color: "black",
}

const textOverlay2 = {
  position: "absolute",
  height: "92%",
  top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  textAlign: "center",
  color: "black",
}

const buttonStyle = {
  position: "absolute",
  zindex: "1",
  top: "450px",
}

export default function Suitup() {
  return (
    <div>
      <video style={StyledVideo} src={videoBanner} autoPlay loop muted />
      <Box display="flex" justifyContent="center" backgroundColor="red">
        <Typography style={textOverlay1}>Work Your Way</Typography>
        <Typography style={textOverlay2}>
          You bring the skill. We'll make earning easy.
        </Typography>

        <Button
          sx={buttonStyle}
          variant="contained"
          color="success"
          size="large"
        >
          Become a Hero
        </Button>
      </Box>

      <Box>
        <CommunityTitle />
      </Box>

      <Box>
        <CommunityInfo />
      </Box>

      <Box>
        <StepsTitle />
      </Box>

      <Box>
        <Steps />
      </Box>

      <Box>
        <Faq />
      </Box>

      <Box>
        <Calltoaction />
      </Box>
    </div>
  )
}
