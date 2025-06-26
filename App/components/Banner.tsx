import { useNavigate } from 'react-router-dom';

import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';

import Login from './LoginMenu';

import AppLogo from './images/AppLogo.png'

const Banner = () => {
  let navigate = useNavigate();

  return (
    <AppBar position="relative" sx={{ zIndex: 2, height: "48px", py: 0.5, pl: 2, background: "linear-gradient(#177D71, #09524D 92%, #074C49)" }} >
      <Box sx={{ display: 'flex' }} >
        <IconButton onClick={() => { navigate("/") }} size="large" edge="start" color="inherit" aria-label="menu" sx={{ width: "36px", height: "36px" }} >
          <img src={AppLogo} style={{'width': '28px'}} />
        </IconButton>
        <Typography variant="h5" flexGrow={0} sx={{ ml: 1, pt:0.5 }} >User-Owns-Data Demo App</Typography>
        <Login/>
      </Box>
      

    </AppBar>
  )
}

export default Banner;