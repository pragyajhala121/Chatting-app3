  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwCf4uY770z9LmKNukjE9lraA9PwMav0Q",
    authDomain: "chatapp-d7a02.firebaseapp.com",
    databaseURL: "https://chatapp-d7a02-default-rtdb.firebaseio.com",
    projectId: "chatapp-d7a02",
    storageBucket: "chatapp-d7a02.appspot.com",
    messagingSenderId: "630246564324",
    appId: "1:630246564324:web:85f2b91f29592057be67f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome "+user_name;
    function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "add room name"
      });

      localStorage.setItem("room_name", room_name);

       // window.location = "kwitter_page.html";
    }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
     row = "<div class = 'room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'#>" + Room_names + "</div><hr>";
     document.getElementById("output").innerHTML = row;
   //End code
   });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
 // window.location = "kwitter_page.html";

}