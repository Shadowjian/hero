import { Box, Typography } from "@mui/material"
import React from "react"

const CommunityTitle = () => {
  return (
    <Box p={10}>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Join our growing <b style={{ color: "red" }}>Heroes</b> community
      </Typography>
    </Box>
  )
}

export default CommunityTitle

// background:'rgb(33,43,54,9)',
// background:'linear-gradient(20deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 70%, rgba(255,0,0,5) 100%)',
