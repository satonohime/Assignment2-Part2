function cleanUpIndex() {
    let mainClassElem = document.querySelector('.main')
    
    while (mainClassElem.firstChild) {
		mainClassElem.removeChild(mainClassElem.firstChild)
	}
}

function createSingleIndex(contact) {
    return `<a href="page3.html"><div class="contact">${contact.name}</div></a>`
}

function renderIndex(contactList) {
    let mainClassElem = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        mainClassElem.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
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
}