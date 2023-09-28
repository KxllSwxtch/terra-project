const questions = {
	// 10 questions
	A1: {
		'1. Кто это? (No picture needed, it is a grammatical question)': {
			choices: ['Это гитара', 'Это собака', 'Это машина', 'Это ручка'],
			correctAnswer: 'Это гитара',
			score: 1,
		},
		'2. Кто он? (No picture needed, it is a grammatical question)': {
			choices: ['Это мужчина', 'Он в магазине', 'Он музыкант', 'Он там'],
			correctAnswer: 'Он музыкант',
			score: 1,
		},
		'3. - Здравствуйте, … зовут Мария': {
			choices: ['меня', 'мне', 'я', 'мной'],
			correctAnswer: 'меня',
			score: 1,
		},
		'4. … есть компьютер? <br/> - Да, конечно.': {
			choices: ['тебе', 'о тебе', 'ты', 'у тебя'],
			correctAnswer: 'у тебя',
			score: 1,
		},
		'5. - Сколько … лет? <br/> - 33': {
			choices: ['вам', 'вы', 'вас', 'у вас'],
			correctAnswer: 'вам',
			score: 1,
		},
		'6. - … Вы? <br/> - Я из Америки.': {
			choices: ['где?', 'куда?', 'как?', 'откуда?'],
			correctAnswer: 'откуда?',
			score: 1,
		},
		'7. - Познакомьтесь, это … дедушка. <br/> - Очень приятно.': {
			choices: ['моя', 'мой', 'моё', 'мои'],
			correctAnswer: 'мой?',
			score: 1,
		},
		'8. - Вы … по-испански? <br/> - Да, говорю.': {
			choices: ['говорим', 'говоришь', 'говорите', 'говорит'],
			correctAnswer: 'говорите',
			score: 1,
		},
		'9. - Маша, ты … вчера в кино?': {
			choices: ['был', 'было', 'были', 'была'],
			correctAnswer: 'была',
			score: 1,
		},
		'10. Япония – очень … страна.': {
			choices: ['красиво', 'красивая', 'красив', 'красивый'],
			correctAnswer: 'красивая',
			score: 1,
		},
	},

	// 10 questions
	'A1+': {
		'11. Виктория работает в … (No picture needed, it is a grammatical question)':
			{
				choices: ['офисе', 'офис', 'офису', 'офиса'],
				correctAnswer: 'офисе',
				score: 1.1,
			},
		'12. - Что ты будешь есть?<br/> - Я буду …': {
			choices: ['овсяная каша', 'овсяной каши', 'овсяную кашу', 'овсяной каше'],
			correctAnswer: 'овсяную кашу',
			score: 1.1,
		},
		'13. - Можно мне, пожалуйста, 3 … воды и 5 … сахара.': {
			choices: [
				'литр, килограмм',
				'литров, килограмм',
				'литра, килограммов',
				'литры, килограммы',
			],
			correctAnswer: 'литра, килограммов',
			score: 1.1,
		},
		'14. Я обычно … в офис на автобусе.': {
			choices: ['иду', 'езжу', 'хожу', 'поеду'],
			correctAnswer: 'езжу',
			score: 1.1,
		},
		'15. Я вчера … на концерт.': {
			choices: ['была', 'хожу', 'буду', 'ходила'],
			correctAnswer: 'ходила',
			score: 1.1,
		},
		'16. Вчера мы были …': {
			choices: ['в балете', 'на балет', 'на балете', 'в балет'],
			correctAnswer: 'на балете',
			score: 1.1,
		},
		'17. - Куда ты … сейчас?<br/> - Домой.': {
			choices: ['идёшь', 'ходишь', 'шёл', 'ходил'],
			correctAnswer: 'идёшь',
			score: 1.1,
		},
		'18. Моя мама живет в … городе.': {
			choices: ['старой', 'старом', 'старым', 'старому'],
			correctAnswer: 'старом',
			score: 1.1,
		},
		'19. Фильм … в 19.00.': {
			choices: ['начинает', 'продолжается', 'продолжает', 'начинается'],
			correctAnswer: 'продолжает',
			score: 1.1,
		},
		'20. Я купила машину, но у меня ещё нет …': {
			choices: ['гараже', 'гараж', 'гаражу', 'гаража'],
			correctAnswer: 'гаража',
			score: 1.1,
		},
	},

	// 15 questions
	A2: {
		'21. Я пойду на работу … 5 минут.': {
			choices: ['через', 'после', 'в', 'за'],
			correctAnswer: 'через',
			score: 1.2,
		},
		'22. - Что ты сейчас читаешь?<br/> - ...': {
			choices: ['Чехов', 'Чехова', 'Чеховой', 'Чеховым'],
			correctAnswer: 'Чехова',
			score: 1.2,
		},
		'23. - На работе встреча. Ты сказал об этом …?': {
			choices: ['Ирина', 'Ирине', 'Ирину', 'Ириной'],
			correctAnswer: 'Ирине',
			score: 1.2,
		},
		'24. … друга зовут Вася.': {
			choices: ['Моего', 'Мой', 'Мою', 'Моему'],
			correctAnswer: 'Моего',
			score: 1.2,
		},
		'25. Моя тётя учитель. У нее на работе очень много ….': {
			choices: ['книгами', 'книгой', 'книги', 'книг'],
			correctAnswer: 'книг',
			score: 1.2,
		},
		'26. Я вчера весь вечер … книгу.': {
			choices: ['прочитал', 'читал'],
			correctAnswer: 'читал',
			score: 1.2,
		},
		'27. - Ты уже … продукты? У нас нет молока.<br/> - Нет еще.': {
			choices: ['покупал', 'купил'],
			correctAnswer: 'купил',
			score: 1.2,
		},
		'28. Я всегда … сестре на день рождения книги.': {
			choices: ['дарю', 'подарил'],
			correctAnswer: 'дарю',
			score: 1.2,
		},
		'29. Я обязательно … тебе завтра.': {
			choices: ['пишу', 'напишу', 'написал', 'писал'],
			correctAnswer: 'напишу',
			score: 1.2,
		},
		'30. Мой сосед раньше был …': {
			choices: ['солдат', 'солдатом', 'солдата', 'солдату'],
			correctAnswer: 'солдатом',
			score: 1.2,
		},
		'31. Я хочу, чтобы вы … это задание.': {
			choices: ['делаете', 'сделаете', 'сделали', 'будете делать'],
			correctAnswer: 'сделали',
			score: 1.2,
		},
		'32. Я часто встречаюсь …': {
			choices: [
				'мои коллеги',
				'у моих коллег',
				'с моими коллегами',
				'о моих коллегах',
			],
			correctAnswer: 'с моими коллегами',
			score: 1.2,
		},
		'33. - Где кошелёк?<br/> - Я положила его на столик … телевизора.': {
			choices: ['перед', 'под', 'в', 'у'],
			correctAnswer: 'у',
			score: 1.2,
		},
		'34. - Куда можно … пальто?<br/> - Вот сюда, в шкаф.': {
			choices: ['положить', 'повесить', 'поставить', 'посадить'],
			correctAnswer: 'повесить',
			score: 1.2,
		},
		'35. Я не поеду на природу, … погода будет плохой.': {
			choices: ['чтобы', 'поэтому', 'почему', 'если'],
			correctAnswer: 'если',
			score: 1.2,
		},
	},

	// 8 questions
	'A2+': {
		'36. Я не знаю, … мясо.': {
			choices: ['если он ест', 'если он ест', 'ест ли он', 'ест он'],
			correctAnswer: 'ест ли он',
			score: 1.3,
		},
		'37. - Добрый день. Я могу поговорить с Викторией?<br/> - Извините, она …. Будет через 10 минут.':
			{
				choices: ['пришла', 'ушла', 'вышла', 'зашла'],
				correctAnswer: 'вышла',
				score: 1.3,
			},
		'38. По дороге на работу я …. в магазин.': {
			choices: ['пошёл', 'вышел', 'зашёл', 'пришёл'],
			correctAnswer: 'зашёл',
			score: 1.3,
		},
		'39. - Он всегда … контактные линзы?<br/> - Нет, дома он ходит в очках.': {
			choices: ['несёт', 'носит', 'ходит', 'идёт'],
			correctAnswer: 'носит',
			score: 1.3,
		},
		'40. Мой друг живёт в Вене. Я люблю гулять, и он часто … меня по городу, когда я приезжаю.':
			{
				choices: ['водил', 'возит', 'водит', 'вёз'],
				correctAnswer: 'водит',
				score: 1.3,
			},
		'41. - Ты купил ноутбук, … мы с тобой говорили?<br/> - Нет, еще нет.': {
			choices: ['которому', 'с которым', 'о котором', 'о котором'],
			correctAnswer: 'о котором',
			score: 1.3,
		},
		'42. - Где ты был на прошлой неделе?<br/> - Я … в командировку и только в воскресенье вернулся.':
			{
				choices: ['переезжал', 'уехал', 'уезжал', 'выехал'],
				correctAnswer: 'уезжал',
				score: 1.3,
			},
		'43. - Ты смотрел этот сериал? Интересный?<br/> - Да, но он такой скучный, что я не … его.':
			{
				choices: ['смотрел', 'досмотрел', 'увидел', 'увижу'],
				correctAnswer: 'досмотрел',
				score: 1.3,
			},
	},

	// 8 questions
	B1: {
		'44. В воскресенье у меня день рождения. …, если сможешь.': {
			choices: ['Приходи', 'Приди'],
			correctAnswer: 'Приходи',
			score: 1.4,
		},
		'45. - Можно …?<br/> - Конечно, ….': {
			choices: [
				'войти - входите',
				'входи - войти',
				'входить - войдите',
				'войди - входить',
			],
			correctAnswer: 'войти - входите',
			score: 1.4,
		},
		'46. Не стоит … из-за этого. Все в порядке.': {
			choices: ['волноваться', 'заволноваться'],
			correctAnswer: 'волноваться',
			score: 1.4,
		},
		'47. …, я проехал свою станцию.': {
			choices: ['Заснувший', 'Заснул', 'Заснув', 'Заснувшийся'],
			correctAnswer: 'Заснув',
			score: 1.4,
		},
		'48. Здесь вы можете увидеть все изменения, … в режиме реального времени.':
			{
				choices: ['вносимых', 'внесённых', 'вносящие', 'вносимые'],
				correctAnswer: 'вносимые',
				score: 1.4,
			},
		'49. Сотрудник, … до тебя эту должность, оставил все необходимые документы в столе.':
			{
				choices: ['занимающийся', 'занимавшийся', 'занимавший', 'занимающий'],
				correctAnswer: 'занимавший',
				score: 1.4,
			},
		'50. - Вы уезжаете в отпуск? А где будет ваша собака?<br/> - Мы … ее к моим родителям.':
			{
				choices: ['занесли', 'принесли', 'отнесли', 'вынесли'],
				correctAnswer: 'отнесли',
				score: 1.4,
			},
		'51. Елена сегодня не пришла на урок. Она …': {
			choices: ['больно', 'больная', 'больна', 'болезненная'],
			correctAnswer: 'больна',
			score: 1.4,
		},
	},

	// 6 questions
	'B1+': {
		'52. Мы любим его …': {
			choices: [
				'из-за доброты',
				'благодаря доброте',
				'за доброту',
				'от доброты',
			],
			correctAnswer: 'за доброту',
			score: 1.5,
		},
		'53. Нужно убедиться, что ваша заявка зарегистрирована, … подавать жалобу.':
			{
				choices: ['в то время как', 'пока', 'прежде чем', 'после того как'],
				correctAnswer: 'прежде чем',
				score: 1.5,
			},
		'54. … надеюсь, что вы получите эту работу.': {
			choices: [
				'По всей видимости',
				'От всей души',
				'При всём моём желании',
				'К моему сожалению',
			],
			correctAnswer: 'От всей души',
			score: 1.5,
		},
		'55. - Ты поедешь на концерт в Париж?<br/> - Нет, у меня сейчас нет денег …':
			{
				choices: ['за билеты', 'билетов', 'на билеты', 'билетами'],
				correctAnswer: 'на билеты',
				score: 1.5,
			},
		'56. Подъезжая к станции, …': {
			choices: [
				'у меня слетела шляпа',
				'ветер снёс мою шляпу',
				'я понял, что потерял шляпу',
				'моя шляпа улетела',
			],
			correctAnswer: 'я понял, что потерял шляпу',
			score: 1.5,
		},
		'57. … мы тоже ходили гулять каждые выходные.': {
			choices: ['Когда-нибудь', 'Когда-либо', 'Когда-либо', 'Когда-то'],
			correctAnswer: 'Когда-то',
			score: 1.5,
		},
	},

	// 4 questions
	B2: {
		'58. Я живу в маленьком скучном городе. Здесь по вечерам … пойти.': {
			choices: ['нигде', 'негде', 'никуда', 'некуда'],
			correctAnswer: 'некуда',
			score: 1.6,
		},
		'59. У студента такой тихий голос, что тяжело …, что он говорит.': {
			choices: ['подслушать', 'прислушаться', 'вслушиваться', 'расслышать'],
			correctAnswer: 'расслышать',
			score: 1.6,
		},
		'60. У нее богатая фантазия, она любит … истории.': {
			choices: ['подумать', 'придумать', 'выдумывать', 'передумать'],
			correctAnswer: 'выдумывать',
			score: 1.6,
		},
		'61. Зачем ты … меня сюда? Я здесь никого не знаю.': {
			choices: ['приполз', 'погнал', 'притащил', 'угнал'],
			correctAnswer: 'притащил',
			score: 1.6,
		},
	},

	// 4 questions
	'B2+': {
		'62. … я люблю походы, … моя жена их ненавидит.': {
			choices: [
				'сколько - столько',
				'ни - ни',
				'то - то',
				'насколько - настолько',
			],
			correctAnswer: 'насколько - настолько',
			score: 1.7,
		},
		'63. - У меня совсем нет сил, я очень устала.<br/> - Думаю, тебе … взять отпуск':
			{
				choices: ['вынуждена', 'следует', 'обязана', 'положен'],
				correctAnswer: 'следует',
				score: 1.7,
			},
		'64. … пяти минут, как он вернулся.': {
			choices: [
				'не прошло и',
				'как только прошло',
				'прошло лишь',
				'по мере того как прошло',
			],
			correctAnswer: 'не прошло и',
			score: 1.7,
		},
		'65. - Давай пойдем на выставку после обеда?<br/>  - Прости, я сегодня не в …':
			{
				choices: ['настроении', 'состоянии', 'восторге', 'восторге'],
				correctAnswer: 'настроении',
				score: 1.7,
			},
	},
}

