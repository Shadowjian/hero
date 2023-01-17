import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import styled from '@emotion/styled';
import { fontStyle } from '@mui/system';

const AccordionContainer = styled(Box)({
    height:"50vh",
    width:'100%',
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
});

const AccordionBox = styled(Box)({
    height:"auto",
    width:'60%',
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    alignSelf: "center",
});

const Accordioncontent = styled(Accordion)({
    
});

const Details = styled(AccordionDetails)({
    width: "50%",
    fontStyle: "italic",
});


const Faq = () => {
  return (
    <AccordionContainer>
        <AccordionBox>
            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>What can I sell?</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    Be creative! You can offer any service you wish as long as it's legal and complies with our terms. There are over 200 categories you can browse to get ideas.
                    </Typography>
                </Details>
            </Accordioncontent>

            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>How much time will I need to invest?</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    It's very flexible. You need to put in some time and effort in the beginning to learn the marketplace and then you can decide for yourself what amount of work you want to do.
                    </Typography>
                </Details>
            </Accordioncontent>

            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>How much money can I make?</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    It's totally up to you. You can work as much as you want. Many sellers work on Fiverr full time and some keep their 9-5 job while using Fiverr to make extra money.
                    </Typography>
                </Details>
            </Accordioncontent>

            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>How much does it cost</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    It's free to join Fiverr. There is no subscription required or fees to list your services. You keep 80% of each transaction.
                    </Typography>
                </Details>
            </Accordioncontent>

            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>How much does it cost</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    It's free to join Fiverr. There is no subscription required or fees to list your services. You keep 80% of each transaction.
                    </Typography>
                </Details>
            </Accordioncontent>

            <Accordioncontent>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography variant='h6'>How do I get paid?</Typography>
                </AccordionSummary>
                <Details>
                    <Typography>
                    Once you complete a buyer's order, the money is transferred to your account. No need to chase clients for payments and wait 60 or 90 days for a check.
                    </Typography>
                </Details>
            </Accordioncontent>

        </AccordionBox>
    </AccordionContainer>
  )
}

export default Faq