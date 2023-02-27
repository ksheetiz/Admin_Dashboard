import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import EmailIcon from "@mui/icons-material/Email";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BorderColorIcon from "@mui/icons-material/BorderColor";


export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ListOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                ml="15px"
              >
                
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <ListOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
                MENU
            </Typography>
            <SubMenu selected={selected}
              setSelected={setSelected} title="Dashboards" icon={<GridViewIcon />}>
              <MenuItem selected={selected}
              setSelected={setSelected}>Ecommerce</MenuItem>
              <MenuItem selected={selected}
              setSelected={setSelected}>Saas</MenuItem>
              <MenuItem selected={selected}
              setSelected={setSelected}>Crypto</MenuItem>
            </SubMenu>
            
            <Typography variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
                APPLICATIONS
            </Typography>
            <MenuItem icon={<CalendarMonthIcon />} selected={selected}
              setSelected={setSelected}>Calender</MenuItem>
            <MenuItem icon={<ChatIcon />} selected={selected}
              setSelected={setSelected}>Chat</MenuItem>
            <MenuItem icon={<BusinessCenterIcon />} selected={selected}
              setSelected={setSelected}>File Manager</MenuItem>
            <MenuItem icon={<HomeWorkIcon />} selected={selected}
              setSelected={setSelected}>Ecommerce</MenuItem>
            <MenuItem icon={<EmailIcon />} selected={selected}
              setSelected={setSelected}>Email</MenuItem>
            <MenuItem icon={<ReceiptIcon />} selected={selected}
              setSelected={setSelected}>Invoices</MenuItem>
            <MenuItem icon={<BusinessCenterIcon />} selected={selected}
              setSelected={setSelected}>Projects</MenuItem>
            <MenuItem icon={<CalendarMonthIcon />} selected={selected}
              setSelected={setSelected}>Contacts</MenuItem>
            
            <Typography variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
                LAYOUTS
            </Typography>

            <Typography variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
                PAGES
            </Typography>
            <MenuItem icon={<PersonSearchIcon />} selected={selected}
              setSelected={setSelected}>Authentication</MenuItem>
              <MenuItem icon={<CalendarMonthIcon />} selected={selected}
              setSelected={setSelected}>Utility</MenuItem>

            <Typography variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}>
                COMPONENTS
            </Typography>
              <MenuItem icon={<ViewInArIcon />} selected={selected}
              setSelected={setSelected}>UI Elements</MenuItem>
              <MenuItem icon={<BorderColorIcon />} selected={selected}
              setSelected={setSelected}>Forms</MenuItem>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}
