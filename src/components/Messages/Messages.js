import React from 'react';
import './Messages.scss';
import { FiXCircle} from 'react-icons/fi';


export function Messages(props){

return(
    <div className="message-container">
        <FiXCircle style={{width:'20px', height:'20px', color:'red'}}/>
    <p className="message-param">Kunde inte hitta några varor!</p>
    </div>
)

}