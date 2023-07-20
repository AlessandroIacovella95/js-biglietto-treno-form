// Prendo l'input name dal DOM
const inputUserName = document.getElementById('user-name')

// Prendo l'input km dal DOM
const inputUserKm = document.getElementById('user-km')

// Prendo l'input age dal DOM
const inputUserAge = document.getElementById('user-age')

// Prendo il bottone dal DOM
const sendButton = document.getElementById('send-text')

// Prendo il paragrafo dal DOM
const ticketTrain = document.getElementById('ticket-train')

// Prendo il paragrafo dal DOM
const passengerName = document.getElementById('info-passenger')



sendButton.addEventListener('click', function() {
    
    const userName = inputUserName.value;

    const userKm = parseFloat(inputUserKm.value);
    
    const userAge = parseInt(inputUserAge.value);

    if(isNaN (userKm)) {
        alert("I km devono essere numeri");
    } else {
        /* - Calcolo costo del biglietto in base ai chilometri inseriti precedentemente dall'utente*/
    let ticketPrice = userKm * 0.21;

    if ((userAge > 0) && (userKm > 0)) {

        
        /* SE l'utente risulta essere minorenne vado ad applicare un sconto del 20% al prezzo del biglietto*/
        if (userAge < 18) {
            ticketPrice = ticketPrice * 0.8;
    
        /* ALTRIMENTI SE l'utente risulta essere over 65 vado ad applicare un sconto del 40% al prezzo del biglietto*/
        } else if (userAge > 65) {
            ticketPrice = ticketPrice * 0.6;
        }
    
        /* - Restituisco l'output al cliente con massimo due decimali, per indicare i centesimi sul prezzo del biglietto.*/
        ticketPrice = ticketPrice.toFixed(2);
        
        ticketTrain.innerHTML = 'Il prezzo del biglietto è: ' + ticketPrice + '€'
        passengerName.innerHTML = userName
        
        inputUserName.value = '';
        inputUserKm.value = '';
        inputUserAge.value = '';
    }
    else{
        alert("Età e km devono essere maggiori di 0");
    }  

    }

});

                
  