import { Container, Button } from 'react-bootstrap';
import './StartButton.css';

const StartButton = ( {setRunning} ) => {

    return (
            <Container className="ButtonPlacement">
                <Button className="BasicButton StartButton" onClick={() => setRunning(true)} >
                    Let's go
                </Button>
            </Container>
            );
}

export default StartButton;