import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import { useTheme } from "@mui/material/styles";

const Navbar = ({ title }) => {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {title}
          </Typography>
          <Link
            href="/"
            variant="h5"
            color={theme.palette.common.white}
          >
            Back
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
