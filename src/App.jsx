import React,{useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./componenets/Menu/Menu";
import Menu2 from "./componenets/Menu2/Menu";

import '../src/scss/app.scss'
import images from "./constants/images";
import StartPage from "./componenets/pages/StartPage";
import ProjectFilterBy from "./componenets/pages/ProjectsFilterBy/ProjectFilterBy";
import Projects from './componenets/pages/ProjectsFilterBy/Projects.json'
import { CircleIndicator } from "./componenets/Sections/LineProgress/LineProgress";
const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="App">
        {/* <header>
          <div className="header-div">
              <div className="menu-btn" onClick={() => setIsOpen(true)}>
                <img src={images.openMenu}/>
              </div>
            <div className="logo"></div>
          </div>
        </header> */}
      
        {/* <Menu isOpen={isOpen} onChange={setIsOpen}></Menu> */}
        <Menu2 isOpen={isOpen} onChange={setIsOpen}></Menu2>

      <Router>
        <Routes>
          <Route exact path="/" element={<CircleIndicator/>}/>
          <Route exact path="/Start" element={<StartPage/>}/>

          <Route exact path="/Projects" element={<ProjectFilterBy projectsInfo={Projects}/>}/>

        </Routes>
      </Router>
      </div>
)};

export default App;
