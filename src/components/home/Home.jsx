import React from 'react';
import { Container } from 'react-bootstrap';
import HomeManager from './HomeManager';
import jsonTopics from '../../resources/topics.json';
import moveArrowTopics from './moveArrowTopics';
import TopicListTitle from './TopicListTitle';
import TopicList from './TopicList';
import StartButton from './StartButton';
import RadioRennes from './RadioRennes';
import '../general-content/Basic.css';

const Home = () => {

    const [topics, setTopics] = React.useState(jsonTopics);
    const [nbQuestions, setNbQuestions] = React.useState(5);
    const [isLoading, setIsLoading] = React.useState(true);
    const [allChosen, setAllChosen] = React.useState(false);

    const chooseTopic = (id) => {
        const topicsSlice = [...topics];
        const index = topicsSlice.findIndex(topic => topic.id === id);
        
        if(topicsSlice[index].chosen === true) {
            topicsSlice[index].chosen = false;
        } else {
            topicsSlice[index].chosen = true;
        }
        setTopics(topicsSlice);
    }

    const chooseAll = () => {
        const topicsSlice = [...topics];
        if(!allChosen) {
            topicsSlice.forEach(topic => topic.chosen = true);
        } else {
            topicsSlice.forEach(topic => topic.chosen = false);
        }
        setTopics(topicsSlice);
        setAllChosen(!allChosen);
    }
 
    React.useEffect(() => {
        moveArrowTopics();
    }, []);

    return (
                <Container className="RelativeContainer" >
                    <TopicListTitle />
                    <TopicList 
                        topics={topics} 
                        onChoose={chooseTopic}
                        chooseAll={chooseAll}
                        allChosen={allChosen} />
                    <StartButton 
                        topics={topics}
                        nbQuestions={nbQuestions}/>
                    <RadioRennes /> 
                </Container>
            );
}

export default Home;