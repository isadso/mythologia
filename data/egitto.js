/* data/egitto.js — all content for the Egyptian mythology section */

const EGIZIO_DEITIES = [
  {
    id: 'ra', name: 'Ra', role: 'Dio del Sole, Re degli Dei',
    tags: ['Sole', 'Creazione', 'Eliopoli', 'Cosmico'],
    epithet: 'Il Signore delle Due Terre, Colui che Sorge nell\'Orizzonte', type: 'Divinità',
    chips: ['Eliopolitano', 'Cosmogonico', 'Solare'],
    heroColor: 'linear-gradient(160deg,#3d2000,#8b4a00,#c97b1a)',
    bio: `Ra è la divinità più venerata e potente del pantheon egizio, signore supremo del sole e re di tutti gli dèi. Il suo nome, in egizio antico, significa semplicemente "sole" — ma il suo dominio va ben oltre il semplice astro diurno: è il principio creatore dell'universo, il garante dell'ordine cosmico, l'energia vitale che permea ogni essere.

Nella mitologia eliopolitana Ra emerge dalle acque primordiali del Nun, autogenerato sulla collina di Benben — la prima terra apparsa al mondo. È lui a dare vita a Shu e Tefnut, avviando così l'intero ciclo della creazione. Viene rappresentato tipicamente come un uomo con testa di falco sormontata dal disco solare cinto dal cobra ureo.

Ogni giorno Ra compie il suo viaggio eterno: all'alba appare come Khepri, lo scarabeo del sole nascente; a mezzogiorno brilla al massimo splendore come Ra; al tramonto diviene Atum, il sole morente. Di notte scende nel Duat, l'oltretomba, dove affronta il serpente del caos Apophis per rinascere ogni mattino.`,
    versions: [
      { era: 'Antico Regno (2686–2181 a.C.)', name: 'Atum-Ra di Eliopoli', text: 'Nell\'antica tradizione eliopolitana Ra si fonde con Atum, il creatore autogenerato. È il vertice dell\'Enneade, padre di Shu e Tefnut, dai quali discendono tutti gli altri dèi. I Testi delle Piramidi lo celebrano come fonte della regalità divina.' },
      { era: 'Medio Regno (2055–1650 a.C.)', name: 'Ra-Horakhty', text: 'Si verifica la fusione con Horus nella forma Ra-Horakhty — "Ra-Horus dei due orizzonti" — che rappresenta il sole nel suo pieno vigore a mezzogiorno. Questa sincresi lega il dio solare al concetto di regalità terrena.' },
      { era: 'Nuovo Regno (1550–1069 a.C.)', name: 'Amon-Ra', text: 'Con l\'ascesa di Tebe come capitale, Ra si sincretizza con Amon — il dio nascosto di Tebe — formando Amon-Ra, la divinità suprema del Nuovo Regno. Diventa il "re degli dèi" per eccellenza, onorato nei grandi templi di Karnak e Luxor.' },
      { era: 'Periodo Amarna (1353–1336 a.C.)', name: 'Aton', text: 'Con il faraone Akhenaton Ra subisce una trasformazione radicale: diventa Aton, il disco solare visibile, unica divinità ammessa in un esperimento monoteistico senza precedenti nella storia antica. L\'esperienza finirà con la morte del faraone.' },
    ],
    cult: `Il centro principale del culto di Ra era Eliopoli — "la città del sole" per i greci, Iunu per gli egizi — nella zona del Cairo moderno. Qui sorgeva il grande tempio di Ra-Atum con l'obelisco sacro che rappresentava il raggio solare pietrificato, la pietra Benben.

Il culto solare influenzò profondamente tutta l'architettura egizia: gli obelischi, le piramidi (imitazioni della pietra Benben), i templi orientati secondo i movimenti del sole. I faraoni, a partire dalla IV dinastia, assumono il titolo di "Figlio di Ra" (Sa-Ra), legando inscindibilmente la monarchia terrena al culto solare.

Ra era onorato anche nei grandi complessi di Karnak (come Amon-Ra) e Abu Simbel, dove Ramses II fece costruire il suo tempio in modo che due volte l'anno il sole illuminasse la statua del dio nel santuario più interno.`,
    influence: [
      { era: 'Tradizione ellenistica', text: 'I greci identificarono Ra con il loro Apollo o con Helios. Il culto solare egizio influenzò il culto di Sol Invictus nell\'Impero Romano, che ebbe grande diffusione nel III-IV secolo d.C.' },
      { era: 'Monoteismo e Akhenaton', text: 'L\'esperimento monoteistico del faraone Akhenaton con il culto di Aton (una forma di Ra) è stato oggetto di intenso dibattito storico: alcuni studiosi, come Sigmund Freud, ipotizzarono che abbia influenzato il monoteismo ebraico attraverso Mosè.' },
      { era: 'Simbolismo solare universale', text: 'Il disco solare alato di Ra è uno dei simboli religiosi più diffusi al mondo, ripreso nell\'iconografia assira, persiana, ittita e infine nel cristianesimo copto e nell\'arte rinascimentale come emblema della divinità.' },
    ],
    texts: [
      { title: 'La Litania di Ra', source: 'Tomba di Thutmose III, ca. 1450 a.C.', text: 'Salute a te, Ra, perfetto ogni giorno! Tu sorgi all\'alba senza fermarti mai, Khepri che ti affanni nella fatica. I tuoi raggi sono sul volto senza che si conoscano. L\'oro fuso non è paragonabile al tuo splendore.' },
      { title: 'Il libro dei morti — Capitolo 15', source: 'Nuovo Regno, ca. 1500 a.C.', text: 'Lode a te, o Ra, quando ti levi all\'orizzonte orientale del cielo. Tutti gli dèi si rallegrano al tuo apparire: essi ti acclamano quando tu emergi, tu che sei l\'unico, che ti formi da te stesso senza essere nato.' },
    ],
  },
  {
    id: 'osiride', name: 'Osiride', role: 'Dio dell\'Oltretomba e della Resurrezione',
    tags: ['Oltretomba', 'Resurrezione', 'Giudice', 'Agricoltura'],
    epithet: 'Il Signore dell\'Eternità, Il Primo degli Occidentali', type: 'Divinità',
    chips: ['Enneade', 'Funerario', 'Abydos'],
    heroColor: 'linear-gradient(160deg,#0a2010,#0d3818,#051208)',
    bio: `Osiride è forse la divinità più amata e teologicamente ricca dell'intero pantheon egizio. Figlio primogenito di Geb (la terra) e Nut (il cielo), fratello e marito di Iside, fratello di Seth e Nefti, padre di Horus — Osiride è al centro del mito più importante dell'antica religione egizia.

Nella sua forma primordiale era un re civilizzatore: il primo sovrano dell'Egitto, colui che insegnò agli uomini l'agricoltura, le leggi, il culto degli dèi, trasformando l'umanità dalla barbarie alla civiltà. Ma il suo destino fu la morte per mano del fratello Seth, geloso del suo potere — e la sua resurrezione grazie alla magia di Iside.

Dopo la resurrezione Osiride non tornò a regnare sulla terra: divenne il sovrano del Duat, il regno dei morti, dove presiede il tribunale che giudica le anime dei defunti. Viene rappresentato come un uomo mummificato dalla pelle verde o nera (simbolo di rinascita e fertilità del limo nilotico), con la corona atef, il pastorale (heqa) e il flagello (nekhakha).`,
    versions: [
      { era: 'V Dinastia (ca. 2400 a.C.) — Testi delle Piramidi', name: 'Primi accenni', text: 'Le prime menzioni di Osiride compaiono nei Testi delle Piramidi. Inizialmente è associato al faraone defunto che, rinato, si identifica con Osiride, mentre il faraone vivente incarna Horus.' },
      { era: 'Medio Regno (2055–1650 a.C.) — Testi dei Sarcofagi', name: 'Democratizzazione del mito', text: 'Il mito osiriaco si estende progressivamente: non più solo il faraone, ma ogni uomo giusto può diventare "un Osiride" dopo la morte. È una rivoluzione teologica che porterà al culto funerario popolare.' },
      { era: 'Nuovo Regno — Libro dei Morti', name: 'Il giudice supremo', text: 'Osiride assume il ruolo di giudice supremo dell\'oltretomba. Seduto sul trono nella Sala delle Due Verità, presiede la pesatura del cuore — momento decisivo del giudizio divino.' },
      { era: 'Epoca tolemaica e romana', name: 'Serapide', text: 'Sotto la dinastia tolemaica Osiride viene fuso con Apis per formare Serapide — una divinità ibrida greco-egizia che si diffonderà in tutto il Mediterraneo. Il suo culto sopravviverà fino al VI secolo d.C.' },
    ],
    cult: `Il centro principale del culto di Osiride era Abydos, nell'Alto Egitto, dove secondo la tradizione era sepolta la sua testa. Il grande tempio di Seti I ad Abydos ospitava annualmente i Misteri di Osiride — rappresentazioni sacre della sua morte e resurrezione, che duravano diversi giorni e attiravano pellegrini da tutto l'Egitto.

Altri centri importanti erano Busiris nel Delta (sua città natale secondo il mito) e Philae in epoca tarda. Il suo simbolo principale era il pilastro djed, emblema della stabilità e dell'eterno rinnovamento — alcuni studiosi lo interpretano come la rappresentazione stilizzata della spina dorsale del dio.

Ogni anno, durante la piena del Nilo, venivano celebrati riti in suo onore: il limo fertile del fiume era considerato la manifestazione stessa del corpo di Osiride che rinasce. Si modellavano letti di argilla a forma del dio, si seminavano sopra granaglie, e la germinazione rappresentava la sua resurrezione.`,
    influence: [
      { era: 'Cristianesimo e religioni misteriche', text: 'Molti studiosi hanno notato parallelismi tra il mito osiriaco — morte, resurrezione, giudizio delle anime, dio incarnato in un re salvatore — e la teologia cristiana. I misteri di Osiride-Serapide furono i principali rivali del cristianesimo nascente nell\'Impero Romano.' },
      { era: 'Dioniso greco', text: 'Già Erodoto identificava Osiride con Dioniso: entrambi sono dèi morenti e rinascenti, legati alla vegetazione, al vino, all\'estasi rituale. Plutarco nel suo "Su Iside e Osiride" esplora esplicitamente questi paralleli.' },
      { era: 'Archetipo del dio morente e risorgente', text: 'James George Frazer ne "Il ramo d\'oro" (1890) identifica Osiride come il prototipo dell\'archetipo universale del "dio morente e risorgente" che ritorna in molte culture: Tammuz mesopotamico, Adone greco, Attis frigio, Balder norreno.' },
      { era: 'Esoterismo e massoneria', text: 'Il mito di Osiride è entrato nell\'immaginario massonico e rosacroce come simbolo dell\'iniziazione e della rinascita spirituale. Mozart nel "Flauto Magico" fa riferimenti espliciti al culto di Iside e Osiride.' },
    ],
    texts: [
      { title: 'Il Grande Inno a Osiride', source: 'Stele di Amenmose, XVIII dinastia, ca. 1400 a.C. — Louvre', text: 'Lode a te, Osiride, signore dell\'eternità, re degli dèi, dai molti nomi, dalle manifestazioni sacre, dalle forme misteriose nei templi. Sei il maggiore dei fratelli, il primogenito dell\'Enneade, colui che fa scorrere il Nilo, che crea i cereali.' },
      { title: 'Libro dei Morti — Formula 185', source: 'Nuovo Regno, ca. 1500 a.C.', text: 'Salute a te, Osiride, signore dell\'eternità, re degli dèi, tu che hai molti nomi, santo di manifestazioni, segreto di forme nei templi, dai molti diademi. A te appartiene il cielo, a te la terra, a te il Duat, a te il Campo dei Giunchi.' },
    ],
  },
  {
    id: 'iside', name: 'Iside', role: 'Grande Maga, Madre Divina',
    tags: ['Magia', 'Maternità', 'Protezione', 'Trono'],
    epithet: 'La Grande Maga, Madre degli Dei, Signora del Trono', type: 'Divinità',
    chips: ['Enneade', 'Magia', 'Philae'],
    heroColor: 'linear-gradient(160deg,#1a0820,#2d1038,#0a0412)',
    bio: `Iside — Aset in egizio antico, "il trono" — è la dea più complessa, amata e influente del pantheon egizio. Sorella e sposa di Osiride, madre di Horus, sorella di Seth e Nefti, è la grande maga che conosce il nome segreto di Ra, è colei che con la sua astuzia e il suo amore riporta in vita lo sposo assassinato, è la madre archetipica che protegge il figlio Horus dalle minacce mortali dello zio.

Nessun'altra divinità egizia ha una personalità così articolata. È moglie devota, madre coraggiosa, maga potente, regina, guaritrice, sciamana. La sua magia (heka) non è una forza oscura ma sapienza — conoscenza delle parole che legano e sciolgono il cosmo.

Viene rappresentata come una donna elegante con un trono sulla testa (geroglifico del suo nome), oppure con il disco solare tra le corna di vacca (dopo la sincresi con Hathor). Nelle scene funerarie allarga le sue ali piumate per proteggere il defunto.`,
    versions: [
      { era: 'Antico Regno — La sposa fedele', name: 'Iside delle origini', text: 'Nei Testi delle Piramidi Iside appare come sposa devota che piange Osiride e lo ricompone. La sua magia è già al centro del mito: è lei a dare respiro nuovo al marito morto.' },
      { era: 'Medio e Nuovo Regno', name: 'La Grande Maga', text: 'Iside assume progressivamente il ruolo di maga suprema. Nel mito "Iside e il nome segreto di Ra" — conservato sul Papiro di Torino — inganna il vecchio dio sole per conoscerne il nome segreto, acquisendo così potere supremo sugli dèi.' },
      { era: 'Epoca tolemaica (305–30 a.C.)', name: 'Iside universale', text: 'Con i Tolomei Iside diventa una divinità universale, equiparata a tutte le grandi dee del Mediterraneo. Il suo culto si diffonde in Grecia, Italia, Gallia, Germania, fino alla Britannia romana.' },
      { era: 'Periodo romano', name: 'La dea dalle diecimila forme', text: 'Apuleio nel "Metamorfosi" (II sec. d.C.) fa dire a Iside di essere "la madre di tutte le cose, signora degli elementi, progenie prima dei secoli". La dea si presenta come incarnazione di tutte le divinità femminili.' },
    ],
    cult: `Il centro più importante del culto di Iside in epoca tarda fu il tempio di Philae, nell'Alto Egitto, vicino alla prima cataratta del Nilo. Fondato in epoca tolemaica e ampliato dai romani, fu uno degli ultimi baluardi del paganesimo: il suo culto continuò fino al VI secolo d.C., quando l'imperatore Giustiniano lo chiuse.

Il culto di Iside si diffuse massicciamente nel mondo greco-romano dal III secolo a.C. Templi isiaci (Iseum) sorsero a Delo, Pompei, Roma — dove il grande Iseum Campense era uno dei templi più importanti della capitale imperiale. I devoti praticavano riti di iniziazione segreti, digiuni e processioni, e indossavano vesti di lino bianco.

Il simbolo principale di Iside è il nodo di Iside (tyet), un amuleto funerario legato alla protezione nella vita eterna. Era associata anche al sistro — strumento musicale sacro che accompagnava le cerimonie.`,
    influence: [
      { era: 'Culto mariano cristiano', text: 'L\'iconografia di Iside che allatta il piccolo Horus (Iside lactans) è stata quasi certamente uno dei modelli visivi delle prime rappresentazioni della Madonna con il Bambino nel cristianesimo primitivo, soprattutto in Egitto copto.' },
      { era: 'Lucio Apuleio — Metamorfosi', text: 'Nel libro XI delle Metamorfosi (II sec. d.C.), Apuleio descrive un\'iniziazione ai misteri di Iside che è uno dei testi fondamentali per la comprensione delle religioni misteriche antiche.' },
      { era: 'Esoterismo moderno', text: 'Iside è diventata una figura centrale dell\'esoterismo occidentale moderno: Helena Petrovna Blavatsky scrisse "Iside svelata" (1877), fondando la Società Teosofica. È presente nell\'ermetismo rinascimentale, nella massoneria, nel neopaganesimo contemporaneo.' },
      { era: 'Mozart e "Il Flauto Magico"', text: 'L\'opera di Mozart del 1791 è saturata di riferimenti ai misteri isiaci, filtrati attraverso la massoneria. L\'aria "O Isis und Osiris" di Sarastro è una preghiera esplicita alla coppia divina egizia.' },
    ],
    texts: [
      { title: 'Inno a Iside di Iside Filae', source: 'Iscrizione nel tempio di Philae, epoca tolemaica', text: 'Io sono colei che è stata, che è, che sarà, e nessun mortale ha mai sollevato il mio velo. Io ho dato alla luce il sole. Il frutto che ho partorito è il sole.' },
      { title: 'Iside e il nome segreto di Ra', source: 'Papiro di Torino, Nuovo Regno', text: 'Iside era una donna saggia. Il suo cuore era più astuto di un milione di uomini, più sagace di un milione di dèi. Niente le era ignoto in cielo o sulla terra.' },
      { title: 'Lamento di Iside per Osiride', source: 'Papiro Bremner-Rhind, IV secolo a.C.', text: 'Vieni alla tua casa, vieni alla tua casa! Oh tu dei pilastri, vieni alla tua casa! Il tuo amore è con me, non abbandonarmi. Bel giovane, vieni alla tua casa subito! Non ti vedo, ma il mio cuore ti desidera.' },
    ],
  },
  {
    id: 'horus', name: 'Horus', role: 'Dio del Cielo, Signore della Regalità',
    tags: ['Cielo', 'Falco', 'Faraone', 'Guerra'],
    epithet: 'Il Lontano, Colui che sta in Alto, Figlio di Iside', type: 'Divinità',
    chips: ['Enneade', 'Regale', 'Edfu'],
    heroColor: 'linear-gradient(160deg,#1a1500,#3a2e00,#121000)',
    bio: `Horus (Hor in egizio) è una delle divinità più antiche e complesse della religione egizia. Le sue origini risalgono al periodo predinastico — era già il dio tutelare dei sovrani di Nekhen (Ieracompoli) prima dell'unificazione dell'Egitto nel 3100 a.C. circa.

Nel pantheon maturo esistono in realtà diversi Horus distinti, poi fusi: Horus il Vecchio (Haroeris), fratello di Osiride e figlio di Geb e Nut; e Horus il Giovane (Hor-pa-khered, il greco Arpocrate), figlio di Osiride e Iside. È quest'ultima versione quella che domina nel mito osiriaco: il figlio postumo di Osiride, nato nascosto nelle paludi del Delta, cresciuto per vendicare il padre assassinato dallo zio Seth.

Viene rappresentato come un falco o come un uomo con testa di falco, spesso con la doppia corona dell'Alto e Basso Egitto. Il suo simbolo principale è l'Occhio di Horus (Udjat) — emblema di protezione, potere regale e guarigione tra i più potenti della magia egizia.`,
    versions: [
      { era: 'Periodo predinastico (prima del 3100 a.C.)', name: 'Horus di Nekhen', text: 'Horus è già attestato a Nekhen come divinità tutelare dei sovrani. Il suo culto si radica nella regalità fin dall\'origine della civiltà egizia, prima ancora che esistesse un pantheon sistematizzato.' },
      { era: 'Prima e Seconda Dinastia (3100–2686 a.C.)', name: 'Horus-faraone', text: 'Il faraone viene identificato come incarnazione vivente di Horus. Il "nome di Horus" è il primo dei cinque nomi regali. Durante la II dinastia con il faraone Peribsen si verifica un breve scisma, con l\'affermazione di Seth come dio regale.' },
      { era: 'Antico Regno — Horus di Edfu', name: 'Il difensore cosmico', text: 'Nel grande tempio di Edfu Horus è venerato come Hor-Behedety, il disco solare alato. Il mito della sua lotta contro Seth viene rappresentato ogni anno nel "Dramma sacro di Edfu".' },
      { era: 'Horus il Bambino (Hor-pa-khered)', name: 'Arpocrate', text: 'Come figlio di Iside, Horus è venerato sotto forma di bambino. In epoca tolemaico-romana il culto di Arpocrate si diffonde in tutto il Mediterraneo come dio della protezione dei bambini e del silenzio (per il dito portato alla bocca).' },
    ],
    cult: `Il tempio principale di Horus è quello di Edfu — uno dei templi meglio conservati di tutto l'Egitto, costruito in epoca tolemaica (237–57 a.C.) sulle fondamenta di strutture molto più antiche. Le sue pareti raccontano per intero il mito della lotta cosmica tra Horus e Seth.

Un altro importante centro era Nekhen (Ieracompoli, letteralmente "città del falco" in greco), nell'Alto Egitto, dove Horus era adorato come patrono dei faraoni arcaici. Al tempio di Kom Ombo Horus era venerato insieme a Sobek, il dio coccodrillo.

L'Occhio di Horus (Udjat) era uno degli amuleti più potenti: rappresentato in oro, lapislazzuli o fayence, veniva posto sui corpi mummificati per garantire protezione. La sua struttura matematica — sei frazioni che sommate danno 63/64 — era usata nelle misure di capacità dei cereali e dei liquidi.`,
    influence: [
      { era: 'La regalità divina', text: 'Il concetto egizio che il re sia l\'incarnazione vivente di Horus ha influenzato l\'ideologia regale di molte culture successive. L\'"unzione" del faraone come Horus ha paralleli con i rituali di consacrazione dei re medievali europei.' },
      { era: 'Apollo e il falco sacro', text: 'I greci identificarono Horus con Apollo per la sua natura solare e oracolare. In epoca tolemaica questa sincresi si formalizza: il falco Horus è l\'equivalente dell\'uccello sacro di Apollo.' },
      { era: 'L\'Occhio di Providenza', text: 'L\'Occhio di Horus è considerato uno degli antenati simbolici dell\'"Occhio che tutto vede" presente sul dollaro americano e in iconografia massonica — anche se la derivazione diretta è dibattuta dagli storici.' },
      { era: 'Simbolismo farmaceutico', text: 'Il simbolo "℞" usato nelle prescrizioni mediche potrebbe derivare (secondo alcune teorie) dall\'Occhio di Horus, usato nella medicina egizia come simbolo di guarigione e interezza.' },
    ],
    texts: [
      { title: 'Le contese di Horus e Seth', source: 'Papiro Chester Beatty I, Nuovo Regno ca. 1160 a.C.', text: 'Allora il giovane Horus parlò davanti all\'Enneade: "È una vergogna che io, figlio di Osiride, sia mantenuto qui da ottanta anni senza giudizio, mentre mio zio Seth occupa il trono che mi spetta di diritto".' },
      { title: 'Incantesimo di protezione per Horus bambino', source: 'Stele di Metternich, epoca tarda, ca. 360 a.C.', text: 'Iside disse: "Non temere, non temere, figlio glorioso Horus. Io sono qui, tua madre, che ti protegge. Nessun male ti colpirà, nessuna disgrazia che affligge ti sfiorerà. Il veleno ardente non avrà potere su di te".' },
    ],
  },
  {
    id: 'seth', name: 'Seth', role: 'Dio del Caos, del Deserto e delle Tempeste',
    tags: ['Caos', 'Deserto', 'Tempeste', 'Violenza'],
    epithet: 'Il Turbolento, Signore del Deserto Rosso', type: 'Divinità',
    chips: ['Enneade', 'Caotico', 'Ombos'],
    heroColor: 'linear-gradient(160deg,#2a0a00,#4a1500,#1a0600)',
    bio: `Seth (Sutekh in egizio) è la divinità più ambivalente e fraintesa del pantheon egizio. Fratello di Osiride, Iside e Nefti — di quest'ultima anche sposo — è il dio del caos, del deserto arido, delle tempeste di sabbia, della violenza, degli stranieri. Nella sua figura gli egizi condensarono tutte le forze avverse alla vita sulla riva del Nilo.

Ma Seth non era semplicemente "il cattivo": la sua natura è più complessa. Nello stesso tempo in cui assassina suo fratello Osiride, Seth difende la barca di Ra dal serpente Apophis ogni notte durante il viaggio nel Duat. È lui, con la sua forza bruta, a trafiggere il serpente del caos primordiale. Senza Seth, la vita stessa sarebbe impossibile.

Viene rappresentato come un animale misterioso — il cosiddetto "animale di Seth" — dalla testa allungata, orecchie quadrate e coda biforcuta, non identificabile con alcun animale reale. Alcuni studiosi ipotizzano sia un oritteropo, altri un okapi stilizzato, altri una creatura completamente fantastica.`,
    versions: [
      { era: 'Periodo predinastico — Seth di Ombos', name: 'Dio dell\'Alto Egitto', text: 'Nelle origini Seth è il dio tutelare di Ombos (Nubt) e dell\'Alto Egitto, equivalente di Horus per il Basso Egitto. In questa fase è una divinità pienamente positiva, associata alla forza regale.' },
      { era: 'Seconda Dinastia (ca. 2740 a.C.)', name: 'Il faraone Peribsen', text: 'Durante la II dinastia il faraone Peribsen sostituisce il falco di Horus con l\'animale di Seth sul proprio serekht reale — prova di un conflitto religioso o di un\'egemonia temporanea del culto sethiano. Il successore Khasekhemui li mostra entrambi, indicando una riconciliazione.' },
      { era: 'Medio Regno', name: 'Il fratricida', text: 'Il mito di Osiride si consolida e Seth diventa prevalentemente il fratricida. La sua figura si oscura progressivamente, pur conservando il ruolo difensore di Ra.' },
      { era: 'Periodo tardo — Demonizzazione', name: 'Il nemico assoluto', text: 'In epoca tarda, soprattutto dopo le invasioni straniere (assira, persiana), Seth viene identificato con gli stranieri e demonizzato. I suoi templi vengono distrutti, il suo nome spesso eraso. Plutarco lo identifica con il Tifone greco.' },
    ],
    cult: `I principali centri di culto di Seth erano Ombos (Nubt) nell'Alto Egitto e Avaris nel Delta, dove era venerato dagli Hyksos — popolo asiatico che dominò il Basso Egitto tra il 1650 e il 1550 a.C.

Durante la XIX Dinastia — in particolare sotto Seti I e Ramesse II, i cui nomi stessi derivano da Seth — il dio gode di una nuova fioritura. Ramesse II chiama il suo carro da guerra "Grande di Vittoria" e lo pone sotto la protezione di Seth: la forza bruta del dio del caos viene reinterpretata come potenza militare utile allo Stato.

Nonostante ciò, dopo il periodo ramesside Seth viene progressivamente emarginato. In epoca tarda i suoi templi vengono distrutti, il suo nome eraso dalle iscrizioni, la sua figura associata agli invasori stranieri. Quando i greci e i romani arrivano in Egitto, Seth è ormai completamente demonizzato.`,
    influence: [
      { era: 'Tifone greco', text: 'I greci identificarono Seth con Tifone — il mostro primordiale che sfidò Zeus. Plutarco nel "Su Iside e Osiride" elabora questa identificazione, facendone il principio del male cosmico.' },
      { era: 'Satana e il diavolo cristiano', text: 'Alcuni studiosi hanno notato paralleli tra Seth come "signore del deserto, nemico del dio buono" e la figura cristiana di Satana. Alcuni elementi iconografici — corna, coda — potrebbero derivare dalla sua immagine.' },
      { era: 'L\'ambiguità del sacro', text: 'Nella storia delle religioni Seth è uno dei casi più interessanti di divinità "ambivalente": né completamente buona né completamente cattiva, ma necessaria per l\'equilibrio cosmico. Georges Bataille e Mircea Eliade lo hanno studiato come esempio dell\'ambivalenza del sacro.' },
    ],
    texts: [
      { title: 'Inno a Seth — XIX Dinastia', source: 'Papiro Sallier IV, ca. 1300 a.C.', text: 'Seth, il grande di forza, dal braccio possente, che fa tremare il cielo. La sua voce è tuono, il suo sguardo fulmine. Egli è colui che uccide Apophis ogni notte, che protegge la barca di Ra dalle acque del caos.' },
      { title: 'Le contese di Horus e Seth', source: 'Papiro Chester Beatty I, Nuovo Regno', text: 'Allora Seth si alzò davanti all\'Enneade e disse: "Io sono Seth, il più grande in forza tra l\'Enneade, perché io uccido il nemico di Ra ogni giorno, stando alla prua della barca dei Milioni di Anni. Nessun altro dio lo fa".' },
    ],
  },
  {
    id: 'anubi', name: 'Anubi', role: 'Dio della Mummificazione e Guida dei Morti',
    tags: ['Morte', 'Mummificazione', 'Psicopompo', 'Sciacallo'],
    epithet: 'Colui che è sulla sua Montagna, Signore della Terra Sacra', type: 'Divinità',
    chips: ['Funerario', 'Cynopolis', 'Antichissimo'],
    heroColor: 'linear-gradient(160deg,#0a0a0f,#181828,#060608)',
    bio: `Anubi (Anupu in egizio, poi Anubis in greco) è una delle divinità egizie più antiche e riconoscibili. Rappresentato come uno sciacallo nero o come un uomo con testa di sciacallo, Anubi è il signore della necropoli, patrono degli imbalsamatori, psicopompo che accompagna le anime nell'oltretomba, supervisore della pesatura del cuore.

La scelta dello sciacallo come suo animale sacro è rivelatrice: gli sciacalli frequentavano i cimiteri del deserto, dissotterrando i corpi sepolti. Venerare uno sciacallo come dio significava, per magia simpatica, trasformare il divoratore in guardiano — il nemico dei morti in loro protettore. Il suo pelo nero evoca la pece con cui venivano impregnate le bende delle mummie e il colore della terra fertile del Nilo, simbolo di rinascita.

Nel suo ruolo di imbalsamatore divino Anubi è il modello archetipico dei sacerdoti-imbalsamatori terreni: durante il rituale di mummificazione, il sacerdote capo indossava una maschera di Anubi, assumendo simbolicamente la sua identità divina.`,
    versions: [
      { era: 'Prima Dinastia (3100–2890 a.C.)', name: 'Il grande dio dei morti', text: 'Nei primissimi tempi della storia egizia Anubi è il principale dio dell\'oltretomba. I Testi delle Piramidi gli attribuiscono un ruolo di primo piano: è lui il giudice originario dei morti.' },
      { era: 'Medio Regno (2055–1650 a.C.)', name: 'Subordinazione a Osiride', text: 'Con l\'ascesa del culto di Osiride, Anubi passa in secondo piano: cede a Osiride il ruolo di giudice supremo e assume quello, pur fondamentale, di assistente. In alcuni miti diventa figlio illegittimo di Osiride e Nefti.' },
      { era: 'Nuovo Regno — Libro dei Morti', name: 'Il custode della bilancia', text: 'Nell\'iconografia classica della pesatura del cuore, Anubi è colui che regola la bilancia. Accompagna il defunto nella Sala delle Due Verità, controlla l\'equilibrio tra il cuore e la piuma di Maat.' },
      { era: 'Epoca greco-romana', name: 'Ermanubi', text: 'Gli alessandrini fondono Anubi con Ermes (entrambi psicopompi) creando Ermanubi — una divinità ibrida venerata nel culto isiaco diffuso nel Mediterraneo.' },
    ],
    cult: `Il principale centro del culto di Anubi era Cynopolis — "città del cane" in greco, oggi el-Qeis — nell'Egitto centrale. Qui veniva venerato insieme a ogni tipo di canide del deserto: sciacalli, cani, volpi.

Vasti cimiteri di canidi mummificati sono stati rinvenuti in tutto l'Egitto: a Saqqara gli scavi hanno portato alla luce milioni di mummie di cani e sciacalli, offerte votive dei devoti al dio. Gli animali venivano allevati specificamente per essere sacrificati e mummificati.

Il simbolo principale di Anubi era lo scettro was e il flagello, ma soprattutto l'imiut — uno strano feticcio costituito da una pelle di animale decapitata appesa a un palo, immersa in un vaso di unguento. Rappresentava simbolicamente il processo di mummificazione stessa.`,
    influence: [
      { era: 'Ermes psicopompo greco', text: 'I greci identificarono Anubi con il loro Ermes nel suo ruolo di accompagnatore delle anime. In epoca tolemaica nasce la figura sincretica di Ermanubi, molto popolare a Roma.' },
      { era: 'Iconografia della morte', text: 'La figura di Anubi, insieme al suo ruolo nella psicostasia, ha influenzato profondamente l\'iconografia medievale e moderna della morte — in particolare l\'Angelo della Morte che pesa le anime e l\'immagine della bilancia della giustizia divina.' },
      { era: 'Cultura popolare moderna', text: 'Anubi è una delle divinità egizie più presenti nella cultura popolare moderna: dai romanzi di Anne Rice ai videogiochi, dai film come "La Mummia" ai fumetti Marvel, Anubi è diventato un\'icona pop dell\'antico Egitto.' },
    ],
    texts: [
      { title: 'Libro dei Morti — Formula 151', source: 'Nuovo Regno, ca. 1500 a.C.', text: 'Parole dette da Anubi, colui che è sulla sua montagna, signore della terra sacra: "Io sono venuto a proteggere Osiride, il defunto. Io pongo la sua testa al suo posto, io saldo il suo collo sulle sue vertebre. Nessun nemico si leverà contro di lui in eterno".' },
      { title: 'Papiro di Ani — Pesatura del cuore', source: 'XIX dinastia, ca. 1275 a.C. — British Museum', text: 'Disse Anubi al defunto: "Attenzione alla bilancia della verità. Mantieni l\'equilibrio con la piuma, non lasciare che il tuo cuore sia pesante di peccato, affinché tu possa comparire giustificato davanti al Grande Dio".' },
    ],
  },
  {
    id: 'thoth', name: 'Thoth', role: 'Dio della Sapienza, della Scrittura e della Luna',
    tags: ['Sapienza', 'Scrittura', 'Luna', 'Magia'],
    epithet: 'Il Signore del Tempo, lo Scriba degli Dei, il Tre Volte Grande', type: 'Divinità',
    chips: ['Ermopoli', 'Sapienziale', 'Lunare'],
    heroColor: 'linear-gradient(160deg,#0a0d1a,#10182e,#060a14)',
    bio: `Thoth (Djehuty in egizio antico) è il dio egizio della saggezza, della scrittura, della conoscenza, della magia, del calcolo, dell'astronomia e della luna. Rappresentato come un uomo con testa di ibis o come un babbuino — entrambi animali ritenuti dotati di straordinaria intelligenza — è lo scriba degli dèi per eccellenza, l'inventore del linguaggio, il custode della memoria cosmica.

Nel tribunale di Osiride è lui a registrare il risultato della pesatura del cuore, garantendo la precisione del giudizio. Senza Thoth, la conoscenza si perderebbe, la lingua sarebbe impossibile, le stelle smetterebbero di muoversi secondo leggi comprensibili. È il principio razionale dell'universo.

Nella cosmogonia di Ermopoli — la città sacra di Thoth — è il dio stesso a creare il cosmo attraverso la parola: il suo "verbo" ordina il caos primordiale. Questa concezione, straordinariamente elaborata, prefigura concetti teologici che ritroveremo nel prologo del Vangelo di Giovanni ("In principio era il Verbo").`,
    versions: [
      { era: 'Antico Regno', name: 'Scriba di Ra', text: 'Nei Testi delle Piramidi Thoth appare come scriba di Ra, registratore dei suoi decreti. Ha un ruolo importante nel viaggio notturno del sole: aiuta Ra a superare le regioni del Duat con la sua conoscenza delle formule magiche.' },
      { era: 'Medio e Nuovo Regno', name: 'Il giudice tra Horus e Seth', text: 'Nelle "Contese di Horus e Seth" Thoth svolge il ruolo di mediatore imparziale. La sua voce porta spesso la decisione finale grazie alla sua saggezza superiore.' },
      { era: 'Epoca tarda — Ermopoli', name: 'Il creatore attraverso la parola', text: 'Nella teologia ermopolitana Thoth assume un ruolo cosmogonico: è lui a creare l\'Ogdoade — le otto divinità primordiali — attraverso le sue otto parole creatrici.' },
      { era: 'Epoca ellenistica — Ermete Trismegisto', name: 'Il Tre Volte Grande', text: 'I greci identificarono Thoth con Ermes. Nasce la figura di Ermete Trismegisto ("il tre volte grandissimo"), a cui viene attribuito il Corpus Hermeticum — testi filosofico-religiosi che ispireranno l\'ermetismo alchemico medievale e rinascimentale.' },
    ],
    cult: `Il centro principale del culto di Thoth era Khemenu, ribattezzata dai greci Ermopoli ("città di Ermes"), nell'Egitto medio. Qui sorgeva il suo grande tempio e un'intera necropoli di ibis e babbuini mummificati — milioni di animali sacri al dio, deposti come offerte dai fedeli.

A Ermopoli Thoth era venerato non solo come scriba, ma come creatore del cosmo nella dottrina locale. I sacerdoti-scribi del tempio si consideravano suoi figli spirituali, incaricati di custodire e tramandare la conoscenza sacra.

Thoth era inoltre il patrono delle "Case della Vita" (per-ankh) — le istituzioni egizie in cui si conservavano e copiavano i testi sacri, si insegnava scrittura, medicina, astronomia, magia. Erano le università dell'antichità, e tutte erano sotto la protezione di Thoth.`,
    influence: [
      { era: 'Ermete Trismegisto ed ermetismo', text: 'Thoth-Ermete Trismegisto diventa la figura ispiratrice dell\'ermetismo, tradizione filosofico-religiosa di grande influenza nel Medioevo e nel Rinascimento. Marsilio Ficino tradusse il Corpus Hermeticum per Cosimo de\' Medici: influenzò profondamente la cultura rinascimentale.' },
      { era: 'Alchimia e tradizione occulta', text: 'Thoth è considerato il padre mitico dell\'alchimia. La "Tavola di Smeraldo", testo fondamentale dell\'alchimia medievale, è tradizionalmente attribuita a Ermete Trismegisto.' },
      { era: 'Il Verbo creatore', text: 'La concezione di Thoth come creatore attraverso la parola prefigura il logos greco (Eraclito, stoici) e il "Verbo" del prologo giovanneo. Molti studiosi vedono in questa tradizione egizia una delle radici del concetto cristiano.' },
      { era: 'Tarocchi e simbolismo esoterico', text: 'Il mazzo dei tarocchi è spesso chiamato "Libro di Thoth" nella tradizione esoterica occidentale. Aleister Crowley creò il celebre mazzo "Thoth Tarot" (1944) basandosi su questa tradizione.' },
    ],
    texts: [
      { title: 'Libro dei Morti — Formula 30B', source: 'Nuovo Regno, ca. 1500 a.C.', text: 'Parole dette da Thoth, giudice supremo: "Ascoltate questa parola di verità. Io ho giudicato il cuore del defunto: la sua anima sta in piedi testimone di lui. La sua condotta è giusta sulla grande bilancia. Nessun peccato è stato trovato in lui".' },
      { title: 'Dal Corpus Hermeticum — Poimandres', source: 'Tradizione ermetica, II-III sec. d.C.', text: 'Custodisci nel silenzio ciò che hai udito, o Tat, e taci nell\'ammirazione; perché il silenzio è il saluto dovuto al mistero. Dio è Mente, è Verità, è Luce. E questa è la nascita suprema dell\'uomo: quando Mente e Verità si uniscono.' },
    ],
  },
  {
    id: 'maat', name: 'Maat', role: 'Dea della Verità, della Giustizia e dell\'Ordine Cosmico',
    tags: ['Giustizia', 'Verità', 'Ordine', 'Piuma'],
    epithet: 'La Signora della Verità, Figlia di Ra', type: 'Divinità',
    chips: ['Concettuale', 'Cosmica', 'Giuridica'],
    heroColor: 'linear-gradient(160deg,#1a1400,#3a2e00,#0e0a00)',
    bio: `Maat è meno una dea in senso antropomorfo e più un principio cosmico personificato. Il termine egizio ma'at indica contemporaneamente verità, giustizia, ordine, equilibrio, rettitudine, armonia. È il principio che tiene insieme il cosmo, contrapposto a Isfet — il caos, la menzogna, il disordine.

Figlia di Ra, Maat accompagna il padre nel suo viaggio quotidiano: il sole sorge ogni mattino perché Maat garantisce l'ordine cosmico; il Nilo straripa ogni anno perché Maat mantiene l'equilibrio; il faraone regna giustamente perché applica Maat. Senza Maat, il cosmo ripiomberebbe nel Nun primordiale.

Viene rappresentata come una donna con una piuma di struzzo sul capo — simbolo della sua natura leggera, imponderabile, pura. Oppure come una piuma da sola, posta sul piatto della bilancia durante la pesatura del cuore. Il faraone, nei templi, offriva piccole statuette di Maat agli dèi: offrire Maat significava offrire il principio stesso che legittimava il suo potere.`,
    versions: [
      { era: 'Antico Regno', name: 'Il principio cosmico', text: 'Fin dai Testi delle Piramidi Maat è presentata come il principio fondante del cosmo. Ogni faraone deve "stabilire Maat al posto di Isfet" — cioè far regnare l\'ordine contro il caos.' },
      { era: 'Medio Regno', name: 'Il codice etico', text: 'Nei testi sapienziali del Medio Regno — come le "Istruzioni di Ptahhotep" — Maat diventa anche un principio etico personale: vivere secondo Maat significa essere onesti, giusti, misurati, compassionevoli.' },
      { era: 'Nuovo Regno — Pesatura del cuore', name: 'Giudice dei morti', text: 'Nel Libro dei Morti Maat diventa il criterio del giudizio ultraterreno: il cuore del defunto deve essere "leggero come la piuma di Maat" per accedere alla vita eterna.' },
      { era: 'Epoca tarda — Confessione negativa', name: 'I 42 peccati', text: 'Nella "Confessione negativa" del Libro dei Morti, il defunto deve dichiarare davanti a 42 giudici di non aver commesso alcuno dei 42 peccati contro Maat: non ho ucciso, non ho rubato, non ho mentito, non ho causato lacrime...' },
    ],
    cult: `Maat non aveva un tempio principale: era venerata in ogni tempio, perché ogni atto rituale era fondamentalmente un atto di Maat. I sacerdoti-giudici indossavano un'amuletto di Maat sul petto durante i processi.

Il "Tribunale di Maat" era l'ideale della giustizia egizia. La dea era patrona dei giudici, dei visir, degli scribi che redigevano documenti legali. Nei testi egizi di argomento giuridico si insiste che "Maat è grande, la sua efficacia duratura" — la giustizia vince sempre, alla fine.

La sala in cui si svolgeva il giudizio delle anime era chiamata "Sala delle Due Verità" (o "Sala delle Due Maat"), perché la dea era spesso rappresentata duplice: una per l'Alto e una per il Basso Egitto, una per la verità oggettiva e una per la giustizia applicata.`,
    influence: [
      { era: 'La Dike greca e la Iustitia romana', text: 'Il concetto di Maat ha influenzato direttamente la formulazione greca di Dike (giustizia) e quella romana di Iustitia. L\'iconografia della Giustizia con la bilancia e la spada deriva in ultima analisi dalla tradizione egizia.' },
      { era: 'La bilancia della giustizia', text: 'L\'iconografia della "Lady Justice" bendata con la bilancia, presente in tribunali di tutto il mondo, ha la sua radice più antica nella scena della pesatura del cuore e nella figura di Maat.' },
      { era: 'Il concetto di "ordine cosmico"', text: 'Maat è uno dei concetti più studiati della storia delle religioni. Jan Assmann ha dedicato opere fondamentali a mostrare come Maat sia stata la base dell\'etica e della teologia egizia, con ripercussioni sull\'intera civiltà occidentale.' },
    ],
    texts: [
      { title: 'Confessione negativa — Formula 125', source: 'Libro dei Morti, Nuovo Regno', text: 'Salute a voi, dèi, signori della Maat. Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho ucciso. Non ho depredato le offerte. Non ho ridotto le misure. Non ho rubato terra. Non ho causato lacrime. Io sono puro, io sono puro, io sono puro.' },
      { title: 'Istruzioni di Ptahhotep', source: 'Medio Regno, ca. 2000 a.C.', text: 'Maat è grande, la sua efficacia duratura. Non è stata scossa dal tempo di Osiride. Sono puniti coloro che trasgrediscono le sue leggi. Essa è la via dritta di fronte a chi nulla conosce. Il male non raggiunge mai il suo porto.' },
    ],
  },
  {
    id: 'hathor', name: 'Hathor', role: 'Dea dell\'Amore, della Musica e della Gioia',
    tags: ['Amore', 'Musica', 'Maternità', 'Cielo'],
    epithet: 'La Signora del Cielo, la Dorata, la Casa di Horus', type: 'Divinità',
    chips: ['Dendera', 'Materna', 'Musicale'],
    heroColor: 'linear-gradient(160deg,#2a0818,#4a0f28,#1a0410)',
    bio: `Hathor (Hut-Hor, "Casa di Horus") è una delle divinità femminili più complesse e amate dell'antico Egitto. Dea dell'amore, della sensualità, della bellezza, della musica, della danza, della gioia — ma anche del cielo, della maternità divina, della protezione dei defunti nell'oltretomba.

La sua natura è quella di una "grande madre" cosmica: nella sua forma di vacca celeste, Hathor è il cielo stesso che partorisce il sole ogni mattina. Il suo nome stesso — "Casa di Horus" — indica questa funzione di grembo cosmico da cui il dio-falco emerge ogni alba.

Hathor viene rappresentata in molte forme: come donna con corna di vacca che cingono il disco solare; come vacca; come donna con orecchie bovine; come leonessa (nel suo aspetto furioso sincretizzato con Sekhmet). Il suo simbolo musicale è il sistro — strumento sacro il cui suono metallico era considerato capace di placare le divinità e scacciare il male.`,
    versions: [
      { era: 'Antico Regno', name: 'Vacca celeste', text: 'Nelle prime rappresentazioni Hathor è la vacca cosmica che sostiene il cielo sulla schiena. Il sole si posa tra le sue corna, i faraoni vengono allattati da lei per ricevere la regalità divina.' },
      { era: 'Medio Regno — La dea amorosa', name: 'Patrona dell\'amore', text: 'Con il Medio Regno Hathor diventa prevalentemente la dea dell\'amore e della gioia. Le sue feste sono caratterizzate da musica, danza, vino, sessualità rituale. Le sue sacerdotesse-musiciste sono ricercate a corte.' },
      { era: 'Nuovo Regno — Signora dell\'Occidente', name: 'Dea dei morti', text: 'Hathor assume anche un ruolo funerario: è "Signora dell\'Occidente", colei che accoglie i defunti sulla riva ovest del Nilo (luogo del tramonto e quindi dei morti). Nella valle dei Re, le tombe sono poste sotto la sua protezione.' },
      { era: 'Il mito della Dea Distante', name: 'Il furore di Sekhmet', text: 'Esiste un ciclo mitico in cui Hathor si trasforma nella furiosa Sekhmet per punire l\'umanità. Viene placata solo con l\'inganno della birra rossa che la fa ubriacare, permettendole di tornare alla sua forma gentile di Hathor.' },
    ],
    cult: `Il centro principale del culto di Hathor era Dendera, dove sorgeva uno dei più belli e meglio conservati templi dell'Egitto — il tempio di Hathor, costruito in epoca tolemaico-romana ma su fondamenta molto più antiche. Le colonne hathoriche, con il volto della dea scolpito su quattro lati del capitello, sono tra le creazioni artistiche più celebri dell'architettura egizia.

Altri importanti santuari erano quelli di Deir el-Bahari (dove Hathor era venerata come protettrice della regina Hatshepsut), di Serabit el-Khadim nel Sinai (come "Signora delle Turchesi"), e di Byblos in Fenicia.

Le feste di Hathor erano tra le più gioiose dell'Egitto. La "Bella Festa della Valle" celebrava l'incontro annuale tra Hathor di Dendera e Horus di Edfu: la statua della dea veniva trasportata su una barca sacra fino al tempio dello sposo divino, in un viaggio di più giorni accompagnato da musica, danze, vino e banchetti.`,
    influence: [
      { era: 'Afrodite e Venere', text: 'I greci identificarono Hathor con Afrodite per la sua sfera amorosa e musicale. Il sincretismo Hathor-Afrodite è documentato in epoca tolemaica e si riflette nell\'iconografia mediterranea.' },
      { era: 'Le sette Hathor — le fate', text: 'Esisteva nel mito egizio la figura delle "Sette Hathor" — divinità multiple che predicevano il destino dei neonati. Sono considerate uno degli antecedenti culturali delle Parche/Moire/fate madrine delle tradizioni successive.' },
      { era: 'La Madonna del Latte', text: 'Come Iside, anche Hathor era rappresentata nell\'atto di allattare il faraone-Horus. Questa iconografia ha contribuito alla formazione dell\'immagine cristiana della "Madonna del Latte" o "Galaktotrophousa".' },
    ],
    texts: [
      { title: 'Inno a Hathor di Dendera', source: 'Tempio di Dendera, epoca tolemaica', text: 'Tu sei la Signora della gioia, la Regina della danza, la Signora della musica, la Regina del suonare l\'arpa. Il tuo volto gioisce quando colui che tu ami ti si avvicina. Il tuo cuore è contento quando lo guardi.' },
      { title: 'Canzoni d\'amore dell\'antico Egitto', source: 'Papiro Harris 500, XIX dinastia', text: 'La dorata — sia lodato il suo nome! — brilla tra le donne. Guarda, ella è come Sirio che sorge all\'inizio di un anno buono. La sua voce è come il vino dolce, le sue labbra come il miele, il suo profumo come l\'incenso.' },
    ],
  },
  {
    id: 'ptah', name: 'Ptah', role: 'Dio Creatore di Menfi, Patrono degli Artigiani',
    tags: ['Creazione', 'Menfi', 'Artigiani', 'Verbo'],
    epithet: 'Il Grande Artigiano, Colui che Crea con il Cuore e la Lingua', type: 'Divinità',
    chips: ['Menfita', 'Demiurgo', 'Artigianale'],
    heroColor: 'linear-gradient(160deg,#0d1520,#15253a,#08101c)',
    bio: `Ptah è una delle divinità più antiche e importanti dell'Egitto, dio creatore della città di Menfi — la prima capitale dell'Egitto unificato. È il patrono degli artigiani, degli architetti, degli scultori, dei fabbri: tutti coloro che trasformano la materia in forma attraverso il lavoro.

Ma Ptah non è solo un demiurgo artigiano. Nella teologia menfita — esposta sulla famosa "Pietra di Shabaka" (VIII sec. a.C., ma basata su testi molto più antichi) — Ptah è il creatore supremo che genera il cosmo non con gesti fisici, ma attraverso il "cuore" (la sede del pensiero per gli egizi) e la "lingua" (la parola). Questo concetto di creazione intellettuale tramite il pensiero e il verbo è tra le più sofisticate formulazioni cosmogoniche dell'antichità.

Ptah viene rappresentato come un uomo mummificato dalla pelle verde, con un copricapo aderente, che impugna uno scettro composito uniting l'ankh (vita), il djed (stabilità) e il was (potere). La sua figura statica contrasta con la natura dinamica della sua creazione pensante.`,
    versions: [
      { era: 'Antico Regno — Il demiurgo menfita', name: 'Patrono di Menfi', text: 'Sin dall\'Antico Regno Ptah è il dio tutelare di Menfi. Il nome stesso "Egitto" deriva dal greco Aiguptos, corruzione dell\'egizio "Hut-ka-Ptah" — "Casa dello spirito di Ptah", nome del suo grande tempio.' },
      { era: 'Teologia menfita', name: 'Creatore attraverso il verbo', text: 'La dottrina menfita presenta Ptah come il creatore supremo che genera il cosmo attraverso il pensiero del suo cuore e la parola della sua lingua. È una concezione teologica di straordinaria raffinatezza, probabilmente la più sofisticata dell\'antico Vicino Oriente.' },
      { era: 'Ptah-Sokar-Osiride', name: 'Fusione con divinità funerarie', text: 'Ptah si fonde progressivamente con Sokar (antico dio della necropoli menfita) e con Osiride, formando una triade funeraria che verrà venerata per tutto il periodo tardo dell\'Egitto.' },
      { era: 'Nuovo Regno', name: 'Uno della triade di Menfi', text: 'Ptah guida la triade di Menfi insieme alla sposa Sekhmet (la leonessa furiosa) e al figlio Nefertum (dio del loto e del profumo). La triade completa il panorama teologico accanto a quelle di Tebe (Amon-Mut-Khonsu) ed Eliopoli.' },
    ],
    cult: `Il grande tempio di Ptah a Menfi, chiamato Hut-ka-Ptah, era uno dei complessi religiosi più importanti dell'Egitto. Era anche il centro del culto di Apis, il toro sacro incarnazione terrena di Ptah: un singolo toro vivente selezionato tra migliaia per segni distintivi specifici (una macchia bianca triangolare sulla fronte, una falce di luna sul fianco...), venerato per tutta la vita, poi mummificato con onori reali.

Il Serapeo di Saqqara conteneva le mummie dei tori Apis deceduti, deposti in enormi sarcofagi di granito di oltre settanta tonnellate ciascuno. La scoperta del Serapeo da parte di Auguste Mariette nel 1851 è stata una delle più sensazionali dell'egittologia.

Gli artigiani egizi, soprattutto quelli di Deir el-Medina (il villaggio degli operai che costruivano le tombe reali nella Valle dei Re), consideravano Ptah loro patrono. Le iscrizioni ritrovate mostrano una devozione personale intensa al dio.`,
    influence: [
      { era: 'Efesto greco e Vulcano romano', text: 'I greci identificarono Ptah con Efesto — entrambi dèi-fabbri, patroni della metallurgia e dell\'artigianato. Erodoto chiama il tempio di Menfi "tempio di Efesto".' },
      { era: 'Il Verbo cosmogonico', text: 'La concezione menfita di Ptah che crea attraverso il pensiero e la parola è uno dei più antichi esempi di cosmogonia logocentrica. Ha influenzato profondamente il pensiero egizio successivo e presenta paralleli con il Logos greco e il Verbo giovanneo.' },
      { era: 'La Pietra di Shabaka', text: 'La stele di Shabaka, conservata al British Museum, è considerata uno dei documenti teologici più importanti dell\'antichità — spesso paragonata per importanza ai libri sapienziali biblici o ai testi filosofici presocratici.' },
    ],
    texts: [
      { title: 'Teologia menfita — Pietra di Shabaka', source: 'VIII sec. a.C., copia di un testo dell\'Antico Regno', text: 'Avvenne che il cuore e la lingua ottenessero il potere su tutte le membra, insegnando che egli è in ogni corpo e in ogni bocca — di tutti gli dèi, di tutti gli uomini, di tutti gli animali, di tutto ciò che vive — pensando e ordinando tutto ciò che vuole.' },
      { title: 'Inno a Ptah-Tatenen', source: 'Nuovo Regno, ca. 1300 a.C.', text: 'Salute a te, Ptah-Tatenen, padre degli dèi, dio grande fin dal principio. Tu formasti gli uomini, facesti gli dèi. Tu sei il grande artigiano all\'inizio, che plasma ogni corpo.' },
    ],
  },
  {
    id: 'amon', name: 'Amon', role: 'Dio Nascosto, Re degli Dei di Tebe',
    tags: ['Nascosto', 'Tebe', 'Vento', 'Ariete'],
    epithet: 'Il Nascosto, il Re degli Dei, Colui che ha Fatto Sé Stesso', type: 'Divinità',
    chips: ['Tebano', 'Nuovo Regno', 'Karnak'],
    heroColor: 'linear-gradient(160deg,#1a1500,#3a2e00,#121000)',
    bio: `Amon — il cui nome significa letteralmente "il nascosto", "l'invisibile" — è una delle divinità più enigmatiche e potenti della religione egizia. Originariamente era una divinità locale di Tebe, minore nel pantheon nazionale. Ma con l'ascesa di Tebe come capitale dell'Egitto nel Medio Regno, e soprattutto nel Nuovo Regno (1550–1069 a.C.), Amon diventa il re supremo del pantheon.

La sua natura "nascosta" è insieme il suo tratto distintivo e la fonte del suo potere: Amon è la forza invisibile che permea ogni cosa, il vento che si sente ma non si vede, il soffio vitale che anima gli esseri ma sfugge alla vista. È il dio per eccellenza della trascendenza.

Viene rappresentato come un uomo con il copricapo a due alte piume, o come un ariete dalle corna ricurve — animale sacro per la sua potenza generativa. Nel suo sincretismo con Ra (Amon-Ra), unisce l'aspetto nascosto del suo nome all'aspetto manifesto del sole visibile, realizzando una sintesi teologica particolarmente raffinata.`,
    versions: [
      { era: 'Antico e Medio Regno', name: 'Divinità locale di Tebe', text: 'Nelle origini Amon è una divinità provinciale di Tebe (Uaset). La sua ascesa inizia con la XII dinastia, quando i faraoni tebani — che portano nomi come Amenemhat ("Amon è davanti") — promuovono il suo culto.' },
      { era: 'Nuovo Regno — Amon-Ra', name: 'Re degli dèi', text: 'Con l\'ascesa della XVIII dinastia Amon si fonde con Ra formando Amon-Ra, "re degli dèi". Diventa la divinità suprema dell\'Impero egizio, venerato in tutto il Mediterraneo orientale, dalla Nubia fino alla Siria.' },
      { era: 'Crisi amarniana', name: 'L\'eresia di Akhenaton', text: 'Il faraone Akhenaton (ca. 1353–1336 a.C.) abolisce il culto di Amon in favore dell\'unico Aton, cancella il nome di Amon dai monumenti. Alla sua morte il culto di Amon viene ristabilito con vigore, e il suo stesso successore Tutankhaton cambia nome in Tutankhamon.' },
      { era: 'Terzo Periodo Intermedio', name: 'Lo Stato teocratico', text: 'Dopo il Nuovo Regno, i gran sacerdoti di Amon a Tebe diventano di fatto sovrani dell\'Alto Egitto, creando uno Stato teocratico amoniano parallelo alla monarchia del Delta.' },
    ],
    cult: `Il grande tempio di Amon a Karnak è il più grande complesso religioso mai costruito nell'antichità. Esteso su circa 60 ettari, con la sua Sala Ipostila di 134 colonne colossali, Karnak fu ampliato da faraoni di ogni dinastia per oltre duemila anni. Era collegato al tempio di Luxor da un viale di sfingi lungo quasi tre chilometri.

La festa di Opet era il momento più importante del calendario religioso egizio: ogni anno la statua di Amon veniva portata in processione solenne da Karnak a Luxor, accompagnata dalla moglie Mut e dal figlio Khonsu. Durante la festa, che durava circa tre settimane, il faraone rinnovava simbolicamente il suo legame divino con Amon.

Fuori dall'Egitto, il più famoso santuario di Amon era quello di Siwa, nel deserto libico — dove nel 332 a.C. Alessandro Magno si recò in pellegrinaggio e fu proclamato figlio di Amon dall'oracolo.`,
    influence: [
      { era: 'Zeus-Amon', text: 'I greci identificarono Amon con Zeus (Zeus-Amon), grazie all\'iconografia dell\'ariete. Alessandro Magno, dopo la consultazione dell\'oracolo di Siwa, si fece rappresentare con le corna d\'ariete di Amon sulle monete — simbolo poi adottato da altri sovrani ellenistici.' },
      { era: 'Monoteismo e trascendenza', text: 'La teologia di Amon come dio nascosto, invisibile, universale ha anticipato in qualche misura concezioni monoteistiche. Alcuni inni del Nuovo Regno celebrano Amon come unico dio di cui tutti gli altri sono manifestazioni ("tu sei uno, pur manifestandoti in milioni di forme").' },
      { era: 'L\'Ammon biblico', text: 'Nel libro di Geremia (46:25) il "faraone di Tebe" è chiamato "Amon di No" — dove "No" è Tebe. Gli ebrei erano perfettamente consapevoli del ruolo di Amon come dio supremo egizio.' },
    ],
    texts: [
      { title: 'Grande Inno ad Amon', source: 'Papiro di Leida, XIII sec. a.C.', text: 'Tu sei l\'unico, tu che hai creato tutto ciò che esiste, l\'unico solitario che ha fatto ciò che è. Dalla sua bocca sono venuti gli uomini, dai suoi occhi gli dèi. Il suo nome nascosto è Amon, egli è Ra nel volto, Ptah nel corpo.' },
      { title: 'Inno dei Trecento ad Amon', source: 'Papiro di Leida I-350, XIX dinastia', text: 'Tre sono tutti gli dèi: Amon, Ra, Ptah — senza eguali. Nascosto è il suo nome come Amon, egli è Ra davanti, il suo corpo è Ptah. Le loro città sono sulla terra stabilite per l\'eternità: Tebe, Eliopoli, Menfi — per sempre.' },
    ],
  },
  {
    id: 'bastet', name: 'Bastet', role: 'Dea Gatta, Protettrice della Casa e delle Donne',
    tags: ['Gatto', 'Casa', 'Protezione', 'Bubastis'],
    epithet: 'La Signora di Bubastis, la Dolce di Voce', type: 'Divinità',
    chips: ['Felina', 'Domestica', 'Bubastis'],
    heroColor: 'linear-gradient(160deg,#1a1000,#3a2500,#120a00)',
    bio: `Bastet è la dea gatta dell'antico Egitto, una delle divinità più amate dalla popolazione. Protettrice della casa, della famiglia, delle donne, delle partorienti, dei bambini, della gioia domestica. Il gatto, animale venerato in Egitto come in nessun'altra civiltà antica, trovava in Bastet la sua espressione divina.

Originariamente Bastet era una dea-leonessa feroce, quasi indistinguibile da Sekhmet. Ma progressivamente, soprattutto dal Terzo Periodo Intermedio in poi, assume forme più miti: prima di gatta domestica, poi di donna con testa di gatta. Il proverbio egizio diceva: "Non si accarezza la gatta Bastet prima di aver affrontato la leonessa Sekhmet" — a ricordare la natura profonda e ambivalente di queste dee feline.

I gatti sacri di Bastet venivano allevati nei suoi templi in migliaia di esemplari. Alla morte venivano mummificati con estrema cura — i cimiteri di gatti di Bubastis e Saqqara contenevano letteralmente centinaia di migliaia di mummie feline, vendute ai pellegrini come offerte votive.`,
    versions: [
      { era: 'Antico Regno', name: 'Bastet leonessa', text: 'Nelle prime attestazioni Bastet è una dea-leonessa feroce, protettrice del faraone in battaglia. Viene chiamata "colei che strappa" e "la fiamma". In questa forma è pressoché indistinguibile da Sekhmet.' },
      { era: 'Periodo tardo — La gatta', name: 'Addolcimento della dea', text: 'A partire dal Terzo Periodo Intermedio (ca. 1069 a.C.) Bastet assume prevalentemente la forma di gatta domestica o di donna con testa di gatta. La sua natura si addolcisce: diventa dea della gioia, della musica, del piacere sensuale.' },
      { era: 'Epoca saitica — Apogeo del culto', name: 'Dea nazionale', text: 'Durante la XXVI dinastia (664–525 a.C.) Bastet raggiunge il suo apogeo. Bubastis diventa una delle città più importanti dell\'Egitto. Erodoto descrive le sue feste come le più grandiose che abbia mai visto, con centinaia di migliaia di pellegrini.' },
      { era: 'Epoca tolemaica e romana', name: 'Diffusione in tutto il mondo', text: 'Il culto di Bastet si diffonde in tutto il mondo mediterraneo. I romani — grandi amanti dei gatti grazie ai soldati reduci dall\'Egitto — importano la dea sotto il nome di "Felis". Piccole statuette di Bastet sono state trovate in tutto l\'Impero.' },
    ],
    cult: `Il centro principale del culto di Bastet era Bubastis (oggi Tell Basta), nel Delta del Nilo orientale. Erodoto, che la visitò nel V secolo a.C., la descrive come una delle città più belle dell'Egitto, con il tempio della dea costruito su un'isola al centro di canali sacri.

Le feste di Bubastis erano le più famose dell'Egitto. Erodoto racconta che centinaia di migliaia di pellegrini giungevano ogni anno via Nilo, portati da barche cariche di musicisti e danzatori. Si beveva vino, si cantava, si danzava per giorni — era una festa catartica e sensuale.

Il cimitero dei gatti di Bubastis ha restituito centinaia di migliaia di mummie feline. Molti gatti venivano specificamente allevati per il sacrificio votivo — non come crudeltà, ma come pratica religiosa: il gatto mummificato fungeva da messaggero tra il devoto e la dea.`,
    influence: [
      { era: 'Artemide e Diana', text: 'I greci identificarono talora Bastet con Artemide — per la sua natura protettiva delle donne e dei parti, e per la sua selvaticità felina. In epoca tolemaica questa sincresi è testimoniata da iscrizioni.' },
      { era: 'Il gatto domestico nel mondo antico', text: 'La domesticazione del gatto, iniziata in Egitto circa 4000 anni fa, è strettamente legata al culto di Bastet. La diffusione del gatto domestico in tutto il Mediterraneo segue il percorso del culto della dea.' },
      { era: 'Iconografia moderna del gatto', text: 'L\'immagine del gatto come animale misterioso, nobile, portatore di buona fortuna o sfortuna, ha le sue radici nella venerazione egizia. Il detto "i gatti hanno sette vite" potrebbe derivare da antiche concezioni egizie sulla natura divina del felino.' },
    ],
    texts: [
      { title: 'Erodoto — Storie, Libro II', source: 'Erodoto, V sec. a.C.', text: 'Quando si radunano per la festa di Bubastis, uomini e donne salgono su barche di ogni tipo, facendo grande rumore con flauti, nacchere e canti. Passando lungo le città fluviali scendono a terra, e le donne lanciano scherni alle donne del luogo, danzando e sollevando le vesti.' },
      { title: 'Formule di protezione', source: 'Testi funerari, Nuovo Regno', text: 'Bastet, signora di Bubastis, venga in pace. Il suo alito è vita per le narici. Il suo miagolio scaccia i demoni, la sua presenza illumina le case. Protegga questo defunto come il gatto sacro protegge la casa del sole da Apophis.' },
    ],
  },
  {
    id: 'sekhmet', name: 'Sekhmet', role: 'Dea Leonessa, della Guerra e della Guarigione',
    tags: ['Guerra', 'Leonessa', 'Guarigione', 'Ira'],
    epithet: 'La Potente, Signora della Fiamma, Colei che Strappa', type: 'Divinità',
    chips: ['Menfita', 'Guerriera', 'Solare'],
    heroColor: 'linear-gradient(160deg,#2a0000,#5a0800,#1a0000)',
    bio: `Sekhmet — il cui nome significa "la Potente" — è una delle divinità più temute e venerate del pantheon egizio. Dea-leonessa della guerra, della pestilenza, dell'ira solare, ma anche — paradossalmente — della guarigione. Nella sua figura gli egizi condensarono tutta la violenza distruttiva e rigeneratrice del sole allo zenit.

Figlia di Ra, Sekhmet è lo strumento della sua collera: quando gli uomini si ribellarono al dio sole, Ra inviò Sekhmet sulla terra per sterminarli. La dea si abbandonò a una furia sanguinaria tale che Ra stesso temette di perdere l'umanità. Per fermarla, fece tingere di rosso enormi quantità di birra con ocra: Sekhmet, scambiandola per sangue, la bevve a sazietà, si ubriacò, e al risveglio la sua furia era placata — trasformata, secondo alcune versioni, nella dolce Hathor.

Sposa di Ptah, madre di Nefertum, Sekhmet viene rappresentata come una donna con testa di leonessa sormontata dal disco solare cinto dall'ureo. Durante il regno di Amenhotep III (1390–1352 a.C.) furono create oltre settecento statue colossali della dea — una per ogni giorno dell'anno doppio — probabilmente per placare la sua furia in tempi di pestilenza.`,
    versions: [
      { era: 'Antico Regno', name: 'Strumento dell\'ira di Ra', text: 'Sin dalle prime attestazioni Sekhmet è il braccio armato di Ra. "Colei che bacia di fuoco" inceneriva i nemici del dio solare. I faraoni la invocavano in battaglia, la consideravano responsabile delle vittorie militari.' },
      { era: 'Il mito della Distruzione dell\'Umanità', name: 'La strage e la redenzione', text: 'Il mito più famoso di Sekhmet è quello della strage dell\'umanità ordinata da Ra. Questa versione mitica — riportata nel "Libro della Vacca Celeste" del Nuovo Regno — è uno dei testi religiosi più antichi e drammatici.' },
      { era: 'Nuovo Regno', name: 'Dea della guarigione', text: 'Paradossalmente Sekhmet è anche patrona dei medici. Il suo legame con la malattia ha una logica precisa: chi può infliggere le pestilenze può anche allontanarle. I medici egizi erano detti "sacerdoti di Sekhmet".' },
      { era: 'La Dea Distante', name: 'Il ritorno della dea', text: 'Sekhmet è spesso identificata con l\'occhio di Ra che si allontana in Nubia nel mito della "Dea Distante". Viene riportata indietro da Thoth (o Shu) e si pacifica diventando Hathor o Bastet — mostrando la doppia natura (feroce e mansueta) della divinità femminile.' },
    ],
    cult: `Il centro principale del culto di Sekhmet era Menfi, dove era sposa di Ptah e formava con lui e il figlio Nefertum la grande triade menfita. Il suo tempio — chiamato "Casa di Sekhmet" — ospitava rituali di placamento della dea particolarmente elaborati.

I celebri "Sekhmet di Amenhotep III" — oltre 730 statue di granito nero raffiguranti la dea assisa, oggi sparse nei musei di tutto il mondo — furono commissionate probabilmente durante un'epidemia, per placare la furia della dea. Erano destinate al grande tempio funerario del faraone a Tebe occidentale (Kom el-Hetan).

I sacerdoti di Sekhmet praticavano sia riti apotropaici (per tenere lontane malattie e disgrazie) sia terapie mediche vere e proprie. I papiri medici egizi — il Papiro Edwin Smith, il Papiro Ebers — attestano un legame stretto tra conoscenza medica e culto sekhmetiano.`,
    influence: [
      { era: 'Il paradosso del sacro', text: 'Sekhmet è uno dei casi più studiati del "paradosso del sacro": la stessa divinità che infligge la malattia può guarirla, la stessa forza che distrugge può salvare. Mircea Eliade e Rudolf Otto hanno utilizzato Sekhmet come esempio del "mysterium tremendum".' },
      { era: 'Le divinità leonine mediterranee', text: 'Il tipo iconografico della dea-leonessa si ritrova in molte culture del Mediterraneo: la siriaca Astarte-leonessa, la punica Tanit, alcune forme di Cibele frigia. Sekhmet è l\'archetipo più antico e completo.' },
      { era: 'Medicina e religione', text: 'Il ruolo di Sekhmet come patrona dei medici ha influenzato la concezione antica della medicina come scienza sacra. I sacerdoti-medici di Sekhmet sono tra i più antichi professionisti della medicina documentati dalla storia.' },
    ],
    texts: [
      { title: 'Il Libro della Vacca Celeste', source: 'Tomba di Tutankhamon e tombe reali, XIX dinastia', text: 'Allora Ra disse a Sekhmet: "Scendi contro gli uomini ribelli". Sekhmet scese, scorrendo nel sangue fino alle cosce. Gli uomini che si erano ribellati furono massacrati per ordine di Ra. Al suo ritorno Ra disse: "Benvenuta, o pacifica". E da allora furono offerte libagioni di birra rossa al festival della dea.' },
      { title: 'Inno a Sekhmet', source: 'Papiro medico, Nuovo Regno', text: 'Salute a te, Sekhmet, signora della fiamma, dalla voce tuonante. Tu sei colei che guarisce, tu sei colei che fa ammalare. Nelle tue mani è la vita, nelle tue mani è la morte. Placa, o grande, la tua ira contro questo malato.' },
    ],
  },
  {
    id: 'nefti', name: 'Nefti', role: 'Dea della Casa, del Lamento e della Protezione Funeraria',
    tags: ['Lamento', 'Casa', 'Funeraria', 'Sorella'],
    epithet: 'La Signora del Palazzo, Sorella di Iside', type: 'Divinità',
    chips: ['Enneade', 'Funeraria', 'Sorella di Iside'],
    heroColor: 'linear-gradient(160deg,#180818,#2a1028,#0a040a)',
    bio: `Nefti (Nebet-Het, "Signora della Casa") è una delle quattro figlie di Geb e Nut nell'Enneade eliopolitana. Sorella di Iside, Osiride e Seth, è anche sposa (infelice) di Seth e — secondo alcune tradizioni — madre di Anubi, concepito con Osiride in un inganno amoroso.

A differenza della sorella Iside, così brillante e protagonista, Nefti è una figura più discreta, quasi in ombra. Ma la sua importanza è profondissima: insieme a Iside è la grande lamentatrice di Osiride, quella che con i suoi pianti rituali riporta il dio alla vita. Le due sorelle, spesso rappresentate come una coppia inseparabile, sono le protettrici per eccellenza dei defunti.

Nelle scene funerarie Nefti e Iside appaiono ai due lati del sarcofago o della mummia, con le ali aperte a proteggere il defunto. Nefti sta alla testa, Iside ai piedi — simbolicamente sorvegliano l'intero corpo del morto. Viene rappresentata come una donna con sul capo il geroglifico del suo nome: una casa sormontata da un cesto.`,
    versions: [
      { era: 'Antico Regno — Sorella-lamentatrice', name: 'Il lamento rituale', text: 'Sin dai Testi delle Piramidi Nefti appare come la sorella-lamentatrice di Osiride. Nelle "Lamentazioni di Iside e Nefti" — testi liturgici molto antichi — le due sorelle piangono ritualmente il dio morto per farlo tornare in vita.' },
      { era: 'Medio Regno — Madre di Anubi', name: 'La tradizione di Anubi', text: 'Una tradizione presenta Nefti come madre di Anubi. Sposa sterile di Seth, si sarebbe unita a Osiride (ingannandolo sul suo aspetto) concependo il figlio che poi affidò a Iside per essere cresciuto.' },
      { era: 'Nuovo Regno — Protettrice dei defunti', name: 'Custode di Duamutef', text: 'Nel culto funerario Nefti diventa protettrice di Duamutef, uno dei quattro figli di Horus che custodivano gli organi del defunto (lo stomaco, contenuto in un vaso canopo con coperchio a testa di sciacallo).' },
    ],
    cult: `Nefti non ebbe mai un proprio tempio principale, venerata sempre insieme a Iside o accanto ad Osiride. Il suo culto era strettamente funerario: era essenziale nei riti di mummificazione e nelle cerimonie di sepoltura.

Durante i "Lamenti di Iside e Nefti" — riti performati dalle sacerdotesse nei templi di Osiride — due donne rappresentavano le sorelle divine e cantavano antifone strazianti per il dio morto. Questi lamenti rituali sono tra i testi liturgici più antichi e potenti dell'Egitto.

A Philae, nel grande tempio di Iside, Nefti aveva una cappella dedicata. A Dendera e ad Abydos veniva venerata insieme a Iside come inseparabile compagna nella protezione dell'anima del defunto Osiride.`,
    influence: [
      { era: 'La doppia lamentatrice', text: 'L\'immagine delle due donne-lamentatrici (Iside e Nefti ai lati di Osiride morto) ha influenzato l\'iconografia del Compianto cristiano sul Cristo morto, con Maria Vergine e Maria Maddalena ai due lati.' },
      { era: 'Le Prefiche mediterranee', text: 'La figura di Nefti come lamentatrice professionale ha paralleli con le prefiche dei funerali greci e romani, e con le tradizioni mediterranee del lamento funebre — ancora vive in alcune aree del Sud Italia.' },
    ],
    texts: [
      { title: 'Lamentazioni di Iside e Nefti', source: 'Papiro Bremner-Rhind, IV sec. a.C.', text: 'Sono tua sorella Nefti. Vieni al tuo palazzo, affretta il tuo passo. Il mio volto ti cerca, il mio cuore ti desidera. Le mie braccia sono aperte per riceverti. Vieni nel tuo santuario, vieni nella tua casa.' },
    ],
  },
  {
    id: 'sobek', name: 'Sobek', role: 'Dio Coccodrillo del Nilo e della Forza',
    tags: ['Coccodrillo', 'Nilo', 'Forza', 'Kom Ombo'],
    epithet: 'Il Signore delle Acque, Colui che Rallegra i Cuori', type: 'Divinità',
    chips: ['Acquatico', 'Kom Ombo', 'Fayyum'],
    heroColor: 'linear-gradient(160deg,#0a1810,#102a1a,#06100a)',
    bio: `Sobek è il dio coccodrillo dell'antico Egitto, signore delle acque del Nilo, simbolo della potenza brutale e della fertilità delle paludi. Rappresentato come un coccodrillo o come un uomo con testa di coccodrillo, Sobek incarna la forza primordiale, ferocia ma anche protezione contro i pericoli del fiume.

Il coccodrillo era uno degli animali più temuti dell'Egitto — poteva rapire bambini, attaccare i contadini che lavoravano nei campi allagati. Divinizzarlo significava tentare di contenerne e utilizzarne magicamente il potere. Sobek non era una divinità "buona" nel senso convenzionale, ma una forza necessaria, quasi un assicuratore cosmico contro il caos.

In molti miti Sobek è associato alle origini: nacque dalle acque primordiali, e secondo alcune tradizioni fu creato quando la madre Neith emerse dall'oceano cosmico. Una leggenda racconta che aiutò Iside a partorire Horus nelle paludi, difendendola dalle minacce di Seth. In un\'altra leggenda, Sobek stesso partecipò al ritrovamento delle membra di Osiride sparse nel Nilo.`,
    versions: [
      { era: 'Antico Regno', name: 'Dio del Fayyum', text: 'Sin dall\'Antico Regno Sobek è il dio principale del Fayyum, la grande oasi verdeggiante ricca di coccodrilli. La città di Shedet (greca Crocodilopolis, oggi Medinet el-Fayyum) era il suo centro principale.' },
      { era: 'Medio Regno — Ascesa del culto', name: 'Sobek-Ra', text: 'Con la XII dinastia, originaria proprio del Fayyum, il culto di Sobek si diffonde in tutto l\'Egitto. Si fonde con Ra formando Sobek-Ra, una divinità solare-acquatica che unisce due elementi apparentemente opposti.' },
      { era: 'Nuovo Regno — Kom Ombo', name: 'Tempio condiviso con Horus', text: 'A Kom Ombo Sobek era venerato insieme a Horus il Vecchio in un tempio unico diviso simmetricamente tra le due divinità — un raro esempio di tempio "doppio" per placare due dei tradizionalmente nemici.' },
    ],
    cult: `Il centro principale del culto di Sobek era il Fayyum, con la città di Crocodilopolis. Qui i sacerdoti allevavano coccodrilli sacri in bacini dedicati: venivano nutriti con offerte, adornati con gioielli d'oro, e alla morte mummificati con riti elaborati.

Un altro importante centro era Kom Ombo, dove ancora oggi si può visitare il tempio doppio di Sobek e Horus. Qui un intero museo annesso espone centinaia di mummie di coccodrilli rinvenute nei cimiteri sacri.

Erodoto racconta che nei templi di Sobek venivano tenuti coccodrilli "addomesticati" con cui i sacerdoti interagivano per riti oracolari. I devoti pagavano per nutrire i coccodrilli sacri con carne, dolci e miele, considerato un atto di grande merito religioso.`,
    influence: [
      { era: 'Il coccodrillo come simbolo', text: 'Il coccodrillo egizio è diventato un simbolo universale dell\'Egitto antico nell\'immaginario culturale. In epoca romana, statue di coccodrilli venivano importate a Roma come curiosità.' },
      { era: 'Il mito del drago', text: 'Alcuni studiosi hanno proposto che il coccodrillo-divinità egizio sia uno degli antecedenti culturali dei draghi nelle mitologie mediterranee, africane e orientali — pur con le dovute differenze.' },
    ],
    texts: [
      { title: 'Inno a Sobek', source: 'Papiro della Ramesseum, XII dinastia', text: 'Salute a te, Sobek del Fayyum, signore di Shedet, che sorgi dal Nun. Il tuo potere è la potenza dell\'acqua, la tua forza è la fertilità del limo. Tu proteggi il re come proteggi il giovane Horus nelle paludi.' },
    ],
  },
];

