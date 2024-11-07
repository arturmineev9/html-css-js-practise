function getDogImg() {
const API_key = "live_gbZwCW6o8QqlIQYdMNIWukYusliEhmfUsgKdy5bWuC02OnvGhSd1OrcavuWAc2Lj"
fetch(`https://api.thedogapi.com/v1/images/search?&has_breeds=1&api_key=${API_key}`)
.then(response => response.json())
.then(data => {
  const imageUrl = data[0].url;
  document.getElementById("dog-img").src = imageUrl;
  document.getElementById("dog-img").alt = data[0].breeds[0].name || "Dog Image";
  document.getElementById("dog-info").textContent = data[0].breeds[0].name || "Dog Image";
})
}

document.getElementById('new-img').addEventListener('click', getDogImg);

getDogImg();