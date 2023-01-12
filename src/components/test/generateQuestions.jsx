import jsonQuestions from '../../resources/questionswithcodes.json';

const generateQuestions = (topics, nbQuestions) => {
    let chosenTopics = topics.filter(topic => topic.chosen);
    let questions = shuffle(jsonQuestions);
    let questionsSorted = []
    if(chosenTopics.length > 0) {
        for(var i = 0; i < questions.length; i++) {
            for(var topic of chosenTopics) {
                if(questions[i].topicKey === topic.topicKey) {
                    questionsSorted.push(questions[i])
                }
            }
            
        }
    } else {
        questionsSorted = questions;
    }

    let tenFirst = questionsSorted.slice(0, nbQuestions)

    return tenFirst;
    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

export default generateQuestions;