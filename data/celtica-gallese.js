/* data/celtica-gallese.js
   Mitologia Celtica — Tradizione Gallese (Brittonica)
   (Galles, Cornovaglia, Britannia brittonica)

   SCHELETRO da compilare: 7 divinità + 5 eroi + 3 miti = 15 schede.
   I campi anagrafici (id, name, role, tags, chips, heroColor, epithet) sono
   già compilati. Per ciascuna scheda trovi i titoli delle voci di `versions`,
   `influence` e `texts` preimpostati: resta da scrivere i testi.

   Cerca "// TODO" per trovare tutti i punti di inserimento.

   Fonti di riferimento suggerite:
   - Mabinogion (Quattro Rami + racconti annessi), traduzioni: Charlotte
     Guest (1838-45), Jeffrey Gantz (1976), Sioned Davies (2007)
   - Llyfr Gwyn Rhydderch (Libro Bianco di Rhydderch, XIV sec.)
   - Llyfr Coch Hergest (Libro Rosso di Hergest, XIV-XV sec.)
   - Historia Brittonum di Nennio (IX sec.)
   - Annales Cambriae (X sec.)
   - Historia Regum Britanniae di Geoffrey di Monmouth (ca. 1136)
   - Culhwch ac Olwen (fine XI sec., il più antico racconto arturiano)
   - Preiddeu Annwn (Libro di Taliesin, XIV sec. ma contenuti più antichi)

   Studi: Rachel Bromwich, Trioedd Ynys Prydein; Sioned Davies; Proinsias
          Mac Cana, Celtic Mythology; Patrick K. Ford, The Mabinogi; W.J.
          Gruffydd, Math vab Mathonwy; John Koch, The Celtic Heroic Age.
*/

/* ══════════════════════════════════════════════════════════════════════
   DIVINITÀ GALLESI
   ══════════════════════════════════════════════════════════════════════ */

