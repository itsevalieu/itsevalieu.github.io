import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super();
		this.state = {
			name: "",
			email: "",
			subject: "",
			body: ""
		};
		this.handleChange = this.handleChange.bind(this);
   	 	this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
    	this.setState({
     		[e.target.name]: e.target.value
    	});
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			name: "",
			email: "",
			subject: "",
			body: ""
		});
	}

	render() {
		return(
			<div className="contact">
				<p>Contact Me</p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Full Name" name="name" value={this.state.name} onChange={this.handleChange}></input>
					<input type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.handleChange}></input>
					<input type="text" placeholder="Subject Line" name="subject" value={this.state.subject} onChange={this.handleChange}></input>
					<textarea type="text" placeholder="Message" name="body" value={this.state.body} onChange={this.handleChange}></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Contact;
    
  
  // render() {
  //   return (
  //     <div className="folder">
  //       <div className="folder-header">
  //         <form onSubmit={this.handleSubmit}> {buttons should handle onclick to pass state.value to function that renders page content}
  //           <button name="tab" type="submit" value={this.state.onClick={this.handleChange}>About</button>
  //         </form> 