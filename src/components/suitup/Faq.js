import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import React from "react"
import styled from "@emotion/styled"
import { fontStyle } from "@mui/system"
import { heroPalette } from "../../utils/heroPalette"

const AccordionContainer = styled(Box)({
  height: "80vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexWrap: "nowrap",
})

const AccordionBox = styled(Box)({
  height: "auto",
  width: "30%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignContent: "center",
  alignSelf: "center",
  backgroundColor: "#f2f2e7",
  border: "solid black 1px",
})

const Accordioncontent = styled(Accordion)({
  color: "white",
})

const Details = styled(AccordionDetails)({
  width: "100%",
  fontStyle: "italic",
  backgroundColor: "#f2f2e7",
  color: "black",
})

const Faq = () => {
  return (
    <>
      <Box pt={5}>
        <Typography align="center" variant="h2" sx={{ fontWeight: 900 }}>
          F A Q
        </Typography>
      </Box>
      <AccordionContainer>
        <AccordionBox>
          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">What can I sell?</Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                Be creative! You can offer any service you wish as long as it's
                legal and complies with our terms. There are over 200 categories
                you can browse to get ideas.
              </Typography>
            </Details>
          </Accordioncontent>

          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">
                How much time will I need to invest?
              </Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                It's very flexible. You need to put in some time and effort in
                the beginning to learn the marketplace and then you can decide
                for yourself what amount of work you want to do.
              </Typography>
            </Details>
          </Accordioncontent>

          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">How much money can I make?</Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                It's totally up to you. You can work as much as you want. Many
                sellers work on Fiverr full time and some keep their 9-5 job
                while using Fiverr to make extra money.
              </Typography>
            </Details>
          </Accordioncontent>

          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">How much does it cost</Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                It's free to join Fiverr. There is no subscription required or
                fees to list your services. You keep 80% of each transaction.
              </Typography>
            </Details>
          </Accordioncontent>

          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">How much does it cost</Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                It's free to join Fiverr. There is no subscription required or
                fees to list your services. You keep 80% of each transaction.
              </Typography>
            </Details>
          </Accordioncontent>

          <Accordioncontent>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "green" }}
            >
              <Typography variant="h6">How do I get paid?</Typography>
            </AccordionSummary>
            <Details>
              <Typography>
                Once you complete a buyer's order, the money is transferred to
                your account. No need to chase clients for payments and wait 60
                or 90 days for a check.
              </Typography>
            </Details>
          </Accordioncontent>
        </AccordionBox>
      </AccordionContainer>

      <Divider variant="middle" />
    </>
  )
}

export default Faq
