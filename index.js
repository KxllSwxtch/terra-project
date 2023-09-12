const back = document.querySelector('#back-main')
const next = document.querySelector('#next-main')

const photosMain = [
	'main0.jpg',
	'main1.jpg',
	'main2.jpg',
	'main3.jpg',
	'main4.jpg',
	'main5.jpg',
	'main6.jpg',
	'main7.jpg',
	'main8.jpg',
	'main9.jpg',
	'main10.jpg',
	'main11.jpg',
]

console.log(photosMain[11])

let i = 0

next.addEventListener('click', () => {
	i++
	if (i > photosMain.length - 1) {
		i = 0
	}
	document.querySelector('#pictures-main').src = photosMain[i]
})

back.addEventListener('click', () => {
	i--
	if (i < 0) {
		i = 0
		i = photosMain.length - 1
	}
	document.querySelector('#pictures-main').src = photosMain[i]
})
