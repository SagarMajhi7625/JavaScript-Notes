let likeCount = localStorage.getItem("likeCount")
  ? Number(localStorage.getItem("likeCount"))
  : 0;
let dislikeCount = localStorage.getItem("dislikeCount")
  ? Number(localStorage.getItem("dislikeCount"))
  : 0;
console.log(likeCount);
console.log(dislikeCount);

function like() {
  likeCount++;
  localStorage.setItem("likeCount", likeCount);
  updateCounts();
}

function dislike() {
  dislikeCount++;
  localStorage.setItem("dislikeCount", dislikeCount);
  updateCounts();
}

window.onload = function () {
  updateCounts();
};

function updateCounts() {
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("dislikeCount").innerText = dislikeCount;
  document.getElementById("totalCount").innerText = likeCount + dislikeCount;
}
