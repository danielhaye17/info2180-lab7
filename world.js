window.onload =function() {

    var lookupButton = getElementById('lookup');
    var result = getElementById('result');
    country =document.getElementsByTagName('input')[0];

    lookupbutton.onclick =function() {
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
        var url = "world.php?country="+country.value;
        httprequest.onreadystatechange = displayResults;
	    httprequest.open("GET", url);
        httprequest.send();
    }

    function displayResults() {
	
        var output =document.getElementById('result');
    
        if (httprequest.readyState === XMLHttpRequest.DONE) {
            if (httprequest.status === 200) {
                 info =httprequest.responseText;
    
                 if (countryInfo[8]!=='<') {
                     alert(info);
                     output.innerHTML +='<h2> Result </h2>' +info;
                }
                else {
                    alert(countryInfo);
                    info ='no result found';
                    output.innerHTML ='<h2> Result </h2>' +info;
                }
            }
        }
    }




