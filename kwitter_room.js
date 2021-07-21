
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCKmDCx3WQ_uIq11L4_fxTaEPbd9HBVIc4",
      authDomain: "kwitter-e7eda.firebaseapp.com",
      databaseURL: "https://kwitter-e7eda-default-rtdb.firebaseio.com",
      projectId: "kwitter-e7eda",
      storageBucket: "kwitter-e7eda.appspot.com",
      messagingSenderId: "804430702146",
      appId: "1:804430702146:web:22169062ae3fa387552fdb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!!!!!!!!!!";

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirect(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}