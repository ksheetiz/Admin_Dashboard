import {useContext} from 'react';
import {Box, IconButton, useTheme} from "@mui/material";
import { ColorModeContext,tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';


export default function Topbar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
  return (
    <Box display= 'flex' justifyContent="space-between" p ={2} >
        {/*DASHBOARD NAME*/}
        <Box display="flex"  borderRadius = "3px">
            <h1>Dashboard</h1>
        </Box>

        {/* ICONS */}
        <Box display = "flex">
          <IconButton type = "button">
            <SearchIcon/>
          </IconButton>
          <IconButton onClick = {colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon/>
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon/>
          </IconButton>
          <IconButton>
            <PersonOutlinedIcon/>
          </IconButton>
        </Box>
    </Box>
  )
}
