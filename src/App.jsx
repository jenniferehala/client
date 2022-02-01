import './App.css';
import Header from './views/Header';
import { ThemeProvider, createTheme } from '@material-ui/core/styles'
import SubNavigation from './views/SubNavigation';
import Sidebar from './views/Sidebar'
import Widget from './views/Widget';

function App() {
  const theme = createTheme({
    pallette: {
      type: "dark",
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <SubNavigation />
        <div className="app__body">

          <Sidebar />
          <Widget />
        </div>


      </div>
    </ThemeProvider>
  );
}

export default App;
