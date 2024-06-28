Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

# Flow (without styles or innerHTML)
Recupero un bottone salvandolo in una variabile
Aggiungo un evento click al bottone, con le seguenti istruzioni
    Creo due variabili per generare due diversi valori randomici attraverso la libreria Math, uno per l'utente, l'altro per il pc
    SE il valore del tiro del giocatore è maggiore del valore del tiro del pc
        mostro in console `Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`
    SE INVECE il valore del tiro del giocatore è uguale al valore del tiro del pc
        mostro in console `Pareggio: entrambi hanno totalizzato ${randomPlayer}`
    ALTRIMENTI
        mostro in console `Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`

# Flow with style and innerHTML
Recupero un bottone salvandolo in una variabile
Aggiungo un evento click al bottone, con le seguenti istruzioni
    Creo due variabili per generare due diversi valori randomici attraverso la libreria Math, uno per l'utente, l'altro per il pc
    Recupero l'h2#winner e il p#victory-info
    SE il valore del tiro del giocatore è maggiore del valore del tiro del pc
        inserisco in h2 con innerHTML: "Player 1 vince"
        inserisco in p con innterHTML: `Player 1 vince con un ${randomPlayer}, battendo il numero ${randomPc} del PC`
    SE INVECE il valore del tiro del giocatore è uguale al valore del tiro del pc
        inserisco in h2 con innerHTML: "Pareggio"
        inserisco in p con innterHTML: `Pareggio: entrambi hanno totalizzato ${randomPlayer}`
    ALTRIMENTI
        inserisco in h2 con innerHTML: "Pc vince"
        inserisco in p con innterHTML: `Il PC vince con un ${randomPc}, battendo il numero ${randomPlayer} del Player 1`