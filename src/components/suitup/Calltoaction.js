import styled from '@emotion/styled'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"


const Ctacontainer = styled(Box)({
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const Ctabox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});

const Ctatext = styled(Typography)({
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "700",
});

const Calltoaction = () => {
  return (
    <Ctacontainer>
        <Ctabox>
            <Ctatext>Sign up and create your first Gig today</Ctatext>
            <Link to="onboarding">
                <Button 
                variant="contained"
                color="success"
                size="large" 
                >GET STARTED</Button>
            </Link>
                
        </Ctabox>
    </Ctacontainer>
  )
}

export default Calltoaction