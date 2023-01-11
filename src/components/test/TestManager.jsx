import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Error from '../general-content/Error';
import '../general-content/Basic.css';

const TestManager = ({isLoading, hasError, count, questions, user, children}) => {
    
    return (
            hasError ?

                <Error /> :
                
                    isLoading ?

                        <Container className="RelativeContainer">
                            <div className="LoadingSpinner">
                                <p>Loading...</p>
                                <Spinner animation="border" />
                            </div> 
                        </Container> :
                            
                            count < questions.length ? 

                                children : 

                                    <Redirect
                                        to={{
                                        pathname: "/results",
                                        questions: questions,
                                        user: user
                                    }}
                                />
            );
}
 
export default TestManager;