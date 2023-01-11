import React from 'react';

const useTopicsLoading = ( {topics, setTopics, setIsLoading} ) => {
    React.useEffect(() => {
        setIsLoading(true);
        async function fetchTopics(url) {
            const response = await fetch(url);
            const data = await response.json();
            setTopics(data);
            setIsLoading(false);
        }  
        fetchTopics('/topics');
    }, [topics.length]);
}

export default useTopicsLoading;