import React, { useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SliderThumb,
  Stack,
  styled,
  TextField
} from "@mui/material"
import { StarBorder } from "@mui/icons-material"
import { heroPalette } from "../../utils/heroPalette"
import { blueGrey, purple } from "@mui/material/colors"
import { CardButton } from "../../utils/styledComponents"

export default function SearchResult({ states, dispatchers }) {
  const { gigs } = states
  const [showGig, setShowGig] = useState(false)
  const [id, setId] = useState(0)
  const [open, setOpen] = useState(false)

  const selectedGig = gigs.find(gig => gig.id == id)
  console.log(selectedGig)

  return (
    <Container
      sx={
        {
          // height: "100vh",
        }
      }
    >
      <Stack
        direction="column"
        sx={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Typography variant="h5" color="initial">
          Search Results: {gigs.length}
        </Typography>
        <Stack
          direction={1}
          gap={3}
          m={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          {gigs.length &&
            gigs.map(gig => (
              <GigCard
                key={gig.id}
                gig={gig}
                setShowGig={setShowGig}
                showGig={showGig}
                id={id}
                setId={setId}
              />
            ))}
        </Stack>
      </Stack>
      {showGig && (
        <GigModal
          selectedGig={selectedGig}
          showGig={showGig}
          setShowGig={setShowGig}
        />
      )}
    </Container>
  )
}

function GigModal({ selectedGig, showGig, setShowGig }) {
  const handleClose = () => setShowGig(!showGig)

  return (
    <Dialog open={showGig} onClose={handleClose}>
      <CardMedia
        sx={{ height: 240 }}
        image={selectedGig.banner}
        title="green iguana"
      />
      <DialogTitle>
        <Typography variant="body2">Hi I am</Typography>{" "}
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {selectedGig.hero}
        </Typography>
        <Typography variant="body2">and I am a</Typography>
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {selectedGig.power}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please click the "Avail My Service" button below to book my service.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          sx={{
            color: heroPalette.txt.dark
          }}
        >
          Avail My Service
        </Button>
        <Button
          onClick={handleClose}
          size="small"
          sx={{ color: heroPalette.txt.primary }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

function GigCard({ gig, setShowGig, showGig, id, setId }) {
  const openGig = () => {
    setShowGig(!showGig)
    setId(gig.id)
  }

  return (
    <Card
      sx={{
        width: 345,
        "&:hover": {
          boxShadow: "1px 1px 4px"
        }
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {gig.hero} <Typography variant="body2">{gig.power}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {gig.desc}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" color="initial">
            Rating {Math.ceil(Math.random() * 5)}
          </Typography>
          <StarBorder sx={{ color: heroPalette.txt.primary }} />
        </Box>
        <CardButton onClick={openGig}>Book Me</CardButton>
      </CardContent>
    </Card>
  )
}
