import.meta.env.VITE_NASA_API_KEY;
import  {useState,useEffect} from 'react';
import  {styled , Card ,CardMedia} from '@mui/material';

interface IApod {
    date : string;
    explanation : string;
    media_type : string;
    service_version : string;
    title : string;
    url : string;
}

const StyledImageContainer =  styled('img')`
width : 100%;
height : 500px;
object-fit : cover;
`

export default function Apod (){
   console.log(import.meta.env.VITE_NASA_API_KEY);
   const [apodData ,setApodData] = useState<IApod>({});

   useEffect(()=>{
    const fetchApodDetails = async ()=>{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`);
        console.log('response',response);
        const data = await response.json();
        setApodData(data);
    }
    fetchApodDetails();
   },[]);
   
   console.log('apodData',apodData);
    return (
        <Card>
            <h1>Astronomical Picture of the Day</h1>
            <CardMedia sx={{height:300,width : 500}} image={apodData.url}/> 
            {/* <StyledImageContainer src={apodData.url}/> */}
            <h4>{apodData.title}</h4>
        </Card>
    )
}

