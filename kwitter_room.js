<html>
   
<body>
<input type="text" id="user_name" class="form-control" placeholder="User Name"></input>
    <div>
        <button id="login_button" class="btn-btn primary" onclick="adduser()">LOG IN</button>
    </div>

  
</body>
</html>
  // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZnaa7nE7vkJaAtP7Op_IRptgGLL-Xapw",
  authDomain: "letschatwebapp-c35fd.firebaseapp.com",
  databaseURL: "https://letschatwebapp-c35fd-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-c35fd",
  storageBucket: "letschatwebapp-c35fd.appspot.com",
  messagingSenderId: "902605717576",
  appId: "1:902605717576:web:99a18118f01b2955c3187d",
  measurementId: "G-7CHQFJQYQJ"
};
 tag_holder = localStorage.getItem("tag_holder");

document.getElementById("tag_holder").innerHTML = "Welcome" + user_name + "!";
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" +Room_names+ " onclick='redirectToRoomName(this.id)'>#" +Room_names+ " </div> <hr>";
document.getElementById("output").innerHTML  += row;
  //End code
  });});}
getData();


function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}  
