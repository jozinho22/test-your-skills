import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomSpinner from '../general-content/CustomSpinner';

const TestManager = ({count, questions, user, children}) => {

    return (
                count < questions.length ? 
                    children
                        :   <Redirect
                                to={{
                                pathname: "/results",
                                questions: questions,
                                user: user
                            }}
                    />
            );
}
 
export default TestManager;