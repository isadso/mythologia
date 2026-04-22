/* data/mesopotamia.js — all content for the Mesopotamia mythology section */

const MESOP_DEITIES = [
  {
    id: 'anu', name: 'Anu', role: 'Dio del Cielo, padre degli dèi',
    tags: ['Cielo', 'Regalità', 'Sumero', 'Uruk'],
    epithet: 'Il Padre del Firmamento', type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Cosmico'],
    heroColor: 'linear-gradient(160deg,#0d1520,#1a2a4a,#0a1020)',
    bio: `Anu è la divinità più antica e più elevata del pantheon mesopotamico, il signore assoluto del cielo e della volta stellata. Il suo nome stesso — An in sumero — significa semplicemente "cielo". Precede tutti gli altri dèi nella gerarchia cosmica e presiede l'assemblea divina, sebbene il suo ruolo sia spesso più simbolico che attivo.

Anu rappresenta l'autorità suprema, la legittimità del potere divino e regale, senza intervenire direttamente nelle faccende umane. La sua distanza non è indifferenza — è la distanza propria di chi incarna un principio cosmico piuttosto che una volontà personale.`,
    versions: [
      { era: 'Periodo Sumero arcaico (3500–2500 a.C.)', name: 'An', text: 'Nella tradizione sumera più antica An è il dio supremo, marito di Ki (la terra) e padre di tutti gli dèi. La sua sede è Uruk, dove il suo tempio principale Eanna porta il suo nome.' },
      { era: 'Periodo Accadico (2334–2154 a.C.)', name: 'Anu', text: 'Con la dominazione accadica il nome diventa Anu. Il dio mantiene la sua posizione apicale ma il ruolo attivo è progressivamente ceduto a Enlil e poi a Marduk.' },
      { era: 'Periodo Babilonese (2000–500 a.C.)', name: 'Anu nel pantheon di Marduk', text: "Nell'Enuma Elish Anu conserva un ruolo onorario ma è Marduk il vero sovrano del cosmo. Anu gli cede le sue prerogative divine come atto di riconoscimento." },
    ],
    cult: `Il centro principale del culto di Anu era Uruk, la grande città-stato sumera, dove il tempio Eanna — letteralmente "casa del cielo" — era dedicato congiuntamente ad Anu e alla dea Inanna.

Il suo simbolo per eccellenza è la tiara cornuta, emblema della divinità mesopotamica, e la stella a otto punte. Nelle rappresentazioni artistiche non appare quasi mai in forma antropomorfa — la sua natura è troppo astratta e cosmica per essere contenuta in un'immagine.`,
    influence: [
      { era: 'Cultura ittita (1700–1200 a.C.)', text: 'Gli Ittiti adottarono Anu nel proprio pantheon come divinità celeste suprema, mantenendone le caratteristiche cosmiche.' },
      { era: 'Tradizione biblica', text: "Il concetto di un Dio celeste supremo, padre degli esseri divini, riecheggia nei testi biblici — il nome El nella Bibbia ebraica condivide caratteristiche etimologiche e concettuali con An/Anu." },
      { era: 'Astrologia mesopotamica', text: "Il cielo di Anu è uno dei tre 'cammini' celesti del sistema astrologico mesopotamico: il cammino di Anu (fascia equatoriale), di Enlil (nord) e di Ea (sud)." },
    ],
    texts: [
      { title: 'Inno ad Anu', source: 'Testi liturgici di Uruk, ca. 2000 a.C.', text: "Anu, re degli dèi, signore delle terre oscure, la tua parola è grande come il cielo, la tua parola è profonda come la terra. Nessun dio conosce la sua misura." },
    ],
  },
  {
    id: 'enlil', name: 'Enlil', role: 'Signore del Vento e della Terra',
    tags: ['Vento', 'Destino', 'Nippur', 'Diluvio'],
    epithet: "Il Signore dell'Aria, Colui che Decreta i Destini", type: 'Divinità',
    chips: ['Sumero', 'Cosmico', 'Nippur'],
    heroColor: 'linear-gradient(160deg,#0a1a10,#0d2d20,#0a1510)',
    bio: `Enlil è una delle divinità più potenti e complesse del pantheon mesopotamico. Il suo nome significa "Signore dell'Aria" — l'elemento che separa il cielo (Anu) dalla terra (Ki). È lui che detiene le Tavole del Destino, le tavolette divine su cui sono iscritti i fati di tutti gli esseri viventi.

Nel sistema cosmologico sumero, Enlil è colui che ha separato il cielo dalla terra e ha reso possibile la vita. Risiede a Nippur, la città sacra per eccellenza della Mesopotamia, nel suo grande tempio Ekur — "casa della montagna".`,
    versions: [
      { era: 'Tradizione Sumera (3000–2000 a.C.)', name: 'Enlil Benigno', text: 'Nei testi più antichi Enlil è ambivalente: crudele nel decretare il diluvio, ma anche creatore della vegetazione e dell\'agricoltura.' },
      { era: 'Periodo Accadico', name: 'Ellil', text: 'La versione accadica Ellil mantiene tutte le caratteristiche sumeriche. Il suo ruolo di detentore delle Tavole del Destino diventa centrale.' },
      { era: 'Periodo Babilonese', name: 'Declino dopo Marduk', text: "Con l'ascesa di Marduk le prerogative di Enlil vengono trasferite al nuovo dio nazionale. Marduk viene chiamato 'Enlil degli dèi' come titolo onorifico." },
    ],
    cult: `Il grande tempio di Enlil a Nippur, l'Ekur, era il luogo di culto più antico e rispettato di tutta la Mesopotamia. Persino i re che non governavano Nippur sentivano il bisogno di ottenere l'approvazione di Enlil per legittimare il proprio regno.

Il vento era il suo respiro, la tempesta la sua voce — quando un uragano devastava una città, era Enlil che aveva espresso la sua collera.`,
    influence: [
      { era: 'Mito del diluvio', text: "È Enlil a decretare il Grande Diluvio per punire l'umanità troppo rumorosa. Questo atto fonda l'intero genere letterario del 'diluvio universale'." },
      { era: 'Zeus e Giove', text: 'Molte caratteristiche di Enlil — dio dell\'aria e delle tempeste, signore degli dèi — confluiranno nel profilo di Zeus greco e Giove romano.' },
    ],
    texts: [
      { title: 'Il lamento per la distruzione di Ur', source: 'Composizione sumera, ca. 2000 a.C.', text: "Enlil ha determinato la mia sorte: egli ha consegnato la mia città alla tempesta, ha distrutto Ur nella tempesta — ha portato via i suoi re, ha portato via i suoi abitanti." },
      { title: 'Inno a Enlil', source: 'Testo liturgico sumero, ca. 2100 a.C.', text: "Senza Enlil, il signore che determina i destini, nessuna città sarebbe stata fondata, nessun insediamento stabilito; nessuna stalla costruita, nessun recinto eretto." },
    ],
  },
  {
    id: 'ea', name: 'Ea / Enki', role: 'Dio della Saggezza e delle Acque',
    tags: ['Saggezza', 'Magia', 'Eridu', 'Acque'],
    epithet: "Il Principe della Terra, Signore dell'Abisso Primordiale", type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Eridu'],
    heroColor: 'linear-gradient(160deg,#081520,#0a2535,#061018)',
    bio: `Ea (accadico) o Enki (sumero) è tra le divinità più affascinanti e amate del pantheon mesopotamico. A differenza di Anu, remoto e distante, o di Enlil, severo e imprevedibile, Ea è il dio che si schiera con l'umanità: è lui a creare gli uomini, a insegnar loro le arti, a salvarli dal diluvio avvertendo Utnapishtim.

Risiede nell'Abzu, l'oceano primordiale sotterraneo di acqua dolce su cui galleggia la terra. La sua città è Eridu, considerata la prima città della storia mesopotamica.`,
    versions: [
      { era: "Sumero arcaico — Enki", name: 'Il trickster cosmico', text: "Nei testi sumerici Enki è astuto e imprevedibile, quasi un trickster cosmico. Ruba le Me — i principi divini della civiltà — ad Anu, le usa per fondare Eridu, poi le cede a Inanna in un momento di ubriachezza." },
      { era: 'Tradizione Accadica — Ea', name: 'Il saggio consigliere', text: "Nella tradizione accadica Ea è più solenne. È il consigliere divino per eccellenza, colui che trova sempre la soluzione quando gli altri dèi sono in difficoltà." },
      { era: 'Versione babilonese', name: 'Padre di Marduk', text: "Nell'Enuma Elish Ea è il padre di Marduk. È lui a concepire il piano per creare l'umanità dal sangue di Kingu." },
    ],
    cult: `Eridu, la città di Ea/Enki, è considerata la più antica città della storia umana — le sue origini risalgono al 5400 a.C. circa. I sacerdoti di Enki custodivano le conoscenze degli incantesimi, delle cerimonie di purificazione e delle arti magiche.

Il simbolo principale di Ea è un fiume che scorre dalle sue spalle — le acque della saggezza e della vita che lui stesso incarna.`,
    influence: [
      { era: 'Tradizione esorcistica', text: "Gli esorcisti mesopotamici si consideravano figli spirituali di Ea. Le formule di guarigione iniziavano invocando Ea come fonte della saggezza medica e magica." },
      { era: 'Oannes nella tradizione ellenistica', text: "Lo storico Beroso racconta di Oannes, un essere metà uomo e metà pesce emerso dal mare che insegnò agli uomini le arti della civiltà. Oannes è quasi certamente una trasfigurazione di Ea/Enki." },
      { era: 'Nesso con Prometeo', text: "Il ruolo di Ea come benefattore dell'umanità — che salva gli uomini, insegna le arti, si oppone alle decisioni divine distruttive — presenta forti paralleli con il mito greco di Prometeo." },
    ],
    texts: [
      { title: "Enki e l'ordine del mondo", source: 'Composizione sumera, ca. 2000 a.C.', text: "Enki, il re dell'Abzu, sovrano che decreta i destini, sapiente tra i saggi — chi può competere con la sua grandezza? Come il cielo splendente, ha indossato la sua grande corona." },
    ],
  },
  {
    id: 'marduk', name: 'Marduk', role: 'Dio Supremo di Babilonia',
    tags: ['Creazione', 'Babilonia', 'Sole', 'Tiamat'],
    epithet: 'Il Principe degli Dèi, Signore dei Signori', type: 'Divinità',
    chips: ['Babilonese', 'Cosmico', 'Esagila'],
    heroColor: 'linear-gradient(160deg,#1a1000,#3a2000,#1a0e00)',
    bio: `Marduk è la divinità più importante del pantheon babilonese. Figlio di Ea e della dea Damkina, nacque nelle profondità dell'Abzu e fin da piccolo mostrò bellezza e forza eccezionali — quattro erano i suoi occhi e quattro le sue orecchie, e dal suo respiro usciva fuoco.

La sua ascesa al vertice del pantheon non fu una questione di nascita, ma di merito: fu lui a sconfiggere Tiamat quando nessun altro dio osava affrontarla. Il suo tempio Esagila a Babilonia — con l'annessa ziggurat Etemenanki, probabilmente l'ispirazione della Torre di Babele — era il centro religioso più importante del mondo antico per quasi due millenni.`,
    versions: [
      { era: 'Origini (ca. 2500–2000 a.C.)', name: 'Dio locale di Babilonia', text: "Nelle origini Marduk è semplicemente il dio tutelare della città di Babilonia, quando questa era ancora una piccola cittadina." },
      { era: 'Periodo Babilonese Antico (2000–1600 a.C.)', name: 'Ascesa con Hammurabi', text: "Con Hammurabi (1792–1750 a.C.) Babilonia diventa capitale di un grande impero e Marduk il dio supremo. L'Enuma Elish viene probabilmente composto in questo periodo." },
      { era: 'Periodo Neo-Babilonese (626–539 a.C.)', name: 'Apice del culto', text: "Con Nabucodonosor II il culto di Marduk raggiunge il suo apice. L'Esagila viene ricostruita in grande splendore." },
    ],
    cult: `Il grande tempio di Marduk, l'Esagila, era il centro spirituale di Babilonia. Accanto si elevava l'Etemenanki, la ziggurat alta sette piani che raggiungeva i 90 metri.

Ogni anno durante il festival del Capodanno (Akitu) la statua di Marduk veniva portata in processione per la città, e il re doveva "prendere la mano di Marduk" — rito fisico di rinnovamento del potere regale.`,
    influence: [
      { era: 'Enoteismo mesopotamico', text: "Il modo in cui Marduk assorbe progressivamente le caratteristiche di tutti gli altri dèi è uno dei primissimi esempi di tendenza enoteistica nella storia delle religioni." },
      { era: 'Torre di Babele', text: "L'Etemenanki, la grande ziggurat di Marduk a Babilonia, è quasi certamente la fonte storica del mito della Torre di Babele descritto nella Genesi biblica." },
    ],
    texts: [
      { title: 'I Cinquanta Nomi di Marduk', source: 'Enuma Elish, Tavola VI–VII, ca. 1100 a.C.', text: "Il suo primo nome è Marduk — il figlio del sole che sorge sull'orizzonte del mare. Il suo secondo nome è Marukka — l'essere divino che creò gli dèi." },
    ],
  },
  {
    id: 'inanna', name: 'Inanna / Ishtar', role: "Dea dell'Amore e della Guerra",
    tags: ['Venere', 'Guerra', 'Uruk', 'Amore'],
    epithet: 'Regina del Cielo, Signora della Tempesta', type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Uruk'],
    heroColor: 'linear-gradient(160deg,#1a0820,#2d0d3a,#120618)',
    bio: `Inanna (sumero) o Ishtar (accadico) è la divinità femminile più potente e complessa del pantheon mesopotamico. Incarna apparenti contraddizioni: è dea dell'amore erotico e della fertilità, ma anche dea della guerra e della conquista. È associata al pianeta Venere — che appare sia come stella del mattino che della sera — e questa duplicità rispecchia perfettamente la sua natura.

Le sue imprese mitologiche sono tra le più drammatiche di tutta la letteratura mesopotamica: scende nell'oltretomba sfidando la morte stessa, raccoglie le Me (i principi divini della civiltà) ingannando Enki, rifiuta con brutalità la corte del re Gilgamesh.`,
    versions: [
      { era: 'Sumero (3000–2000 a.C.) — Inanna', name: 'La dea inventrice', text: "Nei testi sumerici Inanna è la protagonista di cicli mitologici autonomi: la discesa agli inferi, il furto delle Me, il matrimonio sacro con Dumuzi." },
      { era: 'Accadico e Babilonese — Ishtar', name: 'La grande dea', text: "Ishtar nell'epopea di Gilgamesh è potente e vendicativa: rifiutata da Gilgamesh, chiede ad Anu il Toro Celeste per distruggerlo." },
      { era: 'Assira — Ishtar di Ninive e Arbela', name: 'La dea della guerra', text: "In Assiria Ishtar diventa prevalentemente dea della guerra. I re assiri la invocano prima delle battaglie." },
    ],
    cult: `Il tempio principale di Inanna era l'Eanna di Uruk — una delle strutture religiose più antiche del mondo, datata al 3500 a.C. circa.

Il rituale del matrimonio sacro (hieros gamos), in cui il re si univa simbolicamente alla dea attraverso una sacerdotessa, era uno dei riti più importanti della religione mesopotamica, garante della fertilità della terra.`,
    influence: [
      { era: 'Afrodite e Venere', text: "L'associazione di Inanna/Ishtar con il pianeta Venere, con l'amore e con una natura guerriera sotto la superficie è il diretto precursore di Afrodite greca e Venere romana." },
      { era: 'Cibele e Astarte', text: "Il culto di Inanna si diffonde in tutto il Vicino Oriente come Astarte (fenicia), Anat (ugaritica), e influenza la Grande Madre Cibele frigia." },
    ],
    texts: [
      { title: 'Inno a Inanna di Enheduanna', source: 'Enheduanna, ca. 2285–2250 a.C. — primo autore identificato della storia', text: "Lady of all powers, resplendent light, righteous woman clothed in radiance, beloved of heaven and earth... I will speak of war, I will speak of battle." },
      { title: 'La discesa di Inanna', source: 'Testo sumero, ca. 1900 a.C.', text: "Dal Grande Alto, Inanna si volse verso il Grande Basso. La dea abbandonò il cielo, abbandonò la terra, e scese nel mondo inferiore." },
    ],
  },
  {
    id: 'ereshkigal', name: 'Ereshkigal', role: "Regina dell'Oltretomba",
    tags: ['Morte', 'Kur', 'Oltretomba', 'Oscurità'],
    epithet: 'La Grande Regina, Signora della Terra Senza Ritorno', type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Kur'],
    heroColor: 'linear-gradient(160deg,#080810,#10101a,#060608)',
    bio: `Ereshkigal è la sovrana assoluta del Kur — il regno dei morti mesopotamico, letteralmente "la terra senza ritorno". Sorella maggiore di Inanna, governa un dominio che non ammette eccezioni: chiunque entri nel regno dei morti non può tornare senza pagare un prezzo.

Nei testi mesopotamici Ereshkigal è una figura tragica oltre che terribile. Non scelse il suo regno — fu rapita nel mondo sotterraneo dall'aquila-drago Kur quando era ancora giovane. La sua ira, la sua fame insaziabile parlano di una divinità che soffre quanto chi giudica.`,
    versions: [
      { era: 'Sumero arcaico', name: 'La regina inviolabile', text: "Nei testi più antichi Ereshkigal è semplicemente il potere assoluto della morte. Le sue sette porte, i suoi sette guardiani, le sue sette leggi sono inviolabili." },
      { era: 'La discesa di Inanna', name: 'La sorella-giudice', text: "Nel mito della discesa di Inanna, Ereshkigal appare come antagonista ma anche come specchio: mentre Inanna è la vita nella sua pienezza, Ereshkigal è tutto ciò che la vita deve negare per esistere." },
      { era: 'Mito di Nergal ed Ereshkigal', name: 'La regina innamorata', text: "In questo testo Nergal scende nel regno dei morti. Tra lui ed Ereshkigal scoppia una passione devastante. Diventerà suo consorte e co-signore del regno dei morti." },
    ],
    cult: `Il Kur che lei governa non è un luogo di punizione come l'inferno cristiano — è un luogo di ombra e dimenticanza, dove i morti conducono un'esistenza pallida nutriti di polvere e argilla.

Solo i morti senza sepoltura o senza discendenti che portino offerte soffrono particolarmente.`,
    influence: [
      { era: 'Persefone e Ecate', text: "La figura di Ereshkigal come dea-regina dell'oltretomba, sorella di una grande dea, è il diretto antecedente di Persefone greca." },
      { era: 'Lilith', text: "Alcune tradizioni ebraiche medievali associano Lilith a Ereshkigal — entrambe figure femminili demoniache del mondo ctonio." },
    ],
    texts: [
      { title: 'La discesa di Inanna — Ereshkigal giudica', source: 'Testo sumero, ca. 1900 a.C.', text: "Ereshkigal aprì la bocca e parlò, disse a Neti il portiere supremo: Su, Neti, apri la tua porta. Aprila secondo le antiche usanze. Lascia che Inanna entri." },
    ],
  },
  {
    id: 'shamash', name: 'Shamash / Utu', role: 'Dio del Sole e della Giustizia',
    tags: ['Sole', 'Giustizia', 'Legge', 'Sippar'],
    epithet: "L'Illuminatore, Giudice del Cielo e della Terra", type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Sippar'],
    heroColor: 'linear-gradient(160deg,#1a1200,#3a2a00,#1a1000)',
    bio: `Shamash (accadico) o Utu (sumero) è il dio sole della Mesopotamia, ma il suo dominio va ben oltre il semplice ciclo diurno. È il dio della giustizia, della legge e della verità — perché come il sole illumina ogni angolo nascosto della terra, così Shamash svela ogni ingiustizia e ogni crimine nascosto.

Ogni mattina emerge dalle porte orientali del cielo, conduce il suo carro di fuoco attraverso la volta celeste, e al tramonto entra nelle porte occidentali per percorrere di notte il mondo sotterraneo.`,
    versions: [
      { era: 'Sumero — Utu', name: "Il gemello di Inanna", text: "In sumero Utu è fratello gemello di Inanna. Appare come protettore dei viaggiatori e dei giusti. Nel mito di Gilgamesh sumero aiuta il re a sconfiggere Humbaba." },
      { era: 'Accadico — Shamash', name: 'Il giudice cosmico', text: "Nella tradizione accadica Shamash diventa pienamente il dio della giustizia. È lui che appare sul famoso stele del Codice di Hammurabi." },
    ],
    cult: `I due grandi centri di culto di Shamash erano Sippar (il cui nome significa "città del sole") e Larsa. I suoi templi erano chiamati Ebabbar — "casa splendente".

I sacerdoti di Shamash erano anche giudici e oracoli: le decisioni legali difficili venivano portate davanti al suo tempio per essere risolte con rituali divinatori.`,
    influence: [
      { era: 'Diritto romano e medievale', text: "Il concetto di una divinità solare come garante supremo della giustizia percorre tutta la tradizione giuridica occidentale." },
      { era: 'Apollo', text: "Molte caratteristiche di Shamash confluiscono in Apollo greco: la sovranità solare, il ruolo di oracolo, la funzione di protettore dei viaggiatori." },
    ],
    texts: [
      { title: 'Inno a Shamash', source: 'Testo accadico, ca. 1800 a.C.', text: "Illuminatore di tutto, che fai splendere le tenebre... ai quattro angoli del cielo salga la tua luce. Tu apri le porte del cielo... tu sei il giudice, tu esamini i sogni." },
    ],
  },
  {
    id: 'nanna', name: 'Nanna / Sin', role: 'Dio della Luna',
    tags: ['Luna', 'Tempo', 'Ur', 'Calendario'],
    epithet: 'Il Barcaiolo del Cielo, Signore del Mese', type: 'Divinità',
    chips: ['Sumero', 'Accadico', 'Ur'],
    heroColor: 'linear-gradient(160deg,#080d18,#0d1828,#060a14)',
    bio: `Nanna (sumero) o Sin (accadico) è il dio della luna, uno degli astri più venerati della Mesopotamia. In un contesto agricolo dove i cicli delle stagioni erano questioni di vita o di morte, il dio che regolava il calendario con i suoi cicli regolari era di importanza capitale.

Figlio di Enlil, Nanna è il padre di Shamash (il sole) e di Inanna (il pianeta Venere). La sua barca d'oro attraversa il cielo notturno portando la sua luce benigna all'umanità.`,
    versions: [
      { era: 'Sumero — Nanna', name: 'Il signore del calendario', text: "Nei testi sumerici Nanna regola il tempo e le stagioni. Il suo ciclo mensile di trenta giorni è la base del calendario lunare mesopotamico." },
      { era: 'Periodo Neo-Babilonese', name: 'La riforma di Nabonido', text: "Il re Nabonido (556–539 a.C.) tentò di elevare Sin al di sopra di Marduk come divinità suprema — riforma che suscitò enorme opposizione." },
    ],
    cult: `La città sacra di Nanna era Ur — la città di Abramo secondo la tradizione biblica — dove il suo grande tempio Ekishnugal era uno dei più importanti della Mesopotamia.

Il simbolo di Nanna è la mezzaluna, uno dei simboli religiosi più antichi del mondo.`,
    influence: [
      { era: 'Mezzaluna islamica', text: "Il simbolo della mezzaluna, attraverso la tradizione araba preislamica, è diventato il simbolo dell'Islam — una linea che risale a Nanna di Ur, tremila anni prima di Maometto." },
      { era: 'Calendario ebraico e islamico', text: "Entrambi i calendari lunari — ebraico e islamico — discendono dalla tradizione mesopotamica di misurazione del tempo basata sul ciclo di Nanna." },
    ],
    texts: [
      { title: 'Inno a Nanna-Sin', source: 'Testo liturgico sumero, ca. 2100 a.C.', text: "O Nanna, che sei la luce del cielo, il tuo splendore riempie i cieli. Come un giovane toro che si muove nel campo del cielo, attraversi il firmamento con la tua barca d'oro." },
    ],
  },
];

