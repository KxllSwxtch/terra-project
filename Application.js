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

	applicationObject[event.target.name] = event.target.value
})

applicationForm.addEventListener('submit', (event) => {
	event.preventDefault()
	console.log(applicationObject)

	const apiURL = 'https://api.sendgrid.com/v3/mail/send'
	const name = applicationObject['First Name']
	const email = applicationObject['Email']

	const emailText = `
Application for ${name},

1. Destination: ${applicationObject['Destination']}
2. Type of courses: ${applicationObject['Type of courses']}
3. Current Russian Language Skills: ${
		applicationObject['Current Russian Language Skills']
	}
4. Duration of courses: ${applicationObject['Duration of Courses']}
5. Start Month: ${applicationObject['Start Month']}
6. First Name:  ${applicationObject['First Name']}
7. Last Name: ${applicationObject['Last Name']}
8. Gender: ${applicationObject['Gender']}
9. Date of Birth: ${applicationObject['Birth Date']}
10. Citizenship: ${applicationObject['Citizenship']}
11. Country of permanent residence: ${
		applicationObject['Country of permanent residence']
	}
12. Job Place: ${applicationObject['Job Place']}
13. Job Position: ${applicationObject['Job Position']}
14. Mobile phone/whatsapp: ${applicationObject['Mobile Phone']}
15. Email: ${applicationObject['Email']}
16. Native Language: ${applicationObject['Native Language']}
17. Other Languages: ${JSON.stringify(applicationObject['Other Languages'])}
18. Target Proficiency: ${JSON.stringify(
		applicationObject['Target Proficiency']
	)}
19. Essential Skills: ${JSON.stringify(applicationObject['Essential Skills'])}
20. Special Vocabulary Requirements: ${
		applicationObject['Special Vocabulary Requirements']
	}
21. Residence Options: ${applicationObject['Residence Options']}
22. Residence Start Date: ${applicationObject['Residence Start Date']}
23. Residence End Date: ${applicationObject['Residence End Date']}
24. Special Dietary Needs: ${applicationObject['Special Dietary Needs']}
25. Allergies: ${applicationObject['Allergies']}
26. Allergies Specifications: ${applicationObject['Allergies Specifications']}
27. Ability to live with pets: ${applicationObject['Ability to live with pets']}
28. Family Preferences: ${applicationObject['Family Preferences']}
29. Smoker: ${applicationObject['Smoker']}
30. Special Hobbies: ${applicationObject['Special Hobbies']}
31. Reasonable Adjustments: ${applicationObject['Reasonable Adjustments']}	
`

	// TODO: CHANGE FROM EMAIL TO TERRA
	// TODO: CHANGE BEARER TOKEN TO TERRA TOKEN
	const emailData = {
		personalizations: [
			{
				to: [{ email: 'dimashin9@gmail.com' }],
				subject: 'Application Results',
			},
		],
		from: { email: 'dmitriy.programmer.io@gmail.com' },
		content: [
			{
				type: 'text/plain',
				value: emailText,
			},
		],
	}

	fetch(apiURL, {
		method: 'POST',
		headers: {
			Authorization:
				'BEARER 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',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(emailData),
	})
		.then((response) => {
			if (response.ok) {
				alert('Application Results Have Been Submitted')
			} else {
				alert('Error Submitting Results')
			}
		})
		.catch((error) => console.error(`Error sending results: ${error}`))
})
