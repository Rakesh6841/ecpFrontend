import React from 'react'
import { Container } from '@mui/material'
import Employerpage from './secondcomponent/Employerpage'
import SignupEmployer from './components/SignupEmployer'

function App() {
  return (
    <Container>
      <SignupEmployer />
      <Employerpage />
    </Container>
  )
}

export default App