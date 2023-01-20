import { Box, Button, CardMedia, styled, Typography } from "@mui/material"
import React from "react"
import PresImage from "../../assets/images/PresidentImage.jpg"

const ImageCard = styled(CardMedia)({
  height: "250px",
  width: "375px",
})

function SecTwo() {
  return (
    <>
      <Box
        sx={{
          // mt:{xs:'20px'},


          bgcolor: { xs: "#F5F5F5" },
          // height:{xs:'250px'},
          height: { xs: "auto" },
          //   width: { xs: "375px" },
          display: { xs: "flex" },
          justifyContent: { xs: "center" },

        }}
      >
        <ImageCard
          sx={{
            display: { xs: "flex" },


            // justifyContent:{xs:'center'}
            paddingBottom: { sm: "0px" },
            height: { sm: "500px" },
            width: { xs: "375px", sm: "100%" },

          }}
          image={PresImage}
        >
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: { xs: "column" },

              padding: "30px",
            }}
          >
            <Typography
              sx={{
                // fontVariant:{xs:'h6'},
                // height:{xs:'40px'},
                // padding:{xs:'10px'},
                fontWeight: { xs: "semibold" },
                fontSize: { xs: "20px", sm: "30px" },
                color: { xs: "#494747" },
                fontWeight: { xs: "bold" },
              }}
            >
              Ready to Find <br /> a Proffesional?
            </Typography>
            <Button
              sx={{
                bgcolor: "red",
                color: "white",
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
