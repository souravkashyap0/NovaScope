import.meta.env.VITE_NASA_API_KEY;
import  {useState,useEffect} from 'react';

interface IApod {
    date : string;
    explanation : string;
    media_type : string;
    service_version : string;
    title : string;
    url : string;
}


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
        <div>
            <h1>Astronomical Picture of the Day</h1>
            {/* <img src={apodData.} */}
            <h4>{apodData.title}</h4>
        </div>
    )
}

