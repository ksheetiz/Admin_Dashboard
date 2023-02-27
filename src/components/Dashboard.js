import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import StatBox from "./StatBox";
import { tokens } from "../theme";
import PieChartIcon from "@mui/icons-material/PieChart";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import PeopleIcon from "@mui/icons-material/People";
import InfoIcon from "@mui/icons-material/Info";
import { mockTransactions } from "../MockData";
import Row2 from "./Row2";
import Row3 from "./Row3";
import background from "../background.jpg";
import profilePic from "../profile.jpg";
import useMediaQuery from '@mui/material/useMediaQuery';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));

  return (
    <Box
      m="20px"
      display="grid"
      gridTemplateColumns={`repeat(${largeScreen ? "12" : "3"}, 1fr)`}
      gridAutoRows="140px"
      gap="20px"
    >
      {/* ROW 1 */}
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"

      >
        <StatBox
          title="$21,361"
          subtitle="Revenue"
          progress="0.75"
          increase="+0.75"
          icon={
            <PieChartIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
      >
        <StatBox
          title="5,643"
          subtitle="Orders"
          progress="0.75"
          increase="+0.69"
          icon={
            <FolderDeleteIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
      >
        <StatBox
          title="45,254"
          subtitle="Customers"
          progress="0.75"
          increase="+0.54"
          icon={
            <PeopleIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        borderRadius="8px"
        gridRow="span 7"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <img
            src={background}
            style={{ height: "15em", width: "100%" }}
            alt="background"
          />
          <Box sx={{ mt: -6, mb: 1 }}>
            <img
              src={profilePic}
              style={{ height: "10em", width: "10em", borderRadius: "80px" }}
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ mt: 1, mb: 3 }}
          >
            <Typography variant="h3" fontWeight="600" color={colors.grey[100]}>
              Jennifer Bennett
            </Typography>
            <Typography variant="h4" fontWeight="600" color={colors.grey[300]}>
              Product Designer
            </Typography>
          </Box>

          <Box
            display="flex"
            sx={{ mb: 3 }}
            width="100%"
            justifyContent="space-around"
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                1,269
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[300]}
              >
                Products
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                5.2k
              </Typography>
              <Typography
                variant="h4"
                fontWeight="600"
                color={colors.grey[300]}
              >
                Followers
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            sx={{ pl: 3, pr: 3 , mb : 3}}
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Earning
              </Typography>
            </Box>
            <InfoIcon />
          </Box>
          <div
            className="progressbar"
            aria-valuenow="33"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{
              "--value": "76",
              "--pri": `${colors.grey[100]}`,
              "--sec": `${colors.grey[500]}`,
            }}
          ></div>
          <Typography sx={{mt : 3}} variant="h2" fontWeight="600" color={colors.grey[100]}>
              $26,256
          </Typography>
          <Typography sx={{mt : 1}} variant="h4" fontWeight="600" color={colors.grey[300]}>
              Earning this Month
          </Typography>
          <Box display = "flex" alignItems="center" sx={{mt : 3.5, ml : 3}}>
            <Box backgroundColor = {colors.greenAccent[800]} borderRadius = "10px" padding="5px">
              <Typography alignContent="center" variant="h5">+2.65%</Typography>
            </Box>
            <Typography variant="h4" sx={{pl : 1}} fontWeight="600" color={colors.grey[300]}>
              From previous period
          </Typography>
          </Box>
          <Box display="flex" width="100%" sx ={{mt : 3}} justifyContent="flex-start">
          <Typography
                variant="h3"
                fontWeight="600"
                color={colors.grey[100]}
                sx = {{ml : 2}}
              >
                Recent Activity
              </Typography>
          </Box>
          
          <Box width="100%" overflow="auto" height="18em">
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
        </Box>
      </Box>
      {/*ROW 2*/}
      <Row2/>
      {/*ROW 3 */}
      <Row3 />
    </Box>
  );
};

export default Dashboard;
