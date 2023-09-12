const backWoman = document.querySelector('#back-woman')
const nextWoman = document.querySelector('#next-woman')

const photosWoman = [
	'woman1.jpg',
	'woman2.jpg',
	'woman3.jpg',
	'woman4.jpg',
	'woman5.jpg',
]

console.log(photosWoman[5])

let w = 0

nextWoman.addEventListener('click', () => {
	w++
	if (w > photosWoman.length - 1) {
		w = 0
	}
	document.querySelector('#pictures-woman').src = photosWoman[w]
})

backWoman.addEventListener('click', () => {
	w--
	if (w < 0) {
		w = photosWoman.length - 1
	}
	document.querySelector('#pictures-woman').src = photosWoman[w]
})
