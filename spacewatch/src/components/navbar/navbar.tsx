import {AppBar, Button, Container, styled } from '@mui/material';
import {useNavigate} from  'react-router';

const StyledButton = styled(Button)`
textColor : 'blue';
color: 'yellow';
backgroundColor : 'yellow';
border : '1px solid green';
`;

export  default function Navbar(){
    const navigate = useNavigate();
    return (
        <AppBar position = "static" color = "primary">
            <Container maxWidth ="xl">
                <StyledButton variant='contained' onClick={()=> navigate('/apod')}>APOD </StyledButton>
                <StyledButton variant='contained' onClick={()=> navigate('/mars-rover')}>MARS ROVER </StyledButton>

            </Container>
        </AppBar>
    )
}