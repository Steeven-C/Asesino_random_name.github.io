function generator() {
	var first = ["a"];
	var second = ["a","s","e","s","i","n","o"];
	var thirth = ["a","s","e","s","i","n","o"];
	var four = ["a","s","e","s","i","n","o"];
	var five = ["a","s","e","s","i","n","o"];
	var six = ["a","s","e","s","i","n","o"];
	var seven = ["a","s","e","s","i","n","o"];
  
	var randomNumber1 = parseInt(Math.random() * first.length);
	var randomNumber2 = parseInt(Math.random() * second.length);
	var randomNumber3 = parseInt(Math.random() * thirth.length);
	var randomNumber4 = parseInt(Math.random() * four.length);
	var randomNumber5 = parseInt(Math.random() * five.length);
	var randomNumber6 = parseInt(Math.random() * six.length);
	var randomNumber7 = parseInt(Math.random() * seven.length);

	var name = first[randomNumber1]+ second[randomNumber2]+ thirth[randomNumber3]+ four[randomNumber4]+ five[randomNumber5]+ six[randomNumber6]+ seven[randomNumber7];
  
	if (document.getElementById("result")) {
	  document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}
  
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	element.appendChild(document.createTextNode(name));
	document.getElementById("placeholder").appendChild(element);
  }