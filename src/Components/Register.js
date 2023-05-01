import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; 

import "./CSS/Register.css"
import Navbar from "./Navbar";

function Register() {
	const navigate = useNavigate();
	const [userRegistration, setUserRegistration] = useState({
		email: "",
		fname: "",
		lname:"",
		DOB: "",
		gender: "",
		password: "",
		cpassword: "",
		city: ""

	});
	const [Records, setRecords] = useState();
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		console.log(name, value);

		setUserRegistration({ ...userRegistration, [name]: value });

	}

	// const handleSubmit = (e) =>{
	// 	e.preventDefault();

	// 	const newRecord = {...userRegistration, id: new Date().getTime.toString()}
	// 	console.log(Records);
	// 	setRecords({...Records,newRecord});
	// 	console.log(Records);

	// 	setUserRegistration({
	// 		email:"",
	// 		name:"",
	// 		DOB:"",
	// 		gender:"",
	// 		password:"",
	// 		cpassword:"",
	// 		city:""

	// 	});
	// }

	const PostData = async (e) => {
		e.preventDefault();

		const { email, fname,lname, DOB, gender, password, cpassword, city } = userRegistration;

		const res = await fetch("/Register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email, fname: fname, lname:lname, DOB: DOB, gender: gender, password: password, cpassword: cpassword, city: city
			})
		});

		const data = await res.json();
		if (data.ststus === 422 || !data) {
			window.alert("Invalid Registeration");
			console.log("Invalid Registeration");
		}
		else {
			window.alert("Registeration Successfull");
			console.log("Registeration Successfull");

			navigate("/Login");
		}
	}
	return (
		<>
			<Navbar />
			<div className="body2">
				<div className="d-flex mt-5">
					<div className="col-6 text-center pt-5">
						<img src={require('./images/Logo-01.png')} alt="img" className="img_size2" />
					</div>
					<div className="col-6">
						<div className="container2">
							<div className="screen2">
								<div className="screen__content2">
									<form className="signup" method="POST" >
										{/* onSubmit={handleSubmit} */}
										<div className="signup__field">
											<i className="signup__icon bi bi-envelope-fill text-secondary"></i>
											<input type="email" autoComplete="off" className="signup__input"
												value={userRegistration.email} onChange={handleInput} name="email" id="email" placeholder="Email" required />
										</div>
										<div className="d-flex justify-content-between">
											<div className="signup__field col-6">
												<i className="signup__icon bi bi-people-fill text-secondary"></i>
												<input type="text" autoComplete="off" className="signup__input"
													value={userRegistration.fname} onChange={handleInput} name="fname" id="fname" placeholder="First Name" required />
											</div>
											<div className="signup__field col-5">
												<i className="signup__icon bi bi-people-fill text-secondary"></i>
												<input type="text" autoComplete="off" className="signup__input"
													value={userRegistration.lname} onChange={handleInput} name="lname" id="lname" placeholder="Last Name" required />
											</div>
										</div>
										<div className="signup__field">
											<i className="signup__icon bi bi-people-fill text-secondary"></i>
											<input type="date" autoComplete="off" className="signup__input"
												value={userRegistration.DOB} onChange={handleInput} name="DOB" id="DOB" placeholder="DOB" required />
										</div>
										<div className="signup__field">
											<i className="signup__icon bi bi-gender-ambiguous text-secondary"></i>
											{/* <input type="text" autoComplete="off" className="signup__input"
					     value={userRegistration.gender} onChange={handleInput} name="gender" id="gender" placeholder="Gender"/> */}
											<select className="form-select signup__input" placeholder="Enter Gender" value={userRegistration.gender} onChange={handleInput} name="gender" id="gender" aria-label="Default select example" required>
												<option className="text-secondary"></option>
												<option value="Male">Male</option>
												<option value="Female">Female</option>
												<option value="Trans">Trans</option>

											</select>
										</div>
										<div className="signup__field">
											<i className="signup__icon bi bi-key-fill text-secondary"></i>
											<input type="password" autoComplete="off" className="signup__input"
												value={userRegistration.password} onChange={handleInput} name="password" id="password" placeholder="Password" required />
										</div>
										<div className="signup__field">
											<i className="signup__icon bi bi-key-fill text-secondary"></i>
											<input type="password" autoComplete="off" className="signup__input"
												value={userRegistration.cpassword} onChange={handleInput} name="cpassword" id="cpassword" placeholder="Confirm Password" required />
										</div>

										<div className="signup__field">
											<i className="signup__icon bi bi-building text-secondary"></i>
											<input type="text" autoComplete="off" className="signup__input"
												value={userRegistration.city} onChange={handleInput} name="city" id="city" placeholder="City" required />
										</div>
										<Link className="text-center text-decoration-none text-dark fw-bold" to="/Login">Already Have an  Account?</Link>
										<button type="submit" className="button signup__submit text-decoration-none" onClick={PostData}>

											Sign Up

										</button>


									</form>
									{/* <div className="social-signup">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="/" className="social-signup__icon fab fa-instagram"></a>
					<a href="/" className="social-signup__icon fab fa-facebook"></a>
					<a href="/" className="social-signup__icon fab fa-twitter"></a>
				</div>
			</div> */}
								</div>
								<div className="screen__background2">
									<span className="screen__backgroundshape screen__background__shape__4"></span>
									<span className="screen__backgroundshape screen__background__shape__3"></span>
									<span className="screen__backgroundshape screen__background__shape__2"></span>
									<span className="screen__backgroundshape screen__background__shape__1"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;