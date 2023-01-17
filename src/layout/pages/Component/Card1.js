import React from 'react'
import { Box, CardContent, CardMedia, styled, Typography } from '@mui/material'


// const StyledBox = styled(Box)({
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     paddingLeft: "20px"
// });

const Card1 = ({cardImage}) => {
  return (
    <Box paddingLeft={4} paddingRight={4}>
        <CardMedia
            component="img"
            height="50%"
            width={"50%"}
            image={cardImage}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" align="center" component="div">
                JosephG
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
                FULL STACK DEV
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary">
                CONTACT INFO
            </Typography>
            </CardContent>
    </Box>
  )
}

export default Card1