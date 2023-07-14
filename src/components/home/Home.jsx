import React from 'react';
import { Container } from 'react-bootstrap';
import moveArrowTopics from './moveArrowTopics';
import TopicListTitle from './TopicListTitle';
import TopicList from './TopicList';
import StartButton from './StartButton';
import '../general-content/Basic.css';

const Home = ( props ) => {

    const [allChosen, setAllChosen] = React.useState(false);

    const chooseTopic = (id) => {
        const topicsSlice = [...props.topics];
        const index = topicsSlice.findIndex(topic => topic.id === id);
        
        if(topicsSlice[index].chosen === true) {
            topicsSlice[index].chosen = false;
        } else {
            topicsSlice[index].chosen = true;
        }
        props.setTopics(topicsSlice);
    }

    const chooseAll = () => {
        const topicsSlice = [...props.topics];
        if(!allChosen) {
            topicsSlice.forEach(topic => topic.chosen = true);
        } else {
            topicsSlice.forEach(topic => topic.chosen = false);
        }
        props.setTopics(topicsSlice);
        setAllChosen(!allChosen);
    }
 
    React.useEffect(() => {
        moveArrowTopics();
    }, []);

    return (
            <Container className="RelativeContainer" >
                <TopicListTitle />
                <p>Si vous n'avez rien coché, tous les sujets seront dans le test</p>
                <TopicList 
                    topics={props.topics} 
                    onChoose={chooseTopic}
                    chooseAll={chooseAll}
                    allChosen={allChosen} />
                <StartButton 
                    setRunning={props.setRunning}/>
            </Container>
            );
}

export default Home;