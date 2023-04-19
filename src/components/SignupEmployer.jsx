import { Container } from '@mui/material'
import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import Contact from './Contact'

function SignupEmployer() {
  return (
    <Container>
        <ResponsiveAppBar />
        <Contact />
    </Container>
  )
}

export default SignupEmployer