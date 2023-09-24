const pricingForm = document.getElementById('pricingForm')
const onlineSelect = document.getElementById('online')
const offlineSelect = document.getElementById('offline')
const currencySelect = document.getElementById('currencySelect')
const livingSelect = document.getElementById('living')
const enrollmentFees = document.getElementById('enrollmentFees')
const transferFees = document.getElementById('transferFees')
const currency = document.getElementById('currency')
const currencyTransfer = document.getElementById('currencyTransfer')
const additionalFees = document.getElementById('additionalFees')
const currencyAdditional = document.getElementById('currencyAdditional')

currencySelect.addEventListener('change', (event) => {
	currency.innerHTML = event.target.value
	currencyTransfer.innerHTML = event.target.value
	currencyAdditional.innerHTML = event.target.value
})

// disable offline select if online selected
onlineSelect.addEventListener('change', (event) => {
	if (event.target.value !== 'default') {
		offlineSelect.disabled = true
		livingSelect.disabled = true

		enrollmentFees.innerHTML = 0
		additionalFees.innerHTML = 0
	} else {
		offlineSelect.disabled = false
		livingSelect.disabled = false
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

// form change event
pricingForm.addEventListener('change', (event) => {
	console.log(event.target.name)
})
