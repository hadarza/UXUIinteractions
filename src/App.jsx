import React,{useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./componenets/Menu/Menu";
import '../src/scss/app.scss'
import images from "./constants/images";
import StartPage from "./componenets/pages/StartPage";
import ProjectFilterBy from "./componenets/pages/ProjectsFilterBy/ProjectFilterBy";
import Projects from './componenets/pages/ProjectsFilterBy/Projects.json'
import LandingPage from "./componenets/pages/LandingPage/LandingPage";
import Info from "./componenets/pages/Info/Info";
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="App">
        <header>
          <div className="header-div">
              <div className="menu-btn" onClick={() => setIsOpen(true)}>
                <img src={images.openMenu}/>
              </div>
            <div className="logo"></div>
          </div>
        </header>
      
        <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>

      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/Start" element={<StartPage/>}/>

          <Route exact path="/Projects" element={<ProjectFilterBy projectsInfo={Projects}/>}/>

        </Routes>
      </Router>
      </div>
)};

export default App;
