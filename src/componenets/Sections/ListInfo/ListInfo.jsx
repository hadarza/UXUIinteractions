import React,{useState} from 'react'

const ListInfo = ({listInfo}) => {
    const [objectActive, setobjectActive] = useState("")

  return (
    <div className="Img_div_ListInfo">
        <h1 className='titles_section_h1 title_black'>מידע עלינו</h1>
        <div className="div_section">
            <div className="info_div">
                {listInfo.map((object,key)=>(
                    <div className='list-info'>
                        <div class="service-item-head">
                        <span class="head-toggle">
                                <span className={object.title == objectActive ? "inactive_btn": "active_btn"} 
                                onClick={()=>{
                                    setobjectActive(object.title);
                                }}>+</span>
                                <span className={object.title == objectActive ? "active_btn": "inactive_btn"} onClick={()=>{setobjectActive("")}}>-</span>
                        </span>

                        <span class="head-title">{object.title}</span>
                        </div>
                        <div class={object.title == objectActive ? "service-item-body active": "service-item-body inactive"}>{object.info}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ListInfo