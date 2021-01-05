
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
};



function home() { 
  document.getElementById("sp").style.backgroundImage = "url(./img/2008FU145_top_Banner.jpg)";
};
function topic2() { 
  document.getElementById("sp").style.backgroundImage = "url(./img/FU145_topic2.jpg)";
};
function topic3() { 
  document.getElementById("sp").style.backgroundImage = "url(./img/FU145_topic3_896x504px.jpg)";
};

// Get the element with id="defaultOpen" and click on it
window.onload = function(e){ 
  document.getElementById("defaultOpen").click();
}    

