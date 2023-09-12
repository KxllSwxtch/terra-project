const backTravel = document.querySelector("#back-travel");
const nextTravel = document.querySelector("#next-travel");

const photosTravel = ["travel1.jpg", "travel2.jpg","travel3.jpg", "travel4.jpg", "travel5.jpg", "travel6.jpg", "travel7.jpg", "travel8.jpg" ];

console.log(photosTravel[5]);

let t = 0;

nextTravel.addEventListener("click", () => {
t++;
if (t  > photosTravel.length - 1) {
    t = 0;
}
document.querySelector("#pictures-travel").src = photosTravel[t];
})

backTravel.addEventListener("click", () => {
t --;
if (t < 0) {
  t = photosTravel.length - 1;
}
document.querySelector("#pictures-travel").src = photosTravel[t];
})