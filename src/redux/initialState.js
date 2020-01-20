
const initialState  = {
	posts : [
		{ 
            id:6,
            title:"FaceBook does offer a developer API",
            contenu:"FaceBook embed links are not just videos, they are typically webpages that contain logic to detect what your user supports and how they can play the youtube video, using HTML5, or flash, or some other plugin based on what is available on the users PC. ",
            date:"2015-10-31",
            time :"23H00",
            comments : [
              {
                id:4,
                author: "Toti@2020",
                date:"2015-10-31",
                time :"23H04",
                contenu : "Just THAT !!"
              },{
                id:7,
                author: "noçair",
                date:"2015-10-31",
                time :"23H11",
                contenu : "Pff.."
              }
            ]
        },{ 
            id:7,
            title:"React JS to get entire contents of frame",
            contenu:"I want to have a script React rewrite a simple text-file opened up as the source of a frame -- one that lacks any html. I tried frames[1].document.innerHTML but without success. I even tried .outerHTML and got nothing. ",
            date:"2015-11-05",
            time :"10H41",
            comments : [
              {
                id:32,
                author: "Kamal_I",
                date:"2015-11-07",
                time :"14H35",
                contenu : "I Know this."
              },{
                id:102,
                author: "b.benAli23",
                date:"2015-11-18",
                time :"00H15",
                contenu : "Trusted.. But, I can do it"
              }
            ]
        }
    ], 
  	connexion : {signUpMode : false, isConnected : false, user : {}}
}

export default InitialState;