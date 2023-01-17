import React, { useState } from "react"
import {AppBar,Toolbar,styled,Typography,Box,InputBase,Avatar,Menu,MenuItem,Stack, Input,} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom"
import { pallete } from '../utils/pallete';


const NavBar = styled(Toolbar)({
  backgroundColor: pallete.primary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  gap:"20px"
})

const SearchBar = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: "1",
  alignItems: "center",
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.up("lg")]: {
    width: "70%",
    flex:"none",
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  border: "solid 1px red",
}))



export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [suitUp, setSuitUp] = useState(false)
  const [isHero, setIsHero] = useState(false)
  
  const handleLogout = () => {
    setOpen(false)
    setLoggedIn(false)
    setSuitUp(false)
  }
  const handleSuitUp = () => {
    setSuitUp(true)
    
  }


  return (
    <AppBar position="sticky">
      <NavBar>
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
          }}>
          <Link to="/">Hero</Link>
        </Typography>
        <MenuIcon
          sx={{
            display: { xs: "block", sm: "none" },
            "&:hover": {
              cursor:"pointer"
            }
          }}
        />
        <SearchBar>
          <InputBase placeholder="search" fullWidth />
          <Link to="searchresult">
            <SearchIcon color="secondary" sx={{
              "&:hover": {
                cursor:"pointer"
              }
            }}/>
          </Link>
        </SearchBar>

       
        <Stack>
          
        </Stack>
        {loggedIn || suitUp || isHero
          ?
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{
              width: 30,
              height: 30,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QEFRXhpZgAASUkqAAgAAAACAA4BAgDXAAAAJgAAABIBAwABAAAAAQAAAAAAAABMT1MgQU5HRUxFUywgQ0EgLSBTRVBURU1CRVIgMTg6ICBCcmFkIFBpdHQgYXR0ZW5kcyB0aGUgUHJlbWllcmUgT2YgMjB0aCBDZW50dXJ5IEZveCdzICJBZCBBc3RyYSIgIGhlbGQgYXQgVGhlIENpbmVyYW1hIERvbWUgb24gU2VwdGVtYmVyIDE4LCAyMDE5IGluIExvcyBBbmdlbGVzLCBDYWxpZm9ybmlhLiAgKFBob3RvIGJ5IEFsYmVydCBMLiBPcnRlZ2EvR2V0dHkgSW1hZ2VzKf/tAR5QaG90b3Nob3AgMy4wADhCSU0EBAAAAAABAhwCUAAQQWxiZXJ0IEwuIE9ydGVnYRwCeADXTE9TIEFOR0VMRVMsIENBIC0gU0VQVEVNQkVSIDE4OiAgQnJhZCBQaXR0IGF0dGVuZHMgdGhlIFByZW1pZXJlIE9mIDIwdGggQ2VudHVyeSBGb3gncyAiQWQgQXN0cmEiICBoZWxkIGF0IFRoZSBDaW5lcmFtYSBEb21lIG9uIFNlcHRlbWJlciAxOCwgMjAxOSBpbiBMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYS4gIChQaG90byBieSBBbGJlcnQgTC4gT3J0ZWdhL0dldHR5IEltYWdlcykcAm4ADEdldHR5IEltYWdlc//hA8NodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvAAk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9w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"
          />
          :
          <Stack direction={1} gap={1}>
            <Typography
              onClick={handleSuitUp}
              sx={{
          display: {xs:"none", sm:"block"}
        }}>
          <Link to="suitup">
              Suit Up
          </Link>
        </Typography>

          <Typography
            onClick={() => setLoggedIn(true)}
            sx={{
              "&:hover": {
                cursor:"pointer"
              }
              }}
            >Join</Typography>
          <Typography
            onClick={() => setLoggedIn(true)}
            sx={{
              "&:hover": {
                cursor:"pointer"
              }
              }}
            >Login</Typography>
            </Stack>
        }
          
     
      </NavBar>



      <Menu
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem>
          <Link
            to="profile"
            onClick={()=>setOpen(false)}
          >Profile</Link>  
        </MenuItem>
        <MenuItem
          onClick={() => setOpen(false)}
        >My account</MenuItem>
        {!suitUp && 
        <MenuItem
        onClick={() => setSuitUp(true)}
        >
          <Link to="suitup">
            Suit Up
          </Link>
        </MenuItem>
        }    
        <MenuItem
          onClick={handleLogout}
        >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
