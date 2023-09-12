const backWedding = document.querySelector('#back-wedding')
const nextWedding = document.querySelector('#next-wedding')

const photosWedding = [
	'wedding1.jpg',
	'wedding4.jpg',
	'wedding5.jpg',
	'wedding6.jpg',
	'wedding7.jpg',
]

console.log(photosWedding[5])

let j = 0

nextWedding.addEventListener('click', () => {
	j++
	if (j > photosWedding.length - 1) {
		j = 0
	}
	document.querySelector('#pictures-wedding').src = photosWedding[j]
})

backWedding.addEventListener('click', () => {
	j--
	if (j < 0) {
		j = photosWedding.length - 1
	}
	document.querySelector('#pictures-wedding').src = photosWedding[j]
})
