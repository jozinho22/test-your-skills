import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = ( { message } ) => {
    return (
        <Container className="RelativeContainer">
                <div className="LoadingSpinner">
                    <p>Erreur...</p>
                    <br></br>
                    <Link 
                        to="/home" >
                        <Button className="BasicButton ReturnButton">
                            Retour au lobby
                        </Button>
                    </Link>
                </div> 
        </Container>
    );
}

export default Error;