import React from 'react';
import { FaQuestion, FaRegWindowClose } from 'react-icons/fa';
import './InfoPopper.css';

const TransitionsPopper = () => {
  
 /*    function DisplayInfo() {

        function HomeInfo() {
            return  <div>   
                        <br />
                        Ce test est principalement en Java,<br />
                        cependant vous avez le choix d'ajouter ou de retirer d'autres thèmes.<br /><br />
                        Les règles sont simples : <br />
                        - Une seule bonne réponse par question.<br />
                        - Un temps limité par question.<br />
                        - Vos réponses à la fin du test.<br />
                    </div>
        } 

        function TestInfo() {
            return  <div>   
                        <br />
                        Test<br />
                    </div>
        } 

        function ResultsInfo() {
          return  <div>   
                      <br />
                      Test<br />
                  </div>
       } 

        switch (window.location.pathname) {
            case '/':
                return HomeInfo();
            case '/test':
                return TestInfo();
            case '/results':
                return ResultsInfo();
            default: return null;
        }
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    return (
        <div>
          <FaQuestion className="Info" onClick={handleClick} />
          <Popper value="/" id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade className="Fade" {...TransitionProps} timeout={350}>
                <div>
                  <FaRegWindowClose className="CloseButton" onClick={handleClick} />
                  <DisplayInfo />
                </div>
              </Fade>
            )}
          </Popper>
        </div>
      ); */

      return <></>
}

export default TransitionsPopper;
