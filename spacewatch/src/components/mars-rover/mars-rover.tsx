import {useState,useEffect} from 'react';
import  ImageSlider from '../image-slider/image-slider.tsx';

export  default  function MarsRover () {
    const [roverData , setRoverData] = useState<any>();
    useEffect(()=>{
        const fetchRoverDetails =  async()=>{
            const response =  await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2025-4-3&api_key=${import.meta.env.VITE_NASA_API_KEY }`);
            console.log('response',response);
            const data = await response.json();
            setRoverData(data);
        }
        fetchRoverDetails();
    },[])
    console.log('roverData',roverData);
    const  generateMarsRoverImageDetails = (roverData : any ) => {
        let marsRoverImageDetails;
        if(roverData !== undefined){
            marsRoverImageDetails = roverData?.photos?.map((ele:any)=>{
            return {
                img_src : ele?.img_src,
                rover_details : ele?.rover,
                earth_date : ele?.earth_date,
                camera : ele?.camera,
            }
        });
        }
        return  marsRoverImageDetails;
    }
    const  marsRoverImageDetails = generateMarsRoverImageDetails(roverData);
    return  (
            <div>
                <h1>MARS ROVER</h1>
                {marsRoverImageDetails && <ImageSlider roverDetails={marsRoverImageDetails} />}
            </div>
    )
}