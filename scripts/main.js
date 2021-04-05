function klok () {
	
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	var months = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');
	var days = new Array('Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag');

	//gooit een 0 voor uren kleiner dan 10
	if (hours < 10){
		hours = '0' + hours;
	}
	//gooit een 0 voor minuten kleiner dan 10
	if (minutes < 10){
		minutes = '0' + minutes;
	}
	//gooit een 0 voor seconden kleiner dan 10
	if (seconds < 10){
		seconds = '0' + seconds;
	}

	//Dit moet eigenlijk veranderen per dag deel kreeg het alleen niet voor elkaar om het om te bouwen naar uren :(
	// nu verandert het per aantal seconde )

	 if (seconds >= 20 && seconds <= 22){
        document.getElementById('cirkel').classList.remove('maan');
        document.getElementById('cirkel').classList.add('maanweg');
    } else if (seconds >= 23 && seconds <= 50){
        document.getElementById('cirkel').classList.remove('maanweg');
        document.getElementById('cirkel').classList.add('zon');
    } else if (seconds >= 51 && seconds <= 53){
        document.getElementById('cirkel').classList.remove('zon');
        document.getElementById('cirkel').classList.add('zonweg');
    } else {
        document.getElementById('cirkel').classList.remove('zonweg');
        document.getElementById('cirkel').classList.add('maan');
    }


// Hieronder ziet u de poging om de code om te bouwen naar uren, helaas lukte dit niet :( )

  // if (hours > 5 && hours < 7 ){
	 // 	if (minutes >= 0 && minutes < 1 ) {
	 // 	    if (seconds >= 0 && seconds < 1) {
  //       document.getElementById('cirkel').classList.remove('maan');
  //       document.getElementById('cirkel').classList.add('maanweg');
	 // 	    }
	 // 	}

	 //  else if (hours > 5 && hours < 7 ){
	 // 	if (minutes >= 0 && minutes < 1 ) {
	 // 	    if (seconds > 2  && seconds < 4) {
  //       document.getElementById('cirkel').classList.remove('maanweg');
  //       document.getElementById('cirkel').classList.add('zon');
	 // 	    }
	 // 	}

  //   } 


  //    else if (hours > 17 && hours < 19 ){
	 // 	if (minutes >= 0 && minutes < 1 ) {
	 // 	    if (seconds >= 0  && seconds < 1) {
  //       document.getElementById('cirkel').classList.remove('zon');
  //       document.getElementById('cirkel').classList.add('zonweg');
	 // 	    }
	 // 	}

  //   } 

    
  //    else if (hours > 17 && hours < 19 ){
	 // 	if (minutes >= 0 && minutes < 1 ) {
	 // 	    if (seconds >= 1  && seconds < 3) {
  //       document.getElementById('cirkel').classList.remove('zonweg');
  //       document.getElementById('cirkel').classList.add('maan');
	 // 	    }
	 // 	}

  //   }

	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;

	document.getElementById('month').innerHTML = months[today.getMonth()]; // Januari is maand 0
	document.getElementById('date').innerHTML = today.getDate();
	document.getElementById('day').innerHTML = days[today.getDay()]; // Zondag is dag 0

}

klok();
setInterval(klok, 1000);


