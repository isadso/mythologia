/* data/celtica-irlandese.js
   Mitologia Celtica — Tradizione Irlandese (Gaelica)
   Fonti primarie: Lebor Gabála Érenn, Cath Maige Tuired, Táin Bó Cúailnge,
                   Acallam na Senórach, i Quattro Cicli (Mitologico, dell'Ulster,
                   Fiann, dei Re).
   Studi: Proinsias Mac Cana, Celtic Mythology (1970); Ronald Hutton, Pagan
          Britain (2013); Daithi Ó hÓgáin, Myth, Legend and Romance (1990);
          John T. Koch, Celtic Culture (2006); Mark Williams, Ireland's
          Immortals (2016).
*/

/* ══════════════════════════════════════════════════════════════════════
   DIVINITÀ IRLANDESI — Tuatha Dé Danann
   ══════════════════════════════════════════════════════════════════════ */

const IRISH_DEITIES = [
  /* ════════════════════════════════════════════════════════════════════
     1. IL DAGDA — padre degli dèi
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "dagda",
    name: "Il Dagda",
    role: "Padre degli Dèi, Signore dei Tuatha Dé Danann",
    tags: ["Abbondanza", "Druidismo", "Magia", "Padre Universale"],
    epithet: "Eochaid Ollathair — il Cavaliere Padre Universale",
    type: "Divinità",
    chips: [
      "Tuatha Dé Danann",
      "Brú na Bóinne",
      "Mitologico",
      "Cath Maige Tuired",
    ],
    heroColor: "linear-gradient(160deg,#0a1a08,#1f3a1a,#060c05)",
    bio: {
      main: `Il Dagda — il cui nome in antico irlandese è interpretato dalla filologia come "il Dio Buono" (da dag-, radice celtica del bene/competenza, e día, "dio"), non nel senso morale cristiano ma in quello tecnico-funzionale di "dio competente in ogni arte, buono a tutto ciò che fa" — è la figura patriarcale centrale del pantheon irlandese arcaico, il padre universale dei Tuatha Dé Danann. La filologia celtica comparata è unanime nell'identificarlo come l'equivalente insulare del dio-sovrano della prima funzione duméziliana: il parallelo di Odino norreno, di Varuna vedico, di Giove romano, con la specificità celtica di una sovranità che è al tempo stesso sacerdotale, magica e produttiva, orientata verso l'abbondanza terrestre più che verso la guerra o il cielo. I suoi epiteti lo confermano: Eochaid Ollathair ("Cavaliere Padre Universale", da oll-, "grande, universale", e athair, "padre"), Ruad Rofhessa ("il Rosso di Grande Sapere", dove ruad indica sia il colore rosso sia la potenza), Aedh Alainn ("il Nobile Fuoco").

La genealogia del Dagda è quella di un principio cosmico primordiale: è figlio di Elatha e di Ethne (o di Etain, secondo varianti), ma la sua importanza mitologica non deriva dalla genealogia quanto dalla funzione. Nel Lebor Gabála Érenn (il "Libro delle Invasioni", compilazione XI-XII sec. da materiali più antichi, trad. R.A.S. Macalister, Irish Texts Society, 1938-1956) è presentato come re dei Tuatha Dé Danann prima dell'arrivo a Tara — predecessore di Nuada — e come padre dell'intera generazione divina successiva: Brigid, Aengus Óg, Midir, Bodb Derg, Cermait, Áine. Questa paternità quasi totale del pantheon lo rende non tanto un dio tra gli altri quanto il principio generativo del sistema divino irlandese.

La sua funzione cosmica si articola attorno ai tre oggetti magici che incarnano la sua sovranità. Il coire ansic — il "Calderone dell'Abbondanza" dal quale nessuno si allontana mai insoddisfatto, che nutre senza mai svuotarsi — è il principio dell'abbondanza inesauribile, l'agricoltura nella sua forma assoluta. La lorg mór — la "Grande Clava", un bastone così immenso che deve essere trascinato su una ruota, la cui estremità ossuta uccide nove uomini con un colpo mentre quella lignea li riporta in vita — è il potere sulla vita e sulla morte, il dominio del ciclo biologico. L'uaithne o uillean — l'arpa che suona da sola e comanda le stagioni, intonando il "motivo del pianto" (goltraí), il "motivo del sorriso" (geantraí) e il "motivo del sonno" (suantraí) — è il controllo del tempo cosmico, l'ordine delle stagioni come musica del dio.

L'iconografia del Dagda è deliberatamente grottesca: è descritto nel Cath Maige Tuired come un uomo grande e pesante, dal mantello troppo corto che lascia scoperto il sedere, che trascina la clava enorme su una ruota di carro. Questa grossolanità corporea — così diversa dall'eleganza di Lugh o di Aengus — è teologicamente significativa: il dio dell'abbondanza terrestre è egli stesso terrestre, fisico, eccessivo, comico nella sua materialità. Il suo colore sacro non è codificato esplicitamente, ma il verde e il marrone della terra fertile sono i suoi colori naturali. Il suo animale non è precisato, ma il maiale — animale dell'abbondanza per eccellenza nella cultura celtica, non sacrificale ma alimentare — è associato alla sua funzione di dio del nutrimento.`,

      sub1: `Il calderone dell'abbondanza e il porridge dei Fomori`,
      text1: `Il mito del calderone del Dagda è documentato in due momenti distinti del Cath Maige Tuired ("La Seconda Battaglia di Mag Tuired", manoscritto del XV sec. che conserva materiale dell'VIII-IX sec., trad. Elizabeth Gray, Irish Texts Society, 1982): la descrizione del coire ansic come tesoro cosmico dei Tuatha Dé, e l'episodio — insieme comico e cosmogonico — in cui i Fomori umiliano il Dagda costringendolo a mangiare una quantità impossibile di porridge. Questi due momenti formano insieme la teologia completa del calderone: l'abbondanza come principio divino assoluto, e l'abbondanza come capacità fisica del dio di assorbire il nutrimento senza limite.

Il coire ansic appartiene ai quattro tesori dei Tuatha Dé Danann — insieme alla lancia di Lugh, alla spada di Nuada e alla Lia Fáil, la pietra della sovranità — portati dall'isola settentrionale di Murias quando i Tuatha Dé giunsero in Irlanda. Il testo del Cath Maige Tuired lo descrive con semplicità: "Dal calderone del Dagda nessuno si allontana mai insoddisfatto." Non ha bisogno di ulteriori spiegazioni: l'abbondanza assoluta è già contenuta in questa frase. Il calderone è il principio della fertilità nella sua forma più concentrata — non la terra che produce in stagione, non la caccia che rende secondo la fortuna, ma la sorgente sempre piena che non conosce carestia e non dipende dalle condizioni esterne.

L'episodio del porridge — narrato nel Cath Maige Tuired come parte di una strategia diplomatica in cui il Dagda si infiltra nell'accampamento dei Fomori fingendosi pacifico e goffo — ha una struttura comica che non sminuisce ma amplifica la dimensione cosmogonico del dio. I Fomori riempiono per lui il grande calderone del re con ottanta galloni di latte, altrettanti di farina e grasso, capre, pecore e porci bolliti insieme, rovesciati in una buca nel terreno delle dimensioni di un pozzo. Poi gli ordinano di mangiare tutto o saranno uccisi per inospitalità — il codice dell'ospitalità celtica (flaithiúlacht) è qui usato come arma per umiliare. Il Dagda prende il mestolo — "abbastanza grande perché vi si coricassero un uomo e una donna" — e mangia tutta la buca. Poi si addormenta. Nella traduzione di Elizabeth Gray (1982): "Il suo ventre era grande come un grande calderone domestico, e i Fomori rise di lui." Ma il riso dei Fomori è inconsapevole: il dio dell'abbondanza ha dimostrato di contenere tanta abbondanza quanta ne produce, e questo è il segno della sua divinità, non della sua goffaggine. Paralleli diretti in Rabelais (Gargantua, 1534) e nella figura nordica di Thor che mangia un bue intero non sono probabilmente casuali: il dio dell'abbondanza è sempre un mangiatore cosmico.`,

      sub2: `La lorg mór e il potere sulla vita e sulla morte`,
      text2: `La lorg mór del Dagda — la "Grande Clava", il bastone bicefalo così immenso che deve essere trascinato su una ruota di carro e lascia un solco nel terreno abbastanza profondo da diventare confine tra province — è tra gli attributi divini più stravaganti e semanticamente ricchi della mitologia irlandese. La sua documentazione principale è nel Cath Maige Tuired (trad. Gray, 1982) e nelle brevi menzioni del Lebor Gabála; la sua struttura duale — uccide con un'estremità, riporta in vita con l'altra — ne fa il simbolo cosmologico del ciclo della vita nel suo aspetto più diretto.

L'estremità ossuta della clava uccide nine uomini con un solo colpo — il numero nove, tipico del folklore celtico come numero di completezza e totalità. L'estremità lignea li riporta in vita con la stessa facilità. Non c'è intermediazione rituale, non c'è condizione o prezzo: il dio dell'abbondanza governa il confine tra vita e morte con la stessa naturalezza con cui il contadino semina e raccoglie. Questa non è la morte come punizione né come scelta morale ma come ciclo — l'aspetto della realtà che il Dagda amministra senza sentimentalismo. Anne Ross (Pagan Celtic Britain, Routledge, 1967) ha analizzato la clava del Dagda come sopravvivenza di un'iconografia pre-celtica del "dio del ciclo": la clava nodosa era attributo di divinità neolitiche della fertilità in tutta l'Europa atlantica, connessa sia al lavoro agricolo (mazzuolo del contadino) sia al potere sulla vita.

Il Cath Maige Tuired narra che nel viaggio verso l'accampamento dei Fomori il Dagda trascina la clava su una ruota, e il solco che essa lascia nel terreno diventa il "Solco del Dagda" (Raon an Dagda), un confine naturale tra province riconosciuto dalla tradizione topografica irlandese. Questa funzione cosmografica — il dio che nella sua camminata ordina il paesaggio — lo connette direttamente alla Cailleach Bheur della tradizione scozzese, che crea le Highlands trasportando pietre, e più in generale all'archetipo del "dio creatore di paesaggio" comune alle tradizioni pre-celtiche atlantiche. La clava del Dagda non è solo arma ma strumento di creazione: il paesaggio irlandese porta i segni fisici del passaggio del dio. Nelle versioni più tarde della tradizione folklorica, il Solco del Dagda è identificato con particolari tratti di terreno irregolare nel Meath e nel Roscommon — la geologia mitologizzata che trasforma ogni prominenza naturale in un atto divino.`,

      sub3: `L'arpa magica e il controllo delle stagioni`,
      text3: `L'arpa del Dagda — chiamata nel Cath Maige Tuired con i nomi Daurdabla ("quercia di due verdi"), Coir Cethar Chuir ("quattro angoli dell'armonia") e Uaithne (nome che condivide con il personaggio mitologico figlio del Dagda che diventa l'arpa stessa) — è il terzo strumento del dio e il più cosmologicamente sofisticato: non governa l'abbondanza né la vita e la morte, ma il tempo nella sua articolazione stagionale, l'ordine musicale del cosmo. La fonte principale è il Cath Maige Tuired (§163-165, trad. Gray, 1982), con un episodio narrativo completo e memorabile.

I Fomori rubano l'arpa all'inizio della battaglia e la portano nella propria sala. Il Dagda — insieme a Lugh e Ogma — va a recuperarla. Quando trova l'arpa appesa al muro della sala dei Fomori, la chiama con una formula rituale precisa: "Vieni, Daurdabla! Vieni, Coircethar-chuir! Vieni, estate! Vieni, inverno! Bocche di arpe e sacchi e pifferi!" L'arpa si stacca dal muro da sola, uccidendo nove uomini nel passaggio, e viene al Dagda. Poi il dio suona i tre nobili motivi: il goltraí ("motivo del pianto"), che fa piangere tutti gli ascoltatori fino alle lacrime; il geantraí ("motivo del sorriso"), che li fa ridere fino a cadere; il suantraí ("motivo del sonno"), che li addormenta. I Fomori dormono, e i tre dèi fuggono.

La struttura dei tre motivi non è un semplice repertorio musicale ma una cosmologia del tempo emotivo: il pianto (autunno, perdita), il sorriso (primavera, rinascita), il sonno (inverno, morte) sono i tre movimenti del ciclo annuale nella sua dimensione affettiva. L'arpa del Dagda non suona musica ma tempo — il tempo cosmico nella sua articolazione di perdita, gioia e quiete. Myles Dillon (Early Irish Literature, University of Chicago Press, 1948) ha analizzato questa triade musicale come una delle formulazioni più arcaiche della cosmologia celtica del ciclo: l'anno non è misurato astronomicamente ma affettivamente, nelle tre disposizioni emotive che il tempo produce negli esseri viventi. Il parallelismo con l'arpa di Orfeo che commuove le pietre e le bestie, e con l'arpa di Davide che caccia il demone da Saul, è notevole: lo strumento musicale come dispositivo di controllo del cosmo è un archetipo indoeuropeo che il Dagda porta nella sua formulazione celtica più coerente.`,

      sub4: `L'incontro con la Morrígan al guado della Unshin`,
      text4: `L'episodio dell'incontro tra il Dagda e la Morrígan alla vigilia della Seconda Battaglia di Mag Tuired è uno dei testi mitologici irlandesi più densi e semanticamente stratificati, e la sua brevità — poche righe nel Cath Maige Tuired — è inversamente proporzionale alla sua importanza teologica. La fonte è il Cath Maige Tuired §84 (manoscritto Harleian 5280, XV sec., trad. Whitley Stokes, Revue Celtique XII, 1891; trad. Elizabeth Gray, Irish Texts Society, 1982); il passo è tra i più commentati della letteratura celtica medievale.

Il Dagda si reca a un appuntamento prestabilito con "una donna" — che si rivela essere la Morrígan — al guado della Unshin (Unius, un fiume del Connacht). La trova nell'atto del lavaggio rituale: "Ella era sull'Unshin a lavare, con una gamba al guado di Allod Echae al di là dell'acqua e l'altra al di qua, i suoi nove capelli sciolti." La posizione della Morrígan — a cavalcioni sul fiume, con i capelli sciolti e il lavaggio di indumenti — è la posizione della bean nighe (la lavandaia della morte), ma qui non presagisce la morte altrui bensì si prepara alla battaglia come forza cosmica. Il Dagda e la Morrígan si uniscono sul guado: l'atto sessuale è il rito di alleanza tra il padre dell'abbondanza e la dea della guerra e della sovranità. Dopo l'unione la Morrígan promette aiuto nella battaglia — annienterà Indech mac Dé Domnann, re dei Fomori, e porterà al Dagda "il suo sangue e le sue reni come trofeo".

La teologia di questo incontro è quella del sacro matrimonio (hieros gamos) che garantisce la vittoria cosmica: solo quando il principio paterno dell'abbondanza si unisce al principio guerriero femminile della sovranità, il cosmo può rigenerarsi sconfiggendo il caos dei Fomori. Strutturalmente analogo alle unioni sacre del dio del grano con la dea della terra nelle religioni del Vicino Oriente antico (Dumuzi e Inanna nella tradizione sumerica, Osiride e Iside in quella egiziana), l'incontro al guado della Unshin è la versione irlandese del principio che la fertilità e la guerra — l'abbondanza e il potere — devono essere alleate per garantire l'ordine cosmico. Kim McCone (Pagan Past and Christian Present in Early Irish Literature, Maynooth Monographs, 1990) ha analizzato come i monaci che trascrissero il Cath Maige Tuired abbiano lasciato questo episodio quasi intatto rispetto alla versione pagana originale, forse perché la sua densità simbolica lo rendeva teologicamente necessario alla coerenza narrativa dell'intero testo.`,

      sub5: `Il Brú na Bóinne e il ritiro sotterraneo dei Tuatha Dé`,
      text5: `Dopo la sconfitta dei Tuatha Dé Danann per mano degli invasori Milesi — l'ultimo popolo mitico ad arrivare in Irlanda, antenati degli irlandesi storici — il Dagda e Manannán mac Lir dividono i sídhe (i tumuli fatati) tra gli dèi sconfitti, che si ritirano sotto la superficie dell'isola per continuare la propria esistenza invisibile ai mortali. Il Dagda riceve come propria dimora il Brú na Bóinne — il grande tumulo neolitico di Newgrange, nella valle del Boyne nel Meath — che la tradizione medievale identifica come la sua residenza sotterranea e il centro del suo potere latente. La fonte principale è il Metrical Dindshenchas (raccolta di poesia topografica, XI-XII sec., trad. Edward Gwynn, Dublin Institute for Advanced Studies, 1903-1935) e il Tochmarc Étaíne (trad. Osborn Bergin e R.I. Best, Ériu XII, 1938).

Il Brú na Bóinne è storicamente uno dei monumenti megalitici più imponenti d'Europa: il tumulo di Newgrange, datato al 3200 a.C. circa — anteriore di cinque secoli a Stonehenge e di sei alle piramidi di Giza — presenta un corridoio di accesso orientato in modo tale che il sole del solstizio d'inverno penetra fino alla camera centrale per circa diciassette minuti all'alba del 21 dicembre. Questa precisione astronomica, elaborata da una cultura pre-indoeuropea tremila anni prima dell'arrivo dei Celti in Irlanda, fu reinterpretata dalla tradizione gaelica medievale come la dimora del dio dell'abbondanza: Newgrange diventa la casa del Dagda perché il suo orientamento solare — l'alba del solstizio che illumina la camera — è la manifestazione fisica del ciclo del sole che il dio governa attraverso la sua arpa.

Il testo del Tochmarc Étaíne narra che il Dagda fu ingannato dall'amore del figlio Aengus Óg: questi gli chiese il Brú per "un giorno e una notte" e il Dagda, preso alla lettera il contratto, non poté più riprenderlo perché "ogni tempo è fatto di giorni e notti". Il mito del furto del Brú da parte del figlio — che lo occupa permanentemente attraverso un cavillo giuridico — è uno dei tanti paradossi del folklore celtico in cui il personaggio divino più potente viene ingannato da un familiare più scaltro: la stessa struttura narrativa del furto della coperta da Thor da parte di Loki, o del furto del fuoco da Prometeo a Zeus. Michael Dames (Mythic Ireland, Thames & Hudson, 1992) ha analizzato come la tradizione del Brú na Bóinne come dimora del Dagda abbia funzionato per secoli come codice di sacralità del territorio: il paesaggio del Boyne era "il corpo del padre degli dèi", e ogni tumulo, ogni meandro del fiume, ogni collina era un elemento di questo corpo cosmico.`,
    },
    versions: [
      {
        era: "Ciclo Mitologico (VIII-XII sec.)",
        name: "Il sovrano dei Tuatha Dé",
        text: "Nel Cath Maige Tuired il Dagda è il re dei Tuatha Dé Danann prima della seconda battaglia contro i Fomori. Grottesca e sublime insieme è la sua figura: grande, grassoccio, dal mantello troppo corto che gli lascia scoperto il sedere, costretto a mangiare una quantità spropositata di porridge imposta dai Fomori come scherno. Eppure è proprio lui a sedurre la Morrígan sul guado della Unshin, vigilia di Samhain, ottenendo così la vittoria sui nemici.",
      },
      {
        era: "Tradizione gaelica tarda",
        name: "Il padre di Brigid e Aengus",
        text: "Nelle genealogie divine il Dagda è padre di Brigid (la triplice dea del fuoco, poesia e medicina), di Aengus Óg (dio dell'amore), di Midir e di Bodb Derg che gli succederà come re dei Tuatha Dé. La sua paternità è così estesa che sembra generare l'intero pantheon.",
      },
      {
        era: "Tradizione folklorica",
        name: "Il dio dentro la collina",
        text: "Dopo la sconfitta dei Tuatha Dé per mano dei Milesi, il Dagda si ritirerebbe nel Brú na Bóinne — il grande tumulo neolitico di Newgrange — che la tradizione folklorica gli attribuisce come dimora. Di qui il folklore popolare irlandese continuò per secoli a considerarlo vivo sotto la collina, tra le 'fate' (síde).",
      },
    ],
    cult: `A differenza della tradizione gallica continentale documentata dalle iscrizioni romane, non abbiamo prove archeologiche dirette di un culto del Dagda con templi e sacerdozi — la tradizione irlandese è stata messa per iscritto solo in epoca cristiana (VIII-XII sec.) da monaci che riadattavano il materiale precristiano.

Il luogo sacro associato al Dagda è il Brú na Bóinne (la "dimora del Boyne"), ossia il complesso megalitico di Newgrange — un tumulo neolitico risalente al 3200 a.C. circa, dunque anteriore a Stonehenge e alle piramidi egizie. Nella tradizione medievale questo sito, ben visibile nel paesaggio, viene riletto come residenza degli dèi ormai ritiratisi dal mondo. Il solstizio d'inverno, quando il sole illumina la camera centrale del tumulo attraverso un corridoio orientato, è considerato momento sacro del Dagda.

Il festival pagano collegato al Dagda è Samhain — l'attuale Halloween — quando avviene il suo incontro mitico con la Morrígan e si aprono le porte tra il mondo dei vivi e quello dei Sídhe.`,
    influence: [
      {
        era: "Confronto indoeuropeo",
        text: "Georges Dumézil e la sua scuola hanno identificato nel Dagda l'esempio celtico del 'dio sovrano della prima funzione' indoeuropea — parallelo a Odino norreno, a Varuna vedico, a Giove-Dius Fidius romano. È il padre-druido-guerriero che condensa in sé la sovranità sacrale e magica.",
      },
      {
        era: "Folklore irlandese moderno",
        text: "Il Dagda sopravvive trasfigurato nel folklore delle 'fate' (good people, aos sí). Le colline 'fatate' che punteggiano il paesaggio irlandese sono la memoria popolare della sua corte sotterranea. Il 'Cauldron of Plenty' diventa nella tradizione celtica più tarda il Graal, attraverso mediazioni brittoniche.",
      },
      {
        era: "Letteratura e arte",
        text: "W. B. Yeats lo evoca ne 'The Wanderings of Oisin' (1889) e nei 'Celtic Twilight' saggi (1893). Flann O'Brien lo ridicolizza satiricamente in 'At Swim-Two-Birds' (1939). Nella cultura pop contemporanea il Dagda riappare nel fumetto Marvel, nei videogame ('Smite', 'Final Fantasy') e nella fantasy letteraria.",
      },
    ],
    texts: [
      {
        title: "Cath Maige Tuired — la seconda battaglia di Mag Tuired",
        source:
          "Manoscritto Harleian 5280, XV sec., redazione di testi VIII-IX sec.",
        text: "Allora il Dagda andò all'accampamento dei Fomori e chiese loro una tregua. Gliela accordarono, ma gli prepararono del porridge per schernirlo, perché era grande la sua avidità. Riempirono per lui il calderone del re: ottanta galloni di latte novo, altrettanti di farina e grasso; misero dentro capre, pecore e porci, fecero bollire tutto insieme e lo rovesciarono in una buca nel terreno. 'Se non lo mangerai tutto', gli dissero, 'ti uccideremo, affinché tu non possa accusarci di inospitalità.' Allora il Dagda prese il mestolo, grande abbastanza perché vi si coricassero un uomo e una donna, e si mise a mangiare.",
      },
      {
        title: "L'arpa del Dagda",
        source: "Cath Maige Tuired, §162, trad. dal medio irlandese",
        text: "Ed essi riconobbero la loro arpa appesa al muro. Era l'arpa in cui il Dagda aveva legato le melodie. Essa non suonava fino a che egli non la chiamasse, dicendo: 'Vieni, Daurdabla! Vieni, Coircethar-chuir! Vieni, estate! Vieni, inverno! Bocche di arpe e sacchi e pifferi!' Perché quell'arpa aveva due nomi. Ed essa si staccò dal muro, uccidendo nove uomini, e venne al Dagda. Ed egli suonò per loro i tre nobili motivi che i suonatori d'arpa riconoscono: il motivo del pianto, il motivo del sorriso, il motivo del sonno.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. LA MORRÍGAN — triplice dea della guerra e del destino
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "morrigan",
    name: "La Morrígan",
    role: "Triplice Dea della Guerra, del Destino e della Sovranità",
    tags: ["Guerra", "Profezia", "Corvo", "Sovranità"],
    epithet: "Mór-Ríoghain — la Grande Regina, la Fantasma-Regina",
    type: "Divinità",
    chips: [
      "Tuatha Dé Danann",
      "Triplice Dea",
      "Ciclo dell'Ulster",
      "Shapeshifter",
    ],
    heroColor: "linear-gradient(160deg,#0a0808,#2a0c0c,#060404)",
    bio: {
      main: `La Morrígan — il cui nome è oggetto di dibattito filologico tra i celticisti: la lettura più diffusa lo interpreta come mór-ríoghain, "Grande Regina" (da mór, "grande, vasto", e ríoghain, "regina, signora nobile"), ma una proposta alternativa di Sharon Paice MacLeod e altri filologi lo deriva da mor- radice proto-indoeuropea *mer-, "morire, sparire", connessa al latino mors, al germanico *marzaz, all'inglese nightmare ("incubo", letteralmente "la cavalcatrice notturna della morte"), con il significato complessivo di "Regina-Fantasma" o "Regina del Terrore": non la grande sovrana ma la signora della morte-come-terrore — è una delle figure divine più complesse, più studiate e più difficilmente riducibili a una definizione unitaria dell'intera mitologia irlandese. La sua complessità è strutturale: la Morrígan non è una divinità singola ma una triplice entità, o una confederazione di tre sorelle che agiscono come un'unica forza cosmica.

Le tre manifestazioni della Morrígan sono documentate con qualche variazione nelle fonti. La triade più ricorrente — nel Cath Maige Tuired (Manoscritto Harleian 5280, XV sec., trad. Elizabeth Gray, Irish Texts Society, 1982) e nel Lebor Gabála Érenn — è Badb, Macha e Anand (o Nemain). Badb ("la corvacchia della battaglia", da badb, "corvacchia, cornacchia") è la manifestazione dell'uccello rapace che sorvola i campi di battaglia decretando i morti; Macha ("pianura, campo", radice che connette la dea al territorio) è la dea della sovranità territoriale, della maternità e del sacrificio femminile; Nemain ("panico, frenesia", da nem-, radice del veleno e del terrore) è il grido della guerra che getta le armate nel panico. Alcune fonti sostituiscono Anand a Nemain come terza manifestazione, creando sovrapposizioni con la dea Ana/Danu; questa fluidità non è imprecisione ma riflessione della natura triplice stessa: le tre facce si trasformano l'una nell'altra.

La genealogia della Morrígan la colloca tra i Tuatha Dé Danann come figlia di Ernmas (o di Delbaeth, secondo varianti) — una stirpe femminile arcaica da cui derivano anche Ériu, Banba e Fódla, le tre dee eponime dell'Irlanda. Questa genealogia colloca la Morrígan nella tradizione della "dea matronale" celtica: non una divinità isolata ma parte di un sistema di dee triadi che governano insieme il territorio. La sua sposa non è codificata ma il Cath Maige Tuired la presenta come amante cosmica del Dagda — unione che ha la struttura del sacro matrimonio tra il principio guerriero femminile e il principio dell'abbondanza maschile.

La funzione cosmica della Morrígan è quella del destino nella guerra: non combatte fisicamente (a differenza di Atena, che scende in campo, o di Valchirie che guidano gli eserciti) ma determina dall'alto l'esito dei combattimenti. Sorvola i campi di battaglia in forma di corvo o di cornacchia, grida con voce che getta il panico, sceglie chi cadrà e chi sopravvivrà. È anche dea della sovranità territoriale: la sua unione con un eroe o un re è l'investitura del potere. I suoi attributi iconografici sono il corvo nero, il mantello di piume, il guado (luogo liminale dove appare per lavare), la forma triplice. I suoi colori sono il nero e il rosso sangue; il suo numero è il tre; il suo animale principale è il corvo (Corvus corax), ma anche la cornacchia, l'anguilla, la lupa grigia e la giovenca rossa nelle sue metamorfosi narrative.`,

      sub1: `La triplice natura: Badb, Macha e Nemain`,
      text1: `La natura triplice della Morrígan — la sua articolazione in tre figure distinte ma inseparabili — è il tratto teologico più originale e più profondo del suo sistema divino, e la sua comprensione richiede di abbandonare il concetto moderno di identità individuale unitaria per accedere a una concezione celtica del divino come forza distribuita su più piani di manifestazione simultanei. La fonte principale per l'analisi della triplice Morrígan è il Cath Maige Tuired (trad. Gray, 1982), con integrazioni nel Lebor Gabála Érenn (trad. Macalister, 1938-1956) e nelle glosse medievali del Sanas Cormaic (ca. 900 d.C., trad. Kuno Meyer, 1912).

Badb Catha — "la corvacchia della battaglia" — è la manifestazione più arcaica e più direttamente documentata. Il Cath Maige Tuired la descrive come colei che pronuncia la profezia della vittoria dopo la battaglia: la lunghissima sequenza poetica finale del testo ("Pace fino al cielo, cielo fino alla terra...") è attribuita a Badb nella forma di profezia cosmica. Nelle tradizioni folkoriche successive, Badb si fonde con la bean nighe — la lavandaia della morte — come donna che appare ai guadi lavando gli indumenti insanguinati dei destinati a morire: chi vede la propria camicia lavata dalla bean nighe è condannato. Gli stormi di corvi che si posano sui cadaveri dopo la battaglia sono percepiti come manifestazioni fisiche di Badb — e questa percezione era ancora viva nelle cronache irlandesi del XVII secolo, quando fonti gaelico-irlandesi descrivono Badb posarsi sulle fortezze cadute nelle campagne cromwelliane.

Macha è la figura triplicemente attestata con maggiore autonomia narrativa: le tradizioni irlandesi conoscono almeno tre diverse Macha — la prima moglie di Nemed nel Lebor Gabála, la seconda una guerriera che governa da sola l'Irlanda nel Cath Maige Tuired, la terza la moglie di Cruinniuc che maledice gli Ulstermen costretta a correre contro i cavalli del re mentre è incinta. Quest'ultima Macha — documentata nel Noínden Ulad ("La Debolezza degli Ulstermen", la maledizione che impedisce agli eroi dell'Ulster di combattere quando più ne hanno bisogno) — è la figura più psicologicamente elaborata: la donna divinizzata che punisce la tracotanza maschile con una maledizione che durerà nove generazioni. Mark Williams (Ireland's Immortals, Princeton University Press, 2016) ha analizzato come la triplice Macha — tre donne diverse con lo stesso nome — esprima la concezione celtica della sovranità come principio che si reinveste in figure diverse attraverso il tempo, non come identità fissa.

Nemain ("panico") è la meno documentata individualmente ma la più fisicamente percepibile nella tradizione: il grido di Nemain in battaglia causa la morte di cento guerrieri per terrore puro — non per ferite ma per il suono stesso della voce divina. Questo motivo — il grido divino che uccide — è attestato in molte tradizioni indoeuropee (la gorgo greca che pietrifica, il grido di Kali che disperde i demoni, le valchirie che "scelgono i caduti" con il loro passaggio) e rivela la struttura archetipica della dea-guerra come forza acustica e visiva che sopraffà i sistemi nervosi degli esseri umani.`,

      sub2: `L'incontro con Cú Chulainn: seduzione, rifiuto e maledizione`,
      text2: `L'episodio dell'incontro tra la Morrígan e Cú Chulainn — documentato nel Táin Bó Cúailnge ("Il Razzia dei Bovini di Cooley", la grande epopea dell'Ulster, trad. Thomas Kinsella, Oxford University Press, 1969; trad. Ciaran Carson, Penguin, 2007) — è uno dei passi più narrativamente elaborati e teologicamente ricchi della letteratura gaelica medievale, e la struttura del rifiuto eroico che genera la maledizione divina lo colloca in una classe di miti che comprende il rifiuto di Gilgamesh a Ishtar, il rifiuto di Adone ad Afrodite, il rifiuto di Ippolito ad Afrodite nella tradizione greca: l'eroe che respinge la dea paga il prezzo della propria integrità con la persecuzione soprannaturale.

La Morrígan appare a Cú Chulainn mentre questi difende da solo i confini dell'Ulster contro le armate di Medb di Connacht, in combattimento singolo quotidiano al guado dell'Ardee. Si presenta in forma di bella giovane donna — traduzione dal medio irlandese secondo Kinsella: "una giovane bella nobile, con capelli intrecciati in trecce gialle, un mantello verde fissato con un fermaglio d'argento, e un viso come latte di neve" — e gli offre il proprio amore e il proprio aiuto. Cú Chulainn la respinge con la brutalità dell'eroe che non può permettersi distrazioni nella battaglia solitaria: "Non è per le natiche di una donna che sono venuto qui." La dea rivela allora la propria identità e la propria intenzione: lo attaccherà nel corso dei combattimenti futuri in tre forme animali — anguilla avvolta attorno alle sue gambe nel guado, lupa grigia che guida una mandria contro di lui, giovenca rossa che guida un'altra mandria.

Le tre trasformazioni si realizzano puntualmente nei combattimenti successivi, e in ognuna Cú Chulainn ferisce l'animale — rompe la costola dell'anguilla, cava un occhio alla lupa, rompe una gamba alla giovenca. Ma il testo rivela la struttura più profonda del mito: la Morrígan non può essere definitivamente sconfitta, e le sue ferite non guariscono finché non le guarisce Cú Chulainn stesso — inconsapevolmente, attraverso la formula tradizionale dell'ospitalità. Alla fine della campagna, Cú Chulainn incontra una vecchia cieca che munge una mucca; la benedice tre volte in cambio di tre sorsi di latte, e la vecchia guarisce miracolosamente da anguilla, lupa e giovenca ferite. Solo allora Cú Chulainn comprende di aver guarito la Morrígan — e che ora il loro equilibrio è ristabilito, ma lui ha perso ogni protezione divina. Marie-Louise Sjoestedt (Gods and Heroes of the Celts, Methuen, 1949) ha analizzato questo episodio come la formulazione celtica più precisa del rapporto tra eroe e dea sovrana: l'eroe che rifiuta la dea non conquista la propria indipendenza ma si priva della protezione cosmica, e questa privazione lo lascia esposto al destino.`,

      sub3: `Badb sul campo di battaglia: la profezia finale del Cath Maige Tuired`,
      text3: `La sequenza finale del Cath Maige Tuired — la profezia cosmica pronunciata da Badb dopo la vittoria dei Tuatha Dé sui Fomori — è uno dei testi poetici più antichi e più citati della letteratura irlandese arcaica, e la sua struttura di parallelismi contraddittori ("pace fino al cielo / il cielo fino alla terra...") è considerata dai filologi una delle formulazioni più pure della visione cosmica celtica. La fonte è il Cath Maige Tuired §166-167 (trad. Gray, 1982; trad. parziale Stokes, 1891); il testo originale medio-irlandese è tra i più difficili del corpus per la sua arcaicità metrica e lessicale.

Dopo che Lugh ha ucciso Balor e i Fomori sono stati respinti nell'oceano, il Cath Maige Tuired si chiude non con una celebrazione eroica ma con la voce della Morrígan-Badb che annuncia il significato cosmico della vittoria e — in un capovolgimento profetico — annuncia anche la fine futura di questa stessa era di pace. Il testo oscilla tra la celebrazione del presente e la profezia dell'inverno cosmico che verrà: "Pace fino al cielo, / il cielo fino alla terra, / la terra sotto il cielo, / forza per ogni uomo... / Pace e abbondanza durante l'estate, / boschi carichi di frutti, / mare pieno di pesci, / terra piena di grano. / Ma poi arriverà: / estate senza fiori, / vacche senza latte, / donne senza pudore, / uomini senza vigore... / alberi senza frutti, / mari senza pesce."

Questa struttura — la dea della guerra che annuncia la pace e allo stesso tempo profetizza la sua fine — è teologicamente precisa: la Morrígan non è né una dea positiva né una negativa, ma la forza che vede il ciclo completo, l'arco intero dalla vittoria alla caduta. Elizabeth Gray (1982) ha analizzato la profezia finale come il testo in cui la Morrígan rivela la propria natura più profonda: non signora della guerra nel senso della battaglia ma signora del destino nel senso del tempo lungo. John Carey (Ireland and the Grail, Celtic Studies Publications, 2007) ha tracciato la connessione tra questa profezia di rovesciamento cosmico e le tradizioni escatologiche irlandesi cristiane: il monaco che trascrisse il Cath Maige Tuired riconobbe nella voce di Badb qualcosa di analogo alle profezie bibliche di rovina, e la lasciò quasi intatta per questa affinità strutturale. Il verso finale della profezia di Badb — nella traduzione di Kinsella — è stato citato da Seamus Heaney come uno dei testi che più profondamente esprimono "la duplicità fondamentale della tradizione poetica irlandese: ogni canto di vittoria porta in sé il seme del lamento".`,

      sub4: `La Morrígan e la morte di Cú Chulainn`,
      text4: `La morte di Cú Chulainn — narrata nell'Aided Con Culainn ("La Morte Violenta di Cú Chulainn", testo del ciclo dell'Ulster, ms. XV sec., trad. parziale in Kinsella 1969 e in A.H. Leahy, Heroic Romances of Ireland, 1905) — è il mito in cui la Morrígan chiude il ciclo del suo rapporto con l'eroe, passando dal ruolo di forza ostile (nella seduzione rifiutata) a quello di testimone e annunciatrice della morte, in un arco narrativo che completa la teologia del destino che la dea incarna. Il mito è anche il momento in cui la cornacchia — l'uccello di Badb — diventa per eccellenza il simbolo della morte eroica nella tradizione gaelica.

Cú Chulainn si avvia alla sua ultima battaglia sapendo già che morirà: una serie di geasa (tabù sacri) è stata deliberatamente violata dai suoi nemici per privarlo della propria forza. Nel percorso verso il campo di battaglia incontra le Tre Lavandaie (le tre Morrígan) che lavano la sua armatura insanguinata al guado — il segno inequivocabile della morte imminente. Una giovane donna — un'altra manifestazione della Morrígan — gli offre carne di cane; lui non può mangiarne per un geas, ma non può rifiutarla per un altro geas sull'ospitalità. Ogni passo è una trappola, ogni scelta è sbagliata: il meccanismo tragico del destino è in moto e nessuna azione lo può fermare.

Dopo le ultime battaglie, Cú Chulainn gravemente ferito si lega a una pietra eretta per non cadere da morto davanti ai nemici — la morte in piedi come ultima dignità dell'eroe. La cornacchia — Badb nella sua forma aviaria — si posa sulla sua spalla quando l'anima ha abbandonato il corpo. È il segno: solo la Morrígan tocca l'eroe nel momento della morte, e il suo gesto non è di crudeltà ma di riconoscimento. Dopo il rifiuto alla vigilia della battaglia, dopo le tre trasformazioni animali, dopo la guarigione inconsapevole, la Morrígan accompagna Cú Chulainn nel momento finale come aveva cercato di accompagnarlo nel momento della gloria. Proinsias Mac Cana (Celtic Mythology, Newnes Books, 1983) ha analizzato questo cerchio narrativo come "la più coerente formulazione celtica del rapporto tra destino e libertà": Cú Chulainn ha scelto di rifiutare la dea, e questa scelta ha determinato il modo in cui il destino si è attuato, ma non il fatto che il destino si attuasse.`,

      sub5: `La bean nighe e la sopravvivenza folklorica`,
      text5: `La sopravvivenza della Morrígan nel folklore gaelico post-cristiano — attraverso la figura della bean nighe ("donna del lavaggio", "lavandaia"), della bean sídhe (banshee, "donna del sídhe"), e della cointeach irlandese — è uno dei casi più documentati e più studiati di continuità tra mitologia pagana e folklore popolare nelle isole britanniche. La trasmissione non è interrutta ma trasformata: il sistema teologico si dissolve, i miti narrativi scompaiono dalla memoria popolare, ma la struttura archetipica — la donna soprannaturale al guado che preannuncia la morte — sopravvive come credenza pratica per molti secoli dopo la cristianizzazione. Le fonti principali per questa continuità sono John Gregorson Campbell (Superstitions of the Highlands and Islands of Scotland, MacLehose, 1900), Lady Jane Francesca Wilde (Ancient Legends, Mystic Charms and Superstitions of Ireland, Ward & Downey, 1887), e i materiali raccolti dalla Irish Folklore Commission (ora UCD Folklore Collection) tra il 1935 e il 1970.

La bean nighe delle Highlands scozzesi è descritta con una precisione etnografica notevole: è una piccola donna vestita di verde o di grigio, con i capelli bagnati, che lava abiti insanguinati (o armature, o sudari) al guado di un fiume. Chi riconosce i propri indumenti tra quelli che lei lava sa che morirà presto. Ma il folklore conserva anche una struttura di interazione: se si riesce ad avvicinarsi alla bean nighe da dietro e ad afferrarla prima che lei veda il visitatore, è possibile strapparle tre desideri in cambio di informazioni sul morente. Questa struttura — il soprannaturale catturato che concede doni — è la versione folklorica degradata ma riconoscibile del mito della Morrígan che offre potere in cambio di alleanza: la dea che elargisce favori a chi non si lascia intimidire dalla sua presenza.

La banshee irlandese (bean sídhe, "donna del tumulo/del sídhe") è la variante più diffusa culturalmente: il grido lacerante che annuncia la morte di un membro di una famiglia irlandese nobile è documentato in attestazioni scritte dal XII secolo (l'Annals of the Four Masters menzionano pianti soprannaturali) e nelle raccolte folkloriche fino al XX secolo. Patricia Lysaght (The Banshee: The Irish Death Messenger, Glendale Press, 1986) — lo studio accademico più completo sulla banshee — ha documentato come il fenomeno fosse percepito non come superstizione ma come credenza pratica in molte famiglie rurali irlandesi fino agli anni Cinquanta del Novecento: anziani che riferivano di aver sentito il grido prima della morte di un familiare, descrivendolo non con terrore ma con una sorta di solennità. La continuità tra la Morrígan che grida sul campo di battaglia e la banshee che grida davanti alla porta di una casa irlandese è la misura della profondità con cui la figura archetipica della "dea del destino che annuncia la morte" è radicata nella cultura gaelica.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired (Ciclo Mitologico)",
        name: "L'amante del Dagda sul guado",
        text: "Alla vigilia della seconda battaglia di Mag Tuired, il Dagda incontra la Morrígan che sta lavando al guado della Unshin. Il testo dice: 'Ella era sul guado con una gamba sull'altra riva e l'altra su questa, i suoi nove capelli sciolti.' Si uniscono, e la Morrígan promette di annientare il re dei Fomori e di portare al Dagda 'il suo sangue e le sue reni'. È la dea che garantisce la vittoria.",
      },
      {
        era: "Ciclo dell'Ulster — Táin Bó Cúailnge",
        name: "La seduttrice respinta di Cú Chulainn",
        text: "Appare a Cú Chulainn sulle sponde del ford offrendogli il suo amore. L'eroe la respinge perché impegnato nella battaglia solitaria contro le armate di Medb. Ella allora lo maledice: lo attaccherà in forma di anguilla, di lupa grigia, di giovenca rossa, ferendolo tre volte; solo ritirando la maledizione attraverso un'astuzia finale di Cú Chulainn otterrà la guarigione.",
      },
      {
        era: "Lavanderia del guado (motivo folklorico)",
        name: "La Bean nighe — la Lavandaia della Morte",
        text: "Nella tradizione folklorica irlandese e scozzese la Morrígan evolve nella figura della bean nighe (scozz.) o cointeach (irl.): una donna vista lavare vestiti insanguinati al guado, presagio infallibile della morte imminente di chi riconosce gli indumenti come propri. Il motivo è attestato fino al XX secolo nelle Highlands.",
      },
    ],
    cult: `Il culto della Morrígan è legato ai luoghi di battaglia e ai guadi — passaggi liminali tra due mondi, dove il confine tra vita e morte si fa sottile. I 'da chích na Morrígna' ("i due seni della Morrígan") sono due colline gemelle nella contea di Meath, riconosciute come sito sacro della dea.

L'uccello-totem è il corvo (cfr. Badb Catha, "corvacchia della battaglia"), ma anche la cornacchia e il nibbio. Nelle battaglie reali dell'Irlanda medievale gli stormi di corvi che si posavano sui cadaveri erano interpretati come manifestazione fisica della dea; ancora nel XVII secolo, quando Oliver Cromwell invase l'Irlanda, fonti irlandesi descrivono l'apparizione di Badb sui campi di battaglia.

A differenza di Brigid, sincretizzata nella santa cristiana, la Morrígan non è stata assorbita: è rimasta figura demoniaca, condannata dai monaci, ma proprio per questo meglio preservata nei suoi tratti arcaici.`,
    influence: [
      {
        era: "Le Valchirie e le Norne",
        text: "Il motivo della donna-destino che decide in volo chi morirà in battaglia è un archetipo indoeuropeo che unisce la Morrígan, le Valchirie norrene, le Keres greche e le Dísir germaniche. Anne Ross (Pagan Celtic Britain, 1967) e più recentemente Mark Williams hanno documentato estesamente questa matrice comune.",
      },
      {
        era: "Il corvo della tradizione arturiana",
        text: "Nella tradizione gallese, la Morrígan-trasformata-in-corvo riappare nella figura della dama Morgause/Morgana le Fay: anche qui la sorella-maga che presiede al destino di un eroe-re. L'etimologia 'Morgan' da 'Mórrígan' è proposta da diversi filologi, sebbene contestata.",
      },
      {
        era: "Il movimento wiccan e la cultura pop",
        text: "La Morrígan è una delle divinità più popolari nel neopaganesimo contemporaneo (dagli anni '70), venerata come dea-strega del potere femminile. Nel fumetto, nei videogame ('Dragon Age', 'Hellblade'), nelle serie televisive ('American Gods' di Neil Gaiman) riappare costantemente come archetipo della regina-corvo.",
      },
    ],
    texts: [
      {
        title: "L'incontro con il Dagda",
        source: "Cath Maige Tuired, §84, trad. Whitley Stokes (1891)",
        text: "Il Dagda aveva un incontro fissato con una donna in Gleann Etin a nord. La donna era sulla Unshin di Connacht a lavare, con una gamba al Guado di Allod Echae a sud dell'acqua, e l'altra all'Asse di Cois, a nord dell'acqua, e nove capelli sciolti sulla sua testa. Il Dagda le parlò ed essi si unirono. 'Il Letto del Marito' è il nome di quel luogo da allora.",
      },
      {
        title: "La maledizione di Cú Chulainn",
        source: "Táin Bó Cúailnge, Recensione I, Book of Leinster, XII sec.",
        text: "'Se non mi vuoi', disse la giovane, 'ti combatterò mentre tu combatterai contro gli uomini d'Irlanda. Diventerò un'anguilla e mi avvolgerò attorno ai tuoi piedi nel guado, così che tu cada.' 'Mi è più facile crederti questo', disse Cú Chulainn, 'che immaginarti figlia di re. Ti afferrerò tra le dita dei miei piedi finché ti si spezzi una costola, e non guarirai mai se io non ti benedico.'",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. LUGH LÁMHFHADA
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "lugh",
    name: "Lugh Lámhfhada",
    role: "Dio Solare, Maestro di Ogni Arte",
    tags: ["Sole", "Arti", "Guerra", "Luce"],
    epithet:
      "Samildánach — l'Esperto in Ogni Arte; Lámhfhada — dalle Lunghe Braccia",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Solare", "Cath Maige Tuired", "Lughnasadh"],
    heroColor: "linear-gradient(160deg,#2a1a00,#6a4a10,#2a1800)",
    bio: {
      main: `Lugh — il cui nome è oggetto di dibattito filologico tra i celticisti: la proposta etimologica più consolidata lo ricollega alla radice proto-celtica *leug-, connessa all'indoeuropeo *leuk-, "luce, splendore" (affine al latino lux, al greco leukós, "bianco", al sanscrito rócate, "splende"), suggerendo un'origine come divinità luminosa o solare; una proposta alternativa, avanzata da Bernhard Maier (Dictionary of Celtic Religion and Culture, Boydell, 1997), deriva il nome da *leugh-, "giuramento, patto", connettendolo alla funzione di garante degli accordi e dei contratti che alcune fonti gli attribuiscono; una terza lettura, proposta da Joseph Vendryes, lo collega al gallico lugus, attestato in numerosi toponimi europei (Lugdunum = Lione, Lugdunum Batavorum = Leiden, Laon, Léon) — è la divinità più giovane, più splendente e più universalmente dotata del pantheon dei Tuatha Dé Danann. Non è il dio più antico né il padre del pantheon — quel ruolo appartiene al Dagda — ma è il dio che porta il sistema a compimento, il principio che mancava e che, una volta arrivato, cambia tutto.

La genealogia di Lugh è costruita deliberatamente per incarnare la sintesi dei principi cosmici opposti: è figlio di Cian (figlio di Dian Cécht, del popolo dei Tuatha Dé) e di Ethne (figlia di Balor, re dei Fomori, il popolo del caos e dell'oscurità). Questa doppia genealogia — metà luce, metà tenebra — è il segreto della sua potenza: porta in sé entrambi i principi in conflitto, e può quindi risolverli. È nipote di Balor — che ucciderà nella battaglia finale — e questa uccisione del nonno è strutturalmente il mito del ricambio generazionale cosmico: il giovane dio di luce che uccide il vecchio dio del caos-oscurità, con la specificità tragica che il carnefice è sangue del sangue della vittima. La sua madre Ethne fu rinchiusa da Balor in una torre di vetro (Túr Mór) su un'isoletta al largo della costa di Donegal — oggi conosciuta come Tory Island — perché una profezia aveva predetto che sarebbe stato un nipote a ucciderlo. Cian raggiunse Ethne con l'aiuto di una druida, e da questa unione nacque Lugh.

La funzione cosmica di Lugh è quella dell'eccellenza multipla: a differenza degli altri dèi, ciascuno dei quali è maestro in un'arte specifica, Lugh è Samildánach — "esperto in ogni arte, padrone di tutti i mestieri simultaneamente". Quando si presenta alle porte di Tara e il portiere gli chiede quale sia la sua arte, Lugh risponde: fabbro. "Ne abbiamo già uno." Poeta. "Ne abbiamo già uno." Guerriero, medico, mago, carpentiere, suonatore di arpa, campione. Per ogni arte il portiere risponde allo stesso modo — ma quando Lugh chiede se ci sia qualcuno che le possiede tutte contemporaneamente, le porte si aprono. È questo il principio della sua divinità: non la specializzazione ma la sintesi.

L'iconografia di Lugh è quella del giovane eroe luminoso: è descritto come bellissimo, con capelli che brillano come il sole, armato della lancia Lúin di Celtchar e della fionda (tathlum). La festa che gli è associata è Lughnasadh (1° agosto, inizio dell'estate tardiva), istituita in memoria di sua madre adottiva Tailtiu che morì dissodando la pianura dell'Irlanda centrale per renderla fertile agli uomini. Il suo colore sacro è il dorato e il bianco della luce; il suo numero sacro è il tre (la triplice competenza, la triplice nascita); i suoi animali sono il corvo (in alcune fonti) e il cane della caccia solare.`,

      sub1: `L'arrivo a Tara e il test del Samildánach`,
      text1: `Il racconto dell'arrivo di Lugh alle porte di Tara — il palazzo reale dei Tuatha Dé Danann dove risiede Nuada con la sua corte — è uno dei testi narrativamente più elaborati e teologicamente più densi del Cath Maige Tuired (trad. Elizabeth Gray, Irish Texts Society, 1982), e la sua struttura di interrogatorio ripetuto che culmina nella rivelazione del principio universale lo colloca tra i miti di "riconoscimento dell'eroe" più significativi della letteratura europea arcaica.

Il portiere di Tara — Gamal mac Figail — interroga il giovane arrivato chiedendogli la sua arte, perché "nessun uomo senza un'arte entra a Tara". Lugh risponde: sono un fabbro. Il portiere risponde: abbiamo già Credne il fabbro, non abbiamo bisogno di te. Sono un guerriero. Abbiamo Ogma il campione. Sono un poeta e uno storico. Abbiamo En figlio di Ethamain. Sono un mago. Abbiamo i druidi e i maghi. Sono un medico. Abbiamo Dian Cécht. Sono un coppiere. Abbiamo i nostri coppieri. Sono un metallurgista di bronzo. Abbiamo Luchta figlio di Luachaid. A ogni risposta di Lugh corrisponde un nome — il pantheon di Tara è completo, non c'è posto per nessun nuovo arrivato. Ma poi Lugh pone la domanda che spiega tutto: "Chiedete al re se ha un uomo che possiede tutte queste arti insieme. Se ce l'ha, non ho bisogno di entrare a Tara." La risposta non può che essere no — e Lugh entra.

Questo mito ha la struttura di un test logico che è anche una rivelazione ontologica: il sistema divino di Tara è completo nelle sue parti ma manchevole nel principio di sintesi. Ogni dio è specialista della propria arte, ma nessuno incarna la totalità. Lugh non aggiunge una nuova specializzazione ma il principio dell'universalità, e questa aggiunta trasforma il sistema: non un nuovo elemento ma un nuovo ordine di grandezza. Georges Dumézil (Mythe et Épopée, Gallimard, 1968) ha analizzato l'arrivo di Lugh a Tara come la formulazione celtica più elaborata del tema indoeuropeo del "dio terzo che completa la triade funzionale": Lugh risolve la tensione tra la prima funzione (sovranità sacra di Nuada) e la seconda (forza guerriera di Ogma) portando una terza qualità che è sintesi e non semplice aggiunta. La scena del dialogo con il portiere è stata letta da Kim McCone (Pagan Past and Christian Present, Maynooth, 1990) come riflesso di pratiche reali di ingresso alle corti regali irlandesi, in cui il richiedente doveva dimostrare la propria arte prima di essere ammesso.`,

      sub2: `L'uccisione di Balor e la lancia del sole`,
      text2: `Il duello tra Lugh e Balor — il climax della Seconda Battaglia di Mag Tuired, il momento in cui il giovane dio solare uccide il vecchio re del caos con il proprio occhio malefico — è il mito solare irlandese per eccellenza, la narrazione in cui l'alternanza cosmica tra luce e oscurità si risolve in un atto di violenza che è al tempo stesso infanticidio (Lugh uccide il nonno) e teofania (la luce sconfigge definitivamente il caos). La fonte principale è il Cath Maige Tuired §§130-137 (trad. Gray, 1982), con varianti nelle versioni folkloriche raccolte da John Gregorson Campbell nelle Ebridi (Clan Traditions and Popular Tales, 1895).

Balor dell'Occhio Malvagio (Balor Béimnech, "Balor dei colpi fatali") è il re dei Fomori: porta sempre l'occhio chiuso perché il suo sguardo uccide istantaneamente tutto ciò che incontra — un occhio che fu avvelenato dai fumi di un calderone druidico quando era giovane, e che da allora porta la morte ovunque si posi. In battaglia, i Fomori aprono l'occhio di Balor con un gancio mentre il vecchio re è in posizione elevata: lo sguardo si abbatte sulle file nemiche e le distrugge. Nel Cath Maige Tuired, Balor uccide con il proprio sguardo Nuada stesso — il re dei Tuatha Dé — prima che Lugh possa intervenire.

Lugh risponde lanciando una pietra (tathlum) o — nelle versioni più elaborate della tradizione folklorica — la propria fionda, colpendo Balor nell'occhio nel momento esatto in cui si apre. Il colpo è perfetto: spinge l'occhio attraverso la testa di Balor, in modo che sia il campo dei Fomori a ricevere lo sguardo mortale invece di quello dei Tuatha Dé. La narrazione del Cath Maige Tuired è asciutta e potente nella traduzione di Gray: "Lugh e Balor dell'Occhio Velenoso si incontrarono. L'occhio malvagio di Balor era sempre chiuso: lo aprivano solo sul campo di battaglia. Quattro uomini lo aprivano con un gancio. Quando il veleno di quell'occhio si posava su una schiera, quella schiera era inutilizzabile contro di lui. Lugh lanciò la sua pietra magica attraverso l'occhio, così che passò dalla parte opposta della sua testa, e il veleno cadde sui Fomori stessi." La versione folklorica delle Ebridi aggiunge che dalla testa mozzata di Balor si levò una luce così intensa che illuminò tutto il campo di battaglia — il sole che sorge dalla morte del caos. Timothy Champion (Celtic Art in Roman Europe, British Museum Press, 1985) ha tracciato la connessione iconografica tra l'occhio di Balor e il "malocchio" celtico attestato negli ex-voto romani di area gallica: l'occhio malefico come principio del caos è un archetipo pan-celtico.`,

      sub3: `Lughnasadh e il sacrificio della madre adottiva`,
      text3: `La festa di Lughnasadh — il primo agosto, uno dei quattro grandi festival stagionali del calendario celtico insulare insieme a Samhain, Imbolc e Beltane — è la festa fondamentale del raccolto irlandese e al tempo stesso il memoriale della morte di Tailtiu, la madre adottiva di Lugh, che morì di sfinimento dissodando la grande pianura dell'Irlanda centrale per renderla coltivabile agli uomini. La connessione tra il dio solare e la festa del raccolto — tra la luce di Lugh e la mietitura del grano — è la struttura teologica più concreta e più socialmente rilevante del culto di Lugh, quella che lo connette alla vita quotidiana delle comunità agricole irlandesi. La fonte principale è il Lebor Gabála Érenn (trad. Macalister, 1938-1956) per l'istituzione della festa, con integrazioni in Cath Maige Tuired e nei testi giuridici medievali sul Lughnasadh come occasione di assemblee e mercati.

Tailtiu — il cui nome è connesso al gaelico talam, "terra" — era la figlia di Mag Mór, re dei Fir Bolg, e la moglie di Eochaid mac Eirc, l'ultimo re dei Fir Bolg prima della sconfitta per mano dei Tuatha Dé. Dopo la conquista divina, adottò Lugh come figlio e impiegò tutta la propria forza nel dissodare la pianura di Brega (oggi la pianura del Meath, il cuore agricolo dell'Irlanda): tagliò le foreste, bonificò le paludi, preparò il terreno per la coltivazione. La grandezza del gesto — trasformare la foresta selvaggia in campo coltivato — è il gesto fondativo della civiltà agricola irlandese, e Tailtiu lo compì con le proprie mani fino a morirne. Il Lebor Gabála dice: "Era il suo cuore che scoppiò nel suo petto dalla fatica del grande lavoro."

Lugh istituì in suo onore la festa annuale di Lughnasadh — che la tradizione identifica con i Giochi di Tailtiu (Óenach Tailteann, le "assemblee di Tailltiu"), celebrati nel sito di Teltown nella contea di Meath fino al XII secolo d.C. e poi rievocati simbolicamente fino al XX. I Giochi di Tailtiu erano assemblee polivalenti: gare atletiche, mercati, contratti matrimoniali, sessioni di giustizia, raduni poetici — l'intera vita sociale concentrata in un momento sacro. Ronald Hutton (The Stations of the Sun, Oxford University Press, 1996) ha analizzato Lughnasadh come la più "sociale" delle quattro feste celtiche: mentre Samhain e Beltane hanno un carattere più cosmologico e soprannaturale, Lughnasadh è la celebrazione della comunità umana che riconosce il proprio debito verso la terra e verso chi ha reso possibile la sua coltivazione. Il festival sopravvive nell'Irlanda contemporanea nella forma della Reek Sunday — il pellegrinaggio alla cima di Croagh Patrick nel Mayo il penultimo domenica di luglio — e nella fiera di Puck a Killorglin nel Kerry (il capro incoronato re per tre giorni, probabilmente residuo di un rito di fertilità agricola).`,

      sub4: `La lancia Lúin e le armi cosmiche`,
      text4: `La lancia di Lugh — Lúin di Celtchar, o più spesso semplicemente la "Lancia di Lugh" (Sleá Luga, nelle varianti gaelico-scozzesi) — è uno dei quattro tesori cosmici dei Tuatha Dé Danann, portati dalle quattro città mitiche del nord del mondo dove gli dèi avevano appreso la loro scienza prima di arrivare in Irlanda: Finias per la spada di Nuada, Murias per il calderone del Dagda, Gorias per la lancia di Lugh, Falias per la pietra di Fál. La fonte principale per i quattro tesori è il Lebor Gabála Érenn (trad. Macalister, 1938-1956), con descrizioni più dettagliate delle singole armi nel Cath Maige Tuired e nei testi poetici del Metrical Dindshenchas.

La lancia di Lugh è descritta con due proprietà complementari che ne rivelano la natura cosmica: non manca mai il bersaglio (la precisione assoluta della luce che viaggia in linea retta) e non c'è armatura né corpo che possa resistere alla sua penetrazione. In alcune versioni è detta tenuta immersa in un calderone di veleno tra un uso e l'altro, perché la sua natura ardente distruggerebbe altrimenti tutto ciò che tocca — dettaglio che la connette alla tradizione delle armi di fuoco cosmico (il vajra di Indra nella tradizione vedica, il fulmine di Zeus, il Gungnir di Odino). Il mito della città di Gorias — da cui la lancia proviene — la connette esplicitamente al fuoco: Gorias è la città dell'est, la direzione del sorgere del sole, e la lancia è la luce solare nella sua forma più concentrata e penetrante.

Nel Cath Maige Tuired, la lancia di Lugh è tenuta in riserva per il momento decisivo della battaglia: la distruzione dell'esercito fomoriano nel suo punto di massima concentrazione. Il testo descrive come Lugh e i suoi alleati conservino le armi più potenti per la fase finale, in una strategia militare che è anche teologia: la luce non si spreca ma si riserva per il momento in cui il caos è al massimo della sua forza. Miranda Green (Celtic Myths, British Museum Press, 1993) ha analizzato la lancia di Lugh in relazione all'archeologia delle armi votive celtiche: la pratica di depositare armi in acque (fiumi, laghi, paludi) come offerta a divinità solari-guerriere è documentata ampiamente nel periodo la Tène (V-I sec. a.C.) e riflette la concezione dell'arma come oggetto sacro mediatore tra il guerriero e la forza divina che incarna.`,

      sub5: `Lugh e Cú Chulainn: la trasmissione eroica`,
      text5: `La relazione tra Lugh e Cú Chulainn — il dio solare e il grande eroe dell'Ulster che è suo figlio — è uno dei fili narrativi più significativi e meno evidenti del Ciclo dell'Ulster, e la sua piena comprensione richiede di leggere le imprese di Cú Chulainn come la ripetizione eroica delle imprese divine del padre: ogni gesta del figlio è una proiezione nel mondo umano della forza di Lugh. La fonte principale per la filiazione è il Compert Con Culainn ("La Nascita di Cú Chulainn", trad. A.G. Van Hamel, Compert Con Culainn and Other Stories, Dublin Institute for Advanced Studies, 1933); la figura di Lugh come padre protettivo è presente nel Táin Bó Cúailnge (trad. Kinsella, 1969).

La nascita di Cú Chulainn è essa stessa un mito di doppia paternità che rispecchia quella di Lugh: Conchobar mac Nessa, il re dell'Ulster, porta la sorella Deichtine e una compagnia di cavalieri inseguendo stormi di uccelli soprannaturali. Arrivano a una casa magica dove vengono ospitati; nella notte nasce un bambino. Deichtine lo cresce come figlio proprio, ma presto il bambino muore. In sogno appare Lugh stesso, che rivela di essere il vero padre e che il bambino sarà reincarnato nel grembo di Deichtine. Nascerà così Sétanta — il nome di Cú Chulainn prima di ricevere il nome definitivo — figlio di Lugh nel corpo umano di Deichtine.

La protezione di Lugh sul figlio si manifesta nel momento più critico del Táin: quando Cú Chulainn, gravemente ferito dai combattimenti solitari al guado, crolla e non può più difendere l'Ulster, Lugh appare in forma umana e gli concede tre giorni e tre notti di sonno guaritore, durante i quali il padre combatte in sua vece contro le armate di Medb — un'assistenza che Cú Chulainn non richiede e non sa di ricevere, scoprendola solo al proprio risveglio. La scena — narrata nel Táin con una delicatezza emotiva insolita per il tono generalmente epico del testo — rivela la teologia della filiazione divina come protezione non interventista: il dio non sostituisce l'eroe ma lo sostiene nei momenti in cui l'eroe da solo non basta. Joseph Nagy (The Wisdom of the Outlaw, University of California Press, 1985) ha analizzato il rapporto Lugh-Cú Chulainn come la struttura portante del Ciclo dell'Ulster: ogni impresa eroica del figlio è la dimostrazione che il principio del Samildánach — la competenza totale — può essere incarnato in forma umana, anche se solo parzialmente e temporaneamente, nella vita dell'eroe.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired",
        name: "L'eroe che vince i Fomori",
        text: "Lugh arriva alla corte di Nuada del braccio d'argento chiedendo di essere ammesso. Il portinaio lo respinge domandandogli quale arte conosca. Lugh enumera: falegname, fabbro, guerriero, arpista, eroe, poeta e storico, mago, medico, coppiere, artigiano del bronzo. Ogni volta il portinaio risponde che già ne hanno uno. Allora Lugh replica: 'Ma avete qualcuno che le possieda tutte insieme?' A questa sola domanda gli viene aperta la porta.",
      },
      {
        era: "Lebor Gabála Érenn",
        name: "Il vendicatore del padre",
        text: "Secondo il Lebor Gabála, il padre Cian viene ucciso dai tre figli di Tuireann. Lugh esige da loro un prezzo di sangue impossibile — otto oggetti magici da ogni angolo del mondo — che essi riescono a procurare, morendo però nell'impresa. È la 'Tragedia dei Figli di Tuireann', una delle tre 'storie dolorose' della narrativa irlandese.",
      },
      {
        era: "Ciclo dell'Ulster",
        name: "Il padre divino di Cú Chulainn",
        text: "Nella Táin Bó Cúailnge Lugh appare a Cú Chulainn durante la sua veglia mortale e lo identifica come suo padre soprannaturale (Cú Chulainn è detto 'figlio di tre padri': Sualtam mortale, Conchobar re, Lugh dio). Lugh prende il posto del figlio ferito per tre giorni e tre notti, permettendogli di guarire.",
      },
      {
        era: "Lugus continentale",
        name: "Il dio triplice della Gallia",
        text: "Il corrispondente continentale è Lugus: attestato in Lugdunum (Lione), Lugdunum Batavorum (Leiden), Lucus Augusti (Lugo in Galizia). Cesare lo identifica con Mercurio. Iscrizioni galliche lo mostrano spesso come triplice (Lugoves, dativo plurale di Lugus).",
      },
    ],
    cult: `Il festival sacro di Lugh è Lughnasadh — primo di agosto — che segna l'inizio del raccolto. Secondo la tradizione, Lugh stesso istituì il festival in onore della sua madre adottiva Tailtiu, la dea della terra coltivata, che morì per lo sfinimento dopo aver dissodato le pianure d'Irlanda. Lughnasadh è uno dei quattro grandi festival celtici (con Samhain, Imbolc e Beltane) e si celebra ancora oggi in Irlanda come Domhnach Crom Dubh o in Scozia come Lunasda.

Il luogo sacro centrale è Tailtiu (attuale Teltown, contea di Meath) dove si tenevano i grandi giochi di Lughnasadh: competizioni atletiche, matrimoni pubblici (i 'matrimoni di Tailtiu' duravano un anno e un giorno), scambi commerciali. Questi giochi sono attestati fino al 1169 — poco dopo l'invasione normanna — e sono stati rivitalizzati in epoca gaelica revival.

Anche l'attuale contea di Louth e la collina di Uisneach (il 'centro sacro' d'Irlanda) conservano tracce del culto di Lugh.`,
    influence: [
      {
        era: "Toponomastica europea",
        text: "Il nome di Lugus/Lugh sopravvive in decine di toponimi europei: Lione (Lugdunum, 'fortezza di Lug'), Laon, Loudun, Lugo (in Galizia e in Lombardia), Legnica in Polonia, Carlisle (Luguvalium), Liegnitz. La sua presenza geografica è la testimonianza più vasta di un culto celtico paneuropeo.",
      },
      {
        era: "Lleu Llaw Gyffes gallese",
        text: "In Galles Lugh diventa Lleu Llaw Gyffes ('Lleu dalla mano abile'), protagonista del Quarto Ramo del Mabinogion: nato magicamente da Arianrhod, maledetto a non avere nome né armi né moglie, queste interdizioni vengono superate con l'astuzia di Gwydion. Lleu conserva tratti solari e artigianali del Lugh irlandese.",
      },
      {
        era: "Mercurio Celticus nell'interpretatio romana",
        text: "Cesare nel 'De Bello Gallico' (VI,17) dichiara: 'Il dio che onorano di più è Mercurio; di lui ci sono moltissime statue; lo chiamano inventore di ogni arte.' È la più esplicita identificazione di Lugus con Mercurio — basata proprio sul tratto Samildánach.",
      },
      {
        era: "Lancelot?",
        text: "Alcuni studiosi (Rachel Bromwich, Loomis) hanno proposto che 'Lancelot' derivi da 'Llenlleawg' gallese, a sua volta variante di Lleu/Lugh. L'ipotesi è dibattuta ma illumina una possibile migrazione del personaggio dalla mitologia celtica al romanzo arturiano francese.",
      },
    ],
    texts: [
      {
        title: "Lugh alla porta di Tara",
        source: "Cath Maige Tuired, §53-56, trad. dal medio irlandese",
        text: "'Chi sei tu?' chiese il portinaio. 'Io sono Lugh Lonnansclech, figlio di Cian figlio di Dian Cécht, e di Ethne figlia di Balor.' 'Quale arte pratichi?' chiese il portinaio. 'Perché nessuno entra a Tara se non porta un'arte.' 'Domandami pure', disse Lugh. 'Sono un costruttore.' 'Non abbiamo bisogno di te. Abbiamo già un costruttore: Luchta figlio di Luachaid.' Egli disse: 'Domandami, portinaio: sono un fabbro.' Il portinaio gli rispose: 'Abbiamo un fabbro, Colum Cualléinech dalle tre nuove tecniche.' Egli disse: 'Domandami: sono un campione.' Il portinaio rispose: 'Non abbiamo bisogno di te: abbiamo un campione, Ogma figlio di Ethliu.' Egli disse ancora: 'Domandami, portinaio: sono un'arpista... un eroe... un poeta e storico... un mago... un medico... un coppiere... un artigiano del bronzo...' A ogni arte il portinaio rispondeva: 'Abbiamo già...'. Allora Lugh disse: 'Domanda al re se ha un solo uomo che possieda tutte queste arti; se l'ha, non entrerò a Tara.'",
      },
      {
        title: "L'uccisione di Balor",
        source:
          "Cath Maige Tuired, §133-135, versione folklorica ricostruita da O'Donovan",
        text: "Balor stava sollevando la palpebra del suo occhio maligno — quattro uomini con un uncino la aprivano — quando Lugh scagliò la pietra della fionda. La pietra colpì l'occhio, glielo fece uscire dalla nuca, ed esso cadde sull'esercito dei Fomori. Ventisette dei loro furono fulminati dal solo passaggio del suo sguardo. E così la profezia si compì: Lugh nipote di Balor uccise suo nonno.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. BRIGID
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "brigid",
    name: "Brigid",
    role: "Triplice Dea del Fuoco, della Poesia e della Guarigione",
    tags: ["Fuoco", "Poesia", "Guarigione", "Fabbri"],
    epithet: "Breo-Saighead — la Freccia di Fuoco; l'Alta Potente",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Triplice Dea", "Imbolc", "Kildare"],
    heroColor: "linear-gradient(160deg,#1a0a00,#4a1f05,#1a0800)",
    bio: {
      main: `Brigid — il cui nome deriva dalla radice proto-celtica *brigantī, a sua volta dalla radice indoeuropea *bhergh-, "alto, elevato, potente" (affine al sanscrito bṛhatī, "la grande, l'eccelsa", all'antico inglese beorg, "collina, altura", al germanico *burgaz, "fortezza elevata") — significa dunque "la Potente, l'Eccelsa, la Signora dell'Altura". La filologia celtica comparata riconosce nella radice *brigant- uno dei termini più diffusi nel mondo celtico pre-romano: Brigantia è divinità patrona dei Briganti in Britannia settentrionale (attestata da iscrizioni romano-britanniche nel II-III sec. d.C.); Brigindo è venerata in Gallia (iscrizione di Aventicum, odierna Avenches in Svizzera); Bríg è attestata nei testi irlandesi come figura distinta ma correlata. Questa distribuzione geografica — dalle isole britanniche all'Europa continentale — rende Brigid una delle divinità celtiche più antiche e geograficamente pervasive, la cui unicità irlandese è in realtà la manifestazione locale di un principio divino pan-celtico.

La genealogia di Brigid nel sistema mitologico irlandese è tra le più nobili possibili: è figlia del Dagda, il padre universale dei Tuatha Dé Danann, e il suo nome completo nelle fonti medievali è Brigid ingen Dagda — "Brigid figlia del Dagda". Questa filiazione la colloca al centro del pantheon come erede diretta del principio dell'abbondanza e del sapere. La sua natura è triplice — una triade di tre sorelle che portano tutte il nome Brigid ma governano domini distinti: Brigid della poesia e dell'ispirazione (la filidecht, l'arte dei filid, i poeti-veggenti), Brigid della medicina e della guarigione, Brigid della fucina e dell'artigianato del metallo. Questa triplice struttura — documentata nel Cath Maige Tuired e nel Sanas Cormaic (ca. 900 d.C., trad. Kuno Meyer, 1912) — non la fa essere tre dee separate ma un'unica forza divina che si manifesta in tre domini dell'eccellenza umana: la parola, la cura, la forma materiale.

La funzione cosmica di Brigid è quella del fuoco nella sua articolazione più piena: non il fuoco della guerra o del sacrificio (che appartiene ad Aengus o a Lugh) ma il fuoco della fucina che trasforma il metallo grezzo in forma, il fuoco del focolare che riscalda e nutre, il fuoco dell'ispirazione poetica che trasforma l'esperienza in bellezza. In gaelico irlandese antico il fuoco del focolare domestico (teine) e il fuoco dell'ispirazione poetica (imbas, "grande sapere che illumina") condividono la stessa natura ontologica — entrambi sono presenze viventi che abitano una casa o un corpo umano, richiedono nutrimento e cura, possono spegnersi per negligenza. Brigid governa entrambe le forme di fuoco, e la sua festa stagionale è Imbolc (1° febbraio), il momento in cui la terra inizia a scaldarsi sotto la superficie ancora fredda: il fuoco che ritorna al mondo dopo l'inverno della Cailleach.

L'iconografia di Brigid nelle fonti medievali è relativamente sobria rispetto ad altre divinità: è descritta come una donna di straordinaria bellezza, con capelli color del fuoco e un mantello verde. I suoi attributi sono la croce di paglia intrecciata (che porta il suo nome anche nella tradizione cristiana, la Cros Bríde), il serpente (simbolo della terra che si risveglia a Imbolc), la fiamma perpetua. I suoi animali sacri sono la mucca — l'animale dell'abbondanza lattea, connesso alla sua funzione di dea della fertilità — e il serpente della terra che emerge il primo febbraio. Il suo numero è il diciannove (il ciclo del fuoco di Kildare, che bruciava diciannove giorni prima di essere rinnovato dal soffio del ventesimo).`,

      sub1: `Il fuoco perpetuo di Kildare e il sacerdozio femminile`,
      text1: `Il santuario di Brigid a Kildare — Cill Dara, "la chiesa della quercia", nella contea odierna del Kildare, a cinquantacinque chilometri a sudovest di Dublino — è il sito religioso più importane connesso alla dea, e la continuità tra il centro di culto pagano preceltico e il monastero cristiano fondato da Santa Brigid di Kildare (ca. 451-525 d.C.) è uno dei casi più documentati e più studiati di sovrapposizione deliberata tra paganesimo e cristianesimo nelle isole britanniche. La fonte principale per il fuoco perpetuo di Kildare è Giraldo Cambrense (Gerald of Wales), Topographia Hiberniae (ca. 1188, trad. John O'Meara, Penguin, 1982); la documentazione del santuario pagano preesistente è in Lady Augusta Gregory (Gods and Fighting Men, Murray, 1904) e in Séamas Ó Catháin (The Festival of Brigit, DBA Publications, 1995).

Giraldo Cambrense descrive il fuoco perpetuo di Kildare con la precisione dell'osservatore straniero che riconosce qualcosa di insolito: un fuoco che bruciava ininterrottamente nel recinto del monastero di Santa Brigid, custodito da diciannove monache che si alternavano nella veglia ogni ventiquattro ore. Il ventesimo giorno il fuoco bruciava da solo — "la stessa Brigid lo custodisce" secondo la tradizione locale. La struttura del ciclo — diciannove veglie umane e una ventesima divina — è aritmeticamente connessa al ciclo metoniaco di diciannove anni (il ciclo lunare che torna al punto di partenza dopo diciannove anni solari), rivelando la connessione tra il fuoco di Brigid e il calcolo astronomico. Giraldo, apologista cristiano, è imbarazzato ma onesto: il fuoco è circondato da un recinto che nessun uomo può attraversare — la regola è quella di un temenos pagano, non di un chiostro cristiano.

La continuità tra il sacerdozio femminile della dea pagana Brigid e il monastero di Santa Brigid di Kildare è stata analizzata da Kuno Meyer (Learning in Ireland in the Fifth Century, Ó Faoláin Press, 1913) e più recentemente da Lisa Bitel (Isle of the Saints: Monastic Settlement and Christian Community in Early Ireland, Cornell University Press, 1990) come uno dei meccanismi più sofisticati della conversione irlandese: non la sostituzione del culto pagano con quello cristiano ma la sua trasformazione graduale attraverso la figura di una santa che porta lo stesso nome della dea. Le banfhilid — le poetesse-veggenti dedicate a Brigid nel sistema pre-cristiano — diventano le monache del monastero di Kildare; il fuoco perpetuo della dea diventa il fuoco perpetuo della santa; il recinto sacro diventa il chiostro. La continuità è così totale che distinguere la dea dalla santa diventa teologicamente quasi impossibile — e probabilmente era questa impossibilità a essere il punto.`,

      sub2: `Imbolc: il ritorno del fuoco e il serpente della terra`,
      text2: `Imbolc — il festival del primo febbraio, uno dei quattro grandi festivals stagionali del calendario celtico insulare — è la festa di Brigid per eccellenza: il momento in cui il fuoco invernale della Cailleach cede al primo tepore primaverile della dea, in cui la terra inizia a scaldarsi sotto la superficie ghiacciata e le pecore iniziano a produrre latte per i neonati agnelli. Il nome stesso rivela la connessione con l'abbondanza animale: imbolc deriva probabilmente dall'antico irlandese imb-fholc, "lavaggio del budello", riferimento al parto delle pecore e alla purificazione post-partum, o secondo un'altra proposta etimologica da oimelc, "latte di pecora" — in ogni caso il festival è radicato nella biologia del gregge e nel ciclo della fertilità animale. Le fonti principali sono le glosse del Sanas Cormaic (ca. 900 d.C.), il Tochmarc Emire e i resoconti folklorici raccolti da Alexander Carmichael (Carmina Gadelica, 1900) e da Kevin Danaher (The Year in Ireland, Mercier Press, 1972).

La tradizione folklorica di Imbolc è straordinariamente ricca e geograficamente coerente attraverso tutta l'Irlanda e le Highlands scozzesi, suggerendo un'antichità notevole. La sera del 31 gennaio le famiglie irlandesi preparavano il "letto di Brigid" (leaba Bríde): un fascio di paglia intrecciata — la futura Cros Bríde, la croce di paglia di Brigid — veniva deposto sulla soglia di casa con un indumento femminile, e si invitava la dea a entrare con la formula rituale "Brigid entra, la tua casa è benvenuta". La mattina del primo febbraio si cercavano impronte di bastone o di piede nella cenere del focolare come segno del passaggio notturno della dea. Alexander Carmichael ha documentato nelle Ebridi (Carmina Gadelica, vol. I) la Brat Bhríde — il "mantello di Brigid" — un tessuto lasciato all'esterno la notte del 31 gennaio per raccogliere la rugiada sacra di Imbolc, usato poi come rimedio medicinale per tutto l'anno.

Il serpente di Brigid che emerge il primo febbraio dalla terra è uno dei motivi meno noti ma teologicamente più ricchi della tradizione di Imbolc. Carmichael documenta dal Carmarthenshire gallese e da alcune aree dell'Ulster un carmina rituale: "Il giorno di Brigid il serpente esce dalla sua tana; non ferirò il serpente né il serpente ferirà me." Questo patto di non-aggressione con il serpente — pronunciato il primo febbraio — è sia una pratica apotropaica concreta (i serpenti escono realmente dal letargo primaverile nelle settimane intorno a Imbolc nelle regioni più meridionali delle isole britanniche) sia un rito cosmologico: il serpente è la terra che si risveglia, e non ferirlo significa rispettare la terra nel momento del suo risveglio. Ronald Hutton (The Stations of the Sun, Oxford University Press, 1996) ha analizzato come questa tradizione del serpente di Imbolc sia la versione celtica di un motivo pan-europeo di sacralità della terra a inizio primavera, connesso al culto della Grande Madre pre-indoeuropea.`,

      sub3: `Brigid e la sindone: il mito del mantello che copre la terra`,
      text3: `Il mito del mantello di Brigid — nelle sue versioni pagana e cristiana — è uno dei racconti più eleganti e semanticamente più ricchi della tradizione gaelica, e la sua struttura di richiesta modesta che si rivela cosmica attraverso un intervento divino lo colloca in una classe di miti di "dono espanso" presente in molte tradizioni (il "campo di senape" buddhista, il "desiderio tre volte accordato" delle fiabe europee). La versione cristiana — documentata nelle agiografie di Santa Brigid, in particolare nella Vita Prima Sanctae Brigidae (VIII sec., attribuita a Cogitosus, trad. Seán Connolly, Journal of the Royal Society of Antiquaries of Ireland, 1989) — è la più elaborata narrativamente, ma la struttura sottostante è chiaramente pre-cristiana.

Nella versione agiografica, Brigid chiede al re del Leinster di donarle terra per fondare il suo monastero. Il re rifiuta. Brigid chiede allora quanto può coprire il suo mantello: una richiesta così modesta da non poter essere rifiutata. Il re acconsente. Brigid stende il mantello sul terreno, e il mantello si espande magicamente fino a coprire l'intera pianura di Kildare — abbastanza terra per il monastero e le comunità che da esso dipenderanno. Il re, spaventato dal prodigio, concede tutto. La struttura è identica al mito indiano di Vamana (il Vishnu nano che chiede al re Bali "quanto copro in tre passi" e poi si espande a coprire l'intero cosmo) e al mito fondativo di Cartagine (Didone che chiede "quanto copre una pelle di bue" e taglia la pelle in strisce sottili per circondare un'intera collina).

La versione pagana del mito è meno elaborata narrativamente ma teologicamente più densa: il mantello di Brigid non è un trucco legale ma il suo attributo divino, il simbolo del potere della dea di coprire e proteggere la terra. Nella tradizione folklorica di Imbolc il "mantello di Brigid" (Brat Bhríde) deposto all'esterno la notte del 31 gennaio è esattamente questo: il simbolo della protezione divina stesa sulla casa e sulla famiglia per tutto l'anno. Kevin Danaher (The Year in Ireland, Mercier Press, 1972) ha documentato come la tradizione del brat fosse ancora praticata in molte zone dell'Irlanda rurale nella prima metà del XX secolo — il tessuto lasciato fuori nella notte di Imbolc veniva usato come rimedio contro il mal di testa, i dolori del parto, le malattie del bestiame, tutte le condizioni che rientrano nel dominio tradizionale della dea. La continuità tra il mantello cosmico della dea e il mantello medicinale della santa è la misura della profondità con cui il culto di Brigid era radicato nella vita quotidiana irlandese.`,

      sub4: `Il sincretismo con Santa Brigid: la dea che diventa santa`,
      text4: `La trasformazione di Brigid da divinità pagana dei Tuatha Dé Danann a patrona cristiana dell'Irlanda — seconda in importanza solo a San Patrizio, venerata in tutto il mondo cattolico il 1° febbraio — è il caso di sincretismo religioso più totale e più ben documentato delle isole britanniche, e uno dei più affascinanti della storia delle religioni in generale. A differenza di molti casi in cui una divinità pagana è semplicemente soppressa o demonizzata dalla nuova religione, Brigid è letteralmente assunta nel calendario cristiano come santa con lo stesso nome, la stessa festa, lo stesso luogo di culto e molti degli stessi attributi. La fonte principale per la santa è la Vita Prima Sanctae Brigidae (VIII sec., Cogitosus, trad. Connolly, 1989); il confronto sistematico tra dea e santa è in Alexei Kondratiev (The Apple Branch: A Path to Celtic Ritual, Collins Press, 1998) e in Mary Condren (The Serpent and the Goddess: Women, Religion, and Power in Celtic Ireland, Harper & Row, 1989).

La santa Brigid di Kildare è detta nata intorno al 451 d.C. e morta intorno al 525, figlia di un re irlandese di nome Dubhtach e di una schiava battezzata da San Patrizio. La Vita Prima la descrive con attributi miracolosi che riproducono punto per punto quelli della dea: trasforma l'acqua in birra (come la dea trasforma le stagioni), moltiplica il cibo per i pellegrini (come la dea governa l'abbondanza), cura i malati con il tocco delle mani (come la dea della medicina), fondare il fuoco perpetuo di Kildare (come la dea del fuoco). La struttura del miracolo cristiano replica talmente da vicino l'attributo pagano che i teologi medievali si trovarono in imbarazzo: Giraldo Cambrense nel XII sec. cita con fastidio come i contadini irlandesi non facessero differenza tra la dea e la santa, invocandole indistintamente con la stessa formula.

Mary Condren (1989) ha proposto l'interpretazione più radicale: la "santa Brigid" non è una persona storica ma una costruzione teologica deliberata attraverso cui i missionari cristiani irlandesi — probabilmente inclusa una comunità di donne religiose che custodivano già il fuoco della dea a Kildare — trasformarono il culto pagano in culto cristiano senza soluzione di continuità. Questa ipotesi — controversa ma presa seriamente dalla medievalistica — è supportata dall'assenza di documentazione storica affidabile sulla vita della santa e dalla perfezione con cui gli attributi della santa corrispondono a quelli della dea. La Brigid che il mondo celtico festeggia il 1° febbraio è in ogni caso — teologicamente o storicamente — la stessa forza cosmica del fuoco e della primavera che i Tuatha Dé invocavano a Imbolc: la dea più che mai viva, travestita da santa.`,
    },
    versions: [
      {
        era: "Sanas Cormaic (Glossario di Cormac, IX sec.)",
        name: "Le tre Brigid figlie del Dagda",
        text: "Il Glossario di Cormac — una delle fonti più antiche sulla religione pagana irlandese, redatto dal vescovo-re Cormac di Cashel intorno al 900 — dichiara: 'Brigit, cioè una poetessa, figlia del Dagda. Essa è Brigit la poetessa, cioè una dea che i poeti adoravano, perché la sua protezione era grande e famosa. La chiamano così dea dei poeti. Sue sorelle sono Brigit donna di guarigione e Brigit donna di fabbro-arte. Da questi nomi tutte le dee in Irlanda erano chiamate Brigit.'",
      },
      {
        era: "Ciclo Mitologico — Cath Maige Tuired",
        name: "La madre di Ruadán, l'inventrice del caoine",
        text: "Quando suo figlio Ruadán viene ucciso nella battaglia, Brigid emette un grido lamentoso e acuto che il testo definisce 'il primo caoine udito in Irlanda'. Istituisce così il rituale funebre del lamento femminile che sopravvivrà nella tradizione gaelica fino al XX secolo.",
      },
      {
        era: "Santa Brigida di Kildare (VI sec.)",
        name: "La santa cristiana come continuità",
        text: "Santa Brigida di Kildare (ca. 451-525), fondatrice del monastero di Kildare, è probabilmente la più chiara sovrapposizione tra una santa cristiana e una divinità pagana in tutta l'Europa. A Kildare le monache custodivano un fuoco perpetuo — attestato da Giraldus Cambrensis nel XII sec. — che non veniva mai spento, proprio come il fuoco sacro di Brigid dea. Il monastero era interdetto agli uomini, con una recinzione rituale. I miracoli attribuiti alla santa (moltiplicazione del burro, vacche che producono latte in eccesso, fiamme che non bruciano) sono chiaramente il repertorio di Brigid dea della fertilità e del fuoco.",
      },
      {
        era: "Brigantia britannica",
        name: "La dea dei Briganti",
        text: "Nella Britannia romana la Brigid celtica è venerata come Brigantia, dea eponima della confederazione dei Briganti (nord Inghilterra). Le iscrizioni la presentano anche sincretizzata con Minerva e con la Vittoria. L'identità etimologica con Brigid irlandese è certa.",
      },
    ],
    cult: `Il festival sacro di Brigid è Imbolc (1° febbraio) — il festival che segna la fine dell'inverno e l'inizio della primavera pastorale, quando le pecore iniziano a produrre latte. Il nome Imbolc significa "nel ventre" o "lattazione", riferendosi appunto alla gravidanza e alla lattazione degli ovini. È uno dei quattro grandi festival celtici.

Il fuoco perpetuo di Kildare, spento solo nel XIII secolo dagli invasori normanni per un periodo, poi riacceso, di nuovo spento nella Riforma (XVI sec.), è stato riacceso ufficialmente nel 1993 dalle suore brigidine e brucia nuovamente oggi. È probabilmente il fuoco rituale più antico d'Europa in continuità di culto.

Le 'St Brigid's Wells' — sorgenti sacre a Brigid — sono centinaia in Irlanda, molte ancora oggetto di pellegrinaggio popolare. La 'St Brigid's Cross', croce intrecciata di giunchi, è ancora realizzata il 1° febbraio in molte case irlandesi e posta sopra la porta per protezione annuale.`,
    influence: [
      {
        era: "Minerva e Atena",
        text: "Brigid ha evidenti paralleli con Minerva romana (patrona degli artigiani, della medicina e della saggezza) e con Atena greca (saggezza e arti pratiche). L'interpretatio romana sul territorio britannico la associa esplicitamente a Minerva.",
      },
      {
        era: "Il culto mariano celtico",
        text: "Brigid è detta 'Mary of the Gael' (Maria dei Gaeli) nella devozione irlandese. Molte preghiere a Santa Brigida sono strutturalmente preghiere a Maria. Il sovrapporsi di Brigid, Maria e la santa storica ha creato uno strato devozionale unico in Irlanda.",
      },
      {
        era: "Neopaganesimo e movimento wicca",
        text: "Brigid è una delle divinità più venerate nel neopaganesimo contemporaneo, specialmente nei movimenti di spiritualità femminile. Il primo febbraio è celebrato come festival wicca importante. Il movimento Imbolc ha rivitalizzato il culto in Irlanda stessa dal 2000 circa.",
      },
      {
        era: "Santa Patrona d'Irlanda",
        text: "Dal 1 febbraio 2023, il giorno di Santa Brigida è festa nazionale ufficiale in Irlanda — la prima festa nazionale legata a una figura femminile. È un riconoscimento tardivo ma simbolicamente potente della continuità da Brigid dea a Brigida santa.",
      },
    ],
    texts: [
      {
        title: "Sanas Cormaic",
        source: "Cormac mac Cuilennáin, ca. 900, trad. Whitley Stokes",
        text: "Brigit, vale a dire una poetessa, figlia del Dagda. Essa è Brigit la donna di poesia, cioè una dea che i poeti adoravano. La sua protezione era grande e famosa per la protezione del canto. Perciò la chiamano dea dei poeti per quel nome. E sue sorelle erano Brigit donna di guarigione e Brigit donna di fabbro-arte, figlie del Dagda, dai cui nomi quasi tutte le dee in Irlanda erano chiamate col nome di Brigit.",
      },
      {
        title: "Giraldus Cambrensis — il fuoco di Kildare",
        source: "Topographia Hibernica, II,34-36, ca. 1188",
        text: "A Kildare, nella parte d'Irlanda detta Leinster, Brigit possiede un fuoco inestinguibile. Non che esso non possa essere spento, ma le monache lo alimentano e ravvivano con tanta cura che esso rimane sempre vivo, immutato dai tempi di Brigit per tanti secoli. E sebbene una moltitudine immensa di persone abbia qui portato legna in tutti questi anni, il mucchio tuttavia non diminuisce.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. DANU
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "danu",
    name: "Danu",
    role: "Grande Madre Primordiale, Matrona dei Tuatha Dé",
    tags: ["Madre", "Terra", "Fiumi", "Ancestrale"],
    epithet: "Danu / Anu — la Madre degli Dèi dell'Irlanda",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Matrona", "Paneuropea", "Fiumi sacri"],
    heroColor: "linear-gradient(160deg,#0a140a,#1a2a1a,#050c05)",
    bio: {
      main: `Danu — il cui nome è oggetto del più controverso dibattito filologico della celticistica moderna — è presentata nelle fonti irlandesi medievali come la dea madre primordiale dei Tuatha Dé Danann, il "popolo della dea Danu", il cui nome stesso implica la sua maternità cosmica. La difficoltà filologica è radicale: Danu come nome divino non compare mai esplicitamente nei testi irlandesi medievali. Il Lebor Gabála Érenn (trad. R.A.S. Macalister, Irish Texts Society, 1938-1956) — la fonte principale per la mitologia irlandese — usa sempre la formula Tuatha Dé Danann ma non nomina mai Danu come personaggio narrativo. John Carey (Ireland and the Grail, Celtic Studies Publications, 2007) e Proinsias Mac Cana (Celtic Mythology, Newnes Books, 1983) hanno analizzato come il nome Danu nel contesto irlandese sia probabilmente un'astrazione grammaticale dal genitivo Danann piuttosto che un nome personale attestato: Tuatha Dé Danann potrebbe significare "tribù degli dèi di abilità" (da dán, "abilità, arte, dono") o "tribù della dea delle arti" — con Danu come personificazione retroattiva del collettivo, non come individuo mitologico preesistente.

La figura con la quale Danu si sovrappone più naturalmente nelle fonti irlandesi è Ana o Anu — questa sì attestata come nome divino esplicito nel Sanas Cormaic (ca. 900 d.C., compilato da Cormac mac Cuilennáin, vescovo-re di Munster, trad. Kuno Meyer, 1912): "Ana, cioè la madre degli dèi dell'Irlanda. Essa nutriva bene gli dèi. Dal suo nome sono detti Dá Chích Anann ('i due seni di Ana') sopra Luachair Dedad." I Dá Chích Anann — due colline arrotondate nella contea di Kerry, oggi note come "The Paps of Anu" — sono il luogo geografico che ancora oggi porta il nome della dea, e la loro forma — due seni femminili visti dal piano della pianura di Munster — è la descrizione fisica più immediata della Grande Madre come paesaggio incarnato: la dea non abita il territorio, il territorio è il suo corpo.

La genealogia di Danu/Ana è deliberatamente non elaborata nelle fonti — un tratto coerente con la sua funzione di principio primo: le divinità primordiali non hanno genitori, sono esse stesse la sorgente. Nella tradizione indoeuropea comparata, Danu trova paralleli precisi: la dea vedica Danu è madre dei Dānava, i demoni primordiali figli delle acque (da dánu, "flusso, fiume" in sanscrito), e il nome condivide la radice proto-indoeuropea *dʰenh₂-, "scorrere, fiume". Questa connessione — Danu come dea dei fiumi e delle acque primordiali — è coerente con la distribuzione geografica del nome in Europa: il Danubio (Dānuvius in latino), il Don, il Dnieper, il Dniester portano tutti nella loro radice la stessa *dʰenh₂-, suggerendo una dea pre-indoeuropea dei grandi fiumi europei che il proto-celtico e il proto-indo-iranico hanno entrambi ereditato come principio materno delle acque.

La funzione cosmica di Danu/Ana è quella della matrice primordiale — non una divinità che agisce nella narrativa mitologica ma il principio da cui il sistema divino emerge. Come il mare primordiale della cosmogonia sumerica (Tiamat) o le acque del caos della Genesi biblica, Danu è la condizione di possibilità del pantheon, non un suo membro. I suoi attributi non sono oggetti o animali specifici ma la terra fertile, le acque abbondanti, i seni che nutrono — l'iconografia della Grande Madre nella sua forma più arcaica e meno narrativamente elaborata.`,

      sub1: `Dá Chích Anann: il paesaggio come corpo divino`,
      text1: `Le Dá Chích Anann — "i due seni di Ana" — sono due colline perfettamente arrotondate nella contea di Kerry, nel Munster, alte rispettivamente 694 e 690 metri, che viste dalla pianura circostante presentano una forma così inequivocabilmente mammaria da rendere la loro denominazione mitologica una delle più trasparenti della toponomastica sacra irlandese. Il Sanas Cormaic le menziona esplicitamente (trad. Meyer, 1912) come il sito che porta il nome della dea madre, e la tradizione folklorica locale raccolta da Lady Augusta Gregory (Gods and Fighting Men, Murray, 1904) e da Patrick Weston Joyce (Irish Names of Places, Educational Company, 1869) le identifica unanimemente come il corpo fisico della dea incarnato nel paesaggio.

La concezione del territorio come corpo della divinità femminile — in cui ogni prominenza geografica è un attributo fisico della dea — è uno degli elementi più arcaici e geograficamente pervasivi della religione pre-indoeuropea nelle isole britanniche. Michael Dames (The Silbury Treasure, Thames & Hudson, 1976) ha analizzato Silbury Hill nel Wiltshire come un'analoga manifestazione della Grande Madre neolitica incarnata nel paesaggio, e la presenza di tumuli sommitali sulle Dá Chích Anann — strutture artificiali che accentuano la forma mammaria naturale delle colline — suggerisce che il sito fosse già sacro nell'età del bronzo, secoli prima dell'arrivo dei Celti in Irlanda. I mammelloni di pietra costruiti sulle cime delle due colline (oggi parzialmente diroccati) avrebbero trasformato colline già di forma suggestiva in seni definitivamente esplicitati: un atto di scultura cosmica su scala paesaggistica.

Marija Gimbutas (The Language of the Goddess, Thames & Hudson, 1989) — la studiosa letton-americana che ha proposto la teoria della "Antica Europa" come civiltà pre-indoeuropea matriarcale con una propria teologia della Grande Madre — ha incluso le Dá Chích Anann nel corpus delle manifestazioni della dea-terra pan-europea, collegandole alle figurine di Venus del Paleolitico superiore e alle dee neolitiche di Çatalhöyük. Questa interpretazione — controversa nella sua sistematicità ma stimolante come ipotesi — suggerisce che Ana/Danu non sia una creazione celtica ma l'erede gaelica di una tradizione teologica che risale alla preistoria dell'Europa atlantica: la Grande Madre delle origini che i Celti hanno incontrato nel paesaggio irlandese e hanno reinterpretato nel proprio vocabolario mitologico come madre dei Tuatha Dé. Anne Ross (Pagan Celtic Britain, Routledge, 1967) ha proposto la lettura più equilibrata: le Dá Chích Anann sono "il punto di fusione tra la teologia celtica e la memoria del paesaggio sacro pre-celtico, conservato dalla tradizione gaelica come nome della dea madre senza che la dea stessa fosse mai pienamente narrativizzata".`,

      sub2: `Danu indoeuropea: la dea dei fiumi primordiali`,
      text2: `La connessione linguistica tra la Danu celtica e la Danu vedica — e più in generale tra il nome della dea e i grandi fiumi dell'Eurasia — è uno degli argomenti più solidi della linguistica storica indoeuropea, e la sua implicazione teologica è precisa: Danu è il nome proto-indoeuropeo della dea delle acque primordiali, la Grande Madre liquida da cui tutti gli esseri emergono e a cui tutti ritornano. La dimostrazione linguistica è in Julius Pokorny (Indogermanisches etymologisches Wörterbuch, Francke, 1959) e in Calvert Watkins (The American Heritage Dictionary of Indo-European Roots, Houghton Mifflin, 2000): la radice *dʰenh₂-, "scorrere, fiume", produce in sanscrito dánu ("flusso, essenza liquida"), in avestico dānu ("fiume"), in proto-celtico *Danū, e i suoi riflessi toponomastici sono i fiumi europei più grandi — Danubio (da *Dānuvius, "il grande fiume"), Don (dal proto-iranico *Dānu), Dnieper (da *Dānaparas, "il fiume posteriore"), Dniester (da *Dānastris, "il fiume anteriore").

Nel Rigveda — la più antica raccolta poetica sanscrita, datata tra il 1500 e il 1200 a.C. circa — Danu è la madre dei Dānava, i demoni delle acque primordiali che si oppongono a Indra il dio del tuono nella battaglia cosmica fondamentale. I Dānava sono figli dell'acqua caotica primordiale, e la loro opposizione a Indra è la lotta tra il principio ordinato della luce e quello caotico delle acque non ancora domate: una struttura mitologica che ha precise corrispondenze nella lotta tra Marduk e Tiamat babilonese, tra Zeus e Tifone greco, tra Lugh e Balor-Fomori irlandese. In questo sistema il Danu vedico è principio materno del caos primordiale — non malvagio ma indifferenziato, la potenza delle acque prima che il cosmo le ordini.

La differenza tra il Danu vedico (madre del caos primordiale) e il Danu/Ana celtico (madre del pantheon divino ordinato) riflette la diversa soluzione che le due tradizioni hanno dato al problema cosmologico delle acque originarie: nel sistema vedico le acque primordiali sono un principio opposto all'ordine divino; nel sistema celtico irlandese le stesse acque sono la sorgente del pantheon divino, e la Grande Madre è la condizione di possibilità del cosmo ordinato, non la sua opposizione. Calvert Watkins (1978) ha proposto che questa differenza rifletta la diversa storicizzazione delle due tradizioni: la tradizione vedica ha narrativizzato la battaglia cosmologica in miti eroici, mentre la tradizione celtica ha conservato il principio materno nella sua forma più arcaica e meno conflittuale — la dea-fiume come pura sorgente, senza antagonismo.`,

      sub3: `Ana e la sovranità del Munster: la dea che nutre i re`,
      text3: `La connessione tra Ana/Danu e la provincia del Munster — documentata attraverso la localizzazione delle Dá Chích Anann in Kerry e attraverso le genealogie mitologiche che fanno di Ana la dea tutelare del Munster — rivela la dimensione politico-religiosa più concreta del culto della Grande Madre irlandese: non solo la dea cosmica primordiale ma la forza che garantisce la sovranità territoriale di una delle grandi province storiche d'Irlanda. La fonte principale è il Sanas Cormaic (ca. 900 d.C.), con integrazioni nelle genealogie mitologiche raccolte da Edward Gwynn nel Metrical Dindshenchas (Dublin Institute for Advanced Studies, 1903-1935) e nel materiale folklorico del Munster documentato da Patrick Weston Joyce.

Il ruolo di Ana come "nutrice degli dèi" — l'epiteto con cui il Sanas Cormaic la presenta — è nella mitologia irlandese il ruolo più fondamentale possibile: non la dea che combatte, né la dea che profezia, né la dea che crea oggetti magici, ma la dea che nutre, che mantiene in vita, che garantisce l'abbondanza su cui tutto il resto si fonda. Questa funzione di nutrice cosmica la colloca in una classe di divinità femminili pan-indoeuropee che Jan Gonda (The Dual Deities in the Religion of the Veda, North-Holland, 1974) ha analizzato come "dee dell'abbondanza primaria": Aditi nella tradizione vedica (la madre illimitata degli Āditya), Frigg nella tradizione norrena (la grande madre degli Æsir), Hera nella tradizione greca nella sua funzione di dea del nutrimento olimpico. In ciascuna tradizione, la dea madre non agisce nella narrazione mitologica ma è la condizione ontologica che rende possibile l'azione degli altri dèi.

La relazione tra Ana e la sovranità del Munster ha la struttura del sacro matrimonio tra la dea della terra e il re che la governa: il re ottiene legittimità dalla dea e la dea offre la propria abbondanza alla comunità attraverso il re. Questa struttura — analizzata da Máire Herbert (Iona, Kells and Derry, Clarendon Press, 1988) come il meccanismo fondamentale della sacralità regale celtica — è visibile nella forma delle colline stesse: le Dá Chích Anann viste dal piano sono i seni di una donna gigantesca distesa sulla terra, e il re del Munster che governa il territorio "succhia" simbolicamente l'abbondanza di quella nutrice cosmica. Il paesaggio è il contratto politico-religioso tra la dea e il suo popolo scritto nella pietra e nella terra, leggibile da qualunque punto della pianura sottostante. Quando le stagioni erano abbondanti, era Ana che nutriva il Munster; quando c'era carestia, era Ana che tratteneva il latte. La responsabilità del re era mantenere il proprio patto con la dea — attraverso giustizia, generosità e rispetto del territorio — per garantire che la nutrice cosmica continuasse a nutrire.`,
    },
    versions: [
      {
        era: "Lebor Gabála Érenn",
        name: "L'eponima dei Tuatha",
        text: "Il Libro delle Invasioni afferma che i Tuatha Dé Danann prendono il nome da Danu, ma non ne racconta la vita. La menziona come madre dei tre dèi-artigiani supremi: Brian, Iuchar e Iucharba. Altre genealogie la rendono madre anche del Dagda, creando una struttura familiare incoerente ma simbolicamente potente: Danu è la Madre assoluta, logicamente antecedente a ogni generazione.",
      },
      {
        era: "Anu — la variante",
        name: "La dea dei 'Paps of Anu'",
        text: "Il Glossario di Cormac identifica Anu con 'la madre degli dèi dell'Irlanda'. I 'Paps of Anu' (Dá Chích Anann, 'i due seni di Anu') sono due colline vicino a Killarney che dalla distanza sembrano davvero seni femminili, con due piccoli tumuli di pietre sulla sommità che richiamano i capezzoli. Ancora oggi sono meta di pellegrinaggio popolare.",
      },
      {
        era: "Don gallese",
        name: "La sorella brittonica",
        text: "Nel Mabinogion gallese la stessa Grande Madre appare come Don, madre di Gwydion, Arianrhod, Gilfaethwy e Gofannon. Come Danu, non è protagonista di episodi ma fonte genealogica del pantheon. L'equivalenza Danu-Don è filologicamente certa.",
      },
      {
        era: "Tradizione vedica — Dānu",
        name: "La madre dei Danavas",
        text: "Il Rig Veda conosce una Dānu madre dei Danava (demoni primordiali), parola da radice *dānu- 'acqua corrente'. Questa convergenza Danu irlandese - Dānu vedica è per molti studiosi prova di una comune divinità indoeuropea della fertilità acquatica, antecedente alla separazione dei popoli.",
      },
    ],
    cult: `I 'Paps of Anu' nel Kerry sono il principale luogo sacro: due colline a forma di seni di donna, alte ca. 690 m, tuttora riconoscibili. Sul sommo dei 'capezzoli' ci sono due cairns neolitici (ca. 2500 a.C.) che testimoniano un culto preistorico; la tradizione folklorica popolare li ha conservati come sacri ancora in epoca recente.

Il fiume Boyne e il fiume Shannon — due dei maggiori d'Irlanda — sono entrambi femminili nella mitologia (Boann, Sionnan), e sono probabilmente epifanie regionali della stessa Grande Madre acquatica. L'intera idrografia europea 'Danu' (Don, Dnepr, Dnestr, Donau/Danubio) sembra rivelare una rete paneuropea di venerazione della stessa dea-fiume.

Il culto di Danu non è stato sincretizzato nel cristianesimo come quello di Brigid: è rimasto 'sotterraneo', incorporato nell'idea generica di 'Madre Terra', 'Madre Irlanda' (Éire-Mother-Ireland), 'la Vecchia' (Cailleach).`,
    influence: [
      {
        era: "L'idrografia paneuropea",
        text: "La più estesa memoria di Danu è iscritta nei nomi dei fiumi d'Europa. Danubio (Donau/Dunărea/Дунав), Don russo, Dnepr, Dnestr, Donets — tutti dalla stessa radice proto-indoeuropea *dānu-. Se l'identificazione è corretta, Danu è la divinità con la più vasta impronta toponimica d'Europa, testimonianza di un culto paneuropeo preistorico.",
      },
      {
        era: "Mother Ireland",
        text: "Nella tradizione politico-poetica irlandese, l'Irlanda stessa è personificata come donna — la 'Sean-Bhean Bhocht' (la povera vecchia), la 'Cathleen ni Houlihan'. Questa identificazione dell'isola con una dea femminile è eredità diretta della teologia matronale di Danu/Éire.",
      },
      {
        era: "Neopaganesimo e spiritualità terrestre",
        text: "Nel movimento Goddess Revival (dagli anni '70, con Marija Gimbutas) Danu è una figura centrale come prototipo della Grande Madre indoeuropea prepatriarcale. Non essendo sovrapposta ad alcuna santa cristiana, è rimasta 'libera' per il neopaganesimo.",
      },
    ],
    texts: [
      {
        title: "Sanas Cormaic",
        source: "Cormac mac Cuilennáin, ca. 900",
        text: "Ana, cioè la madre degli dèi dell'Irlanda. Essa nutriva bene gli dèi. Dal suo nome sono detti 'Dá Chích Anann' ('i due seni di Ana') sopra Luachair Dedad. E ancora è detta madre degli dèi.",
      },
      {
        title: "Lebor Gabála Érenn — dei Tuatha Dé",
        source: "Compilazione anonima, XI-XII sec., da materiali più antichi",
        text: "I Tuatha Dé Danann, figli della dea Danu, vennero dalle isole a nord del mondo dove avevano studiato la scienza e la magia, la druidia e i sortilegi, finché non divennero abili in ogni arte e conoscenza. Arrivarono in Irlanda in nuvole oscure, sbarcando sui monti di Conmaicne Rein a Connacht, e oscurarono il sole per tre giorni e tre notti.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     6. MANANNÁN MAC LIR
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "manannan",
    name: "Manannán mac Lir",
    role: "Signore del Mare e dell'Altro Mondo",
    tags: ["Mare", "Altro Mondo", "Magia", "Isola di Man"],
    epithet:
      "Figlio del Mare, Sovrano di Tír na nÓg, Traghettatore delle Anime",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Mare", "Tír na nÓg", "Isola di Man"],
    heroColor: "linear-gradient(160deg,#051020,#10355c,#040812)",
    bio: {
      main: `Manannán mac Lir — "Manannán figlio del Mare" (da mac, "figlio", e Lir, "il mare, l'oceano" — Lir non come personaggio narrativo dotato di propria mitologia ma come principio cosmico personificato, l'oceano stesso come padre) — è il signore degli oceani, delle isole sacre e dell'Altro Mondo nella mitologia irlandese, e una delle figure divine più antiche, più geograficamente diffuse e più narrativamente ricche dell'intera tradizione celtica insulare. La sua antichità è confermata dalla distribuzione del nome attraverso tutta l'area celtica: compare come Manannán nell'irlandese medievale, come Manawyddan fab Llŷr nel gallese del Mabinogion (Terzo Ramo, trad. Sioned Davies, Oxford University Press, 2007), come Manannan Beg mac y Leirr nel corpus folklorico mannese — tre tradizioni linguisticamente distinte che convergono sullo stesso principio divino, il dio del mare come sorgente e confine dell'Altro Mondo.

La genealogia di Manannán — figlio non di una divinità antropomorfa ma dell'oceano come elemento — lo colloca immediatamente fuori dalle gerarchie del pantheon ordinato: non è dei Tuatha Dé Danann nel senso in cui lo sono il Dagda o Lugh, ma è piuttosto loro alleato e custode, la figura che gestisce il confine tra il cosmo divino e quello umano dopo che la separazione è avvenuta. Il Lebor Gabála Érenn (trad. Macalister, 1938-1956) lo presenta come il re dei Tuatha Dé nel periodo tra la loro sconfitta da parte dei Milesi e il definitivo ritiro nei sídhe: è Manannán che divide i tumuli fatati tra gli dèi sconfitti, che stende il Féth Fíada (il "velo della presenza", la nebbia magica che rende i Tuatha Dé invisibili ai mortali), che organizza il ritiro ordinato del pantheon dal mondo visibile. Non è il padre del pantheon ma il suo traghettatore — la figura che gestisce il passaggio tra le ere cosmiche.

La sua sposa principale è Fand ("perla dell'abbondanza"), dea del mare e dell'Altro Mondo con cui condivide il governo di Tír na nÓg, la Terra della Giovinezza Eterna. Il figlio più noto è Mongán mac Fiachnai — nato da un'unione con la moglie di un re mortale — che nella tradizione è presentato come reincarnazione di Finn mac Cumhaill e come figura di confine tra il divino e l'umano. Manannán ha anche un figlio adottivo di straordinaria importanza mitologica: Lugh, che alleva e addestra prima che il dio solare giunga a Tara a rivelare la propria natura.

La funzione cosmica di Manannán è triplice: è signore del mare nella sua dimensione fisica (governa le tempeste e le bonacce, permette o impedisce la navigazione), signore dell'Altro Mondo (amministra Tír na nÓg, Emain Ablach, l'Isola dei Meli, le isole beate dell'ovest), e gestore del confine tra i mondi (il mantello che crea il Féth Fíada, la barca Sguabtuinne che attraversa il mare-non-mare tra i regni). I suoi oggetti magici sono tra i più elaborati del pantheon: la spada Fragarach ("Risposta") che taglia ogni armatura e costringe la verità; il mantello dell'invisibilità; lo scudo Sgiath Gailbhinn; il cavallo Enbarr che corre sul mare come sulla terra; la barca senza remi. Il suo colore sacro è il blu-verde del mare atlantico; il suo numero non è codificato esplicitamente; i suoi animali sono i cavalli marini e le gru.`,

      sub1: `Il Féth Fíada e il ritiro dei Tuatha Dé`,
      text1: `Il mito del Féth Fíada — il "velo della presenza" o "nebbia della presenza" che Manannán stende tra il mondo dei Tuatha Dé sconfitti e quello dei Milesi vincitori — è il momento cosmologico fondamentale in cui il pantheon irlandese cessa di essere visibile e diventa l'invisibile substrate del cosmo che continuerà a influenzare il mondo umano attraverso il folklore, i luoghi sacri e i momenti liminali del calendario. La fonte principale è il Lebor Gabála Érenn (trad. Macalister, 1938-1956), con integrazioni nel Cath Fintrágha e nel Metrical Dindshenchas (trad. Gwynn, Dublin Institute for Advanced Studies, 1903-1935).

Dopo la battaglia di Tailtiu — l'ultima delle invasioni mitologiche d'Irlanda, in cui i Milesi sconfissero i Tuatha Dé Danann e presero possesso dell'isola — fu stipulato un accordo cosmologico: l'Irlanda fu divisa in due regni sovrapposti. I Milesi prendevano il mondo visibile sopra la superficie della terra; i Tuatha Dé ricevevano il mondo sotto la superficie — i sídhe, i tumuli, le colline fatate, le sorgenti sacre. Manannán fu il primo a scegliere la propria dimora sotterranea — il Brú na Bóinne di Newgrange, prima di cedere poi ad Aengus Óg — e il primo a stendere il Féth Fíada, la nebbia magica che rendeva i Tuatha Dé invisibili agli occhi umani ordinari.

Il Féth Fíada non è solo invisibilità: è una qualità di presenza diversa, una frequenza d'essere che i mortali non possono percepire se non in certi momenti privilegiati — al crepuscolo, a Samhain, ai guadi, nei luoghi di confine. La tradizione gaelica costruisce attorno a questa concezione l'intera topografia del soprannaturale: i sídhe non sono luoghi fisicamente distinti dalla terra ordinaria ma la stessa terra percepita attraverso il velo abbassato di Manannán. Il folklore irlandese medievale e moderno — documentato estensivamente dalla Irish Folklore Commission (UCD Folklore Collection, 1935-1970) — conserva la credenza che in certi luoghi il velo si assottigliasse: colline specifiche, laghi, fonti, crocevia. Questi luoghi sono quelli dove Manannán ha lasciato il suo mantello aperto, dove il confine tra i mondi è più sottile e la percezione del divino più accessibile.

Proinsias Mac Cana (Celtic Mythology, Newnes Books, 1983) ha analizzato il Féth Fíada come la soluzione teologica celtica al problema della scomparsa degli dèi: invece di morire o ascendere in un cielo remoto, gli dèi irlandesi rimangono presenti ma invisibili, immanenti nel paesaggio e nella vita quotidiana. Questa soluzione — radicalmente diversa da quella greco-romana (gli dèi sull'Olimpo, separati dagli uomini) o da quella nordica (gli dèi nell'Ásgarðr) — crea una religiosità di intimità paesaggistica in cui il sacro non è lontano ma adiacente, separato dalla vita ordinaria da uno strato sottile di percezione che il rituale, il racconto e il rispetto del luogo possono assottigliare.`,

      sub2: `Tír na nÓg e la concezione celtica dell'Altro Mondo`,
      text2: `Tír na nÓg — "la Terra della Giovinezza" (da tír, "terra, territorio", na, "della", e óg, "giovane, eterno") — è la più famosa delle isole dell'Altro Mondo nella tradizione mitologica irlandese, e il dominio principale di Manannán mac Lir come sovrano dello spazio oltre il mare occidentale. Non è un paradiso nel senso cristiano né un regno dei morti nel senso greco: è una dimensione parallela del reale in cui il tempo scorre diversamente (un giorno là equivale a cento anni qui), l'abbondanza è perpetua, la vecchiaia e la malattia non esistono, la bellezza non appassisce. La fonte narrativa più elaborata per Tír na nÓg è il ciclo degli immrama — i "viaggi per mare" — di cui l'Immram Brain maic Febail (VIII sec., trad. Kuno Meyer, Voyage of Bran Son of Febal, David Nutt, 1895) è il più antico e il più denso teologicamente.

Nell'Immram Brain, Manannán appare a metà del viaggio come figura cosmicamente rivelatrice: incontra la barca di Bran in mezzo al mare e gli canta la propria visione del reale — che è radicalmente diversa da quella di Bran. Ciò che per Bran è oceano salato e pericoloso è per Manannán una pianura fiorita su cui corre in carro; ciò che per Bran sono onde bianche spumeggianti è per Manannán fiori che sbocciano; ciò che per Bran è il vuoto buio del fondo marino è per Manannán un bosco di querce. Il testo del canto di Manannán — nella traduzione di Meyer (1895) — è uno dei passi poeticamente più straordinari della letteratura irlandese arcaica: "Ciò che a Bran è un mare trasparente / sul quale la sua barca rema / a me è una pianura fiorita / dove corro in un carro a due ruote. / Ciò che a Bran sono onde splendenti / che mostrano la loro bianchezza nel collidere / a me sono fiori appena sbocciati / senza macchia, dall'orlo intatto."

La visione cosmologica sottostante a questo canto è quella di una realtà multipla: il mare e la pianura, le onde e i fiori, sono la stessa sostanza percepita attraverso sistemi di percezione diversi. Manannán non abita un luogo diverso da quello di Bran — abita la stessa sostanza in una modalità diversa. John Carey (A Single Ray of the Sun, Celtic Studies Publications, 1999) ha analizzato questa concezione come "pluralità ontologica": il cosmo celtico non è diviso in piani distinti (terra, cielo, inferi) ma in modalità di percezione della stessa realtà, accessibili attraverso stati di coscienza diversi. Tolkien, che conosceva bene la tradizione irlandese attraverso la filologia medievale, ha trasformato questa struttura nella distinzione tra la Terra di Mezzo "percepita ordinariamente" e Valinor "percepita nella pienezza elfica" — non luoghi separati ma la stessa terra vista con occhi diversi.`,

      sub3: `L'Immram Brain e il viaggio nell'Altro Mondo`,
      text3: `L'Immram Brain maic Febail — "Il Viaggio di Bran figlio di Febal" — è il più antico dei racconti di viaggio per mare irlandesi (immrama), datato all'VIII secolo nella sua forma scritta ma probabilmente contenente materiale orale molto più antico, e il testo in cui la teologia di Manannán come sovrano dell'Altro Mondo e mediatore tra i mondi si esprime con la maggiore precisione e bellezza poetica. La traduzione di Kuno Meyer (Voyage of Bran Son of Febal, David Nutt, 1895) rimane il riferimento filologico principale; traduzioni letterarie moderne in Seamus Heaney (Sweeney Astray, Faber, 1983) e in John Carey (Ireland and the Grail, 2007).

Il viaggio inizia con un evento soprannaturale tipico della letteratura celtica: Bran mac Febail si trova solo in un campo quando sente musica soprannaturalmente dolce che lo addormenta. Al risveglio trova vicino a sé un ramo di melo argenteo con fiori di cristallo bianco — il ramo dell'Altro Mondo, il simbolo delle isole beate a ovest. Una donna dell'Altro Mondo appare e gli canta cinquanta quartine che descrivono Emain Ablach, l'isola di Manannán, come un luogo di meraviglie senza vecchiaia né morte. Il giorno dopo Bran salpa con ventisette compagni verso ovest, verso il tramonto.

L'incontro con Manannán a metà del viaggio è il cuore cosmologico del testo: il dio appare in carro sul mare (percepito da lui come pianura) e rivela a Bran la propria visione del reale, già citata nel sub precedente. Ma la rivelazione include anche una profezia: Manannán predice la nascita di Mongán, il figlio che concepirà con la moglie di Fiachna Finn, e il destino di questo figlio come figura di confine tra il divino e l'umano. Il viaggio di Bran si conclude nell'isola delle donne (Tír na mBan, strettamente connessa a Tír na nÓg) dove Bran e i compagni trascorrono quello che sembra un anno ma è in realtà molto di più. Al tentativo di tornare in Irlanda, uno dei compagni salta sulla riva e si dissolve in cenere — il tempo dell'Altro Mondo ha già consumato i suoi anni terrestri. Bran non torna: rimane sospeso tra i mondi, e l'ultima immagine del testo è la sua barca che si allontana di nuovo verso ovest. Myles Dillon (Early Irish Literature, University of Chicago Press, 1948) ha analizzato l'Immram Brain come "il documento più puro della concezione celtica dell'immortalità: non trascendenza del tempo ma immersione in una dimensione diversa del tempo, non fuga dalla morte ma ingresso in una modalità di essere in cui la morte non ha accesso".`,

      sub4: `Mongán mac Fiachnai e la paternità divina`,
      text4: `Il mito di Mongán mac Fiachnai — il figlio che Manannán concepisce con la moglie di un re mortale durante l'assenza in guerra del marito — è uno dei testi più complessi e narrativamente stratificati della tradizione irlandese, e la sua complessità dipende dalla sovrapposizione di tre livelli di identificazione: Mongán come figlio di Manannán, come reincarnazione di Finn mac Cumhaill, e come personaggio storico identificato con Mongán mac Fiachnai, re di Dal Fiatach nel nord dell'Irlanda morto intorno al 625 d.C. Questa triplice identità — divino, mitico e storico — fa di Mongán uno dei punti di fusione più significativi tra mitologia e storia nella letteratura gaelica medievale. Le fonti principali sono il Fled Dúin na nGéd e la Comrac Líadaine ocus Cuirithir (entrambi mss. del XII sec., trad. parziali in Kuno Meyer, Fianaigecht, Royal Irish Academy, 1910).

La nascita di Mongán segue lo schema del figlio divino generato da un padre soprannaturale e da una madre mortale — struttura che nella mitologia irlandese ha numerosi paralleli (la nascita di Cú Chulainn da Lugh e Deichtine, la nascita di Cormac mac Airt da un lupo divino) e che nella tradizione indoeuropea allargata comprende la nascita di Achille, di Enea, di Krishna. Manannán appare al re Fiachna Finn che sta per essere sconfitto in battaglia e gli offre aiuto in cambio della possibilità di giacere con sua moglie quella notte. Il re accetta — la vita della comunità vale più della fedeltà coniugale nella gerarchia dei valori eroici irlandesi. Manannán va alla moglie di Fiachna nella forma del marito stesso, e Mongán è concepito.

Mongán cresce come uomo di eccezionali capacità — poeta, mago, conoscitore del passato e del futuro — e le sue dispute poetiche con i filid (i poeti-veggenti) sono tra gli episodi più vivaci e ironicamente costruiti della letteratura irlandese arcaica. In una disputa famosa, un ollam (poeta di grado supremo) sostiene che Caílte mac Rónáin aveva ucciso Fothad Airgtenn in una certa battaglia; Mongán nega con certezza assoluta. L'ollam minaccia di satira il re se non è smentito entro tre giorni. Mongán aspetta: al terzo giorno appare Caílte stesso dall'Altro Mondo a testimoniare — e Mongán rivela di ricordare personalmente l'evento perché era presente, nella propria vita come Finn mac Cumhaill. Kim McCone (Pagan Past and Christian Present, Maynooth, 1990) ha analizzato la figura di Mongán come la "soluzione irlandese" al problema dell'autorità del sapere poetico: la memoria dell'Altro Mondo — trasmessa attraverso la reincarnazione o la discendenza divina — è l'unica forma di conoscenza che può testimoniare il passato con certezza assoluta.`,
    },
    versions: [
      {
        era: "Ciclo Mitologico",
        name: "L'ultimo sovrano dei Tuatha Dé",
        text: "Dopo la sconfitta di Tailtiu per mano dei Milesi, sono Manannán e il Dagda che decidono di dividere i sídhe (i tumuli) tra gli dèi sconfitti, nascondendoli al mondo umano. Manannán stesso sceglie di ritirarsi a Emain Ablach ('Isola dei Meli', la proto-Avalon irlandese) e diventa il signore dell'Altro Mondo e il gestore del Féth Fíada, il 'velo della presenza' che rende gli dèi invisibili ai mortali.",
      },
      {
        era: "Immram Brain (Viaggio di Bran)",
        name: "Il canto profetico al navigatore",
        text: "Nel Immram Brain (ca. VIII sec.), uno dei più antichi racconti di viaggio irlandesi, Manannán incontra Bran mac Febail in mezzo al mare e gli canta di come lui stesso veda non acque ma una pianura fiorita, popolata di carri e cavalli. È il motivo del 'doppio mare': ciò che è oceano salato per i mortali è prato fiorito per gli dèi. Manannán predice a Bran un figlio divino, Mongán, che nascerà da una mortale.",
      },
      {
        era: "Ciclo dell'Ulster",
        name: "Il padre magico di Mongán",
        text: "Manannán seduce la moglie del re Fiachna mentre questi è in guerra, promettendo che il figlio concepito sarà il più glorioso. Mongán nasce come 'figlio dei due padri'. Nella tradizione medievale Mongán è identificato con una figura storica (un re dell'Ulster del VII sec. d.C.), creando un ponte tra divinità mitologica e storia.",
      },
      {
        era: "Cultura mannese",
        name: "Il patrono dell'Isola di Man",
        text: "L'Isola di Man custodisce tradizioni di Manannán più vive che l'Irlanda stessa. Il Tynwald (parlamento più antico d'Europa, attivo dal 979) è ancora aperto il 5 luglio con rituali che i mannesi riconoscono come eredità di Manannán. Le tradizioni locali dicono che Manannán avvolgeva l'isola di nebbia tre volte all'anno per proteggerla dagli invasori, e ancora oggi ogni nebbia persistente sul mare è detta 'il mantello di Manannán'.",
      },
    ],
    cult: `Il centro di culto primario è l'Isola di Man, il cui nome stesso (Ellan Vannin in mannese) deriva da Manannán. Sulla collina di Snaefell, sul South Barrule e presso la tomba di Peel Hill si celebravano riti che le cronache medievali ricordano come offerte 'al vecchio dio del mare'. Il Tynwald Day (5 luglio) conserva elementi rituali di origine precristiana attribuiti a Manannán.

In Irlanda, le isole Aran e tutti i luoghi di costa occidentale sono a lui sacri. Il promontorio di Moher e le scogliere di Dunquin sono descritti nella tradizione come luoghi 'dove si vede il mantello di Manannán'. I pescatori irlandesi fino al XIX secolo offrivano tributi simbolici (un pezzo di pesce, un sorso di whiskey versato in mare) 'al Re del Mare'.

La sua più vasta manifestazione cultuale non è un tempio ma il mare stesso: era il dio che bisognava placare per navigare.`,
    influence: [
      {
        era: "Manawydan gallese",
        text: "In Galles Manannán diventa Manawydan fab Llŷr (Manawydan figlio di Llŷr = del Mare), protagonista del Terzo Ramo del Mabinogion. È mago, artigiano (fabbricante di calzature, sellaio) e saggio mediatore. La figura gallese conserva la magia e la mediazione, perde parzialmente il dominio marino.",
      },
      {
        era: "Tradizione mannese moderna",
        text: "Nell'Isola di Man Manannán è figura identitaria centrale: è rappresentato sullo stemma nazionale (la triskele delle tre gambe), nei toponimi (Port St Mary = Port le Murray = Port di Manannán), nell'arte contemporanea. È forse il solo dio celtico che ha conservato continuità culturale ininterrotta dal paganesimo fino all'identità nazionale moderna.",
      },
      {
        era: "Tír na nÓg e il motivo celtico dell'Altro Mondo",
        text: "Manannán è il dio che più di ogni altro definisce la concezione celtica dell'Altro Mondo: non luogo di morti ma dimensione parallela dove il tempo non scorre, la giovinezza è eterna, l'abbondanza perpetua. Questo archetipo 'isola a occidente' passa nell'Avalon arturiana, nei 'paradisi delle antipodi' medievali, fino a San Brendano e oltre, fino a Tolkien (le Terre Immortali degli elfi).",
      },
      {
        era: "Mananaan nel folklore",
        text: "La frase mannese 'Manannán's cloak' per nebbia sul mare, la 'Mananan's Journey' come ciclo annuale, il detto 'Manannán attende sulla riva' per la morte imminente — sono tutti elementi folklorici vivi nel XX e XXI secolo. Nella letteratura moderna lo troviamo in James Joyce (Ulysses), in Neil Gaiman (American Gods), nella fantasy contemporanea.",
      },
    ],
    texts: [
      {
        title: "Immram Brain — il canto di Manannán",
        source:
          "Immram Brain maic Febail, ca. VIII sec., trad. Kuno Meyer (1895)",
        text: "Manannán figlio di Lir parlò così a Bran mentre cavalcava sul mare: 'Ciò che a Bran è un mare trasparente / sul quale la sua barca rema / a me è una pianura fiorita / dove corro in un carro a due ruote. / Ciò che a Bran sono onde splendenti / che mostrano la loro bianchezza nel collidere / a me sono fiori appena sbocciati / senza macchia, dall'orlo intatto.'",
      },
      {
        title: "La profezia su Mongán",
        source: "Immram Brain, §52-53, trad. dal medio irlandese",
        text: "'Un figlio sarà a te, o donna! Lo chiameranno Mongán figlio di Fiachna. E veramente sarà mio figlio: perché io, Manannán figlio di Lir, sono suo padre. Egli sarà breve: cinquant'anni soltanto nel mondo dei vivi. Un drago da una pietra lo ucciderà nel campo di battaglia di Senlabair. Egli sarà la gioia di tutte le genti, il favorito di ogni terra.'",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     7. NUADA AIRGETLÁM
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "nuada",
    name: "Nuada Airgetlám",
    role: "Re dei Tuatha Dé Danann, Dal Braccio d'Argento",
    tags: ["Sovranità", "Re Sacro", "Spada", "Menomazione rituale"],
    epithet: "Nuada dal Braccio d'Argento, Sovrano Perduto e Ritrovato",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Re Sacro", "Mag Tuired", "Spada di Luce"],
    heroColor: "linear-gradient(160deg,#1a1a20,#3a3a48,#0a0a10)",
    bio: {
      main: `Nuada — il cui nome deriva con certezza filologica dalla radice proto-celtica *noudont- o *noudent-, ricostruita da Julius Pokorny (Indogermanisches etymologisches Wörterbuch, Francke, 1959) e da Calvert Watkins (American Heritage Dictionary of Indo-European Roots, Houghton Mifflin, 2000) come connessa alla radice *neu-d-, "afferrare, catturare, pescare" — significa dunque "il Catturatore" o "il Pescatore", con un'ambivalenza semantica (cacciatore-pescatore) che riflette la sua doppia natura di sovrano guerriero e di dio delle acque curative. La corrispondenza con il britannico Nodens — attestata con assoluta certezza filologica nelle iscrizioni del tempio romano di Lydney Park (Gloucestershire, III-IV sec. d.C.) dove il dio è chiamato Nodens nei votibi latini — e con il gallese Nudd (personaggio del Mabinogion e della tradizione arturiana come padre di Gwyn ap Nudd, re del Altro Mondo gallese) dimostra la pan-celticità del principio divino che Nuada incarna: il re sacro ferito, la cui menomazione fisica è al tempo stesso crisi cosmica e sorgente di guarigione.

La genealogia di Nuada nel sistema dei Tuatha Dé Danann è quella del re legittimo per eccellenza: è il primo sovrano che i Tuatha Dé abbiano dopo il loro arrivo in Irlanda, il re sotto cui combatterono la Prima Battaglia di Mag Tuired contro i Fir Bolg. Non ha una genealogia elaborata nelle fonti — non si menzionano i suoi genitori con frequenza — perché la sua identità è definita non dall'origine ma dalla funzione: è il re, e la regalità in sé è il suo attributo costitutivo. La sua sposa è Macha, nella versione del mito in cui la dea della sovranità territoriale si unisce al sovrano legittimo — un'unione che ha la struttura del sacro matrimonio tra il re e la terra che governa. Ha una sorella, Eriu, una delle tre dee eponime dell'Irlanda — connessione che radica ulteriormente Nuada nella sovranità del territorio irlandese come principio.

La funzione cosmica di Nuada è quella della regalità sacra nel suo aspetto più vulnerabile e più essenziale: è il re che deve essere fisicamente integro per garantire l'integrità cosmica del regno, e che perde questa integrità in battaglia, e che — attraverso la guarigione — la recupera. Questa struttura — il re ferito che non può regnare, la terra che si dissecca in sua assenza, la guarigione che ripristina l'ordine cosmico — è analizzata da Jessie Laidlay Weston (From Ritual to Romance, Cambridge University Press, 1920) come il nucleo mitico più antico del ciclo del Graal: il "Re Pescatore" ferito all'inguine o alla coscia, la cui ferita non-guarita produce la sterilità del "paese guasto", la cui guarigione è possibile solo attraverso la domanda giusta posta dall'eroe giusto. La connessione tra Nuada (il cui nome significa "pescatore") e il Re Pescatore del Graal è filologicamente e narrativamente così precisa da essere ormai un punto fermo della medievalistica celtico-arturiana.

L'iconografia di Nuada è quella della regalità guerriera: armato, con lo scettro della sovranità, con il braccio d'argento che sostituisce quello perduto in battaglia. La spada di Nuada — Claíomh Solais, la "Spada di Luce" o "Spada Fiammeggiante" — è uno dei quattro tesori cosmici dei Tuatha Dé, portata dalla città mitologica di Finias: una spada dalla quale nessun nemico può fuggire e dalla quale non si sopravvive alla ferita. Il suo colore sacro è l'argento — il metallo della luna, del confine, del valore guaritore — per il braccio sostitutivo che ne porta il nome. Il suo numero non è codificato esplicitamente nelle fonti, ma il tre — la triplice prova della sua regalità: perdita, sostituzione artificiale, reintegrazione — è implicitamente presente nella struttura della sua storia.`,

      sub1: `La Prima Battaglia di Mag Tuired e la perdita del braccio`,
      text1: `La Prima Battaglia di Mag Tuired — Cath Maige Tuired Cunga, "la Battaglia della Pianura di Mag Tuired del Combattimento Singolo", distinta dalla Seconda Battaglia (contro i Fomori) che è l'evento centrale del Cath Maige Tuired principale — è documentata nel Cath Maige Tuired Cunga (ms. del XIV sec. contenente materiale dell'VIII-IX sec., trad. John Fraser, Ériu VIII, 1916) e nei riassunti del Lebor Gabála Érenn (trad. Macalister, 1938-1956). È la battaglia in cui i Tuatha Dé Danann, appena arrivati in Irlanda, sconfissero i Fir Bolg — gli abitanti precedenti dell'isola — ma Nuada perse la mano destra nel duello con il campione Fir Bolg Sreng.

Il duello tra Nuada e Sreng è uno degli episodi eroici più elaborati della letteratura gaelica arcaica. I due campioni si incontrano prima della battaglia per un abboccamento diplomatico: si mostrano reciprocamente le armi, discutono le condizioni della battaglia, si rispettano come guerrieri. Sreng è descritto come possessore di armi particolarmente letali — lance larghe e affilate (cronebola) invece delle lance strette (sleg) dei Tuatha Dé — e Nuada propone un compromesso per evitare la battaglia. I Fir Bolg rifiutano. Quando i due si ritrovano in campo aperto, Sreng colpisce Nuada con un colpo di spada al braccio destro che lo recide di netto. Nuada sopravvive, i Tuatha Dé vincono la battaglia, ma il prezzo della vittoria è la menomazione del re.

La legge sacra celtica che emerge qui — un re fisicamente menomato non può regnare — è uno dei principi teologici più specifici e più difficilmente comparabili della tradizione celtica insulare. Trova un parallelo parziale nella tradizione vedica (il re deve essere fisicamente integro per compiere il sacrificio reale Ashvamedha), nella tradizione germanica (il re menomato è escluso dai riti) e nella concezione greca della kaloskagathos (il bello-e-buono come requisito della leadership). Ma la formulazione celtica è più esplicita e più conseguente: il testo del Cath Maige Tuired Cunga dice chiaramente "ní rígad fer dúailchech Érinn" — "non può essere re d'Irlanda un uomo con un difetto fisico". Questo principio non è un dettaglio narrativo ma una struttura cosmologica: il corpo del re è il corpo del territorio, e la salute del territorio dipende dall'integrità del re. Kim McCone (Pagan Past and Christian Present, Maynooth, 1990) ha analizzato come questa concezione abbia radici nella più antica religione delle comunità agricole: il re sacro come garante della fertilità della terra, la cui menomazione fisica si trasmette alla terra stessa come sterilità.`,

      sub2: `Il braccio d'argento di Dian Cécht: la prima protesi della letteratura mondiale`,
      text2: `La costruzione del braccio d'argento per Nuada da parte del dio-medico Dian Cécht — e la successiva sostituzione con un braccio di carne vera operata dal figlio Miach — è l'episodio che dà a Nuada il proprio epiteto (Airgetlám, "dal Braccio d'Argento") e che costituisce uno dei racconti più tecnologicamente e teologicamente affascinanti della letteratura celtica medievale. La fonte principale è il Cath Maige Tuired §§28-35 (trad. Elizabeth Gray, Irish Texts Society, 1982), dove l'episodio è narrato con una precisione quasi medica che ha attirato l'attenzione di studiosi di storia della medicina oltre che di mitologi.

Dian Cécht costruisce per Nuada un braccio d'argento che funziona perfettamente: ogni giuntura, ogni movimento, ogni vigore del braccio originale è replicato nel metallo. Il testo del Cath Maige Tuired descrive il braccio con ammirazione tecnica: "Si muoveva in ogni suo punto come il braccio di un uomo naturale." È, tecnicamente, la prima protesi funzionale descritta nella letteratura mondiale — precedente di molti secoli alle protesi di bronzo e ferro documentate dall'archeologia greco-romana, e precedente di millenni alle protesi meccaniche moderne. La scelta dell'argento — il metallo della luna, del confine, della guarigione nella tradizione celtica — non è casuale: l'argento è il materiale che media tra la vita e la non-vita, tra il corpo organico e il metallo inorganico, tra la ferita e la guarigione.

Ma Miach, figlio di Dian Cécht e medico più capace del padre, realizza qualcosa che il padre non aveva potuto fare: sostituisce il braccio d'argento con un braccio di carne vera, ricrescendo la carne sull'argento attraverso formule mediche-magiche recitate per nove giorni e nove notti. Il testo descrive il processo con il dettaglio di un trattato medico: "Giunto all'osso, unì osso all'osso. Giunto alla carne, unì carne alla carne. Giunto alle vene, unì vena a vena." Con questo intervento Nuada recupera la propria integrità fisica completa e può tornare al trono — ma Dian Cécht, umiliato dalla superiorità del figlio, lo uccide per gelosia professionale. L'episodio di Miach e Dian Cécht — narrato immediatamente dopo la guarigione di Nuada — è la tragedia del sapere che si autodistrugge: il dio-medico che uccide il discepolo-figlio più capace piuttosto che accettare di essere superato, perdendo così per tutti la conoscenza medica completa che Miach portava in sé e che le erbe nate dalla sua tomba avrebbero potuto trasmettere se Airmed avesse potuto classificarle prima che Dian Cécht le disperdesse.`,

      sub3: `Nodens di Lydney: il dio celto-romano e Tolkien`,
      text3: `Il tempio di Lydney Park — un complesso santuariale romano-britannico costruito sulla sommità di un promontorio panoramico sul fiume Severn nel Gloucestershire, datato al III-IV sec. d.C. e dedicato al dio Nodens — è la testimonianza materiale più importante del culto pan-celtico del principio divino che l'Irlanda conosce come Nuada. Le iscrizioni votive recuperate dagli scavi identificano esplicitamente il dio come "Nodens" (in un caso "Deo Nodenti"), e la struttura del santuario — con sala principale di culto, complesso termale, dormitori per l'incubatio terapeutica e officine votive — rivela la natura del culto: un dio della guarigione che riceve i pellegrini malati, che dormono nel suo tempio per ricevere sogni terapeutici (come nel culto di Asclepio greco), e che offrono ex-voto di bronzo in ringraziamento della guarigione. La fonte principale è Sir Mortimer Wheeler e T.V. Wheeler (Report on the Excavation of the Prehistoric, Roman, and Post-Roman Site in Lydney Park, Gloucestershire, Society of Antiquaries, 1932).

Gli ex-voto di Lydney includono — significativamente — numerose rappresentazioni di braccia in bronzo: un particolare che non sarebbe degno di nota in qualsiasi santuario romano della guarigione (la dedica di riproduzioni dell'organo guarito era pratica comune), ma che in questo contesto acquista una dimensione mitica precisa. Il dio il cui nome significa "il Pescatore" e il cui equivalente irlandese è il re "dal Braccio d'Argento" riceve offerte di braccia votive: il pellegrino che guarisce il proprio braccio rende omaggio al dio che ha recuperato il proprio. La circolarità tra il mito e il culto è perfetta e probabilmente consapevole nella comunità britannico-romana del III sec.

J.R.R. Tolkien — filologo medievalista di Oxford prima ancora che romanziere — fu invitato nel 1929 a contribuire al volume degli scavi di Lydney con un saggio etimologico su Nodens. Il saggio ("The Name 'Nodens'", in Wheeler & Wheeler, 1932) è un documento filologico preciso e sobrio, ma l'esperienza di Lydney lasciò tracce visibili nel legendarium tolkieniano. Christopher Tolkien (The History of Middle-earth, vol. XII, HarperCollins, 1996) ha documentato come elementi del sito — la "hall" del dio, l'atrium con il famoso mosaico del pescatore cosmico, l'aria di un dio antico e potente che "aspetta nella sua fortezza" — siano confluiti in elementi dell'immaginario tolkieniano: Númenor (la terra-isola occidentale che affonda, analoga all'Irlanda dei Tuatha Dé), Ulmo il Signore delle Acque (il cui rapporto con i mortali attraverso sogni e visioni rispecchia la struttura dell'incubatio di Lydney), e forse tratti di Manwë nella sua dimora sulla vetta del mondo. La filologia di Tolkien su Nodens è dunque non solo un contributo accademico ma una sorgente diretta per l'immaginazione mitologica che avrebbe prodotto Il Signore degli Anelli.`,

      sub4: `La morte in battaglia e il passaggio a Lugh`,
      text4: `La morte di Nuada nella Seconda Battaglia di Mag Tuired — ucciso da Balor dell'Occhio Malvagio nel momento culminante dello scontro tra Tuatha Dé e Fomori — è il momento in cui il principio della regalità sacra si trasmette dalla generazione del re ferito e guarito alla generazione del giovane eroe solare, e questa trasmissione attraverso la morte è la struttura teologica più profonda del mito di Nuada: non una sconfitta ma un passaggio necessario, il sacrificio del padre-re che permette al figlio-eroe di assumere il proprio ruolo cosmico. La fonte principale è il Cath Maige Tuired §§124-130 (trad. Gray, 1982).

Prima della battaglia, Nuada compie un atto di straordinaria consapevolezza cosmologica: cede simbolicamente il comando a Lugh. Il testo del Cath Maige Tuired descrive la scena con brevità e precisione: Lugh, arrivato a Tara, siede sul "Seggio della Sapienza" — il posto del re — e Nuada non protesta. Il "Seggio del Re" era la sedia da cui si governava, e cederlo a Lugh era il riconoscimento che il principio della regalità sacra si era ormai trasferito dal re-della-prima-generazione all'eroe-della-nuova-era. Nuada non abdicava per debolezza ma perché il suo compito — mantenere la coesione dei Tuatha Dé attraverso la crisi del regno di Bres, recuperare la propria integrità attraverso il braccio d'argento, guidare il pantheon fino all'arrivo del Samildánach — era compiuto.

In battaglia, Nuada cade per mano di Balor — il nonno di Lugh, il vecchio re del caos — prima che Lugh possa raggiungere il campo. La sua morte non è narrata con dettaglio nel Cath Maige Tuired: è menzionata quasi en passant, come se il testo sapesse che la vera storia non è la morte di Nuada ma ciò che accade subito dopo, quando Lugh uccide Balor con la pietra della fionda. Questa brevità non è negligenza narrativa ma teologia: Nuada ha già completato il proprio arco. Georges Dumézil (Mythe et Épopée, Gallimard, 1968) ha analizzato il passaggio Nuada-Lugh come la formulazione celtica del tema indoeuropeo del "re della prima funzione che cede al campione della seconda": il sovrano sacro che governa attraverso la legittimità e l'integrità fisica lascia il campo all'eroe guerriero che governa attraverso la vittoria militare. In termini duméziliani, Nuada è il Varuna celtico (il sovrano magico-sacerdotale della prima funzione) e Lugh è il suo Indra (il campione guerriero-solare della seconda funzione): la storia d'Irlanda si muove dalla prima alla seconda funzione, dal re-druido all'eroe-guerriero, seguendo la logica indoeuropea del ricambio generazionale cosmico.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired Cunga (Prima Battaglia)",
        name: "Il re mutilato",
        text: "Nella prima battaglia contro i Fir Bolg, Nuada combatte il campione Sreng in un duello eroico. Sreng gli recide la mano destra con un colpo di spada. Nuada sopravvive grazie ai suoi uomini, ma deve rinunciare al trono. Il Lebor Gabála dice: 'Non poteva un uomo con una mutilazione restare re di Irlanda.' È una delle più esplicite formulazioni del principio celtico dell'integrità sacra del re.",
      },
      {
        era: "Il braccio d'argento di Dian Cécht",
        name: "La prima protesi della letteratura mondiale",
        text: "Dian Cécht, dio della medicina, costruisce per Nuada un braccio d'argento completamente funzionante — probabilmente la prima 'protesi' menzionata nella letteratura occidentale. Il figlio di Dian Cécht, Miach, più abile del padre, costruisce successivamente un braccio di carne vera ricoperto di pelle. Geloso della superiorità del figlio, Dian Cécht uccide Miach a colpi di spada sulla testa — e dalla sua tomba nasceranno le 365 erbe medicinali, ciascuna corrispondente a una giuntura o nervo del corpo umano.",
      },
      {
        era: "Seconda Battaglia di Mag Tuired",
        name: "La morte in battaglia",
        text: "Tornato al trono, Nuada guida i Tuatha Dé nella battaglia finale contro i Fomori, ma non è più il campione di un tempo. Lugh è già arrivato a Tara e lo spinge, prima della battaglia, a cedergli simbolicamente il comando — riconoscendo che la nuova era richiede un nuovo sovrano. Nuada cade in battaglia per mano del proprio nonno di Lugh, Balor: è il vecchio re che cede al giovane eroe solare. La trasmissione del potere avviene attraverso la morte del padre-sovrano.",
      },
      {
        era: "Nodens britannico",
        name: "Il dio romano-britannico di Lydney",
        text: "Nel tempio di Lydney Park (Gloucestershire, III sec. d.C.) è venerato Nodens — divinità celto-romana della guarigione. Le iscrizioni lo associano a Marte, a Silvano e a Nettuno. L'identificazione Nodens = Nuada è filologicamente certa (*noudont-) e mostra la paneuropeità del dio. A Lydney sono stati trovati ex-voto di bronzo a forma di braccio — probabilmente riferimenti al 'braccio perduto e ritrovato' di Nuada/Nodens. J.R.R. Tolkien, filologo di Lydney, lavorò al sito nel 1929 e dal tempio ricavò ispirazione per Middle-earth.",
      },
    ],
    cult: `Il tempio di Lydney Park in Gloucestershire è la testimonianza archeologica più importante del culto di Nuada/Nodens: un grande complesso templare romano-britannico del III-IV sec. con sala di culto, complesso termale, dormitori per pellegrini (incubatio terapeutica) e officina votiva. Il dio era invocato contro cecità, lebbra e ferite.

In Irlanda i centri del suo culto sono meno evidenti archeologicamente, ma le genealogie medievali mostrano che numerose dinastie reali si dichiaravano discendenti di Nuada — rivendicando la sovranità sacra. Il monte di Uisneach e il sito di Tara, cuore politico-religioso d'Irlanda, sono entrambi collegati al suo culto.

L'oggetto sacro associato a Nuada è la spada di luce — Claidheamh Solais — uno dei quattro tesori dei Tuatha Dé (insieme al calderone del Dagda, alla pietra di Fál e alla lancia di Lugh). Essa non sbaglia mai il colpo.`,
    influence: [
      {
        era: "Il Re Ferito e il Graal",
        text: "L'archetipo di Nuada — re mutilato la cui ferita produce la sterilità della terra, sanabile solo da un nuovo giovane eroe — è la matrice più antica del motivo del 'Re Pescatore' nel ciclo del Graal. Nodens significa 'il pescatore', e il Re Pescatore di Chrétien de Troyes (Perceval, ca. 1180) presenta una ferita all'anca o alla coscia che immobilizza il sovrano e consuma la terra. Jessie Weston (From Ritual to Romance, 1920) e più tardi Jean Markale hanno sviluppato estesamente questa genealogia mitica celtica → arturiana.",
      },
      {
        era: "Tolkien e Nodens",
        text: "Tolkien lavorò al sito di Lydney nel 1929 e scrisse per il volume archeologico un saggio etimologico su 'Nodens'. L'esperienza lo segnò profondamente: alcuni elementi del tempio (la hall, l'atrium con mosaico, il 'signore del luogo') confluiscono nella descrizione di luoghi di Middle-earth. Nodens stesso sembra aver ispirato tratti di Aulë il Fabbro e di Manwë nel legendarium.",
      },
      {
        era: "Il principio dell'integrità del re",
        text: "Il principio Nuadico ('un re non può essere mutilato') si trova in forma speculare in tutta l'area indoeuropea: Odino si acceca un occhio, Tyr perde la mano, Varuna è un dio legato, Tyrteo invoca la menomazione rituale. Dumézil ha letto in queste figure la 'sovranità oscura' — il re magico che paga con una parte di sé il potere totale sul cosmo.",
      },
    ],
    texts: [
      {
        title: "La mutilazione di Nuada (Prima Battaglia)",
        source:
          "Cath Maige Tuired Cunga, Book of Leinster, trad. Fraser (1915)",
        text: "Nuada e Sreng si scontrarono nel punto del campo dove stavano i Fir Bolg più forti. Ciascuno colpì l'altro con mille colpi. Alla fine Sreng piantò la spada sulla mano destra di Nuada, e la tagliò al polso. Cadde lì la mano con tutto ciò che su di essa c'era di grande, di nobile, di sovrano: il braccio da un guerriero d'Irlanda. I Tuatha Dé lo raccolsero e lo portarono in tenda. Dian Cécht venne e gli mise un braccio d'argento, con movimento in ogni dito e ogni giuntura.",
      },
      {
        title: "Nuada cede a Lugh",
        source: "Cath Maige Tuired, §80, trad. dal medio irlandese",
        text: "'Tuo padre era Cian figlio di Dian Cécht; tua madre era Ethne figlia di Balor. Tu sei il nostro salvatore.' Allora Nuada si alzò dal suo seggio reale e lo offrì a Lugh; perché Nuada riconobbe che Lugh era il campione che li avrebbe liberati dai Fomori. E Lugh sedette sul seggio reale al posto di Nuada, e fu re per tredici giorni, dopo i quali tornò a Nuada il comando per la battaglia finale.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     8. AENGUS ÓG
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "aengus",
    name: "Aengus Óg",
    role: "Dio dell'Amore, della Giovinezza e dell'Ispirazione Poetica",
    tags: ["Amore", "Giovinezza", "Sogno", "Uccelli"],
    epithet: "Aengus il Giovane, il Mac ind Óc — il Figlio Giovane",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Brú na Bóinne", "Amore", "Sogno"],
    heroColor: "linear-gradient(160deg,#1a0a1a,#3a1a3a,#0a050a)",
    bio: {
      main: `Aengus Óg — il cui nome si compone di Aengus (da aen-, "uno, unico", e gus, "forza, vigore, scelta": "il Vigore Unico" o "la Forza della Scelta", con la componente dell'unicità che riflette la natura dell'amore come elezione assoluta) e Óg ("giovane, eternamente giovane", il secondo elemento del nome che lo distingue dagli altri Aengus della tradizione e lo radica nella giovinezza perpetua come suo attributo costitutivo) — è il dio dell'amore, della giovinezza, dell'ispirazione poetica e dei sogni nella mitologia dei Tuatha Dé Danann. La filologia del nome è precisata da Whitley Stokes e John Strachan (Thesaurus Palaeohibernicus, Cambridge University Press, 1901-1903): aen-gus è analizzato come composto di aen + gus con il significato di "scelta vera" o "forza vera", dove aen indica l'autenticità e l'unicità — l'amore come la scelta più vera che un essere possa compiere. Questo significato del nome è la chiave della sua teologia: Aengus non è semplicemente il dio dei sentimenti romantici ma il principio della scelta autentica del cuore, dell'elezione assoluta che trasforma due vite.

La genealogia di Aengus è tra le più elaborate e narrative del pantheon irlandese. È figlio del Dagda — il padre universale dell'abbondanza — e di Boann, la dea del fiume Boyne (da Bó-Find, "mucca bianca", la sorgente sacra che poi diventerà il fiume Boyne nella tradizione topografica). La sua nascita è già un mito: il Dagda si innamorò di Boann, sposa del dio Nechtan (o Elcmar, secondo varianti). Per nascondere la loro relazione e la gravidanza di Boann, il Dagda fermò il sole nel cielo con un incantesimo per un intero anno, cosicché la gestazione di Boann avvenne tutta in un "giorno" cosmico — un giorno che era in realtà un anno. Aengus nacque dunque da un'unione illegittima nascosta nell'ambiguità del tempo sospeso, e questa nascita nel tempo-sospeso è inscritta nella sua identità: è il dio che abita i momenti in cui il tempo ordinario si interrompe, i sogni, l'amore fulminante, l'ispirazione poetica — tutti stati in cui il tempo normale cessa di scorrere.

La funzione cosmica di Aengus è quella dell'eros come forza trasformativa: non la sessualità nella sua dimensione biologica (che appartiene ad altre figure divine) ma l'amore come potenza che cambia la struttura del reale, che permette impossibili (seguire un'amata trasformata in cigno nel lago di Derravaragh), che inverte la morte (la protezione del corpo di Diarmuid dopo la morte), che inganna il tempo (il Brú na Bóinne ottenuto dal padre con un cavillo giuridico). Aengus non combatte mai in battaglia, non governa eserciti, non siede nei consigli di guerra — la sua forza è sempre laterale, sempre mediata dall'amore e dall'ingegno piuttosto che dalla forza diretta.

L'iconografia di Aengus è quella della giovinezza perpetua: è il più bello dei Tuatha Dé, con capelli dorati, un mantello verde, circondato sempre da quattro uccelli bianchi (i suoi baci trasformati in uccelli che volano intorno alla sua testa). Il Brú na Bóinne — il tumulo di Newgrange — è la sua dimora dopo che lo ha sottratto al padre con l'astuzia del contratto temporale. La sua arpa — detta cláirseach, diversa dall'uaithne del Dagda — produce una musica così dolce che nessuno può resistere al sonno e al sogno. I suoi colori sacri sono il dorato e il verde; il suo numero sacro non è esplicitato ma il quattro (i quattro uccelli, le quattro stagioni dell'amore) è implicitamente presente; i suoi animali sono il cigno e l'uccello bianco.`,

      sub1: `Il sogno di Aengus e la ricerca di Caer Ibormeith`,
      text1: `Il Aislinge Óenguso — "Il Sogno di Aengus" — è il mito fondatore dell'identità del dio e uno dei testi narrativamente più belli e teologicamente più originali dell'intera letteratura irlandese arcaica. Il manoscritto che lo conserva è il Bodleian Library MS Rawlinson B. 512 (XV sec., ma contenente materiale dell'VIII-IX sec.); la traduzione di riferimento è quella di Myles Dillon (Early Irish Literature, University of Chicago Press, 1948) e di A.H. Leahy (Heroic Romances of Ireland, Nutt, 1905). Il mito ha una struttura di ricerca impossibile — il protagonista che insegue un sogno attraverso l'intera Irlanda — che lo colloca in una classe di miti dell'amore come vocazione assoluta presente in tutte le grandi tradizioni letterarie: il Cantico dei Cantici biblico, la ricerca del Graal come amore mistico, il Petrarca che insegue Laura.

Aengus si ammala di amore per una donna che vede in sogno ogni notte per un anno intero: bella, dalla lunga chioma, che suona un timpano (un tamburello con campanellini d'oro). Il sogno è così vivo e così persistente che Aengus si rifiuta di mangiare o di alzarsi dal letto, consumato da un desiderio per qualcuno che forse non esiste. I medici diagnosticano galur síte — la malattia d'amore, una categoria medica reale nella tradizione irlandese che la filologia di Nessa Ní Shéaghdha (Tóruigheacht Dhiarmada agus Ghráinne, Irish Texts Society, 1967) ha analizzato come condizione clinica riconosciuta, non metafora poetica.

Il Dagda e Boann cercano nell'intera Irlanda la donna del sogno — un anno di ricerca in ogni provincia. Finalmente il re del Connacht Ailill identifica Caer Ibormeith ("bacca-di-tasso", figlia di Ethal Anbúail del sídhe di Connacht) come la donna del sogno di Aengus. Ma Ethal si rifiuta di darla — non perché la neghi al dio ma perché non può: Caer trascorre un anno in forma umana e un anno in forma di cigno, e nel momento in cui cambia forma non può essere consegnata né come donna né come cigno. La soluzione che Aengus trova è la più radicale possibile: invece di prendere Caer in forma umana, la raggiunge alla riva del lago di Derravaragh nel momento della trasformazione, si trasforma egli stesso in cigno, e insieme volano via verso il Brú na Bóinne cantando una musica così dolce che tutta l'Irlanda dorme per tre giorni e tre notti. L'amore non supera l'impossibilità — la supera diventando l'impossibilità: Aengus non porta Caer nel suo mondo ma entra nel suo. Questa struttura — l'amante che si trasforma per raggiungere l'amata invece di costringerla a venire — è teologicamente rivoluzionaria nella tradizione mitica irlandese e ha affascinato i commentatori moderni. William Butler Yeats la usò come base per la poesia "The Song of Wandering Aengus" (1899), uno dei suoi testi più celebri.`,

      sub2: `Il Brú na Bóinne e l'astuzia del tempo sospeso`,
      text2: `Il mito dell'acquisizione del Brú na Bóinne — il grande tumulo di Newgrange — da parte di Aengus attraverso un cavillo giuridico ai danni del padre Dagda è uno dei racconti più ironicamente costruiti della mitologia irlandese, e la sua struttura di inganno legale perfettamente lecito lo colloca in una classe di miti della "trasformazione dell'accordo" che attraversa tutta la tradizione celtica: il personaggio che ottiene ciò che vuole non attraverso la forza ma attraverso la precisa applicazione della lettera del contratto contro lo spirito dell'intenzione. La fonte principale è il Tochmarc Étaíne (trad. Osborn Bergin e R.I. Best, Ériu XII, 1938), il racconto del Corteggiamento di Étaín, dove l'episodio del Brú è narrato come antefatto della storia principale.

Il Brú na Bóinne — il tumulo di Newgrange, costruito intorno al 3200 a.C. e già antico di oltre due millenni al tempo dei Celti — era originariamente assegnato al Dagda tra le dimore dei Tuatha Dé dopo la sconfitta dei Milesi. Aengus, che era stato allevato lontano (nella tradizione il Dagda lo aveva affidato a Midir perché la nascita illegittima non venisse scoperta) e che non aveva ricevuto una dimora nel momento della divisione, si presentò al padre con una richiesta semplice: abitare il Brú "per un giorno e una notte". Il Dagda acconsentì. Ma quando il giorno e la notte finirono e il Dagda chiese il Brú indietro, Aengus rifiutò con un argomento giuridicamente inattaccabile: "Ogni tempo è fatto di giorni e notti. Se mi hai dato il Brú per un giorno e una notte, e ogni tempo è fatto di giorni e notti, mi hai dato il Brú per sempre." Il Dagda non poté rispondere — la logica era corretta.

Questo mito ha una struttura che ricorre in molte tradizioni: il furbo che trasforma la concessione temporanea in permanente attraverso un'equivocazione dei termini. Il parallelo più vicino nella tradizione celtica è la storia di Didone che chiede "quanto copre una pelle di bue" e la taglia in strisce sottili per circondare un'intera collina; nella tradizione vedica è il mito di Vamana che chiede "quanto coprono tre passi" e si espande a coprire il cosmo. La struttura comune è quella del contratto di piccola portata apparente che si rivela di portata cosmica attraverso l'applicazione rigorosa dei propri termini. Aengus non inganna il padre — non dice nulla di falso — ma usa la precisione del linguaggio contro l'imprecisione dell'accordo. Michael Dames (Mythic Ireland, Thames & Hudson, 1992) ha analizzato questo mito come la formulazione irlandese del principio che "chi possiede la parola possiede il tempo": Aengus è il dio dell'ispirazione poetica, e il linguaggio — usato con la precisione del poeta — gli permette di conquistare il luogo sacro più potente dell'Irlanda.`,

      sub3: `Diarmuid e Gráinne: Aengus come protettore degli amanti`,
      text3: `La storia di Diarmuid Ua Duibhne e Gráinne — la grande tragedia romantica del Ciclo Feniano, l'equivalente irlandese di Tristano e Isotta o di Romeo e Giulietta nella letteratura europea — vede Aengus come protettore degli amanti fuggiaschi, il dio che usa la propria magia per nasconderli dall'ira di Finn mac Cumhaill e che alla fine, quando Diarmuid è mortalmente ferito, compie il gesto più straordinariamente tenero di tutta la mitologia irlandese: porta via il corpo dell'amato per non lasciarlo nella morte anonima. La fonte principale è la Tóruigheacht Dhiarmada agus Ghráinne ("L'Inseguimento di Diarmuid e Gráinne", ms. del XVII sec. contenente materiale medievale più antico, trad. Nessa Ní Shéaghdha, Irish Texts Society, 1967).

Diarmuid è figlio adottivo di Aengus Óg — il dio lo aveva allevato dopo che il padre biologico aveva ucciso il figlio illegittimo di Roc, l'intendente di Aengus, nel corso di una lite (l'uomo trasformò il bambino morto in un cinghiale senza orecchie né coda, destinato a uccidere Diarmuid — la maledizione del cinghiale che percorre tutta la storia). Quando Gráinne, promessa sposa di Finn mac Cumhaill, pone su Diarmuid un geis (un tabù sacro obbligatorio) che lo costringe a fuggire con lei nella notte stessa del banchetto nuziale, i due diventano fuggiaschi in tutta l'Irlanda inseguiti dalla furia di Finn. Aengus interviene più volte per proteggerli: li nasconde nel suo mantello dell'invisibilità, fornisce loro rifugi sicuri, negozia tregue temporanee con Finn.

La morte di Diarmuid — lacerato dal cinghiale del monte Beann Ghulban mentre cacciava con Finn che aveva apparentemente fatto la pace con lui — è il momento in cui si rivela la struttura tragica della maledizione originaria: Finn potrebbe salvarlo versandogli acqua curatrice tra le mani, ma per due volte lascia cadere l'acqua "inavvertitamente" prima che raggiunga Diarmuid. Aengus arriva al monte mentre Diarmuid sta morendo e non può fare nulla: il destino si è compiuto. Ma il suo gesto finale — portare il corpo di Diarmuid al Brú na Bóinne — ha una qualità teologica unica nel corpus mitologico irlandese. Il testo della Tóruigheacht dice: "Non posso ridarlo in vita, ma soffierò uno spirito vivente su di lui, così che possa parlarmi ogni giorno." Non resurrezione ma preservazione della voce — l'amore che non accetta di perdere completamente il proprio oggetto e trova la forma più parziale e dolente di conservazione: Diarmuid che parla a Aengus ogni giorno, morto ma non silenzioso. Máire Ní Mhaonaigh (Brian Boru, Tempus, 2007) ha analizzato questa scena come "la più commovente rappresentazione dell'amore divino nella letteratura gaelica: non il lieto fine, non la resurrezione trionfale, ma la conversazione quotidiana con l'assente".`,

      sub4: `Aengus e la tradizione poetica: i baci trasformati in uccelli`,
      text4: `L'attributo degli uccelli bianchi che volano sempre intorno alla testa di Aengus Óg — e che la tradizione identifica come i suoi baci trasformati in uccelli — è il dettaglio iconografico più originale e poeticamente più ricco del dio, e la sua interpretazione apre sulla teologia della parola poetica come forza trasformativa che è il nucleo della funzione di Aengus come patrono dell'ispirazione. La fonte principale per questo attributo è il Lebor Gabála Érenn (trad. Macalister, 1938-1956) e il glossario medievale del Cath Maige Tuired nella versione del Book of Leinster; la sua elaborazione letteraria moderna più influente è la poesia di William Butler Yeats "The Song of Wandering Aengus" (1899, in The Wind Among the Reeds).

L'immagine dei baci trasformati in uccelli è teologicamente precisa: il bacio — il gesto dell'amore fisico più immediato e più intimo — si trasforma in uccello, che è la forma più libera e più aerea dell'esistenza animale. Il bacio che non può essere trattenuto (perché il bacio si consuma nell'atto stesso di darsi) diventa uccello che vola via ma ritorna, che non si tiene ma si riconosce. Questa immagine — il gesto d'amore che si trasforma in presenza volante — è la formulazione celtica del principio che il dono dell'ispirazione poetica non si possiede ma si riceve e si lascia andare, che la bellezza dell'amore non sta nel trattenerlo ma nel riconoscerlo mentre vola.

La connessione tra Aengus e la poesia irlandese è profonda e documentata attraverso il sistema del filid — i poeti-veggenti dell'Irlanda pre-cristiana, l'equivalente celtico dei vati vedici o degli aedi greci. Il poeta (fili, pl. filid) era il custode della memoria cosmica, il trasmettitore del sapere degli dèi attraverso la forma del verso — e l'ispirazione poetica (imbas, "il grande sapere che illumina") era percepita come un dono divino che il poeta riceveva in stato alterato di coscienza, spesso attraverso il sonno rituale (tarbfheis, la veglia nella pelle del toro) o attraverso il sogno. Aengus, il dio dei sogni e dell'amore, è naturalmente il patrono di questa ricezione: i baci-uccelli che volano intorno alla sua testa sono i versi dell'ispirazione che il dio non trattiene ma lascia circolare, raggiungendo chiunque sia aperto a riceverli.

William Butler Yeats trasformò questo mito nella propria poetica centrale: "The Song of Wandering Aengus" è il poema in cui Yeats si identifica con il dio che insegue per tutta la vita la donna-luce intravista nel sogno. La poesia — inclusa in The Wind Among the Reeds (1899) e considerata da molti critici il suo testo più perfetto — ha diffuso l'immagine di Aengus in tutto il mondo anglofono come archetipo del poeta-amante-cercatore, colui che insegue la bellezza sapendo che non la raggiungerà mai ma che la ricerca stessa costituisce la vita degna di essere vissuta. Declan Kiberd (Inventing Ireland, Harvard University Press, 1995) ha analizzato come la ricezione yeatsiana di Aengus abbia trasformato il dio gaelico medievale in uno dei simboli fondatori del Revival letterario irlandese e poi dell'identità culturale irlandese moderna.`,
    },
    versions: [
      {
        era: "Tochmarc Étaíne",
        name: "L'astuto che ruba il Brú",
        text: "Nel Tochmarc Étaíne Aengus inganna il Dagda. Chiede in prestito il Brú na Bóinne per un giorno e una notte. Il Dagda accetta. Ma Aengus interpreta la concessione come 'un giorno e una notte per sempre' (in irlandese 'lá ocus oidhce' può significare 'un giorno e una notte' o 'il giorno e la notte = il tempo tutto'). Così Aengus ottiene legalmente il possesso eterno del tumulo sacro di Newgrange — uno dei più antichi esempi letterari di un cavillo giuridico sacro.",
      },
      {
        era: "Aislinge Óenguso",
        name: "L'innamorato del sogno",
        text: "Il 'Sogno di Aengus' è l'archetipo della malinchia d'amore in tutta la letteratura europea. Aengus deperisce per amore di una fanciulla che esiste solo nei suoi sogni; medici e madre ricorrono a Bodb Derg, lui a tutta l'Irlanda divina, fino a trovare Caer. Il motivo del 'cigno-donna' è uno dei più universali nella mitologia eurasiatica (dalle ragazze-cigno scandinave alle apsaras indù); la versione irlandese è forse la più lirica.",
      },
      {
        era: "Tragedia di Diarmuid e Gráinne",
        name: "Il padre adottivo del cervo",
        text: "Nel Ciclo Fiann Aengus è il padre adottivo di Diarmuid Ua Duibhne. Quando Diarmuid fugge con Gráinne, è Aengus a proteggerli magicamente durante la loro fuga. Al momento della morte di Diarmuid per mano del cinghiale, Aengus porta il corpo al Brú na Bóinne dove gli soffia dentro un'anima ogni giorno, così che Diarmuid possa conversare con lui anche dopo la morte.",
      },
    ],
    cult: `Il Brú na Bóinne — Newgrange — è sede mitica di Aengus. Il tumulo neolitico, con il suo celebre allineamento al solstizio d'inverno (quando la luce del sole all'alba penetra per 17 metri lungo il corridoio fino alla camera interna), è letto nella tradizione medievale come dimora di Aengus e del padre Dagda. L'effetto luminoso del solstizio è interpretato come il 'bacio di Aengus' alla terra.

Il fiume Boyne è sacro alla madre Bóann; il Brú (letteralmente "palazzo, dimora") di Aengus è sulla sua riva. L'intera area del Valle del Boyne — sito UNESCO per i suoi monumenti neolitici (Newgrange, Knowth, Dowth) — è considerata il 'cuore sacro' dell'Irlanda mitologica.

Il culto di Aengus non è stato sincretizzato cristianamente: rimane figura squisitamente pagana, e per questo ha attratto enormemente l'immaginario letterario moderno.`,
    influence: [
      {
        era: "Eros celtico",
        text: "Aengus è l'equivalente funzionale di Eros greco e di Amor romano: il giovane dio dell'amore, con uccelli al posto delle frecce, con l'arpa al posto dell'arco. La differenza rispetto ai corrispettivi mediterranei è la maggiore malinconia: Aengus soffre lui stesso d'amore, non lo infligge solo agli altri. È un dio-amante e dio-amato.",
      },
      {
        era: "W.B. Yeats",
        text: "Yeats ha scritto una delle poesie più celebri in lingua inglese proprio su Aengus: 'The Song of Wandering Aengus' (1899), in cui Aengus cerca per tutta la vita la 'glimmering girl' vista una volta in un sogno. La poesia è uno dei capolavori del simbolismo anglofono. Yeats identifica esplicitamente Aengus come 'l'eroe del desiderio' e lo rende archetipo del poeta stesso.",
      },
      {
        era: "James Joyce — A Portrait of the Artist as a Young Man",
        text: "Nel 'Ritratto dell'artista da giovane' Stephen Dedalus cita direttamente Aengus come suo modello di anima poetica ('I am young Aengus' è una nota dei manoscritti joyciani). L'ispirazione poetica irlandese moderna si riconosce ancora oggi nel mito di Aengus.",
      },
      {
        era: "Romanticismo celtico e New Age",
        text: "Aengus è figura centrale del 'Celtic Twilight' — il revival letterario irlandese di Yeats, Lady Gregory, Russell (AE). Nella cultura New Age è spesso invocato come 'dio dell'amore romantico', anche se questa semplificazione moderna perde le sfumature malinconiche e magiche del mito originale.",
      },
    ],
    texts: [
      {
        title: "Aislinge Óenguso — il Sogno di Aengus",
        source:
          "Manoscritto Egerton 1782, XV sec. (testo IX sec.), trad. Francis Shaw (1934)",
        text: "Una notte Aengus vide una fanciulla venire a lui mentre stava nel suo letto. Era la più bella donna che si fosse mai vista in Irlanda. Aengus tentò di prenderla per la mano per portarla nel suo letto. Improvvisamente ella scomparve. Egli rimase sul letto fino al mattino senza prendere sonno. Era malato d'amore. Non mangiava né beveva, e la malattia del suo cuore gli sembrava così grave che i medici del regno non potevano conoscerne la natura.",
      },
      {
        title: "L'inganno del Brú",
        source: "Tochmarc Étaíne, §1, Book of the Dun Cow, XII sec.",
        text: "Aengus disse al Dagda: 'Lasciami la casa per un giorno e una notte.' Il Dagda rispose: 'Te la do.' Passato il giorno e la notte, il Dagda venne per riprendersi la sua casa. Aengus gli rispose: 'Tu hai ceduto a me \"un giorno e una notte\", e tutto il tempo è fatto di giorni e di notti. Dunque la casa è mia per sempre.' E il Dagda se ne andò, ingannato dal figlio con le sue stesse parole.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     9. DIAN CÉCHT
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "dian-cecht",
    name: "Dian Cécht",
    role: "Dio della Medicina e della Guarigione",
    tags: ["Medicina", "Guarigione", "Erbe", "Geloso"],
    epithet: "Il Medico Divino, Custode del Pozzo della Salute",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Medicina", "Slane", "Dian Cécht Tract"],
    heroColor: "linear-gradient(160deg,#0a140a,#1a3a1a,#050c05)",
    bio: {
      main: `Dian Cécht — il cui nome è stato interpretato dalla filologia in due direzioni principali: la lettura più diffusa lo deriva dal proto-celtico *dīno-kekto-, "rapido assaltatore" o "rapido nell'azione" (da dían, "veloce, rapido, impetuoso", e cécht o cecht, radice connessa al verbo "agire, compiere"), con il significato complessivo di "il Rapido nell'Intervento" — appropriato per un dio della medicina il cui attributo essenziale è la prontezza nel soccorso; una proposta alternativa di John Carey (A Single Ray of the Sun, Celtic Studies Publications, 1999) collega cécht alla radice *kekto-, "potere, forza" con sfumatura magica, producendo "il Dio dalla Forza Rapida" — in ogni caso un nome che radica la sua identità nella velocità e nell'efficacia dell'azione terapeutica. Non è né il dio più potente né il più narrativamente elaborato del pantheon irlandese, ma è quello la cui storia porta il peso teologico più specifico e più originale: la gelosia professionale che distrugge il sapere che avrebbe potuto salvare l'umanità.

La genealogia di Dian Cécht lo colloca in una posizione di mediazione strutturale nel pantheon: è figlio di Esarg (o di Delbaeth, secondo varianti), nipote di Net il dio della guerra — una genealogia che lo connette sia alla tradizione guerriera dei Tuatha Dé sia alla tradizione medica, poiché la medicina in una cultura eroica è inseparabile dalla cura delle ferite di guerra. La sua posizione nella generazione divina è quella del padre di una stirpe di guaritori: suo figlio Miach supera le sue capacità tecniche e viene ucciso per questo; sua figlia Airmed è la più sapiente erborista del mondo divino e viene privata della possibilità di trasmettere il proprio sapere; suo figlio Octriuil partecipa alla guarigione dei guerrieri durante la Seconda Battaglia di Mag Tuired. La famiglia di Dian Cécht è dunque una microstoria del sapere medico nella tradizione irlandese: il padre che fonda, il figlio che supera, la figlia che conserva — e il padre che distrugge la continuità per gelosia.

La funzione cosmica di Dian Cécht è quella del limite e della possibilità della guarigione nel cosmo irlandese: non solo il medico dei Tuatha Dé ma il principio che stabilisce cosa è curabile e cosa non lo è, chi può essere salvato e chi no. Il Pozzo di Slane — Tipra Sláine, "Pozzo della Salute" — che Dian Cécht custodisce durante la Seconda Battaglia di Mag Tuired è il dispositivo cosmologico che rende possibile la rigenerazione dei guerrieri feriti: immersi nelle acque del pozzo, i guerrieri dei Tuatha Dé riemerge integri e pronti a combattere di nuovo, purché siano ancora vivi quando vi entrano. Questo limite — "la ferita non deve aver raggiunto il midollo della vita" — è la condizione che separa la medicina dal miracolo: Dian Cécht non resuscita i morti (questa capacità appartiene a Miach, che poi viene eliminato), ma guarisce i feriti che possono ancora essere guariti.

L'iconografia di Dian Cécht non è elaborata nelle fonti con la stessa ricchezza di altri dèi: è descritto come un uomo anziano, saggio, dai capelli bianchi, che porta erbe e incantesimi. I suoi attributi principali sono il pozzo (acqua come elemento della guarigione), le erbe medicinali (la farmacologia come sapere divino), e il canto degli incantesimi (la formula verbale come componente della cura). I suoi colori non sono esplicitamente codificati, ma il verde delle erbe e il bianco dell'acqua del pozzo sono i suoi cromatismi naturali. Il suo numero sacro è il 365 — le erbe nate dalla tomba di Miach, una per ogni giorno dell'anno — che coincide con la durata del ciclo solare e rivela la connessione tra la medicina e il tempo cosmico.`,

      sub1: `Il braccio d'argento di Nuada e il superamento da parte di Miach`,
      text1: `L'episodio della costruzione del braccio d'argento per Nuada — e della sua successiva sostituzione con un braccio di carne vera da parte di Miach — è il mito che definisce con più precisione la posizione di Dian Cécht nel pantheon irlandese: il maestro superato dal discepolo-figlio, il cui sapere era il massimo possibile fino al momento in cui non lo fu più. La fonte principale è il Cath Maige Tuired §§28-35 (trad. Elizabeth Gray, Irish Texts Society, 1982); integrazioni nei testi giuridici del Bretha Déin Chécht (VIII sec., trad. parziale in D.A. Binchy, Studia Celtica, 1966).

Dopo che Sreng dei Fir Bolg aveva reciso il braccio destro di Nuada nella Prima Battaglia di Mag Tuired, Dian Cécht costruì per il re un braccio d'argento completamente funzionale — "si muoveva in ogni suo punto come il braccio di un uomo naturale" recita il Cath Maige Tuired. La scelta dell'argento come materiale non è casuale: nella tradizione celtica l'argento è il metallo della luna, della guarigione e del confine — il materiale che media tra la vita organica e il mondo inorganico, tra la ferita e la reintegrazione. Un braccio d'argento non è una prote­si ordinaria ma un oggetto cosmologico: è il confine tra ciò che era e ciò che ora è, il segno visibile di una guarigione che è reale ma incompleta.

Miach — figlio di Dian Cécht — osservò il braccio del re e disse che poteva fare di più: sostituire il braccio d'argento con un braccio di carne vera, rigenerando il tessuto biologico dove prima c'era metallo. Il processo che il Cath Maige Tuired descrive con la struttura di un testo medico-magico si articolò in tre fasi di tre giorni ciascuna: "Il primo terzo: teneva il braccio contro il fianco di Nuada e l'osso cresceva sull'osso. Il secondo terzo: la carne cresceva sulla carne. Il terzo terzo: la pelle cresceva sulla pelle." Nove giorni totali di incantesimi continui, e il re era completo come prima della battaglia. Dian Cécht aveva costruito il possibile; Miach aveva costruito l'impossibile. Questa differenza — il possibile e l'impossibile della medicina — è il punto esatto in cui la gelosia del padre si accende: non perché Nuada sia guarito meglio (che dovrebbe essere l'obiettivo del dio-medico) ma perché il figlio ha dimostrato che il padre non aveva raggiunto il limite del proprio campo ma solo il limite del proprio sapere. Questa distinzione — tra il limite della medicina e il limite di un singolo medico — è la ferita narcisistica che Dian Cécht non riesce a sopportare. Markus Jäger (Celtic Medicine and the Druids, Inner Traditions, 2009) ha analizzato questo episodio come la formulazione mitologica irlandese del principio etico medico fondamentale: il benessere del paziente è superiore all'orgoglio del medico.`,

      sub2: `Il Pozzo di Slane e la rigenerazione dei guerrieri`,
      text2: `Il Pozzo di Slane — Tipra Sláine, "il Pozzo della Salute" (da sláine, "salute, integrità fisica", la stessa radice che dà il nome alla città di Slane nel Meath) — è il dispositivo cosmologico centrale della medicina divina nel Cath Maige Tuired, e la sua funzione durante la Seconda Battaglia di Mag Tuired rivela la teologia della guarigione nella tradizione irlandese: non il miracolo individuale ma il sistema organizzato, non la grazia imprevedibile ma la tecnologia sacra applicata con metodo. La fonte principale è il Cath Maige Tuired §§122-123 (trad. Gray, 1982); varianti nelle glosse del Metrical Dindshenchas (trad. Gwynn, Dublin Institute for Advanced Studies, 1903-1935).

Durante la battaglia, Dian Cécht organizzò un sistema medico-magico di campo: il Pozzo di Slane fu posizionato sul bordo del campo di battaglia, e quattro guaritori — Dian Cécht stesso, i due figli Miach e Octriuil, e la figlia Airmed — si alternavano nella cura dei feriti. La procedura era precisa: ogni guerriero dei Tuatha Dé che cadeva ferito ma ancora vivo veniva portato al pozzo; immerso nelle acque del pozzo, e mentre i quattro guaritori cantavano i propri incantesimi sulle acque, il guerriero riemerge integro, guarito, pronto a tornare in battaglia. Il testo del Cath Maige Tuired descrive il processo con la struttura di una formula: "I guerrieri dei Tuatha Dé che cadevano il pomeriggio erano guariti prima dell'alba."

La condizione limitante del sistema — "la ferita non deve aver raggiunto il midollo della vita" — è fondamentale per comprendere la teologia del pozzo: non è uno strumento di resurrezione ma di guarigione accelerata. Chi era già morto non poteva essere riportato in vita dal pozzo; chi era gravemente ferito ma non ancora morto poteva essere reintegrato. Questa distinzione tra guarigione e resurrezione è uno dei tratti più coerenti della tradizione medica divina celtica: Dian Cécht, Miach e Airmed curano — Miach nella leggenda supera questo limite, ma viene eliminato proprio per questo. I Fomori, comprendendo il vantaggio tattico del pozzo, incaricarono Octriuil di distruggerlo. Il figlio di Dian Cécht riuscì a farlo riempire di pietre: il pozzo fu neutralizzato, ma non prima che avesse garantito la sopravvivenza dell'esercito dei Tuatha Dé per l'intera durata della battaglia. La filologia di Sláine come "salute-integrità" rivela la concezione celtica della salute non come assenza di malattia ma come integrità del corpo — il sóslán, "il buono-intero" — che la medicina divina cerca di ristabilire quando viene compromessa.`,

      sub3: `L'uccisione di Miach e le 365 erbe di Airmed`,
      text3: `L'uccisione di Miach da parte di Dian Cécht — e la dispersione delle 365 erbe che nacquero dalla sua tomba da parte dello stesso padre geloso — è il mito della perdita del sapere totale, la narrazione in cui la tradizione irlandese spiega perché la conoscenza medica umana sia sempre parziale e incompleta. Il testo del Cath Maige Tuired (§§33-35, trad. Gray, 1982) è tra i più narrativamente precisi e allo stesso tempo più tragicamente costruiti dell'intero corpus dei Tuatha Dé: la struttura dei quattro colpi di spada che si intensificano progressivamente — la testa, la carne, l'osso, il cervello — ha la precisione di un'esecuzione rituale che il testo stesso sembra condannare senza pronunciarsi.

Dopo la guarigione miracolosa di Nuada, Dian Cécht si avvicinò al figlio con la spada. Il Cath Maige Tuired descrive quattro colpi successivi: il primo rasò la pelle fino all'osso — Miach si curò da solo. Il secondo tagliò la carne fino all'osso — Miach si curò. Il terzo aprì l'osso fino alle meningi — Miach si curò. Il quarto spaccò il cervello in due — Miach morì. La progressione da ferita curabile a ferita mortale è la struttura anatomica della morte: Miach curava se stesso finché le proprie capacità mediche erano sufficienti, e cessò quando la ferita raggiunse la sede dell'identità stessa (il cervello, la sede della mens nel sistema filosofico celtico-cristiano del periodo in cui fu scritto il testo). Dian Cécht compì dunque l'unica ferita che il proprio figlio non poteva curare — il cervello del guaritore che non può guarire se stesso.

Dalla tomba di Miach crebbero 365 erbe, una per ogni giuntura e nervo del corpo umano — la fisiologia come botanica, il corpo come giardino del sapere medicinale. La sorella Airmed le raccolse sul proprio mantello in ordine preciso, catalogandole secondo la propria virtù — quale organo curano, quale malattia guariscono, in quale stagione vanno raccolte. Era la farmacopia totale, il sapere medico completo del cosmo. Ma Dian Cécht, ancora furente, "rovesciò il mantello di Airmed, così che le erbe si mescolarono, e nessuno conosce la loro classificazione se non la sapienza dello Spirito Santo" — aggiunge il testo con un'interpolazione chiaramente cristiana che sostituisce la "sapienza druidica" originaria con quella divina. John T. Koch (Celtic Culture: A Historical Encyclopedia, ABC-CLIO, 2006) ha analizzato questo mito come "la formulazione celtica del tema universale della caduta della conoscenza": come nell'Eden il serpente rivela una conoscenza che poi viene perduta, come a Babele il linguaggio comune viene disperso, le 365 erbe di Airmed sono il corpus di sapere totale che l'umanità avrebbe potuto possedere e che la gelosia di un singolo individuo ha reso per sempre inaccessibile nella sua interezza.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired",
        name: "Il guaritore di Nuada",
        text: "Dian Cécht è colui che costruisce il braccio d'argento funzionante per il re mutilato. La sua arte è impressionante: il braccio ha ogni giuntura, ogni movimento, ogni vigore del braccio vero. Ma non basta: non è 'carne'. Il figlio Miach lo supererà; e Dian Cécht lo ucciderà.",
      },
      {
        era: "Il pozzo di Slane",
        name: "Il rigeneratore dei guerrieri",
        text: "Durante la battaglia, Dian Cécht pone vicino al campo una fontana con quattro guaritori — lui stesso, i due figli Miach e Octriuil, la figlia Airmed. Ogni caduto vivo e vivente dei Tuatha Dé gettato nell'acqua ne riemerge vivo; ma i cadaveri non risuscitano (questa è la condizione magica: la ferita non deve aver raggiunto il midollo della vita). I Fomori distruggono il pozzo per tagliare la risorsa magica.",
      },
      {
        era: "Il Dian Cécht Judgments (tratto di medicina legale)",
        name: "Il padre della medicina legale irlandese",
        text: "Un testo giuridico medievale, il Bretha Déin Chécht ('I Giudizi di Dian Cécht', VIII sec.), attribuisce a Dian Cécht la codificazione del diritto medico irlandese: quali ferite sono curabili, quali no, chi è responsabile di una ferita, quale risarcimento è dovuto. È la più antica raccolta di medicina legale in una lingua vernacolare europea.",
      },
      {
        era: "Asclepio/Aesculapio",
        name: "Il parallelo mediterraneo",
        text: "Dian Cécht è strutturalmente parallelo ad Asclepio greco: entrambi figli di un dio maggiore (Apollo/Esarg), entrambi con figli medici (Igea, Panakeia / Miach, Airmed), entrambi puniti per eccesso di potere (Asclepio fulminato per aver resuscitato un morto, Dian Cécht punito tramite la perdita del figlio superiore). La struttura mitologica è quasi identica.",
      },
    ],
    cult: `Il Pozzo di Slane (Tipra Sláine) — identificabile forse con la 'Sláine' mitologica vicino alla collina di Slane nel Meath — è il sito sacro principale di Dian Cécht. L'etimologia 'sláine' significa proprio 'salute, integrità'. La zona ha una lunga continuità di culti legati alla guarigione, passando poi a San Patrizio (che scelse Slane per accendere il fuoco pasquale del 433 d.C., simbolicamente sovrascrivendo il sito pagano).

Le 365 erbe medicinali di Airmed sono il repertorio farmacologico della medicina irlandese tradizionale: ogni stirpe di 'liaig' (medici nativi) in Irlanda rivendicava una discendenza simbolica dalla scuola di Dian Cécht. I Ó hÍceadha (O'Hickey), Ó Callanáin (Callanan), Ó Líona (Leonard) sono stirpi mediche documentate dal XIV al XVII secolo.

Nel folklore popolare sopravvivono centinaia di 'Holy Wells' (sorgenti sacre) dedicate alla guarigione: molti sono cristianizzati come St Brigid's Wells, ma l'origine preistorica rimanda spesso a Dian Cécht.`,
    influence: [
      {
        era: "Medicina tradizionale irlandese",
        text: "La 'Scuola di Dian Cécht' è un'istituzione mitico-reale: gli attuali manoscritti medici gaelici (XIV-XVII sec.) si aprono spesso con un'invocazione a Dian Cécht come patrono della medicina. La farmacopea erboristica irlandese medievale, una delle più ricche d'Europa, cita esplicitamente le 365 erbe di Miach/Airmed.",
      },
      {
        era: "Il mito del sapere perduto",
        text: "Il motivo 'la classificazione perfetta persa per gelosia' — le erbe di Airmed — è stato letto in chiave simbolica dall'antropologia: l'umanità ha accesso solo a una parte della sapienza totale, perché la dispersione è la condizione del mondo post-paradisiaco. È variante celtica del motivo universale della 'Caduta della conoscenza'.",
      },
      {
        era: "Green Man e il dio-medico",
        text: "Nell'iconografia del folklore britannico e irlandese il 'Green Man' — volto vegetale con foglie che escono dalla bocca — è letto da alcuni studiosi (William Anderson) come memoria iconografica di Miach/Airmed, l'uomo da cui nascono le erbe curative.",
      },
    ],
    texts: [
      {
        title: "L'uccisione di Miach",
        source: "Cath Maige Tuired, §33-35, trad. dal medio irlandese",
        text: "Miach andò da Nuada e disse: 'Osso-dal-suo-osso, tendine-dal-suo-tendine, carne-dalla-sua-carne, pelle-dalla-sua-pelle.' E così guarì il re in nove giorni e nove notti: per i primi tre giorni Miach lo pose su un fianco; per i tre successivi lo pose sul petto; per gli ultimi tre lo gettò in un bagno di midollo di quercia bianca. Dian Cécht, padre suo, colpì Miach sulla testa con la spada e gli tagliò la pelle fino all'osso. Il giovane curò se stesso con la sua abilità. Dian Cécht lo colpì di nuovo, tagliandogli la carne fino all'osso. Il giovane curò se stesso. Dian Cécht lo colpì una terza volta, spaccandogli l'osso fino alle meningi. Il giovane lo curò. Dian Cécht lo colpì una quarta volta, e spaccò il cervello in due. Allora Miach morì.",
      },
      {
        title: "Le erbe di Airmed",
        source: "Cath Maige Tuired, §35, trad. dal medio irlandese",
        text: "Dalla sua tomba crebbero 365 erbe, ciascuna per una delle 365 giunture e nervi del suo corpo. Ora Airmed, sua sorella, raccoglieva le erbe in ordine sul suo mantello, ognuna al suo posto secondo la sua virtù. Ma Dian Cécht, furente, rovesciò il mantello, disperdendo le erbe; e così a oggi non si conosce la scienza completa delle loro virtù, se non come l'insegnò lo Spirito Santo poi.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     10. OGMA
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "ogma",
    name: "Ogma",
    role: "Dio dell'Eloquenza e Inventore dell'Alfabeto Ogamico",
    tags: ["Eloquenza", "Scrittura", "Forza", "Alfabeto"],
    epithet: "Ogma dal Volto di Sole, Inventore dell'Ogham",
    type: "Divinità",
    chips: ["Tuatha Dé Danann", "Ogham", "Eloquenza", "Gallia"],
    heroColor: "linear-gradient(160deg,#1a1200,#3a2a00,#0a0800)",
    bio: {
      main: `Ogma — il cui nome è connesso con certezza filologica all'Ogmios gallico attestato da Luciano di Samosata nel II sec. d.C., e che attraverso la radice proto-celtica *ogmios trova paralleli nel gallese Eugein e nel bretone medievale Oguen, con una base semantica dibattuta tra chi la collega a *og-, "solco, traccia incisa" (con il significato di "colui che incide, colui che traccia segni" — il dio scriba) e chi la connette alla radice indoeuropea *aug-, "aumentare, potenziare" (con il significato di "il Poderoso, il Potente dell'eloquenza") — è il dio dell'eloquenza e dell'alfabeto ogamico nella tradizione dei Tuatha Dé Danann, la figura divina in cui la tradizione celtica insulare ha condensato il principio del linguaggio come forza cosmica: non semplicemente la parola parlata ma la parola incisa, permanente, capace di attraversare il tempo. La filologia di Whitley Stokes e John Strachan (Thesaurus Palaeohibernicus, Cambridge University Press, 1901-1903) rimane il riferimento fondamentale per l'analisi del nome; l'edizione critica dell'ogham è in Damian McManus (A Guide to Ogam, An Sagart, 1991).

La genealogia di Ogma nel sistema dei Tuatha Dé Danann è quella del fratello del Dagda: figlio di Elatha (o di Ethliu secondo alcune varianti), della stirpe divina fomoriana che si è integrata nel pantheon dei Tuatha Dé attraverso le alleanze matrimoniali tra le due rasse cosmiche. Questa genealogia semi-fomoriana — condivisa con il Dagda — non è un difetto ma una ricchezza: Ogma porta in sé la traccia di entrambi i principi cosmici, l'ordine dei Tuatha Dé e l'arcaicità primordiale dei Fomori, e questa doppia origine riflette la natura del linguaggio stesso che lui incarna: la parola è contemporaneamente strumento dell'ordine (la legge, il contratto, la poesia sacra) e forza primordiale che precede ogni sistema (il suono, il ritmo, l'incisione sulla pietra). La sua sposa è Etan, figlia del dio-medico Dian Cécht — un'unione che connette il principio dell'eloquenza con quello della guarigione, entrambi forme del sapere specializzato che trasforma la condizione umana.

La funzione cosmica di Ogma è duplice e inscindibile: è il campione guerriero dei Tuatha Dé (nel Cath Maige Tuired combatte in prima linea e conquista la spada del re fomoriano Tethra) ed è l'inventore dell'ogham, il sistema di scrittura più antico delle isole britanniche. Questa doppia funzione — forza fisica e forza linguistica — non è contraddizione ma sintesi: nella concezione celtica del filid (il poeta-veggente), la parola è già di per sé una forza guerriera, capace di distruggere la reputazione di un re con la satira (áer) o di preservare la gloria di un eroe con il panegirico (molad). Ogma porta questa concezione nella sua forma più pura: il campione il cui vero attributo è il linguaggio, il guerriero la cui arma più potente non è la spada ma la parola incisa sulla pietra. Luciano di Samosata — il filosofo greco del II sec. d.C. che vide in Gallia una rappresentazione di Ogmios, il corrispondente continentale di Ogma — ne colse la struttura con una precisione che i filologi celtici hanno poi confermato: un vecchio Eracle le cui catene d'oro dalla lingua alle orecchie dei seguaci erano la rappresentazione visiva dell'eloquenza come legame cosmico.

L'iconografia di Ogma nelle fonti irlandesi è sobria: è descritto come nobile, forte, eloquente, dal "volto di sole" (l'epiteto Grianainech, "Faccia-di-Sole", che ne sottolinea la radianza). L'ogham — il sistema di scrittura che porta il suo nome come invenzione divina — è il suo attributo iconografico più concreto e più duraturo: le oltre quattrocento pietre ogamiche sopravvissute in Irlanda e nel Galles sono il suo monumento materiale. I suoi colori sacri non sono codificati, ma il bianco della luce solare e il nero dell'incisione sulla pietra sono i suoi cromatismi naturali. Il suo numero sacro non è esplicitato, ma il venti — le lettere dell'alfabeto ogamico originario — è implicitamente il suo.`,

      sub1: `L'invenzione dell'ogham e il libro segreto dei druidi`,
      text1: `Il mito dell'invenzione dell'ogham da parte di Ogma è documentato nel trattato medievale In Lebor Ogaim ("Il Libro dell'Ogham", noto anche come Auraicept na n-Éces, "Il Manuale dei Poeti", ms. del XIV sec. nel Book of Ballymote, trad. George Calder, John Grant, 1917), con integrazioni nel glossario medievale del Cath Maige Tuired e nelle raccolte topografiche del Metrical Dindshenchas. Il testo del Lebor Ogaim attribuisce l'invenzione a Ogma con una motivazione esplicita che rivela la funzione socio-religiosa dell'alfabeto: "Ogma, un uomo molto ingegnoso di parola e di poesia, fu colui che inventò l'ogham. La causa dell'invenzione fu questa: come prova della sua ingegnosità, e come linguaggio proprio dei dotti, alla distinzione dei semplici e dei pastori. Perché i contadini e i semplici non lo capissero."

L'ogham è un sistema logo-sillabico lineare di venti lettere originarie (con successive espansioni a ventiquattro e trentasette nei manoscritti tardivi), costruito attraverso combinazioni di tratti e punti incisi su una linea verticale — generalmente lo spigolo di una pietra — che si leggono dal basso verso l'alto. Ogni lettera porta il nome di un albero o di una pianta (beith = betulla, luis = sorbo, fearn = ontano, sail = salice, nion = frassino, e così via per tutte le venti lettere originarie), rivelando la connessione tra il sistema di scrittura e la tradizione botanico-druidica in cui gli alberi erano depositari di sapere cosmico. Damian McManus (A Guide to Ogam, An Sagart, 1991) — lo studio filologico più completo dell'ogham — ha analizzato come questa corrispondenza lettera-albero non fosse arbitraria ma riflettesse un sistema mnemonico e rituale elaborato: il druida che "leggeva" l'ogham non decodificava solo suoni ma attivava reti di associazione tra lettere, alberi, stagioni, divinità e proprietà magiche.

Il testo del Lebor Ogaim descrive il primo messaggio mai scritto in ogham come un avvertimento inviato a Lugh: "Sette volte la bacchetta di betulla sia colpita, fino a che la tua sposa non sia portata via dai Fomori." La scelta della betulla (beith, la prima lettera dell'ogham) come materiale del primo messaggio è significativa: la betulla è l'albero dell'inizio, del primo, del nuovo — il medium appropriato per il primo atto di scrittura nella storia cosmica. Il messaggio criptico su una bacchetta di betulla — comprensibile solo a chi conosce il sistema — incarna perfettamente la funzione che il Lebor Ogaim attribuisce all'invenzione: un codice dei dotti inaccessibile ai non-iniziati. Robert Graves (The White Goddess, Faber, 1948) elaborò in modo molto influente ma filologicamente problematico un "calendario arboreo" celtico basato sull'ogham, che ha avuto enorme fortuna nel neopaganesimo contemporaneo pur non corrispondendo a nessuna fonte medievale autentica.`,

      sub2: `Ogmios e le catene d'oro: il dio descritto da Luciano`,
      text2: `La descrizione di Ogmios da parte di Luciano di Samosata — il filosofo e satirico greco del II sec. d.C. che visitò la Gallia e registrò in un breve dialogo (Herakles, §§1-7, ca. 160-180 d.C., trad. dal greco) la propria sorpresa davanti a una rappresentazione iconografica del dio celtico — è il documento antico più prezioso per la comprensione del principio divino che l'Irlanda medievale conosce come Ogma, e la sua analisi rivela come la tradizione celtica continentale e quella insulare insulare conservassero la stessa struttura teologica pur con elaborazioni iconografiche diverse.

Luciano descrive di aver visto in Gallia un dipinto o un bassorilievo raffigurante un uomo anziano, calvo, dalla pelle bruciata dal sole come quella di un vecchio marinaio — niente di somigliante all'Eracle giovane e atletico della tradizione greco-romana. Eppure portava tutti gli attributi di Eracle: la pelle del leone nemeo, la clava, la faretra, l'arco teso. La stranezza iconografica più notevole era questa: dalla lingua di questo vecchio Eracle uscivano sottili catene d'oro e d'ambra che si collegavano alle orecchie di una folla di uomini che lo seguivano. Le catene erano così sottili da sembrare gioielli, e gli uomini seguivano il vecchio con espressione felice — non come prigionieri trascinati ma come discepoli che desiderano essere condotti. Luciano chiese a un sacerdote gallico il significato dell'immagine, e il sacerdote rispose con la spiegazione che il testo riporta nella traduzione italiana: "Noi Celti non identifichiamo l'eloquenza con Hermes come fate voi Greci, ma con Eracle, perché l'eloquenza è molto più forte del vigore fisico, e diventa ancora più forte con l'età."

Questa risposta del sacerdote gallico è il documento più diretto di una teologia celtica dell'eloquenza come principio cosmico superiore alla forza fisica: non la parola come complemento dell'azione ma come sua superazione. Le catene d'oro dalla lingua alle orecchie dei seguaci non sono un'immagine di coercizione ma di fascinazione volontaria — la rete del discorso persuasivo che connette il parlante al suo pubblico in un legame che entrambi desiderano. Joachim Classen (Rhetorik und Poetik in frühen griechischen Denken, Steiner, 1986) ha analizzato l'immagine di Ogmios come la formulazione celtica più potente dell'idea retorica che la persuasione sia più duratura della conquista: un esercito vinto si ribella, una mente persuasa rimane convinta. La recettività quattrocentesca e rinascimentale a questa immagine è stata documentata da Liana De Girolami Cheney (Alciati's Book of Emblems, Edwin Mellen, 2005): Andrea Alciati incluse la figura di Ogmios-Ercole celtico nel suo Emblematum Liber (1531) come emblema dell'Eloquentia, e da lì l'immagine si diffuse in tutta la cultura rinascimentale europea attraverso Dürer, Cranach e infine Rubens.`,

      sub3: `La spada di Tethra e il campione dei Tuatha Dé`,
      text3: `La conquista della spada di Tethra da parte di Ogma durante la Seconda Battaglia di Mag Tuired — e la rivelazione che la spada è capace di parlare e di narrare le proprie gesta — è l'episodio in cui la doppia natura del dio (guerriero e maestro del linguaggio) si manifesta nella forma più precisa e più narrativamente economica. La fonte principale è il Cath Maige Tuired §§166-168 (trad. Elizabeth Gray, Irish Texts Society, 1982); integrazioni nelle tradizioni sulle "spade parlanti" celtiche documentate da Miranda Green (Symbol and Image in Celtic Religious Art, Routledge, 1989).

Nella battaglia, Ogma combatté direttamente contro Indech mac Dé Domnann — uno dei re dei Fomori — e lo uccise, pur ricevendo ferite gravi nel combattimento. Poi trovò la spada di Tethra, un altro re fomoriano, e la guainò. Il Cath Maige Tuired descrive con brevità folgorante ciò che accadde dopo: "Ogma sguainò la spada per ammirarla. La spada gli narrò tutto ciò che era stato fatto con essa, perché era costume delle spade in quel tempo narrare le proprie gesta quando erano sguainate." La spada che parla — che non è semplicemente un oggetto ma un testimone delle azioni che ha compiuto, dotato di memoria e voce — è uno degli oggetti magici più originali della tradizione celtica, e la sua connessione con Ogma è teologicamente precisa: il dio dell'eloquenza conquista la spada che ha voce, l'arma che è anche linguaggio.

Il motivo della spada parlante ha paralleli in altre tradizioni indoeuropee — la spada Gram di Sigurd nei testi norreni ha un'identità quasi personale, la spada Excalibur di Artù ha proprietà che travalicano la semplice funzione d'arma — ma la formulazione celtica è la più esplicita nel dotare l'arma di capacità narrativa. In una cultura in cui il poeta-veggente (fili) era il custode della memoria cosmica attraverso la parola, un'arma che "narra le proprie gesta" è un'arma che ha acquisito la funzione del poeta: è testimone e trasmettitore del passato, depositario della memoria delle azioni che ha compiuto. Ogma conquista questa spada non per la forza bruta ma perché è il dio il cui dominio è il linguaggio — e il linguaggio include anche quello degli oggetti che parlano. Kim McCone (Pagan Past and Christian Present, Maynooth, 1990) ha analizzato il motivo della spada di Tethra come la formulazione mitica del principio che nella tradizione celtica "ogni azione lascia una traccia linguistica": il mondo è pieno di voci, di memorie incorporate negli oggetti e nei luoghi, e la funzione del filid — e del suo patrono Ogma — è rendere udibili queste voci attraverso la competenza del linguaggio.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired",
        name: "Il campione dei Tuatha Dé",
        text: "Nella Seconda Battaglia di Mag Tuired Ogma è uno dei tre campioni insieme a Lugh e al Dagda. Conquista la spada di Tethra, re dei Fomori — una spada parlante che narra ogni gesta fatta con essa. Ogma combatte direttamente con il campione fomoriano Indech mac Dé Domnann e lo uccide, ma riceve a sua volta ferite gravi.",
      },
      {
        era: "Tratto dell'Ogham",
        name: "L'inventore della scrittura",
        text: "Il tratto medievale 'In Lebor Ogaim' ('Libro dell'Ogham') attribuisce a Ogma l'invenzione: 'Ogma un uomo molto dotto di linguaggio e di poesia, fu colui che inventò Ogham. Fu inventato come prova della sua ingegnosità, e per essere il linguaggio dei dotti, così che i contadini e i semplici non lo capissero.' La prima iscrizione ogamica mitica è un messaggio cifrato scritto su una bacchetta di betulla: 'Sette volte la bacchetta di betulla è stata colpita, per te, o Lugh di Braga' — un avvertimento criptico di pericolo inviato a Lugh.",
      },
      {
        era: "Ogmios gallico",
        name: "Il dio descritto da Luciano",
        text: "Luciano di Samosata, filosofo greco del II sec. d.C., nel dialogo 'Herakles' descrive di aver visto in Gallia un'immagine sacra di un dio chiamato Ogmios. Era raffigurato come un vecchio calvo con la pelle del leone nemeo — simile a Eracle — ma con sottili catene d'oro che uscivano dalla sua lingua e andavano alle orecchie dei suoi seguaci. Luciano chiede a un sacerdote gallico il significato: 'Noi celti non identifichiamo l'eloquenza con Hermes come fate voi greci, ma con Eracle — perché l'eloquenza è molto più forte del vigore fisico, ed è Eracle nella sua forma più matura, non nella gioventù.' L'Ogmios di Luciano è quasi certamente il corrispondente continentale di Ogma — e l'immagine delle catene d'oro dalla lingua è uno dei più profondi simboli antichi del potere della parola.",
      },
    ],
    cult: `Il culto di Ogma è testimoniato più da monumenti che da narrazioni: le oltre 400 pietre ogamiche note (la maggior parte in Irlanda e Galles, poche in Scozia e Isola di Man) sono il suo lascito materiale. Si tratta di steli erette come marcatori sepolcrali o di confine, incise sul bordo con iscrizioni memorialiche ('N figlio di N') o magico-apotropaiche. L'ogham era scrittura sacra, insegnata solo ai filid (poeti-veggenti) e ai druidi; la tradizione vuole che venisse 'letta' con le dita, contando le tacche sullo spigolo della pietra — una scrittura quasi 'Braille' pre-letteraria.

In Gallia i siti di culto di Ogmios sono attestati (iscrizioni, un defixio da Bregenz, un'iscrizione di Richborough in Britannia 'deo Ogmio'). Il volto solare del dio lo legava probabilmente anche a funzioni solari-oracolari.

Non ha avuto sincretizzazione cristiana diretta — ma il motivo 'il santo elquente che lega con la parola' passa a figure come San Patrizio (descritto nelle agiografie come 'potente di parola contro i druidi') e ad altri missionari dell'alta Irlanda.`,
    influence: [
      {
        era: "Invenzione della scrittura celtica",
        text: "Ogma è il dio-scrivano delle genti celtiche, equivalente funzionale di Thot egizio, di Hermes-Mercurio greco-romano, di Odino norreno per le rune. L'ogham, scrittura sua, è ancora oggi studiato filologicamente ed è la più antica forma di scrittura nativa delle isole britanniche. Tecnicamente l'ogham è anche 'ingegnoso' — l'incisione sullo spigolo di una pietra consente una lettura tridimensionale con pochissime intersezioni.",
      },
      {
        era: "Neodruidismo e revival gaelico",
        text: "L'ogham è centrale nel revival neodruidico moderno: ogni lettera è associata a un albero (betulla = inizio, quercia = forza, nocciolo = saggezza, ecc.), creando un sistema divinatorio che i moderni druidi usano al posto delle rune. Robert Graves in 'The White Goddess' (1948) ha elaborato in modo influente (ma ipotetico) un 'calendario arboreo' basato sull'ogham.",
      },
      {
        era: "Ogma e le catene di parole — semiotica antica",
        text: "L'immagine di Ogmios di Luciano — catene d'oro dalla lingua alle orecchie degli uditori — è una delle più antiche e potenti rappresentazioni antiche del potere semantico del linguaggio. Citata da retori rinascimentali (Alciati, Ripa), passa nell'iconografia dell'Eloquenza come 'Ercole celtico': Dürer, Cranach, Rubens la illustrano.",
      },
    ],
    texts: [
      {
        title: "Ogmios descritto da Luciano",
        source:
          "Luciano di Samosata, Herakles, §1-6, ca. 160 d.C., trad. dal greco",
        text: "I celti chiamano Eracle nella loro lingua patria Ogmios, e rappresentano il dio in forma molto strana. Secondo loro è un uomo estremamente vecchio, con la testa calva sul davanti e i pochi capelli rimanenti bianchi; la pelle rugosa e abbronzata dal sole dal nero tipico dei vecchi marinai. Si direbbe Caronte, o qualche Iapeto infernale, piuttosto che Eracle. Pure ha tutti gli attributi di Eracle: indossa la pelle del leone, brandisce la clava, ha la faretra, e la mano destra tiene l'arco teso. Ed ecco la cosa più straordinaria: questo vecchio Eracle trascina dietro di sé una grande folla di uomini, tutti legati per le orecchie con sottili catene. Le catene sono fatte di oro e ambra, e somigliano ai più belli gioielli. Ma gli uomini, benché tenuti da lacci così sottili, non cercano di fuggire — seguono anzi il dio con volti felici, pieni di ammirazione, come se volessero essere trascinati.",
      },
      {
        title: "Il Libro dell'Ogham",
        source:
          "In Lebor Ogaim, Book of Ballymote, fol. 169r, trad. George Calder (1917)",
        text: "Ogma un uomo molto ingegnoso di parola e di poesia. Fu lui che inventò l'Ogham. La causa dell'invenzione fu questa: come prova del suo ingegno, e perché la scrittura fosse propria dei dotti, alla distinzione dei semplici e dei pastori. Il primo messaggio che fu scritto in Ogham fu inciso su una bacchetta di betulla: 'Sette volte la bacchetta sia colpita, fino a che la tua sposa non sia portata al mondo dei Fomori.'",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   EROI IRLANDESI
   ══════════════════════════════════════════════════════════════════════ */

const IRISH_HEROES = [
  /* ════════════════════════════════════════════════════════════════════
     1. CÚ CHULAINN — l'Achille dell'Ulster
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "cuchulainn",
    name: "Cú Chulainn",
    role: "Il Cane di Culann, Campione dell'Ulster",
    tags: ["Ulster", "Guerriero", "Ríastrad", "Morte eroica"],
    epithet:
      "Setanta dal nome di nascita — il Mastino di Culann, il Grande Campione dell'Ulster",
    type: "Eroe",
    chips: ["Ciclo dell'Ulster", "Táin Bó Cúailnge", "Ríastrad", "Muirthemne"],
    heroColor: "linear-gradient(160deg,#1a0800,#4a1a00,#0c0400)",
    shortDesc:
      "L'eroe assoluto del Ciclo dell'Ulster, figlio divino di Lugh e del mortale Sualtam, protagonista della Táin Bó Cúailnge. Prende il nome 'Cú Chulainn' ('Mastino di Culann') dopo aver ucciso a sette anni il cane del fabbro Culann. Signore del ríastrad — la 'distorsione guerriera' che lo trasforma in un mostro terrificante. Difende da solo tutto l'Ulster contro l'esercito di Medb, muore legato a un pilastro di pietra all'età di trentatré anni.",
    bio: {
      main: `Cú Chulainn — nato Setanta — è la figura eroica assoluta della mitologia irlandese, l'Achille celtico: l'incarnazione della gioventù eroica che accetta coscientemente una vita breve in cambio della gloria eterna. La sua vicenda costituisce il nucleo del Ciclo dell'Ulster (in irlandese Rúraíocht) — uno dei quattro grandi cicli della letteratura irlandese antica — e culmina nella Táin Bó Cúailnge, la più grande epopea insulare d'Europa, che molti studiosi hanno paragonato all'Iliade greca per struttura, densità eroica e respiro cosmico.

Figlio divino di Lugh (l'unione avvenne attraverso un inghiottimento magico della madre Deichtine) e del mortale Sualtam (suo padre putativo), Cú Chulainn nasce tre volte — un motivo mitico di 'triplo concepimento' che sottolinea la sua natura sovrumana. Il suo tratto identificativo è il ríastrad ('distorsione guerriera', 'warp-spasm'): in battaglia il suo corpo si contorce in modo grottesco, un occhio si ritira nel cranio mentre l'altro si dilata, la bocca si spalanca fino all'orecchio, il corpo ruota di 180° nella pelle, i capelli si rizzano e da ciascuno sporge una goccia di sangue, e dall'alto del cranio esplode la 'lón laith' — una colonna di sangue nero alta come un albero. Questo non è un berserkergang realista: è la manifestazione teofanica dell'eroe solare in combattimento. Nessuno può guardare Cú Chulainn in ríastrad e sopravvivere.`,
      sub1: "L'infanzia di Setanta e il nome",
      text1: `Setanta cresce a Dún Delgan (attuale Dundalk) ed è allevato da sette padri adottivi — il Dagda, Manannán, Lugh stesso, i druidi — che gli trasmettono ciascuno un'arte. A sette anni si reca da solo a Emain Macha, la corte del re Conchobar mac Nessa, vincendo in combattimento contro 150 ragazzi della 'boy-troop' prima ancora di aver imparato le convenzioni sociali. L'evento che gli cambia il nome avviene un giorno quando Conchobar lo invita a un banchetto presso il fabbro Culann. Setanta ritarda nel giocare. Intanto Culann, ritenendo che tutti gli ospiti siano arrivati, scioglie il suo enorme mastino — un cane di guerra feroce. Quando Setanta arriva, il mastino lo attacca. Il bambino lo affronta a mani nude e lo uccide scagliandogli una palla di sliotar contro la gola. Culann, disperato per la perdita del suo guardiano, si lamenta. Setanta offre: 'Finché non ti cresca un nuovo cane, sarò io il tuo Mastino (Cú).' Da quel giorno è Cú Chulainn — 'il Mastino di Culann'.

A dodici anni prende le armi nel giorno predetto favorevole dal druido Cathbad, ma Cathbad aggiunge: 'Colui che prende oggi le armi sarà famoso per sempre, ma la sua vita sarà breve.' Cú Chulainn risponde di non preoccuparsene: 'Se vivrò un solo giorno e una sola notte nel mondo, pur di lasciare dietro di me la mia fama, mi basta.' È la stessa scelta di Achille — vita breve e gloria, o vita lunga nell'oblio — formulata quattro secoli dopo l'Iliade, in una cultura completamente diversa.`,
      sub2: "L'addestramento di Scáthach e le armi",
      text2: `Per diventare vero campione, Cú Chulainn viaggia verso est oltremare — in territorio che le fonti situano a Dún Scáith sull'Isola di Skye in Scozia — per addestrarsi presso la leggendaria maestra guerriera Scáthach ('l'Ombra'). Qui impara ogni tecnica di combattimento e riceve la sua arma più terribile: il Gáe Bolga ('lancia-saetta' o 'lancia-sacco'), una lancia magica che entra nel corpo con un solo punto ma si apre all'interno in trenta punte barbute, rendendo impossibile estrarla senza squarciare il guerriero in pezzi. Il Gáe Bolga si lancia col piede — una tecnica rituale unica — e può essere usata solo dal guadagnatore iniziato.

Durante l'addestramento Cú Chulainn si unisce alla sorella-rivale di Scáthach, Aífe, concependo con lei un figlio: Connla. Per un giuramento fatto ad Aífe, Cú Chulainn non potrà rivelare il proprio nome in battaglia. Sette anni dopo Connla verrà in Irlanda per cercarlo: Cú Chulainn, non riconoscendolo e legato dal giuramento, lo affronterà e lo ucciderà con il Gáe Bolga — riconoscendolo troppo tardi come proprio figlio. È una delle più strazianti tragedie paterne della letteratura antica, parallelamente al Rustam e Sohrab persiano e al Ildebrando e Adubrando germanico.`,
      sub3: "La Táin — Cú Chulainn solo contro un esercito",
      text3: `Il nucleo dell'epica di Cú Chulainn è la Táin Bó Cúailnge (la 'Razzia delle vacche di Cooley'). La regina Medb del Connacht, desiderosa di possedere il toro cosmico Donn Cúailnge per pareggiare la ricchezza del marito Ailill, muove guerra all'Ulster. Tutti i guerrieri dell'Ulster sono incapacitati dalle 'doglie degli uomini dell'Ulster' — una maledizione di Macha che li costringe a soffrire i dolori del parto per cinque giorni e cinque notti ogni volta che il regno è in pericolo. L'unico guerriero non affetto dalla maledizione (perché non ulaid di sangue: è figlio di Lugh e allevato presso Muirthemne) è Cú Chulainn. Ha diciassette anni.

Per tre mesi Cú Chulainn difende da solo, sui guadi dei confini dell'Ulster, l'intero regno contro l'esercito di Medb. Usa un patto rituale di 'combattimento ai guadi': invita i campioni nemici a venirlo a sfidare uno alla volta, e per tre mesi ne uccide a centinaia. La tensione cresce: Cú Chulainn è sfinito, il corpo coperto di ferite. La Morrígan gli appare, offre amore, viene respinta, maledice. Ferito gravemente, viene assistito dal dio-padre Lugh che lo sostituisce per tre giorni e tre notti, permettendogli di dormire e guarire. Poi torna. Il culmine è il duello con il fratello adottivo Fer Diad — il combattimento più lungo e doloroso di tutta la letteratura celtica, durato quattro giorni — che si conclude con l'uccisione di Fer Diad tramite il Gáe Bolga e il pianto inconsolabile di Cú Chulainn sul corpo dell'amico.`,
      sub4: "La morte in piedi al pilastro",
      text4: `Cú Chulainn è destinato a morire giovane, e i segnali si moltiplicano: i figli di Calatín (che lui stesso ha ucciso) tornano dall'Oltremare cresciuti come maghi assetati di vendetta. Lanciano contro di lui incantesimi che lo costringono a infrangere i suoi geasa (tabù sacri): gli presentano carne di cane — e Cú Chulainn, per la cui dignità è tabù rifiutare il cibo offerto, la mangia, infrangendo però simultaneamente il tabù di non mangiare carne del suo totem (il cane, suo omonimo).

Nella battaglia finale a Muirthemne, Cú Chulainn viene ferito a morte da una lancia magica. Sentendosi morire, si lega con la cintura al pilastro di pietra di Cloch an Fhir Mhóir, così da morire in piedi guardando in faccia il nemico. Il suo 'hero-light' (grianainech, aura solare) lo circonda: nessun nemico osa avvicinarsi. Per tre giorni resta così, morto ma in piedi, tenuto a distanza dall'aura. Solo quando un corvo — la Morrígan — si posa sulla sua spalla, Lugaid mac Con Roí capisce che l'eroe è definitivamente morto, e gli taglia la testa. Ma la spada di Cú Chulainn, cadendo, mozza a sua volta la mano di Lugaid: l'ultimo colpo del guerriero è una vendetta dal cadavere. Cú Chulainn ha trentatré anni. La mitologia irlandese non ha voluto darci una tragedia maggiore.`,
    },
    versions: [
      {
        era: "Táin Bó Cúailnge (Recensione I, XII sec.)",
        name: "L'epopea arcaica",
        text: "La versione più antica della Táin è conservata nel Book of Leinster (XII sec.) ma composta linguisticamente più antica (IX-X sec.). È la versione più 'pagana' — Cú Chulainn è creatura semidivina, il ríastrad è descritto in dettaglio mostruoso, le divinità intervengono apertamente.",
      },
      {
        era: "Aided Chonchulaind (la Morte di Cú Chulainn)",
        name: "Il testo della morte",
        text: "Testo a sé stante dedicato alla morte dell'eroe, conservato in manoscritti dell'XI secolo. Sviluppa il motivo dei geasa infranti, dell'intervento della Morrígan-corvo, del cadavere eretto. È uno dei testi più densi di simbolismo della letteratura irlandese antica.",
      },
      {
        era: "Revival gaelico (XIX-XX sec.)",
        name: "L'eroe nazionale irlandese",
        text: "Durante il Celtic Revival (Yeats, Lady Gregory, AE Russell, Standish O'Grady) Cú Chulainn diventa simbolo nazionale irlandese. La statua di Oliver Sheppard 'The Death of Cúchulainn' (1911-1935) è collocata oggi al General Post Office di Dublino come memoriale dei martiri della Pasqua 1916: Cú Chulainn come archetipo della resistenza eroica irlandese contro l'invasione.",
      },
      {
        era: "Cultura contemporanea",
        name: "Eroe globale",
        text: "Cú Chulainn è diventato figura del fantasy e dei videogames (Fate/stay night, Smite, Final Fantasy), dell'heavy metal (Cruachan, Primordial), della poesia moderna (Thomas Kinsella ne ha tradotto la Táin in una delle più belle versioni inglesi).",
      },
    ],
    cult: "Il territorio sacro di Cú Chulainn è la pianura di Muirthemne (contea di Louth) — il suo 'feudo' celeste. Dún Delgan (Dundalk) conserva il suo nome; il suo pilastro di morte è ancora indicato tradizionalmente a Knockbridge, Co. Louth. Sebbene non venerato come divinità, Cú Chulainn è stato per secoli (e ancora oggi) oggetto di 'venerazione culturale' in Irlanda — figura identitaria totale.",
    influence: [
      {
        era: "Parallelo con Achille e Sigfrido",
        text: "Cú Chulainn è il membro celtico della 'grande famiglia degli eroi indoeuropei giovani': Achille greco, Sigfrido/Siegfried germanico, Arjuna indiano, Batraz osseto. Tutti condividono il tratto di: nascita semidivina, scelta cosciente della gloria sulla vita lunga, arma unica, invulnerabilità parziale con singolo punto debole, morte prematura.",
      },
      {
        era: "Simbolo nazionale irlandese",
        text: "La statua di Sheppard al GPO di Dublino lo ha consacrato a simbolo del nazionalismo irlandese del XX secolo. Nel Nord dell'Ulster anche la comunità unionista/protestante ha tentato di appropriarsene (come 'difensore dell'Ulster'), creando una curiosa contesa identitaria — Cú Chulainn è un eroe così potente che entrambe le comunità irlandesi lo rivendicano.",
      },
      {
        era: "Yeats — Cuchulain Cycle",
        text: "W.B. Yeats ha dedicato a Cú Chulainn un ciclo di cinque drammi teatrali ('On Baile's Strand', 'The Green Helmet', 'At the Hawk's Well', 'The Only Jealousy of Emer', 'The Death of Cuchulainn') — la più ambiziosa rielaborazione letteraria del personaggio nel XX secolo.",
      },
      {
        era: "Cultura pop globale",
        text: "Nel XXI secolo Cú Chulainn è entrato nella cultura pop globale (manga, anime, videogiochi). La sua iconografia — giovane con capelli rossi, lancia barbuta, aura sovrumana — è universalmente riconoscibile come archetipo dell'eroe celtico.",
      },
    ],
    texts: [
      {
        title: "Il ríastrad — la distorsione di Cú Chulainn",
        source: "Táin Bó Cúailnge, Recensione I, trad. Thomas Kinsella (1969)",
        text: "La prima grande distorsione del volto lo fece divenire orribile, terribile, innumerevole. Le sue gambe e le sue ginocchia girarono attorno a sé finché i talloni non furono davanti e i polpacci dietro. Le sfere tendinee della sua testa girarono verso la nuca. Un occhio gli si ritrasse nel cranio così profondamente che neanche l'airone a pesca avrebbe potuto estrarlo; l'altro gli balzò fuori sulla guancia. La sua bocca si torse in modo mostruoso: strappò indietro con la mandibola i polmoni stessi. L'eroe-luce sgorgò dalla sua fronte alta e grande come la mola di un mulino. Il sangue gli si levò dalla cima del cranio in una colonna di fumo nero alta come l'albero di una nave regale, e si disperse nelle quattro direzioni cardinali, formando nubi magiche di bruma.",
      },
      {
        title: "La risposta a Cathbad",
        source: "Compert Con Culainn, trad. dal medio irlandese",
        text: "Allora Cathbad disse: 'Questo è un giorno fortunato. Chi oggi prenderà le armi sarà illustre e nobile; il suo nome sarà grande in Irlanda per sempre. Ma la sua vita sarà breve.' Cú Chulainn udì le parole. Andò da Conchobar e chiese le armi. Conchobar gli porse lance e spada — ed entrambe si spezzarono nelle sue mani. Così con nove, dieci, quindici set. Alla fine Conchobar gli diede le proprie armi, le sole che Cú Chulainn non riuscì a rompere. Allora Cú Chulainn disse: 'Non m'importa se vivrò solo un giorno e una notte nel mondo, purché la fama delle mie gesta non muoia dopo di me.'",
      },
      {
        title: "La morte al pilastro",
        source: "Aided Chonchulaind, Book of Leinster, trad. Whitley Stokes",
        text: "Cú Chulainn prese la sua cintura e si legò al pilastro di pietra, per non morire seduto né coricato, ma in piedi in faccia al nemico. Allora gli uomini di Irlanda gli vennero intorno, ma non osavano avvicinarsi: pensavano che fosse ancora vivo, perché l'aura dell'eroe-luce gli si levava ancora dalla fronte. Per tre giorni e tre notti stette così. Poi venne un corvo e si posò sulla sua spalla. Era la Morrígan venuta a prenderlo. E allora Lugaid mac Con Roí disse: 'Un corvo non si posa mai su un uomo onorato finché questi è vivo.' Avanzò, gli tagliò la testa — e la spada di Cú Chulainn, cadendo, gli tagliò la mano destra. Così morì il Mastino di Culann, all'età di trentatré anni, a Muirthemne, in piedi contro il pilastro di pietra.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. FIONN MAC CUMHAILL
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "fionn",
    name: "Fionn mac Cumhaill",
    role: "Capo dei Fianna, Salmone della Saggezza",
    tags: ["Fianna", "Saggezza", "Caccia", "Nazionale"],
    epithet:
      "Finn il Biondo, Signore dei Fianna, il più saggio guerriero d'Irlanda",
    type: "Eroe",
    chips: ["Ciclo Fiann", "Almu", "Salmone della Saggezza", "Fianna"],
    heroColor: "linear-gradient(160deg,#1a1400,#4a3a00,#0a0800)",
    shortDesc:
      "Capo dei Fianna, la banda guerriera-cacciatrice leggendaria d'Irlanda. A sette anni assaggia il Salmone della Saggezza e diventa onnisciente toccando il pollice con la bocca. Protagonista del Ciclo Fiann — caccia al cervo bianco, battaglie con i Fomori, viaggi nel Sídhe. Muore nella battaglia di Gabhra. Nel folklore irlandese dorme addormentato in una caverna pronto a tornare quando l'Irlanda avrà bisogno di lui.",
    bio: {
      main: `Fionn mac Cumhaill — "Finn, figlio di Cumhal" — è il grande eroe del Ciclo Fiann, il secondo grande ciclo della letteratura irlandese dopo quello dell'Ulster. Se Cú Chulainn è l'eroe aristocratico del nord, legato alla corte fissa di Emain Macha, Fionn è l'eroe della fíanna: le bande guerriere semi-nomadi di uomini giovani (fíanna) che vivono nei boschi, cacciando e proteggendo l'Irlanda dai nemici esterni, soggette a leggi proprie e a un codice d'onore rigoroso. La loro base è a Almu (Hill of Allen, contea di Kildare). Il ciclo narra le loro imprese — cacce magiche, battaglie, amori, viaggi nell'Altro Mondo — ed è attestato in centinaia di manoscritti irlandesi e scozzesi, in una produzione letteraria continua dal IX sec. fino al XIX sec.

Fionn nasce in tragedia: suo padre Cumhall, capo dei Fianna del clan Baiscne, viene ucciso dal rivale Goll mac Morna del clan Morna nella battaglia di Cnucha. La madre Muirne, incinta, viene nascosta nel bosco dove partorisce il bambino, chiamato inizialmente Deimne ('il sicuro'). Cresce nascosto nelle foreste di Sliabh Bladhma, allevato dalla druidessa Bodhmall e dalla guerriera Liath Luachra che gli insegnano rispettivamente la saggezza magica e il combattimento. A sette anni il ragazzo si inizia al suo destino: presso il fiume Boyne conosce il saggio Finnéces (o Finegas), che da sette anni cerca di catturare il Salmone della Saggezza — un salmone che ha mangiato nove nocciole dal Pozzo della Sapienza e contiene tutta la conoscenza del mondo. Finnéces, secondo la profezia, deve essere "Finn" a mangiare il salmone. Quando finalmente lo cattura e lo arrostisce, chiede al ragazzo Deimne di girarlo sul fuoco ma non assaggiarlo. Deimne si brucia il pollice con una goccia di grasso, lo mette in bocca per alleviare il dolore — e assume in quel gesto inconsapevole tutta la saggezza del salmone. Finnéces capisce: il ragazzo è Finn ('il biondo' o 'il chiaro', in realtà l'interpretazione mistica di 'colui che sa'). Da quel momento Fionn, quando ha bisogno di sapere, mette il pollice tra i denti (imbas forosnai, 'la saggezza illuminante') e conosce ogni cosa.`,
      sub1: "I Fianna — la banda sacra e le leggi",
      text1: `I Fianna sono una delle istituzioni più affascinanti della mitologia irlandese: una confraternita guerriera-cacciatrice con leggi sacre, riti di ammissione difficilissimi e un codice d'onore simile ai samurai giapponesi o ai Templari medievali. Per entrare nei Fianna un aspirante doveva superare prove apparentemente impossibili: essere sepolto fino alla vita e difendersi con uno scudo e un bastone di nocciolo contro nove guerrieri che gli lanciano lance; fuggire nella foresta mentre i Fianna lo inseguono, senza farsi raggiungere e senza rompere un solo rametto sotto il piede; estrarre una spina da un piede correndo a piena velocità senza rallentare; conoscere le dodici forme di poesia. Solo chi superava tutte le prove era ammesso. I Fianna erano esenti da tasse, potevano cacciare liberamente in ogni territorio, ma in cambio dovevano difendere l'Irlanda da ogni invasore sovrannaturale o straniero. Vivevano in estate nelle foreste, in inverno erano ospitati in rotazione dai vari clan.

Sotto il comando di Fionn i Fianna raggiungono il massimo splendore. Tra i suoi compagni più famosi: Caílte mac Rónáin, il più veloce corridore dei Fianna, che dopo la loro fine viaggerà con San Patrizio raccontandogli i giorni passati (nel testo Acallam na Senórach, il 'Dialogo degli Antichi', XII sec.); Diarmuid Ua Duibhne, il più bello, destinato alla tragica storia con Gráinne; Oisín, figlio di Fionn, il grande bardo-guerriero che vivrà la sua epopea a Tír na nÓg; Goll mac Morna, il rivale del clan Morna diventato infine leale campione. La 'Salmone Leap' (Léim an Bhradáin) è uno dei feats distintivi dei Fianna: un salto acrobatico straordinario, paragonabile al sauto di Cú Chulainn sulla lancia.`,
      sub2: "Saggezza, caccia, amore",
      text2: `Il mito di Fionn intreccia tre dimensioni. La saggezza viene dall'imbas, la 'illuminazione' ottenuta mordendo il pollice: è la facoltà divinatoria che gli permette di prevedere agguati, di riconoscere identità nascoste, di sapere ciò che è lontano. Ma è anche la saggezza pratica del cacciatore — conoscenza delle erbe, degli animali, del territorio. Fionn è il capo che sa dove il cervo passerà, dove la trappola è tesa, dove nel ruscello il pesce si nasconde.

La caccia è il dominio identitario dei Fianna. Il Fionn cerca il Cervo Bianco, il Cinghiale di Benn Gulbain, il Cavaliere Nero: ogni caccia ha dimensione iniziatica, porta al confine dell'Altro Mondo. Spesso la caccia si trasforma in viaggio sovrannaturale: il cervo inseguito si rivela una donna-fata, il bosco diventa palazzo del Sídhe, e i Fianna si trovano in un regno dove il tempo non scorre. Molti dei racconti del ciclo sono storie di queste 'cacce che diventano altro'.

L'amore è la terza dimensione. Fionn è amante serialmente, sposa molte donne, ha molti figli (Oisín è il più famoso). Ma il suo grande amore tragico è Gráinne: Fionn è ormai vecchio quando chiede la mano della giovane Gráinne, figlia del re Cormac mac Airt. Al banchetto di nozze, Gráinne vede il giovane Diarmuid, lo droga con un incantesimo (un geis irrinunciabile) e fugge con lui. Fionn inseguirà la coppia per sedici anni attraverso tutta l'Irlanda — una delle più lunghe fughe romantiche della letteratura medievale. Alla fine, quando finge la riconciliazione, Fionn causa indirettamente la morte di Diarmuid lasciandolo morire per la ferita del cinghiale di Benn Gulbain, negandogli l'acqua curativa che avrebbe potuto portargli dalle mani. È uno dei momenti più ambigui e amari del ciclo: Fionn, l'eroe saggio e giusto, si lascia distruggere dalla gelosia.`,
      sub3: "La fine dei Fianna e la morte di Fionn",
      text3: `Il declino dei Fianna si consuma nella battaglia di Cnámhross e, definitivamente, nella battaglia di Gabhra (Gowra, contea di Meath) nel III secolo della tradizione mitico-storica — anche se la cronologia reale è fluida. I Fianna erano diventati troppo potenti, troppo indipendenti; il re supremo Cairbre Lifechair, figlio di Cormac mac Airt, decide di abolirli. Lo scontro a Gabhra è una carneficina: i Fianna si estinguono come istituzione. Fionn stesso muore in questa battaglia — o, secondo una seconda tradizione, nel combattimento contro l'oscuro gigante Áiched sulle rive del Boyne.

Ma la morte di Fionn non è una morte definitiva. La tradizione folklorica irlandese e scozzese ha mantenuto viva l'idea che Fionn dorma — come Federico Barbarossa nel Kyffhäuser, come Artù ad Avalon — in una caverna (variamente localizzata: Grotta di Donegal, grotta di Arthur's Seat a Edimburgo, isola di Staffa) con i suoi Fianna addormentati attorno, pronto a svegliarsi e tornare quando l'Irlanda (o la Scozia) avrà bisogno di lui. È l'archetipo mitologico del 'rex quondam, rex futurus' — il re del passato che è anche il re del futuro.

Dopo la morte dei Fianna, il solo Caílte mac Rónáin e pochi altri sopravvivono fino al tempo di San Patrizio. Nel XII secolo viene redatto l'Acallam na Senórach ('Dialogo degli Antichi'), in cui Caílte (e poi lo stesso Oisín di ritorno da Tír na nÓg) accompagnano San Patrizio per l'Irlanda, narrandogli i luoghi e le storie dei Fianna — in un'ambientazione al tempo stesso di memoria pagana e di conversione cristiana. Il testo ha un pathos straordinario: il pagano vecchio e sconfitto racconta all'evangelizzatore le glorie del mondo che sta scomparendo.`,
      sub4: "Ossian, il revival e l'identità celtica moderna",
      text4: `Il Ciclo Fiann ha avuto una diffusione geografica enorme: non solo in Irlanda ma in Scozia (dove Fionn diventa Fingal, e i suoi Fianna diventano i Féinn scozzesi), nelle Isole Ebridi, nell'Isola di Man. Nel XVIII secolo il poeta scozzese James Macpherson pubblicò i 'Fragments of Ancient Poetry' (1760) e poi l'Ossian' (1765), presentati come traduzioni dal gaelico di antiche poesie di Oisín (Ossian) figlio di Fingal (Fionn). Il successo fu mondiale: Napoleone portava con sé una copia, Goethe ne fu estasiato, Jefferson considerò Ossian 'il più grande poeta di ogni tempo'. Il testo era in realtà una rielaborazione libera (più falsificazione che traduzione) — ma il suo impatto fu immenso: l''ossianesimo' fu uno dei grandi movimenti letterari europei, precursore del Romanticismo.

Nel revival gaelico del XIX-XX secolo Fionn è stato restituito alle sue fonti irlandesi autentiche. Yeats, Lady Gregory (con 'Gods and Fighting Men', 1904) e altri hanno ricostruito il ciclo originale. Oggi Fionn rimane figura culturale enorme in Irlanda: i 'Fenians' del movimento nazionalista irlandese (Irish Republican Brotherhood e poi Fianna Fáil) prendono il nome direttamente dai Fianna di Fionn. Il Fianna Fáil, uno dei due grandi partiti politici irlandesi del XX-XXI secolo, è letteralmente 'i Fianna del Destino'. La figura di Fionn, 'l'eroe che un giorno tornerà', è diventata metafora nazionale: l'Irlanda stessa come Fionn dormiente.`,
    },
    versions: [
      {
        era: "Acallam na Senórach (XII sec.)",
        name: "Il dialogo con San Patrizio",
        text: "Il più grande testo del Ciclo Fiann, ca. 8.000 righe. Caílte e Oisín, sopravvissuti, accompagnano San Patrizio per l'Irlanda raccontandogli i luoghi dei Fianna. È al tempo stesso rievocazione nostalgica del paganesimo e celebrazione della conversione — un equilibrio impossibile, eseguito dal redattore anonimo con maestria straordinaria.",
      },
      {
        era: "Ossian di Macpherson (1760-1765)",
        name: "La trasfigurazione scozzese",
        text: "James Macpherson, poeta scozzese, pubblica poemi presentati come 'antiche traduzioni dal gaelico'. In realtà sono riscrittura libera con molti elementi inventati. Ma l'impatto sull'Europa è colossale: Goethe, Napoleone, Herder, Chateaubriand lo leggono e ne sono plasmati. Il Romanticismo europeo nasce in gran parte dall'Ossian.",
      },
      {
        era: "Revival gaelico e Fianna Fáil",
        name: "I Fenians politici",
        text: "Dagli anni 1850 in Irlanda il movimento nazionalista si autodefinisce 'Fenians' (Feniani) rimandando ai Fianna. Il Fianna Fáil (1926), uno dei due grandi partiti politici irlandesi, eredita il nome. Fionn è diventato simbolo politico-identitario.",
      },
      {
        era: "Letteratura moderna",
        name: "Joyce, Yeats, Flann O'Brien",
        text: "Joyce allude a Fionn in Finnegans Wake (il titolo stesso è un gioco 'Finn-egan, Finn again, Finn di nuovo'). Flann O'Brien scrive 'At Swim-Two-Birds' (1939), romanzo comico-postmoderno in cui Fionn è personaggio tra altri. Seamus Heaney traduce parti del ciclo.",
      },
    ],
    cult: "Almu (Hill of Allen, Kildare) è la sede mitica dei Fianna. La collina è visibile nel paesaggio ed è ancora oggi meta di escursioni. In Scozia la 'Fingal's Cave' (Grotta di Fingal) sull'isola di Staffa è il sito più famoso — resa celebre dall'ouverture di Mendelssohn (1830). Il Giant's Causeway dell'Ulster è nella tradizione popolare la strada costruita da Fionn per attraversare il mare fino in Scozia.",
    influence: [
      {
        era: "L'ossianesimo europeo",
        text: "L'Ossian di Macpherson (1765) è stato uno dei testi più influenti della letteratura europea del XVIII-XIX sec. Ha dato nome a un'epoca estetica (stile Ossian in pittura — Girodet, Ingres, Runge), ha influenzato il Romanticismo tedesco (Goethe, Schiller), francese (Chateaubriand), russo (Puškin), italiano (Foscolo, Leopardi). Napoleone lo portava in guerra.",
      },
      {
        era: "Fianna Fáil e Fenians",
        text: "Il movimento politico nazionalista irlandese ha letteralmente adottato il nome di Fionn. I Fenians (XIX sec.), il partito Fianna Fáil (XX-XXI sec.) rivendicano discendenza mitica. Fionn è così il caso più eclatante di eroe mitologico diventato simbolo politico nazionale in epoca moderna.",
      },
      {
        era: "Il motivo del re dormiente",
        text: "L'archetipo di Fionn addormentato in caverna (come Artù, Barbarossa, Olaf Tryggvason) è universale in Europa. È il mito della 'sovranità sospesa', del leader che tornerà quando il popolo ne avrà più bisogno. In Irlanda questo mito si è politicizzato durante la resistenza all'occupazione inglese.",
      },
      {
        era: "Giant's Causeway e il folklore paesaggistico",
        text: "Il Giant's Causeway (Ulster), formazione geologica basaltica, è attribuito nel folklore popolare alla costruzione di Fionn (da qui il nome): lo avrebbe costruito per attraversare il mare e combattere con il gigante scozzese Benandonner. Questa proiezione di Fionn sul paesaggio è tipica: la sua figura ha dato nome a decine di colline, pietre, caverne in Irlanda.",
      },
    ],
    texts: [
      {
        title: "Il Salmone della Saggezza",
        source: "Macgnímartha Finn ('Le gesta infantili di Finn'), XII sec.",
        text: "Finnéces pescò il salmone dopo sette anni di ricerca. Ordinò al ragazzo di arrostirlo ma di non mangiarne. Mentre il salmone cuoceva, una bolla comparve sulla pelle; il ragazzo la ruppe col pollice e si scottò. Per il dolore mise il pollice in bocca. Finnéces venne, guardò il ragazzo e disse: 'Tu non ti chiami Deimne?' 'No,' rispose il ragazzo. 'Come ti chiami allora?' 'Finn, così mi hanno chiamato.' 'Sia fatto: il salmone è tuo.' E da quel momento ogni volta che Finn voleva sapere qualcosa, metteva il pollice tra i denti, e cantava con la musica della saggezza (teinm laida) — e gli era rivelato quello che voleva conoscere.",
      },
      {
        title: "Il dialogo di Oisín e Patrizio",
        source: "Acallam na Senórach, trad. Standish O'Grady (1892)",
        text: "Patrizio disse: 'Oisín, il tuo Dio Fionn è morto, e con lui i Fianna — tutti nelle fiamme dell'inferno per i loro peccati di violenza.' Oisín rispose: 'Se il tuo Dio non è accogliente come Fionn lo era con il povero e l'ospite, il tuo Dio non è un vero Dio. Se i Fianna sono nell'inferno del tuo Dio, allora dei Fianna fu piena la gioia di quell'inferno — perché sono là i compagni, e i giorni della caccia, e le sere dei banchetti. Dove sono i miei compagni, lì è il cielo.' Patrizio tacque.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════
     ↓↓↓   MARKER: INSERIRE QUI IL LOTTO 1B (altri 3 eroi)   ↓↓↓
     Diarmuid, Conchobar, Oisín vanno inseriti esattamente a questa posizione
     — prima di `];` che chiude IRISH_HEROES.
     ══════════════════════════════════════════════════════════════════════ */
  /* ════════════════════════════════════════════════════════════════════
     3. DIARMUID UA DUIBHNE
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "diarmuid",
    name: "Diarmuid Ua Duibhne",
    role: "L'Amante Fatato, il più bello dei Fianna",
    tags: ["Amore", "Fuga", "Cinghiale", "Tragedia"],
    epithet: "Diarmuid 'Ball Seirce' — il Nobile dal Segno d'Amore",
    type: "Eroe",
    chips: ["Ciclo Fiann", "Gráinne", "Benn Gulbain", "Geis"],
    heroColor: "linear-gradient(160deg,#0a0a1a,#1a1a3a,#050510)",
    shortDesc:
      "Il più bello dei Fianna, portatore del 'ball seirce' — un neo magico d'amore sulla fronte che nessuna donna può vedere senza innamorarsi. Promessa sposa del suo signore Fionn è invece Gráinne, che posa lo sguardo su Diarmuid e lo costringe con un geis a fuggire con lei. Segue la più famosa fuga romantica della letteratura celtica — sedici anni attraverso tutta l'Irlanda. Morirà ferito dal cinghiale di Benn Gulbain, abbandonato da Fionn.",
    bio: {
      main: `Diarmuid Ua Duibhne — "Diarmuid dei discendenti di Duibhne" — è il secondo più importante eroe del Ciclo Fiann dopo lo stesso Fionn, ed è uno dei più affascinanti: è il 'Paris' dei Fianna, ma senza vigliaccheria e con tutta l'onorabilità di un campione. La sua tragedia nasce da un attributo sovrannaturale che non ha scelto: il ball seirce — letteralmente "segno d'amore" o "neo d'amore" — una macchia o neo sulla fronte, visibile solo alle donne, e di tale magia che ogni donna che lo veda si innamori immediatamente e irreversibilmente di lui. Il segno è un dono-maledizione degli dèi, e Diarmuid di solito lo tiene coperto da una frangia di capelli; ma ogni volta che viene inavvertitamente scoperto, le conseguenze sono fatali.

Diarmuid è figlio di Donn (un uomo dei Fianna, da non confondere con il dio dei morti) e di Crochnuit. È allevato al Brú na Bóinne dal dio Aengus Óg — protettore divino dei giovani amanti — che gli farà da padre adottivo e interverrà più volte a proteggerlo nella sua fuga. Questa tutela divina è essenziale: Diarmuid è l'eroe che ha un dio a fianco, e sarà proprio il tradimento di questa protezione a causare la sua morte.`,
      sub1: "Il ball seirce e il banchetto fatale",
      text1: `La storia centrale di Diarmuid è il Tóraigheacht Dhiarmada agus Ghráinne — "L'Inseguimento di Diarmuid e Gráinne" — uno dei più famosi racconti della letteratura irlandese, attestato dal XV secolo ma probabilmente composto molto prima. Fionn mac Cumhaill, rimasto vedovo e invecchiato, chiede in sposa Gráinne, giovane e bellissima figlia del re supremo Cormac mac Airt. Gráinne accetta, ma al banchetto di nozze vede i Fianna e scopre tra loro Diarmuid. In un momento in cui la frangia di capelli gli cade dalla fronte, ella vede il ball seirce — ed è perduta. Decide in quell'istante che non sposerà Fionn vecchio ma fuggirà con Diarmuid giovane.

Gráinne drogando il vino con un sonnifero fa addormentare Fionn e quasi tutti i Fianna, poi si avvicina a Diarmuid e gli impone un geis — un tabù sacro, inviolabile nella cultura irlandese: 'Ti pongo sotto i vincoli del geis, vincoli che nessun uomo vero di Fianna osa rompere: fuggi con me questa notte, prima che Fionn si svegli.' Diarmuid è disperato: Fionn è il suo capo, il suo padre-adottivo-in-armi, l'ha onorato e benedetto. Consulta Oscar, Oisín, Diorraing: tutti confermano che il geis di una donna è inviolabile. Diarmuid, piangendo, fugge con Gráinne — non per amore iniziale, ma per onorare il geis.`,
      sub2: "L'inseguimento di sedici anni",
      text2: `Fionn si sveglia, scopre la fuga, monta su tutte le furie. Inizia l'inseguimento più lungo della letteratura celtica: sedici anni, attraverso tutta l'Irlanda. Diarmuid e Gráinne si muovono notte e giorno, dormono sempre in luoghi diversi, costruiscono 'letti di Diarmuid e Gráinne' (Leaba Dhiarmada agus Ghráinne) — dolmen e grotte che oggi portano questo nome in decine di località irlandesi, testimonianza della fama popolare del mito.

Durante la fuga Diarmuid e Gráinne si innamorano veramente — l'amore che all'inizio era unilaterale da parte di Gráinne diventa reciproco. Hanno quattro figli. Diarmuid osserva inizialmente una clausola di castità paradossale: fuggendo con Gráinne per geis, non la tocca; lascia come 'indicazione' a Fionn un pezzo di carne non mangiato, un letto non dormito, un giaciglio non sporcato, per dimostrare che non ha consumato. Gráinne lo schernisce fino a piegarlo: 'L'acqua del guado in cui hai posato il piede è più coraggiosa di te.' Diarmuid cede all'amore.

Il padre-adottivo Aengus Óg li protegge: li avvolge nel suo mantello di invisibilità, li trasporta nel Brú, dà consigli strategici. Molti membri dei Fianna stessi — Oscar, Oisín — simpatizzano con Diarmuid e cercano di mediare. Fionn è implacabile ma anche, gradualmente, esausto. Dopo sedici anni accetta formalmente la riconciliazione. Diarmuid e Gráinne si stabiliscono in pace nel territorio di Kerry.`,
      sub3: "Il cinghiale di Benn Gulbain",
      text3: `La tragedia di Diarmuid è innescata da un geis della sua nascita: egli è sotto il tabù di non cacciare mai il cinghiale di Benn Gulbain, perché quel cinghiale è suo fratellastro — figlio di sua madre e di un uomo che era stato trasformato in cinghiale dopo essere stato ucciso per gelosia dal padre adottivo di Diarmuid stesso. La storia è una catena di vendette familiari rimosse.

Fionn, pur avendo accettato la riconciliazione, organizza una grande caccia sul Benn Gulbain (attuale Ben Bulben, contea di Sligo — uno dei più spettacolari monti d'Irlanda). Diarmuid è invitato. Diarmuid sa del geis ma non può rifiutarsi senza mostrare paura (altro geis dei Fianna: non rifiutare mai una caccia). Va. Il cinghiale compare, enorme, demoniaco. Diarmuid lo affronta. Il combattimento è terribile. Diarmuid uccide il cinghiale ma viene fatalmente ferito — una lunga ferita nell'addome.

Fionn arriva sulla scena. Diarmuid giace morente. Le mani di Fionn hanno il potere magico di guarire — raccogliendo acqua tra le sue palme e versandola nella bocca del morente, può risanare ogni ferita. Tre volte Diarmuid gli chiede l'acqua. Tre volte Fionn scende alla fonte, raccoglie l'acqua, ma al ritorno, ripensando a Gráinne, lascia sfuggire l'acqua tra le dita. Al quarto tentativo, convinto dai figli Oisín e Oscar, Fionn porta finalmente l'acqua — ma è troppo tardi. Diarmuid è morto. I Fianna piangono. Oscar affronta il nonno: 'Tu hai ucciso un uomo che era un tuo figlio, hai rotto il giuramento dei Fianna.' Fionn non risponde. Aengus Óg arriva, prende il corpo di Diarmuid e lo porta al Brú na Bóinne, dove ogni giorno gli soffia dentro un'anima così da poter conversare con lui dopo la morte.`,
      sub4: "L'archetipo dell'amore tragico celtico",
      text4: `Diarmuid e Gráinne formano uno dei grandi archetipi romantici della letteratura mondiale. Alcuni studiosi — James Carney, Rachel Bromwich — hanno proposto che la loro storia sia il modello originale di Tristano e Isotta, uno dei più importanti romanzi medievali europei: il triangolo re-vecchio / nipote-giovane / sposa-promessa; l'amore-incantamento (filtro nel Tristano / geis nel Diarmuid); la fuga nella foresta; l'impossibile scelta tra amore e fedeltà. L'Tristano gallese (Drystan / Esyllt) e poi normanno (Béroul, Thomas d'Inghilterra) sarebbe una trasposizione brittonica del mito irlandese primordiale.

Il mito ha anche dimensioni più profonde. Diarmuid è l'eroe che paga la protezione divina al prezzo dell'autonomia: è così protetto da Aengus da diventare dipendente; quando il dio non può intervenire, muore. Il ball seirce è una condanna: essere desiderato al di là di ogni volontà. Il geis di Gráinne è tirannia sacra: il rispetto del tabù porta alla tragedia. L'intera storia è una meditazione sull'irrevocabilità della parola e del destino: ogni vincolo pronunciato è una traiettoria ineluttabile.

Nella cultura contemporanea Diarmuid e Gráinne restano figure centrali. Il 'Diarmuid and Gráinne's Bed' è toponimo diffuso; il monte Ben Bulben (Benn Gulbain) è visitato per la sua epopea; la storia è stata rielaborata in opera (Edgar Bainton, 1928), in romanzo (Morgan Llywelyn), in film. Yeats chiese di essere sepolto sotto il Ben Bulben — e vi è sepolto — proprio per la risonanza mitica di quel monte. La sua epitaffio 'Cast a cold eye / On life, on death / Horseman, pass by' è incisa a fronte di quel paesaggio.`,
    },
    versions: [
      {
        era: "Tóraigheacht Dhiarmada (XV sec., base più antica)",
        name: "Il testo classico",
        text: "La versione più elaborata della storia è il Tóraigheacht Dhiarmada agus Ghráinne, compilato nel tardo Medioevo su nuclei più antichi. Contiene il racconto integrale dei sedici anni di fuga, con decine di episodi secondari e descrizioni paesaggistiche dettagliatissime.",
      },
      {
        era: "Tristano e Isotta",
        name: "La trasposizione continentale",
        text: "La parentela strutturale con Tristano e Isotta è oggetto di studio secolare. Sebbene non vi sia prova diretta di derivazione, la corrispondenza dei temi (triangolo, fuga, filtro/geis, foresta, morte) è così forte che molti studiosi postulano un archetipo celtico primordiale alla base di entrambe le tradizioni.",
      },
      {
        era: "Yeats e Ben Bulben",
        name: "L'eredità paesaggistica",
        text: "Il Ben Bulben è uno dei paesaggi più celebri della poesia di W.B. Yeats, proprio per la sua dimensione mitica. La 'memoria di Diarmuid' ha reso quel monte un 'paesaggio sacro' moderno, di ispirazione continua per poeti e pittori.",
      },
      {
        era: "Lady Gregory, Joyce, Beckett",
        name: "Rielaborazioni letterarie",
        text: "Lady Gregory racconta la vicenda in 'Gods and Fighting Men' (1904). James Joyce ne fa riferimenti in Ulysses e Finnegans Wake (i personaggi di Earwicker e Anna Livia giocano la parte di Fionn e Gráinne). Beckett allude al 'Diarmuid's Bed'. Il mito permea la letteratura irlandese del XX sec.",
      },
    ],
    cult: "Benn Gulbain (Ben Bulben, contea di Sligo) è il 'monte di Diarmuid' — sito mitico della sua morte e uno dei più dramatici paesaggi d'Irlanda. I 'Diarmuid and Gráinne's Beds' sono decine di dolmen e grotte in tutta l'Irlanda indicati come i 'letti' della loro fuga: il più celebre è quello di Glenade, contea di Leitrim.",
    influence: [
      {
        era: "Tristano e Isotta",
        text: "L'influenza sul mito di Tristano e Isotta — archetipo fondante del romanzo europeo — è probabile anche se non certificabile. Il motivo della fuga amorosa, del filtro/geis, della foresta-rifugio e del tradimento del re-zio passa alla materia di Bretagna e da qui a tutta la cultura romantica europea.",
      },
      {
        era: "Yeats e il paesaggio sacro",
        text: "Yeats ha fatto del Ben Bulben un paesaggio mitico moderno. La sua tomba a Drumcliff, ai piedi del monte, è uno dei luoghi di pellegrinaggio letterario più visitati in Irlanda. Il mito di Diarmuid è inseparabile dal paesaggio yeatsiano.",
      },
      {
        era: "Cinema e musica",
        text: "La storia è stata trasposta in opera (Bainton), in musica celtica contemporanea (The Chieftains), in produzioni cinematografiche irlandesi. L'archetipo 'amante proibita + geis + fuga' è uno dei più riconoscibili della tradizione celtica.",
      },
    ],
    texts: [
      {
        title: "Gráinne impone il geis",
        source:
          "Tóraigheacht Dhiarmada agus Ghráinne, trad. Standish O'Grady (1857)",
        text: "Gráinne si avvicinò a Diarmuid e disse: 'Ti pongo sotto i vincoli del geis, o Diarmuid figlio di Donn — vincoli di pericolo e di distruzione, se tu non mi prendi con te fuori di questa sala prima che Fionn e la casa di Cormac si svegliano.' Diarmuid rispose: 'O Gráinne, questi sono vincoli malvagi che hai posto su di me. Perché, tra tutti gli uomini del mondo, hai scelto me?' 'Per questo — perché nel banchetto ho visto il tuo ball seirce, e non ho più potuto amare altro.'",
      },
      {
        title: "La quarta acqua",
        source: "Tóraigheacht Dhiarmada, cap. XXXII, trad. dal gaelico medio",
        text: "Fionn andò alla fonte e raccolse l'acqua nelle sue palme. Ma mentre tornava verso Diarmuid, ricordò Gráinne; e le sue dita si aprirono, l'acqua cadde. Andò una seconda volta — stessa cosa. Andò una terza volta — stessa cosa. Oscar suo figlio lo affrontò: 'Tu farai ciò che nessun uomo di Fianna ha mai fatto — perderai l'onore davanti al mondo. Se non porti quest'acqua a Diarmuid, una sola testa resterà sul collo in questo posto: o la tua o la mia.' Fionn andò una quarta volta. Ma quando tornò, la vita aveva lasciato Diarmuid ed era morto. E Fionn e i Fianna piansero tutti tre grandi pianti su di lui.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. CONCHOBAR MAC NESSA
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "conchobar",
    name: "Conchobar mac Nessa",
    role: "Re dell'Ulster, Protagonista della Tragedia di Deirdre",
    tags: ["Ulster", "Re", "Deirdre", "Tragedia"],
    epithet: "Conchobar figlio di Ness, il Re Vecchio di Emain Macha",
    type: "Eroe",
    chips: ["Ciclo dell'Ulster", "Emain Macha", "Deirdre", "Re Sacro"],
    heroColor: "linear-gradient(160deg,#120a00,#382200,#0a0600)",
    shortDesc:
      "Il re dell'Ulster nel ciclo della Táin: protettore di Cú Chulainn, grande sovrano di Emain Macha, ma anche figura tragica e moralmente ambigua. Responsabile della morte di Deirdre e dei Figli di Uisliu — una delle tre 'storie dolorose' d'Irlanda. Nonno di Cú Chulainn (in linea spirituale) e padre di Cormac Connlongas. Muore colpito da una palla di calcio incrostata (il cervello di un nemico) che gli resta in testa per sette anni.",
    bio: {
      main: `Conchobar mac Nessa — "Conchobar figlio di Ness" (secondo la matronimia, non patronimia: dal nome della madre, perché sua madre Ness ebbe un ruolo decisivo nel suo regno) — è il re dell'Ulster nel Ciclo dell'Ulster e una delle figure più complesse della mitologia irlandese. È re grande e sfarzoso, patrono dei Cattro Uomini dell'Ulster (Gáe Fulainn), padrone della corte di Emain Macha (Navan Fort, Co. Armagh, capitale archeologicamente riscoperta), nonno di Cú Chulainn in senso spirituale (è uno dei suoi padri adottivi). Ma è anche tiranno capace di atti moralmente riprovevoli — il più famoso dei quali è la vicenda di Deirdre.

Figlio di Fachtna Fáthach e di Ness figlia di Eochu Sálbuide, Conchobar arriva al trono attraverso un inganno della madre. Alla morte di Fachtna il trono passa a Fergus mac Róich. Ness accetta di sposare Fergus a condizione che il figlio piccolo Conchobar regni simbolicamente per un anno — una formalità per onorare il padre morto. Fergus accetta. Alla fine dell'anno, Ness e la fazione che ha costruito con i nobili dell'Ulster rifiutano di restituire il trono. Fergus, per evitare guerra civile, cede. Conchobar regna. Diventerà il più glorioso re d'Irlanda del suo tempo — e Fergus, tradito, diventerà il suo antagonista che migrerà in Connacht a servizio della regina Medb, combattendo poi contro l'Ulster stesso nella Táin.`,
      sub1: "La corte di Emain Macha e i grandi campioni",
      text1: `Sotto Conchobar, Emain Macha raggiunge il massimo splendore. È la capitale dell'Ulster: un complesso fortificato sull'attuale Navan Fort (i cui scavi archeologici hanno confermato la realtà storica del sito, con un importante santuario rotondo del I sec. a.C.). La corte di Conchobar è composta da tre sezioni: la 'Casa Rossa' (Teach Cró — sala dei banchetti), la 'Casa dei Giudizi' (Teach Mídchúarda), il 'Sogno Sacro' (Teach in Grianáin — stanza delle regine). La corte è il centro del mondo ulaid.

I campioni di Conchobar formano la Craobh Rua — il 'Ramo Rosso' dei guerrieri dell'Ulster, confraternita elitaria paragonabile per fama ai Fianna di Fionn ma più aristocratica e stanziale. Tra loro: Conall Cernach ('Conall Vittorioso'), il più feroce; Cú Chulainn, il più grande; Fergus mac Róich prima del tradimento; Naoise (figlio di Uisliu) destinato alla tragedia con Deirdre; Cathbad il druido, saggio consigliere; Bricriu il demagogo maligno; Lóegaire Búadach. Conchobar presiede su questa élite con sovranità assoluta, ma in realtà è il carisma dei campioni — specialmente di Cú Chulainn — a sorreggere il suo regno.`,
      sub2: "La tragedia di Deirdre e dei Figli di Uisliu",
      text2: `Il Longes mac nUislenn ("L'Esilio dei Figli di Uisliu") è una delle tre 'storie dolorose d'Irlanda' (trí truaighe na scéalaigheachta) e il più controverso episodio del regno di Conchobar. Alla nascita di Deirdre, figlia del cantastorie di corte Fedlimid, il druido Cathbad profetizza: questa bambina sarà la donna più bella d'Irlanda e porterà distruzione all'Ulster. I guerrieri chiedono di ucciderla immediatamente. Conchobar rifiuta: la farà crescere in reclusione, isolata, e la sposerà lui stesso quando sarà adulta — così disinnescherà la profezia.

Deirdre cresce in una fortezza-foresta con la sola nutrice e la maestra Leborcham. A venti anni vede un giorno un corvo che beve sangue sulla neve accanto a un telo nero — e dichiara: 'Amerò l'uomo che avrà capelli neri come il corvo, pelle bianca come la neve, guance rosse come il sangue.' Leborcham risponde: 'Questo uomo è Naoise figlio di Uisliu, al servizio di Conchobar.' Deirdre si innamora della sola immagine. Riesce a incontrare Naoise, gli impone un geis di fuggire con lei. Naoise, insieme ai fratelli Ainnle e Ardan, scappa con Deirdre in Alba (Scozia) dove vivono in esilio per sedici anni.

Dopo sedici anni Conchobar, vecchio e ostinato, finge di perdonare e manda Fergus mac Róich come garante del salvacondotto. I Figli di Uisliu tornano fiduciosi. Conchobar, con un inganno (fa trattenere Fergus da un banchetto imposto per geis), li attira a Emain senza protezione e li fa uccidere da Eógan mac Durthacht. Deirdre cade in un lutto totale. Conchobar, non contento, la costringe a subire un anno come concubina e poi minaccia di darla in dono a Eógan — proprio l'uccisore di Naoise. Mentre il carro la sta portando da Eógan, Deirdre si getta dal carro spaccandosi la testa contro una roccia. Muore.

L'episodio è il più nero di Conchobar: orgoglio, cupidigia, incapacità di accettare di aver perso, spergiuro del salvacondotto. Fergus, tradito personalmente nella sua funzione di garante, abbandona l'Ulster con tremila uomini del Ramo Rosso e va a servire Medb in Connacht — ponendo le basi della Táin.`,
      sub3: "Il re debole della Táin, il tiranno e l'anti-eroe",
      text3: `Nella Táin Bó Cúailnge Conchobar appare al tempo stesso come grande re e come figura tragicamente passiva. L'Ulster intero — per la maledizione di Macha che castigò le donne dell'Ulster umiliate da Conchobar stesso — è colpito dalle ces noínden, le doglie che rendono ogni guerriero dell'Ulster incapace di combattere per cinque giorni e cinque notti esattamente nei momenti di maggior pericolo. Tutto l'esercito è supino. Solo Cú Chulainn (che, non essendo ulaid di sangue, non subisce la maledizione) difende il regno. Conchobar è re di un regno paralizzato, capace solo di aspettare.

Quando finalmente, dopo mesi, la maledizione si libera, Conchobar si alza e guida la battaglia finale — in cui i Connachta sono sconfitti. Ma il trionfo è amaro: la sua grandezza è stata possibile solo grazie al sacrificio di Cú Chulainn, e la sua responsabilità morale per la disgrazia (la sua tirannia su Macha ha causato la maledizione, le sue azioni su Deirdre hanno causato la defezione di Fergus che ha causato la guerra) gli fa ombra per sempre.`,
      sub4: "La morte — il cervello di Mes Gegra",
      text4: `La morte di Conchobar è uno dei racconti più singolari della mitologia celtica. Durante una battaglia precedente, il guerriero dell'Ulster Conall Cernach aveva ucciso il re del Leinster Mes Gegra, e, secondo il rituale celtico del cervello-trofeo (ben documentato archeologicamente — i celti preservavano il cervello dei nemici in calce come simbolo di potenza), aveva tolto il cervello di Mes Gegra e lo aveva indurito con calce in una sfera, conservandola tra i trofei di Emain Macha.

Un giorno il guerriero connachta Cét mac Mágach, in visita ostile a Emain, ruba la palla e la inserisce nella sua fionda. In una successiva battaglia contro gli ulaid Cét lancia la palla contro Conchobar, colpendolo in fronte. La palla si conficca nel cranio senza entrare del tutto: rimuoverla significherebbe morte immediata. I medici la lasciano in loco — ma avvertono Conchobar che non dovrà mai eccitarsi o perderà la vita.

Conchobar vive così sette anni con il cervello del nemico incastonato in testa. Alla fine, secondo una versione del mito fortemente cristianizzata, riceve notizia della crocifissione di Cristo (sincronicamente avvenuta in Palestina) e della oscurità cosmica che ne accompagna la morte. Conchobar va in furia — 'Un uomo giusto viene ucciso?!' — brandisce la spada contro gli alberi fingendo di combattere per lui. La collera fa esplodere la palla nel cranio. Conchobar muore. Essendo diventato 'cristiano d'anima' in quella furia, alcuni testi medievali lo salvano dall'inferno. È un dei primi esempi di sincretismo mitologico-cristiano nella letteratura irlandese: il re pagano che 'riconosce Cristo' in punto di morte.`,
    },
    versions: [
      {
        era: "Ciclo dell'Ulster (Táin e storie satellite)",
        name: "Il re della grande epica",
        text: "Conchobar è protagonista sullo sfondo in tutto il Ciclo dell'Ulster: Táin Bó Cúailnge, Longes mac nUislenn, Scéla Muicce Meic Da Thó, Mesca Ulad. La sua figura emerge come somma di tratti luminosi (magnanimità del patrono, autorità del re) e oscuri (orgoglio, tradimento del salvacondotto, gelosia).",
      },
      {
        era: "Longes mac nUislenn (XI sec.)",
        name: "Il tiranno di Deirdre",
        text: "Nel 'Esilio dei Figli di Uisliu' Conchobar è senza attenuanti il cattivo. La cristianizzazione tardiva del testo — i monaci — non riesce a mitigare la durezza del ritratto: è una delle rare tragedie della letteratura medievale che non dà giustificazione al sovrano.",
      },
      {
        era: "Aided Conchobuir",
        name: "Il re che muore per la morte di Cristo",
        text: "La 'Morte di Conchobar' è testo ibrido pagano-cristiano. L'idea che un re pagano d'Irlanda abbia sincronicamente saputo della morte di Cristo (secondo le cronologie medievali: stesso anno) e ne sia morto di rabbia è un tentativo di 'salvare' retroattivamente i grandi re pagani — li ri-cristianizza in modo miracoloso.",
      },
      {
        era: "Synge, Yeats, Russell — il revival della tragedia di Deirdre",
        name: "Il tema moderno",
        text: "Il tema di 'Deirdre of the Sorrows' è stato rielaborato molte volte nel revival letterario irlandese: J.M. Synge ha scritto 'Deirdre of the Sorrows' (1910), Yeats 'Deirdre' (1907), AE Russell un dramma omonimo. In tutte queste versioni Conchobar è il tiranno vecchio, emblema della tirannia che distrugge la bellezza.",
      },
    ],
    cult: "Emain Macha (Navan Fort, Co. Armagh, Irlanda del Nord) è il sito archeologico e mitico della corte di Conchobar. Gli scavi archeologici hanno documentato un'imponente struttura rituale del I sec. a.C. (il 'Site B') — cerimonialmente incendiata, un atto sacro deliberato. Il sito è oggi parco archeologico visitabile. Non vi è culto propriamente di Conchobar, ma il nome della capitale è fortemente identitario della provincia dell'Ulster.",
    influence: [
      {
        era: "Deirdre — tema europeo",
        text: "La tragedia di Deirdre è stata rielaborata in decine di drammi moderni (Yeats 1907, Synge 1910, AE 1905, Samuel Ferguson 1880). È uno dei nuclei mitologici irlandesi più diffusi nella cultura mondiale — 'Deirdre of the Sorrows' è figura universalmente riconosciuta come emblema della bellezza tragica.",
      },
      {
        era: "Emain Macha — identità ulaid",
        text: "Il nome 'Ulster' deriva dagli 'Ulaid', il popolo di Conchobar. La continuità identitaria tra il regno mitologico dell'Ulster e l'attuale provincia dell'Ulster è uno dei casi più straordinari di memoria storica di un popolo in Europa.",
      },
      {
        era: "Il re che 'si converte' per rabbia",
        text: "La morte di Conchobar come 'primo cristiano' irlandese anticipa la figura di Oisín nell'Acallam — il pagano che dialoga con i cristiani. È un modello medievale di sincretismo pacifico che ha segnato l'identità culturale irlandese, cristianizzata senza violenza radicale e perciò capace di conservare strati pagani nel folklore.",
      },
    ],
    texts: [
      {
        title: "La profezia di Cathbad su Deirdre",
        source:
          "Longes mac nUislenn, Book of Leinster, XII sec., trad. Vernam Hull (1949)",
        text: "Cathbad disse: 'Una donna è in questo grembo, una donna dai capelli d'oro, dagli occhi lucenti, dalle guance di porpora. La sua bellezza farà crescere desiderio nei re, i principi di fuori, gli uomini potenti d'Irlanda. Ma per lei cadranno molte teste dell'Ulster — molti uomini figli del re, molti valorosi. E il suo nome sarà Deirdre: \"quella che fa tremare\".' Allora gli uomini dell'Ulster dissero: 'Uccidiamola!' Ma Conchobar rispose: 'Non così. La farò crescere isolata, e quando sarà donna la prenderò io stesso come sposa.' E la bambina fu portata via e affidata in segreto.",
      },
      {
        title: "La morte di Conchobar",
        source: "Aided Conchobuir, XII sec., trad. Kuno Meyer (1906)",
        text: "Al settimo anno dopo l'inserimento della palla di Mes Gegra, Conchobar udì un terribile tuonare e vide il sole oscurarsi. 'Che accade?' chiese al druido Bricín. 'Un uomo senza peccato è stato inchiodato su una croce in Giudea — un uomo divino, più bello e giusto di ogni altro. E questo è il tuonare della sua morte.' Allora Conchobar, conosciuto lo sdegno, brandì la sua spada contro una quercia urlando: 'Se io fossi là, difenderei quest'uomo!' E il violento assalto fece saltare la palla dal cranio, e il cervello di Mes Gegra cadde al suolo, e con esso cadde Conchobar morto. Ma i dotti dicono che per la sua fede nel Cristo — riconosciuto nel solo momento — egli fu il primo cristiano d'Irlanda, e andò in cielo.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. OISÍN
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "oisin",
    name: "Oisín",
    role: "Bardo dei Fianna, il viaggiatore di Tír na nÓg",
    tags: ["Bardo", "Tír na nÓg", "Tempo", "Nostalgia"],
    epithet: "Oisín 'Cervetto' figlio di Fionn, il poeta eterno",
    type: "Eroe",
    chips: ["Ciclo Fiann", "Tír na nÓg", "Niamh", "Acallam na Senórach"],
    heroColor: "linear-gradient(160deg,#1a1400,#3a2f10,#0a0800)",
    shortDesc:
      "Figlio di Fionn e della fata-cerva Sadhbh, bardo supremo dei Fianna. Rapito da Niamh Chinn Óir nell'Altro Mondo di Tír na nÓg, vive con lei 300 anni creduti tre mentre in Irlanda i Fianna si estinguono. Al ritorno, toccando accidentalmente il suolo, invecchia istantaneamente di trecento anni. Incontra San Patrizio e dialoga con lui raccontando il paganesimo morente. Simbolo di nostalgia, tempo sospeso, scontro tra due ere.",
    bio: {
      main: `Oisín — il cui nome significa "Cervetto" o "Piccolo Cervo" — è il figlio di Fionn mac Cumhaill e della dea-cerva Sadhbh (trasformata in cerva dal druido Fear Doirche), ed è il più grande bardo dei Fianna. Il suo nome tradisce la dimensione magica: non è un uomo ordinario ma il figlio di una mezza-fata, e questo gli conferisce un senso della bellezza e della memoria che lo rende poeta unico della tradizione gaelica. Cresce nei Fianna come compagno del padre Fionn e del figlio Oscar (Fionn era nonno, Oisín padre di Oscar); è testimone di tutte le grandi imprese del ciclo, e ne diventa cronista. È l'eroe-poeta, l'occhio che ricorda.

La sua vicenda centrale è però inaudita: Oisín viaggia nell'Altro Mondo e torna. Oisín i dTír na nÓg — "Oisín nella Terra della Giovinezza" — è forse il più bello mito della letteratura celtica, uno dei racconti più toccanti su tempo, nostalgia e perdita mai scritti. Un giorno dopo la caccia, mentre i Fianna riposano sulle rive del lago di Killarney, una ragazza dai capelli d'oro appare in sella a un cavallo bianco che cammina sulle onde. È Niamh Chinn Óir — "Niamh dalla Testa d'Oro" — figlia di Manannán mac Lir, signore dell'Altro Mondo. Si è innamorata di Oisín dalla fama della sua poesia (lo ha sentito nominare nel regno delle fate). Gli offre di seguirla a Tír na nÓg, la Terra della Giovinezza Eterna: lì non si invecchia, non si soffre, si vive nel mondo perfetto. Oisín, sedotto, sale con lei sul cavallo bianco. Cavalcano sul mare fino al Sídhe.`,
      sub1: "I 300 anni di Tír na nÓg",
      text1: `Nell'Altro Mondo Oisín vive con Niamh una vita di perfezione: banchetti perpetui, caccia alla fata-cervo che rinasce ogni volta, musica ininterrotta, bellezza inalterabile. Ha tre figli da Niamh: Finn (dal nome del nonno), Oscar (dal nome del figlio) e una figlia chiamata Pláura o Plur na mBan ("Fiore delle Donne"). Il tempo non passa: è sempre primavera, la sua gioventù non declina, la memoria dei Fianna è presente ma lontana come un sogno.

Eppure, dopo quelle che sembrano tre settimane o tre mesi, Oisín è preso dalla nostalgia. Desidera rivedere suo padre Fionn, suo figlio Oscar, i compagni della caccia, la foresta di Killarney. Chiede a Niamh di tornare — solo per una visita. Niamh, sapendo la verità, piange. Gli dice: 'Se vai, prendi Embarr dalla criniera d'onda — il mio cavallo bianco. Ma ti impongo un geis: non toccare mai il suolo d'Irlanda. Se una sola volta il tuo piede tocca la terra, non potrai mai più tornare.' Oisín promette, parte, cavalca sul mare.

Torna in Irlanda. Tutto è cambiato. Non riconosce i luoghi, o li riconosce trasfigurati. I boschi dei Fianna sono disboscati, le colline coperte di piccole chiese di pietra, le fortezze degli eroi ridotte a ruderi ricoperti d'erba. Chiede della banda dei Fianna. Un vecchio, trovato da qualche parte, risponde: 'I Fianna? Ma sono morti da quasi trecento anni. Fionn mac Cumhaill sì, l'ho sentito nominare in antiche canzoni. Le gesta dei Fianna sono leggenda antica.' Oisín capisce: i tre mesi nell'Altro Mondo erano trecento anni nel mondo umano.`,
      sub2: "Il cedimento e la vecchiaia istantanea",
      text2: `Oisín, sconvolto, decide comunque di compiere un ultimo gesto eroico prima di tornare da Niamh: passando per la strada di Gleann na Smól, vede due uomini che cercano di sollevare una grossa pietra per costruire un muro. La pietra è troppo grande per loro, pressano dei cavalli ma inutilmente. Oisín, memore della forza dei Fianna (di cui si sente ancora dotato), si china dalla sella e solleva la pietra con una mano sola, portandola agli uomini.

Lo sforzo rompe la cinghia della sella. Oisín cade dal cavallo. Il piede tocca il suolo d'Irlanda. Nel momento stesso in cui la pelle della sua pianta tocca la terra, l'eterna giovinezza lo abbandona: in pochi istanti invecchia di trecento anni. Diventa vecchio, decrepito, cieco o quasi, le ossa fragili. Il cavallo Embarr, vedendolo caduto e ormai mortale, si volta e galoppa sul mare verso Tír na nÓg, per non tornare più. Oisín è solo, vecchio, nell'Irlanda che non riconosce più.

Gli uomini attorno lo raccolgono. Lo portano dal 'grande uomo di Dio' di cui tutti parlano: Patrizio, il santo che sta cristianizzando l'Irlanda. Oisín — ultimo testimone vivente del paganesimo, ultimo superstite dei Fianna, ultimo uomo che abbia conosciuto Fionn — e Patrizio — predicatore della fede nuova — si incontrano.`,
      sub3: "Il dialogo con San Patrizio",
      text3: `L'Acallam na Senórach — "Il Dialogo degli Antichi" — è il testo lungo e bellissimo che narra questa conversazione. Oisín e il suo compagno Caílte mac Rónáin (altro sopravvissuto dei Fianna, giunto a Patrizio per altre vie), accompagnano il santo attraverso l'Irlanda. Patrizio gli chiede di ogni luogo il nome antico e la storia — e Oisín e Caílte, vecchissimi ma ancora dotati di memoria perfetta, raccontano. Ogni pietra, ogni guado, ogni collina ha la sua storia dei Fianna, e la narrazione scorre per ottomila righe di prosa e versi, un'immensa geografia mitica dell'Irlanda.

Ma il dialogo non è pacifico. Patrizio insiste sulla verità cristiana: Fionn e i Fianna, morti pagani, sono dannati all'inferno per i loro peccati (guerra, uccisioni, sensualità). Oisín non accetta. Si ribella, argomenta, a volte con rabbia e a volte con sottile ironia. 'Il tuo Dio del cielo non può essere grande,' dice Oisín, 'se Fionn non vi è accolto. Perché se il tuo Dio è giusto, allora Fionn — che era il più generoso, il più ospitale, il più coraggioso di tutti gli uomini — doveva essere suo amico.' E altrove: 'Dove sono i miei compagni, lì è il mio cielo.' L'Acallam è un tour de force di doppia fedeltà: rispetta Patrizio (i monaci che lo scrissero erano cristiani) ma dà a Oisín voce così ribelle e potente che il lettore non può non parteggiare per il vecchio pagano. È probabilmente il testo che più di ogni altro ha trasmesso ai posteri la nobiltà emotiva del paganesimo irlandese — conservandone la memoria proprio nel momento in cui veniva sostituito.

Alla fine Oisín accetta — o non accetta — il battesimo. Le versioni divergono: in alcuni testi si converte per pietà cristiana, in altri rifiuta ostinatamente. Muore comunque poco dopo. È l'ultimo Fiann.`,
      sub4: "Il tempo, la nostalgia, Ossian europeo",
      text4: `Oisín è l'archetipo del sopravvissuto di un'epoca morta — l'uomo che è stato troppo a lungo altrove e torna per trovare il suo mondo scomparso. Il motivo letterario è universale ('Urashima Tarō' giapponese, 'Rip Van Winkle' americano, 'il lamento di Ossian' europeo), ma la versione irlandese è forse la più poetica: il tempo dell'Altro Mondo non è solo diverso, è qualitativamente altro. Non solo si è perso molto tempo: si è perso il mondo dei padri, la comunità, l'identità. Oisín non è vecchio di trecento anni nel corpo: è vecchio nell'anima, perché ha veduto due ere.

Nel XVIII secolo James Macpherson pubblicò i 'Poems of Ossian' — presentati come traduzioni dal gaelico. Il successo fu immenso: Goethe nel Werther parla di 'Ossian come supremo', Napoleone portava il volume in guerra. Il testo era in parte falsificazione, in parte libera elaborazione su materiali autentici — ma diffuse nell'Europa illuminista l'immagine dell'eroe-bardo solitario, in lamento per un mondo perduto: figura capitale del Romanticismo nascente. Il castello di Fingal (Fionn anglicizzato da Macpherson) dipinto da Turner, la Fingal's Cave di Mendelssohn, le scene ossianiche di Ingres e Girodet, la mitologia ossianica di Napoleone a Malmaison — tutto è debito a Oisín/Ossian.

Nella cultura irlandese moderna Oisín è l'archetipo del poeta nostalgico. Yeats lo evoca esplicitamente ('The Wanderings of Oisin', 1889 — il suo primo grande poema); Joyce ne fa riferimenti; la tradizione Gaeltacht lo ricorda ancora. Il mito di Tír na nÓg — la Terra Eterna al di là dell'ovest — è uno dei più visitati nella cultura irlandese-americana: le compagnie aeree irlandesi ('Aer Lingus') hanno richiamato il nome, i negozi di celtismo abbondano. Oisín ha attraversato l'oceano del tempo e continua a cavalcarlo.`,
    },
    versions: [
      {
        era: "Acallam na Senórach (XII sec.)",
        name: "Il dialogo immenso con Patrizio",
        text: "Il testo fondamentale di Oisín è l'Acallam: 8.000 righe di dialogo tra il vecchio guerriero pagano e il santo cristiano. È insieme rievocazione nostalgica e processo apologetico, trattato di geografia mitica e di teologia pagana. Uno dei più importanti testi narrativi medievali in lingua vernacolare europea.",
      },
      {
        era: "Laoi Oisín i dTír na nÓg (XVIII sec.)",
        name: "Il poema di Tír na nÓg",
        text: "Michael Comyn (ca. 1675-1755), poeta gaelico del Clare, ha scritto il 'Laoi Oisín' — il poema che fissa nella sua forma 'canonica' la storia di Oisín in Tír na nÓg. È la fonte base delle rielaborazioni moderne del mito.",
      },
      {
        era: "Ossian di Macpherson",
        name: "Il falso che fece epoca",
        text: "James Macpherson pubblica nel 1760 i 'Fragments' e nel 1765 le 'Works of Ossian': poemi presentati come traduzioni dirette dal gaelico antico. Il successo europeo è travolgente. La controversia sull'autenticità inizia con Samuel Johnson ('I fondamenti di Macpherson sono falsi') e dura fino all'800; oggi si sa che Macpherson liberamente elaborò materiali autentici. Ma l'impatto sul Romanticismo europeo è incalcolabile.",
      },
      {
        era: "W.B. Yeats — The Wanderings of Oisin",
        name: "Il lungo poema moderno",
        text: "Yeats, a 24 anni, pubblica 'The Wanderings of Oisin' (1889) — suo primo poema maggiore, 950 versi. Rielabora la storia di Niamh e Tír na nÓg con ambientazioni simboliste. Il poema è uno dei testi fondanti del Celtic Twilight.",
      },
    ],
    cult: "Tír na nÓg non è un luogo fisico — è dimensione mitica — ma è associato geograficamente all'ovest, all'oceano oltre le scogliere di Moher e le isole Aran. Il punto di partenza di Oisín verso Niamh è tradizionalmente localizzato al lago di Killarney (contea di Kerry), uno dei più scenografici paesaggi d'Irlanda. Le 'Oisín's Stones' (pietre di Oisín) sono diffuse nel folklore di Kerry e Tipperary.",
    influence: [
      {
        era: "Ossianesimo europeo",
        text: "Dalla metà del XVIII sec. alla metà del XIX sec. l'Europa è ossessionata da Ossian/Oisín. Goethe, Herder, Klopstock lo leggono in Germania; Chateaubriand in Francia; Foscolo e Leopardi in Italia; Puškin in Russia. Napoleone ne ricopia versi nel suo taccuino. Mendelssohn gli dedica l'ouverture delle Ebridi. Turner dipinge Fingal. Il Romanticismo è nato ossianico.",
      },
      {
        era: "Il motivo Urashima / Rip Van Winkle",
        text: "Oisín è il membro celtico di un motivo universale: il viaggio nell'Altro Mondo con tempo diverso. In Giappone Urashima Tarō, in America Rip Van Winkle, in Cina il lago di Lansu. Il motivo è 'il sonno di Epimenide' indoeuropeo: il tempo sacro che avvolge il mortale in un bozzolo di eternità.",
      },
      {
        era: "Tolkien e le Terre Immortali",
        text: "L'Altro Mondo di Niamh — oceano a ovest, isole eterne, tempo sospeso — è uno degli archetipi più chiari per le 'Undying Lands' di Tolkien. Frodo che parte dai Porti Grigi verso l'ovest eterno è Oisín che parte da Killarney verso Tír na nÓg. La parentela è esplicita nei saggi tolkieniani sull'influenza celtica.",
      },
      {
        era: "Celtic Twilight irlandese e identità culturale",
        text: "Il revival celtico irlandese (Yeats, Lady Gregory, AE Russell) ha fatto di Oisín l'archetipo del poeta irlandese moderno: colui che ha visto troppo e sopravvive all'epoca sua. La figura è riattivata continuamente: Seamus Heaney in 'Sweeney Astray' (1984) rielabora un tema affine.",
      },
    ],
    texts: [
      {
        title: "Il Salmone della Saggezza",
        source: "Macgnímartha Finn ('Le gesta infantili di Finn'), XII sec.",
        text: "Finnéces pescò il salmone dopo sette anni di ricerca. Ordinò al ragazzo di arrostirlo ma di non mangiarne. Mentre il salmone cuoceva, una bolla comparve sulla pelle; il ragazzo la ruppe col pollice e si scottò. Per il dolore mise il pollice in bocca. Finnéces venne, guardò il ragazzo e disse: 'Tu non ti chiami Deimne?' 'No,' rispose il ragazzo. 'Come ti chiami allora?' 'Finn, così mi hanno chiamato.' 'Sia fatto: il salmone è tuo.' E da quel momento ogni volta che Finn voleva sapere qualcosa, metteva il pollice tra i denti, e cantava con la musica della saggezza (teinm laida) — e gli era rivelato quello che voleva conoscere.",
      },
      {
        title: "Il dialogo di Oisín e Patrizio",
        source: "Acallam na Senórach, trad. Standish O'Grady (1892)",
        text: "Patrizio disse: 'Oisín, il tuo Dio Fionn è morto, e con lui i Fianna — tutti nelle fiamme dell'inferno per i loro peccati di violenza.' Oisín rispose: 'Se il tuo Dio non è accogliente come Fionn lo era con il povero e l'ospite, il tuo Dio non è un vero Dio. Se i Fianna sono nell'inferno del tuo Dio, allora dei Fianna fu piena la gioia di quell'inferno — perché sono là i compagni, e i giorni della caccia, e le sere dei banchetti. Dove sono i miei compagni, lì è il cielo.' Patrizio tacque.",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   MITI IRLANDESI
   ══════════════════════════════════════════════════════════════════════ */

const IRISH_MYTHS = [
  /* ════════════════════════════════════════════════════════════════════
     1. LEBOR GABÁLA ÉRENN — Il Libro delle Invasioni
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "lebor-gabala",
    tag: "Cosmogonia",
    title: "Lebor Gabála Érenn — Il Libro delle Invasioni",
    type: "Mito",
    epithet: "La Storia Mitica delle Cinque Invasioni d'Irlanda",
    chips: ["Cosmogonia", "Ciclo Mitologico", "Cesair", "Milesi"],
    heroColor: "linear-gradient(160deg,#0a140a,#1a3520,#05100a)",
    shortDesc:
      "Il 'Libro delle Conquiste d'Irlanda' — compilato nell'XI-XII secolo a partire da materiali più antichi — racconta la storia mitica delle cinque successive invasioni che popolarono l'isola: Cesair (prima del diluvio), Partholón, Nemed, Fir Bolg, Tuatha Dé Danann, Milesi. È la cosmogonia irlandese: un racconto che unisce la Bibbia, la preistoria gaelica e la mitologia precristiana in un'immensa sintesi genealogica.",
    bio: {
      main: `Il Lebor Gabála Érenn — "Libro delle Conquiste d'Irlanda", spesso tradotto "Libro delle Invasioni" — è il testo cosmogonico fondante della cultura gaelica irlandese. Non è propriamente un mito in senso unitario, ma una compilazione di origine medievale (XI-XII secolo) che raccoglie e sistematizza, in un grande affresco pseudo-storico, le leggende sull'origine del popolo irlandese e dell'isola stessa. È trasmesso in diverse recensioni: la più antica (Recensione I) nel Lebor na hUidre (Libro della Vacca Bruna, ca. 1100) e nel Book of Leinster (XII sec.). La più completa (Recensione terza e Rédacion di Michaél Ó Cléirigh, 1631) è in manoscritti irlandesi del XVII sec.

Il testo ha un'ambizione totale: inserire l'Irlanda nella storia biblica del mondo. Inizia con la creazione del mondo e il diluvio universale, poi narra una prima invasione dell'Irlanda da parte di Cesair, nipote di Noè, che si sarebbe stabilita nell'isola immediatamente prima del diluvio stesso (tutti perirono tranne Fintán che sopravvisse trasformato in salmone). Dopo il diluvio seguono altre quattro invasioni: Partholón, Nemed, i Fir Bolg, i Tuatha Dé Danann, e infine i Milesi — antenati mitici dei gaeli storici. Ciascuna invasione è collegata a cicli cosmici, a guerre con i Fomori (gli 'Anti-dèi' del caos primordiale), a trasformazioni del paesaggio. L'intero racconto è una genealogia mitica che, attraverso manipolazioni pseudo-storiche, mostra gli irlandesi discendenti di Scitia e infine di Japhet, figlio di Noè — legittimando così una discendenza biblica prestigiosa.`,
      sub1: "Le prime invasioni — Cesair, Partholón, Nemed",
      text1: `La prima invasione è quella di Cesair, donna nipote di Noè. Non essendo stata ammessa nell'arca, Cesair costruisce la propria nave e salpa per l'Irlanda — allora vuota — sperando che una terra non ancora toccata dal peccato non venga distrutta dal diluvio. Arriva con suo padre Bith, il pilota Ladra, il marito Fintán, e cinquanta donne. La presenza femminile dominante è notevole: il Lebor descrive un'Irlanda inaugurale popolata quasi solo da donne. Ma il diluvio arriva comunque: tutti periscono tranne Fintán, che sopravvive trasformandosi successivamente in salmone, aquila e falco, attraversando i millenni come testimone perenne — una memoria vivente dell'Irlanda.

Dopo il diluvio Partholón arriva con un piccolo seguito dalla Sicilia (o dalla Grecia: le versioni divergono). Combatte i Fomori — già presenti come esseri demoniaci dell'oceano — e inizia a civilizzare l'Irlanda: istituisce l'agricoltura, l'allevamento, le leggi ospitali, il primo omicidio (suo figlio uccide un altro membro del clan: Adamo e Caino rimappati in Irlanda). Il popolo di Partholón muore in massa per una peste, sterminato in una sola settimana.

La terza invasione è quella di Nemed dal Caspio. Combatte i Fomori per quattro battaglie e conquista l'isola. Ma i Fomori, comandati dal terribile re Conand nella sua torre di vetro a Tory Island, impongono ai Nemediani un tributo annuale di due terzi delle loro greggi, del loro grano e dei loro bambini. È schiavitù fino a che Nemed non si ribella e distrugge la torre di Conand — ma l'invasione dei Fomori è così devastante che il popolo di Nemed si disperde in tre gruppi: uno torna in Scitia (diventerà i Fir Bolg), uno va alle Isole Oltremare del Nord (diventerà i Tuatha Dé Danann), uno emigra in Grecia.`,
      sub2: "I Fir Bolg e la prima Mag Tuired",
      text2: `Dopo 230 anni i discendenti di Nemed che erano andati in Grecia tornano in Irlanda come Fir Bolg — "Uomini dei Sacchi", nome che deriva dalla leggenda che in Grecia fossero stati schiavizzati e costretti a trasportare sacchi di terra per rendere fertili le colline pietrose. Arrivano in cinque ondate con cinque capi, dividono l'Irlanda in cinque province (le attuali: Leinster, Munster, Connacht, Ulster, Meath come provincia centrale) — la prima geografia politica d'Irlanda.

I Fir Bolg governano per 37 anni pacificamente finché arrivano i Tuatha Dé Danann ("Popolo della Dea Danu"), discendenti dell'altra parte del popolo di Nemed che era andata alle Isole Oltremare. I Tuatha Dé hanno appreso arte e magia in quattro città sovrannaturali (Falias, Gorias, Finias, Murias) e portano con sé quattro oggetti sacri: la Pietra di Fál (che grida quando vi sale il legittimo re di Tara), la Lancia di Lugh (che non manca mai il bersaglio), la Spada di Nuada (che nessuno può eludere quando è sguainata), il Calderone del Dagda (dal quale nessuno si parte insoddisfatto).

Si combatte la Prima Battaglia di Mag Tuired. I Fir Bolg sono sconfitti ma combattono con onore tale che i Tuatha Dé concedono loro il Connacht come regno. Qui c'è un episodio chiave: Nuada, re dei Tuatha Dé, perde la mano destra nel duello con Sreng dei Fir Bolg — e secondo la legge sacra celtica un re menomato non può regnare. Abdica in favore di Bres il Bello, semi-fomoriano — preparando la crisi che porterà alla Seconda Battaglia di Mag Tuired.`,
      sub3: "La Seconda Battaglia e i Tuatha Dé Danann al potere",
      text3: `Bres è re, ma è un sovrano tirannico: esige tributi esosi, asservisce i Tuatha Dé Danann ai suoi parenti Fomori, nega l'ospitalità (gravissimo crimine nella cultura gaelica). Dopo anni di oppressione, Nuada — guarito con il braccio d'argento da Dian Cécht, e poi con un vero braccio da Miach — torna al trono. Bres è espulso, va dai Fomori e organizza con suo padre Elatha e il terribile Balor un esercito per invadere l'Irlanda.

La Seconda Battaglia di Mag Tuired è il confronto cosmico definitivo tra i Tuatha Dé Danann (ordine, luce, magia buona) e i Fomori (caos, oscurità, magia oscura). È in questa battaglia che Lugh uccide suo nonno Balor con una pietra scagliata dalla fionda nell'occhio maledetto, causando la rovina dei Fomori. I Tuatha Dé vincono e regnano sull'Irlanda per secoli — alcuni calcolano 170 anni, altri molto di più.

Ma il Lebor Gabála non lascia i Tuatha Dé al potere definitivo. L'ultima invasione — quella che darà alla luce l'Irlanda 'storica' — è imminente.`,
      sub4: "I Milesi — l'invasione finale e la genealogia degli irlandesi",
      text4: `I Milesi (Milesians in inglese) sono i figli di Míl Espáine, "Soldato di Spagna" — etimologia inventata dai monaci medievali mescolando il latino *miles Hispaniae*. Partiti dalla Scizia, migrano attraverso Egitto (dove sposano la principessa Scota, da cui il nome 'Scoti' per i gaeli e poi 'Scozia'), Cartagine, Spagna, e arrivano finalmente in Irlanda. Il loro capo è Amergin, druido-poeta la cui prima azione sbarcando è recitare il famoso poema "Amergin's Song" — uno dei più antichi testi poetici in lingua irlandese, che si apre con la formula cosmica "Io sono il vento sul mare / Io sono l'onda sull'oceano / Io sono il fragore del mare..." — un'invocazione sciamanica dell'identità del poeta con tutti gli elementi del cosmo.

I Tuatha Dé Danann, sentendo la flotta milesia avvicinarsi, invocano magicamente una tempesta per respingerla. Amergin con la sua controformula magica placa il mare. Sbarcano. Si combatte. I Tuatha Dé sono sconfitti. Avviene allora l'accordo cosmogonico: i Milesi prenderanno il mondo visibile, la superficie dell'Irlanda; i Tuatha Dé riceveranno il mondo invisibile, i sídhe — i tumuli megalitici del paesaggio irlandese (Newgrange, Tara, Cnoc Áine, ecc.). I due regni convivono paralleli. I Tuatha Dé diventano il 'Popolo dei Sídhe', le 'fate' irlandesi del folklore — invisibili, potenti, accessibili solo in particolari momenti dell'anno (Samhain, Beltane).

Da Milesio e dai suoi compagni discendono tutte le grandi famiglie gaeliche storiche: Eremon fonda il Leinster, Eber il Munster, altri i clan del Connacht e dell'Ulster. Per i monaci che hanno compilato il Lebor Gabála, questa genealogia mitica legittima politicamente le dinastie del loro tempo: ogni clan può rivendicare una discendenza da uno dei compagni di Milesio, e quindi da Scota, da Japhet, da Adamo. Il Lebor Gabála è la più ambiziosa operazione di costruzione identitaria mitologica dell'Europa medievale — fonda un intero popolo in un tempo sacro.`,
    },
    versions: [
      {
        era: "Recensione I (XI-XII sec.)",
        name: "Il testo arcaico",
        text: "La prima redazione conservata è nel Book of Leinster (XII sec.) ma fonti più antiche (Lebor na hUidre, ca. 1100) contengono brani che derivano da tradizioni pre-cristiane VII-VIII sec. La recensione I è la più 'mitologica' — gli episodi dei Tuatha Dé e della battaglia di Mag Tuired sono dominanti.",
      },
      {
        era: "Recensioni II e III (XIII-XV sec.)",
        name: "L'elaborazione medievale",
        text: "Le recensioni successive espandono le genealogie bibliche, spingendo sempre più la parentela degli irlandesi con la storia mediterranea e vicino-orientale. L'obiettivo è teologico-politico: integrare l'Irlanda nella storia cristiana universale.",
      },
      {
        era: "Rédaction di Michaél Ó Cléirigh (1631)",
        name: "La sintesi controriformista",
        text: "Nel 1631 il francescano Michaél Ó Cléirigh, insieme ai 'Quattro Maestri' di Donegal, produce l'ultima grande redazione del Lebor Gabála — un'immensa compilazione che rimase la forma canonica del testo fino all'Ottocento. È un monumento di conservazione culturale nel mezzo della distruzione della cultura gaelica.",
      },
      {
        era: "Revival moderno (XIX-XXI sec.)",
        name: "Il ritorno dello storicismo critico",
        text: "Dagli studi di Eugene O'Curry (1860s) fino a R.A.S. Macalister (5 volumi tra 1938 e 1956) e oggi John Carey (The Irish National Origin-Legend, 1994), il Lebor Gabála è stato oggetto di critica filologica rigorosa. L'approccio moderno distingue strati mitologici arcaici (pre-cristiani), sovrapposizioni bibliche medievali e elaborazioni politiche tardo-medievali.",
      },
    ],
    cult: "Il Lebor Gabála non è un testo di culto ma un testo identitario: ha plasmato per secoli l'autocomprensione del popolo gaelico. I quattro tesori dei Tuatha Dé — Pietra di Fál, Lancia di Lugh, Spada di Nuada, Calderone del Dagda — sono oggetti 'mitologico-archeologici' nella coscienza nazionale irlandese. La Pietra di Fál è identificata con una pietra ancora oggi esistente a Tara, e fino al XIX secolo fu oggetto di pellegrinaggio politico. Le cinque province originarie (Leinster, Munster, Connacht, Ulster, Meath) sono eredità viva del Lebor nel paesaggio politico-amministrativo irlandese.",
    influence: [
      {
        era: "Identità nazionale irlandese",
        text: "Il Lebor Gabála è alla base dell'idea stessa di 'nazione irlandese'. La discendenza dai Milesi, l'origine da Scota ed Egitto, la genealogia biblica, la geografia delle cinque province — tutto converge a creare un mito fondatore del popolo gaelico. I movimenti nazionalisti irlandesi (da Wolfe Tone nel 1798 a Pearse nel 1916) hanno usato il Lebor Gabála come serbatoio simbolico.",
      },
      {
        era: "Tolkien e il mito d'origine",
        text: "J.R.R. Tolkien, esperto di filologia celtica, ha tratto ispirazione dal Lebor Gabála per la struttura del 'Silmarillion' — anche il Silmarillion narra in stile cronachistico l'invasione di una terra da parte di popoli successivi (Valar, Elfi, Uomini), con guerre cosmiche, tesori sacri, ritiro degli dèi. L'influenza del Lebor Gabála su Tolkien è tracciata dagli studiosi (Tom Shippey, Verlyn Flieger).",
      },
      {
        era: "Mito e storia",
        text: "Il Lebor Gabála pone il problema generale del rapporto mito-storia: quanto di vero c'è nelle 'cinque invasioni'? La ricerca archeologica moderna suggerisce che l'Irlanda neolitica fu effettivamente abitata da popolazioni successive, ma in tempi e modi diversi dalle narrazioni mitiche. Il Lebor è storia 'percepita', mito come memoria: la coscienza che un popolo ha della propria origine.",
      },
      {
        era: "Ispirazione letteraria contemporanea",
        text: "Autori come Morgan Llywelyn (Bard, 1984), Flann O'Brien, Seamus Heaney si sono ispirati al Lebor Gabála. Heaney in particolare traduce il 'Canto di Amergin' — che ha ispirato anche Robert Graves per 'The White Goddess' (1948), un testo chiave del neopaganesimo moderno.",
      },
    ],
    texts: [
      {
        title: "Il Canto di Amergin",
        source:
          "Lebor Gabála Érenn, Recensione I, trad. R.A.S. Macalister (1941)",
        text: "Io sono il vento sul mare; / Io sono l'onda dell'oceano; / Io sono il fragore del mare; / Io sono il toro dai sette combattimenti; / Io sono l'avvoltoio sulla rupe; / Io sono una goccia di rugiada al sole; / Io sono la più bella tra i fiori; / Io sono il cinghiale in valore; / Io sono il salmone nell'acqua; / Io sono un lago nella pianura; / Io sono la parola del sapere; / Io sono la punta della lancia in battaglia; / Io sono il dio che accende il fuoco nella mente. / Chi illumina le colline? / Chi conosce le età della luna? / Chi conosce il luogo dove cala il sole?",
      },
      {
        title: "L'accordo finale con i Tuatha Dé",
        source: "Lebor Gabála, Recensione II, §396, trad. dal medio irlandese",
        text: "Manannán mac Lir divise con i Tuatha Dé i sídhe: Brú na Bóinne al Dagda e ad Aengus, Síd ar Femen a Bodb Derg, Síd ar Finnachad a Midir, Síd na Findchar a Sígmall, e così via per ognuno. E Manannán impose tre protezioni: il Feth Fíada ('velo della presenza', che rende invisibili gli dèi ai mortali); la Festa di Goibniu (che dona agli dèi cibo che non si consuma e bevande che non si esauriscono); e i porci di Manannán (che uccisi e mangiati rinascono ogni giorno). Così i Tuatha Dé ebbero il loro mondo sotto terra, e i figli di Míl ebbero l'Irlanda sopra.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. CATH MAIGE TUIRED — La Battaglia di Mag Tuired
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "cath-maige-tuired",
    tag: "Battaglia cosmogonica",
    title: "Cath Maige Tuired — La Battaglia di Mag Tuired",
    type: "Mito",
    epithet: "La Guerra Cosmica tra Tuatha Dé Danann e Fomori",
    chips: ["Ciclo Mitologico", "Lugh", "Balor", "Ordine vs Caos"],
    heroColor: "linear-gradient(160deg,#1a0a00,#3a1a05,#0a0400)",
    shortDesc:
      "La battaglia cosmica tra i Tuatha Dé Danann (ordine, luce, civiltà) e i Fomori (caos, oscurità, mostruosità primordiale). Lugh uccide il nonno Balor, il gigante dall'occhio maledetto, scagliandogli una pietra nell'occhio aperto. È il mito fondativo dell'ordine celtico — il motivo indoeuropeo del 'giovane dio luminoso che uccide il mostro primordiale', parallelo a Indra-Vrtra, Apollo-Pitone, Thor-Jörmungandr.",
    bio: {
      main: `Il Cath Maige Tuired — "La Battaglia di Mag Tuired" — è il mito cosmogonico centrale della mitologia irlandese, e uno dei più impressionanti epici del corpus celtico. Conservato nel manoscritto Harleian 5280 (XV-XVI sec.) ma linguisticamente databile al IX sec., con nuclei narrativi anche più antichi, il testo narra lo scontro finale tra i Tuatha Dé Danann — i Popoli della Dea Danu, rappresentanti dell'ordine cosmico, della luce, della civiltà, della magia benefica — e i Fomori — entità mostruose del caos primordiale, dell'oscurità, della malattia, della tirannia, venute dal mare o dall'oceano del non-essere.

La tradizione parla in realtà di due battaglie di Mag Tuired. La Prima Battaglia di Mag Tuired (Cath Maige Tuired Cunga) oppone i Tuatha Dé Danann ai Fir Bolg, i precedenti abitanti dell'isola, e si conclude con la vittoria dei Tuatha Dé ma con la mutilazione del re Nuada (che perde la mano destra e quindi non può più regnare per la legge celtica del re integro). La Seconda Battaglia di Mag Tuired (Cath Maige Tuired, quella centrale) è invece lo scontro con i Fomori — ed è questa, più della prima, che la tradizione gaelica considera il momento fondativo della cosmologia. La Prima Battaglia si sarebbe combattuta a Cong nel Connacht (Mag Tuired "del sud"), la Seconda nel Sligo a Moytirra (Mag Tuired "del nord"). La distinzione geografica è sottile ma tradizionale.`,
      sub1: "I Tuatha Dé Danann e i Fomori — le due stirpi",
      text1: `I Tuatha Dé Danann sono descritti come popolo divino venuto "dalle isole a nord del mondo" dove avevano appreso la magia, la scienza, la druidia. Arrivano in Irlanda avvolti in una nube magica, oscurando il sole per tre giorni. Sono belli, luminosi, artigianalmente geniali: hanno Goibniu il fabbro divino (le cui armi non sbagliano mai), Credne il bronziere (le cui chiodature sono perfette), Luchta il carpentiere (i cui manici di lancia sono irremovibili), e Dian Cécht il medico (il cui pozzo rigenera i morti). Formano un pantheon completo dell'artigianato e della scienza — una società di dèi creatori.

I Fomori sono il loro opposto radicale. Non sono semplicemente 'cattivi': sono incompiuti, deformi, mostruosi. Ogni Fomor ha un'unica cosa di troppo o di meno: un occhio solo, una gamba sola, un braccio unico, tre teste, pelle di drago. Sono il caos genetico, l'eccesso e il difetto, il primordiale non-plasmato. Vengono dal mare — dall'oceano pre-cosmico — e sono venerati come dèi dalla stirpe dei popoli precedenti dell'Irlanda. Il loro capo è Balor Birug-derc ("Balor dall'Occhio Colpitore"), gigante con un unico occhio mostruoso — sempre chiuso da sette pelli perché il suo sguardo uccide all'istante chiunque vi cada sotto.

La tensione tra i due popoli è stata congelata in un fragile patto: Bres, semi-fomoriano, è salito al trono dei Tuatha Dé dopo l'abdicazione di Nuada. I Fomori hanno imposto tributi esosi e umiliazioni rituali. Lunghi anni di oppressione. Poi Nuada guarisce, torna al trono, scaccia Bres — e la guerra inevitabile esplode.`,
      sub2: "L'arrivo di Lugh e i preparativi della battaglia",
      text2: `Il momento di svolta della narrazione è l'arrivo di Lugh a Tara. La scena al portinaio — già descritta nel profilo di Lugh — è una delle più belle della letteratura celtica: il giovane dio elenca ogni arte possibile e il portinaio risponde "abbiamo già" a ciascuna, finché Lugh domanda: "ma avete uno che le sappia tutte insieme?". La domanda retorica è una manifestazione: Lugh non si vanta, mostra cosa è: l'integrazione cosmica di ogni abilità, il Samildánach, "l'Esperto-in-ogni-cosa". Nuada, impressionato, cede il trono simbolicamente a Lugh per tredici giorni — tempo sufficiente perché il nuovo dio elabori il piano di guerra.

I preparativi durano sette anni. I tre artigiani — Goibniu, Credne, Luchta — lavorano ininterrottamente a Mag Tuired producendo armi perfette: Goibniu forgia punte di lancia che uccidono al primo colpo; Credne ricopre di bronzo le bacchette; Luchta le monta su manici. I Tuatha Dé stabiliscono anche il Pozzo di Slane (Tipra Sláine) — il pozzo magico di Dian Cécht — in cui getteranno i caduti vivi per rigenerarli: una tecnologia medica cosmica.

I Fomori si preparano parallelamente. Indech mac Dé Domnann, re dei Fomori, schiera Balor in prima linea; Elatha, padre di Bres, comanda l'esercito. I prodigi si moltiplicano: spiriti malvagi infestano i sogni, Bres interpreta i portenti, si avvicina la notte di Samhain — il momento liminare in cui il velo tra i mondi è sottile.

La Morrígan, alla vigilia della battaglia, si unisce al Dagda al guado della Unshin. È l'unione sacra: lei, dea del destino, promette di distruggere il re Indech; in cambio consegna simbolicamente al Dagda la vittoria. Il Dagda allora percorre i campi, intervistando ogni dio sulla forma del suo contributo: Ogma sul combattimento dei campioni, Goibniu sulle armi, Dian Cécht sulla guarigione, Credne sui rinforzi metallurgici, Lugh sulla strategia complessiva. È un catalogo cosmico delle funzioni sacre — il grande inventario delle prerogative divine celtiche.`,
      sub3: "La battaglia — cosmo in fiamme",
      text3: `La battaglia inizia a Samhain. I due eserciti si scontrano nella pianura di Mag Tuired. Il combattimento è apocalittico. Ogni morto dei Tuatha Dé è gettato nel Pozzo di Slane e rinasce; ogni morto dei Fomori è definitivamente perso. Ma i Fomori scoprono il trucco: Ruadan, figlio di Bres e Brigid, si infiltra nell'officina di Goibniu, tenta di rubare la lancia magica e ferisce mortalmente il dio-fabbro. Ma Goibniu fa in tempo a colpire Ruadan: cadono entrambi. Brigid allora emette il suo celebre "primo lamento di keening", istituendo il rituale funebre irlandese.

Il culmine è il duello tra Lugh e Balor. Balor, che aveva udito di Lugh in profezia ("un nipote ti ucciderà"), cerca il giovane dio nella mischia. Quattro suoi sudditi cominciano a sollevare con un uncino la palpebra dell'occhio maledetto — occhio che emette un raggio letale appena scoperto — per puntarlo contro Lugh. Ma Lugh, più veloce, scaglia una pietra con la fionda (o, secondo la versione folklorica, il Gáe Assail - la "Lancia Solare") che penetra nell'occhio proprio quando è appena aperto. La pietra attraversa il cranio di Balor ed esce dalla nuca, puntando l'occhio ormai proiettato all'indietro contro le file fomoriane stesse. Ventisette Fomori cadono fulminati. Balor crolla. La battaglia volge.

I Fomori sono disfatti. Inseguiti fino al mare, affogano in massa. Bres è catturato. Lugh gli risparmia la vita in cambio di un patto cosmico: Bres, semi-fomoriano, insegnerà ai Tuatha Dé i segreti dell'agricoltura fomoriana — quando seminare, quando arare, quando raccogliere. È un motivo fondamentale: anche dopo la sconfitta, il mondo pre-cosmico contribuisce al cosmos attraverso la sua sapienza agricola. Il caos non è annientato, è integrato.`,
      sub4: "La Morrígan canta la pace e il presagio della fine",
      text4: `Alla fine della battaglia, la Morrígan sale sulle colline e canta una profezia cosmica, in versi brevi e taglienti: "Pace in alto al cielo, pace in basso alla terra, pace e pace in ogni dove". È il canto di un mondo nuovo — il cosmo celtico è stabilito, l'ordine è imposto, la civiltà agricola (insegnata da Bres) inizia.

Ma subito dopo la Morrígan canta una seconda profezia — oscurissima — sulla fine dei tempi: "Vedrò un mondo che non mi piacerà: estate senza fiori, vacche senza latte, donne senza pudore, uomini senza coraggio, guerre e pene, calunnie e menzogne, nessuna verità, i figli ribelli ai padri, ogni uomo un traditore, ogni donna una sgualdrina... malattia sovrannaturale, mostruosità, tempeste..." — è l'escatologia celtica, una visione di kali yuga gaelica: la fine ciclica dell'età ordinata, il ritorno del caos.

Il Cath Maige Tuired è dunque insieme un mito di fondazione (l'ordine cosmico si stabilisce) e un mito di predeterminazione escatologica (l'ordine è fragile, destinato a cadere). È una delle più potenti visioni del mondo della letteratura medievale europea: il cosmos è un'opera umana e divina che ha un inizio e avrà una fine, entrambi prefigurati nel presente.`,
    },
    versions: [
      {
        era: "Cath Maige Tuired Cunga (Prima Battaglia)",
        name: "Il testo secondario",
        text: "La Prima Battaglia (contro i Fir Bolg) è narrata in un testo più breve e meno elaborato, probabilmente elaborato dopo la Seconda per completare la genealogia mitica. È conservata nel Book of Leinster ed è molto meno ricca di episodi cosmici.",
      },
      {
        era: "Cath Maige Tuired (Seconda Battaglia, redazione principale)",
        name: "Il grande testo",
        text: "Il testo centrale, conservato nel Harleian 5280 (XV sec.) ma linguisticamente IX sec., è una delle più alte elaborazioni mitico-letterarie celtiche. Narra con densità l'arrivo di Lugh, i preparativi di guerra, la battaglia e il duello finale con Balor, chiudendo con i canti della Morrígan.",
      },
      {
        era: "Versione folklorica (XVIII-XIX sec.)",
        name: "Balor dell'Occhio Maligno",
        text: "Nella tradizione folklorica più tarda (soprattutto nell'Ulster e nel Donegal), Balor è rielaborato come 'Balor dell'Occhio Maligno', gigante abitante a Tory Island. La storia è popolare: Lugh è sostituito talvolta dal nipote 'Lui Laimh-fhada' (Lui dalla lunga mano), la pietra diventa un proiettile magico. Questa versione è ancora raccontata nelle Gaeltacht del Nord.",
      },
    ],
    cult: "Il sito identificato tradizionalmente come Mag Tuired è Moytura, contea di Sligo — una valle a nord-est del Lough Arrow. Qui sono presenti diversi siti megalitici e pietre circolari che la tradizione folklorica ha legato alla battaglia mitica. 'Carrowmore Cemetery' nelle vicinanze è uno dei più grandi siti megalitici irlandesi. Nessun culto diretto della 'battaglia' come entità — ma il ricordo folklorico e la sacralità del paesaggio di Sligo sono continui fino ad oggi (Yeats ha ambientato a Sligo molte delle sue poesie celtiche).",
    influence: [
      {
        era: "Il motivo indoeuropeo del giovane dio che uccide il mostro",
        text: "La struttura narrativa (giovane dio solare uccide gigante/drago/mostro primordiale con un proiettile magico) è uno dei più universali motivi indoeuropei. I paralleli: Indra contro Vrtra nel Rig Veda, Apollo contro Pitone a Delfi, Zeus contro Tifone, Thor contro Jörmungandr, Sigfrido contro Fafnir. Georges Dumézil ha posto Cath Maige Tuired come caso celtico classico di questo schema.",
      },
      {
        era: "Lugh/Balor come ordine contro caos",
        text: "Il duello Lugh-Balor è una delle più limpide formalizzazioni cosmogoniche. Balor è il caos pre-cosmico personificato; Lugh è l'ordine luminoso che lo vince. La vittoria non è annichilazione ma incorporazione: Bres, sopravvissuto, insegna l'agricoltura. Il cosmo celtico integra il suo caos.",
      },
      {
        era: "Il giorno di Samhain come momento liminare",
        text: "La battaglia si svolge a Samhain (1° novembre), festività celtica liminare quando il velo tra i mondi si fa sottile. Il folklore popolare irlandese conserva memoria di Samhain come notte di origine: la battaglia cosmica si combatte proprio in quella notte. L'attuale Halloween è eredità diretta.",
      },
      {
        era: "Echi moderni",
        text: "Il mito di Cath Maige Tuired è fonte di ispirazione continua nella letteratura e nella cultura pop. Neil Gaiman in 'American Gods' (2001) cita esplicitamente Balor. Marvel Comics ha dato vita a un 'Balor' nei 'Thor comics'. Videogiochi (Fate/Grand Order, SMITE) riattualizzano il duello Lugh-Balor. La battaglia di Mag Tuired rimane matrice di immaginari contemporanei.",
      },
    ],
    texts: [
      {
        title: "L'uccisione di Balor",
        source: "Cath Maige Tuired, §133-135, trad. Elizabeth A. Gray (1982)",
        text: "Balor stava sollevando l'occhio sul campo di battaglia. Quattro uomini con un uncino alzavano la sua palpebra. Quando il suo occhio era scoperto, nessun esercito resisteva al suo sguardo. Lugh prese la fionda, vi mise una pietra, pregò che la pietra raggiungesse l'occhio di Balor. E così fu. La pietra volò con tale velocità che attraversò l'occhio e uscì dalla nuca di Balor, girando la direzione dell'occhio verso i Fomori stessi. Ventisette caddero a terra morti solo per il passaggio dello sguardo. E fu così che Lugh nipote di Balor uccise suo nonno.",
      },
      {
        title: "La profezia finale della Morrígan",
        source: "Cath Maige Tuired, §166-167, trad. Elizabeth A. Gray (1982)",
        text: "Allora la Morrígan cantò così — pace e bene in ogni dove: / Pace fino al cielo / Cielo fino alla terra / Terra sotto il cielo / Forza in ciascuno / Una coppa molto piena / Pieno di miele / Onore sufficiente / Estate in inverno. / Poi cantò la profezia della fine: / Vedrò un mondo che non mi piacerà / Estate senza fiori / Vacche senza latte / Donne senza pudore / Uomini senza coraggio / Conquiste senza re / Boschi senza ghiande / Mare senza pesci / Falso giudizio dei vecchi / Falsi verdetti dei brehon / Ogni uomo un traditore / Ogni figlio un ladro / Il figlio entrerà nel letto del padre / Il padre nel letto del figlio / Ogni uomo cognato del fratello / Un'età malvagia / Il figlio ingannerà il padre / La figlia ingannerà la madre.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════════════
     ↓↓↓   MARKER: INSERIRE QUI IL LOTTO 1B (altri 2 miti)   ↓↓↓
     Táin Bó Cúailnge e Ciclo Fiann vanno inseriti esattamente a questa
     posizione — prima di `];` che chiude IRISH_MYTHS.
     ══════════════════════════════════════════════════════════════════════ */
  /* ════════════════════════════════════════════════════════════════════
     3. TÁIN BÓ CÚAILNGE — La Razzia delle Vacche di Cooley
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "tain",
    tag: "Epopea",
    title: "Táin Bó Cúailnge — La Razzia delle Vacche di Cooley",
    type: "Mito",
    epithet: "L'Iliade Irlandese — la Grande Epopea dell'Ulster",
    chips: ["Ciclo dell'Ulster", "Cú Chulainn", "Medb", "Donn Cúailnge"],
    heroColor: "linear-gradient(160deg,#1a0500,#3a1508,#0a0200)",
    shortDesc:
      "L'epopea maggiore della letteratura irlandese, paragonata all'Iliade per struttura e respiro cosmico. La regina Medb del Connacht muove guerra all'Ulster per rapire il toro cosmico Donn Cúailnge. Tutto l'Ulster è paralizzato dalla maledizione di Macha; solo il giovanissimo Cú Chulainn difende il regno sui guadi per tre mesi, in una serie di duelli epici culminati nel devastante scontro con il fratello adottivo Fer Diad.",
    bio: {
      main: `La Táin Bó Cúailnge — "La Razzia delle Vacche di Cooley" — è l'epopea più importante della letteratura celtica insulare, comparabile per ambizione e profondità all'Iliade greca o al Mahābhārata indiano. Conservata in tre recensioni principali (la più antica nel Lebor na hUidre, ca. 1100; la seconda nel Book of Leinster, XII sec.; la terza in vari manoscritti del XV-XVII sec.), la Táin fissa per iscritto una tradizione orale probabilmente risalente al I sec. a.C. - I sec. d.C. — l'epoca dell'Ulster preistorico, prima dell'arrivo del cristianesimo.

L'antefatto è il celebre "discorso del guanciale" (Pillow Talk): la regina Medb del Connacht e il marito Ailill, a letto, si mettono a contare le rispettive ricchezze. Tutto è perfettamente pari — tranne un dettaglio: Ailill possiede un toro magnifico, il Finnbhennach ("Cornuto Bianco"), che Medb non può eguagliare. Nel Connacht non c'è un altro toro di quella taglia, ma nell'Ulster — a Cooley, territorio dell'Ulster orientale — pascola il Donn Cúailnge ("Bruno di Cooley"), un toro ancor più mostruoso, sovrannaturale, probabile manifestazione zoomorfica di un dio (alcune fonti lo presentano esplicitamente come un uomo reincarnato in forma bovina). Medb deve averlo. Invia ambasciatori al proprietario Dáire mac Fiachnai con l'offerta di prestito — per un anno — in cambio di terre, gioielli e del suo favore sessuale. Dáire accetta, ma durante il banchetto i servi di Medb si lasciano sfuggire (ubriachi) che se Dáire non avesse accettato avrebbero preso il toro con la forza. Dáire si infuria e rompe l'accordo.

Medb allora radua un'alleanza di tutti gli altri quattro quinti d'Irlanda (Connacht, Munster, Leinster, Meath — più i profughi dell'Ulster guidati da Fergus mac Róich, esiliato volontariamente dopo il tradimento di Conchobar su Deirdre) e invade l'Ulster. L'esercito di Medb è imponente: decine di migliaia di guerrieri, in ordine di battaglia multicolore. Contro di loro sta un Ulster apparentemente paralizzato: tutti i guerrieri maschi sono stati colpiti dalle ces noínden — le "doglie degli uomini dell'Ulster" — maledizione di Macha che li costringe a soffrire i dolori del parto per cinque giorni e cinque notti, proprio quando l'Ulster è in pericolo. Solo Cú Chulainn, non di sangue ulaid (è figlio di Lugh, allevato a Muirthemne), è immune. Ha diciassette anni. È da solo.`,
      sub1: "I duelli ai guadi — tre mesi di difesa solitaria",
      text1: `La struttura centrale della Táin è una lunga serie di duelli sui guadi. Cú Chulainn propone a Medb un patto rituale: invece di scontrarsi in battaglia campale (dove la sua solitudine sarebbe fatale), si combatterà un duello al giorno tra lui e un campione scelto dell'esercito di Medb. Finché Cú Chulainn vinca, l'esercito non può avanzare oltre il guado. Se Cú Chulainn perde, l'esercito è libero. È una variante eroica del codice dei single combat attestato nell'antichità indoeuropea (cfr. Orazi e Curiazi nella tradizione romana).

Medb accetta — calcolando che in pochi giorni Cú Chulainn cadrà. Invece resiste tre mesi. Ogni giorno sfila un campione diverso: Medb ne invia cento, duecento; Cú Chulainn li uccide tutti. Alcuni duelli sono narrati in dettaglio (contro Natchrantal, contro Cur mac Da Lath, contro Etarcomol), con tecniche di combattimento ricche di descrizioni, geasa reciproci, dialoghi al guado. Cú Chulainn usa armi diverse secondo il giorno — lancia, spada, fionda; mantiene il Gáe Bolga solo per i nemici più grandi.

Tra un duello e l'altro, la Morrígan gli appare tre volte offrendogli amore e — respinta — lo maledice manifestandosi in forma di anguilla, lupa e giovenca rossa durante i combattimenti. Un'altra volta è Lugh stesso — suo padre divino — che interviene: Cú Chulainn è ferito gravemente, esausto. Lugh lo addormenta per tre giorni e tre notti, combattendo al suo posto (invisibile, con Cú Chulainn travestito). Al risveglio Cú Chulainn è guarito.

Parallelamente, la 'boy-troop' dell'Ulster — i 150 ragazzi di dodici-sedici anni che Cú Chulainn guidava all'incontro di Emain — decide di aiutare l'idolo-campione. Marciano di nascosto a Muirthemne, attaccano da soli un fianco dell'esercito di Medb, ne uccidono trecento. Ma sono tutti uccisi. Cú Chulainn, quando scopre la strage della sua boy-troop, entra in ríastrad — la mostruosa distorsione guerriera — e massacra da solo, in una sola notte, cento uomini dell'esercito di Medb per ogni ragazzo caduto. È uno dei passi più violenti e potenti della letteratura celtica antica.`,
      sub2: "Il duello con Fer Diad — il centro emotivo dell'epopea",
      text2: `Medb, disperata, cerca il campione che possa battere Cú Chulainn. Si decide per Fer Diad mac Damáin, guerriero del Connacht, ma — dettaglio cruciale — fratello adottivo di Cú Chulainn. I due hanno trascorso anni insieme presso Scáthach in Scozia, si sono addestrati assieme, hanno imparato le stesse tecniche. Sono amici fraterni, legati dai più sacri vincoli della fraternità eroica irlandese. Fer Diad rifiuta di combattere. Medb lo forza con la propria magia (lo ubriaca, gli offre la figlia in sposa, lo minaccia di disonore con una satira dei poeti — maledizione sociale terribile nella cultura irlandese). Fer Diad accetta, in lacrime.

Il duello al Guado di Fer Diad (Áth Ferdia, oggi Ardee in Irlanda — il nome moderno deriva dal mitico) dura quattro giorni. Ogni giorno i due guerrieri si scontrano con una classe diversa di armi: primo giorno con lance leggere, secondo con lance pesanti, terzo con spade brandite, quarto con spade a due mani. Ogni sera, esausti, si scambiano doni: pane, latte, unguenti curativi per le ferite. Il rituale del nemico-fratello è una delle più profonde rappresentazioni del combattimento tragico in tutta la letteratura mondiale.

Al quarto giorno Cú Chulainn è all'estremo — ferite multiple, sfinimento. Chiede a Láeg, suo auriga, di gettargli il Gáe Bolga. Fer Diad aveva una corazza di corno impenetrabile — nessun'arma sulla faccia della terra può trafiggerla tranne il Gáe Bolga, che entra dall'unico punto non protetto (tra le gambe, dal basso verso l'alto) e si apre dentro in trenta punte. Cú Chulainn la lancia col piede — tecnica rituale — e la lancia trapassa Fer Diad. L'amico-fratello cade. Cú Chulainn lo prende nelle braccia, e — passo celeberrimo della Táin — piange con il più straziante lamento: 'Tutto è gioco, tutto è sport, fin quando non è venuto Fer Diad al guado'. Il lamento continua per pagine. È il momento emotivo supremo dell'intera letteratura celtica.`,
      sub3: "La fine della maledizione e la battaglia finale",
      text3: `Dopo il duello con Fer Diad, Cú Chulainn è ferito gravemente ma vivo. Il padre putativo Sualtam corre a Emain Macha per chiedere aiuto. Entra nella sala di Conchobar urlando: 'Gli uomini sono uccisi, le donne rapite, il bestiame portato via nell'Ulster! Cú Chulainn da solo resiste contro tutti gli uomini d'Irlanda ai guadi di Crich Rois! Vergogna su chi non lo soccorre!' Ma nessuno può muoversi per la maledizione. Sualtam grida tre volte — la terza così forte che cade dal cavallo sulla propria spada e muore, sgozzato dal suo stesso grido.

La morte di Sualtam rompe finalmente l'incanto. I guerrieri dell'Ulster si sollevano, ormai guariti dalle ces. Conchobar raduna l'esercito e marcia verso Muirthemne. Si combatte a Gairech e Ilgairech una grande battaglia campale — la prima della Táin che non sia un duello singolo. L'Ulster vince. Medb e Ailill sono sconfitti, devono ritirarsi.

Ma Medb ha ottenuto quello che cercava: durante i mesi del conflitto ha già condotto il Donn Cúailnge nel Connacht. Si arriva così all'epilogo bovino-cosmico: i due tori — Donn Cúailnge e Finnbhennach — si incontrano in una pianura del Connacht. Si annusano, si riconoscono come rivali cosmici (la tradizione narra che entrambi erano originariamente uomini reincarnati in forma bovina attraverso nove trasformazioni: porcari, aquile, creature marine, e infine due tori — rivali fin dalla prima nascita). Si battono una notte e un giorno. Donn Cúailnge uccide Finnbhennach, sventra il rivale e cammina per tutta l'Irlanda con le viscere del nemico appese alle corna. Ma lo sforzo lo uccide: morirà poco dopo. I due tori muoiono entrambi, esauriti.

L'ironia finale è amara: la guerra è stata combattuta per il toro, e il toro muore. Medb non ha ottenuto nulla. Migliaia di uomini sono caduti, un intero popolo è stato martirizzato, il grande Cú Chulainn è irrimediabilmente segnato dalle ferite e dalla morte di Fer Diad — per un pareggio cosmico. La Táin si chiude nel silenzio esausto.`,
      sub4: "L'epopea nazionale — e l'epopea negata",
      text4: `La Táin è stata per secoli il testo nazionale del popolo gaelico — il suo Ramayana, la sua Eneide, il suo Nibelungenlied. Trascritta per la prima volta nell'VIII-IX sec. ma con nuclei orali molto più antichi (alcuni studiosi vedono riferimenti alla cultura materiale dell'Età del Ferro celtica, I sec. a.C.-I sec. d.C.), è la più ampia narrazione continuativa superstite di una società celtica pre-cristiana.

Per la sua lunghezza (oltre 3.000 righe nella Recensione I), per la sua densità eroica e per l'ambivalenza morale dei personaggi (nessuno è davvero eroe puro: Medb ha pulsioni tiranniche ma anche ragione; Cú Chulainn è grande ma spietato; Fergus tradisce due volte), la Táin anticipa le caratteristiche del grande romanzo europeo moderno. Dumézil la lesse come caso puro di "seconda funzione indoeuropea" — la funzione guerriera; Joseph Nagy ne ha studiato la struttura liminare; Thomas Kinsella con la sua traduzione (1969) l'ha definitivamente restituita al pubblico contemporaneo.

Nella storia d'Irlanda la Táin ha avuto vicende emblematiche. Soppressa nel monachesimo più rigoroso (che la considerava troppo pagana), fu preservata proprio dai monaci amanuensi che la trascrivevano. Proibita nell'Ottocento dall'amministrazione coloniale inglese come 'letteratura sediziosa', fu stampata clandestinamente. Tradotta in inglese da Lady Gregory (1902) e Kinsella (1969), è diventata testo identitario nazionale. Seamus Heaney ne ha tradotto brani. La cultura popolare irlandese la conosce ancora: i toponimi della Táin (Cooley, Muirthemne, Árdee) sono luoghi reali e visitati.

La Táin è, insomma, la voce più antica e più profonda dell'Irlanda pre-cristiana, la testimonianza di come i gaeli vedessero se stessi, il mondo, l'amore, la morte. Non un'epopea nazionalistica (non celebra la vittoria: il tono è tragico, esausto), ma un'epopea tragica — il canto di un popolo che si guarda nello specchio e vede la propria grandezza e la propria vanità, insieme.`,
    },
    versions: [
      {
        era: "Recensione I (Lebor na hUidre, ca. 1100)",
        name: "Il testo più antico",
        text: "La versione più arcaica e linguisticamente compressa. Conserva il massimo di tratti 'pagani' e mostruosi: ríastrad di Cú Chulainn nei dettagli più estremi, intervento aperto delle divinità, motivi sciamanici. È la base delle moderne traduzioni filologiche.",
      },
      {
        era: "Recensione II (Book of Leinster, XII sec.)",
        name: "La versione letteraria",
        text: "Una riscrittura più coerente e 'letteraria', con digressioni retoriche, passaggi elegiaci ampliati (il lamento per Fer Diad è qui al suo massimo splendore). È la versione che Lady Gregory e Standish O'Grady tradussero nell'Ottocento.",
      },
      {
        era: "Traduzione di Thomas Kinsella (1969)",
        name: "La versione moderna canonica",
        text: "La traduzione di Kinsella con le illustrazioni di Louis le Brocquy è oggi la versione inglese standard della Táin. È una traduzione fedele ma vivace, che ha riportato il testo al pubblico contemporaneo. Il volume è considerato capolavoro del libro d'arte irlandese.",
      },
      {
        era: "Traduzione italiana",
        name: "L'edizione italiana",
        text: "In italiano la Táin è stata tradotta da Melita Cataldi nel 1996 (Giulio Einaudi Editore) nel volume 'Antiche storie e fiabe irlandesi', la prima edizione significativa in lingua italiana. Prima di allora il testo era noto in Italia quasi solo attraverso traduzioni inglesi e francesi.",
      },
    ],
    cult: "I luoghi della Táin sono reali e identificabili: il guado di Fer Diad è Áth Ferdia, oggi la cittadina di Ardee (contea di Louth); Muirthemne è la pianura costiera sotto Dundalk; Cooley è la penisola omonima tra Dundalk e Carlingford; Emain Macha è l'attuale Navan Fort. Questa geografia è oggi un itinerario turistico-culturale riconosciuto (la 'Táin Trail' è segnalato in tutta l'area).",
    influence: [
      {
        era: "Epopea indoeuropea",
        text: "La Táin appartiene alla 'famiglia' delle grandi epopee indoeuropee: Iliade, Mahābhārata, Nart saga osseta, Nibelungenlied. Georges Dumézil e successori la hanno studiata nella tripartizione funzionale indoeuropea: Cú Chulainn come 'guerriero' puro (seconda funzione), Medb come sovranità femminile problematica, i campioni come rappresentazione della società guerriera tripartita.",
      },
      {
        era: "Motivo del toro cosmico",
        text: "Il Donn Cúailnge è un toro cosmico — probabilmente il più antico motivo mitologico attestato in cultura indoeuropea (cfr. taurobolio mitraico, toro di Zeus-Europa, Nandi indiano). La sua morte cosmica nel finale della Táin è una formula mitica del 'sacrificio che esaurisce il mondo'.",
      },
      {
        era: "Identità nazionale irlandese",
        text: "La Táin è stata per il nazionalismo culturale irlandese del XIX-XX sec. ciò che i Nibelunghi furono per la Germania di Wagner: epopea fondatrice di identità popolare. Patrick Pearse, leader della Pasqua 1916, lesse la Táin come manuale del patriottismo; Yeats vi trovò una 'anima irlandese primordiale'.",
      },
      {
        era: "Riletture moderne",
        text: "La Táin è stata rielaborata in forme diverse. Thomas Kinsella (traduzione, 1969). Morgan Llywelyn (romanzo 'Red Branch', 1989). Seamus Heaney (traduzioni frammentarie). Il fumetto 'Cúchulainn: The Man Who Was Death' di Patrick Brown (2000s). Film irlandesi. Musica celtica (gli Horslips con l'album 'The Táin' del 1973 — rock celtico-progressivo). Videogame ('Dragon Age', 'Smite'). La Táin continua a riverberare.",
      },
    ],
    texts: [
      {
        title: "Il lamento per Fer Diad",
        source:
          "Táin Bó Cúailnge, Recensione II, Book of Leinster, trad. dal medio irlandese",
        text: "Tutto era gioco, tutto era sport / fino al venire di Fer Diad al guado: / una era la nostra educazione, / una la nostra paternità nei Fianna, / uno era l'insegnamento di Scáthach — / uno come nemmeno una coppia di pigmei gemelli. / Caro amico, Fer Diad mio, / ti giaci sangue caldo alla mia destra, / te l'ho fatto io: ero obbligato, / non fu colpa del mio odio. / Fino al cielo grida il dolore di Cú Chulainn per Fer Diad ucciso / — fino al cielo grida, e al cielo non giunge consolazione.",
      },
      {
        title: "Lo scontro dei tori",
        source: "Táin Bó Cúailnge, conclusione, trad. Thomas Kinsella (1969)",
        text: "Si incontrarono, Donn Cúailnge e Finnbhennach: il bruno di Cooley e il cornuto bianco. Si scontrarono di fronte alla corte di Medb e di Ailill. Combatterono tutta la notte. Quando venne l'alba, Donn Cúailnge aveva sollevato il suo rivale sulle corna e correva per l'Irlanda intera, portando sul dorso ciò che gli restava di Finnbhennach: un pezzo dei reni qui, un pezzo di coscia là. Finalmente tornò a casa sua nell'Ulster, si rivolse alla collina di Cuib, cadde, e morì. Così finì la razzia: due tori morti, un eroe fiaccato, e centinaia di guerrieri sotto la terra.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. IL CICLO FIANN — Acallam na Senórach
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "ciclo-fiann",
    tag: "Ciclo epico",
    title: "Il Ciclo Fiann — Fionn, i Fianna e il Dialogo degli Antichi",
    type: "Mito",
    epithet: "L'Epopea della Banda Guerriera e della Memoria Perduta",
    chips: [
      "Fionn mac Cumhaill",
      "Acallam na Senórach",
      "Ossian",
      "Diarmuid e Gráinne",
    ],
    heroColor: "linear-gradient(160deg,#0f1a08,#2a3a15,#050c05)",
    shortDesc:
      "Il secondo grande ciclo della letteratura irlandese, dedicato a Fionn mac Cumhaill e ai suoi Fianna. Caccia, combattimenti, amori, viaggi nell'Altro Mondo. Culmina nell'Acallam na Senórach (XII sec.), il 'Dialogo degli Antichi': gli ultimi Fianna sopravvissuti raccontano a San Patrizio le glorie del paganesimo morente, viaggiando con lui per l'Irlanda. Il ciclo ha dato al mondo il fenomeno Ossian, uno dei più importanti della letteratura europea.",
    bio: {
      main: `Il Ciclo Fiann (in gaelico Fiannaíocht, in inglese Fenian Cycle) è il secondo grande ciclo della letteratura irlandese antica, dopo quello dell'Ulster. Mentre il Ciclo dell'Ulster è aristocratico, cortese, legato alla fortezza di Emain Macha e alla figura feroce di Cú Chulainn, il Ciclo Fiann è popolare, nomadico, forestale, legato alla figura più umana e saggia di Fionn mac Cumhaill e alla sua banda di guerrieri-cacciatori, i Fianna. Il ciclo si ambienta nella tradizione mitico-storica attorno al III secolo d.C. sotto il re supremo Cormac mac Airt — alcuni secoli dopo Cú Chulainn e poco prima dell'arrivo del cristianesimo con San Patrizio (V sec.).

La differenza di tonalità tra i due cicli è costitutiva. Il Ciclo dell'Ulster è grande epopea eroica: poche gesta, tutte monumentali, tutte cariche di tragedia cosmica. Il Ciclo Fiann è invece una vasta collezione di racconti — centinaia di episodi, dai più brevi (aneddoti di caccia, incontri con fate) ai lunghissimi ('Acallam na Senórach' ha 8.000 righe, 'Tóraigheacht Dhiarmada agus Ghráinne' è un romanzo). Il ciclo copre tutte le età della vita di Fionn (infanzia, gioventù, maturità, vecchiaia, morte), e continua anche dopo la sua morte attraverso i sopravvissuti. È più simile a un vasto cantare orale che a un'epopea unitaria: il ciclo è la somma dei suoi episodi, e la sua coerenza è data dalla persistenza dei personaggi e dei luoghi piuttosto che dalla struttura narrativa.`,
      sub1: "Le varie parti del ciclo — infanzia, imprese, caccia",
      text1: `Il ciclo si apre con la Macgnímartha Finn ('Le gesta infantili di Finn', XII sec.), che narra la nascita e giovinezza dell'eroe: padre Cumhall ucciso dai Morna, madre Muirne nascosta nelle foreste, il ragazzo allevato da Bodhmall druidessa e Liath Luachra guerriera. Il passo centrale è l'incontro con Finnéces e il Salmone della Saggezza (già raccontato nel profilo di Fionn). Questa parte fa del ciclo un 'romanzo di formazione' — genere poco frequente nella letteratura eroica antica.

Da giovane adulto, Fionn prende il comando dei Fianna e inizia la fase delle imprese. Sono decine: la lotta col gigante Aillen mac Midgna che ogni Samhain incendiava Tara (Fionn lo uccide in una notte unica di veglia, ricevendo in premio il comando stabile dei Fianna); la caccia alla cerva-fata che si rivela donna (madre di Oisín); il viaggio alla Terra Promessa; la battaglia con i Fomori ritornati; gli inganni dei mondo dei sídhe; e molti altri. La struttura è episodica: ogni racconto è relativamente autonomo, spesso in forma di ballate popolari (i laoithe fiannuigheachta), tramandate oralmente fino al XIX secolo nelle Gaeltacht irlandesi e scozzesi.

La dimensione della caccia pervade il ciclo. Non caccia ordinaria ma caccia magica: il cervo inseguito si trasforma in donna, il cinghiale si rivela fratello maledetto, la foresta si dischiude in palazzo del Sídhe. Attraverso la caccia i Fianna entrano costantemente nell'Altro Mondo e ne escono — sono mediatori perpetui tra il mondo umano e quello delle fate. Fionn è il 'capo-caccia' (Árd-Rí na Fiann) che sa il sentiero di ogni cervo, il guado di ogni fiume, la radura di ogni foresta. La sua saggezza ('imbas forosnai') è soprattutto saggezza ecologica e territoriale — coscienza totale del paesaggio.`,
      sub2: "Le grandi storie d'amore — Diarmuid, Gráinne, le fate",
      text2: `Il Ciclo Fiann conosce la dimensione amorosa in modo più ampio e articolato del Ciclo dell'Ulster. Se il Ciclo dell'Ulster ha fondamentalmente Deirdre e pochi altri, il Ciclo Fiann è pieno di racconti d'amore: la caccia che diventa incontro con una fata, il matrimonio tra mortale e essere del sídhe, il rapimento tra terra e Tír na nÓg.

La storia d'amore centrale è la Tóraigheacht Dhiarmada agus Ghráinne ('Inseguimento di Diarmuid e Gráinne') — già raccontata nel profilo di Diarmuid: Gráinne promessa a Fionn vecchio si innamora di Diarmuid giovane, lo costringe con un geis a fuggire con lei, i due attraversano l'Irlanda per sedici anni inseguiti da Fionn. È l'archetipo probabile di Tristano e Isotta.

Altra storia fondamentale è quella di Oisín e Niamh Chinn Óir: la fata d'oro che rapisce Oisín a Tír na nÓg (già trattata nel profilo di Oisín). Questa storia è centralizzata dalla cultura popolare come archetipo del 'viaggio al Paradiso Celtico'.

Una terza storia è l'amore di Fionn stesso per Sadhbh, madre di Oisín: donna trasformata in cerva dal druido Fear Doirche perché aveva respinto le sue attenzioni. Fionn la incontra durante la caccia, riconosce in lei una fata, la porta come moglie a casa, e con lei vive il suo periodo più felice. Ma Fear Doirche torna nell'ambiente della corte travestito da druido amico, lancia di nuovo la maledizione, e Sadhbh è costretta a tornare cerva per sempre — sparendo nella foresta incinta di Oisín. Fionn la cercherà per sette anni, invano. È una delle più malinconiche storie del ciclo.`,
      sub3: "L'Acallam na Senórach — il Dialogo degli Antichi",
      text3: `Il testo finale e più importante del ciclo è l'Acallam na Senórach ('Il Dialogo dei Vecchi' o 'Il Dialogo degli Antichi'), compilato nel XII secolo ma probabilmente basato su materiale orale molto più antico. È il più lungo testo narrativo medievale in lingua irlandese — circa 8.000 righe alternando prosa e versi. La struttura è unica: dopo la morte dei Fianna nella battaglia di Gabhra, sopravvivono solo pochi — il più importante dei quali è Caílte mac Rónáin (a cui si unirà in seguito Oisín, di ritorno da Tír na nÓg). Questi vecchi incontrano San Patrizio, che sta cristianizzando l'Irlanda, e lo accompagnano in un viaggio attraverso l'isola. A ogni luogo — ogni pietra, ogni collina, ogni guado, ogni bosco, ogni lago — Patrizio chiede il nome antico e la storia. E Caílte (a volte Oisín) racconta. Si dispiegano così centinaia di storie legate al paesaggio: l'Irlanda intera è una geografia mitica, un immenso palinsesto di memoria.

L'Acallam è uno dei testi più emotivamente potenti della letteratura medievale europea. Il dialogo non è pacifico: Patrizio predica il Dio cristiano, cerca di convertire i vecchi Fianna. Caílte e Oisín argomentano, protestano, a tratti si commuovono, a tratti si arrabbiano. La più celebre tra le loro obiezioni è pronunciata da Oisín: 'Se il tuo Dio non è accogliente come Fionn lo era con il povero e l'ospite, il tuo Dio non è un vero Dio.' Il testo, redatto da monaci cristiani che pure dovrebbero celebrare la conversione, dà voce a questa resistenza pagana con tale intensità che il lettore moderno (e forse già quello medievale) non può fare a meno di parteggiare per i vecchi. L'Acallam è il più straordinario atto di conservazione della memoria pagana compiuto dal cristianesimo irlandese: proprio nel momento in cui sostituiva il vecchio con il nuovo, lo ha fissato nella scrittura per sempre.

Alla fine del testo, Caílte e Oisín accettano (o non accettano: le versioni variano) il battesimo. Muoiono poco dopo. Con loro muoiono i Fianna e il paganesimo irlandese. L'Acallam si chiude nel silenzio.`,
      sub4: "Da Ossian a Fianna Fáil — la vita moderna del ciclo",
      text4: `Il Ciclo Fiann ha avuto una vita postuma più vivace di qualunque altra tradizione celtica. La sua diffusione geografica è già straordinaria nel Medioevo: si tramanda non solo in Irlanda ma anche in Scozia (dove Fionn diventa Fingal, e i Fianna diventano i Féinn scozzesi), nell'Isola di Man, nelle Ebridi, in Bretagna. È il ciclo 'pan-celtico' per eccellenza.

Nel 1760-65 il poeta scozzese James Macpherson pubblica i 'Fragments of Ancient Poetry' e poi le 'Works of Ossian': poemi presentati come traduzioni dal gaelico antico di Ossian/Oisín figlio di Fingal. Il successo in Europa è senza precedenti. Goethe in 'Werther' (1774) fa leggere Ossian al protagonista nei momenti più intensi — è forse il libro più amato d'Europa in quei decenni. Napoleone ne possiede una copia che porta in guerra (si dice la tenesse con sé ad Austerlitz). Jefferson considera Ossian 'il più grande poeta'. Mendelssohn compone l'ouverture delle Ebridi (1830) ispirandosi alla Fingal's Cave. Ingres, Girodet, Runge dipingono scene ossianiche. L'ossianesimo è uno dei più importanti movimenti estetici europei del XVIII-XIX sec., direttamente all'origine del Romanticismo.

La controversia sull'autenticità di Macpherson è durata due secoli. Samuel Johnson (1775) lo definisce falsificatore. Oggi si sa che Macpherson elaborò liberamente materiali autentici — ballate gaeliche orali raccolte in Scozia — ma con ampie aggiunte di suo pugno. Il risultato non è traduzione ma creazione sovrapposta. Eppure l'impatto è reale: ha reso il ciclo Fiann patrimonio europeo, e ha contribuito alla rinascita dell'interesse per le letterature celtiche autentiche.

Nel movimento nazionalista irlandese del XIX-XX sec., il ciclo diventa radice identitaria. Gli 'Irish Republican Brotherhood' si autodefiniscono 'Fenians' nel 1858: dai Fianna di Fionn. Il partito politico Fianna Fáil (fondato da Éamon de Valera nel 1926) — uno dei due grandi partiti irlandesi del XX-XXI sec. — prende il nome letteralmente dai 'Fianna del Destino'. Il ciclo Fiann è l'unico caso in Europa di una mitologia antica che dà nome diretto a un partito politico moderno ancora esistente e ancora dominante. La continuità è straordinaria.

Il ciclo continua a essere vivo anche nella cultura pop contemporanea: fumetti, videogiochi, film irlandesi, rock celtico (Horslips, The Chieftains, Cruachan), fantasy letteraria. Fionn dormiente nella caverna che attende di tornare è uno dei più potenti miti dell'Irlanda mai stata tradita e sempre in attesa.`,
    },
    versions: [
      {
        era: "Macgnímartha Finn (XII sec.)",
        name: "L'infanzia di Fionn",
        text: "'Le gesta infantili di Finn' — testo che narra le origini dell'eroe, l'infanzia nascosta nelle foreste e l'incontro con il Salmone della Saggezza. È il nucleo genetico del ciclo.",
      },
      {
        era: "Acallam na Senórach (XII sec.)",
        name: "Il grande dialogo con Patrizio",
        text: "Il testo-monstre del ciclo: 8.000 righe di dialogo tra i vecchi Fianna sopravvissuti e San Patrizio. Contiene decine di storie minori legate alla geografia d'Irlanda. È il più importante testo narrativo vernacolare medievale europeo.",
      },
      {
        era: "Tóraigheacht Dhiarmada agus Ghráinne (XV sec.)",
        name: "L'inseguimento di Diarmuid e Gráinne",
        text: "Il romanzo d'amore centrale del ciclo. Probabile archetipo di Tristano e Isotta. Oggi è il testo del ciclo più tradotto e riletto.",
      },
      {
        era: "Ossian di Macpherson (1760-65)",
        name: "La trasfigurazione europea",
        text: "James Macpherson trasforma il ciclo Fiann in fenomeno culturale europeo. Impatto senza pari sul Romanticismo. Controversia sull'autenticità durata due secoli. Oggi considerato 'creazione ispirata a materiale autentico'.",
      },
      {
        era: "Revival e traduzioni moderne",
        name: "Yeats, Lady Gregory, Kinsella",
        text: "Lady Gregory traduce il ciclo in 'Gods and Fighting Men' (1904). Yeats ne trae poesie e drammi. Thomas Kinsella in 'Dolmen Miscellany' include traduzioni Fiann. La Gaeltacht moderna conserva ancora ballate del ciclo nella tradizione orale.",
      },
    ],
    cult: "I luoghi del ciclo sono centinaia in Irlanda e Scozia. Almu (Hill of Allen, Kildare) è la base mitica dei Fianna. Gleann Bolcáin è la foresta della loro estate. Il Ben Bulben (Sligo) è il monte della morte di Diarmuid. Fingal's Cave (Isola di Staffa, Scozia) è la grotta dove Fionn combatté con Benandonner. Il Giant's Causeway (Ulster) è, secondo la tradizione popolare, la strada costruita da Fionn per attraversare il mare. Tutta l'Irlanda è geografia fiannica.",
    influence: [
      {
        era: "Ossianesimo e Romanticismo",
        text: "Il ciclo attraverso Macpherson è tra le fonti maggiori del Romanticismo europeo. Goethe, Herder, Napoleone, Chateaubriand, Foscolo, Leopardi, Puškin — tutti lettori di Ossian. L'immagine dell'eroe-bardo solitario in lamento per un mondo perduto, capitale del Romanticismo, è di origine direttamente fiannica.",
      },
      {
        era: "Identità politica irlandese",
        text: "I 'Fenians' del 1858, il Fianna Fáil del 1926, il movimento nazionalista IRB-IRA hanno tutti rivendicato filiazione dai Fianna. È l'unico caso in Europa moderna di una mitologia antica che plasma esplicitamente la politica contemporanea — fino ai giorni nostri.",
      },
      {
        era: "Il motivo di Tristano",
        text: "L'ipotesi che Tristano e Isotta sia derivazione continentale di Diarmuid e Gráinne (già formulata da Gertrude Schoepperle, 1913; confermata da Rachel Bromwich, 1965) colloca il ciclo alla radice del grande romanzo medievale europeo. Il ciclo Fiann non è provinciale: è sorgente di archetipi transculturali.",
      },
      {
        era: "Tolkien e il fantasy",
        text: "Tolkien conosceva bene il ciclo Fiann. Il motivo del viaggio verso la Terra Eterna (Niamh-Oisín) e quello del re dormiente (Fionn) confluiscono nelle Undying Lands e nel ritorno dei re numenoreani. Attraverso Tolkien il ciclo permea tutto il fantasy contemporaneo.",
      },
    ],
    texts: [
      {
        title: "Il primo incontro di Oisín e Niamh",
        source:
          "Laoi Oisín i dTír na nÓg, Michael Comyn (ca. 1750), trad. dal gaelico",
        text: "Una fanciulla venne a noi sul pendio / sul suo cavallo più bianco della neve. / I capelli le scendevano a onde dorate / fino all'erba della riva. / Aveva il volto bianco come la spuma del mare, / le guance come il sangue sul latte, / gli occhi azzurri come le onde lontane / quando il sole al mattino ci dorme dentro. / 'Io sono Niamh Chinn Óir, / figlia del re di Tír na nÓg. / Sono venuta per prendere Oisín con me / nel paese dove non si invecchia, / dove non si muore, / dove ogni ora è piena come un anno di festa.'",
      },
      {
        title: "Il lamento di Caílte davanti a Patrizio",
        source: "Acallam na Senórach, trad. Standish O'Grady (1892)",
        text: "Caílte parlò a Patrizio e disse: 'Cento volte mille erano i cervi nei boschi di Slievemargy ai tempi di Fionn. Mille cacciatori al suono del corno da caccia. Mille arpisti alle feste notturne. Mille colpi di spada al mattino. Mille coppe di idromele alla sera. Patrizio, il tuo Dio del cielo e dell'inferno avrà mai tanta gloria quanto n'aveva Fionn? E se il tuo Dio non è generoso con chi fu generoso quanto Fionn, allora il tuo Dio è povero, e Fionn era ricco.' Patrizio si volse e pianse, ma non rispose.",
      },
    ],
  },
];
