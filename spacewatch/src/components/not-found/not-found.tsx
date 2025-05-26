import {styled , Button} from '@mui/material';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from 'react-router';

const StyledHeader = styled('h1')`
text-align : center ;
color : red;
`

const StyledButton = styled(Button)`
text-align : center;
display : block ;
margin : 0 auto;
color : black;
background-color : #f0f0f0;
`;

const StyledParagraph = styled('p')`
text-align :center;`

function NotFound () {
    const  navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate('/');
    }
    console.log('NOT FOUND');
    return  (
        <div id ='not-found'>
           <StyledHeader>404 Page Not Found!!!</StyledHeader>
           <StyledParagraph style={{textAlign : 'center'}}>Sorry, the page you are looking for does not exist.</StyledParagraph>
           <StyledButton onClick={handleGoBack}><FontAwesomeIcon color='black' icon={faLeftLong} />  Go Back</StyledButton>
        </div>
    )
}

export default NotFound;