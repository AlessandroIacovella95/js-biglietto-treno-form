// Prendo l'input name dal DOM
const inputUserName = document.getElementById('user-name')

// Prendo l'input km dal DOM
const inputUserKm = document.getElementById('user-km')

// Prendo l'input age dal DOM
const inputUserAge = document.getElementById('user-age')

// Prendo il bottone dal DOM
const sendButton = document.getElementById('send-text')

// Prendo il bottone dal DOM
const cancelButton = document.getElementById('cancel-text')

// Prendo il paragrafo dal DOM
const ticketTrain = document.getElementById('ticket-train')

// Prendo il paragrafo dal DOM
const passengerName = document.getElementById('info-passenger')

// Prendo lo span dal DOM
const trainCarriage = document.getElementById('train-carriage-number')
const maxCarriage = 12
const minCarriage = 1

// Prendo lo span cp-code dal DOM
const cpCode = document.getElementById('cp-code')
const maxCpCode = 9999
const minCpCode = 1

// Prendo lo span standard-ticket dal DOM
const standardTicket = document.getElementById('standard-ticket')

// Prendo lo span standard-ticket dal DOM
const ticketSection = document.getElementById('ticket-section')

// Prendo il div alert_danger dal DOM
const alertDanger = document.getElementById('alert_danger')



sendButton.addEventListener('click', function() {
    
    const userName = inputUserName.value;

    const userKm = parseFloat(inputUserKm.value);
    
    const userAge = parseInt(inputUserAge.value);

    if (userName == '') {
        alertDanger.classList.add ('d-block');
        alertDanger.classList.remove ('d-none');
        alertDanger.innerHTML = 'Il campo Nome è obbligatorio'
    } else {

    if(isNaN (userKm)) {
        alertDanger.classList.add ('d-block');
        alertDanger.classList.remove ('d-none');
        alertDanger.innerHTML = 'Il campo km deve essere un valore numerico '
    } else {

    /* - Calcolo costo del biglietto in base ai chilometri inseriti precedentemente dall'utente*/
    alertDanger.classList.remove ('d-block');
    alertDanger.classList.add ('d-none');    
    let ticketPrice = userKm * 0.21;
    standardTicket.innerHTML = 'Biglietto Standard'

    if ((userAge > 0) && (userKm > 0)) {

        
        /* SE l'utente risulta essere minorenne vado ad applicare un sconto del 20% al prezzo del biglietto*/
        if (userAge < 18) {
            ticketPrice = ticketPrice * 0.8;
            standardTicket.innerHTML = 'Biglietto Under 18'

    
        /* ALTRIMENTI SE l'utente risulta essere over 65 vado ad applicare un sconto del 40% al prezzo del biglietto*/
        } else if (userAge > 65) {
            ticketPrice = ticketPrice * 0.6;
            standardTicket.innerHTML = 'Biglietto Over 65'
        }
    
        /* - Restituisco l'output al cliente con massimo due decimali, per indicare i centesimi sul prezzo del biglietto.*/
        ticketPrice = ticketPrice.toFixed(2);

        ticketSection.classList.add ('d-block')
        ticketSection.classList.remove ('d-none')
        passengerName.innerHTML = 'Nome Passeggero: ' + '<br>' + userName
        trainCarriage.innerHTML = Math.floor(Math.random() * maxCarriage) + minCarriage;
        cpCode.innerHTML = Math.floor(Math.random() * maxCpCode) + minCpCode;
        ticketTrain.innerHTML = ticketPrice + '€'
        
        inputUserName.value = '';
        inputUserKm.value = '';
        inputUserAge.value = '';
    }
    else{
        alertDanger.classList.add ('d-block');
        alertDanger.classList.remove ('d-none');
        alertDanger.innerHTML = ' I campi km ed età devono essere maggiori di 0'
    }     
    }
    }

});

cancelButton.addEventListener('click', function(){

    ticketSection.classList.remove ('d-block')
    ticketSection.classList.add ('d-none')
    ticketTrain.innerHTML = '';
    passengerName.innerHTML = '';
    trainCarriage.innerHTML = '';
    cpCode.innerHTML = '';
    standardTicket.innerHTML = '';
})

  