 
var counters= [0,0,0,0];

var Persons = [
    {
		name: 'John',
		surname: 'Doe',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 25,
		myPhoto: "img/boy1.jpg",	
		likes: counters[0],
		myId : "firstperson",
		likeId : "person0",	
	},
	{
		name: 'Jack',
		surname: 'Black',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 22,
		myPhoto: "img/boy2.jpg",	
		likes: counters[1],    
		myId : "secondperson",
		likeId : "person1",
	},
	{
		name: 'Brianna',
		surname: 'Banana',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 24,
		myPhoto: "img/girl1.jpg",	
		likes: counters[2],
		myId : "thirdperson",
		likeId : "person2",
	},
	{
		name: 'Sharquisha',
		surname: 'Black',
		favoritePerformers: ["Justin Timberlake", "Ed Sheeran", "Emma Watson"],
		age: 27,
		myPhoto: "img/girl2.jpg",	
		likes: counters[3],
		myId : "fourthperson",
		likeId : "person3",
	},
];

// gives the data of every person to myContent() for creation
for (i = 0; i < Persons.length; i++) {
	myContent(Persons[i].myPhoto, Persons[i].name, Persons[i].surname, Persons[i].age, Persons[i].myId, Persons[i].likeId);
}

// creates the content for every person
// i wanted to use JS for this, since i only used ".getElementByID" before
// it was a mistake
function myContent(imgsrc, name, lastName, age, myId, likeId){

	var	img = document.createElement('img');
	var myDiv = document.createElement('div');
	myDiv.setAttribute("class", "date");
	img.setAttribute("class", "images");

	var	p1 = document.createElement('p');
	var	text = document.createTextNode("Name: ");
	var spanName = document.createElement("span");
	spanName.setAttribute("class", "strong");
	var myName = document.createTextNode(name);
	spanName.appendChild(myName);
	p1.setAttribute("class", "imgText");

	var	p2 = document.createElement('p');
	var	text2 = document.createTextNode("Last Name: ");
	var spanName2 = document.createElement("span");
	spanName2.setAttribute("class", "strong");
	var myName2 = document.createTextNode(lastName);
	spanName2.appendChild(myName2);
	p2.setAttribute("class", "imgText");

	var	p3 = document.createElement('p');
	var	text3 = document.createTextNode("Age: ");
	var spanName3 = document.createElement("span");
	spanName3.setAttribute("class", "strong");
	var myName3 = document.createTextNode(age);
	spanName3.appendChild(myName3);
	p3.setAttribute("class", "imgText");

	var	button = document.createElement("button");
	var	buttonText = document.createTextNode("Like");
	button.setAttribute("class", "button imgText");
	button.appendChild(buttonText);
	button.setAttribute("id", myId);
	button.setAttribute("value", i);
	
	pLikes = document.createElement("p");
	likesText = document.createTextNode("");
	var	imgLikes = document.createElement('img');
	imgLikes.src = "img/like.png"
	pLikes.appendChild(likesText);
	pLikes.setAttribute("id", likeId);

	img.src = imgsrc;
	myDiv.appendChild(img);
	
	p1.appendChild(text);
	p1.appendChild(spanName);
	myDiv.appendChild(p1);

	p2.appendChild(text2);
	p2.appendChild(spanName2);
	myDiv.appendChild(p2);
	
	p3.appendChild(text3);
	p3.appendChild(spanName3);
	myDiv.appendChild(p3);

	pLikes.appendChild

	var buttonEvent = myDiv.appendChild(button);
	myDiv.appendChild(pLikes)

	var div = document.getElementById('content');
	div.appendChild(myDiv);	
}

// here i was already fed up with JS
// also it didnt want to work with only JS
// so here is something nice for diversity
// countes the likes and displays on click
$(".button").click(function(){
	var x= $(this).attr("value");
	counters[x]++;
	$("#person"+x)
		.attr("class", "imgText size2em")
		.html(counters[x] + " <img src='img/like.png' alt='heart'>");
});

