import React from 'react'
import HomePage from "../../componenets/Sections/HomePage/HomePage";
import SlickCarosual from "../../componenets/Sections/slick-Carosual/SlickCarosual";
import ListInfo from "../../componenets/Sections/ListInfo/ListInfo";
import infoDataList from '../../componenets/Sections/ListInfo/InfoDataList.json'
import LoadingInfo from './ProjectsFilterBy/Loading';
import BackgroundFadeIn from '../Sections/Background_fade_in/BackgroundFadeIn'
const StartPage = () => {
  return (
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

        <section>
            <BackgroundFadeIn title="כותרת כניסה..." subTitle="תת כותרת נכנסת"/>
        </section>

  </article>
    )
}

export default StartPage