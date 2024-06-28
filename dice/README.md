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
        mostro in console "Player 1 vince"
    SE INVECE il valore del tiro del giocatore è uguale al valore del tiro del pc
        mostro in console "Pareggio"
    ALTRIMENTI
        mostro in console "PC vince"