var currentLocationIndex = 0;
var inventory = [];
let interrogatingSuspect = -1
let dialogIndex = -1
let currentDialog = "none"
let gameWon = false

var locationsListDiv = document.getElementById("locationsList");
locations.forEach(function(location, index) {
  var button = document.createElement("button");
  button.textContent = location.name;
  locationsListDiv.appendChild(button);
  button.addEventListener("click", function() {
    currentLocationIndex = index;
    updateLocation();
  });
});

function updateEvidenceList() {
	var evidenceListDiv = document.getElementById("evidenceList");
	evidenceListDiv.innerHTML = ""
	evidenceList.forEach(function(evidenceItem) {
	  if (evidenceItem.collected === true) {
		  var button = document.createElement("button");
		  button.textContent = evidenceItem.name;
		  button.onclick = () => updateInfoBox(evidenceItem.description)	
		  evidenceListDiv.appendChild(button);
	  }
	});
}

function collectEvidence(ev) {
	evidenceList[ev].collected = true
	updateInfoBox(evidenceList[ev].description)
	updateEvidenceList()
	updateLocation()
}

function displayInfo(i) {
	updateInfoBox(infoList[i].text)	
}

function updateInfoBox(txt) {
	const infoBox = document.getElementById("infoBox")
	infoBox.innerHTML = txt
}

function interrogationRoom() {
	if (interrogatingSuspect != -1) {
		interrogatingCharacter()
		return
	}
	
	var clickableItems = document.getElementById("clickableItems");
	var div = document.createElement("div")
	div.style.position = "absolute"
	div.style.left = "10px"
	div.style.top = "50px"
	div.style.width = "300px"
	div.style.height = "800px"
	div.style.backgroundColor = "rgba(5, 5, 5, .6)"
	
	charactersList.forEach( (character, index) => {
		let button = document.createElement("button")
		button.innerHTML = character.name
		button.onclick = () => {
			interrogatingSuspect = index
			updateLocation()
		}
		div.appendChild(button)
	})
	clickableItems.appendChild(div)
}

function interrogatingCharacter() {
	if (dialogIndex != -1) {
		showDialog()
		return
	}
	
	var clickableItems = document.getElementById("clickableItems");
	var div = document.createElement("div")
	div.style.position = "absolute"
	div.style.left = "10px"
	div.style.top = "50px"
	div.style.width = "300px"
	div.style.height = "800px"
	div.style.backgroundColor = "rgba(5, 5, 5, .6)"
	
	let back = document.createElement("button")
	back.innerHTML = "Return"
	back.style.marginBottom = "50px"
	back.onclick = () => {
		currentDialog = "none"
		interrogatingSuspect = -1
		dialogIndex = -1
		updateLocation()
	}
	div.appendChild(back)
	
	charactersList[interrogatingSuspect].dialogs.forEach( (dialog, index) => {
		const requiredEvidence = conversations[dialog].evidence
		if (requiredEvidence === "" || evidenceList.filter(e => e.name === requiredEvidence && e.collected).length > 0) {
			let button = document.createElement("button")
			button.innerHTML = conversations[dialog].question
			button.onclick = () => {
				currentDialog = dialog
				dialogIndex = 0
				updateLocation()
			}
			div.appendChild(button)
		}
	})
	clickableItems.appendChild(div)
}

