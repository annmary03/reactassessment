import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <Typography style={{color:"white",fontSize:"20px"}}>BLOG APP</Typography>
                <Button component={Link} to='/home'variant='contained' style={{marginLeft:'1000px', textDecoration: 'none', color:'white'}}>Home</Button>
                <Button component={Link} to='/add'variant='contained' style={{textDecoration: 'none', color:'white'}}>Add Blog</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar