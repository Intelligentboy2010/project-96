//YOUR FIREBASE LINKS
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


  room_name=document.getElementById("room_name");
  user_name=document.getElementById("user_name");

function send(){
    Msg = document.getElementById("msg_input").value;

    firebase.database().ref(room_name).push({
      User: User,
      Like: 0,
      Message: Msg
    });
    document.getElementById("msg_input").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();
function updateLike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update(
    {
          like:updated_likes
    }
);
}
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}









