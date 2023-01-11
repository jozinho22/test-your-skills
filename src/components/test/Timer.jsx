import React from 'react';

const Timer = ({time, secondes, setSecondes, minutes, setMinutes, setEndTimer}) => {

    React.useEffect(()=>{

        let myInterval = setInterval(() => {
            if (secondes > 0) {
                setSecondes(secondes - 1);
            }
            if (secondes === 0) {
                if (minutes === 0) {
                    setEndTimer(true);
                    setSecondes(time);
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSecondes(59);
                }
            } 
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    });

    return (
        <div>
        { minutes === 0 && secondes === 0 ? 
                null : 
                    <h1> temps restant : {minutes} :{secondes < 10 ?  `0${secondes}` : secondes}</h1> 
        }
        </div>
    )
}

export default Timer;