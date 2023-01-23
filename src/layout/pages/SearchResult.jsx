import React, { Fragment, useState } from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
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
import { CardButton } from "../../utils/styledComponents"

export default function SearchResult({ states, dispatchers, loginSwitches }) {
  const { user } = states
  const { gigs } = states
  const [showGig, setShowGig] = useState(false)
  const [id, setId] = useState(0)
  // const [open, setOpen] = useState(false)

  const selectedGig = gigs.find(gig => gig.id == id)
  // console.log(selectedGig)

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
          loginSwitches={loginSwitches}
          user={user}
          selectedGig={selectedGig}
          showGig={showGig}
          setShowGig={setShowGig}
        />
      )}
    </Container>
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
      <CardMedia sx={{ height: 140 }} image={gig.banner} title={gig.power} />
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

function GigModal({ selectedGig, showGig, setShowGig, user, loginSwitches }) {
  const { showLogin, setShowLoginForm } = loginSwitches

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right"
  })
  console.log(state.open)

  const handleClose = () => setShowGig(!showGig)
  const handleAvail = () => {
    if (!user.email) {
      setShowLoginForm(!showLogin)
      setShowGig(!showGig)
    } else {
      setState({ ...state, open: true }) // ytf is this not working??!!
      console.log(state.open)
      setShowGig(!showGig)
      alert("successful")
    }
  }

  return (
    <Dialog open={showGig} onClose={handleClose}>
      <CardMedia
        sx={{ height: 240 }}
        image={selectedGig.banner}
        title={selectedGig.power}
      />
      <DialogTitle>
        <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
          Hi {user.userName}, I am
        </Typography>{" "}
        <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
          {selectedGig.hero}
        </Typography>
        <Typography variant="body2">and I'll be your</Typography>
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
          onClick={handleAvail}
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
      <AlertBar state={state} setState={setState} />
    </Dialog>
  )
}

// TODO make the alert bar work

function AlertBar({ state, setState }) {
  const { vertical, horizontal, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="You're not logged in"
        key={vertical + horizontal}
      />
    </div>
  )
}
