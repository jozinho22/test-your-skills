import React from 'react';

const useQuestionsLoading = ( {topics, nbQuestions, setQuestions, setIsLoading, setHasError} ) => {

    console.log("From useQuestionsLoading - nbQuestions");
    console.log(nbQuestions);

    function buildUrl() {
        try {
            let url = "/questions?topicIds=1";
            let chosenTopics = topics.filter(topic => topic.chosen);
            for(var i = 0; i < chosenTopics.length ; i++) {
                url += ",";
                url += chosenTopics[i].id; 
            }
            url += "&nbQuestions=" + nbQuestions;
            console.log("From useQuestionsLoading - url");
            console.log(url);
            return url;
        } catch(error) {
            setHasError(true);
        }
    }

    React.useEffect(() => { 
        fetch(buildUrl())
            .then(
                response => response.json()
            )
            .then(data => {
                setQuestions(data);
            })
            .catch(
                err => {
                    setHasError(true);
                    console.log("err.status : ");
                    console.log(err.status);
                }
            )
            .finally(
                () => {
                    setIsLoading(false); 
                }
            ); 
    }, []); 
}

export default useQuestionsLoading;