const MESOP_HEROES = [
  {
    id: 'gilgamesh', name: 'Gilgamesh', epithet: 'Il Re che Vide Tutto', type: 'Eroe',
    chips: ['Uruk', '2/3 divino', 'Epopea accadica', 'Re storico'],
    heroColor: 'linear-gradient(160deg,#2a1400,#4a2200,#1e1000)',
    shortDesc: "Re di Uruk, due terzi divino e un terzo mortale. Tirannico e invincibile, affronta imprese sovrumane fino a che la morte dell'amico Enkidu non lo spinge alla ricerca disperata dell'immortalità.",
    bio: {
      main: `Gilgamesh è il protagonista dell'Epopea di Gilgamesh — il poema epico più antico della letteratura mondiale, composto in varie versioni nell'arco di quasi mille anni (2100–1200 a.C. circa). È re della città di Uruk, due terzi divino e un terzo mortale: sua madre è la dea Ninsun, suo padre il re Lugalbanda.

Nella sua natura ibrida risiede tutta la sua tragedia: è abbastanza divino da aspirare all'immortalità, ma abbastanza mortale da sapere che non la raggiungerà mai.`,
      sub1: 'Il tiranno di Uruk',
      text1: `La storia inizia con un Gilgamesh oppressivo: costruisce le mura di Uruk con il lavoro forzato dei suoi sudditi, prende per sé le donne degli altri uomini. I cittadini gridano agli dèi, che creano Enkidu — un essere selvatico, uguale a Gilgamesh in forza — per placare il re. Quando i due si incontrano si scontrano violentemente, poi diventano inseparabili.`,
      sub2: 'Le grandi imprese',
      text2: `Con Enkidu al fianco Gilgamesh affronta imprese che nessun mortale ha osato prima: la spedizione alla Foresta dei Cedri per uccidere il mostro Humbaba; il rifiuto delle avance di Ishtar e l'uccisione del Toro Celeste che lei scatena per vendetta.`,
      sub3: 'La morte di Enkidu e il crollo',
      text3: `Gli dèi decidono che qualcuno deve pagare per l'uccisione del Toro Celeste. Scelgono Enkidu. La malattia lo consuma lentamente, e Gilgamesh assiste impotente. Piange per sei giorni e sette notti, rifiuta di credere alla realtà della morte finché un verme non cade dalla narice del cadavere.`,
      sub4: "Il viaggio verso l'immortalità",
      text4: `Gilgamesh parte alla ricerca di Utnapishtim, l'unico uomo ad aver ottenuto l'immortalità. Il viaggio lo porta attraverso le montagne Mashu, il regno delle tenebre, fino al mare delle acque della morte.

Utnapishtim gli svela dove trovare la Pianta della Vita sul fondo del mare. Gilgamesh la raccoglie, ma un serpente gliela ruba nel viaggio di ritorno. Torna a Uruk a mani vuote — e guardando le mura della città trova una forma diversa di immortalità: le sue opere, la sua città, il suo nome.`,
    },
    versions: [
      { era: 'Versione sumera (ca. 2100 a.C.)', name: 'Cinque poemi indipendenti', text: "Le tradizioni sumeriche consistono in cinque poemi separati: Gilgamesh e Agga, Gilgamesh ed Enkidu e l'Oltretomba, Gilgamesh e il Toro Celeste, Gilgamesh e Huwawa, La morte di Gilgamesh." },
      { era: 'Versione paleobabilonese (ca. 1800 a.C.)', name: 'Il ciclo si unifica', text: "Le tavolette paleobabilonesi mostrano il processo di unificazione in un'opera più coerente. La relazione con Enkidu viene approfondita psicologicamente." },
      { era: 'Versione standard accadica (ca. 1200 a.C.)', name: "L'epopea in dodici tavole", text: "La versione definitiva, attribuita allo scriba Sin-leqi-unninni, organizza il materiale in dodici tavole. È la versione conservata nella biblioteca di Ashurbanipal a Ninive." },
      { era: 'Frammenti ittiti e hurritici (ca. 1400–1200 a.C.)', name: "La diffusione nell'Anatolia", text: "Frammenti dell'epopea sono stati trovati in ittita e hurritico ad Hattusha, a Megiddo e a Tell el-Amarna — prova della sua diffusione come classico letterario internazionale." },
    ],
    influence: [
      { era: 'Omero (ca. 800 a.C.)', text: "Le parallele tra l'Epopea di Gilgamesh e l'Iliade e l'Odissea sono numerose: l'amicizia tra guerrieri, il viaggio verso i morti, l'eroe che affronta la propria mortalità." },
      { era: 'La Bibbia — Noè e il diluvio', text: "La tavola XI contiene il racconto del Diluvio di Utnapishtim, con dettagli quasi identici al racconto di Noè nella Genesi. Il testo mesopotamico precede la Bibbia di almeno 700 anni." },
      { era: 'Ercole e le dodici fatiche', text: "La struttura dell'eroe che compie imprese sovrumane con un compagno, poi affronta la morte, ricorda fortemente il ciclo di Ercole." },
      { era: 'Letteratura moderna', text: "Il XX secolo ha riscoperto Gilgamesh come archetipo della condizione umana. Rainer Maria Rilke fu tra i primi a riconoscerne la grandezza. Seguirono romanzi, opere teatrali, videogiochi, fumetti." },
    ],
    texts: [
      { title: 'La morte di Enkidu — Tavola VIII', source: 'Epopea di Gilgamesh, versione standard, ca. 1200 a.C.', text: "Al primo chiarore dell'alba Gilgamesh aprì la bocca e disse ad Enkidu suo amico: Enkidu, tua madre era la gazzella, tuo padre l'asino selvatico. Ti hanno cresciuto le onagre con il loro latte." },
      { title: 'Il monologo sul senso della vita — Tavola X', source: 'Versione paleobabilonese, ca. 1800 a.C.', text: "Siduri la locandiera disse a Gilgamesh: Quando gli dèi crearono l'umanità assegnarono la morte all'umanità, ma trattennero la vita nelle proprie mani. Tu, Gilgamesh, che il tuo ventre sia pieno, gioisci di giorno e di notte." },
      { title: 'Il ritorno a Uruk — Tavola XI, epilogo', source: 'Versione standard, ca. 1200 a.C.', text: "Sali sulle mura di Uruk, cammina avanti e indietro, esamina le fondamenta, guarda il mattone — non è di mattoni cotti? Un terzo è città, un terzo è giardino, un terzo è campo. Questo è Uruk." },
    ],
  },
  {
    id: 'enkidu', name: 'Enkidu', epithet: "L'Uomo Selvatico, il Primo Amico", type: 'Eroe',
    chips: ['Creato dagli dèi', 'Natura e Civiltà', 'Compagno di Gilgamesh'],
    heroColor: 'linear-gradient(160deg,#0d1a08,#1a3010,#0a1206)',
    shortDesc: "Creato dalla dea Aruru con l'argilla divina come pari di Gilgamesh, Enkidu nasce nella steppa e vive con gli animali. La sua traiettoria dal selvatico al civilizzato, e poi alla morte, è il vero cuore emotivo dell'epopea.",
    bio: {
      main: `Enkidu è forse il personaggio più originale di tutta la mitologia mesopotamica. Non è un re, non è un dio — è un essere creato appositamente dalla dea Aruru per essere il doppio e la cura di Gilgamesh. Nasce nella steppa, vive con le gazzelle, beve con gli animali alle sorgenti.`,
      sub1: "Dall'animale all'uomo",
      text1: `La trasformazione di Enkidu è il primo grande racconto di educazione della letteratura mondiale. Quando il cacciatore lo avvista e lo teme, Gilgamesh manda Shamhat, una sacerdotessa del tempio di Ishtar. Per sei giorni e sette notti Enkidu rimane con lei — e al termine non può più tornare con gli animali: le gazzelle fuggono, le bestie lo rifiutano.`,
      sub2: 'La fratellanza con Gilgamesh',
      text2: `L'incontro tra Enkidu e Gilgamesh inizia come uno scontro: Enkidu blocca l'ingresso al palazzo per impedire a Gilgamesh di esercitare il suo diritto di prima notte sulla sposa di un cittadino. I due si battono ferocemente, finché Gilgamesh prevale — ma invece di uccidere il suo rivale, lo abbraccia.`,
      sub3: 'La morte e il suo significato',
      text3: `Enkidu muore per decreto divino — punizione per l'uccisione del Toro Celeste e di Humbaba. Prima di morire sogna il mondo dei morti e lo descrive con orrore. Maledice Shamhat che lo ha civilizzato — poi la benedice, riconoscendo che senza di lei non avrebbe incontrato Gilgamesh.`,
    },
    versions: [
      { era: 'Testi sumerici', name: 'Enkidu come servitore', text: "Nei poemi sumerici Enkidu è presentato come il servitore di Gilgamesh piuttosto che come suo pari. La dimensione dell'amicizia profonda è uno sviluppo accadico." },
      { era: 'Versione accadica standard', name: "L'eguale e il fratello", text: "Nella versione standard il rapporto Gilgamesh-Enkidu è una vera fratellanza tra pari. La madre di Gilgamesh, Ninsun, adotta formalmente Enkidu come suo figlio." },
    ],
    influence: [
      { era: 'Achille e Patroclo', text: "L'amicizia guerriera che la morte dell'amico trasforma in dolore inconsolabile — Enkidu/Gilgamesh e Patroclo/Achille — è talmente parallela da suggerire una trasmissione culturale." },
      { era: "Il 'buon selvaggio' di Rousseau", text: "L'idea di Enkidu come uomo naturale non corrotto dalla civiltà prefigura di tremila anni il concetto illuministico del 'buon selvaggio' di Rousseau." },
      { era: 'Tarzan e l\'archetipo dell\'uomo selvatico', text: "L'archetipo dell'uomo cresciuto con gli animali — da Enkidu a Romolo e Remo a Tarzan — ha in Enkidu la sua prima e più complessa formulazione." },
    ],
    texts: [
      { title: 'La nascita di Enkidu — Tavola I', source: 'Epopea di Gilgamesh, versione standard', text: "Aruru lavò le mani, prese un pezzetto di argilla, lo lanciò nella steppa: nella steppa creò Enkidu il prode. Il suo corpo era coperto di capelli, aveva lunghi capelli come quelli di una donna." },
    ],
  },
  {
    id: 'utnapishtim', name: 'Utnapishtim', epithet: "Il Sopravvissuto al Diluvio, L'Immortale", type: 'Eroe',
    chips: ['Shuruppak', 'Unico immortale', 'Diluvio universale'],
    heroColor: 'linear-gradient(160deg,#081520,#0d2535,#060f18)',
    shortDesc: "Avvertito da Ea del diluvio cosmico decretato da Enlil, costruisce un'enorme arca e salva l'umanità e gli animali. Come ricompensa per la sua pietà gli dèi gli concedono l'immortalità.",
    bio: {
      main: `Utnapishtim è un personaggio che appartiene a due livelli narrativi dell'Epopea di Gilgamesh: è l'unico essere umano immortale, la meta del viaggio disperato di Gilgamesh — ma è anche il narratore del Diluvio universale, inserito nell'epopea come una storia nella storia.

Il suo nome significa probabilmente "trovò la vita" in accadico. Vive "alla foce dei fiumi", in un luogo ai confini del mondo.`,
      sub1: 'Il diluvio — come Noè prima di Noè',
      text1: `La storia del diluvio è tra i testi più importanti della storia culturale umana. Enlil aveva decretato di sterminare l'umanità perché il rumore degli uomini disturbava il sonno degli dèi. Ea, legato da un giuramento di non rivelare il piano, parla al capanno di canne di Utnapishtim.

Utnapishtim costruisce una nave cubica di sette ponti, vi imbarca artigiani di ogni mestiere, animali e la sua famiglia. La tempesta dura sette giorni. Dopo sette giorni la nave si incaglia sul Monte Nimush.`,
      sub2: 'La prova del tempo',
      text2: `Quando Gilgamesh arriva chiedendo il segreto dell'immortalità, Utnapishtim gli pone una sfida: non dormire per sei giorni e sette notti. Se non riesce a vincere il sonno — "il fratello minore della morte" — come potrebbe vincere la morte stessa? Gilgamesh si addormenta immediatamente.`,
      sub3: 'La Pianta della Vita',
      text3: `La moglie di Utnapishtim convince il marito a rivelare a Gilgamesh dove trovare la Pianta della Vita sul fondo del mare. Gilgamesh la raccoglie con successo — ma nel viaggio di ritorno un serpente la ruba. Il serpente ringiovanisce cambiando pelle. Gilgamesh si siede e piange.`,
    },
    versions: [
      { era: 'Versione sumera — Ziusudra', name: 'Il re-sacerdote salvato', text: "Nella versione sumera il sopravvissuto al diluvio si chiama Ziusudra — un re e sacerdote di Shuruppak. Il testo è molto frammentario ma conferma la struttura essenziale." },
      { era: 'Versione accadica di Atrahasis (ca. 1700 a.C.)', name: 'Atrahasis, il super-saggio', text: "Il protagonista si chiama Atrahasis — 'super saggio' — ed è protagonista dell'intera storia della creazione dell'umanità. Il diluvio è inserito in un contesto cosmologico più ampio." },
      { era: 'Nella Bibbia — Noè', name: 'La versione ebraica', text: "Il racconto di Noè nella Genesi rispecchia chiaramente la tradizione mesopotamica: l'avvertimento divino, l'arca con gli animali, la colomba e il corvo, l'arca sulla montagna." },
    ],
    influence: [
      { era: 'Noè e la tradizione biblica', text: "Il parallelo Utnapishtim/Noè è il caso più documentato di dipendenza diretta della Bibbia da testi mesopotamici." },
      { era: 'Deucalione greco', text: "Anche il mito greco del diluvio, con Deucalione e Pirra che sopravvivono su una barca, appartiene alla stessa tradizione mitica diffusa in tutto il Vicino Oriente." },
      { era: 'Il serpente e la Pianta della Vita', text: "Il serpente che ruba la Pianta della Vita ricompare nella Genesi come il serpente che convince Eva a mangiare il frutto dell'albero della conoscenza." },
    ],
    texts: [
      { title: "L'avvertimento di Ea — Tavola XI", source: 'Epopea di Gilgamesh, versione standard', text: "Uomo di Shuruppak, figlio di Ubar-Tutu: abbatti la tua casa, costruisci una nave! Abbandona le ricchezze, cerca di salvare la vita! Fai salire sulla nave il seme di tutte le creature viventi." },
      { title: 'Il diluvio — Tavola XI', source: 'Epopea di Gilgamesh, versione standard', text: "Per sei giorni e sette notti imperversò il vento, il diluvio, la tempesta, il cataclisma. Al settimo giorno la tempesta era esausta, il mare si era ritirato, il diluvio finì." },
    ],
  },
];

