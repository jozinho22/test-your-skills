import React from 'react';

import './ResultsAccordion.css';

const ResultsAccordion = ( {questions, user} ) => {
    
    return <></>
    /* const classes = useStyles();

    var indexes = [];
    for(var k = 0; k < questions.length ; k++) {
        indexes.push(k);
    }
    
    return (
        <div className={classes.root}>
            {indexes.map(index => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        <Typography className="QuestionContainer QuestionResults">
                            {HtmlParser(questions[index].texte)}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography className="AnswersContainer AnswersResults">
                            {user.checkedAnswers[index].id === undefined ?
                                <span>Vous n'avez rien répondu...</span> : 
                                    <span>
                                        <span style={{textDecoration: "underline"}}>Votre réponse</span>
                                        <br></br>
                                        <span>{HtmlParser(user.checkedAnswers[index].texte)}</span>
                                    </span>
                            }
                            {user.checkedAnswers[index].id !== undefined ?
                                user.checkedAnswers[index].isTrue ?
                                    <span style={{color: "green"}}>
                                        <br></br>
                                        <br></br>
                                        Bonne réponse !!!
                                    </span>
                                        :   <span>
                                                <br></br>
                                                <br></br>
                                                <span style={{color: "red"}}>
                                                    Mauvaise réponse...
                                                </span>
                                                <br></br>
                                                <span style={{textDecoration: "underline"}}>
                                                    La bonne réponse était :
                                                </span>  
                                                {questions[index].answers.map(answer => (
                                                    <span key={answer.id}>
                                                        {answer.isTrue ?
                                                            <span>
                                                                <br></br>
                                                                {HtmlParser(answer.texte)}
                                                            </span>  
                                                                : null
                                                        }
                                                    </span>
                                                ))}
                                            </span> 
                                    :   null
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    ); */
}

export default ResultsAccordion;
