import React from 'react';
import generateQuestions from './generateQuestions';
import TestManager from './TestManager';
import { Container } from 'react-bootstrap';
import QuestionDisplay from './QuestionDisplay';

const Test = ( {topics, nbQuestions, setRunning} ) => {
    
    const [questions, setQuestions] = React.useState(generateQuestions(topics, nbQuestions));
    
    React.useEffect(() => {
         questions.map((q) => {
            console.log(q.id)
        })

    }, [])
   

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
    
    return (
            <TestManager count={count} questions={questions} user={user} setRunning={setRunning}>
                <Container className="RelativeContainer" >
                    <div className="ChocoTitle">
                        <h1><u>Questions N° :</u> &nbsp; {count + 1}</h1>
                    </div>
                    <QuestionDisplay 
                        questions={questions}
                        count={count}
                        next={next}
                        user={user}
                        setUser={setUser}  /> 
                </Container >
            </TestManager>
            );
}

export default Test;