const EGIZIO_HEROES = [
  {
    id: 'horus-giovane', name: 'Horus il Bambino', epithet: 'Il Figlio Vendicatore, L\'Erede Legittimo', type: 'Eroe divino',
    chips: ['Figlio di Osiride', 'Paludi di Chemmis', 'Erede al trono', 'Bambino perseguitato'],
    heroColor: 'linear-gradient(160deg,#1a1500,#3a2e00,#121000)',
    shortDesc: "Concepito dalla magia di Iside sul corpo mummificato di Osiride, nasce nelle paludi del Delta e cresce nascosto allo zio Seth. Sopravvive a veleni, scorpioni e malattie grazie alla magia materna, per poi affrontare Seth in una lotta epica per il trono d'Egitto.",
    bio: {
      main: `Horus il Bambino (Hor-pa-khered, greco Arpocrate) rappresenta una delle figure eroiche più potenti della mitologia egizia. Non è un eroe mortale come Gilgamesh — è un dio-bambino che deve letteralmente lottare per esistere, sopravvivere, reclamare il proprio diritto. La sua storia è archetipica: l'erede legittimo perseguitato dall'usurpatore, costretto a nascondersi fino al momento della resa dei conti.

Horus nasce da un atto di magia estrema: Iside, dopo aver ricomposto le membra smembrate di Osiride, si trasforma in nibbio e si posa sul corpo mummificato del marito, riuscendo a concepire un figlio postumo. È un concepimento impossibile, letteralmente miracoloso.`,
      sub1: 'Nascita e fuga nelle paludi',
      text1: `Consapevole della minaccia di Seth, Iside si rifugia nelle paludi di Chemmis nel Delta, dove partorisce Horus in segreto. Le paludi sacre diventano il suo nascondiglio sacro: Iside lo protegge con la sua magia (heka) e con l'aiuto della sorella Nefti e di una nutrice scorpione, Selket.

Il piccolo Horus cresce in condizioni precarie: viene morso da scorpioni, ammala di febbri misteriose, attacchi di serpenti. Ogni volta Iside ricorre alla sua magia per guarirlo. Questi episodi si cristallizzano in formule magiche usate per tutta la storia egizia come protezione per i bambini reali dei mortali.`,
      sub2: 'Le Contese di Horus e Seth',
      text2: `Giunto alla maturità, Horus si presenta davanti all'Enneade degli dèi per reclamare il trono di suo padre. Il contenzioso — raccontato nel celebre "Papiro Chester Beatty I" del XIX secolo a.C. — dura ottant'anni. Seth rifiuta di cedere, sostenendo che il trono spetta alla forza (sua) e non al diritto (di Horus).

L'Enneade si divide: Ra sostiene Seth, la maggioranza degli altri dèi sta con Horus. Si susseguono episodi di grande violenza e anche di crudo umorismo: Seth tenta di umiliare sessualmente Horus, che lo raggira con uno stratagemma di Iside; combattono trasformati in ippopotami nel Nilo; si sfidano in gare nautiche truccate.`,
      sub3: 'La lotta cosmica e la perdita dell\'occhio',
      text3: `Durante una delle lotte, Seth strappa a Horus l'occhio sinistro (quello lunare). Horus, per vendetta, strappa a Seth un testicolo. L'occhio di Horus viene fatto a pezzi e disperso, poi ritrovato e guarito dal dio Thoth. Diventerà l'Occhio di Horus (Udjat) — il simbolo più potente della magia protettiva egizia.

Alla fine, dopo decenni di contesa, l'Enneade decide: Horus è il legittimo erede. Seth viene esiliato nel deserto (o, in altre versioni, incorporato nella barca di Ra come difensore contro Apophis). Horus sale sul trono d'Egitto — e ogni faraone dopo di lui sarà considerato sua incarnazione vivente.`,
      sub4: "L'eredità",
      text4: `Horus regna sull'Egitto portando l'ordine (Maat) dopo il caos (Isfet) del dominio di Seth. Dona a suo padre Osiride l'occhio recuperato, e grazie a questo dono Osiride può "vedere" e regnare eternamente nell'oltretomba.

La vittoria di Horus non è solo una rivincita personale: è il fondamento mitico dell'intera civiltà egizia. Ogni faraone, salendo al trono, rinnova la vittoria di Horus sul caos. La regalità egizia è sostanzialmente la perpetuazione terrena del trionfo di Horus.`,
    },
    versions: [
      { era: 'Testi delle Piramidi', name: 'Frammenti arcaici', text: 'Nei Testi delle Piramidi (V dinastia) il mito di Horus è ancora frammentario, ma già contiene gli elementi chiave: l\'avversione a Seth, la vendetta del padre, la conquista del trono.' },
      { era: 'Medio Regno — Testi dei Sarcofagi', name: 'Elaborazione narrativa', text: 'Con i Testi dei Sarcofagi la storia si arricchisce. Compaiono episodi specifici della fuga nelle paludi, delle malattie del bambino, della magia di Iside.' },
      { era: 'Nuovo Regno — Papiro Chester Beatty', name: 'La versione completa', text: 'Il Papiro Chester Beatty I (ca. 1160 a.C.) contiene la versione più completa e narrativamente sofisticata delle "Contese di Horus e Seth". È un capolavoro letterario che mescola mito epico, commedia e teologia.' },
      { era: 'Stele di Metternich', name: 'Le sofferenze del bambino', text: 'La Stele di Metternich (IV sec. a.C.) raccoglie formule magiche basate sulle sofferenze del piccolo Horus. Veniva usata versando acqua sulla stele e bevendo il liquido come rimedio contro veleni e malattie.' },
    ],
    influence: [
      { era: 'Figura archetipica dell\'erede perseguitato', text: 'Horus è uno dei primi esempi mitici del "giovane erede perseguitato che si vendica dell\'usurpatore". Lo schema ricompare in Oreste (Agamennone), in Amleto, in innumerevoli racconti popolari.' },
      { era: 'Cristianesimo — paralleli con Cristo', text: 'Horus bambino nato miracolosamente, perseguitato da un usurpatore (Seth/Erode), che sconfigge il male e stabilisce il regno eterno, è stato spesso paragonato a Cristo. Alcuni studiosi vedono influenze egizie sulla formazione dell\'iconografia cristiana primitiva.' },
      { era: 'Apollo e la sconfitta di Pitone', text: 'Il giovane Apollo che sconfigge il serpente Pitone per stabilire il proprio culto a Delfi ha paralleli strutturali con il mito di Horus che sconfigge Seth. L\'influenza egizia sulla Grecia arcaica è oggi ampiamente documentata.' },
      { era: 'L\'Occhio di Horus come simbolo universale', text: 'L\'Udjat — l\'Occhio di Horus — è diventato uno dei simboli più riprodotti della storia: amuleto egizio, simbolo massonico, emblema esoterico, tatuaggio contemporaneo. Rappresenta protezione, interezza, visione interiore.' },
    ],
    texts: [
      { title: 'Le Contese di Horus e Seth — apertura', source: 'Papiro Chester Beatty I, XIX dinastia', text: 'La Grande Enneade si radunò nella Sala del Giudizio. Horus, figlio di Iside, disse: "Giustizia per me, giustizia! Io sono il figlio di Osiride, il primogenito, l\'erede. Eppure questo zio mio, Seth, siede sul trono che spetta a me".' },
      { title: 'Stele di Metternich — guarigione del piccolo Horus', source: 'IV secolo a.C., Metropolitan Museum', text: 'Iside pianse amaramente su suo figlio. Gridò al cielo: "Nessuno risponde al mio lamento? Eppure ero grande in cielo come in terra!". Allora Thoth scese dal cielo con la magia di Ra. E Horus fu guarito, per la potenza delle parole antiche.' },
    ],
  },
  {
    id: 'imhotep', name: 'Imhotep', epithet: 'Il Saggio Divinizzato, Medico degli Dei', type: 'Uomo divinizzato',
    chips: ['Reale ministro', 'III dinastia', 'Architetto di Saqqara', 'Divinizzato'],
    heroColor: 'linear-gradient(160deg,#1a1500,#3a2e00,#0e0a00)',
    shortDesc: "Visir e medico personale del faraone Djoser, progettò la prima grande piramide della storia (Saqqara, ca. 2650 a.C.). Secoli dopo la sua morte fu divinizzato come figlio di Ptah, patrono della medicina e della saggezza — uno dei rarissimi umani egizi ammessi nel pantheon.",
    bio: {
      main: `Imhotep è una delle figure più straordinarie della storia umana: un uomo reale, vissuto nel XXVII secolo a.C., che duemila anni dopo la sua morte veniva venerato come un dio. Il primo architetto, il primo medico, il primo intellettuale di cui la storia conservi memoria personale — e l'unico mortale dell'Egitto antico a essere elevato al rango di divinità a pieno titolo.

Era il visir, architetto, medico e gran sacerdote del faraone Djoser (ca. 2670–2650 a.C.) della III dinastia. Progettò la piramide a gradoni di Saqqara — la prima piramide mai costruita, e la prima grande struttura in pietra della storia umana. Con quell'opera rivoluzionò l'architettura mondiale.`,
      sub1: 'L\'architetto rivoluzionario',
      text1: `Prima di Imhotep i faraoni erano sepolti sotto mastabe — grandi piattaforme rettangolari di mattoni crudi. Imhotep ebbe l'idea di sovrapporre mastabe di pietra di dimensioni decrescenti, creando una struttura gradonata di sessanta metri di altezza.

Il complesso di Saqqara non è solo la prima piramide: è il primo grande complesso monumentale in pietra, con templi, cortili, cappelle, gallerie sotterranee. Per la sua complessità, alcuni studiosi hanno paragonato Imhotep a un Leonardo da Vinci dell'antichità.`,
      sub2: 'Il medico',
      text2: `Imhotep è considerato il fondatore della medicina egizia. Il celebre Papiro Edwin Smith — il più antico trattato chirurgico del mondo — è tradizionalmente attribuito alla sua scuola, anche se la sua stesura definitiva è molto successiva.

Il papiro descrive quarantotto casi clinici con diagnosi, prognosi e trattamenti, in uno stile razionale sorprendentemente moderno: niente magia, solo osservazione empirica. Questo approccio razionale — chiamato dagli studiosi "protoscientifico" — è uno dei più antichi esempi di medicina basata sull\'osservazione.`,
      sub3: 'La divinizzazione',
      text3: `Imhotep morì probabilmente sotto Djoser o poco dopo, e fu sepolto a Saqqara (la sua tomba non è stata ancora identificata con certezza). Per secoli rimase una figura storica venerata ma non divina: era considerato il "saggio" per eccellenza.

Solo mille anni dopo, durante il Nuovo Regno, iniziò un processo di progressiva divinizzazione. Nel Periodo Tardo (ca. 525 a.C.) Imhotep era pienamente un dio: figlio di Ptah e di una madre mortale (Kheredu-ankh), patrono dei medici, dei saggi, degli scribi. Gli venivano dedicati templi, si facevano sacrifici al suo nome, malati si recavano nei suoi santuari in cerca di guarigione miracolosa.`,
      sub4: "L'eredità universale",
      text4: `Imhotep è un caso unico nella storia: un mortale divinizzato a pieno titolo, equiparato agli dèi cosmici. I greci lo identificarono con Asclepio, il dio-medico, e il suo culto fiorì in epoca tolemaico-romana ben oltre i confini egizi.

Alcuni studiosi ipotizzano che la figura biblica di Giuseppe (visir di un faraone, saggio straordinario, salvatore dell'Egitto dalla carestia) sia in qualche modo ispirata alla memoria di Imhotep — o che entrambe le figure rappresentino lo stesso archetipo del "saggio straniero al servizio del faraone".`,
    },
    versions: [
      { era: 'III Dinastia (XXVII sec. a.C.)', name: 'Il personaggio storico', text: 'Imhotep è attestato come visir di Djoser in iscrizioni contemporanee — rarissime menzioni per un non-faraone all\'inizio dell\'Antico Regno, segno della sua straordinaria importanza.' },
      { era: 'Nuovo Regno', name: 'Il saggio mitico', text: 'Nei testi sapienziali del Nuovo Regno Imhotep è citato insieme ad Hordjedef come il saggio per antonomasia. "Chi oggi è come Imhotep?", si domanda malinconicamente un testo.' },
      { era: 'Periodo Tardo e Tolemaico', name: 'Il dio Asclepio egizio', text: 'Durante il Periodo Tardo la divinizzazione è completa. Templi a Saqqara, Tebe, Philae lo venerano come dio. I greci lo identificano con Asclepio: il santuario di Deir el-Bahari diventa meta di pellegrinaggi per guarigioni miracolose.' },
    ],
    influence: [
      { era: 'Nascita dell\'architettura monumentale', text: 'Imhotep è letteralmente il padre dell\'architettura monumentale in pietra. Senza la sua innovazione, probabilmente, le grandi piramidi, i templi colossali, i palazzi monumentali non sarebbero mai esistiti nella forma che conosciamo.' },
      { era: 'Prima figura di "intellettuale" della storia', text: 'Imhotep è considerato da molti storici la prima figura documentata di "uomo di scienza" — qualcuno che combina conoscenza tecnica, teorica, medica e filosofica. È il prototipo del savant.' },
      { era: 'Asclepio e la medicina greca', text: 'L\'identificazione di Imhotep con Asclepio è pre-ellenistica e testimonia una continuità di tradizione medica egizio-greca. Il Corpus ippocratico riconosce esplicitamente debiti con la medicina egizia.' },
      { era: 'Immaginario popolare moderno', text: 'Il film "La Mummia" (1999) ha trasformato ironicamente Imhotep in un mostro malvagio — una distorsione drammatica del reale Imhotep, che è una delle figure più benefiche e venerate della storia egizia.' },
    ],
    texts: [
      { title: 'Iscrizione sulla base della statua di Djoser', source: 'III dinastia, ca. 2670 a.C.', text: 'Il Cancelliere del Re del Basso Egitto, il primo dopo il Re dell\'Alto Egitto, sovrintendente del Grande Palazzo, nobile ereditario, gran sacerdote di Eliopoli, Imhotep, il costruttore, lo scultore.' },
      { title: 'Inno a Imhotep dal tempio di Deir el-Medina', source: 'Nuovo Regno, XIX dinastia', text: 'Salute a te, figlio di Ptah, saggio dal cuore eccellente! Tu sei colui a cui si rivolgono nella malattia. Tu sei il medico che guarisce, il dotto che conosce ogni rimedio. Nelle tue mani sta la vita, nel tuo sapere la salute.' },
    ],
  },
];

