const backWinter = document.querySelector("#back-winter");
const nextWinter = document.querySelector("#next-winter");

const photosWinter = ["winter1.jpg", "winter2.jpg"];

console.log(photosWinter[3]);

let w = 0;

nextWinter.addEventListener("click", () => {
w++;
if (w > photosWinter.length - 1) {
  w = 0;
}
document.querySelector("#pictures-winter").src = photosWinter[w];
})

backWinter.addEventListener("click", () => {
w--;
if (w < 0) {
  w = photosWinter.length - 1;
}
document.querySelector("#pictures-winter").src = photosWinter[w];
})