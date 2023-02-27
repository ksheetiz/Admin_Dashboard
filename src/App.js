// import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import {ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './components/Topbar';
import SideBar from './components/Sidebar';
import Dashboard from './components/Dashboard';


function App() {
  //const { collapseSidebar } = useProSidebar();
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className="app">
          <SideBar/>
          <main className='content'>
            <Topbar/>
            <Dashboard/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;