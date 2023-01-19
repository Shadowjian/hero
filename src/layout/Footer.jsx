import { Box } from "@mui/material"
import React from "react"
import { red, indigo, grey, blue } from "@mui/material/colors"
import { heroPalette } from "../utils/heroPalette"

const primary = blue[700]
const accent = red[600]
const dark = grey[900]

export default function Footer() {
  return (
    <Box
      align="center"
      sx={{
        backgroundColor: heroPalette.primary,
        color: accent,
      }}
    >
      Footer
    </Box>
  )
}
