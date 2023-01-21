import {
  Box,
  Button,
  CardMedia,
  Hidden,
  styled,
  Typography,
} from "@mui/material"

import Cosmetics from "../../assets/images/Cosmetics.jpg"
import Entertainment from "../../assets/images/Entertainment.jpg"
import Household from "../../assets/images/Household.jpg"
import Media from "../../assets/images/Media.jpg"
import Physical from "../../assets/images/Physical.jpg"
import React from "react"

const PopularCards = styled(CardMedia)({
  height: "220px",
  width: "200px",

  //   clipPath: "polygon(0 10%, 130% 0, 130% 100%, 0 90%)",
  boxShadow: "20px 10px 20px rgba(73, 71, 71,50)",
  //   transform: "rotateY(20deg)",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  //   boxShadow: "50px 10px 1px black",
  //   width: xs : "50px",
  //   borderRadius: "10px",
})

const PopularBtn = styled(Button)({
  //   clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",

  //   transform: "rotateY(20deg)",
  borderRadius: "5px",
  width: "200px",
  backgroundColor: "rgba(73, 71, 71, 0.8)",
  color: "whitesmoke",
  fontSize: "20px",
})

function SkilledGroup() {
  return (
    <>
      <Hidden only={["xs", "sm"]}>
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            //   flexWrap: "wrap",
            // padding: "20px",
            justifyContent: "center",
          }}
        >
          <Typography
            padding={"20px"}
            color={"#494747"}
            fontWeight={"bold"}
            fontSize={"30px"}
            display={"flex"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            POPULAR SERVICES
          </Typography>
          <Box display={"flex"} justifyContent={"space-around"}>
            <PopularCards
              sx={{
                width: { md: "169" },
              }}
              image={Cosmetics}
            >
              <PopularBtn
              //   sx={{
              //     bgcolor: "red",
              //     maxWidth: "100px",
              //   }}
              >
                COSMETICS
              </PopularBtn>
            </PopularCards>
            <PopularCards image={Household}>
              <PopularBtn
              //   sx={{
              //     bgcolor: "red",
              //     maxWidth: "100px",
              //   }}
              >
                Household
              </PopularBtn>
            </PopularCards>
            <PopularCards image={Media}>
              <PopularBtn
              //   sx={{
              //     bgcolor: "red",
              //     maxWidth: "100px",
              //   }}
              >
                Media
              </PopularBtn>
            </PopularCards>
            <PopularCards image={Entertainment}>
              <PopularBtn
              //   sx={{
              //     bgcolor: "red",
              //     maxWidth: "100px",
              //   }}
              >
                Entertainment
              </PopularBtn>
            </PopularCards>
            <PopularCards image={Physical}>
              <PopularBtn
              //   sx={{
              //     bgcolor: "red",
              //     maxWidth: "100px",
              //   }}
              >
                Physical
              </PopularBtn>
            </PopularCards>
          </Box>
        </Box>
      </Hidden>
    </>
  )
}

export default SkilledGroup

// import React from 'react'

// function SkilledGroup() {
//   return (
//         <>
//         <Box
//             mt={"5px"}
//             display={"flex"}
//             justifyContent={"center"}
//             flexDirection={"column"}
//             alignItems={"center"}
//             height={"120px"}
//           >
//             <PopularCards
//               sx={{
//                 padding: "0",
//                 margin: "0",
//                 display: { xs: "flex" },
//                 // justifyContent:{xs:'center'},
//                 // alignContent:{xs:'center'},

//                 width: { xs: "250px" },
//                 height: { xs: "140px" },
//               }}
//               image={Cosmetics}
//             >
//               <Typography
//                 sx={{
//                   width: { xs: "250px" },
//                   height: { xs: "40px" },
//                   fontSize: { xs: "15px" },
//                   fontWeight: { xs: "semibold" },
//                   color: { xs: "whitesmoke" },
//                   bgcolor: { xs: "rgba(106, 100, 100, 0.7)" },
//                 }}
//                 bgcolor={"whitesmoke"}
//                 component="div"
//               >
//                 COSMETICS SERVICES
//               </Typography>
//             </PopularCards>
//           </Box>
//           <Box
//             mt={"5px"}
//             display={"flex"}
//             justifyContent={"center"}
//             flexDirection={"column"}
//             alignItems={"center"}
//             height={"120px"}
//           >
//             <PopularCards
//               sx={{
//                 padding: "0",
//                 margin: "0",
//                 display: { xs: "flex" },
//                 // justifyContent:{xs:'center'},
//                 // alignContent:{xs:'center'},

//                 width: { xs: "250px" },
//                 height: { xs: "140px" },
//               }}
//               image={Entertainment}
//             >
//               <Typography
//                 sx={{
//                   width: { xs: "250px" },
//                   height: { xs: "40px" },
//                   fontSize: { xs: "15px" },
//                   fontWeight: { xs: "semibold" },
//                   color: { xs: "whitesmoke" },
//                   bgcolor: { xs: "rgba(106, 100, 100, 0.7)" },
//                 }}
//                 bgcolor={"whitesmoke"}
//                 component="div"
//               >
//                 ENTERNTAINMENT SERVICES
//               </Typography>
//             </PopularCards>
//           </Box>
//           <Box
//             mt={"5px"}
//             display={"flex"}
//             justifyContent={"center"}
//             flexDirection={"column"}
//             alignItems={"center"}
//             height={"120px"}
//           >
//             <PopularCards
//               sx={{
//                 padding: "0",
//                 margin: "0",
//                 display: { xs: "flex" },
//                 // justifyContent:{xs:'center'},
//                 // alignContent:{xs:'center'},

//                 width: { xs: "250px" },
//                 height: { xs: "140px" },
//               }}
//               image={Household}
//             >
//               <Typography
//                 sx={{
//                   width: { xs: "250px" },
//                   height: { xs: "40px" },
//                   fontSize: { xs: "15px" },
//                   fontWeight: { xs: "semibold" },
//                   color: { xs: "whitesmoke" },
//                   bgcolor: { xs: "rgba(106, 100, 100, 0.9)" },
//                 }}
//                 bgcolor={"whitesmoke"}
//                 component="div"
//               >
//                 HOUSEHOLD SERVICES
//               </Typography>
//             </PopularCards>
//           </Box>
//           <Box
//             mt={"5px"}
//             display={"flex"}
//             justifyContent={"center"}
//             flexDirection={"column"}
//             alignItems={"center"}
//             height={"120px"}
//           >
//             <PopularCards
//               sx={{
//                 padding: "0",
//                 margin: "0",
//                 display: { xs: "flex" },
//                 // justifyContent:{xs:'center'},
//                 // alignContent:{xs:'center'},

//                 width: { xs: "250px" },
//                 height: { xs: "140px" },
//               }}
//               image={Media}
//             >
//               <Typography
//                 sx={{
//                   width: { xs: "250px" },
//                   height: { xs: "40px" },
//                   fontSize: { xs: "15px" },
//                   fontWeight: { xs: "semibold" },
//                   color: { xs: "whitesmoke" },
//                   bgcolor: { xs: "rgba(106, 100, 100, 0.7)" },
//                 }}
//                 bgcolor={"whitesmoke"}
//                 component="div"
//               >
//                 MEDIA SERVICES
//               </Typography>
//             </PopularCards>
//           </Box>
//         </>
//   )
// }

// export default SkilledGroup
