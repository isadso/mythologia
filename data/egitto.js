/* data/egitto.js — all content for the Egyptian mythology section */

/* =====================================================================
   EGITTO — DEITIES AGGIORNATE — PARTE 1 (divinità 1-8)
   Sostituisce la sezione const EGIZIO_DEITIES = [ fino all'id 'maat'
   Le divinità dalla 9 in poi (Hathor, Ptah, Amon, Bastet, Sekhmet,
   Nefti, Sobek) sono nella Parte 2.
   ===================================================================== */

const EGIZIO_DEITIES = [
  {
    id: "ra",
    name: "Ra",
    role: "Dio del Sole, Re degli Dei",
    tags: ["Sole", "Creazione", "Eliopoli", "Cosmico"],
    epithet: "Il Signore delle Due Terre, Colui che Sorge nell'Orizzonte",
    type: "Divinità",
    chips: ["Eliopolitano", "Cosmogonico", "Solare"],
    heroColor: "linear-gradient(160deg,#3d2000,#8b4a00,#c97b1a)",
    bio: {
      main: `Ra — dal semplice egizio rꜥ, «sole» — è la divinità più venerata del pantheon egizio e il principio cosmico che fonda tutta la teologia solare del Nilo. Il nome non è solo la designazione dell'astro: incarna la forza che genera, illumina e sostiene ogni essere. Dal punto di vista etimologico, alcuni studiosi collegano la radice al proto-semitico *raʿay («vedere», «risplendere»), sottolineando come per gli egizi la vista e la luce fossero una stessa potenza divina.

Genealogicamente Ra appartiene alla tradizione eliopolitana come divinità autogenerata: emerge dalle acque caotiche del Nun senza padre né madre, posandosi sulla collina primordiale di Benben — la prima terra emersa — e dando vita a Shu (l'aria) e Tefnut (l'umidità), prima coppia dell'Enneade. In questa cosmogonia Ra è il principio dal quale tutto discende: il suo atto creatore è la generazione stessa dell'ordine cosmico (Maat) a partire dal caos (Isfet).

La sua funzione cosmica è triplice e ciclica: all'alba è Khepri, lo scarabeo del sole nascente che spinge la sfera solare sull'orizzonte; a mezzogiorno è Ra nel pieno vigore, il re onnipotente del cielo; al tramonto è Atum, il creatore stanco che discende verso il Duat. Questa triplice identità non è contraddittoria ma esprime la natura continua e rinnovantesi del principio solare.

Iconograficamente Ra è rappresentato come uomo con testa di falco sormontata dal disco solare cinto dall'ureo — il cobra sacro che incenerisce i nemici con il suo alito di fuoco. La sua barca celeste Mandjet («la Barca dei Milioni di Anni») attraversa il cielo di giorno; la barca notturna Mesektet lo trasporta nel viaggio sotterraneo. I suoi animali sacri sono il falco pellegrino, il bue Mnevis di Eliopoli e lo scarabeo. I colori a lui associati sono l'oro solare e il rosso dell'orizzonte.`,

      sub1: "Il Viaggio Notturno e la Lotta contro Apophis",
      text1: `Il mito del viaggio notturno di Ra è uno dei racconti cosmologici più elaborati dell'antichità. Ogni sera Ra trasmigra sulla barca Mesektet e discende nel Duat, il mondo sotterraneo, dove deve affrontare dodici ore di pericolo crescente prima di rinascere all'alba. La fonte principale è il «Libro dell'Amduat» — «Di ciò che è nel Duat» — dipinto sulle pareti delle tombe reali nella Valle dei Re a partire dal regno di Thutmose I (ca. 1500 a.C.).

Nella sesta ora si compie il momento più misterioso della teologia egizia: Ra si fonde con il corpo mummificato di Osiride, il sole vivente si unisce al dio morto. Da questa unione entrambi traggono nuova vita — Ra riceve l'energia per rinascere, Osiride riceve il soffio solare che lo mantiene eternamente vivo nell'oltretomba.

La settima ora è la più pericolosa: la barca incontra Apophis (Apep), il serpente-drago gigantesco, incarnazione del caos primordiale (Isfet), anteriore alla creazione stessa. Apophis vuole fermare la barca per far precipitare l'universo nel non-essere. Seth — il dio del caos addomesticato al servizio dell'ordine — lo trafigge con una fiocina dalla prua; Mehen, il serpente benigno, avvolge Ra proteggendolo; Iside pronuncia incantesimi. Apophis viene sconfitto ma mai definitivamente ucciso: ogni mattina la vittoria deve essere riconquistata.

La resurrezione finale avviene nella dodicesima ora: Ra entra nel corpo di un enorme serpente e ne emerge trasformato in Khepri. Sale sull'orizzonte orientale portato da Shu, il dio dell'aria. Ogni mattina dell'Egitto era un miracolo rinnovato. (Libro dell'Amduat, Nuovo Regno, ca. 1500–1200 a.C.; trad. Erik Hornung, Zwei ramessidische Königsgräber, 1990.)`,

      sub2: "Il Nome Segreto di Ra e l'Astuzia di Iside",
      text2: `Tra i miti più celebri che vedono Ra protagonista spicca il racconto del suo nome segreto, conservato nel Papiro di Torino (cat. 1993, Nuovo Regno, ca. 1300 a.C.). Il mito esplora una concezione teologica fondamentale per gli egizi: il nome (ren) non è etichetta ma sostanza — conoscere il nome segreto di un essere equivale a possederne il potere.

Ra in vecchiaia cominciò a sbavare — la saliva del dio era portatrice di forza magica. Iside, «più astuta di un milione di dèi», raccolse la sua saliva e la mescolò con polvere di terra, modellando un serpente che pose sul cammino del dio. Il serpente morse Ra con un veleno che bruciava come fuoco. Tormentato da dolori cosmici, Ra fu costretto a chiedere aiuto. Iside si offrì di guarirlo, ma a una condizione: doveva rivelarle il suo vero nome segreto.

Ra tentò di eluderla con nomi illustri — «sono Khepri al mattino, Ra a mezzogiorno, Atum alla sera» — ma Iside non cedette. Alla fine Ra rivelò il nome al petto di Iside, vincolandola al silenzio eterno. La guarigione fu immediata. Iside aveva ottenuto il potere supremo: la conoscenza dell'essenza segreta di Ra. Il mito giustifica la posizione di Iside come Weret-Hekau («Grande di Magia») — più potente di qualsiasi altra divinità, incluso il creatore stesso. (Papiro di Torino 1993, XIX dinastia, trad. John Wilson in Ancient Near Eastern Texts, Princeton University Press, 1969.)`,

      sub3: "Il Mito dell'Occhio di Ra — L'Ira Solare",
      text3: `L'Occhio di Ra (Iry-Ra) è una delle concezioni teologiche più raffinate della religione egizia: non un semplice sguardo ma un'entità divina femminile autonoma, capace di separarsi dal dio e agire per conto suo. Le principali attestazioni sono nel «Libro della Vacca Celeste» (tombe di Seti I, Ramesse II, Tutankhamon, XIX-XX dinastia).

Nel mito della Distruzione dell'Umanità, Ra estrasse il suo Occhio dalla fronte e lo inviò sulla terra come Sekhmet per punire gli uomini ribelli. La dea-leonessa si abbandonò a un massacro così totale che Ra stesso dovette intervenire per fermarla — ingannandola con birra tinta di rosso scambiata per sangue, che la fece ubriacare e placò la sua furia.

L'Occhio di Ra ha anche un'altra, poetica storia: si era allontanato dal dio in Nubia, trasformato in leonessa. Senza di esso Ra era come un re senza corona. Thoth fu inviato a riportarlo indietro: attraverso canti, musica e parole sapienti convertì progressivamente la leonessa nella dolce Hathor. Quando l'Occhio tornò e vide Ra con un occhio sostitutivo, pianse così amaramente che dalle sue lacrime nacquero gli uomini.

Il mito dell'Occhio spiega il dualismo delle grandi dee feline egizie (Sekhmet/Hathor, Bastet/Tefnut): ogni ferocia contiene una dolcezza, ogni distruzione una possibilità di rigenerazione. (Libro della Vacca Celeste; trad. Erik Hornung, Conceptions of God in Ancient Egypt, Cornell University Press, 1982.)`,

      sub4: "Ra-Aton — L'Esperimento Monoteistico di Akhenaton",
      text4: `Il capitolo più singolare della storia di Ra è l'esperimento monoteistico del faraone Amenhotep IV, che cambiò il proprio nome in Akhenaton e regnò ca. 1353–1336 a.C. Proclamò Aton — il disco solare visibile, manifestazione puramente materica di Ra — unica divinità ammessa, abolendo di fatto il resto del pantheon.

La rottura fu radicale: il nome di Amon fu cancellato dai monumenti, i templi delle altre divinità chiusi, i sacerdozi smantellati. La nuova capitale Akhetaton (oggi Amarna) fu costruita da zero nel deserto come città sacra al dio unico. Il Grande Inno ad Aton — tradizionalmente attribuito allo stesso Akhenaton — è uno dei testi poetici più belli dell'antichità: «Come sei bello, raggiante nell'orizzonte dei cieli, o vivente Aton che ti sei levato per primo!».

Alla morte di Akhenaton il sistema crollò. Il giovane Tutankhaton cambiò nome in Tutankhamon, e la reazione sacerdotale di Amon fu violenta: le iscrizioni di Akhenaton furono cancellate, Amarna abbandonata, il «faraone eretico» dimenticato. Sigmund Freud in «Mosè e il monoteismo» (1939) ipotizzò che questa esperienza avesse influenzato il monoteismo ebraico attraverso la figura di Mosè. (Grande Inno ad Aton, ca. 1345 a.C., trad. Miriam Lichtheim, Ancient Egyptian Literature, vol. II, University of California Press, 1976.)`,

      sub5: "Amon-Ra e le Sincretizzazioni Solari",
      text5: `Nessuna divinità egizia è stata oggetto di tante sincretizzazioni quanto Ra. La sua natura — forza cosmica assoluta, principio solare universale — la rendeva capace di fondersi con quasi ogni altra divinità senza perdere la propria identità.

Ra-Horakhty («Ra-Horus dei Due Orizzonti») nasce nel Medio-Nuovo Regno dall'unione del principio solare con la regalità celeste di Horus: è il sole nel suo pieno vigore a mezzogiorno, la forma divina preferita da Ramesse II nei templi di Abu Simbel. Sobek-Ra unisce il coccodrillo del Nilo all'energia solare, diffusissimo nel Fayyum.

La più importante è Amon-Ra, nata con l'ascesa di Tebe: il «dio nascosto» della città tebana si unisce al principio solare universale creando la divinità suprema del Nuovo Regno. Nei grandi inni del papiro di Leida (XIX dinastia), Amon-Ra è presentato come il dio uno di cui tutte le altre divinità sono manifestazioni — una teologia monoteistica di fatto, ben prima di Akhenaton. (Papiro di Leida I-350, XIX dinastia, trad. Jan Zandee, De Hymnen aan Amon van Papyrus Leiden I-350, 1947.)`,
    },
    versions: [
      {
        era: "Antico Regno (2686–2181 a.C.)",
        name: "Atum-Ra di Eliopoli",
        text: "Nell'antica tradizione eliopolitana Ra si fonde con Atum, il creatore autogenerato. È il vertice dell'Enneade, padre di Shu e Tefnut, dai quali discendono tutti gli altri dèi. I Testi delle Piramidi lo celebrano come fonte della regalità divina.",
      },
      {
        era: "Medio Regno (2055–1650 a.C.)",
        name: "Ra-Horakhty",
        text: "Si verifica la fusione con Horus nella forma Ra-Horakhty — «Ra-Horus dei due orizzonti» — che rappresenta il sole nel suo pieno vigore a mezzogiorno. Questa sincresi lega il dio solare al concetto di regalità terrena.",
      },
      {
        era: "Nuovo Regno (1550–1069 a.C.)",
        name: "Amon-Ra",
        text: "Con l'ascesa di Tebe come capitale, Ra si sincretizza con Amon formando Amon-Ra, la divinità suprema del Nuovo Regno. Diventa il «re degli dèi» per eccellenza, onorato nei grandi templi di Karnak e Luxor.",
      },
      {
        era: "Periodo Amarna (1353–1336 a.C.)",
        name: "Aton",
        text: "Con il faraone Akhenaton Ra diventa Aton, il disco solare visibile, unica divinità ammessa in un esperimento monoteistico senza precedenti. L'esperienza finirà con la morte del faraone.",
      },
    ],
    cult: `Il centro principale del culto di Ra era Eliopoli — «la città del sole» per i greci, Iunu per gli egizi — nella zona del Cairo moderno. Qui sorgeva il grande tempio di Ra-Atum con l'obelisco sacro che rappresentava il raggio solare pietrificato, la pietra Benben.

Il culto solare influenzò profondamente tutta l'architettura egizia: gli obelischi, le piramidi (imitazioni della pietra Benben), i templi orientati secondo i movimenti del sole. I faraoni, a partire dalla IV dinastia, assumono il titolo di «Figlio di Ra» (Sa-Ra), legando inscindibilmente la monarchia terrena al culto solare.

Ra era onorato anche nei grandi complessi di Karnak (come Amon-Ra) e Abu Simbel, dove Ramesse II fece costruire il suo tempio in modo che due volte l'anno il sole illuminasse la statua del dio nel santuario più interno.`,
    influence: [
      {
        era: "Tradizione ellenistica",
        text: "I greci identificarono Ra con Apollo o con Helios. Il culto solare egizio influenzò il culto di Sol Invictus nell'Impero Romano, che ebbe grande diffusione nel III-IV secolo d.C.",
      },
      {
        era: "Monoteismo e Akhenaton",
        text: "L'esperimento monoteistico del faraone Akhenaton con il culto di Aton (una forma di Ra) è stato oggetto di intenso dibattito storico: Sigmund Freud ipotizzò che abbia influenzato il monoteismo ebraico attraverso Mosè.",
      },
      {
        era: "Simbolismo solare universale",
        text: "Il disco solare alato di Ra è uno dei simboli religiosi più diffusi al mondo, ripreso nell'iconografia assira, persiana, ittita e infine nel cristianesimo copto e nell'arte rinascimentale come emblema della divinità.",
      },
    ],
    texts: [
      {
        title: "La Litania di Ra",
        source: "Tomba di Thutmose III, ca. 1450 a.C.",
        text: "Salute a te, Ra, perfetto ogni giorno! Tu sorgi all'alba senza fermarti mai, Khepri che ti affanni nella fatica. I tuoi raggi sono sul volto senza che si conoscano. L'oro fuso non è paragonabile al tuo splendore.",
      },
      {
        title: "Il libro dei morti — Capitolo 15",
        source: "Nuovo Regno, ca. 1500 a.C.",
        text: "Lode a te, o Ra, quando ti levi all'orizzonte orientale del cielo. Tutti gli dèi si rallegrano al tuo apparire: essi ti acclamano quando tu emergi, tu che sei l'unico, che ti formi da te stesso senza essere nato.",
      },
    ],
  },

  {
    id: "osiride",
    name: "Osiride",
    role: "Dio dell'Oltretomba e della Resurrezione",
    tags: ["Oltretomba", "Resurrezione", "Giudice", "Agricoltura"],
    epithet: "Il Signore dell'Eternità, Il Primo degli Occidentali",
    type: "Divinità",
    chips: ["Enneade", "Funerario", "Abydos"],
    heroColor: "linear-gradient(160deg,#0a2010,#0d3818,#051208)",
    bio: {
      main: `Osiride — in egizio Wsjr, traslitterato anche Usir — è forse la divinità più amata e teologicamente ricca dell'intero pantheon egizio. L'etimologia del nome è dibattuta: una delle interpretazioni più accreditate lo riconduce a «il Possente» o «il Luogo degli Occhi», connettendo il nome alla sua funzione di giudice onniveggente dell'oltretomba. Nello scritto geroglifico il nome è spesso accompagnato dal simbolo del trono e dell'occhio, richiamando regalità e visione cosmica.

Genealogicamente Osiride è il primogenito di Geb (la terra) e Nut (il cielo), primo dei quattro grandi figli dell'Enneade eliopolitana insieme a Iside (sorella e sposa), Seth e Nefti. In quanto primogenito porta con sé il diritto assoluto alla regalità terrena: è il re degli dèi sulla terra prima che la sua morte lo trasformi nel re dei morti.

Nella sua forma primordiale Osiride è un re civilizzatore: il primo sovrano dell'Egitto, colui che insegnò agli uomini l'agricoltura, le leggi, il culto degli dèi. Questa funzione di civilizzatore lo collega alle divinità agrarie di molte culture — Dioniso greco, Tammuz mesopotamico, Attis frigio — con cui condivide anche la caratteristica della morte e resurrezione.

Iconograficamente Osiride è inconfondibile: uomo mummificato dalla pelle verde (simbolo di rinascita, come il verde del grano che emerge dal limo del Nilo) o nera (il limo fertile stesso). Porta la corona atef — copricapo bianco fiancheggiato da piume di struzzo — e impugna il pastorale (heqa) e il flagello (nekhakha), insegne regali che i faraoni ereditano da lui. Il numero sacro di Osiride è quattordici, i pezzi in cui il suo corpo fu smembrato.`,

      sub1: "Il Mito della Morte e della Resurrezione",
      text1: `Il mito più centrale della religione egizia ruota attorno all'assassinio di Osiride per mano del fratello Seth. Seth, divorato dall'invidia per il regno e il rispetto universale del fratello, organizzò una cospirazione con settantadue complici. Durante un banchetto presentò una magnifica cassa dorata, costruita segretamente sulle misure esatte di Osiride. Quando il re vi si distese, Seth la sigillò e la gettò nel Nilo.

La cassa derivò fino al Mediterraneo, approdando a Byblos in Fenicia, dove un albero di tamerice la inglobò crescendovi attorno. Il re di Byblos usò il tronco come colonna del palazzo reale. Iside, dopo lungo vagabondare, raggiunse Byblos, recuperò la colonna e riportò il corpo in Egitto.

Ma Seth, durante una battuta di caccia notturna, trovò il corpo e lo fece a pezzi — quattordici secondo Plutarco — disperdendoli lungo tutto il Nilo. Iside e Nefti li raccolsero navigando il fiume. Ne trovarono tredici: il fallo era stato inghiottito da un pesce. Iside ne modellò uno sostitutivo con argilla del Nilo. Anubi imbalsamò il corpo — prima mummificazione della storia. Iside si trasformò in nibbio e col battito delle ali rianimò il marito per una sola notte di resurrezione parziale, sufficiente per concepire Horus.

Osiride non poteva tornare tra i vivi avendo conosciuto la morte: divenne il sovrano del Duat, il signore eterno dei morti. (Fonti principali: Testi delle Piramidi, V-VI dinastia, ca. 2400-2200 a.C.; Plutarco, Su Iside e Osiride, trad. Jan Griffiths, University of Wales Press, 1970.)`,

      sub2: "Il Tribunale di Osiride e la Pesatura del Cuore",
      text2: `Divenuto re del Duat, Osiride presiede il tribunale che giudica le anime di tutti i defunti. La scena è descritta nella Formula 125 del Libro dei Morti (Nuovo Regno, ca. 1550-1070 a.C.) e rappresentata in migliaia di vignette funerarie, la più celebre delle quali si trova nel Papiro di Ani (XIX dinastia, ca. 1275 a.C., British Museum).

Osiride siede sul trono nella «Sala delle Due Verità» (Maati), avvolto nelle bende della mummia, con la doppia corona atef, il pastorale e il flagello. Attorno a lui siedono quarantadue giudici divini — uno per ogni provincia dell'Egitto — ciascuno specializzato nel valutare un tipo specifico di trasgressione morale.

Il defunto recita la Confessione Negativa, un lungo elenco di peccati che dichiara di non aver commesso: non ho ucciso, non ho rubato, non ho mentito, non ho falsificato pesi, non ho causato sofferenze. Poi Anubi pone il cuore del defunto su un piatto della bilancia e la piuma di Maat sull'altro. Se il cuore è «leggero come la piuma», Thoth registra il verdetto di innocenza e Osiride ammette l'anima nel Campo di Aaru. Se il cuore è più pesante, viene gettato ad Ammit, la Divoratrice, che lo annulla per sempre.

Il sistema giudiziario di Osiride è uno dei contributi più originali della civiltà egizia al pensiero morale dell'umanità: ogni individuo risponde personalmente delle proprie azioni davanti a un giudice divino imparziale.`,

      sub3: "Osiride e la Fertilità del Nilo",
      text3: `Prima ancora di essere il dio dell'oltretomba, Osiride era il dio della vegetazione e della fertilità del suolo nilotico. Il suo colore verde — la pelle color del grano, del limo, della vita che riemerge dopo la piena — rivela questa natura primordiale. I testi più antichi lo collegano esplicitamente al grano: è «il Signore del Grano», il principio che fa germogliare la terra dopo la morte apparente dell'inverno.

Il ciclo del Nilo era interpretato come il ciclo del corpo di Osiride: la piena estiva portava il limo fertile come il sangue e le carni del dio disperse nel fiume; il ritiro delle acque rivelava la terra nera (Kemet, «la terra nera», nome egizio dell'Egitto) come il suo corpo ricomposto; la germogliazione dei cereali era la resurrezione del dio nella vegetazione.

Riti concreti esprimevano questa teologia: si modellavano «letti di Osiride» — strutture di argilla a forma del dio — su cui venivano seminati semi di grano o orzo. La germinazione nei giorni successivi simboleggiava e ritualmente produceva la resurrezione del dio. James George Frazer nel «Ramo d'Oro» (1890) fece di Osiride il prototipo dell'archetipo universale del «dio morente e risorgente», parallelo a Tammuz mesopotamico, Adone greco-fenicio, Attis frigio, Dioniso greco. (Testi delle Piramidi, Utterance 532; trad. Raymond Faulkner, The Ancient Egyptian Pyramid Texts, Oxford University Press, 1969.)`,

      sub4: "Osiride e l'Invenzione della Mummificazione",
      text4: `Il mito di Osiride è il fondamento mitologico di tutta la pratica funeraria egizia. La mummificazione — procedura tecnica sofisticatissima sviluppata dagli egizi nel corso di millenni — è una riesecuzione rituale di ciò che Anubi e Iside compirono sul corpo di Osiride.

Il sacerdote capo che officiava la mummificazione indossava la maschera di Anubi, diventando ritualmente il dio stesso. Le quattro bandagiatrici che avvolgevano le membra erano Iside, Nefti, Neith e Selkis — le quattro dee protettrici. I quattro vasi canopi che contenevano gli organi erano sorvegliati dai quattro figli di Horus.

«Questo corpo è Osiride» — la formula scritta nelle tombe del Medio e Nuovo Regno — esprime la concezione fondamentale: ogni egizio morto veniva identificato con Osiride, ogni mummia era Osiride. La resurrezione personale era possibile perché il dio aveva mostrato che la morte non è definitiva. La civiltà egizia fu, in grandissima misura, una civiltà organizzata attorno alla cura dei morti — e questa organizzazione aveva il suo fondamento nel mito di Osiride. (Testi delle Piramidi, Utterances 437-441; trad. James Allen, The Ancient Egyptian Pyramid Texts, Society of Biblical Literature, 2005.)`,
    },
    versions: [
      {
        era: "V Dinastia (ca. 2400 a.C.) — Testi delle Piramidi",
        name: "Primi accenni",
        text: "Le prime menzioni di Osiride compaiono nei Testi delle Piramidi. Inizialmente è associato al faraone defunto che, rinato, si identifica con Osiride, mentre il faraone vivente incarna Horus.",
      },
      {
        era: "Medio Regno (2055–1650 a.C.) — Testi dei Sarcofagi",
        name: "Democratizzazione del mito",
        text: "Il mito osiriaco si estende progressivamente: non più solo il faraone, ma ogni uomo giusto può diventare «un Osiride» dopo la morte. È una rivoluzione teologica che porterà al culto funerario popolare.",
      },
      {
        era: "Nuovo Regno — Libro dei Morti",
        name: "Il giudice supremo",
        text: "Osiride assume il ruolo di giudice supremo dell'oltretomba. Seduto sul trono nella Sala delle Due Verità, presiede la pesatura del cuore — momento decisivo del giudizio divino.",
      },
      {
        era: "Epoca tolemaica e romana",
        name: "Serapide",
        text: "Sotto la dinastia tolemaica Osiride viene fuso con Apis per formare Serapide — una divinità ibrida greco-egizia che si diffonderà in tutto il Mediterraneo. Il suo culto sopravviverà fino al VI secolo d.C.",
      },
    ],
    cult: `Il centro principale del culto di Osiride era Abydos, nell'Alto Egitto, dove secondo la tradizione era sepolta la sua testa. Il grande tempio di Seti I ad Abydos ospitava annualmente i Misteri di Osiride — rappresentazioni sacre della sua morte e resurrezione, che duravano diversi giorni e attiravano pellegrini da tutto l'Egitto.

Altri centri importanti erano Busiris nel Delta (sua città natale secondo il mito) e Philae in epoca tarda. Il suo simbolo principale era il pilastro djed, emblema della stabilità e dell'eterno rinnovamento.

Ogni anno, durante la piena del Nilo, venivano celebrati riti in suo onore: si modellavano letti di argilla a forma del dio, si seminavano sopra granaglie, e la germinazione rappresentava la sua resurrezione.`,
    influence: [
      {
        era: "Cristianesimo e religioni misteriche",
        text: "Molti studiosi hanno notato parallelismi tra il mito osiriaco — morte, resurrezione, giudizio delle anime, dio incarnato in un re salvatore — e la teologia cristiana. I misteri di Osiride-Serapide furono i principali rivali del cristianesimo nascente nell'Impero Romano.",
      },
      {
        era: "Dioniso greco",
        text: "Già Erodoto identificava Osiride con Dioniso: entrambi sono dèi morenti e rinascenti, legati alla vegetazione, al vino, all'estasi rituale. Plutarco nel suo «Su Iside e Osiride» esplora esplicitamente questi paralleli.",
      },
      {
        era: "Archetipo del dio morente e risorgente",
        text: "James George Frazer ne «Il ramo d'oro» (1890) identifica Osiride come il prototipo dell'archetipo universale del «dio morente e risorgente»: Tammuz mesopotamico, Adone greco, Attis frigio, Balder norreno.",
      },
      {
        era: "Esoterismo e massoneria",
        text: "Il mito di Osiride è entrato nell'immaginario massonico e rosacroce come simbolo dell'iniziazione e della rinascita spirituale. Mozart nel «Flauto Magico» fa riferimenti espliciti al culto di Iside e Osiride.",
      },
    ],
    texts: [
      {
        title: "Il Grande Inno a Osiride",
        source: "Stele di Amenmose, XVIII dinastia, ca. 1400 a.C. — Louvre",
        text: "Lode a te, Osiride, signore dell'eternità, re degli dèi, dai molti nomi, dalle manifestazioni sacre, dalle forme misteriose nei templi. Sei il maggiore dei fratelli, il primogenito dell'Enneade, colui che fa scorrere il Nilo, che crea i cereali.",
      },
      {
        title: "Libro dei Morti — Formula 185",
        source: "Nuovo Regno, ca. 1500 a.C.",
        text: "Salute a te, Osiride, signore dell'eternità, re degli dèi, tu che hai molti nomi, santo di manifestazioni, segreto di forme nei templi. A te appartiene il cielo, a te la terra, a te il Duat, a te il Campo dei Giunchi.",
      },
    ],
  },

  {
    id: "iside",
    name: "Iside",
    role: "Grande Maga, Madre Divina",
    tags: ["Magia", "Maternità", "Protezione", "Trono"],
    epithet: "La Grande Maga, Madre degli Dei, Signora del Trono",
    type: "Divinità",
    chips: ["Enneade", "Magia", "Philae"],
    heroColor: "linear-gradient(160deg,#1a0820,#2d1038,#0a0412)",
    bio: {
      main: `Iside — in egizio Aset o Iset, «il trono» — è la dea più complessa, amata e influente del pantheon egizio, e una delle figure divine più potenti dell'intera storia delle religioni. Il suo nome geroglifico — una donna con un trono sulla testa — rivela l'essenza: Iside è il trono stesso, il principio che legittima la regalità. Chi siede sul «grembo di Iside» diventa re: ogni faraone è un Horus sul trono di Iside.

Genealogicamente è figlia di Geb (la terra) e Nut (il cielo), sorella di Osiride (di cui è anche sposa), di Seth e di Nefti. La sua unione con il fratello Osiride era conforme al costume divino egizio, e da essa nacque Horus il Giovane — il figlio postumo concepito sulla mummia del marito, il vendicatore del padre.

Iside non ha una funzione cosmica unica: è la complessità stessa divinizzata. È moglie devota che recupera le membra sparse del marito; madre coraggiosa che protegge il figlio nelle paludi del Delta; Grande Maga (Weret-Hekau) che conosce le parole segrete capaci di muovere cielo e terra; regina degli dèi capace di ingannare Ra stesso. La sua heka — forza magica — non è oscurità ma sapienza arcana, conoscenza delle formule che legano e sciolgono il cosmo.

Iconograficamente appare in molte forme: donna con il trono sul capo; donna con il disco solare tra corna bovine (dopo la sincresi con Hathor); donna dalle ali spiegate sulle spalle, stese a proteggere i defunti. Il suo animale sacro è il nibbio, nella cui forma si posò sul corpo di Osiride per concepire Horus. Il suo colore è il blu lapislazzuli e il verde della vegetazione.`,

      sub1: "La Ricerca delle Membra di Osiride",
      text1: `La cerca delle membra di Osiride è il nucleo narrativo più antico e commovente del mito isiaco. Quando Seth smembrò il corpo del fratello disperso nel Nilo, Iside non cedette alla disperazione: si trasformò in nibbio e partì per un viaggio che avrebbe toccato ogni angolo dell'Egitto e persino la Fenicia.

A Byblos si celò tra le ancelle della regina, lavorando come nutrice del principe reale. Di notte cercava di immortalizzarlo avvolgendolo nel fuoco magico. Quando la regina la scoprì e gridò di terrore, Iside si rivelò come dea, reclamò la colonna che nascondeva la cassa con il corpo di Osiride e la portò in Egitto.

Seth, cacciando sotto la luna piena, trovò il cadavere e lo fece a pezzi — quattordici frammenti. Iside riprese il viaggio su una barca di papiro insieme a Nefti e raccolse tredici pezzi. Il quattordicesimo — il fallo — era stato inghiottito da un pesce. Iside ne modellò uno sostitutivo in oro. La ricomposizione del corpo fu opera di Anubi, che officiò la prima mummificazione della storia. Poi Iside si posò sul marito nella forma di nibbio e lo rianimò col battito delle ali per quella notte miracolosa, in cui concepì Horus. (Grande Inno a Osiride, Stele di Amenmose, XVIII dinastia, trad. Miriam Lichtheim, Ancient Egyptian Literature, vol. II, 1976.)`,

      sub2: "Il Nome Segreto di Ra — Il Potere della Maga",
      text2: `Il mito del nome segreto di Ra è il testo che più di ogni altro definisce Iside come Grande Maga suprema tra tutti gli dèi. È conservato nel Papiro di Torino (cat. 1993, XIX dinastia, ca. 1300 a.C.) e nel Papiro Chester Beatty XI.

Il racconto comincia con Ra in tarda età: la sua saliva cade, e Iside — «che era più astuta di un milione di dèi» — raccoglie la saliva del vecchio dio, la mescola con la polvere della terra e ne plasma un serpente. Lo pone sul sentiero percorso da Ra. Il serpente morde il dio con un veleno che brucia come fuoco. Nessun dio sa curarlo.

Iside si offrì, ma chiese come compenso il nome segreto — il ren nascosto, l'essenza vera di Ra, il fondamento del suo potere cosmico. Ra tentò di eluderla con nomi illustri: «Sono Khepri al mattino, Ra a mezzogiorno, Atum alla sera». Iside scosse la testa. Il dolore rese il dio cedente. Trasmise il nome segreto attraverso il corpo nel petto di Iside, vincolandola al silenzio eterno. Il veleno cessò. Iside aveva ottenuto il potere supremo — più potente di qualsiasi altra divinità, incluso il creatore stesso.`,

      sub3: "Iside nelle Paludi — Protezione di Horus Bambino",
      text3: `Dopo la nascita di Horus, Iside si trovò sola nel Delta del Nilo con un figlio divino da proteggere da Seth. Si rifugiò nelle paludi di Chemmis, luogo selvaggio e inaccessibile, dove l'alleanza di Selkis (dea degli scorpioni) e di Nefti garantiva una protezione soprannaturale.

Gli episodi dei pericoli affrontati da Horus bambino — morso dagli scorpioni, febbri, attacchi di serpenti — si cristallizzarono in un vasto corpus di formule magiche usate per tutta la storia egizia come protezione per i bambini. Il principio era quello dell'analogia magica: ciò che aveva curato il figlio di un dio poteva curare il figlio di un uomo.

«Non temere, non temere, figlio glorioso Horus. Io sono qui, tua madre, che ti protegge. Nessun male ti colpirà» — la formula recitata da Iside diventa il modello di ogni invocazione materna per la guarigione di un figlio. In questo mito Iside non è più solo dea cosmica: è la madre umana per antonomasia, vulnerabile nell'amore e potente nella disperazione. La Stele di Metternich (ca. 360 a.C., Metropolitan Museum) raccoglie queste formule: l'acqua versata sulla stele assorbiva il potere dei testi e veniva bevuta come medicina.`,

      sub4: "Iside Universale — Dal Nilo al Mediterraneo",
      text4: `Nessun'altra divinità egizia compì un viaggio culturale pari a quello di Iside. In epoca tolemaica (305-30 a.C.) i sovrani macedoni di Egitto promossero il suo culto come ponte tra tradizioni egizie e greche: Iside era equiparata a Demetra, Afrodite, Era, Selene.

Una serie di «aretalogiai» — inni in prima persona in cui la dea elenca i propri titoli e poteri — mostra la trasformazione: «Io sono Iside, la signora di ogni terra; io sono la madre di tutte le cose; io sono stata la prima a insegnare agli uomini a macinare il grano». Ad Apuleio (II sec. d.C.) nelle «Metamorfosi» Iside appare come «la madre di tutte le cose, la signora degli elementi, la progenie prima dei secoli», e guida il protagonista Lucio attraverso un'iniziazione ai suoi misteri.

Il culto isiaco sopravvisse al trionfo del cristianesimo: il tempio di Philae, nel suo cuore, fu il luogo in cui i riti a Iside e Osiride continuarono fino al VI secolo d.C., quando l'imperatore Giustiniano lo fece chiudere. (Apuleio, Metamorfosi, XI.5, II sec. d.C., trad. Luca Canali, Mondadori, 1990.)`,
    },
    versions: [
      {
        era: "Antico Regno — La sposa fedele",
        name: "Iside delle origini",
        text: "Nei Testi delle Piramidi Iside appare come sposa devota che piange Osiride e lo ricompone. La sua magia è già al centro del mito: è lei a dare respiro nuovo al marito morto.",
      },
      {
        era: "Medio e Nuovo Regno",
        name: "La Grande Maga",
        text: "Iside assume progressivamente il ruolo di maga suprema. Nel mito «Iside e il nome segreto di Ra» — conservato sul Papiro di Torino — inganna il vecchio dio sole per conoscerne il nome segreto, acquisendo così potere supremo sugli dèi.",
      },
      {
        era: "Epoca tolemaica (305–30 a.C.)",
        name: "Iside universale",
        text: "Con i Tolomei Iside diventa una divinità universale, equiparata a tutte le grandi dee del Mediterraneo. Il suo culto si diffonde in Grecia, Italia, Gallia, Germania, fino alla Britannia romana.",
      },
      {
        era: "Periodo romano",
        name: "La dea dalle diecimila forme",
        text: "Apuleio nel «Metamorfosi» (II sec. d.C.) fa dire a Iside di essere «la madre di tutte le cose, signora degli elementi, progenie prima dei secoli». La dea si presenta come incarnazione di tutte le divinità femminili.",
      },
    ],
    cult: `Il centro più importante del culto di Iside in epoca tarda fu il tempio di Philae, nell'Alto Egitto, vicino alla prima cataratta del Nilo. Fondato in epoca tolemaica e ampliato dai romani, fu uno degli ultimi baluardi del paganesimo: il suo culto continuò fino al VI secolo d.C., quando l'imperatore Giustiniano lo chiuse.

Il culto di Iside si diffuse massicciamente nel mondo greco-romano dal III secolo a.C. Templi isiaci (Iseum) sorsero a Delo, Pompei, Roma — dove il grande Iseum Campense era uno dei templi più importanti della capitale imperiale. I devoti praticavano riti di iniziazione segreti, digiuni e processioni, e indossavano vesti di lino bianco.

Il simbolo principale di Iside è il nodo di Iside (tyet), un amuleto funerario legato alla protezione nella vita eterna. Era associata anche al sistro — strumento musicale sacro che accompagnava le cerimonie.`,
    influence: [
      {
        era: "Culto mariano cristiano",
        text: "L'iconografia di Iside che allatta il piccolo Horus (Iside lactans) è stata quasi certamente uno dei modelli visivi delle prime rappresentazioni della Madonna con il Bambino nel cristianesimo primitivo, soprattutto in Egitto copto.",
      },
      {
        era: "Lucio Apuleio — Metamorfosi",
        text: "Nel libro XI delle Metamorfosi (II sec. d.C.), Apuleio descrive un'iniziazione ai misteri di Iside che è uno dei testi fondamentali per la comprensione delle religioni misteriche antiche.",
      },
      {
        era: "Esoterismo moderno",
        text: "Iside è diventata una figura centrale dell'esoterismo occidentale moderno: Helena Petrovna Blavatsky scrisse «Iside svelata» (1877), fondando la Società Teosofica. È presente nell'ermetismo rinascimentale, nella massoneria, nel neopaganesimo contemporaneo.",
      },
      {
        era: "Mozart e «Il Flauto Magico»",
        text: "L'opera di Mozart del 1791 è saturata di riferimenti ai misteri isiaci, filtrati attraverso la massoneria. L'aria «O Isis und Osiris» di Sarastro è una preghiera esplicita alla coppia divina egizia.",
      },
    ],
    texts: [
      {
        title: "Inno a Iside di Philae",
        source: "Iscrizione nel tempio di Philae, epoca tolemaica",
        text: "Io sono colei che è stata, che è, che sarà, e nessun mortale ha mai sollevato il mio velo. Io ho dato alla luce il sole. Il frutto che ho partorito è il sole.",
      },
      {
        title: "Iside e il nome segreto di Ra",
        source: "Papiro di Torino, Nuovo Regno",
        text: "Iside era una donna saggia. Il suo cuore era più astuto di un milione di uomini, più sagace di un milione di dèi. Niente le era ignoto in cielo o sulla terra.",
      },
      {
        title: "Lamento di Iside per Osiride",
        source: "Papiro Bremner-Rhind, IV secolo a.C.",
        text: "Vieni alla tua casa, vieni alla tua casa! Oh tu dei pilastri, vieni alla tua casa! Il tuo amore è con me, non abbandonarmi. Bel giovane, vieni alla tua casa subito! Non ti vedo, ma il mio cuore ti desidera.",
      },
    ],
  },

  {
    id: "horus",
    name: "Horus",
    role: "Dio del Cielo, Signore della Regalità",
    tags: ["Cielo", "Falco", "Faraone", "Guerra"],
    epithet: "Il Lontano, Colui che sta in Alto, Figlio di Iside",
    type: "Divinità",
    chips: ["Enneade", "Regale", "Edfu"],
    heroColor: "linear-gradient(160deg,#1a1500,#3a2e00,#121000)",
    bio: {
      main: `Horus — in egizio Hor o Heru, «il lontano» o «colui che sta in alto» — è una delle divinità più antiche e stratificate del pantheon egizio. Le sue origini risalgono al periodo predinastico: era già il dio tutelare dei sovrani di Nekhen (Ieracompoli) prima dell'unificazione dell'Egitto ca. 3100 a.C. Il nome fa riferimento al falco in volo altissimo — il rapace che domina il cielo dall'alto, inaccessibile e onniveggente.

In realtà esistono diversi Horus distinti, progressivamente fusi nella tradizione: Haroeris («Horus il Grande»), figlio di Geb e Nut, fratello di Osiride; Hor-pa-khered («Horus il Bambino», greco Arpocrate), figlio di Osiride e Iside; Ra-Horakhty («Ra-Horus dei Due Orizzonti»), fusione solare; Behedety, il falco alato di Edfu. È la versione figlio di Osiride e Iside a dominare nel mito osiriaco e nell'ideologia regale.

Iconograficamente Horus è riconoscibile come falco o come uomo con testa di falco, spesso con la doppia corona pschent dell'Alto e Basso Egitto, a indicare la sua regalità sull'Egitto unificato. Il suo simbolo principale è l'Occhio di Horus (Udjat, «l'occhio sano»), potentissimo amuleto di protezione, guarigione e visione cosmica. Il numero sacro di Horus è due: i due occhi (sole e luna), le due terre, le due corone.`,

      sub1: "Horus e Seth — La Disputa per il Trono",
      text1: `La lotta tra Horus e Seth per il trono d'Egitto è il mito politico-teologico più importante del pensiero egizio — narrato in forma satirica e drammatica nel Papiro Chester Beatty I (XIX dinastia, ca. 1160 a.C.). Il contenzioso durava ottant'anni, durante i quali l'Enneade si divise tra i sostenitori di Horus (il diritto ereditario) e quelli di Seth (la forza militare).

Horus argomentava con la logica: «Sono il figlio di Osiride. Il trono spetta al figlio del re defunto. Questo è il principio universale». Seth rispondeva con la pratica: «Io sono il più forte. Io uccido Apophis ogni notte dalla prua della barca di Ra. Senza di me il sole non sorge». Ra, vecchio e stanco, tendeva a preferire Seth per la sua utilità bellica.

L'Enneade cercò arbitri: Neith di Sais decise immediatamente per Horus ma non fu ascoltata. La vertenza si trasformò in una serie di prove fisiche, inganni e colpi di scena — Horus e Seth si trasformavano in ippopotami, si sfidavano in gare nautiche, si coinvolgevano in episodi di violenza e umiliazione reciproca — finché Osiride stesso, dall'oltretomba, inviò una lettera di minaccia: «Se mio figlio non ottiene giustizia, scatenerò i demoni del Duat». L'Enneade cedette. Horus fu dichiarato re. (Papiro Chester Beatty I, trad. Alan Gardiner, The Library of A. Chester Beatty, Oxford University Press, 1931.)`,

      sub2: "L'Occhio di Horus — Il Simbolo Perduto e Ritrovato",
      text2: `Durante la lotta cosmica con Seth, Horus perse il suo occhio sinistro — quello lunare — strappato dal fratello nella furia del combattimento. La perdita non era un semplice danno fisico: era la sottrazione di una parte del cosmo, perché l'Occhio di Horus era il simbolo della pienezza, dell'integrità, della visione perfetta.

Seth fece a pezzi l'occhio e lo disperse. Thoth si incaricò del recupero e della ricomposizione dei frammenti — un'operazione di «chirurgia cosmica» che riunì le parti dell'occhio in un tutto integro: l'Udjat, l'«occhio sano» per eccellenza.

Horus donò l'occhio ritrovato a suo padre Osiride nel Duat: grazie a questo dono, Osiride poteva «vedere» — mantenere coscienza e vita nell'oltretomba. Il gesto di offrire l'Udjat divenne il gesto rituale per eccellenza nelle offerte funebri. L'Occhio di Horus nella sua struttura matematica — frazioni geroglifiche che sommate danno 63/64 — era usato nelle misure dei cereali e dei liquidi: la lacuna di 1/64 era colmata dalla magia di Thoth. (Testi delle Piramidi, Utterance 17; trad. Raymond Faulkner, 1969.)`,

      sub3: "Horus di Edfu — Il Difensore Cosmico",
      text3: `Nel grande tempio di Edfu — costruito in epoca tolemaica (237–57 a.C.) su fondamenta molto più antiche — Horus è venerato come Hor-Behedety, «Horus di Behdet», il falco alato del disco solare. Le pareti del tempio narrano un ciclo mitico diverso dalla versione osiriaca: la lotta di Horus contro le forze del caos rappresentate come «nemici di Ra».

In questo ciclo Horus non è il figlio che vendica il padre, ma il difensore cosmico per eccellenza, il campione di Ra contro le forze del non-essere. Armato di una fiocina d'oro, naviga il Nilo sconfiggendo orde di nemici trasformati in coccodrilli e ippopotami.

Il «Dramma sacro di Edfu» — rappresentato ogni anno davanti al popolo — rieseguiva ritualmente questa lotta. Gli spettatori gettavano nell'acqua figurine di coccodrilli e ippopotami di cera, che venivano solennemente distrutte. Il faraone, impersonando Horus, trafigge il coccodrillo-Seth con la lancia: è la vittoria eterna dell'ordine sul caos, del governo legittimo sulla violenza, riconfermata anno dopo anno.`,

      sub4: "Arpocrate — Horus come Dio del Silenzio",
      text4: `In epoca tolemaico-romana Horus bambino (Hor-pa-khered) assunse una fortuna iconografica del tutto autonoma. Nella forma greca Arpocrate, il dio era rappresentato come un bambino nudo con un dito portato alla bocca. I greci interpretarono quel gesto infantile del succhiare come segno del silenzio: Arpocrate divenne il «dio del silenzio» — il silenzio iniziatico, il silenzio davanti ai misteri.

Le «Stele di Horus sui Coccodrilli» — rilievi che mostrano il bambino-Horus che calpesta coccodrilli e stringe serpenti — erano amuleti terapeutici diffusissimi. L'acqua versata sulla stele assorbiva il potere magico e veniva bevuta come rimedio contro i veleni. Migliaia di queste stele sono state trovate in tutto il Mediterraneo.

Il culto di Arpocrate sopravvisse a lungo nel mondo romano: statuette del bambino-dio con il dito alla bocca erano oggetti devozionali comuni nelle case private, accanto ai Lari e ai Penati.`,
    },
    versions: [
      {
        era: "Periodo predinastico (prima del 3100 a.C.)",
        name: "Horus di Nekhen",
        text: "Horus è già attestato a Nekhen come divinità tutelare dei sovrani. Il suo culto si radica nella regalità fin dall'origine della civiltà egizia, prima ancora che esistesse un pantheon sistematizzato.",
      },
      {
        era: "Prima e Seconda Dinastia (3100–2686 a.C.)",
        name: "Horus-faraone",
        text: "Il faraone viene identificato come incarnazione vivente di Horus. Il «nome di Horus» è il primo dei cinque nomi regali. Durante la II dinastia con il faraone Peribsen si verifica un breve scisma, con l'affermazione di Seth come dio regale.",
      },
      {
        era: "Antico Regno — Horus di Edfu",
        name: "Il difensore cosmico",
        text: "Nel grande tempio di Edfu Horus è venerato come Hor-Behedety, il disco solare alato. Il mito della sua lotta contro Seth viene rappresentato ogni anno nel «Dramma sacro di Edfu».",
      },
      {
        era: "Horus il Bambino (Hor-pa-khered)",
        name: "Arpocrate",
        text: "Come figlio di Iside, Horus è venerato sotto forma di bambino. In epoca tolemaico-romana il culto di Arpocrate si diffonde in tutto il Mediterraneo come dio della protezione dei bambini e del silenzio.",
      },
    ],
    cult: `Il tempio principale di Horus è quello di Edfu — uno dei templi meglio conservati di tutto l'Egitto, costruito in epoca tolemaica (237–57 a.C.) sulle fondamenta di strutture molto più antiche. Le sue pareti raccontano per intero il mito della lotta cosmica tra Horus e Seth.

Un altro importante centro era Nekhen (Ieracompoli), nell'Alto Egitto, dove Horus era adorato come patrono dei faraoni arcaici. Al tempio di Kom Ombo Horus era venerato insieme a Sobek, il dio coccodrillo.

L'Occhio di Horus (Udjat) era uno degli amuleti più potenti: rappresentato in oro, lapislazzuli o fayence, veniva posto sui corpi mummificati per garantire protezione.`,
    influence: [
      {
        era: "La regalità divina",
        text: "Il concetto egizio che il re sia l'incarnazione vivente di Horus ha influenzato l'ideologia regale di molte culture successive. L'«unzione» del faraone come Horus ha paralleli con i rituali di consacrazione dei re medievali europei.",
      },
      {
        era: "Apollo e il falco sacro",
        text: "I greci identificarono Horus con Apollo per la sua natura solare e oracolare. In epoca tolemaica questa sincresi si formalizza: il falco Horus è l'equivalente dell'uccello sacro di Apollo.",
      },
      {
        era: "L'Occhio di Providenza",
        text: "L'Occhio di Horus è considerato uno degli antenati simbolici dell'«Occhio che tutto vede» presente sul dollaro americano e in iconografia massonica — anche se la derivazione diretta è dibattuta dagli storici.",
      },
      {
        era: "Simbolismo farmaceutico",
        text: "Il simbolo «℞» usato nelle prescrizioni mediche potrebbe derivare dall'Occhio di Horus, usato nella medicina egizia come simbolo di guarigione e interezza.",
      },
    ],
    texts: [
      {
        title: "Le contese di Horus e Seth",
        source: "Papiro Chester Beatty I, Nuovo Regno ca. 1160 a.C.",
        text: "Allora il giovane Horus parlò davanti all'Enneade: «È una vergogna che io, figlio di Osiride, sia mantenuto qui da ottanta anni senza giudizio, mentre mio zio Seth occupa il trono che mi spetta di diritto».",
      },
      {
        title: "Incantesimo di protezione per Horus bambino",
        source: "Stele di Metternich, epoca tarda, ca. 360 a.C.",
        text: "Iside disse: «Non temere, non temere, figlio glorioso Horus. Io sono qui, tua madre, che ti protegge. Nessun male ti colpirà, nessuna disgrazia che affligge ti sfiorerà. Il veleno ardente non avrà potere su di te».",
      },
    ],
  },

  {
    id: "seth",
    name: "Seth",
    role: "Dio del Caos, del Deserto e delle Tempeste",
    tags: ["Caos", "Deserto", "Tempeste", "Violenza"],
    epithet: "Il Turbolento, Signore del Deserto Rosso",
    type: "Divinità",
    chips: ["Enneade", "Caotico", "Ombos"],
    heroColor: "linear-gradient(160deg,#2a0a00,#4a1500,#1a0600)",
    bio: {
      main: `Seth — in egizio Sutekh, Setekh o semplicemente Set — è la divinità più ambivalente del pantheon egizio, e uno dei casi più studiati nella storia delle religioni di un principio cosmico che non è semplicemente «il male» ma qualcosa di più perturbante: il necessario. Il suo nome è di etimologia incerta; una delle derivazioni più accreditate lo connette alla radice sṯj («abbattere», «turbare»), altri a sth («cielo tempestoso»).

Genealogicamente Seth è il quarto figlio di Geb (la terra) e Nut (il cielo), fratello di Osiride, Iside e Nefti — di quest'ultima anche marito, in un'unione che riflette la polarità tra casa (Nefti) e deserto (Seth). È il dio del deserto arido (la «terra rossa», Deshret, contrapposta alla «terra nera» fertile, Kemet), delle tempeste di sabbia, dei venti violenti, degli stranieri.

La sua funzione cosmica è duplice e inscindibile: da un lato è il fratricida, l'usurpatore, il principe del caos (Isfet); dall'altro è l'unico dio abbastanza potente e brutale da difendere la barca solare di Ra dal serpente Apophis ogni notte. Senza Seth, la luce non sorgerebbe. Il caos addomesticato è difensore dell'ordine.

Iconograficamente Seth presenta la caratteristica più enigmatica del pantheon egizio: il suo «animale di Seth» — dalla testa allungata con muso appuntito, orecchie quadrate in cima, coda biforcuta — non corrisponde ad alcun animale reale identificabile con certezza. Ipotesi includono l'oritteropo, l'okapi stilizzato, una creatura completamente fantastica. I colori sacri sono il rosso e l'ocra del deserto.`,

      sub1: "Il Fratricidio — L'Assassinio di Osiride",
      text1: `L'assassinio di Osiride da parte di Seth è l'atto fondante del mito più importante della religione egizia. Seth era divorato dall'invidia per il fratello — amato dagli dèi, rispettato dagli uomini, sposo della potentissima Iside — e decise di eliminarlo con uno stratagemma.

Nella versione plutarchea (Su Iside e Osiride, cap. 13-15), Seth organizzò un banchetto al quale invitò settantadue complici. Aveva fatto costruire in segreto una cassa magnificamente decorata, sulle misure esatte del corpo di Osiride. Durante il convito la presentò come un dono per chiunque vi si fosse adattato perfettamente. Quando Osiride vi si distese, Seth e i complici lo chiusero ermeticamente, sigillarono il coperchio con piombo fuso, e gettarono la cassa nel Nilo.

La violenza dell'atto era cosmologicamente deliberata: Seth non si limitò ad uccidere il fratello, ma ne smembrò il cadavere in quattordici parti disperse lungo il fiume. Lo smembramento del corpo divino rappresenta il tentativo di rendere impossibile la resurrezione — senza integrità fisica, la vita nell'aldilà era preclusa. Fu precisamente contro questo tentativo che la magia di Iside e Anubi si esercitò nella prima mummificazione.

L'omicidio di Osiride non è un puro atto malvagio: è il motore che mette in moto l'intero ciclo cosmogonico della morte e resurrezione. (Plutarco, Su Iside e Osiride, trad. Jan Griffiths, University of Wales Press, 1970.)`,

      sub2: "Seth Difensore — La Lotta contro Apophis",
      text2: `La dimensione più sorprendente di Seth — e quella che rende impossibile una sua semplice demonizzazione — è il ruolo di difensore della barca solare contro il serpente Apophis. Ogni notte, durante il viaggio di Ra nel Duat, Seth sta alla prua della barca Mesektet armato di una fiocina d'oro, e quando la barca raggiunge la settima ora — la più pericolosa — è lui a trafiggere il corpo colossale di Apophis.

Apophis non è una creatura come le altre: è l'incarnazione del non-essere, del caos primordiale anteriore alla creazione. Non può essere ucciso definitivamente — può solo essere sconfitto temporaneamente. E Seth è l'unico dio abbastanza violento e brutale da affrontarlo senza esitazione, notte dopo notte, per tutta l'eternità.

La tensione teologica è evidente: lo stesso dio che ha introdotto il caos uccidendo Osiride è il guardiano dell'ordine cosmico contro la minaccia del caos assoluto. I sacerdoti di Ra, nei loro rituali notturni, recitavano formule per potenziare Seth nella sua lotta; contemporaneamente, nei templi di Osiride, maledicevano Seth il fratricida. Durante la XIX e XX dinastia — il periodo dei faraoni ramesside, i cui nomi derivano da Seth — questa funzione difensiva era particolarmente valorizzata. (Libro dell'Amduat, Settima Ora; trad. Erik Hornung, The Ancient Egyptian Books of the Afterlife, Cornell University Press, 1999.)`,

      sub3: "La Demonizzazione in Epoca Tarda",
      text3: `La figura di Seth subisce una radicale trasformazione nel corso del Primo Millennio a.C. Da divinità ambivalente ma necessaria, diventa progressivamente la personificazione assoluta del male — un processo che culmina nell'epoca tarda e si consolida attraverso il contatto con le tradizioni greche e orientali.

Il processo è in parte storico: Seth era il dio preferito degli Hyksos, i popoli asiatici che dominarono il Basso Egitto dal 1650 al 1550 a.C. Quando i faraoni tebani della XVII-XVIII dinastia li espulsero, l'associazione di Seth con lo «straniero invasore» si cristallizzò nell'immaginario collettivo. Le invasioni assira, persiana e macedone successive rinforzarono l'equazione Seth = straniero = nemico = male.

I templi a Seth iniziarono a essere smantellati, il suo nome cancellato dalle iscrizioni, le sue immagini mutilate. Plutarco, scrivendo nell'I-II secolo d.C., identificò Seth con il Tifone greco — il mostro primordiale nemico di Zeus — completando il processo di demonizzazione nella prospettiva ellenistica. (Jan Assmann, Death and Salvation in Ancient Egypt, Cornell University Press, 2005.)`,
    },
    versions: [
      {
        era: "Periodo predinastico — Seth di Ombos",
        name: "Dio dell'Alto Egitto",
        text: "Nelle origini Seth è il dio tutelare di Ombos (Nubt) e dell'Alto Egitto, equivalente di Horus per il Basso Egitto. In questa fase è una divinità pienamente positiva, associata alla forza regale.",
      },
      {
        era: "Seconda Dinastia (ca. 2740 a.C.)",
        name: "Il faraone Peribsen",
        text: "Durante la II dinastia il faraone Peribsen sostituisce il falco di Horus con l'animale di Seth sul proprio serekht reale — prova di un conflitto religioso o di un'egemonia temporanea del culto sethiano.",
      },
      {
        era: "Medio Regno",
        name: "Il fratricida",
        text: "Il mito di Osiride si consolida e Seth diventa prevalentemente il fratricida. La sua figura si oscura progressivamente, pur conservando il ruolo difensore di Ra.",
      },
      {
        era: "Periodo tardo — Demonizzazione",
        name: "Il nemico assoluto",
        text: "In epoca tarda, soprattutto dopo le invasioni straniere (assira, persiana), Seth viene identificato con gli stranieri e demonizzato. I suoi templi vengono distrutti, il suo nome spesso eraso. Plutarco lo identifica con il Tifone greco.",
      },
    ],
    cult: `I principali centri di culto di Seth erano Ombos (Nubt) nell'Alto Egitto e Avaris nel Delta, dove era venerato dagli Hyksos.

Durante la XIX Dinastia — in particolare sotto Seti I e Ramesse II, i cui nomi stessi derivano da Seth — il dio gode di una nuova fioritura. La forza bruta del dio del caos viene reinterpretata come potenza militare utile allo Stato.

In epoca tarda i suoi templi vengono distrutti, il suo nome eraso dalle iscrizioni, la sua figura associata agli invasori stranieri. Quando i greci e i romani arrivano in Egitto, Seth è ormai completamente demonizzato.`,
    influence: [
      {
        era: "Tifone greco",
        text: "I greci identificarono Seth con Tifone — il mostro primordiale che sfidò Zeus. Plutarco nel «Su Iside e Osiride» elabora questa identificazione, facendone il principio del male cosmico.",
      },
      {
        era: "Satana e il diavolo cristiano",
        text: "Alcuni studiosi hanno notato paralleli tra Seth come «signore del deserto, nemico del dio buono» e la figura cristiana di Satana. Alcuni elementi iconografici — corna, coda — potrebbero derivare dalla sua immagine.",
      },
      {
        era: "L'ambiguità del sacro",
        text: "Nella storia delle religioni Seth è uno dei casi più interessanti di divinità «ambivalente»: né completamente buona né completamente cattiva, ma necessaria per l'equilibrio cosmico. Georges Bataille e Mircea Eliade lo hanno studiato come esempio dell'ambivalenza del sacro.",
      },
    ],
    texts: [
      {
        title: "Inno a Seth — XIX Dinastia",
        source: "Papiro Sallier IV, ca. 1300 a.C.",
        text: "Seth, il grande di forza, dal braccio possente, che fa tremare il cielo. La sua voce è tuono, il suo sguardo fulmine. Egli è colui che uccide Apophis ogni notte, che protegge la barca di Ra dalle acque del caos.",
      },
      {
        title: "Le contese di Horus e Seth",
        source: "Papiro Chester Beatty I, Nuovo Regno",
        text: "Allora Seth si alzò davanti all'Enneade e disse: «Io sono Seth, il più grande in forza tra l'Enneade, perché io uccido il nemico di Ra ogni giorno, stando alla prua della barca dei Milioni di Anni. Nessun altro dio lo fa».",
      },
    ],
  },

  {
    id: "anubi",
    name: "Anubi",
    role: "Dio della Mummificazione e Guida dei Morti",
    tags: ["Morte", "Mummificazione", "Psicopompo", "Sciacallo"],
    epithet: "Colui che è sulla sua Montagna, Signore della Terra Sacra",
    type: "Divinità",
    chips: ["Funerario", "Cynopolis", "Antichissimo"],
    heroColor: "linear-gradient(160deg,#0a0a0f,#181828,#060608)",
    bio: {
      main: `Anubi — Anupu in egizio antico, poi Anubis nella forma greca — è una delle divinità egizie più antiche e visivamente potenti. Il suo nome ha etimologia dibattuta: alcune proposte lo collegano alla radice inpw («principe» o «decadente»), altre all'espressione di luogo legata alla necropoli. Quel che è certo è la sua identificazione con il canide del deserto — sciacallo o cane selvatico — che frequentava le necropoli delle aree aride.

La scelta del canide come animale sacro ha una logica magica precisa: gli sciacalli dissotterravano i corpi sepolti superficialmente nelle sabbie del deserto. Divinizzarli significava trasformare la minaccia in protezione, il divoratore in guardiano. Il nero del mantello di Anubi evoca la resina e la pece usate nelle bende delle mummie, ma anche il limo fertile del Nilo, simbolo di rinascita.

Genealogicamente Anubi ha origini complesse: nei testi più antichi è semplicemente il dio dei morti, senza genitori specificati. Nei miti più tardi diventa figlio illegittimo di Osiride e Nefti — concepito durante un inganno amoroso — poi abbandonato e adottato da Iside. Questa genealogia lo inserisce nel ciclo osiriaco pur mantenendo la sua autonomia come divinità funeraria più antica.

Iconograficamente è uno dei più riconoscibili: sciacallo nero in posizione di guardia, o uomo con testa di sciacallo. I suoi attributi sono il flagello, lo scettro was e il misterioso imiut — una pelle di animale decapitata appesa a un palo immersa in un vaso di unguento, simbolo del processo stesso di imbalsamazione.`,

      sub1: "Il Grande Imbalsamatore — La Prima Mummificazione",
      text1: `Anubi è il patrono divino della mummificazione — la pratica che rese possibile la civiltà funeraria egizia nella sua forma più elaborata. Il mito fondante vuole che sia stato lui, insieme a Iside, a eseguire la prima mummificazione della storia sul corpo smembrato di Osiride, stabilendo il rito che ogni sacerdote-imbalsamatore avrebbe ripetuto in eterno.

Il processo era meticoloso e sacro: ogni gesto aveva una corrispondenza mitica. Il sacerdote capo indossava la maschera di Anubi per tutta la durata dell'operazione, diventando ritualmente il dio. Le quattro donne che assistevano incarnavano le dee protettrici (Iside, Nefti, Neith, Selkis). Il cuore veniva lasciato al suo posto — unico organo non rimosso — perché doveva essere presente per la pesatura finale.

Il mito del ruolo di Anubi nella mummificazione di Osiride è narrato in molti testi funerari, inclusi i Testi delle Piramidi (Utterance 450). Nei rilievi delle tombe il dio-sciacallo è raffigurato nell'atto di bendare la mummia, spesso con il titolo «colui che è nella tenda dell'imbalsamazione» (imy-wt).

Preservare il corpo significava preservare l'io — il khat fisico era il supporto necessario perché l'anima (ba) potesse riconoscerlo al risveglio. Senza Anubi, nessuna resurrezione era possibile. (Testi delle Piramidi, Utterance 450; trad. James Allen, The Ancient Egyptian Pyramid Texts, Society of Biblical Literature, 2005.)`,

      sub2: "Il Custode della Bilancia — La Pesatura del Cuore",
      text2: `Nel corso del Medio e Nuovo Regno Anubi perse progressivamente il ruolo di giudice supremo dei morti (ceduto a Osiride) ma acquisì una funzione tecnica di assoluta importanza nel giudizio ultraterreno: è lui a regolare la bilancia durante la pesatura del cuore.

La scena è descritta nella Formula 125 del Libro dei Morti e rappresentata con straordinaria frequenza nelle vignette funerarie — la versione più celebre è nel Papiro di Ani (XIX dinastia, ca. 1275 a.C.). Anubi accompagna il defunto nella Sala delle Due Verità, lo introduce davanti all'Enneade, poi prende il cuore (ib) e lo pone con le proprie mani sul piatto della bilancia. Sull'altro piatto è la piuma di Maat.

Il dio-sciacallo controlla personalmente il meccanismo — regola le punte della bilancia, ne verifica l'equilibrio assoluto. La sua presenza garantisce che il giudizio sia impeccabile, che non ci siano errori tecnici o favoritismi. Accanto a lui Thoth registra il verdetto.

Il defunto recitava l'incantesimo della Formula 30B direttamente al cuore — «O mio cuore, mia madre, non testimoniare contro di me!» — temendo che la coscienza stessa lo potesse tradire rivelando peccati nascosti. Anubi ascoltava in silenzio, eseguiva la pesatura, proclamava il risultato. (Papiro di Ani, XIX dinastia, trad. Raymond Faulkner, The Ancient Egyptian Book of the Dead, British Museum Press, 1972.)`,

      sub3: "Ermanubi — La Fusione con Ermes nel Mondo Greco-Romano",
      text3: `In epoca tolemaica e soprattutto romana, Anubi fu oggetto di una delle sincretizzazioni più interessanti del pantheon egizio: la sua fusione con Ermes nella figura composita di Ermanubi.

La base teologica era solida: entrambi i dei erano psicopompi — accompagnatori delle anime nel viaggio verso l'aldilà. Ermes guidava le anime dal mondo dei vivi al regno di Ade; Anubi conduceva i defunti attraverso il Duat verso il tribunale di Osiride. Questa funzione condivisa rese naturale l'assimilazione.

Ermanubi era rappresentato come uomo con testa di sciacallo o come giovane con chitone greco che reggeva lo scettro caduceo di Ermes e la palma di vittoria. Il suo culto si diffuse in tutto il Mediterraneo romano insieme ai misteri isiaci: templi con immagini di Ermanubi furono trovati a Roma, Pompei, nel Nord Africa, persino in Britannia.

Alcuni studiosi vedono nel raffiguramento medievale di San Michele pesatore di anime — con bilancia e palma — una continuità indiretta con la tradizione anubiana filtrata attraverso Ermanubi. (Jan Quaegebeur, Anubis, fils d'Osiris, Studien zur Altägyptischen Kultur 2, 1975.)`,
    },
    versions: [
      {
        era: "Prima Dinastia (3100–2890 a.C.)",
        name: "Il grande dio dei morti",
        text: "Nei primissimi tempi della storia egizia Anubi è il principale dio dell'oltretomba. I Testi delle Piramidi gli attribuiscono un ruolo di primo piano: è lui il giudice originario dei morti.",
      },
      {
        era: "Medio Regno (2055–1650 a.C.)",
        name: "Subordinazione a Osiride",
        text: "Con l'ascesa del culto di Osiride, Anubi passa in secondo piano: cede a Osiride il ruolo di giudice supremo e assume quello, pur fondamentale, di assistente. In alcuni miti diventa figlio illegittimo di Osiride e Nefti.",
      },
      {
        era: "Nuovo Regno — Libro dei Morti",
        name: "Il custode della bilancia",
        text: "Nell'iconografia classica della pesatura del cuore, Anubi è colui che regola la bilancia. Accompagna il defunto nella Sala delle Due Verità, controlla l'equilibrio tra il cuore e la piuma di Maat.",
      },
      {
        era: "Epoca greco-romana",
        name: "Ermanubi",
        text: "Gli alessandrini fondono Anubi con Ermes (entrambi psicopompi) creando Ermanubi — una divinità ibrida venerata nel culto isiaco diffuso nel Mediterraneo.",
      },
    ],
    cult: `Il principale centro del culto di Anubi era Cynopolis — «città del cane» in greco, oggi el-Qeis — nell'Egitto centrale. Qui veniva venerato insieme a ogni tipo di canide del deserto: sciacalli, cani, volpi.

Vasti cimiteri di canidi mummificati sono stati rinvenuti in tutto l'Egitto: a Saqqara gli scavi hanno portato alla luce milioni di mummie di cani e sciacalli, offerte votive dei devoti al dio. Gli animali venivano allevati specificamente per essere sacrificati e mummificati.

Il simbolo principale di Anubi era lo scettro was e il flagello, ma soprattutto l'imiut — uno strano feticcio costituito da una pelle di animale decapitata appesa a un palo, immersa in un vaso di unguento. Rappresentava simbolicamente il processo di mummificazione stessa.`,
    influence: [
      {
        era: "Ermes psicopompo greco",
        text: "I greci identificarono Anubi con il loro Ermes nel suo ruolo di accompagnatore delle anime. In epoca tolemaica nasce la figura sincretica di Ermanubi, molto popolare a Roma.",
      },
      {
        era: "Iconografia della morte",
        text: "La figura di Anubi, insieme al suo ruolo nella psicostasia, ha influenzato profondamente l'iconografia medievale e moderna della morte — in particolare l'Angelo della Morte che pesa le anime e l'immagine della bilancia della giustizia divina.",
      },
      {
        era: "Cultura popolare moderna",
        text: "Anubi è una delle divinità egizie più presenti nella cultura popolare moderna: dai romanzi di Anne Rice ai videogiochi, dai film come «La Mummia» ai fumetti Marvel, Anubi è diventato un'icona pop dell'antico Egitto.",
      },
    ],
    texts: [
      {
        title: "Libro dei Morti — Formula 151",
        source: "Nuovo Regno, ca. 1500 a.C.",
        text: "Parole dette da Anubi, colui che è sulla sua montagna, signore della terra sacra: «Io sono venuto a proteggere Osiride, il defunto. Io pongo la sua testa al suo posto, io saldo il suo collo sulle sue vertebre. Nessun nemico si leverà contro di lui in eterno».",
      },
      {
        title: "Papiro di Ani — Pesatura del cuore",
        source: "XIX dinastia, ca. 1275 a.C. — British Museum",
        text: "Disse Anubi al defunto: «Attenzione alla bilancia della verità. Mantieni l'equilibrio con la piuma, non lasciare che il tuo cuore sia pesante di peccato, affinché tu possa comparire giustificato davanti al Grande Dio».",
      },
    ],
  },

  {
    id: "thoth",
    name: "Thoth",
    role: "Dio della Sapienza, della Scrittura e della Luna",
    tags: ["Sapienza", "Scrittura", "Luna", "Magia"],
    epithet: "Il Signore del Tempo, lo Scriba degli Dei, il Tre Volte Grande",
    type: "Divinità",
    chips: ["Ermopoli", "Sapienziale", "Lunare"],
    heroColor: "linear-gradient(160deg,#0a0d1a,#10182e,#060a14)",
    bio: {
      main: `Thoth — in egizio Djehuty, traslitterato anche Djehuti o Ḏḥwty — è il dio egizio della saggezza, della scrittura, della conoscenza, della magia, del calcolo, dell'astronomia e della luna. L'etimologia del nome è dibattuta: la proposta più accreditata lo connette al termine greco Thoth, adattamento dell'egizio Tehuti, forse derivato da thn («ibis»). L'animale sacro — l'ibis sacra dal becco ricurvo — era considerato dotato di un'intelligenza superiore per la sua capacità di pescare con precisione millimetrica.

Genealogicamente Thoth occupa una posizione peculiare: in alcune tradizioni è autogenerato (come Ra), in altre è figlio di Ra o di Atum, in altre ancora nasce dal cranio di Seth durante la lotta con Horus — la saggezza che nasce dalla violenza, l'ordine razionale che emerge dal caos. Come Iside, anche Thoth emerge nei testi già pienamente formato, già in possesso di tutta la sua conoscenza.

La sua funzione cosmica è quella del principio razionale dell'universo. Senza Thoth, le stelle non si muoverebbero secondo leggi comprensibili, il linguaggio non avrebbe regole, il tempo non sarebbe misurabile. È lo scriba degli dèi per eccellenza, l'inventore della scrittura geroglifica, il custode della memoria cosmica.

Viene rappresentato come un uomo con testa di ibis o come un babbuino. Porta la tavoletta da scriba e il calamo; nella testa porta spesso il disco lunare. La luna è il suo dominio: come Ra è il sole, Thoth è la luna, il riflesso della luce nel buio, la misura del tempo notturno. Il numero sacro è sette e multipli.`,

      sub1: "Thoth Mediatore — Le Contese di Horus e Seth",
      text1: `Il ruolo di Thoth nelle «Contese di Horus e Seth» (Papiro Chester Beatty I, XIX dinastia, ca. 1160 a.C.) è quello del giudice imparziale per eccellenza — la voce della ragione in un dibattito che sembrava non poter mai concludersi. L'Enneade era bloccata: Ra preferiva Seth per la sua utilità militare, la maggioranza degli dèi sosteneva Horus per diritto ereditario. Thoth non prendeva partito: ascoltava, ragionava, proponeva soluzioni.

Quando Osiride inviò la sua lettera minacciosa dal Duat, fu Thoth a leggerla ad alta voce davanti all'assemblea divina. Il dio-luna era il ponte tra il mondo dei vivi e quello dei morti, tra la ragione e la magia.

Il momento più memorabile dell'intervento di Thoth nelle Contese fu durante l'episodio del seme: dopo che Horus aveva ingannato Seth raccogliendo il suo seme nella mano e sostituendolo con il proprio sulla lattuga del dio, Thoth ordinò al seme di parlare. «Dove sei?» — chiese Thoth al seme di Seth. Il seme rispose da un fiume lontano. «Dove sei?» — chiese al seme di Horus. Il seme rispose dalla testa di Seth, dove era germogliato. Seth fu umiliato davanti all'Enneade da una semplice, incontrovertibile prova di realtà — la realtà ha sempre l'ultima parola.`,

      sub2: "Thoth Inventore — La Creazione della Scrittura e dei Cinque Giorni Epagomeni",
      text2: `Il mito dell'invenzione della scrittura da parte di Thoth è narrato indirettamente in vari testi egizi, ma trova la sua formulazione più famosa nel «Fedro» di Platone (IV sec. a.C.), dove Socrate cita la storia del re egizio Thamous (Amon) che rifiuta il dono della scrittura offertogli da Theuth (Thoth).

Nel mito egizio originario Thoth era il primo scriba del cosmo: annotava i decreti degli dèi, registrava i verdetti del tribunale di Osiride, misurava il tempo. Prima che esistesse la scrittura, la conoscenza era orale — volatile, dipendente dalla memoria dei sacerdoti. Thoth creò i geroglifici («le parole divine», medu-netjer) come sistema di conservazione permanente della sapienza cosmica.

La luna era il suo strumento di misurazione del tempo. Quando Ra maledì Nut — «Non partorirai in nessuno dei 360 giorni dell'anno» — Thoth giocò a dadi con la Luna e vinse: ottenne la 1/72 di ogni giorno dell'anno, creando cinque giorni intercalari (epagomeni) fuori dal calendario regolare. Fu in questi cinque giorni che Nut poté partorire i suoi cinque figli: Osiride, Iside, Seth, Nefti e Horus il Vecchio. L'invenzione dei cinque giorni epagomeni è una delle più affascinanti spiegazioni mitologiche di una realtà astronomica. (Plutarco, Su Iside e Osiride, cap. 12; trad. Jan Griffiths, 1970.)`,

      sub3: "Thoth il Guaritore — Il Recupero dell'Occhio di Horus",
      text3: `Uno degli episodi mitici che mostrano Thoth in azione è il recupero e la guarigione dell'Occhio di Horus strappato e fatto a pezzi da Seth durante la lotta. L'Occhio — simbolo di pienezza cosmica, strumento della visione regale e divina — era stato disperso in frammenti. Raccoglierli, riassemblarli e guarirli era un'operazione che richiedeva non la forza bruta di Seth né la magia di Iside, ma la precisione assoluta e la sapienza tecnica di Thoth.

Thoth trovò i frammenti uno ad uno, li ricompose, pronunciò le formule di guarigione. Il risultato fu l'Udjat — l'«occhio sano», frutto di una ricomposizione miracolosa. Le frazioni dei frammenti dell'occhio (1/2, 1/4, 1/8, 1/16, 1/32, 1/64) sommate danno 63/64: il frammento mancante (1/64) era completato da Thoth con la sua magia, portando l'occhio alla pienezza assoluta.

Questo episodio è all'origine di uno dei sistemi di misurazione più usati nell'Egitto antico: il sistema heqat per i cereali e le sostanze liquide usava esattamente le frazioni dell'occhio di Horus come unità di misura. La matematica era magia sacra, e Thoth ne era il patrono. (Testi delle Piramidi, Utterance 511; trad. Raymond Faulkner, 1972.)`,

      sub4: "Ermete Trismegisto — La Trasmissione Ermetica",
      text4: `La fortuna postuma di Thoth nella tradizione occidentale è uno dei percorsi culturali più straordinari della storia delle idee. Con l'ellenismo, Thoth fu identificato con Ermes — entrambi messaggeri divini, entrambi patroni della comunicazione, entrambi figure di confine tra mondi diversi. Dalla fusione nacque Ermete Trismegisto («il tre volte grandissimo»), a cui la tradizione ermetica attribuì decine di testi sacri.

Il «Corpus Hermeticum» — raccolta di testi filosofici e teologici scritti in greco ca. II-III sec. d.C. — era attribuito alla rivelazione di Ermete Trismegisto. Si trattava in realtà di elaborazioni neoplatoniche, stoiche e gnostiche con forti elementi egizi, ma la pseudonimia era intenzionale: invocare l'autorità di Thoth conferiva al corpus un'antichità e una sacralità che nessun autore contemporaneo avrebbe potuto vantare.

Marsilio Ficino tradusse il Corpus Hermeticum per Cosimo de' Medici nel 1463, dando il via alla grande stagione dell'ermetismo rinascimentale. La «Tavola di Smeraldo» attribuita a Ermete, con il suo «Ciò che è in basso è come ciò che è in alto», divenne uno dei testi fondativi dell'esoterismo occidentale. (Corpus Hermeticum, Poimandres I, trad. Brian Copenhaver, Cambridge University Press, 1992.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Scriba di Ra",
        text: "Nei Testi delle Piramidi Thoth appare come scriba di Ra, registratore dei suoi decreti. Ha un ruolo importante nel viaggio notturno del sole: aiuta Ra a superare le regioni del Duat con la sua conoscenza delle formule magiche.",
      },
      {
        era: "Medio e Nuovo Regno",
        name: "Il giudice tra Horus e Seth",
        text: "Nelle «Contese di Horus e Seth» Thoth svolge il ruolo di mediatore imparziale. La sua voce porta spesso la decisione finale grazie alla sua saggezza superiore.",
      },
      {
        era: "Epoca tarda — Ermopoli",
        name: "Il creatore attraverso la parola",
        text: "Nella teologia ermopolitana Thoth assume un ruolo cosmogonico: è lui a creare l'Ogdoade — le otto divinità primordiali — attraverso le sue otto parole creatrici.",
      },
      {
        era: "Epoca ellenistica — Ermete Trismegisto",
        name: "Il Tre Volte Grande",
        text: "I greci identificarono Thoth con Ermes. Nasce la figura di Ermete Trismegisto («il tre volte grandissimo»), a cui viene attribuito il Corpus Hermeticum — testi filosofico-religiosi che ispireranno l'ermetismo alchemico medievale e rinascimentale.",
      },
    ],
    cult: `Il centro principale del culto di Thoth era Khemenu, ribattezzata dai greci Ermopoli («città di Ermes»), nell'Egitto medio. Qui sorgeva il suo grande tempio e un'intera necropoli di ibis e babbuini mummificati — milioni di animali sacri al dio, deposti come offerte dai fedeli.

A Ermopoli Thoth era venerato non solo come scriba, ma come creatore del cosmo nella dottrina locale. I sacerdoti-scribi del tempio si consideravano suoi figli spirituali, incaricati di custodire e tramandare la conoscenza sacra.

Thoth era inoltre il patrono delle «Case della Vita» (per-ankh) — le istituzioni egizie in cui si conservavano e copiavano i testi sacri, si insegnava scrittura, medicina, astronomia, magia. Erano le università dell'antichità, e tutte erano sotto la protezione di Thoth.`,
    influence: [
      {
        era: "Ermete Trismegisto ed ermetismo",
        text: "Thoth-Ermete Trismegisto diventa la figura ispiratrice dell'ermetismo, tradizione filosofico-religiosa di grande influenza nel Medioevo e nel Rinascimento. Marsilio Ficino tradusse il Corpus Hermeticum per Cosimo de' Medici: influenzò profondamente la cultura rinascimentale.",
      },
      {
        era: "Alchimia e tradizione occulta",
        text: "Thoth è considerato il padre mitico dell'alchimia. La «Tavola di Smeraldo», testo fondamentale dell'alchimia medievale, è tradizionalmente attribuita a Ermete Trismegisto.",
      },
      {
        era: "Il Verbo creatore",
        text: "La concezione di Thoth come creatore attraverso la parola prefigura il logos greco (Eraclito, stoici) e il «Verbo» del prologo giovanneo. Molti studiosi vedono in questa tradizione egizia una delle radici del concetto cristiano.",
      },
      {
        era: "Tarocchi e simbolismo esoterico",
        text: "Il mazzo dei tarocchi è spesso chiamato «Libro di Thoth» nella tradizione esoterica occidentale. Aleister Crowley creò il celebre mazzo «Thoth Tarot» (1944) basandosi su questa tradizione.",
      },
    ],
    texts: [
      {
        title: "Libro dei Morti — Formula 30B",
        source: "Nuovo Regno, ca. 1500 a.C.",
        text: "Parole dette da Thoth, giudice supremo: «Ascoltate questa parola di verità. Io ho giudicato il cuore del defunto: la sua anima sta in piedi testimone di lui. La sua condotta è giusta sulla grande bilancia. Nessun peccato è stato trovato in lui».",
      },
      {
        title: "Dal Corpus Hermeticum — Poimandres",
        source: "Tradizione ermetica, II-III sec. d.C.",
        text: "Custodisci nel silenzio ciò che hai udito, o Tat, e taci nell'ammirazione; perché il silenzio è il saluto dovuto al mistero. Dio è Mente, è Verità, è Luce. E questa è la nascita suprema dell'uomo: quando Mente e Verità si uniscono.",
      },
    ],
  },

  {
    id: "maat",
    name: "Maat",
    role: "Dea della Verità, della Giustizia e dell'Ordine Cosmico",
    tags: ["Giustizia", "Verità", "Ordine", "Piuma"],
    epithet: "La Signora della Verità, Figlia di Ra",
    type: "Divinità",
    chips: ["Concettuale", "Cosmica", "Giuridica"],
    heroColor: "linear-gradient(160deg,#1a1400,#3a2e00,#0e0a00)",
    bio: {
      main: `Maat — pronuncia approssimativa maʿat, scritta con il segno della piuma di struzzo — è meno una divinità antropomorfa e più un principio cosmico personificato. Il termine egizio maʿat indica simultaneamente verità, giustizia, ordine, equilibrio, rettitudine, armonia: è il principio che tiene insieme il cosmo, l'opposto di Isfet (caos, menzogna, disordine). Linguisticamente la radice m3ʿt è connessa a «dritto», «diretto», «corretto» — la linea retta contrapposta alla curva del disordine.

Genealogicamente Maat è figlia di Ra: è nata nel momento in cui il creatore ha portato ordine dal caos. In alcune tradizioni è la prima cosa che Ra creò — ancora prima di Shu e Tefnut — perché senza Maat l'atto stesso della creazione sarebbe stato impossibile: l'ordine deve precedere le sue manifestazioni.

La sua funzione cosmica è totale e pervasiva: il sole sorge ogni mattina perché Maat garantisce le leggi cosmiche; il Nilo straripa ogni anno perché Maat mantiene i cicli naturali; il faraone regna giustamente perché applica Maat nella sua condotta. Senza Maat, il cosmo ricadrebbe nel Nun primordiale.

Iconograficamente Maat ha una presenza scenica minimalista e profondissima: è una donna seduta con una piuma di struzzo sul capo (geroglifico del suo nome), spesso con ali spiegate. O, nella scena del giudizio, è solo la piuma — impersonale, assoluta, implacabile sul piatto della bilancia. Il faraone, nelle cerimonie templari, offriva agli dèi una piccola statuetta di Maat: offrire Maat significava offrire il principio stesso che legittimava il potere regale.`,

      sub1: "Maat e il Tribunale di Osiride — La Piuma del Giudizio",
      text1: `La scena più famosa in cui Maat è protagonista è la pesatura del cuore — narrata nella Formula 125 del Libro dei Morti e rappresentata in migliaia di vignette funerarie. Maat non è presente come persona: è presente come piuma. Questa riduzione a simbolo puro è teologicamente significativa: Maat non è un giudice soggettivo ma il criterio oggettivo del giudizio stesso.

Sul piatto sinistro della bilancia viene posto il cuore (ib) del defunto — la sede della coscienza, della memoria, della personalità. Sul piatto destro è posata la piuma di Maat. Se il cuore è «leggero come la piuma», il defunto è maa-kheru («giusto di voce», «giustificato») e accede ai Campi di Aaru. Se è più pesante, viene divorato da Ammit, la Divoratrice, che annulla per sempre la personalità del defunto.

Il criterio di Maat non è misericordioso né crudele: è semplicemente preciso. Non c'è appello, non c'è grazia. C'è solo il peso della vita vissuta. Questa implacabilità matematica del giudizio ebbe un'influenza enorme sulla formazione dei sistemi morali successivi: l'idea che le proprie azioni abbiano un peso oggettivo, misurabile, inappellabile, attraversa molte tradizioni religiose.

Nella Sala delle Due Verità (Maati) quarantadue giudici divini valutano i dettagli. Ma la piuma di Maat è il criterio ultimo. (Libro dei Morti, Formula 125; trad. Raymond Faulkner, The Ancient Egyptian Book of the Dead, British Museum Press, 1972.)`,

      sub2: "Maat come Principio Etico — Le Istruzioni Sapienziali",
      text2: `Oltre alla sua funzione cosmica, Maat era anche il principio etico che guidava la vita quotidiana degli egizi. La letteratura sapienziale — testi di istruzione morale come le «Istruzioni di Ptahhotep» (Medio Regno, ca. 2000 a.C.) — utilizza Maat come fondamento etico di ogni precetto.

«Maat è grande, la sua efficacia è duratura. Non è stata scossa dal tempo di Osiride» — scrive Ptahhotep. Vivere secondo Maat non significa rispettare codici astratti ma praticare qualità concrete: onestà nel commercio (non falsificare pesi e misure), giustizia nei rapporti sociali (non opprimere i poveri), rispetto per gli anziani, cura degli orfani e delle vedove, moderazione nel parlare.

La «Confessione Negativa» del Libro dei Morti è la formulazione più sistematica dell'etica maatiana. Include trasgressioni di ogni tipo: religiose («non ho bestemmiato»), sociali («non ho causato lacrime», «non ho umiliato il servo davanti al padrone»), ambientali («non ho inquinato le acque», «non ho ridotto le terre coltivabili»).

Questo corpus etico è considerato da Jan Assmann uno dei contributi più importanti della civiltà egizia al pensiero morale dell'umanità — una formulazione sistematica di responsabilità individuale che anticipa di secoli molte elaborazioni greche, giudaiche e cristiane. (Istruzioni di Ptahhotep, Medio Regno; trad. Miriam Lichtheim, Ancient Egyptian Literature, vol. I, University of California Press, 1973.)`,

      sub3: "Maat e il Faraone — L'Ordine Politico come Cosmo",
      text3: `La relazione tra Maat e il faraone è una delle concezioni politico-teologiche più sofisticate dell'antichità. Il faraone non era semplicemente il governante dell'Egitto: era il garante cosmico di Maat, il punto di congiunzione tra il mondo divino e quello umano attraverso cui l'ordine cosmico si traduceva in ordine sociale.

L'azione rituale più significativa era l'offerta di Maat: in ogni cerimonia templare il faraone offriva agli dèi una piccola statuetta di Maat. Questo gesto non era solo simbolico: era teologicamente fondante. Offrire Maat agli dèi significava che il re, nella sua condotta di governo, stava attivamente producendo Maat sulla terra.

L'ideale contrario era Isfet — il caos, la menzogna, il disordine. Ogni faraone era chiamato a «distruggere Isfet e stabilire Maat al suo posto»: questa formula, ripetuta in ogni proclamazione regale, definiva il compito essenziale della monarchia. Un re che opprimeva il popolo, che permetteva la corruzione, che violava le leggi tradizionali, non stava semplicemente governando male: stava introducendo Isfet nel cosmo, minacciando la stabilità dell'ordine universale.

La connessione tra ordine politico e ordine cosmico — il buon governo come atto di pietà cosmica — è uno dei fondamenti della civiltà egizia, e uno dei concetti più originali che essa trasmise alle culture del Mediterraneo antico. (Jan Assmann, Maat: Gerechtigkeit und Unsterblichkeit im alten Ägypten, C.H. Beck, 1990.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Il principio cosmico",
        text: "Fin dai Testi delle Piramidi Maat è presentata come il principio fondante del cosmo. Ogni faraone deve «stabilire Maat al posto di Isfet» — cioè far regnare l'ordine contro il caos.",
      },
      {
        era: "Medio Regno",
        name: "Il codice etico",
        text: "Nei testi sapienziali del Medio Regno — come le «Istruzioni di Ptahhotep» — Maat diventa anche un principio etico personale: vivere secondo Maat significa essere onesti, giusti, misurati, compassionevoli.",
      },
      {
        era: "Nuovo Regno — Pesatura del cuore",
        name: "Giudice dei morti",
        text: "Nel Libro dei Morti Maat diventa il criterio del giudizio ultraterreno: il cuore del defunto deve essere «leggero come la piuma di Maat» per accedere alla vita eterna.",
      },
      {
        era: "Epoca tarda — Confessione negativa",
        name: "I 42 peccati",
        text: "Nella «Confessione negativa» del Libro dei Morti, il defunto deve dichiarare davanti a 42 giudici di non aver commesso alcuno dei 42 peccati contro Maat: non ho ucciso, non ho rubato, non ho mentito, non ho causato lacrime...",
      },
    ],
    cult: `Maat non aveva un tempio principale: era venerata in ogni tempio, perché ogni atto rituale era fondamentalmente un atto di Maat. I sacerdoti-giudici indossavano un amuleto di Maat sul petto durante i processi.

Il «Tribunale di Maat» era l'ideale della giustizia egizia. La dea era patrona dei giudici, dei visir, degli scribi che redigevano documenti legali. Nei testi egizi di argomento giuridico si insiste che «Maat è grande, la sua efficacia duratura» — la giustizia vince sempre, alla fine.

La sala in cui si svolgeva il giudizio delle anime era chiamata «Sala delle Due Verità» (o «Sala delle Due Maat»), perché la dea era spesso rappresentata duplice: una per l'Alto e una per il Basso Egitto, una per la verità oggettiva e una per la giustizia applicata.`,
    influence: [
      {
        era: "La Dike greca e la Iustitia romana",
        text: "Il concetto di Maat ha influenzato direttamente la formulazione greca di Dike (giustizia) e quella romana di Iustitia. L'iconografia della Giustizia con la bilancia e la spada deriva in ultima analisi dalla tradizione egizia.",
      },
      {
        era: "La bilancia della giustizia",
        text: "L'iconografia della «Lady Justice» bendata con la bilancia, presente in tribunali di tutto il mondo, ha la sua radice più antica nella scena della pesatura del cuore e nella figura di Maat.",
      },
      {
        era: "Il concetto di «ordine cosmico»",
        text: "Maat è uno dei concetti più studiati della storia delle religioni. Jan Assmann ha dedicato opere fondamentali a mostrare come Maat sia stata la base dell'etica e della teologia egizia, con ripercussioni sull'intera civiltà occidentale.",
      },
    ],
    texts: [
      {
        title: "Confessione negativa — Formula 125",
        source: "Libro dei Morti, Nuovo Regno",
        text: "Salute a voi, dèi, signori della Maat. Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho ucciso. Non ho depredato le offerte. Non ho ridotto le misure. Non ho rubato terra. Non ho causato lacrime. Io sono puro, io sono puro, io sono puro.",
      },
      {
        title: "Istruzioni di Ptahhotep",
        source: "Medio Regno, ca. 2000 a.C.",
        text: "Maat è grande, la sua efficacia duratura. Non è stata scossa dal tempo di Osiride. Sono puniti coloro che trasgrediscono le sue leggi. Essa è la via dritta di fronte a chi nulla conosce. Il male non raggiunge mai il suo porto.",
      },
    ],
  },

  /* =====================================================================
   EGITTO — DEITIES AGGIORNATE — PARTE 2 (divinità 9-15)
   Sostituisce le voci dall'id 'hathor' fino alla fine di EGIZIO_DEITIES.
   Da incollare subito dopo Maat, prima della chiusura ]; dell'array.
   ===================================================================== */

  {
    id: "hathor",
    name: "Hathor",
    role: "Dea dell'Amore, della Musica e della Gioia",
    tags: ["Amore", "Musica", "Maternità", "Cielo"],
    epithet: "La Signora del Cielo, la Dorata, la Casa di Horus",
    type: "Divinità",
    chips: ["Dendera", "Materna", "Musicale"],
    heroColor: "linear-gradient(160deg,#2a0818,#4a0f28,#1a0410)",
    bio: {
      main: `Hathor — in egizio Hut-Hor, «Casa di Horus» — è una delle divinità femminili più complesse e amate dell'antico Egitto. Il nome stesso rivela la sua funzione più arcaica: è il grembo cosmico, il cielo-madre da cui Horus-il-sole emerge ogni mattina. Chi siede sul «grembo di Hathor» riceve l'energia solare e la vita stessa. L'etimologia è trasparente: Hut («casa», «palazzo», «grembo») e Hor (Horus), la casa del falco celeste.

Genealogicamente Hathor è presentata in modi diversi: figlia di Ra in molti testi, e quindi sorella di Horus; in altri testi è sposa di Horus di Edfu e madre del giovane Ihi (dio del sistro); in altri ancora è l'Occhio di Ra — la forza femminile autonoma del dio solare. Questa molteplicità genealogica riflette la sua natura: non è incasellabile in un unico ruolo familiare perché la sua essenza è la pienezza stessa della femminilità cosmica.

La sua funzione cosmica è quella di contenere e distribuire la vitalità del creato: è dea dell'amore, della sensualità, della bellezza, della musica, della danza, della gioia; ma anche del cielo come grembo materno, della maternità divina, della protezione dei defunti nell'oltretomba. È «Signora delle Turchesi» nel Sinai, dove i minatori egizi la invocavano prima di scendere nelle cave. Iconograficamente è straordinariamente varia: donna con corna di vacca che cingono il disco solare; vacca sacra; donna con orecchie bovine; leonessa furente nell'aspetto di Sekhmet. Il suo strumento musicale è il sistro — i cui sonagli metallici placarano le divinità e scacciavano il male. I colori associati sono il rosso dell'amore e il verde della vegetazione. Il numero sacro è sette — le Sette Hathor, dee del destino.`,

      sub1: "Il Mito della Dea Distante — Sekhmet e il Ritorno di Hathor",
      text1: `Uno dei cicli mitici più elaborati che coinvolge Hathor è quello della «Dea Distante» — una storia che esiste in varianti provenienti dall'Egitto, dalla Nubia e dal Vicino Oriente, e che esplora il tema della femminilità che si allontana furiosa e deve essere riportata alla dolcezza.

Nell'episodio principale, l'Occhio di Ra — la forza femminile autonoma del dio solare — si arrabbia violentemente e si allontana in Nubia sotto forma di leonessa furiosa (identificata come Sekhmet, Tefnut o Hathor a seconda della versione). La sua partenza è catastrofica: senza il proprio Occhio Ra è come un re senza corona, il sole perde potere, il cosmo si deteriora.

Ra invia Shu o Thoth a riportare la dea indietro. Il viaggio verso la Nubia è lungo e pericoloso; la dea-leonessa non vuole saperne di tornare. Thoth, in forma di babbuino, la raggiunge e inizia a narrarle storie, favole, miti — una serie di apologhi molto simili alle favole di Esopo — per distrarla e ammorbidirla progressivamente. Piano piano la leonessa si placa, si trasforma in gatta, poi in Hathor nella sua forma dolce.

Il ritorno della dea è celebrato come festa: Thoth o Shu la introducono nel tempio e la sposa con Horus di Edfu. I riti matrimoniali a Edfu erano una delle celebrazioni più importanti dell'Egitto — la «Bella Festa dell'Unione» — durante la quale la statua di Hathor veniva trasportata da Dendera a Edfu su una barca sacra per incontrare il suo sposo divino. Il mito spiega il rapporto Sekhmet/Hathor: ogni ferocia contiene una dolcezza potenziale, ogni leonessa è anche gatta. (Mito della Dea Distante, varianti in vari papiri; trad. Jan Bergman, Ich bin Isis, 1968.)`,

      sub2: "Le Sette Hathor — Le Dee del Destino",
      text2: `Tra le manifestazioni più suggestive di Hathor vi sono le «Sette Hathor» — un gruppo di dee multiple che apparivano alla nascita dei bambini per determinarne il destino. Come le Parche romane, le Moire greche o le fate nordiche, le Sette Hathor erano le annunciatrici del futuro del neonato con profezie irrevocabili.

Le testimonianze più ricche si trovano nei papiri del Medio e Nuovo Regno, specialmente nei «Racconti del Papiro Westcar» (Medio Regno, ca. 1600 a.C., Museo Egizio di Berlino), dove le Sette Hathor appaiono alla nascita dei tre figli di un sacerdote che diventeranno faraoni. Le dee si manifestano come belle giovani con trecce laterali e sistri, pronunciano il destino del bambino, poi scompaiono.

Il numero sette è cosmologicamente preciso: nella tradizione egizia i sette principi dell'esistenza (ba, ka, akh, ren, shut, ib, sah) trovano nel sette il loro completamento. Le Sette Hathor incarnano la molteplicità della vita stessa — i sette destini possibili, le sette forme dell'esistenza.

Questo aspetto di Hathor come datrice di destino la connette a tradizioni universali: le fate medievali europee (dalla fee francese derivato di fatum, «destino»), le Norne norrene che tessono la tela del futuro. Le Sette Hathor sono uno degli antecedenti più antichi di questa figura mitologica universale.`,

      sub3: "Hathor Signora dell'Occidente — La Dea Funeraria",
      text3: `Nella tradizione funeraria egizia Hathor ha un ruolo di enorme importanza come «Signora dell'Occidente» — il lato del tramonto, il lato dei morti. I cimiteri egizi erano sempre sulla riva ovest del Nilo, perché il sole tramontava a ovest, e Hathor accoglieva i defunti come accoglie il sole al tramonto.

La rappresentazione più frequente è quella di Hathor-vacca che emerge dalla roccia nella Valle dei Re per accogliere il faraone defunto. A Deir el-Bahari (sponda ovest di Tebe) il grande santuario funerario della regina Hatshepsut ospitava un culto di Hathor di grande importanza: la dea-vacca era rappresentata nell'atto di allattare il faraone, trasmettendogli l'energia divina necessaria per il viaggio nell'aldilà.

Il sistro — lo strumento sacro di Hathor — aveva un ruolo specifico nei riti funebri: il suono metallico dei sonagli scacciava i demoni ostili, calmava le divinità del Duat, apriva le porte dell'oltretomba. Il legame tra Hathor e la morte non era morboso ma speranzoso: come il sole tramonta ma rinasce, come la vacca porta nuovi vitelli ogni anno, Hathor garantisce che la morte sia solo una soglia. È la madre che accoglie i figli che tornano — non per sempre, ma per rinascere. (Iscrizioni del tempio di Deir el-Bahari, XVIII dinastia; trad. Jan Assmann, The Search for God in Ancient Egypt, Cornell University Press, 2001.)`,

      sub4: "La Festa di Dendera e il Matrimonio Sacro",
      text4: `Il tempio di Dendera — uno dei meglio conservati dell'Egitto, costruito in epoca tolemaica (I sec. a.C.) su fondamenta risalenti all'Antico Regno — è il cuore del culto di Hathor. Le sue colonne hathoriche, con il volto della dea scolpito su quattro lati del capitello, sono tra le creazioni architettoniche più celebri dell'arte egizia.

La «Bella Festa dell'Unione» era una delle celebrazioni più importanti del culto hatherico. La statua di Hathor di Dendera veniva caricata su una barca sacra e condotta per via fluviale fino a Edfu — viaggio di diversi giorni — per incontrare la statua di Horus nel suo tempio. Il matrimonio sacro (hieros gamos) tra Hathor e Horus veniva celebrato in un rito segreto nel sancta sanctorum.

Durante il viaggio la barca percorreva il Nilo accompagnata da navi di musici, danzatori, acrobati: un corteo gioioso che coinvolgeva le popolazioni di ogni città rivierasca. Le festività duravano più di una settimana, con banchetti, danze, musica, distribuzione di cibo e vino. Era una festa di fertilità cosmica — il matrimonio del dio-falco con la dea-vacca produceva simbolicamente la fertilità dell'Egitto per l'anno successivo.

Sul tetto del tempio di Dendera avveniva ogni anno il rituale del «trasporto della statua al sole»: la statua di Hathor veniva portata sul terrazzo per «incontrarsi» con il sole nella sua manifestazione più diretta, riattivandola per un altro anno di culto. (Iscrizioni del tempio di Dendera, epoca tolemaica; trad. Sylvie Cauville, Dendara, Institut Français d'Archéologie Orientale, 1997.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Vacca celeste",
        text: "Nelle prime rappresentazioni Hathor è la vacca cosmica che sostiene il cielo sulla schiena. Il sole si posa tra le sue corna, i faraoni vengono allattati da lei per ricevere la regalità divina.",
      },
      {
        era: "Medio Regno — La dea amorosa",
        name: "Patrona dell'amore",
        text: "Con il Medio Regno Hathor diventa prevalentemente la dea dell'amore e della gioia. Le sue feste sono caratterizzate da musica, danza, vino, sessualità rituale. Le sue sacerdotesse-musiciste sono ricercate a corte.",
      },
      {
        era: "Nuovo Regno — Signora dell'Occidente",
        name: "Dea dei morti",
        text: "Hathor assume anche un ruolo funerario: è «Signora dell'Occidente», colei che accoglie i defunti sulla riva ovest del Nilo. Nella Valle dei Re, le tombe sono poste sotto la sua protezione.",
      },
      {
        era: "Il mito della Dea Distante",
        name: "Il furore di Sekhmet",
        text: "Esiste un ciclo mitico in cui Hathor si trasforma nella furiosa Sekhmet per punire l'umanità. Viene placata solo con l'inganno della birra rossa che la fa ubriacare, permettendole di tornare alla sua forma gentile di Hathor.",
      },
    ],
    cult: `Il centro principale del culto di Hathor era Dendera, dove sorgeva uno dei più belli e meglio conservati templi dell'Egitto — costruito in epoca tolemaico-romana ma su fondamenta molto più antiche. Le colonne hathoriche, con il volto della dea scolpito su quattro lati del capitello, sono tra le creazioni artistiche più celebri dell'architettura egizia.

Altri importanti santuari erano quelli di Deir el-Bahari (dove Hathor era venerata come protettrice della regina Hatshepsut), di Serabit el-Khadim nel Sinai (come «Signora delle Turchesi»), e di Byblos in Fenicia.

Le feste di Hathor erano tra le più gioiose dell'Egitto. La «Bella Festa della Valle» celebrava l'incontro annuale tra Hathor di Dendera e Horus di Edfu: la statua della dea veniva trasportata su una barca sacra fino al tempio dello sposo divino, in un viaggio di più giorni accompagnato da musica, danze, vino e banchetti.`,
    influence: [
      {
        era: "Afrodite e Venere",
        text: "I greci identificarono Hathor con Afrodite per la sua sfera amorosa e musicale. Il sincretismo Hathor-Afrodite è documentato in epoca tolemaica e si riflette nell'iconografia mediterranea.",
      },
      {
        era: "Le sette Hathor — le fate",
        text: "Esisteva nel mito egizio la figura delle «Sette Hathor» — divinità multiple che predicevano il destino dei neonati. Sono considerate uno degli antecedenti culturali delle Parche/Moire/fate madrine delle tradizioni successive.",
      },
      {
        era: "La Madonna del Latte",
        text: "Come Iside, anche Hathor era rappresentata nell'atto di allattare il faraone-Horus. Questa iconografia ha contribuito alla formazione dell'immagine cristiana della «Madonna del Latte» o «Galaktotrophousa».",
      },
    ],
    texts: [
      {
        title: "Inno a Hathor di Dendera",
        source: "Tempio di Dendera, epoca tolemaica",
        text: "Tu sei la Signora della gioia, la Regina della danza, la Signora della musica, la Regina del suonare l'arpa. Il tuo volto gioisce quando colui che tu ami ti si avvicina. Il tuo cuore è contento quando lo guardi.",
      },
      {
        title: "Canzoni d'amore dell'antico Egitto",
        source: "Papiro Harris 500, XIX dinastia",
        text: "La dorata — sia lodato il suo nome! — brilla tra le donne. Guarda, ella è come Sirio che sorge all'inizio di un anno buono. La sua voce è come il vino dolce, le sue labbra come il miele, il suo profumo come l'incenso.",
      },
    ],
  },

  {
    id: "ptah",
    name: "Ptah",
    role: "Dio Creatore di Menfi, Patrono degli Artigiani",
    tags: ["Creazione", "Menfi", "Artigiani", "Verbo"],
    epithet: "Il Grande Artigiano, Colui che Crea con il Cuore e la Lingua",
    type: "Divinità",
    chips: ["Menfita", "Demiurgo", "Artigianale"],
    heroColor: "linear-gradient(160deg,#0d1520,#15253a,#08101c)",
    bio: {
      main: `Ptah — in egizio Ptḥ, pronuncia approssimativa «Petah» — è uno dei dei più antichi e importanti dell'Egitto, dio creatore della città di Menfi e della prima capitale dell'Egitto unificato. L'etimologia del nome è discussa: alcune proposte lo collegano alla radice ptḥ («aprire», «dischiudere»), suggerendo l'idea di colui che apre il cosmo alla vita; altre a «scolpire», «modellare». In entrambi i casi emerge il tema della creazione come atto tecnico precisissimo.

Genealogicamente Ptah è descritto come «colui che si è creato da solo» — autogenerato come Ra, ma in modo fondamentalmente diverso: non attraverso un atto sessuale o fisico, ma attraverso il puro pensiero e la parola. Nella teologia menfita è il creatore supremo che genera il cosmo prima attraverso il cuore (la mente, il pensiero progettuale) e poi attraverso la lingua (la parola che realizza il progetto). È padre di Nefertum (dio del loto e del profumo) e sposo di Sekhmet, la leonessa furente.

La sua funzione cosmica è quella del demiurgo artigiano: non crea il cosmo ex nihilo in modo magico, ma lo «lavora», lo «fabbrica», come un maestro orafo fabbrica un gioiello di straordinaria precisione. Questa concezione della creazione come lavoro tecnico e intellettuale fa di Ptah il patrono naturale di tutti gli artigiani, gli architetti, gli scultori, i fabbri.

Iconograficamente è inconfondibile: uomo mummificato dalla pelle verde o azzurra, con copricapo aderente che lascia scoperto solo il viso, che impugna uno scettro composito unendo l'ankh (vita), il djed (stabilità) e il was (potere). La postura rigidamente frontale e immobile contrasta con la dinamicità del suo pensiero creatore. Non ha animale sacro proprio, ma è profondamente connesso al toro sacro Apis.`,

      sub1: "La Teologia Menfita — Creazione attraverso il Cuore e la Lingua",
      text1: `La dottrina cosmogonica di Menfi, tramandata principalmente sulla «Pietra di Shabaka» (conservata al British Museum, VIII sec. a.C., ma basata su un testo molto più antico), è una delle elaborazioni teologiche più sofisticate dell'intera antichità. Lo studioso John Wilson la definì «la più intellettuale di tutte le cosmogonie egizie».

Il testo afferma che Ptah creò il mondo non con gesti fisici — non si masturbò come Atum, non sputò come alcune versioni di Ra — ma attraverso un processo puramente intellettuale. Prima «concepì nel cuore» (ib: la sede del pensiero per gli egizi) tutto ciò che sarebbe esistito; poi «ordinò con la lingua» (ns: la lingua come strumento di realizzazione). Il pensiero precede la parola, la parola realizza il pensiero.

«Il cuore e la lingua hanno potere su tutte le membra. Il pensiero nel cuore, la parola sulla lingua — questi sono Ptah in ogni corpo di ogni essere vivente.» Questa concezione — il cosmo come realizzazione di un progetto mentale espresso verbalmente — è straordinariamente vicina al logos greco (Eraclito, stoici) e al prologo giovanneo («In principio era il Verbo»). Hegel, nel corso delle sue lezioni sulla filosofia della storia, citò la teologia di Ptah come uno dei primi esempi storici di «pensiero come principio dell'essere». (Pietra di Shabaka, VIII sec. a.C.; trad. Miriam Lichtheim, Ancient Egyptian Literature, vol. I, University of California Press, 1973.)`,

      sub2: "Ptah e il Toro Apis — Il Dio nell'Animale",
      text2: `Il culto del toro Apis è una delle manifestazioni religiose più affascinanti e complesse dell'Egitto. Apis (Hapi in egizio) era il «ka vivente di Ptah» — l'anima-forza vitale del dio manifestata in un singolo toro vivente selezionato tra migliaia per una serie di segni distintivi precisi: una macchia bianca triangolare sulla fronte (a forma di piramide o mezzaluna), un'aquila sulle spalle, un raddoppiamento dei peli della coda.

Il toro Apis viveva nel tempio di Ptah a Menfi, in un recinto dorato, servito da sacerdoti dedicati, nutrito con le migliori granaglie, adornato con gioielli d'oro. La sua salute era consultata come oracolo, i suoi movimenti interpretati come profezie. A Menfi i fedeli potevano avvicinarsi al recinto sacro per cercare di toccare l'animale durante le processioni rituali.

Alla morte del toro Apis — che poteva vivere decenni — la perdita era sentita come lutto nazionale. Il corpo veniva imbalsamato con gli stessi riti riservati a un faraone, poi sepolto nel Serapeo di Saqqara: un vasto complesso sotterraneo di gallerie dove erano custodite le mummie dei tori Apis in sarcofagi di granito monolitici di settanta tonnellate ciascuno. La scoperta del Serapeo da parte di Auguste Mariette nel 1851 è tra le più sensazionali della storia dell'egittologia.

Nel periodo tolemaico Apis si fuse con Osiride creando Serapide — il dio greco-egizio che si diffuse in tutto il Mediterraneo.`,

      sub3: "Ptah e gli Artigiani di Deir el-Medina",
      text3: `Tra tutti i devoti di Ptah, nessuno lo venerava con intensità pari a quella degli artigiani di Deir el-Medina — il villaggio degli operai che costruivano e decoravano le tombe reali nella Valle dei Re durante il Nuovo Regno (ca. 1550–1070 a.C.). Questa comunità di circa sessanta-ottanta famiglie, isolata nel deserto tebano, ha prodotto alcuni dei documenti più personali e toccanti della storia egizia.

Gli abitanti di Deir el-Medina erano disegnatori, scultori, pittori, falegnami — tutti artigiani specializzati sotto la patronanza di Ptah. Le iscrizioni trovate nel villaggio mostrano una devozione personale intensa e diretta al dio, molto diversa dalla religiosità ufficiale templare. Le preghiere non sono formule stereotipate ma appelli accorati: un operaio che ringrazia Ptah di avergli salvato il figlio dalla malattia, un altro che si pente di aver bestemmiato e chiede perdono.

Le «stele dell'orecchio» trovate a Deir el-Medina — pietre con incisi numerosi orecchi — erano dedicate a Ptah (e ad Amon) perché i devoti speravano che il dio «ascoltasse» le loro preghiere. Il dio-artigiano, che crea attraverso il pensiero e la parola, era evidentemente percepito come un dio capace di «sentire» anche le voci più umili. Il lavoro quotidiano degli artigiani — scolpire, dipingere, calcolare — era esso stesso una forma di preghiera a Ptah: replicare nella materia il gesto creatore del dio. (Documenti di Deir el-Medina; trad. John Romer, Ancient Lives, Weidenfeld & Nicolson, 1984.)`,
    },
    versions: [
      {
        era: "Antico Regno — Il demiurgo menfita",
        name: "Patrono di Menfi",
        text: "Sin dall'Antico Regno Ptah è il dio tutelare di Menfi. Il nome stesso «Egitto» deriva dal greco Aiguptos, corruzione dell'egizio «Hut-ka-Ptah» — «Casa dello spirito di Ptah», nome del suo grande tempio.",
      },
      {
        era: "Teologia menfita",
        name: "Creatore attraverso il verbo",
        text: "La dottrina menfita presenta Ptah come il creatore supremo che genera il cosmo attraverso il pensiero del suo cuore e la parola della sua lingua. È una concezione teologica di straordinaria raffinatezza, probabilmente la più sofisticata dell'antico Vicino Oriente.",
      },
      {
        era: "Ptah-Sokar-Osiride",
        name: "Fusione con divinità funerarie",
        text: "Ptah si fonde progressivamente con Sokar (antico dio della necropoli menfita) e con Osiride, formando una triade funeraria che verrà venerata per tutto il periodo tardo dell'Egitto.",
      },
      {
        era: "Nuovo Regno",
        name: "Uno della triade di Menfi",
        text: "Ptah guida la triade di Menfi insieme alla sposa Sekhmet (la leonessa furiosa) e al figlio Nefertum (dio del loto e del profumo). La triade completa il panorama teologico accanto a quelle di Tebe (Amon-Mut-Khonsu) ed Eliopoli.",
      },
    ],
    cult: `Il grande tempio di Ptah a Menfi, chiamato Hut-ka-Ptah, era uno dei complessi religiosi più importanti dell'Egitto. Era anche il centro del culto di Apis, il toro sacro incarnazione terrena di Ptah: un singolo toro vivente selezionato tra migliaia per segni distintivi specifici, venerato per tutta la vita, poi mummificato con onori reali.

Il Serapeo di Saqqara conteneva le mummie dei tori Apis deceduti, deposti in enormi sarcofagi di granito di oltre settanta tonnellate ciascuno. La scoperta del Serapeo da parte di Auguste Mariette nel 1851 è stata una delle più sensazionali dell'egittologia.

Gli artigiani egizi, soprattutto quelli di Deir el-Medina (il villaggio degli operai che costruivano le tombe reali nella Valle dei Re), consideravano Ptah loro patrono. Le iscrizioni ritrovate mostrano una devozione personale intensa al dio.`,
    influence: [
      {
        era: "Efesto greco e Vulcano romano",
        text: "I greci identificarono Ptah con Efesto — entrambi dèi-fabbri, patroni della metallurgia e dell'artigianato. Erodoto chiama il tempio di Menfi «tempio di Efesto».",
      },
      {
        era: "Il Verbo cosmogonico",
        text: "La concezione menfita di Ptah che crea attraverso il pensiero e la parola è uno dei più antichi esempi di cosmogonia logocentrica. Ha influenzato profondamente il pensiero egizio successivo e presenta paralleli con il Logos greco e il Verbo giovanneo.",
      },
      {
        era: "La Pietra di Shabaka",
        text: "La stele di Shabaka, conservata al British Museum, è considerata uno dei documenti teologici più importanti dell'antichità — spesso paragonata per importanza ai libri sapienziali biblici o ai testi filosofici presocratici.",
      },
    ],
    texts: [
      {
        title: "Teologia menfita — Pietra di Shabaka",
        source: "VIII sec. a.C., copia di un testo dell'Antico Regno",
        text: "Avvenne che il cuore e la lingua ottenessero il potere su tutte le membra, insegnando che egli è in ogni corpo e in ogni bocca — di tutti gli dèi, di tutti gli uomini, di tutti gli animali, di tutto ciò che vive — pensando e ordinando tutto ciò che vuole.",
      },
      {
        title: "Inno a Ptah-Tatenen",
        source: "Nuovo Regno, ca. 1300 a.C.",
        text: "Salute a te, Ptah-Tatenen, padre degli dèi, dio grande fin dal principio. Tu formasti gli uomini, facesti gli dèi. Tu sei il grande artigiano all'inizio, che plasma ogni corpo.",
      },
    ],
  },

  {
    id: "amon",
    name: "Amon",
    role: "Dio Nascosto, Re degli Dei di Tebe",
    tags: ["Nascosto", "Tebe", "Vento", "Ariete"],
    epithet: "Il Nascosto, il Re degli Dei, Colui che ha Fatto Sé Stesso",
    type: "Divinità",
    chips: ["Tebano", "Nuovo Regno", "Karnak"],
    heroColor: "linear-gradient(160deg,#1a1500,#3a2e00,#121000)",
    bio: {
      main: `Amon — in egizio Jmn, traslitterato anche Amon, Amen, Imen — porta nel nome stesso il suo attributo essenziale: «il nascosto», «l'invisibile». La radice jmn in egizio significa appunto «nascondere», «essere occulto». Non è la nasconditezza come assenza, ma come trascendenza: Amon è dappertutto proprio perché non si lascia vedere da nessuna parte. È il vento che si sente ma non si vede, il soffio che anima i polmoni senza che l'occhio lo percepisca.

Genealogicamente Amon ha origini oscure che corrispondono alla sua natura: si autodichiara «colui che ha fatto se stesso», privo di genitori nel senso pieno. In alcune tradizioni appartiene all'Ogdoade di Ermopoli — le otto divinità primordiali del caos — come forza oscura e informe. In altre è presentato come il principio primo assoluto, anteriore a tutto.

La sua funzione cosmica subì una straordinaria espansione con l'ascesa di Tebe: da divinità locale del vento, diventò il re supremo degli dèi, il dio universale che contiene in sé tutte le altre divinità come sue manifestazioni. I grandi inni del Nuovo Regno celebrano Amon come l'uno di cui tutto il resto sono forme: Ra è il suo volto solare, Ptah il suo corpo artigianale. La sintesi Amon-Ra riunisce il principio nascosto (Amon) e il principio manifesto (Ra) in un unico assoluto.

Iconograficamente Amon è raffigurato come uomo con il copricapo a due alte piume (shu-ty), oppure come ariete dalle corna ricurve, oppure come oca selvatica (il suo respiro). I colori sacri sono il blu lapislazzuli (il cielo invisibile) e il blu scuro. Il numero sacro è 3, nella triade di Tebe con Mut e Khonsu.`,

      sub1: "L'Ascesa di Tebe — Da Dio Locale a Re degli Dei",
      text1: `Il percorso di Amon dalla marginalità alla supremazia è uno dei processi di trasformazione teologica più spettacolari dell'Egitto. Fino al Medio Regno (2055–1650 a.C.) era una divinità della zona tebana, poco più che un genio locale del vento. L'ascesa politica di Tebe come capitale lo portò al vertice del pantheon in pochi secoli.

Il momento cruciale fu la vittoria dei faraoni tebani della XVII-XVIII dinastia sugli Hyksos invasori (ca. 1550 a.C.). Il trionfo fu attribuito alla protezione di Amon: «Amon ha dato la vittoria al figlio che ama» — questa formula si moltiplicò su obelischi, templi, stele di tutto l'Egitto. I bottini di guerra affluirono al tempio di Karnak. I sacerdoti di Amon divennero i più ricchi e potenti d'Egitto.

Con la XVIII dinastia il titolo «Figlio di Amon» affiancò e poi soppiantò il vecchio «Figlio di Ra» come titolatura regale. Tutmose III, il grande conquistatore, portò al tempio di Karnak il tributo di trenta campagne militari. Amenhotep III eresse oltre settecento statue di Sekhmet per placare la sposa di Ptah — e contemporaneamente costruì a Karnak e Luxor monumenti di grandiosità senza precedenti per Amon-Ra.

Il potere sacerdotale amoniano cresceva in parallelo: al momento del suo massimo, nel Terzo Periodo Intermedio, i gran sacerdoti di Amon governavano di fatto l'Alto Egitto come un principato teocratico. (Jan Assmann, Egyptian Solar Religion in the New Kingdom, Kegan Paul International, 1995.)`,

      sub2: "L'Eresia di Akhenaton — La Soppressione di Amon",
      text2: `Il momento più drammatico nella storia di Amon fu la persecuzione subita durante il regno del faraone Amenhotep IV, che nel quinto anno del suo regno cambiò nome in Akhenaton («Colui che è utile ad Aton») e proclamò Aton — il disco solare visibile, una forma purificata di Ra — unica divinità ammessa.

La scelta di sopprimere Amon non era casuale: era un attacco diretto ai sacerdoti di Karnak, la casta religiosa più ricca e potente d'Egitto, un contropotere che i faraoni avevano cercato di controllare per generazioni. Akhenaton smantellò il loro sistema: chiuse i templi di Amon, confiscò le rendite, fece cancellare il nome del dio dalle iscrizioni — anche all'interno di parole composte e nomi propri.

Fu uno dei più grandi vandalismi culturali dell'antichità, ma anche un esperimento teologico senza precedenti: per la prima volta un faraone tentava di imporre un monoteismo di Stato. La nuova capitale Akhetaton (Amarna), costruita da zero nel deserto, fu progettata come città del dio unico.

L'esperimento durò quanto il regno di Akhenaton. Il giovane successore Tutankhaton fu indirizzato dai sacerdoti a cambiare nome in Tutankhamon, a ristabilire il culto di Amon, a tornare alle vecchie capitali. La «restaurazione» fu completa e vendicativa: il nome di Akhenaton fu cancellato dai monumenti, Amarna abbandonata e smantellata. Amon tornò al suo posto come se l'eresia non fosse mai avvenuta. (Donald Redford, Akhenaten: The Heretic King, Princeton University Press, 1984.)`,

      sub3: "Amon e l'Oracolo di Siwa",
      text3: `Il santuario oracolare di Amon nell'oasi di Siwa, nel deserto libico a oltre trecento chilometri dal Nilo, era uno dei luoghi sacri più famosi del mondo antico. In questo remoto avamposto della civiltà egizia un sacerdozio di Amon aveva sviluppato una tradizione oracolare di fama mediterranea — consultata da popoli libici, greci, cartaginesi, romani.

Nel 332 a.C. Alessandro Magno, dopo aver conquistato l'Egitto senza resistenza, si recò in pellegrinaggio a Siwa attraverso il deserto — un viaggio pericoloso che impressionò i contemporanei per la sua audacia. Arrivato al tempio, fu introdotto nel sancta sanctorum dagli anziani sacerdoti. Ciò che gli venne detto rimase segreto: Alessandro non rivelò mai le parole dell'oracolo. La tradizione — riportata da Diodoro Siculo, Plutarco e Arriano — afferma che l'oracolo lo salutò come «figlio di Zeus-Amon» e confermò il suo destino di conquistatore del mondo.

L'identificazione di Alessandro come figlio di Amon era teologicamente precisa: nella tradizione egizia il faraone era sempre figlio del dio supremo. Alessandro accettò il titolo con entusiasmo: si fece rappresentare con le corna d'ariete di Amon sulle monete — un'iconografia che i successori ellenistici adottarono come marchio di legittimità regale. (Arriano, Anabasi di Alessandro, III.3-4; trad. Pietro Sisti, Mondadori, 2001.)`,

      sub4: "Il Monoteismo Nascosto — La Teologia di Amon nel Nuovo Regno",
      text4: `Una delle scoperte più sorprendenti della ricerca storico-religiosa moderna sull'Egitto è la presenza, negli inni a Amon del Nuovo Regno, di un discorso sostanzialmente monoteistico — molto prima di Akhenaton e di qualsiasi tradizione abramitica.

Il «Grande Inno ad Amon» nel Papiro di Leida (I-350, XIX dinastia, ca. XIII sec. a.C.) celebra Amon con attributi che lo pongono al di sopra di tutte le altre divinità non come re tra pari ma come realtà di cui tutto il resto è manifestazione: «Tre sono tutti gli dèi: Amon, Ra, Ptah — e nessuno ha il suo pari. Nascosto è il suo nome come Amon, egli è Ra davanti, il suo corpo è Ptah».

Un'altra sezione del papiro afferma: «Tu sei uno, da cui vengono i milioni». Amon è il principio uno di cui tutti gli altri dèi sono «i milioni» — forme, aspetti, manifestazioni. Questa è una concezione che gli studiosi definiscono «enoteistica» o addirittura proto-monoteistica.

Jan Assmann ha dedicato a questa teologia amoniana la sua opera «Moses the Egyptian» (1997), sostenendo che la tradizione religiosa di Amon come dio nascosto ma universale abbia influenzato, attraverso vari percorsi culturali, la formazione del monoteismo biblico. La tesi è controversa ma ha stimolato un importante dibattito accademico sulla continuità tra teologia egizia e tradizione abramitica. (Papiro di Leida I-350, trad. Jan Zandee, De Hymnen aan Amon van Papyrus Leiden I-350, 1947.)`,
    },
    versions: [
      {
        era: "Antico e Medio Regno",
        name: "Divinità locale di Tebe",
        text: "Nelle origini Amon è una divinità provinciale di Tebe (Uaset). La sua ascesa inizia con la XII dinastia, quando i faraoni tebani — che portano nomi come Amenemhat («Amon è davanti») — promuovono il suo culto.",
      },
      {
        era: "Nuovo Regno — Amon-Ra",
        name: "Re degli dèi",
        text: "Con l'ascesa della XVIII dinastia Amon si fonde con Ra formando Amon-Ra, «re degli dèi». Diventa la divinità suprema dell'Impero egizio, venerato in tutto il Mediterraneo orientale, dalla Nubia fino alla Siria.",
      },
      {
        era: "Crisi amarniana",
        name: "L'eresia di Akhenaton",
        text: "Il faraone Akhenaton (ca. 1353–1336 a.C.) abolisce il culto di Amon in favore dell'unico Aton, cancella il nome di Amon dai monumenti. Alla sua morte il culto di Amon viene ristabilito con vigore, e il suo stesso successore Tutankhaton cambia nome in Tutankhamon.",
      },
      {
        era: "Terzo Periodo Intermedio",
        name: "Lo Stato teocratico",
        text: "Dopo il Nuovo Regno, i gran sacerdoti di Amon a Tebe diventano di fatto sovrani dell'Alto Egitto, creando uno Stato teocratico amoniano parallelo alla monarchia del Delta.",
      },
    ],
    cult: `Il grande tempio di Amon a Karnak è il più grande complesso religioso mai costruito nell'antichità. Esteso su circa 60 ettari, con la sua Sala Ipostila di 134 colonne colossali, Karnak fu ampliato da faraoni di ogni dinastia per oltre duemila anni. Era collegato al tempio di Luxor da un viale di sfingi lungo quasi tre chilometri.

La festa di Opet era il momento più importante del calendario religioso egizio: ogni anno la statua di Amon veniva portata in processione solenne da Karnak a Luxor, accompagnata dalla moglie Mut e dal figlio Khonsu. Durante la festa, che durava circa tre settimane, il faraone rinnovava simbolicamente il suo legame divino con Amon.

Fuori dall'Egitto, il più famoso santuario di Amon era quello di Siwa, nel deserto libico — dove nel 332 a.C. Alessandro Magno si recò in pellegrinaggio e fu proclamato figlio di Amon dall'oracolo.`,
    influence: [
      {
        era: "Zeus-Amon",
        text: "I greci identificarono Amon con Zeus (Zeus-Amon), grazie all'iconografia dell'ariete. Alessandro Magno, dopo la consultazione dell'oracolo di Siwa, si fece rappresentare con le corna d'ariete di Amon sulle monete — simbolo poi adottato da altri sovrani ellenistici.",
      },
      {
        era: "Monoteismo e trascendenza",
        text: "La teologia di Amon come dio nascosto, invisibile, universale ha anticipato in qualche misura concezioni monoteistiche. Alcuni inni del Nuovo Regno celebrano Amon come unico dio di cui tutti gli altri sono manifestazioni («tu sei uno, pur manifestandoti in milioni di forme»).",
      },
      {
        era: "L'Ammon biblico",
        text: "Nel libro di Geremia (46:25) il «faraone di Tebe» è chiamato «Amon di No» — dove «No» è Tebe. Gli ebrei erano perfettamente consapevoli del ruolo di Amon come dio supremo egizio.",
      },
    ],
    texts: [
      {
        title: "Grande Inno ad Amon",
        source: "Papiro di Leida, XIII sec. a.C.",
        text: "Tu sei l'unico, tu che hai creato tutto ciò che esiste, l'unico solitario che ha fatto ciò che è. Dalla sua bocca sono venuti gli uomini, dai suoi occhi gli dèi. Il suo nome nascosto è Amon, egli è Ra nel volto, Ptah nel corpo.",
      },
      {
        title: "Inno dei Trecento ad Amon",
        source: "Papiro di Leida I-350, XIX dinastia",
        text: "Tre sono tutti gli dèi: Amon, Ra, Ptah — senza eguali. Nascosto è il suo nome come Amon, egli è Ra davanti, il suo corpo è Ptah. Le loro città sono sulla terra stabilite per l'eternità: Tebe, Eliopoli, Menfi — per sempre.",
      },
    ],
  },

  {
    id: "bastet",
    name: "Bastet",
    role: "Dea Gatta, Protettrice della Casa e delle Donne",
    tags: ["Gatto", "Casa", "Protezione", "Bubastis"],
    epithet: "La Signora di Bubastis, la Dolce di Voce",
    type: "Divinità",
    chips: ["Felina", "Domestica", "Bubastis"],
    heroColor: "linear-gradient(160deg,#1a1000,#3a2500,#120a00)",
    bio: {
      main: `Bastet — in egizio Baset o B3stt — è la dea gatta dell'antico Egitto, una delle divinità più amate dalla popolazione comune. L'etimologia del nome è probabilmente connessa all'idea di «balsamo», «vaso di unguento» — alcuni studiosi la collegano al vaso di alabastro che figura nel suo geroglifico, simbolo della purezza e della conservazione. Il nome contiene l'alchimia della sua natura: dolcezza e potenza, profumo e ferocia.

Genealogicamente Bastet è figlia di Ra e quindi sorella di Horus, ma la sua posizione nel sistema familiare degli dèi è meno rigida di quella di molte altre divinità. È strettamente connessa a Sekhmet (con cui condivide l'aspetto leonino originario), a Tefnut (spesso identificata con l'Occhio di Ra) e a Hathor (per la sua natura gioiosa e musicale). Le tre dee feline formano una triade di femminilità che va dalla ferocia assoluta (Sekhmet) alla gioia totale (Hathor), con Bastet come punto di equilibrio tra le due.

La sua funzione cosmica è la protezione domestica e la fertilità nelle sue forme più concrete: protegge la casa dai serpenti e dagli spiriti maligni, facilita il parto, veglia sui bambini piccoli, porta gioia e musica nella vita quotidiana. È la dea delle donne incinte, delle partorienti, dei neonati.

Iconograficamente Bastet appare come gatta seduta o come donna con testa di gatta — nella mano destra il sistro, nella mano sinistra il cesto o lo scudo. I gattini che spesso la circondano simboleggiano la sua protezione sui figli. Il colore associato è il nero — come il pelo degli gatti sacri. Il numero sacro è sette, come le Sette Hathor.`,

      sub1: "Bastet Leonessa — Le Origini Feroci",
      text1: `Prima di diventare la dolce dea-gatta dell'epoca tarda, Bastet era una divinità ben più minacciosa. Nelle prime attestazioni dell'Antico Regno — Testi delle Piramidi, Utterances 17 e 552 — Bastet è «colei che strappa», una leonessa furiosa e una forma dell'Occhio di Ra poco distinguibile da Sekhmet.

La duplicità originaria leonessa/gatta è teologicamente significativa: il gatto domestico (Felis catus) discende dal gatto selvatico africano (Felis silvestris lybica) ed è lui stesso un predatore — più piccolo di una leonessa ma non meno efficace nel controllo di serpenti e roditori. La gatta che difende i suoi cuccioli con ferocità totale non è molto diversa dalla leonessa che difende il suo territorio.

Il processo di «addolcimento» di Bastet è storicamente documentato: nelle rappresentazioni dell'Antico e Medio Regno la testa è ancora leonina; nel Nuovo Regno appare già come gatta; nell'epoca tarda la trasformazione è completa. Questo cambiamento riflette probabilmente la crescente importanza del gatto domestico nella vita quotidiana egizia — animale utilissimo per il controllo dei topi e dei serpenti nei granai — e la conseguente promozione simbolica da predatore pericoloso a guardiano benefico.

Il mito della «Dea Distante» (in alcune versioni identificata come Bastet-Tefnut) racconta il ritorno di questa leonessa furiosa dalla Nubia e la sua trasformazione progressiva in gatta domestica grazie alle storie e alla musica di Thoth. L'intera mitologia sembra elaborare narrativamente questa transizione culturale. (Testi delle Piramidi, Utterance 552; trad. James Allen, 2005.)`,

      sub2: "Il Culto di Bubastis — Le Feste della Dea",
      text2: `Il centro principale del culto di Bastet era Bubastis (Tell Basta in arabo moderno), nel Delta orientale del Nilo, capitale della XXII dinastia (i faraoni libici, ca. 945–720 a.C.) che la promosse a livello nazionale. Erodoto la visitò nel V sec. a.C. e ne ha lasciato una descrizione vivida che è anche la fonte più ricca sulle feste della dea.

«Quando si radunano per la festa di Bubastis» scrive Erodoto (Storie II, 60) «si radunano più uomini e donne che in qualsiasi altra celebrazione dell'Egitto. Le barche vengono piene di gente: per tutta la navigazione lungo il Nilo, alcune donne suonano i crotali, alcuni uomini i flauti. Il resto canta e batte le mani. Quando passano vicino a una città, accostano, e alcune donne gridano insulti alle donne della città, altre danzano, altre ancora si alzano le vesti. Quando arrivano a Bubastis celebrano la festa con grandi sacrifici e si beve più vino che in tutto il resto dell'anno».

La descrizione rivela una festa catartica e liberatoria, caratterizzata da inversione rituale (insulti, esibizionismo), musica, danza e vino in quantità. I pellegrini arrivavano da ogni parte dell'Egitto: Erodoto stima settecentomila persone, cifra probabilmente esagerata ma indicativa dell'enorme popolarità del culto.

Il cimitero dei gatti di Bubastis era famoso già nell'antichità: milioni di mummie feline, allevate nei recinti sacri del tempio e poi mummificate come offerte votive, venivano vendute ai pellegrini. (Erodoto, Storie II, 59-60; trad. Augusta Ferri, Einaudi, 1956.)`,

      sub3: "Il Gatto Sacro — Dalla Protezione alla Venerazione",
      text3: `La relazione tra Bastet e il gatto domestico è uno dei fenomeni più affascinanti della zoologia culturale antica. L'Egitto fu la prima civiltà nella storia a domesticare il gatto, a venerarlo come essere sacro e a sviluppare un culto sistematico attorno alla sua natura.

I gatti erano venerati per ragioni pratiche prima che religiose: nei granai del Nilo i roditori erano una minaccia costante per le riserve alimentari, e i gatti erano i cacciatori più efficaci disponibili. Anche i serpenti — alcuni velenosi, come l'aspide — erano abbondanti nelle abitazioni egizie; il gatto li attaccava con un coraggio che aveva colpito gli osservatori egizi da millenni. Il serpente Apophis stesso, nella mitologia, aveva nel gatto il suo avversario naturale: le vignette del Libro dei Morti mostrano un gatto (Ra sotto forma felina) che decapita il serpente con una scimitarra.

Ma la venerazione andava oltre l'utilitarismo. Uccidere un gatto in Egitto era un crimine capitale, indipendentemente dall'intenzione. Erodoto racconta che quando una casa andava a fuoco, gli egizi si preoccupavano prima di salvare i gatti che le masserizie. La diffusione del gatto domestico in tutto il Mediterraneo segue il percorso dei commerci egizi e del culto isiaco: sono gli egizi a portare il felis catus dall'Africa orientale all'Europa. (Erodoto II, 66-67; Richard Harper, Domestication, Blackwell, 2011.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Bastet leonessa",
        text: "Nelle prime attestazioni Bastet è una dea-leonessa feroce, protettrice del faraone in battaglia. Viene chiamata «colei che strappa» e «la fiamma». In questa forma è pressoché indistinguibile da Sekhmet.",
      },
      {
        era: "Periodo tardo — La gatta",
        name: "Addolcimento della dea",
        text: "A partire dal Terzo Periodo Intermedio (ca. 1069 a.C.) Bastet assume prevalentemente la forma di gatta domestica o di donna con testa di gatta. La sua natura si addolcisce: diventa dea della gioia, della musica, del piacere sensuale.",
      },
      {
        era: "Epoca saitica — Apogeo del culto",
        name: "Dea nazionale",
        text: "Durante la XXVI dinastia (664–525 a.C.) Bastet raggiunge il suo apogeo. Bubastis diventa una delle città più importanti dell'Egitto. Erodoto descrive le sue feste come le più grandiose che abbia mai visto, con centinaia di migliaia di pellegrini.",
      },
      {
        era: "Epoca tolemaica e romana",
        name: "Diffusione in tutto il mondo",
        text: "Il culto di Bastet si diffonde in tutto il mondo mediterraneo. I romani — grandi amanti dei gatti grazie ai soldati reduci dall'Egitto — importano la dea sotto il nome di «Felis». Piccole statuette di Bastet sono state trovate in tutto l'Impero.",
      },
    ],
    cult: `Il centro principale del culto di Bastet era Bubastis (oggi Tell Basta), nel Delta del Nilo orientale. Erodoto, che la visitò nel V secolo a.C., la descrive come una delle città più belle dell'Egitto, con il tempio della dea costruito su un'isola al centro di canali sacri.

Le feste di Bubastis erano le più famose dell'Egitto. Erodoto racconta che centinaia di migliaia di pellegrini giungevano ogni anno via Nilo, portati da barche cariche di musicisti e danzatori. Si beveva vino, si cantava, si danzava per giorni — era una festa catartica e sensuale.

Il cimitero dei gatti di Bubastis ha restituito centinaia di migliaia di mummie feline. Molti gatti venivano specificamente allevati per il sacrificio votivo — non come crudeltà, ma come pratica religiosa: il gatto mummificato fungeva da messaggero tra il devoto e la dea.`,
    influence: [
      {
        era: "Artemide e Diana",
        text: "I greci identificarono talora Bastet con Artemide — per la sua natura protettiva delle donne e dei parti, e per la sua selvaticità felina. In epoca tolemaica questa sincresi è testimoniata da iscrizioni.",
      },
      {
        era: "Il gatto domestico nel mondo antico",
        text: "La domesticazione del gatto, iniziata in Egitto circa 4000 anni fa, è strettamente legata al culto di Bastet. La diffusione del gatto domestico in tutto il Mediterraneo segue il percorso del culto della dea.",
      },
      {
        era: "Iconografia moderna del gatto",
        text: "L'immagine del gatto come animale misterioso, nobile, portatore di buona fortuna o sfortuna, ha le sue radici nella venerazione egizia. Il detto «i gatti hanno sette vite» potrebbe derivare da antiche concezioni egizie sulla natura divina del felino.",
      },
    ],
    texts: [
      {
        title: "Erodoto — Storie, Libro II",
        source: "Erodoto, V sec. a.C.",
        text: "Quando si radunano per la festa di Bubastis, uomini e donne salgono su barche di ogni tipo, facendo grande rumore con flauti, nacchere e canti. Passando lungo le città fluviali scendono a terra, e le donne lanciano scherni alle donne del luogo, danzando e sollevando le vesti.",
      },
      {
        title: "Formule di protezione",
        source: "Testi funerari, Nuovo Regno",
        text: "Bastet, signora di Bubastis, venga in pace. Il suo alito è vita per le narici. Il suo miagolio scaccia i demoni, la sua presenza illumina le case. Protegga questo defunto come il gatto sacro protegge la casa del sole da Apophis.",
      },
    ],
  },

  {
    id: "sekhmet",
    name: "Sekhmet",
    role: "Dea Leonessa, della Guerra e della Guarigione",
    tags: ["Guerra", "Leonessa", "Guarigione", "Ira"],
    epithet: "La Potente, Signora della Fiamma, Colei che Strappa",
    type: "Divinità",
    chips: ["Menfita", "Guerriera", "Solare"],
    heroColor: "linear-gradient(160deg,#2a0000,#5a0800,#1a0000)",
    bio: {
      main: `Sekhmet — nome egizio Sḫmt, «la Potente», dalla radice sḫm («potere», «forza dominante») — è la divinità più temuta del pantheon egizio e uno dei casi più straordinari di quella che gli studiosi di storia delle religioni chiamano «l'ambivalenza del sacro». Non è semplicemente una dea della guerra: è la totalità della forza distruttiva e rigeneratrice concentrata in un'unica forma leonina.

Il suo nome è preciso come una diagnosi: sḫm designa non la forza generica ma il potere che sovrasta, che sottomette, che non lascia scampo. Rudolf Otto, nel suo studio sul «sacro» come mysterium tremendum et fascinans (1917), avrebbe potuto usare Sekhmet come esempio perfetto: provoca terrore e attrazione al tempo stesso.

Genealogicamente Sekhmet è figlia di Ra — è l'Occhio del sole nella sua manifestazione più feroce — e sposa di Ptah, con cui forma insieme al figlio Nefertum la grande triade menfita. Questo posizionamento genealogico è significativo: Ra le dà la natura solare e il potere cosmico; Ptah le dà il radicamento nella civiltà menfita; Nefertum (dio del loto, del profumo, della guarigione) le dà il suo aspetto terapeutico.

Iconograficamente è inconfondibile: donna con testa di leonessa, sormontata dal disco solare cinto dall'ureo, spesso con una mano che regge il papiro (vita) e l'altra il sistro (rito). Il colore è il rosso del sangue e del fuoco, il rosso del sole allo zenit. Nel grande tempio funerario di Amenhotep III (Kom el-Hetan, tebano) furono erette oltre settecento statue di granito nero — una per ogni notte e ogni giorno dell'anno doppio — per garantire la sua presenza continua e il suo placarsi continuo.`,

      sub1: "L'Ira di Ra — Il Mito della Distruzione dell'Umanità",
      text1: `Il mito più famoso di Sekhmet è quello della strage dell'umanità, narrato nel «Libro della Vacca Celeste» — testo inciso sulle pareti delle tombe di Tutankhamon, Seti I e Ramesse II. Il racconto spiega perché gli dèi si siano ritirati nel cielo e perché la relazione tra uomini e dèi sia diventata mediata, non più diretta.

Quando l'umanità si ribellò al vecchio Ra — «le sue ossa erano d'argento, la sua carne d'oro, i suoi capelli di lapislazzuli» — il dio convocò l'assemblea segreta degli dèi e chiese consiglio. Nun suggerì di inviare l'Occhio del sole contro i ribelli. Ra estrasse il suo Occhio dalla fronte e lo inviò sulla terra come Sekhmet, «la Potente». La dea-leonessa si abbatté sull'umanità con gioia sanguinaria: «Camminavo tra loro e il mio cuore gioiva di ucciderli».

Ra, osservando dall'alto, ebbe compassione. Aveva voluto punire i ribelli, non sterminare tutta l'umanità. Tentò di richiamare Sekhmet, ma la dea era ebbra di sangue e non rispondeva. Ordinò ai messaggeri di correre ad Elefantina a portare ocra rossa (dedeva), la mescolò con la birra di orzo e produsse settemila giare di birra rossa come sangue, che fece versare nei campi dove Sekhmet avrebbe massacrato la mattina seguente.

All'alba Sekhmet vide la distesa rossa e si gettò a bere, scambiandola per sangue. Bevve finché non riuscì più ad alzarsi. Al risveglio la sua furia era spenta — trasformata in Hathor dolce, la dea dell'amore. L'umanità era salva per un inganno. Ra si ritirò nel cielo. (Libro della Vacca Celeste, XIX dinastia; trad. Erik Hornung, Conceptions of God, Cornell University Press, 1982.)`,

      sub2: "Sekhmet la Guaritrice — Il Paradosso del Sacro",
      text2: `Uno degli aspetti più controintuitivi di Sekhmet è il suo ruolo come patrona dei medici. I «sacerdoti di Sekhmet» (wab n Sḫmt) erano i medici dell'Egitto antico — i professionisti della guarigione erano esplicitamente consacrati alla dea della malattia e della distruzione.

La logica è ferrea, non contraddittoria: chi può infliggere le pestilenze può anche allontanarle. La malattia è la freccia di Sekhmet — le epidemie erano chiamate «i messaggeri di Sekhmet» — ma la stessa forza che lancia la freccia può richiamarla. Per questo il medico si consacrava a lei: per avere accesso alla stessa potenza che causava i mali, usandola in senso inverso.

I papiri medici egizi — il Papiro Edwin Smith (conservato alla New York Academy of Medicine, ca. 1600 a.C.), il Papiro Ebers (Università di Lipsia, ca. 1550 a.C.) — attestano un sistema medico sorprendentemente razionale e sistematico: diagnosi per osservazione empirica, prescrizioni farmacologiche, procedure chirurgiche. In molti casi l'approccio è squisitamente pratico. I sacerdoti di Sekhmet svilupparono una tradizione medica che i greci avrebbero poi assorbito e amplificato.

Il paradosso Sekhmet-guaritrice è uno dei casi più studiati della «ambivalenza del sacro» nella storia delle religioni: paralleli evidenti si trovano in Apollo greco (patrono delle frecce di malattia ma anche di Asclepio) e in Shiva indù (il distruttore che è anche il grande medico). (Papiro Edwin Smith, trad. James Henry Breasted, University of Chicago Press, 1930.)`,

      sub3: "Le Settecento Statue di Amenhotep III",
      text3: `La relazione tra Sekhmet e il faraone Amenhotep III (ca. 1390–1352 a.C.) è uno degli episodi più straordinari del culto egizio. In un'impresa senza paralleli nella storia dell'arte religiosa, il faraone fece costruire oltre settecento statue di granito nero raffiguranti Sekhmet assisa su un trono, con il disco solare e l'ureo sulla testa — una per ogni notte e ogni giorno dell'anno egizio doppio di 365 giorni.

Le statue erano destinate al grande tempio funerario di Amenhotep III (Kom el-Hetan) sulla riva ovest di Tebe. Il progetto era probabilmente connesso a un'epidemia che aveva colpito l'Egitto durante il lungo regno del faraone. Erigere le statue non era solo un'offerta: era un rituale apotropaico permanente, un modo per tenere Sekhmet sempre presente e sempre placata, notte e giorno.

La commissione fu straordinaria anche per ragioni tecniche: il granito nero (diorite) è uno dei materiali più duri disponibili nell'antichità, difficile da scolpire. Le statue sono alte circa due metri e pesano diverse tonnellate ciascuna. Oggi queste statue sono disperse nei musei di tutto il mondo — al British Museum, al Louvre, al Museo Egizio del Cairo, al Metropolitan di New York — testimoni silenziose di una delle più grandi espressioni di terrore religioso della storia.

Il numero sette (e settecento) è sacro a Sekhmet: è il numero dei suoi «messaggeri» (le malattie), il numero dei giorni della sua furia, il numero delle forme in cui può manifestarsi. (William R. Johnson, Amenhotep III and Sekhmet, Journal of Egyptian Archaeology, 1990.)`,

      sub4: "Sekhmet e la Dea Distante — Il Ritorno della Leonessa",
      text4: `Sekhmet è spesso identificata con il ciclo mitico della «Dea Distante» — un racconto in cui l'Occhio di Ra, nella sua forma leonina più feroce, abbandona il dio solare e si rifugia in Nubia, portando con sé il calore e la luce. Senza di essa, Ra è indebolito e il cosmo perde vigore.

In questa versione del mito Sekhmet non è già placata dall'inganno della birra rossa (come nel Libro della Vacca Celeste): è una leonessa libera e furiosa, che ha scelto di allontanarsi. Il divario tra la ferocia di Sekhmet e la dolcezza di Hathor o Bastet rispecchia la stessa tensione che il mito tenta di risolvere: le due dee sono due aspetti della stessa realtà femminile e solare, il pericolo indomabile e la tenerezza protettiva.

Il percorso di conversione — dalla leonessa furiosa alla gatta domestica, da Sekhmet ad Hathor — era percepito dagli egizi come un processo cosmico che si ripeteva ciclicamente. I riti di «placamento di Sekhmet» erano celebrati all'inizio di ogni anno (capodanno egizio, coincidente con la levata eliaca di Sirio) per assicurarsi che la transizione avvenisse anche per il nuovo ciclo. I sacerdoti pronunciavano formule, spezzavano figurine di cera dell'animale, libavano birra rossa.

Questo ciclo mito-rituale è uno dei più potenti esempi della religione egizia come sistema di gestione cosmica: il rito non celebra un fatto già avvenuto ma lo produce attivamente. Senza i riti di placamento, la leonessa resterebbe furiosa, il calore solare si trasformerebbe in incendio senza controllo. (Erik Hornung, Conceptions of God in Ancient Egypt, Cornell University Press, 1982.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Strumento dell'ira di Ra",
        text: "Sin dalle prime attestazioni Sekhmet è il braccio armato di Ra. «Colei che bacia di fuoco» inceneriva i nemici del dio solare. I faraoni la invocavano in battaglia, la consideravano responsabile delle vittorie militari.",
      },
      {
        era: "Il mito della Distruzione dell'Umanità",
        name: "La strage e la redenzione",
        text: "Il mito più famoso di Sekhmet è quello della strage dell'umanità ordinata da Ra. Questa versione mitica — riportata nel «Libro della Vacca Celeste» del Nuovo Regno — è uno dei testi religiosi più antichi e drammatici.",
      },
      {
        era: "Nuovo Regno",
        name: "Dea della guarigione",
        text: "Paradossalmente Sekhmet è anche patrona dei medici. Il suo legame con la malattia ha una logica precisa: chi può infliggere le pestilenze può anche allontanarle. I medici egizi erano detti «sacerdoti di Sekhmet».",
      },
      {
        era: "La Dea Distante",
        name: "Il ritorno della dea",
        text: "Sekhmet è spesso identificata con l'occhio di Ra che si allontana in Nubia nel mito della «Dea Distante». Viene riportata indietro da Thoth (o Shu) e si pacifica diventando Hathor o Bastet — mostrando la doppia natura (feroce e mansueta) della divinità femminile.",
      },
    ],
    cult: `Il centro principale del culto di Sekhmet era Menfi, dove era sposa di Ptah e formava con lui e il figlio Nefertum la grande triade menfita. Il suo tempio — chiamato «Casa di Sekhmet» — ospitava rituali di placamento della dea particolarmente elaborati.

I celebri «Sekhmet di Amenhotep III» — oltre 730 statue di granito nero raffiguranti la dea assisa, oggi sparse nei musei di tutto il mondo — furono commissionate probabilmente durante un'epidemia, per placare la furia della dea. Erano destinate al grande tempio funerario del faraone a Tebe occidentale (Kom el-Hetan).

I sacerdoti di Sekhmet praticavano sia riti apotropaici (per tenere lontane malattie e disgrazie) sia terapie mediche vere e proprie. I papiri medici egizi — il Papiro Edwin Smith, il Papiro Ebers — attestano un legame stretto tra conoscenza medica e culto sekhmetiano.`,
    influence: [
      {
        era: "Il paradosso del sacro",
        text: "Sekhmet è uno dei casi più studiati del «paradosso del sacro»: la stessa divinità che infligge la malattia può guarirla, la stessa forza che distrugge può salvare. Mircea Eliade e Rudolf Otto hanno utilizzato Sekhmet come esempio del «mysterium tremendum».",
      },
      {
        era: "Le divinità leonine mediterranee",
        text: "Il tipo iconografico della dea-leonessa si ritrova in molte culture del Mediterraneo: la siriaca Astarte-leonessa, la punica Tanit, alcune forme di Cibele frigia. Sekhmet è l'archetipo più antico e completo.",
      },
      {
        era: "Medicina e religione",
        text: "Il ruolo di Sekhmet come patrona dei medici ha influenzato la concezione antica della medicina come scienza sacra. I sacerdoti-medici di Sekhmet sono tra i più antichi professionisti della medicina documentati dalla storia.",
      },
    ],
    texts: [
      {
        title: "Il Libro della Vacca Celeste",
        source: "Tomba di Tutankhamon e tombe reali, XIX dinastia",
        text: "Allora Ra disse a Sekhmet: «Scendi contro gli uomini ribelli». Sekhmet scese, scorrendo nel sangue fino alle cosce. Gli uomini che si erano ribellati furono massacrati per ordine di Ra. Al suo ritorno Ra disse: «Benvenuta, o pacifica». E da allora furono offerte libagioni di birra rossa al festival della dea.",
      },
      {
        title: "Inno a Sekhmet",
        source: "Papiro medico, Nuovo Regno",
        text: "Salute a te, Sekhmet, signora della fiamma, dalla voce tuonante. Tu sei colei che guarisce, tu sei colei che fa ammalare. Nelle tue mani è la vita, nelle tue mani è la morte. Placa, o grande, la tua ira contro questo malato.",
      },
    ],
  },

  {
    id: "nefti",
    name: "Nefti",
    role: "Dea della Casa, del Lamento e della Protezione Funeraria",
    tags: ["Lamento", "Casa", "Funeraria", "Sorella"],
    epithet: "La Signora del Palazzo, Sorella di Iside",
    type: "Divinità",
    chips: ["Enneade", "Funeraria", "Sorella di Iside"],
    heroColor: "linear-gradient(160deg,#180818,#2a1028,#0a040a)",
    bio: {
      main: `Nefti — in egizio Nebet-Het, «Signora della Casa», o Nebet-Hut — è la quarta figlia di Geb (la terra) e Nut (il cielo) nell'Enneade eliopolitana, e una delle divinità più sfumate e meno celebrate dell'intero pantheon. Il suo nome è composto da nbt («signora», «padrona») e Hwt («palazzo», «casa», «tempio») — non la casa modesta del contadino ma la dimora regale, il grembo sacro del potere.

L'etimologia rivela una delle sue funzioni: Nefti è la custode della casa, non dello spazio domestico quotidiano ma dello spazio sacro del potere, del confine tra il mondo ordinato e il mistero. Sta sulla soglia — come sua sorella Iside, ma in modo diverso: Iside è il trono, il fondamento visibile del potere; Nefti è il palazzo, lo spazio che lo contiene e lo nasconde.

Genealogicamente è sorella di Osiride, Iside e Seth — di quest'ultimo anche sposa infelice, sterile. La sua sterilità nel matrimonio con Seth è teologicamente significativa: il caos non genera. L'unico figlio attribuito a Nefti — Anubi — nacque dall'unione segreta con Osiride (in alcune versioni ingannato sul suo aspetto), un figlio illegittimo poi adottato e cresciuto da Iside.

Iconograficamente è quasi sempre rappresentata insieme a Iside, come sua controparte: testa di donna con il geroglifico del nome sul capo (una casa sormontata da un cesto), ali spiegate come Iside ma rivolte nella direzione opposta. Iside ai piedi della mummia, Nefti alla testa: le due sorelle sorvegliano l'intero corpo del morto. Il colore associato è il viola scuro del lutto.`,

      sub1: "I Lamenti Rituali — Iside e Nefti Piangono Osiride",
      text1: `Il ruolo più importante e caratteristico di Nefti è quello della lamentatrice — la sorella-piangente che insieme a Iside compie il rituale del lamento funebre su Osiride morto, riportandolo alla vita attraverso il potere delle lacrime e delle parole.

Le «Lamentazioni di Iside e Nefti» — testo liturgico conservato nel Papiro Bremner-Rhind (IV sec. a.C., British Museum) ma basato su tradizioni molto più antiche — sono uno dei documenti poetici più toccanti dell'Egitto antico. Due sacerdotesse, rappresentando le dee, cantavano in forma di antifona alternata, come un duetto di dolore cosmico:

«Vieni alla tua casa, vieni alla tua casa! Oh tu dei pilastri, vieni alla tua casa! Non ti vedo, ma il mio cuore ti desidera.» — Iside.
«Sono tua sorella Nefti. Vieni al tuo palazzo, affretta il tuo passo. Il mio volto ti cerca, le mie braccia sono aperte per riceverti.» — Nefti.

Il lamento non era solo espressione di dolore: era un atto magico. La forza del pianto delle due sorelle — il pianto cosmico di due dee — produceva la resurrezione di Osiride, esattamente come la magia di Iside e il rituale di Anubi avevano ricomposto il suo corpo. In questo senso Nefti non è inferiore a Iside: la sua metà del lamento era necessaria quanto quella della sorella. Un solo canto non bastava; servivano le voci di entrambe.

Il rituale delle lamentatrici rimase una pratica funeraria per tutta la storia egizia: donne professioniste (henet) venivano assunte per piangere ai funerali, rieseguendo il mito divino in forma umana. (Papiro Bremner-Rhind, trad. Raymond Faulkner, The Lamentations of Isis and Nephthys, Journal of Egyptian Archaeology, 1933.)`,

      sub2: "Nefti come Protezione dei Defunti — Hapy e i Vasi Canopi",
      text2: `Nel sistema funerario egizio Nefti era associata alla protezione di uno dei quattro figli di Horus — le divinità che custodivano gli organi rimossi durante la mummificazione e conservati nei vasi canopi. Nefti proteggeva Hapy, la divinità con testa di babbuino, custode dei polmoni.

I quattro figli di Horus — Imseti (fegato, testa umana), Duamutef (stomaco, testa di sciacallo), Qebehsenuef (intestini, testa di falco), Hapy (polmoni, testa di babbuino) — erano custoditi a loro volta dalle quattro dee: Iside con Imseti, Nefti con Hapy, Neith con Duamutef, Selkis con Qebehsenuef.

Il babbuino-Hapy era associato al nord e all'aria del nord — il vento che respirava Ra — e i polmoni erano il contenitore fisico di questa forza vitale. Nefti, come signora della soglia tra il visibile e l'invisibile, proteggeva l'organo che trasformava l'aria esterna (il mondo) in respiro interno (la vita): il polmone come membrana tra cosmo e individuo.

Nelle raffigurazioni sui coperchi dei sarcofagi Nefti e Iside appaiono sempre in coppia — alle spalle, alle gambe, ai lati — come una rete protettiva continua che avvolge il defunto. Le loro ali spiegate, riprodotte anche sul coperchio delle canopes, sono il segno tangibile della loro protezione permanente. Nefti senza Iside non ha senso, e Iside senza Nefti è incompleta: insieme formano la totalità della protezione femminile divina.`,

      sub3: "Nefti e la Maternità di Anubi — Il Figlio Illegittimo",
      text3: `La tradizione che fa di Nefti la madre di Anubi è una delle più interessanti varianti genealogiche dell'Egitto antico. La versione principale — riportata da Plutarco nel «Su Iside e Osiride» (cap. 14) e attestata in vari testi del Medio e Nuovo Regno — racconta che Nefti, sposa sterile di Seth, desiderasse un figlio e ingannasse Osiride sul suo aspetto.

Travestita da Iside (o semplicemente confusa con lei nell'oscurità del mito), Nefti si unì a Osiride e concepì Anubi. Quando Seth scoprì il tradimento, la minaccia per il bambino era reale: Seth, furioso e vendicativo, avrebbe potuto ucciderlo. Nefti abbandonò il figlio — una delle poche madri divine che abbandona il proprio figlio nel mito egizio — e fu Iside a trovarlo, adottarlo e crescerlo come proprio figlio.

Questa genealogia è teologicamente significativa per più ragioni. Prima: giustifica la posizione di Anubi come «figlio bastardo» — né pienamente nel campo dell'ordine (Osiride) né in quello del caos (Seth), ma in una posizione liminale perfetta per il dio della soglia tra vita e morte. Seconda: spiega il legame affettivo tra Anubi e Iside. Terza: mostra Nefti come figura tragica — sposa infelice, madre costretta all'abbandono, sempre nell'ombra di Iside — ma capace di azioni cruciali per il cosmo.

L'abbandono del figlio da parte di Nefti è uno dei rari momenti in cui questa dea silenziosa agisce per propria iniziativa, con conseguenze che cambiano il mito. (Plutarco, Su Iside e Osiride, cap. 14; trad. Jan Griffiths, University of Wales Press, 1970.)`,
    },
    versions: [
      {
        era: "Antico Regno — Sorella-lamentatrice",
        name: "Il lamento rituale",
        text: "Sin dai Testi delle Piramidi Nefti appare come la sorella-lamentatrice di Osiride. Nelle «Lamentazioni di Iside e Nefti» — testi liturgici molto antichi — le due sorelle piangono ritualmente il dio morto per farlo tornare in vita.",
      },
      {
        era: "Medio Regno — Madre di Anubi",
        name: "La tradizione di Anubi",
        text: "Una tradizione presenta Nefti come madre di Anubi. Sposa sterile di Seth, si sarebbe unita a Osiride (ingannandolo sul suo aspetto) concependo il figlio che poi affidò a Iside per essere cresciuto.",
      },
      {
        era: "Nuovo Regno — Protettrice dei defunti",
        name: "Custode di Hapy",
        text: "Nel culto funerario Nefti diventa protettrice di Hapy, uno dei quattro figli di Horus che custodivano gli organi del defunto (i polmoni, conservati in un vaso canopo con coperchio a testa di babbuino).",
      },
    ],
    cult: `Nefti non ebbe mai un proprio tempio principale, venerata sempre insieme a Iside o accanto ad Osiride. Il suo culto era strettamente funerario: era essenziale nei riti di mummificazione e nelle cerimonie di sepoltura.

Durante i «Lamenti di Iside e Nefti» — riti performati dalle sacerdotesse nei templi di Osiride — due donne rappresentavano le sorelle divine e cantavano antifone strazianti per il dio morto. Questi lamenti rituali sono tra i testi liturgici più antichi e potenti dell'Egitto.

A Philae, nel grande tempio di Iside, Nefti aveva una cappella dedicata. A Dendera e ad Abydos veniva venerata insieme a Iside come inseparabile compagna nella protezione dell'anima del defunto Osiride.`,
    influence: [
      {
        era: "La doppia lamentatrice",
        text: "L'immagine delle due donne-lamentatrici (Iside e Nefti ai lati di Osiride morto) ha influenzato l'iconografia del Compianto cristiano sul Cristo morto, con Maria Vergine e Maria Maddalena ai due lati.",
      },
      {
        era: "Le Prefiche mediterranee",
        text: "La figura di Nefti come lamentatrice professionale ha paralleli con le prefiche dei funerali greci e romani, e con le tradizioni mediterranee del lamento funebre — ancora vive in alcune aree del Sud Italia.",
      },
    ],
    texts: [
      {
        title: "Lamentazioni di Iside e Nefti",
        source: "Papiro Bremner-Rhind, IV sec. a.C.",
        text: "Sono tua sorella Nefti. Vieni al tuo palazzo, affretta il tuo passo. Il mio volto ti cerca, il mio cuore ti desidera. Le mie braccia sono aperte per riceverti. Vieni nel tuo santuario, vieni nella tua casa.",
      },
    ],
  },

  {
    id: "sobek",
    name: "Sobek",
    role: "Dio Coccodrillo del Nilo e della Forza",
    tags: ["Coccodrillo", "Nilo", "Forza", "Kom Ombo"],
    epithet: "Il Signore delle Acque, Colui che Rallegra i Cuori",
    type: "Divinità",
    chips: ["Acquatico", "Kom Ombo", "Fayyum"],
    heroColor: "linear-gradient(160deg,#0a1810,#102a1a,#06100a)",
    bio: {
      main: `Sobek — in egizio Sbk, pronuncia approssimativa «Sobek» o «Suchos» nella forma greca — è il dio coccodrillo dell'antico Egitto, signore delle acque del Nilo, incarnazione della forza primordiale delle acque. L'etimologia del nome è dibattuta: alcune proposte lo collegano alla radice sbk («essere fertile», «portare beneficio»), altri a una radice connessa all'idea di potere sulle acque. La variante greca Suchos era la forma usata nelle regioni del Fayyum.

Genealogicamente Sobek ha origini cosmogoniche: nacque dalle acque primordiali del Nun, figlio della dea Neith (la grande tessitrice primordiale di Sais, dea della guerra e della creazione) e del dio Seti. In alcune tradizioni partecipò attivamente al momento della creazione, e il suo ruolo nell'oltretomba include il recupero delle membra di Osiride sparse nel Nilo — un incarico che lo inserisce pienamente nel ciclo osiriaco pur non essendone la figura centrale.

La sua funzione cosmica è duplice. Come dio del Nilo è la forza bruta e indomabile del fiume — la piena, la corrente, la profondità insondabile. Come protettore dei faraoni è il guardiano dall'arma più imprevedibile e letale: il coccodrillo, l'animale più pericoloso dell'Africa, che attaccava pastori e contadini senza preavviso. Divinizzarlo significava tentare di trasformarlo da predatore in protettore.

Iconograficamente Sobek appare come coccodrillo o come uomo con testa di coccodrillo, spesso sormontato dal disco solare cinto dall'ureo — indicatore del suo legame con Ra nella forma sincretica Sobek-Ra. I colori associati sono il verde del Nilo e il giallo-ocra delle sabbie fluviali. Il numero sacro è quattro, i quattro punti cardinali delle rive del Nilo.`,

      sub1: "Sobek e il Nilo — Il Dio della Piena Fertile",
      text1: `La relazione di Sobek con il Nilo non è quella di un semplice dio fluviale: è quella di una forza cosmica identificata con la potenza generativa e distruttrice del fiume stesso. Il Nilo per gli egizi non era solo fonte d'acqua: era la fonte di tutta la vita, il principio che distingueva l'Egitto dal deserto sterile che lo circondava.

La piena annuale — la stagione di Akhet, tra giugno e settembre — portava il limo fertile che rendeva possibile l'agricoltura. Ma la stessa piena poteva distruggere argini, inondare villaggi, uccidere bestiame. Il coccodrillo incarnava questa ambivalenza: emergeva dalle acque come un dono della piena, ma era anche il pericolo nascosto nelle acque calme.

Nei testi cosmogonici Sobek è descritto come colui che «portò i pesci con sé», colui che «fece emergere le rive verdi» — è lui che, con il movimento della sua coda potente, mescola le acque del Nilo portando il limo verso le rive. Il suo corpo è il letto del fiume, le sue squame sono le rocce del fondo, il suo respiro è l'umidità che sale dai papiri. Questa identificazione fisica con il Nilo lo rendeva una divinità agraria tanto quanto acquatica: senza Sobek, senza il coccodrillo-fiume, non c'era fertilità.

Il legame con la fertilità spiegava anche il suo epiteto: «Colui che rallegra i cuori». La piena del Nilo era motivo di gioia autentica — significava abbondanza per l'anno successivo. Sobek, signore della piena, era quindi anche il dio che portava la prosperità. (Papiro della Ramesseum, XII dinastia; trad. Penelope Wilson, Sobek of Shedet, 1997.)`,

      sub2: "Il Culto del Coccodrillo Sacro — Il Fayyum e Kom Ombo",
      text2: `Il grande centro del culto di Sobek era il Fayyum — l'oasi naturale a sud-ovest del Cairo, ricca di acque e, in antico, di coccodrilli. La città principale era Shedet, ribattezzata dai greci Crocodilopolis («città del coccodrillo»), che conteneva il grande tempio di Sobek e un famoso sistema di allevamento dei coccodrilli sacri.

Erodoto (Storie II, 69-70) descrive il rito dei coccodrilli sacri di Shedet: nell'acqua del tempio viveva un singolo coccodrillo designato come incarnazione terrena di Sobek. Era trattato come un dio vivente — nutrito con carne, pesci e dolci al miele, adornato con gioielli d'oro e cristallo agli orecchi e ai polsi delle zampe anteriori. I sacerdoti lo alimentavano durante le cerimonie pubbliche. Alla morte veniva imbalsamato e sepolto con onori regali, poi immediatamente sostituito da un altro coccodrillo selezionato per segni specifici.

Il tempio gemello di Kom Ombo (Alto Egitto, ca. 180 a.C.) era dedicato metà a Sobek e metà a Horus il Vecchio — una rara architettura religiosa «doppia» che risolveva architettonicamente il problema di due divinità tradizionalmente antagoniste. La sua funzione di oracolo attraeva pellegrinaggi da tutta la regione.

Nei musei annessi al tempio di Kom Ombo è oggi conservata una delle più importanti collezioni di mummie di coccodrilli dell'Egitto — animali imbalsamati con cura estrema, alcuni di dimensioni colossali, deposti come offerte votive nei cimiteri sacri attorno al tempio. (Erodoto, Storie II, 69-70; trad. Augusta Ferri, Einaudi, 1956.)`,

      sub3: "Sobek e il Mito Osiriaco — Il Recupero delle Membra",
      text3: `Nonostante non sia una figura centrale del ciclo osiriaco, Sobek appare in una delle versioni più singolari del mito: il recupero delle membra di Osiride sparse nel Nilo. Quando Seth smembrò il corpo del fratello e ne disperse i frammenti nelle acque del Nilo, il problema era che i coccodrilli — i predatori naturali del fiume — avrebbero potuto distruggerli prima che Iside li trovasse.

In alcune versioni del mito, invece di essere il pericolo, Sobek diventa l'aiuto. I coccodrilli sacri, obbedendo al loro dio, avrebbero guidato Iside nelle sue ricerche, segnalando con la loro presenza silenziosa i luoghi dove giacevano i frammenti del corpo divino. Il coccodrillo come psicopompo acquatico, guida dell'anima divina, è una delle inversioni mitologiche più suggestive dell'intera tradizione egizia.

Un'altra tradizione connette Sobek all'episodio della lotta tra Horus e Seth: il fallo (o il testicolo) di Seth, gettato nel Nilo, sarebbe stato inghiottito da un coccodrillo sacro a Sobek — che in questo modo divenne custode involontario di un potere cosmico ambiguo.

Il collegamento tra Sobek e Osiride si formalizzò in alcuni centri cultuali del Fayyum dove veniva venerata la forma sincretica Sobek-Osiride: il dio del Nilo che porta vita dal limo e il dio dei morti che porta rinascita dalla morte erano percepiti come aspetti complementari dello stesso principio cosmico di rigenerazione. (Testi del tempio di Kom Ombo, epoca tolemaica; trad. Heinz-Joseph Thissen, Aus der Krokodilopolis, 1993.)`,
    },
    versions: [
      {
        era: "Antico Regno",
        name: "Dio del Fayyum",
        text: "Sin dall'Antico Regno Sobek è il dio principale del Fayyum, la grande oasi verdeggiante ricca di coccodrilli. La città di Shedet (greca Crocodilopolis, oggi Medinet el-Fayyum) era il suo centro principale.",
      },
      {
        era: "Medio Regno — Ascesa del culto",
        name: "Sobek-Ra",
        text: "Con la XII dinastia, originaria proprio del Fayyum, il culto di Sobek si diffonde in tutto l'Egitto. Si fonde con Ra formando Sobek-Ra, una divinità solare-acquatica che unisce due elementi apparentemente opposti.",
      },
      {
        era: "Nuovo Regno — Kom Ombo",
        name: "Tempio condiviso con Horus",
        text: "A Kom Ombo Sobek era venerato insieme a Horus il Vecchio in un tempio unico diviso simmetricamente tra le due divinità — un raro esempio di tempio «doppio» per placare due dei tradizionalmente nemici.",
      },
    ],
    cult: `Il centro principale del culto di Sobek era il Fayyum, con la città di Crocodilopolis. Qui i sacerdoti allevavano coccodrilli sacri in bacini dedicati: venivano nutriti con offerte, adornati con gioielli d'oro, e alla morte mummificati con riti elaborati.

Un altro importante centro era Kom Ombo, dove ancora oggi si può visitare il tempio doppio di Sobek e Horus. Qui un intero museo annesso espone centinaia di mummie di coccodrilli rinvenute nei cimiteri sacri.

Erodoto racconta che nei templi di Sobek venivano tenuti coccodrilli «addomesticati» con cui i sacerdoti interagivano per riti oracolari. I devoti pagavano per nutrire i coccodrilli sacri con carne, dolci e miele, considerato un atto di grande merito religioso.`,
    influence: [
      {
        era: "Il coccodrillo come simbolo",
        text: "Il coccodrillo egizio è diventato un simbolo universale dell'Egitto antico nell'immaginario culturale. In epoca romana, statue di coccodrilli venivano importate a Roma come curiosità.",
      },
      {
        era: "Il mito del drago",
        text: "Alcuni studiosi hanno proposto che il coccodrillo-divinità egizio sia uno degli antecedenti culturali dei draghi nelle mitologie mediterranee, africane e orientali — pur con le dovute differenze.",
      },
    ],
    texts: [
      {
        title: "Inno a Sobek",
        source: "Papiro della Ramesseum, XII dinastia",
        text: "Salute a te, Sobek del Fayyum, signore di Shedet, che sorgi dal Nun. Il tuo potere è la potenza dell'acqua, la tua forza è la fertilità del limo. Tu proteggi il re come proteggi il giovane Horus nelle paludi.",
      },
    ],
  },
];

const EGIZIO_HEROES = [
  {
    id: "horus-giovane",
    name: "Horus il Bambino",
    epithet: "Il Figlio Vendicatore, L'Erede Legittimo",
    type: "Eroe divino",
    chips: [
      "Figlio di Osiride",
      "Paludi di Chemmis",
      "Erede al trono",
      "Bambino perseguitato",
    ],
    heroColor: "linear-gradient(160deg,#1a1500,#3a2e00,#121000)",
    shortDesc:
      "Concepito dalla magia di Iside sul corpo mummificato di Osiride, nasce nelle paludi del Delta e cresce nascosto allo zio Seth. Sopravvive a veleni, scorpioni e malattie grazie alla magia materna, per poi affrontare Seth in una lotta epica per il trono d'Egitto.",
    bio: {
      main: `Horus il Bambino (Hor-pa-khered, greco Arpocrate) rappresenta una delle figure eroiche più potenti della mitologia egizia. Non è un eroe mortale come Gilgamesh — è un dio-bambino che deve letteralmente lottare per esistere, sopravvivere, reclamare il proprio diritto. La sua storia è archetipica: l'erede legittimo perseguitato dall'usurpatore, costretto a nascondersi fino al momento della resa dei conti.

Horus nasce da un atto di magia estrema: Iside, dopo aver ricomposto le membra smembrate di Osiride, si trasforma in nibbio e si posa sul corpo mummificato del marito, riuscendo a concepire un figlio postumo. È un concepimento impossibile, letteralmente miracoloso.`,
      sub1: "Nascita e fuga nelle paludi",
      text1: `Consapevole della minaccia di Seth, Iside si rifugia nelle paludi di Chemmis nel Delta, dove partorisce Horus in segreto. Le paludi sacre diventano il suo nascondiglio sacro: Iside lo protegge con la sua magia (heka) e con l'aiuto della sorella Nefti e di una nutrice scorpione, Selket.

Il piccolo Horus cresce in condizioni precarie: viene morso da scorpioni, ammala di febbri misteriose, attacchi di serpenti. Ogni volta Iside ricorre alla sua magia per guarirlo. Questi episodi si cristallizzano in formule magiche usate per tutta la storia egizia come protezione per i bambini reali dei mortali.`,
      sub2: "Le Contese di Horus e Seth",
      text2: `Giunto alla maturità, Horus si presenta davanti all'Enneade degli dèi per reclamare il trono di suo padre. Il contenzioso — raccontato nel celebre "Papiro Chester Beatty I" del XIX secolo a.C. — dura ottant'anni. Seth rifiuta di cedere, sostenendo che il trono spetta alla forza (sua) e non al diritto (di Horus).

L'Enneade si divide: Ra sostiene Seth, la maggioranza degli altri dèi sta con Horus. Si susseguono episodi di grande violenza e anche di crudo umorismo: Seth tenta di umiliare sessualmente Horus, che lo raggira con uno stratagemma di Iside; combattono trasformati in ippopotami nel Nilo; si sfidano in gare nautiche truccate.`,
      sub3: "La lotta cosmica e la perdita dell'occhio",
      text3: `Durante una delle lotte, Seth strappa a Horus l'occhio sinistro (quello lunare). Horus, per vendetta, strappa a Seth un testicolo. L'occhio di Horus viene fatto a pezzi e disperso, poi ritrovato e guarito dal dio Thoth. Diventerà l'Occhio di Horus (Udjat) — il simbolo più potente della magia protettiva egizia.

Alla fine, dopo decenni di contesa, l'Enneade decide: Horus è il legittimo erede. Seth viene esiliato nel deserto (o, in altre versioni, incorporato nella barca di Ra come difensore contro Apophis). Horus sale sul trono d'Egitto — e ogni faraone dopo di lui sarà considerato sua incarnazione vivente.`,
      sub4: "L'eredità",
      text4: `Horus regna sull'Egitto portando l'ordine (Maat) dopo il caos (Isfet) del dominio di Seth. Dona a suo padre Osiride l'occhio recuperato, e grazie a questo dono Osiride può "vedere" e regnare eternamente nell'oltretomba.

La vittoria di Horus non è solo una rivincita personale: è il fondamento mitico dell'intera civiltà egizia. Ogni faraone, salendo al trono, rinnova la vittoria di Horus sul caos. La regalità egizia è sostanzialmente la perpetuazione terrena del trionfo di Horus.`,
    },
    versions: [
      {
        era: "Testi delle Piramidi",
        name: "Frammenti arcaici",
        text: "Nei Testi delle Piramidi (V dinastia) il mito di Horus è ancora frammentario, ma già contiene gli elementi chiave: l'avversione a Seth, la vendetta del padre, la conquista del trono.",
      },
      {
        era: "Medio Regno — Testi dei Sarcofagi",
        name: "Elaborazione narrativa",
        text: "Con i Testi dei Sarcofagi la storia si arricchisce. Compaiono episodi specifici della fuga nelle paludi, delle malattie del bambino, della magia di Iside.",
      },
      {
        era: "Nuovo Regno — Papiro Chester Beatty",
        name: "La versione completa",
        text: 'Il Papiro Chester Beatty I (ca. 1160 a.C.) contiene la versione più completa e narrativamente sofisticata delle "Contese di Horus e Seth". È un capolavoro letterario che mescola mito epico, commedia e teologia.',
      },
      {
        era: "Stele di Metternich",
        name: "Le sofferenze del bambino",
        text: "La Stele di Metternich (IV sec. a.C.) raccoglie formule magiche basate sulle sofferenze del piccolo Horus. Veniva usata versando acqua sulla stele e bevendo il liquido come rimedio contro veleni e malattie.",
      },
    ],
    influence: [
      {
        era: "Figura archetipica dell'erede perseguitato",
        text: 'Horus è uno dei primi esempi mitici del "giovane erede perseguitato che si vendica dell\'usurpatore". Lo schema ricompare in Oreste (Agamennone), in Amleto, in innumerevoli racconti popolari.',
      },
      {
        era: "Cristianesimo — paralleli con Cristo",
        text: "Horus bambino nato miracolosamente, perseguitato da un usurpatore (Seth/Erode), che sconfigge il male e stabilisce il regno eterno, è stato spesso paragonato a Cristo. Alcuni studiosi vedono influenze egizie sulla formazione dell'iconografia cristiana primitiva.",
      },
      {
        era: "Apollo e la sconfitta di Pitone",
        text: "Il giovane Apollo che sconfigge il serpente Pitone per stabilire il proprio culto a Delfi ha paralleli strutturali con il mito di Horus che sconfigge Seth. L'influenza egizia sulla Grecia arcaica è oggi ampiamente documentata.",
      },
      {
        era: "L'Occhio di Horus come simbolo universale",
        text: "L'Udjat — l'Occhio di Horus — è diventato uno dei simboli più riprodotti della storia: amuleto egizio, simbolo massonico, emblema esoterico, tatuaggio contemporaneo. Rappresenta protezione, interezza, visione interiore.",
      },
    ],
    texts: [
      {
        title: "Le Contese di Horus e Seth — apertura",
        source: "Papiro Chester Beatty I, XIX dinastia",
        text: 'La Grande Enneade si radunò nella Sala del Giudizio. Horus, figlio di Iside, disse: "Giustizia per me, giustizia! Io sono il figlio di Osiride, il primogenito, l\'erede. Eppure questo zio mio, Seth, siede sul trono che spetta a me".',
      },
      {
        title: "Stele di Metternich — guarigione del piccolo Horus",
        source: "IV secolo a.C., Metropolitan Museum",
        text: 'Iside pianse amaramente su suo figlio. Gridò al cielo: "Nessuno risponde al mio lamento? Eppure ero grande in cielo come in terra!". Allora Thoth scese dal cielo con la magia di Ra. E Horus fu guarito, per la potenza delle parole antiche.',
      },
    ],
  },
  {
    id: "imhotep",
    name: "Imhotep",
    epithet: "Il Saggio Divinizzato, Medico degli Dei",
    type: "Uomo divinizzato",
    chips: [
      "Reale ministro",
      "III dinastia",
      "Architetto di Saqqara",
      "Divinizzato",
    ],
    heroColor: "linear-gradient(160deg,#1a1500,#3a2e00,#0e0a00)",
    shortDesc:
      "Visir e medico personale del faraone Djoser, progettò la prima grande piramide della storia (Saqqara, ca. 2650 a.C.). Secoli dopo la sua morte fu divinizzato come figlio di Ptah, patrono della medicina e della saggezza — uno dei rarissimi umani egizi ammessi nel pantheon.",
    bio: {
      main: `Imhotep è una delle figure più straordinarie della storia umana: un uomo reale, vissuto nel XXVII secolo a.C., che duemila anni dopo la sua morte veniva venerato come un dio. Il primo architetto, il primo medico, il primo intellettuale di cui la storia conservi memoria personale — e l'unico mortale dell'Egitto antico a essere elevato al rango di divinità a pieno titolo.

Era il visir, architetto, medico e gran sacerdote del faraone Djoser (ca. 2670–2650 a.C.) della III dinastia. Progettò la piramide a gradoni di Saqqara — la prima piramide mai costruita, e la prima grande struttura in pietra della storia umana. Con quell'opera rivoluzionò l'architettura mondiale.`,
      sub1: "L'architetto rivoluzionario",
      text1: `Prima di Imhotep i faraoni erano sepolti sotto mastabe — grandi piattaforme rettangolari di mattoni crudi. Imhotep ebbe l'idea di sovrapporre mastabe di pietra di dimensioni decrescenti, creando una struttura gradonata di sessanta metri di altezza.

Il complesso di Saqqara non è solo la prima piramide: è il primo grande complesso monumentale in pietra, con templi, cortili, cappelle, gallerie sotterranee. Per la sua complessità, alcuni studiosi hanno paragonato Imhotep a un Leonardo da Vinci dell'antichità.`,
      sub2: "Il medico",
      text2: `Imhotep è considerato il fondatore della medicina egizia. Il celebre Papiro Edwin Smith — il più antico trattato chirurgico del mondo — è tradizionalmente attribuito alla sua scuola, anche se la sua stesura definitiva è molto successiva.

Il papiro descrive quarantotto casi clinici con diagnosi, prognosi e trattamenti, in uno stile razionale sorprendentemente moderno: niente magia, solo osservazione empirica. Questo approccio razionale — chiamato dagli studiosi "protoscientifico" — è uno dei più antichi esempi di medicina basata sull\'osservazione.`,
      sub3: "La divinizzazione",
      text3: `Imhotep morì probabilmente sotto Djoser o poco dopo, e fu sepolto a Saqqara (la sua tomba non è stata ancora identificata con certezza). Per secoli rimase una figura storica venerata ma non divina: era considerato il "saggio" per eccellenza.

Solo mille anni dopo, durante il Nuovo Regno, iniziò un processo di progressiva divinizzazione. Nel Periodo Tardo (ca. 525 a.C.) Imhotep era pienamente un dio: figlio di Ptah e di una madre mortale (Kheredu-ankh), patrono dei medici, dei saggi, degli scribi. Gli venivano dedicati templi, si facevano sacrifici al suo nome, malati si recavano nei suoi santuari in cerca di guarigione miracolosa.`,
      sub4: "L'eredità universale",
      text4: `Imhotep è un caso unico nella storia: un mortale divinizzato a pieno titolo, equiparato agli dèi cosmici. I greci lo identificarono con Asclepio, il dio-medico, e il suo culto fiorì in epoca tolemaico-romana ben oltre i confini egizi.

Alcuni studiosi ipotizzano che la figura biblica di Giuseppe (visir di un faraone, saggio straordinario, salvatore dell'Egitto dalla carestia) sia in qualche modo ispirata alla memoria di Imhotep — o che entrambe le figure rappresentino lo stesso archetipo del "saggio straniero al servizio del faraone".`,
    },
    versions: [
      {
        era: "III Dinastia (XXVII sec. a.C.)",
        name: "Il personaggio storico",
        text: "Imhotep è attestato come visir di Djoser in iscrizioni contemporanee — rarissime menzioni per un non-faraone all'inizio dell'Antico Regno, segno della sua straordinaria importanza.",
      },
      {
        era: "Nuovo Regno",
        name: "Il saggio mitico",
        text: 'Nei testi sapienziali del Nuovo Regno Imhotep è citato insieme ad Hordjedef come il saggio per antonomasia. "Chi oggi è come Imhotep?", si domanda malinconicamente un testo.',
      },
      {
        era: "Periodo Tardo e Tolemaico",
        name: "Il dio Asclepio egizio",
        text: "Durante il Periodo Tardo la divinizzazione è completa. Templi a Saqqara, Tebe, Philae lo venerano come dio. I greci lo identificano con Asclepio: il santuario di Deir el-Bahari diventa meta di pellegrinaggi per guarigioni miracolose.",
      },
    ],
    influence: [
      {
        era: "Nascita dell'architettura monumentale",
        text: "Imhotep è letteralmente il padre dell'architettura monumentale in pietra. Senza la sua innovazione, probabilmente, le grandi piramidi, i templi colossali, i palazzi monumentali non sarebbero mai esistiti nella forma che conosciamo.",
      },
      {
        era: 'Prima figura di "intellettuale" della storia',
        text: 'Imhotep è considerato da molti storici la prima figura documentata di "uomo di scienza" — qualcuno che combina conoscenza tecnica, teorica, medica e filosofica. È il prototipo del savant.',
      },
      {
        era: "Asclepio e la medicina greca",
        text: "L'identificazione di Imhotep con Asclepio è pre-ellenistica e testimonia una continuità di tradizione medica egizio-greca. Il Corpus ippocratico riconosce esplicitamente debiti con la medicina egizia.",
      },
      {
        era: "Immaginario popolare moderno",
        text: 'Il film "La Mummia" (1999) ha trasformato ironicamente Imhotep in un mostro malvagio — una distorsione drammatica del reale Imhotep, che è una delle figure più benefiche e venerate della storia egizia.',
      },
    ],
    texts: [
      {
        title: "Iscrizione sulla base della statua di Djoser",
        source: "III dinastia, ca. 2670 a.C.",
        text: "Il Cancelliere del Re del Basso Egitto, il primo dopo il Re dell'Alto Egitto, sovrintendente del Grande Palazzo, nobile ereditario, gran sacerdote di Eliopoli, Imhotep, il costruttore, lo scultore.",
      },
      {
        title: "Inno a Imhotep dal tempio di Deir el-Medina",
        source: "Nuovo Regno, XIX dinastia",
        text: "Salute a te, figlio di Ptah, saggio dal cuore eccellente! Tu sei colui a cui si rivolgono nella malattia. Tu sei il medico che guarisce, il dotto che conosce ogni rimedio. Nelle tue mani sta la vita, nel tuo sapere la salute.",
      },
    ],
  },
];

const EGIZIO_MYTHS = [
  {
    id: "osiride-mito",
    tag: "Mito fondativo",
    title: "Il Mito di Osiride — Morte e Resurrezione del Dio-Re",
    type: "Mito",
    epithet: "Il Mito Centrale della Civiltà Egizia",
    chips: ["Enneade", "Plutarco", "Osiride", "Iside", "Seth", "Horus"],
    heroColor: "linear-gradient(160deg,#0d2010,#103820,#060e08)",
    shortDesc:
      "Il mito più importante della religione egizia: Osiride re civilizzatore viene assassinato dal fratello Seth, smembrato e disperso nel Nilo. Iside con la sua magia lo ricompone e concepisce Horus, che vendicherà il padre. Osiride diventa il signore dell'oltretomba, Horus il re d'Egitto.",
    bio: {
      main: `Il mito di Osiride è il racconto più importante e influente dell'antica religione egizia, e uno dei miti più potenti mai elaborati dall'umanità. Contiene in sé i grandi temi universali: amore e tradimento, morte e resurrezione, il conflitto tra ordine (Maat) e caos (Isfet), la vendetta del figlio sull'usurpatore del padre.

Non esiste un testo egizio unico che racconti il mito completo. Le sue componenti sono sparse in centinaia di iscrizioni, inni, formule funerarie — i Testi delle Piramidi (V dinastia), i Testi dei Sarcofagi (Medio Regno), il Libro dei Morti (Nuovo Regno). La narrazione continua e organica più famosa ci è stata tramandata dal filosofo greco Plutarco nel suo "Su Iside e Osiride" (I-II sec. d.C.), anche se mediata dalla sua interpretazione ellenistica.`,
      sub1: "Il regno dorato di Osiride",
      text1: `Nati dall'unione di Geb (la terra) e Nut (il cielo), i quattro fratelli — Osiride, Iside, Seth, Nefti — rappresentano le quattro forze fondamentali del cosmo. Osiride è il primogenito, e sposa la sorella Iside secondo il costume divino.

Diventato re d'Egitto, Osiride si rivela un sovrano straordinario: insegna agli uomini l'agricoltura (fino ad allora cibandosi solo di ciò che trovavano), le leggi, il culto degli dèi, la costruzione delle città. Sotto il suo regno l'Egitto conosce un'epoca d'oro di civiltà e prosperità. Osiride poi parte per insegnare le arti della civiltà al resto del mondo, lasciando il regno sotto la reggenza di Iside.`,
      sub2: "Il complotto di Seth",
      text2: `Seth — il fratello minore, dio del deserto, del caos, della forza bruta — è divorato dall'invidia. Tornato Osiride dai viaggi, Seth organizza una cospirazione con 72 complici. Durante un banchetto, Seth presenta una magnifica cassa riccamente decorata, promettendola in dono a chi vi si adatterà perfettamente.

Tutti i presenti vi entrano senza successo — la cassa era stata costruita sulla misura esatta di Osiride. Quando Osiride vi si distende, Seth e i complici chiudono il coperchio, sigillano la cassa con piombo, e la gettano nel Nilo. La cassa fluttua verso il mare, arrivando fino alle coste di Byblos, in Fenicia, dove si incastra nel tronco di un albero di tamerice. L'albero cresce attorno alla cassa, inglobandola.`,
      sub3: "La ricerca di Iside",
      text3: `Iside, disperata, parte alla ricerca del corpo. Attraversa deserti, trasformata in varie forme. Arriva a Byblos, dove scopre che l'albero è stato tagliato dal re del luogo per farne una colonna del suo palazzo. Iside si fa assumere come nutrice dei figli del re e, durante la notte, tenta di rendere immortale il principe avvolgendolo nel fuoco magico. Quando la regina la scopre e urla terrorizzata, Iside si rivela come dea e chiede la colonna. Le viene concessa.

Estratta la cassa dal tronco, Iside torna in Egitto. Nasconde il corpo nelle paludi del Delta per prepararlo alla sepoltura. Ma Seth, cacciando una notte sotto la luna, trova il corpo. Furente, lo fa a pezzi — quattordici pezzi secondo Plutarco — e li disperde lungo tutto il Nilo.`,
      sub4: "La ricomposizione e la resurrezione",
      text4: `Iside, aiutata dalla sorella Nefti, naviga il Nilo con una barca di papiri alla ricerca dei pezzi. Ne ritrova tredici — il fallo è stato mangiato da un pesce, ossiride. Iside ne modella uno sostitutivo con argilla del Nilo.

Ricomposto il corpo e bendato (la prima mummificazione della storia, eseguita con l'aiuto di Anubi), Iside si trasforma in nibbio, batte le ali sul marito, e lo riporta in vita — per una sola notte. In quella notte concepisce Horus. Osiride non può tornare a regnare sulla terra: dopo aver conosciuto la morte, non può più tornare completamente tra i vivi. Diventa il sovrano del Duat, signore dei morti, giudice supremo delle anime.`,
    },
    versions: [
      {
        era: "Testi delle Piramidi (V-VI dinastia)",
        name: "Forma arcaica",
        text: "Le prime menzioni compaiono nei Testi delle Piramidi (ca. 2400 a.C.). Il mito è già presente nei suoi elementi essenziali, ma in forma frammentaria e spesso allusiva.",
      },
      {
        era: "Stele di Amenmose",
        name: "Inno narrativo",
        text: "La Stele di Amenmose (XVIII dinastia, oggi al Louvre) contiene uno degli inni narrativi più completi sul mito osiriaco in forma egizia originale.",
      },
      {
        era: 'Plutarco — "Su Iside e Osiride"',
        name: "La versione classica",
        text: "L'opera di Plutarco (I-II sec. d.C.) è la fonte più completa e coerente del mito. Anche se mediata da interpretazione ellenistica, preserva elementi autentici antichissimi.",
      },
      {
        era: "Versioni locali",
        name: "Le quattordici tombe di Osiride",
        text: "Ogni provincia dell'Egitto tardo rivendicava di possedere una parte del corpo di Osiride. Il tempio di Abydos custodiva la testa; altre città — tombe di gambe, braccia, organi. Tutti siti sacri di pellegrinaggio.",
      },
    ],
    influence: [
      {
        era: "Archetipo del dio morente e risorgente",
        text: 'James Frazer ne "Il ramo d\'oro" identifica Osiride come il prototipo del "dio morente e risorgente" — archetipo universale che ricompare in Tammuz mesopotamico, Adone greco, Attis frigio, Balder norreno, Dioniso greco, e secondo alcune interpretazioni influenza la teologia della Passione cristiana.',
      },
      {
        era: "La mummificazione",
        text: 'L\'intera pratica della mummificazione egizia si basa sul mito: ogni defunto veniva trattato come un "Osiride" da ricomporre per la vita eterna. I riti funerari sono drammatizzazioni ripetute del mito.',
      },
      {
        era: "Dioniso greco",
        text: "Già Erodoto identificava Osiride con Dioniso: entrambi sono dèi smembrati, rinati, associati alla vegetazione, alle feste estatiche, al vino. Plutarco elabora esplicitamente questi paralleli.",
      },
      {
        era: "Massoneria e simbolismo moderno",
        text: "Il mito osiriaco è entrato nell'immaginario massonico come simbolo di iniziazione, morte simbolica e rinascita. L'aria di Mozart \"O Isis und Osiris\" nel Flauto Magico ne è la più celebre espressione artistica.",
      },
    ],
    texts: [
      {
        title: "Il Grande Inno a Osiride — Stele di Amenmose",
        source: "XVIII dinastia, ca. 1400 a.C.",
        text: "Poi Iside, dea sapiente, cercò il suo fratello. Vagò per questa terra senza fermarsi, non riposò finché non lo trovò. Con le sue piume creò ombra, con le sue ali fece aria. Essa pianse, essa riportò a casa suo fratello.",
      },
      {
        title: "Plutarco — Su Iside e Osiride, cap. 13-18",
        source: "Plutarco, I-II sec. d.C.",
        text: "Tifone [Seth], quando Osiride stava regnando sull'Egitto, persuase il fratello a entrare in una cassa bellissima, poi la fece chiudere e gettare nel Nilo. Iside, saputo del fatto, tagliò una ciocca dei propri capelli e indossò vesti a lutto, cominciando la ricerca dolorosa.",
      },
    ],
  },
  {
    id: "enneade-mito",
    tag: "Cosmogonia",
    title: "L'Enneade Eliopolitana — La Creazione dell'Universo",
    type: "Mito",
    epithet: "La Creazione secondo Eliopoli",
    chips: ["Atum", "Nun", "Cosmogonia", "Testi delle Piramidi"],
    heroColor: "linear-gradient(160deg,#1a0800,#3a1c00,#0a0400)",
    shortDesc:
      "La cosmogonia più antica e autorevole dell'Egitto. Dalle acque primordiali del Nun emerge Atum, che autogenera la prima coppia divina (Shu e Tefnut). Da loro nasce la seconda (Geb e Nut), poi i quattro figli dell'Enneade (Osiride, Iside, Seth, Nefti). Nove divinità che costituiscono l'intero cosmo.",
    bio: {
      main: `La cosmogonia eliopolitana è la più antica e sistematica narrazione egizia della creazione del mondo. Elaborata dai sacerdoti di Eliopoli (Iunu, "la città del pilastro") — grande centro religioso del Basso Egitto poco a nord dell'attuale Cairo — fu conservata principalmente nei Testi delle Piramidi della V-VI dinastia (ca. 2400-2200 a.C.) e influenzò ogni cosmogonia egizia successiva.

L'Enneade — dal greco ennéas, "gruppo di nove" — traduce il termine egizio pesedjet, "i Nove". È il nome collettivo delle nove divinità primordiali di Eliopoli che, secondo la dottrina sacerdotale, costituiscono l'intero universo divino.`,
      sub1: "Il Nun primordiale",
      text1: `Prima della creazione, esisteva solo il Nun: l'oceano primordiale di acque scure, caotico, informe, inerte, eternamente esistente. Non era un dio attivo — era la sostanza precosmica, il caos originario. Dentro il Nun c'era il potenziale di tutte le cose, ma nulla aveva ancora forma.

Non c'era cielo, non c'era terra. Non esistevano divisioni né differenze. Il tempo non scorreva. Era la condizione del non-essere, il "prima" assoluto.`,
      sub2: "L'emersione di Atum",
      text2: `Da questo caos primordiale emerge per autogenerazione Atum — il cui nome significa "la totalità" o "il completo". Il primo dio non ha genitori, non ha origine: si manifesta da sé come potere di esistere. Sale sulla collina primordiale di Benben — la prima terra emersa dalle acque — e prende coscienza di sé.

La pietra Benben (probabilmente una meteorite venerata a Eliopoli) rappresenta il raggio solare pietrificato, il punto sacro della prima manifestazione. Le piramidi e gli obelischi sono derivati architettonici di questa pietra cosmica.`,
      sub3: "La prima coppia — Shu e Tefnut",
      text3: `Atum, solo nell'universo, decide di generare. Non avendo compagna, ricorre all'autogenerazione: secondo alcune versioni si masturba, secondo altre sputa, secondo altre ancora starnutisce. Dal suo seme o dalla sua saliva nascono Shu (l'aria, il principio maschile attivo) e Tefnut (l'umidità, il principio femminile ricettivo).

Questi due elementi primordiali — aria e umidità — sono le prime distinzioni del cosmo. Senza aria e umidità, la vita non può esistere. Con loro, la creazione può procedere.`,
      sub4: "Geb e Nut, i quattro figli, e la struttura del cosmo",
      text4: `Shu e Tefnut si uniscono e generano Geb (la terra, maschile) e Nut (il cielo, femminile). Ma i due fratelli-amanti sono così strettamente abbracciati che nulla può nascere tra loro. Atum ordina a Shu di separarli: Shu solleva Nut verso l'alto e calpesta Geb sotto di sé, formando l'arco del cielo sopra la terra.

Prima della separazione, Geb e Nut hanno generato i quattro grandi dèi del mito osiriaco: Osiride e Iside (ordine, civiltà), Seth e Nefti (caos, deserto). Nut continua a "partorire" il sole ogni mattina e a "ingoiarlo" ogni sera — da cui nasce il ciclo del giorno e della notte.

Nove divinità: Atum, Shu, Tefnut, Geb, Nut, Osiride, Iside, Seth, Nefti. L'Enneade è completa. L'universo è strutturato. L'umanità può nascere — in alcune versioni dalle lacrime di Atum, in altre dalla separazione di Geb e Nut, in altre ancora dal sudore degli dèi.`,
    },
    versions: [
      {
        era: "Testi delle Piramidi (V-VI dinastia)",
        name: "La versione più antica",
        text: "I Testi delle Piramidi sono la fonte più autorevole: incisi sulle pareti interne delle piramidi di Saqqara, sono i più antichi testi religiosi al mondo (ca. 2400 a.C.).",
      },
      {
        era: "Cosmogonia ermopolitana",
        name: "L'Ogdoade",
        text: "A Ermopoli si elaborò una cosmogonia parallela con otto divinità primordiali (Ogdoade): quattro coppie maschio-femmina rappresentanti aspetti del caos originario (Nun, Heh, Kek, Amon e le rispettive femmine). Da loro sarebbe nato l'uovo cosmico.",
      },
      {
        era: "Cosmogonia menfita — Ptah",
        name: "Creazione attraverso il verbo",
        text: "A Menfi Ptah fu proclamato creatore supremo attraverso pensiero e parola, in una dottrina cosmogonica raffinatissima conservata sulla Pietra di Shabaka (VIII sec. a.C.).",
      },
      {
        era: "Cosmogonia tebana — Amon",
        name: "L'invisibile creatore",
        text: "Nel Nuovo Regno, Tebe elaborò la propria cosmogonia con Amon come creatore invisibile e inesprimibile, superiore a tutte le altre divinità.",
      },
    ],
    influence: [
      {
        era: "Genesi biblica",
        text: "Alcuni elementi — lo spirito che si muove sulle acque primordiali, la separazione cielo-terra, la creazione per divisioni successive — presentano paralleli con la cosmogonia eliopolitana. L'influenza egizia sulla tradizione biblica è ampiamente dibattuta.",
      },
      {
        era: "Cosmogonie mediterranee",
        text: "Il tema del caos primordiale da cui emerge la divinità autogenerata, seguita dalla generazione di coppie divine, ricorre in molte cosmogonie mediterranee — la Teogonia di Esiodo con Caos, Gea, Urano presenta paralleli strutturali.",
      },
      {
        era: "Archetipo del demiurgo",
        text: 'Atum-Ra come demiurgo autogenerato che crea il cosmo è uno degli archetipi più potenti della storia delle religioni. Platone nel "Timeo" descrive un demiurgo con caratteristiche simili.',
      },
    ],
    texts: [
      {
        title: "Testi delle Piramidi — Formula 527",
        source: "V dinastia, ca. 2350 a.C.",
        text: "Atum è quello che è divenuto uno, masturbandosi a Eliopoli. Egli pose il suo fallo nel suo pugno per ottenere piacere. Si unì una sorella e un fratello: Shu e Tefnut.",
      },
      {
        title: "Libro dei Morti — Formula 17",
        source: "Nuovo Regno, ca. 1500 a.C.",
        text: "Io sono Atum quando ero solo nel Nun. Io sono Ra quando splendo per la prima volta, quando cominciai a governare ciò che avevo creato. Chi è questo? È Ra quando cominciò a regnare su ciò che aveva creato, quando Ra era re prima che esistesse il sollevamento di Shu.",
      },
    ],
  },
  {
    id: "ra-apophis",
    tag: "Mito cosmico",
    title: "Il Viaggio di Ra e la Lotta contro Apophis",
    type: "Mito",
    epithet: "La Lotta Eterna tra Luce e Caos",
    chips: ["Ra", "Apophis", "Duat", "Dodici ore"],
    heroColor: "linear-gradient(160deg,#3d1500,#6b2a00,#1a0800)",
    shortDesc:
      "Ogni giorno il sole-Ra naviga nel cielo sulla sua barca Mandjet; ogni notte scende nel Duat sulla barca Mesektet, attraversando le dodici ore dell'oltretomba. Nell'ora più buia affronta il serpente Apophis, incarnazione del caos primordiale, per poter rinascere all'alba.",
    bio: {
      main: `Il viaggio quotidiano di Ra è uno dei miti cosmologici più drammatici dell'antichità. Non è un racconto lineare ma un evento ciclico che si ripete ogni ventiquattro ore — il fondamento mitico del giorno e della notte, dell'ordine cosmico, della vittoria della vita sulla morte.

Ogni mattina il sole-Ra sorge all'orizzonte orientale: è Khepri, il sole nascente, rappresentato come uno scarabeo (dal ciclo simbolico degli scarabei stercorari che "spingono" la palla di sterco come il sole spinto nel cielo). Sale sulla sua barca d'oro Mandjet — "la Barca dei Milioni di Anni" — e naviga attraverso la volta celeste. A mezzogiorno è Ra nel suo pieno splendore. Al tramonto diventa Atum, il sole stanco che discende verso occidente.

Ma la notte è un'altra cosa.`,
      sub1: "La discesa nel Duat",
      text1: `Al tramonto Ra passa sulla barca notturna Mesektet e discende nel Duat — il mondo sotterraneo, il regno dei morti, un luogo di oscurità, pericoli e prove. La sua visione cambia: viene rappresentato con testa di ariete invece che di falco, simbolo del sole stanco e vulnerabile.

Il Duat è attraversato da un fiume — un Nilo sotterraneo, specchio di quello terreno. Lungo le sue rive vivono divinità, demoni, anime dei defunti. Il viaggio dura dodici ore, una per ciascuna delle dodici ore della notte. In ogni ora Ra deve superare prove diverse, attraversare porte sorvegliate, pronunciare le parole giuste.`,
      sub2: "Le dodici ore della notte",
      text2: `Il "Libro dell'Amduat" — uno dei testi funerari più importanti del Nuovo Regno, dipinto nelle tombe della Valle dei Re — descrive con grande dettaglio le dodici ore del viaggio. Ogni ora ha il suo paesaggio, i suoi abitanti, le sue divinità protettrici, le sue minacce.

Nella sesta ora, al centro esatto del viaggio, Ra si fonde misteriosamente con il corpo mummificato di Osiride: è il momento più misterioso della teologia egizia, quando il sole (il dio vivente) si unisce al defunto (il dio morto), rigenerando entrambi. Ra riceve nuova vita dal corpo osiriaco, Osiride riceve il soffio solare che lo mantiene eternamente vivo nell\'oltretomba.`,
      sub3: "L'ora più buia — la lotta contro Apophis",
      text3: `Nella settima ora — la più buia, la più pericolosa — la barca di Ra incontra il suo nemico: Apophis (Apep in egizio), il serpente-drago gigantesco, incarnazione del caos primordiale (Isfet), del non-essere, della distruzione. Apophis non è un'entità creata: è precedente alla creazione, il residuo eterno del Nun che Ra non è riuscito a dissolvere.

Apophis vuole una cosa sola: fermare la barca di Ra per impedire l'alba, riportando il cosmo nel caos originario. Attorno alla barca si raccolgono le divinità protettrici: Seth alla prua, armato di una fiocina, trafigge il serpente con la sua forza bruta; Mehen, il serpente-drago benigno, avvolge Ra proteggendolo; Iside pronuncia incantesimi; i dannati del Duat vengono incatenati perché non si uniscano al caos.`,
      sub4: "La resurrezione alba",
      text4: `Dopo una lotta titanica, Apophis viene trafitto, incatenato, fatto a pezzi. Non viene mai ucciso definitivamente: come principio del caos non può essere eliminato, solo sconfitto temporaneamente. Il sangue che sgorga dalle sue ferite tinge di rosso il cielo all'alba e al tramonto.

Ra, vittorioso, completa le ultime ore del viaggio. Nell'undicesima ora le cinque dee protettrici distruggono gli ultimi nemici. Nella dodicesima, Ra entra nel corpo di un enorme serpente e ne emerge all'altra estremità trasformato in Khepri — lo scarabeo del sole nascente. Sale sulle braccia di Shu, il dio dell'aria, che lo solleva sull'orizzonte orientale. L'alba può cominciare.

Gli egizi credevano che questa vittoria non fosse automatica. Ogni notte la battaglia era incerta, ogni mattina era un miracolo. Le preghiere dei sacerdoti, i rituali apotropaici, il comportamento giusto degli uomini — tutto concorreva a garantire la vittoria di Ra sul caos. La civiltà egizia era letteralmente un'enorme macchina teologica per assicurare che il sole sorgesse ogni mattina.`,
    },
    versions: [
      {
        era: "Libro dell'Amduat (Nuovo Regno)",
        name: "Il testo delle dodici ore",
        text: 'Il "Libro dell\'Amduat" ("Di ciò che è nel Duat") è il resoconto più sistematico del viaggio notturno di Ra, dipinto sulle pareti delle tombe reali a partire da Thutmose I (ca. 1500 a.C.).',
      },
      {
        era: "Libro delle Porte",
        name: "Focus sulle porte",
        text: 'Un testo parallelo, il "Libro delle Porte", enfatizza le porte che dividono le dodici regioni del Duat, con i guardiani e le formule per attraversarle.',
      },
      {
        era: "Libro delle Caverne",
        name: "Una variante arcaica",
        text: 'Il "Libro delle Caverne" è una variante più antica e criptica, che concepisce il Duat come una serie di caverne abitate da divinità e demoni.',
      },
      {
        era: "Libri di Apophis",
        name: "Incantesimi apotropaici",
        text: 'Il "Libro per respingere Apophis" — papiri del Periodo Tardo — contiene formule magiche specifiche per distruggere il serpente cosmico. Venivano recitati nei templi con figurine di cera del serpente che venivano rituamente distrutte.',
      },
    ],
    influence: [
      {
        era: "Il drago nel mito cosmico",
        text: "La lotta di Ra contro Apophis è il prototipo egizio del mitologema universale del dio contro il drago/serpente cosmico: Marduk contro Tiamat (Mesopotamia), Zeus contro Tifone (Grecia), Thor contro Jormungand (Scandinavia), San Michele contro il drago (cristianesimo).",
      },
      {
        era: "L'apocalittica",
        text: "L'idea che la lotta tra bene e male sia eterna e ciclica, con vittorie temporanee e minacce sempre nuove, è uno dei temi fondanti dell'apocalittica religiosa, con influenze dall'Egitto al Medio Oriente all'Occidente cristiano.",
      },
      {
        era: "L'oscurità prima dell'alba",
        text: "Il motivo \"l'ora più buia viene prima dell'alba\" — usato metaforicamente nella spiritualità e nella letteratura — ha le sue radici mitiche nella lotta della settima ora tra Ra e Apophis.",
      },
    ],
    texts: [
      {
        title: "Libro dell'Amduat — Settima Ora",
        source: "Tombe della Valle dei Re, XVIII dinastia",
        text: "Questa è la grande città di Apophis, nella regione più misteriosa dell'oltretomba. Qui il Grande Dio è attaccato. Se non fosse per Iside e per Mehen-il-segreto, e per Seth il potente, Apophis soffocherebbe la barca e il sole non sorgerebbe mai più.",
      },
      {
        title: "Libro per respingere Apophis",
        source: "Papiro Bremner-Rhind, IV sec. a.C.",
        text: "Indietro, Apophis, nemico di Ra! Sei respinto, sei incatenato, sei trafitto. I tuoi ossi sono spezzati, la tua carne è recisa. Il sole sorgerà a dispetto di te, Ra splenderà sull'orizzonte. Tu non sei, tu non esisti, tu non esisterai mai più.",
      },
    ],
  },
  {
    id: "pesatura-cuore",
    tag: "Giudizio dei morti",
    title: "La Pesatura del Cuore — Il Giudizio davanti a Osiride",
    type: "Mito",
    epithet: "La Psicostasia e la Confessione Negativa",
    chips: ["Osiride", "Anubi", "Thoth", "Maat", "Ammit", "Libro dei Morti"],
    heroColor: "linear-gradient(160deg,#0d0d14,#1a1a28,#080810)",
    shortDesc:
      "Dopo la morte, l'anima del defunto viene condotta da Anubi nella Sala delle Due Verità. Davanti a 42 giudici recita la Confessione Negativa, poi il cuore viene pesato contro la piuma di Maat. Se equilibrato, il defunto accede alla vita eterna nei Campi Aaru; se più pesante, viene divorato da Ammit, la distruttrice.",
    bio: {
      main: `La Pesatura del Cuore — tecnicamente "psicostasia" dai termini greci psyché (anima) e stathmos (bilancia) — è la scena più rappresentata dell'arte funeraria egizia e il punto culminante della teologia dell'oltretomba. Descritta nella Formula 125 del Libro dei Morti, costituisce il giudizio divino cui ogni defunto doveva sottoporsi per accedere alla vita eterna.

A differenza di altre religioni dove il giudizio è un evento unico nella storia cosmica (il Giudizio Universale cristiano, il giorno del Giudizio islamico), nella religione egizia è un evento personale che ogni individuo affronta singolarmente al momento della propria morte. Questo rende la concezione egizia dell'aldilà straordinariamente individuale e morale: ciascuno risponde delle proprie azioni.`,
      sub1: "La Sala delle Due Verità",
      text1: `Dopo la morte, l'anima del defunto (ka) veniva accompagnata da Anubi nella Sala delle Due Verità (Maati) — un'immensa sala celeste dove risiedeva il tribunale divino. Il nome "Due Verità" si riferisce alla dualità di Maat: giustizia dell'Alto e del Basso Egitto, verità cosmica e verità morale, legge divina e legge umana.

Nella Sala sedevano Osiride come giudice supremo, circondato dai 42 giudici assessori — uno per ogni provincia dell'Egitto, ciascuno specializzato nel giudicare un tipo specifico di peccato. Alla bilancia presiedeva Anubi, mentre Thoth, con la sua tavoletta da scriba, registrava scrupolosamente il verdetto.`,
      sub2: "La Confessione Negativa",
      text2: `Il defunto si presenta davanti ai 42 giudici e recita la Confessione Negativa — un elenco dettagliato di peccati che dichiara di NON aver commesso. Non è una confessione dei peccati fatti: è una dichiarazione di innocenza rispetto a una lista specifica di trasgressioni.

"Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho rubato. Non ho ucciso. Non ho diminuito le offerte degli dèi. Non ho rubato terra. Non ho falsificato le bilance del commercio. Non ho causato lacrime. Non ho contaminato le acque del Nilo. Non ho blasfemato. Non ho fatto soffrire un orfano..."

La lista è lunghissima e rivela una sofisticata concezione morale che comprende doveri religiosi, sociali, ambientali, personali. Gli egizi avevano elaborato uno dei primi codici etici complessi della storia.`,
      sub3: "La pesatura",
      text3: `Dopo la Confessione avveniva la prova decisiva. Anubi poneva il cuore (ib) del defunto — considerato dagli egizi la sede della coscienza, della memoria e della personalità — su un piatto della bilancia. Sull'altro piatto veniva posata la piuma di Maat, simbolo dell'ordine cosmico.

Il cuore doveva essere "leggero come la piuma" — cioè libero dal peso dei peccati. Gli egizi temevano che il cuore potesse testimoniare contro il proprio possessore, accusandolo di crimini nascosti. Per questo la Formula 30B del Libro dei Morti — incisa su amuleti a forma di scarabeo posti sul petto delle mummie — è un incantesimo per convincere il cuore a tacere: "O mio cuore, mia madre, non deporre contro di me davanti al Grande Dio!".`,
      sub4: "Il verdetto",
      text4: `Se la bilancia restava in equilibrio, il defunto era dichiarato maa-kheru — "giusto di voce", "giustificato" — e poteva accedere ai Campi di Aaru, il paradiso egizio. I Campi di Aaru erano una versione celeste dell'Egitto: un Nilo scintillante, campi di grano altissimo, banchetti eterni, riunioni con familiari defunti. Il maa-kheru entrava nel seguito di Osiride e otteneva l'immortalità.

Se il cuore era più pesante della piuma — se il defunto era colpevole — il cuore veniva gettato ad Ammit, "la Divoratrice": una creatura mostruosa con testa di coccodrillo, corpo di leone e posteriore di ippopotamo, appostata accanto alla bilancia. Ammit divorava il cuore e con esso l'identità stessa del defunto. Non c'era inferno di pene eterne nella teologia egizia: c'era l'annientamento totale, la "seconda morte", la cessazione di ogni esistenza. Per un egizio, che credeva così tanto nella continuità dell'essere, questa era la punizione peggiore immaginabile.`,
    },
    versions: [
      {
        era: "Testi dei Sarcofagi (Medio Regno)",
        name: "Antecedenti",
        text: "Il tema del giudizio dei morti compare già nei Testi dei Sarcofagi, ma in forma meno sistematica. La pesatura come scena rituale codificata è del Nuovo Regno.",
      },
      {
        era: "Libro dei Morti — Formula 125",
        source: "Nuovo Regno",
        name: "La versione classica",
        text: "La Formula 125 del Libro dei Morti è il testo canonico della psicostasia. Include la Confessione Negativa con i 42 peccati e la descrizione della Sala delle Due Verità.",
      },
      {
        era: "Papiro di Ani",
        name: "La rappresentazione più famosa",
        text: "Il Papiro di Ani (XIX dinastia, ca. 1275 a.C., oggi al British Museum) contiene la rappresentazione più celebre e artisticamente perfetta della scena della pesatura del cuore.",
      },
    ],
    influence: [
      {
        era: "Giudizio Universale cristiano",
        text: "La scena della pesatura delle anime — con San Michele che regge la bilancia — presente nell'iconografia medievale del Giudizio Universale ha le sue radici ultime nella psicostasia egizia.",
      },
      {
        era: "Lady Justice — la Giustizia bendata",
        text: "La figura allegorica della Giustizia con la bilancia, presente in tribunali di tutto il mondo, deriva iconograficamente dalla Maat egizia e dalla scena della pesatura.",
      },
      {
        era: "Concezione della moralità personale",
        text: "L'idea che ogni individuo debba rispondere delle proprie azioni attraverso un giudizio morale dettagliato è uno dei contributi più importanti del pensiero egizio all'etica mondiale. Prefigura concezioni morali del giudaismo, cristianesimo, islam.",
      },
      {
        era: "La coscienza morale",
        text: 'Il concetto che il "cuore" del defunto possa testimoniare contro di lui è una delle prime espressioni letterarie della coscienza morale come istanza interiore autonoma — anticipa di millenni concezioni psicologiche e morali successive.',
      },
    ],
    texts: [
      {
        title: "Libro dei Morti — Formula 125 (Confessione Negativa)",
        source: "Nuovo Regno, Papiro di Ani",
        text: "Salute a te, grande dio, signore delle Due Verità! Sono venuto davanti a te, mio signore. Conosco il tuo nome, conosco i nomi dei 42 dèi che siedono con te. Non ho commesso iniquità contro gli uomini. Non ho maltrattato gente. Non ho ucciso. Non ho detto menzogne.",
      },
      {
        title: "Formula 30B — Scarabeo del cuore",
        source: "Libro dei Morti, Nuovo Regno",
        text: "O mio cuore, mia madre, mio cuore della mia esistenza! Non deporre contro di me davanti al Grande Dio. Non sollevarti contro di me davanti alla bilancia. Tu sei il mio ka, tu sei il mio spirito dentro di me. Rimani fermo, testimonia con me, non accusarmi.",
      },
    ],
  },
  {
    id: "contese-horus-seth",
    tag: "Mito giuridico",
    title: "Le Contese di Horus e Seth — Ottant'anni di Giudizio",
    type: "Mito",
    epithet: "La Lotta per il Trono d'Egitto",
    chips: ["Horus", "Seth", "Iside", "Ra", "Enneade"],
    heroColor: "linear-gradient(160deg,#1a1500,#3a2e00,#120a00)",
    shortDesc:
      "Dopo la morte di Osiride, Horus rivendica il trono d'Egitto contro lo zio Seth. Il contenzioso davanti all'Enneade degli dèi dura ottant'anni, con processi, combattimenti, inganni, gare truccate e perfino episodi comici. Alla fine, grazie alla saggezza e all'astuzia di Iside, Horus vince e diventa re d'Egitto.",
    bio: {
      main: `"Le Contese di Horus e Seth" è uno dei testi letterari più straordinari dell'Egitto antico — un mito che è insieme teologia profonda, commedia burlesca, dramma giudiziario e allegoria politica. La versione più completa è conservata nel Papiro Chester Beatty I (XIX dinastia, ca. 1160 a.C.), ma gli episodi raccontati risalgono a epoche molto più antiche.

La vicenda si apre con un problema giuridico: dopo la morte di Osiride, chi ha diritto al trono d'Egitto? Horus, figlio del defunto re? O Seth, fratello del re e potente divinità già adulta? L'Enneade degli dèi si riunisce per giudicare il caso. Ma quello che dovrebbe essere un processo rapido si trasforma in un contenzioso interminabile di ottant'anni, pieno di colpi di scena.`,
      sub1: "Il dibattito davanti all'Enneade",
      text1: `Horus argomenta con la legge: il trono spetta al figlio del re defunto, per diritto di successione. Ogni dio sano di mente conosce questa regola. Shu, Thoth e altri dèi concordano: Horus ha ragione.

Seth si appella alla forza: "Io sono più grande, più forte, più esperto. Sono io che uccido Apophis ogni notte dalla prua della barca di Ra. Senza di me il sole non sorge!". Ra — vecchio e stanco, spesso rappresentato come ormai indebolito — tende a preferire Seth per questa ragione. Il processo si blocca in un'impasse.`,
      sub2: "L'intervento di Neith e di altri saggi",
      text2: `L'Enneade chiede consiglio a Neith, antichissima dea di Sais. Il suo verdetto è sapientissimo: "Date il trono a Horus, che è il suo diritto. Ma date a Seth le due dee straniere (Anat e Astarte) come compenso, perché non rimanga senza nulla". Ra si infuria per il verdetto che va contro di lui.

Il dio-sole insulta Horus pubblicamente: "Questo ragazzino ha ancora l'odore del latte in bocca!". Uno degli dèi, Baba, risponde con una battuta: "La tua cappella è vuota!" (insulto pesantissimo, significa "non hai più devoti"). Ra offeso si ritira nella sua tenda per tre giorni. Solo la dea Hathor riesce a farlo ridere mostrandogli i suoi genitali — un episodio sconcertante che mostra la natura irriverente del testo.`,
      sub3: "Le prove e gli inganni",
      text3: `Il processo si trasforma in una serie di sfide fisiche. Seth e Horus si trasformano in ippopotami e si affrontano sott'acqua per tre mesi — Iside interviene ma per errore colpisce Horus con l'arpione. Il figlio, furioso, le taglia la testa (che verrà rimessa a posto dalla magia).

Seth invita Horus a cena e di notte tenta di umiliarlo sessualmente. Ma Iside consiglia al figlio di ingannare lo zio: Horus raccoglie il seme di Seth nella mano, Iside lo getta via e lo sostituisce con seme di Horus che viene sparso sulla lattuga, cibo preferito di Seth. Quando la mattina Seth rivendica davanti all'Enneade di aver "dominato" Horus, Thoth fa pronunciare al seme stesso: il seme di Seth risponde da un fiume, il seme di Horus risponde... dalla testa di Seth. Seth è umiliato davanti a tutti.`,
      sub4: "Il verdetto finale e la riconciliazione",
      text4: `Dopo ottant'anni di contese, Iside invia una lettera ad Osiride nel Duat. Il vecchio re defunto risponde con parole terribili: "Se non viene resa giustizia a mio figlio, io scatenerò i demoni dell\'oltretomba che spezzeranno il cuore degli dèi!". L\'Enneade, spaventata, decreta finalmente: Horus è il legittimo re d\'Egitto.

Seth viene punito ma non eliminato: va a vivere con Ra nel cielo, dove diventa il dio del tuono e continua a difendere la barca solare contro Apophis. L\'universo è riequilibrato: Horus regna sulla terra (ordine), Osiride regna nel Duat (morte trasformata in vita), Seth difende Ra nel cielo (caos addomesticato al servizio dell'ordine).

La morale del mito è sottile: il caos (Seth) non può essere distrutto — sarebbe la fine stessa del cosmo. Deve essere contenuto, sublimato, messo al servizio dell'ordine. L'equilibrio cosmico si mantiene attraverso la tensione produttiva tra forze opposte.`,
    },
    versions: [
      {
        era: "Testi delle Piramidi (V dinastia)",
        name: "Frammenti arcaici",
        text: "I Testi delle Piramidi contengono allusioni al conflitto, ma senza una narrazione continua. Horus e Seth sono già antagonisti.",
      },
      {
        era: "Papiro Chester Beatty I",
        name: "La versione completa",
        text: "Il Papiro Chester Beatty I (ca. 1160 a.C., oggi a Dublino) contiene la versione narrativa più completa e letterariamente sofisticata. È un capolavoro che mescola mito, commedia, satira politica.",
      },
      {
        era: "Dramma sacro di Edfu",
        name: "La lotta cosmica",
        text: 'Sulle pareti del tempio di Edfu è scolpito il "Dramma sacro di Edfu" — una drammatizzazione rituale della lotta Horus-Seth rappresentata ogni anno davanti al popolo.',
      },
    ],
    influence: [
      {
        era: "Allegoria politica",
        text: "Molti studiosi leggono le Contese come un'allegoria del conflitto storico tra Alto Egitto (Seth) e Basso Egitto (Horus) — la continua riunificazione delle Due Terre era garantita dal faraone come incarnazione di Horus.",
      },
      {
        era: "Archetipo del processo interminabile",
        text: "L'immagine di un processo giudiziario che si trascina per ottant'anni, con dèi interminabili e colpi di scena continui, è stata interpretata come una satira ante litteram della burocrazia e della giustizia lenta — un tema universale.",
      },
      {
        era: "L'umorismo nel sacro",
        text: "Le Contese sono un raro esempio di mito sacro che contiene elementi esplicitamente comici, erotici, persino scurrili. Mostrano come la religione egizia fosse più sfumata e umana di quanto si immagini comunemente.",
      },
    ],
    texts: [
      {
        title: "Contese di Horus e Seth — inizio",
        source: "Papiro Chester Beatty I, XIX dinastia",
        text: 'Così parlò Shu davanti alla grande Enneade: "La giustizia è più grande della forza. Giudicate secondo giustizia, dicendo: date l\'eredità a Horus". E Thoth disse: "Così è davvero, centomila volte". Ma Ra si arrabbiò.',
      },
      {
        title: "La lettera di Osiride",
        source: "Papiro Chester Beatty I",
        text: 'Osiride rispose dal Duat: "Perché privi di giustizia mio figlio? Io creai l\'orzo e il grano per nutrire gli dèi e gli uomini. Nessun altro dio fu capace di farlo. E adesso mi negate giustizia? Se non rendete giusto mio figlio, i miei messaggeri verranno a strappare i cuori dei malvagi".',
      },
    ],
  },
  {
    id: "distruzione-umanita",
    tag: "Mito apocalittico",
    title: "La Distruzione dell'Umanità — L'Ira di Ra",
    type: "Mito",
    epithet: "Il Diluvio di Sangue che Non Fu",
    chips: ["Ra", "Sekhmet", "Hathor", "Libro della Vacca Celeste"],
    heroColor: "linear-gradient(160deg,#2a0000,#5a0800,#1a0400)",
    shortDesc:
      "Quando l'umanità si ribellò al vecchio Ra, il dio scatenò su di loro la leonessa Sekhmet, che iniziò un massacro inarrestabile. Solo l'inganno della birra rossa — scambiata per sangue — riuscì a placare la dea furiosa, salvando gli ultimi uomini dallo sterminio totale.",
    bio: {
      main: `Il mito della Distruzione dell'Umanità è la risposta egizia alle grandi narrazioni apocalittiche dell'antichità — il diluvio universale mesopotamico, il diluvio biblico, il Ragnarök norreno. Ma nella versione egizia c'è un elemento unico: la divinità non distrugge attraverso l'acqua ma attraverso il sangue, non con la natura ma con un'altra divinità, e la catastrofe viene fermata non da un sopravvissuto giusto ma da un inganno cosmico.

Il testo principale è il "Libro della Vacca Celeste" — scritto sulle pareti delle tombe reali del Nuovo Regno, tra cui quella di Tutankhamon. Il mito racconta un evento primordiale, quando gli dèi ancora regnavano direttamente sulla terra, prima che si ritirassero nel cielo.`,
      sub1: "Il declino del vecchio Ra",
      text1: `Ra regnava sulla terra da ere immemorabili. Ma il tempo non risparmia nemmeno gli dèi: "Le sue ossa erano diventate d'argento, la sua carne d'oro, i suoi capelli di vero lapislazzuli". Era un re antico, forte ma vulnerabile, e gli uomini iniziarono a percepire la sua stanchezza.

Gli uomini cospirarono contro Ra. Pensarono: "Il re è vecchio, deboliamolo". Complottarono in segreto, ridendo della sua debolezza. Ma Ra era ancora il dio-sole: vedeva tutto dall'alto. Chiamò l'Enneade degli dèi nel suo palazzo per un consiglio segreto.`,
      sub2: "La decisione divina",
      text2: `Ra consultò gli dèi — Shu, Tefnut, Geb, Nut, Nun stesso. "Gli uomini che ho creato mi tradiscono. Cosa farò?". Il saggio Nun, l'oceano primordiale, suggerì: "Manda contro di loro il tuo Occhio, perché li punisca. Che si manifesti come Hathor".

Ra estrasse il suo Occhio — il suo sguardo incarnato, un'entità divina femminile autonoma — che scese sulla terra nella forma della feroce leonessa Sekhmet, "la Potente". Ma l'Occhio, una volta liberato, iniziò a massacrare l'umanità con gioia sfrenata, assetata di sangue. Il sangue scorreva nei campi, nei fiumi, nei deserti.`,
      sub3: "L'ira di Sekhmet",
      text3: `Ra, osservando dal cielo, ebbe compassione: non voleva l'estinzione totale dell'umanità, ma solo una punizione. Tentò di richiamare Sekhmet, ma la leonessa era ormai ebbra di sangue e non rispondeva alle chiamate.

"Sarò felice solo quando avrò annientato tutti gli uomini, fino all'ultimo", dichiarò Sekhmet, continuando la strage. Il mondo stava per essere distrutto completamente.`,
      sub4: "L'inganno della birra rossa",
      text4: `Ra elaborò un piano. Ordinò ai servitori di andare a Elefantina (in Alto Egitto), dove si trova l'ocra rossa (dedeva), e di portarne grandi quantità. Poi ordinò di preparare settemila giare di birra, da mescolare con l'ocra rossa finché non avessero il colore del sangue.

Durante la notte fece versare la birra rossa in tutti i campi dove Sekhmet avrebbe dovuto massacrare la popolazione il giorno seguente. All'alba la terra era coperta di un "lago di sangue" alto tre palmi. Quando Sekhmet arrivò e vide la distesa rossa, si chinò a bere — pensando fosse sangue umano. Bevve fino a ubriacarsi completamente, e non riuscì più a riconoscere gli uomini né a proseguire la strage.

Al risveglio la sua furia era spenta. Sekhmet tornò da Ra trasformata nella dolce Hathor — perché ogni leonessa nasconde un gatto, ogni furore una tenerezza. L'umanità era salva. Ma Ra, disgustato dal comportamento degli uomini, decise di ritirarsi nel cielo, lasciando la terra agli dèi più giovani. Da quel giorno il sole-Ra non cammina più tra gli uomini ma viaggia nel cielo distante, accessibile solo attraverso la preghiera e il rito.`,
    },
    versions: [
      {
        era: "Libro della Vacca Celeste",
        name: "La versione canonica",
        text: 'Il testo completo compare nelle tombe reali del Nuovo Regno: Tutankhamon, Seti I, Ramesse II, Ramesse III. È uno dei testi "cosmogonici" del Libro dei Morti allargato.',
      },
      {
        era: "Varianti rituali",
        name: "Feste della birra rossa",
        text: "In epoca tarda si celebrava una \"festa dell'ubriachezza\" con grandi libagioni di birra — spesso tinta di rosso — per commemorare (e placare) l'episodio mitico.",
      },
      {
        era: "Il mito della Dea Distante",
        name: "Variante narrativa",
        text: "Un mito imparentato racconta di Sekhmet che, furiosa, si allontana in Nubia sotto forma di leonessa. Thot (o Shu) viene mandato a riportarla indietro con parole e musica, trasformandola progressivamente nella dolce Hathor.",
      },
    ],
    influence: [
      {
        era: "Il diluvio mitico universale",
        text: 'Il tema della divinità che decide di distruggere l\'umanità ribelle è un mitema universale: diluvio mesopotamico, biblico, greco (Deucalione), indiano (Manu). Il mito egizio è la variante "al sangue" invece che "all\'acqua".',
      },
      {
        era: "Il concetto di hybris",
        text: "L'idea che gli uomini abbiano commesso una colpa cosmica (la ribellione contro il creatore) che giustifica il quasi-sterminio prefigura il concetto greco di hybris e quello biblico di peccato originale.",
      },
      {
        era: "La retirata del dio",
        text: "Il ritiro di Ra nel cielo dopo l'esperienza negativa con l'umanità è uno dei primi esempi del mitologema del \"Dio Ritirato\" (deus otiosus) studiato da Mircea Eliade: il dio creatore che, dopo aver creato, si ritira lasciando il governo del mondo ad altre divinità.",
      },
    ],
    texts: [
      {
        title: "Libro della Vacca Celeste — apertura",
        source: "Tomba di Seti I, XIX dinastia",
        text: "Avvenne al tempo della maestà di Ra, il dio autocreato, dopo che era re degli uomini e degli dèi insieme. Gli uomini cominciarono a cospirare contro di lui. La maestà di Ra era già vecchio. Le sue ossa erano d'argento, la sua carne d'oro, i suoi capelli di vero lapislazzuli.",
      },
      {
        title: "Libro della Vacca Celeste — il piano di Ra",
        source: "Tomba di Tutankhamon, XVIII dinastia",
        text: "Ra disse: \"Chiamate in fretta messaggeri veloci come l'ombra\". I messaggeri andarono a Elefantina e portarono il dedeva [ocra rossa]. Ra ordinò di mescolarlo con la birra d'orzo. Settemila giare furono preparate. La birra rossa fu versata nei campi nella notte, e al mattino la terra era coperta.",
      },
    ],
  },
];
