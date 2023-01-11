import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StartButton = ( {topics, nbQuestions} ) => {

    return (
            <Link 
                to={{
                    pathname: "/test",
                    topics: topics,
                    nbQuestions: nbQuestions
                }}>
                <Container className="ButtonPlacement">
                    <Button className="BasicButton" >
                        Et c'est parti !
                    </Button>
                </Container>
            </Link>
            );
}

export default StartButton;