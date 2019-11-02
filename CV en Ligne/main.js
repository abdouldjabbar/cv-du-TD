

// document.getElementById( 'monBouton' ).addEventListener( "click", function() {

// document.getElementById( 'motdepasse' ).setAttribute( 'type', 'password' );
 
 //});
 window.onload=function (){
    document.querySelector("button").addEventListener("click", function (){
    this.parentNode.querySelector("input") .type = (this.parentNode.querySelector("input").type == "text") ? "password" : "texe";
    }, false);
    }