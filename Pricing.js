const pricingForm = document.getElementById('pricingForm')
const onlineSelect = document.getElementById('online')
const offlineSelect = document.getElementById('offline')
const currencySelect = document.getElementById('currencySelect')
const enrollmentFees = document.getElementById('enrollmentFees')
const transferFees = document.getElementById('transferFees')
const currency = document.getElementById('currency')
const currencyTransfer = document.getElementById('currencyTransfer')

currencySelect.addEventListener('change', (event) => {
	currency.innerHTML = event.target.value
	currencyTransfer.innerHTML = event.target.value
})

// disable offline select if online selected
onlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		offlineSelect.disabled = true
		enrollmentFees.innerHTML = 0
	} else {
		offlineSelect.disabled = false
	}
})

// disable online select if offline selected
offlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		onlineSelect.disabled = true

		currencySelect.addEventListener('change', (event) => {
			currency.innerHTML = event.target.value
			currencyTransfer.innerHTML = event.target.value

			if (currency.innerHTML === 'USD') {
				enrollmentFees.innerHTML = 300
				transferFees.innerHTML = 50
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFees.innerHTML = 273
				transferFees.innerHTML = 45
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFees.innerHTML = 300
			transferFees.innerHTML = 50
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFees.innerHTML = 273
			transferFees.innerHTML = 45
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	} else {
		onlineSelect.disabled = false

		currencySelect.addEventListener('change', (event) => {
			currency.innerHTML = event.target.value

			if (currency.innerHTML === 'USD') {
				enrollmentFees.innerHTML = 0
				transferFees.innerHTML = 0
				currency.innerHTML = 'USD'
				currencyTransfer.innerHTML = 'USD'
			} else if (currency.innerHTML === 'EUR') {
				enrollmentFees.innerHTML = 0
				transferFees.innerHTML = 0
				currency.innerHTML = 'EUR'
				currencyTransfer.innerHTML = 'EUR'
			}
		})

		if (currency.innerHTML === 'USD') {
			enrollmentFees.innerHTML = 0
			transferFees.innerHTML = 0
			currency.innerHTML = 'USD'
			currencyTransfer.innerHTML = 'USD'
		} else if (currency.innerHTML === 'EUR') {
			enrollmentFees.innerHTML = 0
			transferFees.innerHTML = 0
			currency.innerHTML = 'EUR'
			currencyTransfer.innerHTML = 'EUR'
		}
	}
})

// form submission
pricingForm.addEventListener('change', (event) => {
	console.log(event.target.name)
})
