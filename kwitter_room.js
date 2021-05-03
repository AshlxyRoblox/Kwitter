
var firebaseConfig = {
      apiKey: "AIzaSyBecwy88NL7QxVrUuZyWi6yMYKM7goXjUY",
      authDomain: "kwitter-9f1f4.firebaseapp.com",
      databaseURL: "https://kwitter-9f1f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-9f1f4",
      storageBucket: "kwitter-9f1f4.appspot.com",
      messagingSenderId: "615300080257",
      appId: "1:615300080257:web:7a26e5154e34206b0f2380"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " +user_name+"!";
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToroomname(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}