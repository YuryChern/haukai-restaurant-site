function GCal() {
  window.open(
    "calendar.html",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400, left=200%, top=200%"
  );
}
function GMap() {
  window.open(
    "map.html",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,width=400,height=400, left=200%, top=200%"
  );
}
function privacy() {
  window.open(
    "privacy.html",
    "Privacy Statement",
    "toolbar=no,scrollbars=yes,resizable=yes,width=600,height=800,top=200%, left=200%"
  );
}
function staff() {
  window.open(
    "private/private.html",
    "Staff Roster",
    "toolbar=no,scrollbars=yes,resizable=yes,width=800,height=600,top=200%, left=200%"
  );
}
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}