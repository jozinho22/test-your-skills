import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import TopicListTable from './TopicListTable';
import './TopicList.css';
import '../general-content/Basic.css';

const TopicList = ( { topics, onChoose, chooseAll, allChosen } ) => {

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
                <Table className="TopicListTable table-borderless">
                    <tbody>
                        {topics.map(topic => (
                            <TopicListTable 
                                key={topic.id}
                                topic={topic}
                                onChoose={onChoose} 
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
            );
}

export default TopicList;