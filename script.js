const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]

function cleanUpIndex() {
    let mainClassElem = document.querySelector('.main')
    
    while (mainClassElem.firstChild) {
		mainClassElem.removeChild(mainClassElem.firstChild)
	}
}

function createSingleIndex(contact) {
	let link = document.createElement('a')
	link.href = "page3.html"

	let div = document.createElement('div')
	div.className = 'contact'
	let text = document.createTextNode(`${contact.name}`)
	div.appendChild(text)

	link.appendChild(div)

	link.addEventListener('click', (evt) => {
		evt.preventDefault()
		console.log(evt.target)
		contactName = evt.target.innerHTML
		for (let i = 0; i < contactList.length; i++) {
			if (contactList[i].name == contactName) {
				cleanUpIndex()
				renderView(contactList[i])
			}
		}
	})

	return link
}

function renderIndex(contactList) {
    let mainClassElem = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        mainClassElem.appendChild(createSingleIndex(contactList[i]))
    }
}

function cleanUpCreate() {
    let mainClassElem = document.querySelector('.main')
    
    while (mainClassElem.firstChild) {
		mainClassElem.removeChild(mainClassElem.firstChild)
	}
}

function renderCreate() {
    let mainClassElem = document.querySelector('.main')
    
    let inputTypeList = ['text', 'tel', 'text', 'email']
    let placeholderList = ['Name', 'Phone', 'Address', 'Email']
	let fieldTypeList = placeholderList.slice(0)

	for (let i = 0; i < fieldTypeList.length; i++) (
		fieldTypeList[i] = fieldTypeList[i].toLowerCase()
	)

    let inputContainerList = []

	for (let i = 0; i < 4; i++) {
		inputContainerList[i] = 
		`<div class="inputcontainer">
			<input type="${inputTypeList[i]}" id="contact${fieldTypeList[i]}" name="contact${fieldTypeList[i]}" placeholder="Contact ${placeholderList[i]}">
			<button class="extrafield" id="extra${fieldTypeList[i]}field" name="extra${fieldTypeList[i]}field">+</button>
		</div>`
	}

	let contactEditNode = 
	`<div class="contactedit">
		<div class="contactimg">
			<img src="./img/profile.jpg" class ="profilepic" alt="Profile picture">
		</div>
		<div class="form">
			<form>
			</form>
		</div>	
	</div>`

	mainClassElem.insertAdjacentHTML('afterbegin', contactEditNode)

	let formContent = document.querySelector('form')

	for (let i = 0; i < inputContainerList.length; i++) {
		formContent.innerHTML += inputContainerList[i]
	}

	let page2ButtonHTML = 
	`<div class="buttons">
		<button type="submit" class="button save" id="savecontact" name="savecontact">Save Contact</button>
		<button type="reset" class="button cancel" id="cancel" name="cancel">Cancel</button>
	</div>`

	formContent.insertAdjacentHTML('beforeend', page2ButtonHTML)

	
	document.querySelector('#cancel').addEventListener('click', clearRenderIndex)
}

function cleanUpView() {
	let mainClassElem = document.querySelector('.main')

	while (mainClassElem.firstChild) {
		mainClassElem.removeChild(mainClassElem.firstChild)
	}
}

function renderView(contact) {
	let mainClassElem = document.querySelector('.main')

    let paramList = ['name', 'email', 'phone', 'address']

    let fieldNodes = []

    fieldNodes.push(`<div class="contact${paramList[0]}">${contact[paramList[0]]}</div>`)

    for (let i = 1; i < 4; i++) {
        toAdd = `<div class="contact${paramList[i]}">${paramList[i]}: ${contact[paramList[i]]}</div>`
        fieldNodes.push(toAdd)
    }

    let buttonsNode = 
    `<div class="buttons">
        <button class="button edit" value="Edit">Edit</button>
        <button class="button close" value="Close">Close</button>
    </div>`	

    let imageNode = `<img src="./img/profile.jpg" class="profilepic" alt="Profile picture">`

    mainClassElem.insertAdjacentHTML('afterbegin', `<div class='contactinfo'></div>`)

    let contactInfoElem = document.querySelector('.contactinfo')
    for (let i = 0; i < 4; i++) {
        contactInfoElem.insertAdjacentHTML('beforeend', fieldNodes[i])
    }
    contactInfoElem.insertAdjacentHTML('beforeend', buttonsNode)
    
    document.querySelector('.contactname').insertAdjacentHTML('beforeend', imageNode)

	document.querySelector('.button.close').addEventListener('click', clearRenderIndex)
}


function clearRenderIndex(evt) {
	evt.preventDefault()
	console.log(evt.target)
	cleanUpIndex()
	renderIndex(contactList)
}

document.querySelector('#contactshome').addEventListener('click', clearRenderIndex)

function clearRenderCreate(evt) {
	evt.preventDefault()
	cleanUpCreate()
	renderCreate()
}

document.querySelector('#newcontact').addEventListener('click', clearRenderCreate)

document.querySelector('.button.edit').addEventListener('click', (evt) => {
	evt.preventDefault()
})



		




