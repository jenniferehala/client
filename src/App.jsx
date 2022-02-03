import './App.css';
import Header from './views/Header';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import SubNavigation from './views/SubNavigation';
import Sidebar from './views/Sidebar'
import Widget from './views/Widget';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const theme = createTheme({
    pallette: {
      type: "dark",
    }
  });
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <div className="top">
          <Header />
        </div>
        <div className="middle">
          <SubNavigation />
        </div>
        <div className="container">
          <div className="dash__container">
            <Sidebar />
            <Widget />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
