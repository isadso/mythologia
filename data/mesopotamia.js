/* data/mesopotamia.js — all content for the Mesopotamia mythology section */

const MESOP_DEITIES = [
  {
    id: "anu",
    name: "Anu",
    role: "Dio del Cielo, padre degli dèi",
    tags: ["Cielo", "Regalità", "Sumero", "Uruk"],
    epithet: "Il Padre del Firmamento",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Cosmico"],
    heroColor: "linear-gradient(160deg,#0d1520,#1a2a4a,#0a1020)",
    bio: {
      main: `Anu è la divinità più antica e più elevata del pantheon mesopotamico, il signore assoluto del cielo e della volta stellata. Il suo nome — An in sumero, Anu in accadico — significa semplicemente "cielo", e questa etimologia rivela tutto: Anu non è un dio del cielo, è il cielo stesso, personificato come entità divina. Il termine è affine al proto-semitico *ʿan-, che designa la volta celeste in molte lingue del Vicino Oriente antico, e trova corrispondenze concettuali nell'indoeuropeo *dyéus, la radice da cui derivano Zeus, Giove e il vedico Dyaus Pitā — tutti dèi del cielo luminoso che condividono con Anu la funzione di padre supremo degli dèi.

Nella cosmologia mesopotamica Anu occupa il vertice della triade cosmica formata da lui stesso, Enlil (signore dell'aria e della terra) ed Ea (signore delle acque primordiali). A Anu spetta la prima e più alta sfera — il "cielo di Anu", che nei testi astronomici mesopotamici designa la fascia equatoriale del cielo notturno, distinta dal "cammino di Enlil" al nord e dal "cammino di Ea" al sud. La volta stellata è letteralmente il suo corpo; le stelle fisse sono i suoi soldati e servitori. Come marito della dea Ki (la terra), Anu genera Enlil e molti degli dèi minori — gli Anunnaki, "prole del cielo", che popolano il cosmo. Suo figlio è anche Adad, il dio della tempesta, e alcune tradizioni gli attribuiscono la paternità di Inanna/Ishtar.

Anu non è un dio interventista. Nei miti mesopotamici raramente compie azioni in prima persona: la sua funzione è garantire la legittimità. La sua parola — quando viene pronunciata — è assoluta e irrevocabile. È evocato dai suoi simboli: la tiara cornuta con il maggior numero di corna, la stella a otto punte che lo identifica nei testi cuneiformi, e il numero settanta nei sistemi numerici divinatori.`,

      sub1: "Il Toro Celeste e la collera di Inanna",
      text1: `Uno dei pochi episodi in cui Anu agisce direttamente nella narrazione mitica è la scena del Toro Celeste nell'Epopea di Gilgamesh (Tavola VI, versione standard accadica, ca. 1200 a.C.). Dopo che Gilgamesh ha respinto con parole brutali il corteggiamento di Ishtar/Inanna — elencando uno per uno i suoi amanti abbandonati e il destino che li ha travolti — la dea sale al cielo furente e si getta ai piedi di suo padre Anu piangendo e urlando. Chiede il Toro Celeste (Gudanna), la bestia cosmica capace di sterminare centinaia di guerrieri con il suo semplice respiro, per punire Gilgamesh. La scena è rivelatrice della funzione di Anu nel pantheon: egli non agisce di propria iniziativa, ma non può rifiutare la richiesta di sua figlia. È il garante dell'ordine, non il suo motore. Dapprima resiste — avverte Inanna che il Toro Celeste porterà siccità e carestia per sette anni — ma quando la dea lo minaccia di sfondare le porte degli inferi e liberare i morti, Anu cede e consegna le redini del Toro. Il Toro Celeste scende a Uruk, uccide centinaia di uomini col suo respiro pestilenziale, ma Enkidu lo afferra per le corna e Gilgamesh lo trafigge. L'ira di Anu non ha conseguenze dirette — la punizione divina arriva invece per via indiretta, attraverso il decreto di morte su Enkidu. Questo episodio cristallizza il ruolo di Anu come istanza suprema che può essere persuasa, che garantisce con la sua autorità i poteri degli altri dèi, ma che non è né onnipotente né esente dalla pressione degli eventi cosmici.`,

      sub2: "L'assemblea degli dèi nell'Enuma Elish",
      text2: `Il momento di maggiore centralità narrativa di Anu nell'intera letteratura mesopotamica è l'assemblea degli dèi descritta nelle tavole III e IV dell'Enuma Elish (ca. 1100 a.C.). Quando Tiamat, la madre primordiale delle acque salate, si prepara alla guerra radunando un esercito di mostri e nominando il suo consorte Kingu come comandante supremo, il giovane Ea è il primo ad affrontarla — e fallisce. Poi Anu stesso tenta di avvicinarsi a Tiamat, ma quando ne sente la voce cosmicamente terrificante, torna indietro senza combattere. È il momento che rivela la funzione strutturale di Anu nella teologia politica babilonese: il dio supremo che non può vincere il caos apre lo spazio per l'ascesa del giovane Marduk. L'assemblea degli dèi si riunisce, mangia, beve, si ubriaca — e in questo contesto festivo, abbassate le difese, conferisce a Marduk poteri straordinari: che la sua parola comandi la creazione e la distruzione. Anu stesso partecipa alla prova: mette davanti a Marduk una stella e Marduk la distrugge e la ricostruisce con la sola parola. L'assemblea acclama. Questo trasferimento di potere da Anu a Marduk non è una sconfitta del vecchio dio celeste — è una legittimazione. Il cielo eterno e immobile riconosce nel dio dinamico e guerriero la forza capace di difendere l'ordine cosmico. Anu rimane al vertice della gerarchia formale, ma il governo del cosmo passa nelle mani di Marduk.`,

      sub3: "Il furto delle Tavole del Destino — Anzu",
      text3: `Il mito di Anzu (o Anzud, Imdugud nelle fonti sumeriche) è uno degli episodi in cui l'autorità di Anu risulta più minacciata e più vulnerabile. Anzu è un enorme uccello-tempesta, con corpo di aquila e testa di leone, che dimora sui monti cosmici al confine tra cielo e terra. Nel mito accadico (il "Mito di Anzu", conservato in versione paleobabilonese e in versione standard del I millennio a.C.), Anzu viene assunto come servitore nel santuario di Enlil — ma mentre Enlil si bagna e si è tolto la corona e le Tavole del Destino, Anzu le ruba e fugge verso le sue montagne. Il furto delle Tavole sconvolge l'ordine cosmico: senza di esse nessun dio può decretare nulla, nessun destino può essere fissato, il cosmo si paralizza. Anu convoca l'assemblea degli dèi e chiede chi andrà a combattere Anzu e recuperare le Tavole. La scena è comica nella sua solennità: ogni dio si offre volontario, poi al momento decisivo si rifiuta. Alla fine è Ninurta, figlio di Enlil e dio della guerra, ad accettare la missione. La battaglia è lunga: Anzu usa le Tavole per annullare ogni arma scagliata contro di lui — le frecce si trasformano di nuovo in canne, le spade in metallo grezzo. Solo quando Ea suggerisce a Ninurta di colpire le piume di Anzu, separandole dal volo, il mostro viene sconfitto e le Tavole recuperate. Il ruolo di Anu in questo mito è ancora una volta quello dell'autorità che convoca, legittima, ma non agisce direttamente: il suo valore è nell'istituzione dell'assemblea divina come meccanismo di governo del cosmo.`,
    },
    versions: [
      {
        era: "Periodo Sumero arcaico (3500–2500 a.C.)",
        name: "An",
        text: "Nella tradizione sumera più antica An è il dio supremo, marito di Ki (la terra) e padre di tutti gli dèi. La sua sede è Uruk, dove il suo tempio principale Eanna porta il suo nome.",
      },
      {
        era: "Periodo Accadico (2334–2154 a.C.)",
        name: "Anu",
        text: "Con la dominazione accadica il nome diventa Anu. Il dio mantiene la sua posizione apicale ma il ruolo attivo è progressivamente ceduto a Enlil e poi a Marduk.",
      },
      {
        era: "Periodo Babilonese (2000–500 a.C.)",
        name: "Anu nel pantheon di Marduk",
        text: "Nell'Enuma Elish Anu conserva un ruolo onorario ma è Marduk il vero sovrano del cosmo. Anu gli cede le sue prerogative divine come atto di riconoscimento.",
      },
    ],
    cult: `Il centro principale del culto di Anu era Uruk, la grande città-stato sumera, dove il tempio Eanna — letteralmente "casa del cielo" — era dedicato congiuntamente ad Anu e alla dea Inanna.

Il suo simbolo per eccellenza è la tiara cornuta, emblema della divinità mesopotamica, e la stella a otto punte. Nelle rappresentazioni artistiche non appare quasi mai in forma antropomorfa — la sua natura è troppo astratta e cosmica per essere contenuta in un'immagine.`,
    influence: [
      {
        era: "Cultura ittita (1700–1200 a.C.)",
        text: "Gli Ittiti adottarono Anu nel proprio pantheon come divinità celeste suprema, mantenendone le caratteristiche cosmiche.",
      },
      {
        era: "Tradizione biblica",
        text: "Il concetto di un Dio celeste supremo, padre degli esseri divini, riecheggia nei testi biblici — il nome El nella Bibbia ebraica condivide caratteristiche etimologiche e concettuali con An/Anu.",
      },
      {
        era: "Astrologia mesopotamica",
        text: "Il cielo di Anu è uno dei tre 'cammini' celesti del sistema astrologico mesopotamico: il cammino di Anu (fascia equatoriale), di Enlil (nord) e di Ea (sud).",
      },
    ],
    texts: [
      {
        title: "Inno ad Anu",
        source: "Testi liturgici di Uruk, ca. 2000 a.C.",
        text: "Anu, re degli dèi, signore delle terre oscure, la tua parola è grande come il cielo, la tua parola è profonda come la terra. Nessun dio conosce la sua misura.",
      },
    ],
  },

  {
    id: "enlil",
    name: "Enlil",
    role: "Signore del Vento e della Terra",
    tags: ["Vento", "Destino", "Nippur", "Diluvio"],
    epithet: "Il Signore dell'Aria, Colui che Decreta i Destini",
    type: "Divinità",
    chips: ["Sumero", "Cosmico", "Nippur"],
    heroColor: "linear-gradient(160deg,#0a1a10,#0d2d20,#0a1510)",
    bio: {
      main: `Enlil è una delle divinità più potenti e moralmente ambivalenti dell'intero pantheon mesopotamico. Il suo nome si analizza come *en-lil* in sumero: *en* è il titolo onorifico del signore o sovrano, *lil* designa il vento, l'aria, il soffio — quell'elemento immateriale e invisibile che separa il cielo (An) dalla terra (Ki) e che permette a ogni essere vivente di respirare. Enlil non è soltanto il dio del vento: è il principio cosmico della separazione, della distinzione, dell'ordine che emerge dal caos indistinto delle origini.

Nella triade cosmica sumera Enlil occupa il secondo posto nella gerarchia — sotto Anu, il cielo trascendente — ma in pratica è lui il dio più attivo e più temuto. Detiene le Tavole del Destino (dup shimati), le tavolette divine su cui sono iscritti i destini di tutti gli esseri. La sua residenza è l'Ekur di Nippur — "casa della montagna" — il tempio più antico e più venerato di tutta la Mesopotamia, la cui sacralità era tale che anche re di città nemiche sentivano l'obbligo di onorarlo per legittimare il proprio potere. Il vento è il suo respiro, la tempesta la sua voce in collera, il silenzio dell'aria ferma il segno della sua grazia. Il numero cinquanta gli è consacrato nel sistema numerico sacro mesopotamico.`,

      sub1: "La separazione del cielo dalla terra",
      text1: `Il gesto cosmologico fondante di Enlil è la separazione di Anu (cielo) da Ki (terra), narrata in diversi testi sumerici del III millennio a.C. Prima di questo atto il cosmo era un unico continuum indistinto — cielo e terra fusi insieme, senza spazio intermedio, senza possibilità di vita. Enlil, nato proprio da questa unione primordiale, porta con sé il principio della separazione: la sua natura di vento, di spazio vuoto tra le superfici, lo rende l'agente necessario della distinzione cosmica. Separando An da Ki, Enlil crea l'atmosfera — il luogo in cui si muoverà lui stesso, il dominio del vento e della pioggia, il medium attraverso cui il cielo comunica con la terra. Questo atto primordiale ha conseguenze immediate per la vita: è solo in questo spazio intermedio che le piante possono crescere verso l'alto, che gli uccelli possono volare, che gli esseri umani possono respirare. Il mito sumero "Enlil e il piccone" (testo liturgico, ca. 2100 a.C.) racconta che dopo la separazione Enlil inventò il piccone — lo strumento agricolo fondamentale — spaccando la crosta terrestre nel punto di Nippur, dal quale emersero i primi esseri umani come piante dal suolo. Questo doppio atto creativo — separare il cielo dalla terra, poi liberare l'umanità dalla terra stessa — fa di Enlil, paradossalmente, uno dei grandi dèi creatori della tradizione mesopotamica, nonostante il suo carattere oscuro e distruttivo.`,

      sub2: "Enlil e Ninlil — il dio e la dea violata",
      text2: `Il mito di "Enlil e Ninlil" (testo sumero, ca. 2100 a.C., conservato in varie copie da Nippur) è uno degli episodi più sconcertanti della mitologia mesopotamica e mostra il lato più oscuro e imprevedibile del dio. Ninlil è una giovane dea — sua madre Nunbarsegunu la avverte esplicitamente di non andare al canale da sola, poiché Enlil potrebbe vederla e desiderarla. Ninlil non ascolta. Enlil la vede, la desidera e la possiede contro la sua volontà. L'assemblea degli dèi reagisce con fermezza insolita: Enlil viene dichiarato impuro e bandito da Nippur, esiliato nel mondo dei morti. La scena che segue è al tempo stesso comica e teologicamente densa: Enlil cammina verso il regno dei morti, e Ninlil — incinta di Nanna/Sin, il futuro dio della luna — lo segue. Enlil si traveste da barcaiolo, poi da guardiano della porta degli inferi, poi da uomo del fiume — e ogni volta si unisce di nuovo a Ninlil, concependo tre divinità degli inferi che serviranno come "sostituti" per permettere a Nanna/Sin di restare nel cielo luminoso invece di scendere negli inferi. Il testo è interpretato dagli studiosi (Thorkild Jacobsen, The Treasures of Darkness, 1976) come un mito eziologico che spiega l'alternanza stagionale — la discesa di Enlil negli inferi corrisponde alla stagione siccitosa — e al tempo stesso un racconto sulla natura indomabile del vento, che viola ogni confine e non obbedisce a nessuna legge morale.`,

      sub3: "Le Tavole del Destino e il furto di Anzu",
      text3: `Le Tavole del Destino sono l'attributo più potente di Enlil e il simbolo della sua sovranità cosmica. Su di esse sono scritti i fati di tutti gli esseri, divini e umani: chi le possiede controlla il cosmo. Il mito di Anzu (il grande uccello-tempesta con corpo di aquila e testa di leone) ruota proprio intorno al furto di queste tavole. Anzu era stato ammesso come guardiano del santuario di Enlil, godeva della sua fiducia — un privilegio straordinario. Ma mentre Enlil si lavava il viso e aveva deposto corona e Tavole, Anzu le afferrò e fuggì verso le sue montagne lontane. L'effetto cosmico è immediato e devastante: senza le Tavole del Destino nessun dio può decretare nulla, i rituali si interrompono, il culto si paralizza. Enlil, spogliato del suo attributo fondamentale, non può nemmeno ordinare una risposta. È il momento di maggiore vulnerabilità del dio, e il testo lo registra senza attenuanti: il padrone del cosmo è stato ingannato con la semplice astuzia dell'agguato. La vicenda si risolve attraverso Ninurta, suo figlio, che in una battaglia lunga e complessa riesce a sconfiggere Anzu — ma solo con il consiglio strategico di Ea, che suggerisce di colpire le piume dell'uccello durante il volo. Il mito è uno dei più ricchi di significato politico: le Tavole rubate rappresentano l'autorità legittima sottratta con la forza, e il loro recupero è la restaurazione dell'ordine cosmico. Il dio che le custodisce — Enlil — può essere sconfitto; ma l'istituzione che rappresentano è indistruttibile.`,

      sub4: "Il Grande Diluvio — la decisione di sterminare l'umanità",
      text4: `La decisione di Enlil di sterminare l'umanità con il Grande Diluvio è il suo atto più controverso e più discusso nella storia delle religioni comparate. Il testo fondamentale è l'Epopea di Atrahasis (versione paleobabilonese, ca. 1700 a.C., trad. Stephanie Dalley in Myths from Mesopotamia, Oxford University Press, 1989), che inserisce il diluvio in una narrazione più ampia della creazione e della gestione dell'umanità. La motivazione è sorprendente nella sua banalità: gli uomini fanno troppo rumore. Il testo accadico usa il termine rigmu — "frastuono, tumulto" — per descrivere il rumore crescente dell'umanità che si moltiplica sulla terra, un rumore che impedisce agli dèi di dormire. Enlil, infastidito, propone prima la siccità, poi malattie, poi la carestia — ma ogni volta Ea suggerisce agli uomini come sopravvivere, vanificando i piani. Alla fine Enlil strappa all'assemblea degli dèi il decreto del diluvio, vincola tutti con un giuramento di segretezza, e scatena la pioggia per sette giorni e sette notti. La terra è sommersa. Quando le acque calano e Enlil vede l'arca di Atrahasis con i sopravvissuti, la sua collera si riversa sugli altri dèi: qualcuno ha violato il giuramento. Ea si difende con un sofisma raffinato — ha parlato non agli uomini ma al muro di canne, e il muro di canne ha "ascoltato". L'ironia è che Enlil, il dio dell'ordine e del decreto, è stato aggirato dalla parola astuta di un dio inferiore. La conclusione del testo è teologicamente sofisticata: Enlil cede, concede l'immortalità a Utnapishtim/Atrahasis come compenso, e accetta un nuovo regime di controllo demografico (epidemie, sterilità, morte infantile) invece del diluvio totale. Il furore distruttivo viene istituzionalizzato in meccanismi di regolazione — una visione della morte come funzione cosmica necessaria piuttosto che come punizione.`,
    },
    versions: [
      {
        era: "Tradizione Sumera (3000–2000 a.C.)",
        name: "Enlil Benigno",
        text: "Nei testi più antichi Enlil è ambivalente: crudele nel decretare il diluvio, ma anche creatore della vegetazione e dell'agricoltura.",
      },
      {
        era: "Periodo Accadico",
        name: "Ellil",
        text: "La versione accadica Ellil mantiene tutte le caratteristiche sumeriche. Il suo ruolo di detentore delle Tavole del Destino diventa centrale.",
      },
      {
        era: "Periodo Babilonese",
        name: "Declino dopo Marduk",
        text: "Con l'ascesa di Marduk le prerogative di Enlil vengono trasferite al nuovo dio nazionale. Marduk viene chiamato 'Enlil degli dèi' come titolo onorifico.",
      },
    ],
    cult: `Il grande tempio di Enlil a Nippur, l'Ekur, era il luogo di culto più antico e rispettato di tutta la Mesopotamia. Persino i re che non governavano Nippur sentivano il bisogno di ottenere l'approvazione di Enlil per legittimare il proprio regno.

Il vento era il suo respiro, la tempesta la sua voce — quando un uragano devastava una città, era Enlil che aveva espresso la sua collera.`,
    influence: [
      {
        era: "Mito del diluvio",
        text: "È Enlil a decretare il Grande Diluvio per punire l'umanità troppo rumorosa. Questo atto fonda l'intero genere letterario del 'diluvio universale'.",
      },
      {
        era: "Zeus e Giove",
        text: "Molte caratteristiche di Enlil — dio dell'aria e delle tempeste, signore degli dèi — confluiranno nel profilo di Zeus greco e Giove romano.",
      },
    ],
    texts: [
      {
        title: "Il lamento per la distruzione di Ur",
        source: "Composizione sumera, ca. 2000 a.C.",
        text: "Enlil ha determinato la mia sorte: egli ha consegnato la mia città alla tempesta, ha distrutto Ur nella tempesta — ha portato via i suoi re, ha portato via i suoi abitanti.",
      },
      {
        title: "Inno a Enlil",
        source: "Testo liturgico sumero, ca. 2100 a.C.",
        text: "Senza Enlil, il signore che determina i destini, nessuna città sarebbe stata fondata, nessun insediamento stabilito; nessuna stalla costruita, nessun recinto eretto.",
      },
    ],
  },

  {
    id: "ea",
    name: "Ea / Enki",
    role: "Dio della Saggezza e delle Acque",
    tags: ["Saggezza", "Magia", "Eridu", "Acque"],
    epithet: "Il Principe della Terra, Signore dell'Abisso Primordiale",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Eridu"],
    heroColor: "linear-gradient(160deg,#081520,#0a2535,#061018)",
    bio: {
      main: `Ea (accadico) o Enki (sumero) è tra le divinità più affascinanti e amate del pantheon mesopotamico. Il nome sumero Enki significa "signore della terra" (*en* = signore, *ki* = terra), ma questa traduzione è parzialmente fuorviante: il dominio di Enki non è la terra emersa, bensì l'Abzu — l'oceano sotterraneo di acqua dolce su cui, nella cosmologia mesopotamica, galleggia l'intera terraferma. Il nome accadico Ea è di etimologia più oscura, forse connesso al semitico *hayyu* (vita) o al sumero *e-a* (casa dell'acqua). Terzo nella grande triade cosmica sumera, Ea governa le acque primordiali dolci che rappresentano non solo un elemento fisico ma il medium della saggezza, della fertilità e della magia.

A differenza di Anu, remoto e distante, o di Enlil, imprevedibile e spesso crudele, Ea è la divinità che si schiera con l'umanità. È lui a creare gli uomini, a insegnar loro le arti, a salvarli dal diluvio. Questo tratto di trickster benevolo — sapiente che usa l'ingegno per proteggere ciò che ama — lo distingue profondamente dagli altri grandi dèi mesopotamici. Risiede nell'Abzu di Eridu, la città più antica della storia mesopotamica. Il suo simbolo iconografico è un fiume che scorre dalle sue spalle; il suo animale è il capro-pesce (suhurmash); il numero quaranta gli è consacrato.`,

      sub1: "La creazione dell'umanità — Enki e Ninmah",
      text1: `Il mito sumero "Enki e Ninmah" (ca. 2000 a.C., trad. Thorkild Jacobsen in The Harps That Once..., Yale University Press, 1987) è uno dei racconti della creazione dell'uomo più originali e ironicamente consapevoli di tutta la letteratura mondiale. Gli dèi minori (gli Igigi) si lamentano per il duro lavoro di scavare canali e coltivare la terra: vogliono essere sollevati da questa fatica. Enki dorme nell'Abzu — la sua madre Namma lo sveglia e gli dice di creare dei sostituti. Enki si addormenta di nuovo, poi si sveglia con la soluzione: mescola l'argilla con il sangue di un dio sacrificato (Kingu, in alcune versioni), e dalla combinazione nasce l'uomo — lullu in sumero, "il primitivo" — creato appositamente per fare il lavoro che gli dèi non vogliono più fare. La seconda parte del mito è una gara tra Enki e Ninmah (la dea-madre): bevono birra, si inebriamo, e sfidandosi a vicenda creano esseri difettosi — l'impotente, il cieco, il paralitico, la sterile, l'androgino — e Enki deve trovare un ruolo utile per ciascuno di essi nella società. La scena è straordinaria per la sua messa in scena dell'inclusione: ogni essere che Ninmah crea come scherzo o come insulto, Enki riesce a integrare assegnandogli una funzione — il portatore delle offerte, il terzogenere, l'artigiano. La parte finale si ribalta: Enki crea a sua volta esseri che Ninmah non sa come gestire, e lei cede. Il testo è al tempo stesso una cosmogonia, un trattato sull'inclusione sociale e una commedia divina — genere rarissimo nella letteratura del Vicino Oriente antico.`,

      sub2: "Il furto delle Me — Enki, Inanna e i principi della civiltà",
      text2: `Le Me (pronuncia: "meh") sono i principi divini che reggono ogni aspetto della civiltà e del cosmo: la regalità, la sacerdotessa, la discesa agli inferi, la guerra, la giustizia, la menzogna, la musica, la scrittura, l'artigianato — oltre cento elementi costitutivi dell'ordine culturale e cosmico. Nel mito sumero "Inanna e Enki" (ca. 2000 a.C.), tutte le Me sono custodite da Enki nell'Abzu di Eridu. Inanna vuole le Me per la sua città Uruk, che è ancora giovane e non possiede la pienezza della civiltà. Va a visitare Enki ad Eridu; Enki la riceve con ospitalità straordinaria, si ubriaca di birra insieme a lei, e nella sua ebbrezza generosa le offre le Me una per una, enumerandole tutte nel testo con un catalogo magnifico che è in sé un inventario della civiltà mesopotamica. Inanna le carica sulla sua Barca del Cielo e salpa verso Uruk. Quando Enki si risveglia sobrio e chiede dove siano finite le Me, il suo consigliere Isimud gliene elenca l'assenza. Enki manda allora una serie di mostri e creature marine a intercettare la barca di Inanna prima che raggiunga Uruk — ma ogni volta Inanna li respinge. La barca arriva a Uruk trionfante, le Me vengono scaricate e distribuite alla città. Enki, alla fine, accetta la situazione con una certa dignità e stringe un patto di pace con Inanna. Il mito è interpretato dagli studiosi (Samuel Noah Kramer, Sumerian Mythology, 1944) come il racconto dell'ascesa di Uruk a centro della civiltà a spese di Eridu — una translatio imperii mitica che rispecchia le realtà geopolitiche del III millennio a.C.`,

      sub3: "Adapa e il vento del sud — la saggezza che rifiuta l'immortalità",
      text3: `Il mito di Adapa (versione accadica paleobabilonese, frammenti conservati anche a Tell el-Amarna, ca. 1350 a.C.) è uno dei testi mesopotamici più suggestivi sul tema della mortalità umana e del suo rapporto con la saggezza divina. Adapa è un sacerdote di Eridu, creato da Ea non come essere ordinario ma come il più sapiente tra gli uomini — quasi umano ma dotato di intelligenza divina, al punto che conosce le formule del cielo e della terra. Un giorno, mentre pesca nel Golfo Persico, il vento del sud capovolge la sua barca: infuriato, Adapa rompe le ali del vento con le sole parole. Il silenzio del vento del sud dura sette giorni e si fa sentire in cielo: Anu lo convoca per giudicarlo. Prima che Adapa salga al cielo, Ea lo istruisce su come comportarsi: dovrà trovare Tammuz e Ningishzida come alleati alla porta del cielo, dovrà portarsi in un certo modo. Ma poi aggiunge: qualunque cosa gli offrano da mangiare o da bere, non accetti — sarà il cibo e l'acqua della morte. Adapa sale al cielo, si comporta perfettamente, e Anu, ammirato, decide di offrirgli il cibo e l'acqua della vita — l'immortalità. Ma Adapa, fedele alle istruzioni di Ea, rifiuta. Anu ride e rimanda Adapa sulla terra mortale. Il significato del mito è ambiguo in modo apparentemente deliberato: Ea ha mentito ad Adapa per impedirgli di diventare immortale? O Ea non sapeva cosa Anu avrebbe offerto? La tradizione esegetica è divisa. Jacobsen legge il mito come una riflessione sulla condizione umana: l'uomo ha la saggezza degli dèi ma non l'immortalità, e questo divario è la sua tragedia costitutiva — una tragedia che si ripete, sotto forme diverse, in Gilgamesh.`,

      sub4: "Il diluvio di Atrahasis — Ea contro Enlil",
      text4: `Nell'Epopea di Atrahasis (ca. 1700 a.C.) il conflitto tra Ea ed Enlil raggiunge la sua formulazione più drammatica. Enlil vuole sterminare l'umanità con il diluvio; Ea ha giurato insieme agli altri dèi di non rivelare il piano. La sua soluzione è un capolavoro di sofisticheria etica: non parla agli uomini — parla alla capanna di canne di Atrahasis. "Capanna, capanna! Muro, muro! Ascolta, capanna! Considera, muro! Atrahasis, uomo di Shuruppak, figlio di Ubar-Tutu: abbatti la casa, costruisci una nave!" La capanna di canne "ascolta" e trasmette il messaggio. Ea non ha violato il giuramento — tecnicamente. Durante il diluvio, mentre l'umanità perisce, anche gli dèi soffrono: senza offerte umane, senza incenso e libagioni, gli dèi hanno fame. "Come mosche erano radunati gli dèi intorno a chi faceva offerte", scrive il testo con una ironia affilata che ridimensiona la grandiosità divina a dipendenza biologica. Quando Atrahasis sopravvive e offre sacrifici, gli dèi si raccolgono intorno "come mosche" — e Enlil, scoprendo il sopravvissuto, si infuria. Ma Ea lo fronteggia direttamente, quasi rinfacciandogli la sproporzionalità della punizione: il peccato degli uomini era il rumore, non un crimine morale. Enlil cede e il mito si chiude con un nuovo sistema di controllo demografico — più raffinato del diluvio, più sostenibile. Ea è il vero architetto di questo compromesso: ha salvato l'umanità, ha costretto Enlil a moderarsi, ha trasformato una catastrofe in una nuova istituzione cosmica.`,

      sub5: "Enki e l'ordine del mondo",
      text5: `Il testo sumero "Enki e l'ordine del mondo" (ca. 2000 a.C.) è il catalogo più completo delle funzioni civilizzatrici di Enki e uno dei documenti fondamentali per comprendere come la Mesopotamia pensasse l'ordine cosmico. Dopo una lunga sezione di auto-lode — Enki celebra la propria saggezza, la propria potenza, la propria posizione nel cosmo — il dio procede a "organizzare" il mondo: assegna a ciascuna regione geografica la sua funzione e il suo prodotto (Sumer per il grano, Meluhha per l'oro, Dilmun per i cedri), istituisce il ciclo delle stagioni, riempie il Tigri e l'Eufrate con le acque dell'abbondanza, insegna agli uomini l'aratura, la tessitura, la costruzione, la navigazione. Ogni atto è accompagnato dalla nomina di un dio minore come supervisore — Enki non governa direttamente, ma organizza una burocrazia cosmica. La scena finale è narrativamente sorprendente: Inanna si avvicina a Enki lamentandosi di non aver ricevuto alcuna funzione nell'ordine del mondo. Enki le elenca invece tutto quello che ha già: la veste regale, le armi, il calice, il bastone, il flauto, i codici divini del cielo, il sacerdozio d'amore — attributi di un potere straordinario che Inanna, nel suo risentimento, non aveva riconosciuto. Il testo si chiude con la celebrazione dell'abbondanza che la saggezza di Enki ha portato sulla terra. Come in molti testi enlilici, la funzione del dio è qui soprattutto classificatoria e istituzionale: non un creatore ex nihilo ma un ordinatore, un architetto del cosmo già esistente.`,
    },
    versions: [
      {
        era: "Sumero arcaico — Enki",
        name: "Il trickster cosmico",
        text: "Nei testi sumerici Enki è astuto e imprevedibile, quasi un trickster cosmico. Ruba le Me — i principi divini della civiltà — ad Anu, le usa per fondare Eridu, poi le cede a Inanna in un momento di ubriachezza.",
      },
      {
        era: "Tradizione Accadica — Ea",
        name: "Il saggio consigliere",
        text: "Nella tradizione accadica Ea è più solenne. È il consigliere divino per eccellenza, colui che trova sempre la soluzione quando gli altri dèi sono in difficoltà.",
      },
      {
        era: "Versione babilonese",
        name: "Padre di Marduk",
        text: "Nell'Enuma Elish Ea è il padre di Marduk. È lui a concepire il piano per creare l'umanità dal sangue di Kingu.",
      },
    ],
    cult: `Eridu, la città di Ea/Enki, è considerata la più antica città della storia umana — le sue origini risalgono al 5400 a.C. circa. I sacerdoti di Enki custodivano le conoscenze degli incantesimi, delle cerimonie di purificazione e delle arti magiche.

Il simbolo principale di Ea è un fiume che scorre dalle sue spalle — le acque della saggezza e della vita che lui stesso incarna.`,
    influence: [
      {
        era: "Tradizione esorcistica",
        text: "Gli esorcisti mesopotamici si consideravano figli spirituali di Ea. Le formule di guarigione iniziavano invocando Ea come fonte della saggezza medica e magica.",
      },
      {
        era: "Oannes nella tradizione ellenistica",
        text: "Lo storico Beroso racconta di Oannes, un essere metà uomo e metà pesce emerso dal mare che insegnò agli uomini le arti della civiltà. Oannes è quasi certamente una trasfigurazione di Ea/Enki.",
      },
      {
        era: "Nesso con Prometeo",
        text: "Il ruolo di Ea come benefattore dell'umanità — che salva gli uomini, insegna le arti, si oppone alle decisioni divine distruttive — presenta forti paralleli con il mito greco di Prometeo.",
      },
    ],
    texts: [
      {
        title: "Enki e l'ordine del mondo",
        source: "Composizione sumera, ca. 2000 a.C.",
        text: "Enki, il re dell'Abzu, sovrano che decreta i destini, sapiente tra i saggi — chi può competere con la sua grandezza? Come il cielo splendente, ha indossato la sua grande corona.",
      },
    ],
  },

  {
    id: "marduk",
    name: "Marduk",
    role: "Dio Supremo di Babilonia",
    tags: ["Creazione", "Babilonia", "Sole", "Tiamat"],
    epithet: "Il Principe degli Dèi, Signore dei Signori",
    type: "Divinità",
    chips: ["Babilonese", "Cosmico", "Esagila"],
    heroColor: "linear-gradient(160deg,#1a1000,#3a2000,#1a0e00)",
    bio: {
      main: `Marduk è la divinità più importante del pantheon babilonese e uno degli esempi più eloquenti di come la teologia segua la politica nella storia delle religioni antiche. Il suo nome — scritto AMAR.UTU in sumero — è ricondotto tradizionalmente al sumero "vitello del sole" (AMAR = vitello, UTU = sole). L'Enuma Elish gli attribuisce cinquanta nomi che rappresentano le funzioni di tutte le divinità del pantheon, uno dei primi esempi di tendenza enoteistica nella storia delle religioni. La tradizione babilonese lo chiama anche *bel*, "il Signore" — termine che echeggia nella Bibbia ebraica come Baal.

Figlio di Ea e della dea Damkina, Marduk nasce nelle profondità dell'Abzu con una natura straordinaria: quattro erano i suoi occhi e quattro le sue orecchie, dal suo labbro usciva fuoco. La sua ascesa al vertice del pantheon non fu di nascita ma di merito: sconfigge Tiamat quando nessun altro dio osa affrontarla. Il suo tempio Esagila a Babilonia — con l'annessa ziggurat Etemenanki, probabilmente l'ispirazione della Torre di Babele — era il centro religioso più importante del mondo antico per quasi due millenni. Il suo astro è Giove; il suo animale il drago-serpente mushhushshu.`,

      sub1: "L'Enuma Elish — la battaglia con Tiamat e la creazione del cosmo",
      text1: `L'Enuma Elish (ca. 1100 a.C., trad. Stephanie Dalley in Myths from Mesopotamia, Oxford University Press, 1989) è il testo fondante del culto di Marduk e la cosmogonia babilonese per eccellenza. Tiamat, la madre primordiale delle acque salate, ha radunato un esercito di mostri — serpenti, draghi, uomini-scorpione, dèi-tempesta — e ha nominato il suo consorte Kingu come comandante, affidandogli le Tavole del Destino. Anu e Ea tentano di affrontarla e falliscono. L'assemblea degli dèi è paralizzata dalla paura. È Anshar a proporre il nome di Marduk come campione; ma Marduk pone una condizione: se vincerà, la sua parola sarà suprema sopra quella di tutti gli dèi. L'assemblea accetta. La prova del potere di Marduk è memorabile: pone una costellazione al centro dell'assemblea e comanda "sparisci" — sparisce; comanda "riappari" — riappare. Gli dèi esultano e gli conferiscono scettro, trono e veste regale. La battaglia con Tiamat è cosmica e fisica: Marduk la intrappola nella sua rete, scatena i quattro venti contro di lei, la trafigge con la lancia quando lei apre la bocca per inghiottirlo. Poi prende il suo corpo enorme e lo divide: da una metà crea il cielo, dall'altra la terra. Dai suoi occhi fa scorrere il Tigri e l'Eufrate; dalla sua coda crea la Via Lattea. Kingu viene ucciso e dal suo sangue Marduk — su consiglio di Ea — crea gli esseri umani, destinati a fare il lavoro che gli dèi non vogliono più fare. Il testo si chiude con la costruzione di Babilonia e del tempio Esagila come residenza degli dèi — e con l'enumerazione dei cinquanta nomi di Marduk, una delle liste più potenti della letteratura religiosa mondiale.`,

      sub2: "I Cinquanta Nomi — la teologia enoteistica",
      text2: `La sezione finale dell'Enuma Elish (Tavole VI–VII) è occupata dall'enumerazione dei cinquanta nomi di Marduk — uno per ogni potere divino che il dio viene ad incarnare progressivamente. Questo catalogo di nomi non è semplicemente una lista onorifica: è una teologia sistematica. Ogni nome corrisponde a una funzione precedentemente detenuta da un altro dio del pantheon: Marduk diventa Asalluhi (il dio degli incantesimi, precedentemente di Ea), Lugaldimmerankia (signore di tutti gli dèi), Namtillaku (colui che mantiene in vita), Asaru (colui che crea la vegetazione), Tutu (colui che rinnova, il dio della preghiera) e così via. Il processo è cumulativo e sistematico: Marduk non sostituisce semplicemente gli altri dèi, li assorbe — il loro potere diventa suo, ma loro continuano ad esistere come aspetti di Marduk. Questo è esattamente il fenomeno che Georges Dumézil e poi Wilfred Lambert (Babylonian Wisdom Literature, Oxford University Press, 1960) hanno analizzato come proto-monoteismo mesopotamico: non la negazione degli altri dèi, ma la loro reinterpretazione come nomi e funzioni di un'unica divinità suprema. L'Enuma Elish si chiude con l'invito a trasmettere questi nomi di padre in figlio, di maestro in discepolo — una istituzionalizzazione della trasmissione teologica che ricorda la tradizione rabbinica e islamica di trasmissione delle catene di autorità religiosa.`,

      sub3: "Il festival Akitu — la morte e resurrezione annuale del cosmo",
      text3: `Il festival del Capodanno babilonese (Akitu), celebrato ogni anno all'equinozio di primavera per undici giorni, era la cerimonia religiosa più importante di Babilonia e ruotava interamente attorno a Marduk. Le fonti principali sono i "Rituali di Babilonia" (testi cuneiformi del I millennio a.C.) analizzati da Thorkild Jacobsen e da Henri Frankfort (Kingship and the Gods, University of Chicago Press, 1948). Il quinto giorno del festival, il re veniva portato nel tempio di Marduk, gli venivano tolte le insegne regali — corona, scettro, anello — e il sommo sacerdote lo schiaffeggiava in viso. Il re doveva inginocchiarsi davanti alla statua di Marduk e dichiarare di non aver peccato, di non aver abbandonato Babilonia, di non aver umiliato i sudditi. Poi le insegne gli venivano restituite. L'episodio è il nucleo di un ciclo di morte e rinascita simbolica: il re muore come re, il cosmo si azzera, e poi l'ordine viene restaurato. L'Enuma Elish veniva recitato integralmente durante il festival — la cosmogonia ripetuta era la cosmogonia riattualizzata, il cosmo ricreato ogni anno per garantire un altro ciclo di fertilità. L'ottavo giorno, la statua di Marduk veniva portata in processione attraverso la Porta di Ishtar lungo la via Sacra fino al tempio delle feste fuori dalle mura — un viaggio cosmico che rispecchiava il viaggio di Marduk nel cosmo appena creato. Il festival dell'Akitu è sopravvissuto in forma modificata nei calendari religiosi di molte culture del Vicino Oriente.`,

      sub4: "La prigionìa di Marduk — il dio catturato",
      text4: `Uno degli episodi meno noti ma più suggestivi della mitologia di Marduk è il "Mito della prigionìa di Marduk" (testo accadico frammentario del I millennio a.C.), un testo che capovolge la narrativa trionfale dell'Enuma Elish mostrando il dio supremo vulnerabile, catturato, accusato. Nel testo (ricostruito da Walter Farber e altri studiosi del XX secolo) Marduk viene portato in giudizio davanti a un tribunale divino, accusato di crimini non completamente specificati dai frammenti superstiti. Il processo si celebra nell'oltretomba. La sua divinità viene messa in discussione, i suoi poteri revocati temporaneamente. Il testo è letto dagli studiosi (Benjamin Foster, Before the Muses, CDL Press, 1993) come un mito eziologico che giustifica la cattura della statua di Marduk da parte di nemici di Babilonia — gli Ittiti nel 1595 a.C., gli Assiri in seguito — come un evento cosmicamente significativo: quando la statua di Marduk è in mani straniere, il dio stesso è "in esilio". Il ritorno della statua è la liberazione del dio. Questa teologia della presenza divina nella statua del tempio — e della cattura della statua come cattura del dio — è uno degli aspetti più originali della religione mesopotamica e ha paralleli nella teologia egiziana dello stesso periodo. Nebucodonosor I (ca. 1125–1104 a.C.) riportò la statua di Marduk da Elam, dove era stata portata come bottino di guerra, e questo atto fu celebrato come una liberazione cosmica.`,
    },
    versions: [
      {
        era: "Origini (ca. 2500–2000 a.C.)",
        name: "Dio locale di Babilonia",
        text: "Nelle origini Marduk è semplicemente il dio tutelare della città di Babilonia, quando questa era ancora una piccola cittadina.",
      },
      {
        era: "Periodo Babilonese Antico (2000–1600 a.C.)",
        name: "Ascesa con Hammurabi",
        text: "Con Hammurabi (1792–1750 a.C.) Babilonia diventa capitale di un grande impero e Marduk il dio supremo. L'Enuma Elish viene probabilmente composto in questo periodo.",
      },
      {
        era: "Periodo Neo-Babilonese (626–539 a.C.)",
        name: "Apice del culto",
        text: "Con Nabucodonosor II il culto di Marduk raggiunge il suo apice. L'Esagila viene ricostruita in grande splendore.",
      },
    ],
    cult: `Il grande tempio di Marduk, l'Esagila, era il centro spirituale di Babilonia. Accanto si elevava l'Etemenanki, la ziggurat alta sette piani che raggiungeva i 90 metri.

Ogni anno durante il festival del Capodanno (Akitu) la statua di Marduk veniva portata in processione per la città, e il re doveva "prendere la mano di Marduk" — rito fisico di rinnovamento del potere regale.`,
    influence: [
      {
        era: "Enoteismo mesopotamico",
        text: "Il modo in cui Marduk assorbe progressivamente le caratteristiche di tutti gli altri dèi è uno dei primissimi esempi di tendenza enoteistica nella storia delle religioni.",
      },
      {
        era: "Torre di Babele",
        text: "L'Etemenanki, la grande ziggurat di Marduk a Babilonia, è quasi certamente la fonte storica del mito della Torre di Babele descritto nella Genesi biblica.",
      },
    ],
    texts: [
      {
        title: "I Cinquanta Nomi di Marduk",
        source: "Enuma Elish, Tavola VI–VII, ca. 1100 a.C.",
        text: "Il suo primo nome è Marduk — il figlio del sole che sorge sull'orizzonte del mare. Il suo secondo nome è Marukka — l'essere divino che creò gli dèi.",
      },
    ],
  },

  {
    id: "inanna",
    name: "Inanna / Ishtar",
    role: "Dea dell'Amore e della Guerra",
    tags: ["Venere", "Guerra", "Uruk", "Amore"],
    epithet: "Regina del Cielo, Signora della Tempesta",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Uruk"],
    heroColor: "linear-gradient(160deg,#1a0820,#2d0d3a,#120618)",
    bio: {
      main: `Inanna (sumero) o Ishtar (accadico) è la divinità femminile più potente e concettualmente densa del pantheon mesopotamico. Il nome sumero Inanna è interpretato come "Signora del Cielo" (*nin-an-na*). Il nome accadico Ishtar è di origine semitica, affine all'ugaritico Astarte e all'ebraico Astoret — forme di una grande dea condivisa su tutto il Vicino Oriente antico. Il pianeta Venere, stella del mattino e della sera, è il suo astro simbolico e rispecchia la sua natura paradossale: è dea dell'amore erotico e della fertilità, ma anche dea della guerra, della conquista e della distruzione.

Nella genealogia divina Inanna è figlia di Nanna (il dio luna) in alcune tradizioni, di Anu in altre. Il suo consorte è Dumuzi (Tammuz), pastore-re con cui il suo rapporto oscilla tra amore e condanna. Le sue imprese mitologiche sono tra le più drammatiche di tutta la letteratura mesopotamica. Iconograficamente è rappresentata in piedi su un leone, con frecce alle spalle e arco in mano, circondata da stelle a otto punte. L'Eanna di Uruk, suo tempio principale, è una delle strutture religiose più antiche del mondo.`,

      sub1: "L'inno di Enheduanna — la prima poetessa della storia",
      text1: `Enheduanna (ca. 2285–2250 a.C.), figlia del re Sargon di Akkad e somma sacerdotessa di Nanna a Ur, è il primo autore identificabile per nome nella storia della letteratura mondiale. I suoi inni a Inanna — conservati in copie di scuola del periodo Ur III (ca. 2100 a.C.) e studiati da Åke Sjöberg e William Hallo (The Exaltation of Inanna, Yale University Press, 1968) — sono testi di straordinaria potenza poetica e teologica. L'inno più celebre, il "Ninmesarra" ("Signora di tutti i poteri divini"), nasce in un contesto di crisi politica personale: Enheduanna è stata deposta dalla sua carica da un usurpatore, Lugalane, ed esiliata. Il testo oscilla tra la preghiera disperata e la visione teofanica: Enheduanna invoca Inanna ricordandole il suo potere distruttivo — come ha distrutto le montagne, come ha scosso il cielo e la terra — e supplica la dea di ristabilirla nel suo incarico sacerdotale. La teologia dell'inno è radicale: Inanna viene descritta come superiore ad An e Enlil, come la divinità che governa ogni cosa vivente e ogni cosa morta, come colei che cambia il sesso degli uomini e delle donne a suo piacimento. L'auto-presentazione di Enheduanna come tramite della voce divina anticipa di tre millenni la teologia profetica biblica. L'inno si chiude con la restituzione della carica sacerdotale — e con una delle prime affermazioni di autorialità nella storia: "Il re l'ha concesso, Nanna lo ha decretato — oh Dama, regina del cuori! È la tua sacerdotessa, Enheduanna, che ti ha dichiarata gloriosa."`,

      sub2: "Il furto delle Me — Inanna e la fondazione della civiltà di Uruk",
      text2: `Nel mito sumero "Inanna e Enki" (ca. 2000 a.C.) Inanna intraprende un viaggio deliberato da Uruk ad Eridu con l'obiettivo preciso di sottrarre a Enki i principi divini della civiltà — le Me — per portarli alla sua città. Questo testo è fondamentale per comprendere la teologia di Inanna: lei non è soltanto una dea dell'amore o della guerra, è la dea che acquisisce attivamente i poteri della civiltà e li porta agli esseri umani. Il catalogo delle Me che Enki le cede nell'ebbrezza è un inventario straordinario: la regalità, il sacerdozio, la discesa agli inferi, la musica, il mestiere del fabbro, la scrittura, il cuoio, la costruzione, l'arte della tessitura, la comprensione, la vittoria, il consiglio, la pace, l'armonia, la falsità, la menzogna, la buona reputazione, la cattiva reputazione — oltre cento principi che insieme costituiscono la pienezza della vita civile. Enki, sobrio, prova a riprenderli inviando creature marine sempre più potenti contro la Barca del Cielo di Inanna. Ogni volta, il servitore di Inanna Ninshubur respinge l'attacco. La barca attracca a Uruk con tutte le Me a bordo. Il testo si conclude con la capitolazione di Enki e il patto tra Eridu e Uruk. La lettura di Kramer (Sumerian Mythology, 1944) interpreta questo testo come un mito politico-culturale che rispecchia l'ascesa storica di Uruk come centro della civiltà sumera nel IV millennio a.C., a scapito dell'più antica Eridu. Il furto delle Me è la narrazione mitica di un processo di trasmissione culturale.`,

      sub3: "Inanna e Gilgamesh — il rifiuto e il Toro Celeste",
      text3: `L'episodio della proposta di matrimonio di Inanna a Gilgamesh e il suo rifiuto (Epopea di Gilgamesh, Tavola VI, versione standard accadica, ca. 1200 a.C.) è uno dei confronti più acuti tra divinità e umanità di tutta la letteratura mesopotamica. Inanna, affascinata dalla gloria di Gilgamesh reduce dalla vittoria su Humbaba, gli propone il matrimonio con parole di grande sensualità poetica. La risposta di Gilgamesh è brutale e raffinata al tempo stesso: elenca i precedenti amanti di Inanna e il destino che li ha colpiti. Dumuzi il pastore è condannato a piangere ogni anno. L'uccello allala è rimasto con un'ala rotta. Il leone, il cavallo da guerra, il pastore — tutti abbandonati o trasformati in qualcosa di minore. "E a me cosa faresti?" conclude Gilgamesh. La risposta di Inanna è la collera — non una collera semplice ma una collera cosmica che si rivolge direttamente ad Anu per ottenere il Toro Celeste. La scena che segue (Anu che cede, il Toro che discende a Uruk e uccide centinaia di uomini col solo respiro, Enkidu che lo afferra per le corna e Gilgamesh che lo trafigge) è la più epicamente spettacolare dell'intera opera. Ma la conseguenza narrativa è devastante: gli dèi decretano che qualcuno deve morire per l'uccisione del Toro Celeste, e scelgono Enkidu. Il rifiuto di Gilgamesh, il capriccio di Inanna, la morte di Enkidu — il testo costruisce una catena causale che lega la sessualità, la guerra e la morte in un unico movimento inesorabile.`,

      sub4: "La discesa agli inferi — morte e resurrezione della dea",
      text4: `La Discesa di Inanna agli Inferi (testo sumero, ca. 1900 a.C.; versione accadica "Discesa di Ishtar", ca. 700 a.C.; trad. Diane Wolkstein e Samuel Noah Kramer, Inanna: Queen of Heaven and Earth, Harper & Row, 1983) è il testo mitico più drammatico di tutta la letteratura mesopotamica e uno dei più importanti della storia delle religioni comparative. Inanna decide di scendere nel Grande Basso — il regno dei morti governato da sua sorella Ereshkigal — per ragioni mai completamente chiarite dal testo. Forse vuole espandere il suo potere sul regno della morte; forse è mossa da qualcosa di più oscuro e più personale. Prima di partire lascia istruzioni al suo servitore Ninshubur: se non torna entro tre giorni, deve cercare aiuto da Enlil, poi da Nanna, poi da Enki. Il viaggio attraversa sette porte, ognuna custodita da un guardiano che le toglie un attributo: la corona, gli orecchini, il collare, i grani sul petto, l'anello d'oro, il pettorale, il gonnellino. Davanti a Ereshkigal è completamente nuda, spogliata di ogni potere. Ereshkigal la fissa con lo sguardo della morte. Inanna muore e viene appesa a un gancio. Dopo tre giorni Ninshubur segue le istruzioni: Enlil e Nanna rifiutano di aiutare — Inanna ha scelto da sola di scendere. Enki crea due esseri asessuati dall'argilla sotto le sue unghie, li manda con il cibo e l'acqua della vita, e Inanna risorge. Ma le leggi del mondo inferiore sono assolute: chi sale dal Kur deve mandare qualcuno al proprio posto. Inanna condanna Dumuzi, suo marito. Il testo si chiude con il lamento di Inanna su Dumuzi, la mediazione della sorella Geshtinanna, e la soluzione dell'alternanza stagionale: Dumuzi e Geshtinanna si divideranno il tempo nel Kur, sei mesi ciascuno. La discesa è così diventata l'origine delle stagioni — e uno degli archetipi fondamentali della letteratura mondiale.`,

      sub5: "Il matrimonio sacro — Inanna e Dumuzi",
      text5: `Il ciclo dei testi d'amore tra Inanna e Dumuzi (corpus sumero, ca. 2000 a.C., studiato da Samuel Noah Kramer e da Diane Wolkstein) è una delle raccolte liriche più belle della letteratura antica e al tempo stesso un testo rituale fondamentale. I dialoghi d'amore — dove Inanna descrive il suo corpo come un campo non arato pronto per la semina, dove Dumuzi la chiama "mia sposa adorata" — sono testi di sensualità diretta e metaforica insieme. Ma il matrimonio sacro non era solo letteratura: era un rito. Nella cerimonia del *hieros gamos*, il re di Sumer si univa simbolicamente a Inanna — personificata da una sacerdotessa del tempio — garantendo con questo atto la fertilità della terra per l'anno successivo. La teologia sottostante è chiara: la sessualità divina è il motore della fertilità cosmica; il re, unendosi alla dea, attiva il principio riproduttivo del mondo. La documentazione del rito è discussa tra gli studiosi: Thorkild Jacobsen (The Treasures of Darkness, 1976) ritiene che il rito fisico fosse realmente praticato; altri, come Simo Parpola, lo interpretano come puramente simbolico. Quello che è certo è che i testi sono stati composti e trasmessi in contesto templare — erano testi liturgici, non solo letterari — e che la relazione tra Inanna e Dumuzi è il modello di ogni relazione tra divinità e re nella tradizione mesopotamica.`,
    },
    versions: [
      {
        era: "Sumero (3000–2000 a.C.) — Inanna",
        name: "La dea inventrice",
        text: "Nei testi sumerici Inanna è la protagonista di cicli mitologici autonomi: la discesa agli inferi, il furto delle Me, il matrimonio sacro con Dumuzi.",
      },
      {
        era: "Accadico e Babilonese — Ishtar",
        name: "La grande dea",
        text: "Ishtar nell'epopea di Gilgamesh è potente e vendicativa: rifiutata da Gilgamesh, chiede ad Anu il Toro Celeste per distruggerlo.",
      },
      {
        era: "Assira — Ishtar di Ninive e Arbela",
        name: "La dea della guerra",
        text: "In Assiria Ishtar diventa prevalentemente dea della guerra. I re assiri la invocano prima delle battaglie.",
      },
    ],
    cult: `Il tempio principale di Inanna era l'Eanna di Uruk — una delle strutture religiose più antiche del mondo, datata al 3500 a.C. circa.

Il rituale del matrimonio sacro (hieros gamos), in cui il re si univa simbolicamente alla dea attraverso una sacerdotessa, era uno dei riti più importanti della religione mesopotamica, garante della fertilità della terra.`,
    influence: [
      {
        era: "Afrodite e Venere",
        text: "L'associazione di Inanna/Ishtar con il pianeta Venere, con l'amore e con una natura guerriera sotto la superficie è il diretto precursore di Afrodite greca e Venere romana.",
      },
      {
        era: "Cibele e Astarte",
        text: "Il culto di Inanna si diffonde in tutto il Vicino Oriente come Astarte (fenicia), Anat (ugaritica), e influenza la Grande Madre Cibele frigia.",
      },
    ],
    texts: [
      {
        title: "Inno a Inanna di Enheduanna",
        source:
          "Enheduanna, ca. 2285–2250 a.C. — primo autore identificato della storia",
        text: "Lady of all powers, resplendent light, righteous woman clothed in radiance, beloved of heaven and earth... I will speak of war, I will speak of battle.",
      },
      {
        title: "La discesa di Inanna",
        source: "Testo sumero, ca. 1900 a.C.",
        text: "Dal Grande Alto, Inanna si volse verso il Grande Basso. La dea abbandonò il cielo, abbandonò la terra, e scese nel mondo inferiore.",
      },
    ],
  },

  {
    id: "ereshkigal",
    name: "Ereshkigal",
    role: "Regina dell'Oltretomba",
    tags: ["Morte", "Kur", "Oltretomba", "Oscurità"],
    epithet: "La Grande Regina, Signora della Terra Senza Ritorno",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Kur"],
    heroColor: "linear-gradient(160deg,#080810,#10101a,#060608)",
    bio: {
      main: `Ereshkigal è la sovrana assoluta del Kur — il regno dei morti mesopotamico, designato nei testi anche come "la Terra senza Ritorno" (ersetu la tari). Il suo nome in sumero significa "Grande Signora della Terra" (*ereš* = grande signora, *ki* = terra, *gal* = grande) — dove "terra" non indica la superficie coltivata ma le profondità sotterranee. A differenza dell'Inferno cristiano o del Tartaro greco, il Kur non è un luogo di punizione morale: è semplicemente il dove di tutti i morti, indistintamente. Chi vi entra non torna. Questa assenza di giudizio morale rende Ereshkigal ancora più terribile: la sua legge non è arbitraria, è cosmica.

Sorella maggiore di Inanna, Ereshkigal governa un dominio che non ammette eccezioni. Secondo alcune tradizioni non scelse il suo regno — fu rapita nel mondo sotterraneo quando era ancora giovane, prima di poter diventare la dea dell'amore o del cielo. Regnare sulla morte è una condanna che porta con sé: nei testi accadici appare in preda a dolori fisici, gemendo di male ai fianchi e al cuore — un'immagine di sofferenza che la trasforma da giudice implacabile a figura tragica. Iconograficamente, quando appare, è raffigurata con ali di uccello rapace e artigli al posto dei piedi.`,

      sub1: "La discesa di Inanna — la sorella-giudice",
      text1: `Il mito della Discesa di Inanna agli Inferi (ca. 1900 a.C.) è il testo in cui Ereshkigal raggiunge la sua piena caratterizzazione narrativa. Quando Inanna scende attraverso le sette porte del Kur e si presenta davanti a lei completamente spogliata dei suoi attributi divini, Ereshkigal non mostra pietà o sorpresa — mostra collera. I testi sumerici descrivono Ereshkigal che balza dal trono furente, che urla contro Neti il portiere. Non è chiaro se sia la presenza stessa di Inanna a turbarla — l'intrusione della vita nel regno della morte — o se il risentimento verso la sorella più celebrata e più amata dagli uomini sia qualcosa di più antico e più profondo. Ereshkigal lancia su Inanna lo sguardo della morte (di'u): Inanna muore e viene appesa a un gancio come un pezzo di carne. Per tre giorni il mondo di sopra si blocca — nessuna fertilità, nessun amore, nessun parto. Quando Enki manda i due esseri asessuati per riportare in vita Inanna, Ereshkigal sta gemendo dolore — un dolore vero, fisico, inconsolabile. Gli esseri di Enki la trovano a lamentarsi e le fanno eco — lamentano il suo dolore come la lamenteranno. Colpita dalla loro empatia inattesa, Ereshkigal offre loro un dono. Loro chiedono il corpo di Inanna. La legge cosmica del Kur è però inflessibile: Inanna può salire solo se qualcuno la sostituisce. Ereshkigal applica la legge — non per crudeltà, ma perché la legge è la legge. Il testo rivela in questa scena la natura profonda di Ereshkigal: è il principio stesso della necessità cosmica, non una persecutrice.`,

      sub2: "Nergal ed Ereshkigal — la regina innamorata",
      text2: `Il mito di "Nergal ed Ereshkigal" (conservato in una versione paleobabilonese da Tell el-Amarna, ca. 1350 a.C., e in una versione standard accadica, ca. 700 a.C., trad. Stephanie Dalley in Myths from Mesopotamia, 1989) è uno dei testi mesopotamici più insoliti: un racconto d'amore ambientato nel regno dei morti, che si conclude con un matrimonio che rompe tutte le regole cosmiche. Nergal, dio della guerra e della pestilenza, viene convocato al banchetto degli dèi celesti come rappresentante di Ereshkigal, che non può salire in cielo. Lì manca di rispettare il messaggero di Ereshkigal — secondo la versione di Amarna — e deve scendere negli inferi per chiedere perdono. Prima di scendere, Ea lo istruisce su come comportarsi: non sedersi sulla sedia che gli offrono, non mangiare il pane, non bere la birra, non lavarsi i piedi — e soprattutto, non guardare la dea quando si spoglia per il bagno. Nergal non riesce a resistere. Per sei giorni e sei notti resta con Ereshkigal. Poi fugge verso il cielo. Ereshkigal è devastata — piange, non vuole mangiare, non vuole bere. Manda un messaggero ad Anu: vuole Nergal come consorte, altrimenti manderà i morti a divorare i vivi finché saranno più dei vivi. Nergal viene mandato di nuovo negli inferi. La versione di Amarna lo descrive che abbraccia Ereshkigal con furore, la trascina per i capelli dal trono. La versione standard è più romantica: Nergal scende e abbraccia Ereshkigal, e lei lo accetta. Nergal diventa co-sovrano del Kur. Il mito è letto dagli studiosi come la legittimazione teologica della coppia divina del regno dei morti — e come uno dei pochissimi testi del Vicino Oriente antico in cui una dea esprime esplicitamente il proprio desiderio erotico.`,

      sub3: "Il giudizio dei morti — le leggi del Kur",
      text3: `Ereshkigal non giudica i morti nel senso morale — il Kur non è un luogo di punizione differenziata, e la dea non pesa le azioni degli uomini come il dio egiziano Thoth pesa il cuore dei defunti davanti a Osiride. Il suo regno è la destinazione universale di tutti i morti, giusti e malvagi insieme. Ma Ereshkigal governa le condizioni dell'esistenza nel Kur, e queste condizioni riflettono il comportamento dei vivi. Il testo sumero "Gilgamesh e l'oltretomba" (ca. 2000 a.C., poi incorporato come Tavola XII della versione accadica standard) contiene la descrizione più dettagliata delle gerarchie del Kur: i morti che hanno avuto figli numerosi stanno meglio; i morti con molti figli sono serviti come dèi. I morti in battaglia stanno bene. I morti senza sepoltura vagano insoddisfatti. I morti senza discendenti che portino offerte mangiano gli scarti delle mense. La dea non interviene direttamente in queste distinzioni — sono le conseguenze automatiche delle condizioni di vita e di morte. Ma è lei che presiede questo ordine, che lo mantiene, che ne è la personificazione vivente. Quando Enkidu descrive a Gilgamesh quello che ha visto nel regno di Ereshkigal, la descrizione è di un luogo di ombra e polvere — non di tormento attivo, ma di dimenticanza, di esistenza ridotta, di un riflesso spento della vita. Ereshkigal regna su un mondo che non è un castigo: è semplicemente la fine di ogni cosa che ha avuto inizio.`,
    },
    versions: [
      {
        era: "Sumero arcaico",
        name: "La regina inviolabile",
        text: "Nei testi più antichi Ereshkigal è semplicemente il potere assoluto della morte. Le sue sette porte, i suoi sette guardiani, le sue sette leggi sono inviolabili.",
      },
      {
        era: "La discesa di Inanna",
        name: "La sorella-giudice",
        text: "Nel mito della discesa di Inanna, Ereshkigal appare come antagonista ma anche come specchio: mentre Inanna è la vita nella sua pienezza, Ereshkigal è tutto ciò che la vita deve negare per esistere.",
      },
      {
        era: "Mito di Nergal ed Ereshkigal",
        name: "La regina innamorata",
        text: "In questo testo Nergal scende nel regno dei morti. Tra lui ed Ereshkigal scoppia una passione devastante. Diventerà suo consorte e co-signore del regno dei morti.",
      },
    ],
    cult: `Il Kur che lei governa non è un luogo di punizione come l'inferno cristiano — è un luogo di ombra e dimenticanza, dove i morti conducono un'esistenza pallida nutriti di polvere e argilla.

Solo i morti senza sepoltura o senza discendenti che portino offerte soffrono particolarmente.`,
    influence: [
      {
        era: "Persefone e Ecate",
        text: "La figura di Ereshkigal come dea-regina dell'oltretomba, sorella di una grande dea, è il diretto antecedente di Persefone greca.",
      },
      {
        era: "Lilith",
        text: "Alcune tradizioni ebraiche medievali associano Lilith a Ereshkigal — entrambe figure femminili demoniache del mondo ctonio.",
      },
    ],
    texts: [
      {
        title: "La discesa di Inanna — Ereshkigal giudica",
        source: "Testo sumero, ca. 1900 a.C.",
        text: "Ereshkigal aprì la bocca e parlò, disse a Neti il portiere supremo: Su, Neti, apri la tua porta. Aprila secondo le antiche usanze. Lascia che Inanna entri.",
      },
    ],
  },

  {
    id: "shamash",
    name: "Shamash / Utu",
    role: "Dio del Sole e della Giustizia",
    tags: ["Sole", "Giustizia", "Legge", "Sippar"],
    epithet: "L'Illuminatore, Giudice del Cielo e della Terra",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Sippar"],
    heroColor: "linear-gradient(160deg,#1a1200,#3a2a00,#1a1000)",
    bio: {
      main: `Shamash (accadico) o Utu (sumero) è il dio sole della Mesopotamia, e la sua sfera di dominio trascende il ciclo astronomico diurno. Il nome sumero Utu richiama il disco solare all'orizzonte; il nome accadico Shamash (šamaš) deriva dalla radice semitica *šmš* (cfr. l'ebraico *shemesh*, l'arabo *shams*). Figlio di Nanna/Sin e fratello gemello di Inanna/Ishtar, Shamash è il dio che, come il sole illumina ogni angolo oscuro della terra, porta alla luce ogni crimine nascosto. Il sole vede tutto — e perciò giudica tutto.

Ogni mattina emerge dalle Porte del Cielo attraverso i monti Mashu, sale sul suo carro di fuoco, percorre la volta celeste e al tramonto scompare per viaggiare di notte attraverso il regno dei morti prima di riemergere all'alba. Questo ciclo incessante fonda la sua affidabilità come garante della legge cosmica. Iconograficamente è raffigurato con raggi che emergono dalle spalle, un disco solare radiante sulla testa, e una sega dentata nella mano — lo strumento con cui "sega" il cielo nel suo viaggio quotidiano.`,

      sub1: "Il Codice di Hammurabi — Shamash e la legge degli uomini",
      text1: `Il documento più celebre che attesta la funzione giuridica di Shamash è la stele del Codice di Hammurabi (ca. 1754 a.C., oggi al Museo del Louvre, Parigi). Nella scena scolpita nella parte superiore della stele basaltica, alta 2,25 metri, Shamash è seduto in trono con la sua caratteristica corona a raggi di sole e porge al re Hammurabi il simbolo della regalità e della giustizia — la misura e il bastone. Il gesto iconografico ha una chiarezza teologica perfetta: la legge umana non è invenzione del re ma dono divino — e il dio che la conferisce è il dio della giustizia solare, colui che vede tutto e non può essere ingannato. Il prologo del Codice stesso invoca Shamash esplicitamente: Hammurabi dichiara di essere stato chiamato da Anu e Enlil a "far splendere la giustizia nel paese, per distruggere il malvagio e il cattivo, per impedire al forte di opprimere il debole". Shamash è il garante cosmico che rende questo mandato legittimo. I 282 leggi del Codice — che regolano tutto dalla tariffazione delle prestazioni mediche alle responsabilità degli architetti per i crolli degli edifici — sono presentate come frutto di questa investitura divina. La struttura teologica è la stessa che troveremo secoli dopo nel Decalogo biblico: le leggi umane trovano il loro fondamento e la loro garanzia in una rivelazione divina. La stele di Hammurabi è il monumento più visibile di questa teologia giuridica solare che pervade il Vicino Oriente antico.`,

      sub2: "Shamash e Gilgamesh — il dio protettore nella foresta dei cedri",
      text2: `Nell'Epopea di Gilgamesh (Tavola III–V, versione standard accadica, ca. 1200 a.C.) Shamash svolge un ruolo cruciale come patrono e protettore dell'impresa di Gilgamesh contro Humbaba, il guardiano della Foresta dei Cedri del Libano. Prima della partenza, Gilgamesh compie sacrifici e offerte a Shamash: sale sul tetto del palazzo, brucia incenso, e prega il dio del sole di proteggerlo nel viaggio. Shamash risponde con una profezia — la visione del destino di Humbaba — e durante l'impresa interviene attivamente: quando Gilgamesh ed Enkidu affrontano Humbaba e il mostro scatena i suoi sette splendori contro di loro, Shamash invia tredici venti cosmici (il vento del nord, del sud, dell'est, dell'ovest, il vento del turbine, il vento della tempesta, il vento freddo, il vento caldo e altri ancora) che immobilizzano Humbaba e lo rendono vulnerabile. La battaglia si conclude con la decapitazione di Humbaba. Il ruolo di Shamash come patrono dei viaggiatori e delle imprese eroiche rispecchia la sua natura solare: il sole che accompagna il viaggio dell'eroe attraverso le terre oscure, che combatte le forze del caos e della notte, è anche il sole che accompagna l'anima del guerriero nelle sue imprese. Il nesso tra Shamash e Gilgamesh è anche personale nei testi sumerici: Utu è il "fratello del sole" di Gilgamesh, un rapporto di parentela mitica che si manifesta nella protezione divina durante le imprese.`,

      sub3: "Adapa e Shamash — il sole come testimone cosmico",
      text3: `Nel mito di Adapa (versione accadica di Tell el-Amarna, ca. 1350 a.C.) Shamash compare in una funzione apparentemente minore ma teologicamente significativa: è il testimone cosmico dell'atto di Adapa che spezza le ali del vento del sud. Quando il vento del sud capovolge la barca di Adapa durante la pesca nel Golfo Persico e Adapa spezza le ali del vento con le sole parole, il cielo si accorge dell'anomalia — per sette giorni il vento del sud non soffia. Anu indaga e gli viene risposto che è stato Adapa. Prima che Adapa salga al cielo per essere giudicato, Ea lo prepara con cura su come comportarsi — ma il testimone chiave del processo è Shamash: il dio del sole che vede tutto era presente quando Adapa ha compiuto l'atto. La sua testimonianza è parte del meccanismo giuridico cosmico che si attiva quando un essere mortale viola l'ordine naturale. Il mito illustra come Shamash non sia soltanto un simbolo della giustizia ma un funzionario attivo del sistema giuridico cosmico: registra, testimonia, contribuisce al giudizio. Questa funzione si rispecchia nei rituali divinatori mesopotamici, dove gli aruspici (specialisti dell'ispezione del fegato degli animali sacrificati per trarre profezie) invocavano Shamash come garante della verità delle loro profezie — poiché il dio che vede tutto garantisce che la risposta del fegato sia autentica e non falsificata.`,
    },
    versions: [
      {
        era: "Sumero — Utu",
        name: "Il gemello di Inanna",
        text: "In sumero Utu è fratello gemello di Inanna. Appare come protettore dei viaggiatori e dei giusti. Nel mito di Gilgamesh sumero aiuta il re a sconfiggere Humbaba.",
      },
      {
        era: "Accadico — Shamash",
        name: "Il giudice cosmico",
        text: "Nella tradizione accadica Shamash diventa pienamente il dio della giustizia. È lui che appare sul famoso stele del Codice di Hammurabi.",
      },
    ],
    cult: `I due grandi centri di culto di Shamash erano Sippar (il cui nome significa "città del sole") e Larsa. I suoi templi erano chiamati Ebabbar — "casa splendente".

I sacerdoti di Shamash erano anche giudici e oracoli: le decisioni legali difficili venivano portate davanti al suo tempio per essere risolte con rituali divinatori.`,
    influence: [
      {
        era: "Diritto romano e medievale",
        text: "Il concetto di una divinità solare come garante supremo della giustizia percorre tutta la tradizione giuridica occidentale.",
      },
      {
        era: "Apollo",
        text: "Molte caratteristiche di Shamash confluiscono in Apollo greco: la sovranità solare, il ruolo di oracolo, la funzione di protettore dei viaggiatori.",
      },
    ],
    texts: [
      {
        title: "Inno a Shamash",
        source: "Testo accadico, ca. 1800 a.C.",
        text: "Illuminatore di tutto, che fai splendere le tenebre... ai quattro angoli del cielo salga la tua luce. Tu apri le porte del cielo... tu sei il giudice, tu esamini i sogni.",
      },
    ],
  },

  {
    id: "nanna",
    name: "Nanna / Sin",
    role: "Dio della Luna",
    tags: ["Luna", "Tempo", "Ur", "Calendario"],
    epithet: "Il Barcaiolo del Cielo, Signore del Mese",
    type: "Divinità",
    chips: ["Sumero", "Accadico", "Ur"],
    heroColor: "linear-gradient(160deg,#080d18,#0d1828,#060a14)",
    bio: {
      main: `Nanna (sumero) o Sin (accadico) è il dio della luna, e nella gerarchia cosmica mesopotamica occupa una posizione di straordinario rilievo — superiore a quella del figlio Shamash (il sole) e della figlia Inanna (il pianeta Venere). Il primato della luna sul sole riflette una scelta pratica profonda: il ciclo lunare — prevedibile, misurabile, immutabile — è il fondamento del calendario, della semina, del raccolto, e quindi della sopravvivenza della civiltà. Il nome sumero Nanna è di etimologia discussa; il nome accadico Sin è probabilmente di origine semitica (*sīn*), forse connesso alla radice che indica "luminosità".

Figlio di Enlil e della dea Ninlil, Nanna è il padre di una triade luminosa: Shamash (il sole), Inanna (Venere) e Ishkur/Adad (il dio della pioggia). Naviga il cielo notturno su una barca d'oro — immagine che rispecchia sia il profilo falcato della luna crescente sia il contesto fluviale della Mesopotamia. Il suo santuario principale era a Ur, dove il tempio Ekishnugal ospitava uno dei corpi sacerdotali più potenti del mondo antico. Il simbolo di Nanna — la mezzaluna — è uno dei simboli religiosi più longevi della storia umana.`,

      sub1: "Il viaggio di Nanna da Ur a Nippur",
      text1: `Il testo sumero "Il viaggio di Nanna a Nippur" (ca. 2100 a.C., periodo Ur III, trad. Thorkild Jacobsen in The Harps That Once..., Yale University Press, 1987) è uno dei testi religiosi più affascinanti del corpus mesopotamico e riflette direttamente la politica religiosa della terza dinastia di Ur. Il testo descrive Nanna che carica la sua grande barca con alberi, animali, piante, cereali, pesci — i prodotti dell'abbondanza che Ur produce — e naviga il canale sacro da Ur verso nord fino a Nippur, dove Enlil risiede nell'Ekur. Il viaggio è trionfale: ogni città lungo il percorso (Larsa, Uruk, Shuruppak, Nippur) festeggia l'arrivo del dio con offerte e banchetti. Enlil riceve Nanna a Nippur con grande onore e gli concede benedizioni abbondanti per Ur — raccolti, mandrie, pescagioni straordinarie. La lettura teologico-politica del testo è chiara: il re di Ur, che si presenta come il servitore di Nanna, legittima la sua supremazia sulla Mesopotamia attraverso il rapporto privilegiato tra il suo dio tutelare e Enlil, il dio dell'ordine cosmico a Nippur. Il viaggio della barca di Nanna è quindi anche il pellegrinaggio simbolico di Ur verso il cuore sacro della Mesopotamia — un atto di omaggio che ribadisce la gerarchia religiosa e politica del tempo. Il testo fu probabilmente recitato durante le celebrazioni del festival di Nanna a Ur, rinforzando l'identificazione tra il dio, la città e la dinastia regnante.`,

      sub2: "La riforma di Nabonido — il tentativo di elevare Sin sopra Marduk",
      text2: `Uno degli episodi più drammatici e storicamente meglio documentati della religione mesopotamica è il tentativo del re babilonese Nabonido (556–539 a.C.) di fare di Sin il dio supremo del pantheon, al posto di Marduk. Nabonido era originario di Harran, la grande città del culto di Sin nella Siria settentrionale, e la sua devozione al dio luna era profonda e personale — sua madre Adad-guppi era stata una longeva sacerdotessa di Sin a Harran. Quando salì al trono di Babilonia, Nabonido intraprese una serie di riforme religiose radicali: restaurò il tempio di Sin a Harran (l'Ehulhul, distrutto dai Medi), ridusse i privilegi del clero di Marduk a Babilonia, e si allontanò dalla capitale per anni, risiedendo nell'oasi di Tayma in Arabia. La sua assenza da Babilonia significò che per anni il festival dell'Akitu — la cerimonia centrale del culto di Marduk, in cui il re doveva "prendere la mano di Marduk" per legittimare il suo regno — non fu celebrato. Il clero di Marduk reagì con una campagna di propaganda che ci è pervenuta attraverso la "Cronaca di Nabonido" e il "Verso di Nabonido" — testi che presentano il re come empio, pazzo, abbandonato dagli dèi. Quando Ciro il Grande di Persia invase Babilonia nel 539 a.C., si presentò come il restauratore del culto di Marduk — e il clero babilonese lo accolse di conseguenza. La riforma di Nabonido fallì politicamente, ma è teologicamente straordinaria: è il tentativo più ambizioso nella storia mesopotamica di sostituire una divinità suprema con un'altra attraverso l'intervento diretto del potere regale.`,

      sub3: "Nanna e il ciclo del tempo — il dio che regola la storia",
      text3: `La funzione di Nanna come regolatore del calendario va oltre la semplice misurazione del tempo: nella teologia mesopotamica il dio luna è il custode dei destini mensili, l'istanza che all'inizio di ogni mese nuovo (e al plenilunio, e all'eclissi) si riunisce con gli altri dèi per decretare i destini. Questa assemblea mensile degli dèi è parallela all'assemblea annuale presieduta da Anu — ma è Nanna a presiedere il ritmo mensile, la granularità più fine della gestione cosmica. Nei testi divinatori mesopotamici (in particolare nei testi dell'Enuma Anu Enlil, il grande corpus astrologico, ca. 1400–700 a.C.), le fasi della luna — la nascita della falce, il plenilunio, le eclissi — sono cariche di significati omens: un'eclissi lunare di certe caratteristiche annuncia la morte del re, un plenilunio con alone colore di sangue annuncia la guerra, la luna nuova in certi giorni del mese annuncia abbondanza o carestia. Nanna non è semplicemente il simbolo del tempo — è il meccanismo attraverso cui il tempo porta i suoi messaggi all'umanità. I sacerdoti astronomi (tupsar Enuma Anu Enlil, "scribi dell'Enuma Anu Enlil") che osservavano il cielo ogni notte dalle ziggurat di Babilonia, Nippur e Uruk erano i sacerdoti di Nanna in senso funzionale: interpretare il cielo lunare era leggere la volontà del dio. Questa tradizione astrologica lunare — trasmessa attraverso la cultura ellenistica, persiana e araba — è all'origine di gran parte dell'astrologia occidentale medievale e moderna.`,
    },
    versions: [
      {
        era: "Sumero — Nanna",
        name: "Il signore del calendario",
        text: "Nei testi sumerici Nanna regola il tempo e le stagioni. Il suo ciclo mensile di trenta giorni è la base del calendario lunare mesopotamico.",
      },
      {
        era: "Periodo Neo-Babilonese",
        name: "La riforma di Nabonido",
        text: "Il re Nabonido (556–539 a.C.) tentò di elevare Sin al di sopra di Marduk come divinità suprema — riforma che suscitò enorme opposizione.",
      },
    ],
    cult: `La città sacra di Nanna era Ur — la città di Abramo secondo la tradizione biblica — dove il suo grande tempio Ekishnugal era uno dei più importanti della Mesopotamia.

Il simbolo di Nanna è la mezzaluna, uno dei simboli religiosi più antichi del mondo.`,
    influence: [
      {
        era: "Mezzaluna islamica",
        text: "Il simbolo della mezzaluna, attraverso la tradizione araba preislamica, è diventato il simbolo dell'Islam — una linea che risale a Nanna di Ur, tremila anni prima di Maometto.",
      },
      {
        era: "Calendario ebraico e islamico",
        text: "Entrambi i calendari lunari — ebraico e islamico — discendono dalla tradizione mesopotamica di misurazione del tempo basata sul ciclo di Nanna.",
      },
    ],
    texts: [
      {
        title: "Inno a Nanna-Sin",
        source: "Testo liturgico sumero, ca. 2100 a.C.",
        text: "O Nanna, che sei la luce del cielo, il tuo splendore riempie i cieli. Come un giovane toro che si muove nel campo del cielo, attraversi il firmamento con la tua barca d'oro.",
      },
    ],
  },
];

