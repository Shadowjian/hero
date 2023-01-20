import { Box, Card, Grid } from "@mui/material"
import React from "react"

const Overview = () => {
  return (
    <Box>
      <Box>IMAGE HERE</Box>
      <Grid container spacing={2}>
        <Grid item>
          <Card />
        </Grid>
        <Grid item lg={4}>
          <Card />
        </Grid>
        <Grid item lg={4}>
          <Card />
        </Grid>
        <Grid item lg={4}>
          <Card />
        </Grid>
        <Grid item lg={4}>
          <Card />
        </Grid>
        <Grid item lg={4}>
          <Card />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Overview
