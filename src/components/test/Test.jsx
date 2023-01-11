import React from 'react';
import { useLocation } from 'react-router-dom';
import useQuestionsLoading from './useQuestionsLoading';
import TestManager from './TestManager';
import { Container } from 'react-bootstrap';
import QuestionDisplay from './QuestionDisplay';

const Test = () => {

    const { topics } = useLocation();
    const { nbQuestions } = useLocation();
    const { isLogged } = useLocation();
    
    const [questions, setQuestions] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [hasError, setHasError] = React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(
        {
            name: '',
            score: 0,
            checkedAnswers: []
        }
    );

    useQuestionsLoading({topics, nbQuestions, setQuestions, setIsLoading, setHasError}); 

    const next = () => {
        setCount (count + 1);
    }
    
    return (
            <TestManager isLoading={isLoading} hasError={hasError} count={count} questions={questions} user={user}>
                <Container className="RelativeContainer" >
                    <div className="ChocoTitle">
                        <h1><u>Questions N° :</u> &nbsp; {count + 1}</h1>
                    </div>
                        <QuestionDisplay 
                            questions={questions}
                            count={count}
                            next={next}
                            user={user}
                            setUser={setUser} /> 
                </Container >
            </TestManager>
            );
}

export default Test;