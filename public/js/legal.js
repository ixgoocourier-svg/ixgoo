// Testi legali di IxGoo: informativa privacy (GDPR), termini del servizio, cookie policy.
// Lingue: greco (el), inglese (en), italiano (it); le altre lingue mostrano l'inglese.
// ⚠ Bozza tecnica da far verificare da un consulente legale prima dell'uso definitivo.

// Dati del titolare del trattamento: completare qui.
export const CONTROLLER = {
  name: "Iosif Xanthakis", // titolare / ragione sociale
  address: "",   // indirizzo della sede
  vat: "",       // ΑΦΜ / partita IVA
  email: "",     // email per richieste privacy
  phone: "",     // facoltativo
};
export const LAST_UPDATE = "19/10/2026";

const missing = '<span class="todo">⚠</span>';
const v = (x) => x || missing;
const controllerBlock = () => `<p><strong>${v(CONTROLLER.name)}</strong><br>${v(CONTROLLER.address)}<br>
  ΑΦΜ / VAT: ${v(CONTROLLER.vat)}<br>Email: ${CONTROLLER.email ? `<a href="mailto:${CONTROLLER.email}">${CONTROLLER.email}</a>` : missing}
  ${CONTROLLER.phone ? `<br>☎ <span class="ltr">${CONTROLLER.phone}</span>` : ""}</p>`;
const mail = () => (CONTROLLER.email ? `<a href="mailto:${CONTROLLER.email}">${CONTROLLER.email}</a>` : missing);
const DPA = `<a href="https://www.dpa.gr" target="_blank" rel="noopener">www.dpa.gr</a>`;

