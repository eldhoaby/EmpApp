import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{textAlign:"left"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Button color="inherit">HOME</Button>
          <Button color="inherit"><Link to={'/a'} style={{color:"white"}}>ADD</Link></Button>  
          <Button color="inherit"><Link to={'/'} style={{color:"white"}}>VIEW</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