const MESOP_MYTHS = [
  {
    id: 'enuma', tag: 'Epopea della creazione',
    title: 'Enuma Elish — Quando in alto il cielo non era ancora nominato',
    type: 'Mito', epithet: "L'Epopea della Creazione",
    chips: ['Babilonese', 'Cosmogonia', 'Marduk', 'ca. 1100 a.C.'],
    heroColor: 'linear-gradient(160deg,#1a1000,#2a1800,#120c00)',
    shortDesc: "Il testo cosmogoniaco più importante della Mesopotamia. Racconta la battaglia tra Marduk e Tiamat e la successiva creazione del cosmo dal corpo della dea sconfitta. Recitato ogni anno durante il Capodanno babilonese.",
    bio: {
      main: `L'Enuma Elish — dal suo incipit "quando in alto" — è l'epopea della creazione babilonese, composta probabilmente intorno al XII–XI secolo a.C. Il poema è strutturato in sette tavole e veniva recitato integralmente durante la festa del Capodanno babilonese (Akitu).

La recitazione era parte di un rito di rinnovamento cosmico: recitando la storia della creazione, si ricreava simbolicamente il cosmo ogni anno, garantendo un altro ciclo di prosperità.`,
      sub1: 'Struttura e temi',
      text1: `La narrazione segue un arco preciso: caos primordiale → conflitto divino → battaglia cosmica → creazione del mondo → creazione dell'umanità → esaltazione di Marduk.

Il tema centrale non è solo la creazione fisica del mondo ma la legittimazione del potere: Marduk diventa re degli dèi perché ha salvato tutti combattendo Tiamat. Il testo è una teologia politica mascherata da cosmogonia.`,
      sub2: 'Le sette tavole',
      text2: `Tavola I–II: le origini di Apsu e Tiamat, la nascita degli dèi, il conflitto, l'uccisione di Apsu da parte di Ea, la preparazione di Tiamat alla guerra.

Tavola III–IV: l'assemblea degli dèi sceglie Marduk come campione, la battaglia tra Marduk e Tiamat, la vittoria di Marduk.

Tavola V: la creazione del cosmo dal corpo di Tiamat. Tavola VI: la creazione dell'umanità dal sangue di Kingu. Tavola VII: i cinquanta nomi di Marduk.`,
    },
    versions: [
      { era: 'Precedenti sumerici', name: 'Enki e la creazione', text: "Nelle tradizioni sumeriche più antiche non esiste un'unica epopea della creazione ma frammenti sparsi. L'Enuma Elish babilonese sistematizza queste tradizioni per metterle al servizio di Marduk." },
      { era: 'Versione assira', name: 'Enuma Elish con Ashur', text: "Gli Assiri sostituirono il nome di Marduk con quello del loro dio nazionale Ashur in una versione parallela del testo." },
    ],
    influence: [
      { era: 'Genesi biblica', text: "Il racconto della creazione nella Genesi — la separazione delle acque, la creazione della luce, dell'acqua, della terra — rispecchia la struttura dell'Enuma Elish in modo sufficientemente preciso da suggerire una conoscenza della tradizione babilonese." },
      { era: 'La cosmogonia come battaglia', text: "Lo schema 'creazione dal corpo del nemico sconfitto' ricompare in molte tradizioni: il corpo del gigante nordico Ymir da cui è creato il mondo, Purusha nel Rig Veda indiano." },
    ],
    texts: [
      { title: 'Incipit — Tavola I', source: 'Enuma Elish, ca. 1100 a.C.', text: "Quando in alto il cielo non era ancora nominato, in basso la terra ferma non portava ancora un nome, e l'Apsu primordiale che li aveva generati, Mummu-Tiamat, la madre di tutti, mescolava le loro acque insieme — allora gli dèi furono creati dentro di loro." },
    ],
  },
  {
    id: 'discesa', tag: 'Discesa agli inferi',
    title: 'La Discesa di Inanna nel Grande Basso',
    type: 'Mito', epithet: 'La Discesa e il Ritorno',
    chips: ['Sumero', 'Inanna', 'Ereshkigal', 'ca. 1900 a.C.'],
    heroColor: 'linear-gradient(160deg,#100818,#1a0d2a,#080510)',
    shortDesc: "Inanna, regina del cielo, scende volontariamente nel regno dei morti sfidando la sorella Ereshkigal. Viene uccisa e il mondo si blocca. Il piano di Ea la riporta in vita — ma a un prezzo.",
    bio: {
      main: `La Discesa di Inanna nel Grande Basso è uno dei testi mitologici più affascinanti di tutta la letteratura mesopotamica. Racconta la discesa volontaria di Inanna, dea del cielo e dell'amore, nel regno dei morti governato da sua sorella Ereshkigal.

La discesa non è forzata — Inanna sceglie di scendere. I motivi non sono mai completamente spiegati nel testo: forse vuole espandere il suo potere anche sul regno dei morti, forse è mossa da curiosità.`,
      sub1: 'Le sette porte dello spogliamento',
      text1: `Il viaggio verso il Kur passa attraverso sette porte. A ogni porta un guardiano le chiede di togliere un attributo: la corona, gli orecchini, il collare di lapislazzuli, le pietre sul petto, l'anello d'oro, il pettorale, il gonnellino. Quando arriva davanti a Ereshkigal è completamente nuda, spogliata di ogni potere divino.`,
      sub2: 'La morte e il blocco del mondo',
      text2: `Ereshkigal lancia su di lei lo sguardo della morte. Inanna muore e viene appesa a un gancio come un pezzo di carne. Per tre giorni e tre notti il mondo di sopra si blocca: nessuna fertilità, nessun amore, nessun parto.`,
      sub3: 'La resurrezione e il prezzo',
      text3: `Enki crea due esseri asessuati dall'argilla sotto le sue unghie e li manda nel Kur con il cibo e l'acqua della vita. Riportano in vita Inanna. Ma le leggi del mondo dei morti sono inflessibili: chiunque sia salito dal Kur deve mandare qualcuno al proprio posto.

Inanna condanna Dumuzi, suo marito. La sorella di Dumuzi, Geshtinanna, si offre di dividersi il tempo nel Kur — così Dumuzi scende per sei mesi e lei per gli altri sei. Questa alternanza dà origine alle stagioni.`,
    },
    versions: [
      { era: 'Versione sumera (ca. 1900 a.C.)', name: 'Inanna e Dumuzi', text: "La versione sumera culmina con la condanna di Dumuzi — il marito di Inanna — a trascorrere sei mesi all'anno nel mondo dei morti, spiegando così il ciclo delle stagioni." },
      { era: 'Versione accadica — Discesa di Ishtar', name: 'Il testo più breve', text: "La versione accadica, più concisa, omette molti dettagli. Il mondo si blocca in modo più esplicito: durante la sua assenza nessun uomo si avvicina a nessuna donna." },
    ],
    influence: [
      { era: 'Persefone e le stagioni', text: "Il mito di Persefone rapita da Ade e che trascorre sei mesi all'anno nel mondo dei morti è chiaramente parallelo alla storia di Dumuzi/Tammuz." },
      { era: "La struttura dell'iniziazione", text: "Il viaggio di Inanna — discesa, morte, ritorno trasformati — è diventato uno schema archetipico. Carl Gustav Jung e Sylvia Brinton Perera hanno letto il mito di Inanna come mappa dell'individuazione psicologica." },
    ],
    texts: [
      { title: "L'inizio della discesa", source: 'Discesa di Inanna, testo sumero, ca. 1900 a.C.', text: "Dal Grande Alto Inanna si volse verso il Grande Basso. La dea si volse verso il Grande Basso. Inanna abbandonò il cielo, abbandonò la terra, e scese nel mondo inferiore." },
    ],
  },
];
