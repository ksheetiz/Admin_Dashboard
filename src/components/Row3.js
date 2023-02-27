import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LineChart from './LineChart';
import PieChart from "./PieChart";
import { mockTransactions } from "../MockData";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function Row3() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <>
      <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      borderRadius="8px"
      gridRow="span 3"
      display="flex"
      flexDirection="column"
      >
        <Box height="5em">
            <Box display="flex" sx={{m : 2}} justifyContent="space-between" alignItems="center">
                <Typography variant="h3"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                    User Activity
                </Typography>
                <Box display="flex" alignItems="center">
                  <FormControl sx={{ minWidth: 120  }}>
                      <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      >
                      <MenuItem value="">
                          <em>Weekly</em>
                      </MenuItem>
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Monthly</MenuItem>
                      <MenuItem value={30}>Yearly</MenuItem>
                      </Select>
                  </FormControl>
                </Box>
            </Box>
        </Box>
          <Box sx={{ml : 2}}>
              <Box>
                  <Typography variant="h6"
                  fontWeight="bold"
                  sx={{ color: colors.grey[400] }}
                  >
                      This Month
                  </Typography>
              </Box>
              <Box>
                  <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{ color: colors.grey[100] }}
                  >
                  $24,568
                  </Typography>
              </Box>
          </Box>
          <LineChart isDashboard={true}/>
      </Box>
      <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      borderRadius="8px"
      gridRow="span 3"
      display="flex"
      flexDirection="column"
      >
        <Box>
            <Box display="flex" sx={{m : 2}} justifyContent="space-between" alignItems="center">
                <Typography variant="h3"
                    fontWeight="600"
                    color={colors.grey[100]}
                >
                    Order Stats
                </Typography>
                <Box display="flex" alignItems="center">
                  <MoreHorizIcon/>
                </Box>
            </Box>
        </Box>
          <PieChart/>
      </Box>
      <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[400]}
      borderRadius="8px"
      gridRow="span 3"
      display="flex"
      flexDirection="column"
      overflow="auto"
      >
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h3" fontWeight="600">
              Top Product
            </Typography>
            <Box display="flex" alignItems="center">
                  <FormControl sx={{ minWidth: 120  }}>
                      <Select
                      value={age}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      >
                      <MenuItem value="">
                          <em>Weekly</em>
                      </MenuItem>
                      <MenuItem value={10}>Weekly</MenuItem>
                      <MenuItem value={20}>Monthly</MenuItem>
                      <MenuItem value={30}>Yearly</MenuItem>
                      </Select>
                  </FormControl>
                </Box>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
      </Box>
    </>
  )
}
