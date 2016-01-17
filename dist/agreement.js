function agreement() {
  var showme = document.getElementById("agreement");

  if (showme.style['visibility'] == 'hidden') {
    showme.style.visibility = "visible";
    showme.style.display = "inline";
  } else {
    showme.style.visibility = "hidden";
    showme.style.display = "none";
  }
}
