function openLetter() {
  document.getElementById("envelopeScreen").style.opacity = "0";

  setTimeout(() => {
    document.getElementById("envelopeScreen").style.display = "none";

    const letter = document.getElementById("letterScreen");
    letter.style.visibility = "visible";
    letter.style.opacity = "1";
  }, 1000);
}

function valentineYes() {
  document.getElementById("yesMessage").style.display = "block";
}
