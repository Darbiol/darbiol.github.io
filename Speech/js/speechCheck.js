$( document ).ready( function () {
	var speech = window.speechRecognition || window.webkitSpeechRecognition || null;
	if ( speech === null ) {
		document.getElementById('Api-warning').style.display = 'block';
	} else {
		$('#speak').tooltip({'trigger':'focus', 'title': 'Speak now!'});
		var recognizer    = new speech();
		var transcription = document.getElementById('transcription');
		var logs          = document.getElementById('logs');
		var speak         = document.getElementById('speak');

		 // Recogniser doesn't stop listening even if the user pauses
        recognizer.continuous = true;

		//start recognition
		recognizer.onresult = function(event) {
          transcription.textContent = '';
 		  speak.value = '';
          for (var i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
              //transcription.textContent = event.results[i][0].transcript + ' (Confidence: ' + event.results[i][0].confidence + ')';
              logs.innerHTML = 'You said : ' + event.results[i][0].transcript + ' (Confidence: ' + (event.results[i][0].confidence).toFixed(4) + ')' + '</br>' + logs.innerHTML;
              speak.value = event.results[i][0].transcript;
            } else {
              transcription.textContent += event.results[i][0].transcript;
              logs.innerHTML = 'You said : ' + event.results[i][0].transcript + ' (Confidence: ' + event.results[i][0].confidence + ')' + '</br>' + logs.innerHTML;

            }
          }
        };

        //Setup Event to activate speech recognizer
        speak.addEventListener( 'focus', function () {
        	try {
        		recognizer.start();
        		logs.innerHTML = 'Recognition started' + '<br />' + logs.innerHTML;
        	}catch( ex ){
        		log.innerHTML = 'Recognition error : ' + ex.message + '<br />' + logs.innerHTML;
        	}	
        } );

        speak.addEventListener( 'blur', function () {
         	recognizer.stop();
          	logs.innerHTML = 'Recognition stopped' + '<br />' + logs.innerHTML;
         } );

         // Listen for errors
        recognizer.onerror = function(event) {
          logs.innerHTML = 'Recognition error: ' + event.message + '<br />' + log.innerHTML;
        };
	}
} );