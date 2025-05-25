import { Box, Button , styled } from '@mui/material';
import {useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ImageSliderProps {
    roverDetails : any;
}

const StyledImage = styled('img')`
objectFit :cover;
width : 100%;
height :100%;
display : block;
`

const  StyledButton = styled(Button)`
all : unset;
display :block;
position : absolute;
top: 0;
bottom : 0;
padding : 1rem;
cursor :  pointer;
color : white;
`

export default function ImageSlider (marsRoverImageDetails : ImageSliderProps){
    const [currentIndex , setCurrentIndex] = useState(0);
    const currentImage = marsRoverImageDetails?.roverDetails[currentIndex];
    
    function showPrevousImage(){
      setCurrentIndex((prev)=>{
        if(prev === 0){
          return marsRoverImageDetails.roverDetails.length -1;
        }
        return prev-1;
      })
    }

    function showNextImage () {
      setCurrentIndex((next)=>{
        if(next === marsRoverImageDetails.roverDetails.length -1){
          return 0;
        }
        return next+1;
      })
    }
    return (
      <>
        <div style={{width :'100%',height : '100%',position :'relative'}}>
         {currentImage && (<StyledImage src={currentImage.img_src} alt='image' />)}
         <StyledButton onClick={showPrevousImage} style={{left:0}}><FontAwesomeIcon icon={faArrowLeft} /></StyledButton>
         <StyledButton onClick={showNextImage} style={{right:0}}><FontAwesomeIcon icon={faArrowRight} /></StyledButton>
       </div>
      <Box>
        <p>ROVER NAME : {currentImage?.rover_details.name}</p>
        <p>EARTH DATE : {currentImage?.earth_date}</p>
        <p>CAMERA NAME : {currentImage?.camera?.full_name}</p>
      </Box>
      </>
       
    )
}