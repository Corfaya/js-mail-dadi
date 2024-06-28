Mail
Chiedi all’utente la sua email (tramite prompt o input, a voi la scelta),
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Vietato utilizzare la funzione includes

# Flow (bases without styles and innerHTML)
Creo un array con una lista di email autorizzate
Dichiaro e inizializzo una variabile assegnandogli come valore un prompt con stringa "Inserire l'email"
Al prompt aggiungiamo il metodo toLowerCase() nel caso l'utente digitasse per errore lettere maiuscole
Inizializzo una variabile di autorizzazione assegnandogli FALSE come valore
PER ogni indice a partire da 0 fino alla lunghezza dell'array
    SE l'elemento che si trova nella posizione indicata dall'indice equivale al valore scritto dall'utente
        sovrascriviamo la variabile di autorizzazione con il valore TRUE
SE la variabile di autorizzazione è impostata su TRUE
    mostriamo un messaggio con alert con scritto "Accesso autorizzato"
ALTRIMENTI
    mostriamo un messaggio con alert con scritto "Accesso negato"