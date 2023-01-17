import { Box, CardMedia, styled, Typography } from '@mui/material'
import { padding } from '@mui/system'
import StepsImage from  '../../../assets/images/StepsImage.jpg'
import React from 'react'
import SecTwo from './SecTwo'
import Footer from './FooterSec'

const StepsHeading = styled(Typography)({

})

const StepsHeadingTwo = styled(Typography)({
    textAlign:'left',
    color:'grey'
    })
    

const Steps = styled(Typography)({
textAlign:'left',
padding:'20px',
paddingTop:'0',
color:'grey'
 
})

const SImage =styled(CardMedia)({
    height:'200px',
    width:'375px'
})


function SecOne() {
  return (
    <>
    <Box
    sx={{
//         background: rgba(106, 100, 100, 0.7);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(7.8px);
// -webkit-backdrop-filter: blur(7.8px);
        
        bgcolor:{xs:'rgba(106, 100, 100, 0.1)'},
        // bgcolor:{xs:'red'},
        backdropFilter:{xs:'blur(7.8px)'},
        width:{xs:'100%'},
        // height:{xs:'auto'},
        display:{xs:'flex',sm:'block'},
        flexDirection:{xs:'column'},
         alignItems:{xs:'center',sm:'left'},
         textAlign:{xs:'center',sm:'left'},
        //  padding:{sm:'20px'}
    }}
    >
        <Typography 
        variant='h6'
        sx={{
            padding:{xs:'20px',sm:'20px'}
        }}
        >
        A whole world of talented proffesional at your fingertips
        </Typography>
                <Steps>
                <StepsHeadingTwo
                sx={{
                    // padding:{sm:'20px'}
                }}
                fontWeight={'bold'}
                >
                Tell us what you need
                </StepsHeadingTwo>
                Whatever the service you're looking for, we'll help you find the best professional for the job.
                </Steps>

                <Steps>
                <StepsHeadingTwo
                fontWeight={'bold'}
                >
                Let us do the Legwork
                </StepsHeadingTwo>
                We’ll search thousands of professionals to find the best ones for what you need.
                </Steps>

                <Steps>
                <StepsHeadingTwo
                fontWeight={'bold'}
                >
                Compare and Pick the Best
                </StepsHeadingTwo>
                Check out their profiles, reviews and portfolio to help you make a decision. From the Selection, pick the best professional for what you need.
                </Steps>

                <Steps>
                <StepsHeadingTwo
                fontWeight={'bold'}
                >
                Leave a Review
                </StepsHeadingTwo>
                After they’ve done the work, please make sure to leave a review on Polido Services, to help fellow customers find the best professionals.
                </Steps>
            <Box
            // sx={{
            //     witdh:{xs:'100%'}
            // }}
            >
            <SImage
            sx={{
                width:{sm:'100%'}
            }}
            image={StepsImage}
            >

            </SImage>
            </Box>
        {/* <Box>
             <SecTwo/>
             
        </Box> */}
        {/* <Footer/>  */}
        
    </Box>
    </>
  )
}

export default SecOne