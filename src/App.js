
  import React from 'react'
  
  import Header from './components/header.js';
  import Contents from './components/contents.js';



  class App extends React.Component { // A React Component !!
    constructor(props){
      super(props);
      this.state = {
        posts : [ 
          { 
            id:6,
            title:"YouTube does offer a developer API",
            contenu:"YouTube embed links are not just videos, they are typically webpages that contain logic to detect what your user supports and how they can play the youtube video, using HTML5, or flash, or some other plugin based on what is available on the users PC. ",
            date:"2015-10-31",
            time :"23H00",
            comments : [
              {
                id:4,
                author: "Farid@2020",
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
          },
          { 
            id:7,
            title:"Javascript to get entire contents of frame",
            contenu:"I want to have a script rewrite a simple text-file opened up as the source of a frame -- one that lacks any html. I tried frames[1].document.innerHTML but without success. I even tried .outerHTML and got nothing. ",
            date:"2015-11-05",
            time :"10H41",
            comments : [
              {
                id:32,
                author: "Anin_III",
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
    }
    render() {
      return (
        <div>
          <Header connexion={this.state.connexion} />
          <hr/>
          <Contents posts={this.state.posts} isConnected={this.state.connexion.isConnected} />
        </div>
      );
    }
  }

export default App;
