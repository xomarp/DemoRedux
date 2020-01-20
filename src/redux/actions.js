
import C FROM './constants.js'

module.exports = {
	logIn : function(email, password){
		return{
			type : C.LOG_IN,
			email : email,
			password : password
		};
	},
	signUp : function(email, password){
		return{
			type : C.SIGN_UP,
			email : email,
			password : password
		};
	},
	addPost : function(idUser, contenu){
		return{
			type : C.ADD_POST,
			idUser : idUser,
			contenu : contenu
		};
	},
	addComment : function(idUser, idPost, contenu){
		return{
			type : C.ADD_COMMENT,
			idUser : idUser,
			idPost : idPost,
			contenu : contenu
		};
	},
	getAllPosts : function(){
		return{
			type : C.GET_ALL_POSTS
		};
	},
	getCommentsByPost : function(idPost){
		return{
			type : C.GET_COMMENTS_BY_POST,
			idPost : idPost
		};
	},
};