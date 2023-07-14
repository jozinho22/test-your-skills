import { Container, Button } from 'react-bootstrap';
import './StartButton.css';

const StartButton = ( {setRunning} ) => {

    return (
            <Container className="StartButton ButtonPlacement">
                <Button className="BasicButton" onClick={() => setRunning(true)} >
                    Let's go
                </Button>
            </Container>
            );
}

export default StartButton;