// import './App.css';
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function ForgotPassword() {
  return (
    <>
	<Navbar/>
    <div className="body1">
          <div className="d-flex mt-5">
        <div className="col-6 text-center pt-5">
            <img src={require('./images/Logo-01.png')} alt="img" className="img_size"/>
        </div>
        <div className="col-6">
     <div className="container1">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon bi bi-envelope-fill text-secondary"></i>
					<input type="text" className="login__input" placeholder="Enter Email"/>
				</div>
                <div>
				<Link to="/" className="button login__submit text-decoration-none">
					<span className="button__text">Reset Password</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</Link>
                </div>
                		
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
</div>
</div>
</div>
    </>
  );
}

export default ForgotPassword;
