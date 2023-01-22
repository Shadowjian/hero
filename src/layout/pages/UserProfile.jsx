import {
  Avatar,
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Container
} from "@mui/material"
import BorderColorIcon from "@mui/icons-material/BorderColor"
import AddReactionIcon from "@mui/icons-material/AddReaction"

import React from "react"
import ContAccord from "../../components/ContAccord"

export default function UserProfile({ states, dispatchers }) {
  const { user } = states
  const memberSince = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "2-digit",
    year: "numeric"
  })
  console.log(user)
  return (
    <Container
      sx={{
        margin: "20px auto"
      }}
    >
      <Box
        gap={2}
        display={"flex"}
        sx={{
          flexDirection: { xs: "column", sm: "row" }
        }}
      >
        <Box
          border={"2px solid gray"}
          padding={"20px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          flex={3}
          bgcolor="whitesmoke"
          gap={"10px"}
        >
          <Avatar sx={{ width: 70, height: 70 }}>
            {user.userName.slice(0, 1).toUpperCase()}
          </Avatar>

          <Typography>{user.userName}</Typography>
          <Button>
            <BorderColorIcon />
          </Button>
          {/* <Button sx={{ bgcolor: "#494747" }} variant="contained">
            Preview Hero Profile
          </Button> */}

          <Box borderTop={"2px solid gray"} display={"flex"} gap={10}>
            <Box>
              <Typography>From</Typography>
              <Typography>Member since</Typography>
            </Box>
            <Box textAlign={"right"}>
              <Typography>{user.address}</Typography>
              <Typography>{memberSince}</Typography>
            </Box>
          </Box>
          <Box bgcolor={"whitesmoke"} className="descriptionBox">
            <ContAccord />
          </Box>
        </Box>

        <Box
          border={"2px solid gray"}
          display={"flex"}
          gap={2}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          flex={9}
          bgcolor="whitesmoke"
          sx={{
            padding: { xs: "40px" }
          }}
        >
          <AddReactionIcon sx={{ fontSize: 90, color: "#494747" }} />
          <Typography variant="body1" color="initial">
            It seems that you don't have any active Gigs
          </Typography>
          <Button sx={{ bgcolor: "#494747" }} variant="contained">
            Create a new Gig
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
