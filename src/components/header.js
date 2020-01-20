
import React from 'react'

import Login from './login.js';
  
class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			connexion : {signUpMode : false, isConnected : false, user : {}}
		}
		console.log("connexion : ", this.state.connexion);
	}

	setSignUpMode = (value) => {
		this.setState({connexion : {signUpMode : value}});
	}

	render(){
		let divHeader;

		if(!this.state.connexion.isConnected)
			divHeader = 
				(<div align="right" className={`section`}>
					<button className={`LoginSection-btn`} onClick={() => this.setSignUpMode(false)} data-toggle="modal" data-target={`#connexionModal`}>Log In</button>
					<button className={`LoginSection-btn`} onClick={() => this.setSignUpMode(true)} data-toggle="modal" data-target={`#connexionModal`}>Sign Up</button>

          			<Login signUpMode={this.state.connexion.signUpMode} setSignUpMode={this.setSignUpMode} />
				</div>);
		else
			divHeader = 
				(<div align="right" className={`section`}>
					<p>Bienvenue <b style={{color: "maroon"}}>{this.state.connexion.user.name}</b></p>
				</div>);

		return (
			<header>
				{divHeader}
			</header>
		);
	}
}

export default Header;