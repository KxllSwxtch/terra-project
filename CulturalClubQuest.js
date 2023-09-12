const backQuest = document.querySelector('#back-quest')
const nextQuest = document.querySelector('#next-quest')

const photosQuest = ['quest1.jpg', 'quest2.jpg', 'quest3.jpg']

console.log(photosQuest[3])

let q = 0

nextQuest.addEventListener('click', () => {
	q++
	if (q > photosQuest.length - 1) {
		q = 0
	}
	document.querySelector('#pictures-quest').src = photosQuest[q]
})

backQuest.addEventListener('click', () => {
	q--
	if (q < 0) {
		q = photosQuest.length - 1
	}
	document.querySelector('#pictures-quest').src = photosQuest[q]
})
