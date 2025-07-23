import.meta.env.VITE_NASA_API_KEY;
import { useState, useEffect } from "react";
import {
  styled,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

interface IApod {
  date: string;
  explanation: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
  hdurl?: string;
}

const StyledImageContainer = styled("img")`
  width: 100%;
  max-width: 900px;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
  display: block;
  margin: 0 auto;
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: "column";
  align-items: center;
  padding: 2;
`;
const StyledHeader = styled("h1")`
  text-align: center;
`;
export default function Apod() {
  let navigate = useNavigate();
  const [apodData, setApodData] = useState<IApod>({});

  useEffect(() => {
    const fetchApodDetails = async () => {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_NASA_API_KEY
        }`
      );
      console.log("response", response);
      const data = await response.json();
      setApodData(data);
    };
    fetchApodDetails();
  }, []);

  console.log("apodData", apodData);
  return (
    <div id="apodContainer">
      <Button onClick={() => navigate(-1)}>Back</Button>
      <StyledHeader>Astronomical Picture of the Day</StyledHeader>
      <StyledCard
        id="apodCard"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
        }}
      >
        {/* <CardMedia sx={{height:300,width : 500,maxWidth:'100%'}} image={apodData.hdurl}/>  */}
        {apodData.media_type === "image" && (
          <CardMedia
            component="img"
            image={apodData.hdurl || apodData.url}
            alt={apodData.title}
            sx={{
              width: "100%",
              maxWidth: 900,
              //height: "auto",
              //maxHeight: "70vh",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
            }}
          />
        )}
        {apodData.media_type === "video" && (
          <iframe
            width="900"
            height="500"
            src={apodData.url}
            title={apodData.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ maxWidth: "100%", margin: "0 auto", display: "block" }}
          />
        )}
        {/* <StyledImageContainer src={apodData.url}/> */}
        <CardContent>
          <Typography
            variant="body1"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {apodData.title}
          </Typography>
          <Typography
            variant="body2"
            component="div"
            sx={{ color: "text.secondary" }}
          >
            {apodData.explanation}
          </Typography>
        </CardContent>
      </StyledCard>
    </div>
  );
}