const MESOP_HEROES = [
  {
    id: "gilgamesh",
    name: "Gilgamesh",
    epithet: "Il Re che Vide Tutto",
    type: "Eroe",
    chips: ["Uruk", "2/3 divino", "Epopea accadica", "Re storico"],
    heroColor: "linear-gradient(160deg,#2a1400,#4a2200,#1e1000)",
    shortDesc:
      "Re di Uruk, due terzi divino e un terzo mortale. Tirannico e invincibile, affronta imprese sovrumane fino a che la morte dell'amico Enkidu non lo spinge alla ricerca disperata dell'immortalità.",
    bio: {
      main: `Gilgamesh è il protagonista dell'Epopea di Gilgamesh — il poema epico più antico della letteratura mondiale, composto in varie versioni nell'arco di quasi mille anni (2100–1200 a.C. circa). È re della città di Uruk, due terzi divino e un terzo mortale: sua madre è la dea Ninsun, suo padre il re Lugalbanda.

Nella sua natura ibrida risiede tutta la sua tragedia: è abbastanza divino da aspirare all'immortalità, ma abbastanza mortale da sapere che non la raggiungerà mai.`,
      sub1: "Il tiranno di Uruk",
      text1: `La storia inizia con un Gilgamesh oppressivo: costruisce le mura di Uruk con il lavoro forzato dei suoi sudditi, prende per sé le donne degli altri uomini. I cittadini gridano agli dèi, che creano Enkidu — un essere selvatico, uguale a Gilgamesh in forza — per placare il re. Quando i due si incontrano si scontrano violentemente, poi diventano inseparabili.`,
      sub2: "Le grandi imprese",
      text2: `Con Enkidu al fianco Gilgamesh affronta imprese che nessun mortale ha osato prima: la spedizione alla Foresta dei Cedri per uccidere il mostro Humbaba; il rifiuto delle avance di Ishtar e l'uccisione del Toro Celeste che lei scatena per vendetta.`,
      sub3: "La morte di Enkidu e il crollo",
      text3: `Gli dèi decidono che qualcuno deve pagare per l'uccisione del Toro Celeste. Scelgono Enkidu. La malattia lo consuma lentamente, e Gilgamesh assiste impotente. Piange per sei giorni e sette notti, rifiuta di credere alla realtà della morte finché un verme non cade dalla narice del cadavere.`,
      sub4: "Il viaggio verso l'immortalità",
      text4: `Gilgamesh parte alla ricerca di Utnapishtim, l'unico uomo ad aver ottenuto l'immortalità. Il viaggio lo porta attraverso le montagne Mashu, il regno delle tenebre, fino al mare delle acque della morte.

Utnapishtim gli svela dove trovare la Pianta della Vita sul fondo del mare. Gilgamesh la raccoglie, ma un serpente gliela ruba nel viaggio di ritorno. Torna a Uruk a mani vuote — e guardando le mura della città trova una forma diversa di immortalità: le sue opere, la sua città, il suo nome.`,
    },
    versions: [
      {
        era: "Versione sumera (ca. 2100 a.C.)",
        name: "Cinque poemi indipendenti",
        text: "Le tradizioni sumeriche consistono in cinque poemi separati: Gilgamesh e Agga, Gilgamesh ed Enkidu e l'Oltretomba, Gilgamesh e il Toro Celeste, Gilgamesh e Huwawa, La morte di Gilgamesh.",
      },
      {
        era: "Versione paleobabilonese (ca. 1800 a.C.)",
        name: "Il ciclo si unifica",
        text: "Le tavolette paleobabilonesi mostrano il processo di unificazione in un'opera più coerente. La relazione con Enkidu viene approfondita psicologicamente.",
      },
      {
        era: "Versione standard accadica (ca. 1200 a.C.)",
        name: "L'epopea in dodici tavole",
        text: "La versione definitiva, attribuita allo scriba Sin-leqi-unninni, organizza il materiale in dodici tavole. È la versione conservata nella biblioteca di Ashurbanipal a Ninive.",
      },
      {
        era: "Frammenti ittiti e hurritici (ca. 1400–1200 a.C.)",
        name: "La diffusione nell'Anatolia",
        text: "Frammenti dell'epopea sono stati trovati in ittita e hurritico ad Hattusha, a Megiddo e a Tell el-Amarna — prova della sua diffusione come classico letterario internazionale.",
      },
    ],
    influence: [
      {
        era: "Omero (ca. 800 a.C.)",
        text: "Le parallele tra l'Epopea di Gilgamesh e l'Iliade e l'Odissea sono numerose: l'amicizia tra guerrieri, il viaggio verso i morti, l'eroe che affronta la propria mortalità.",
      },
      {
        era: "La Bibbia — Noè e il diluvio",
        text: "La tavola XI contiene il racconto del Diluvio di Utnapishtim, con dettagli quasi identici al racconto di Noè nella Genesi. Il testo mesopotamico precede la Bibbia di almeno 700 anni.",
      },
      {
        era: "Ercole e le dodici fatiche",
        text: "La struttura dell'eroe che compie imprese sovrumane con un compagno, poi affronta la morte, ricorda fortemente il ciclo di Ercole.",
      },
      {
        era: "Letteratura moderna",
        text: "Il XX secolo ha riscoperto Gilgamesh come archetipo della condizione umana. Rainer Maria Rilke fu tra i primi a riconoscerne la grandezza. Seguirono romanzi, opere teatrali, videogiochi, fumetti.",
      },
    ],
    texts: [
      {
        title: "La morte di Enkidu — Tavola VIII",
        source: "Epopea di Gilgamesh, versione standard, ca. 1200 a.C.",
        text: "Al primo chiarore dell'alba Gilgamesh aprì la bocca e disse ad Enkidu suo amico: Enkidu, tua madre era la gazzella, tuo padre l'asino selvatico. Ti hanno cresciuto le onagre con il loro latte.",
      },
      {
        title: "Il monologo sul senso della vita — Tavola X",
        source: "Versione paleobabilonese, ca. 1800 a.C.",
        text: "Siduri la locandiera disse a Gilgamesh: Quando gli dèi crearono l'umanità assegnarono la morte all'umanità, ma trattennero la vita nelle proprie mani. Tu, Gilgamesh, che il tuo ventre sia pieno, gioisci di giorno e di notte.",
      },
      {
        title: "Il ritorno a Uruk — Tavola XI, epilogo",
        source: "Versione standard, ca. 1200 a.C.",
        text: "Sali sulle mura di Uruk, cammina avanti e indietro, esamina le fondamenta, guarda il mattone — non è di mattoni cotti? Un terzo è città, un terzo è giardino, un terzo è campo. Questo è Uruk.",
      },
    ],
  },
  {
    id: "enkidu",
    name: "Enkidu",
    epithet: "L'Uomo Selvatico, il Primo Amico",
    type: "Eroe",
    chips: ["Creato dagli dèi", "Natura e Civiltà", "Compagno di Gilgamesh"],
    heroColor: "linear-gradient(160deg,#0d1a08,#1a3010,#0a1206)",
    shortDesc:
      "Creato dalla dea Aruru con l'argilla divina come pari di Gilgamesh, Enkidu nasce nella steppa e vive con gli animali. La sua traiettoria dal selvatico al civilizzato, e poi alla morte, è il vero cuore emotivo dell'epopea.",
    bio: {
      main: `Enkidu è forse il personaggio più originale di tutta la mitologia mesopotamica. Non è un re, non è un dio — è un essere creato appositamente dalla dea Aruru per essere il doppio e la cura di Gilgamesh. Nasce nella steppa, vive con le gazzelle, beve con gli animali alle sorgenti.`,
      sub1: "Dall'animale all'uomo",
      text1: `La trasformazione di Enkidu è il primo grande racconto di educazione della letteratura mondiale. Quando il cacciatore lo avvista e lo teme, Gilgamesh manda Shamhat, una sacerdotessa del tempio di Ishtar. Per sei giorni e sette notti Enkidu rimane con lei — e al termine non può più tornare con gli animali: le gazzelle fuggono, le bestie lo rifiutano.`,
      sub2: "La fratellanza con Gilgamesh",
      text2: `L'incontro tra Enkidu e Gilgamesh inizia come uno scontro: Enkidu blocca l'ingresso al palazzo per impedire a Gilgamesh di esercitare il suo diritto di prima notte sulla sposa di un cittadino. I due si battono ferocemente, finché Gilgamesh prevale — ma invece di uccidere il suo rivale, lo abbraccia.`,
      sub3: "La morte e il suo significato",
      text3: `Enkidu muore per decreto divino — punizione per l'uccisione del Toro Celeste e di Humbaba. Prima di morire sogna il mondo dei morti e lo descrive con orrore. Maledice Shamhat che lo ha civilizzato — poi la benedice, riconoscendo che senza di lei non avrebbe incontrato Gilgamesh.`,
    },
    versions: [
      {
        era: "Testi sumerici",
        name: "Enkidu come servitore",
        text: "Nei poemi sumerici Enkidu è presentato come il servitore di Gilgamesh piuttosto che come suo pari. La dimensione dell'amicizia profonda è uno sviluppo accadico.",
      },
      {
        era: "Versione accadica standard",
        name: "L'eguale e il fratello",
        text: "Nella versione standard il rapporto Gilgamesh-Enkidu è una vera fratellanza tra pari. La madre di Gilgamesh, Ninsun, adotta formalmente Enkidu come suo figlio.",
      },
    ],
    influence: [
      {
        era: "Achille e Patroclo",
        text: "L'amicizia guerriera che la morte dell'amico trasforma in dolore inconsolabile — Enkidu/Gilgamesh e Patroclo/Achille — è talmente parallela da suggerire una trasmissione culturale.",
      },
      {
        era: "Il 'buon selvaggio' di Rousseau",
        text: "L'idea di Enkidu come uomo naturale non corrotto dalla civiltà prefigura di tremila anni il concetto illuministico del 'buon selvaggio' di Rousseau.",
      },
      {
        era: "Tarzan e l'archetipo dell'uomo selvatico",
        text: "L'archetipo dell'uomo cresciuto con gli animali — da Enkidu a Romolo e Remo a Tarzan — ha in Enkidu la sua prima e più complessa formulazione.",
      },
    ],
    texts: [
      {
        title: "La nascita di Enkidu — Tavola I",
        source: "Epopea di Gilgamesh, versione standard",
        text: "Aruru lavò le mani, prese un pezzetto di argilla, lo lanciò nella steppa: nella steppa creò Enkidu il prode. Il suo corpo era coperto di capelli, aveva lunghi capelli come quelli di una donna.",
      },
    ],
  },
  {
    id: "utnapishtim",
    name: "Utnapishtim",
    epithet: "Il Sopravvissuto al Diluvio, L'Immortale",
    type: "Eroe",
    chips: ["Shuruppak", "Unico immortale", "Diluvio universale"],
    heroColor: "linear-gradient(160deg,#081520,#0d2535,#060f18)",
    shortDesc:
      "Avvertito da Ea del diluvio cosmico decretato da Enlil, costruisce un'enorme arca e salva l'umanità e gli animali. Come ricompensa per la sua pietà gli dèi gli concedono l'immortalità.",
    bio: {
      main: `Utnapishtim è un personaggio che appartiene a due livelli narrativi dell'Epopea di Gilgamesh: è l'unico essere umano immortale, la meta del viaggio disperato di Gilgamesh — ma è anche il narratore del Diluvio universale, inserito nell'epopea come una storia nella storia.

Il suo nome significa probabilmente "trovò la vita" in accadico. Vive "alla foce dei fiumi", in un luogo ai confini del mondo.`,
      sub1: "Il diluvio — come Noè prima di Noè",
      text1: `La storia del diluvio è tra i testi più importanti della storia culturale umana. Enlil aveva decretato di sterminare l'umanità perché il rumore degli uomini disturbava il sonno degli dèi. Ea, legato da un giuramento di non rivelare il piano, parla al capanno di canne di Utnapishtim.

Utnapishtim costruisce una nave cubica di sette ponti, vi imbarca artigiani di ogni mestiere, animali e la sua famiglia. La tempesta dura sette giorni. Dopo sette giorni la nave si incaglia sul Monte Nimush.`,
      sub2: "La prova del tempo",
      text2: `Quando Gilgamesh arriva chiedendo il segreto dell'immortalità, Utnapishtim gli pone una sfida: non dormire per sei giorni e sette notti. Se non riesce a vincere il sonno — "il fratello minore della morte" — come potrebbe vincere la morte stessa? Gilgamesh si addormenta immediatamente.`,
      sub3: "La Pianta della Vita",
      text3: `La moglie di Utnapishtim convince il marito a rivelare a Gilgamesh dove trovare la Pianta della Vita sul fondo del mare. Gilgamesh la raccoglie con successo — ma nel viaggio di ritorno un serpente la ruba. Il serpente ringiovanisce cambiando pelle. Gilgamesh si siede e piange.`,
    },
    versions: [
      {
        era: "Versione sumera — Ziusudra",
        name: "Il re-sacerdote salvato",
        text: "Nella versione sumera il sopravvissuto al diluvio si chiama Ziusudra — un re e sacerdote di Shuruppak. Il testo è molto frammentario ma conferma la struttura essenziale.",
      },
      {
        era: "Versione accadica di Atrahasis (ca. 1700 a.C.)",
        name: "Atrahasis, il super-saggio",
        text: "Il protagonista si chiama Atrahasis — 'super saggio' — ed è protagonista dell'intera storia della creazione dell'umanità. Il diluvio è inserito in un contesto cosmologico più ampio.",
      },
      {
        era: "Nella Bibbia — Noè",
        name: "La versione ebraica",
        text: "Il racconto di Noè nella Genesi rispecchia chiaramente la tradizione mesopotamica: l'avvertimento divino, l'arca con gli animali, la colomba e il corvo, l'arca sulla montagna.",
      },
    ],
    influence: [
      {
        era: "Noè e la tradizione biblica",
        text: "Il parallelo Utnapishtim/Noè è il caso più documentato di dipendenza diretta della Bibbia da testi mesopotamici.",
      },
      {
        era: "Deucalione greco",
        text: "Anche il mito greco del diluvio, con Deucalione e Pirra che sopravvivono su una barca, appartiene alla stessa tradizione mitica diffusa in tutto il Vicino Oriente.",
      },
      {
        era: "Il serpente e la Pianta della Vita",
        text: "Il serpente che ruba la Pianta della Vita ricompare nella Genesi come il serpente che convince Eva a mangiare il frutto dell'albero della conoscenza.",
      },
    ],
    texts: [
      {
        title: "L'avvertimento di Ea — Tavola XI",
        source: "Epopea di Gilgamesh, versione standard",
        text: "Uomo di Shuruppak, figlio di Ubar-Tutu: abbatti la tua casa, costruisci una nave! Abbandona le ricchezze, cerca di salvare la vita! Fai salire sulla nave il seme di tutte le creature viventi.",
      },
      {
        title: "Il diluvio — Tavola XI",
        source: "Epopea di Gilgamesh, versione standard",
        text: "Per sei giorni e sette notti imperversò il vento, il diluvio, la tempesta, il cataclisma. Al settimo giorno la tempesta era esausta, il mare si era ritirato, il diluvio finì.",
      },
    ],
  },
];

