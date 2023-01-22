import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Facebook, LinkedIn } from "@mui/icons-material"
import { Box } from "@mui/material"

function ContAccord() {
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "red",
                // transform: "rotate(10deg)",
              }}
            />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Description
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "red",
                // transform: "rotate(10deg)",
              }}
            />
          }
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Languages
          </Typography>
          {/* <Typography sx={{ color: "text.secondary" }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box
        sx={{
          padding: { xs: "10px" },
          display: { xs: "flex" },
          flexDirection: { xs: "column" },
          gap: { xs: "10px" },
        }}
      >
        <Typography variant="h6">Linked Accounts</Typography>
        <Box display={"flex"} textAlign={"left"} alignItems={"center"}>
          <Facebook sx={{ color: "blue" }} />
          <Typography>Facebook</Typography>
        </Box>
        <Box display={"flex"} textAlign={"left"} alignItems={"center"}>
          <LinkedIn sx={{ color: "rgba(13, 226, 255, 0.9)" }} />
          <Typography>LinkedIn</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default ContAccord
