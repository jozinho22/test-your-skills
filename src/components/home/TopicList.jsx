import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './TopicList.css';
import '../general-content/Basic.css';

const TopicList = ( { topics, onChoose, chooseAll, allChosen } ) => {

    console.log(topics)

        return (
            <Container fluid className="TopicListContainer">
                
                <Container fluid style={{paddingBottom: "30px"}}>
                    <Button 
                        className="ChooseAllButton"
                        onClick={chooseAll} >
                        {allChosen ? 
                            "Tout décocher" :
                                "Tout cocher" 
                        }
                    </Button>
                </Container>
                <Container className="TopicList"> 
                    {topics.filter(t => t.topicKey !== "JAVASCRIPT").map(topic => (
                        <Button className={`TopicChoiceButton ${topic.chosen ? "Chosen" : ""}`}
                            key={topic.id}
                            topic={topic}
                            onClick={() => onChoose(topic.id)}  >
                            {topic.name}
                        </Button>
                    ))}
                
                </Container>
            </Container>
            );
}

export default TopicList;