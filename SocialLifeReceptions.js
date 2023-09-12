const backReceptions = document.querySelector("#back-receptions");
const nextReceptions = document.querySelector("#next-receptions");

const photosReceptions = ["receptions1.jpg", "receptions2.jpg", "receptions3.jpg", "receptions4.jpg" ];

console.log(photosReceptions[4]);

let r = 0;

nextReceptions.addEventListener("click", () => {
r++;
if (r > photosReceptions.length - 1) {
  r = 0;
}
document.querySelector("#pictures-receptions").src = photosReceptions[r];
})

backReceptions.addEventListener("click", () => {
r--;
if (r < 0) {
  r = photosReceptions.length - 1;
}
document.querySelector("#pictures-receptions").src = photosReceptions[r];
})