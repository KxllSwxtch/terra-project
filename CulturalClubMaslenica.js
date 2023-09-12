const back = document.querySelector("#back-maslenica");
const next = document.querySelector("#next-maslenica");

const photosMaslenica = ["maslenica1.jpg", "maslenica2.jpg", "maslenica3.jpg", "maslenica4.jpg", "maslenica5.jpg","maslenica6.jpg", "Navruz1.jpg","Navruz2.jpg", "Navruz3.jpg" ];

console.log(photosMaslenica[8]);

let i = 0;

next.addEventListener("click", () => {
i++;
if (i > photosMaslenica.length - 1) {
  i = 0;
}
document.querySelector("#pictures-maslenica").src = photosMaslenica[i];
})

back.addEventListener("click", () => {
i--;
if (i < 0) {
  i = photosMaslenica.length - 1;
}
document.querySelector("#pictures-maslenica").src = photosMaslenica[i];
})