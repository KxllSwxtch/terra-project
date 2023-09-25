const pricingForm = document.getElementById('pricingForm')
const onlineSelect = document.getElementById('online')
const offlineSelect = document.getElementById('offline')
const currencySelect = document.getElementById('currencySelect')
const livingSelect = document.getElementById('living')
const enrollmentFeesHTML = document.getElementById('enrollmentFees')
const transferFees = document.getElementById('transferFees')
const currency = document.getElementById('currency')
const currencyTransfer = document.getElementById('currencyTransfer')
const additionalFees = document.getElementById('additionalFees')
const currencyAdditional = document.getElementById('currencyAdditional')
const courseDurationSelect = document.getElementById('courseDuration')
const totalPriceHTML = document.getElementById('totalPrice')

currencySelect.addEventListener('change', (event) => {
	currency.innerHTML = event.target.value
	currencyTransfer.innerHTML = event.target.value
	currencyAdditional.innerHTML = event.target.value
})

// disable offline select if online selected
let onlineSelectCurrentValue = 0
onlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		offlineSelect.disabled = true
		livingSelect.disabled = true

		enrollmentFeesHTML.innerHTML = 0
		additionalFees.innerHTML = 0

		// get a value from a string with course selection with the amount
		// of hours per week
		const value = event.target.value
		onlineSelectCurrentValue = +value.match(/\d+/gm)[0]
	} else {
		offlineSelect.disabled = false
		livingSelect.disabled = false
	}
})

// disable online select if offline selected
let offlineSelectCurrentValue = ''
offlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		onlineSelect.disabled = true

		const value = event.target.value
		offlineSelectCurrentValue = +value.match(/\d+/gm)[0]

		currencySelect.addEventListener('change', (event) => {
			currency.innerHTML = event.target.value
			currencyTransfer.innerHTML = event.target.value

			if (currency.innerHTML === 'USD') {
				enrollmentFeesHTML.innerHTML = 300
				transferFees.innerHTML = 50
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFeesHTML.innerHTML = 273
				transferFees.innerHTML = 45
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFeesHTML.innerHTML = 300
			transferFees.innerHTML = 50
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFeesHTML.innerHTML = 273
			transferFees.innerHTML = 45
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	} else {
		onlineSelect.disabled = false

		currencySelect.addEventListener('change', (event) => {
			currency.innerHTML = event.target.value

			if (currency.innerHTML === 'USD') {
				enrollmentFeesHTML.innerHTML = 0
				transferFees.innerHTML = 0
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFeesHTML.innerHTML = 0
				transferFees.innerHTML = 0
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFeesHTML.innerHTML = 0
			transferFees.innerHTML = 0
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFeesHTML.innerHTML = 0
			transferFees.innerHTML = 0
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	}
})

let totalCourseHours = 0,
	totalPrice = 0
courseDurationSelect.addEventListener('change', (event) => {
	const value = event.target.value

	if (value === 'Short-term course lasting one month') {
		totalCourseHours = onlineSelectCurrentValue * 4
	}

	if (value === 'Long-term course lasting two months') {
		totalCourseHours = offlineSelectCurrentValue * 16
	}
})

// form change event
pricingForm.addEventListener('change', (event) => {
	// totalPrice = totalCourseHours + enrollmentFeesHTML + additionalFees
	console.log(totalPrice)
	totalPriceHTML.innerHTML = totalPrice
})
