import React from "react"
import SecTwo from "../../components/home/SecTwo"
import SecOne from "../../components/home/SecOne"
import SkilledGroup from "../../components/home/SkilledGroup"
// import CarouselTwo from "../../components/home/CarouselTwo"
import PopularServices from "../../components/home/PopularServices"
import Container from "@mui/material/Container"
import PersonSearch from "@mui/icons-material/PersonSearch"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { OutlinedInput } from "@mui/material"
import {
  Box,
  createTheme,
  styled,
  CardMedia,
  TextField,
  Button,
  InputBase,
  Hidden,
  Typography,
  Drawer,
  FormControl,
} from "@mui/material"
import Logo from "../../assets/images/Logo.png"
import workerImage from "../../assets/images/workerImage.png"
import webbg from "../../assets/images/webbg.png"
import { heroPalette } from "../../utils/heroPalette"

import zIndex from "@mui/material/styles/zIndex"

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
  height: "70%",
  width: "100%",
  position: "absolute",
  zIndex: "-1",
  margin: "0",
})

const WebLogo = styled(CardMedia)({
  height: "250px",
  width: "250px",
})

const PopularBtn = styled(Button)({
  backgroundColor: heroPalette.bg.primary,
  fontSize: "9px",
  padding: "10px",
  marginBottom: "30px",
  color: "whitesmoke",
  display: "flex",
})

function Home() {
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          mt: { xl: "-10x" },
          justifyContent: { md: "space-around" },
          // gap: { md: "200px" },
        }}
      >
        <Box
          mt={"20px"}
          display={"flex"}
          // flexDirection={"column"}
          sx={{
            justifyContent: "center",
            alignItems: { xs: "center" },
            flexDirection: { xs: "column", md: "column" },
            gap: "40px",
            //   mt: { md: "-171px" },
          }}
        >
          <BgImage
            sx={{
              width: { xs: "100%", md: "166%" },
              // height: { xs: "90%", sm: "80%", md: "79%", xl: "70%" },
              height: { xs: "140vh" },
            }}
            image={webbg}
          />

          <Hidden only={["xs", "sm"]}>
            <WebLogo
              sx={{
                //   mt: "10px",
                width: { md: "80%" },
                height: { md: "220px" },
              }}
              image={Logo}
            />
          </Hidden>

          <Box
            height={"30px"}
            display={"flex"}
            //   gap={1}
            sx={{
              flexDirection: { md: "column" },
              // justifyContent: { md: "space-between" },

              // gap: { md: "60px" },
            }}
            // bgcolor={'red'}
          >
            <Carousel
              respon
              // height={"90px"}
              width={"370px"}
              display={"flex"}
              margin={"10px"}
              infiniteLoop
              autoPlay
            >
              <Box display={"flex"} gap={2} mt={"-20px"} padding={"20px"}>
                <PopularBtn>MANICURE</PopularBtn>
                <PopularBtn>CARPENTER</PopularBtn>
                <PopularBtn>PLUMBER</PopularBtn>
                <PopularBtn>ELECTRICIAN</PopularBtn>
              </Box>
              <Box display={"flex"} gap={2} mt={"-20px"} padding={"20px"}>
                <PopularBtn>BAKER</PopularBtn>
                <PopularBtn>SINGER</PopularBtn>
                <PopularBtn>VOLCANIZE</PopularBtn>
                <PopularBtn>YAYA</PopularBtn>
              </Box>
            </Carousel>
          </Box>
          <Box
            sx={{
              textAlign: { xs: "center" },
              display: { md: "flex" },
              flexDirection: { md: "column" },
              // justifyContent: { md: "space-evenly" },
              // gap:{md:'100px'}
            }}
          >
            <Typography
              sx={{
                lineHeight: "1",
                fontSize: "30px",
                color: "red",
                fontWeight: { xs: "bold" },
                fontSize: { xs: "25px", sm: "50px", md: "30px" },
              }}
            >
              YOUR PROBLEM
            </Typography>
            <Typography
              sx={{
                lineHeight: "1",
                color: "#494747",
                fontWeight: { xs: "bold" },
                fontSize: { xs: "45px", sm: "70px", md: "60px" },
              }}
            >
              WE SOLVE
            </Typography>
          </Box>
        </Box>

        <CardMedia
          sx={{
            //   padding: "10px",
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto" },
            //   padding: { md: "10px" },
            display: { md: "flex" },
            //   justifyContent: { md: "space-around" },

            mt: { md: "20px" },
          }}
          component={"img"}
          image={workerImage}
        />
      </Box>
      <Box>
        <SkilledGroup />
      </Box>
      <PopularServices />
      <Box>
        <SecOne />
      </Box>
    </>
  )
}

export default Home
