import { ColourModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {

  const [theme, colourMode] = useMode();

  return (
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className='content'></main>
          </div>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
}

export default App;
