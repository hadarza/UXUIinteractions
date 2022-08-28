import React,{useEffect} from "react";
import { items } from "./MenuItems";
import {images} from "../../constants/index";

function Menu({ isOpen, onChange }) {
 
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
    <div className={`Menu ${isOpen && "open"}`}>
      <span
        className="btn-close"
        onClick={() => onChange(false)}>
        <img src={images.closeMenu}/>
      </span>

      <div className="Menu-items">
        {items.map((item, index) => (
          <a href={`#${item.itemLink}`} key={index} id={item.itemLink} onClick={()=>{
            localStorage.setItem('pageSelection',item.itemText)
            PageSelectChange();
          
          }}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Menu;
