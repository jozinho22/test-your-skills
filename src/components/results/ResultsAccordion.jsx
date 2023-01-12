import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HtmlParser from 'react-html-parser';

import './ResultsAccordion.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ResultsAccordion = ( {questions, user} ) => {

    console.log(user)
    
    const classes = useStyles();

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
                        /* onClick={() => displayUserReponse(index)} */ >
                        <Typography className="QuestionContainer QuestionResults">
                            {HtmlParser(questions[index].text)}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        <Typography className="AnswersContainer AnswersResults">
                            {user.checkedAnswers[index].id === undefined ?
                                <span>Vous n'avez rien répondu...</span> : 
                                    <span>
                                        <span style={{textDecoration: "underline"}}>Votre réponse</span>
                                        <br></br>
                                        <span>{HtmlParser(user.checkedAnswers[index].text)}</span>
                                    </span>
                            }
                            {
                                user.checkedAnswers[index].id !== undefined ?
                                    user.checkedAnswers[index].goodAnswer ?
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
                                                            {answer.goodAnswer ?
                                                                <span>
                                                                    <br></br>
                                                                    {HtmlParser(answer.text)}
                                                                </span>  
                                                                    : null
                                                            }
                                                        </span>
                                                    ))}
                                                </span> 
                                                    :   <></>
                            }
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default ResultsAccordion;
