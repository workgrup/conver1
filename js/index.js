window.onload=function(){
	document.getElementById("decantidad").onkeyup = function(){cambiarDivisa()};
	document.getElementById("de").onkeyup = function(){cambiarDivisa()};
	document.getElementById("a").onkeyup = function(){cambiarDivisa()};
};

function cambiarDivisa(){
	
	var de = document.getElementById("de").value; 
	var a = document.getElementById("a").value;
	var xmlHttp = new XMLHttpRequest();

	var url = "http://data.fixer.io/api/latest?symbols="+de+","+a;
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
	xmlHttp.onreadystatechange =function(){
		if (xmlHttp.readyState == 4 && xmlHttp.status ==200) {
			var result = xmlHttp.responseText;

			var jsResult =JSON.parse(result);
			var oneUnit = jsResult.rates[a]/jsResult.rates[de];
			var cantidad = document.getElementById("decantidad").value;
			document.getElementById("acantidad").value = (oneUnit*cantidad).toFixed(2);

		}
	}
}