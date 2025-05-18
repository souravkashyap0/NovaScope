import {useState , useEffect} from 'react';


interface ImageSliderProps {
    roverDetails : any;
}

export default function ImageSlider (marsRoverImageDetails : ImageSliderProps){
    const [currentIndex , setCurrentIndex] = useState(0);

    return (
       <div>
         <h1>ImageSlider</h1>
         <img src={marsRoverImageDetails?.roverDetails?.[0]?.img_src} alt='image' />
       </div>
       
    )

}