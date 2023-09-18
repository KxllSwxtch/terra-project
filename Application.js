const applicationForm = document.getElementById('applicationForm')

// this object collects all data from the application form
const applicationObject = {}

// handle checkbox event
applicationForm.addEventListener('click', (event) => {
	// target proficiency checkboxes
	const targetProficiencyCheckboxes = document.querySelectorAll(
		'input[name="Target Proficiency"]:checked'
	)
	const targetProficiencySelectedValues = []
	for (const targetProficiencyCheckbox of targetProficiencyCheckboxes)
		targetProficiencySelectedValues.push(targetProficiencyCheckbox.value)

	// essential skills checkboxes
	const essentialSkillsCheckboxes = document.querySelectorAll(
		'input[name="Essential Skills"]:checked'
	)
	const essentialSkillsSelectedValues = []
	for (const essentialSkillsCheckbox of essentialSkillsCheckboxes)
		essentialSkillsSelectedValues.push(essentialSkillsCheckbox.value)

	// add to applicaiton object
	applicationObject['Target Proficiency'] = targetProficiencySelectedValues
	applicationObject['Essential Skills'] = essentialSkillsSelectedValues
})

// handle change event
applicationForm.addEventListener('change', (event) => {
	console.log(event.target.name, event.target.value)

	if (event.target.type !== 'radio') {
		// write to the application object
		applicationObject[event.target.name] = event.target.value
	}
})

applicationForm.addEventListener('submit', (event) => {
	event.preventDefault()
	console.log(applicationObject)
})
