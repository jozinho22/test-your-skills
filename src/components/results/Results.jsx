import { useLocation } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ResultsAccordion from './ResultsAccordion';
import ScoreTitle from './ScoreTitle';
import '../general-content/Basic.css';

const Results = () => {

    const { questions } = useLocation();
    const { user } = useLocation();

    return (
        <Container className="RelativeContainer">
            <ScoreTitle score={user.score} nbQuestions={questions.length}/>
            <Container className="Results">
                <ResultsAccordion style={{ backgroundColor: "black"}}
                    questions={questions}
                    user={user}>
                </ResultsAccordion>
            </Container>
            
            <Container className="ButtonPlacement">
                <Link to="/home" >
                    <Button className="BasicButton ReturnButton" >
                        Retour au lobby
                    </Button>
                </Link>
            </Container>
        </Container>
    );
}

export default Results;

