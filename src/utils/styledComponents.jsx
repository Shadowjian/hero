import { Button, styled } from "@mui/material"
import { heroPalette } from "./heroPalette"

export const CardButton = styled(Button)(({ theme }) => ({
  color: heroPalette.txt.secondary,
  backgroundColor: heroPalette.bg.primary,
  "&:hover": {
    backgroundColor: heroPalette.bg.secondary,
    color: heroPalette.txtHover.primary,
  },
}))
