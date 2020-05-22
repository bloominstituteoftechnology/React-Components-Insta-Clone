import React from 'react';
import './Comment.css'; 

const TimeStamp = props => {

	return (

			<div className="time-stamp-container">

				<time className="time-stamp">{props.timePost}</time>
                
			</div>

    );
    
};

export default TimeStamp; 