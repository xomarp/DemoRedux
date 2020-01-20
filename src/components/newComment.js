
import React from 'react'
  
class NewComment extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : '',
			comment : ''
		}
	}

	AddingComment = (event) => {
		let property = event.target.name;
    	let value = event.target.value;
    	this.setState({[property]: value});

    	// Validations..
    	if(property == 'name'){
    		if(value.length < 5)
    			this.setState({'nameHasError': true});
    		else
    			this.setState({'nameHasError': false});
    	}
    	if(property == 'comment'){
    		if(value.length < 10)
    			this.setState({'commentHasError': true});
    		else
    			this.setState({'commentHasError': false});
    	}
	}

	SaveComment = (event) => {
		event.preventDefault();
    	alert("You are submitting :  "+ JSON.stringify(this.state));
	}

	render(){
		let spanForName;
		if(this.state.nameHasError)
			spanForName = <span><span className={`glyphicon glyphicon-remove form-control-feedback`}></span><p className={`help-block`}>Please enter a valid username</p></span>;
		else
			spanForName = <span className={`glyphicon glyphicon-ok form-control-feedback`}></span>;

		return (
			<div id="addNewComment" className={`new-comment collapse alert alert-warning`}>
				<form className={`form-horizontal`} onSubmit={this.SaveComment}>
					<div className={`form-group`}>
					    <label className={`control-label col-sm-2`} htmlFor="inputName">Name : </label>
					    <div className={`col-sm-10 `+(this.state.nameHasError ? 'has-error' : 'has-success')}>
					    	<input id="inputName" type="text" name='name' className={`form-control`} onChange={this.AddingComment} />
					    	{spanForName}					    	
					  	</div>
				  	</div>
				  	<div className={`form-group`}>
					    <label className={`control-label col-sm-2`} htmlFor="inputComment">Comment : </label>
					    <div className={`col-sm-10 `+(this.state.commentHasError ? 'has-error' : 'has-success')}>
					    	<input id="inputComment" type="text" name='comment' className={`form-control`} onChange={this.AddingComment} />
					  	</div>
				  	</div>

				  	<div className={`form-group`}>
				  		<div className={`col-sm-offset-2 col-sm-10`}>
				  			<button type="submit" className={`btn btn-default`}>Submit</button>
					    </div>
				    </div>
				  	
				</form>
			</div>
		);
	}
}

export default NewComment;