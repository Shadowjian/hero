import { CardMedia,styled,Box,CardContent, Typography } from '@mui/material'
import React from 'react'

import Cosmetics from  '../../../assets/images/Cosmetics.jpg'
import Entertainment from '../../../assets/images/Entertainment.jpg'
import Household from '../../../assets/images/Household.jpg'
import Media from '../../../assets/images/Media.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { bgcolor, fontSize } from '@mui/system'
import zIndex from '@mui/material/styles/zIndex'

const PopularCards = styled(CardMedia)({
height:'160px',
width:'200px',
padding:'0px'
})

function PopularServices() {
  return (
    <>
    

    
    <Box
    sx={{
      margin:'0',
      padding:'0px',
      paddingTop:'20px',
      // bgcolor:'rgba(106, 100, 100, )',
      bgcolor:'rgba(73,71,71)',
      display:{xs:'flex'},
      justifyContent:{xs:'center'},
      flexDirection:{xs:'column'},
      alignItems:{xs:'center'},
      width:{xs:'100%'},
      height:{xs:'200px'}
    
    }}
    >
      <Typography
      sx={{
        color:{xs:'whitesmoke'},
        fontSize:{xs:'20px'},
        position:{xs:'static'},
        // zIndex:'1'
      }}
      >
        POPULAR SERVICES
      </Typography>
      <Carousel
          // height={'100px'}
         width={'329px'}
         display={'flex'}
         infiniteLoop autoPlay
      >
        <Box
        mt={'5px'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        height={'120px'}
        >
         <PopularCards
         sx={{
          padding:'0',
          margin:'0',
          display:{xs:'flex'},
          // justifyContent:{xs:'center'},
          // alignContent:{xs:'center'},
          
          width:{xs:'250px'},
          height:{xs:'140px'}
         }}
         image={Cosmetics}
         >
          <Typography
             sx={{
              
              width:{xs:'250px'},
              height:{xs:'40px'},
              fontSize:{xs:'15px'},
              fontWeight:{xs:'semibold'},
              color:{xs:'whitesmoke'},
              bgcolor:{xs:'rgba(106, 100, 100, 0.7)'}
             }}
             bgcolor={'whitesmoke'}
             component='div'
             >
               COSMETICS SERVICES
             </Typography>
         </PopularCards>
          </Box>
          <Box
        mt={'5px'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        height={'120px'}
        >
         <PopularCards
         sx={{
          padding:'0',
          margin:'0',
          display:{xs:'flex'},
          // justifyContent:{xs:'center'},
          // alignContent:{xs:'center'}, 
          
          width:{xs:'250px'},
          height:{xs:'140px'}
         }}
         image={Entertainment}
         >
          <Typography
             sx={{
              
              width:{xs:'250px'},
              height:{xs:'40px'},
              fontSize:{xs:'15px'},
              fontWeight:{xs:'semibold'},
              color:{xs:'whitesmoke'},
              bgcolor:{xs:'rgba(106, 100, 100, 0.7)'}
             }}
             bgcolor={'whitesmoke'}
             component='div'
             >
               ENTERNTAINMENT SERVICES
             </Typography>
         </PopularCards>
          </Box>
          <Box
        mt={'5px'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        height={'120px'}
        >
         <PopularCards
         sx={{
          padding:'0',
          margin:'0',
          display:{xs:'flex'},
          // justifyContent:{xs:'center'},
          // alignContent:{xs:'center'},
          
          width:{xs:'250px'},
          height:{xs:'140px'}
         }}
         image={Household}
         >
          <Typography
             sx={{
              
              width:{xs:'250px'},
              height:{xs:'40px'},
              fontSize:{xs:'15px'},
              fontWeight:{xs:'semibold'},
              color:{xs:'whitesmoke'},
              bgcolor:{xs:'rgba(106, 100, 100, 0.9)'}
             }}
             bgcolor={'whitesmoke'}
             component='div'
             >
               HOUSEHOLD SERVICES
             </Typography>
         </PopularCards>
          </Box>
          <Box
        mt={'5px'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
        alignItems={'center'}
        height={'120px'}
        >
         <PopularCards
         sx={{
          padding:'0',
          margin:'0',
          display:{xs:'flex'},
          // justifyContent:{xs:'center'},
          // alignContent:{xs:'center'},
          
          width:{xs:'250px'},
          height:{xs:'140px'}
         }}
         image={Media}
         >
          <Typography
             sx={{
              
              width:{xs:'250px'},
              height:{xs:'40px'},
              fontSize:{xs:'15px'},
              fontWeight:{xs:'semibold'},
              color:{xs:'whitesmoke'},
              bgcolor:{xs:'rgba(106, 100, 100, 0.7)'}
             }}
             bgcolor={'whitesmoke'}
             component='div'
             >
               MEDIA SERVICES
             </Typography>
         </PopularCards>
          </Box>
         </Carousel>
    </Box>
    
    
    </>
  )
}

export default PopularServices