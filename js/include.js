function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*kijkt door alle elementen*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*kijkt of het element een w3_include atribuut heeft*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*maakt een http aanvraag*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*haalt het atribuut weg voor geen errors*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*einde functie*/
      return;
    }
  }
};