// display questions on the page
const objectToHTMLWithInputs = (questionsObj) => {
	let html = '<form id="onlineTestForm">'

	// add email and name inputs
	html += `
		<div style="margin-bottom: 8px;">
			<label class='onlineTestLabel' for="onlineTestName">Your name:</label>
			<input
				name="userName"
				id="userName"
				type="text"
				required
				placeholder="Enter your name"
			/>
			<br />
		</div>
	`

	html += `
		<label class='onlineTestLabel' for="resultsEmail">Enter Email to Receive Test Results:</label>
		<input id="userEmail" type="email" name="email" required placeholder='Enter your email' />
	`

	for (const key in questionsObj) {
		if (questionsObj.hasOwnProperty(key)) {
			html += `<h4 class='levelTitle'>Questions for level: ${key}</h4>`

			const actualQuestions = questions[key]

			for (const questionKey in actualQuestions) {
				html += `
					<label 
						class='onlineTestLabel'  
						style="margin-bottom: -4px; display: block;" 
						for="${questionKey}"
					>
						${questionKey}
					</label>
					<br/>
				`

				for (let choice of actualQuestions[questionKey].choices) {
					html += `
						<input 
							required 
							type="radio" 
							id="${choice}" 
							name="${questionKey}" 
							value="${choice}" 
						/>
					`
					html += ` <label class='onlineTestLabel' style='font-weight: 400;' for=${choice}>${choice}</label> <br />`
				}

				html += `<br /><br />`
			}

			html += `<br />`
		}
	}
	html += `
			<input id="submitAnswersButton" type="submit" value="Submit" />
		</form>
	`

	return html
}

