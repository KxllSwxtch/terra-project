const backCuisine = document.querySelector("#back-cuisine");
const nextCuisine = document.querySelector("#next-cuisine");

const photosCuisine = ["russianCuisine1.jpg", "russianCuisine2.jpg", "russianCuisine3.jpg", "russianCuisine4.jpg", "russianCuisine5.jpg"];

console.log(photosCuisine[4]);

let index = 0;

nextCuisine.addEventListener("click", () => {
index ++;
if (index  > photosCuisine.length - 1) {
    index  = 0;
}
document.querySelector("#pictures-cuisine").src = photosCuisine[index];
})

backCuisine.addEventListener("click", () => {
index --;
if (index < 0) {
  index = photosCuisine.length - 1;
}
document.querySelector("#pictures-cuisine").src = photosCuisine[index];
})