import { Box, Button, CardMedia,styled, Typography } from '@mui/material'
import React from 'react'
import PresImage from  '../../assets/images/PresidentImage.jpg'

const ImageCard =styled(CardMedia)({
height:'250px',
width:'375px'
})
 
function SecTwo() {
  return (
    <>
    <Box
    sx={{
        // mt:{xs:'20px'},
        // bgcolor:{xs:'rgba(106, 100, 100, 0.1)'},
        // height:{xs:'250px'},
        height:{xs:'auto'},
        width:{xs:'100%'}
    }}
    >
        <ImageCard
            sx={{
                display:{xs:'flex'},
                 alignItems:{xs:'left'},
                paddingBottom:{sm:'0px'},
                height:{sm:'400px'},
                 width:{sm:'100%'}
            
            }}
        image={PresImage}
        >
            <Box
            sx={{
                display:{xs:'flex'},
                flexDirection:{xs:'column'},
                padding:'30px'
            }}
            >
            <Typography
            sx={{
                 
                // fontVariant:{xs:'h6'},
                // height:{xs:'40px'},
                // padding:{xs:'10px'},
                fontWeight:{xs:'semibold'},
                fontSize:{xs:'20px',sm:'30px'},
                color:{xs:'#494747'},
                fontWeight:{xs:'bold'}
            }}
            >
            Ready to Find <br /> a Proffesional?
            
            </Typography>
            <Button
            sx={{
                bgcolor:'red',
                color:'white'
            }}
            >
            GET STARTED
            </Button>
            </Box>
         
           
        </ImageCard>
        
    </Box>
    </>
  )
}

export default SecTwo