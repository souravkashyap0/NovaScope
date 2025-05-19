import {useState,useEffect} from 'react';
import  ImageSlider from '../image-slider/image-slider.tsx';
import DatePicker from '@mui/lab/DatePicker';
import {TextField} from '@mui/material';


export  default  function MarsRover () {
    const [roverData , setRoverData] = useState<any>();
    const [dateValue , setDateValue] = useState<Date | null>(null);

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
    console.log('THE DATE ',dateValue);
    return  (
        <>
        {/* <DatePicker
            label="Basic example"
            value={dateValue}
            onChange={(newValue: any) => {
                setDateValue(newValue);
            }}
            renderInput={(params :any) => <TextField {...params} />}/> */}

            <h1 style={{textAlign :'center'}}>Mars Rover Image</h1>
             <div style={{maxWidth :'1200px',width:'100%',height:'500px',margin: '0px auto'}}>
                {marsRoverImageDetails && <ImageSlider roverDetails={marsRoverImageDetails} />}
            </div>
        </>    
    )
}