window.onload =function() {

	var lookupButton =document.getElementById('lookup');
	country =document.getElementsByTagName('input')[0];
	all =document.getElementsByTagName('input')[1];

	lookupButton.onclick =function() {
		ajaxFunction(); 
		getCountry();
	};
};

function ajaxFunction() {

	if (window.XMLHttpRequest) 
		httprequest =new XMLHttpRequest();
	else 
		httprequest =new ActiveXObject('Microsoft.XMLHTTP');
}

function getCountry() {
    var url = "";
	if(all.checked ) {
        url = "world.php?all=true";
    }
	else if(country == ""){
        document.getElementById("result").innerHTML = "Enter a text";
    }
    else
    {
        url = "world.php?country="+document.getElementById("country").value;
    }

	

	httprequest.onreadystatechange = printResults;
	httprequest.open("GET", url);
	httprequest.send();
}



function printResults() {
	
	var result =document.getElementById('result');

	if (httprequest.readyState === XMLHttpRequest.DONE) {
		if (httprequest.status === 200) {
		 	country_info =httprequest.responseText;
             result.innerHTML = country_info;
		 	
		}
	}
}
