import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./componenets/Menu/Menu";
import '../src/scss/app.scss'
import images from "./constants/images";
import HomePage from "./componenets/Sections/HomePage/HomePage";
import SlickCarosual from "./componenets/Sections/slick-Carosual/SlickCarosual";
import ListInfo from "./componenets/Sections/ListInfo/ListInfo";
import infoDataList from './componenets/Sections/ListInfo/InfoDataList.json'
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

        <article className="scroller">
          <section>
            <HomePage title="פרויקט אינטרקציות" subTitle="אינטרקציות לפרויקטיים  "/>
          </section>
          <section>
            <SlickCarosual/>
          </section>
          <section>
            <ListInfo listInfo={infoDataList}/>
          </section>

        </article>
      </div>
)};

export default App;
