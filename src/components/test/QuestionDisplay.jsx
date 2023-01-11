import React from 'react';
import { Form, Container, Button, Table } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
/* import HtmlParser from 'react-html-parser'; */
import Timer from './Timer';
import '../general-content/Basic.css';
import './QuestionDisplay.css';

const QuestionDisplay = 
        ({ questions, count, next, user, setUser }) => {

    const [checkedAnswerId, setCheckedAnswerId] = React.useState(0);
   /* const [interpretation, setInterpretation] = React.useState([]);
    const [showGreenAlert, setShowGreenAlert] = React.useState(false);
    const [showRedAlert, setShowRedAlert] = React.useState(false);
    const [inputText, setInputText] =  React.useState("");
    const [nbLines, setNbLines] =  React.useState(4); */

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
        return (answersSlice[index].isTrue);
    }
        
    /* function buildUrl() {
            let url = "/interpreter?s=";
            url += inputText;
            return url;
    }
    
    function interpret() {
        fetch(buildUrl())
        .then(
            response => response.json()
        ) 
        .then(data => {
            setInterpretation(data);
            console.log(data);
        })
        .catch(
            err => {
                var interpretationSlice = {...interpretation};
                interpretationSlice.error = err;
                setInterpretation(interpretationSlice);
                console.log("err: ");
                console.log(err);
            }
        );
    } */

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

    // A chaque question
    /* React.useEffect(() => {
        setNbLines(4);
        setInputText("");
        setInterpretation({});
        setShowGreenAlert(false);
        setShowRedAlert(false); 
    }, [count]);*/

    // Afficher les alertes
/*     React.useEffect(() => {
        if(interpretation.interpretated !== undefined && interpretation.interpretated !== null) {
            setShowGreenAlert(true);
        } else {
            setShowGreenAlert(false);
        }
        if((interpretation.error !== undefined && interpretation.error !== null)  
            || (interpretation.interpretated === null)) {
            setShowRedAlert(true);
        } else {
            setShowRedAlert(false);
        }
    }, [interpretation]); */
    
    return (
            <Form>
                <Container className ="Timer">
                    <Timer 
                        time={questions[count].time}
                        secondes={secondes}
                        setSecondes={setSecondes} 
                        minutes={minutes}
                        setMinutes={setMinutes}
                        setEndTimer={setEndTimer} />
                </Container>
                <Container className="QuestionContainer">          
                    {/* <p>{HtmlParser(questions[count].texte)}</p> */}
                </Container>

                {questions[count].type === "normal" ?
                    /* qcm */
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
                                                {/* {HtmlParser(answer.texte)} */}
                                            </p>  
                                        </td>   
                                    </tr> 
                                </tbody>      
                            ))}  
                        </Table>  
                        
                    </Container> 
                        /* code */
                        :   {/* <Container className="ReponsesContainer">
                                <InputGroup>
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <Button className="BasicButton" onClick={interpret}>
                                            Tester le code
                                        </Button> 
                                    </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl 
                                        as="textarea" 
                                        rows={nbLines}
                                        value={inputText}
                                        onChange={e => setInputText(e.target.value)} />
                                </InputGroup>
                                
                                <Alert variant="success" show={showGreenAlert}>
                                    {interpretation.interpretated !== null ?
                                        JSON.stringify(interpretation.interpretated) :
                                            null
                                    }
                                </Alert>

                                <Alert variant="danger" show={showRedAlert} >
                                    {interpretation.error !== null ?
                                        interpretation.error :
                                            interpretation.interpretated === null ?
                                                "Le code n'est pas interprétable" :
                                                    null
                                    }
                                </Alert>
                            </Container> */}
            }

                <Container className="ButtonPlacementQuestions">
                    <Button className="BasicButton ValidateButton" /* type="submit" */ onClick={doNext}>
                            Valider
                    </Button>   
                </Container>
            </Form>
            );
}

export default QuestionDisplay;