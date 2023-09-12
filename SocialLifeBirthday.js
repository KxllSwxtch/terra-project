const backBirthday = document.querySelector("#back-birthday");
const nextBirthday = document.querySelector("#next-birthday");

const photosBirthday = ["birthday1.JPG", "birthday2.jpg","birthday3.jpg"];

console.log(photosBirthday[3]);

let b = 0;

nextBirthday.addEventListener("click", () => {
b++;
if (b > photosBirthday.length - 1) {
  b = 0;
}
document.querySelector("#pictures-birthday").src = photosBirthday[b];
})

backBirthday.addEventListener("click", () => {
b--;
if (b < 0) {
  b = photosCharity.length - 1;
}
document.querySelector("#pictures-birthday").src = photosBirthday[b];
})