// let formEl = document.getElementById('addUserForm');
// let nameEl = document.getElementById("name");
// let emailEl = document.getElementById("email");
// let emailErrMsg = document.getElementById("emailErrMsg");
// let nameErrMsg = document.getElementById("nameErrMsg");

// formEl.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// nameEl.addEventListener("blur", function() {
//     if (nameEl.value === "") {
//         nameErrMsg.textContent = "Required*";
//     } else {
//         nameErrMsg.textContent = "";
//     }

// });
// emailEl.addEventListener("blur", function() {
//     if (emailEl.value === "") {
//         emailErrMsg.textContent = "Required*";
//     } else {
//         emailErrMsg.textContent = "";
//     }
// })

// let userID = document.getElementById('txt-input');
// let password = document.getElementById('pwd');
// let loginBtn = document.getElementById('loginbuttion');
// let waitsometime=document.getElementById('waitsometime');
// let outputuserid= document.getElementById('outputuserid');
// let outputpass = document.getElementById('outputpass');

// loginBtn.onclick = function()
//      {
//           let inputValue = userID.value;
//           let message = `hi ${inputValue} your data is created..`;
//           outputuserid.textContent = message;
//           let main = password.value;
//           let secondMessage = `dear this is ["${main}"] password..` ;
//           outputpass.textContent = secondMessage;
//           waitsometime.textContent = 'wait some time';
//           window.location.href="file:///D:/loyola/new%20loyola%20fee%20project/showing.html";
//      }



// loginBtn.addEventListener("submit", function(event) {
//     event.preventDefault();
//     console.log(city);
//     if ( === "") {
//         resultEl.textContent = "Please select the answer";
//     } else {
//         resultEl.textContent = "";
//         if (city === "Delhi") {
//             resultEl.textContent = "Correct answer";
//             resultEl.style.color = "green";
//         } else {
//             resultEl.textContent = "Wrong answer!";
//             resultEl.style.color = "red";
//         }

//     }
// });

// Function to get the current date and time
function getCurrentDateAndTime() {
     const dateTime = new Date();
     return dateTime.toLocaleString();
   }
   
// Target an HTML element to display the current date and time
const dateDisplay = document.getElementById("date-container");
   
// Set the innerHTML of the element to the current date and time returned by the function
dateDisplay.innerHTML = getCurrentDateAndTime();



 

 
function filter() {
  let value = document.getElementById("searchInput").value.toUpperCase();
  var names = document.getElementById("names");
  var rows = names.getElementsByTagName("tr");

  for (i = 0; i < rows.length; i++) {
    let column = rows[i].getElementsByTagName("td")[2];
    let language = column.textContent;

    rows[i].style.display =
      language.toUpperCase().indexOf(value) > -1 ? "" : "none";
  }
}
document.getElementById("searchInput").addEventListener("keyup", filter);