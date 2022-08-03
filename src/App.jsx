import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./componenets/Menu/Menu";
import '../src/scss/app.scss'
import images from "./constants/images";
import StartPage from "./componenets/pages/StartPage";
import ProjectFilterBy from "./componenets/pages/ProjectsFilterBy/ProjectFilterBy";
import Projects from './componenets/pages/ProjectsFilterBy/Projects.json'
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="App">
        <header>
          <div className="header-div">
            <span className="menu-btn" onClick={() => setIsOpen(true)}>
              <img src={images.openMenu}/>
            </span>
            <div id="site-header-scrolling" className="site-header-scrolling"></div>
          </div>
        </header>
      
        <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>

      <Router>
        <Routes>
          <Route exact path="/" element={<StartPage/>}/>
          <Route exact path="/Projects" element={<ProjectFilterBy projectsInfo={Projects}/>}/>

        </Routes>
      </Router>
      </div>
)};

export default App;
