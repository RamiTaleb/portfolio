import React, { Component } from 'react';
import Emoji from './Emoji';

class About extends Component {
	render() {

		if(this.props.data){
			var profilepic= "images/"+this.props.data.image;
			var phone= this.props.data.phone;
			var email = this.props.data.email;
			var resumeDownload = this.props.data.resumedownload;
		}

		return (
			<section id="about">
			<div className="row">
				 <div className="three columns">
						<img className="profile-pic"  src={profilepic} alt="Rami Taleb Profile Pic" />
				 </div>
				 <div className="nine columns main-col">
						<h2>About Me</h2>

						<p>I am currently a fourth year Software Engineering student at the University of Ottawa <Emoji symbol="🇨🇦" label="canada"/>, two study semesters and one CO-OP term away from graduating. 21 years young and I have been interested in technology <Emoji symbol="💻" label="laptop"/> for as long as I can remember. I am always looking to improve my knowledge <Emoji symbol="🧠" label="brain"/> in tech and to improve myself as a person. Previously employed by IBM, CENX and uOttawa SASS-IT. Some of my interests include but are not limited to back-end development, entrepreneurship, hackathons, machine learning <Emoji symbol="🤖" label="robot"/> and soccer <Emoji symbol="⚽️" label="soccer"/>.</p>
						<div className="row">
							 <div className="columns contact-details">
									<h2>Get in Touch!</h2>
									<p className="address">
										<span>{email}</span>
										<br/>
										<span>{phone}</span>
									</p>
							 </div>
							 <div className="columns download">
									<p>
										 <a href={resumeDownload} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
									</p>
							 </div>
						</div>
				 </div>
			</div>

	 </section>
		);
	}
}

export default About;