const MESOP_MYTHS = [
  {
    id: "enuma",
    tag: "Epopea della creazione",
    title: "Enuma Elish — Quando in alto il cielo non era ancora nominato",
    type: "Mito",
    epithet: "L'Epopea della Creazione",
    chips: ["Babilonese", "Cosmogonia", "Marduk", "ca. 1100 a.C."],
    heroColor: "linear-gradient(160deg,#1a1000,#2a1800,#120c00)",
    shortDesc:
      "Il testo cosmogoniaco più importante della Mesopotamia. Racconta la battaglia tra Marduk e Tiamat e la successiva creazione del cosmo dal corpo della dea sconfitta. Recitato ogni anno durante il Capodanno babilonese.",
    bio: {
      main: `L'Enuma Elish — dal suo incipit "quando in alto" — è l'epopea della creazione babilonese, composta probabilmente intorno al XII–XI secolo a.C. Il poema è strutturato in sette tavole e veniva recitato integralmente durante la festa del Capodanno babilonese (Akitu).

La recitazione era parte di un rito di rinnovamento cosmico: recitando la storia della creazione, si ricreava simbolicamente il cosmo ogni anno, garantendo un altro ciclo di prosperità.`,
      sub1: "Struttura e temi",
      text1: `La narrazione segue un arco preciso: caos primordiale → conflitto divino → battaglia cosmica → creazione del mondo → creazione dell'umanità → esaltazione di Marduk.

Il tema centrale non è solo la creazione fisica del mondo ma la legittimazione del potere: Marduk diventa re degli dèi perché ha salvato tutti combattendo Tiamat. Il testo è una teologia politica mascherata da cosmogonia.`,
      sub2: "Le sette tavole",
      text2: `Tavola I–II: le origini di Apsu e Tiamat, la nascita degli dèi, il conflitto, l'uccisione di Apsu da parte di Ea, la preparazione di Tiamat alla guerra.

Tavola III–IV: l'assemblea degli dèi sceglie Marduk come campione, la battaglia tra Marduk e Tiamat, la vittoria di Marduk.

Tavola V: la creazione del cosmo dal corpo di Tiamat. Tavola VI: la creazione dell'umanità dal sangue di Kingu. Tavola VII: i cinquanta nomi di Marduk.`,
    },
    versions: [
      {
        era: "Precedenti sumerici",
        name: "Enki e la creazione",
        text: "Nelle tradizioni sumeriche più antiche non esiste un'unica epopea della creazione ma frammenti sparsi. L'Enuma Elish babilonese sistematizza queste tradizioni per metterle al servizio di Marduk.",
      },
      {
        era: "Versione assira",
        name: "Enuma Elish con Ashur",
        text: "Gli Assiri sostituirono il nome di Marduk con quello del loro dio nazionale Ashur in una versione parallela del testo.",
      },
    ],
    influence: [
      {
        era: "Genesi biblica",
        text: "Il racconto della creazione nella Genesi — la separazione delle acque, la creazione della luce, dell'acqua, della terra — rispecchia la struttura dell'Enuma Elish in modo sufficientemente preciso da suggerire una conoscenza della tradizione babilonese.",
      },
      {
        era: "La cosmogonia come battaglia",
        text: "Lo schema 'creazione dal corpo del nemico sconfitto' ricompare in molte tradizioni: il corpo del gigante nordico Ymir da cui è creato il mondo, Purusha nel Rig Veda indiano.",
      },
    ],
    texts: [
      {
        title: "Incipit — Tavola I",
        source: "Enuma Elish, ca. 1100 a.C.",
        text: "Quando in alto il cielo non era ancora nominato, in basso la terra ferma non portava ancora un nome, e l'Apsu primordiale che li aveva generati, Mummu-Tiamat, la madre di tutti, mescolava le loro acque insieme — allora gli dèi furono creati dentro di loro.",
      },
    ],
  },
  {
    id: "discesa",
    tag: "Discesa agli inferi",
    title: "La Discesa di Inanna nel Grande Basso",
    type: "Mito",
    epithet: "La Discesa e il Ritorno",
    chips: ["Sumero", "Inanna", "Ereshkigal", "ca. 1900 a.C."],
    heroColor: "linear-gradient(160deg,#100818,#1a0d2a,#080510)",
    shortDesc:
      "Inanna, regina del cielo, scende volontariamente nel regno dei morti sfidando la sorella Ereshkigal. Viene uccisa e il mondo si blocca. Il piano di Ea la riporta in vita — ma a un prezzo.",
    bio: {
      main: `La Discesa di Inanna nel Grande Basso è uno dei testi mitologici più affascinanti di tutta la letteratura mesopotamica. Racconta la discesa volontaria di Inanna, dea del cielo e dell'amore, nel regno dei morti governato da sua sorella Ereshkigal.

La discesa non è forzata — Inanna sceglie di scendere. I motivi non sono mai completamente spiegati nel testo: forse vuole espandere il suo potere anche sul regno dei morti, forse è mossa da curiosità.`,
      sub1: "Le sette porte dello spogliamento",
      text1: `Il viaggio verso il Kur passa attraverso sette porte. A ogni porta un guardiano le chiede di togliere un attributo: la corona, gli orecchini, il collare di lapislazzuli, le pietre sul petto, l'anello d'oro, il pettorale, il gonnellino. Quando arriva davanti a Ereshkigal è completamente nuda, spogliata di ogni potere divino.`,
      sub2: "La morte e il blocco del mondo",
      text2: `Ereshkigal lancia su di lei lo sguardo della morte. Inanna muore e viene appesa a un gancio come un pezzo di carne. Per tre giorni e tre notti il mondo di sopra si blocca: nessuna fertilità, nessun amore, nessun parto.`,
      sub3: "La resurrezione e il prezzo",
      text3: `Enki crea due esseri asessuati dall'argilla sotto le sue unghie e li manda nel Kur con il cibo e l'acqua della vita. Riportano in vita Inanna. Ma le leggi del mondo dei morti sono inflessibili: chiunque sia salito dal Kur deve mandare qualcuno al proprio posto.

Inanna condanna Dumuzi, suo marito. La sorella di Dumuzi, Geshtinanna, si offre di dividersi il tempo nel Kur — così Dumuzi scende per sei mesi e lei per gli altri sei. Questa alternanza dà origine alle stagioni.`,
    },
    versions: [
      {
        era: "Versione sumera (ca. 1900 a.C.)",
        name: "Inanna e Dumuzi",
        text: "La versione sumera culmina con la condanna di Dumuzi — il marito di Inanna — a trascorrere sei mesi all'anno nel mondo dei morti, spiegando così il ciclo delle stagioni.",
      },
      {
        era: "Versione accadica — Discesa di Ishtar",
        name: "Il testo più breve",
        text: "La versione accadica, più concisa, omette molti dettagli. Il mondo si blocca in modo più esplicito: durante la sua assenza nessun uomo si avvicina a nessuna donna.",
      },
    ],
    influence: [
      {
        era: "Persefone e le stagioni",
        text: "Il mito di Persefone rapita da Ade e che trascorre sei mesi all'anno nel mondo dei morti è chiaramente parallelo alla storia di Dumuzi/Tammuz.",
      },
      {
        era: "La struttura dell'iniziazione",
        text: "Il viaggio di Inanna — discesa, morte, ritorno trasformati — è diventato uno schema archetipico. Carl Gustav Jung e Sylvia Brinton Perera hanno letto il mito di Inanna come mappa dell'individuazione psicologica.",
      },
    ],
    texts: [
      {
        title: "L'inizio della discesa",
        source: "Discesa di Inanna, testo sumero, ca. 1900 a.C.",
        text: "Dal Grande Alto Inanna si volse verso il Grande Basso. La dea si volse verso il Grande Basso. Inanna abbandonò il cielo, abbandonò la terra, e scese nel mondo inferiore.",
      },
    ],
  },
];
