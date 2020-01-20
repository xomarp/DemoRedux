
import React from 'react'
  
class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			comment : {}
		}
	}
	render(){
		return (
			<p id={`comment_${this.props.comment.id}`} className={`comments`}>
				<i><b>{this.props.comment.author} ({this.props.comment.date} à {this.props.comment.time})</b></i>
				<span> :  {this.props.comment.contenu}</span>
			</p>
		);
	}
}

export default Comment;