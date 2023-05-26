import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{paddingTop:"40px"}}>
        <TextField id="outlined-basic" label="Blog name" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Description" variant="outlined" />
        <br /><br />
        <TextField id="outlined-basic" label="Author name" variant="outlined" />
        <br /><br />
        <Button color='success' variant='contained' style={{textDecoration: 'none'}}>SUBMIT</Button>
    </div>
  )
}

export default Add