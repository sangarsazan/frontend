import './styles/font.css'
import './styles/global.css'
import './styles/variable.css'
import StartPage from "./pages/start";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import SplashScreen from './pages/splashScreen'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import SportPage from "./pages/sports";
import Index from "./pages/members";
import HomePage from "./pages/home";
import Services from "./pages/Services";
import ChatsPage from "./pages/chats";
import Members from "./pages/members";
import Challenge from "./pages/challenge";
function App () {
  return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route path='/' element={<SplashScreen/>}/>
                      <Route path='/start' element={<StartPage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/signUp" element={<SignupPage/>}/>
                      <Route path="/sports" element={<SportPage/>}/>
                      <Route path="/members" element={<Members/>}/>
                      <Route path="/home" element={<HomePage/>}/>
                      <Route path="/services" element={<Services/>}/>
                      <Route path="/chat" element={<ChatsPage/>}/>
<<<<<<< Updated upstream
                      <Route path="/challenge" element={<Challenge/>}/>
=======
<<<<<<< HEAD
                      <Route path="/challenge" element={Challenge/>}/>
=======
                      <Route path="/challenge" element={<Challenge/>}/>
>>>>>>> 6236805d722b0621e7b99c49159bd8eaa8436088
>>>>>>> Stashed changes

                  </Routes>
              </Router>
          </div>
  );
}

export default App;
