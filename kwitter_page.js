//YOUR FIREBASE LINKS
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
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name = message_data['name'];
                        message = message_data['message'];
                        like = message_data['like'];
                        name_tag = "<h4> " + name + " <img class='user_tick' src='tick.png'> </h4>";
                        message_tag = "<h4 class='message_h4' >" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='update(this.id)'>";
                        span = "<span class='glyphicon glyphicon-thumbs-up'> like:" + like + "</span> </button>";
                        row = name_tag + message_tag + like_button + span;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, message: msg, like: 0
      });
      document.getElementById("msg").value = "";
}

function update(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated=Number(likes)+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:updated
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}