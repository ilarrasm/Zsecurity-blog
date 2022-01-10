function hamburguesa() {
  var element = document.getElementById("menu");
  element.classList.toggle("menuRes");
} 
function openNav() {
  document.getElementById("mySidenav").style.width = "22%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";

}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "flex") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "flex";
  }
  });
}
function userDrop() {
  document.getElementById("userDate").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("user-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}