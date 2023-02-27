import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px 20px 10px" p = "10px 0 0 0">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {/* Left side */}
        <Box display="flex" alignItems="center">
          <Box
            margin="1em"
            paddingRight="1em"
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.grey[400] }}
            >
              {subtitle}
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              {title}
            </Typography>
          </Box>
        </Box>
        {/* Right side */}
        <Box backgroundColor = {colors.greenAccent[800]} borderRadius = "10px" padding="5px" sx={{mt : 3.5, ml : 3}}>
          <Typography alignContent="center" variant="h5">{increase}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default StatBox;
