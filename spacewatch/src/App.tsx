
import Navbar from '../src/components/navbar/navbar.tsx';
import { styled } from '@mui/material';

const  Header1 = styled('h1')`
  textAlign: "center",
  color: "white",
  fontSize: "2rem",
  marginTop: "20px",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#282c34",
  padding: "20px",  
}`;

function App() {

  return (
    <>
     <Header1>SPACE WATCH</Header1>
     <Navbar />
    </>
  )
}

export default App;
