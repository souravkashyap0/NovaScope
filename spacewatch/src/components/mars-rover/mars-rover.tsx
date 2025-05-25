import {useState,useEffect} from 'react';
import  ImageSlider from '../image-slider/image-slider.tsx';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import  dayjs, {Dayjs} from 'dayjs';
import {MarsRoverApiResponse ,  MarsRoverPhoto}  from '../../types/mars-rover.ts';



export  default  function MarsRover () {
    const [roverData , setRoverData] = useState<MarsRoverApiResponse>({} as MarsRoverApiResponse);
    const [dateValue , setDateValue] = useState<Dayjs>(dayjs());
    const [cameraName , setCameraName ] = useState<string>('')
    
    const generateDateValue  = (value : Dayjs) => {
        let currentDate = dayjs(value).format('YYYY-MM-DD');
        console.log('currentDate',currentDate);
        return  currentDate;
    }

    const formattedDate = generateDateValue(dateValue);

    useEffect(()=>{
        const fetchRoverDetails =  async()=>{
            const response =  await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=${import.meta.env.VITE_NASA_API_KEY }`);
            console.log('response',response);
            const data = await response.json();
            setRoverData(data);
        }
        fetchRoverDetails();
    },[formattedDate])

    const  generateMarsRoverImageDetails = (roverData : MarsRoverApiResponse ) => {
        let marsRoverImageDetails;
        if(roverData !== undefined){
            marsRoverImageDetails = roverData?.photos?.map((ele:MarsRoverPhoto )=>{
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
        <div id='mars-rover'>
            <h1 style={{textAlign :'center'}}>Mars Rover Image</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                <DatePicker label="select date"
                    value = {dateValue}
                    onChange = {(newDateValue : any) => setDateValue(newDateValue)}
                />
                </DemoContainer>
            </LocalizationProvider>
             <div style={{maxWidth :'1200px',width:'100%',height:'500px',margin: '0px auto'}}>
                {marsRoverImageDetails?.length > 0 ? <ImageSlider roverDetails={marsRoverImageDetails}/> : <p>No Images Available for the selected date</p>}
            </div>
        </div>    
    )
}