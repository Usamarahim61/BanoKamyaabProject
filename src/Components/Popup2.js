import React from "react";
import "./CSS/Popup.css"
 
const Popup2 = props => {
  return (
    <div className="popup-box1">
      <div className="box shadow-lg">
        {/* <span className="close-icon" onClick={props.handleClose}>x</span> */}
        {props.content}
      </div>
    </div>
  );
};



 
export default Popup2;