import { GiCheckMark } from 'react-icons/gi';
import { BiMinusCircle } from 'react-icons/bi';
import { BiPlusCircle } from 'react-icons/bi';
import './TopicListTable.css';

const TopicListTable = ({ topic, onChoose }) => {
    
    return (
            <tr>
                <td>
                    {topic.chosen === true ? 
                            <BiMinusCircle className="AddIcon" onClick={() => onChoose(topic.id)} /> 
                                : <BiPlusCircle className="AddIcon" onClick={() => onChoose(topic.id)} />    
                    } 
                </td>
                <td style={{ whiteSpace: 'nowrap' }}>
                    {topic.description}
                </td>
                <td> 
                    {topic.chosen === true ? 
                        <GiCheckMark className="CheckIcon"/> 
                            : <GiCheckMark className="CheckIcon" style={{opacity: "0"}}/> 
                    } 
                </td>
            </tr>
    );
}

export default TopicListTable;