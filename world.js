window.onload =function() {

	var lookupButton =document.getElementById('lookup');
	country =document.getElementsByTagName('input')[0];
	all =document.getElementsByTagName('input')[1];

	lookupButton.onclick =function() {
		ajaxFunction(); 
		getCountry();
	};
};



function getCountry() {
	
	if(all.checked ) 
		all.setAttribute('value','true');

	var url = "world.php?country="+country.value+"&all="+all.value;

	httprequest.onreadystatechange = printResults;
	httprequest.open("GET", url);
	httprequest.send();
}

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function printResults() {
	
	var result =document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	country_info =httprequest.responseText;

		 	if (country_info[8]!=='<') {
		 		alert(country_info);
		 		result.innerHTML +='<h2> Result </h2>' +country_info;
			}
			else {
				alert(country_info);
				 var countryinfo ='no result found';
				result.innerHTML ='<h2> Result </h2>' +countryinfo;
			}
		}
	}
}
