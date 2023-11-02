import './styles/font.css'
import './styles/global.css'
import './styles/variable.css'
import StartPage from "./pages/start";
import LoginPage from "./pages/start/login/login";
import SignupPage from "./pages/start/signup/signup";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";

function App () {
  return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route path='/start' element={<StartPage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/signUp" element={<SignupPage/>}/>
                  </Routes>
              </Router>
          </div>
  );
}

export default App;
