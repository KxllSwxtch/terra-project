const backCharity = document.querySelector("#back-charity");
const nextCharity = document.querySelector("#next-charity");

const photosCharity = ["charity1.jpg", "charity2.jpg","charity3.jpg"];

console.log(photosCharity[3]);

let s = 0;

nextCharity.addEventListener("click", () => {
s++;
if (s > photosCharity.length - 1) {
  s = 0;
}
document.querySelector("#pictures-charity").src = photosCharity[s];
})

backCharity.addEventListener("click", () => {
s--;
if (s < 0) {
  s = photosCharity.length - 1;
}
document.querySelector("#pictures-charity").src = photosCharity[s];
})