import React from 'react'
import SecTwo from '../../components/home/SecTwo'
import SecOne from '../../components/home/SecOne'
import PopularServices from '../../layout/pages/home/PopularServices'
import Container from '@mui/material/Container'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { Box, createTheme,styled, CardMedia, TextField,Button,InputBase,Hidden, Typography, Drawer } from '@mui/material'
import Logo from '../../assets/images/Logo.png'
import workerImage from '../../assets/images/workerImage.png'
import webbg from  '../../assets/images/webbg.png'
 
import zIndex from '@mui/material/styles/zIndex'

// const theme = createTheme({
//     breakpoints: {
//       values: {
//         mobile: 0,
//         tablet: 640,
//         laptop: 1024,
//         desktop: 1200,
//       },
//     },
//   });

const BgImage = styled(CardMedia)({
    height:'70%',
    width:'100%',
    position:'absolute',
    zIndex:'-1',
    margin:'0'
    
})

const WebLogo =styled(CardMedia)({
    height:'250px',
    width:'250px'
})

const PopularBtn = styled(Button)({
    backgroundColor:'#494747',
     fontSize:'9px',
     padding:'10px',
    marginBottom:'30px',
    color:'whitesmoke',
    display:'flex'

})
 

function Home() {
  return (
    <>
   
    <BgImage
        sx={{
            margin:'0',
            width:{xs:'100%'},
            height:{xs:'75%',sm:'90%',md:'70%'}
        }}
        image={webbg}
        />
        <Container 
        sx={{
            margin:'0',
            paddingLeft:{xs:'0'},
            paddingRight:{xs:'0'},
            display:'flex',
            justifyContent:{xs:'center',sm:'center',md:'center',lg:'left'},
            flexDirection:{xs:'column'}
        }}
        maxWidth="lg"
        >
        <Box
        display={'flex'}
        flexDirection={'column'}
        >
            <Hidden
            only={['xs','sm']}
            >
                <WebLogo
                sx={{
                    mt:'40px',
                    width:{md:'20%'},
                    height:{md:'150px'}
                }}
                image={Logo}
                />
            </Hidden>
                
                <Box
                    display={'flex'}
                    sx={{
                        justifyContent:{xs:'center'},
                        flexDirection:{xs:'row'},
                        mt:{xs:'20px'}
                    }}
                    >
                        <Hidden
                        only={['xs']}
                        >
                        <TextField
                            variant='filled'
                            label={'SEARCH HERO'}
                        sx={{
                            background: 'rgba(62, 56, 56, 0.40)',
                            backdrop:'blur(2.7px)',
                            WebkitBackdropFilter:'blur(3.7px)',
                            height:{xs:'50px'},
                            width:{xs:'200px',sm:'500px',md:'300px',lg:'400px'},
                            }}
                            />
                            <Button
                            sx={{
                                bgcolor:'red',
                                height:'55px',
                                color:'whitesmoke'
                                }}
                                >
                                SEARCH
                            </Button>
                        </Hidden>
                    
                </Box>
                            <Box
                            mt={'20px'}
                            display={'flex'}
                            flexDirection={'column'}
                            
                            sx={{
                                justifyContent:'center',
                                alignItems:{xs:'center'}
                            }}
                            >
                                
                                <Box
                                height={'30px'}
                                display={'flex'}
                                gap={1}
                                // bgcolor={'red'}
                               
                                >
                                    <Carousel 
                                        sx={{
                                            
                                        }}
                                        width={'300px'}
                                        display={'flex'}
                                        
                                        
                                        infiniteLoop autoPlay
                                    >
                                    <Box
                                    display={'flex'}
                                    gap={2}
                                    >
                                    <PopularBtn>
                                        MANICURE
                                    </PopularBtn>
                                    <PopularBtn>
                                        CARPENTER
                                    </PopularBtn>
                                    <PopularBtn>
                                        PLUMBER
                                    </PopularBtn>
                                    <PopularBtn>
                                        ELECTRICIAN
                                    </PopularBtn>
                                    </Box>
                                    <Box
                                    display={'flex'}
                                    gap={2}
                                    >
                                    <PopularBtn>
                                        BAKER
                                    </PopularBtn>
                                    <PopularBtn>
                                        SINGER
                                    </PopularBtn>
                                    <PopularBtn>
                                        VOLCANIZE
                                    </PopularBtn>
                                    <PopularBtn>
                                        YAYA
                                    </PopularBtn>
                                    </Box>
                                    </Carousel>
                                </Box>
                              
                            </Box>
        </Box>
        <Box
        
        display={'flex'}
        alignItems={'center'}
        sx={{
            mt:{xs:'54px'},
            flexDirection:{xs:'column'}
        }}
         
            // bgcolor={'blue'}
        >
            <Typography
            
            sx={{
                lineHeight:'1',
                fontSize:'30px',
                color:'red',
                fontWeight:{xs:'bold'},
                fontSize:{xs:'25px',sm:'50px'}
            }}
            >
                YOUR PROBLEM
            </Typography>
            <Typography
            
            sx={{
                lineHeight:'1',
                color:'#494747',
                fontWeight:{xs:'bold'},
                fontSize:{xs:'45px',sm:'70px'}
            }}
            >
                 WE SOLVE
            </Typography>
            <CardMedia 
             sx={{
                width:{xs:'90%'},
                height:{xs:'auto'}
             }}
            component={'img'}
            
            image={workerImage} 
            />        
        </Box>
        <PopularServices/>
        <SecOne/>
        <SecTwo/> 
             {/* <PopularServices/> */}
           
          
        </Container>
        
    </>
  )
}

export default Home