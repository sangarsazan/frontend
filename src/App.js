import StartPage from "./pages/start";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/start' element={<StartPage/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
