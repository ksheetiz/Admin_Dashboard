import BarChart from "./BarChart";
import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useMediaQuery from '@mui/material/useMediaQuery';

const Row2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [age, setAge] = React.useState("");
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      gridColumn={`span ${largeScreen ? "9" : "3"}`}
      gridRow="span 3"
      backgroundColor={colors.primary[400]}
      borderRadius="10px"
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ m: 3 }}>
          <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
            Overview
          </Typography>
        </Box>
        <Box display="flex"  alignItems="center">
          <Typography>Sort By : </Typography>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Yearly</MenuItem>
              <MenuItem value={20}>Monthly</MenuItem>
              <MenuItem value={30}>Weekly</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box height="25em" display="flex" flexDirection={`${largeScreen ? "row" : "column"}`}>
        <Box sx={{ pl : 3 }} display="flex" flexDirection={`${largeScreen ? "column" : "row"}`} alignItems="center">
            <Box>
          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: colors.grey[400] }}
            >
              This Month
            </Typography>
          </Box>
          <Box display="flex">
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              $24,568
            </Typography>
            <Box
              backgroundColor={colors.greenAccent[800]}
              borderRadius="10px"
              sx={{ pt: 1, pl: 1, pr: 1, ml: 1 }}
            >
              <Typography alignContent="center" variant="h6">
                +2.65%
              </Typography>
            </Box>
            </Box>
          </Box>
          <Box sx={{ m : 1 , pt : 1}} display = "flex" flexDirection="column" alignItems="center">
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: colors.grey[400] }}
              >
                Orders
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: colors.grey[100] }}
              >
                5,643
              </Typography>
            </Box>
          </Box>
          <Box sx={{ m : 1 , pt : 1}} display = "flex" flexDirection="column" alignItems="center">
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: colors.grey[400] }}
              >
                Orders Value
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: colors.grey[100] }}
              >
                12.03%
              </Typography>
            </Box>
          </Box>
          <Box sx={{ m :1 , pt : 1}} display = "flex" flexDirection="column" alignItems="center">
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: colors.grey[400] }}
              >
                Income
              </Typography>
            </Box>
            <Box display="flex">
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: colors.grey[100] }}
              >
                $35,652
              </Typography>
            </Box>
          </Box>
        </Box>

        <BarChart isDashboard={true} />
      </Box>
    </Box>
  );
};

export default Row2;