// Get the container element and set its innerHTML to the HTML representation of the object
const questionsContainer = document.querySelector('.onlinetest__questions')
questionsContainer.innerHTML = objectToHTMLWithInputs(questions)

const onlineTestForm = document.getElementById('onlineTestForm')

// for collecting information
let totalScore = 0,
	userNameInput = document.getElementById('userName'),
	userEmailInput = document.getElementById('userEmail'),
	userName = '',
	userEmail = ''

// handle userName and userEmail changes
userNameInput.addEventListener('change', (event) => {
	userName = event.target.value
})
userEmailInput.addEventListener('change', (event) => {
	userEmail = event.target.value
})

// handle radio buttons click
onlineTestForm.addEventListener('change', (event) => {
	for (let key in questions) {
		const level = questions[key]

		for (let questionTitle in level) {
			if (questionTitle === event.target.name) {
				const correctAnswer = level[questionTitle].correctAnswer
				const userAnswer = event.target.value

				if (userAnswer === correctAnswer)
					totalScore += level[questionTitle].score
			}
		}
	}
})

onlineTestForm.addEventListener('submit', (event) => {
	event.preventDefault()

	console.log(userName, userEmail, Math.floor(totalScore))

	const a1Level = totalScore >= 0 && totalScore <= 10
	const a2Level = totalScore >= 10.1 && totalScore <= 39
	const b1Level = totalScore >= 39.1 && totalScore <= 60.6
	const b2Level = totalScore >= 60.7 && totalScore <= 76
	const c1Level = totalScore >= 76.1 && totalScore <= 82.8

	const levelText = a1Level
		? 'Based on your results we recommend courses and activities at A1 Russian level (elementary)'
		: a2Level
		? 'Based on your results we recommend courses and activities at A2 Russian level (pre-intermediate)'
		: b1Level
		? 'Based on your results we recommend courses and activities at B1 Russian level (intermediate)'
		: b2Level
		? 'Based on your results we recommend courses and activities at B1 Russian level (intermediate)'
		: 'Based on your results we recommend courses and activities at C1 Russian level (advanced)'

	window.alert(
		`Your score is: ${Math.floor(
			totalScore
		)}. \n\n${levelText}. \n\nThe Copy of the test and result will be sent to your email.`
	)

	const emailText = `
Online Test Results for ${userName}.
Total Score: ${Math.floor(totalScore)}.
${levelText}
`

	// send test to email using sendgrid
	const apiURL = 'https://api.sendgrid.com/v3/mail/send'
	const emailData = {
		personalizations: [
			{
				to: [{ email: userEmail }],
				subject: 'Test Results',
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
				alert('Test Results Have Been Submitted!')
			} else {
				alert('Error Submitting Results')
			}
		})
		.catch((error) => console.error(`Error sending results: ${error}`))
})
