import React from 'react'
import cardImage from '../../assets/images/img1.jpg'
import cardImage2 from '../../assets/images/img2.jpg'
import Card1 from './Card1'
import { Box, Grid, } from '@mui/material'



const Card2 = () => {
  return (

    <Box>
        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>

            <Grid item lg={3} md={3} xs={6}>
                {/* Imported from card.js  */}
                <Card1 cardImage={cardImage} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage2} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage2} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage2} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage2} /> 
            </Grid>

            <Grid item lg={3} md={3} xs={6}>
                <Card1 cardImage={cardImage} /> 
            </Grid>


        </Grid>

    </Box>

    
    
  )
}

export default Card2