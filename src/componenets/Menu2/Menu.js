import React,{useState,useRef} from "react";
import { items } from "./MenuItems";
import {images} from "../../constants/index";
import {motion} from 'framer-motion'
function Menu({ isOpen, onChange }) {
  const refWithSons = useRef()
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = (e) => {
    console.log(e.currentTarget.firstChild.id)
    if(e.currentTarget.firstChild.id == "/contact"){    
      toggleHover(!isHover);
    }
  };

  const SetRemoveHover = () =>{
    document.getElementById('/contact').classList.remove("HoverSons");

  }
  const SetHoverOnHoverSons = () =>{
    //HoverSons
    document.getElementById('/contact').classList.add("HoverSons");
  }
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      visibility:"visible",

      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      visibility: "hidden",
      rotateX: -15,
      zIndex:5,
      transition: {
        duration: 0.5,
        delay: 0.1
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

  
  const PageSelectChange = ()=>{
    var currentSelected = window.localStorage.getItem("pageSelection")
    if(window.localStorage.getItem("pageSelection") != ""){
        // make the select page to be with select class
        items.forEach(element => {
          if(element.itemText == currentSelected)
            document.getElementById(element.itemLink).classList.add("select")
          else document.getElementById(element.itemLink).classList.remove("select")
        });
    }
  }

  return (
    <div className="header">
      <div className="Menu-items">

        {items.map((item, index) => (
          <motion.div  
          onHoverStart={(e)=> {toggleHoverMenu(e)}}
          onHoverEnd={(e) =>{toggleHoverMenu(e)}}

           onClick={()=>{
            localStorage.setItem('pageSelection',item.itemText)
            PageSelectChange();
          
          }}>
          <a href={`#${item.itemLink}`} className="href-menu" key={index} id={item.itemLink}>
            {item.itemText}
            </a>

            {item.sons != null && 
            <motion.div
            ref = {refWithSons}
            onMouseOver = {SetHoverOnHoverSons}
            onMouseOut={SetRemoveHover}
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
            className="flex absolute full t-3">
            <div className="full-div-sons flex">
              <div className="card-box-sons flex-reverse">

                {["תכונות","מידע","קטגורייה"].map((itemCategory,key)=>(
                  <>
                  <div index={key} className="flex-col-start border-col">
                    <div className="header-category"><p className="p-color-menu">{itemCategory}</p></div>
                    {item.sons?.filter(item => item.category == itemCategory).map((item,key)=>(
                    <a>
                      <div className="item-div" index={key}>
                        <div className="item-div-img">
                          <img src={item.img}/>
                        </div>
                        <div className="item-div-text">
                          <div className="item-title-text">{item.itemText}</div>
                          <div className="item-subTitle-text">{item.subItemText}</div>
                        </div>
                      </div>
                    </a>
                    ))}
                  </div>
                  </>
                ))}
                
                </div>
              </div>
            </motion.div>}
            </motion.div>
            
        ))}
      </div>
      
      <div className="logo"></div>

    </div>
  );
}

export default Menu;
