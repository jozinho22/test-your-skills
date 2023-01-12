import React from 'react';
import { useLocation } from 'react-router-dom';
import generateQuestions from './generateQuestions';
import TestManager from './TestManager';
import { Container } from 'react-bootstrap';
import QuestionDisplay from './QuestionDisplay';

const Test = () => {

    const { topics } = useLocation();
    const { nbQuestions } = useLocation();

    console.log(topics)
    
    const [questions, setQuestions] = React.useState(generateQuestions(topics, nbQuestions));

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(
        {
            name: '',
            score: 0,
            checkedAnswers: []
        }
    );

    const next = () => {
        setCount (count + 1);
    }

     console.log(questions)
    
    return (
            <TestManager count={count} questions={questions} user={user}>
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