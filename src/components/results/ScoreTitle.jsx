const ScoreTitle = ( {score, nbQuestions} ) => {
    
    return (
            <div className="ChocoTitle">
                <h1>Votre score :</h1>
                <h1>{score}/{nbQuestions}</h1>
            </div>);
}

export default ScoreTitle;