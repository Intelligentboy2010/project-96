var firebaseConfig = {
    apiKey: "AIzaSyBI92SrTkH2dTPrZtwwOHNUS-XzyjIxvW4",
    authDomain: "kwitter-899da.firebaseapp.com",
    databaseURL: "https://kwitter-899da-default-rtdb.firebaseio.com",
    projectId: "kwitter-899da",
    storageBucket: "kwitter-899da.appspot.com",
    messagingSenderId: "1043565615911",
    appId: "1:1043565615911:web:2d6689857095e343872702"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name "+room_name);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML+=row;


    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";


}