const TEXTS = {
  // ------------------------------------------------------------------ italiano
  it: {
    privacy: () => `
<h1>Informativa sulla privacy</h1>
<p class="muted">Ai sensi degli artt. 13–14 del Regolamento (UE) 2016/679 (GDPR) · Ultimo aggiornamento: ${LAST_UPDATE}</p>
<h2>1. Titolare del trattamento</h2>${controllerBlock()}
<h2>2. Quali dati trattiamo</h2>
<ul>
<li><strong>Account:</strong> indirizzo email e password. La password è gestita da Google Firebase in forma cifrata: noi non la vediamo.</li>
<li><strong>Profilo (facoltativo):</strong> nome, cognome, ragione sociale, indirizzo, telefono, lingua preferita.</li>
<li><strong>Spedizioni:</strong> dati del mittente, data, ora e luogo di ritiro, destinatario e relativo referente con telefono, tipo di invio, colli, peso, note, stato e orari di conferma e consegna.</li>
<li><strong>Dati tecnici:</strong> dati di accesso e sicurezza registrati da Firebase (ad es. indirizzo IP, data dell'ultimo accesso).</li>
</ul>
<p>Se inserisci dati di altre persone (destinatari, referenti), ti impegni a informarle di questo trattamento e a farlo solo per la spedizione.</p>
<h2>3. Finalità e basi giuridiche</h2>
<ul>
<li>Creare e gestire l'account, ricevere, confermare, ritirare e consegnare le spedizioni — <em>esecuzione di un contratto</em> (art. 6.1.b).</li>
<li>Adempiere agli obblighi fiscali e contabili — <em>obbligo di legge</em> (art. 6.1.c).</li>
<li>Sicurezza del servizio, prevenzione degli abusi, avvisi interni al personale sui nuovi ordini — <em>legittimo interesse</em> (art. 6.1.f).</li>
</ul>
<p>Non facciamo marketing, profilazione né decisioni automatizzate, e non vendiamo i dati.</p>
<h2>4. Obbligatorietà</h2>
<p>Email e password sono necessarie per creare l'account. Gli altri dati sono facoltativi, ma senza alcuni di essi (ad es. indirizzi) la spedizione potrebbe non essere eseguibile.</p>
<h2>5. Chi può vedere i dati</h2>
<ul>
<li>Il nostro personale autorizzato (amministratori e corrieri), solo per gestire le spedizioni.</li>
<li><strong>Google Ireland Ltd / Google LLC</strong> (Firebase Authentication, Cloud Firestore, Firebase Hosting), come responsabile del trattamento. Il database si trova nell'Unione Europea (regione <em>eur3</em>: Belgio e Paesi Bassi).</li>
<li><strong>ntfy.sh</strong>, servizio usato per avvisare il personale dei nuovi ordini: riceve solo codice dell'ordine, data e ora, città di ritiro e di consegna, tipo e numero di colli — mai nomi, indirizzi completi o telefoni.</li>
<li>Autorità pubbliche, solo se richiesto dalla legge.</li>
</ul>
<h2>6. Trasferimenti fuori dall'UE</h2>
<p>Alcuni servizi Google (ad es. l'autenticazione) e il servizio ntfy.sh possono trattare dati fuori dall'Unione Europea. Per Google il trasferimento avviene sulla base dell'EU-U.S. Data Privacy Framework e delle Clausole contrattuali standard della Commissione europea. A ntfy.sh inviamo solo i dati minimi indicati sopra.</p>
<h2>7. Per quanto tempo</h2>
<ul>
<li>Account e profilo: finché non elimini l'account.</li>
<li>Spedizioni: per il tempo necessario al servizio e poi per il periodo richiesto dagli obblighi fiscali e contabili; trascorso tale periodo sono cancellate o rese anonime.</li>
<li>Avvisi ntfy: conservati dal servizio per circa 12 ore.</li>
</ul>
<h2>8. I tuoi diritti</h2>
<p>Hai diritto di accesso, rettifica, cancellazione, limitazione, portabilità dei dati e opposizione al trattamento basato sul legittimo interesse (artt. 15–22 GDPR).</p>
<ul>
<li>Nel tuo <a href="#/profilo">Profilo</a> puoi modificare i dati, <strong>scaricare tutti i tuoi dati</strong> ed <strong>eliminare l'account</strong>.</li>
<li>Per ogni altra richiesta scrivi a ${mail()}. Rispondiamo entro un mese.</li>
<li>Puoi presentare reclamo all'Autorità greca per la protezione dei dati (Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα, Κηφισίας 1-3, 115 23 Atene, ${DPA}) o all'autorità del Paese in cui vivi.</li>
</ul>
<p>Eliminando l'account cancelliamo profilo e credenziali; i dati delle spedizioni già effettuate restano conservati solo per gli obblighi di legge indicati sopra.</p>
<h2>9. Sicurezza</h2>
<p>Connessione cifrata (HTTPS), accesso ai dati regolato da regole di sicurezza: ogni cliente vede solo le proprie spedizioni.</p>
<h2>10. Minori</h2>
<p>Il servizio è destinato a persone maggiorenni e ad aziende.</p>
<h2>11. Modifiche</h2>
<p>Possiamo aggiornare questa informativa; la data in alto indica l'ultima versione.</p>`,

    terms: () => `
<h1>Termini del servizio</h1>
<p class="muted">Ultimo aggiornamento: ${LAST_UPDATE}</p>
<h2>1. Chi siamo</h2>${controllerBlock()}
<h2>2. Il servizio</h2>
<p>IxGoo permette di prenotare il ritiro e la consegna di buste e pacchi. Una prenotazione diventa vincolante solo dopo la nostra conferma; possiamo rifiutare o annullare ordini motivatamente.</p>
<h2>3. Account</h2>
<p>Sei responsabile della riservatezza della password e delle attività svolte con il tuo account. Possiamo sospendere account usati in modo illecito o contrario a questi termini.</p>
<h2>4. Obblighi del cliente</h2>
<ul>
<li>Fornire dati corretti e completi: ritardi o mancate consegne dovuti a dati errati o mancanti non sono imputabili a noi.</li>
<li>Non spedire merci vietate dalla legge, pericolose, deperibili, o oggetti di valore non dichiarati.</li>
<li>Imballare adeguatamente il contenuto e applicare l'etichetta QR fornita.</li>
</ul>
<h2>5. Responsabilità</h2>
<p>Svolgiamo il servizio con la massima cura. Nei limiti consentiti dalla legge, non rispondiamo di danni indiretti, di ritardi dovuti a cause di forza maggiore o a terzi, né di malfunzionamenti temporanei dell'app. Restano salvi i diritti inderogabili dei consumatori e la responsabilità prevista dalla legge per dolo o colpa grave.</p>
<h2>6. L'app</h2>
<p>L'app è fornita "così com'è" e può essere modificata, sospesa per manutenzione o aggiornata in qualsiasi momento.</p>
<h2>7. Dati personali</h2>
<p>Il trattamento dei dati è descritto nell'<a href="#/privacy">Informativa sulla privacy</a>.</p>
<h2>8. Legge applicabile</h2>
<p>Si applica la legge greca. Per i consumatori restano salve le tutele previste dalla legge del Paese di residenza.</p>
<h2>9. Contatti</h2><p>${mail()}</p>`,

    cookies: () => `
<h1>Cookie policy</h1>
<p class="muted">Ultimo aggiornamento: ${LAST_UPDATE}</p>
<p><strong>IxGoo non usa cookie di profilazione, pubblicitari o statistici</strong> e non utilizza strumenti di tracciamento di terze parti.</p>
<h2>Archiviazione tecnica necessaria</h2>
<p>Per funzionare l'app salva nel tuo browser solo questi dati tecnici, esenti dal consenso perché indispensabili al servizio che richiedi:</p>
<table><thead><tr><th>Nome</th><th>Fornitore</th><th>Scopo</th><th>Durata</th></tr></thead><tbody>
<tr><td>firebase:authUser… (IndexedDB)</td><td>Google Firebase</td><td>mantenere l'accesso al tuo account</td><td>fino all'uscita (logout)</td></tr>
<tr><td>ixgoo_lang (localStorage)</td><td>IxGoo</td><td>ricordare la lingua scelta</td><td>finché non la cancelli</td></tr>
<tr><td>ixgoo_cookie_ok (localStorage)</td><td>IxGoo</td><td>ricordare che hai chiuso l'avviso sui cookie</td><td>finché non la cancelli</td></tr>
</tbody></table>
<p>Le librerie di Firebase vengono caricate dai server di Google (gstatic.com) per far funzionare accesso e database.</p>
<h2>Come cancellarli</h2>
<p>Esci dall'account per eliminare i dati di accesso, oppure cancella i dati del sito dalle impostazioni del browser.</p>`,
  },

  // ------------------------------------------------------------------ ελληνικά
  el: {
    privacy: () => `
<h1>Πολιτική απορρήτου</h1>
<p class="muted">Σύμφωνα με τα άρθρα 13–14 του Κανονισμού (ΕΕ) 2016/679 (ΓΚΠΔ) · Τελευταία ενημέρωση: ${LAST_UPDATE}</p>
<h2>1. Υπεύθυνος επεξεργασίας</h2>${controllerBlock()}
<h2>2. Ποια δεδομένα επεξεργαζόμαστε</h2>
<ul>
<li><strong>Λογαριασμός:</strong> διεύθυνση email και κωδικός πρόσβασης. Τον κωδικό τον διαχειρίζεται η Google Firebase σε κρυπτογραφημένη μορφή· εμείς δεν τον βλέπουμε.</li>
<li><strong>Προφίλ (προαιρετικά):</strong> όνομα, επώνυμο, επωνυμία εταιρείας, διεύθυνση, τηλέφωνο, προτιμώμενη γλώσσα.</li>
<li><strong>Αποστολές:</strong> στοιχεία αποστολέα, ημερομηνία, ώρα και τόπος παραλαβής, παραλήπτης και υπεύθυνος με τηλέφωνο, είδος αποστολής, τεμάχια, βάρος, σημειώσεις, κατάσταση και ώρες επιβεβαίωσης και παράδοσης.</li>
<li><strong>Τεχνικά δεδομένα:</strong> στοιχεία πρόσβασης και ασφάλειας που καταγράφει η Firebase (π.χ. διεύθυνση IP, ημερομηνία τελευταίας σύνδεσης).</li>
</ul>
<p>Αν καταχωρίζετε δεδομένα άλλων προσώπων (παραληπτών, υπευθύνων), δεσμεύεστε να τους ενημερώσετε για την επεξεργασία αυτή και να το κάνετε μόνο για την αποστολή.</p>
<h2>3. Σκοποί και νομικές βάσεις</h2>
<ul>
<li>Δημιουργία και διαχείριση λογαριασμού, παραλαβή, επιβεβαίωση, συλλογή και παράδοση αποστολών — <em>εκτέλεση σύμβασης</em> (άρθρο 6.1.β).</li>
<li>Εκπλήρωση φορολογικών και λογιστικών υποχρεώσεων — <em>νομική υποχρέωση</em> (άρθρο 6.1.γ).</li>
<li>Ασφάλεια της υπηρεσίας, πρόληψη καταχρήσεων, εσωτερικές ειδοποιήσεις προσωπικού για νέες παραγγελίες — <em>έννομο συμφέρον</em> (άρθρο 6.1.στ).</li>
</ul>
<p>Δεν κάνουμε προώθηση πωλήσεων, κατάρτιση προφίλ ή αυτοματοποιημένες αποφάσεις και δεν πουλάμε δεδομένα.</p>
<h2>4. Υποχρεωτικότητα</h2>
<p>Το email και ο κωδικός είναι απαραίτητα για τη δημιουργία λογαριασμού. Τα υπόλοιπα δεδομένα είναι προαιρετικά, όμως χωρίς ορισμένα (π.χ. διευθύνσεις) η αποστολή ενδέχεται να μην μπορεί να εκτελεστεί.</p>
<h2>5. Ποιος βλέπει τα δεδομένα</h2>
<ul>
<li>Το εξουσιοδοτημένο προσωπικό μας (διαχειριστές και κούριερ), μόνο για τη διαχείριση των αποστολών.</li>
<li>Η <strong>Google Ireland Ltd / Google LLC</strong> (Firebase Authentication, Cloud Firestore, Firebase Hosting) ως εκτελούσα την επεξεργασία. Η βάση δεδομένων βρίσκεται στην Ευρωπαϊκή Ένωση (περιοχή <em>eur3</em>: Βέλγιο και Ολλανδία).</li>
<li>Η υπηρεσία <strong>ntfy.sh</strong>, που ειδοποιεί το προσωπικό για νέες παραγγελίες: λαμβάνει μόνο κωδικό παραγγελίας, ημερομηνία και ώρα, πόλη παραλαβής και παράδοσης, είδος και αριθμό τεμαχίων — ποτέ ονόματα, πλήρεις διευθύνσεις ή τηλέφωνα.</li>
<li>Δημόσιες αρχές, μόνο όταν το απαιτεί ο νόμος.</li>
</ul>
<h2>6. Διαβιβάσεις εκτός ΕΕ</h2>
<p>Ορισμένες υπηρεσίες της Google (π.χ. η ταυτοποίηση) και η υπηρεσία ntfy.sh μπορεί να επεξεργάζονται δεδομένα εκτός της Ευρωπαϊκής Ένωσης. Για την Google η διαβίβαση βασίζεται στο EU-U.S. Data Privacy Framework και στις Τυποποιημένες Συμβατικές Ρήτρες της Ευρωπαϊκής Επιτροπής. Στο ntfy.sh στέλνουμε μόνο τα ελάχιστα δεδομένα που αναφέρονται παραπάνω.</p>
<h2>7. Για πόσο χρόνο</h2>
<ul>
<li>Λογαριασμός και προφίλ: μέχρι να διαγράψετε τον λογαριασμό.</li>
<li>Αποστολές: για όσο χρειάζεται η υπηρεσία και στη συνέχεια για το διάστημα που ορίζουν οι φορολογικές και λογιστικές υποχρεώσεις· μετά διαγράφονται ή ανωνυμοποιούνται.</li>
<li>Ειδοποιήσεις ntfy: διατηρούνται από την υπηρεσία για περίπου 12 ώρες.</li>
</ul>
<h2>8. Τα δικαιώματά σας</h2>
<p>Έχετε δικαίωμα πρόσβασης, διόρθωσης, διαγραφής, περιορισμού, φορητότητας και εναντίωσης στην επεξεργασία που βασίζεται σε έννομο συμφέρον (άρθρα 15–22 ΓΚΠΔ).</p>
<ul>
<li>Στο <a href="#/profilo">Προφίλ</a> σας μπορείτε να αλλάξετε τα στοιχεία, να <strong>κατεβάσετε όλα τα δεδομένα σας</strong> και να <strong>διαγράψετε τον λογαριασμό</strong>.</li>
<li>Για κάθε άλλο αίτημα γράψτε στο ${mail()}. Απαντάμε εντός ενός μήνα.</li>
<li>Μπορείτε να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (Κηφισίας 1-3, 115 23 Αθήνα, ${DPA}) ή στην αρχή της χώρας όπου ζείτε.</li>
</ul>
<p>Με τη διαγραφή του λογαριασμού διαγράφουμε προφίλ και στοιχεία πρόσβασης· τα δεδομένα των αποστολών που έχουν ήδη γίνει διατηρούνται μόνο για τις νομικές υποχρεώσεις που αναφέρονται παραπάνω.</p>
<h2>9. Ασφάλεια</h2>
<p>Κρυπτογραφημένη σύνδεση (HTTPS) και πρόσβαση στα δεδομένα με κανόνες ασφαλείας: κάθε πελάτης βλέπει μόνο τις δικές του αποστολές.</p>
<h2>10. Ανήλικοι</h2>
<p>Η υπηρεσία απευθύνεται σε ενήλικες και επιχειρήσεις.</p>
<h2>11. Αλλαγές</h2>
<p>Μπορεί να ενημερώσουμε την παρούσα πολιτική· η ημερομηνία στην αρχή δείχνει την τελευταία έκδοση.</p>`,

    terms: () => `
<h1>Όροι χρήσης</h1>
<p class="muted">Τελευταία ενημέρωση: ${LAST_UPDATE}</p>
<h2>1. Ποιοι είμαστε</h2>${controllerBlock()}
<h2>2. Η υπηρεσία</h2>
<p>Το IxGoo επιτρέπει την κράτηση παραλαβής και παράδοσης φακέλων και δεμάτων. Μια κράτηση γίνεται δεσμευτική μόνο μετά την επιβεβαίωσή μας· μπορούμε να απορρίψουμε ή να ακυρώσουμε παραγγελίες αιτιολογημένα.</p>
<h2>3. Λογαριασμός</h2>
<p>Είστε υπεύθυνοι για το απόρρητο του κωδικού σας και για τις ενέργειες που γίνονται με τον λογαριασμό σας. Μπορούμε να αναστείλουμε λογαριασμούς που χρησιμοποιούνται παράνομα ή αντίθετα με τους παρόντες όρους.</p>
<h2>4. Υποχρεώσεις του πελάτη</h2>
<ul>
<li>Να δίνει σωστά και πλήρη στοιχεία: καθυστερήσεις ή αποτυχίες παράδοσης λόγω λανθασμένων ή ελλιπών στοιχείων δεν μας βαρύνουν.</li>
<li>Να μην αποστέλλει είδη που απαγορεύονται από τον νόμο, επικίνδυνα, ευπαθή ή αντικείμενα αξίας που δεν έχουν δηλωθεί.</li>
<li>Να συσκευάζει κατάλληλα το περιεχόμενο και να επικολλά την ετικέτα QR.</li>
</ul>
<h2>5. Ευθύνη</h2>
<p>Παρέχουμε την υπηρεσία με τη μέγιστη επιμέλεια. Στο μέτρο που επιτρέπει ο νόμος, δεν ευθυνόμαστε για έμμεσες ζημίες, για καθυστερήσεις λόγω ανωτέρας βίας ή τρίτων, ούτε για προσωρινές δυσλειτουργίες της εφαρμογής. Παραμένουν τα αναγκαστικού δικαίου δικαιώματα των καταναλωτών και η ευθύνη που προβλέπει ο νόμος για δόλο ή βαριά αμέλεια.</p>
<h2>6. Η εφαρμογή</h2>
<p>Η εφαρμογή παρέχεται «ως έχει» και μπορεί να αλλάξει, να διακοπεί για συντήρηση ή να ενημερωθεί οποιαδήποτε στιγμή.</p>
<h2>7. Προσωπικά δεδομένα</h2>
<p>Η επεξεργασία περιγράφεται στην <a href="#/privacy">Πολιτική απορρήτου</a>.</p>
<h2>8. Εφαρμοστέο δίκαιο</h2>
<p>Εφαρμόζεται το ελληνικό δίκαιο. Για τους καταναλωτές ισχύουν επιπλέον οι προστασίες του δικαίου της χώρας κατοικίας τους.</p>
<h2>9. Επικοινωνία</h2><p>${mail()}</p>`,

    cookies: () => `
<h1>Πολιτική cookies</h1>
<p class="muted">Τελευταία ενημέρωση: ${LAST_UPDATE}</p>
<p><strong>Το IxGoo δεν χρησιμοποιεί cookies προφίλ, διαφήμισης ή στατιστικών</strong> ούτε εργαλεία παρακολούθησης τρίτων.</p>
<h2>Απαραίτητη τεχνική αποθήκευση</h2>
<p>Για να λειτουργεί, η εφαρμογή αποθηκεύει στον browser σας μόνο τα εξής τεχνικά δεδομένα, που δεν απαιτούν συγκατάθεση επειδή είναι απαραίτητα για την υπηρεσία που ζητάτε:</p>
<table><thead><tr><th>Όνομα</th><th>Πάροχος</th><th>Σκοπός</th><th>Διάρκεια</th></tr></thead><tbody>
<tr><td>firebase:authUser… (IndexedDB)</td><td>Google Firebase</td><td>διατήρηση της σύνδεσης στον λογαριασμό</td><td>μέχρι την αποσύνδεση</td></tr>
<tr><td>ixgoo_lang (localStorage)</td><td>IxGoo</td><td>απομνημόνευση της γλώσσας</td><td>μέχρι να τη διαγράψετε</td></tr>
<tr><td>ixgoo_cookie_ok (localStorage)</td><td>IxGoo</td><td>απομνημόνευση ότι κλείσατε την ειδοποίηση cookies</td><td>μέχρι να τη διαγράψετε</td></tr>
</tbody></table>
<p>Οι βιβλιοθήκες της Firebase φορτώνονται από τους διακομιστές της Google (gstatic.com) για τη λειτουργία σύνδεσης και βάσης δεδομένων.</p>
<h2>Πώς τα διαγράφετε</h2>
<p>Αποσυνδεθείτε για να διαγραφούν τα στοιχεία σύνδεσης ή διαγράψτε τα δεδομένα του ιστότοπου από τις ρυθμίσεις του browser.</p>`,
  },

  // ------------------------------------------------------------------ english
  en: {
    privacy: () => `
<h1>Privacy policy</h1>
<p class="muted">Under Articles 13–14 of Regulation (EU) 2016/679 (GDPR) · Last updated: ${LAST_UPDATE}</p>
<h2>1. Data controller</h2>${controllerBlock()}
<h2>2. What data we process</h2>
<ul>
<li><strong>Account:</strong> email address and password. The password is handled by Google Firebase in encrypted form: we never see it.</li>
<li><strong>Profile (optional):</strong> first and last name, company name, address, phone, preferred language.</li>
<li><strong>Shipments:</strong> sender details, pickup date, time and place, recipient and contact person with phone, type, pieces, weight, notes, status and confirmation/delivery times.</li>
<li><strong>Technical data:</strong> sign-in and security data recorded by Firebase (e.g. IP address, last sign-in date).</li>
</ul>
<p>If you enter data about other people (recipients, contacts), you undertake to inform them of this processing and to do so only for the shipment.</p>
<h2>3. Purposes and legal bases</h2>
<ul>
<li>Creating and managing your account; receiving, confirming, picking up and delivering shipments — <em>performance of a contract</em> (Art. 6(1)(b)).</li>
<li>Meeting tax and accounting obligations — <em>legal obligation</em> (Art. 6(1)(c)).</li>
<li>Service security, abuse prevention, internal staff alerts about new orders — <em>legitimate interest</em> (Art. 6(1)(f)).</li>
</ul>
<p>We do no marketing, profiling or automated decision-making, and we do not sell data.</p>
<h2>4. Is providing data required?</h2>
<p>Email and password are needed to create an account. Everything else is optional, but without some of it (e.g. addresses) a shipment may not be possible.</p>
<h2>5. Who can see the data</h2>
<ul>
<li>Our authorised staff (administrators and couriers), only to handle shipments.</li>
<li><strong>Google Ireland Ltd / Google LLC</strong> (Firebase Authentication, Cloud Firestore, Firebase Hosting) as processor. The database is located in the European Union (<em>eur3</em> region: Belgium and the Netherlands).</li>
<li><strong>ntfy.sh</strong>, used to alert staff about new orders: it only receives the order code, date and time, pickup and delivery cities, type and number of pieces — never names, full addresses or phone numbers.</li>
<li>Public authorities, only where required by law.</li>
</ul>
<h2>6. Transfers outside the EU</h2>
<p>Some Google services (e.g. authentication) and ntfy.sh may process data outside the European Union. For Google, transfers rely on the EU-U.S. Data Privacy Framework and the European Commission's Standard Contractual Clauses. We send ntfy.sh only the minimal data listed above.</p>
<h2>7. How long we keep data</h2>
<ul>
<li>Account and profile: until you delete your account.</li>
<li>Shipments: as long as needed for the service and then for the period required by tax and accounting obligations; afterwards they are deleted or anonymised.</li>
<li>ntfy alerts: kept by the service for about 12 hours.</li>
</ul>
<h2>8. Your rights</h2>
<p>You have the right of access, rectification, erasure, restriction, data portability and to object to processing based on legitimate interest (Arts. 15–22 GDPR).</p>
<ul>
<li>In your <a href="#/profilo">Profile</a> you can edit your data, <strong>download all your data</strong> and <strong>delete your account</strong>.</li>
<li>For any other request write to ${mail()}. We reply within one month.</li>
<li>You can lodge a complaint with the Hellenic Data Protection Authority (Kifisias 1-3, 115 23 Athens, ${DPA}) or with the authority of your country of residence.</li>
</ul>
<p>When you delete your account we delete your profile and credentials; data about shipments already carried out is kept only for the legal obligations above.</p>
<h2>9. Security</h2>
<p>Encrypted connection (HTTPS) and access controlled by security rules: each customer only sees their own shipments.</p>
<h2>10. Minors</h2>
<p>The service is intended for adults and businesses.</p>
<h2>11. Changes</h2>
<p>We may update this policy; the date at the top shows the latest version.</p>`,

    terms: () => `
<h1>Terms of service</h1>
<p class="muted">Last updated: ${LAST_UPDATE}</p>
<h2>1. Who we are</h2>${controllerBlock()}
<h2>2. The service</h2>
<p>IxGoo lets you book the pickup and delivery of envelopes and parcels. A booking becomes binding only once we confirm it; we may refuse or cancel orders with good reason.</p>
<h2>3. Account</h2>
<p>You are responsible for keeping your password confidential and for activity under your account. We may suspend accounts used unlawfully or against these terms.</p>
<h2>4. Customer obligations</h2>
<ul>
<li>Provide correct and complete details: delays or failed deliveries caused by wrong or missing details are not our responsibility.</li>
<li>Do not ship goods that are illegal, dangerous, perishable, or undeclared valuables.</li>
<li>Pack contents properly and attach the QR label provided.</li>
</ul>
<h2>5. Liability</h2>
<p>We provide the service with the utmost care. To the extent permitted by law, we are not liable for indirect damage, delays caused by force majeure or third parties, or temporary malfunctions of the app. Mandatory consumer rights and statutory liability for intent or gross negligence remain unaffected.</p>
<h2>6. The app</h2>
<p>The app is provided "as is" and may be changed, suspended for maintenance or updated at any time.</p>
<h2>7. Personal data</h2>
<p>Processing is described in the <a href="#/privacy">Privacy policy</a>.</p>
<h2>8. Governing law</h2>
<p>Greek law applies. Consumers keep the protections of the law of their country of residence.</p>
<h2>9. Contact</h2><p>${mail()}</p>`,

    cookies: () => `
<h1>Cookie policy</h1>
<p class="muted">Last updated: ${LAST_UPDATE}</p>
<p><strong>IxGoo does not use profiling, advertising or analytics cookies</strong> and no third-party tracking tools.</p>
<h2>Strictly necessary technical storage</h2>
<p>To work, the app stores only the following technical data in your browser. No consent is needed because it is essential for the service you request:</p>
<table><thead><tr><th>Name</th><th>Provider</th><th>Purpose</th><th>Duration</th></tr></thead><tbody>
<tr><td>firebase:authUser… (IndexedDB)</td><td>Google Firebase</td><td>keep you signed in</td><td>until you log out</td></tr>
<tr><td>ixgoo_lang (localStorage)</td><td>IxGoo</td><td>remember your language</td><td>until you delete it</td></tr>
<tr><td>ixgoo_cookie_ok (localStorage)</td><td>IxGoo</td><td>remember that you closed the cookie notice</td><td>until you delete it</td></tr>
</tbody></table>
<p>Firebase libraries are loaded from Google's servers (gstatic.com) to run sign-in and the database.</p>
<h2>How to delete them</h2>
<p>Log out to remove sign-in data, or clear the site data in your browser settings.</p>`,
  },
};

export function legalHtml(kind, lang) {
  const set = TEXTS[lang] || TEXTS.en;
  return set[kind]();
}
