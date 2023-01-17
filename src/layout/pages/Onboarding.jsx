import React from 'react'
import Container from '@mui/material/Container'
import { Box, Grid, Stack, Typography } from '@mui/material'
import videoBanner from '../../assets/videos/worker.mp4';
import styled from '@emotion/styled';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const BoxStyle = styled(Box)({
  height: 100,
  width: "100%",
  padding: "10px",
  display: "flex",
});

const StyledVideo = {
  width: "80%",
  height: "40vh",
  objectFit: "cover",
  opacity: "0.6",
};

const Onboarding = () => {
  return (
    <Container maxWidth="xl">
        <Stack direction={{ xl:'row', md:'column'}} p={10}>
          <Box flex={1}>

              <Typography variant='h3' sx={{ padding:"8px 8px 30px 8px"}}>
              Ready to start selling on Fiverr? Here’s the breakdown:
              </Typography>

              <BoxStyle>
                <LightbulbIcon fontSize='large' color='success'
                sx={{ padding:"8px", }} />
                <Box>
                  <Typography variant={{ xl:'h5', md:'subtitle2'}}>
                  Learn what makes a successful profile
                  </Typography>
                  <Typography variant="subtitle2">
                  Discover the do’s and don’ts to ensure you’re always on the right track.
                  </Typography>
                </Box>
              </BoxStyle>

              <BoxStyle>
                <AccountBoxIcon fontSize='large' color='primary'
                sx={{ padding:"8px", }}/>
                <Box>
                  <Typography variant='h5'>
                  Create your seller profile
                  </Typography>
                  <Typography variant="subtitle2">
                  Add your profile picture, description, and professional information.
                  </Typography>
                </Box>
              </BoxStyle>

              <BoxStyle>
                <HomeWorkIcon fontSize='large' color='error'
                sx={{ padding:"8px", }}/>
                <Box>
                  <Typography variant='h5'>
                  Publish your Gig
                  </Typography>
                  <Typography variant="subtitle2">
                  Create a Gig of the service you’re offering and start selling instantly.
                  </Typography>
                </Box>
              </BoxStyle>

          </Box>

          <Box flex={1}>
                <video style={StyledVideo} src={videoBanner} autoPlay loop muted />
          </Box>

          
          
        </Stack>
        
    </Container>
)}

export default Onboarding