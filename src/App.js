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
import AppHeader from "./components/AppHeader/AppHeader";
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
                      <Route path="/challenge" element={Challenge/>}/>

                  </Routes>
              </Router>
          </div>
  );
}

export default App;
