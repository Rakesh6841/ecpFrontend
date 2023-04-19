import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Employecard from './Employecard'

function Candidates() {
    return (
        <Container>
            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 480,
                    mx: 'auto',
                }}>
                <Typography variant='h4' color="#5D3891">
                    Candidates
                </Typography>
            </Box>
            <Stack spacing={4} m={4}>
                <Employecard company="Google" />
                <Employecard company="Amazon" />
            </Stack>
        </Container>
    )
}

export default Candidates