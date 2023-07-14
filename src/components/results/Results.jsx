import { Button, Container } from 'react-bootstrap';
import ResultsAccordion from './ResultsAccordion';
import ScoreTitle from './ScoreTitle';

import '../general-content/Basic.css';

const Results = ( {questions, user, setRunning} ) => {

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
                <Button className="BasicButton ReturnButton" onClick={() => setRunning(false)}>
                    Retour au lobby
                </Button>
            </Container>
        </Container>
    );
}

export default Results;

