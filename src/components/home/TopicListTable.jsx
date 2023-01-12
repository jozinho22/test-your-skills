import { GiCheckMark } from 'react-icons/gi';
import { BiMinusCircle } from 'react-icons/bi';
import { BiPlusCircle } from 'react-icons/bi';
import './TopicListTable.css';

const TopicListTable = ({ topic, onChoose }) => {
    
    return (
            <>
                {topic.chosen === true ? 
                        <BiMinusCircle className="AddIcon" onClick={() => onChoose(topic.id)} /> 
                            : <BiPlusCircle className="AddIcon" onClick={() => onChoose(topic.id)} />    
                } 
            
                {topic.name}
            
                {topic.chosen === true ? 
                    <GiCheckMark className="CheckIcon"/> 
                        : <GiCheckMark className="CheckIcon" style={{opacity: "0"}}/> 
                } 
                
            </>
    );
}

export default TopicListTable;