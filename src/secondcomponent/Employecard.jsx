import { Box, Button, Fab, Stack, Typography } from '@mui/material'
import React from 'react'

function Employecard({company}) {
    return (
        <Box display="flex" direction="row" border="1px solid grey" borderRadius={5} p={2} >
            <Box display="flex" alignItems="center">
                <Fab aria-label="add" sx={{background: "#DD793E"}}></Fab>
            </Box>
            <Box ml={2} p={1}>
                <Typography fontWeight='bold'>
                    Username
                </Typography>
                <Typography fontWeight='normal'>
                    Developer
                </Typography>
            </Box>
            <Box ml={10} p={1}>
                <Typography fontWeight="normal">
                    Works at {company} company.
                </Typography>
                <Typography fontWeight="normal">
                    Have an experience of 2 years
                </Typography>
            </Box>
            <Box ml={12} display="flex" alignItems="center" justifyContent="center">
                <Button size='small' variant='contained'  sx={{background: "#5D3891", borderRadius: 4}}>More details</Button>
            </Box>
        </Box >
    )
}

export default Employecard