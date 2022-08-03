import React,{useState,useEffect} from 'react'
import {images} from '../../../constants/index'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import {motion} from 'framer-motion'

const ProjectFilterBy = ({projectsInfo}) => {

  const [Loading, setLoading] = useState(true)
  const [currentCategory, setcurrentCategory] = useState("All")
  const [ProjectsToShow, setProjectsToShow] = useState(projectsInfo)
  const categories = ["All", "Animate","StoryLine","Web"]

  const updateProjectsToShow = (category) =>{
    setcurrentCategory(category);
    // filter projects by category
    if(category == "All") 
      setProjectsToShow(projectsInfo)
    else setProjectsToShow(projectsInfo.filter((project)=> project.category == category))
  }
  useEffect(() => {
    setTimeout(()=>{
        setLoading(false)
    },2000)
    })
  
  return (
    <div className='section_projects'>

      <h1 className='titles_section_h1 title_white'>סוגי פרויקטיים</h1>
      <div className='category-header'>
        {categories.map((category,index)=>(
            <h4 className={currentCategory == category ? "category active_category" : "category"} key={index} 
              onClick={()=>{updateProjectsToShow(category)
            }}>{category}</h4>
          ))}
        </div>


      <div className='projects_section'>
        <motion.div
        layout
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        className='projects_div'>
          {ProjectsToShow.map((project,key)=>(
            // Loading ? (
            //   <Skeleton sx={{ height: "13rem" , width:"13rem" ,  margin:"0.8rem", borderRadius: "10px" }} animation="wave" variant="rectangular" />
            //   ) : 
              (<motion.div 
                layout
                animate={{opacity: 1}}
                initial={{opacity: 0.5}}
                exit={{opacity: 0}}>

                <a href={project.href} key={key}>
                  <div className='project'>
                    <img src={images.backgroundImg}/>
                  </div>
                  <h5>{project.title}</h5>
                </a>

              </motion.div>)
      ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectFilterBy