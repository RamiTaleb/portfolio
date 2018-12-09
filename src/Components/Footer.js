import React, { Component } from 'react';
import Emoji from './Emoji';

class Footer extends Component {
	render() {

		if(this.props.data){
			var networks= this.props.data.social.map(function(network){
				return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i className={network.className}></i></a></li>
			})
		}

		return (
			<footer>

		 <div className="row">
				<div className="twelve columns">
					 <ul className="social-links">
							{networks}
					 </ul>

					 <ul className="copyright">
							<li>Made with <Emoji symbol="💜" label="purple heart"/>by Rami Taleb</li>
					 </ul>

				</div>
				<div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
		 </div>
	</footer>
		);
	}
}

export default Footer;
