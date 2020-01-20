
import React from 'react'
 
const intialState = {
	email : undefined,
	password : undefined,
	re_password : undefined,
	rememberMe : undefined,

	emailHasError : undefined,
	passwordHasError : undefined,
	re_passwordHasError : undefined
}

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formError : {},
			formData : {}
		};
		
		console.log("signUpMode : ", props.signUpMode);
	}

	connexion = (event) => {
		const target = event.target;
		const property = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;

		let formData = this.state.formData;
  		formData[property] = value;

		this.setState({
			formData
		});

		// == EMAIL
		if(property === 'email'){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		if(!re.test(String(value).toLowerCase()))
    			this.setState({
    				formError : {emailHasError : true}
    			});
    		else
    			this.setState({
    				formError : {emailHasError : false}
    			});
		}
		// == PASSWORD
		if(property === 'password'){
			if(value.length < 6)
				this.setState({
    				formError : {passwordHasError : true}
    			});
			else
				this.setState({
    				formError : {passwordHasError : false}
    			});
		}
		// == RE-PASSWORD
		if(property === 're_password' && this.props.signUpMode){
			if(value !== this.state.password)
				this.setState({
    				formError : {re_passwordHasError : true}
    			});
			else
				this.setState({
    				formError : {re_passwordHasError : false}
    			});
		}
	}

	submitUserForm = (event) => {
		event.preventDefault();
		console.log("submit => state : ", this.state);
	}

	resetState = () => {
		// document.getElementById("mainForm").reset();
		this.setState({formError : {}, formData : {}}, () => {
			// console.log("After reset => state : ", this.state);
		});
	}

	render(){
		let pHeader, confirmPassword, pFooterConnexion, buttonConnexion;
		let spanForEmail, spanForPassword, spanForRePassword;
		let disabledSubmit = (this.state.formError.emailHasError || this.state.formError.passwordHasError || (this.state.formError.re_passwordHasError && this.props.signUpMode));

		if(this.state.formError.emailHasError)
			spanForEmail = <div>
								<span className={`glyphicon glyphicon-remove form-control-feedback`} />
								<p className={`help-block`}>{`Please enter a valid email address`}</p>
							</div>;
		else if(this.state.formError.emailHasError == false)
			spanForEmail = <span className={`glyphicon glyphicon-ok form-control-feedback`}></span>;

		if(this.state.formError.passwordHasError)
			spanForPassword = <div>
								<span className={`glyphicon glyphicon-remove form-control-feedback`} />
								<p className={`help-block`}>Please enter a stronger password</p>
							</div>;
		else if(this.state.formError.passwordHasError == false)
			spanForPassword = <span className={`glyphicon glyphicon-ok form-control-feedback`}></span>;

		if(this.state.formError.re_passwordHasError)
			spanForRePassword = <div>
									<span className={`glyphicon glyphicon-remove form-control-feedback`} />
									<p className={`help-block`}>Passwords are not identical</p>
								</div>;
		else if(this.state.formError.re_passwordHasError == false)
			spanForRePassword = <span className={`glyphicon glyphicon-ok form-control-feedback`}></span>;

		if(this.props.signUpMode){
			pHeader = <p className={`center inscription`}><b>{`S'inscrire gratuitement aujourd'hui !`}</b></p>;
			confirmPassword =
				(<div className={`form-group inscription`}>
					<div className={`col-xs-12 `+(this.state.formError.re_passwordHasError ? 'has-error' : 'has-success')}>
						<input type="password" id="confirmInputPassword" name="re_password" value={this.state.formData.re_password || ''} onChange={this.connexion} className={`form-control`} placeholder="Confirm Password" />
						{spanForRePassword}
					</div>
				</div>);
			buttonConnexion = <button type="submit" className={`btn btn-primary`} disabled={disabledSubmit} style={{width: '100%'}}>JOIN US</button>;
			pFooterConnexion = <p className={`inscription`} onClick={() => {this.props.setSignUpMode(false); this.resetState()}}>Déjà un membre de Freelancer.com ?  <a className={`cursor`}>Se connecter</a></p>
		}
		else{
			pHeader = <p className={`center inscription`}><b>{`Bienvenue !`}</b></p>;
			buttonConnexion = <button type="submit" className={`btn btn-primary`} disabled={disabledSubmit} style={{width: "100%"}}>Connexion</button>;
			pFooterConnexion = <p className={`connexion`} onClick={() => {this.props.setSignUpMode(true); this.resetState()}}>{`Vous n'avez pas de compte ? `}<a className={`cursor`}>{`S'inscrire`}</a></p>;
		}

		return (
		<div className={`modal fade`} id="connexionModal">
		  <div className={`modal-dialog`}>
			<div className={`modal-content`} style={{width: "60%"}}>
			  <div className={`modal-header`} align="center">
				<button type="button" className={`close`} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>	
			  </div>
			  
				<div className={`modal-body`}>
					{pHeader}
					
					<form name="userForm" onSubmit={this.submitUserForm} noValidate style={{width: '100%'}} id="mainForm">
						<div className={`form-group`}>
							<div className={`col-xs-12 `+(this.state.formError.emailHasError ? 'has-error' : 'has-success')}>
								<input type="email" id="inputEmail" name="email" value={this.state.formData.email || ''} onChange={this.connexion} className={`form-control`} placeholder="Email" required />
								{spanForEmail}
							</div>
						</div>
						<div className={`form-group`}>
							<div className={`col-xs-12 `+(this.state.formError.passwordHasError ? 'has-error' : 'has-success')}>
								<input type="password" id="inputPassword" name="password" value={this.state.formData.password || ''} onChange={this.connexion} className={`form-control`} placeholder="Password" required />
								{spanForPassword}
							</div>
						</div>
						{confirmPassword}
						<div className={`checkbox`} align="left">
							<label><input type="checkbox" name="rememberMe" value={this.state.formData.rememberMe} onChange={this.connexion} /> Remember me</label>
						</div>

					  	<div className={`form-group`}>
					  		<div className={`col-xs-12`}>
					  			{buttonConnexion}
						    </div>
					    </div>
					</form>
				</div>
			  
			  <div className={`modal-footer`}>
				{pFooterConnexion}
			  </div>
			</div>
		  </div>
		</div>
		);
	}
}

export default Login;