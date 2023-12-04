import React from 'react';
import jsonTopics from '../resources/topics.json';

import Home from './home/Home';
import Test from './test/Test';

const AppManager = () => {

    const [topics, setTopics] = React.useState(jsonTopics);
    const [nbQuestions, setNbQuestions] = React.useState(process.env.NODE_ENV === 'development' ? 1 : 10);

    const [isRunning, setRunning] = React.useState(false);

    console.log(isRunning)
    return (
            <>
                {
                    !isRunning ?
                        <Home topics={topics} setTopics={setTopics} setRunning={setRunning} />  
                            :  <Test topics={topics} nbQuestions={nbQuestions} setRunning={setRunning} />
                }
            </>
            );
}
 
export default AppManager;