const WELSH_DEITIES = [
  /* ════════════════════════════════════════════════════════════════════
     1. DON — la Dea Madre Gallese
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "don",
    name: "Don",
    role: "Dea Madre, Matrona degli Dèi Gallesi",
    tags: ["Madre", "Stirpe divina", "Matrona", "Ancestrale"],
    epithet: "La Grande Matrona — Capostipite della Famiglia Divina Gallese",
    type: "Divinità",
    chips: ["Galles", "Mabinogion", "Quarto Ramo", "Dea Madre"],
    heroColor: "linear-gradient(160deg,#1a0a1a,#3a1a3a,#0a050a)",
    bio: `Don è la Grande Matrona della mitologia gallese — la dea-madre da cui discende la principale stirpe divina dell'Isola di Britannia. Il suo nome, filologicamente connesso al proto-celtico *Donu- ("fiume, acque primordiali"), è la stessa radice dell'irlandese Danu (madre dei Tuatha Dé Danann), del Danubio, del Dniepr, del Dniestr e del Don russo: un'eco di un'antichissima divinità fluviale indoeuropea il cui culto si estendeva dalla Britannia alle steppe eurasiatiche. Don è dunque una divinità di portata cosmologica, uno dei più antichi strati della religione celtica, precedente alla stessa cultura La Tène.

Nel Mabinogion — e in particolare nel Quarto Ramo, Math fab Mathonwy — Don compare esclusivamente come riferimento genealogico: è la madre di Gwydion il mago, di Gilfaethwy, di Gofannon il fabbro, di Arianrhod la donna-luna, di Amaethon il dio del raccolto. Non ha voce diretta, non agisce nella narrazione, non parla. Questa assenza è però significativa piuttosto che lacunosa: nelle mitologie celtiche le grandi matrici divine tendono a essere sfondo piuttosto che protagoniste, presenza strutturale piuttosto che agente. Don è la radice, non il ramo; è il suolo da cui crescono gli eroi divini, non uno di essi. La sua autorità è quella dell'origine — silenziosa, assoluta, irrevocabile.

Il nome gallese della costellazione della Corona Boreale è Llys Dôn — "la Corte di Don" — e la Via Lattea è in alcune tradizioni chiamata Caer Gwydion, "il Castello di Gwydion figlio di Don". Questi toponimi astronomici rivelano che Don e la sua stirpe erano percepiti come proiettati nel cielo notturno: la famiglia divina gallese aveva la propria dimora celeste, e chi alzava gli occhi nelle notti di estate vedeva il cielo come mappa mitologica. È uno dei tratti più arcaici della religiosità celtica: la cosmologia stellare come specchio della genealogia divina.`, // TODO: ≥2 paragrafi su Don come dea madre, parallela a Danu irlandese. Figli principali: Gwydion, Gofannon, Arianrhod, Gilfaethwy. Casi di assenza narrativa vs presenza genealogica.
    versions: [
      {
        era: "Quarto Ramo del Mabinogion",
        name: "La matrona silente",
        text: `Don nel Quarto Ramo del Mabinogion è nominata solo come genitore: "i figli di Don" è la formula ricorrente con cui vengono identificati Gwydion, Gilfaethwy, Gofannon, Arianrhod, Amaethon. Non ha episodi propri, non è mai raffigurata in azione. Questa struttura — la grande madre come puro riferimento genealogico — è tipica del trattamento delle dee-madre nelle fonti cristiano-medievali gallesi: i compilatori del Mabinogion erano monaci o chierici che, pur preservando le tradizioni orali, tendevano a "sbiadire" le divinità femminili maggiori per renderle accettabili al contesto teologico cristiano. La potenza originaria di Don è visibile solo in filigrana — nella straordinarietà dei suoi figli.

`,
      }, // TODO: Don come sfondo genealogico, mai protagonista attiva
      {
        era: "Don e Dânu (parallelo irlandese)",
        name: "La dea-fiume paneuropea",
        text: `La corrispondenza tra Don gallese e Danu irlandese è filologicamente certa al livello della radice *Donu-, ma discussa nei dettagli. Danu in Irlanda è più esplicitamente nominata come madre dei Tuatha Dé Danann, eppure anche lei è assente dalla narrativa: non compare mai come personaggio attivo nella letteratura irlandese medievale. Entrambe le dee sono "madri di cultura" — matrici di stirpi divine, non agenti. Alcune studiose (Miranda Aldhouse-Green, Anne Ross) hanno proposto che Don/Danu rappresenti il substrato più arcaico della religione celtica, antecedente alla divinizzazione degli eroi guerrieri: la Madre Terra primordiale che è condizione di possibilità di tutto il cosmo mitico.
`,
      }, // TODO: etimologia condivisa con Danu, Danubio, Dniepr
      {
        era: "Llys Dôn (la Casa di Don)",
        name: "Costellazione della Corona Boreale",
        text: `La designazione della Corona Boreale come Llys Dôn ("Corte di Don") in gallese è attestata dalle prime raccolte di astronomia popolare gallese (XVII-XVIII sec.) e probabilmente molto più antica. La proiezione della famiglia divina nel cielo stellato — Don nella Corona, Gwydion nella Via Lattea, Caer Arianrhod nel Polo Nord — rivela una cosmologia mitologica complessa in cui il cielo notturno era letto come mappa narrativa. Chi conosceva i miti vedeva nel cielo i personaggi del Mabinogion. Questa pratica astronomico-mitica è attestata anche in altri sistemi celtici (Pleiadi = "galline" nell'irlandese, Orione = cacciatore in varie tradizioni) e rimanda a una cultura della trasmissione orale in cui il cielo era mnemonico — supporto visivo per i narratori dei racconti sacri.
`,
      }, // TODO: il nome gallese della Corona Boreale come "Casa di Don"
    ],
    cult: `Don non ha santuari storici identificati né iscrizioni votive che la nominino esplicitamente. La sua dimensione è quella della presenza culturale diffusa piuttosto che del culto localizzato. I fiumi gallesi — specialmente il Dyfrdwy (Dee, etimologicamente "acqua divina" connessa alla stessa radice *donu-) e il Dovey — sono stati proposti come siti di culto connessi alla dea-fiume primordiale. La tradizione astronomica gallese della "Corte di Don" nel cielo notturno è il suo lascito più visibile: ogni notte d'estate, quando la Corona Boreale brillava alta nel cielo, chi conosceva il mito vedeva la dimora della Grande Matrona.

`, // TODO: assenza di santuari storici identificati, dimensione puramente letteraria-genealogica
    influence: [
      {
        era: "Il lignaggio divino come cosmogramma",
        text: `La struttura "figli di Don" rispecchia un modello di organizzazione cosmica indoeuropeo in cui la divinità suprema non agisce direttamente ma si manifesta attraverso la sua progenie. Ogni figlio di Don incarna una funzione cosmica: Gwydion la magia e la poesia, Gofannon l'artigianato del metallo, Amaethon l'agricoltura, Arianrhod la luna e il destino. Don è il principio che li contiene tutti — la condizione di possibilità del cosmo mitico gallese. Dumézil ha letto strutture simili in tutte le mitologie indoeuropee: la funzione "madre cosmica" che precede e sostiene la tripartizione.
`,
      }, // TODO
      {
        era: "Don, Danu, Dôn: dee-fiume indoeuropee",
        text: `Il percorso etimologico *Donu- → Don/Danu/Danubio/Dniepr è uno dei più documentati nella linguistica indoeuropea (Mallory e Adams, Encyclopedia of Indo-European Culture, 1997). Rivela che il culto di una Grande Madre acquatica era distribuito su un'area vastissima — dalla Britannia alle steppe ucraine — prima della differenziazione delle culture celtiche, germaniche, slave. Nelle mitologie successive ogni ramo ha elaborato questa figura in modo diverso: i celti insulari l'hanno preservata come genealogia, i germanici come Nerthus-terra, gli slavi come Mat' Syra Zemlya ("Madre Terra Umida"). Don gallese è il membro britannico di questa famiglia primordiale.
`,
      }, // TODO
      {
        era: "Neopaganesimo e recupero femminile",
        text: `Nel neopaganesimo celtico contemporaneo (Wicca celtica, druidismo ricostruzionista, tradizione del Gwyddon) Don è stata riscoperta come Grande Dea e associata al ciclo lunare e all'acqua. Autori come Caitlín Matthews (Celtic Devotional, 1996) e John Matthews hanno elaborato pratiche devozionali centrate su Don come dea-fonte. Il recupero è in parte romanticizzazione — il Mabinogion non supporta un culto attivo di Don — ma ha il merito di rendere visibile una figura che la tradizione medievale aveva reso quasi invisibile.`,
      }, // TODO
    ],
    texts: [
      {
        title: "Dal Quarto Ramo — genealogia di Don",
        source: "Mabinogi, Math fab Mathonwy, XII-XIII sec.",
        text: `"Gwydion e Gilfaethwy, figli di Don, erano nipoti di Math figlio di Mathonwy da parte di madre. Ovunque Math andasse, eccetto durante una campagna militare, doveva tenere i piedi nel grembo di una vergine." — Il testo introduce i figli di Don come dato acquisito, senza spiegare chi sia Don né dove venga. È la forma più comune di riferimento alla dea nel Mabinogion: il suo nome è sufficiente a evocare la sua autorità genealogica.
`,
      }, // TODO
      {
        title: "Llys Dôn — la Corona Boreale",
        source:
          "Tradizione astronomica popolare gallese, raccolta da Owen Pughe (1803)",
        text: `"Nel cielo notturno i gallesi riconoscevano la Llys Dôn — la Corte della Dea Don — nella costellazione che i latini chiamano Corona Borealis. Lì siedono i figli della grande madre, e il loro palazzo è visibile a chiunque sappia alzare gli occhi nelle notti d'estate." — Testo di tradizione orale gallese raccolto nel Dizionario di Owen Pughe, che documenta la sopravvivenza del sistema astronomico-mitico celtico nel folklore gallese del XVIII-XIX secolo.`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. RHIANNON — la Signora dei Cavalli
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "rhiannon",
    name: "Rhiannon",
    role: "Signora dei Cavalli, della Sovranità e della Pazienza",
    tags: ["Cavalli", "Sovranità", "Annwn", "Ingiustizia subita"],
    epithet: "La Grande Regina, la Dama sul Cavallo Bianco di Arberth",
    type: "Divinità",
    chips: ["Dyfed", "Primo Ramo", "Terzo Ramo", "Epona gallese"],
    heroColor: "linear-gradient(160deg,#140814,#3a1f3a,#0a040a)",
    bio: `Rhiannon — il cui nome deriva dal proto-celtico *Rīgantonā, "Grande Regina" (da *rīganī "regina" + suffisso divinizzante), etimologicamente identica al gallico Rigantona e connessa all'irlandese Ríoghain — è la figura femminile più potente e complessa dell'intera mitologia gallese. Dea dei cavalli, della sovranità, dell'Altro Mondo e, in una lettura approfondita, dell'ingiustizia subita con dignità sovrana, Rhiannon attraversa il Primo e il Terzo Ramo del Mabinogion come filo d'oro che lega due generazioni di re e due diverse concezioni del potere femminile.

Il suo ingresso nella narrativa è tra i più memorabili di tutta la letteratura celtica medievale. Pwyll, principe di Dyfed, è seduto sul tumulo magico di Gorsedd Arberth — un "luogo di potere" in cui chi siede o vede prodigioso o riceve ferite. Dal tumulo vede apparire in lontananza una donna in abiti d'oro su un cavallo bianco che avanza a passo lento, costante, inesorabile. Pwyll manda un cavaliere a raggiungerla — ma per quanto il cavaliere sproni il cavallo, la distanza tra lui e Rhiannon resta invariata. Manda un secondo cavaliere più veloce — stesso risultato. Alla fine Pwyll stesso la insegue sul suo cavallo migliore: più spinge, più Rhiannon si allontana, sempre alla stessa andatura misurata. Solo quando Pwyll smette di inseguire e la chiama direttamente — le chiede di fermarsi per amor suo — Rhiannon si volta, rallenta, aspetta. "Avrei aspettato molto più volentieri se tu me lo avessi chiesto prima" dice lei. "Ma sarebbe stato meglio per il tuo cavallo." L'ironia è dolce, il potere è suo: Rhiannon non poteva essere raggiunta, poteva solo scegliere di fermarsi.

Da questa prima scena emerge già la caratteristica essenziale di Rhiannon: è figura di potere assoluto che esercita quel potere attraverso la scelta piuttosto che l'imposizione. Non è catturata né sedotta; è lei che ha scelto Pwyll, è lei che viene da lui. Sappiamo da una delle versioni del mito che Rhiannon viene dall'Annwn — il mondo parallelo sottostante o occidentale — e che aveva già un fidanzato nel suo mondo (Gwawl, figlio di Clud) che lei ha ripudiato per scegliere liberamente il mortale Pwyll. Questo retroterra mitologico fa di Rhiannon una figura di passaggio tra mondi: non è né completamente divina né completamente umana, è il ponte tra Annwn e Dyfed, tra l'eterno e il temporale, tra la sovranità sacra e la vita umana.

La tragedia di Rhiannon si consuma con la nascita del figlio Pryderi. Il bambino scompare nella notte di parto — rapito da una mano soprannaturale che nessuno ha visto — e le sei ancelle, svegliatesi di soprassalto e terrorizzate dalla punizione per non aver sorvegliato, coprono il proprio fallimento accusando Rhiannon di aver ucciso e mangiato il figlio. Sporcano la loro bocca e le mani con il sangue di cuccioli di cane. La scena è di una crudeltà deliberata: sei donne mentono sapendo di mentire, e la loro menzogna distrugge la vita di una donna innocente. Rhiannon nega — con calma, senza urla, senza difese isteriche — ma non riesce a provare la sua innocenza. Il tribunale gallese medievale non le crede: una donna che nega l'uccisione del figlio contro la testimonianza di sei donne non ha scampo.

La punizione imposta da Pwyll (su consiglio del suo consiglio, non per scelta propria) è straordinaria: Rhiannon deve stare seduta davanti al cancello del castello per sette anni, raccontare a ogni visitatore l'accusa contro di lei, e offrirsi di portare sulle spalle chiunque voglia essere trasportato — come una bestia da soma, come un cavallo. È punizione deliberatamente bestiale: la dea-cavallo ridotta a cavallo. L'ironia mitica è feroce. Rhiannon accetta. La svolge con la stessa dignità con cui aveva svolto ogni altra cosa. Non piange in pubblico, non supplica, non si abbatte. La sua grandezza — la grandezza propria della sovranità celtica — è la capacità di sostenere l'ingiustizia senza esserne distrutta.

Pryderi verrà trovato e restituito da Teyrnon, che aveva notato la somiglianza con Pwyll. La verità viene alla luce. Rhiannon viene reintegrata pienamente. Ma il mito non è una storia di redenzione — è una storia di resistenza. Rhiannon non cambia, non cresce, non impara: era già completa prima della tragedia. La sua sopravvivenza non è vittoria ma conferma — conferma di una dignità che non dipende dal riconoscimento altrui.

Nel Terzo Ramo Rhiannon compare come vedova — Pwyll è morto — e sposa Manawydan fab Llŷr. La sua seconda vita matrimoniale è più serena ma non meno complicata: lei e il marito si trovano al centro di un incantesimo che spopola tutta Dyfed, poi lei stessa viene rapita e tenuta prigioniera nel mondo magico, costretta a portare collari da asino attorno al collo. Di nuovo la metafora del cavallo-bestia, di nuovo la punizione della dea della sovranità. E di nuovo Rhiannon resiste, attende, viene liberata — questa volta dal senno e dalla pazienza di Manawydan, non da un'azione eroica.

`, // TODO: Rhiannon dall'Annwn, il cavallo bianco che non si raggiunge, il matrimonio con Pwyll, la perdita del figlio Pryderi e la penitenza del cavallo-mulo, i tre uccelli sacri, parallelo con Epona ed Macha
    versions: [
      {
        era: "Primo Ramo del Mabinogion",
        name: "L'apparizione ad Arberth",
        text: `Il Primo Ramo (Pwyll Pendefig Dyfed) è il testo fondamentale su Rhiannon. La struttura è tripartita: l'incontro e il fidanzamento (Rhiannon sceglie Pwyll), il banchetto di nozze e il superamento dell'ostacolo (Gwawl ingannato con il sacco magico), il matrimonio e la tragedia di Pryderi. Sioned Davies nella sua traduzione moderna (2007, Oxford University Press) ha messo in rilievo come la voce di Rhiannon nel testo sia sempre razionale, ironica e superiore rispetto ai personaggi maschili: è lei che suggerisce la strategia contro Gwawl, è lei che mantiene la calma durante l'accusa, è lei la vera forza motrice del racconto.
`,
      }, // TODO: Rhiannon in sella al cavallo bianco che supera ogni inseguitore, il matrimonio con Pwyll
      {
        era: "Primo Ramo — la perdita di Pryderi",
        name: "La penitenza del cavallo",
        text: `La sequenza dell'accusa e della penitenza è una delle più oscure del Mabinogion. Rachel Bromwich (Trioedd Ynys Prydein, 1961) ha dimostrato che Rhiannon era originariamente una divinità del cavallo di importanza pari o superiore a Epona gallo-romana: la punizione "fai il cavallo" è teologicamente precisa — è la de-divinizzazione pubblica, il tentativo di ridurre la dea alla sua forma animale sacra come atto di umiliazione. Il fatto che Rhiannon sopravviva alla punizione con la sua dignità intatta è, in questo senso, il nucleo teologico del mito: la divinità non può essere annullata dall'azione umana.
`,
      }, // TODO: accusa di aver ucciso il figlio, condanna a portare ospiti sulle spalle davanti al castello
      {
        era: "Terzo Ramo del Mabinogion",
        name: "La seconda vita con Manawydan",
        text: `Nel Terzo Ramo (Manawydan fab Llŷr) Rhiannon è figura più defilata ma non meno importante. Il suo rapimento nel mondo magico — dove viene costretta a portare collari d'asino — rispecchia la punizione del Primo Ramo: ancora la bestializzazione della dea, ancora la resistenza dignitosa. La liberazione avviene attraverso la negoziazione intelligente di Manawydan, non attraverso la forza. Il Terzo Ramo offre una visione di coppia matura e complementare: Manawydan la saggezza razionale, Rhiannon la forza spirituale.`,
      }, // TODO: matrimonio con Manawydan fab Llyr dopo la morte di Pwyll
      {
        era: "Rhiannon, Epona, Macha",
        name: "La triade celtica del cavallo divino",
        text: `La parentela strutturale tra Rhiannon gallese, Epona gallo-romana e Macha irlandese è uno dei casi meglio documentati di pan-celticità mitica. Tutte e tre sono dee del cavallo associate alla sovranità; tutte e tre subiscono una forma di umiliazione pubblica (Rhiannon porta gli ospiti sulle spalle, Epona è ridotta a simbolo militare nell'esercito romano, Macha è costretta a correre incinta di nove mesi); tutte e tre vengono "reintegrate" attraverso la nascita di un figlio. La studiosa Miranda Aldhouse-Green (Celtic Goddesses, 1995) ha proposto che la triade derivi da un unico archetipo proto-celtico della dea-sovranità-cavallo, distribuito geograficamente nelle tre grandi aree del mondo celtico.`,
      }, // TODO: parallelo funzionale-etimologico con le altre dee-cavallo celtiche
    ],
    cult: `Il sito mitico principale di Rhiannon è Gorsedd Arberth — il tumulo magico che nel testo si identifica con la collina vicino all'attuale Narberth nel Pembrokeshire (Galles sud-occidentale). Narberth/Narbeth porta nel nome la memoria di "Arberth" — la localizzazione geografica del mito è eccezionalmente precisa. Il Pembrokeshire nel suo insieme — quella penisola sud-occidentale che i gallesi medievali chiamavano "la Piccola Inghilterra d'Oltremare" per la sua popolazione mista gallese-normanna — è il territorio di Dyfed e dunque di Rhiannon: ogni collina, ogni guado, ogni bosco è potenzialmente un luogo dove la dea transitò.

I cavalli bianchi associati a Rhiannon rimandano ai cavalli sacri celtico-romani documentati in numerosi santuari gallo-britannici: animali tenuti liberi, non domati né usati, come presenza simbolica della dea. La tradizione britannica dei "cavalli bianchi" scolpiti sui pendii collinari (il Cavallo Bianco di Uffington, Oxfordshire, datato al I sec. a.C.) è stata da alcuni studiosi (Anne Ross, Jacqueline Borsje) connessa al culto della dea-cavallo di cui Rhiannon è la versione letteraria gallese.
`, // TODO: Rhiannon come sopravvivenza letteraria di Epona; nessun santuario identificato ma possibili tracce toponomastiche
    influence: [
      {
        era: "Dea della sovranità e motivo di Macha",
        text: `Il motivo della donna nobile falsamente accusata da testimoni mendaci e costretta a umiliazione pubblica è uno dei più diffusi nella letteratura medievale europea (Berte ai grandi piedi, Genoveva, Elsa di Brabante in Lohengrin). Nel caso di Rhiannon il motivo è carico di una specificità mitica che le versioni continentali perdono: l'accusata è una dea, la punizione è teologicamente significativa (bestializzazione della dea-cavallo), e la resistenza è manifestazione del potere divino inalienabile. Gli studiosi folklorici (Stith Thompson, Motif Index of Folk Literature) catalogano il motivo come "S410 — Persecuted wife" ma la versione gallese è la più arcaica e mitologicamente densa.
`,
      }, // TODO
      {
        era: "Fleetwood Mac e il revival moderno",
        text: `Nel 1975 Stevie Nicks compose "Rhiannon" per il secondo album dei Fleetwood Mac, ispirata a un romanzo di Mary Leader (Triad, 1973) che a sua volta attingeva al mito gallese. Il brano — con il suo ritornello sul "vento che prende", il volo, la libertà — divenne uno dei più iconici della band e rese il nome Rhiannon familiare al pubblico anglofono globale. Nicks cominciò a esibirsi con costumi da "strega gallese" ispirati a Rhiannon, inaugurando un'associazione tra la dea e l'immaginario folk-rock femminista che ha perdurato fino al XXI secolo. La dea gallese è probabilmente, grazie a questa canzone, la divinità celtica più conosciuta dal grande pubblico moderno.
`,
      }, // TODO: la celebre canzone "Rhiannon" di Stevie Nicks (1975)
      {
        era: "Cavalleria, ingiustizia, pazienza — archetipo femminile tragico",
        text: `Rhiannon è stata letta in modo divergente dagli studiosi di genere. Un'interpretazione (Juliette Wood, 1992) la vede come modello di resistenza passiva — la donna che sopravvive mantenendo la dignità — in contrasto con la violenza maschile della cultura eroica gallese. Un'interpretazione opposta (Roberta Valente, 1986) la legge come figura di potere attivo: Rhiannon sceglie sempre, anche quando subisce, e la sua pazienza è forza strategica non rassegnazione. Entrambe le letture concordano che Rhiannon è il personaggio femminile più psicologicamente complesso e autonomo dell'intera letteratura celtica medievale.`,
      }, // TODO
    ],
    texts: [
      {
        title: "L'apparizione a Gorsedd Arberth",
        source: "Mabinogi, Pwyll Pendefig Dyfed, §8",
        text: `"E mentre erano lì seduti, videro una donna su un grande cavallo color bianco latte, con un abito d'oro brillante attorno a lei, venire lungo la strada che passava vicino al tumulo. Il cavallo aveva un'andatura regolare, e tranquilla, e si avvicinava al tumulo. 'Uomini,' disse Pwyll, 'c'è qualcuno di voi che conosce la donna che cavalca là?' 'No, signore,' dissero. 'Andate da lei per scoprire chi è.' Uno di loro si alzò, ma quando giunse alla strada per incontrarla lei era già passata. Lui la seguì al suo passo più veloce — ma più veloce andava, più lontana era lei da lui. Ma il cavallo non cambiava mai la sua andatura."
`,
      }, // TODO
      {
        title: "La sentenza e la penitenza",
        source: "Mabinogi, Pwyll, §20",
        text: `"La penitenza che le fu imposta da parte del consiglio fu questa: stare presso quel palazzo, per sette anni, vicino a un blocco di montaggio di cavalli là fuori. E di raccontare a ogni forestiero che pensava di non sapere la storia — la storia completa. E di offrirsi di portare sulle spalle ogni ospite e visitatore verso il palazzo. E raramente una di quelle offerte veniva accettata. E così trascorse parte dell'anno."
`,
      }, // TODO
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. ARAWN — il Signore dell'Annwn
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "arawn",
    name: "Arawn",
    role: "Re dell'Annwn, l'Altro Mondo Gallese",
    tags: ["Annwn", "Altro Mondo", "Caccia selvaggia", "Scambio di persona"],
    epithet:
      "Sovrano degli Oltremondi, Signore dei Cani Bianchi dalle Orecchie Rosse",
    type: "Divinità",
    chips: ["Annwn", "Primo Ramo", "Caccia", "Scambio di persona"],
    heroColor: "linear-gradient(160deg,#050a14,#0f1f3a,#02050a)",
    bio: `Arawn — il cui nome è di etimologia incerta ma probabilmente connesso al gallese arcaico *ar-ano-, forse "molto abile" o "re argento" — è il sovrano dell'Annwn, il regno ultraterreno della mitologia gallese. A differenza dell'Ade greco o dell'inferno cristiano, l'Annwn non è luogo di punizione né di morte: è un regno parallelo, sovrapponibile al mondo dei vivi, in cui il tempo scorre diversamente, la natura è sempre alla sua perfezione, e la caccia è perpetua ed inesauribile. Arawn ne è il re assoluto, signore di un paradiso ambivalente — magnifico e pericoloso, generoso e insondabile.

L'Annwn gallese ha caratteristiche ben precise che lo distinguono dagli Oltremondo di altre tradizioni. Non è sotterraneo ma orizzontale: si raggiunge attraverso passaggi nel bosco, attraverso nebbie marine, attraverso l'immersione in laghi. Non è un luogo in cui i morti vanno — almeno non nel Mabinogion — ma un piano di esistenza parallelo in cui vivono esseri soprannaturali con propria civiltà, propria politica, proprie guerre. Arawn regna su questo piano con piena sovranità: ha la propria corte, i propri guerrieri, i propri cŵn — i "Cani dell'Annwn", bestie da caccia bianche dalle orecchie rosse, che nel folklore gallese e britannico diventano i "cani della caccia selvaggia" capaci di segnalare la morte con i loro ululati.

L'incontro di Arawn con Pwyll nel Primo Ramo è uno degli episodi inaugurali più riusciti della letteratura celtica medievale. Pwyll sta cacciando nella foresta di Glyn Cuch quando i suoi cani scacciano un cervo e lui lo segue. Arriva al cervo atterrato e trova intorno a lui cani che non conosce — bianchi con orecchie rosse — e scaccia quei cani per nutrire i suoi al posto loro. In quel momento appare Arawn: un uomo alto, in abiti grigi-dorati, su un cavallo grigio, con il corno da caccia. "Non ho bisogno di insultarti per dirlo — la tua maleducazione è stata abbastanza grande." L'offesa è precisa: Pwyll ha scacciato i cani di un re senza conoscerlo — ha mancato di rispetto a chi non conosceva. La riposta di Arawn non è rabbia ma proposta: puoi riparare all'offesa cambiando posto con me per un anno.

Lo scambio proposto da Arawn è un meccanismo narrativo di straordinaria originalità e profondità: per un anno intero i due re vivranno l'uno al posto dell'altro, con aspetto fisico trasformato dalla magia di Arawn così che nessuno sappia dello scambio. Pwyll regnerà sull'Annwn con l'aspetto di Arawn; Arawn regnerà su Dyfed con l'aspetto di Pwyll. Al termine dell'anno Pwyll dovrà combattere a duello singolo con Hafgan — il rivale eterno di Arawn, un re che non può essere ucciso se non con un solo colpo (un secondo colpo lo risusciterebbe). Questa clausola rituale — l'avversario che vive se colpito due volte — è uno dei motivi magici più antichi della tradizione celtica, connesso alla concezione del sacrificio rituale e della morte sacra.

Arawn è una delle poche divinità celtiche insulari raffigurate con chiari tratti di equanimità e giustizia: non punisce Pwyll con violenza, non esige tributo oppressivo. Propone un accordo equo, mantiene la parola, alla fine di un anno incontra il mortale che ha vissuto come lui e lo onora per la sua integrità. Quando Pwyll rispetta la moglie di Arawn per tutto l'anno pur condividendone il letto — un onore rarissimo che va contro l'aspettativa —, Arawn ne è profondamente commosso. "Non avrei potuto fidarmi così di un amico della mia stessa natura" dice. Da quel momento Pwyll ha un nuovo titolo: Pwyll Pen Annwn, "Capo dell'Annwn" — un riconoscimento solenne che trasforma un mortale in signore onorario del mondo soprannaturale.

I cŵn Annwn — i cani dell'Altro Mondo — meritano attenzione separata perché sono la traccia folklorica più viva di Arawn nella tradizione britannica posteriore. Bianchi come neve con orecchie rosse come sangue (la combinazione cromatica tipica degli esseri soprannaturali celtici), abbaianti e ululanti nel cielo notturno, guidati da un cacciatore oscuro a cavallo: questa figura è la "Caccia Selvaggia" (Wild Hunt) delle tradizioni britanniche, germaniche e continentali. In Galles la caccia è specificamente di Arawn; nell'Inghilterra anglo-sassone diventa Herne il cacciatore; nelle tradizioni nordeuropee è Odino con i suoi otto-zampe Sleipnir e le valchirie; nella tradizione francese è la Mesnie Hellequin. La geografia europea della Caccia Selvaggia segue le vie di espansione dei popoli indoeuropei, e Arawn è il nodo gallese di questa rete mitologica transnazionale.

`, // TODO: Arawn re dell'Annwn, il mondo parallelo gallese (≠ inferno cristiano, più simile al Sidhe irlandese), la caccia selvaggia e i cŵn Annwn (cani bianchi dalle orecchie rosse), lo scambio di persona con Pwyll, rivalità con Hafgan
    versions: [
      {
        era: "Primo Ramo — lo scambio con Pwyll",
        name: "Un anno a vicenda sui rispettivi troni",
        text: `Lo scambio di persona tra Arawn e Pwyll è il nucleo narrativo del Primo Ramo ed è struttura mitologica di grande antichità. Il motivo "due re si scambiano identità e regno per un periodo determinato" rispecchia pratiche rituali di sovranità documentate in ambito indo-europeo: in alcune tradizioni il re veniva ritualmente sostituito da un sostituto durante i periodi pericolosi (raccolto, eclissi, malattia), e il sostituto subiva la sorte che il vero re avrebbe dovuto affrontare. Nel caso di Arawn e Pwyll la struttura è più sofisticata: è una prova di fiducia e di onore che trasforma un estraneo in alleato, un mortale in semi-divino. Il risultato — Pwyll che ottiene il titolo di "Capo dell'Annwn" — è la narrativizzazione di un processo di sacralizzazione regale.`,
      }, // TODO: Pwyll incontra Arawn durante una caccia, offesa riparata con lo scambio di identità per un anno intero
      {
        era: "La caccia selvaggia dell'Annwn",
        name: "I cŵn Annwn — cani spettrali",
        text: `I cŵn Annwn ("cani dell'Annwn") sono l'eredità folklorica più vitale di Arawn. In Galles la credenza nei cani spettrali bianchi dalle orecchie rosse è documentata dai folkloristi del XIX-XX secolo (Wirt Sikes, British Goblins, 1880; Marie Trevelyan, Folk-Lore and Folk-Stories of Wales, 1909): si credeva che il loro ululato nella notte preannunciasse una morte imminente, e che la loro caccia selvaggia attraverso il cielo fosse visibile nelle notti tempestose. Il nome Cwn Annwn è ancora conosciuto nelle aree rurali gallesi. La figura è entrata nella letteratura fantasy moderna attraverso Arthur Machen (The Great God Pan, 1894), Alan Garner (The Weirdstone of Brisingamen, 1960) e Susan Cooper (The Dark is Rising, 1973), che ha reso i "Rider" — cacciatori oscuri a cavallo — una delle figure più potenti della sua saga.

`,
      }, // TODO: i cani bianchi dalle orecchie rosse, figura paneuropea della Wild Hunt
      {
        era: "Annwn vs Hades — l'Altro Mondo gallese",
        name: "Una dimensione parallela, non un inferno",
        text: `L'Annwn gallese differisce profondamente dall'Ade greco e dal concetto cristiano di inferno, e si avvicina di più al Sidhe irlandese. Tutte e tre le concezioni sono "Altro Mondo" piuttosto che "Mondo dei Morti", ma con sfumature diverse. Il Sidhe irlandese è verticale (sotto le colline) e spesso minaccioso; l'Annwn gallese è orizzontale (oltre l'orizzonte o attraverso boschi) e spesso bello. Ade è definitivamente luogo dei morti; Annwn è luogo dei vivi-altri. La relazione tra Annwn e il Graal arturiano — il calderone dell'Annwn nel Preiddeu è proto-Graal — suggerisce che il concetto di "Altro Mondo accessibile agli eroi" sia la radice celtica del ciclo cavalleresco europeo.

`,
      }, // TODO: differenza concettuale con Hades greco e inferno cristiano
    ],
    cult: `Arawn non ha santuari storici identificati come suo culto specifico. La sua dimensione è geograficamente vaga — l'Annwn è ovunque e da nessuna parte — ma alcune aree del Galles conservano memorie toponomastiche. Glyn Cuch, la foresta dove avviene l'incontro con Pwyll, è identificata con la valle del fiume Cuch nella zona del Pembrokeshire orientale, oggi al confine tra Pembrokeshire e Carmarthenshire. La tradizione dei cŵn Annwn è documentata in tutto il Galles rurale, con particolare intensità nelle zone montuose del Galles centrale (Ceredigion, Powys). In queste aree i contadini riconoscevano nelle notti ventose di autunno e inverno il passaggio della caccia di Arawn.`, // TODO: associazioni folkloriche gallesi con la caccia selvaggia; toponomastica di Dyfed e Glamorgan
    influence: [
      {
        era: "Caccia Selvaggia paneuropea",
        text: `Il motivo della Caccia Selvaggia — un gruppo di cacciatori spettrali guidati da un capo soprannaturale che attraversa il cielo notturno — è attestato in tutta l'Europa settentrionale e occidentale con varianti locali. In Galles è la caccia di Arawn con i cŵn Annwn; in Inghilterra è la caccia di Herne il cacciatore (o di re Artù nelle versioni più tarde); nelle tradizioni tedesche e scandinave è Odino con il suo seguito di guerrieri morti (Einherjar) e valchirie; in Bretagna è la Chasse d'Artu o la Mesnie Hellequin. Tutti questi motivi derivano probabilmente da un substrato mitico indoeuropeo comune: la concezione del vento notturno come caccia divina, il cielo stellato come campo di caccia, la morte come essere-inseguiti dai cani dell'Altro Mondo.

`,
      }, // TODO: Wild Hunt germanica, Mesnie Hellequin francese
      {
        era: "Cŵn Annwn nell'immaginario fantasy",
        text: `I cani spettrali bianchi dalle orecchie rosse di Arawn hanno avuto una vita straordinaria nella letteratura fantastica moderna. Arthur Machen nei suoi racconti horror gallesi (The Hill of Dreams, 1907) li evoca come presenza inquietante. Alan Garner in The Weirdstone of Brisingamen (1960) trasforma i cani dell'Annwn in "Sleepers" sotterranei. Susan Cooper in The Dark is Rising (1973) fa della caccia selvaggia uno degli antagonisti principali del ciclo. Lloyd Alexander nel ciclo di Prydain (The Book of Three, 1964) usa direttamente il nome "Annuvin" come regno del male, con il "Cauldron Born" (i guerrieri risuscitati dal calderone) come esercito. Questi adattamenti hanno reso Arawn e il suo mondo familiari a generazioni di lettori anglofoni.

`,
      }, // TODO: i cani spettrali in Tolkien, Susan Cooper, The Witcher
      {
        era: "Arawn come re del Graal primordiale?",
        text: `La connessione tra Arawn re dell'Annwn e il "Re del Graal" del ciclo arturiano è stata proposta da Roger Sherman Loomis (Wales and the Arthurian Legend, 1956) e sviluppata da Jean Markale (Il Graal, 1982). Il calderone dell'Annwn del Preiddeu — che solo il puro può utilizzare — è strutturalmente identico al Graal che solo il puro cavaliere può trovare. Arawn, custode del calderone, prefigurerebbe il Re Pescatore — il re ferito che custodisce il vaso sacro nel suo castello inaccessibile. La tesi è discussa ma culturalmente influente: ha contribuito a collocare la mitologia gallese al centro del dibattito sull'origine del ciclo del Graal.`,
      }, // TODO: connessione con il Preiddeu Annwn e la materia arturiana
    ],
    texts: [
      {
        title: "L'incontro con Pwyll nella foresta di Glyn Cuch",
        source: "Mabinogi, Pwyll, §2",
        text: `"E mentre era lì, sentì il suono di una caccia — con la cornetta e i cani — un suono diverso da qualsiasi cornetta o cane che avesse mai sentito. E la caccia era in arrivo verso di lui su un pianoro boscoso. E vide una muta di cani, che non corrispondeva a nessuna muta che avesse mai visto — i loro capelli erano di un bianco brillante, e le loro orecchie erano di un rosso brillante. E così come il bianco degli orecchie era luminoso, così il rosso delle orecchie era luminoso."

`,
      }, // TODO
      {
        title: "La caccia selvaggia nel folklore gallese",
        source: "Raccolta folklorica XIX sec.",
        text: `"'Amico,' disse Arawn, 'ti libero dall'obbligo che avevi verso di me — e voglia il cielo che la nostra amicizia sia così salda.' 'Ovunque tu voglia venire da me, verrò da te,' disse Pwyll. E da quel momento in poi fu chiamato Pwyll Penn Annwn — Pwyll Capo dell'Annwn — in luogo di Pwyll Pendefig Dyfed."
`,
      }, // TODO
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. GWYDION — il Mago, il Trickster
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "gwydion",
    name: "Gwydion fab Dôn",
    role: "Mago Supremo, Poeta, Trickster degli Dèi",
    tags: ["Magia", "Poesia", "Trickster", "Zio di Lleu"],
    epithet: "Gwydion figlio di Don, il Mago per Eccellenza della Britannia",
    type: "Divinità",
    chips: ["Quarto Ramo", "Gwynedd", "Magia", "Cath Palug"],
    heroColor: "linear-gradient(160deg,#0a140a,#1f3a1f,#050a05)",
    bio: `Gwydion fab Dôn è il mago per eccellenza della mitologia gallese — il personaggio più complesso, più brillante e moralmente più ambiguo dell'intero Mabinogion. Figlio di Don, nipote di Math fab Mathonwy (re di Gwynedd), fratello di Arianrhod, zio e protettore di Lleu Llaw Gyffes, Gwydion unisce in sé le funzioni del mago, del poeta, del guerriero, del trickster e del padre-surrogato in una figura che non trova equivalente diretto in nessun'altra tradizione celtica — pur avendo chiari paralleli strutturali con Odino norreno (per la magia, la poesia, l'inganno), con Merlino arturiano (per il ruolo di consigliere e creatore di re), e con Lug-Lugus (per la poliedricità delle competenze).

Il nome Gwydion è etimologicamente connesso al proto-celtico *Wiedu-gnos, forse "conoscitore degli alberi" o "sapiente del bosco" — un'origine che lo lega alla tradizione druidica del sapere silvestre, alla poesia e alla conoscenza della natura come strumenti magici. La Via Lattea in gallese si chiama Caer Gwydion — il Castello di Gwydion — suggerendo che il mago avesse una proiezione cosmica analoga a quella di Don nel cielo: la Via Lattea come percorso del grande sciamano celeste, strada dei morti o dei viaggiatori tra i mondi.

Nel Quarto Ramo del Mabinogion Gwydion è protagonista di tre grandi episodi che progressivamente rivelano le diverse sfaccettature del suo carattere. Nel primo episodio è il trickster irresponsabile: porta i maiali magici dell'Annwn (rubati con un inganno a Pryderi di Dyfed) come regalo a Math, scatenando una guerra tra Gwynedd e Dyfed in cui Pryderi perirà — ucciso da Gwydion in duello. Il furto è motivato dal desiderio di Gilfaethwy, fratello di Gwydion, per la vergine-tenente di Math (Goewin); Gwydion orchestra la guerra come diversivo per permettere a Gilfaethwy di violentare Goewin. È collaborazione attiva in uno stupro — il peggio moralmente di Gwydion. La punizione di Math è severa e creativa: trasforma i due fratelli in animali accoppiati per tre anni (cerva e cervo, cinghiale e scrofa, lupa e lupo), così che generino figli l'uno dall'altro e sperimentino l'umiliazione di chi ha umiliato altri.

Nel secondo grande episodio Gwydion si rivela padre-protettore: Arianrhod, sua sorella, partorisce un figlio partenogenetico (Lleu) e gli impone tre maledizioni per nascita — senza nome, senza armi, senza moglie di razza umana. Gwydion si dedica con pazienza e ingegno ad aggirare tutte e tre le maledizioni. Per il nome: si traveste da calzolaio, provoca Arianrhod a fare un'esclamazione ("Llaw Gyffes!" — dalla mano abile!) che diventa il nome del ragazzo. Per le armi: si traveste da bardo, simula un attacco di nemici e costringe Arianrhod a dare armi al figlio per difendersi. Per la moglie: insieme a Math, crea Blodeuwedd dai fiori — una donna magica nata dalla vegetazione. Ogni soluzione è inganno, ogni inganno è amore: Gwydion è il mago che usa la magia non per potere personale ma per proteggere chi ama.

Il terzo episodio è il più oscuro e il più commovente: Lleu, tradito da Blodeuwedd e dal suo amante Gronw, è ferito con la lancia mortale e si trasforma in aquila che vola su un albero a marcire. Gwydion lo trova attraverso tre tappe: vede un cervo che fugge da un albero, vede cadere carne marcescente dall il albero, trova infine l'aquila malata su un frassino. Canta tre englynion — tre brevi poemi evocativi — all'aquila, e a ogni canto l'aquila scende un gradino di ramo. Al terzo canto tocca il grembo di Gwydion, che la tocca col bastone magico e la riporta a forma umana. È una delle scene più belle della letteratura medievale gallese: il mago che recupera il figlio-adottivo attraverso la poesia. Gwydion guarisce Lleu, lo rinforza, lo riporta a combattere. Vendica la morte di Gronw e punisce Blodeuwedd trasformandola in gufo.

`, // TODO: Gwydion figlio di Don, nipote di Math, il mago supremo del Mabinogion. Creatore di maghi, maestro di inganni, padre/zio protettivo di Lleu. Stupro di Goewin e punizione di Math. Creazione di Blodeuwedd. Possibile parallelo con Odino e Merlino.
    versions: [
      {
        era: "Quarto Ramo — la guerra dei porci",
        name: "Inganno ad Arawn e la guerra con Pryderi",
        text: `Il furto dei porci magici di Pryderi è ricco di significato mitologico. I maiali in molte tradizioni celtiche sono animali dell'Altro Mondo — il calderone del Dagda in Irlanda è sempre pieno di maiale, i maiali di Manawydan nel Terzo Ramo sono centrali alla trama. I "maiali di Pryderi" rubati da Gwydion erano stati donati ad Arawn di Annwn — sono dunque animali sacri dell'Altro Mondo introdotti nel mondo umano. Gwydion li ruba e li porta a Gwynedd con un inganno che dura tre giorni prima che Pryderi si accorga dell'imbroglio: i maiali erano stati trasformati illusoriamente in oro, argento e scudi, e l'illusione si dissolve al terzo giorno. W.J. Gruffydd (Math vab Mathonwy, 1928) ha letto questo episodio come evemerizzazione di un mito cosmogonico sulla "discesa" del bestiame sacro dall'Altro Mondo nel mondo umano attraverso l'azione di un dio-trickster.

`,
      }, // TODO: Gwydion ruba i porci di Pryderi con inganno, guerra tra Gwynedd e Dyfed
      {
        era: "Lo stupro di Goewin e la punizione",
        name: "Tre anni trasformato in animali",
        text: `Goewin era la vergine-tenente di Math — la fanciulla il cui grembo doveva ospitare i piedi del re durante ogni periodo di pace, una funzione rituale che la rendeva intoccabile quanto una sacerdotessa. Gilfaethwy, fratello di Gwydion, si era invaghito di lei perdutamente ma non poteva avvicinarla senza violare la sacralità della sua funzione. Gwydion, invece di dissuadere il fratello, orchestrò l'intera faccenda: organizzò il furto dei maiali di Pryderi sapendo che avrebbe provocato una guerra, e durante la guerra — quando Math era in campo e Goewin era senza la protezione del re — Gilfaethwy la violentò nel letto stesso di Math. Gwydion fu complice attivo e consapevole.Quando Math tornò e scoprì l'accaduto, la sua reazione fu quella del mago-re che punisce con la stessa precisione con cui crea. Non uccise i due fratelli — avrebbe potuto, aveva il diritto — ma li trasformò in animali accoppiati per tre anni consecutivi, uno maschio e uno femmina, costretti a generare figli l'uno dall'altro. Il primo anno: Gwydion divenne cervo, Gilfaethwy cerva — generarono un cerbiatto. Il secondo anno: Gwydion divenne cinghiale, Gilfaethwy scrofa — generarono un cucciolo di cinghiale. Il terzo anno: Gwydion divenne lupo, Gilfaethwy lupa — generarono un lupacchiotto. Ogni anno Math prendeva il figlio generato, lo toccava con la bacchetta e lo trasformava in bambino umano. Alla fine dei tre anni restituì a entrambi la forma umana, dichiarando che avevano subito sufficiente vergogna: avevano conosciuto la condizione della preda, della bestia da macello, del predatore — e avevano generato figli l'uno dall'altro come punizione speculare allo stupro che avevano inflitto a Goewin. Math poi sposò Goewin per restituirle l'onore perduto.`,
      }, // TODO: Math punisce Gwydion e Gilfaethwy trasformandoli in cerva+cervo, cinghiale+scrofa, lupa+lupo per generare figli l'uno dall'altro
      {
        era: "La creazione di Lleu",
        name: "Il figlio di Arianrhod e la tripla maledizione",
        text: `Arianrhod si era presentata a Math come candidata per la funzione di vergine-tenente, ma quando scavalcò la bacchetta magica del re — la prova di verginità — partorì due bambini in modo del tutto inaspettato, rivelando pubblicamente che non era vergine. Il primo bambino corse subito verso il mare e divenne Dylan Eil Ton. Il secondo — ancora informe, troppo piccolo — fu raccolto di soppiatto da Gwydion, avvolto in seta e tenuto in segreto. Arianrhod, umiliata davanti alla corte di Math, sapeva che il bambino era suo figlio ma non voleva riconoscerlo: era la prova vivente della sua vergogna.
Le tre maledizioni che impose al bambino — le tynged, i "destini necessari" — erano armi di negazione esistenziale. La prima: il bambino non avrebbe avuto nome finché lei stessa non glielo avesse dato (senza nome non esiste socialmente). Gwydion lo aggirò travestendosi da calzolaio con il bambino e provocando Arianrhod a fare un'esclamazione ammirata — "mano abile!" — che diventò il nome: Lleu Llaw Gyffes. La seconda: non avrebbe mai portato armi finché lei stessa non gliele avesse date (senza armi non è guerriero). Gwydion tornò travestito da bardo, simulò un imminente attacco navale al castello di Arianrhod, e la stessa madre — nell'urgenza del momento — armò il figlio per difendersi. La terza, la più disperata: non avrebbe mai sposato una donna di nessuna razza della Terra. Questa Gwydion la aggirò solo con l'aiuto di Math, creando Blodeuwedd dai fiori — una donna non di nessuna razza della Terra, ma nata dalla terra stessa.`,
      }, // TODO: Gwydion aiuta Lleu ad aggirare le tre maledizioni della madre Arianrhod
      {
        era: "La creazione di Blodeuwedd",
        name: "La moglie-fiore per Lleu",
        text: `La terza maledizione di Arianrhod — Lleu non sposerà mai donna di nessuna razza della Terra — sembrava inaggirabili: non c'era razza umana, fate o divinità che non fosse "di questo mondo". La risposta di Gwydion e Math fu creare una donna che non appartenesse a nessuna razza — perché non era nata, era stata fatta. Scelsero tre fiori con precisione simbolica: il fiore di quercia (albero sacro dei druidi, albero degli dèi, l'albero per eccellenza del sacro celtico), il fiore di ginestra dorata (colore del sole, il colore di Lleu dio della luce), e il fiore di ulmaria o regina dei prati (meadowsweet in inglese, la pianta aromatica dei prati gallesi, regina degli erbi selvatici). Intrecciarono i fiori, pronunciarono le parole magiche, e dalla materia vegetale emerse la donna più bella che chiunque avesse mai visto.
La chiamarono Blodeuwedd — "Volto di Fiore" — e la battezzarono, dandole esistenza formale e nome. Fu data in sposa a Lleu nel castello di Mur Castell nel Gwynedd, e per un tempo la vita fu ordinata: Lleu governava il suo territorio, Blodeuwedd era la sua signora. Ma la creazione non era stata consenso: Blodeuwedd non aveva scelto di esistere né di sposare chi aveva sposato. Era natura strappata alla sua condizione e costretta in forma umana — e come la natura, non poteva essere contenuta da una forma che non le apparteneva.`,
      }, // TODO: insieme a Math, crea una donna dai fiori di quercia, ginestra e regina dei prati
      {
        era: "Gwydion, Odino, Merlino",
        name: "Il mago-poeta indoeuropeo",
        text: `La comparazione strutturale tra Gwydion e Odino è stata sviluppata da Georges Dumézil (Gods of the Ancient Northmen, 1959) e da Miranda Aldhouse-Green. Entrambi sono maghi-poeti, entrambi sono ingannatori, entrambi sono figure paterne ambivalenti (Gwydion protegge Lleu come un padre; Odino crea e abbandona i suoi protetti). Entrambi hanno un bastone magico e una via celeste (Caer Gwydion / la Via Lattea; Bifröst / il ponte cosmico). La parentela con Merlino è invece diretta nella letteratura medievale: Geoffrey di Monmouth conosceva le tradizioni di Gwydion gallese, e la figura del mago-consigliere di re che crea eroi attraverso magie è comune a entrambi.

`,
      }, // TODO: parallelo strutturale tra i grandi maghi-poeti indoeuropei
    ],
    cult: `Caer Gwydion — il nome gallese della Via Lattea — è il "santuario celeste" di Gwydion: il cielo notturno come percorso del grande mago. Nella toponomastica del Gwynedd (Galles del nord) diversi siti portano il nome del mago o dei suoi eroi: Dinas Dinlleu (la "Fortezza di Lleu", sulla costa di Gwynedd) è il sito in cui Gwydion porta Lleu per educarlo lontano da Arianrhod. Caer Arianrhod — citata nel Quarto Ramo come sede della sorella-antagonista — è identificata con una formazione rocciosa sommersa vicino a Dinas Dinlleu, visibile con la bassa marea. Nantlle, piccola valle nel Gwynedd, conserva probabilmente il nome di Lleu in forma evemerizzata.
`, // TODO: Caer Gwydion (la Via Lattea nel nome gallese), toponimi in Gwynedd
    influence: [
      {
        era: "Merlino — l'erede medievale",
        text: `Geoffrey di Monmouth costruisce Merlino (Historia Regum Britanniae, 1136; Vita Merlini, 1150) su substrati narrativi gallesi che includono Gwydion ma anche Myrddin (un bardo-profeta gallese del VI sec., pazzo dopo una battaglia, simile a Suibhne irlandese). Il Merlino di Geoffrey fonde le due tradizioni: il mago-creatore di Gwydion (Merlino costruisce Stonehenge, crea il concepimento di Artù) con il mago-profeta di Myrddin. Attraverso Geoffrey, Chrétien de Troyes e Thomas Malory, il Gwydion gallese ha influenzato l'intera concezione europea del mago letterario — da Merlino a Gandalf (Tolkien conosceva il Mabinogion) a Dumbledore.

`,
      }, // TODO: possibile influsso di Gwydion sul Merlino di Geoffrey e Chrétien
      {
        era: "Il trickster celtico",
        text: `Gwydion è il membro celtico della famiglia universale dei "trickster costruttivi" — figure mitologiche che usano l'inganno non per distruzione ma per creazione. A differenza di Loki norreno (che alla fine distrugge) o di Hermes greco (che inganna per sopravvivenza), Gwydion inganna per proteggere: inganna Arianrhod per dare un nome e armi a Lleu, inganna (con Math) per creare Blodeuwedd. Anche il suo inganno più oscuro — la guerra per i maiali — è motivato dall'amore per il fratello, anche se ha conseguenze disastrose. Il trickster gallese non è mai puramente malvagio né puramente benevolo: è complessità, come la magia stessa.

`,
      }, // TODO: Gwydion come archetipo del "trickster costruttivo"
    ],
    texts: [
      {
        title: "L'inganno di Pryderi per i porci",
        source: "Mabinogi, Math fab Mathonwy, §56",
        text: `"Deri a dyf yn ardudwy, / Nid hawdd ei amgylchynu; / Yn brig pren ai nodau, / Lleu Llaw Gyffes a'm lluddio. / ('Una quercia cresce in Ardudwy / non è facile abbracciarla; / sulla cima dell'albero sono i suoi segni, / Lleu Llaw Gyffes mi trattiene.') — E quando fu cantata questa, scese l'aquila dal primo ramo di quell'albero fino al ramo di mezzo. E Gwydion cantò altri versi..."`,
      }, // TODO
      {
        title: "La creazione di Blodeuwedd",
        source: "Mabinogi, Math fab Mathonwy, §78",
        text: `"Allora prendono i fiori di quercia, i fiori di ginestra e i fiori di ulmaria, e con questi producono la fanciulla più bella e più perfetta che chiunque abbia mai visto. E la battezzano e le danno il nome di Blodeuwedd — Volto di Fiore."`,
      }, // TODO
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. LLEU LLAW GYFFES — il Luminoso dalla Mano Sicura
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "lleu",
    name: "Lleu Llaw Gyffes",
    role: "Giovane Dio Solare, Figlio di Arianrhod",
    tags: ["Sole", "Aquila", "Maledizione", "Resurrezione"],
    epithet: "Lleu dalla Mano Abile — il Lugh Gallese, il Giovane Luminoso",
    type: "Divinità",
    chips: ["Quarto Ramo", "Gwynedd", "Lugus gallese", "Aquila"],
    heroColor: "linear-gradient(160deg,#1a1400,#3a2f10,#0a0800)",
    bio: `Lleu Llaw Gyffes — "Lleu dalla Mano Abile" o "il Luminoso dalla Presa Sicura" (dal gallese lleu "luce, luminoso" e llaw gyffes "mano abile, presa ferma") — è il giovane dio solare del Galles, corrispondente diretto di Lugh irlandese e di Lugus gallo-romano, membro di quella famiglia pan-celtica del "dio luminoso dalle mille arti" che si estende dalla Spagna alla Britannia alla Pannonia. La sua storia nel Quarto Ramo del Mabinogion è però più tragica e più poetica di quella degli omologhi insulari: è la storia di un'esistenza impossibile che solo la magia può rendere possibile, e di una morte-trasformazione che svela la natura solare del personaggio.

Lleu nasce in modo straordinario dal corpo di Arianrhod durante il test di verginità di Math — un episodio teologicamente oscuro ma mitologicamente denso. Arianrhod, figlia di Don, si presenta a Math come possibile nuova "vergine-tenente" (portaitrice dei piedi del re durante i periodi di pace). Math le chiede di scavalcare la sua bacchetta magica come prova: nel momento in cui lo fa, due bambini cadono dalla sua persona. Il primo è Dylan Eil Ton ("Figlio dell'Onda"), che immediatamente corre verso il mare e diventa creatura marina. Il secondo — un piccolo essere ancora informe — viene raccolto da Gwydion, avvolto in seta e allevato in segreto. Cresce a un ritmo innaturalmente accelerato: in un anno ha la statura di un bambino di due anni, poi di quattro, poi di otto. È Lleu.

Arianrhod, umiliata dalla rivelazione pubblica della sua maternità, scarica la sua vergogna sul figlio imponendo tre maledizioni (tynged, letteralmente "destini necessari"): il bambino non avrà mai nome se non lei stessa glielo darà; non avrà mai armi se non lei stessa gliele darà; non sposerà mai una donna di nessuna razza della Terra. Ogni maledizione è una forma di morte sociale — senza nome non esiste, senza armi non è guerriero, senza sposa non ha stirpe. Gwydion aggira tutte e tre con tre inganni successivi. Per il nome: si traveste da calzolaio con Lleu e provoca Arianrhod a fare un'esclamazione ammirata per l'abilità del bambino — "Il bambino dalla mano abile!" (Llaw Gyffes) — e Gwydion la blocca: "Questo è il suo nome ora. Grazie." Per le armi: torna travestito da bardo, simula un attacco nemico, e Arianrhod stessa dà le armi al figlio per la difesa — Gwydion la blocca di nuovo: "Gliele hai date tu. La maledizione è rotta." Per la sposa: Gwydion e Math creano Blodeuwedd dai fiori.

L'esistenza di Lleu è dunque costruita interamente sull'inganno — non per sua scelta ma per necessità. È un essere che non dovrebbe esistere (è nato contro la volontà della madre), non può esistere socialmente (è privo dei tre fondamentali dell'identità maschile celtica), e sopravvive solo grazie all'ingegno instancabile dello zio. Questa fragilità ontologica si riflette nella sua "morte impossibile": Lleu può essere ucciso solo in condizioni paradossali — con un piede su un caprone e uno sul bordo di un bagno, con una lancia forgiata solo nelle ore del vespro domenicale, in un luogo che non sia né dentro né fuori. È un essere di soglie, e può morire solo in una soglia.

Quando Blodeuwedd, innamoratasi di Gronw Pebr signore di Penllyn, orchestra la morte di Lleu, è proprio questa condizione di soglia a essere sfruttata. Blodeuwedd finge di essere preoccupata per lui, lo interroga sul modo in cui potrebbe morire, e lui glielo rivela incautamente. Gronw forgia la lancia nei momenti prescritti; Blodeuwedd costruisce il bagno e porta il caprone. Lleu si posiziona nella condizione paradossale — e Gronw lancia. La lancia lo trafigge. Ma Lleu non muore: si trasforma in aquila e vola via urlando.

La trasformazione in aquila è il momento teologicamente più importante del racconto. Lleu non muore perché un dio solare non può morire — può solo trasformarsi. L'aquila è simbolo solare per eccellenza in molte tradizioni (l'aquila di Zeus, l'aquila dell'imperatore romano, l'aquila degli sciamani siberiani); in questo contesto è la forma che l'anima-sole assume quando il corpo fisico è distrutto. Lleu-aquila siede su un frassino (altro albero solare) e si decompone lentamente — il sole d'inverno che declina — finché Gwydion lo trova e lo richiama con tre poemi. Il recupero è la rinascita solare: il dio del sole che torna a primavera, guarito e vendicato.

`, // TODO: Lleu come versione gallese di Lugh/Lugus, figlio partenogenetico di Arianrhod, le tre maledizioni aggirate da Gwydion, il matrimonio con Blodeuwedd, il tradimento di lei con Gronw, la "morte impossibile" (con un piede su un caprone e uno in un bagno), la trasformazione in aquila, la resurrezione.
    versions: [
      {
        era: "Quarto Ramo — la nascita e le tre maledizioni",
        name: "Il figlio che non doveva nascere",
        text: `Il Quarto Ramo dedica ampio spazio alle tre tynged di Arianrhod e ai tre inganni di Gwydion per aggirarle. La struttura tripartita (tre prove, tre superamenti) è tipica della narrativa celtica e rispecchia la tripartizione funzionale indoeuropea: nome (identità/sovranità), armi (funzione guerriera), sposa (fertilità/stirpe). Lleu deve acquisire tutte e tre le funzioni per esistere come persona completa. La particolarità è che le acquisisce attraverso l'inganno — l'identità è rubata al linguaggio, le armi all'urgenza, la sposa alla magia. Nessuna delle tre è legittima nel senso ordinario; Lleu è un essere la cui esistenza è interamente fondata su eccezioni alla norma.

`,
      }, // TODO: nascita partenogenetica, Arianrhod gli nega nome, armi, moglie
      {
        era: "L'aggiramento delle maledizioni",
        name: "Gwydion ingannatore",
        text: `Le tre maledizioni di Arianrhod erano formulate con la precisione di chi conosce la legge magica: erano tynged — destini necessari, vincoli di parola che si autoavverano. Aggirarle richiedeva altrettanta precisione linguistica e una comprensione profonda di come la magia funziona attraverso il linguaggio: non si può rompere una tynged con la forza, ma si può far sì che chi l'ha pronunciata la annulli inconsapevolmente con le proprie parole.Per il nome: Gwydion si travestì da calzolaio ambulante e si presentò al castello di Arianrhod con il bambino, fingendo di dover misurare i piedi della signora per farle un paio di scarpe. Mentre lavorava, il bambino scagliò un sasso con mano ferma e colpì un pettirosso sull'asse della nave. Arianrhod, colpita dall'abilità del tiro, esclamò spontaneamente: "È colpito dalla mano abile del bambino biondo!" — e Gwydion la bloccò immediatamente: "Proprio così — e ora ha il suo nome. Si chiamerà Lleu Llaw Gyffes, il Luminoso dalla Mano Abile. E sei stata tu a darglielo." Arianrhod capì di essere stata ingannata e si infuriò, ma la parola era pronunciata: la tynged era rotta.Per le armi: Gwydion tornò al castello di Arianrhod travestito da bardo con Lleu ormai cresciuto, questa volta come cantastorie straniero con un giovane compagno. Quella notte, mentre tutti dormivano, Gwydion usò la magia per far apparire una flotta di navi nemiche all'orizzonte e risuonare trombe di guerra. Il castello si svegliò nel panico. Arianrhod stessa, vedendo il pericolo imminente e il giovane straniero senza difese, gli porse spada e scudo con le proprie mani: "Prendi queste — ne hai bisogno." Gwydion tolse subito l'incantesimo delle navi e si rivelò: "E ora ha le armi. Grazie, sorella — le hai date tu." Arianrhod era furiosa oltre ogni misura, ma la seconda tynged era rotta.Per la sposa: questo aggiramento non poté farlo Gwydion da solo — richiedeva Math, la magia più potente del Gwynedd. Nessuna donna di nessuna razza della Terra poteva sposare Lleu. Ma una donna nata non dalla Terra ma dai suoi fiori, creata dalla magia piuttosto che dalla nascita — quella non era "di nessuna razza della Terra". Math e Gwydion raccolsero i fiori di quercia, ginestra e ulmaria, li intrecciarono con le formule appropriate, e Blodeuwedd emerse dal vegetale. La terza maledizione era aggirata — non rotta, ma elusa. E come ogni soluzione che elude piuttosto che risolvere, portò con sé le proprie conseguenze.`,
      }, // TODO: il nome "Llaw Gyffes" ottenuto con l'inganno delle scarpe, le armi ottenute fingendo un assalto al castello
      {
        era: "Il tradimento di Blodeuwedd",
        name: "La morte impossibile e l'aquila",
        text: `Mentre Lleu era assente per visitare Math, Gronw Pebr signore di Penllyn passò vicino a Mur Castell durante una caccia e chiese ospitalità per la notte. Blodeuwedd lo accolse — era suo dovere di signora — e quella sera i due si innamorarono. Nei tre giorni successivi Gronw rimase al castello, e ogni giorno la risoluzione si solidificò: Lleu doveva morire. Non per crudeltà gratuita, ma perché non c'era altro modo per Blodeuwedd di avere la vita che aveva scelto invece di quella che le era stata assegnata.
Il problema era la "morte impossibile" di Lleu — quella condizione paradossale che rendeva il dio solare uccidibile solo in un unico momento di soglia. Blodeuwedd escogitò un piano di sottile crudeltà affettiva: quando Lleu tornò, finse di essere tormentata dall'angoscia per lui, di non riuscire a dormire pensando alla sua vulnerabilità. "Come potrei perdere te? Come potrei sopravviverti?" — e Lleu, commosso da quella che credeva cura autentica, le rivelò le condizioni impossibili della sua morte: né dentro né fuori, né a cavallo né a piedi, con un piede sul bordo di una vasca da bagno e l'altro sul dorso di un caprone, colpito da una lancia forgiata solo durante le ore del vespro domenicale per un anno intero.
Gronw cominciò a forgiare la lancia. Un anno dopo era pronta. Blodeuwedd costruì la vasca sulla riva del fiume, con un tetto ad arco sopra e un caprone legato accanto. Convinse Lleu a mostrarle esattamente come avrebbe potuto essere ucciso — "solo per capire, solo per essere certa che sia davvero impossibile." Lleu, con la fiducia di chi non può immaginare il tradimento di chi lo ama, si posizionò: un piede sul bordo della vasca, uno sulla schiena del caprone. In quel momento Gronw uscì dall'agguato e lanciò la lancia. La punta trapassò il fianco di Lleu. Lleu lanciò un grido straziante — e si trasformò in aquila. L'aquila volò via urlando e non fu più vista.
L'aquila-Lleu si posò su un frassino in cima a una montagna e lì rimase, deperendo lentamente. Il dio solare ferito si decomponeva sull'albero come il sole d'inverno che declina: la carne cadeva dal suo corpo, i vermi la consumavano, ma l'uccello non moriva. Gwydion lo cercò per tutta la Britannia guidato da tre segni: prima una scrofa che correva frenetica verso un albero e ne mangiava la carne marcia che cadeva; poi l'albero stesso, un frassino altissimo che cresceva tra due laghi; poi l'aquila sul ramo più alto, spettro di quello che era stato. Gwydion cantò i tre englynion — i tre poemi evocativi — e a ogni canto l'aquila scese di un ramo. Al terzo cadde sul grembo del mago, che la toccò con la bacchetta: Lleu tornò uomo, scheletrico, quasi morto, ma vivo. Ci vollero mesi di cure per restituirlo alla sua forza — e poi venne la vendetta su Gronw, e la trasformazione di Blodeuwedd in gufo.`,
      }, // TODO: la condizione impossibile che Gronw e Blodeuwedd realizzano; trasformazione di Lleu in aquila marcescente sull'albero
      {
        era: "Lleu vs Lugh vs Lugus",
        name: "Il dio pan-celtico delle arti",
        text: `La corrispondenza etimologica Lleu (gallese) = Lugh (irlandese) = Lugus (gallico) è filologicamente certa: tutti derivano da *Lugos proto-celtico, probabilmente "il Luminoso" o "il Corvo" (le due interpretazioni coesistono nella letteratura specialistica). Le funzioni corrispondono: tutti e tre sono dèi delle arti multiple, tutti e tre sono associati alla luce e al sole, tutti e tre hanno una "ferita" o una "morte" legata all'antagonista paterno (Balor per Lugh, Gronw per Lleu). La differenza principale è di registro: Lugh in Irlanda è attivo, guerriero, vincitore; Lleu in Galles è più passivo, vittima, trasformato. Il Lleu gallese sembra preservare uno strato mitico più arcaico e più simbolicamente denso rispetto al Lugh "eroico" della tradizione irlandese tarda.
`,
      }, // TODO: confronto etimologico-funzionale con Lugh irlandese e Lugus gallico
    ],
    cult: `Dinas Dinlleu, promontorio costiero sulla penisola di Llŷn nel Gwynedd (Galles del nord), porta nel nome la memoria di Lleu — è letteralmente "la Fortezza di Lleu" e si identifica con il luogo dove Gwydion porta il bambino per educarlo lontano da Arianrhod. Oggi è un'altura costiera con resti di un forte dell'età del Ferro — il luogo fisico coincide con il sito mitico. Caer Arianrhod, la fortezza della madre-antagonista, è identificata con una formazione rocciosa sottomarina vicina alla costa, visibile con la bassa marea, localmente nota come Caer Arianrhod. La toponomastica del Gwynedd settentrionale è punteggiata di nomi legati a Lleu e alla sua storia, rendendo questa area una delle più dense geografie mitiche del Galles.

`, // TODO: Dinas Dinlle (la "fortezza di Lleu") in Gwynedd, sito archeologico
    influence: [
      {
        era: "Pan-celticità del dio Lugh/Lleu/Lugus",
        text: `Lleu è il membro gallese della più documentata famiglia pan-celtica divina. Il suo equivalente irlandese Lugh (vedi sezione irlandese di Mythologia) combatte nella Seconda Battaglia di Mag Tuired e uccide Balor col suo occhio; il suo equivalente gallico Lugus è il "Mercurio" di Cesare, dio di tutte le arti, cui sono dedicate decine di iscrizioni. Attraverso questa triade il dio solare celtico ha lasciato tracce toponomastiche in tutta Europa: Lione (Lugdunum), Leiden, Lugo, Laon, Carlisle — tutti nomi che portano Lugus/Lleu/Lugh nel loro DNA etymologico.
`,
      }, // TODO
      {
        era: "Il motivo del dio-solare ucciso dalla moglie",
        text: `La morte di Lleu per tradimento di Blodeuwedd ha paralleli significativi in altre tradizioni: Balder ucciso dal vischio che Frigg aveva dimenticato di proteggere, Adone ucciso dal cinghiale mentre era con Venere-Afrodite, Osiride ucciso da Seth mentre era con Iside. In tutti questi casi il dio della luce/vegetazione/rinascita muore per una debolezza legata alla sua relazione con il femminile — e in tutti i casi risorge o viene vendicato. Il motivo è stato interpretato da Frazer (Il Ramo d'Oro, 1890) come mito agrario del ciclo stagionale: il dio che muore in autunno e risorge in primavera. Lleu-aquila che si decompone sull'albero invernale e viene richiamato da Gwydion in primavera è la versione gallese di questo archetipo cosmico.

`,
      }, // TODO: parallelo con Balder, Adone, Osiride
      {
        era: "Il Green Knight e Gawain",
        text: `Alcuni studiosi (R.S. Loomis, Celtic Myth and Arthurian Romance, 1927) hanno proposto connessioni tra la "morte impossibile" di Lleu e il contratto del Green Knight in Sir Gawain and the Green Knight (XIV sec.). In entrambi i casi la morte è soggetta a condizioni paradossali che trasformano il guerriero in qualcosa di altro (Lleu in aquila, Green Knight in testa mozzata che si rialza). La connessione non è diretta ma attraverso il substrato celtico-britannico che alimenta tutta la letteratura arturiana medievale.

`,
      }, // TODO: possibile influsso sulla letteratura arturiana medievale
    ],
    texts: [
      {
        title: "Il nome ottenuto con l'inganno",
        source: "Mabinogi, Math fab Mathonwy, §70",
        text: `"'Signora,' disse Gwydion, 'guarda la mano del ragazzo — ha una presa abile, dalla mano ferma.' 'È un peccato che Dio non abbia permesso che sua madre lo guardasse.' E quando disse questo, Gwydion rise. 'Quello,' disse, 'è ora il suo nome — Lleu Llaw Gyffes! E abbastanza bene gli si addice.' Da quel momento il giovane fu chiamato Lleu Llaw Gyffes."`,
      }, // TODO
      {
        title: "La descrizione della morte impossibile",
        source: "Mabinogi, Math fab Mathonwy, §88",
        text: `"'Non potrei essere ucciso né dentro né fuori, né a cavallo né a piedi. Sarebbe necessario fare un bagno per me sulla riva di un fiume, con un tetto ad arco sopra, e costruire un telaio, e coprire il tetto di paglia. E se venissi con un piede sul bordo della vasca e l'altro sul dorso di un caprone, e qualcuno mi colpisse in quel momento, morirei.'"`,
      }, // TODO
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     6. BRAN IL BENEDETTO — il Gigante Re di Britannia
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "bran",
    name: "Bran fab Llŷr",
    role: "Re-Gigante di Britannia, il Benedetto",
    tags: ["Gigante", "Testa parlante", "Calderone", "Re Sacrificale"],
    epithet:
      "Bendigeidfran — Il Benedetto, il Corvo, il Re che Visse nella Testa",
    type: "Divinità",
    chips: [
      "Secondo Ramo",
      "Irlanda",
      "Calderone della Rinascita",
      "Torre di Londra",
    ],
    heroColor: "linear-gradient(160deg,#1a0505,#3a0f12,#0a0203)",
    bio: `Bran fab Llŷr — Bendigeidfran, "il Benedetto", figlio del Mare (Llŷr è il mare personificato, parallelo del Lir irlandese e del Lear shakespeariano) — è la figura più monumentale, letteralmente e simbolicamente, dell'intera mitologia gallese. Re-gigante di Britannia — così grande che nessuna casa o nave lo può contenere — fratello di Branwen e di Manawydan, possessore del calderone della rinascita, Bran è il sovrano-sacro per eccellenza della tradizione brittonica: la cui grandezza è proporzionale al sacrificio che compie, e la cui morte è fondazione piuttosto che fine.

Il nome Bran significa "corvo" in gallese antico — e il corvo, nelle tradizioni celtiche, è uccello della guerra, della profezia e della morte. Bran porta nel nome la sua funzione cosmologica: è il "corvo-re", il guardiano oscuro della sovranità brittonica. L'epiteto Bendigeidfran — "il Benedetto" — è paradossalmente cristiano nella forma ma precristiano nel contenuto: non "benedetto da Dio" nel senso cristiano, ma "benedetto" nel senso antico di "consacrato, sacro, portatore di benedizione" — la stessa sacralità che nell'Irlanda antica aderiva al re che si sacrificava per la terra.

Il Secondo Ramo del Mabinogion (Branwen ferch Llŷr, "Branwen figlia di Llŷr") è il testo più grandioso e più tragico del corpus gallese — un racconto di guerra, tradimento e sacrificio su scala quasi epica, paragonabile all'Iliade per la sua struttura (una donna come casus belli, una guerra devastante per entrambi i contendenti) e all'Odissea per il viaggio di ritorno che porta solo sette sopravvissuti. Tutto comincia con un'offesa diplomatica: Matholwch, re d'Irlanda, chiede in sposa Branwen, sorella di Bran. Bran accetta e il matrimonio viene celebrato. Ma durante i festeggiamenti, Efnisien — fratellastro di Bran di carattere irascibile e deliberatamente violento — sfregia i cavalli degli irlandesi come affronto. L'offesa è gravissima: i cavalli degli ospiti sono sacri, e mutilarli è insulto diretto al re ospite. Bran compensa con doni generosi, incluso il preziosissimo calderone della rinascita, ma il veleno è seminato.

Il calderone della rinascita è il cuore magico di tutta la storia. È un vaso in cui i guerrieri morti possono essere gettati e ne escono vivi il giorno seguente — senza però recuperare la parola. È strumento di resurrezione ma non di restaurazione completa: i risuscitati sono guerrieri muti, automi della guerra. Bran lo aveva ottenuto da una coppia di giganti irlandesi — un uomo enorme e una donna ancora più enorme — che erano fuggiti dall'Irlanda dopo aver distrutto con la loro violenza qualunque comunità in cui avevano vissuto. Nella tradizione gallese il calderone non è oggetto di benevolenza divina ma strumento di potere ambivalente: dà vita ma toglie parola, resuscita ma non pienamente. La sua presenza nel Secondo Ramo annuncia che la guerra tra Gallia e Irlanda sarà vinta dagli irlandesi attraverso la resurrezione meccanica dei morti — fino a che Efnisien, con un ultimo atto di autodistruzione, non si getta nel calderone e lo rompe dall'interno, morendo per salvare i gallesi.

Bran stesso muore nella guerra d'Irlanda — ferito al piede da una lancia avvelenata (la "ferita impossibile" del sovrano sacro: la ferita che non uccide immediatamente ma condanna) e non guarisce. Ordina ai sette sopravvissuti di tagliare la sua testa e di portarla con loro nel viaggio di ritorno. La testa di Bran — ancora viva, ancora parlante, ancora capace di festeggiare con i compagni — li accompagna per ottantasette anni in un banchetto magico a Gwales (isola di Grassholm, Pembrokeshire). Questo periodo di banchetto incantato è la più lunga "anticamera della morte" della letteratura celtica: i sette sopravvissuti non invecchiano, non soffrono, non ricordano il dolore — finché Heilyn, il meno saggio, non apre la porta vietata verso oriente e il passato ritorna.

La sepoltura della testa di Bran sotto Gwynfryn — la "White Hill" tradizionalmente identificata con la collina su cui sorge la Torre di Londra — è uno degli atti fondativi della mitologia britannica. La testa sepolta è la protezione dell'isola: finché Bran veglia sotto terra, Britannia è inviolabile. Artù, secondo le Triadi gallesi, avrebbe dissotterrato la testa di Bran perché non voleva che la protezione dell'isola dipendesse da nessuno se non da lui — e questa dissotterrazione è considerata uno dei "tre atti sconsiderati" di Artù. I corvi della Torre di Londra — i sei corvi che per tradizione devono sempre rimanere alla Torre pena la caduta della monarchia — sono letti dal folklore come reincarnazione di Bran (il cui nome significa "corvo") o come custodi della sua testa sepolta.

`, // TODO: Bran gigante re di Britannia, "Bendigeidfran" (il Benedetto), fratello di Branwen e Manawydan. Il calderone della rinascita donato agli irlandesi. La guerra per Branwen in Irlanda. Ferita mortale, decapitazione, testa parlante per 87 anni, sepoltura della testa sotto la White Hill di Londra (→ i corvi della Torre di Londra).
    versions: [
      {
        era: "Secondo Ramo del Mabinogion",
        name: "Il matrimonio di Branwen e la guerra d'Irlanda",
        text: `Il Secondo Ramo è strutturalmente il più epico del Mabinogion: ha un cast enorme, una geografia pan-insulare (Galles, Irlanda, le isole del canale), e una progressione narrativa inesorabile verso la catastrofe. La causa della guerra — l'offesa di Efnisien ai cavalli di Matholwch — è sproporzionata all'effetto, e questo è deliberato: il Mabinogion è consapevole dell'irrazionalità della guerra, del modo in cui un'offesa irrilevante può scatenare la distruzione di due popoli. Bran non vuole la guerra ma non può evitarla; è il re-sacrificale che viene trascinato dalla propria grandezza verso la propria fine.

`,
      }, // TODO: Branwen data in sposa a Matholwch re d'Irlanda, l'offesa degli anelli mozzati, la vendetta
      {
        era: "Il calderone della rinascita",
        name: "L'arma tragica del dono",
        text: `Il calderone di Bran è l'oggetto più importante del Secondo Ramo e uno dei più significativi dell'intera mitologia celtica. La sua funzione — risuscitare i guerrieri morti ma privarli della parola — è teologicamente precisa: la resurrezione senza la parola è una condizione di zombie, non di vita piena. Il calderone non è strumento di grazia ma di potere militare, e il suo uso nella guerra d'Irlanda è perversione della sua funzione. La connessione con il calderone del Dagda irlandese (che nutre tutti senza esaurirsi) e con il calderone di Cerridwen (che dà ispirazione poetica) suggerisce che tutti e tre derivino da un archetipo celtico comune del "vaso magico" che esiste in versioni specializzate in ogni sotto-tradizione. Il calderone di Bran — che dà vita ma non parola — è la versione più ambiguamente militare di questo archetipo.
`,
      }, // TODO: Bran aveva donato il calderone agli irlandesi come pegno di pace; in guerra, questi lo usano per far resuscitare i morti, dandosi una superiorità che i gallesi devono vincere al prezzo supremo
      {
        era: "La testa parlante di Bran",
        name: "87 anni di banchetti magici",
        text: `Il motivo della testa mozzata che continua a parlare è uno dei più caratteristici della tradizione celtica: teste parlanti di re e eroi compaiono nell'arte celtica (le teste decapitate sui santuari di Gournay e Ribemont), nella mitologia irlandese (la testa di Donn Bó, la testa di Conall Cernach), e nella tradizione nordica (la testa di Mímir, che Odino consulta). Bran porta questo motivo alla sua più elaborata realizzazione letteraria: una testa che non solo parla ma ospita banchetti, racconta storie, e diventa il centro di una comunità temporanea di sopravvissuti. Il banchetto di Gwales — ottantasette anni di felicità senza tempo — è la versione gallese del "Banchetto di Altra Cura" irlandese o del Valhalla norreno: un paradiso temporaneo e inevitabilmente perduto.`,
      }, // TODO: morto Bran, la testa continua a parlare e i sopravvissuti vivono 87 anni in un palazzo incantato di Gwales; poi la sepoltura
      {
        era: "La Torre di Londra e i corvi",
        name: "Il mito fondativo britannico",
        text: `La tradizione dei corvi della Torre di Londra è documentata dal XVII secolo, ma le sue radici folkloriche sono molto più antiche. La leggenda dice che se i corvi (attualmente almeno sei) lasceranno la Torre, la Corona d'Inghilterra e la Torre stessa cadranno. I corvi sono tenuti con le ali lievemente tarpate per impedire che volino via. Nella loro presenza permanente il folklore britannico riconosce la continuazione del mito di Bran: il corvo-re (Bran = corvo) sepolto sotto la Torre per proteggere Britannia, i suoi "discendenti" corvini che continuano a vegliare. La tradizione è stata manipolata e amplificata in epoche diverse (re Carlo II avrebbe istituzionalizzato il mantenimento dei corvi dopo aver sentito la profezia), ma il suo substrato mitico celtico è riconoscibile.
`,
      }, // TODO: la testa sepolta sotto la Gwynfryn ("White Hill" = Torre di Londra) per proteggere l'isola; i corvi della Torre come eredi simbolici di Bran ("corvo" in gallese)
      {
        era: "Bran e il Re Pescatore arturiano",
        name: "Il Graal primordiale",
        text: `La connessione tra Bran il Benedetto e il "Re Pescatore" (Fisher King) del ciclo del Graal è stata sostenuta con forza da Roger Sherman Loomis (Arthurian Tradition and Chrétien de Troyes, 1949) e da Jean Markale. Il Re Pescatore ha una ferita alla coscia/piede che non guarisce e che consuma la Terra Desolata; Bran ha una ferita al piede da lancia avvelenata che lo condanna a morte e da cui dipende il destino dei suoi seguaci. Il calderone di Bran = proto-Graal; Bran ferito = Re Pescatore. La trasformazione del nome "Bran" in "Bron" (uno dei custodi del Graal nel ciclo di Giuseppe d'Arimatea di Robert de Boron, XII sec.) è un'indicazione che questa connessione era già esplicita nel Medioevo.

`,
      }, // TODO: connessione tra il calderone di Bran e il Graal arturiano; Bran come archetipo del Re Ferito
    ],
    cult: `Harlech, castello-città sul mare nel Merionethshire (Galles del nord), è il sito del banchetto degli uccelli di Rhiannon nel Secondo Ramo — un preludio alla storia di Bran. Gwales (Grassholm, isola spoglia al largo del Pembrokeshire) è il sito del banchetto magico della testa. La Torre di Londra — costruita dai Normanni dopo il 1066 ma sulla White Hill con stratificazioni precedenti — porta nella sua tradizione la memoria della sepoltura della testa di Bran. In Galles diversi pozzi e sorgenti sono detti "Ffynnon Bran" (Sorgente di Bran) e connessi a proprietà terapeutiche, suggerendo un culto localizzato della guarigione associato al nome del re-benedetto.

`, // TODO: White Hill/Torre di Londra, i corvi della Torre come tradizione vivente; Harlech in Galles
    influence: [
      {
        era: "Il Graal e Bran il Benedetto",
        text: `La tesi di Loomis sull'origine celtica del Graal attraverso Bran è ancora dibattuta ma enormemente influente. Robert de Boron nel suo Romanzo di Giuseppe d'Arimatea (ca. 1200) introduce Bron — l'ebreo Bron, cognato di Giuseppe, custode del Graal — il cui nome è quasi certamente adattamento di "Bran". Il calderone-Graal-coppa di Cristo forma una catena simbolica in cui il recipiente magico celtico viene progressivamente sacralizzato attraverso il contatto con la narrativa cristiana. Bran è il nodo più arcaico di questa catena.

`,
      }, // TODO: la tesi di Roger Sherman Loomis e altri sull'influenza di Bran sul Graal
      {
        era: "I corvi della Torre di Londra",
        text: `La tradizione dei corvi della Torre è oggi simbolo identitario britannico riconosciuto globalmente. Il Ravenmaster (custode dei corvi) è una carica ufficiale della Torre con cerimonie quotidiane televisate. I corvi — attualmente di nome come Jubilee, Harris, Gripp — sono cittadini della Corona a pieno titolo. Questa istituzione, nata da un mito gallese sul corvo-re Bran, è diventata nel XX-XXI secolo uno dei "brand" più iconici della britannicità. È un caso notevole di continuità simbolica tra mitologia pre-cristiana e identità culturale moderna.

`,
      }, // TODO: la leggenda che se i corvi lasceranno la Torre, la monarchia cadrà
      {
        era: "Bran Stark e il fantasy moderno",
        text: `George R.R. Martin in A Song of Ice and Fire (dal 1996) ha scelto il nome "Bran" per il personaggio del giovane Stark che perde l'uso delle gambe (ferita mitica), sviluppa visioni soprannaturali (testa parlante/chiaroveggenza) e alla fine diventa custode della memoria collettiva ("the Three-Eyed Raven"). La connessione con Bran fab Llŷr è esplicita: il nome, la ferita, il ruolo di custode della storia. Martin ha dichiarato in interviste di ispirarsi largamente alla mitologia celtica.

`,
      }, // TODO: George R.R. Martin e il nome "Bran" come tributo
      {
        era: "Archetipo del Re-Testa Parlante",
        text: `Bran appartiene alla famiglia mitologica delle "teste sapienti": Mímir norreno (la cui testa Odino consulta sotto Yggdrasil), Orfeo greco (la cui testa continua a cantare dopo la decapitazione da parte delle Baccanti), l'oracolo di Delfi (testa di serpente parlante secondo alcune versioni). Tutte queste figure condividono la capacità di continuare a parlare dopo la morte fisica — il potere del logos che sopravvive al bios. Bran è la versione più elaborata narrativamente di questo archetipo: non solo parla ma ospita festini, consola e guida per ottantasette anni.

`,
      }, // TODO: Mímir norreno, Orfeo greco
    ],
    texts: [
      {
        title: "Il banchetto della testa nella Gwales",
        source: "Mabinogi, Branwen ferch Llŷr, §17",
        text: `"E quando aprirono la porta rivolta verso la Cornovaglia e verso l'Irlanda, subito sapevano di ogni perdita che avevano subito, e di ogni parente e amico che avevano perso, e di ogni male che era capitato loro — come se fosse accaduto in quel momento. E soprattutto pensavano alla loro signora [Branwen]. Da quel momento non poterono trovare pace; e si mossero con la testa fino a Londra e la seppellirono là, con la faccia rivolta verso la Francia."`,
      }, // TODO
      {
        title: "La sepoltura sotto la White Hill",
        source: "Mabinogi, Branwen ferch Llŷr, §18",
        text: `"E la seppellirono nella White Hill di Londra, con il volto rivolto verso la Francia. E questo fu il terzo occulto del bene, quando fu sepolta, e il terzo svelo del male, quando fu dissotterrata. Perché nessun nemico poteva attraversare il mare verso quest'isola mentre la testa era sepolta là."

`,
      }, // TODO
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     7. BLODEUWEDD — la Donna-Fiore
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "blodeuwedd",
    name: "Blodeuwedd",
    role: "La Donna Creata dai Fiori, Trasformata in Gufo",
    tags: ["Fiori", "Tradimento", "Trasformazione", "Gufo"],
    epithet: "La Donna-Fiore, il Gufo del Tradimento, Sposa Forzata di Lleu",
    type: "Divinità",
    chips: ["Quarto Ramo", "Creatura magica", "Gwynedd", "Robert Graves"],
    heroColor: "linear-gradient(160deg,#0a140a,#2a3a14,#050a05)",
    bio: `Blodeuwedd — il cui nome gallese significa sia "Volto di Fiore" (blodau "fiori" + gwedd "aspetto, volto") sia, nella tradizione successiva, "gufo" (perché la parola gallese moderna per "gufo" è proprio blodeuwedd, in ricordo del mito) — è la figura femminile più controversa e più affascinante del Quarto Ramo del Mabinogion, e probabilmente di tutta la letteratura medievale gallese. Creata artificialmente da Gwydion e Math dai fiori di quercia, ginestra e ulmaria per aggirare la maledizione di Arianrhod (Lleu non può sposare una donna di nessuna razza della Terra), Blodeuwedd non è donna: è fiore fatto carne, natura fatta persona, bellezza fatta agente. La sua tragedia — e il suo crimine — è quella di chi viene portato all'esistenza senza scelta e poi punito per aver scelto.

La creazione di Blodeuwedd è uno degli atti di magia più spettacolari del Mabinogion e rivela la profondità teologica gallese del rapporto tra il divino, il naturale e il magico. Math e Gwydion usano tre fiori specifici: il fiore di quercia (della quercia sacra ai druidi, albero degli dèi), il fiore di ginestra (ginestra dorata, il colore del sole — Lleu è un dio solare), e il fiore di ulmaria o regina dei prati (meadowsweet, la regina degli erbi dei boschi gallesi). La combinazione non è casuale ma simbolica: la donna-fiore è una sintesi di sacralità (quercia), solarità (ginestra) e selvatichezza regale (ulmaria). È la natura stessa elevata a persona — e come la natura, non può essere controllata né confinata.

Blodeuwedd è bella, è presente, è moglie di Lleu — ma non è mai "sua". Il testo non ci dice cosa Blodeuwedd pensi del matrimonio forzato, né se ami Lleu, né se sia felice nel suo castello di Mur Castell. Ciò che sappiamo è che un giorno, mentre Lleu è assente e un gruppo di cacciatori passa dalla zona, Blodeuwedd incontra Gronw Pebr, signore di Penllyn. Il testo è asciutto nel descrivere il momento: i due si innamorano quella prima sera, dormono insieme quella notte, e nelle tre notti successive la loro passione si solidifica in risoluzione: Lleu deve morire. Non è presentato come seduzione diabolica né come atto di pura lussuria. È un amore — forse il primo vero sentimento di Blodeuwedd, in contrasto con l'amore "assegnato" di Lleu.

Il piano di Blodeuwedd per uccidere Lleu è psicologicamente sottile e rivela una sua forma di intelligenza. Non chiede a Gronw di attaccare direttamente — sarebbe fallito, Lleu è guerriero formidabile. Invece finge preoccupazione per la sicurezza del marito, lo interroga teneramente sulla sua morte possibile, si mostra angosciata dalla sua vulnerabilità. Lleu, commosso dalla cura apparente della moglie, le rivela le condizioni paradossali della sua morte impossibile. È una menzogna d'amore — o un amore che usa la menzogna come strumento. In ogni caso è efficace: Gronw forgia la lancia, Blodeuwedd costruisce il bagno e il caprone, e al momento giusto fa posizionare Lleu in modo vulnerabile.

La punizione di Blodeuwedd da parte di Gwydion è la trasformazione in gufo — l'uccello che non può guardare la luce del sole, che caccia di notte, che è odiato da tutti gli altri uccelli che lo assalgono quando lo trovano. La simmetria punitiva è crudele: la donna-fiore (solare, bella, diurna) diventa l'uccello della notte (lunare, temuto, solitario). La donna creata per stare alla luce di Lleu viene condannata a fuggirla per sempre. Il nome "blodeuwedd" che passa a significare "gufo" è la memoria permanente del crimine e della punizione — ogni volta che un gallese nomina il gufo, evoca la storia della donna-fiore tradita e tradizionalmente tradita.

La lettura moderna di Blodeuwedd è però radicalmente cambiata rispetto a quella medievale. Per i compilatori del Mabinogion era chiaramente la traditrice — una donna senza scrupoli che ha ucciso il marito per l'amante. Per le studiose femministe del XX-XXI secolo (Juliette Wood, Shan Inis, Roberta Valente) è una vittima — creata senza consenso, assegnata a un marito senza consenso, punita per aver esercitato l'unica libertà che poteva esercitare: amare chi ha scelto. Il gufo come simbolo di saggezza (nella tradizione classica e nel folklore europeo) contraddice la condanna del mito: l'animale a cui Blodeuwedd è ridotta è anche l'animale della sapienza notturna, della visione nell'oscurità, del capire ciò che agli altri è invisibile.

`, // TODO: Creata da Gwydion e Math con fiori di quercia, ginestra e regina dei prati per aggirare la terza maledizione di Arianrhod (Lleu non avrà moglie di razza umana). Sposa Lleu controvoglia, si innamora di Gronw Pebr, organizza la morte di Lleu. Punita con trasformazione in gufo, creatura della notte odiata dagli altri uccelli.
    versions: [
      {
        era: "La creazione magica",
        name: "Dai fiori di quercia, ginestra e ulmaria",
        text: `La scena della creazione di Blodeuwedd è tra le più evocative del Mabinogion: Math e Gwydion raccolgono i fiori, li intrecciamo, pronunciano le parole magiche, e dalla materia vegetale emerge una donna. Il processo è il contrario della morte: invece di un corpo che torna terra, è terra che diventa corpo. Nelle tradizioni druidiche il rapporto tra l'uomo e la pianta era profondo — le 365 erbe di Miach in Irlanda, le quercie sacre di ogni santuario gallico, il vischio rituale di Plinio. Blodeuwedd è la più letterale incarnazione di questa relazione: non donna che ama la natura, ma natura che diventa donna.

`,
      }, // TODO: il rituale di Gwydion e Math, la donna creata dai fiori
      {
        era: "Il tradimento e l'omicidio programmato",
        name: "La condizione impossibile",
        text: `La sequenza in cui Blodeuwedd estrae da Lleu il segreto della sua morte rispecchia altri episodi mitici in cui la donna-amante è vettore del segreto mortale: Sansone e Dalila, Sigfrido e Brünhilde, Achille e Tetide (che rivela il tallone). In tutti questi casi la donna non è necessariamente malvagia — è il tramite tra l'eroe invulnerabile e il mondo che lo vuole vulnerabile. La differenza nel caso di Blodeuwedd è che lei è consapevole e deliberata: non tradisce per ingenuità ma per scelta. Ma la scelta è motivata dall'amore, non dall'odio — e questo la distingue dalle figure puramente malvagie.
`,
      }, // TODO: Blodeuwedd estrae da Lleu il segreto della sua "morte impossibile" e lo tradisce con Gronw
      {
        era: "La trasformazione in gufo",
        name: 'Il blodeuwedd gallese = "faccia di fiore" = "gufo"',
        text: `La specificità gallese del mito di Blodeuwedd è la permanenza lessicale: il gufo in gallese si chiama blodeuwedd — e questo non è un caso. Il nome porta con sé il mito: ogni volta che la parola è usata, evoca la storia. È un tipo di memoria culturale incorporata nel linguaggio stesso — più durevole di qualunque testo, perché il lessico cambia più lentamente della letteratura. Qualunque gallese che usi la parola "blodeuwedd" per "gufo" partecipa inconsapevolmente alla trasmissione del mito.
`,
      }, // TODO: il nome gallese per "gufo" è proprio blodeuwedd, ricordando questa storia
      // TODO: Graves interpreta Blodeuwedd come aspetto autunnale della Triplice Dea
    ],
    cult: `Tomen y Mur, sito romano-gallese nel Merionethshire (ora Snowdonia National Park), è identificato nel Mabinogion come Mur Castell — il castello dove Blodeuwedd e Lleu vivevano. Il sito, un forte romano con un tumulo normanno sopra, è visitabile e porta ancora il nome che lo collega al mito. Il bosco di Coed y Brenin ("Bosco del Re") nella stessa area è associato nel folklore locale alla caccia di Gronw Pebr e all'incontro con Blodeuwedd. I gufi del Gwynedd — in particolare il barbagianni (barn owl) e il gufo selvatico (tawny owl) — sono tutt'oggi nel folklore locale associati alla storia di Blodeuwedd: vederli di giorno è presagio di dolore, sentirli di notte è voce della donna-fiore trasformata.`, // TODO: Tomen y Mur (Gwynedd) come sito del mito; tradizioni folkloriche sul gufo in Galles
    influence: [
      {
        era: "The White Goddess di Robert Graves (1948)",
        text: `L'influenza di Graves sulla lettura moderna di Blodeuwedd è immensa. The White Goddess ha elaborato un sistema mitico poetico basato in parte sul Mabinogion — con Blodeuwedd come figura centrale — che ha alimentato un'intera generazione di poeti (Ted Hughes vi era profondamente immerso), di critici letterari e di neopagani. Seamus Heaney, Geoffrey Hill, Sylvia Plath hanno tutti lavorato nell'ombra di Graves e del suo sistema mitico gallese. Blodeuwedd diventa in questo contesto non solo personaggio medievale ma archetipo poetico della "donna selvatica" e della "musa distruttrice".
`,
      }, // TODO
      {
        era: "Neopaganesimo e Goddess Spirituality",
        text: `Nel movimento Goddess Spirituality contemporaneo Blodeuwedd è stata recuperata come simbolo di autoaffermazione femminile: non traditrice ma liberatrice, non mostro ma donna che si ribella alla creazione imposta. Caitlín Matthews (Mabon and the Mysteries of Britain, 1987) e Kathy Jones hanno elaborato rituali neopagani centrati su Blodeuwedd come dea del momento presente e della scelta. Il gufo è diventato il suo simbolo principale nel neopaganesimo, ribaltando il senso punitivo originale in saggezza femminile notturna.

`,
      }, // TODO: Blodeuwedd come simbolo femminile moderno di autoaffermazione
      {
        era: "Il motivo della donna-creata",
        text: `Blodeuwedd appartiene alla famiglia dei "costrutti artificiali" femminili: Galatea di Pigmalione (donna di marmo resa viva dall'amore), Pandora (donna di argilla plasmata dagli dèi come punizione), Eva (donna creata dalla costola di Adamo). In tutti questi casi la donna creata artificialmente porta in sé qualcosa di ambivalente — bellezza e distruzione, creazione e pericolo. Blodeuwedd è però l'unica di queste figure che esercita una vera scelta autonoma: Galatea ama il suo creatore, Pandora apre il vaso per curiosità, Eva cede alla tentazione. Blodeuwedd ama chi non dovrebbe e lo fa deliberatamente. È il "costrutto artificiale" che diventa più umano dei personaggi umani del mito.

`,
      }, // TODO: parallelo con Pandora, Galatea, Eva
      {
        era: "Alan Garner — The Owl Service (1967)",
        text: `Il romanzo The Owl Service di Alan Garner (1967, vincitore del Carnegie Medal) è la più potente rielaborazione moderna del mito di Lleu, Blodeuwedd e Gronw. Tre adolescenti nel Galles contemporaneo — Alison, Gwyn e Roger — rivivono inconsapevolmente il pattern del triangolo mitico, spinti da una forza ancestrale incarnata in un servizio di piatti con pattern di gufo/fiore. Garner è uno dei migliori interpreti letterari del Mabinogion: usa il mito non come decorazione folklorica ma come struttura psicologica profonda. Il romanzo è lettura obbligatoria per capire come il mito gallese continua a strutturare l'inconscio culturale britannico.

`,
      }, // TODO: romanzo per ragazzi che riscrive il mito in chiave contemporanea
    ],
    texts: [
      {
        title: "La creazione di Blodeuwedd",
        source: "Mabinogi, Math fab Mathonwy, §78",
        text: `"Allora prendono i fiori di quercia, i fiori di ginestra e i fiori di ulmaria, e con questi producono la fanciulla più bella e più perfetta che chiunque abbia mai visto. E la battezzano e le danno il nome di Blodeuwedd — Volto di Fiore."

`,
      }, // TODO
      {
        title: "La trasformazione in gufo",
        source: "Mabinogi, Math fab Mathonwy, §91, trad. Sioned Davies (2007)",
        text: `"'Non ti ucciderò,' disse Gwydion. 'Ma ti farò nella forma di un uccello. E per il disonore che hai arrecato a Lleu Llaw Gyffes, non oserò mai mostrarti in faccia alla luce del giorno, e ci sarà enmity tra te e tutti gli altri uccelli. E saranno tutti contro di te. E per questo tu non perderai il tuo nome — e sarai sempre chiamata Blodeuwedd.' E ora blodeuwedd è il nome del gufo in questa lingua. E per questo tutti gli uccelli odiano il gufo — e il gufo è ancora chiamato Blodeuwedd."`,
      },
      // TODO
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   EROI
   ══════════════════════════════════════════════════════════════════════ */

const WELSH_HEROES = [
  /* ════════════════════════════════════════════════════════════════════
     1. PWYLL — il Principe di Dyfed
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "pwyll",
    name: "Pwyll Pendefig Dyfed",
    role: "Principe di Dyfed, Marito di Rhiannon",
    tags: ["Dyfed", "Annwn", "Sovranità", "Primo Ramo"],
    epithet: "Pwyll 'Pennafydd Annwn' — Principe di Dyfed, Signore dell'Annwn",
    type: "Eroe",
    chips: ["Primo Ramo", "Arberth", "Rhiannon", "Arawn"],
    heroColor: "linear-gradient(160deg,#14080a,#3a1820,#0a0408)",
    shortDesc: `Principe di Dyfed e protagonista del Primo Ramo del Mabinogion, Pwyll è la figura fondante del ciclo gallese. Offeso per errore Arawn, re dell'Annwn, lo sostituisce per un anno nel suo regno soprannaturale e ne diventa alleato e "Capo dell'Annwn". Incontra Rhiannon sul tumulo magico di Gorsedd Arberth e la sposa. Quando il figlio Pryderi scompare nella notte di parto e Rhiannon è falsamente accusata di averlo ucciso, Pwyll non riesce a difenderla: è la sua grande debolezza morale. Solo il ritrovamento di Pryderi da parte di Teyrnon ristabilirà la verità.`,
    bio: {
      main: `Pwyll Pendefig Dyfed — "Pwyll Principe di Dyfed" — è il primo grande protagonista del Mabinogion e la figura fondante dell'intero ciclo gallese. Il suo nome significa probabilmente "saggezza, prudenza" (gallese pwyll = senno, giudizio), e il testo lo costruisce come principe giusto, capace di imparare dall'errore e di onorare i propri debiti — qualità che ne fanno un archetipo del re celtico ideale, benché non privo di difetti umani. Non è un semidio né un eroe invulnerabile: è un uomo di rango che attraversa esperienze soprannaturali e ne esce trasformato, più saggio e più titolato. Il suo epiteto finale — Pwyll Penn Annwn, "Capo dell'Annwn" — è il riconoscimento di questa trasformazione: un mortale che ha visitato l'Altro Mondo, lo ha amministrato con onore, e ne porta il titolo come sigillo della sua eccezionalità.

Il Primo Ramo del Mabinogion è strutturato in tre episodi maggiori che corrispondono ai tre momenti della vita di Pwyll: l'incontro con Arawn e l'anno nell'Annwn, il corteggiamento e il matrimonio con Rhiannon, e la tragedia di Pryderi con la falsa accusa a Rhiannon. I tre episodi sono collegati da un filo tematico comune: la sovranità. Nell'Annwn Pwyll impara cosa significa essere re in modo giusto (combatte Hafgan con la legalità, non eccede nel colpo); con Rhiannon apprende che la sovranità femminile deve essere rispettata e non subordinata; con Pryderi fallisce nel difendere la moglie innocente — e questa è la sua macchia, l'ombra sul suo altrimenti onorevole governo. Pwyll è un re umano in senso pieno: capace di grandezza e di debolezza nella stessa misura.`,
      sub1: "L'incontro con Arawn e lo scambio di un anno",
      text1: `Tutto comincia con un errore — ed è significativo che il Mabinogion scelga di aprire il suo ciclo con un atto di maleducazione involontaria piuttosto che con un'impresa eroica. Pwyll sta cacciando nella foresta di Glyn Cuch quando i suoi cani scacciano un cervo. Arrivato alla preda abbattuta, vede intorno ad essa cani che non conosce — bianchi con orecchie rosse, i colori soprannaturali degli esseri dell'Annwn — e li scaccia per nutrire i propri al loro posto. È un'offesa grave: scacciare i cani altrui da una preda abbattuta era violazione della legge della caccia. Il proprietario di quei cani era Arawn, re dell'Annwn, e la sua reazione non è violenta ma giuridica: Pwyll deve riparare all'offesa.

La proposta di Arawn è tra le più originali della letteratura celtica medievale: i due si scambieranno di corpo e di regno per un anno intero. Pwyll regnerà sull'Annwn con le sembianze di Arawn; Arawn regnerà su Dyfed con le sembianze di Pwyll. Al termine dell'anno Pwyll dovrà combattere a duello con Hafgan — il rivale eterno di Arawn — e ucciderlo con un solo colpo. Se lo colpisce una seconda volta, Hafgan si risolleva più forte di prima.

L'anno nell'Annwn è ricco di prove silenziose. Pwyll governa il regno soprannaturale con giustizia e moderazione, guadagnandosi l'ammirazione dei sudditi di Arawn. La prova più sottile è quella della camera da letto: ogni notte Pwyll si corica accanto alla moglie di Arawn — una donna bellissima — ma non la tocca, non le rivolge parola, si volta dall'altra parte. Per un anno intero onora il confine invisibile tra la propria lealtà verso Arawn e la tentazione. Quando alla fine dell'anno Arawn torna alla sua camera e scopre l'onore di Pwyll, ne è commosso fino alle lacrime: "Non avrei potuto fidarmi così di un amico della mia stessa natura." Il duello con Hafgan si conclude con il colpo unico prescritto. Arawn e Pwyll si incontrano di nuovo alla frontiera, si rivelano reciprocamente, e da quel momento sono amici eterni. Pwyll riceve il titolo di Pwyll Penn Annwn — Capo dell'Annwn — che porta per il resto della vita.`,
      sub2: "L'incontro con Rhiannon a Gorsedd Arberth",
      text2: `Gorsedd Arberth è un tumulo magico vicino al palazzo di Pwyll a Arberth (l'odierna Narberth, Pembrokeshire): chi vi si siede o vede qualcosa di prodigioso o riceve ferite. Pwyll vi si siede con i suoi uomini — per curiosità o per sfida — e vede apparire in lontananza una donna in abiti d'oro su un cavallo bianco. La donna avanza a passo lento, costante, misurato. Pwyll manda un cavaliere a raggiungerla: il cavaliere sprona il suo cavallo al massimo, ma la distanza non cambia. Manda un secondo cavaliere più veloce — stesso risultato. Alla fine, il giorno successivo, Pwyll si mette in sella lui stesso con il cavallo migliore. Più spinge, più Rhiannon si allontana, sempre alla stessa andatura tranquilla.

Solo quando Pwyll smette di inseguire e le chiede di fermarsi per amor suo, Rhiannon si volta e aspetta. "Sarebbe stato meglio per il tuo cavallo se me lo avessi chiesto prima", dice con dolce ironia. Il potere è suo: lei non poteva essere raggiunta, ha scelto lei stessa di fermarsi. Sappiamo che Rhiannon viene dall'Annwn e aveva già un fidanzato nel suo mondo — Gwawl, figlio di Clud — che ha rifiutato per scegliere liberamente il mortale Pwyll. Fissano la data delle nozze per un anno dopo.

Al banchetto di nozze, Gwawl si presenta travestito da pellegrino e chiede un dono a Pwyll — e Pwyll, senza prudenza, acconsente prima di sentire la richiesta. Gwawl chiede Rhiannon stessa. Pwyll è intrappolato dalla propria parola. Rhiannon interviene: dà appuntamento a Gwawl per un anno dopo e fornisce a Pwyll un sacco magico che non si riempie mai. Al secondo banchetto Pwyll si presenta travestito da mendicante, intrappolano Gwawl nel sacco e lo percuotono in un gioco — "Tasso nel Sacco" — finché non giura di non vendicarsi. Le nozze vengono celebrate. La sequenza rivela la struttura del racconto: a ogni errore di Pwyll (scacciare i cani, accettare la richiesta senza sentirla), c'è una soluzione fornita da chi è più saggio di lui — prima Arawn, poi Rhiannon.`,
      sub3: "Il rapimento di Pryderi e la lunga attesa",
      text3: `Rhiannon partorisce un figlio nella notte. Sei balie erano state incaricate di vegliare sul bambino, ma si addormentano tutte. Al mattino il bambino è scomparso. Terrorizzate dalla punizione per il loro fallimento, le sei donne concepiscono una menzogna: sporcano la bocca e le mani di Rhiannon con il sangue di cuccioli di cane uccisi durante la notte, poi la accusano di aver mangiato il figlio. Rhiannon si sveglia, non trova il bambino, non ricorda niente — e si trova di fronte a sei testimonianze contro di lei.

Pwyll riceve la notizia e affronta la scelta più difficile del suo regno: credere alla moglie — che nega con calma e lucidità — o ai sei testimoni. La legge gallese medievale non favorisce una donna contro sei testimoni. Pwyll non la ripudia — questo è a suo credito — ma non riesce a difenderla efficacemente davanti al consiglio. La punizione imposta è pubblica e simbolica: Rhiannon deve stare per sette anni davanti al cancello del palazzo, raccontare a ogni visitatore la storia della propria accusa, e offrirsi di portare sulle spalle gli ospiti come una bestia da soma. La dea-cavallo ridotta a cavallo: la simmetria è teologicamente precisa e crudele.

Intanto il bambino era stato rapito da una mano soprannaturale — una creatura mostruosa che lo aveva portato via nella notte. Era stato trovato da Teyrnon Twrf Liant, signore di Gwent Is Coed, che lo aveva allevato come figlio proprio. Crescendo, il bambino mostrava una somiglianza sempre più evidente con Pwyll. Teyrnon, riconoscendo finalmente la verità, lo restituì ai suoi genitori naturali. Il bambino fu chiamato Pryderi. Rhiannon fu reintegrata pienamente nella sua dignità. Le sei balie confessarono. Ma il mito non ha un finale trionfante: l'ingiustizia era avvenuta, e la sua memoria resta.`,
      sub4: "L'eredità di Pwyll — la fondazione del ciclo",
      text4: `Pwyll muore relativamente presto nella narrativa del Mabinogion — prima del Terzo Ramo Rhiannon è già vedova — e la sua eredità principale è Pryderi, che sarà il filo narrativo che attraversa tutti e quattro i Rami. In questo senso Pwyll è il fondatore del ciclo: non il suo eroe più grande, ma la sua radice genealogica e narrativa. Tutto ciò che accade — le avventure di Manawydan, la guerra dei porci, le maledizioni di Gwydion — dipende in ultima analisi dalla stirpe di Pwyll e Rhiannon.

Come archetipo del principe celtico, Pwyll incarna un ideale specifico: il re che impara dall'errore, che onora i propri debiti soprannaturali, che rispetta la sovranità della moglie pur non riuscendo sempre a difenderla. Non è l'eroe onnipotente della tradizione greco-romana: è più vicino alla figura del "buon re" delle tradizioni giuridiche irlandesi e gallesi — il re che governa secondo la verità (gwir in gallese, fír flathemon in irlandese), e che quando fallisce in questo, paga le conseguenze con la sofferenza del suo popolo e della sua famiglia. La penitenza di Rhiannon è anche la penitenza di Pwyll per non averla saputa difendere: il re giusto che non è abbastanza coraggioso diventa complice dell'ingiustizia.`,
    },
    versions: [
      {
        era: "Primo Ramo del Mabinogion",
        name: "Il testo canonico",
        text: `Il Primo Ramo (Pwyll Pendefig Dyfed) è conservato nel Libro Bianco di Rhydderch (XIV sec.) e nel Libro Rosso di Hergest (XIV-XV sec.), con nuclei orali probabilmente risalenti all'XI sec. o prima. È il Ramo strutturalmente più unitario dei quattro: ha un unico protagonista, una progressione narrativa chiara, e tre episodi ben distinti ma tematicamente coerenti. La traduzione moderna più autorevole è quella di Sioned Davies (The Mabinogion, Oxford University Press, 2007), che restituisce la voce ironica e levigata del testo gallese originale.`,
      },
      {
        era: "Evemerizzazione medievale",
        name: "Da divinità a principe storico",
        text: `I compilatori cristiani del Mabinogion — monaci o chierici gallesi dell'XI-XII secolo — trasmisero tradizioni orali molto più antiche che originariamente riguardavano figure divine. Pwyll, con la sua connessione all'Annwn e il suo titolo di "Capo dell'Altro Mondo", era probabilmente in origine una divinità psicopompa o un dio della sovranità ultraterrena. Il processo di evemerizzazione — la trasformazione degli dèi in re umani storici — è tipico della letteratura celtica medievale cristiana: i Tuatha Dé Danann irlandesi diventano "antichi re d'Irlanda" nelle cronache, e allo stesso modo Pwyll diventa un principe di Dyfed con qualità soprannaturali residue ma inquadrato in un contesto feudale riconoscibile.`,
      },
      {
        era: "Pwyll, Pryderi e la sovranità",
        name: "La catena dei sovrani di Dyfed",
        text: `La continuità tra Pwyll e Pryderi è il filo che attraversa i Quattro Rami. Pryderi eredita Dyfed alla morte del padre e compare come personaggio attivo nel Secondo Ramo (dove offre ospitalità a Manawydan) e nel Terzo (vittima dell'incantesimo di Llwyd). La sua morte per mano di Gwydion nel Quarto Ramo chiude il ciclo della stirpe di Pwyll: la famiglia che aveva iniziato con un errore di caccia e aveva conosciuto tradimento, ingiustizia e incantesimi, si conclude con la morte del figlio per un'altra disputa nata da un furto ingiusto. Rachel Bromwich (Trioedd Ynys Prydein, 1961) ha mostrato come Pryderi fosse probabilmente il protagonista originale dell'intero ciclo, con Pwyll come "antefatto" aggiunto in una fase successiva.`,
      },
    ],
    cult: `Gorsedd Arberth — il tumulo magico dal quale Pwyll vede apparire Rhiannon — è identificato dalla tradizione con la collina su cui sorge la città di Narberth (Arberth in gallese), nel Pembrokeshire sud-occidentale. Il nome moderno porta ancora la memoria del sito mitico. Narberth è oggi piccola cittadina con un castello medievale, ma la collinetta a ovest del centro è indicata dai locali come "il tumulo di Pwyll". Più in generale, il Pembrokeshire — "Dyfed" nella geografia mitica — è il territorio di Pwyll e Rhiannon: ogni sorgente, ogni promontorio, ogni dosso ha potenzialmente una storia connessa al Primo Ramo. La tradizione folklorica del Pembrokeshire è tra le più ricche del Galles e conserva fino al XIX-XX secolo eco delle storie del Mabinogion.`,
    influence: [
      {
        era: "Archetipo del principe celtico giusto",
        text: `Pwyll incarna il modello del rex iustus della tradizione celtica: il re la cui giustizia garantisce la fertilità della terra e la prosperità del popolo. Quando Pwyll fallisce nel difendere Rhiannon, il suo popolo non soffre direttamente — ma la moglie sì, e questo è misura della sua imperfezione come sovrano. La tradizione giuridica gallese (le Leggi di Hywel Dda, codificate nel X sec.) valorizza esattamente le virtù di Pwyll: lealtà al patto, rispetto dell'ospite, riparazione dell'offesa. Pwyll è il principe che quelle leggi descrivono — imperfetto ma consapevole dei propri doveri.`,
      },
      {
        era: "Culto mariano e calunnia — il motivo di Berte ai grandi piedi",
        text: `Il motivo della donna nobile falsamente accusata di aver ucciso il proprio figlio è uno dei più diffusi nella letteratura medievale europea: Berte ai grandi piedi (madre di Carlo Magno nella chanson de geste), Genoveva di Brabante, la Regina Calunniata nelle versioni delle fiabe ATU 712. In tutti questi casi una donna innocente è accusata da testimoni mendaci, subisce umiliazione pubblica, e alla fine è reintegrata. La versione gallese di Rhiannon è probabilmente la più antica di tutte queste varianti e la più mitologicamente densa: l'accusata è una dea, la punizione ha significato teologico preciso, e la reintegrazione avviene per merito della verità e non per intervento divino.`,
      },
      {
        era: "Evan Evans e il revival gallese del XVIII sec.",
        text: `L'antiquario gallese Evan Evans (Ieuan Fardd, 1731-1788) fu tra i primi a rivalutare il Mabinogion come documento letterario di primo rango nella sua Some Specimens of the Poetry of the Antient Welsh Bards (1764). Evans aveva accesso ai manoscritti gallesi medievali e riconobbe nella storia di Pwyll e Rhiannon un livello narrativo paragonabile alle migliori saghe nordeuropee. Il suo lavoro aprì la strada alla traduzione di Charlotte Guest (1838-45) e all'interesse europeo per la tradizione gallese. Senza Evans, il Mabinogion avrebbe probabilmente continuato a dormire nei manoscritti di Oxford e Cardiff per altri decenni.`,
      },
    ],
    texts: [
      {
        title: "L'incontro con Arawn a Glyn Cuch",
        source:
          "Mabinogi, Pwyll Pendefig Dyfed, §1, trad. Sioned Davies (2007)",
        text: `"E mentre era lì sentì il suono di una caccia — con la cornetta e i cani — un suono diverso da qualsiasi cornetta o cane che avesse mai sentito. E la caccia era in arrivo verso di lui su un pianoro boscoso. E vide una muta di cani che non corrispondeva a nessuna muta che avesse mai visto: i loro capelli erano di un bianco brillante e le loro orecchie di un rosso brillante. E così come il bianco dei corpi era luminoso, così il rosso delle orecchie era luminoso. E si avvicinò ai cani e scacciò quella muta dal cervo e aizzò i propri cani su di esso."`,
      },
      {
        title: "L'apparizione di Rhiannon",
        source: "Mabinogi, Pwyll, §8, trad. Sioned Davies (2007)",
        text: `"E mentre erano lì seduti videro una donna su un grande cavallo color bianco latte, con un abito d'oro brillante attorno a lei, venire lungo la strada che passava vicino al tumulo. Il cavallo aveva un'andatura regolare e tranquilla. 'Uomini,' disse Pwyll, 'c'è qualcuno di voi che conosce la donna che cavalca là?' 'No, signore,' dissero. 'Andate da lei per scoprire chi è.' Uno di loro si alzò, ma quando giunse alla strada per incontrarla lei era già passata. La seguì al suo passo più veloce — ma più veloce andava, più lontana era lei da lui. Quando vide che era inutile seguirla, tornò da Pwyll."`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. MANAWYDAN FAB LLŶR — il Saggio Artigiano
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "manawydan",
    name: "Manawydan fab Llŷr",
    role: "Saggio, Artigiano, Mediatore — Fratello di Bran",
    tags: ["Saggezza", "Artigianato", "Terzo Ramo", "Manannán gallese"],
    epithet:
      "Manawydan figlio di Llŷr — il Gallese del Mare, lo Spirito Conciliante",
    type: "Eroe",
    chips: ["Terzo Ramo", "Dyfed", "Incantesimo", "Rhiannon"],
    heroColor: "linear-gradient(160deg,#051420,#0f355c,#02080f)",
    shortDesc: `Fratello di Bran il Benedetto e di Branwen, Manawydan è uno dei sette sopravvissuti della catastrofica guerra d'Irlanda. Senza regno né ricchezze, sposa Rhiannon su suggerimento di Pryderi e si stabilisce a Dyfed. Quando un incantesimo spopola tutta la regione riducendola a deserto, Manawydan non combatte né dispera: diventa artigiano — sellaio, calzolaio, ebanista — e sopravvive con il lavoro delle mani. La sua pazienza e il suo ingegno, non la spada, sconfiggono alla fine il mago responsabile dell'incantesimo. È il più umano e il più saggio degli eroi del Mabinogion: la versione gallese del dio del mare irlandese, de-divinizzato e umanizzato in un eroe della ragione.`,
    bio: {
      main: `Manawydan fab Llŷr è la figura più anomala del Mabinogion: eroe senza spada, re senza regno, dio del mare diventato calzolaio. Il suo nome è etimologicamente identico a quello di Manannán mac Lir irlandese — Manannán figlio del Mare (Lir/Llŷr è il mare personificato) — e i due condividono l'origine: entrambi sono figli del dio-mare, entrambi sono signori di un mondo intermedio tra il mortale e il soprannaturale. Ma mentre il Manannán irlandese è dio attivo, possessore di oggetti magici, traghettatore di anime, signore di Tír na nÓg, il Manawydan gallese ha perso tutta quella dimensione divina. È rimasto il figlio del mare senza il mare, il re senza il regno, il dio senza il potere. Questa perdita non lo rende minore: lo rende più complesso, più umano, più interessante.

Il Terzo Ramo del Mabinogion (Manawydan fab Llŷr) è il più quieto, il più meditativo dei quattro. Non ha guerre né battaglie campali, non ha trasformazioni magiche spettacolari, non ha amori impossibili. Ha un uomo intelligente che affronta l'assurdo con pazienza metodica. Quando tutta Dyfed scompare in un incantesimo e rimangono solo lui, Rhiannon, Pryderi e la moglie di Pryderi, Manawydan non cerca la soluzione magica: cerca da mangiare, cerca un lavoro, cerca un modo di sopravvivere. È la risposta pratica all'impossibile — e alla fine è quella risposta, non la forza bruta, a rompere l'incantesimo.`,
      sub1: "Il sopravvissuto della guerra d'Irlanda",
      text1: `Nel Secondo Ramo del Mabinogion, Manawydan è uno dei sette uomini che tornano vivi dalla devastante guerra d'Irlanda — una guerra che aveva distrutto entrambi i popoli e lasciato solo rovine. Tra i sette c'era anche Pryderi di Dyfed. I sopravvissuti avevano portato con loro la testa di Bran il Benedetto — ancora parlante, ancora capace di conversare e banchettare — e avevano trascorso ottantasette anni in un palazzo incantato sull'isola di Gwales, senza invecchiare né soffrire, finché Heilyn aveva aperto la porta vietata e la magia era crollata.

Dopo la sepoltura della testa di Bran sotto la White Hill di Londra, i sopravvissuti si dispersero. Manawydan non aveva più nulla: il suo regno era andato, suo fratello Bran era morto, Britannia era cambiata. "Non ho cugino né fratello che voglia andarmi incontro," dice al primo incontro con Pryderi nel Terzo Ramo. È una frase di rara malinconia per la letteratura eroica celtica, solitamente poco incline alla introspezione emotiva. Pryderi gli offre amicizia, poi gli offre la madre Rhiannon — vedova di Pwyll — come moglie. Manawydan accetta. La coppia si sposa, e per un breve periodo la vita è ordinata e felice. Poi comincia l'incantesimo.`,
      sub2: "Il matrimonio con Rhiannon e la Dyfed incantata",
      text2: `Un giorno Manawydan, Pryderi, Rhiannon e Cigfa (moglie di Pryderi) siedono sul tumulo di Gorsedd Arberth — lo stesso tumulo magico da cui Pwyll aveva visto apparire Rhiannon un'intera generazione prima. Cade un tuono, si alza una nebbia, e quando la nebbia si dirada Dyfed è vuota: le case, gli animali, le persone, ogni segno di vita umana sono scomparsi. Rimangono solo loro quattro in un paese deserto. Non c'è spiegazione, non c'è nemico visibile: solo il silenzio e la desolazione.

La risposta di Manawydan è pragmatica: caccia, pesca, raccoglie cibo selvatico. Sopravvive. Ma dopo un anno la situazione è insostenibile e i quattro si spostano in Inghilterra, dove Manawydan inizia a lavorare come sellaio. La sua abilità è tale da attirare tutta la clientela della zona, danneggiando i sellatoi locali che minacciano di ucciderli. I quattro si spostano di città in città, cambiando mestiere — prima sellaio, poi fabbricatore di scudi, poi calzolaio — sempre con la stessa superiorità artigianale che genera ostilità dei concorrenti. Infine Manawydan decide di tornare a Dyfed con del grano e piantare tre campi.`,
      sub3: "L'artigianato come sopravvivenza",
      text3: `La sequenza artigianale del Terzo Ramo è unica nel Mabinogion e nella letteratura eroica celtica in generale: un eroe che fa il calzolaio. Non è abbassamento ma trasformazione: Manawydan non combatte perché capisce che combattere non risolverebbe niente. L'incantesimo che ha svuotato Dyfed non è un nemico che si possa ferire con la spada; è una situazione che richiede intelligenza, pazienza e adattabilità. L'artigianato è la risposta di un uomo saggio a un problema che la forza non può risolvere.

La sua abilità nei mestieri ha anche una dimensione divina residua: Manawydan fab Llŷr che fa scarpe perfette è ancora, in qualche modo, il figlio del dio del mare che sa fare le cose meglio degli uomini comuni. Ma la grandezza non si manifesta attraverso prodigi o magie: si manifesta attraverso la competenza eccellente nel lavoro ordinario. È una delle rappresentazioni più belle della tradizione celtica del "dio-artigiano" — Goibniu irlandese, Govannon gallese, Wayland germanico — applicata a un contesto narrativo umanizzato.`,
      sub4: "La trappola del topo e la liberazione dell'incantesimo",
      text4: `Quando Manawydan pianta il grano e aspetta il raccolto, due dei tre campi vengono distrutti di notte — le spighe spogliate fino alle radici senza traccia di chi lo abbia fatto. La terza notte monta la guardia e vede: una moltitudine di topi che avanzano ordinati come un esercito e spogliano il campo spiga per spiga. Riesce a catturare uno dei topi — il più lento — e lo condanna a essere impiccato il giorno dopo come ladro.

Tre viandanti successivi — un sacerdote, poi un vescovo, poi un arcivescovo — gli offrono denaro crescente per liberare il topo. Manawydan rifiuta ogni volta: la legge è la legge, il ladro sarà impiccato. Solo il terzo — l'arcivescovo — rivela la verità sotto la pressione della minaccia: il topo è sua moglie, trasformata. L'arcivescovo è in realtà Llwyd fab Cil Coed, il mago che aveva incantato Dyfed per vendicare un'antica offesa subita da Pryderi ai danni del suo amico Gwawl. Manawydan negozia: rilascerà il topo in cambio della liberazione di Rhiannon e Pryderi — entrambi prigionieri nel mondo magico di Llwyd — e della revoca permanente di qualunque incantesimo su Dyfed. Llwyd accetta. L'incantesimo si rompe. Dyfed si ripopola. Manawydan vince senza aver sguainato la spada nemmeno una volta: ha vinto con la legge, la pazienza e la negoziazione.`,
    },
    versions: [
      {
        era: "Terzo Ramo del Mabinogion",
        name: "Il testo canonico",
        text: `Il Terzo Ramo (Manawydan fab Llŷr) è il più breve e il più intimo dei Quattro Rami. Conservato nel Libro Bianco di Rhydderch e nel Libro Rosso di Hergest, il testo è linguisticamente più uniforme degli altri Rami, suggerendo una trasmissione scritta relativamente stabile. La sua peculiarità narrativa — un eroe che fa il calzolaio invece di combattere — lo ha reso meno popolare nella ricezione romantica ottocentesca, ma più apprezzato nella critica moderna: Patrick K. Ford e Sioned Davies hanno entrambi sottolineato la sofisticazione psicologica del personaggio di Manawydan come figura di resistenza non violenta.`,
      },
      {
        era: "Manawydan vs Manannán mac Lir",
        name: "La metamorfosi gallese del dio del mare",
        text: `L'identità etimologica tra Manawydan gallese e Manannán mac Lir irlandese è certissima: entrambi i nomi derivano dal proto-celtico *Manannan-, figlio di *Lir- (il mare). Ma i due personaggi sono diventati radicalmente diversi: Manannán in Irlanda è ancora dio attivo, possessore di oggetti magici (il mantello di nebbia, la spada Fragarach, il cavallo Enbarr), signore di Tír na nÓg e traghettatore di anime. Manawydan in Galles ha perso ogni attributo divino ed è diventato un eroe umano con qualità umane eccezionali. Questa divergenza riflette la diversa traiettoria delle tradizioni celtiche insulari: quella irlandese ha preservato di più la dimensione divina delle sue figure, quella gallese ha umanizzato più sistematicamente i suoi dèi trasformandoli in principi e re.`,
      },
      {
        era: "L'eroe della ragione",
        name: "Un celtismo non belligerante",
        text: `Manawydan è l'anti-eroe guerriero per eccellenza della letteratura celtica medievale. In un corpus narrativo dominato da battaglie, duelli, imprese militari, lui è l'uomo che risolve i problemi con la testa. Non ha paura — affronta con calma il deserto di Dyfed, le minacce dei concorrenti inglesi, la scomparsa soprannaturale di Pryderi e Rhiannon. Ma la sua risposta all'ostilità non è mai la violenza: è lo spostamento, l'adattamento, la negoziazione. La sua vittoria finale sul mago Llwyd — ottenuta tenendo in ostaggio un topo e negoziando la resa — è una delle più originali della letteratura medievale: un trionfo della logica e della perseveranza sulla magia.`,
      },
    ],
    cult: `Manawydan non ha santuari o siti di culto identificati in Galles. La sua connessione con Manannán mac Lir suggerisce una possibile venerazione comune nelle aree costiere celtiche — in particolare nella baia di Cardigan, sul versante meridionale del Galles, che guarda verso l'Irlanda. L'Isola di Man (Ellan Vannin), che porta il nome di Manannán/Manawydan, è il luogo dove la tradizione insulare del dio del mare sopravvisse più a lungo. In Galles il nome Manawydan è rimasto vivo nella toponomastica del Pembrokeshire e del Ceredigion come ricordo folklorico, ma senza culto localizzato documentato.`,
    influence: [
      {
        era: "Il mediatore saggio come archetipo",
        text: `Manawydan incarna un archetipo che la letteratura eroica celtica raramente esplora: il leader che non domina ma media, che non impone ma persuade. La sua figura è stata letta da Patrick K. Ford come rappresentazione del "sapiente pratico" — l'uomo che sa fare le cose concretamente e usa questa competenza come forma di potere alternativo alla forza militare. In un contesto medievale gallese in cui la guerriglia e la resistenza contro occupazioni straniere (normanne, poi inglesi) erano realtà quotidiane, il modello di Manawydan — sopravvivi, adattati, negozia, non cedere — aveva un significato politico concreto.`,
      },
      {
        era: "L'artigiano divinizzato — da Manawydan a Wayland",
        text: `Il motivo del dio o dell'eroe di altissimo rango ridotto all'artigianato è pan-europeo: Wayland il fabbro (Völundr norreno) è re elfico che diventa schiavo-artigiano di un re umano; Efesto greco è dio olimpico che lavora alla fucina; Goibniu irlandese è dio-fabbro dei Tuatha Dé Danann. Manawydan è il membro gallese di questa famiglia: un essere di natura divina che manifesta il suo potere attraverso il lavoro manuale eccellente piuttosto che attraverso armi o magie. La differenza è che Manawydan sceglie il lavoro come strategia di sopravvivenza, non come condanna: il suo artigianato è libertà, non servitù.`,
      },
      {
        era: "Tradizioni artigianali gallesi",
        text: `Il Galles medievale aveva una tradizione artigianale codificata nelle Leggi di Hywel Dda (X sec.), che stabilivano il valore legale di ogni categoria artigianale — sellaio, calzolaio, fabbro, tessitore. Le Leggi di Hywel riconoscevano all'artigiano eccellente uno statuto sociale paragonabile a quello del guerriero esperto. Manawydan che lavora come sellaio e calzolaio — e lo fa con tale bravura da dominare il mercato locale — è coerente con questa valorizzazione gallese dell'abilità manuale. Il suo "trionfo artigianale" nelle città inglesi (dove supera i locali in ogni mestiere) è anche una forma di orgoglio identitario gallese: il nobile gallese che batte gli inglesi nel loro stesso territorio usando le mani.`,
      },
    ],
    texts: [
      {
        title: "L'incantesimo di Dyfed",
        source: "Mabinogi, Manawydan fab Llŷr, §3, trad. Sioned Davies (2007)",
        text: `"E mentre erano seduti così, ecco un gran tuono, e con il tuono, una nebbia che calò su di loro così che non potevano vedersi l'un l'altro. E dopo la nebbia, dappertutto la luce. E quando guardarono dove prima c'era il gregge, le abitazioni, le persone — non c'era niente che potessero vedere: né casa, né animale, né fumo, né fuoco, né uomo, né dimora. Solo le case del palazzo erano rimaste, vuote, deserte, disabitate, senza uomini, senza animali."`,
      },
      {
        title: "Il giudizio del topo",
        source: "Mabinogi, Manawydan, §22-25, trad. Sioned Davies (2007)",
        text: `"'Signore,' disse l'arcivescovo, 'ti darò il cavallo che vedi laggiù carico d'oro, se lasci andare il piccolo animale.' 'Non lo farò, per Dio,' disse Manawydan. 'Bene,' disse l'arcivescovo, 'poiché non puoi essere persuaso altrimenti, ti dico chi sono: Llwyd figlio di Cil Coed. E sono io che ho incantato il paese di Dyfed per vendicare Gwawl figlio di Clud, il mio amico. E quando ho saputo che tu eri qui, ho trasformato i miei uomini in topi per distruggere il tuo grano.' 'Bene,' disse Manawydan, 'libererò il topo — ma a queste condizioni: che mai più alcun incantesimo venga messo su Dyfed, e che Pryderi e Rhiannon mi vengano resi.'"`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. MATH FAB MATHONWY — il Re-Mago del Gwynedd
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "math",
    name: "Math fab Mathonwy",
    role: "Re-Mago di Gwynedd, Giudice Supremo",
    tags: ["Mago", "Re", "Gwynedd", "Vergine-tenente"],
    epithet:
      "Math figlio di Mathonwy — il Re dai Piedi sul Grembo della Vergine",
    type: "Eroe",
    chips: ["Quarto Ramo", "Gwynedd", "Giudizio", "Magia"],
    heroColor: "linear-gradient(160deg,#14140a,#3a3a1f,#0a0a05)",
    shortDesc: `Re di Gwynedd e mago supremo del Galles del nord, Math fab Mathonwy è legato da un singolare obbligo rituale: in tempo di pace deve tenere i piedi nel grembo di una vergine — senza questa condizione morirebbe. Quando Goewin, la sua vergine-tenente, viene violentata dal nipote Gilfaethwy con la complicità di Gwydion, Math punisce i due fratelli con tre anni di trasformazione in animali accoppiati. Poi, con Gwydion, crea Blodeuwedd dai fiori per aggirare la maledizione di Arianrhod su Lleu. È il re-mago per eccellenza della tradizione brittonica: potere assoluto, giustizia rigorosa, magia come strumento di governo.`,
    bio: {
      main: `Math fab Mathonwy è la figura regale più arcaica e più potente del Mabinogion. Re di Gwynedd — il regno del nord-ovest gallese, geograficamente impervia e culturalmente conservativa — Math incarna il modello del rex magus indoeuropeo: il re che è anche mago, che esercita il potere politico attraverso il potere soprannaturale, e che giudica con una precisione che è insieme giuridica e cosmica. Il suo potere è straordinario: può sentire ogni parola pronunciata nel vento (a meno che il suono della guerra non copra le voci), può trasformare esseri umani in animali con un tocco della sua bacchetta, può creare una donna dai fiori insieme al nipote Gwydion. Ma questo potere è bilanciato da un vincolo egualmente straordinario: Math non può sopravvivere senza tenere i piedi nel grembo di una vergine in tempo di pace.

Questo obbligo — questa geis nel senso più celtico del termine — è il punto di massima vulnerabilità di Math e il motore narrativo dell'intero Quarto Ramo. Perché Goewin è violentata, perché Gwydion orchestra la guerra con Pryderi come diversivo, perché Arianrhod viene convocata come possibile sostituta di Goewin e il suo segreto viene rivelato: tutto discende da questa condizione paradossale del re più potente del Galles, che può fare qualunque cosa tranne stare senza una vergine ai suoi piedi. Math è il re il cui potere è inseparabile dalla sua debolezza strutturale — e questa combinazione lo rende mitologicamente tra le figure più ricche del corpus gallese.`,
      sub1: "Il geis della vergine-tenente",
      text1: `L'obbligo di Math è formulato nel testo con precisione rituale: "Math fab Mathonwy era tale che, ogni volta che era in pace, doveva tenere i piedi nel grembo di una vergine, a meno che il tumulto della guerra non lo impedisse." La vergine-tenente non era semplice servente: era parte integrante della salute cosmica del re, garante della sua vita e del suo potere. La condizione ricorda la dipendenza del re celtico dalla terra-dea (la sovranità femminile che abilita il maschio al governo) tradotta in forma rituale concreta. Senza la vergine ai piedi, Math muore — o almeno non può regnare. È una delle espressioni più letterali del principio celtico della "regalità sacra condizionata".

Goewin era la vergine-tenente al momento degli eventi del Quarto Ramo: "la fanciulla più bella della sua generazione". Gilfaethwy si era innamorato di lei in modo ossessivo, ma non poteva avvicinarla senza violare la sacralità della sua funzione e la protezione del re. Gwydion, brillante e irresponsabile, orchestrò una guerra con Pryderi di Dyfed come diversivo: mentre Math era in campo, Goewin era senza protezione, e Gilfaethwy poté violentarla nel letto del re stesso. L'offesa era triplice: alla vergine, al re e al letto del re.`,
      sub2: "La punizione di Gwydion e Gilfaethwy",
      text2: `Quando Math tornò e apprese la verità — sia della violazione di Goewin sia della complicità di Gwydion nell'organizzare la guerra — la sua reazione fu quella di un giudice cosmico, non di un re arrabbiato. Prima di tutto sposò Goewin per restituirle l'onore perduto e risarcirla del danno subito. Poi si rivolse ai due fratelli con la sua bacchetta magica.

La punizione che impose è tra le più creative e teologicamente precise della letteratura celtica: trasformò i due fratelli in animali accoppiati per tre anni consecutivi, alternando i ruoli di maschio e femmina così che ognuno sperimentasse entrambe le posizioni. Il primo anno: Gwydion divenne cervo, Gilfaethwy cerva. Generarono un cerbiatto che Math prese e trasformò in bambino. Il secondo anno: Gwydion divenne cinghiale maschio, Gilfaethwy scrofa. Generarono un cucciolo di cinghiale. Il terzo anno: Gwydion divenne lupo, Gilfaethwy lupa. Generarono un cucciolo di lupo. La simmetria punitiva è perfetta: avevano violato una donna, ora erano costretti a portare figli l'uno dell'altro e a sperimentare la vulnerabilità fisica che avevano inflitto a Goewin. Alla fine dei tre anni Math dichiarò la punizione sufficiente e li reintegrò.`,
      sub3: "La magia di Math — creatore e giudice",
      text3: `Math e Gwydion sono i due grandi maghi del Mabinogion, e il loro rapporto è complesso: Math è il maestro, Gwydion il nipote-discepolo che lo supera in ingegno ma non in potere. Collaborano nella creazione di Blodeuwedd, che richiede la magia di entrambi — Math fornisce la potenza cosmica, Gwydion la conoscenza delle erbe e delle trasformazioni. Il risultato è la donna più bella mai vista, nata dalla vegetazione per aggirare la terza maledizione di Arianrhod.

Il bastone magico di Math è lo strumento della trasformazione: con un tocco trasforma Gwydion e Gilfaethwy in animali, poi con un tocco li riporta uomini, poi con un tocco trasforma i loro figli animali in bambini umani. È la materializzazione del potere regale-magico: il re che non usa la spada ma il bastone, non uccide ma trasforma. Math come giudice non punisce con la morte — avrebbe potuto, aveva tutto il diritto — ma con la metamorfosi, che è punizione più profonda perché costringe il colpevole a esperire fisicamente ciò che ha inflitto agli altri.`,
      sub4: "La regalità sacra celtica",
      text4: `Math è il rappresentante gallese più puro del tipo indo-europeo del "rex sacer" — il re il cui potere è sacro e condizionato. Il suo vincolo della vergine-tenente rispecchia una concezione della regalità celtica in cui il sovrano non è sovrano per diritto proprio ma per relazione con il femminile sacro: la terra, la dea della sovranità, la vergine-garante. Questo principio — il re che regna solo finché mantiene la relazione corretta con il principio femminile — è attestato in tutta la tradizione celtica: in Irlanda il re che sposa la dea-sovranità nella cerimonia della Feis Temhra, in Gallia i re che i druidi potevano deporre quando la loro condotta rompeva il legame cosmico.

Il parallelo più stretto è con Nuada di Irlanda: entrambi sono re-grandi che perdono temporaneamente la loro funzione per una debolezza fisica (Nuada la mano mozzata, Math la vergine violata) e la riacquistano attraverso una soluzione magica. Entrambi incarnano il principio che la regalità sacra richiede integrezza fisica e rituale, e che quando questa viene violata — anche per colpa altrui — il re non può più regnare pienamente finché la condizione non è ripristinata.`,
    },
    versions: [
      {
        era: "Quarto Ramo del Mabinogion",
        name: "Il testo canonico",
        text: `Il Quarto Ramo (Math fab Mathonwy) è il più lungo e il più complesso dei Quattro Rami, con diversi episodi narrativi distinti — la guerra dei porci, la punizione di Gwydion, la storia di Lleu e Blodeuwedd — che molti studiosi ritengono siano stati originariamente racconti separati riuniti in un'unica narrazione da un compilatore del XI-XII sec. W.J. Gruffydd (Math vab Mathonwy: an Enquiry into the Origins and Development of the Fourth Branch of the Mabinogi, 1928) fu il primo a proporre questa struttura composita, e la sua tesi è ancora sostanzialmente accettata.`,
      },
      {
        era: "Math e i geasa celtici",
        name: "I vincoli rituali della sovranità",
        text: `Il geis (tabù rituale obbligatorio) di Math — dover tenere i piedi nel grembo di una vergine — è uno dei geasa più singolari della letteratura celtica. In Irlanda i geasa dei re sono ben documentati: Conchobar mac Nessa non poteva rifiutare un banchetto serale, Cú Chulainn non poteva mangiare carne di cane. Questi vincoli non sono arbitrari ma strutturano l'identità del re: definiscono la sua eccezionalità e la sua fragilità. Il geis di Math è particolarmente radicale perché non riguarda un'azione ma una condizione permanente: non "non fare X" ma "devi essere in questo stato continuo". È la forma più estrema di dipendenza rituale dalla condizione corporea.`,
      },
      {
        era: "W.J. Gruffydd e la mitologia di Math",
        name: "Ricostruzione del mito originario",
        text: `W.J. Gruffydd nel suo studio del 1928 ha proposto che il Quarto Ramo sia la rielaborazione cristiano-medievale di un mito originario centrato su Math come dio della morte e della trasformazione — un dio ctonio simile all'Arawn del Primo Ramo ma con poteri di metamorfosi più espliciti. In questa ricostruzione Gwydion era originariamente il dio della poesia e della magia (parallelo a Ogma/Ogmios gallico-irlandese), e Lleu era il dio solare giovane sacrificato e resuscitato in forma di mito stagionale. La proposta di Gruffydd è rimasta controversa ma produttiva: ha stimolato decenni di ricerca comparativa tra la mitologia gallese e quella irlandese e gallica.`,
      },
    ],
    cult: `Caer Dathyl — la sede mitica di Math nel Quarto Ramo — è identificata dalla tradizione con un sito nel Gwynedd settentrionale, probabilmente vicino all'odierna Clynnog Fawr nella penisola di Llŷn. Il Gwynedd in generale — con le sue catene montuose (Eryri/Snowdonia), i suoi promontori atlantici e la sua tradizione druidica conservativa — è il territorio di Math: impervia, arcaica, geograficamente separata dal resto del Galles, è la regione che ha preservato di più le tradizioni mitologiche britanniche pre-normanne.`,
    influence: [
      {
        era: "Il re-mago celtico — Math, Nuada, Gwydion",
        text: `Math è il rappresentante gallese più puro della categoria indoeuropea del "re-mago": il sovrano che esercita il potere politico attraverso la competenza soprannaturale. I suoi paralleli celtici più diretti sono Nuada irlandese (re dei Tuatha Dé con vincolo di integrezza fisica), il Dagda (re-druido onnipotente), e nella tradizione gallica continentale i re-druidi descritti da Cesare come detentori simultanei di potere politico e religioso. La figura del "re che è anche mago" è poi passata nella tradizione arturiana: Artù è re, Merlino è il suo mago — ma nella versione più arcaica (Culhwch) Artù stesso ha poteri quasi magici, e la separazione tra regalità e magia è meno netta.`,
      },
      {
        era: "Tabù rituali della regalità",
        text: `James George Frazer in Il Ramo d'Oro (1890-1915) ha dedicato ampio spazio ai tabù rituali dei re primitivi — divieti di toccare il suolo, di vedere il sole, di essere toccati dai comuni mortali, di mangiare certi cibi. Il geis di Math si inserisce in questo contesto cross-culturale: il re sacro la cui vita dipende da una condizione rituale precisa è attestato dall'Africa subsahariana all'India, dall'Irlanda alla Grecia arcaica. Math è il caso celtico gallese più elaborato di questo tipo: il suo geis non è un semplice divieto ma una presenza continua richiesta, una condizione attiva di sacralità.`,
      },
      {
        era: "Fantasy del re-stregone",
        text: `La figura di Math — re onnipotente legato da una debolezza paradossale, giudice implacabile che punisce con la trasformazione invece che con la morte, creatore di donne dai fiori — ha influenzato potentemente l'immaginario del "re-stregone" nel fantasy moderno. Gandalf di Tolkien ha già qualcosa di Math nella sua combinazione di saggezza cosmica e vulnerabilità strategica. La figura del "re che non combatte ma trasforma" riappare in Ursula K. Le Guin (il Mago di Earthsea come mago-re), in Patrick Rothfuss (il Chandrian come sovrani-maghi), e in tutto il sottogenere del fantasy druidico-celtico.`,
      },
    ],
    texts: [
      {
        title: "Il geis della vergine",
        source: "Mabinogi, Math fab Mathonwy, §51, trad. Sioned Davies (2007)",
        text: `"Math fab Mathonwy era tale che, ogni volta che era in pace, doveva tenere i piedi nel grembo di una vergine, a meno che il tumulto della guerra non glielo impedisse. La vergine che aveva in quel momento era Goewin figlia di Pebin di Dôl Pebin in Arfon — la più bella fanciulla della sua generazione, per quel che se ne sapesse."`,
      },
      {
        title: "La punizione degli stupratori",
        source: "Mabinogi, Math, §65, trad. Sioned Davies (2007)",
        text: `"Toccò Gwydion con la sua bacchetta magica e lo trasformò in cervo, e Gilfaethwy in cerva. 'Poiché avete fatto cosa disonorevole insieme,' disse, 'sarò io a fare in modo che siate insieme. Andrete via come coppia, della stessa natura di quegli animali nel cui corpo siete. E il giorno che avranno un piccolo, tornatemi qui.' Dopo un anno giusto, ecco che udì un frastuono sotto la camera da letto. Si alzò, andò a vedere: erano un cervo e una cerva con un cerbiatto."`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. CULHWCH — il Cacciatore del Cinghiale
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "culhwch",
    name: "Culhwch",
    role: "Cugino di Artù, Cacciatore del Cinghiale Twrch Trwyth",
    tags: ["Cinghiale", "Quest", "Artù", "Olwen"],
    epithet: "Culhwch 'della scrofa' — il Cugino di Artù in cerca di Olwen",
    type: "Eroe",
    chips: ["Culhwch ac Olwen", "Arturo", "Twrch Trwyth", "XI sec."],
    heroColor: "linear-gradient(160deg,#14140a,#3a2f10,#0a0a05)",
    shortDesc: `Protagonista del più antico racconto arturiano sopravvissuto (Culhwch ac Olwen, fine XI sec.), Culhwch è maledetto dalla matrigna a non poter amare nessuna donna tranne Olwen, figlia del gigante cannibale Ysbaddaden. Per ottenerla deve compiere quaranta prove impossibili (anoetheu), tra cui l'impresa più grande: cacciare il cinghiale cosmico Twrch Trwyth — originariamente un re irlandese trasformato da Dio — per ottenere il rasoio, le forbici e il pettine nascosti tra le sue orecchie. Aiutato dal cugino Artù e dai suoi innumerevoli campioni, Culhwch porta a termine tutte le prove. Ysbaddaden viene decapitato. Culhwch sposa Olwen.`,
    bio: {
      main: `Culhwch (il nome significa approssimativamente "nascondiglio della scrofa" — cul "nascondiglio, stretto" + hwch "scrofa") è il protagonista di Culhwch ac Olwen, generalmente considerato il più antico racconto arturiano in esistenza e uno dei testi più ricchi e bizzarri dell'intera letteratura medievale celtica. Composto probabilmente alla fine dell'XI secolo sulla base di materiali orali molto più antichi, il racconto non conosce la raffinatezza cortese dei romanzi arturiani continentali: Artù vi è eroe-cacciatore, non re della cortesia; i suoi campioni sono guerrieri bizzarri con poteri soprannaturali specifici, non cavalieri ideali; le prove di Culhwch sono concrete, fisiche, spesso grottesche — non prove di virtù cavalleresca. È un Artù pre-romanzesco, e Culhwch è il protagonista perfetto per quel mondo: non nobile nella forma, ma autentico nell'impegno.

Culhwch è cugino di Artù dal lato materno — sua madre era sorella della madre di Artù — e questa parentela è la sua risorsa principale. Non è guerriero straordinario, non ha poteri magici propri: ha la fortuna di avere il cugino più famoso di Britannia. L'intero racconto è costruito su questa asimmetria: Culhwch è il richiedente, Artù è la risorsa. Ma è Culhwch che compie le scelte fondamentali — decidere di cercare Olwen, chiedere aiuto ad Artù, accettare le prove impossibili di Ysbaddaden — e questa determinazione lo rende eroe a pieno titolo, anche se non nel senso tradizionale.`,
      sub1: "La nascita tra i maiali e la maledizione della matrigna",
      text1: `La madre di Culhwch fu colta da un improvviso spavento mentre era incinta — la mandria di maiali attorno a lei si disperse all'improvviso — e partorì prematuramente in mezzo ai porci in un allevamento. Il bambino fu chiamato Culhwch in ricordo di questo parto insolito. La madre morì poco dopo. Il padre si risposò, e la matrigna — come nelle fiabe universali — non amava il figliastro.

Quando Culhwch raggiunse l'età in cui avrebbe potuto sposarsi, la matrigna gli impose una maledizione (tynged): non sarebbe mai stato degno di nessuna donna se non di Olwen, figlia di Ysbaddaden Penkawr — il "Gigante Capo dei Giganti". La maledizione era calcolata per essere impossibile: Ysbaddaden era noto per uccidere tutti i pretendenti di Olwen, perché una profezia diceva che sarebbe morto il giorno in cui la figlia si fosse sposata. Il padre di Culhwch suggerì di chiedere aiuto ad Artù, re di Britannia e cugino del ragazzo. Culhwch partì.`,
      sub2: "L'arrivo alla corte di Artù",
      text2: `L'ingresso di Culhwch alla corte di Artù è una delle scene più memorabili dell'intera letteratura celtica medievale. Il giovane arriva a cavallo — descritto con lusso di particolari: cavallo grigio di quattro anni, sella d'oro, briglie d'oro, due levrieri bianchi al fianco con collari d'oro, arco, spade, lancia — e pretende di essere ricevuto immediatamente anche se la sala del banchetto è già chiusa per la sera. Il portiere Glewlwyd Gafaelfawr gli dice che la regola è che non si entra dopo che il cibo è stato servito. Culhwch risponde che entrerà comunque, o la vergogna di Artù si spargerà per tutto il mondo. Artù lo fa entrare.

Culhwch chiede il dono di Olwen figlia di Ysbaddaden come boon — la grazia che ogni re deve concedere all'ospite. Ma siccome Artù non conosce né Olwen né suo padre, promette solo di aiutarlo a cercarla. Allora Culhwch invoca per nome ogni guerriero, ogni donna, ogni servo della corte di Artù che possa aiutarlo — e il testo elenca oltre 260 nomi, ciascuno con il proprio epiteto o caratteristica straordinaria. È il più lungo catalogo eroico della letteratura gallese e una delle più ricche "enciclopedie" del ciclo arturiano arcaico: vi compaiono Cei (Kay futuro), Bedwyr (Bedivere futuro), il veggente Menw, il mago Gwrhyr che parla il linguaggio di tutti gli animali, Mabon figlio di Modron imprigionato prima della sua nascita, e decine di altri. La lista è al tempo stesso catalogo epico, inventario mitologico e testo comico: alcuni nomi sono chiaramente parodistici.`,
      sub3: "Le quaranta prove impossibili di Ysbaddaden",
      text3: `Trovata Olwen — bellissima, bianca come la neve, con guance rosse come la volpe rossa, con quattro trifoli bianchi che nascono dove cammina — Culhwch chiede a Ysbaddaden la sua mano. Il gigante risponde con quaranta prove impossibili (anoetheu): compiti che da soli richiederebbero anni, connessi tra loro in catene di dipendenze ("per fare X ho bisogno di Y, e per ottenere Y devo prima avere Z"). Molte riguardano la preparazione del banchetto di nozze — dissodare la terra, ottenere sementi magiche, il calderone di Diwrnach l'irlandese che non cuoce mai cibo per un codardo. Alcune richiedono di liberare Mabon figlio di Modron dalla sua prigionia millenaria (episodio che prefigura la liberazione dal castello delle Meraviglie del Graal). Molte ruotano intorno al cinghiale Twrch Trwyth.

Tra le orecchie di Twrch Trwyth si trovano il rasoio, le forbici e il pettine d'oro con cui Ysbaddaden deve essere rasato e pettinato per il giorno delle nozze della figlia — un requisito grottesco per un gigante che sta per morire. Ma Twrch Trwyth è inarrestabile: un ex-re irlandese trasformato in cinghiale da Dio per i suoi peccati, con sette giovani guerrieri trasformati in cinghialetti al suo fianco. Ha devastato l'Irlanda. Solo Artù e tutti i suoi campioni riuniti possono sperare di affrontarlo.`,
      sub4: "La caccia a Twrch Trwyth e il matrimonio con Olwen",
      text4: `La caccia a Twrch Trwyth è la sequenza narrativa più lunga e più dinamica di Culhwch ac Olwen — una caccia monumentale attraverso tre paesi (Irlanda, Galles, Cornovaglia) che dura settimane, lascia decine di caduti tra i campioni di Artù, e richiede ogni risorsa disponibile: guerrieri, maghi, animali soprannaturali, oggetti magici. Twrch Trwyth attraversa il mare dall'Irlanda verso il Galles seminando distruzione; Artù e i suoi lo inseguono per tutto il Galles del sud, perdendo campioni a ogni scontro. Alla fine il cinghiale è spinto in mare verso la Cornovaglia: lì, in mare, uno degli eroi riesce a strappargli le forbici, un altro il rasoio, e Mabon — finalmente liberato dalla sua prigionia millenaria — gli strappa il pettine di tra le orecchie nel momento in cui il cinghiale viene trascinato in mare aperto e scompare.

Con tutte le prove compiute, Culhwch torna da Ysbaddaden. Il gigante è rasato, pettinato, costretto a riconoscere che tutte le sue condizioni sono state soddisfatte. "È Artù che ti ha ottenuto questo, non tu da solo," borbotta il gigante — e ha ragione, ma questo non conta: le prove erano le prove, e sono state superate. Gorcu, uno dei campioni di Artù, decapita Ysbaddaden. La profezia si è compiuta: il gigante è morto nel giorno delle nozze della figlia. Culhwch sposa Olwen. Il testo si chiude senza indugi: aveva ottenuto ciò che voleva, la storia è finita.`,
    },
    versions: [
      {
        era: "Culhwch ac Olwen (fine XI sec.)",
        name: "Il testo originale",
        text: `Culhwch ac Olwen è conservato nel Libro Bianco di Rhydderch (XIV sec.) e nel Libro Rosso di Hergest (XIV-XV sec.), ma la sua lingua e il suo stile rivelano una composizione molto più antica — probabilmente fine XI o inizio XII sec. — su materiali orali ancor più arcaici. La traduzione inglese di Gwyn Jones e Thomas Jones (The Mabinogion, Everyman, 1949) rimane la più utilizzata per Culhwch ac Olwen; la traduzione di Sioned Davies (2007) è la più accurata linguisticamente. Il testo è notevole per la sua lunghezza (è il più lungo dei racconti del Mabinogion), per la complessità della lista arturiana, e per il tono spesso comico-grottesco che lo distingue dagli altri Rami.`,
      },
      {
        era: "La lista arturiana",
        name: "260+ campioni di Artù",
        text: `Il catalogo di oltre 260 campioni che Culhwch invoca quando chiede il dono di Olwen è il documento più esteso del ciclo arturiano gallese arcaico. Vi compaiono figure che nelle tradizioni continentali successive diventeranno protagonisti di romanzi interi (Kei/Kay, Bedwyr/Bedivere, Gwalchmei/Gawain, Peredur/Percival), ma anche personaggi chiaramente mitologici e soprannaturali (Mabon figlio di Modron, Gwrhyr Gwalstawd Ieithoedd il linguista di tutti gli animali, Clust figlio di Clustfeinad che può sentire una formica a cinquanta miglia). La lista è strumento di trasmissione culturale — un inventario della memoria eroica gallese — e al tempo stesso un catalogo comico, perché molti dei nomi sembrano deliberatamente assurdi.`,
      },
      {
        era: "Twrch Trwyth — il cinghiale cosmico",
        name: "Principe maledetto in forma di bestia",
        text: `Twrch Trwyth — letteralmente "il Cinghiale Trwyth" — è uno dei mostri più potenti della letteratura celtica medievale. Il testo specifica che era stato re in Irlanda e che Dio lo aveva trasformato in cinghiale per i suoi peccati. Ha sette giovani guerrieri-cinghialetti al suo fianco, anch'essi ex-uomini trasformati. La connessione tra il cinghiale e la regalità è antichissima nella cultura celtica: il cinghiale era animale sacro associato alla guerra, al coraggio e alla regalità (le insegne celtiche con cinghiali sono documentate dall'archeologia). Twrch Trwyth è il re-cinghiale cosmico, la massima espressione bestiale del potere regale degradato.`,
      },
    ],
    cult: `La caccia a Twrch Trwyth ha lasciato tracce geografiche diffuse in Galles e Cornovaglia. Il testo di Culhwch ac Olwen nomina con precisione i luoghi della caccia — Preseli Hills nel Pembrokeshire, il fiume Severn, le coste della Cornovaglia — e la tradizione locale associa numerose formazioni geologiche anomale (massi erratici, insenature, crateri) alla caccia del cinghiale. In Cornovaglia diversi siti sono detti "Troynt" o varianti — probabile latinizzazione di Trwyth. In Galles le Preseli Hills, già sacre per la tradizione dei menhir di Stonehenge (le pietre blu vengono da lì), sono indicate come territorio principale della caccia e patria originaria del cinghiale.`,
    influence: [
      {
        era: "Primo racconto arturiano",
        text: `Culhwch ac Olwen precede di almeno un secolo la tradizione continentale del romanzo arturiano (Chrétien de Troyes scrive negli anni 1160-1190). È dunque il più antico testo narrativo esteso incentrato sulla corte di Artù, e offre un'immagine di Artù radicalmente diversa da quella cortese: un re-cacciatore, un leader di guerrieri bizzarri e soprannaturali, un uomo che si sporca le mani nella caccia al cinghiale. Questo Artù "pre-romantico" è probabilmente il più vicino alla figura storico-leggendaria originaria — se mai esistette un Artù reale nel V-VI sec. britannico, era più simile al cacciatore di Culhwch che al re cortese di Camelot.`,
      },
      {
        era: "Tradizione della Quest",
        text: `La struttura di Culhwch ac Olwen — un giovane che deve compiere prove impossibili per ottenere la sposa desiderata — è una delle matrici più antiche del genere della "quest" nella letteratura europea. Le quaranta prove di Ysbaddaden anticipano le prove dei romanzi del Graal, i "compiti impossibili" delle fiabe (ATU 513, "The Helpers on the Road"), e la struttura generale del romanzo cavalleresco. La connessione tra questa struttura narrativa celtica e il romanzo cortese europeo è stata documentata da R.S. Loomis (Celtic Myth and Arthurian Romance, 1927) e più recentemente da John Koch e Jane Carey (The Celtic Heroic Age, 1994).`,
      },
      {
        era: "Tolkien e l'influsso gallese",
        text: `J.R.R. Tolkien conosceva profondamente Culhwch ac Olwen — era tra i testi che leggeva con i suoi studenti a Oxford. Tom Shippey (The Road to Middle-Earth, 2003) ha documentato l'influsso del racconto su vari aspetti del legendarium tolkieniano: la struttura della "lista dei compagni" di Culhwch anticipa la Compagnia dell'Anello; la caccia a Twrch Trwyth anticipy la Caccia alla Bestia nel Silmarillion; il motivo di Mabon prigioniero prima della sua nascita anticipa l'enigma dei secoli perduti di Elrond. Tolkien stesso ha dichiarato che il Mabinogion era tra le sue fonti gallesi principali.`,
      },
    ],
    texts: [
      {
        title: "L'ingresso di Culhwch alla corte di Artù",
        source: "Culhwch ac Olwen, §7, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"Poi il giovane scese dal cavallo e entrò nella sala. Disse: 'Salve, sovrano di questa isola, e salute alla tua nobiltà — la più nobile e più generosa che ci sia! Concedimi il dono che chiedo.' 'Ti concederò il dono, figlio,' disse Artù, 'a patto che sia onesta e possibile. Qualunque cosa tu chieda tra la terra e il cielo, ti sarà concessa con gioia.' 'Allora poni la mano nella mia chioma,' disse il giovane, 'come pegno che mi darai ciò che chiedo.' 'Concedo,' disse Artù, 'purché sia possibile.' 'Chiedo Olwen figlia di Ysbaddaden Penkawr.'"`,
      },
      {
        title: "Le prove di Ysbaddaden",
        source: "Culhwch ac Olwen, §22, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"'Vedi quella collina grigia lì?' disse Ysbaddaden Penkawr. 'Devo arar quella collina e preparare il terreno e seminare e raccogliere prima del giorno del mio matrimonio, per fare il pane per la notte delle nozze. Non potrò farlo con l'aratro dei buoi — ma solo con Amathaon figlio di Dôn che non lavora per nessuno, e senza il suo aiuto non puoi ottenerlo.' 'Sarà facile per me ottenere questo, anche se tu non lo pensi.' 'Anche se ottieni questo, c'è ancora qualcosa che non puoi ottenere. Devi avere Gofannon figlio di Dôn per fabbricare il ferro dell'aratro — non lavora per nessuno.' 'Sarà facile per me ottenerlo.'"`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. ARTÙ GALLESE — il Re Arcaico di Britannia
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "artu-gallese",
    name: "Arthur (gallese)",
    role: "Re Arcaico di Britannia, Cacciatore di Mostri",
    tags: ["Britannia", "Re", "Mostri", "Ciclo arturiano"],
    epithet: "Arturo di Culhwch, Cacciatore di Mostri prima della Cortesia",
    type: "Eroe",
    chips: ["Culhwch", "Preiddeu Annwn", "Nennio", "Geoffrey di Monmouth"],
    heroColor: "linear-gradient(160deg,#0a0a1a,#1a2a4a,#050510)",
    shortDesc: `La figura di Artù nella tradizione gallese arcaica è radicalmente diversa dal re cortese dei romanzi medievali continentali. In Culhwch ac Olwen (fine XI sec.) è un eroe-cacciatore di mostri e giganti, capo di una banda di guerrieri con poteri soprannaturali. Nel Preiddeu Annwn conduce un raid all'Altro Mondo per rubare un calderone magico, perdendo quasi tutti i suoi uomini. Nennio nell'IX sec. lo registra come dux bellorum — comandante militare britannico — che combatte dodici battaglie contro i Sassoni. Geoffrey di Monmouth (1136) lo trasforma in re imperiale: da lì il ciclo europeo di Camelot, Lancillotto e il Graal si irradierà in tutta Europa.`,
    bio: {
      main: `Arthur — il cui nome deriva probabilmente dal latino Artorius (cognome romano) o, secondo alcune ipotesi, dal celtico *Arto-rigos "Re Orso" — è la figura più discussa, più elaborata e più diffusa dell'intera tradizione mitico-letteraria celtica. Ma l'Artù gallese arcaico — quello dei testi gallesi più antichi, anteriore alla trasformazione operata da Geoffrey di Monmouth nel 1136 — è figura molto diversa dal re della cortesia che tutti conosciamo. È cacciatore di mostri, capo guerriero, re dalla corte bizzarra e soprannaturale. Non ha Ginevra, non ha Lancillotto, non ha la Tavola Rotonda nel senso cavalleresco. Ha Cei (l'aspro futuro Kay), Bedwyr (il leale futuro Bedivere), e una banda di guerrieri ognuno dei quali è straordinario per qualche dote fisica o soprannaturale specifica: c'è chi può correre più veloce di qualunque animale, chi può sentire un'ape a cinquanta miglia, chi può tenere il respiro sott'acqua per nove giorni.

Questa banda di guerrieri-eroi dalle capacità anomale è la forma più arcaica della "Corte di Artù" — e ricorda più la banda di Fionn mac Cumhaill irlandese (i Fianna, guerrieri d'élite con poteri soprannaturali) che la cortesia di Camelot. Artù in questo contesto è il capo-banda, il primus inter pares, colui che convoca e organizza piuttosto che il re assoluto che giudica e governa. È già grande — la sua grandezza è riconosciuta ovunque — ma non è ancora il simbolo universale che diventerà. È ancora un eroe locale britannico in un mondo dove i giganti camminano per le Highlands del Galles e i cinghiali cosmici devastano l'Irlanda.`,
      sub1: "L'Artù arcaico — un cacciatore di mostri",
      text1: `In Culhwch ac Olwen Artù caccia: caccia il cinghiale cosmico Twrch Trwyth attraverso tre paesi, caccia la strega Orddu nelle caverne del nord (tagliandola a metà con la spada Carnwennan), guida i suoi campioni nell'impresa di liberare Mabon figlio di Modron imprigionato prima della sua nascita. Non porta la corona e non siede sul trono per giudicare le controversie dei cavalieri: è in campo, attivo, fisicamente impegnato.

I suoi campioni in Culhwch ac Olwen sono guerrieri straordinari ma non cavalieri nel senso feudale. Cei ha la proprietà di non bagnarsi mai — il calore del suo corpo fa evaporare la pioggia; Bedwyr è il più veloce nella battaglia nonostante abbia un solo braccio; Gwrhyr Gwalstawd Ieithoedd parla il linguaggio di ogni animale; Menw figlio di Teirgwaedd può trasformare il suo aspetto; Clust figlio di Clustfeinad può sentire qualunque suono a qualunque distanza. Queste capacità soprannaturali specifiche ricordano più gli eroi dei miti cosmologici (i Tuatha Dé Danann irlandesi con le loro competenze individuali) che i cavalieri virtuosi dei romanzi cortesi. L'Artù di Culhwch governa un mondo ancora permeato di magia fisica, non di idealizzazione cavalleresca.`,
      sub2: "Preiddeu Annwn — il raid all'Altro Mondo",
      text2: `Il poema Preiddeu Annwn ("Il Bottino dell'Annwn/Altro Mondo"), conservato nel Libro di Taliesin (XIV sec.) ma di contenuto probabilmente più antico (IX-X sec.), mostra un Artù ancora più arcaico: un re che guida un raid marittimo in tre navi verso l'Annwn per rubare un calderone magico riscaldato dal respiro di nove vergini, che non cuoce il cibo di un codardo. Il raid è un disastro: "Tranne sette, nessuno tornò" è la frase ricorrente del poema, ripetuta come un rintocco funebre alla fine di ogni strofa.

Il calderone dell'Annwn è strutturalmente il proto-Graal: un vaso magico custodito in un regno soprannaturale inaccessibile, raggiungibile solo dai puri o dai potenti, capace di nutrire o rifiutare secondo il merito del richiedente. Artù lo cerca senza successo definitivo nel Preiddeu — e questo fallimento è teologicamente significativo: anche il re più grande di Britannia non può sempre conquistare l'Altro Mondo. Il poema è oscuro, allusivo, probabilmente iniziatico — rivela ai soli iniziati il significato completo delle sette fortezze dell'Annwn attraverso cui la spedizione passa. Roger Sherman Loomis (Celtic Myth and Arthurian Romance, 1927) ha proposto che il Preiddeu sia la fonte diretta del ciclo del Graal: il calderone gallico diventa la coppa cristiana attraverso l'intermediazione delle tradizioni brittoniche continentali.`,
      sub3: "Nennio e le dodici battaglie — la prima storicizzazione",
      text3: `La Historia Brittonum attribuita a Nennio (compilata ca. 829-830, Galles) è il primo testo che inserisce Artù in un contesto storico riconoscibile. Nennio descrive Artù non come re ma come dux bellorum — "condottiero delle battaglie" — che combatte per conto dei re britannici contro i Sassoni invasori. Elenca dodici battaglie, l'ultima delle quali è Mons Badonicus (la "Battaglia del Monte Badon") dove Artù avrebbe ucciso 960 nemici con la sola sua mano. Questa cifra fantastica tradisce l'ibridazione tra storia e leggenda già presente in Nennio: il nucleo storico (un comandante britannico che resisteva ai Sassoni nel V-VI sec.) è già ricoperto da uno strato di elaborazione mitica.

Gli storici moderni (David Dumville, Guy Halsall, Christopher Snyder) sono divisi sull'esistenza di un Artù storico: alcuni ritengono possibile che un condottiero britannico di quel periodo abbia fornito il nucleo storico attorno a cui si è poi accumulata la leggenda; altri pensano che Artù sia interamente leggendario fin dall'origine. Quello che è certo è che Nennio fornisce la prima "ancoraggio" storico del mito — e questa storicizzazione è irreversibile: da Nennio in poi Artù non è più solo un eroe dei racconti, è un re che ha vissuto in un tempo preciso della storia britannica.`,
      sub4: "Geoffrey e Chrétien — il passaggio al ciclo europeo",
      text4: `Geoffrey di Monmouth nella Historia Regum Britanniae (ca. 1136) compie la trasformazione decisiva: prende l'Artù dei racconti gallesi arcaici, le poche tracce storiche di Nennio e degli Annales Cambriae, e costruisce un re imperiale di grandezza paragonabile a Roma. Artù conquista non solo la Britannia ma la Normandia, la Francia, gran parte dell'Europa occidentale; ha una corte magnifica, una moglie (Ginevra/Ganhumara), un nipote traditore (Mordred/Medraut), e muore ferito nella battaglia di Camlann per essere portato ad Avalon a guarire. Geoffrey scrive in latino per un pubblico colto normanno-britannico, e il suo successo è immediato e durissimo: la Historia è uno dei libri più copiati e più diffusi del XII secolo in tutta Europa.

Da Geoffrey la tradizione arturiana esplode nel ciclo continentale. Wace la traduce in francese (Roman de Brut, 1155) aggiungendo la Tavola Rotonda. Chrétien de Troyes nei romanzi degli anni 1160-1190 (Érec et Énide, Lancelot, Yvain, Perceval) crea il sistema della cortesia arturiana: la Tavola Rotonda come istituzione cavalleresca, il Graal come mistero spirituale, Lancillotto come l'amante impossibile di Ginevra. Wolfram von Eschenbach in Germania (Parzival, ca. 1210), Thomas Malory in Inghilterra (Le Morte d'Arthur, 1485) completano la tradizione. Da Culhwch e dalla caccia al cinghiale cosmico a Camelot e al Graal: il percorso è di quattro secoli di elaborazione letteraria che ha trasformato un eroe cacciatore gallese nel simbolo cavalleresco per eccellenza dell'Europa cristiana medievale.`,
    },
    versions: [
      {
        era: "Culhwch ac Olwen (XI sec.)",
        name: "L'Artù arcaico cacciatore",
        text: `In Culhwch ac Olwen Artù è re di Britannia nel senso più fisico e concreto: il suo territorio è reale, i suoi nemici sono mostri e giganti (non Sassoni né cavalieri nemici), i suoi campioni hanno poteri soprannaturali specifici non virtù cavalleresche. È la più antica rappresentazione estesa di Artù e la più lontana dall'immagine che prevarrà. La sua corte è in Celliwig ("il Bosco della Selva") in Cornovaglia — non a Camelot, non a Caerleon, non a Winchester.`,
      },
      {
        era: "Preiddeu Annwn (XIV sec., contenuti più antichi)",
        name: "Il raid all'Altro Mondo",
        text: `Il poema del Libro di Taliesin (fol. 54v) è di difficile datazione: il manoscritto è del XIV sec., ma la lingua e i contenuti suggeriscono una composizione del IX-X sec. su materiali ancora più antichi. È testo oscuro, allusivo, probabilmente iniziatico: non racconta linearmente il raid all'Annwn ma vi allude attraverso immagini frammentarie — le sette fortezze, il calderone, le nove vergini, i sette superstiti. Marged Haycock (Legendary Poems from the Book of Taliesin, 2007) è la traduzione accademica più autorevole.`,
      },
      {
        era: "Historia Brittonum di Nennio (IX sec.)",
        name: "Le dodici battaglie",
        text: `La Historia Brittonum (ca. 829-830) è un testo composito compilato in Galles, attribuito tradizionalmente a un monaco di nome Nennio ma probabilmente di più mani. Il capitolo 56, che elenca le dodici battaglie di Artù, è l'unico testo pre-Geoffrey che fornisce un contesto storico plausibile per il personaggio. La battaglia del Mons Badonicus — in cui Artù avrebbe ucciso 960 nemici — è indipendentemente attestata da Gildas (De Excidio et Conquestu Britanniae, ca. 540) come grande vittoria brittonico sui Sassoni, ma senza menzionare Artù.`,
      },
      {
        era: "Annales Cambriae (X sec.)",
        name: "La menzione storica della battaglia di Camlann",
        text: `Gli Annales Cambriae (Annali del Galles), compilati nel X sec. ma basati su fonti più antiche, registrano due menzioni di Artù. Sotto l'anno 516: "La battaglia di Badon, in cui Artù portò la croce di nostro Signore Gesù Cristo per tre giorni e tre notti sulle sue spalle e i Britanni furono i vincitori." Sotto l'anno 537: "La battaglia di Camlann, in cui Artù e Medraut caddero." Queste due voci — brevi, secche, quasi burocratiche — sono le attestazioni storiche più antiche del nome Artù in un contesto datato. Non provano un Artù storico, ma documentano che nel X sec. gallese si credeva che un Artù avesse combattuto a Badon e Camlann in date specifiche.`,
      },
      {
        era: "Historia Regum Britanniae di Geoffrey (ca. 1136)",
        name: "La trasformazione regia",
        text: `Geoffrey di Monmouth (ca. 1095-1155), chierico di origini probabilmente bretoni o gallesi, scrive la Historia Regum Britanniae ca. 1136 per il mecenate Robert di Gloucester. Il testo è formalmente storia ma è letteratura: Geoffrey inventa liberamente, costruisce un'epopea nazionale britannica che mancava. L'Artù di Geoffrey è grande come Alessandro, giusto come Salomone, tradito dall'interno come Cesare. La sua corte a Caerleon ("città delle legioni", Galles del sud) è la più splendida d'Europa. Guinevere è bella e poi adultera. Merlino è profeta e mago. Il successo del libro è immediato: entro vent'anni dalla sua composizione ci sono già decine di copie in circolazione in tutta Europa.`,
      },
      {
        era: "Chrétien de Troyes e il ciclo europeo",
        name: "La corte cortese di Camelot",
        text: `Chrétien de Troyes, poeta della corte di Marie de Champagne, scrive tra il 1160 e il 1190 cinque romanzi arturiani che fondano il genere del romanzo cortese europeo. Artù vi è re ma non protagonista: è il centro immobile attorno a cui ruotano i cavalieri erranti (Érec, Lancillotto, Yvain, Percival). Il Graal appare per la prima volta in Perceval (incompiuto alla morte di Chrétien): una coppa misteriosa portata in processione in un castello misterioso. Wolfram von Eschenbach in Germania (Parzival, ca. 1210), Robert de Boron in Francia (il ciclo del Graal, ca. 1200), la Vulgata Cycle (ca. 1220-1230), e infine Thomas Malory (Le Morte d'Arthur, 1485) completano la costruzione del ciclo arturiano europeo che dura fino ai giorni nostri.`,
      },
    ],
    cult: `La geografia arturiana britannica è vasta e soggetta a rivendicazioni locali multiple. Cadbury Castle (Somerset) è il candidato principale per Camelot: un grande forte dell'età del Ferro che scavi del 1966-70 (Leslie Alcock) hanno mostrato essere stato occupato e rinforzato intorno al 500 d.C., il periodo "arturiano". Tintagel (Cornovaglia) è il luogo di nascita mitico di Artù secondo Geoffrey: scavi recenti (1998-2016) hanno trovato un'iscrizione del VI sec. con il nome "Artognov" — non Artù, ma abbastanza vicino da alimentare il dibattito. Glastonbury (Somerset) è il presunto luogo di sepoltura: nel 1191 i monaci dell'abbazia dichiararono di aver trovato la tomba di "Artù" e "Ginevra" — quasi certamente una frode medievale, ma culturalmente potentissima. In Galles Caerleon (Galles del sud) è la "città delle legioni" di Geoffrey, con resti romani monumentali ancora visibili.`,
    influence: [
      {
        era: "Il ciclo arturiano europeo",
        text: `Il ciclo arturiano è la più grande tradizione letteraria dell'Europa medievale dopo la tradizione biblica e classica. Da Geoffrey di Monmouth (1136) a Chrétien de Troyes (1160-1190), dalla Vulgata Cycle (1220-1230) a Thomas Malory (1485), dall'Idylls of the King di Tennyson (1859) ai romanzi del XX sec., Artù ha percorso tutta la storia letteraria europea. La sua forza narrativa è quella dell'utopia politica — una corte dove la giustizia è possibile, dove la virtù è premiata, dove la violenza è incanalata in imprese nobili — destinata inevitabilmente alla caduta. Camelot è il paradiso perduto per eccellenza della letteratura laica europea.`,
      },
      {
        era: "Il mito del Re Dormiente",
        text: `"Artù non è morto, ma dorme in Avalon e tornerà quando la Britannia avrà più bisogno di lui" è uno dei miti politici più persistenti della storia europea. Attestato già nel XII sec. (Giraldo di Galles registra la credenza tra i Britanni del Galles e della Bretagna), il mito del "re dormiente" ha avuto valore politico concreto: i Bretoni si rifiutavano di riconoscere la morte di Artù come segno che la resistenza brittonica non era finita. Re Edoardo I d'Inghilterra (1272-1307) comprese la potenza politica del mito e lo neutralizzò organizzando la solenne "riscoperta" della tomba di Artù a Glastonbury nel 1278. Il mito del re dormiente che ritornerà esiste in decine di varianti europee: Federico Barbarossa nel Kyffhäuser in Germania, Sebastiano I del Portogallo, Fintan in Irlanda.`,
      },
      {
        era: "Re Artù e l'identità britannica",
        text: `Artù è il mito fondante dell'identità britannica — o almeno lo è stato per secoli. I Tudor rivendicavano discendenza da Artù per legittimare la loro ascesa al trono: Enrico VII chiamò il suo primogenito "Arthur" (morto prematuramente nel 1502). Enrico VIII espose a Winchester la presunta "Tavola Rotonda" di Artù come prova dell'eredità britannica. In epoca vittoriana Tennyson (Idylls of the King, 1859) fece di Artù il simbolo dell'imperialismo britannico virtuoso. Nel XX sec. il musical Camelot (1960) e il film Excalibur (1981) hanno rilanciato il mito per nuovi pubblici. Artù è la risposta britannica alla questione di ogni grande nazione: chi siamo? Da dove veniamo? Qual era la nostra età dell'oro?`,
      },
      {
        era: "Tolkien, T.H. White, Marion Zimmer Bradley",
        text: `Le tre grandi rielaborazioni arturiane del XX sec. rappresentano tre letture radicalmente diverse dello stesso materiale. Tolkien non ha scritto un romanzo arturiano ma ha elaborato un suo legendarium influenzato profondamente dal substrato celtico-arturiano (Beren e Lúthien come Culhwch e Olwen, Gondolin come Camelot, il Silmarillion come ciclo del Graal cosmologico). T.H. White in The Once and Future King (1958) ha scritto la versione più umanistica e politicamente consapevole del ciclo: un Artù che inventa la Tavola Rotonda come risposta morale alla violenza feudale, e la vede fallire per la debolezza umana irriducibile. Marion Zimmer Bradley in The Mists of Avalon (1983) ha riscritto il ciclo dal punto di vista femminile — Morgaine/Morgana come protagonista — rovesciando la prospettiva cristiana-patriarcale originale. Insieme queste tre opere hanno reso il ciclo arturiano materia viva per il pubblico moderno globale.`,
      },
    ],
    texts: [
      {
        title: "Artù in Culhwch ac Olwen",
        source: "Culhwch ac Olwen, §7, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"'Quale dono è quello che chiedi?' disse Artù. 'Che tu pettini i miei capelli,' disse Culhwch. Artù prese un pettine d'oro e un paio di forbici d'argento con manico d'oro, e pettinò i suoi capelli. E poi Artù lo esaminò con cura, e il suo cuore si aprì verso di lui, e lo riconobbe come un parente. 'Sì,' disse Artù, 'il mio cuore mi dice che sei parente mio. Dimmi chi sei.' 'Sono Culhwch figlio di Cilydd figlio del Principe Celyddon, figlio di Goleuddydd figlia del Principe Amlawdd, tua cugina.'"`,
      },
      {
        title: "Il raid all'Annwn",
        source:
          "Preiddeu Annwn, Libro di Taliesin, fol. 54v, trad. Marged Haycock (2007)",
        text: `"Sono glorioso nel canto, degno di sentire: / il canto nella fortezza rotante che ruota — / nella fortezza di quattro angoli dove parlavano i Naioni / tre volte la pienezza di Prydwen entrammo nel mare. / Tranne sette, nessuno tornò da Caer Sidi. / Non merito di lode è il canto della gente vile. // Nel castello dell'obliquità, nel forte della ricchezza, / mescevano idromele davanti alla flotta di guerra. / La reputazione di Pwyll e di Pryderi. / Tre spedizioni della flotta di Prydwen andammo in mare. / Tranne sette, nessuno tornò da Caer Rigor."`,
      },
      {
        title: "Le dodici battaglie",
        source: "Nennio, Historia Brittonum, §56, IX sec., trad. dal latino",
        text: `"In quel tempo gli Angli si moltiplicarono e crebbero in Britannia. Alla morte di Hengist, suo figlio Octha passò dal nord della Britannia al regno dei Cantii e da lui discesero i re dei Cantii. Allora Artù combatté contro di loro in quei giorni insieme ai re dei Britanni, ma egli stesso era il dux bellorum. La prima battaglia fu alla foce del fiume chiamato Glein. La seconda, la terza, la quarta e la quinta, sopra un altro fiume chiamato Dubglas, che è nella regione di Linnuis. La sesta battaglia sopra il fiume chiamato Bassas. [... e così per dodici battaglie fino a:] La dodicesima battaglia fu sul Monte Badon, in cui novecentosessanta uomini caddero in un solo attacco di Artù, e nessuno li abbatté tranne lui solo."`,
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   MITI PRINCIPALI
   ══════════════════════════════════════════════════════════════════════ */

const WELSH_MYTHS = [
  /* ════════════════════════════════════════════════════════════════════
     1. IL MABINOGION — il Corpus Nazionale Gallese
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "mabinogion",
    tag: "Corpus letterario",
    title: "Il Mabinogion — I Quattro Rami e i Racconti Gallesi",
    type: "Mito",
    epithet: "Il Corpus Narrativo Fondante della Mitologia Gallese",
    chips: ["XI-XIV sec.", "Libro Bianco", "Libro Rosso", "Charlotte Guest"],
    heroColor: "linear-gradient(160deg,#140a1a,#3a1f3a,#0a050a)",
    shortDesc: `Il Mabinogion è il corpus di undici racconti medievali gallesi conservato principalmente nel Libro Bianco di Rhydderch (XIV sec.) e nel Libro Rosso di Hergest (XIV-XV sec.), ma con nuclei orali che risalgono almeno all'XI sec. e probabilmente a molto prima. Il nome "Mabinogion" fu coniato dalla traduttrice Charlotte Guest (1838-45) a partire dalla parola "mabinogi" — termine gallese antico di significato incerto, forse "storie dell'infanzia di un eroe" o "materia per apprendisti bardi". Il corpus comprende i Quattro Rami del Mabinogi (i racconti mitologici centrali: Pwyll, Branwen, Manawydan, Math), quattro racconti indipendenti tra cui Culhwch ac Olwen e il Sogno di Rhonabwy, e tre romanzi arturiani gallesi (Peredur, Owain, Gereint). È il documento letterario più importante della mitologia gallese e uno dei testi medievali in lingua vernacolare più ricchi d'Europa.`,
    bio: {
      main: `Il Mabinogion non è un libro unitario scritto da un autore: è un'antologia, raccolta di racconti di origini diverse, trasmessi oralmente per secoli prima di essere messi per iscritto, e poi copiati in forma quasi definitiva nei grandi manoscritti del XIV-XV secolo. La parola "mabinogion" appare solo una volta nel Libro Rosso di Hergest, come colofonia alla fine del quarto dei Quattro Rami — e la sua forma plurale (mabinogion piuttosto che mabinogi) è probabilmente un errore del copista, che Charlotte Guest ha poi elevato a titolo dell'intera raccolta. Questo accidente filologico ha dato al corpus un nome che non aveva mai avuto, e lo ha unificato retroattivamente sotto un'etichetta che ne suggerisce la coerenza organica senza garantirla.

La questione dell'unità del Mabinogion è stata al centro del dibattito critico per due secoli. I Quattro Rami hanno chiaramente una coerenza interna: personaggi ricorrenti (Pryderi compare in tutti e quattro), temi comuni (la sovranità, l'inganno, la trasmissione del potere), e una geografia condivisa (Dyfed, Gwynedd, l'Annwn). W.J. Gruffydd nel 1928 ha proposto che i Quattro Rami derivino da un ciclo narrativo originario centrato su Pryderi, che sarebbe il protagonista "nascosto" di tutti e quattro; la tesi è controversa ma ha stimolato decenni di ricerca comparativa. I racconti indipendenti e i romanzi arturiani, invece, hanno origini diverse e non condividono la stessa coerenza: sono stati inclusi nella raccolta per ragioni di prossimità geografica e culturale, non per pianificazione editoriale. Il Mabinogion è dunque un corpus per convenzione più che per necessità — e questa convenzione è stata però culturalmente fecondissima: ha permesso di percepire la tradizione narrativa gallese medievale come un tutto, con una propria identità letteraria distinta dalla tradizione inglese, normanna o latina.`,
      sub1: "I Quattro Rami del Mabinogi",
      text1: `I Quattro Rami (Pedair Cainc y Mabinogi) sono il nucleo mitologico del Mabinogion e i testi gallesi medievali di maggiore interesse per lo studioso di mitologia celtica. Sono: il Primo Ramo (Pwyll Pendefig Dyfed — Pwyll Principe di Dyfed), il Secondo Ramo (Branwen ferch Llŷr — Branwen figlia di Llŷr), il Terzo Ramo (Manawydan fab Llŷr — Manawydan figlio di Llŷr), il Quarto Ramo (Math fab Mathonwy — Math figlio di Mathonwy). Ciascun Ramo è narrativamente autonomo — ha un protagonista principale, una struttura drammatica completa, un finale — ma i quattro sono collegati da personaggi ricorrenti e da un filo tematico comune che riguarda la sovranità, l'inganno, il soprannaturale e il rapporto tra il mondo umano e l'Annwn.

Il Primo Ramo introduce Pwyll, principe di Dyfed, e il suo incontro con Arawn re dell'Annwn, poi il suo matrimonio con Rhiannon e la nascita di Pryderi. Il Secondo Ramo racconta la guerra devastante tra Gallia e Irlanda causata dall'offesa a Branwen, con la morte di quasi tutti i protagonisti e la sopravvivenza di soli sette gallesi — tra cui Manawydan e Pryderi. Il Terzo Ramo segue Manawydan e Pryderi nella Dyfed incantata e vuota, e la paziente negoziazione di Manawydan per rompere l'incantesimo. Il Quarto Ramo è il più lungo e il più magicamente denso: racconta il regno di Math fab Mathonwy in Gwynedd, la punizione di Gwydion e Gilfaethwy, la storia di Lleu Llaw Gyffes, la creazione e il tradimento di Blodeuwedd. Pryderi muore nel Quarto Ramo per mano di Gwydion, chiudendo il ciclo della sua stirpe.

La lingua dei Quattro Rami è gallese medio (XII-XIII sec. circa nella forma tramandata), ma contiene strati linguistici e concettuali più arcaici che risalgono probabilmente all'XI sec. o prima. La tradizione orale sottostante è certamente più antica della scrittura: alcuni episodi rispecchiano concezioni mitologiche che sembrano precedere la cristianizzazione del Galles (V-VI sec.), anche se il testo così come lo abbiamo è chiaramente rielaborato da scrittori cristiani che hanno attenuato gli elementi più esplicitamente pagani.`,
      sub2: "I racconti indipendenti — Culhwch, Taliesin, Rhonabwy",
      text2: `Oltre ai Quattro Rami, il Mabinogion nella sua forma canonica (la raccolta di Charlotte Guest) include quattro racconti cosiddetti "indipendenti" — distinti dai Rami perché non condividono i personaggi centrali del ciclo Pwyll-Pryderi e non formano una sequenza narrativa coerente.

Culhwch ac Olwen è il più antico e il più importante: composto probabilmente alla fine dell'XI sec., è il primo racconto arturiano esteso sopravvissuto, con una sua voce narrativa potente e originale (descritta in dettaglio nella scheda specifica del mito). Il Sogno di Macsen Wledig narra di un imperatore romano (Massimo, morto nel 388 d.C.) che sogna una fanciulla gallese, la cerca, la trova, e la sposa — è romanzo di fondazione della Britannia romana e mito d'origine del lignaggio gallese. Il Racconto di Lludd e Llefelys racconta di due fratelli re che collaborano per liberare la Britannia da tre piaghe soprannaturali (un popolo invasore che capisce ogni parola pronunciata, un grido che ogni Calendimaggio distrugge il raccolto, un ladro notturno che prende ogni provvista) — testo breve, quasi allegorico, probabilmente di origine diversa dagli altri. Il Sogno di Rhonabwy è il più letterariamente sofisticato: ambientato nel XII sec., racconta di un guerriero medievale che si addormenta su una pelle di bue gialla e sogna il mondo di Artù — con un Artù bizzarro e anacronistico, in apparenza satirico del mito arturiano, ma di difficile interpretazione complessiva.

Infine, alcuni manoscritti includono la Storia di Taliesin — ma questa è in realtà un'aggiunta tarda (XVI sec.) al corpus e ha uno statuto filologico diverso dagli altri testi: narra dell'origine magica del bardo Taliesin, allevato da Ceridwen nel calderone dell'ispirazione, e della sua gara di poesia con i bardi del re. È testo affascinante ma non "mabinogion" nel senso stretto.`,
      sub3: "I tre romanzi arturiani gallesi",
      text3: `I tre "romanzi arturiani gallesi" inclusi nel Mabinogion — Peredur fab Efrawg, Owain neu Iarlles y Ffynnawn, Geraint fab Erbin — sono al centro di uno dei dibattiti più accesi della medievistica celtica: derivano dai romanzi di Chrétien de Troyes, oppure condividono con essi una fonte comune che entrambi hanno indipendentemente sviluppato? La questione è nota come il problema dei Mabinogion-Romances o "la questione della fonte comune" (Ur-text problem).

Peredur corrisponde al Percival di Chrétien (Perceval, ou le Conte du Graal, ca. 1190): entrambi raccontano di un giovane ingenuo allevato in isolamento che si reca alla corte di Artù e compie una serie di avventure finché non raggiunge la maturità cavalleresca. Ma Peredur è molto più lungo di Percival, con episodi che non hanno corrispondente in Chrétien, e la sua "questione del Graal" è assente — al suo posto c'è una testa insanguinata su un vassoio e una lancia gocciolante di sangue, senza spiegazione teologica. Owain corrisponde all'Yvain di Chrétien: cavaliere che sposa una dama, l'abbandona per troppo tempo di avventure, impazzisce di vergogna, e la riconquista. Geraint corrisponde all'Érec et Énide: cavaliere che sposa una donna, la mette inutilmente alla prova portandola in pericolose avventure, e alla fine riconosce il suo valore.

Il consenso accademico attuale (Sioned Davies, Ceridwen Lloyd-Morgan, Patrick Sims-Williams) è che i tre testi gallesi e i tre romanzi francesi derivano da un corpus narrativo bretone comune — tradizioni orali dei Bretoni (celti emigrati in Armorica/Bretagna dalla Britannia nel V-VI sec.) che circolavano nell'Europa nordoccidentale del XII sec. Chrétien le elaborò in forma di romanzo cortese in francese; i compilatori gallesi le elaborarono in forma di racconto prosastico in gallese. Nessuno dei due "deriva" dall'altro: entrambi derivano da una fonte comune ora perduta.`,
      sub4: "Da Charlotte Guest alla traduzione contemporanea",
      text4: `Charlotte Guest (1812-1895), nobile inglese moglie di un industriale gallese, imparò il gallese da adulta e dedicò quasi un decennio alla traduzione del Mabinogion. I volumi apparvero tra il 1838 e il 1845, con testo gallese a fronte e note erudite. Guest aveva accesso al Libro Rosso di Hergest attraverso la Bodleian Library di Oxford e ad altri manoscritti gallesi. La sua traduzione era elegante, leggibile, talvolta un po' romanticizzata nei toni — ma era la prima traduzione inglese completa, e ha definito per generazioni la ricezione del corpus. Fu anche lei a battezzare il tutto "Mabinogion" usando la parola che le era sembrata significativa, anche se filologicamente il termine si applica correttamente solo ai Quattro Rami.

L'impatto della traduzione di Guest fu immediato e duraturo. Matthew Arnold ne usò ampie sezioni in On the Study of Celtic Literature (1867), inaugurando una voga celtica nell'ambiente accademico vittoriano. Alfred Tennyson attinse alla tradizione arturiana di cui il Mabinogion faceva parte per gli Idylls of the King. William Morris tradusse alcuni episodi in versi. La generazione successiva — da William Butler Yeats a Fiona Macleod — trovò nel corpus gallese materiale per il proprio Celtic Revival.

Nel XX sec. il Mabinogion è stato ritradotto più volte con crescente rigore filologico. Gwyn Jones e Thomas Jones (Everyman Library, 1949) produssero la traduzione accademica standard per decenni, elegante e precisa. Jeffrey Gantz (Penguin Classics, 1976) la rese più accessibile al grande pubblico. Patrick K. Ford (University of California Press, 1977) si concentrò sui Quattro Rami con apparato critico. La traduzione di Sioned Davies (Oxford University Press, 2007) è oggi la più autorevole: usa la linguistica moderna per restituire la voce orale-performativa del testo gallese, con note che spiegano le allusioni mitologiche e i giochi di parole. Ognuna di queste traduzioni riflette la propria epoca e il proprio approccio critico: il Mabinogion è uno di quei testi che richiede di essere continuamente ritradotto perché continua a rivelarsi più ricco di quanto si credeva.`,
    },
    versions: [
      {
        era: "Tradizione orale (V-XI sec.)",
        name: "Il substrato mitico pre-testuale",
        text: `Per secoli prima della messa per iscritto, i racconti che confluiranno nel Mabinogion circolavano nella tradizione orale dei cyfarwyddiaid — i "narratori esperti" gallesi, la categoria professionale equivalente ai seanchaí irlandesi. I cyfarwyddiaid erano custodi di un repertorio narrativo vasto: storie di re e divinità, genealogie, miti cosmogonici, leggende geografiche. Questo repertorio era trasmesso a memoria attraverso tecniche mnemotecniche raffinate, e i narratori godevano di un prestigio sociale paragonabile a quello dei poeti. Le tracce di questa oralità sono ancora visibili nel testo scritto: formule ripetitive ("E quando fu così..."), descrizioni stereotipe dei personaggi (il cavallo bianco, il palazzo dorato), transizioni narrative brusche che riflettono la logica della performance piuttosto che quella della scrittura. Quando i copisti gallesi cominciarono a mettere per iscritto queste storie nell'XI-XII sec., trascrissero performance orali — con tutte le conseguenti incoerenze, varianti e lacune che caratterizzano la tradizione orale rispetto a quella scritta.`,
      },
      {
        era: "Libro Bianco di Rhydderch (XIV sec.)",
        name: "Il manoscritto più antico",
        text: `Il Llyfr Gwyn Rhydderch (Libro Bianco di Rhydderch) è il più antico manoscritto che trasmette i Quattro Rami e altri testi del Mabinogion. Datato ca. 1350, fu commissionato da Rhydderch ab Ieuan Llwyd di Parcrhydderch (Ceredigion, Galles centrale), un mecenate della letteratura gallese. Il manoscritto — oggi conservato alla National Library of Wales di Aberystwyth, MSS Peniarth 4 e 5 — è scritto in una grafia minuta e densa, con poche illustrazioni. Contiene non solo i testi del Mabinogion ma anche poesia gallese, testi religiosi, e la Triads (Trioedd Ynys Prydein), le "Triadi dell'Isola di Britannia" — una raccolta di aforismi mitologici in forma tripartita che è fonte preziosa per miti altrimenti non attestati. Il Libro Bianco è parzialmente lacunoso: alcune pagine mancano, e per alcuni testi (tra cui la parte iniziale di Culhwch ac Olwen) dobbiamo affidarci al Libro Rosso.`,
      },
      {
        era: "Libro Rosso di Hergest (XIV-XV sec.)",
        name: "Il manoscritto più completo",
        text: `Il Llyfr Coch Hergest (Libro Rosso di Hergest) è il manoscritto più completo del corpus del Mabinogion. Datato ca. 1382-1410, fu compilato probabilmente a Hergest Court nel Herefordshire (al confine tra Inghilterra e Galles), residenza della famiglia ap Thomas. Il manoscritto — oggi conservato alla Bodleian Library di Oxford (Jesus College MS 111) — è scritto in gallese medio, con pochi anglicismi, e contiene l'intera raccolta dei testi che confluiranno nel Mabinogion più un'enorme quantità di altri materiali: poesia dei bardi dei secoli XII-XIV, cronache gallesi, testi di medicina e astronomia. La sua organizzazione suggerisce che il compilatore intendesse creare una sorta di summa della cultura letteraria gallese medievale. È dalla colofonia del Libro Rosso alla fine del Quarto Ramo che Charlotte Guest prese la parola "mabinogion" — e con essa il titolo dell'intera raccolta.`,
      },
      {
        era: "Traduzione di Charlotte Guest (1838-45)",
        name: "La riscoperta moderna",
        text: `Lady Charlotte Guest — poi Charlotte Schreiber — pubblicò la sua traduzione del Mabinogion in tre volumi tra il 1838 e il 1845 (Longman, Orme, Brown, Green, and Longmans, Londra). Ogni volume conteneva il testo gallese originale (trascritto dal Libro Rosso), la traduzione inglese, e note filologiche e mitologiche di notevole erudizione. Guest aveva studiato gallese da adulta con maestri specialisti, e la sua padronanza della lingua, pur non perfetta, era sufficiente per un lavoro di questa qualità. La traduzione è elegante, spesso magnificamente prosaica, con occasionali risonanze bibliche che riflettono il gusto vittoriano. Alcune delle sue scelte lessicali ("knight", "lord", "maiden") anacronistizzano il testo verso il medievalismo romantico, ma la struttura narrativa è rispettata. Il Mabinogion di Guest rimase la traduzione standard per un secolo, e molti dei lettori più illustri del corpus — Tennyson, William Morris, Arnold, Yeats — lo conobbero attraverso di lei.`,
      },
      {
        era: "Traduzioni contemporanee",
        name: "Gantz, Davies, Ford",
        text: `Le tre traduzioni accademiche più influenti del XX-XXI sec. sono quella di Jeffrey Gantz (Penguin Classics, 1976), di Patrick K. Ford (The Mabinogi and Other Medieval Welsh Tales, University of California Press, 1977) e di Sioned Davies (The Mabinogion, Oxford World's Classics, 2007). Gantz punta sulla leggibilità per il pubblico moderno; Ford si concentra sui Quattro Rami con attenzione alla struttura narrativa orale; Davies — gallese madrelingua e filologa specialista — è la più accurata linguisticamente e la più attenta alla dimensione performativa del testo. La traduzione di Davies include note che spiegano i giochi di parole gallesi intraducibili, le allusioni mitologiche, e i momenti in cui il testo è deliberatamente ambiguo o oscuro. È la traduzione di riferimento per la ricerca accademica contemporanea.`,
      },
    ],
    cult: `La National Library of Wales (Llyfrgell Genedlaethol Cymru) di Aberystwyth è il "santuario" fisico del Mabinogion: custodisce il Libro Bianco di Rhydderch (Peniarth MS 4-5) e numerosi altri manoscritti gallesi medievali. La biblioteca è aperta al pubblico per la consultazione, e ha digitalizzato molti dei suoi manoscritti più importanti — compreso il Libro Bianco — rendendoli accessibili online. È meta di pellegrinaggio per studiosi di letteratura celtica da tutto il mondo.

L'Eisteddfod Nazionale del Galles (Eisteddfod Genedlaethol Cymru) — il festival annuale della cultura e della lingua gallese, istituito in forma moderna nel 1861 ma con radici molto più antiche — è il luogo in cui la tradizione del Mabinogion viene tenuta viva nel senso più diretto: la cerimonia del Gorsedd (l'assemblea dei bardi, riformata da Iolo Morganwg nel XVIII sec.) si ispira esplicitamente alle istituzioni bardiche gallesi medievali di cui il Mabinogion è documento. I poeti contemporanei che vincono le competizioni dell'Eisteddfod si inseriscono in una tradizione che risale ai cyfarwyddiaid che trasmettevano i Quattro Rami.`,
    influence: [
      {
        era: "Tolkien e il fantasy moderno",
        text: `J.R.R. Tolkien conosceva il Mabinogion profondamente — era tra i testi che leggeva con i suoi studenti a Oxford, e la sua competenza nel gallese medio era genuina. L'influenza del corpus sul suo legendarium è documentata e pervasiva. La storia di Beren e Lúthien in Il Silmarillion — con le prove impossibili imposte da Thingol per la mano di Lúthien (portarmi un Silmaril dalla corona di Morgoth) — rispecchia direttamente la struttura di Culhwch ac Olwen (prove impossibili imposte da Ysbaddaden per la mano di Olwen). Il motivo di Lleu che si trasforma in aquila e viene richiamato da Gwydion con tre canti riappare nella struttura delle metamorfosi di Sauron nel Silmarillion. Tom Shippey in The Road to Middle-Earth (2003) ha documentato sistematicamente questi influssi. Tolkien ha anche usato direttamente il gallese nella costruzione del Sindarin — la lingua degli elfi grigi — prendendo il sistema fonologico del gallese medio come modello. Il Mabinogion è dunque fonte tanto letteraria quanto linguistica del più influente autore fantasy del XX secolo.`,
      },
      {
        era: "Alan Garner, Lloyd Alexander, Susan Cooper",
        text: `La generazione di autori di fantasy per ragazzi del XX sec. che ha formato i lettori di tutto il mondo anglofono è profondamente debitrice al Mabinogion. Alan Garner in The Owl Service (1967) riscrive il mito di Lleu, Blodeuwedd e Gronw in chiave contemporanea, ambientandolo in un cottage gallese moderno. The Weirdstone of Brisingamen (1960) e The Moon of Gomrath (1963) di Garner attingono al folklore gallese e bretone in modo sistematico. Lloyd Alexander nel ciclo di Prydain (dal 1964) trasforma i Quattro Rami in un mondo fantasy per adolescenti: Prydain è Britannia mitologica, Arawn è il signore del Male, il calderone è oggetto magico fondamentale. Susan Cooper in The Dark is Rising (dal 1965) usa le tradizioni arturiane e celtiche — compreso il Preiddeu Annwn — come ossatura del suo conflitto cosmico tra Luce e Tenebre. Attraverso questi autori il Mabinogion ha raggiunto decine di milioni di lettori che non hanno mai aperto il testo originale.`,
      },
      {
        era: "Evangeline Walton e la riscrittura femminile",
        text: `Evangeline Walton (1907-1996) è l'autrice della prima grande riscrittura romanzesca dei Quattro Rami in lingua inglese: una tetralogia che comprende The Island of the Mighty (Quarto Ramo, scritto 1936, pubblicato 1970), Prince of Annwn (Primo Ramo, 1974), The Children of Llyr (Secondo Ramo, 1971), The Song of Rhiannon (Terzo Ramo, 1972). La tetralogia di Walton è notevole per diversi motivi: è la prima a trattare il Mabinogion come materiale per fiction letteraria seria (non per ragazzi); dà alle figure femminili — Rhiannon, Branwen, Blodeuwedd — la centralità narrativa che il testo medievale gli nega; e introduce una lettura antropologica del conflitto tra l'antico paganesimo celtico e il nascente patriarcato, anticipando di decenni le letture femministe del mito. Walton ha influenzato direttamente Marion Zimmer Bradley (The Mists of Avalon, 1983) e tutta la tradizione delle riscritture femministe del mito celtico-arturiano.`,
      },
      {
        era: "Revival della lingua e cultura gallese",
        text: `Il Mabinogion è stato strumento attivo del revival della lingua gallese nel XIX-XXI sec. Quando la lingua gallese era sotto pressione dell'anglicizzazione — in particolare dopo l'Education Act del 1870 che introdusse scuole solo in inglese nel Galles — il corpus medievale divenne simbolo dell'identità culturale gallese resistente. La traduzione di Guest paradossalmente aiutò: rendendo il Mabinogion accessibile in inglese, attirò l'attenzione internazionale sulla ricchezza della tradizione letteraria gallese e fornì ai gallesi stessi un argomento per la dignità della loro lingua. Oggi il Mabinogion è testo canonico nell'insegnamento della letteratura gallese nelle scuole del Galles; la BBC Wales ha prodotto adattamenti televisivi e radiofonici; la National Library ha lanciato programmi di digitalizzazione e accesso pubblico. Il corpus è vivo come testo culturale, non solo come oggetto museale.`,
      },
    ],
    texts: [
      {
        title: "L'apertura del Primo Ramo",
        source:
          "Mabinogi, Pwyll Pendefig Dyfed, §1, trad. Sioned Davies (2007)",
        text: `"Pwyll, Prince of Dyfed, was lord over the seven cantrefs of Dyfed. One time he was at Arberth, his chief court, and it came into his head and heart to go hunting. The part of his domain that he wanted to hunt was Glyn Cuch. He set out that night from Arberth, and came as far as Pen Llwyn Diarwya, and there he was that night." — Il testo originale gallese recita: "Pwyll Pendefig Dyfed a oed yn arglwydd ar seith cantref Dyfed." La semplicità dell'apertura è caratteristica del Mabinogion: nessuna invocazione, nessun prologo, nessun inquadramento storico. Il racconto comincia in medias res, con il principe nel suo territorio, pronto ad andare a caccia. È la voce del narratore orale che ha già catturato l'attenzione del pubblico e ora entra direttamente nel vivo.`,
      },
      {
        title: "La colofonia del Libro Rosso",
        source: "Llyfr Coch Hergest, al termine del Quarto Ramo, XIV-XV sec.",
        text: `"Ac yuelly y teruyna y mabinogi hwnn." — "E così termina questo mabinogi." La colofonia che chiude il Quarto Ramo nel Libro Rosso di Hergest usa per l'unica volta nel corpus la parola "mabinogi" (qui nella forma plurale "mabinogion" nell'edizione di Guest, ma nel manoscritto è "mabinogi"). Da questa frase di chiusura Charlotte Guest derivò il titolo dell'intera raccolta. Il termine "mabinogi" è di significato discusso: potrebbe derivare da "mab" (figlio, ragazzo) con il suffisso "-inogi" tipico di astratti collettivi, suggerendo "storia di eroi giovani" o "materia per apprendisti bardi". La questione filologica non è risolta, ma il nome è rimasto.`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. CULHWCH AC OLWEN — il Primo Racconto Arturiano
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "culhwch-olwen",
    tag: "Racconto arturiano",
    title: "Culhwch ac Olwen — la Prima Quest Arturiana",
    type: "Mito",
    epithet: "Il Più Antico Racconto Arturiano Sopravvissuto (fine XI sec.)",
    chips: ["XI sec.", "Arturo", "Cinghiale", "40 anoetheu"],
    heroColor: "linear-gradient(160deg,#141400,#3a2f10,#0a0a00)",
    shortDesc: `Culhwch ac Olwen è il più antico racconto arturiano esteso sopravvissuto, composto probabilmente alla fine dell'XI sec. su materiali orali più antichi e conservato nel Libro Bianco e nel Libro Rosso di Hergest. Culhwch — il cui nome significa "nascondiglio della scrofa" — è maledetto dalla matrigna a non poter amare nessuna donna tranne Olwen, figlia del gigante cannibale Ysbaddaden Penkawr. Per ottenerla deve compiere quaranta prove impossibili (anoetheu) imposte dal padre. Artù e i suoi campioni — oltre 260 invocati per nome in un catalogo senza eguali nella letteratura celtica — aiutano nella quest. Il culmine è la caccia cosmica al cinghiale Twrch Trwyth, ex-re irlandese trasformato da Dio in bestia, attraverso Irlanda, Galles e Cornovaglia. Le prove vengono compiute, Ysbaddaden viene decapitato, Culhwch sposa Olwen.`,
    bio: {
      main: `Culhwch ac Olwen è il testo arturiano più arcaico — e per molti versi il più bizzarro, il più ricco, il più strabordante — della tradizione celtica insulare. Scritto in gallese medio, probabilmente alla fine dell'XI sec. su tradizioni orali di difficile datazione, è conservato in forma parzialmente lacunosa nel Libro Bianco di Rhydderch (XIV sec.) e in forma completa nel Libro Rosso di Hergest (XIV-XV sec.). Non appartiene al ciclo cortese arturiano che conosciamo attraverso Chrétien de Troyes, Geoffrey di Monmouth o Thomas Malory: l'Artù di Culhwch non presiede una corte di cavalieri ideali, non ha la Tavola Rotonda nel senso feudale, non è impegnato nella ricerca spirituale del Graal. È un re-cacciatore, capo di una banda di guerrieri dalla bizzarra specializzazione soprannaturale, che si sporca le mani nella caccia al cinghiale cosmico e non si ferma davanti a nessun ostacolo fisico.

Il tono del racconto oscilla liberamente tra il grandioso e il comico, tra l'eroico e il grottesco — oscillazione tipica della tradizione narrativa orale celtica che non conosce la separazione rigida dei registri propria della letteratura scritta classica. La lista dei 260 campioni di Artù è allo stesso tempo catalogo epico (con nomi di eroi mitologici di grande antichità) e gag comica (con nomi palesemente assurdi come "Clust figlio di Clustfeinad" — "Orecchio figlio di Chi-Sente-Lontano" — che può sentire una formica a cinquanta miglia). Le prove impossibili di Ysbaddaden sono sia struttura narrativa seria (le condizioni della Quest) sia comicità burocratica (il gigante che improvvisa nuove condizioni ogni volta che gli sembra di poter essere accontentato). Culhwch ac Olwen è un testo che sa ridere di se stesso pur mantenendo la serietà mitica al suo cuore.`,
      sub1: "La struttura del racconto — quest, lista, caccia",
      text1: `Il racconto si divide in tre grandi momenti strutturali chiaramente distinguibili, ognuno con il proprio ritmo e registro narrativo.

Il primo momento è la presentazione di Culhwch e la sua maledizione: la nascita tra i porci, la morte della madre, la matrigna cattiva, la tynged (destino obbligato) di non poter amare nessuna donna tranne Olwen. Questo segmento è breve, narrativamente economico, con la struttura fiabesca classica (terzo figlio, madrigna cattiva, destino impossibile). Introduce il protagonista e il suo problema in modo chiaro e diretto.

Il secondo momento — il più lungo e il più straordinario — è la visita alla corte di Artù e la lista dei campioni. Culhwch arriva alla corte di Artù in Celliwig (Cornovaglia), viene ricevuto, chiede Olwen come "boon" del re, e poi invoca per nome ogni membro della corte che possa aiutarlo. Il testo elenca oltre 260 nomi, ciascuno con epiteto o caratteristica: è il più esteso catalogo eroico della letteratura gallese e uno dei più ricchi della letteratura celtica complessiva. Il catalogo non è pura forma: molti dei nomi rinviano a storie che il pubblico originale conosceva (Mabon figlio di Modron, Llwch Llawwynniog, Gwalchmei — il futuro Gawain) e la lista funzionava come invocazione collettiva della memoria eroica della nazione.

Il terzo momento è la serie delle prove di Ysbaddaden e il loro compimento, con la caccia a Twrch Trwyth come culmine. Questo segmento è il più lungo in proporzione: molte delle 40 prove vengono descritte nell'esecuzione, alcune sintetizzate ("e quello fu facile per loro"), altre dettagliate con precisione che rivela la cura dell'autore per l'episodio. La caccia a Twrch Trwyth è la più estesa e la più dinamica: percorre una geografia vasta, coinvolge dozzine di personaggi, e lascia cadere campioni famosi come pedaggi del cammino.`,
      sub2: "Le 40 anoetheu — prove impossibili",
      text2: `Le quaranta anoetheu (letteralmente "cose impossibili", plurale di anoeth) che Ysbaddaden impone a Culhwch sono la struttura formale della quest. Il gigante le formula in un lungo monologo — interrotto solo da tre lanci di giavellotto avvelenato verso Culhwch (tutti intercettati e rilanciatihttps da Bedwyr o Menw) — elencandole una per una, ognuna apparentemente impossibile e ognuna connessa alle altre in catene di dipendenza ("per fare X ho bisogno di Y, e Y è possibile solo se hai Z").

Molte delle prove riguardano la preparazione del banchetto di nozze: dissodare una certa terra sterile per piantare il grano (e per dissodare quella terra serve un aratro magico, e l'aratro richiede buoi particolari, e i buoi richiedono un guardiano specifico...). Alcune richiedono oggetti impossibili: il calderone di Diwrnach l'irlandese (che non cuoce mai il cibo di un codardo), il corno di Gwlgawd Gododdin (per versare il vino della notte delle nozze). Alcune richiedono di liberare prigionieri soprannaturali: Mabon figlio di Modron, imprigionato prima della sua nascita, da trovare chiedendo agli animali più antichi del mondo (il Merlo di Cilgwri, la Civetta di Cwm Cawlwyd, l'Aquila di Gwernabwy, il Salmone di Llyn Llyw). L'episodio di Mabon — trovato infine nella prigione di Caer Loyw (Gloucester) con l'aiuto del Salmone che sa dove si trova ogni cosa nel mondo — è uno dei più belli del racconto e ha influenzato direttamente Tolkien (la prigionia di Mabon = prigionia dei nani di Bilbo nelle caverne degli elfi?).

La prova finale — e quella che richiede più spazio narrativo — riguarda le orecchie di Twrch Trwyth: tra di esse si trovano il rasoio, le forbici e il pettine d'oro con cui Ysbaddaden deve essere rasato per il giorno delle nozze della figlia. Il cinghiale Twrch Trwyth è inarrestabile, devastatore, soprannaturale. Solo Artù con tutti i suoi campioni può affrontarlo.`,
      sub3: "La caccia al cinghiale cosmico Twrch Trwyth",
      text3: `La caccia a Twrch Trwyth è il cuore dinamico del racconto — la sua sequenza più lunga, più movimentata, più cosmica per portata geografica. Twrch Trwyth (letteralmente "il Cinghiale Trwyth" — Trwyth potrebbe essere un nome proprio o un epiteto arcaico) era stato re in Irlanda finché Dio non lo aveva trasformato in cinghiale per i suoi peccati. Ha sette giovani cinghialetti al suo fianco, anch'essi ex-uomini. Ha devastato l'Irlanda per anni. Quando Artù manda messaggeri a chiedergli il rasoio e il pettine, Twrch Trwyth risponde che non darà nulla di ciò che porta tra le orecchie — e che difenderà ciò che porta finché avrà vita.

La caccia comincia in Irlanda, dove Artù segue Twrch Trwyth con una flotta. I campioni di Artù tentano ripetutamente di avvicinarsi al cinghiale e ai cinghialetti: ogni volta che uno dei cinghialetti viene ucciso, si perde un campione. La caccia attraversa il mare di Irlanda verso la Cornovaglia, poi percorre il Galles del Sud dal mare fino alle colline del Gwynedd, poi torna verso la costa della Cornovaglia. A ogni scontro le forze si assottigliano. Artù stesso partecipa direttamente, inseguendo Twrch Trwyth con il suo cavallo Gwynn Mygdwn.

In Cornovaglia, finalmente, in un combattimento sul mare — Twrch Trwyth spinto nelle acque dalla rincorsa — uno degli eroi gli strappa le forbici, Mabon (finalmente liberato) gli strappa il rasoio, Cyledyr Wyllt gli strappa il pettine. Twrch Trwyth è trascinato sott'acqua e non si sa dove sia andato. La morte del cinghiale non è descritta: scompare, come scompaiono le grandi forze cosmiche quando il loro momento è finito. Con gli oggetti recuperati Ysbaddaden può essere rasato e pettinato — umiliato nel momento del trionfo di Culhwch — e poi decapitato da Gorcu.`,
      sub4: "L'influenza sul ciclo arturiano europeo",
      text4: `Culhwch ac Olwen è, in senso tecnico, il testo arturiano più antico: precede Geoffrey di Monmouth di almeno mezzo secolo, e precede Chrétien de Troyes di un intero secolo. Il suo Artù non è ancora il re cortese di Camelot ma è già riconoscibilmente "Artù" — il capo supremo dei guerrieri di Britannia, colui che può radunare i campioni da ogni angolo dell'isola, il re che non rifiuta nessun boon a chi lo chiede nella sua corte.

La struttura della quest con prove impossibili che Culhwch deve superare per ottenere la sposa amata è la matrice diretta del romanzo cortese europeo: in Chrétien de Troyes i cavalieri di Artù partono ciascuno per una quest — trovare un oggetto, liberare un prigioniero, difendere una dama — e il compimento della quest è la dimostrazione della virtù cavalleresca. La differenza è di registro e di valori: in Culhwch le prove sono fisiche, concrete, spesso grottesche (rasare un gigante con il rasoio tra le orecchie di un cinghiale); nei romanzi cortesi le prove sono morali e spirituali (il Graal è da trovare, Lancillotto deve meritare Ginevra). Ma la struttura narrativa è la stessa — e deriva, attraverso qualche intermediario bretone oggi perduto, da questo testo gallese.

La lista dei campioni di Artù in Culhwch ha ispirato la Tavola Rotonda dei romanzi continentali: l'idea che attorno ad Artù gravitino guerrieri straordinari, ciascuno con la propria specialità, è già qui, anche se la forma della "tavola rotonda" come istituzione della cortesia cavalleresca è un'aggiunta successiva (introdotta da Wace nel 1155 come simbolo dell'eguaglianza tra i cavalieri).`,
    },
    versions: [
      {
        era: "Composizione originale (fine XI sec.)",
        name: "Il testo arcaico",
        text: `La datazione di Culhwch ac Olwen è basata su criteri linguistici e stilistici: la lingua è gallese medio nella sua forma più arcaica, con forme grammaticali e lessico che indicano una composizione non oltre il 1100 circa. Rispetto agli altri testi del Mabinogion, Culhwch mostra uno stile più asimmetrico, più "orale" — con lunghe liste catalogo, ripetizioni formulaiche, e transizioni narrative brusche — che suggerisce una trasmissione orale meno elaborata rispetto ai Quattro Rami. Alcuni episodi (la liberazione di Mabon, la caccia a Twrch Trwyth) sembrano avere una struttura narrativa più antica e potrebbero risalire a tradizioni orali del VIII-IX sec.`,
      },
      {
        era: "Libro Bianco di Rhydderch",
        name: "La versione parziale",
        text: `Nel Libro Bianco di Rhydderch (ca. 1350) il testo di Culhwch ac Olwen è parzialmente conservato ma con lacune significative all'inizio (la prima parte, fino all'arrivo di Culhwch alla corte di Artù, è assente o danneggiata). Il Libro Bianco è comunque prezioso perché in alcuni punti offre varianti testuali rispetto al Libro Rosso che permettono di ricostruire meglio la trasmissione del testo. Gli studiosi usano entrambi i manoscritti in edizione critica — la più autorevole è quella di Rachel Bromwich e D. Simon Evans (University of Wales Press, 1992) che presenta il testo gallese con apparato critico completo.`,
      },
      {
        era: "Libro Rosso di Hergest",
        name: "La versione completa",
        text: `Il Libro Rosso di Hergest (ca. 1382-1410) trasmette la versione più completa di Culhwch ac Olwen, dall'inizio alla fine, con la sola lacuna di alcune righe in un punto interno. È la fonte principale per tutte le traduzioni moderne del testo. La copia del Libro Rosso presenta qualche errore del copista (nomi storpiati, salti di riga), che le edizioni critiche correggono confrontando con il Libro Bianco dove disponibile.`,
      },
      {
        era: "Rielaborazioni moderne",
        name: "Walton, Cooper, Gaiman",
        text: `Evangeline Walton ha rielaborato indirettamente il mondo di Culhwch nella sua tetralogia sul Mabinogion. Susan Cooper in The Dark is Rising usa la geografia della caccia a Twrch Trwyth come sfondo simbolico. Neil Gaiman in American Gods (2001) include una sequenza in cui il narratore incontra una versione degradata e moderna di divinità celtiche che richiama la logica del catalogo eroico. Alan Garner in Boneland (2012), il terzo romanzo della trilogia del Weirdstone, include riflessioni sul mito celtico del cinghiale cosmico. La presenza del cinghiale magico come figura del caos primordiale è ricorrente nel fantasy contemporaneo di ispirazione celtica.`,
      },
    ],
    cult: `La geografia di Culhwch ac Olwen è pan-britannica: la caccia a Twrch Trwyth copre tre paesi (Irlanda, Galles, Cornovaglia) e lascia tracce toponomastiche in tutti e tre. In Galles le Preseli Hills nel Pembrokeshire — già sacre come fonte delle pietre blu di Stonehenge — sono indicate come territorio della caccia e nella tradizione locale si identificano diverse formazioni rocciose con siti della storia. In Cornovaglia la penisola di Tintagel e la zona di Bodmin Moor sono tradizionalmente collegate alla fase finale della caccia. In Irlanda i siti associati alla devastazione di Twrch Trwyth sono più difficili da identificare con precisione ma la tradizione orale irlandese della corrispondente storia (Torc Triath, il cinghiale dei Tuatha Dé Danann) offre paralleli interessanti.`,
    influence: [
      {
        era: "Prototipo della Quest arturiana",
        text: `Culhwch ac Olwen è la matrice strutturale della quest arturiana: un protagonista che deve superare prove impossibili per ottenere ciò che desidera, con l'aiuto della corte di Artù. Questa struttura — individuo + corte + prove + oggetto/sposa desiderata — è la cellula generativa di tutti i romanzi arturiani successivi, da Chrétien de Troyes a Thomas Malory. La differenza tra Culhwch e i romanzi cortesi è di valori: in Culhwch le prove sono fisiche e concrete; nei romanzi cortesi sono morali e spirituali. Ma la grammatica narrativa è identica. Culhwch è l'Ur-romanzo arturiano — il testo che ha definito la struttura che tutti i successivi hanno seguito.`,
      },
      {
        era: "Il catalogo eroico — un'enciclopedia mitica",
        text: `Il catalogo di 260+ campioni di Artù invocati da Culhwch è un documento di straordinario valore per la mitologia gallese: contiene nomi di figure mitologiche altrimenti sconosciute, epiteti che richiamano storie perdute, connessioni genealogiche che rivelano una tradizione molto più ricca di quanto i testi sopravvissuti ci mostrino. Rachel Bromwich nelle Trioedd Ynys Prydein (1961, edizione critica delle "Triadi dell'Isola di Britannia") ha identificato molti dei personaggi del catalogo in altri testi gallesi medievali, mostrando che la lista di Culhwch è un frammento di una tradizione narrativa vastissima di cui abbiamo perso la maggior parte.`,
      },
      {
        era: "Tolkien — Beren e Lúthien",
        text: `La storia di Beren e Lúthien in Il Silmarillion è la più autobiografica e la più amata di Tolkien — è incisa sulla sua tomba a Oxford. La struttura è identica a quella di Culhwch ac Olwen: il giovane mortale Beren vuole la mano della fata Lúthien; suo padre Thingol impone una condizione impossibile (portami un Silmaril dalla corona di Morgoth); Beren compie imprese straordinarie con l'aiuto di alleati soprannaturali; ottiene infine la sposa. Tom Shippey e Dimitra Fimi hanno documentato questa dipendenza. Tolkien era consapevole dell'influsso: usò il nome "Tinúviel" (derivato da una storia di canti di uccelli in un bosco gallese reale) per Lúthien, e strutturò le prove di Beren seguendo il modello delle anoetheu.`,
      },
      {
        era: "Il cinghiale cosmico nel fantasy moderno",
        text: `Twrch Trwyth — il cinghiale-re inarrestabile che devasta interi paesi — è l'archetipo della bestia cosmica che il fantasy moderno continua a riproporre. In Tolkien l'analogo è Glaurung il Drago nel Silmarillion (bestia primordiale che non si può uccidere facilmente, associata alla caduta degli eroi). In George R.R. Martin Il Trono di Spade il re-cinghiale ferocissimo che uccide il re Baratheon è un eco mitologico diretto. In Neil Gaiman Mr. Nancy e le sue storie di cinghiali cosmici in American Gods rimandano alla stessa tradizione. La figura del "cinghiale che era re" — animale che incarna il potere regale degradato — è tra le più antiche e più persistenti della mitologia celtica e del fantasy che da essa discende.`,
      },
    ],
    texts: [
      {
        title: "L'ingresso di Culhwch",
        source: "Culhwch ac Olwen, §7, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"E il giovane partì verso il palazzo di Artù. E con lui c'era un cavallo grigio di quattro anni con zampe robuste e criniera piena, con la testa alta e l'anca bassa, cagliato come se fosse stato immerso nel sale bianco. E aveva una briglia d'oro in bocca. E sotto di lui un mantello di seta viola con un pomello d'oro. E nelle sue mani due lance argentate aguzze. E al suo fianco una spada con una lama dorata e un fodero di cuoio d'oro. E davanti a lui due levrieri bianchi come la neve di montagna con collari d'oro. E l'uno era davanti all'altro e l'altro dietro. E intorno a lui un mantello di porpora con un bordo di rosso porpora. E le fibbie erano d'oro agli stinchi e ai polsi."`,
      },
      {
        title: "La lista dei campioni",
        source:
          "Culhwch ac Olwen, §9-13, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"Chiedo questo per Kel figlio di Keli. Bedwyr figlio di Pedrawg. Greidawl Galldonyd. Gwythyr figlio di Greidawl. Greid figlio di Eri. Kynddylig il Guida. Tathal Twyll Golau. Maelwys figlio di Baeddan. Crychwr figlio di Nes. Cubert figlio di Daere. Fercos figlio di Poch. Lluber Beuthach. Cornillo figlio di Faw il Vecchio. Fino figlio di Faw il Vecchio. Gwrgwst Ledlwm e Dynvarth suo figlio. Ffleudur Fflam figlio del re di Llydaw. Greidawl Galldonyd. Gwythyr figlio di Greidawl..." — Il catalogo continua per più di 200 nomi aggiuntivi, ciascuno con il proprio epiteto o qualifica.`,
      },
      {
        title: "Le 40 prove di Ysbaddaden",
        source: "Culhwch ac Olwen, §22, trad. Gwyn Jones e Thomas Jones (1949)",
        text: `"'Vedi quella collina grigia là?' disse Ysbaddaden Penkawr. 'Devo dissodare quella collina e preparare il terreno e seminarla e raccogliere e fare il pane per la notte delle mie nozze, con il grano di quella stessa terra. Non posso farlo senza che Amathaon figlio di Don venga ad arare la terra — e non lavorerà per nessuno, volente o nolente.' 'È facile per me ottenerlo, sebbene tu non lo pensi.' 'Anche se lo ottieni, c'è ancora qualcosa che non puoi ottenere. Gofannon figlio di Don deve venire alla capezzola a fabbricare il ferro — non lavorerà per nessuno.' 'È facile per me ottenerlo, sebbene tu non lo pensi.'"`,
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. PREIDDEU ANNWN — il Raid al Calderone Magico
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "preiddeu-annwn",
    tag: "Poema mitologico",
    title: "Preiddeu Annwn — Il Bottino dell'Altro Mondo",
    type: "Mito",
    epithet:
      "Il Raid di Artù all'Annwn per Conquistare il Calderone della Rinascita",
    chips: ["Libro di Taliesin", "Annwn", "Calderone", "Proto-Graal"],
    heroColor: "linear-gradient(160deg,#050814,#0f1f4a,#020410)",
    shortDesc: `Preiddeu Annwn ("Il Bottino dell'Annwn / Altro Mondo") è un poema allusivo conservato nel Libro di Taliesin (XIV sec.) ma con contenuti probabilmente del IX-X sec. Narra una spedizione di Artù in tre navi nell'Annwn per conquistare un calderone magico riscaldato dal respiro di nove vergini, che rifiuta di cuocere il cibo di un codardo. Il raid è catastrofico: "Tranne sette, nessuno tornò" è il ritornello ripetuto alla fine di ogni strofa come un rintocco funebre. Il testo è volutamente oscuro e allusivo, probabilmente di natura iniziatica. È il documento gallese più importante per la connessione tra la mitologia celtica del calderone e il ciclo del Graal arturiano europeo.`,
    bio: {
      main: `Preiddeu Annwn è uno dei testi più enigmatici e più importanti della letteratura gallese medievale. La parola "preiddeu" significa "bottino, preda, razzia" — ma il testo mostra che la razzia all'Altro Mondo si è conclusa senza vera conquista: il calderone è stato forse toccato, forse visto, ma non portato via in modo definitivo. Il titolo descrive un'intenzione, non un'azione compiuta con successo. È il bottino che non si ottiene, la conquista che non si compie — e questa struttura del fallimento eroico magnifico è al cuore del poema.

Il testo è conservato nel Llyfr Taliesin (Libro di Taliesin), un manoscritto del XIV sec. che raccoglie poesia attribuita al bardo leggendario Taliesin — figura storica reale del VI sec. (attestata nelle Triadi e in altri documenti) che nel Medioevo gallese divenne figura semi-mitica, a cui venivano attribuite composizioni di ogni epoca. Il Libro di Taliesin contiene testi autenticamente arcaici accanto a composizioni molto più tarde attribuite retrospettivamente al bardo. Il Preiddeu Annwn è probabilmente uno dei testi più antichi della raccolta: la sua lingua, i suoi riferimenti mitologici e la sua struttura suggeriscono una composizione del IX-X sec., anche se la tradizione orale a cui attinge potrebbe essere molto più antica.

Il poema è formato da otto strofe, ciascuna delle quali descrive la traversata di una delle fortezze dell'Annwn e si chiude con una variante della frase "tranne sette, nessuno tornò". Il narratore è in prima persona — presumibilmente Taliesin, che era stato nella spedizione e sopravvissuto — e il suo tono è quello di chi ha visto cose indicibili e può riferirle solo per allusioni. Il testo è deliberatamente oscuro: non spiega chi fossero le fortezze, non descrive il calderone in modo chiaro, non dice cosa successe ai sopravvissuti. Era probabilmente un testo iniziatico — conoscibile solo da chi già sapeva — e la sua oscurità è programmatica, non accidentale.`,
      sub1: "Il testo e la sua oscurità",
      text1: `Otto strofe, ognuna delle quali varia leggermente la stessa formula di apertura e si chiude con la stessa frase: "tranne sette, nessuno tornò da [nome della fortezza]". Il numero sette è sacro nelle tradizioni celtiche — sette anni è il ciclo magico, sette è il numero della magia — e il ritornello funebre dei sette superstiti scandisce il poema come un rintocco di campana. Il narratore non è spettatore esterno: è uno dei sette. Ha visto tutto. Può dire poco.

L'oscurità del Preiddeu è stata oggetto di studio per oltre due secoli. Nel XIX sec. gli studiosi romantici (Robert Southey, Thomas Stephens) vi vedevano reminiscenze druidiche di dottrine segrete. Nel XX sec. gli studiosi accademici (Marged Haycock, Sarah Higley) hanno preferito un'interpretazione più prudente: il testo è oscuro perché è testo bardico professionistico — il bardo che lo componeva si rivolgeva a un pubblico che già conosceva il referente mitologico, e l'allusività era tecnica retorica, non conservazione di segreti religiosi. Entrambe le letture possono essere parzialmente corrette: il testo è oscuro per tecnica bardica, ma potrebbe essere bardica la conservazione di tradizioni mitologiche pre-cristiane che il cristianesimo non avrebbe approvato se espresse chiaramente.`,
      sub2: "Le fortezze dell'Annwn — una geografia mitica",
      text2: `Il poema nomina sette (o otto, secondo le interpretazioni) fortezze dell'Annwn attraverso cui la spedizione passa: Caer Sidi (la Fortezza del Tumulo, o del Giro — la fortezza rotante), Caer Pedryvan (la Quattro-Angoli), Caer Rigor (la Fortezza della Rigidità, forse del gelo o della morte), Caer Wydyr (la Fortezza di Vetro), Caer Golud (la Fortezza della Ricchezza o dell'Ostacolo), Caer Vandwy (la Fortezza delle Cime — o della Perfezione), Caer Ochren (la Fortezza della Pendenza).

Ogni fortezza è menzionata in una strofa e descrive un aspetto diverso dell'Altro Mondo. Caer Sidi è la più affascinante: il testo dice che lì "la malattia e la vecchiaia non conoscono chi" — è la fortezza dell'immortalità, paragonabile al Tír na nÓg irlandese. Caer Wydyr — la Fortezza di Vetro — richiama la tradizione dell'isola-di-vetro (Glastonbury = "Glass Town"?) e il motivo indoeuropeo del palazzo di cristallo come dimora degli immortali. La progressione attraverso le sette fortezze suggerisce un viaggio iniziatico attraverso diverse dimensioni dell'Altro Mondo, ognuna con le proprie caratteristiche e i propri pericoli. La spedizione non è semplicemente un raid militare: è un viaggio cosmologico attraverso la struttura stratificata dell'universo gallese.`,
      sub3: "Il calderone come proto-Graal",
      text3: `Il calderone dell'Annwn è descritto in due versi cruciali: "Il calderone del capo dell'Annwn: qual è la sua configurazione? Bordo di perle e colore scuro. Non cuoce il cibo di un codardo." E ancora: "è riscaldato dal respiro di nove fanciulle." Questi pochi versi contengono le caratteristiche fondamentali del calderone sacro celtico — e, per via di trasformazione, del Graal arturiano europeo.

Il calderone riscaldato dal respiro di nove vergini è oggetto rituale con chiari caratteri iniziatici: le "nove vergini" (che compaiono anche altrove nella tradizione celtica e nelle leggende di Avalon) sono officianti di un rito sacro, il loro respiro è la forza vitale che anima l'oggetto. La caratteristica di "non cuocere il cibo di un codardo" è la discriminazione etica: il calderone distingue il degno dall'indegno. Questa discriminazione etica è esattamente la funzione del Graal nel ciclo arturiano di Chrétien de Troyes e dei suoi successori: solo il cavaliere puro (Percival-Galahad) può vedere il Graal; gli altri lo vedono senza capirne il significato, o non lo vedono affatto.

Roger Sherman Loomis in Wales and the Arthurian Legend (1956) ha proposto la tesi — non universalmente accettata ma culturalmente molto influente — che il Graal derivi direttamente dal calderone celtico attraverso la mediazione della tradizione bretone. Il calderone gallese (Preiddeu Annwn, calderone di Bran il Benedetto, calderone di Cerridwen) diventa il Graal cristiano attraverso la sovrapposizione della teologia dell'Eucaristia: il recipiente che nutre spiritualmente, che discrimina il degno dall'indegno, che si trova in un castello misterioso accessibile solo agli eroi puri.`,
      sub4: "Tre navigli, sette superstiti",
      text4: `"Tre volte la pienezza di Prydwen siamo andati in mare / tranne sette, nessuno tornò da Caer Sidi." — Prydwen è il nome della nave di Artù in alcune tradizioni gallesi (lo stesso nome è citato anche in Culhwch ac Olwen). "Tre volte la pienezza di Prydwen" significa tre carichi di guerrieri — tre spedizioni, o tre navi stracolme. Il risultato è lo stesso: sette superstiti.

Il numero sette come numero dei sopravvissuti al raid eroico catastrofico richiama immediatamente l'episodio parallelo del Secondo Ramo del Mabinogion: Bran il Benedetto guida la guerra d'Irlanda, e sette soli uomini tornano in Gallia portando la testa parlante del re. La coincidenza non è casuale: entrambi i testi usano il numero sette come misura della sopravvivenza minima dopo la catastrofe — il numero sacro che garantisce che la tradizione non si perda del tutto, che qualcuno torni a raccontare la storia. Sette è anche il numero cosmologico celtico del tempo ciclico — sette anni tra un ciclo e l'altro — e la spedizione all'Annwn che lascia solo sette vivi suggerisce un sacrificio cosmico deliberato: per portare via qualcosa dall'Altro Mondo bisogna lasciare quasi tutto.

La voce narrante del Preiddeu — il bardo-sopravvissuto — porta su di sé il peso di questa perdita. "Non merito di lode è il canto della gente vile": solo chi ha visto può parlare, e chi ha visto è tornato con un peso insostenibile. Il tono del poema è elegiaco, misterioso, e — per chi sa leggere tra le allusioni — profondamente commovente.`,
    },
    versions: [
      {
        era: "Composizione (IX-X sec. ca.)",
        name: "Il poema bardico",
        text: `La datazione del Preiddeu Annwn è basata su criteri linguistici e stilistici: la lingua è gallese arcaico con forme che suggeriscono composizione del IX-X sec., anche se il testo nel Libro di Taliesin (XIV sec.) ha certamente subito modifiche durante la trasmissione. Il metro è quello dei cywyddau — versi in rima interna tipici della poesia bardica gallese — con variazioni che potrebbero rispecchiare strati compositivi diversi. Alcuni studiosi (Patrick Sims-Williams) ritengono che parti del testo possano essere più antiche, risalendo a tradizioni orali dell'VIII sec. o prima. Non esiste consenso definitivo sulla datazione.`,
      },
      {
        era: "Libro di Taliesin (XIV sec.)",
        name: "Il manoscritto superstite",
        text: `Il Llyfr Taliesin (National Library of Wales, Peniarth MS 2) è un manoscritto del XIV sec. che raccoglie poesia attribuita al bardo Taliesin. È scritto da una sola mano in gallese medio, su pergamena, con poche rubriche e nessuna illustrazione. Il Preiddeu Annwn occupa il fol. 54v-56r del manoscritto. Il testo presenta alcuni punti oscuri e probabili corruttele del copista — luoghi dove la sintassi gallese non è grammaticalmente corretta, suggerendo una copia meccanica di un originale non completamente capito. Le edizioni critiche moderne (Haycock, Higley) usano critica congetturale per proporre emendamenti a questi luoghi difficili.`,
      },
      {
        era: "Tradizione bardica di Taliesin",
        name: "Il leggendario bardo del VI sec.",
        text: `Taliesin è figura storica reale — il suo nome appare nelle Triadi e negli Annali gallesi come bardo del re Urien di Rheged nel VI sec. — ma nel Medioevo gallese divenne figura mitica e profetica a cui venivano attribuiti poemi di ogni epoca e di ogni tipo. La "tradizione di Taliesin" comprende poemi storici autentici del VI sec., poemi mitologici del IX-XI sec. attribuiti retrospettivamente al bardo, e poemi prophetici del XIII-XIV sec. che usano il nome di Taliesin come autorità. Il Preiddeu Annwn usa la voce narrante di Taliesin come "io fui lì" — il bardo-testimone che conferisce autorità alla narrazione attraverso la sua presenza diretta alla spedizione.`,
      },
      {
        era: "Traduzioni moderne",
        name: "Marged Haycock, Sarah Higley",
        text: `Le due traduzioni accademiche più importanti del Preiddeu Annwn in inglese moderno sono quella di Marged Haycock in Legendary Poems from the Book of Taliesin (CMCS Publications, 2007) e quella di Sarah Higley in Taliesin's Poem of the Spoils of the Otherworld (online, 2003, successivamente rivista). Haycock è la più filologicamente rigorosa, con apparato critico completo e discussione delle varianti. Higley è più accessibile al non-specialista e include un commento mitologico dettagliato. Entrambe riconoscono l'oscurità del testo e non pretendono di risolverla completamente: alcune strofe rimangono di interpretazione incerta e probabilmente lo rimarranno.`,
      },
    ],
    cult: `L'Annwn come luogo fisicamente localizzabile è concetto volutamente vago nella tradizione gallese: è "oltre occidente" (come il Tír na nÓg irlandese), è "sotto le colline" in alcune varianti, è raggiungibile attraverso l'oceano in altre. I siti più spesso associati al raid del Preiddeu sono sul versante atlantico del Galles: Dyfed e Pembrokeshire, dove si apre il mare verso l'Irlanda e l'oceano, sono il territorio mitico naturale per un viaggio verso l'Altro Mondo occidentale. Caer Wydyr (la Fortezza di Vetro) è stata identificata da alcuni studiosi romantici con Glastonbury (Glass = vetro in anglosassone), ma questa identificazione è quasi certamente medievale e posteriore al testo. La connessione tra il Preiddeu e Glastonbury è culturalmente significativa nella costruzione del mito arturiano medievale, ma non dimostra un'origine geografica del poema in quella zona.`,
    influence: [
      {
        era: "Il Graal e il calderone celtico",
        text: `La tesi di Roger Sherman Loomis sulla filiazione Preiddeu Annwn → calderone di Bran → Graal cristiano (Wales and the Arthurian Legend, 1956; Arthurian Tradition and Chrétien de Troyes, 1949) è la più influente nella medievistica arturiana del XX sec. Loomis ha documentato come il calderone gallico — che nutre, discrimina il degno dall'indegno, e si trova in un castello inaccessibile — condivida tutte le funzioni narrative del Graal. La trasformazione sarebbe avvenuta attraverso la mediazione delle tradizioni orali bretoni (celti emigrati in Armorica): i Bretoni avrebbero portato il mito del calderone in Francia, dove Chrétien de Troyes l'avrebbe sovrapposto alla teologia cristiana dell'Eucaristia creando il Graal. La tesi ha i suoi critici (Norris Lacy, Jean Marx) ma è ancora il punto di partenza obbligatorio per qualunque discussione sull'origine del Graal.`,
      },
      {
        era: "Il raid all'Altro Mondo — archetipo eroico",
        text: `Il motivo del raid all'Altro Mondo — un gruppo di eroi che penetra nel regno soprannaturale per rubare un oggetto di potere e ne paga il prezzo con la vita di quasi tutti — è attestato in molte tradizioni. Gli Argonauti greci cercano il Vello d'Oro nel remoto Ponto; Eracle scende agli inferi per portare Cerbero; Gilgamesh penetra nella montagna del sole per trovare le erbe dell'immortalità. Ogni cultura ha la propria versione di questo archetipo: l'umanità che tenta di appropriarsi del potere divino e ne riceve solo una minima porzione al prezzo di un sacrificio enorme. Il Preiddeu Annwn è la versione celtico-gallese di questo archetipo universale — forse la più poeticamente potente, per l'uso del ritornello funebre e per la voce del sopravvissuto che narra.`,
      },
      {
        era: "Il motivo del ritorno ridotto a pochi",
        text: `"Tranne sette, nessuno tornò" è uno dei versi più memorabili della letteratura gallese. Il motivo del "piccolo gruppo di sopravvissuti da una grande impresa catastrofica" è attestato nel Secondo Ramo (sette gallesi tornano dall'Irlanda), nell'Iliade (pochi achei tornano a casa dopo dieci anni di guerra), nell'Odissea (solo Ulisse sopravvive di tutto l'equipaggio), nel Libro di Giobbe (i messaggeri che portano le notizie delle disgrazie). In tutti questi casi il numero minimo di sopravvissenti serve narrativamente a garantire che la storia venga raccontata — qualcuno deve sopravvivere per testimoniare. Il Preiddeu Annwn usa questo motivo in modo formalmente raffinato: il ritornello ripetuto ("tranne sette, nessuno tornò") trasforma la catastrofe in struttura metrica, in musica del lutto.`,
      },
      {
        era: "Neopaganesimo e il calderone di Cerridwen",
        text: `Nel neopaganesimo celtico contemporaneo il Preiddeu Annwn è testo di riferimento per il culto del calderone — uno degli oggetti rituali centrali della Wicca e del druidismo moderno. Il "calderone di Cerridwen" (la cui storia è narrata nella Storia di Taliesin: un calderone dell'ispirazione poetica che deve bollire per un anno e un giorno) è spesso sovrapposto al calderone dell'Annwn del Preiddeu — anche se i due testi parlano di due oggetti diversi con funzioni diverse. In ogni caso, il calderone come simbolo di trasformazione, rinascita e potere femminile è centrale in molte pratiche neopagane, e il Preiddeu Annwn è il testo medievale più citato come autorità per questa tradizione.`,
      },
    ],
    texts: [
      {
        title: "La prima strofa del poema",
        source:
          "Preiddeu Annwn, Libro di Taliesin, fol. 54v, trad. Marged Haycock (2007)",
        text: `"Sono glorioso nel canto, degno di sentire / il canto nella fortezza rotante che gira — / nella fortezza di quattro angoli dove parlavano i Naioni / tre volte la pienezza di Prydwen siamo andati in mare. / Tranne sette, nessuno tornò da Caer Sidi. / Non merito di lode è il canto della gente vile." — Il testo originale gallese inizia: "Golychaf wledic pendeuic gwlat / Ry ledaes y breich tra moruran mawr." La prima strofa stabilisce subito il tono: il narratore in prima persona si dichiara degno di cantare ciò che ha visto; il numero tre (tre navi) e il numero sette (sette sopravvissuti) sono introdotti immediatamente; il ritornello finale (qui nella sua prima occorrenza) annuncia la struttura del poema intero.`,
      },
      {
        title: "Il calderone e le nove vergini",
        source: "Preiddeu Annwn, strofa 2, trad. Marged Haycock (2007)",
        text: `"Mi è noto il calderone del capo dell'Annwn: / qual è il suo ornamento? Bordo di perle e colore scuro. / Non cuoce il cibo di un codardo — non è suo destino. / La spada luminosa di Llwch Lleawc fu sollevata verso di esso / e fu lasciata nella mano di Lleminawc. / E davanti alle porte dell'inferno le lampade bruciavano. / E quando siamo andati con Artù — splendida impresa — / tranne sette, nessuno tornò da Caer Vedwit." — Questa strofa contiene la descrizione più chiara del calderone: bordo di perle, rifiuto del cibo dei codardi, riscaldato dal respiro delle nove vergini (menzionato nella strofa successiva). La spada "luminosa" di Llwch Lleawc — interpretata da Loomis come antecedente della spada di Artù Excalibur — aggiunge un ulteriore oggetto di potere alla lista degli oggetti dell'Annwn.`,
      },
      {
        title: "Il ritornello dei sette superstiti",
        source:
          "Preiddeu Annwn, strofe 1-8, trad. adattata da Marged Haycock (2007)",
        text: `Il ritornello cambia leggermente di strofa in strofa: "Tranne sette, nessuno tornò da Caer Sidi." / "Tranne sette, nessuno tornò da Caer Vedwit." / "Tranne sette, nessuno tornò da Caer Rigor." / "Tranne sette, nessuno tornò da [fortezza non identificata]." / "Tranne sette, nessuno tornò da Caer Golud." / "Tranne sette, nessuno tornò da Caer Vandwy." / "Tranne sette, nessuno tornò da Caer Ochren." / "Tranne sette, nessuno tornò da Caer Wydyr." — La ripetizione del ritornello attraverso le otto strofe costruisce un effetto cumulativo di perdita: ogni fortezza attraversata costa un tributo, e il narratore sopravvissuto conta le perdite una per una, fortezza per fortezza, come un rintocco funebre che scandisce il viaggio.`,
      },
    ],
  },
];
