const pricingForm = document.getElementById('pricingForm')
const onlineSelect = document.getElementById('online')
const offlineSelect = document.getElementById('offline')
const currencySelect = document.getElementById('currencySelect')
const livingSelect = document.getElementById('living')
const enrollmentFeesHTML = document.getElementById('enrollmentFees')
const transferFeesHTML = document.getElementById('transferFees')
const currency = document.getElementById('currency')
const currencyTransfer = document.getElementById('currencyTransfer')
const additionalFeesHTML = document.getElementById('additionalFees')
const currencyAdditional = document.getElementById('currencyAdditional')
const courseDurationSelect = document.getElementById('courseDuration')
const totalPriceHTML = document.getElementById('totalPrice')
const totalPriceCurrency = document.getElementById('totalPriceCurrency')
const calculateButton = document.getElementById('calculateButton')

// variables need for calculations
let totalPrice = 0,
	totalCourseHours = 0,
	enrollmentFees = 0,
	transferFees = 0,
	additionalFees = 0,
	onlineSelectCurrentValue = 0,
	offlineSelectCurrentValue = 0,
	currentCurrency = 'USD'

// currency selection dropdown
currencySelect.addEventListener('change', (event) => {
	currency.innerHTML = event.target.value
	currencyTransfer.innerHTML = event.target.value
	currencyAdditional.innerHTML = event.target.value
	totalPriceCurrency.innerHTML = event.target.value
	currentCurrency = event.target.value

	calculateTotalPrice()
})

// disable offline select if online selected
onlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		offlineSelect.disabled = true
		livingSelect.disabled = true

		enrollmentFeesHTML.innerHTML = 0
		additionalFeesHTML.innerHTML = 0

		// get a value from a string with course selection with the amount
		// of hours per week
		const value = event.target.value
		onlineSelectCurrentValue = +value.match(/\d+/gm)[0]

		calculateTotalPrice()
	} else {
		offlineSelect.disabled = false
		livingSelect.disabled = false
	}
})

// disable online select if offline selected
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
				transferFeesHTML.innerHTML = 50
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'

				enrollmentFees = 300
				transferFeesHTML = 50
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFeesHTML.innerHTML = 273
				transferFeesHTML.innerHTML = 45
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'

				enrollmentFees = 273
				transferFeesHTML = 45
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFeesHTML.innerHTML = 300
			transferFeesHTML.innerHTML = 50
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFeesHTML.innerHTML = 273
			transferFeesHTML.innerHTML = 45
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	} else {
		onlineSelect.disabled = false

		currencySelect.addEventListener('change', (event) => {
			currency.innerHTML = event.target.value

			if (currency.innerHTML === 'USD') {
				enrollmentFeesHTML.innerHTML = 0
				transferFeesHTML.innerHTML = 0
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFeesHTML.innerHTML = 0
				transferFeesHTML.innerHTML = 0
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFeesHTML.innerHTML = 0
			transferFeesHTML.innerHTML = 0
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFeesHTML.innerHTML = 0
			transferFeesHTML.innerHTML = 0
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	}
})

courseDurationSelect.addEventListener('change', (event) => {
	const value = event.target.value

	if (value === 'Short-term course lasting one month') {
		if (onlineSelectCurrentValue > 0) {
			totalCourseHours = onlineSelectCurrentValue * 4
		}

		if (offlineSelectCurrentValue > 0) {
			totalCourseHours = offlineSelectCurrentValue * 4
		}
	}

	if (value === 'Long-term course lasting two months') {
		if (onlineSelectCurrentValue > 0) {
			totalCourseHours = onlineSelectCurrentValue * 8
		}
		if (offlineSelectCurrentValue > 0) {
			totalCourseHours = offlineSelectCurrentValue * 8
		}
	}
})

calculateButton.addEventListener('click', (event) => {
	event.preventDefault()

	calculateTotalPrice()
})

// form change event
pricingForm.addEventListener('change', (event) => {
	calculateTotalPrice()
	totalPriceHTML.innerHTML = totalPrice
})

function calculateTotalPrice() {
	const currentCurrencyHourRate = currentCurrency === 'USD' ? 36 : 33

	totalPrice =
		totalCourseHours * currentCurrencyHourRate + enrollmentFees + additionalFees

	totalPriceHTML.innerHTML = totalPrice

	return totalPrice
}
