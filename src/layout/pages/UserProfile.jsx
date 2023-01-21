import {
  Container,
  CardHeader,
  Avatar,
  IconButton,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material"
import { typography } from "@mui/system"
import React from "react"

export default function UserProfile({ states, dispatchers }) {
  const { user } = states
  console.log(user)
  return <Typography>{user.userName}</Typography>
}
