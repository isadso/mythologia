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
    bio: `Il Dagda — il cui nome significa letteralmente "il Dio Buono", non nel senso morale ma in quello funzionale di "dio competente in ogni cosa" — è la figura centrale del pantheon irlandese arcaico. È il patriarca dei Tuatha Dé Danann, la razza divina che governò l'Irlanda prima dell'arrivo dei mortali Milesi. Nelle fonti è chiamato anche Eochaid Ollathair ("Padre Universale"), Ruad Rofhessa ("il Rosso di Grande Sapere") e Aedh Alainn ("il Nobile Fuoco").

Il Dagda possiede tre oggetti magici che incarnano la sua sovranità cosmica: il coire ansic, il calderone dell'abbondanza dal quale nessuno si allontana mai insoddisfatto; la lorg mór, la clava immensa così potente che un'estremità uccide nove uomini con un solo colpo mentre l'altra li riporta in vita; e l'uaithne, l'arpa magica che suona da sola e comanda le stagioni — inverno, primavera, estate e autunno obbediscono alla sua musica. Questi tre attributi — abbondanza, potere sulla vita e sulla morte, controllo del ciclo cosmico — lo rendono archetipicamente l'Allfather celtico, l'equivalente funzionale di Zeus o di Odino, ma con una sfumatura più terrestre e fertile, più vicina al dio-coltivatore che al dio-guerriero.`,
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
    bio: `La Morrígan — il cui nome si traduce come "Grande Regina" (mór + ríoghain) oppure, secondo alcuni filologi, come "Regina-Fantasma" (mor- radice indoeuropea per "terrore", cfr. latino mors e inglese nightmare) — è una delle figure più inquietanti e complesse della mitologia irlandese. È una triplice dea: le sue tre manifestazioni sono Badb (la "corvacchia", la furia), Macha (la dea-cavalla della sovranità e della maternità) e Nemain (il panico della battaglia). Insieme formano una sola entità divina dai tre volti, o tre sorelle che agiscono all'unisono — le fonti medievali oscillano tra le due interpretazioni.

La Morrígan è signora della guerra, ma non guerriera combattente come Atena o come la Valchiria norrena: agisce dall'alto, sorvolando i campi di battaglia in forma di corvo, decretando chi cadrà e chi sopravvivrà, gettando panico nel cuore degli eserciti con il suo grido. È anche la dea della sovranità territoriale — dare la terra al re è suo privilegio — e la sua unione sessuale con un sovrano o con un eroe è l'investitura mitica del potere. Quando Cú Chulainn la rifiuta alla vigilia della battaglia del Guado, lei lo maledice: lo vedremo morire trafitto, e sarà lei, in forma di cornacchia, a posarsi sulla sua spalla come segno che la sua anima ha lasciato il corpo.`,
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
    bio: `Lugh — il cui nome deriva dalla radice indoeuropea *leug- ("luce") o, secondo un'etimologia più recente proposta da Bernhard Maier, da *leugh- ("giuramento, patto") — è la giovane divinità solare irlandese, la più splendida e dotata dei Tuatha Dé Danann. È chiamato Lámhfhada ("dalle lunghe braccia") per la sua abilità con la lancia e la fionda, e Samildánach ("esperto in ogni arte") perché incarna la perfezione multipla: è contemporaneamente guerriero, mago, fabbro, poeta, arpista, medico, coppiere, strategio. La sua caratteristica costitutiva è che non c'è un'arte che qualcun altro padroneggi meglio di lui.

Figlio di Cian dei Tuatha Dé Danann e di Ethlinn (figlia del re dei Fomori Balor), Lugh incarna la sintesi cosmica tra l'ordine luminoso e il caos primordiale. Balor, suo nonno, è un gigante il cui unico occhio mostruoso — tenuto chiuso da sette pelli — uccide chiunque vi cada sotto: Lugh è destinato, per profezia, a ucciderlo, e lo farà a Mag Tuired scagliandogli una pietra dalla fionda che gli attraversa il cranio, riversando l'occhio sui Fomori stessi e causando la loro rovina. Questa uccisione del nonno materno è il motivo indoeuropeo del "patricidio del drago": lo stesso archetipo di Indra che uccide Vrtra, di Perseo che uccide Gorgone, di Apollo che uccide Pitone.`,
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
    bio: `Brigid — il cui nome deriva da un proto-celtico *Briganti, "l'Alta, l'Esaltata", dalla stessa radice indoeuropea da cui derivano il tedesco Berg ("monte") e il sanscrito brhat ("grande") — è una delle dee più potenti e venerate del pantheon celtico, e una delle poche ad aver attraversato indenne la cristianizzazione. È figlia del Dagda, sposa di Bres (il re semi-fomoriano), madre di Ruadán che muore nella battaglia di Mag Tuired strappandole il primo lamento funebre (caoine) della storia irlandese.

Brigid è tre dee in una — una triplicità che non è simbolica ma letterale: le fonti parlano di "tre Brigit", tre sorelle omonime figlie del Dagda, ciascuna dea di un dominio specifico. La prima Brigid è la filí, la dea della poesia e dell'ispirazione bardica (da lei deriva la figura delle filid, i poeti-veggenti irlandesi). La seconda è la dea dei fabbri e della metallurgia — il fuoco della fucina come fuoco sacro della trasformazione. La terza è la dea della guarigione e delle levatrici — patrona delle sorgenti sacre che in tutta l'Irlanda portano ancora oggi il suo nome. I tre domini — ispirazione, trasformazione, guarigione — sono tutti associati al fuoco nelle sue tre forme: fuoco della mente, fuoco della fucina, fuoco vitale del corpo.`,
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
    bio: `Danu — chiamata anche Anu, o Ana — è la matrona divina da cui prende nome l'intera razza dei Tuatha Dé Danann ("Popolo della dea Danu"). È la Grande Madre primordiale, da cui discendono tutti gli dèi irlandesi, e allo stesso tempo una delle figure più evanescenti e misteriose della mitologia celtica: quasi nulla ci è conservato direttamente su di lei, come se la sua presenza fosse così fondante e onnipervasiva da non richiedere racconti — è il substrato, non un personaggio.

La sua importanza si misura indirettamente: è lei che dà il nome al pantheon, è lei che è venerata nei 'Paps of Anu', due monti gemelli del Kerry a forma di seni femminili la cui forma paesaggistica è ancora oggi riconoscibile, è lei che sopravvive nel nome del grande fiume Danubio (latino Danuvius, protoceltico *Dānu-) e dei fiumi Don, Dnepr, Dnestr, dimostrando una estensione geografica paneuropea che fa di Danu forse la più antica divinità indoeuropea documentata. Alcuni studiosi (Ó hÓgáin, Mallory) identificano Danu con il principio femminile cosmico primordiale — l'acqua fertilizzante, la terra madre, il principio generativo universale — antecedente alla differenziazione in divinità specializzate.`,
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

  /* ══════════════════════════════════════════════════════════════════════
     ↓↓↓   MARKER: INSERIRE QUI IL LOTTO 1B (altre 5 divinità)   ↓↓↓
     Le divinità Manannán, Nuada, Aengus, Dian Cécht, Ogma vanno inserite
     esattamente a questa posizione — prima di `];` che chiude IRISH_DEITIES.
     ══════════════════════════════════════════════════════════════════════ */
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
    bio: `Manannán mac Lir — "Manannán figlio del Mare" (Lir è il mare stesso personificato) — è il signore degli oceani e delle isole sacre dell'Altro Mondo nella mitologia irlandese. Il suo nome è strettamente legato all'Isola di Man, che secondo la tradizione porta il suo nome, e dove egli regna come patrono divino. È figura così importante che il Ciclo Mitologico lo presenta come il penultimo re dei Tuatha Dé Danann — colui che, dopo la sconfitta per mano dei Milesi, guida il popolo divino nel mondo invisibile dei síde e delle isole lontane, diventando il traghettatore tra il mondo umano e quello degli immortali.

Manannán è dotato di oggetti magici straordinari: la sua spada Fragarach ("Risposta") può tagliare qualsiasi armatura e costringere chiunque ferisca a dire la verità; il suo mantello può avvolgere di nebbia un'isola intera rendendola invisibile (così nasconde ai Milesi l'Altro Mondo); il suo scudo Sgiath Gailbhinn fa impazzire i nemici che lo guardano; la sua cavalcatura è il cavallo Enbarr dalla Criniera d'Onda che corre sul mare come sulla terra; la sua nave Sguabtuinne ("Spazzaonde") non ha bisogno di vele né di remi e obbedisce ai soli pensieri del capitano. Ogni oggetto incarna un aspetto del mare: la profondità, la nebbia, il terrore, l'onda, il vento. Manannán è anche mago supremo, capace di shapeshifting, di illusione, di attraversamento dei mondi.`,
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
    bio: `Nuada — il cui nome deriva probabilmente dalla radice proto-celtica *noudont- ("colui che cattura, il pescatore") — è il primo re dei Tuatha Dé Danann in terra d'Irlanda. Sotto la sua guida i Tuatha Dé arrivano nell'isola e combattono la Prima Battaglia di Mag Tuired contro i Fir Bolg, gli abitanti precedenti. Nuada vince la battaglia ma perde la mano destra nello scontro con il campione Fir Bolg Sreng — e questo fatto apparentemente secondario si rivela la chiave teologica del mito: secondo la legge sacra celtica, un re menomato non può più regnare. Un sovrano fisicamente integro è garanzia dell'integrità cosmica; un sovrano mutilato è disallineamento tra persona e terra, e cagiona la sterilità della terra stessa.

Nuada abdica dunque, e il trono passa al semi-fomoriano Bres il Bello — che tuttavia rivela presto avarizia, cattivo governo e asservimento ai Fomori, portando i Tuatha Dé all'oppressione. Solo quando il dio-medico Dian Cécht, con l'aiuto del figlio Miach e della figlia Airmed, costruisce a Nuada un braccio d'argento che funziona perfettamente come braccio di carne (e successivamente un braccio di carne vera, secondo versioni posteriori), Nuada può tornare al trono. Proprio sotto il suo rinnovato regno arriverà Lugh, che combatterà la Seconda Battaglia di Mag Tuired — e proprio Nuada cadrà per mano di Balor, passando definitivamente a Lugh lo scettro. Nuada è dunque il Re Ferito, l'archetipo del sovrano la cui menomazione dissangua il regno e la cui guarigione lo rigenera.`,
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
    bio: `Aengus Óg — "Aengus il Giovane" — è il dio irlandese dell'amore, della giovinezza e dell'ispirazione poetica: una figura di straordinaria bellezza e dolcezza, l'Eros celtico. Figlio illegittimo del Dagda e di Bóann (dea del fiume Boyne, sposa di Nechtan), la sua stessa nascita è un mito del tempo sospeso: il Dagda ferma il sole per nove mesi così che Bóann possa concepire, portare in grembo e partorire Aengus tutto in un solo giorno, mantenendo il segreto dell'adulterio divino. Da qui il nome "Mac ind Óc" — "Figlio Giovane" — e l'epiteto Óg ("giovane"), perché Aengus è nato e cresciuto in un giorno.

L'attributo distintivo di Aengus sono i quattro uccelli che gli volano attorno al capo: i baci che lui dona diventano uccelli, e ovunque vada una nube di passeri o colombe lo circonda come emblema dell'amore. Altro attributo è l'arpa d'oro la cui musica costringe chiunque l'ascolti ad amare. Ma il mito centrale di Aengus è il più bello racconto d'amore di tutta la letteratura irlandese antica: l'Aislinge Óenguso (il "Sogno di Aengus"). Aengus sogna per tre notti consecutive una fanciulla bellissima che gli suona l'arpa, si innamora perdutamente di lei, si ammala di malinconia d'amore. Dopo ricerche che durano tre anni — percorrendo con il padre e con gli altri dèi tutta l'Irlanda — scopre che si tratta di Caer Ibormeith, figlia di Ethal Anbuail, trasformata in cigno. La trova al lago di Dragon's Mouth un giorno di Samhain, si trasforma lui stesso in cigno, e i due volano insieme al Brú na Bóinne cantando una musica così dolce che chi l'ascolta cade in sonno profondo per tre giorni e tre notti. È l'archetipo dell'unione romantica perfetta.`,
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
    bio: `Dian Cécht — il cui nome significa "rapido assaltatore" o "dio rapido" — è il medico dei Tuatha Dé Danann, l'equivalente celtico di Asclepio greco. È figlio di Esarg, nipote di Net dio della guerra, padre di Cian (padre di Lugh), di Miach e di Airmed. La sua dimora sacra è il Pozzo di Slane (Tipra Sláine, "Pozzo della Salute"), le cui acque rigenerano i feriti: vi si immergono i guerrieri caduti dei Tuatha Dé durante la Seconda Battaglia di Mag Tuired e riemergono vivi e integri come prima — e Dian Cécht, insieme a Miach, Airmed e Octriuil, canta gli incantesimi che fanno funzionare la magia del pozzo. I Fomori, terrorizzati, comprendono che contro un esercito così rigenerabile non possono vincere, e distruggono il pozzo con pietre; ma i Tuatha Dé ne avranno abbastanza per vincere.

Dian Cécht è però anche figura sinistra: uccide il proprio figlio Miach per gelosia professionale. Miach — medico più grande del padre — guarisce Nuada sostituendo il braccio d'argento con un vero braccio di carne. Dian Cécht, umiliato, colpisce il figlio tre volte sulla testa con la spada. Miach sopravvive ai primi due colpi. Al terzo, che gli apre il cervello, muore. Dalla tomba di Miach crescono 365 erbe diverse, una da ogni giuntura e nervo del suo corpo: sono le 365 erbe medicinali dell'anno. La sorella Airmed le raccoglie con cura nel suo mantello classificandole per proprietà — un'erba per ogni organo, un'erba per ogni giorno. Ma Dian Cécht, furente, rovescia il mantello, disperdendo la classificazione. Per questo, dice il testo, "a tutt'oggi non si conoscono tutte le virtù delle erbe": la sapienza medica totale è andata perduta per la gelosia di un dio.`,
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
    bio: `Ogma — fratello del Dagda, figlio del re semi-fomoriano Elatha e di Ethne (o, secondo altre genealogie, di Etain) — è il campione combattente e insieme l'inventore divino dell'alfabeto ogamico, il più antico sistema di scrittura celtico. Il suo epiteto arcaico Grianainech ("dal volto di sole") ne sottolinea la radianza: è il dio bello, forte ed eloquente, in cui si uniscono il vigore fisico e il potere della parola. Nei testi irlandesi è detto "il campione dei Tuatha Dé" e prende parte alla seconda battaglia di Mag Tuired, ma la sua gloria principale non è di guerra: è di linguaggio.

L'invenzione dell'ogham — che ci è giunta nel mito come opera diretta di Ogma — è uno dei momenti fondativi della civiltà irlandese: è il momento in cui la parola, prima solo orale, diventa anche scritta. L'ogham è un alfabeto lineare di 20-25 segni (nel sistema originario) ottenuti attraverso combinazioni di tacche incise su una linea verticale o sullo spigolo di una pietra. Ogni lettera prende nome da un albero (beith = betulla, duir = quercia, coll = nocciolo, ecc.), rivelando la natura druidica e vegetale di questa scrittura. I primi segni ogamici documentati archeologicamente sulle pietre ogamiche (ca. IV-VII sec. d.C.) sono ancora oggi diffusi in Irlanda sud-occidentale e nel Galles. Ogma è quindi il prometeo celtico della scrittura: il dio che dà agli uomini lo strumento per fissare il pensiero oltre la voce.`,
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
