import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx= {{ display: 'flex'}}>

      <NavBar drawerWidth= { drawerWidth} />

      <SideBar drawerWidth={ drawerWidth} />

    {/* NAVBAR */}
    {/* SIDEBAR */}

    <Box 
        component='main'
        sx={{flexGrow: 1, p:3 }}
    >
        {/*toolbar */}
        { children }
    </Box>




    </Box>
  )
}
