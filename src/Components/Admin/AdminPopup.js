import React from "react";
import "../CSS/AdminPopup.css"
 
const AdminPopup = props => {
  return (
    <div className="popup-box2">
      <div className="box2">
        <span className="close-icon2" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};



 
export default AdminPopup;