import React from 'react';
import videoBanner from '../../assets/videos/worker.mp4';
import {Box, Button} from '@mui/material';
import Card2 from '../../components/suitup/Card2';
import CommunityTitle from '../../components/suitup/CommunityTitle';
import Steps from '../../components/suitup/Steps';
import Faq from '../../components/suitup/Faq';
import Calltoaction from '../../components/suitup/Calltoaction';


const StyledVideo = {
  width: "100%",
  height: "70vh",
  objectFit: "cover",
  opacity: "0.6",
};

const textOverlay1 = {
  position: "absolute",
  height: "80%",
  top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "50px",
  color: "black",
};

const textOverlay2 = {
  position: "absolute",
  height: "92%",
  top: "0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "25px",
  color: "black",
};

const buttonStyle = {
  position: "absolute",
  zindex: "1",
  top: "450px",
}

export default function Suitup() {
  return (
    <div>
      <video style={StyledVideo} src={videoBanner} autoPlay loop muted />
      <Box display="flex" justifyContent="center" backgroundColor="red"
        >
        <h1 style={textOverlay1}>
          Work Your Way
        </h1>
        <p style={textOverlay2}>
          You bring the skill. We'l make earning easy.
        </p>

          <Button sx={buttonStyle} variant='contained' color='success' size='large'>
            Become a Hero
          </Button>
      </Box>

      <Box>
          <CommunityTitle />
      </Box>

      <Box flex={3} sx={{ padding:'18px, 100px, 100px, 100px' }}>
          <Card2 />
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

