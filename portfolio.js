function toggleReadMore() {
  var moreText = document.getElementById("more");
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  } else {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}