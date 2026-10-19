# IxGoo Courier & Logistics — prenotazione spedizioni

**Online:** https://ixgoo.web.app

App statica, gratuita (piano Firebase Spark): Firebase Authentication + Firestore + Firebase Hosting.
Lingua principale greco; anche inglese, italiano, francese, ebraico (da destra a sinistra),
spagnolo, tedesco, russo e cinese.

## Flusso

1. Il cliente si registra (serve solo email e password; nome, cognome, ragione sociale, telefono e
   indirizzo sono facoltativi) e
   conferma l'email con il link che Firebase gli invia.
2. Prenota: tutti i campi sono facoltativi (busta/pacco e colli hanno un valore predefinito).
3. L'admin vede l'ordine in "Ordini" e preme **Conferma ricevimento ordine**.
   L'admin può anche inserire direttamente un ordine per un cliente non registrato (menu
   **Nuova spedizione**): nasce già confermato, con l'etichetta QR subito stampabile.
4. Nell'area del cliente compare subito il QR code con l'etichetta da stampare e attaccare al pacco.
5. Il corriere scansiona il QR (si apre la spedizione, dopo il login) e preme
   **"Consegna effettuata il giorno … alle ore …"**. Il cliente vede la consegna nella sua area.

## Ruoli

- `ixgoo@outlook.com.gr`, `pierpaolomurgioni@gmail.com` e `ixgoocourier@gmail.com` diventano **admin** quando si registrano
  (lista in `public/js/app.js` e `firestore.rules`).
- Corrieri e altri admin si registrano come clienti; poi un admin cambia il loro ruolo da **Utenti**.
- In alternativa, da questa cartella: `.venv/bin/python tools/admin.py ruolo <email> corriere`

## Avvisi sul telefono degli admin (ntfy)

A ogni nuova prenotazione di un cliente parte un avviso gratuito tramite [ntfy](https://ntfy.sh).
Sul telefono: installa l'app **ntfy**, premi **+** e iscriviti al canale
`ixgoo-ordini-xridg09bj0wbk477yt` (costante `NTFY_TOPIC` in `public/js/app.js`).
L'avviso contiene solo codice, data/ora e città (il nome del canale è leggibile nel codice).

## Pubblicare una modifica

Doppio clic su **`pubblica.command`** (oppure `.venv/bin/python tools/deploy.py`).
Pubblica regole di sicurezza e sito usando `firebase-key.json` (chiave del service account,
**mai su GitHub**: è nel `.gitignore`). Nel browser premi ⌘⇧R per vedere subito la nuova versione.

## File

- `public/` — il sito: `index.html`, `style.css`, `js/app.js` (tutta l'app), `js/i18n.js`
  (traduzioni), `js/firebase-config.js` (configurazione web, pubblica per natura)
- `firestore.rules` — regole di sicurezza: chi può leggere e modificare cosa
- `tools/deploy.py` — pubblicazione; `tools/admin.py` — cambio ruoli

## Dati (Firestore)

- `users/{uid}` — profilo e ruolo di ogni account
- `shipments/{codice}` — spedizioni; l'ID è il codice `IXG-AAMMGG-XXXXXX`
- `routes/{uid}` — il giro di ogni corriere: l'ordine delle consegne scelto con ↑ ↓ nella pagina Consegne

La versione precedente con server Python (Cloud Run) è nel ramo `versione-server`.