function showDialog() {
	var clickableItems = document.getElementById("clickableItems");
	const cd = conversations[currentDialog]
	const di = cd.dialog[dialogIndex]
	let speakerImg = ""
	charactersList.forEach( (ch) => {
		if (ch.name === di.speaker) {
			speakerImg = ch.img
		}
	})
	
	var imgE = document.createElement("img")
	imgE.style.position = "absolute"
	imgE.style.left = "300px"
	imgE.style.bottom = "310px"
	imgE.style.width = "500px"
	imgE.style.height = "500px"
	imgE.src = speakerImg
	
	clickableItems.appendChild(imgE)
	
	var div = document.createElement("div")
	div.style.position = "absolute"
	div.style.left = "10px"
	div.style.bottom = "10px"
	div.style.width = "900px"
	div.style.height = "300px"
	div.style.backgroundColor = "rgba(5, 5, 5, 1)"
	div.onclick = () => {
		dialogIndex += 1
		if (dialogIndex >= cd.dialog.length) dialogIndex = -1
		updateLocation()
	}
	var h2 = document.createElement("h2")
	h2.innerHTML = di.speaker
	
	var p = document.createElement("p")
	p.innerHTML = di.text
	
	div.appendChild(h2)
	div.appendChild(p)
	clickableItems.appendChild(div)
}

function cutscene(dialogName) {
	currentDialog = dialogName
	if (dialogIndex === -1) dialogIndex = 0
	if (dialogIndex >= conversations[currentDialog].dialog.length -1) {
		locations[currentLocationIndex].intro = ""
	}
	showDialog()
}

function solveRoom() {
  var clickableItems = document.getElementById("clickableItems");
  
  var div = document.createElement("div")
  div.style.position = "absolute"
  div.style.left = "10px"
  div.style.top = "50px"
  div.style.width = "800px"
  div.style.height = "800px"
  div.style.backgroundColor = "rgba(5, 5, 5, .6)"
  clickableItems.appendChild(div);

  // Create question 1 and radio buttons
  var question1 = document.createElement("p");
  question1.textContent = "Who was involved with the murder?";
  div.appendChild(question1);
  var answer1a = document.createElement("input");
  answer1a.type = "checkbox";
  answer1a.name = "involved";
  answer1a.value = "Jack Tassel";
  var answer1b = document.createElement("input");
  answer1b.type = "checkbox";
  answer1b.name = "involved";
  answer1b.value = "Sara Slywood";
  var answer1c = document.createElement("input");
  answer1c.type = "checkbox";
  answer1c.name = "involved";
  answer1c.value = "Robert Richman";
  div.appendChild(answer1a);
  div.appendChild(document.createTextNode("Jack Tassel"));
  div.appendChild(answer1b);
  div.appendChild(document.createTextNode("Sara Slywood"));
  div.appendChild(answer1c);
  div.appendChild(document.createTextNode("Robert Richman"));

  // Create question 2 and radio buttons
  var question2 = document.createElement("p");
  question2.textContent = "What was the motive?";
  div.appendChild(question2);
  var answer2a = document.createElement("input");
  answer2a.type = "checkbox";
  answer2a.name = "motive";
  answer2a.value = "Rage";
  var answer2b = document.createElement("input");
  answer2b.type = "checkbox";
  answer2b.name = "motive";
  answer2b.value = "Jealousy";
  var answer2c = document.createElement("input");
  answer2c.type = "checkbox";
  answer2c.name = "motive";
  answer2c.value = "Greed";
  div.appendChild(answer2a);
  div.appendChild(document.createTextNode("Rage"));
  div.appendChild(answer2b);
  div.appendChild(document.createTextNode("Jealousy"));
  div.appendChild(answer2c);
  div.appendChild(document.createTextNode("Greed"));
  
  // Create question 3 and radio buttons
  var question3 = document.createElement("p");
  question1.textContent = "Who was the killer?";
  div.appendChild(question1);
  var answer3a = document.createElement("input");
  answer3a.type = "checkbox";
  answer3a.name = "killer";
  answer3a.value = "Jack Tassel";
  var answer3b = document.createElement("input");
  answer3b.type = "checkbox";
  answer3b.name = "killer";
  answer3b.value = "Sara Slywood";
  var answer3c = document.createElement("input");
  answer3c.type = "checkbox";
  answer3c.name = "killer";
  answer3c.value = "Robert Richman";
  div.appendChild(answer3a);
  div.appendChild(document.createTextNode("Jack Tassel"));
  div.appendChild(answer3b);
  div.appendChild(document.createTextNode("Sara Slywood"));
  div.appendChild(answer3c);
  div.appendChild(document.createTextNode("Robert Richman"));

  // Create submit button
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", checkAnswers);
  div.appendChild(submitButton);
}

