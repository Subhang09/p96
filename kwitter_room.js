
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDOSK940WYkJd6D1SENfWwIUxn5NJ_T7WI",
    authDomain: "kwitter2-9f617.firebaseapp.com",
    databaseURL: "https://kwitter2-9f617-default-rtdb.firebaseio.com",
    projectId: "kwitter2-9f617",
    storageBucket: "kwitter2-9f617.appspot.com",
    messagingSenderId: "135170593057",
    appId: "1:135170593057:web:e0f622e4ba70f6fd242e60"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";
    function addRoom(){
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
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
