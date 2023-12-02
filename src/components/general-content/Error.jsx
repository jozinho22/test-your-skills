import { Container, Button } from 'react-bootstrap';

const Error = ( { message } ) => {
    return (
        <Container className="RelativeContainer">
                <div className="LoadingSpinner">
                    <p>Erreur...</p>
                    <br></br>
                        <Button className="BasicButton BasicButtonColor">
                            Retour au lobby
                        </Button>
                </div> 
        </Container>
    );
}

export default Error;