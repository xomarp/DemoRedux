
import React from 'react'
  
import Comment from './comment.js';

class Post extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			post : {}
		}
	}

	loadCommentaires = function(postId){

	}

	render(){
		const lstComments = this.props.post.comments;
		//console.log("lstComments : ", lstComments);

		if(!lstComments)
			return <strong>There is no Comments ! </strong>;
		
		return (

			<div id={`post_${this.props.post.id}`} className={`post`}>
				<h3 className={`title`} data-toggle="collapse" data-target={`#contenu_${this.props.post.id}`}>
					<span>{this.props.post.title}</span>
					<span> le {this.props.post.date} à {this.props.post.time}</span>
				</h3>
				<div className={`contenu collapse`} id={`contenu_${this.props.post.id}`}>
					<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
					<span>
						{this.props.post.contenu}
					</span>
					
					<br/>
					<a href="#" className={`btn btn-default btn-md`} data-toggle="collapse" data-target={`#commentaires_${this.props.post.id}`} style={{backgroundColor : '#ddd'}}>
          				Commentaires 
        			</a>
        			<a href="#" className={`btn btn-default btn-md`} data-toggle="collapse" data-target={`#addNewComment`} style={{backgroundColor : '#ddd'}}>
          				<span className={`glyphicon glyphicon-pencil`}></span> 
        			</a>
					
					<div id={`commentaires_${this.props.post.id}`} className={`commentaires collapse`}>
						{lstComments.map((comment, i) => <Comment key={i} comment={comment} />)}
					</div>
				</div>
			</div>
		);
	}
}

export default Post;