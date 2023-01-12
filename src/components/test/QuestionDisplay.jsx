import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import HtmlParser from 'react-html-parser'; 
import Timer from './Timer';
import { parse } from 'node-html-parser';
import './QuestionDisplay.css';

const QuestionDisplay = 
        ({ questions, count, next, user, setUser }) => {

            console.log(questions)

    const [checkedAnswerId, setCheckedAnswerId] = React.useState(0);
   /* const [interpretation, setInterpretation] = React.useState([]);
    const [showGreenAlert, setShowGreenAlert] = React.useState(false);
    const [showRedAlert, setShowRedAlert] = React.useState(false);
    const [inputText, setInputText] =  React.useState("");
    const [nbLines, setNbLines] =  React.useState(4); */

    // Timer
    const [endTimer, setEndTimer] = React.useState(false);
    const [minutes, setMinutes] = React.useState(1);
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
        return (answersSlice[index].isTrue);
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
        setTimer(questions[count].time);
        if(endTimer) {
            doNext();
        }
    }, [endTimer, count]);
    
    return (
                <>
                    <Container className ="Timer">
                        <Timer 
                            time={60}
                            secondes={secondes}
                            setSecondes={setSecondes} 
                            minutes={minutes}
                            setMinutes={setMinutes}
                            setEndTimer={setEndTimer} />
                    </Container>
                    <Container className="QuestionContainer">          
                        <p>{HtmlParser(questions[count].text)}</p>                         
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