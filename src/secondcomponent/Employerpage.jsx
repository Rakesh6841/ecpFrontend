import { Box, Container } from '@mui/material'
import React from 'react'
import SearchAppBar from './SearchAppBar'
import Candidates from './Candidates'
import Employecard from './Employecard'

function Employerpage() {
  return (
    <Container>
      <SearchAppBar />
      <Box borderRadius={10} bgcolor="#E8E6E3" m={8} p={8}>
        <Candidates />
      </Box>
    </Container>
  )
}

export default Employerpage