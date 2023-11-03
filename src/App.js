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
import ProfilePage from "./pages/profile";
import NotCreated from "./pages/premium/NotCreated";
function App () {
  return (
          <div className="App">
              <Router>
                  <Routes>
                      <Route path='/splashScreen' element={<SplashScreen/>}/>
                      <Route path='/start' element={<StartPage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/signUp" element={<SignupPage/>}/>
                      <Route path="/sports" element={<SportPage/>}/>
                      <Route path="/members" element={<Members/>}/>
                      <Route path="/" element={<HomePage/>}/>
                      <Route path="/services" element={<Services/>}/>
                      <Route path="/chat" element={<ChatsPage/>}/>
                      <Route path="/challenge" element={<Challenge/>}/>
                      <Route path="/profile" element={<ProfilePage/>}/>
                      <Route path="/notCreated" element={<NotCreated/>}/>
                  </Routes>
              </Router>
          </div>
  );
}

export default App;