const EGIZIO_MYTHS = [
  {
    id: 'osiride-mito', tag: 'Mito fondativo',
    title: 'Il Mito di Osiride — Morte e Resurrezione del Dio-Re',
    type: 'Mito', epithet: 'Il Mito Centrale della Civiltà Egizia',
    chips: ['Enneade', 'Plutarco', 'Osiride', 'Iside', 'Seth', 'Horus'],
    heroColor: 'linear-gradient(160deg,#0d2010,#103820,#060e08)',
    shortDesc: "Il mito più importante della religione egizia: Osiride re civilizzatore viene assassinato dal fratello Seth, smembrato e disperso nel Nilo. Iside con la sua magia lo ricompone e concepisce Horus, che vendicherà il padre. Osiride diventa il signore dell'oltretomba, Horus il re d'Egitto.",
    bio: {
      main: `Il mito di Osiride è il racconto più importante e influente dell'antica religione egizia, e uno dei miti più potenti mai elaborati dall'umanità. Contiene in sé i grandi temi universali: amore e tradimento, morte e resurrezione, il conflitto tra ordine (Maat) e caos (Isfet), la vendetta del figlio sull'usurpatore del padre.

Non esiste un testo egizio unico che racconti il mito completo. Le sue componenti sono sparse in centinaia di iscrizioni, inni, formule funerarie — i Testi delle Piramidi (V dinastia), i Testi dei Sarcofagi (Medio Regno), il Libro dei Morti (Nuovo Regno). La narrazione continua e organica più famosa ci è stata tramandata dal filosofo greco Plutarco nel suo "Su Iside e Osiride" (I-II sec. d.C.), anche se mediata dalla sua interpretazione ellenistica.`,
      sub1: 'Il regno dorato di Osiride',
      text1: `Nati dall'unione di Geb (la terra) e Nut (il cielo), i quattro fratelli — Osiride, Iside, Seth, Nefti — rappresentano le quattro forze fondamentali del cosmo. Osiride è il primogenito, e sposa la sorella Iside secondo il costume divino.

Diventato re d'Egitto, Osiride si rivela un sovrano straordinario: insegna agli uomini l'agricoltura (fino ad allora cibandosi solo di ciò che trovavano), le leggi, il culto degli dèi, la costruzione delle città. Sotto il suo regno l'Egitto conosce un'epoca d'oro di civiltà e prosperità. Osiride poi parte per insegnare le arti della civiltà al resto del mondo, lasciando il regno sotto la reggenza di Iside.`,
      sub2: 'Il complotto di Seth',
      text2: `Seth — il fratello minore, dio del deserto, del caos, della forza bruta — è divorato dall'invidia. Tornato Osiride dai viaggi, Seth organizza una cospirazione con 72 complici. Durante un banchetto, Seth presenta una magnifica cassa riccamente decorata, promettendola in dono a chi vi si adatterà perfettamente.

Tutti i presenti vi entrano senza successo — la cassa era stata costruita sulla misura esatta di Osiride. Quando Osiride vi si distende, Seth e i complici chiudono il coperchio, sigillano la cassa con piombo, e la gettano nel Nilo. La cassa fluttua verso il mare, arrivando fino alle coste di Byblos, in Fenicia, dove si incastra nel tronco di un albero di tamerice. L'albero cresce attorno alla cassa, inglobandola.`,
      sub3: 'La ricerca di Iside',
      text3: `Iside, disperata, parte alla ricerca del corpo. Attraversa deserti, trasformata in varie forme. Arriva a Byblos, dove scopre che l'albero è stato tagliato dal re del luogo per farne una colonna del suo palazzo. Iside si fa assumere come nutrice dei figli del re e, durante la notte, tenta di rendere immortale il principe avvolgendolo nel fuoco magico. Quando la regina la scopre e urla terrorizzata, Iside si rivela come dea e chiede la colonna. Le viene concessa.

Estratta la cassa dal tronco, Iside torna in Egitto. Nasconde il corpo nelle paludi del Delta per prepararlo alla sepoltura. Ma Seth, cacciando una notte sotto la luna, trova il corpo. Furente, lo fa a pezzi — quattordici pezzi secondo Plutarco — e li disperde lungo tutto il Nilo.`,
      sub4: 'La ricomposizione e la resurrezione',
      text4: `Iside, aiutata dalla sorella Nefti, naviga il Nilo con una barca di papiri alla ricerca dei pezzi. Ne ritrova tredici — il fallo è stato mangiato da un pesce, ossiride. Iside ne modella uno sostitutivo con argilla del Nilo.

Ricomposto il corpo e bendato (la prima mummificazione della storia, eseguita con l'aiuto di Anubi), Iside si trasforma in nibbio, batte le ali sul marito, e lo riporta in vita — per una sola notte. In quella notte concepisce Horus. Osiride non può tornare a regnare sulla terra: dopo aver conosciuto la morte, non può più tornare completamente tra i vivi. Diventa il sovrano del Duat, signore dei morti, giudice supremo delle anime.`,
    },
    versions: [
      { era: 'Testi delle Piramidi (V-VI dinastia)', name: 'Forma arcaica', text: 'Le prime menzioni compaiono nei Testi delle Piramidi (ca. 2400 a.C.). Il mito è già presente nei suoi elementi essenziali, ma in forma frammentaria e spesso allusiva.' },
      { era: 'Stele di Amenmose', name: 'Inno narrativo', text: 'La Stele di Amenmose (XVIII dinastia, oggi al Louvre) contiene uno degli inni narrativi più completi sul mito osiriaco in forma egizia originale.' },
      { era: 'Plutarco — "Su Iside e Osiride"', name: 'La versione classica', text: 'L\'opera di Plutarco (I-II sec. d.C.) è la fonte più completa e coerente del mito. Anche se mediata da interpretazione ellenistica, preserva elementi autentici antichissimi.' },
      { era: 'Versioni locali', name: 'Le quattordici tombe di Osiride', text: 'Ogni provincia dell\'Egitto tardo rivendicava di possedere una parte del corpo di Osiride. Il tempio di Abydos custodiva la testa; altre città — tombe di gambe, braccia, organi. Tutti siti sacri di pellegrinaggio.' },
    ],
    influence: [
      { era: 'Archetipo del dio morente e risorgente', text: 'James Frazer ne "Il ramo d\'oro" identifica Osiride come il prototipo del "dio morente e risorgente" — archetipo universale che ricompare in Tammuz mesopotamico, Adone greco, Attis frigio, Balder norreno, Dioniso greco, e secondo alcune interpretazioni influenza la teologia della Passione cristiana.' },
      { era: 'La mummificazione', text: 'L\'intera pratica della mummificazione egizia si basa sul mito: ogni defunto veniva trattato come un "Osiride" da ricomporre per la vita eterna. I riti funerari sono drammatizzazioni ripetute del mito.' },
      { era: 'Dioniso greco', text: 'Già Erodoto identificava Osiride con Dioniso: entrambi sono dèi smembrati, rinati, associati alla vegetazione, alle feste estatiche, al vino. Plutarco elabora esplicitamente questi paralleli.' },
      { era: 'Massoneria e simbolismo moderno', text: 'Il mito osiriaco è entrato nell\'immaginario massonico come simbolo di iniziazione, morte simbolica e rinascita. L\'aria di Mozart "O Isis und Osiris" nel Flauto Magico ne è la più celebre espressione artistica.' },
    ],
    texts: [
      { title: 'Il Grande Inno a Osiride — Stele di Amenmose', source: 'XVIII dinastia, ca. 1400 a.C.', text: 'Poi Iside, dea sapiente, cercò il suo fratello. Vagò per questa terra senza fermarsi, non riposò finché non lo trovò. Con le sue piume creò ombra, con le sue ali fece aria. Essa pianse, essa riportò a casa suo fratello.' },
      { title: 'Plutarco — Su Iside e Osiride, cap. 13-18', source: 'Plutarco, I-II sec. d.C.', text: 'Tifone [Seth], quando Osiride stava regnando sull\'Egitto, persuase il fratello a entrare in una cassa bellissima, poi la fece chiudere e gettare nel Nilo. Iside, saputo del fatto, tagliò una ciocca dei propri capelli e indossò vesti a lutto, cominciando la ricerca dolorosa.' },
    ],
  },
  {
    id: 'enneade-mito', tag: 'Cosmogonia',
    title: 'L\'Enneade Eliopolitana — La Creazione dell\'Universo',
    type: 'Mito', epithet: 'La Creazione secondo Eliopoli',
    chips: ['Atum', 'Nun', 'Cosmogonia', 'Testi delle Piramidi'],
    heroColor: 'linear-gradient(160deg,#1a0800,#3a1c00,#0a0400)',
    shortDesc: "La cosmogonia più antica e autorevole dell'Egitto. Dalle acque primordiali del Nun emerge Atum, che autogenera la prima coppia divina (Shu e Tefnut). Da loro nasce la seconda (Geb e Nut), poi i quattro figli dell'Enneade (Osiride, Iside, Seth, Nefti). Nove divinità che costituiscono l'intero cosmo.",
    bio: {
      main: `La cosmogonia eliopolitana è la più antica e sistematica narrazione egizia della creazione del mondo. Elaborata dai sacerdoti di Eliopoli (Iunu, "la città del pilastro") — grande centro religioso del Basso Egitto poco a nord dell'attuale Cairo — fu conservata principalmente nei Testi delle Piramidi della V-VI dinastia (ca. 2400-2200 a.C.) e influenzò ogni cosmogonia egizia successiva.

L'Enneade — dal greco ennéas, "gruppo di nove" — traduce il termine egizio pesedjet, "i Nove". È il nome collettivo delle nove divinità primordiali di Eliopoli che, secondo la dottrina sacerdotale, costituiscono l'intero universo divino.`,
      sub1: 'Il Nun primordiale',
      text1: `Prima della creazione, esisteva solo il Nun: l'oceano primordiale di acque scure, caotico, informe, inerte, eternamente esistente. Non era un dio attivo — era la sostanza precosmica, il caos originario. Dentro il Nun c'era il potenziale di tutte le cose, ma nulla aveva ancora forma.

Non c'era cielo, non c'era terra. Non esistevano divisioni né differenze. Il tempo non scorreva. Era la condizione del non-essere, il "prima" assoluto.`,
      sub2: 'L\'emersione di Atum',
      text2: `Da questo caos primordiale emerge per autogenerazione Atum — il cui nome significa "la totalità" o "il completo". Il primo dio non ha genitori, non ha origine: si manifesta da sé come potere di esistere. Sale sulla collina primordiale di Benben — la prima terra emersa dalle acque — e prende coscienza di sé.

La pietra Benben (probabilmente una meteorite venerata a Eliopoli) rappresenta il raggio solare pietrificato, il punto sacro della prima manifestazione. Le piramidi e gli obelischi sono derivati architettonici di questa pietra cosmica.`,
      sub3: 'La prima coppia — Shu e Tefnut',
      text3: `Atum, solo nell'universo, decide di generare. Non avendo compagna, ricorre all'autogenerazione: secondo alcune versioni si masturba, secondo altre sputa, secondo altre ancora starnutisce. Dal suo seme o dalla sua saliva nascono Shu (l'aria, il principio maschile attivo) e Tefnut (l'umidità, il principio femminile ricettivo).

Questi due elementi primordiali — aria e umidità — sono le prime distinzioni del cosmo. Senza aria e umidità, la vita non può esistere. Con loro, la creazione può procedere.`,
      sub4: 'Geb e Nut, i quattro figli, e la struttura del cosmo',
      text4: `Shu e Tefnut si uniscono e generano Geb (la terra, maschile) e Nut (il cielo, femminile). Ma i due fratelli-amanti sono così strettamente abbracciati che nulla può nascere tra loro. Atum ordina a Shu di separarli: Shu solleva Nut verso l'alto e calpesta Geb sotto di sé, formando l'arco del cielo sopra la terra.

Prima della separazione, Geb e Nut hanno generato i quattro grandi dèi del mito osiriaco: Osiride e Iside (ordine, civiltà), Seth e Nefti (caos, deserto). Nut continua a "partorire" il sole ogni mattina e a "ingoiarlo" ogni sera — da cui nasce il ciclo del giorno e della notte.

Nove divinità: Atum, Shu, Tefnut, Geb, Nut, Osiride, Iside, Seth, Nefti. L'Enneade è completa. L'universo è strutturato. L'umanità può nascere — in alcune versioni dalle lacrime di Atum, in altre dalla separazione di Geb e Nut, in altre ancora dal sudore degli dèi.`,
    },
    versions: [
      { era: 'Testi delle Piramidi (V-VI dinastia)', name: 'La versione più antica', text: 'I Testi delle Piramidi sono la fonte più autorevole: incisi sulle pareti interne delle piramidi di Saqqara, sono i più antichi testi religiosi al mondo (ca. 2400 a.C.).' },
      { era: 'Cosmogonia ermopolitana', name: 'L\'Ogdoade', text: 'A Ermopoli si elaborò una cosmogonia parallela con otto divinità primordiali (Ogdoade): quattro coppie maschio-femmina rappresentanti aspetti del caos originario (Nun, Heh, Kek, Amon e le rispettive femmine). Da loro sarebbe nato l\'uovo cosmico.' },
      { era: 'Cosmogonia menfita — Ptah', name: 'Creazione attraverso il verbo', text: 'A Menfi Ptah fu proclamato creatore supremo attraverso pensiero e parola, in una dottrina cosmogonica raffinatissima conservata sulla Pietra di Shabaka (VIII sec. a.C.).' },
      { era: 'Cosmogonia tebana — Amon', name: 'L\'invisibile creatore', text: 'Nel Nuovo Regno, Tebe elaborò la propria cosmogonia con Amon come creatore invisibile e inesprimibile, superiore a tutte le altre divinità.' },
    ],
    influence: [
      { era: 'Genesi biblica', text: 'Alcuni elementi — lo spirito che si muove sulle acque primordiali, la separazione cielo-terra, la creazione per divisioni successive — presentano paralleli con la cosmogonia eliopolitana. L\'influenza egizia sulla tradizione biblica è ampiamente dibattuta.' },
      { era: 'Cosmogonie mediterranee', text: 'Il tema del caos primordiale da cui emerge la divinità autogenerata, seguita dalla generazione di coppie divine, ricorre in molte cosmogonie mediterranee — la Teogonia di Esiodo con Caos, Gea, Urano presenta paralleli strutturali.' },
      { era: 'Archetipo del demiurgo', text: 'Atum-Ra come demiurgo autogenerato che crea il cosmo è uno degli archetipi più potenti della storia delle religioni. Platone nel "Timeo" descrive un demiurgo con caratteristiche simili.' },
    ],
    texts: [
      { title: 'Testi delle Piramidi — Formula 527', source: 'V dinastia, ca. 2350 a.C.', text: 'Atum è quello che è divenuto uno, masturbandosi a Eliopoli. Egli pose il suo fallo nel suo pugno per ottenere piacere. Si unì una sorella e un fratello: Shu e Tefnut.' },
      { title: 'Libro dei Morti — Formula 17', source: 'Nuovo Regno, ca. 1500 a.C.', text: 'Io sono Atum quando ero solo nel Nun. Io sono Ra quando splendo per la prima volta, quando cominciai a governare ciò che avevo creato. Chi è questo? È Ra quando cominciò a regnare su ciò che aveva creato, quando Ra era re prima che esistesse il sollevamento di Shu.' },
    ],
  },
  {
    id: 'ra-apophis', tag: 'Mito cosmico',
    title: 'Il Viaggio di Ra e la Lotta contro Apophis',
    type: 'Mito', epithet: 'La Lotta Eterna tra Luce e Caos',
    chips: ['Ra', 'Apophis', 'Duat', 'Dodici ore'],
    heroColor: 'linear-gradient(160deg,#3d1500,#6b2a00,#1a0800)',
    shortDesc: "Ogni giorno il sole-Ra naviga nel cielo sulla sua barca Mandjet; ogni notte scende nel Duat sulla barca Mesektet, attraversando le dodici ore dell'oltretomba. Nell'ora più buia affronta il serpente Apophis, incarnazione del caos primordiale, per poter rinascere all'alba.",
    bio: {
      main: `Il viaggio quotidiano di Ra è uno dei miti cosmologici più drammatici dell'antichità. Non è un racconto lineare ma un evento ciclico che si ripete ogni ventiquattro ore — il fondamento mitico del giorno e della notte, dell'ordine cosmico, della vittoria della vita sulla morte.

Ogni mattina il sole-Ra sorge all'orizzonte orientale: è Khepri, il sole nascente, rappresentato come uno scarabeo (dal ciclo simbolico degli scarabei stercorari che "spingono" la palla di sterco come il sole spinto nel cielo). Sale sulla sua barca d'oro Mandjet — "la Barca dei Milioni di Anni" — e naviga attraverso la volta celeste. A mezzogiorno è Ra nel suo pieno splendore. Al tramonto diventa Atum, il sole stanco che discende verso occidente.

Ma la notte è un'altra cosa.`,
      sub1: 'La discesa nel Duat',
      text1: `Al tramonto Ra passa sulla barca notturna Mesektet e discende nel Duat — il mondo sotterraneo, il regno dei morti, un luogo di oscurità, pericoli e prove. La sua visione cambia: viene rappresentato con testa di ariete invece che di falco, simbolo del sole stanco e vulnerabile.

Il Duat è attraversato da un fiume — un Nilo sotterraneo, specchio di quello terreno. Lungo le sue rive vivono divinità, demoni, anime dei defunti. Il viaggio dura dodici ore, una per ciascuna delle dodici ore della notte. In ogni ora Ra deve superare prove diverse, attraversare porte sorvegliate, pronunciare le parole giuste.`,
      sub2: 'Le dodici ore della notte',
      text2: `Il "Libro dell'Amduat" — uno dei testi funerari più importanti del Nuovo Regno, dipinto nelle tombe della Valle dei Re — descrive con grande dettaglio le dodici ore del viaggio. Ogni ora ha il suo paesaggio, i suoi abitanti, le sue divinità protettrici, le sue minacce.

Nella sesta ora, al centro esatto del viaggio, Ra si fonde misteriosamente con il corpo mummificato di Osiride: è il momento più misterioso della teologia egizia, quando il sole (il dio vivente) si unisce al defunto (il dio morto), rigenerando entrambi. Ra riceve nuova vita dal corpo osiriaco, Osiride riceve il soffio solare che lo mantiene eternamente vivo nell\'oltretomba.`,
      sub3: 'L\'ora più buia — la lotta contro Apophis',
      text3: `Nella settima ora — la più buia, la più pericolosa — la barca di Ra incontra il suo nemico: Apophis (Apep in egizio), il serpente-drago gigantesco, incarnazione del caos primordiale (Isfet), del non-essere, della distruzione. Apophis non è un'entità creata: è precedente alla creazione, il residuo eterno del Nun che Ra non è riuscito a dissolvere.

Apophis vuole una cosa sola: fermare la barca di Ra per impedire l'alba, riportando il cosmo nel caos originario. Attorno alla barca si raccolgono le divinità protettrici: Seth alla prua, armato di una fiocina, trafigge il serpente con la sua forza bruta; Mehen, il serpente-drago benigno, avvolge Ra proteggendolo; Iside pronuncia incantesimi; i dannati del Duat vengono incatenati perché non si uniscano al caos.`,
      sub4: 'La resurrezione alba',
      text4: `Dopo una lotta titanica, Apophis viene trafitto, incatenato, fatto a pezzi. Non viene mai ucciso definitivamente: come principio del caos non può essere eliminato, solo sconfitto temporaneamente. Il sangue che sgorga dalle sue ferite tinge di rosso il cielo all'alba e al tramonto.

Ra, vittorioso, completa le ultime ore del viaggio. Nell'undicesima ora le cinque dee protettrici distruggono gli ultimi nemici. Nella dodicesima, Ra entra nel corpo di un enorme serpente e ne emerge all'altra estremità trasformato in Khepri — lo scarabeo del sole nascente. Sale sulle braccia di Shu, il dio dell'aria, che lo solleva sull'orizzonte orientale. L'alba può cominciare.

Gli egizi credevano che questa vittoria non fosse automatica. Ogni notte la battaglia era incerta, ogni mattina era un miracolo. Le preghiere dei sacerdoti, i rituali apotropaici, il comportamento giusto degli uomini — tutto concorreva a garantire la vittoria di Ra sul caos. La civiltà egizia era letteralmente un'enorme macchina teologica per assicurare che il sole sorgesse ogni mattina.`,
    },
    versions: [
      { era: 'Libro dell\'Amduat (Nuovo Regno)', name: 'Il testo delle dodici ore', text: 'Il "Libro dell\'Amduat" ("Di ciò che è nel Duat") è il resoconto più sistematico del viaggio notturno di Ra, dipinto sulle pareti delle tombe reali a partire da Thutmose I (ca. 1500 a.C.).' },
      { era: 'Libro delle Porte', name: 'Focus sulle porte', text: 'Un testo parallelo, il "Libro delle Porte", enfatizza le porte che dividono le dodici regioni del Duat, con i guardiani e le formule per attraversarle.' },
      { era: 'Libro delle Caverne', name: 'Una variante arcaica', text: 'Il "Libro delle Caverne" è una variante più antica e criptica, che concepisce il Duat come una serie di caverne abitate da divinità e demoni.' },
      { era: 'Libri di Apophis', name: 'Incantesimi apotropaici', text: 'Il "Libro per respingere Apophis" — papiri del Periodo Tardo — contiene formule magiche specifiche per distruggere il serpente cosmico. Venivano recitati nei templi con figurine di cera del serpente che venivano rituamente distrutte.' },
    ],
    influence: [
      { era: 'Il drago nel mito cosmico', text: 'La lotta di Ra contro Apophis è il prototipo egizio del mitologema universale del dio contro il drago/serpente cosmico: Marduk contro Tiamat (Mesopotamia), Zeus contro Tifone (Grecia), Thor contro Jormungand (Scandinavia), San Michele contro il drago (cristianesimo).' },
      { era: 'L\'apocalittica', text: 'L\'idea che la lotta tra bene e male sia eterna e ciclica, con vittorie temporanee e minacce sempre nuove, è uno dei temi fondanti dell\'apocalittica religiosa, con influenze dall\'Egitto al Medio Oriente all\'Occidente cristiano.' },
      { era: 'L\'oscurità prima dell\'alba', text: 'Il motivo "l\'ora più buia viene prima dell\'alba" — usato metaforicamente nella spiritualità e nella letteratura — ha le sue radici mitiche nella lotta della settima ora tra Ra e Apophis.' },
    ],
    texts: [
      { title: 'Libro dell\'Amduat — Settima Ora', source: 'Tombe della Valle dei Re, XVIII dinastia', text: 'Questa è la grande città di Apophis, nella regione più misteriosa dell\'oltretomba. Qui il Grande Dio è attaccato. Se non fosse per Iside e per Mehen-il-segreto, e per Seth il potente, Apophis soffocherebbe la barca e il sole non sorgerebbe mai più.' },
      { title: 'Libro per respingere Apophis', source: 'Papiro Bremner-Rhind, IV sec. a.C.', text: 'Indietro, Apophis, nemico di Ra! Sei respinto, sei incatenato, sei trafitto. I tuoi ossi sono spezzati, la tua carne è recisa. Il sole sorgerà a dispetto di te, Ra splenderà sull\'orizzonte. Tu non sei, tu non esisti, tu non esisterai mai più.' },
    ],
  },
  {
    id: 'pesatura-cuore', tag: 'Giudizio dei morti',
    title: 'La Pesatura del Cuore — Il Giudizio davanti a Osiride',
    type: 'Mito', epithet: 'La Psicostasia e la Confessione Negativa',
    chips: ['Osiride', 'Anubi', 'Thoth', 'Maat', 'Ammit', 'Libro dei Morti'],
    heroColor: 'linear-gradient(160deg,#0d0d14,#1a1a28,#080810)',
    shortDesc: "Dopo la morte, l'anima del defunto viene condotta da Anubi nella Sala delle Due Verità. Davanti a 42 giudici recita la Confessione Negativa, poi il cuore viene pesato contro la piuma di Maat. Se equilibrato, il defunto accede alla vita eterna nei Campi Aaru; se più pesante, viene divorato da Ammit, la distruttrice.",
    bio: {
      main: `La Pesatura del Cuore — tecnicamente "psicostasia" dai termini greci psyché (anima) e stathmos (bilancia) — è la scena più rappresentata dell'arte funeraria egizia e il punto culminante della teologia dell'oltretomba. Descritta nella Formula 125 del Libro dei Morti, costituisce il giudizio divino cui ogni defunto doveva sottoporsi per accedere alla vita eterna.

A differenza di altre religioni dove il giudizio è un evento unico nella storia cosmica (il Giudizio Universale cristiano, il giorno del Giudizio islamico), nella religione egizia è un evento personale che ogni individuo affronta singolarmente al momento della propria morte. Questo rende la concezione egizia dell'aldilà straordinariamente individuale e morale: ciascuno risponde delle proprie azioni.`,
      sub1: 'La Sala delle Due Verità',
      text1: `Dopo la morte, l'anima del defunto (ka) veniva accompagnata da Anubi nella Sala delle Due Verità (Maati) — un'immensa sala celeste dove risiedeva il tribunale divino. Il nome "Due Verità" si riferisce alla dualità di Maat: giustizia dell'Alto e del Basso Egitto, verità cosmica e verità morale, legge divina e legge umana.

Nella Sala sedevano Osiride come giudice supremo, circondato dai 42 giudici assessori — uno per ogni provincia dell'Egitto, ciascuno specializzato nel giudicare un tipo specifico di peccato. Alla bilancia presiedeva Anubi, mentre Thoth, con la sua tavoletta da scriba, registrava scrupolosamente il verdetto.`,
      sub2: 'La Confessione Negativa',
      text2: `Il defunto si presenta davanti ai 42 giudici e recita la Confessione Negativa — un elenco dettagliato di peccati che dichiara di NON aver commesso. Non è una confessione dei peccati fatti: è una dichiarazione di innocenza rispetto a una lista specifica di trasgressioni.

"Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho rubato. Non ho ucciso. Non ho diminuito le offerte degli dèi. Non ho rubato terra. Non ho falsificato le bilance del commercio. Non ho causato lacrime. Non ho contaminato le acque del Nilo. Non ho blasfemato. Non ho fatto soffrire un orfano..."

La lista è lunghissima e rivela una sofisticata concezione morale che comprende doveri religiosi, sociali, ambientali, personali. Gli egizi avevano elaborato uno dei primi codici etici complessi della storia.`,
      sub3: 'La pesatura',
      text3: `Dopo la Confessione avveniva la prova decisiva. Anubi poneva il cuore (ib) del defunto — considerato dagli egizi la sede della coscienza, della memoria e della personalità — su un piatto della bilancia. Sull'altro piatto veniva posata la piuma di Maat, simbolo dell'ordine cosmico.

Il cuore doveva essere "leggero come la piuma" — cioè libero dal peso dei peccati. Gli egizi temevano che il cuore potesse testimoniare contro il proprio possessore, accusandolo di crimini nascosti. Per questo la Formula 30B del Libro dei Morti — incisa su amuleti a forma di scarabeo posti sul petto delle mummie — è un incantesimo per convincere il cuore a tacere: "O mio cuore, mia madre, non deporre contro di me davanti al Grande Dio!".`,
      sub4: 'Il verdetto',
      text4: `Se la bilancia restava in equilibrio, il defunto era dichiarato maa-kheru — "giusto di voce", "giustificato" — e poteva accedere ai Campi di Aaru, il paradiso egizio. I Campi di Aaru erano una versione celeste dell'Egitto: un Nilo scintillante, campi di grano altissimo, banchetti eterni, riunioni con familiari defunti. Il maa-kheru entrava nel seguito di Osiride e otteneva l'immortalità.

Se il cuore era più pesante della piuma — se il defunto era colpevole — il cuore veniva gettato ad Ammit, "la Divoratrice": una creatura mostruosa con testa di coccodrillo, corpo di leone e posteriore di ippopotamo, appostata accanto alla bilancia. Ammit divorava il cuore e con esso l'identità stessa del defunto. Non c'era inferno di pene eterne nella teologia egizia: c'era l'annientamento totale, la "seconda morte", la cessazione di ogni esistenza. Per un egizio, che credeva così tanto nella continuità dell'essere, questa era la punizione peggiore immaginabile.`,
    },
    versions: [
      { era: 'Testi dei Sarcofagi (Medio Regno)', name: 'Antecedenti', text: 'Il tema del giudizio dei morti compare già nei Testi dei Sarcofagi, ma in forma meno sistematica. La pesatura come scena rituale codificata è del Nuovo Regno.' },
      { era: 'Libro dei Morti — Formula 125', source: 'Nuovo Regno', name: 'La versione classica', text: 'La Formula 125 del Libro dei Morti è il testo canonico della psicostasia. Include la Confessione Negativa con i 42 peccati e la descrizione della Sala delle Due Verità.' },
      { era: 'Papiro di Ani', name: 'La rappresentazione più famosa', text: 'Il Papiro di Ani (XIX dinastia, ca. 1275 a.C., oggi al British Museum) contiene la rappresentazione più celebre e artisticamente perfetta della scena della pesatura del cuore.' },
    ],
    influence: [
      { era: 'Giudizio Universale cristiano', text: 'La scena della pesatura delle anime — con San Michele che regge la bilancia — presente nell\'iconografia medievale del Giudizio Universale ha le sue radici ultime nella psicostasia egizia.' },
      { era: 'Lady Justice — la Giustizia bendata', text: 'La figura allegorica della Giustizia con la bilancia, presente in tribunali di tutto il mondo, deriva iconograficamente dalla Maat egizia e dalla scena della pesatura.' },
      { era: 'Concezione della moralità personale', text: 'L\'idea che ogni individuo debba rispondere delle proprie azioni attraverso un giudizio morale dettagliato è uno dei contributi più importanti del pensiero egizio all\'etica mondiale. Prefigura concezioni morali del giudaismo, cristianesimo, islam.' },
      { era: 'La coscienza morale', text: 'Il concetto che il "cuore" del defunto possa testimoniare contro di lui è una delle prime espressioni letterarie della coscienza morale come istanza interiore autonoma — anticipa di millenni concezioni psicologiche e morali successive.' },
    ],
    texts: [
      { title: 'Libro dei Morti — Formula 125 (Confessione Negativa)', source: 'Nuovo Regno, Papiro di Ani', text: 'Salute a te, grande dio, signore delle Due Verità! Sono venuto davanti a te, mio signore. Conosco il tuo nome, conosco i nomi dei 42 dèi che siedono con te. Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho ucciso. Non ho detto menzogne.' },
      { title: 'Formula 30B — Scarabeo del cuore', source: 'Libro dei Morti, Nuovo Regno', text: 'O mio cuore, mia madre, mio cuore della mia esistenza! Non deporre contro di me davanti al Grande Dio. Non sollevarti contro di me davanti alla bilancia. Tu sei il mio ka, tu sei il mio spirito dentro di me. Rimani fermo, testimonia con me, non accusarmi.' },
    ],
  },
  {
    id: 'contese-horus-seth', tag: 'Mito giuridico',
    title: 'Le Contese di Horus e Seth — Ottant\'anni di Giudizio',
    type: 'Mito', epithet: 'La Lotta per il Trono d\'Egitto',
    chips: ['Horus', 'Seth', 'Iside', 'Ra', 'Enneade'],
    heroColor: 'linear-gradient(160deg,#1a1500,#3a2e00,#120a00)',
    shortDesc: "Dopo la morte di Osiride, Horus rivendica il trono d'Egitto contro lo zio Seth. Il contenzioso davanti all'Enneade degli dèi dura ottant'anni, con processi, combattimenti, inganni, gare truccate e perfino episodi comici. Alla fine, grazie alla saggezza e all'astuzia di Iside, Horus vince e diventa re d'Egitto.",
    bio: {
      main: `"Le Contese di Horus e Seth" è uno dei testi letterari più straordinari dell'Egitto antico — un mito che è insieme teologia profonda, commedia burlesca, dramma giudiziario e allegoria politica. La versione più completa è conservata nel Papiro Chester Beatty I (XIX dinastia, ca. 1160 a.C.), ma gli episodi raccontati risalgono a epoche molto più antiche.

La vicenda si apre con un problema giuridico: dopo la morte di Osiride, chi ha diritto al trono d'Egitto? Horus, figlio del defunto re? O Seth, fratello del re e potente divinità già adulta? L'Enneade degli dèi si riunisce per giudicare il caso. Ma quello che dovrebbe essere un processo rapido si trasforma in un contenzioso interminabile di ottant'anni, pieno di colpi di scena.`,
      sub1: 'Il dibattito davanti all\'Enneade',
      text1: `Horus argomenta con la legge: il trono spetta al figlio del re defunto, per diritto di successione. Ogni dio sano di mente conosce questa regola. Shu, Thoth e altri dèi concordano: Horus ha ragione.

Seth si appella alla forza: "Io sono più grande, più forte, più esperto. Sono io che uccido Apophis ogni notte dalla prua della barca di Ra. Senza di me il sole non sorge!". Ra — vecchio e stanco, spesso rappresentato come ormai indebolito — tende a preferire Seth per questa ragione. Il processo si blocca in un'impasse.`,
      sub2: 'L\'intervento di Neith e di altri saggi',
      text2: `L'Enneade chiede consiglio a Neith, antichissima dea di Sais. Il suo verdetto è sapientissimo: "Date il trono a Horus, che è il suo diritto. Ma date a Seth le due dee straniere (Anat e Astarte) come compenso, perché non rimanga senza nulla". Ra si infuria per il verdetto che va contro di lui.

Il dio-sole insulta Horus pubblicamente: "Questo ragazzino ha ancora l'odore del latte in bocca!". Uno degli dèi, Baba, risponde con una battuta: "La tua cappella è vuota!" (insulto pesantissimo, significa "non hai più devoti"). Ra offeso si ritira nella sua tenda per tre giorni. Solo la dea Hathor riesce a farlo ridere mostrandogli i suoi genitali — un episodio sconcertante che mostra la natura irriverente del testo.`,
      sub3: 'Le prove e gli inganni',
      text3: `Il processo si trasforma in una serie di sfide fisiche. Seth e Horus si trasformano in ippopotami e si affrontano sott'acqua per tre mesi — Iside interviene ma per errore colpisce Horus con l'arpione. Il figlio, furioso, le taglia la testa (che verrà rimessa a posto dalla magia).

Seth invita Horus a cena e di notte tenta di umiliarlo sessualmente. Ma Iside consiglia al figlio di ingannare lo zio: Horus raccoglie il seme di Seth nella mano, Iside lo getta via e lo sostituisce con seme di Horus che viene sparso sulla lattuga, cibo preferito di Seth. Quando la mattina Seth rivendica davanti all'Enneade di aver "dominato" Horus, Thoth fa pronunciare al seme stesso: il seme di Seth risponde da un fiume, il seme di Horus risponde... dalla testa di Seth. Seth è umiliato davanti a tutti.`,
      sub4: 'Il verdetto finale e la riconciliazione',
      text4: `Dopo ottant'anni di contese, Iside invia una lettera ad Osiride nel Duat. Il vecchio re defunto risponde con parole terribili: "Se non viene resa giustizia a mio figlio, io scatenerò i demoni dell\'oltretomba che spezzeranno il cuore degli dèi!". L\'Enneade, spaventata, decreta finalmente: Horus è il legittimo re d\'Egitto.

Seth viene punito ma non eliminato: va a vivere con Ra nel cielo, dove diventa il dio del tuono e continua a difendere la barca solare contro Apophis. L\'universo è riequilibrato: Horus regna sulla terra (ordine), Osiride regna nel Duat (morte trasformata in vita), Seth difende Ra nel cielo (caos addomesticato al servizio dell'ordine).

La morale del mito è sottile: il caos (Seth) non può essere distrutto — sarebbe la fine stessa del cosmo. Deve essere contenuto, sublimato, messo al servizio dell'ordine. L'equilibrio cosmico si mantiene attraverso la tensione produttiva tra forze opposte.`,
    },
    versions: [
      { era: 'Testi delle Piramidi (V dinastia)', name: 'Frammenti arcaici', text: 'I Testi delle Piramidi contengono allusioni al conflitto, ma senza una narrazione continua. Horus e Seth sono già antagonisti.' },
      { era: 'Papiro Chester Beatty I', name: 'La versione completa', text: 'Il Papiro Chester Beatty I (ca. 1160 a.C., oggi a Dublino) contiene la versione narrativa più completa e letterariamente sofisticata. È un capolavoro che mescola mito, commedia, satira politica.' },
      { era: 'Dramma sacro di Edfu', name: 'La lotta cosmica', text: 'Sulle pareti del tempio di Edfu è scolpito il "Dramma sacro di Edfu" — una drammatizzazione rituale della lotta Horus-Seth rappresentata ogni anno davanti al popolo.' },
    ],
    influence: [
      { era: 'Allegoria politica', text: 'Molti studiosi leggono le Contese come un\'allegoria del conflitto storico tra Alto Egitto (Seth) e Basso Egitto (Horus) — la continua riunificazione delle Due Terre era garantita dal faraone come incarnazione di Horus.' },
      { era: 'Archetipo del processo interminabile', text: 'L\'immagine di un processo giudiziario che si trascina per ottant\'anni, con dèi interminabili e colpi di scena continui, è stata interpretata come una satira ante litteram della burocrazia e della giustizia lenta — un tema universale.' },
      { era: 'L\'umorismo nel sacro', text: 'Le Contese sono un raro esempio di mito sacro che contiene elementi esplicitamente comici, erotici, persino scurrili. Mostrano come la religione egizia fosse più sfumata e umana di quanto si immagini comunemente.' },
    ],
    texts: [
      { title: 'Contese di Horus e Seth — inizio', source: 'Papiro Chester Beatty I, XIX dinastia', text: 'Così parlò Shu davanti alla grande Enneade: "La giustizia è più grande della forza. Giudicate secondo giustizia, dicendo: date l\'eredità a Horus". E Thoth disse: "Così è davvero, centomila volte". Ma Ra si arrabbiò.' },
      { title: 'La lettera di Osiride', source: 'Papiro Chester Beatty I', text: 'Osiride rispose dal Duat: "Perché privi di giustizia mio figlio? Io creai l\'orzo e il grano per nutrire gli dèi e gli uomini. Nessun altro dio fu capace di farlo. E adesso mi negate giustizia? Se non rendete giusto mio figlio, i miei messaggeri verranno a strappare i cuori dei malvagi".' },
    ],
  },
  {
    id: 'distruzione-umanita', tag: 'Mito apocalittico',
    title: 'La Distruzione dell\'Umanità — L\'Ira di Ra',
    type: 'Mito', epithet: 'Il Diluvio di Sangue che Non Fu',
    chips: ['Ra', 'Sekhmet', 'Hathor', 'Libro della Vacca Celeste'],
    heroColor: 'linear-gradient(160deg,#2a0000,#5a0800,#1a0400)',
    shortDesc: "Quando l'umanità si ribellò al vecchio Ra, il dio scatenò su di loro la leonessa Sekhmet, che iniziò un massacro inarrestabile. Solo l'inganno della birra rossa — scambiata per sangue — riuscì a placare la dea furiosa, salvando gli ultimi uomini dallo sterminio totale.",
    bio: {
      main: `Il mito della Distruzione dell'Umanità è la risposta egizia alle grandi narrazioni apocalittiche dell'antichità — il diluvio universale mesopotamico, il diluvio biblico, il Ragnarök norreno. Ma nella versione egizia c'è un elemento unico: la divinità non distrugge attraverso l'acqua ma attraverso il sangue, non con la natura ma con un'altra divinità, e la catastrofe viene fermata non da un sopravvissuto giusto ma da un inganno cosmico.

Il testo principale è il "Libro della Vacca Celeste" — scritto sulle pareti delle tombe reali del Nuovo Regno, tra cui quella di Tutankhamon. Il mito racconta un evento primordiale, quando gli dèi ancora regnavano direttamente sulla terra, prima che si ritirassero nel cielo.`,
      sub1: 'Il declino del vecchio Ra',
      text1: `Ra regnava sulla terra da ere immemorabili. Ma il tempo non risparmia nemmeno gli dèi: "Le sue ossa erano diventate d'argento, la sua carne d'oro, i suoi capelli di vero lapislazzuli". Era un re antico, forte ma vulnerabile, e gli uomini iniziarono a percepire la sua stanchezza.

Gli uomini cospirarono contro Ra. Pensarono: "Il re è vecchio, deboliamolo". Complottarono in segreto, ridendo della sua debolezza. Ma Ra era ancora il dio-sole: vedeva tutto dall'alto. Chiamò l'Enneade degli dèi nel suo palazzo per un consiglio segreto.`,
      sub2: 'La decisione divina',
      text2: `Ra consultò gli dèi — Shu, Tefnut, Geb, Nut, Nun stesso. "Gli uomini che ho creato mi tradiscono. Cosa farò?". Il saggio Nun, l'oceano primordiale, suggerì: "Manda contro di loro il tuo Occhio, perché li punisca. Che si manifesti come Hathor".

Ra estrasse il suo Occhio — il suo sguardo incarnato, un'entità divina femminile autonoma — che scese sulla terra nella forma della feroce leonessa Sekhmet, "la Potente". Ma l'Occhio, una volta liberato, iniziò a massacrare l'umanità con gioia sfrenata, assetata di sangue. Il sangue scorreva nei campi, nei fiumi, nei deserti.`,
      sub3: 'L\'ira di Sekhmet',
      text3: `Ra, osservando dal cielo, ebbe compassione: non voleva l'estinzione totale dell'umanità, ma solo una punizione. Tentò di richiamare Sekhmet, ma la leonessa era ormai ebbra di sangue e non rispondeva alle chiamate.

"Sarò felice solo quando avrò annientato tutti gli uomini, fino all'ultimo", dichiarò Sekhmet, continuando la strage. Il mondo stava per essere distrutto completamente.`,
      sub4: "L'inganno della birra rossa",
      text4: `Ra elaborò un piano. Ordinò ai servitori di andare a Elefantina (in Alto Egitto), dove si trova l'ocra rossa (dedeva), e di portarne grandi quantità. Poi ordinò di preparare settemila giare di birra, da mescolare con l'ocra rossa finché non avessero il colore del sangue.

Durante la notte fece versare la birra rossa in tutti i campi dove Sekhmet avrebbe dovuto massacrare la popolazione il giorno seguente. All'alba la terra era coperta di un "lago di sangue" alto tre palmi. Quando Sekhmet arrivò e vide la distesa rossa, si chinò a bere — pensando fosse sangue umano. Bevve fino a ubriacarsi completamente, e non riuscì più a riconoscere gli uomini né a proseguire la strage.

Al risveglio la sua furia era spenta. Sekhmet tornò da Ra trasformata nella dolce Hathor — perché ogni leonessa nasconde un gatto, ogni furore una tenerezza. L'umanità era salva. Ma Ra, disgustato dal comportamento degli uomini, decise di ritirarsi nel cielo, lasciando la terra agli dèi più giovani. Da quel giorno il sole-Ra non cammina più tra gli uomini ma viaggia nel cielo distante, accessibile solo attraverso la preghiera e il rito.`,
    },
    versions: [
      { era: 'Libro della Vacca Celeste', name: 'La versione canonica', text: 'Il testo completo compare nelle tombe reali del Nuovo Regno: Tutankhamon, Seti I, Ramesse II, Ramesse III. È uno dei testi "cosmogonici" del Libro dei Morti allargato.' },
      { era: 'Varianti rituali', name: 'Feste della birra rossa', text: 'In epoca tarda si celebrava una "festa dell\'ubriachezza" con grandi libagioni di birra — spesso tinta di rosso — per commemorare (e placare) l\'episodio mitico.' },
      { era: 'Il mito della Dea Distante', name: 'Variante narrativa', text: 'Un mito imparentato racconta di Sekhmet che, furiosa, si allontana in Nubia sotto forma di leonessa. Thot (o Shu) viene mandato a riportarla indietro con parole e musica, trasformandola progressivamente nella dolce Hathor.' },
    ],
    influence: [
      { era: 'Il diluvio mitico universale', text: 'Il tema della divinità che decide di distruggere l\'umanità ribelle è un mitema universale: diluvio mesopotamico, biblico, greco (Deucalione), indiano (Manu). Il mito egizio è la variante "al sangue" invece che "all\'acqua".' },
      { era: 'Il concetto di hybris', text: 'L\'idea che gli uomini abbiano commesso una colpa cosmica (la ribellione contro il creatore) che giustifica il quasi-sterminio prefigura il concetto greco di hybris e quello biblico di peccato originale.' },
      { era: 'La retirata del dio', text: 'Il ritiro di Ra nel cielo dopo l\'esperienza negativa con l\'umanità è uno dei primi esempi del mitologema del "Dio Ritirato" (deus otiosus) studiato da Mircea Eliade: il dio creatore che, dopo aver creato, si ritira lasciando il governo del mondo ad altre divinità.' },
    ],
    texts: [
      { title: 'Libro della Vacca Celeste — apertura', source: 'Tomba di Seti I, XIX dinastia', text: 'Avvenne al tempo della maestà di Ra, il dio autocreato, dopo che era re degli uomini e degli dèi insieme. Gli uomini cominciarono a cospirare contro di lui. La maestà di Ra era già vecchio. Le sue ossa erano d\'argento, la sua carne d\'oro, i suoi capelli di vero lapislazzuli.' },
      { title: 'Libro della Vacca Celeste — il piano di Ra', source: 'Tomba di Tutankhamon, XVIII dinastia', text: 'Ra disse: "Chiamate in fretta messaggeri veloci come l\'ombra". I messaggeri andarono a Elefantina e portarono il dedeva [ocra rossa]. Ra ordinò di mescolarlo con la birra d\'orzo. Settemila giare furono preparate. La birra rossa fu versata nei campi nella notte, e al mattino la terra era coperta.' },
    ],
  },
];
