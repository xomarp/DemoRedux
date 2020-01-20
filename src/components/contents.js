
import React from 'react'

import Post from './post.js';
import NewComment from './newComment.js';

class Contents extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			posts : []
		}
		// console.log("Posts : ", this.props.posts);
	}
	render(){
		const lstPosts = this.props.posts;
		console.log("lstPosts : ", lstPosts);

		if(!this.props.isConnected)
			return <h2 style={{textAlign: "center", color: "#888"}}>Please connect First to see posts ! </h2>;
		return (
			<div>
				{lstPosts.map((post, i) => <Post key={i} post={post} />)}
				<NewComment />
			</div>
		);
	}
}

export default Contents;