import React from 'react';
import Results from '../results/Results';

const TestManager = ({count, questions, user, children, setRunning}) => {

    return (
                count < questions.length ? 
                    children
                        :   <Results questions={questions} user={user} setRunning={setRunning}/>
            );
}
 
export default TestManager;