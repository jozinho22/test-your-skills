import React from 'react';

const Timer = ({secondes, setSecondes, minutes, setMinutes, setEndTimer}) => {

    React.useEffect(()=>{

        let myInterval = setInterval(() => {
            if (secondes > 0) {
                setSecondes(secondes - 1);
            }
            if (secondes === 0) {
                if (minutes === 0) {
                    setEndTimer(true);
                    setSecondes(0);
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
                 <h1>temps restant : 0 : 00</h1> : 
                    <h1> temps restant : {minutes} :{secondes < 10 ?  ` 0${secondes}` : secondes}</h1> 
        }
        </div>
    )
}

export default Timer;