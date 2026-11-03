# Allenati · aggiornamento novembre 2026

PWA statica per iPhone: nessun server applicativo, account o libreria esterna durante l’uso.

## Cosa contiene

- Scheda A–E richiesta: A/C/E intense, B/D leggere. Serie, ripetizioni e recuperi riportati dal messaggio originale.
- Riscaldamento 4–5 minuti e cardio finale 3–5 minuti nelle giornate intense. Il timer base è rispettivamente 5 e 3 minuti; il completamento rimane manuale.
- Impostazione iniziale settimane 1–2: massimo due serie per esercizio intenso. Scegli settimane 3–4 o 5–6 nelle impostazioni per le serie complete. Nessun avanzamento automatico delle settimane.
- Flusso unico: completa serie → recupero → serie successiva. Il recupero è solo tra le serie dello stesso esercizio. Il timer riprende dalla scadenza reale dopo una sospensione; non avanza automaticamente gli esercizi.
- Ultimo allenamento interamente completato e prossima lettera del ciclo. Le sedute con passaggi saltati restano nel backup ma non sostituiscono l’ultimo allenamento completo.
- Pesi con pulsanti −/+, incremento configurabile, valori condivisi per lo stesso esercizio nelle diverse schede. Varianti leggere e alternative hanno valori separati. Manubri: peso di un manubrio; EZ: peso totale.
- Salvataggio automatico in localStorage e IndexedDB, copia locale precedente, esportazione/importazione di backup, verifica dei dati importati e avvisi in caso di errore.
- Home conserva la seduta in corso. Avviare un’altra seduta richiede conferma della sostituzione.
- TRX disattivato inizialmente: squat verso panca, retrazioni scapolari libere e rematore a petto appoggiato sostituiscono i tre movimenti in sospensione. Disattivarlo nelle impostazioni sostituisce i movimenti anche nella seduta in corso.
- 35 dimostrazioni SVG animate originali, incluse localmente; nessuna immagine, GIF, font o script remoto. Sono illustrazioni di persone, non filmati o GIF fotografiche. La French press con manubrio è rappresentata nella variante sopra la testa a due mani.

## Pubblicazione su GitHub da computer

1. Estrai `Allenati-aggiornato.zip` in una cartella.
2. Apri https://github.com/lorenzo8-cmd/Allenati e accedi con l’account che può modificarlo.
3. Nel ramo `main`, scegli **Add file → Upload files**.
4. Trascina **tutto il contenuto della cartella estratta**, compresa la cartella `assets`, nell’area di caricamento. Non caricare lo ZIP e non trascinare la cartella esterna che contiene il progetto.
5. Verifica che `index.html`, `app.js`, `data.js`, `storage.js`, `style.css`, `service-worker.js`, `manifest.webmanifest` e `icon.png` siano nella radice, e che i 35 SVG siano sotto `assets/`.
6. Scrivi “Aggiorna Allenati: nuova scheda e funzionamento offline” e scegli **Commit changes** sul ramo `main`. I file con lo stesso nome sostituiscono quelli vecchi.
7. In **Settings → Pages**, conserva **Deploy from a branch → main → /(root)**. Attendi che la pubblicazione in **Actions** risulti completata.
8. Apri https://lorenzo8-cmd.github.io/Allenati/ . Controlla che B sia “Mobilità e stabilità” e D “Braccia leggere e mobilità”.

Il caricamento di cartelle è più semplice da computer. Se usi iPhone, puoi creare `assets` e caricarvi i 35 SVG separatamente dall’editor web GitHub, ma la procedura da computer evita errori di percorso.

## Aggiornamento dell’iPhone già installato

1. Con Internet attivo, apri Allenati e lascia aperta l’app per scaricare la nuova versione.
2. Chiudi tutte le finestre di Allenati, compresa la scheda Safari e l’app dalla Home. Riapri l’app. Se compare ancora la vecchia scheda, ripeti apertura online e chiusura completa dopo che GitHub Pages ha terminato la pubblicazione.
3. Attendi il messaggio **“Pronta offline · esercizi e animazioni salvati”** nella Home.
4. Attiva modalità aereo, chiudi e riapri Allenati, apri una scheda e controlla un’animazione. Aumenta un peso, torna alla Home e riapri l’esercizio: il valore deve rimanere.
5. Ripristina la connessione dopo il controllo. Da quel momento puoi usare l’app in garage senza rete.

Per una nuova installazione: Safari → Condividi → Aggiungi alla schermata Home. Apri anche l’icona installata con Internet e attendi la conferma offline.

Non serve eliminare l’icona o cancellare i dati di Safari per aggiornare. La vecchia seduta in corso appartiene alla vecchia scheda e non viene convertita nella nuova; la sua chiave locale resta intatta. La vecchia app non aveva una memoria dei pesi da migrare.

## Dati e offline

La prima apertura richiede Internet. Il service worker salva l’intero bundle prima di attivarsi, conserva la versione funzionante se un download fallisce e rimuove la cache vecchia solo all’attivazione della nuova. Una verifica controlla ogni risorsa; se manca un file, tenta di recuperarlo online solo quando la versione pubblicata corrisponde a quella attiva.

Il timer usa una scadenza assoluta: se iOS sospende l’app, alla riapertura mostra il tempo corretto. Non è garantito un allarme a schermo bloccato. La schermata di completamento non continua ad accumulare minuti.

I dati restano nel browser del dispositivo, non su GitHub. iOS o la cancellazione dei dati del sito possono rimuovere sia dati sia cache: usa **Impostazioni → Esporta backup** periodicamente. Il backup può essere ripristinato anche senza rete. Il salvataggio persistente viene richiesto al browser quando supportato, ma non può essere imposto.

## Verifiche eseguite

Edge/Chromium con viewport mobile 390 × 844: navigazione A–E, conteggio serie, alternative TRX, timer e pausa dopo ricaricamento, completamento di un’intera seduta offline, memoria pesi, ultimo completamento, 43 URL in cache, caricamento delle 35 animazioni, backup/importazione, rifiuto backup non validi, recupero da memoria locale corrotta e degradazione dei due sistemi di salvataggio.

Provato anche l’aggiornamento reale dal service worker originale v2: un download incompleto lascia funzionante la vecchia versione; dopo download riuscito, chiusura/riapertura attiva v3 e consente la riapertura offline. Provato il recupero di un’animazione mancante quando torna la connessione.

Safari su iPhone fisico non era disponibile per un test diretto: esegui la breve prova in modalità aereo sopra indicata. Le animazioni sono state controllate visivamente come illustrazioni didattiche; non sono riprese di esecuzioni reali.

## Manutenzione

I file sono pronti da pubblicare, senza compilazione. Per ogni futuro aggiornamento, cambia il nome `CACHE` in `service-worker.js` e aggiorna `FILES` quando aggiungi o rimuovi file usati dall’app. La nuova versione si attiva dopo la chiusura delle finestre esistenti.

Riferimento tecnico per il service worker: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

Gli script riproducibili sono in `tests/` e il generatore delle 35 illustrazioni in `tools/generate-assets.mjs`. Con Node installato: `npm install`, `npx playwright install chromium`, poi `npm test`. È possibile indicare un browser già installato tramite `BROWSER_EXECUTABLE_PATH`. I risultati vengono scritti in `test-results/`. `npm run assets` rigenera SVG e service worker; prima di una pubblicazione successiva incrementa anche il nome CACHE nel generatore. Questi strumenti servono solo per sviluppo e test: l'app pubblicata non richiede npm.
