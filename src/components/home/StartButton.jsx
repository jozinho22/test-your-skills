import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './StartButton.css';

const StartButton = ( {topics, nbQuestions} ) => {

    return (
            <Link 
                to={{
                    pathname: "/test",
                    topics: topics,
                    nbQuestions: nbQuestions
                }}>
                <Container className="StartButton ButtonPlacement">
                    <Button className="BasicButton" >
                        Let's go
                    </Button>
                </Container>
            </Link>
            );
}

export default StartButton;