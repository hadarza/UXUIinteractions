import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';
import {images} from '../../../constants/index'

const LoadingInfo = ({Title,textInfo,date,moreInfo}) => {
    
const [Loading, setLoading] = useState(true)
    useEffect(() => {
    setTimeout(()=>{
        setLoading(false)
    },10000)
    })
    
    return (
        <Card className="card" sx={{ maxWidth: 345, m: 2 }}>

        {Loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
        ) : (
        <CardMedia
            component="img"
            height="180"
            image={images.image}
            alt={moreInfo}
        />
        )}
        <CardContent>
        {Loading ? (
            <React.Fragment>
            <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
        ) : (
            <Typography variant="body2" color="text.secondary" component="p">
                {textInfo}
            </Typography>
        )}
        </CardContent>
    </Card>
    
    );
}

export default LoadingInfo