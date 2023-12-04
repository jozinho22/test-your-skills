import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import HtmlParser from 'react-html-parser'; 
import Timer from './Timer';
/* import { parse } from 'node-html-parser'; */
import './QuestionDisplay.css';

const QuestionDisplay = 
        ({ questions, count, next, user, setUser}) => {

    const [checkedAnswerId, setCheckedAnswerId] = React.useState(0);

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(0);
    const [secondes, setSecondes] =  React.useState(0);

    const doNext = () => {
        const userSlice = {...user};
        let indexCheckedAnswer = questions[count].answers.findIndex(answer => answer.id === checkedAnswerId);
        let checkedAnswer = questions[count].answers[indexCheckedAnswer];

        if(checkedAnswer !== undefined) {
            userSlice.checkedAnswers.push(checkedAnswer);
            if(checkAnswerIsTrue(checkedAnswer.id)) {
                userSlice.score += 1;
            }
        } else {
            userSlice.checkedAnswers.push(0);
        }  

        setUser(userSlice);
        // reinit sinon conserve la valeur précédente
        setCheckedAnswerId(0);
        
        next();
    }

    const handleCheck = (id) => {
        setCheckedAnswerId(id);
    }

    function checkAnswerIsTrue(id) {        
        const answersSlice = [...questions[count].answers];
        const index = answersSlice.findIndex(answer => answer.id === id);
        return (answersSlice[index].goodAnswer);
    }

    function setTimer(timeInSecondes) {
        if(timeInSecondes < 59) {
            setMinutes(0);
        } else {
            setMinutes(timeInSecondes / 60);
        }
        setSecondes(timeInSecondes % 60);  
    }
    // Timer
    React.useEffect(() => {
        setEndTimer(false);
        if(process.env.NODE_ENV === 'development') {
         /*    setTimer(5);
        } else { */
            setTimer(60);
        }
        
        if(endTimer) {
            doNext();
        }
    }, [endTimer, count]);
    
    return (
                <>
                    <Container className ="Timer">
                    <Timer 
                        secondes={secondes}
                        setSecondes={setSecondes} 
                        minutes={minutes}
                        setMinutes={setMinutes}
                        setEndTimer={setEndTimer} /> 
                    </Container>
                    <Container className="QuestionContainer">          
                        {HtmlParser(questions[count].text)}                         
                    </Container>
                    <Container className="AnswersContainer">
                        <Table className="table-borderless">   
                            {questions[count].answers.map(answer => ( 
                                <tbody key={answer.id}> 
                                    <tr>
                                        <td style={{width:"25px"}}> 
                                            {checkedAnswerId === answer.id ? 
                                                <FaArrowRight className="CheckQuestion" /> 
                                                    :   <FaArrowRight className="CheckQuestionInvisible" />}
                                        </td>
                                        <td>
                                            <p className="Answers"
                                                id={answer.id} 
                                                onClick={() => handleCheck(answer.id)} >     
                                                {HtmlParser(answer.text)}
                                            </p>  
                                        </td>   
                                    </tr> 
                                </tbody>      
                            ))}  
                        </Table>  
                        
                    </Container> 
                    <Container className="ButtonPlacementQuestions">
                        <Button className="BasicButton ValidateButton" /* type="submit" */ onClick={doNext}>
                                Valider
                        </Button>   
                    </Container>
            </>
            );
}

export default QuestionDisplay;