function checkAnswers() {
  var involvedAnswers = document.querySelectorAll('input[name="involved"]:checked');
  var involvedChecked = [];
  involvedAnswers.forEach(function(answer) {
    involvedChecked.push(answer.value);
  });
  
  var motiveAnswers = document.querySelectorAll('input[name="motive"]:checked');
  var motiveChecked = [];
  motiveAnswers.forEach(function(answer) {
    motiveChecked.push(answer.value);
  });

  var killerAnswers = document.querySelectorAll('input[name="killer"]:checked');
  var killerChecked = [];
  killerAnswers.forEach(function(answer) {
    killerChecked.push(answer.value);
  });
  
  // Check if the right answers have been checked
  if (involvedChecked.includes("Sara Slywood") && involvedChecked.includes("Robert Richman") &&
      motiveChecked.includes("Greed") &&
      killerChecked.includes("Sara Slywood") && killerChecked.length == 1 && involvedChecked.length == 2) {
    alert("Great work detective, you have solved the case! The criminals will be brought to justice.");
	currentDialog = "CaseSolved"
	dialogIndex = 0
	gameWon = true
	caseSolved()
  } else {
    alert("It seems you are quite a poor detective. The true criminals got away");
    location.reload()
  }
}

function caseSolved() {
  document.getElementById("locationImage").src = "PoliceCar.jpg";  
  document.getElementById("clickableItems").innerHTML = ""
  
  showDialog()
}

function updateLocation() {
  if (gameWon) {
	  caseSolved()
	  return
  }
  //change location
  var location = locations[currentLocationIndex];
  document.getElementById("locationImage").src = location.image;
  document.querySelectorAll("#sidebar a").forEach(function(link, index) {
    if (index === currentLocationIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  
  //Clear image items
  var clickableItems = document.getElementById("clickableItems");
  clickableItems.innerHTML = ""
  
  //Go to interrogation room?
  if (location.name === "Interrogation Room") {
	  interrogationRoom()
	  return
  }
  //Play cut scene
  if (location.intro != "") {
	  cutscene(location.intro)
	  return
  }
  //Go to Solve room?
  if (location.name === "Detectives Office") {
	  solveRoom()
	  return
  }
  interrogatingSuspect = -1
  dialogIndex = -1
  currentDialog = "none"

  // Add relevant evidence on top of image
  evidenceList.forEach(function(evidenceItem, index) {
	if (evidenceItem.location === location.name && evidenceItem.collected === false) {
		var div = document.createElement("img")
		div.style.position = "absolute"
		div.style.left = evidenceItem.x + "px"
		div.style.top = evidenceItem.y + "px"
		div.style.width = evidenceItem.w + "px"
		div.style.height = evidenceItem.h + "px"
		div.style.cursor = "pointer"
		div.src = evidenceItem.img
		div.onclick = () => collectEvidence(index)
		clickableItems.appendChild(div)
	}
  });  
  // Add relevant info on top of image
  infoList.forEach(function(infoItem, index) {
	if (infoItem.location === location.name) {
		var div = document.createElement("div")
		div.style.position = "absolute"
		div.style.left = infoItem.x + "px"
		div.style.top = infoItem.y + "px"
		div.style.width = infoItem.w + "px"
		div.style.height = infoItem.h + "px"
		div.style.cursor = "pointer"
		div.style.backgroundColor = "white"
		div.style.opacity = 0.01
		div.onclick = () => displayInfo(index)
		clickableItems.appendChild(div)
	}
  });
}

updateEvidenceList()
updateLocation()

