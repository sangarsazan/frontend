import StartPage from "./pages/start";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import LoginPage from "./pages/start/login/login";
import './styles/global.css'
import './styles/variable.css'
import './styles/font.css'
import {createTheme, ThemeProvider} from "@mui/system";

function App() {
  return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route path='/start' element={<StartPage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                  </Routes>
              </Router>
          </div>
  );
}

export default App;
