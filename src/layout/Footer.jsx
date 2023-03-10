
import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material"
import {
  Box,
  styled,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material"
import StarBorder from "@mui/icons-material/StarBorder"
import ArchiveIcon from "@mui/icons-material/Archive"
import Collapse from "@mui/material/Collapse"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { padding, textAlign } from "@mui/system"


const FooterList = styled(Typography)({
  fontSize: "13px",
  textAlign: "center",
  // paddingLeft: "15px",
})

// const Collapse = styled=(Typography)({
//     fontSize:'10px',
//     color:'grey'
// })

function Footer() {
  const [hero, setHero] = useState(false)

  const handleClick = () => {
    setHero(!hero)
  }

  const [about, setAbout] = useState(false)

  const handleClickTwo = () => {
    setAbout(!about)
  }

  const [help, setHelp] = useState(false)

  const handleClickThree = () => {
    setHelp(!help)
  }

  return (

    <>
      <ListItemButton
        sx={{
          width: { xs: "100%" },
          bgcolor: { xs: "whitesmoke" },
        }}
        onClick={handleClick}
      >
        <ListItemText>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { lg: "25px" },
              color: { lg: "#494747" },
            }}
          >
            HERO
          </Typography>
        </ListItemText>
        {hero ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={hero} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FooterList>YOUR PROBLEM WE SOLVE</FooterList>
          <FooterList>Copyright &copy; 2022 HERO</FooterList>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          width: { xs: "100%" },
        }}
        onClick={handleClickTwo}
      >
        <ListItemText>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { lg: "25px" },
              color: { lg: "#494747" },
            }}
          >
            GET HELP
          </Typography>
        </ListItemText>
        {about ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={about} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FooterList>HOW IT WORKS</FooterList>
          <FooterList>FREQUENTLY QUESTIONS</FooterList>
          <FooterList>PRIVACY POLICY</FooterList>
          <FooterList>TERMS AND CONDITIONS</FooterList>
        </List>
      </Collapse>

      <ListItemButton
        sx={{
          width: { xs: "100%" },
          bgcolor: { xs: "whitesmoke" },
        }}
        onClick={handleClickThree}
      >
        <ListItemText>
          <Typography
            sx={{
              textAlign: { xs: "center" },
              fontSize: { lg: "25px" },
              color: { lg: "#494747" },
            }}
          >
            ABOUT US
          </Typography>
        </ListItemText>
        {help ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={help} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <FooterList>ABOUT US</FooterList>
          <FooterList>OUR SERVICE</FooterList>
          <FooterList>TESTIMONIALS</FooterList>
          <FooterList>JOIN US NOW</FooterList>
        </List>
      </Collapse>

      <Box
        sx={{
          bgcolor: { xs: "#494747" },
          height: { xs: "auto" },
          width: { xs: "100%" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "15px" },
            color: { xs: "whitesmoke" },
            display: { xs: "flex" },
            flexDirection: { xs: "column" },
            alignItems: { xs: "center" },
            justifyContent: { xs: "space-around" },
            padding: { xs: "20px" },
          }}
        >
          CONTACT US
        </Typography>
        <Box
          sx={{
            display: { xs: "flex" },
            justifyContent: { xs: "center" },
            gap: { xs: "20px" },
          }}
        >
          <Facebook
            sx={{
              color: "whitesmoke",
            }}
            fontSize="large"
          />
          <Twitter
            sx={{
              color: "whitesmoke",
            }}
            fontSize="large"
          />
          <Instagram
            sx={{
              color: "whitesmoke",
            }}
            fontSize="large"
          />
          <LinkedIn
            sx={{
              color: "whitesmoke",
            }}
            fontSize="large"
          />
        </Box>
        <Box
          sx={{
            padding: { xs: "20px", sm: "30px" },
            textAlign: { xs: "center" },
          }}
        >
          <Typography color="whitesmoke">
            support@HERO.com <br />
            63 (945) 773 0024
          </Typography>
        </Box>
      </Box>
    </>

  )
}

export default Footer

// import { Box } from "@mui/material"
// import React from "react"
// import { red, indigo, grey, blue } from "@mui/material/colors"
// import { heroPalette } from "../utils/heroPalette"

// const primary = blue[700]
// const accent = red[600]
// const dark = grey[900]

// export default function Footer() {
//   return (
//     <Box
//       align="center"
//       sx={{
//         backgroundColor: heroPalette.primary,
//         color: accent,
//       }}
//     >
//       Footer
//     </Box>
//   )
// }
