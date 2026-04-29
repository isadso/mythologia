/* data/celtica-gallica.js
   Mitologia Celtica — Tradizione Gallica Continentale
   (Gallia, Germania celtica, Iberia celtiberica, Galazia d'Anatolia,
    Britannia pre-romana)

   Fonti primarie:
   - Giulio Cesare, De Bello Gallico, libro VI (druidi e religione gallica)
   - Lucano, Pharsalia I, 444-446 (triade Taranis/Teutates/Esus)
   - Commenta Bernensia in Lucanum (scoli medievali a Lucano)
   - Plinio il Vecchio, Naturalis Historia XVI, XXIV, XXX
   - Strabone, Geografia IV
   - Diodoro Siculo, Bibliotheca Historica V, 28-32
   - Iscrizioni votive celto-romane (CIL XIII, RIB, AE)
   - Iconografia: calderone di Gundestrup (II-I sec. a.C.), pilastro dei
     Nautes (I sec. d.C., Parigi), altari e stele di tutta l'area gallo-romana

   Studi: Georges Dumézil, Mythe et Épopée; Miranda Aldhouse-Green, The Gods
          of the Celts (1986), Caesar's Druids (2010); Jean-Louis Brunaux,
          Les Druides (2006); Paul-Marie Duval, Les dieux de la Gaule;
          Bernhard Maier, Dictionary of Celtic Religion and Culture; Barry
          Cunliffe, The Ancient Celts; Stuart Piggott, The Druids.

   ATTENZIONE: questo file contiene solo le 8 divinità del Lotto 3A.
   Gli eroi (Vercingetorige, Druidi) e i miti (Gundestrup, Alesia) saranno
   aggiunti con il Lotto 3B nei marker segnalati. Gli array GALLIC_HEROES
   e GALLIC_MYTHS sono già dichiarati e sintatticamente validi (ma vuoti).
*/

/* ══════════════════════════════════════════════════════════════════════
   DIVINITÀ GALLICHE CONTINENTALI
   ══════════════════════════════════════════════════════════════════════ */

const GALLIC_DEITIES = [
  /* ════════════════════════════════════════════════════════════════════
     1. TARANIS — il Dio del Tuono e della Ruota Cosmica
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "taranis",
    name: "Taranis",
    role: "Dio del Tuono e della Ruota Cosmica",
    tags: ["Tuono", "Ruota", "Cielo", "Sacrificio cruento"],
    epithet: "Il Tonante, Signore della Ruota Solare, Dio del Cielo Celtico",
    type: "Divinità",
    chips: ["Gallia", "Britannia", "Lucano", "Iupiter Taranis"],
    heroColor: "linear-gradient(160deg,#1a0a00,#3a1a05,#0a0500)",
    bio: `Taranis — il cui nome deriva direttamente dalla radice proto-celtica *toranos ("tuono"), da cui il moderno gallese taran, bretone taran, irlandese torann — è il dio del tuono nel pantheon gallico continentale. È la divinità celtica più chiaramente paneuropea: il suo nome è attestato nelle iscrizioni votive dalla Provenza alla Renania alla Britannia a Chester, e il suo simbolo principale — la ruota raggiata — compare su centinaia di reperti archeologici dall'Età del Ferro fino al periodo romano. Taranis è la "prima funzione" dumézilliana della religione celtica: il dio sovrano del cielo, depositario della giustizia cosmica, garante dell'ordine, padrone del tempo atmosferico.

La fonte letteraria principale su Taranis è il celebre passo di Lucano nella Pharsalia (I, 444-446), poema epico del I sec. d.C. sulla guerra civile tra Cesare e Pompeo. Lucano elenca tre divinità galliche con i loro sacrifici cruenti: "e coloro che placano con sangue orrendo lo spietato Teutates, e l'orrido Esus con altari selvaggi, e Taranis ai cui altari si compiono sacrifici non meno crudeli di quelli della Diana scitica". Gli scoli medievali al passo — il Commenta Bernensia — specificano i tipi di sacrificio: per Taranis, vittime arse vive dentro una gabbia di vimini (il celebre "uomo di vimini" descritto anche da Cesare). L'associazione con il fuoco è coerente con la natura tonante del dio: il fulmine che cade dal cielo è la sua arma, e il suo sacrificio replica sulla terra il fenomeno celeste.

L'attributo iconografico principale di Taranis è la ruota a sei o otto raggi, spesso tenuta in mano come uno scudo. Questa "ruota di Taranis" appare su altari votivi, piccoli bronzetti rituali, pendenti-amuleto, e monete galliche pre-romane. L'interpretazione standard è duplice: la ruota è simbolo solare (il sole che gira nel cielo) e simbolo del tuono (il rombo del carro celeste che attraversa le nuvole, parallelo al Donar germanico e al Perkunas baltico). Il parallelo indoeuropeo è stringente: il Taranis celtico appartiene alla stessa famiglia mitologica di Thor norreno, Giove romano, Perun slavo, Indra vedico — tutti dèi-tuono del panteon indoeuropeo con identica funzione sovrana e identici attributi (fulmine, ruota, carro celeste).`,
    versions: [
      {
        era: "Iscrizioni votive romano-galliche",
        name: "Il Taranis attestato",
        text: "Il nome Taranis appare in almeno sette iscrizioni latine del periodo imperiale romano (I-III sec. d.C.), dalla Croazia dalmatica (CIL III) alla Renania (CIL XIII) alla Britannia (RIB 452, Chester). Le iscrizioni sono dedicatorie: 'Iovi Tarano', 'Deo Taranuco', 'Iovi Taranis'. Il sincretismo con Giove è costante: Taranis è il 'Giove celtico', funzionalmente identificato con il dio romano ma con attributi propri (ruota). Il processo di interpretatio romana è ben documentato: i romani riconoscevano Taranis come 'loro' Giove, i celti adottavano il nome latino ma conservavano l'iconografia gallica.",
      },
      {
        era: "Lucano e il sacrificio nel vimine",
        name: "Il dio orrido di Pharsalia",
        text: "Il passo di Lucano (Pharsalia I, 444-446) è la fonte letteraria antica più citata su Taranis, benché brevissimo. Gli scoli successivi (Commenta Bernensia, IX sec.) aggiungono: 'Taranis Iuppiter, apud quos hominem ad ardendum mittebat, vel ardebatur in alveo ligneo.' L'interpretazione corrente: vittime — probabilmente prigionieri di guerra, condannati, o volontari sacrificali — venivano poste in una gabbia-sepolcro di vimini e arse vive. Cesare (De Bello Gallico VI, 16) conferma indipendentemente la pratica del 'simulacrum di vimini'. Gli archeologi hanno rinvenuto tracce di queste pratiche in alcuni siti rituali celtici, come Gournay-sur-Aronde, dove accumuli di armi e ossa umane datano al III-I sec. a.C.",
      },
      {
        era: "La Jupiter Giant Column",
        name: "La colonna dei Giganti",
        text: "Uno dei più affascinanti monumenti religiosi celto-romani è la 'Jupiter Giant Column' (Jupitergigantensäule), attestata dalla Renania alla Gallia nord-orientale a partire dal II sec. d.C. Si tratta di alte colonne votive sormontate da una statua equestre di Giove che calpesta un gigante-serpente. La lettura standard: si tratta della sintesi tra Giove romano e Taranis celtico, con il combattimento tra il dio-cielo e un avversario ctonio — parallelo celtico del mito indoeuropeo del dio-tuono contro il drago (Indra/Vritra, Thor/Jörmungandr, Zeus/Tifone). Oltre 150 colonne sono state rinvenute, prova della popolarità del culto.",
      },
    ],
    cult: `Il culto di Taranis era diffuso in tutta l'area celtica continentale, ma i suoi centri archeologicamente più densi sono la Gallia Belgica (Renania, Belgio, Lussemburgo), il Norico alpino (Austria), e la Dalmazia. Le offerte votive nei depositi rituali — migliaia di ruote in miniatura in bronzo o piombo, spesso accompagnate da simboli del fulmine — mostrano che la "ruota di Taranis" era anche oggetto rituale personale, probabilmente amuleto apotropaico contro i fulmini reali e le disgrazie celesti.

Luoghi alti, vette, promontori erano a lui sacri. Il santuario di Ribemont-sur-Ancre (Somme, Francia), scavato dagli anni '60, è il più importante sito rituale gallico pre-romano del nord Europa: è stato riconosciuto come "santuario di Taranis" per la presenza di numerose offerte di ruote e per l'evidenza archeologica di sacrifici umani cremati su pire elevate.

L'assimilazione a Giove in epoca romana non ha cancellato il dio celtico: le ruote continuano ad essere rappresentate su altari "a Iovi" fino al IV sec. d.C.`,
    influence: [
      {
        era: "Dumézilliana — la prima funzione",
        text: "Georges Dumézil ha collocato Taranis nella 'prima funzione' della sua celebre tripartizione funzionale indoeuropea: sovranità magico-giuridica, insieme al Dagda irlandese e allo Jupiter romano. Il dio-cielo è garante dell'ordine cosmico e del giuramento. Questa lettura è oggi alla base di gran parte dell'analisi comparativa delle religioni indoeuropee.",
      },
      {
        era: "La sopravvivenza della 'ruota'",
        text: "Il simbolo della ruota a raggi, profondamente legato al culto di Taranis, ha lasciato traccia folklorica potente in tutta l'Europa celtica. I 'Sonnenrad' germanici, la croce celtica delle isole britanniche (ruota + croce cristiana), i mandala rituali di vari popoli — tutti riconoscibili come discendenza iconografica. Anche la ruota solare dell'alchimia rinascimentale vi attinge.",
      },
      {
        era: "Asterix e l'immaginario gallico moderno",
        text: "Nel mondo popolare contemporaneo Taranis è presente in forme mediate. Nei fumetti di Asterix (Goscinny e Uderzo) l'esclamazione 'Per Toutatis!' è frequente, ma il dio realmente evocato in ambienti celtici ricostruzionisti è proprio Taranis, il 'Giove gallico'. Nei neodruidismi contemporanei (ADF negli USA, OBOD in Gran Bretagna) Taranis è una delle divinità più invocate, per la sua chiara natura solare-celeste.",
      },
    ],
    texts: [
      {
        title: "Lucano, il passo sulla triade",
        source: "Pharsalia I, 444-446, ca. 65 d.C., traduzione dal latino",
        text: "Et quibus inmitis placatur sanguine diro / Teutates horrensque feris altaribus Hesus / et Taranis Scythicae non mitior ara Dianae. // 'E coloro che placano con sangue crudele lo spietato Teutates, / e l'orrido Esus con altari selvaggi, / e Taranis, al cui altare si compiono sacrifici non meno feroci / di quelli della Diana scitica.'",
      },
      {
        title: "Commenta Bernensia in Lucanum",
        source: "Scolî medievali a Lucano, IX-X sec., trad. dal latino",
        text: "Taranis Iuppiter, apud quos hominem ad ardendum mittebat vel ardebatur in alveo ligneo. // 'Taranis è Giove, presso di loro [i Galli] inviavano un uomo ad essere arso, o questi veniva arso dentro una bara di legno.' (Un'altra versione del commentario aggiunge: 'Taranis idem qui Iovis, sed honoratur hostiis humanis in alveo aut vimine', cioè 'Taranis, lo stesso che Giove, ma viene onorato con vittime umane dentro una bara di legno o di vimini.')",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. TEUTATES — il Dio della Tribù
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "teutates",
    name: "Teutates",
    role: "Dio della Tribù, della Guerra e della Protezione Collettiva",
    tags: ["Tribù", "Guerra", "Protezione", "Annegamento rituale"],
    epithet: "Il Dio del Popolo, il Padre della Tribù, Mercurius Teutates",
    type: "Divinità",
    chips: ["Gallia", "Britannia", "Mercurio-Marte", "Lucano"],
    heroColor: "linear-gradient(160deg,#0a0a1a,#1f1f3a,#050510)",
    bio: `Teutates — il cui nome deriva dal proto-celtico *teutā- ("tribù, popolo"), la stessa radice di toísech ("principe" in irlandese), tud ("popolo" in gallese) e teutā germanico (da cui "Deutsch", "Dutch") — è il "dio della tribù" per eccellenza nel pantheon gallico. Non è un dio individuale con sua biografia mitica (come Lugus o Cernunnos), ma una divinità funzionale: è la tribù stessa divinizzata, la personificazione sacra della collettività che difende i suoi membri e richiede loro lealtà. Ogni tribù celtica aveva "il suo" Teutates — un dio tutelare che era il "Padre del Popolo" (Toutiorix in alcune iscrizioni, Teutanus in altre), e che si manifestava in molteplici nomi locali mantenendo una funzione costante.

Teutates appare nel passo di Lucano (Pharsalia I, 444-446) come prima delle tre divinità con sacrifici cruenti. Gli scoli Commenta Bernensia specificano che le vittime a Teutates venivano uccise per annegamento: "Teutates Mercurius, apud quos homo in plenum immergebatur, ut ibi exspiraret" — "Teutates è Mercurio, presso di loro un uomo veniva immerso in un tino pieno finché non vi spirasse". L'annegamento rituale in un grande calderone di acqua è pratica sacrificale ben documentata archeologicamente: la celebre scena del calderone di Gundestrup (piastra interna) mostra una figura che viene calata a testa in giù dentro un grande contenitore, mentre altre figure attendono in fila — quasi certamente rappresentazione iconografica di questo sacrificio.

L'identificazione romana di Teutates è ambivalente. Lucano e i Commenta lo equiparano a Mercurio; Cesare (De Bello Gallico VI, 17) afferma che il dio più onorato tra i Galli è Mercurio, dio del commercio e dei viaggi. Altre iscrizioni identificano Teutates con Marte, dio della guerra. La doppia identificazione non è contraddittoria: Teutates è il dio della tribù nella sua interezza — sia nella sua dimensione guerriera (Marte, difesa collettiva) sia nella sua dimensione civile-commerciale (Mercurio, scambi intertribali). Il parallelo romano più accurato sarebbe forse Quirinus, dio tutelare del popolo romano — ma i romani del periodo imperiale non avevano più un culto vivo di Quirinus e scelsero gli dèi maggiori come corrispettivi.`,
    versions: [
      {
        era: "Iscrizioni votive e la diffusione",
        name: "Il Teutates paneuropeo",
        text: "Le iscrizioni dedicate a Teutates (nelle varianti Toutatis, Tutatus, Totatus) si trovano dalla Britannia (Cumbria, Hertfordshire, RIB 219) alla Pannonia (moderna Ungheria, CIL III). A volte il nome è composto con epiteti locali: 'Mars Toutatis' (Cumberland), 'Mercurius Toutenus' (Germania), 'Toutiorix' ('Re del Popolo', a Wiesbaden). La molteplicità di localizzazioni è coerente con la natura del dio: ogni tribù ha 'il suo' Teutates, che è il suo dio-popolo; ma tutti questi dèi locali condividono la stessa funzione e sono riconosciuti come variazioni dello stesso principio divino.",
      },
      {
        era: "Il calderone di Gundestrup",
        name: "L'immagine del sacrificio",
        text: "Il celebre calderone di Gundestrup (II-I sec. a.C., rinvenuto in Danimarca nel 1891, ma di fabbricazione tracia o celtica orientale), la piastra interna denominata 'E', mostra una scena che è quasi unanimemente riconosciuta come rappresentazione del sacrificio a Teutates. Una grande figura di dio in piedi tiene per i piedi un uomo e lo cala a testa in giù dentro un calderone; in fila a sinistra, sette guerrieri a piedi con scudi ovali avanzano accompagnati da un suonatore di carnyx (tromba celtica), e a destra quattro cavalieri. L'interpretazione standard (Paul-Marie Duval, Miranda Aldhouse-Green): è la scena del sacrificio rituale di Teutates, con la fila di guerrieri aspiranti che si avvicinano al 'tino sacro' per esservi immersi.",
      },
      {
        era: "Asterix e l'esclamazione popolare",
        name: "Il dio più noto del mondo moderno",
        text: "Per l'immaginario francese moderno Teutates è indissociabile dalla serie a fumetti 'Asterix' di Goscinny e Uderzo (dal 1959). L'esclamazione 'Par Toutatis!' è l'imprecazione più frequente del villaggio gallico — e, per risonanza con il francese popolare, è diventata la più conosciuta divinità celtica al mondo. I protagonisti giurano 'per Toutatis' decine di volte per volume; l'espressione è entrata nell'italiano informale come 'per Toutatis!' nel senso di 'per bacco!'. Il merito di aver mantenuto la memoria pubblica del dio gallico presso centinaia di milioni di lettori è interamente della saga Asterix.",
      },
    ],
    cult: `Il culto di Teutates era capillarmente diffuso in tutta l'area celtica, ma proprio per la sua natura "tribale" si frammentava in innumerevoli centri locali. Ogni oppidum (città fortificata gallica) aveva il suo Teutates, identificato con un epiteto locale. I grandi santuari pan-tribali — come Ribemont-sur-Ancre o Gournay-sur-Aronde — erano probabilmente luoghi di incontro intertribale dove diversi Teutates locali venivano onorati simultaneamente come espressioni del "dio del popolo celtico" nella sua totalità.

Archeologia: calderoni rituali di grandi dimensioni (oltre ai Gundestrup, ne sono noti numerosi esempi minori in Francia, Germania, Bulgaria) sono probabilmente strumenti del culto di Teutates. L'accumulo di armi spezzate in depositi votivi — pratica ben documentata a La Tène, Gournay, Ribemont — suggerisce pratiche rituali di offerta di preda bellica al dio-tribù dopo le vittorie militari.`,
    influence: [
      {
        era: "Dumézilliana — la seconda funzione",
        text: "Nella tripartizione funzionale dumézilliana, Teutates occupa anche la 'seconda funzione' (guerriera-protettiva): è il dio che difende la tribù. Ha quindi natura ambivalente: sovrana nel senso che incarna il popolo, ma guerriera nel senso che lo protegge. Questa ambivalenza è tipica delle divinità celtiche, meno 'pure' tassonomicamente delle divinità romane o greche.",
      },
      {
        era: "La concezione tribale della divinità",
        text: "Il concetto celtico di 'dio = tribù personificata' è potentemente tribale, e contrasta con la concezione romana di 'dio = principio cosmico astratto applicato a un popolo'. Per i Celti, la divinità è immanente al gruppo etnico; non esiste il 'popolo celtico' come concetto teologico, esistono gli Eburovices, i Parisii, gli Arverni, ciascuno con il suo dio-popolo. Questa concezione tribale della religione è caratteristica delle società segmentarie pre-statali studiate dall'antropologia classica.",
      },
      {
        era: "La continuità nel 'patriottismo celtico'",
        text: "Nel XIX e XX secolo, il recupero di Teutates come dio-popolo è stato strumentale al nazionalismo romantico: gallico (Henri Martin, Henri Hubert), irlandese (Celtic Revival), gallese (Iolo Morganwg). Teutates è diventato simbolo dell''anima del popolo' celtico, nucleo identitario pre-romano e pre-cristiano. Nel neopaganesimo celtico contemporaneo la figura è ancora centrale, anche se meno popolare di Cernunnos o Brigid per ragioni di genere.",
      },
    ],
    texts: [
      {
        title: "Commenta Bernensia — il sacrificio a Teutates",
        source: "Scolî medievali a Lucano, IX-X sec., trad. dal latino",
        text: "Teutates Mercurius, apud quos homo in plenum immergebatur, ut ibi exspiraret. // 'Teutates è Mercurio, presso di loro [i Galli] un uomo veniva immerso in un grande recipiente pieno d'acqua, affinché lì spirasse.' Un altro Scolium specifica: 'Teutates Mars lingua Gallorum' — 'Teutates è Marte nella lingua dei Galli', mostrando la doppia identificazione romana del dio.",
      },
      {
        title: "Cesare sui druidi e su Mercurio",
        source: "De Bello Gallico VI, 17, ca. 50 a.C., trad. dal latino",
        text: "Deum maxime Mercurium colunt. Huius sunt plurima simulacra, hunc omnium inventorem artium ferunt, hunc viarum atque itinerum ducem, hunc ad quaestus pecuniae mercaturasque habere vim maximam arbitrantur. // 'Venerano soprattutto Mercurio. Di questo dio hanno moltissime statue; lo considerano inventore di tutte le arti, guida di strade e viaggi, e ritengono abbia grandissimo potere sui profitti del denaro e sui commerci.' Gli studiosi concordano che questo 'Mercurio' di Cesare sia Teutates (o una delle sue varianti, tra cui Lugus); l'interpretatio romana privilegia Mercurio come dio versatile e tutelare, più vicino al dio-tribù che a Giove.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. ESUS — il Dio Taglialegna
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "esus",
    name: "Esus",
    role: "Dio dell'Albero Sacro e del Sacrificio per Impiccagione",
    tags: ["Albero", "Taglio", "Sacrificio", "Toro con tre gru"],
    epithet: "Il Signore del Tronco, l'Oscuro degli Altari Selvaggi",
    type: "Divinità",
    chips: ["Gallia", "Pilastro dei Nautes", "Lucano", "Trigaranos"],
    heroColor: "linear-gradient(160deg,#0a1408,#1f3512,#040a05)",
    bio: `Esus — il cui nome deriva probabilmente dal proto-celtico *esu- ("buono, vigoroso, signore"), radice che dà anche l'irlandese medio ús — è la più misteriosa delle tre divinità citate da Lucano nella sua celebre triade. Se Taranis è chiaramente il dio-tuono e Teutates il dio-tribù, Esus sfugge a facili classificazioni. Le fonti letterarie sono scarsissime: Lucano ne parla in un verso solo ("horrensque feris altaribus Hesus" — "e l'orrido Esus con altari selvaggi") e gli scoli Commenta Bernensia specificano che le vittime venivano "appese agli alberi finché non si dissanguavano" — un sacrificio per impiccagione/dissanguamento rituale che richiama il sacrificio di Odino-Yggdrasil e, parallelamente, alcune pratiche scite e frigie.

La fonte iconografica più preziosa è il celebre Pilastro dei Nautes, un altare votivo in pietra eretto dai battellieri parigini (nautae parisiaci) sotto Tiberio (ca. 14-37 d.C.) e oggi conservato al Musée de Cluny a Parigi. Il pilastro mostra, in quattro blocchi sovrapposti, scene di divinità gallo-romane. Sul terzo blocco compare Esus: un uomo barbuto, in tunica corta, con un'ascia o un falcione, nell'atto di tagliare i rami di un albero. Sul blocco adiacente compare Tarvos Trigaranos — "il Toro con le Tre Gru" — un enorme toro con tre gru appollaiate sulla schiena, sotto un albero molto simile a quello tagliato da Esus. Le due scene, collegate spazialmente, sono quasi certamente due momenti dello stesso mito: Esus taglia l'albero sacro, e il toro con le tre gru ne è l'epifania o la conseguenza. Purtroppo il mito originale è perduto, e gli archeologi e storici delle religioni continuano a dibatterne il significato.

Le interpretazioni correnti vedono in Esus un dio dell'albero sacro — parente dell'Yggdrasil norreno, dell'albero cosmico sciamanico, dell'albero delle origini paneuropeo. Il taglio dell'albero da parte del dio sarebbe un atto cosmogonico: Esus fende l'albero primordiale per creare il mondo, oppure per fornire il tronco dal quale si fabbricherà un oggetto sacro (forse il calderone rituale?). Il toro con le tre gru sarebbe una manifestazione del cosmo così creato. Miranda Aldhouse-Green ha proposto di leggere il complesso Esus-Tarvos-Trigaranos come una "teogonia in immagini" celtica, in cui il dio forgia il cosmo dall'albero sacro attraverso un taglio sacrificale.`,
    versions: [
      {
        era: "Il Pilastro dei Nautes (I sec. d.C.)",
        name: "La fonte iconografica principale",
        text: "Scoperto nel 1711 sotto il coro di Notre-Dame de Paris durante scavi per una cripta funeraria, il Pilastro dei Nautes è l'altare votivo più importante della religione gallo-romana. Consta di quattro blocchi sovrapposti, decorati su quattro lati, con scene di divinità. Sul lato di Esus: l'iscrizione 'ESVS' identifica chiaramente il dio; la figura è colta nell'atto di colpire con un'ascia un albero. Sul blocco adiacente: 'TARVOS TRIGARANVS' con la scena del toro e tre gru. Entrambi i blocchi datano al 14-17 d.C., sotto Tiberio. Oggi il pilastro è il pezzo centrale del Museo di Cluny (Musée national du Moyen Âge) a Parigi.",
      },
      {
        era: "Stele di Trier (II sec. d.C.)",
        name: "Una seconda attestazione",
        text: "Una seconda rappresentazione di Esus è stata identificata su una stele votiva da Trier (Augusta Treverorum, nell'odierna Germania renana), datata al II sec. d.C. La scena è simile: un uomo taglia un albero, e sull'albero si vede un toro. Insieme al Pilastro di Parigi, la stele di Trier conferma la diffusione del mito Esus-Tarvos-Trigaranos in area gallo-renana, e suggerisce che il culto non fosse limitato a Parigi ma comune alla Gallia Belgica e alla Germania celtica.",
      },
      {
        era: "Le interpretazioni moderne",
        name: "Cosmogonia, sciamanesimo, sacrificio",
        text: "Le interpretazioni dell'enigmatico mito di Esus sono diverse. Jan de Vries vi vedeva un mito cosmogonico: il dio taglia l'albero del mondo per creare l'universo. Paul-Marie Duval, più prudente, si limitava al dato iconografico senza ipotesi narrative. Miranda Aldhouse-Green propone un parallelismo con sacrifici all'albero (Nerthus germanica, Odino-Yggdrasil); l'impiccagione/dissanguamento descritti dai Commenta Bernensia sarebbero replica del sacrificio del dio stesso che sull'albero pende. Il motivo ha affinità con la figura indoeuropea del 'dio appeso' (Odino, Cristo, il Christ-Tree di alcune tradizioni gnostiche).",
      },
    ],
    cult: `Il culto di Esus è particolarmente attestato nella Gallia settentrionale, lungo la Senna e la Mosa, nell'area dei Parisii, dei Nervii, dei Treveri. Il Pilastro dei Nautes è il monumento più importante: eretto da una corporazione di battellieri (nautae parisiaci) nel cuore di quella che sarebbe diventata Parigi cristiana, mostra la vitalità del culto celtico ancora nel periodo imperiale romano.

I luoghi sacri di Esus erano probabilmente boschi, soprattutto boschi di querce o frassini. Plinio il Vecchio (Naturalis Historia XVI, 249) descrive i sacri recinti boschivi dei druidi gallici come particolarmente venerati — il bosco era più sacro di qualunque tempio costruito. È difficile separare il culto di Esus da questa generale "religione del bosco" gallica, ma gli altari Esus-centrici sembrano concentrarsi in siti boschivi o prossimi a grandi alberi singoli (la cosiddetta "bile" celtica — albero-tempio comune anche in Irlanda medievale).

Il sacrificio per impiccagione — se confermato come pratica reale e non solo come motivo iconografico — è la caratteristica rituale distintiva. Nessun calderone come per Teutates, nessuna pira come per Taranis: per Esus la vittima è appesa all'albero e lasciata dissanguare. L'eco dei sacrifici germanici a Odino (Uppsala, Nerthus) è strettissima.`,
    influence: [
      {
        era: "Il 'dio appeso' indoeuropeo",
        text: "Esus appartiene a una famiglia di divinità indoeuropee che si sacrificano (o vengono sacrificate) sull'albero: Odino sull'Yggdrasil (Hávamál, strofe 138-141), il crocefisso cristiano sul 'legno della croce' (già i Padri della Chiesa vi riconoscevano un archetipo universale), il Purusha vedico squartato sul legno sacrificale. Il mito celtico-gallico di Esus è il membro occidentale di questa costellazione, e la sua oscurità letteraria non ne riduce la profondità mitica.",
      },
      {
        era: "Il pilastro, icona parigina",
        text: "Il Pilastro dei Nautes non è solo un monumento archeologico ma un simbolo identitario parigino. Scoperto sotto Notre-Dame nel 1711, è stato interpretato come 'monumento fondatore' della città: prima di essere Parigi cristiana, Parigi era sacra a Esus e a Cernunnos. La riscoperta del pilastro ha influenzato storici e poeti del Celtic Revival francese (Henri Martin, Henri Hubert). Oggi il Musée de Cluny presenta il pilastro con didascalie che lo collocano esplicitamente come 'radice religiosa di Parigi'.",
      },
      {
        era: "Esus nell'immaginario contemporaneo",
        text: "Esus è meno popolare di altri dèi celtici nel mainstream (Cernunnos, Brigid) ma è figura di culto nei neo-druidismi più attenti alle specificità continentali e nella cultura metal celtica (Eluveitie, gruppi svizzeri-galli). Il motivo del taglio dell'albero, ambiguamente sacro/sacrilego, ha ispirato romanzi fantasy (Robert Holdstock, 'Mythago Wood') e arte contemporanea (la scultura 'Esus' di Xavier Mauméjean, 2004).",
      },
    ],
    texts: [
      {
        title: "Lucano, il verso su Esus",
        source: "Pharsalia I, 444-446, ca. 65 d.C.",
        text: "Et quibus inmitis placatur sanguine diro / Teutates horrensque feris altaribus Hesus. // 'E coloro che placano con sangue crudele lo spietato Teutates, / e l'orrido Esus con altari selvaggi.' (L'aggettivo 'horrens' può significare sia 'orribile' sia 'irto, rabbrividente', alludendo all'albero dalle cortecce ruvide; 'feris altaribus' = 'con altari selvatici/bestiali', probabilmente riferimento al carattere silvestre del culto.)",
      },
      {
        title: "Commenta Bernensia sul sacrificio a Esus",
        source: "Scolî a Lucano, IX-X sec., trad. dal latino",
        text: "Hesus Mars sic placatur: homo in arbore suspenditur usque donec per cruorem membra digesserit. // 'Esus è Marte, e si placa così: un uomo viene sospeso a un albero finché, attraverso il sangue, le membra non si siano dissolte.' Un'altra versione dei Commenta specifica: 'Hesus idem est qui Mercurius, suspensi ei in arboribus homines' — 'Esus è lo stesso che Mercurio; a lui si appendono uomini agli alberi'. La doppia identificazione Marte/Mercurio mostra l'ambivalenza del dio, guerriero e ctonio insieme.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. CERNUNNOS — il Dio Cornuto
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "cernunnos",
    name: "Cernunnos",
    role: "Dio Cornuto degli Animali, della Fertilità e del Mondo Intermedio",
    tags: ["Corna", "Animali", "Fertilità", "Seduto in posizione di loto"],
    epithet: "Il Cornuto, Signore degli Animali, il Dio con il Torque",
    type: "Divinità",
    chips: ["Gallia", "Gundestrup", "Pilastro dei Nautes", "Val Camonica"],
    heroColor: "linear-gradient(160deg,#0a1008,#2a3518,#050805)",
    bio: `Cernunnos — il cui nome deriva dal proto-celtico *karno- ("corno"), letteralmente "il Cornuto" — è forse la divinità celtica più iconica e immediatamente riconoscibile. Il suo ritratto è ripetuto su decine di reperti archeologici sparsi dalla Spagna alla Bulgaria: un uomo seduto in posizione cosiddetta "del Buddha" (gambe incrociate sotto di sé, una postura rarissima nel mondo europeo e indiscutibilmente "yogica"), con grandi corna di cervo sulla testa, circondato da animali selvatici (cervi, cinghiali, lupi, serpenti cornuti, talvolta un leone o un elefante), e con due attributi costanti: un torque (il collare sacro celtico) in una mano, un serpente cornuto nell'altra. Più raramente lo si vede in piedi, ma la posizione seduta è la sua postura iconica distintiva.

L'attestazione letteraria antica è tuttavia sottile. Il nome "Cernunnos" compare epigraficamente in una sola iscrizione — sullo stesso Pilastro dei Nautes di Parigi che reca anche Esus, sotto un blocco raffigurante un dio cornuto, con l'inscrizione [_]ERNUNNOS (la prima lettera è perduta, ma la ricostruzione filologica è pacifica). Nessun testo antico descrive il suo mito; nessun Cesare o Plinio lo menziona. Il Cernunnos che conosciamo è interamente archeologico, iconografico — un dio "muto" nelle fonti letterarie, ma loquacissimo nella pietra, nel bronzo, nell'argento.

La più celebre rappresentazione è sul calderone di Gundestrup, piastra interna 'A' (II-I sec. a.C.): la figura centrale è un uomo seduto a gambe incrociate con corna di cervo, che tiene un torque in alto con la mano destra e un serpente cornuto nella sinistra. Intorno a lui un cervo, un cane, un lupo, un cinghiale, un leone, una figura umana e un delfino in basso. La scena è carica di simbolismo cosmico: Cernunnos sta al centro di un cerchio di animali, come un imperatore degli esseri viventi. La posizione "di loto", così simile a quella dei Buddha indiani e degli yogi vedici, ha suscitato ipotesi di influenza iranica o indiana nella cultura celtica orientale (i Celti erano arrivati fino alla Galazia in Anatolia), ma la questione rimane aperta.`,
    versions: [
      {
        era: "Calderone di Gundestrup (II-I sec. a.C.)",
        name: "Il Cernunnos del bestiario cosmico",
        text: "La piastra 'A' interna del calderone di Gundestrup è la più celebre raffigurazione di Cernunnos e una delle più studiate opere di arte celtica. Il dio è al centro, enormemente stilizzato, circondato da animali in due livelli. I cervi alla sua sinistra hanno corna identiche alle sue — il dio è il capo di una mandria. Il calderone, di argento pesante lavorato a sbalzo, è di fattura tracia ma di iconografia chiaramente celtica; gli archeologi lo considerano un pezzo di propaganda religiosa itinerante, commissionato probabilmente da un capo celtico del Danubio e giunto in Danimarca come offerta rituale in una palude.",
      },
      {
        era: "Val Camonica (II-I sec. a.C.)",
        name: "Il Cernunnos alpino",
        text: "Nella Val Camonica (Alpi lombarde, Italia) sono state trovate rocce incise con rappresentazioni di Cernunnos risalenti al III-I sec. a.C.: la figura è schematica, con grandi corna e un torque in mano, circondata da serpenti e stambecchi. Sono tra le più antiche rappresentazioni del dio identificate, e attestano la diffusione del culto nell'area alpino-celtica (popolazioni dei Camuni). L'area è oggi parco archeologico UNESCO e meta di studio per la protostoria dell'arte celtica.",
      },
      {
        era: "Pilastro dei Nautes (I sec. d.C.)",
        name: "Il dio cornuto parigino",
        text: "Sul Pilastro dei Nautes (14-37 d.C., Parigi) compare un dio cornuto con l'iscrizione parziale [_]ERNUNNOS ricostruita unanimemente come Cernunnos. È l'unica attestazione epigrafica del nome del dio. La figura, danneggiata, mostra comunque le corna di cervo, un collare ai polsi. Il contesto è altamente significativo: il Pilastro è dedicato dai battellieri parigini (nautae parisiaci), corporazione gallo-romana, sotto Tiberio. Che Cernunnos sia ancora oggetto di dedicatio pubblica in pieno impero romano mostra la vitalità del culto.",
      },
      {
        era: "Rielaborazioni moderne: la Wicca",
        name: "Il Dio Cornuto di Gardner",
        text: "Nel XX secolo Cernunnos ha avuto un destino religioso-culturale straordinario. Gerald Gardner, fondatore della Wicca (anni 1950), ha posto il 'Dio Cornuto' come una delle due divinità principali del culto neopagano (l'altra la Triplice Dea). Il Dio Cornuto wicca è esplicitamente identificato con Cernunnos celtico e con il Pan greco. Attraverso la Wicca, Cernunnos è diventato una delle divinità più invocate del neopaganesimo globale — più popolare oggi di quanto fosse nell'antica Gallia.",
      },
    ],
    cult: `Il culto di Cernunnos era diffuso dalla Spagna (steli di Clunia) alla Renania, dall'Italia settentrionale (Val Camonica) alla Bulgaria (Gundestrup, di fabbricazione tracia ma iconograficamente celtica). Le attestazioni più dense sono nella Gallia settentrionale e nell'area alpina. È uno dei dèi più "ecumenici" del pantheon celtico continentale.

Il suo dominio: la selva, gli animali, la fertilità maschile. È un dio "silvestre" — il cui centro di culto è il bosco stesso, non una costruzione architettonica. Per questo gli archeologi hanno difficoltà a identificare "templi di Cernunnos": il suo tempio è il bosco. La posizione seduta "di loto" ha suggerito a molti studiosi (Anne Ross, Miranda Aldhouse-Green, Bernhard Maier) un aspetto sciamanico: Cernunnos è anche il "signore degli animali" nel senso sciamanico eurasiatico, il grande Signore della Caccia (Master of Animals) che apre e chiude le stagioni, dispensa la preda al cacciatore umano, ridona la vita agli animali uccisi.

Il torque che tiene in mano è simbolo del potere e della ricchezza aristocratica celtica: Cernunnos è dunque anche dio della prosperità, del bestiame, della moltiplicazione.`,
    influence: [
      {
        era: "Wicca e neopaganesimo — il Dio Cornuto globale",
        text: "Gardner ha rilanciato Cernunnos come figura principale del neopaganesimo globale dal 1954 (data di pubblicazione di 'Witchcraft Today'). Il 'Dio Cornuto' wicca è oggi venerato da centinaia di migliaia di praticanti in tutto il mondo, soprattutto negli USA, in Gran Bretagna, in Germania. La sua identificazione con Cernunnos è esplicita in tutta la letteratura wicca di base (Margaret Murray, Doreen Valiente, Starhawk).",
      },
      {
        era: "Lovecraft, Alan Moore e la cultura esoterica",
        text: "Cernunnos è figura ricorrente nell'immaginario esoterico del XX secolo. H.P. Lovecraft lo cita indirettamente; Alan Moore lo ha fatto co-protagonista del fumetto 'The League of Extraordinary Gentlemen' (in particolare nella saga di 'Black Dossier'). Nella cultura pop contemporanea è apparso in serie TV ('American Gods' di Neil Gaiman, 2017) e videogiochi ('The Witcher 3', la figura dell''Elder Race').",
      },
      {
        era: "Ambiguità del 'Horned God' e il diavolo cristiano",
        text: "La figura del Cernunnos cornuto è stata letta dagli antropologi (Margaret Murray, 'The Witch-Cult in Western Europe', 1921, tesi oggi rifiutata ma influente) come origine iconografica del Diavolo cristiano cornuto. La tesi murrayana — che la persecuzione delle streghe nel Rinascimento sia stata persecuzione di un sopravvissuto culto di Cernunnos/Pan — è storiograficamente superata, ma ha lasciato un'impronta culturale duratura. È certo comunque che i Padri della Chiesa usarono deliberatamente l'iconografia cornuta celtica per dipingere il Diavolo.",
      },
    ],
    texts: [
      {
        title: "L'iscrizione del Pilastro dei Nautes",
        source: "Parigi, 14-37 d.C., CIL XIII 3026, trad. dal latino",
        text: "[C]ERNVNNOS. // Il blocco superstite riporta, in grandi lettere, il nome del dio — unica attestazione epigrafica della forma 'Cernunnos'. La lettera iniziale è danneggiata, ma la ricostruzione è sicura grazie al contesto iconografico (il volto cornuto è riconoscibile anche nel frammento danneggiato). Il blocco è il più antico documento scritto del nome del dio.",
      },
      {
        title: "Cesare sui druidi e sulla religione dei Galli",
        source: "De Bello Gallico VI, 14, trad. dal latino",
        text: "Druides a bello abesse consuerunt neque tributa una cum reliquis pendunt; militiae vacationem omniumque rerum habent immunitatem. // 'I druidi sono soliti astenersi dalla guerra e non pagano tributi come gli altri; hanno l'esenzione dal servizio militare e l'immunità in ogni cosa.' Benché Cesare non nomini mai Cernunnos esplicitamente, la sua descrizione del sistema religioso gallico — boschi sacri, sacrifici animali, conoscenza della natura — è il contesto in cui il dio cornuto operava.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. LUGUS — il Dio delle Arti e delle Competenze
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "lugus",
    name: "Lugus",
    role: "Dio Luminoso delle Arti, delle Competenze, dei Viaggi",
    tags: ["Arte", "Competenza multipla", "Mercurio gallico", "Corvi"],
    epithet: "Il Luminoso, Padrone di Ogni Arte — il Mercurio dei Galli",
    type: "Divinità",
    chips: ["Gallia", "Lugdunum", "Lugnasad", "Iscrizioni trilingue"],
    heroColor: "linear-gradient(160deg,#1a1400,#3a2f10,#0a0800)",
    bio: `Lugus — la forma continentale di quello che in Irlanda si chiama Lugh e in Galles Lleu — è il dio celtico più diffuso in tutta l'area celtica, il cui culto è attestato dalla Spagna alla Britannia alla Pannonia. Il suo nome deriva dal proto-celtico *lugus, forse da una radice indoeuropea *leuk- ("luce, bianchezza"), collegata al latino lux. Alcuni filologi moderni propongono invece una derivazione da *lewg- ("giurare, vincolare"), che lo farebbe "dio del giuramento". Entrambe le ipotesi hanno sostegno: Lugus è dio luminoso ma anche dio del patto sacro.

In Gallia Lugus è identificato dai romani con Mercurio. Cesare, nel celebre passo del De Bello Gallico VI, 17, dichiara: "Venerano soprattutto Mercurio. Di questo dio hanno moltissime statue; lo considerano inventore di tutte le arti, guida di strade e viaggi, e ritengono abbia grandissimo potere sui profitti del denaro e sui commerci". Questo "Mercurio" di Cesare è quasi certamente Lugus (non Teutates, contrariamente a qualche lettura): l'attributo dell'"inventore di tutte le arti" corrisponde esattamente al Lugh irlandese detto Samildánach ("multi-talentuoso") che conosce tutti i mestieri. L'ipotesi è confermata dalla toponomastica: decine di città galliche antiche si chiamano Lugdunum ("fortezza di Lugus"), tra cui la futura Lione (capitale della Gallia romana) e Laon (Francia settentrionale).

Lugus era venerato nella forma singolare ma anche — caratteristica insolita — nella forma plurale: "Lugoves" ("I Lughi"), attestata in iscrizioni della Spagna celtibera (Osma, Peñalba de Villastar) e della Svizzera. L'ipotesi degli studiosi (Bernhard Maier, Miranda Aldhouse-Green) è che questa pluralità rifletta la natura multi-funzionale del dio, ciascun aspetto essendo un "Lugo" distinto: Lugus artigiano, Lugus guerriero, Lugus mercante. Nell'Irlanda medievale Lugh sarà ancora, archetipicamente, il "dio di ogni arte". Il suo giorno sacro è il Lugnasad (1° agosto), festa agraria del raccolto, celebrata in tutto il mondo celtico.`,
    versions: [
      {
        era: "Iscrizione di Peñalba de Villastar (I sec. a.C.)",
        name: "L'iscrizione celtibera",
        text: "L'iscrizione rupestre di Peñalba de Villastar (provincia di Teruel, Spagna), scolpita in lingua celtibera con alfabeto latino, recita (in traduzione): 'A Lugus [...] gli animali sono stati consacrati'. È una delle attestazioni più antiche (I sec. a.C.) del dio, e conferma la sua diffusione nell'area iberica celtiberica.",
      },
      {
        era: "Lugdunum / Lione",
        name: "La città eponima di Lugus",
        text: "Fondata da Lucio Munazio Planco nel 43 a.C. sulla collina di Fourvière, Lione — Lugdunum — era capitale della Gallia romana e il più importante centro urbano della Gallia. Il nome stesso ('fortezza di Lugus') mostra che il sito era sacro a Lugus già prima della fondazione romana: i celti Segusiavi vi avevano probabilmente un santuario. La festa annuale dei Lugnasad (1° agosto) coincise poi con l'Assemblea di Lugdunum, istituita da Augusto nel 12 a.C. come concilium trium Galliarum — parlamento federale delle tre Gallie romane. L'assemblea si teneva il 1° agosto, festa di Augusto, ma anche (e non a caso) di Lugnasad: la strutturazione politica romana si sovrappose alla festività religiosa celtica.",
      },
      {
        era: "I Lugoves — la forma plurale",
        name: "Il dio in tre persone",
        text: "La forma plurale 'Lugoves' è attestata in almeno quattro iscrizioni votive (Osma in Spagna, Avenches in Svizzera, altre). La pluralità ha attratto l'attenzione degli studiosi: alcuni (Duval) la spiegano come semplice formula rispettosa ('i Lughi' invece di 'Lugh' come in latino Lares, Penates); altri (Le Roux, Guyonvarc'h) vi vedono una vera e propria 'triplicità' divina — il dio in tre aspetti paralleli, anticipazione della triplicità tipica del neopaganesimo celtico contemporaneo.",
      },
      {
        era: "Lleu Llaw Gyffes in Galles",
        name: "La contropartita gallese",
        text: "Nella tradizione gallese medievale Lugus diventa Lleu Llaw Gyffes ('Lleu dalla Mano Abile'), uno dei protagonisti del Quarto Ramo del Mabinogion. Lleu è figlio della dea Arianrhod ed è sotto una serie di maledizioni pronunciate dalla madre: non avrà nome se non dato da lei, non prenderà armi se non concessi da lei, non sposerà donna umana. Gwydion (suo zio mago) gli aggira tutte le maledizioni con astuzia. Sarà ucciso dalla moglie-fiore Blodeuwedd e dal suo amante, ma resuscitato da Gwydion. Il Lleu gallese, più elaborato narrativamente del Lugus continentale, ha pari forza archetipica.",
      },
    ],
    cult: `Il culto di Lugus era probabilmente il più diffuso della Gallia, come Cesare conferma con il suo "Venerano soprattutto Mercurio". Le prove archeologiche sono coerenti: centinaia di statuette di "Mercurio gallico" (con attributi tipici: caduceo, borsa, a volte corna o coppia di serpenti), iscrizioni dedicatorie "DEO MERCVRIO" o più raramente "MERCVRIO LVGVBO" (in dativo plurale) o "DEO LVGVI".

Il santuario più monumentale identificato come di Lugus è quello di Puy-de-Dôme (Alvernia, Francia), vetta vulcanica che in epoca gallo-romana ospitava un grande tempio di "Mercurio" alto circa 60 metri. Gli scavi (XIX sec. e ripresi 2000-2010) hanno rivelato un complesso templare monumentale, con statuaria gigantesca di Mercurio — quasi certamente Lugus.

La festa del Lugnasad (1° agosto) era la grande festa agraria del raccolto. In Irlanda è attestata fino al XIX sec. come festa della raccolta del grano, con processioni, fiere commerciali, matrimoni "di prova" (il celebre "matrimonio di Teltown"). Il nome stesso della festa significa "assemblea di Lugh" — ricorda il Lugh irlandese come istitutore della festa in onore della madre adottiva Tailtiu, morta per aver disboscato l'Irlanda per l'agricoltura. Il motivo del "dio che istituisce la festa del raccolto in onore di una figura femminile morta per l'agricoltura" è antichissimo e paneuropeo.`,
    influence: [
      {
        era: 'Il "Mercurio gallico" romano',
        text: "L'interpretatio romana di Lugus come Mercurio ha avuto un successo culturale enorme: 'Mercurio' divenne dio pop del pantheon gallo-romano, moltiplicato in centinaia di statuette bronzee, pendenti, amuleti, votivi. Paradossalmente il culto romanizzato sopravvisse più a lungo del culto indigeno: le ultime dediche 'DEO MERCVRIO' nella Gallia renana sono del IV sec. d.C., quando già il cristianesimo stava vincendo.",
      },
      {
        era: "Toponomastica europea — Lione, Laon, Leiden, Lugo...",
        text: "Il nome di Lugus sopravvive in centinaia di toponimi europei: Lione (Lugdunum, Francia), Laon (Lugdunum, Francia settentrionale), Loudun, Leyden/Leiden (Lugdunum Batavorum, Paesi Bassi), Legnica (Polonia), Lugo (Galizia, Spagna), Lugo (Emilia-Romagna, Italia), Carlisle (Luguvalium, Gran Bretagna). La geografia europea è disseminata di 'fortezze di Lugus': più che qualunque altro dio celtico, Lugus è iscritto nella carta toponomastica del continente.",
      },
      {
        era: "Lugh / Lleu / Lugus — il dio pan-celtico",
        text: "Lugus è il solo dio celtico per cui si può affermare con certezza una corrispondenza funzionale-etimologica tra Irlanda (Lugh), Galles (Lleu) e Gallia (Lugus). È dunque la più antica e la più paneuropea delle divinità celtiche. Il neopaganesimo celtico contemporaneo lo riconosce come figura-ponte tra le sotto-tradizioni. La festa di Lughnasadh/Lammas (1° agosto) è celebrata nella Wicca e in altre tradizioni pagane moderne come una delle 'quattro feste del fuoco' del calendario celtico.",
      },
    ],
    texts: [
      {
        title: "Cesare sul Mercurio dei Galli",
        source: "De Bello Gallico VI, 17, trad. dal latino",
        text: "Deum maxime Mercurium colunt. Huius sunt plurima simulacra, hunc omnium inventorem artium ferunt, hunc viarum atque itinerum ducem, hunc ad quaestus pecuniae mercaturasque habere vim maximam arbitrantur. // 'Venerano soprattutto Mercurio. Di questo dio hanno moltissime statue, lo considerano inventore di tutte le arti, guida di strade e di viaggi, e ritengono abbia grande potere sui guadagni e sui commerci.'",
      },
      {
        title: "Iscrizione di Peñalba de Villastar",
        source:
          "I sec. a.C., celtibero in alfabeto latino, trad. F. Villar (1995)",
        text: "'Eniorosei equesoique / ogris olocas togias sistat luguei tiaso / togias' — traduzione approssimativa: 'A Enioroso e a Equeso, [al santuario dei] viaggiatori, ogni [viaggiatore] deposita i suoi mantelli; a Lugus per i [suoi] servi mette i mantelli.' L'iscrizione, di difficile lettura, attesta comunque con certezza il nome Luguei (dativo di Lugus) in contesto religioso celtibero. È una delle più importanti testimonianze della diffusione iberica del culto.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     6. EPONA — la Dea dei Cavalli
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "epona",
    name: "Epona",
    role: "Dea dei Cavalli, della Fertilità e della Sovranità",
    tags: ["Cavalli", "Fertilità", "Cavalleria romana", "Paneuropea"],
    epithet:
      "La Grande Cavalla, Signora delle Cavalcature, Protettrice dell'Impero",
    type: "Divinità",
    chips: ["Gallia", "Impero romano", "Roma", "Santa Patrona"],
    heroColor: "linear-gradient(160deg,#0a0814,#1f1a35,#05040a)",
    bio: `Epona — il cui nome deriva direttamente dal celtico epos ("cavallo") con il suffisso aumentativo-divinizzante -ona, letteralmente "la Grande Cavalla" — è la dea celtica del cavallo, la sua cavaliere divina e la sua protettrice. Distingue tra tutte le divinità celtiche per un primato storico unico: è l'unica divinità celtica a essere stata formalmente adottata nel pantheon ufficiale romano, con festa pubblica nel calendario imperiale (18 dicembre), dediche in tutto l'Impero, e santuari perfino a Roma. Nessun'altra divinità "barbara" ha goduto di questo statuto — non Cernunnos, non Taranis, né Isis egiziana (adottata non ufficialmente) né Mithra persiano (culto privato). Epona è il caso unico di un'integrazione pubblica celtica nel cuore della religione romana.

La ragione di questa straordinaria fortuna è facile da comprendere: il cavallo era il mezzo di trasporto, di guerra e di commercio fondamentale dell'Impero romano, e la cavalleria ausiliaria dei Galli — stimata universalmente tra le migliori d'Europa — fu incorporata in massa nell'esercito romano dall'epoca di Cesare in avanti. I cavalieri gallici portarono con sé la loro dea patrona, Epona, che divenne rapidamente la "santa patrona della cavalleria" di tutto l'Impero. Stalloni, mulattieri, corrieri imperiali, stallieri, cavalieri delle legioni la invocavano ovunque. Le dediche a Epona sono state trovate dalla Britannia alla Siria, dall'Africa al Danubio: sono oltre 300, una densità altissima.

Epona è rappresentata tipicamente in due modalità. La più frequente: la dea è seduta a cavalcioni su una cavalla che cammina verso destra (direzione di buon auspicio), con un cesto di frutti o una cornucopia sulle ginocchia, vestita di abito lungo, il capo spesso velato. La seconda iconografia, più rara: la dea è seduta su un trono in posizione frontale, con una cavalla accanto (talvolta a destra e a sinistra), e ancora con il cesto o la cornucopia in grembo. Questa seconda forma la avvicina iconograficamente alla "Magna Mater" orientale e alle raffigurazioni greche di Demetra. La compresenza del cavallo + cornucopia + trono la definisce come dea della fertilità equina, della prosperità agricola che dipende dai cavalli da lavoro, e della sovranità stessa (il cavallo come simbolo regale).`,
    versions: [
      {
        era: "Gallia Lugdunensis (I-II sec. d.C.)",
        name: "La patria di Epona",
        text: "Le più antiche rappresentazioni di Epona (forse risalenti al I sec. a.C., ma datate con certezza a partire dal I sec. d.C.) sono nella Gallia Lugdunensis e Belgica: steli da Alesia, statuette da Compiègne, Gergovia, Autun. Nella Gallia centrale Epona è presente quasi in ogni villa rustica come dea della stalla. Numerose dediche private dai 'cabalarii' (cavallari, stallieri) parlano di protezione degli animali da lavoro.",
      },
      {
        era: "Roma imperiale (II-III sec. d.C.)",
        name: "L'adozione ufficiale",
        text: "Sotto i Flavi e sotto gli Antonini (seconda metà del I sec. d.C.) Epona entra nel calendario ufficiale romano: il 18 dicembre è festa di Epona. Un calendario rustico imperiale (Fasti Feriarum) la elenca esplicitamente. Il passo è eccezionale: dea straniera che riceve festa pubblica romana. Il Poeta Giovenale la cita con sarcasmo (Satire VIII, 157) scherzando sul fatto che un romano imbarazzato dovesse 'giurare per Epona'. Apuleio, nell'Asino d'oro (III, 27), descrive una statua di Epona in una stalla italiana. A Roma stessa sono state trovate dediche a Epona all'interno dei castra praetoria.",
      },
      {
        era: "Provincie orientali dell'Impero (II-IV sec. d.C.)",
        name: "La diffusione con le legioni",
        text: "Le iscrizioni ad Epona si trovano in Siria (Dura-Europos), in Nordafrica (Lambaesis in Algeria), in Arabia (Bostra). La dea viaggiava con i reparti di cavalleria gallica e germanica stanziati nei vari limes. Una dedica da Dura-Europos (III sec. d.C.) mostra un'iscrizione in greco a 'Theos Eponos', adattamento all'orientale del nome celtico. È una delle più lunghe 'carriere' di una divinità celtica documentate.",
      },
      {
        era: "Epona e Macha / Rhiannon",
        name: "Le cugine insulari",
        text: "Nel mondo celtico insulare Epona ha cognate evidenti: in Irlanda Macha (dea dei cavalli che maledice gli uomini dell'Ulster per averla costretta a correre incinta), in Galles Rhiannon del Mabinogion (che appare in sella a un cavallo bianco che va più veloce di ogni inseguitore). Macha, Rhiannon ed Epona derivano probabilmente da una stessa divinità proto-celtica del cavallo, ciascuna evoluta nella sua area culturale. Questa triade femminile celtica è parallela strutturalmente alla triade Brigid/Brigantia/Brigantu.",
      },
    ],
    cult: `Epona è onnipresente nella Gallia tra I e IV sec. d.C. La Gallia Lugdunensis e Belgica mostrano densità eccezionale: praticamente ogni villa rustica gallo-romana ha una nicchia votiva nella stalla o nel porticato con immagine di Epona, talvolta accompagnata dai Dioscuri. La dea è anche venerata nei santuari di sorgenti termali (Aix-les-Bains, Saintes, Vichy): le acque curative sono anche "acque delle cavalle guarite". Molti reperti sono piccoli ex-voto equini in bronzo lasciati in tali santuari.

Il culto aveva anche una dimensione militare: ogni ala di cavalleria nell'esercito imperiale aveva un altare di Epona. Quando le unità venivano trasferite, l'altare viaggiava con loro. Le dediche dagli accampamenti legionari del limes (Britannia, Germania, Dacia) documentano questa "pastoralizzazione" militare della dea.

Il cavallo sacro — la "mare of Epona" — era mantenuto in alcuni santuari come animale-totem, libero di pascolare, nutrito a spese della comunità. Pausania e altre fonti greco-latine descrivono pratiche simili in altri santuari dell'antichità, ma quelle di Epona sono tra le meglio documentate.`,
    influence: [
      {
        era: "Dea-ponte celtica-romana",
        text: "Epona è il caso paradigmatico di come un dio celtico possa diventare dio imperiale senza perdere la propria identità. Non fu 'romanizzata' nel senso di assorbita in una divinità romana preesistente (come fu Lugus → Mercurio); mantenne il proprio nome celtico, il proprio attributo (il cavallo), i propri sacerdoti. Fu accolta come 'se stessa' nel pantheon romano. Questo unicum ha reso Epona un caso di studio obbligatorio in ogni trattato sulla religione romana delle province.",
      },
      {
        era: "Rhiannon, Macha, Godiva — le eredi folkloriche",
        text: "La figura della 'dama a cavallo' diventa archetipo fortissimo nel folklore post-celtico europeo. Rhiannon gallese, Macha irlandese, Lady Godiva dell'Inghilterra medievale (la leggendaria contessa di Coventry che cavalcò nuda in città per protesta contro le tasse del marito) sono tutte declinazioni della stessa figura. Il percorso diacronico è parzialmente ricostruibile: Epona → Rhiannon celtica cristianizzata → Godiva medievalizzata.",
      },
      {
        era: "Il cavallo come simbolo sovrano — Carlo Magno a Napoleone",
        text: "Il tema 'sovrano = cavaliere' domina l'iconografia regale europea dal medioevo all'Ottocento, ed è debitore (in varia misura) della concezione celtica del cavallo-sovranità trasmessa da Epona. Carlo Magno, Guglielmo il Conquistatore, Federico Barbarossa, Napoleone, i re Tudor — tutti rappresentati a cavallo come segno del loro potere. L'iconografia equestre della sovranità è 'celtico-romana' nel suo substrato profondo.",
      },
      {
        era: "Epona nel neopaganesimo e nell'ippica contemporanea",
        text: "Nel neopaganesimo celtico Epona è dea molto popolare tra praticanti interessati al cavallo (fantini, amazzoni, equitatori). Alcune stalle ippiche britanniche e americane hanno 'altari a Epona' nei box — continuità curiosa con la tradizione gallo-romana delle nicchie votive nelle stalle. È la più 'pratica' delle divinità celtiche contemporanee: le si invoca letteralmente per la salute dei cavalli.",
      },
    ],
    texts: [
      {
        title: "Dedica votiva di Autun",
        source:
          "CIL XIII 2633, Autun (Augustodunum), II sec. d.C., trad. dal latino",
        text: "Eponae sanctae / Catia Martialis / v.s.l.m. (votum solvit libens merito) // 'Alla santa Epona / Catia Martialis / sciolse volentieri il voto meritatamente.' La tipica formula dedicatoria romana viene applicata a una dea celtica con il vocabolario sacrale romano ('sancta', 'votum'): esempio perfetto di ibridazione culturale.",
      },
      {
        title: "Apuleio, L'Asino d'oro — Epona nella stalla",
        source: "Metamorphoses III, 27, ca. 160 d.C., trad. dal latino",
        text: "Attigui in conspectu stabuli vidi sub arae columbarii fastigio locatum Eponae nuncupatum simulacrum, quod sedulo corollis roseis equidem recentibus fuerat ornatum. // 'Appena entrato nella stalla, vidi un'immagine di Epona collocata sotto il tetto di un colombario-tempietto, decorata accuratamente con ghirlande di rose fresche.' Lucio — trasformato in asino — nota la statua della dea e la osserva con interesse. La scena testimonia la presenza ubiqua di nicchie votive di Epona nelle stalle romane.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     7. BELENUS — il Dio Solare
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "belenus",
    name: "Belenus",
    role: "Dio Solare, della Luce e della Guarigione",
    tags: ["Sole", "Luce", "Terme", "Apollo celtico"],
    epithet: "Il Luminoso, il Brillante — l'Apollo dei Galli",
    type: "Divinità",
    chips: ["Norico", "Gallia cisalpina", "Aquileia", "Terme"],
    heroColor: "linear-gradient(160deg,#140a00,#3a2008,#0a0500)",
    bio: `Belenus — il cui nome deriva dal proto-celtico *belenos ("splendente, luminoso", stessa radice di gaelico bán "bianco", gallese bal "brillante") — è il dio solare celtico per eccellenza, il "Brillante" del cielo estivo. È largamente identificato dai romani con Apollo: le dediche "Apollo Belenus" sono la forma più frequente di attestazione. Il suo culto è particolarmente fiorente nel Norico (area alpina orientale, corrispondente all'attuale Austria e Slovenia), nell'Italia settentrionale celtica (Aquileia, Val d'Aosta), e nella Gallia Narbonensis meridionale.

Le fonti letterarie antiche sono poche ma illuminanti. Ausonio (IV sec. d.C.), poeta gallo-romano di Bordeaux, nel suo 'Professores' menziona un tempio di Belenus ad Aquileia e lo associa esplicitamente ad Apollo. Tertulliano lo cita come divinità pagana vivente nel Norico nel II-III sec. d.C. La Historia Augusta, vita di Massimino il Trace, narra che nel 238 d.C., durante l'assedio di Aquileia, Belenus apparve in visione ai difensori della città promettendo la vittoria — e la città resistette effettivamente. Questo particolare episodio mostra che il culto di Belenus era ancora attivo e visibile nella seconda metà del III sec. d.C., quando il cristianesimo stava rapidamente avanzando nell'impero.

Belenus è associato alle terme. In particolare, le grandi sorgenti calde dell'area alpina orientale (Virunum, Aquae Iasae) erano a lui sacre, mentre il santuario maggiore è quello di Aquileia. Il sincretismo con Apollo non è casuale: anche Apollo era in origine dio solare e dio guaritore; Apollo Musagete a Delfi era dio delle sorgenti oracolari. L'identificazione Apollo-Belenus privilegia il Apollo guaritore (Apollo Medicus) più dell'Apollo musagete. Nelle terme celtiche di area alpina Belenus era dio della guarigione attraverso le acque — dio solare che rimette in salute i corpi come risolleva il giorno.`,
    versions: [
      {
        era: "Aquileia (I-III sec. d.C.)",
        name: "Il Belenus di Aquileia",
        text: "Il più importante santuario di Belenus è quello di Aquileia, nell'Italia nord-orientale. La città-porto, crocevia commerciale tra l'impero e il Norico, era dedicata a Belenus fin dall'epoca celtica pre-romana. Sotto l'impero il santuario crebbe in importanza: era considerato 'oracolare' — si andava a Aquileia per consultare responsi di Belenus. Nel 238 d.C., durante l'assedio di Massimino il Trace, la visione di Belenus che promise la vittoria rafforzò il senso di identità cittadina. Il cristianesimo prevalse poi lentamente: il vescovado di Aquileia fu fondato nel III sec., ma il culto di Belenus è ancora attestato nel V sec.",
      },
      {
        era: "Norico e il culto alpino",
        name: "Il Belenus del Danubio",
        text: "Nel Norico romano (odierna Austria) Belenus era dio nazionale. Sotto il monte Magdalensberg (Carinzia), antico santuario celtico e poi città romana (Virunum), è attestata una dedica a 'Apollo Belenus'. Il culto aveva sfondo astronomico: il Magdalensberg era osservatorio solare e punto astronomico di riferimento nell'area. I Norici ritenevano Belenus loro dio patrono, come i Galli avevano Lugus e i Germani Wodan.",
      },
      {
        era: "Belenus e il Beltane irlandese",
        name: "Il collegamento con la festa del fuoco di maggio",
        text: "Il nome Belenus ha evidenti affinità etimologiche con il Beltane (in irlandese antico Beltaine), la festa celtica del 1° maggio che celebra l'inizio dell'estate con falò rituali. L'etimologia del Beltaine è discussa ma una delle derivazioni correnti è *beltaine = 'fuoco brillante' (dalla stessa radice *bel-), possibilmente 'fuoco di Belenus'. Il Beltane, sopravvissuto nel folklore irlandese e scozzese fino al XIX-XX sec. nella forma di falò rituali comunitari, sarebbe così traccia folklorica del culto di Belenus. L'ipotesi è seducente ma filologicamente non del tutto certa.",
      },
    ],
    cult: `I centri di culto di Belenus sono concentrati nelle regioni alpine e subalpine. Aquileia è il principale; seguono Sainte-Sabine, Burgundia (Francia orientale), varie località della Gallia Narbonensis. In area alpina il culto era legato ai valichi: passaggi montani erano sotto la protezione del dio luminoso, perché dove il sole batte il ghiaccio si scioglie e le vie diventano transitabili.

Le sorgenti calde (fonti termali) erano a lui sacre. Non per sincretismo tardivo con la dea Sulis a Bath (identificata con Minerva più che con Apollo), ma per coerenza intrinseca: le acque calde sono acque solari, acque in cui il sole "abita". Bagnarsi in queste acque significava ricevere il calore di Belenus nel corpo. Molte terme gallo-romane conservano dediche a Belenus o ad "Apollo Belenus".

L'archeologia di Aquileia ha restituito centinaia di ex-voto in bronzo al dio: piccole figurine di cavalli (collegamento Belenus-sole-Apollo delle quadrighe celesti), ruote solari, falangi di sole raggiato. Alcune dediche per guarigioni avvenute mostrano che Belenus, come Apollo Medicus, era anche dio dei miracoli terapeutici.`,
    influence: [
      {
        era: "Apollo Belenus e il dio-sole romanizzato",
        text: "L'identificazione Apollo-Belenus ha trasformato il dio in una figura centrale del pantheon gallo-romano tardivo. Sotto Antonino Pio, sotto Caracalla, sotto Giuliano l'Apostata, 'Apollo Belenus' era dio favorito. Giuliano, nel suo inno a Helios (Oratio IV), cita implicitamente questa divinità solare con nomi non-ufficiali-romani, mostrando che il 'sole filosofico' del tardo paganesimo era nutrito anche di fonti celtiche.",
      },
      {
        era: "Beltane e la sopravvivenza folklorica",
        text: "Se l'ipotesi che collega Belenus al Beltane è corretta, il dio ha avuto una delle più lunghe vite post-cristiane della mitologia europea. I falò di maggio celebrati in Irlanda e Scozia ancora nel XX secolo (tra cui il celebre 'Beltane Fire Festival' di Edimburgo, rivitalizzato dal 1988) sarebbero attualizzazioni inconsapevoli del culto solare di Belenus. Il movimento neopagano celtico ha espressamente reclamato questa continuità.",
      },
      {
        era: "Il mito dell'assedio di Aquileia",
        text: "L'episodio dell'apparizione di Belenus durante l'assedio di Massimino nel 238 d.C. ha avuto un'eco lunga. Viene ripreso da storici bizantini, da cronisti medievali (che vi vedevano qualche volta il Cristo, altre volte un diavolo pagano), da poeti rinascimentali. Gianfrancesco Poggio Bracciolini lo cita nei suoi 'De vita morte'. Nel XIX sec. diventa motivo di orgoglio identitario locale ad Aquileia.",
      },
    ],
    texts: [
      {
        title: "Historia Augusta, Vita di Massimino",
        source: "Iulius Capitolinus, Maximinus Duo, cap. 22, IV sec. d.C.",
        text: "Nam et auspicium grande Aquileiensibus fuit, quod Belenum constanter affirmabant visum eos esse defendere. // 'Infatti un grande auspicio fu per gli Aquileiesi il fatto che affermassero costantemente che Belenus era stato visto a difenderli.' Il testo continua specificando che anche il nemico Massimino riconosceva il presagio: 'Massimino stesso disse che Apollo era contro di lui e lo abbandonava.'",
      },
      {
        title: "Ausonio, Professores — Belenus e il retore Phoebitius",
        source:
          "Decimus Magnus Ausonius, Commemoratio Professorum Burdigalensium IV, IV sec. d.C.",
        text: "Tu Baiocassi stirpe Druidarum satus, / si fama non fallit fidem, / Beleni sacratum ducis e templo genus. // 'Tu, Phoebitius, sei della stirpe dei druidi dei Baiocassi, / se la fama non inganna la fede, / traendo la tua nobile discendenza dal tempio di Belenus.' Ausonio menziona con rispetto la discendenza druidica del collega retore Phoebitius di Bordeaux — uno dei pochi esempi di riferimento 'positivo' ai druidi nella letteratura tardoantica.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     8. SUCELLUS — il Dio del Martello
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "sucellus",
    name: "Sucellus",
    role: "Dio del Martello, della Morte Buona, del Bere Rituale",
    tags: ["Martello", "Barile", "Ctonio", "Abbondanza"],
    epithet: "Il Buon Percussore, Signore del Martello e del Barile",
    type: "Divinità",
    chips: ["Gallia", "Germania celtica", "Lione", "Nantosuelta"],
    heroColor: "linear-gradient(160deg,#0a0a0a,#2a2a25,#050505)",
    bio: `Sucellus — il cui nome significa letteralmente "il Buon Percussore" (da su- "buono" + cellos "colpitore, battitore") — è un dio tipicamente gallico continentale con attributi molto specifici e immediatamente riconoscibili: un enorme martello (o mazza) a lungo manico nella mano destra, e nella sinistra un piccolo barile o vaso (olla), a volte un corno potorio. È rappresentato come un uomo barbuto, maturo, spesso in tunica corta da lavoratore — più simile a un artigiano che a un sovrano. Spesso è accompagnato dalla sua compagna divina Nantosuelta ("il Fiume Sinuoso" o "la Valle Assolata"), una dea dell'abbondanza domestica che tiene un piccolo modello di casa come simbolo.

Sucellus è documentato da oltre 200 iscrizioni e altrettante rappresentazioni iconografiche, prevalentemente nella Gallia orientale (Borgogna, Franca Contea), nella Germania renana e nel Norico. L'interpretazione romana è incerta: talvolta è identificato con Silvanus (dio dei boschi romano, anch'egli lavoratore), talvolta con Dispater (dio degli Inferi ctonio, il Plutone romano). Cesare (De Bello Gallico VI, 18) menziona che i Galli ritengono di discendere da Dispater — dio della morte, notte originaria da cui tutto nasce — e alcuni studiosi hanno identificato questo Dispater dei Galli con Sucellus. L'ipotesi è coerente con l'iconografia: il martello è arma di morte (il "colpo di grazia"), e il barile contiene il vino della morte-festa.

Gli attributi principali di Sucellus suggeriscono funzioni multiple. Il martello: percossa, costruzione, protezione, ma anche colpo di morte (il martello per uccidere il bestiame al macello). Il barile o coppa: abbondanza, convivialità, ebbrezza sacra. La combinazione "martello + barile" indica un dio della vita conviviale ma anche della buona morte — colui che dà la vita e la toglie, come il macellaio che uccide il maiale e poi organizza la festa del suo consumo. Sucellus è il dio della soglia tra la vita ordinaria e la festa, tra la vita e la morte, tra il lavoro e l'ebbrezza.`,
    versions: [
      {
        era: "Iscrizioni votive (I-III sec. d.C.)",
        name: "Il dio privato",
        text: "Le dediche a Sucellus sono prevalentemente private, da individui e famiglie: contadini, bottai, macellai, commercianti di vino, ma anche soldati. Tipicamente: 'Sucello votum solvit libens merito' — 'Sciolsero volentieri il voto a Sucellus'. Una dedica particolarmente interessante (da Augusta Vindelicorum / Augsburg) associa il dio ai 'negotiatores vinarii' (mercanti di vino): il barile di Sucellus era simbolo del loro mestiere.",
      },
      {
        era: "Sucellus e Nantosuelta",
        name: "La coppia divina",
        text: "Numerose rappresentazioni mostrano Sucellus insieme alla dea Nantosuelta. Quando sono insieme la composizione è quasi sempre identica: lui a sinistra col martello e il barile, lei a destra con una piccola casa a modello e un corvo (animale ctonio). La coppia rappresenta il completo ciclo domestico-rurale: Sucellus la forza del lavoro e della morte buona, Nantosuelta la prosperità della casa e del territorio. Paralleli: Odino-Frigg norrena, Hades-Persefone greca, Dagda-Dánu irlandese.",
      },
      {
        era: "L'interpretazione ctonia e dionisiaca",
        name: "Il dio-soglia",
        text: "Il martello-barile può essere letto come coppia vita/morte, gioia conviviale/colpo di grazia. Miranda Aldhouse-Green ha proposto di leggere Sucellus come 'dio della soglia' — colui che porta dal banchetto alla morte e dalla morte al banchetto dei defunti. Il barile potrebbe essere non solo 'di vino' ma 'di ceneri' o 'di cremazione'. L'ipotesi rimane suggestiva. Le connessioni con il Dionisismo mediterraneo (Plutarco vide un 'Dionisio celtico' tra i Galli) rafforzano l'ipotesi del dio del vino-morte-rigenerazione.",
      },
    ],
    cult: `Sucellus è venerato in ambiti privati più che pubblici. Le sue statue e dediche si trovano in case, botteghe, piccole cappelle familiari. Il tipico mago di Sucellus era il padre di famiglia, il mastro artigiano, il piccolo commerciante di prodotti agricoli. Non era dio di stato né di corporazione religiosa, era dio quotidiano.

Aree di maggiore concentrazione: la Borgogna, la valle del Rodano, la Franca Contea, la Renania, la Baviera romana. In Italia è scarsamente attestato (alcune dediche dalla Cisalpina), come in Britannia. È un dio prevalentemente gallico-renano.

Il centro di culto archeologicamente più significativo è quello di Lione (Lugdunum), dove una statua monumentale di Sucellus è stata rinvenuta negli scavi del Forum. La coincidenza geografica con il culto maggiore di Lugus è notevole e suggerisce una divisione funzionale: Lugus dio delle arti urbane e del commercio lontano, Sucellus dio del lavoro manuale e del commercio di prossimità.

In alcuni santuari di acque termali sono stati trovati piccoli martelli votivi di piombo o bronzo — offerte a Sucellus per la guarigione (il martello che "rompe" la malattia). Questa è una funzione terapeutica secondaria del dio.`,
    influence: [
      {
        era: "Sucellus e il dio-fabbro paneuropeo",
        text: "Sucellus appartiene alla famiglia indoeuropea dei 'dèi-fabbro' o 'dèi-artigiani': Efesto greco, Vulcano romano, Wayland/Vǫlundr germanico, Goibniu irlandese. Tutti questi dèi condividono la natura 'del lavoro manuale divinizzato': non sovrani, non guerrieri, ma fabbri o costruttori, con il martello come attributo. Sucellus è il rappresentante continentale celtico di questa famiglia, con la specificità del barile che lo distingue.",
      },
      {
        era: "Thor e il martello cristianizzato",
        text: "Il parallelo più stringente è però con Thor norreno e il suo Mjöllnir. Il martello come arma divina, il ruolo di protettore del popolo, l'associazione con la fertilità (Thor era garante della produttività agricola): tutti tratti condivisi. Nel sincretismo post-celtico il 'martello della salute' è sopravvissuto in folklore renano e borgognone fino al XIX secolo — amuleti a martello in miniatura, forse continuazione popolare del culto di Sucellus.",
      },
      {
        era: "Il patrimonio del vino",
        text: "Il barile di Sucellus è forse il più antico riferimento religioso al vino nel mondo celtico-gallico. I celti erano grandi consumatori di vino già prima della romanizzazione (tutti i loro contatti commerciali con Marsiglia e poi con Roma passavano dal vino): che il loro dio domestico tenesse un barile mostra la profondità del rapporto culturale. La Borgogna — terra di grande vinicoltura — è anche la terra di maggiore concentrazione di Sucellus: una coincidenza non casuale.",
      },
    ],
    texts: [
      {
        title: "Cesare sui Galli e Dispater",
        source: "De Bello Gallico VI, 18, trad. dal latino",
        text: "Galli se omnes ab Dite patre prognatos praedicant idque ab druidibus proditum dicunt. // 'Tutti i Galli proclamano di essere nati da Dispater, e dicono che questa cosa è stata tramandata dai druidi.' Molti studiosi (Anne Ross, Jean-Louis Brunaux) identificano questo 'Dispater dei Galli' con Sucellus: il dio ctonio padre della razza gallica, armato di martello come 'colpo di origine'. L'identificazione non è certa ma è la più accettata.",
      },
      {
        title: "Dedica a Sucellus da Vienne (Gallia)",
        source: "CIL XII 1836, II sec. d.C.",
        text: "Sucello / C(aius) Sat(urninus) L(uciani) f(ilius) / Carantus / s(olvit) v(otum) l(aetus) m(erito). // 'A Sucellus / Caio Saturnino Caranto, figlio di Luciano, / sciolse il voto con gioia meritatamente.' La formula include il cognome celtico 'Carantus' ('amico'), testimoniando l'indigenia del dedicante nonostante la cittadinanza romana.",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   EROI / FIGURE STORICO-MITICHE
   Array vuoto nel Lotto 3A. Il Lotto 3B vi inserirà:
   - Vercingetorige
   - I Druidi (come collettivo)
   ══════════════════════════════════════════════════════════════════════ */

const GALLIC_HEROES = [
  /* ════════════════════════════════════════════════════════════════════
     1. VERCINGETORIGE — il Re degli Arverni
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "vercingetorige",
    name: "Vercingetorige",
    role: "Il Re dei Guerrieri, Unificatore della Gallia",
    tags: ["Arverni", "Resistenza", "Alesia", "Sacrificio"],
    epithet: "Vercingetorix — 'Il Grande Re dei Guerrieri'",
    type: "Eroe",
    chips: ["Gergovia", "Arverni", "52 a.C.", "Roma"],
    heroColor: "linear-gradient(160deg,#1a0500,#3a0f05,#0a0200)",
    shortDesc:
      "Il giovane re degli Arverni (82-46 a.C. ca.) che riuscì per la prima e unica volta a unire le tribù galliche in una lega difensiva contro Roma. Vinse a Gergovia, fu assediato ad Alesia (52 a.C.), si arrese a Cesare gettando le proprie armi ai suoi piedi, fu portato a Roma come prigioniero, esposto al trionfo del 46 a.C. e strangolato nel Tullianum. La sua figura ha attraversato i secoli assumendo dimensione mitica: eroe nazionale francese dal XIX sec., simbolo della resistenza e dell'unità celtica.",
    bio: {
      main: `Vercingetorige — il cui nome celtico *Ver-cinget-o-rix significa letteralmente "Gran Re Super-Guerriero" (ver- "super, grande" + cinget- "guerriero" + rix "re") — non era nome proprio ma titolo, assunto da un giovane capo arverno di nome originale probabilmente diverso quando, nel 52 a.C., fu acclamato dai suoi come condottiero militare supremo. La sua vita è ricostruita quasi esclusivamente attraverso il racconto di Giulio Cesare nel De Bello Gallico (libro VII), una fonte ostile, di parte, scritta da chi lo sconfisse — ma anche l'unica fonte antica dettagliata sui fatti. Cesare ha paradossalmente immortalato il suo avversario donandogli una dimensione letteraria senza paragoni tra i capi barbari dell'antichità.

Vercingetorige era figlio di Celtillo, capo supremo degli Arverni (potente tribù della Gallia centrale, corrispondente all'odierna Alvernia) che aveva tentato di assumere la sovranità su tutta la Gallia nel 80-70 a.C. e era stato per questo ucciso dai propri concittadini, che temevano la concentrazione di potere. Il figlio cresce dunque segnato dal lutto familiare e dalla memoria di un'ambizione di unità celtica — ambizione che riprenderà in forma difensiva quando Cesare, dopo sette anni di conquiste nella Gallia (58-52 a.C.), sembra aver definitivamente piegato il paese. Nell'inverno 53-52 a.C., sotto la pressione della strage di Cenabum (odierna Orléans), dove i Galli avevano massacrato i mercanti romani, la rivolta scoppia. Vercingetorige è acclamato re supremo a Gergovia e lancia l'appello a tutte le tribù galliche.`,
      sub1: "La strategia della terra bruciata e Gergovia",
      text1: `Il progetto strategico di Vercingetorige è brillante: invece di affrontare Cesare in campo aperto (dove la superiorità tattica romana era schiacciante), adotta la strategia della terra bruciata. Ordina di bruciare ventisette città galliche tra cui Avaricum (Bourges) per negare all'esercito romano qualunque rifornimento. Cesare è costretto a muovere da un lato all'altro della Gallia senza poter consolidare posizioni; i Galli si muovono in formazioni leggere, attaccano e si ritirano. È un modello di guerra asimmetrica sorprendentemente moderno, applicato più di duemila anni prima della teoria formale.

Nella primavera del 52 a.C. Cesare punta su Gergovia, la capitale arverna, per spezzare il cuore della ribellione. L'oppidum è su una collina alta e ben difesa. Cesare assedia la città, costruisce un doppio vallo, tenta diversi assalti. La battaglia di Gergovia (giugno 52 a.C.) è l'unica grande sconfitta di Cesare in tutta la campagna gallica. L'assalto romano, lanciato in condizioni di inferiorità tattica, viene respinto con pesantissime perdite — almeno 700 caduti + 46 centurioni secondo Cesare stesso, probabilmente minimizzando. Cesare è costretto a togliere l'assedio. È la sua più pesante battuta d'arresto militare, e Vercingetorige ne trae immenso prestigio: molte tribù che erano rimaste neutrali o filoromane (inclusi gli Edui, storici alleati di Roma) si uniscono alla coalizione gallica.`,
      sub2: "Alesia — la trappola e la resa",
      text2: `Nell'estate del 52 a.C. Vercingetorige con il grosso delle sue forze si ritira ad Alesia (oggi Alise-Sainte-Reine, Borgogna), oppidum in posizione difensiva eccellente ma anche trappola: una volta bloccate le vie di comunicazione, non può essere rifornito. Cesare lo comprende subito. Invece di assaltare, decide di assediare a oltranza — e qui inizia una delle più straordinarie operazioni di genio militare dell'antichità, descritta in dettaglio nella scheda del mito di Alesia.

Durante l'assedio Vercingetorige prende una decisione straziante: per risparmiare cibo, fa uscire dall'oppidum le "bocche inutili" — donne, bambini, anziani. Cesare rifiuta di farli passare oltre le linee romane. I civili agonizzano per settimane nella terra di nessuno; molti muoiono di fame sotto gli occhi dei loro. È uno dei passi più drammatici del De Bello Gallico.

Dopo la sconfitta dell'esercito gallico di soccorso (guidato da Commios e Vercassivelauno), Vercingetorige convoca il consiglio dei capi galli. Il suo discorso è riportato da Cesare con rara magnanimità: "Non per gloria personale ma per la libertà comune ho intrapreso questa guerra. Poiché dobbiamo cedere al destino, sottopongo la mia persona a voi: potete con mia morte placare i Romani, o consegnarmi vivo alle loro mani." I capi votano per la resa. Il giorno dopo Vercingetorige esce dall'oppidum a cavallo, in armi, con ornamenti di parata; cavalca intorno al tribunale di Cesare (la "ronda rituale", probabile gesto religioso celtico); smonta, getta le armi ai piedi del vincitore, siede a terra in silenzio fino a che i centurioni lo portano via.`,
      sub3: "La prigionia, il trionfo, la morte",
      text3: `Sarà tenuto in prigionia a Roma per sei anni (52-46 a.C.). Durante questo lungo periodo Cesare ha altro da fare: attraversa il Rubicone (49 a.C.), scatena la guerra civile, sconfigge Pompeo a Farsalo (48 a.C.), combatte in Egitto (dove incontra Cleopatra), in Nord Africa, in Spagna. Solo dopo aver definitivamente sistemato tutti gli altri fronti, nel settembre 46 a.C., Cesare celebra a Roma i suoi cinque trionfi — uno per ciascuna delle sue vittorie. Il terzo trionfo, dedicato alla vittoria in Gallia, è quello in cui viene esposto Vercingetorige.

Il trionfo è uno degli spettacoli più sfarzosi mai visti a Roma: quattro giorni di processioni, bestie esotiche, quadri dei luoghi conquistati, sacrifici, giochi. In coda al corteo, incatenato, marcia il prigioniero gallico. Secondo la consuetudine romana i prigionieri di rango regale esposti al trionfo venivano poi strangolati nel Tullianum (la prigione sotterranea sul Campidoglio). Cesare non fece eccezione per Vercingetorige. Il 26 settembre 46 a.C. il capo gallico fu portato nelle celle del Tullianum e ivi ucciso per strangolamento ritualizzato. Aveva probabilmente 36 anni.

La morte fu sobria, senza tortura né mutilazione. Cesare non infierì — forse per rispetto personale, forse per calcolo politico (non umiliare i galli sottomessi oltre il necessario). Il corpo fu probabilmente gettato nel Tevere, come si faceva con i cadaveri dei giustiziati; non vi furono onoranze funebri. Vercingetorige scomparve fisicamente, ma la sua figura sarebbe rinata nella storia, nel mito, e nell'identità europea molti secoli dopo.`,
      sub4: "La rinascita ottocentesca — l'eroe nazionale francese",
      text4: `Per oltre 1.800 anni Vercingetorige fu figura dimenticata. I francesi medievali non lo rivendicavano — erano discendenti orgogliosi dei Franchi merovingi, non dei celti conquistati. Il revival di Vercingetorige è un fenomeno strettamente ottocentesco, strettamente politico. Avviene sotto Napoleone III (1850s-1860s). L'imperatore commissiona grandi scavi ad Alesia (1861-65), identificando finalmente il sito esatto dell'assedio, e fa erigere nel 1865 una statua monumentale di Vercingetorige in cima alla collina (scultore Aimé Millet, 6.6 metri). Lo scopo politico è chiaro: legittimare la dinastia bonapartista come "unità nazionale francese" trovando una "radice gallica" (Vercingetorige, unificatore delle tribù) anziché una radice franca.

La Terza Repubblica (1870-1940) accoglie Vercingetorige con entusiasmo ancora maggiore. I libri scolastici di Ernest Lavisse ("Petit Lavisse") lo eleggono primo eroe della storia di Francia; generazioni di studenti francesi imparano a memoria il suo nome insieme a Giovanna d'Arco e Napoleone. "Nos ancêtres les Gaulois" ("i nostri antenati i Galli") diventa formula identitaria — usata in forma contraddittoria anche nelle scuole delle colonie africane francesi. È un mito identitario di largo respiro, capace di assorbire sia la destra nazionalista sia la sinistra repubblicana in una "fusione gallica".

La figura sopravvive bene nel XX secolo. Il film "Vercingétorix" (1909, tra i primi lungometraggi francesi); decine di romanzi storici; la serie di Asterix che, con leggerezza umoristica, lo rievoca costantemente come antenato mitico. Oggi Vercingetorige è visto con più equilibrio: non più "primo francese" (categoria anacronistica), ma "eroe della resistenza gallica" — figura complessa, tragica, rispettabile ma non appropriabile identificativamente. La sua memoria è patrimonio comune europeo, non più monopolio francese.`,
    },
    versions: [
      {
        era: "De Bello Gallico di Cesare (I sec. a.C.)",
        name: "La fonte antica",
        text: "Il libro VII del De Bello Gallico è l'unica fonte antica di qualche dettaglio su Vercingetorige. Cesare lo dipinge con complessità: è nemico, ma anche 'adulescens summae potentiae' ('giovane di massima abilità politica') e 'magni animi' ('di grande coraggio'). La magnanimità descrittiva cesariana ha paradossalmente consegnato il gallo alla posterità con una dignità letteraria superiore a quella di altri capi barbari.",
      },
      {
        era: "Plutarco, Dione Cassio, Floro (I-III sec. d.C.)",
        name: "Le fonti imperiali",
        text: "Plutarco nella Vita di Cesare, Dione Cassio nella Storia Romana, Floro nel compendio aggiungono dettagli: la cerimonia della resa (ronda rituale di Vercingetorige attorno al tribunale di Cesare), il trionfo del 46 a.C., la morte nel Tullianum. Le informazioni sono derivate ma confermano il quadro cesariano.",
      },
      {
        era: "Rinascita ottocentesca",
        name: "L'eroe nazionale francese",
        text: "Dal 1860s Vercingetorige diventa simbolo dell'identità francese. Napoleone III finanzia gli scavi archeologici e la statua monumentale di Alesia. La Terza Repubblica lo canonizza definitivamente attraverso Ernest Lavisse. È il culmine del 'mito identitario nazionale' ottocentesco.",
      },
      {
        era: "Storiografia contemporanea",
        name: "Il guerriero storico",
        text: "Gli studi storici moderni (Jean-Louis Brunaux, Yann Le Bohec, Christian Goudineau) hanno ricalibrato la figura: meno 'primo francese' e più 'capo gallico tipico del I sec. a.C.', con le competenze e i limiti del suo tempo. L'opera di Goudineau 'Le Dossier Vercingétorix' (2001) è il punto di riferimento contemporaneo.",
      },
    ],
    cult: "Alise-Sainte-Reine (Borgogna) è il sito di Alesia, identificato definitivamente dagli scavi di Napoleone III (1861-65) e confermato dalle ricerche successive. La statua monumentale di Aimé Millet (1865) è ancora in loco, meta di visitatori. Il nuovo MuseoParc Alesia, aperto nel 2012, è centro archeologico di livello europeo. Le falde della collina conservano ancora tracce delle trincee romane scavate da Cesare. Un secondo monumento, più piccolo, celebra Vercingetorige sulla vetta del Puy-de-Dôme in Alvernia, nei pressi dell'antica Gergovia.",
    influence: [
      {
        era: "'Nos ancêtres les Gaulois' — l'identità francese",
        text: "La formula è rimasta nell'identità culturale francese per 150 anni, dai tempi di Lavisse fino alle polemiche attuali sulla sua appropriatezza in contesto multiculturale. È una delle più forti 'formule mitiche' identitarie dell'Europa moderna.",
      },
      {
        era: "Alesia come sito della memoria",
        text: "L'archeologia di Alesia è tra le più studiate d'Europa: gli scavi di Napoleone III sono stati pionieristici per la disciplina archeologica militare, e le ricerche contemporanee hanno confermato i dettagli di Cesare con precisione impressionante. Alesia è diventato 'sito della memoria' (lieu de mémoire) nel senso di Pierre Nora.",
      },
      {
        era: "Asterix e l'eredità umoristica",
        text: "La serie Asterix di Goscinny e Uderzo mantiene viva la memoria di Vercingetorige con continui riferimenti umoristici. Il 'piccolo villaggio gallico che resiste all'invasore' è chiaramente modellato sulla resistenza vercingetoriciana. L'equilibrio tra serietà storica e ironia leggera della saga ha aiutato a far sopravvivere il mito in generazioni di europei.",
      },
      {
        era: "Rilevanza europea contemporanea",
        text: "Nel XXI secolo Vercingetorige è figura studiata anche come eroe europeo, non più solo francese. Mostre internazionali (Francia, Germania, Italia), coedizioni archeologiche, gemellaggi di città 'gallo-romane' hanno reso la sua figura patrimonio condiviso.",
      },
    ],
    texts: [
      {
        title: "Il discorso della resa",
        source: "Cesare, De Bello Gallico VII, 89, trad. dal latino",
        text: "Ille [Vercingetorix] collecta conciliorum convocat. Dicit se non pro sua utilitate sed pro communi libertate bellum suscepisse; cum Fortunae sit cedendum, ad utramque rem se illis offerre: seu morte sua Romanis satisfacere seu vivum tradere velint. // 'Egli [Vercingetorige], radunati i capi, li convoca in consiglio. Dichiara di aver intrapreso la guerra non per proprio vantaggio ma per la comune libertà; che poiché bisogna cedere al destino, si offre a loro per entrambe le opzioni: se con la sua morte voglian soddisfare i Romani o consegnarlo vivo.' I capi votarono per consegnarlo vivo.",
      },
      {
        title: "La resa al tribunale di Cesare",
        source: "Plutarco, Vita di Cesare 27, II sec. d.C., trad. dal greco",
        text: "Vercingetorige, il capo dei Galli, si preparò alla resa: indossò le sue armi più belle, ornò il suo cavallo, uscì dalle porte di Alesia. Cavalcando cerimonialmente intorno al tribunale dove Cesare sedeva, smontò da cavallo, si spogliò delle armi e rimase seduto ai piedi di Cesare, silenzioso, finché fu portato via per custodia. Così il capo dei Galli, che aveva fatto tremare Roma per un anno intero, si consegnò in persona al vincitore.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. I DRUIDI — il Sistema Sacerdotale Celtico
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "druidi",
    name: "I Druidi",
    role: "La Casta Sacerdotale-Intellettuale della Gallia",
    tags: ["Sacerdozio", "Conoscenza", "Giustizia", "Boschi sacri"],
    epithet: "I Sapienti della Quercia, Custodi della Tradizione Orale",
    type: "Eroe",
    chips: ["Gallia", "Britannia", "Cesare", "Plinio"],
    heroColor: "linear-gradient(160deg,#0a140a,#1f3318,#050a05)",
    shortDesc:
      "I druidi erano la casta sacerdotale-intellettuale della società celtica gallica e britannica: sacerdoti, giudici, insegnanti, guaritori, astrologi, custodi della tradizione orale. Godevano di immunità legale, esenzione dal servizio militare, supremazia giudiziaria. Studiavano per vent'anni memorizzando poemi sacri; non scrivevano nulla. Descritti da Cesare, Plinio, Strabone, Diodoro. Sterminati sistematicamente dai Romani (da Augusto a Claudio). Rinati come simbolo nel Celtic Revival del XVIII-XIX sec. e nel neodruidismo contemporaneo.",
    bio: {
      main: `I druidi (singolare druis, plurale druides, dal proto-celtico *dru-wid- "conoscitore della quercia" o forse "conoscitore forte") erano la casta sacerdotale-intellettuale della società celtica continentale e insulare. A differenza dei sacerdoti di altre culture antiche — che erano principalmente ritualisti — i druidi avevano funzioni molto più ampie e integrate: erano contemporaneamente sacerdoti (celebravano i sacrifici), giudici (risolvevano controversie tra tribù e individui), insegnanti (formavano i giovani nobili attraverso lunghi percorsi educativi), guaritori (conoscevano le proprietà medicinali delle piante), astrologi-calendaristi (osservavano il cielo e definivano le date delle festività), custodi della tradizione orale (memorizzavano e trasmettevano poemi sacri, genealogie, leggi), filosofi (discutevano la natura del cosmo e dell'anima).

La nostra conoscenza dei druidi proviene quasi esclusivamente da autori greco-romani dell'età tardorepubblicana e imperiale — Cesare, Cicerone, Strabone, Diodoro Siculo, Plinio il Vecchio, Lucano, Tacito, Ammiano Marcellino. I druidi stessi, per scelta, non scrivevano nulla di ciò che riguardava la loro dottrina: la loro sapienza era trasmessa interamente per via orale, attraverso un sistema mnemotecnico raffinato. Cesare nel De Bello Gallico VI, 14 spiega: "Non ritengono lecito affidare queste cose alla scrittura, mentre nella maggior parte degli altri affari, nei rendiconti pubblici e privati, usano le lettere greche. Mi pare che lo abbiano stabilito per due ragioni: per impedire che la loro dottrina si diffonda nel popolo, e perché coloro che imparano, fidandosi della scrittura, si applicano meno alla memoria." È un'osservazione antropologicamente finissima: Cesare ha colto che la non-scrittura druidica è scelta epistemologica, non arretratezza culturale.`,
      sub1: "La gerarchia interna — druidi, vati, bardi",
      text1: `Le fonti antiche, specialmente Strabone (IV, 4, 4) e Diodoro Siculo (V, 31), distinguono tre categorie all'interno della classe sacerdotale celtica. **Druidi** propriamente detti: i più alti, filosofi-teologi-giudici. Conoscevano la natura delle cose, la "teologia" celtica (dottrine sull'anima, sul cosmo, sulle divinità), presiedevano ai sacrifici maggiori, pronunciavano sentenze inappellabili. **Vati** (vates in latino, *vātis in proto-celtico, da cui irlandese faith "profeta"): specialisti della divinazione. Leggevano i segni — volo degli uccelli, viscere delle vittime sacrificali, nodi degli alberi, sogni — per prevedere il futuro. **Bardi** (bardi in latino, dalla stessa radice del gallese bardd): poeti-cantori specializzati nelle lodi dei re, nella conservazione delle genealogie aristocratiche, nella narrazione dei miti. Erano di grado inferiore ma godevano di grande prestigio sociale perché detentori della "fama".

La distinzione in "tre ordini" è una caratteristica indoeuropea classica — la famosa tripartizione funzionale dumézilliana: sacerdoti/sovrani, guerrieri, produttori. I celti l'applicavano in forma molto chiara. Il percorso formativo druidico era lunghissimo: fino a vent'anni di studio (Cesare: "dicitur in disciplina permanere ad annos vicenos"), durante i quali il discepolo memorizzava migliaia di versi. L'educazione avveniva in foreste sacre lontane dalle città, a piccoli gruppi di studenti intorno a un maestro anziano.

L'assemblea annuale dei druidi gallici era uno degli eventi religioso-politici più importanti del mondo celtico pre-romano. Si teneva — secondo Cesare — nella terra dei Carnuti (corrispondente all'odierna Beauce, regione di Chartres), considerata "il centro sacro della Gallia". Era una sorta di "parlamento spirituale" di un'entità geografica — la Gallia — che politicamente non era unificata ma religiosamente sì, grazie proprio al sistema druidico.`,
      sub2: "Dottrine filosofiche — l'immortalità dell'anima",
      text2: `La dottrina druidica più commentata dalle fonti antiche è quella dell'immortalità dell'anima. Cesare: "In primo luogo [i druidi] vogliono persuadere che le anime non periscono ma trapassano dopo la morte da un corpo all'altro, e ritengono che grazie a questo si ecciti moltissimo la virtù, abbandonato ogni timore della morte". Diodoro Siculo: "Tra i Galli la dottrina di Pitagora prevale, secondo cui le anime degli uomini sono immortali".

La dottrina druidica dell'immortalità dell'anima è paragonata sistematicamente dalle fonti alla dottrina pitagorica della metempsicosi. Il parallelismo era evidente ai Greco-Romani: pitagoreismo e druidismo condividono l'idea di reincarnazione, di apprendimento ultraterreno dell'anima, di ascesi in vita in vista del destino oltretomba. Alcuni studiosi antichi (Alessandro Polistore, citato da Diogene Laerzio) pensavano addirittura che Pitagora avesse imparato da un druida — ipotesi improbabile cronologicamente ma rivelatrice della percezione antica di una parentela spirituale celtico-pitagorica.

La conseguenza pratica della dottrina era l'enorme coraggio guerriero dei Galli — sottolineato da tutte le fonti romane. Se l'anima è immortale e rinasce, la morte in battaglia è trasferimento, non fine: si può affrontare il combattimento con frenesia. Lucano (Pharsalia I, 455-458) ne trae un elogio ambivalente: "Felice l'errore di voi popoli che il volto supremo guarda, il Carro dell'Orsa! Perché voi non temete la morte, senza paura correte alla spada, e la vita disprezzate, credendo che verrà ancora".

Oltre alla metempsicosi, le fonti attestano altre dottrine druidiche: cosmogonia ciclica (il mondo si distrugge periodicamente per acqua e fuoco, poi rinasce), gerarchia di dèi e demoni, corrispondenze astrali tra l'uomo e il cosmo. Plinio il Vecchio descrive in dettaglio il rituale del vischio: il sesto giorno della luna nuova, i druidi salivano su una quercia sacra, recidevano il vischio con un falce d'oro, lo raccoglievano in un mantello bianco (non poteva toccare terra), e sacrificavano due tori bianchi. Il vischio così raccolto era rimedio contro la sterilità e antidoto contro ogni veleno.`,
      sub3: "Sacrifici umani e repressione romana",
      text3: `Le fonti antiche concordano su un punto controverso: i druidi praticavano sacrifici umani. Cesare (De Bello Gallico VI, 16) descrive il "simulacro di vimini": una gabbia gigantesca in cui venivano chiuse vittime umane (preferibilmente criminali, ma anche innocenti in mancanza di criminali) e che veniva arsa come offerta agli dèi. Lucano e i suoi scoli aggiungono dettagli sui sacrifici specifici a Taranis (rogo), Teutates (annegamento), Esus (impiccagione). Strabone parla di divinazione praticata colpendo mortalmente una vittima e leggendo i presagi dal modo in cui il sangue usciva.

L'archeologia ha dato ragione in larga parte alle fonti. Scavi come quelli di Gournay-sur-Aronde (Somme, Francia, santuario celtico del III-I sec. a.C.) hanno rivelato accumuli di ossa umane con tracce di taglio e bruciatura — prova di pratiche rituali su scala significativa. Il "uomo di Lindow" (Inghilterra, corpo mummificato in torbiera, datato I sec. d.C.) è stato identificato come probabile vittima di sacrificio druidico: morto per tripla morte rituale (colpo alla testa, strangolamento, sgozzamento) e deposto in torbiera come offerta.

Il sacrificio umano fu la ragione ufficiale addotta dai Romani per la repressione del druidismo. Augusto proibì ai cittadini romani di partecipare ai riti druidici; Tiberio decretò l'estinzione dei druidi; Claudio nel 54 d.C. rese il druidismo crimine capitale nell'impero. Nel 61 d.C. il generale Svetonio Paolino massacrò il santuario druidico di Mona (Anglesey, Galles), ultima grande roccaforte del druidismo insulare. Tacito (Annales XIV, 29-30) ne descrive l'episodio con drammaticità: le druidesse con torce e imprecazioni, i druidi con le braccia alzate in preghiera — tutti sterminati dalle legioni. Con Mona il druidismo istituzionale era morto.`,
      sub4: "Sopravvivenza irlandese e revival moderno",
      text4: `Il druidismo continentale fu distrutto dalla repressione romana nel I-II sec. d.C., con l'estinzione dell'ultima generazione di druidi non cristianizzati. Ma in Irlanda, al di fuori dei confini romani, il sistema sopravvisse più a lungo. Le fonti medievali irlandesi (testi del VIII-XII sec.) descrivono druidi attivi fino all'età di San Patrizio (V sec.) e oltre. Il druidismo irlandese fu progressivamente cristianizzato più che distrutto: alcuni druidi divennero monaci (conservando funzioni intellettuali), altri poeti-filid (bardi), altri maghi del folklore popolare. L'impressionante produzione letteraria gaelica medievale è in larga parte la sopravvivenza di questa tradizione druidica cristianizzata.

Il revival moderno del druidismo è fenomeno del XVIII secolo in avanti, con due fasi principali. **Prima fase — revival antiquario (XVII-XVIII sec.).** Eruditi britannici come John Aubrey, William Stukeley (autore di "Stonehenge, a Temple Restor'd to the British Druids", 1740), James Macpherson (l'Ossian) riscoprono le fonti antiche sui druidi e cercano di ricostruirne dottrine. Stukeley identifica (scorrettamente) Stonehenge come tempio druidico, inaugurando il mito "Stonehenge = druidi" che sopravvive ancora. In questo periodo nascono le prime "società druidiche" amatoriali (Ancient Order of Druids, 1781).

**Seconda fase — reinvenzione romantica e neopagana (XIX-XXI sec.).** Con Iolo Morganwg (Edward Williams, 1747-1826) inizia la "reinvenzione creativa" del druidismo: Iolo forgia manoscritti gallesi pseudo-medievali in cui presenta una dottrina druidica "autentica" (in realtà in larga parte sua invenzione), ma culturalmente influentissima. Le sue rituali del Gorsedd (assemblea druidica gallese) sono ancora oggi in uso nell'Eisteddfod Nazionale del Galles. Nel XX sec. il druidismo si frammenta in molte tradizioni neopagane: OBOD (Order of Bards, Ovates and Druids, 1964); ADF (Ár nDraíocht Féin, USA, 1983); druidismo wiccano. Si stima che nel mondo ci siano oggi tra i 30.000 e i 100.000 "druidi" praticanti — la maggior parte concentrati in UK, Irlanda, USA, Francia.

Questo druidismo moderno non è continuazione storica del druidismo antico: è reinvenzione culturale romantico-postmoderna. Ma come fenomeno sociologico è importante: rappresenta una delle riscoperte identitarie europee più durature, ed è la religione-tradizione "celtica" più vitale del nostro tempo.`,
    },
    versions: [
      {
        era: "Fonti greco-romane (I sec. a.C. - II sec. d.C.)",
        name: "La documentazione antica",
        text: "Cesare (De Bello Gallico VI), Cicerone (De Divinatione), Strabone (Geografia IV), Diodoro Siculo (Bibliotheca V), Plinio il Vecchio (Naturalis Historia), Pomponio Mela, Tacito (Annales) — tutti descrivono i druidi con dettagli convergenti. Le fonti formano un corpus coerente, anche se tematizzato da prospettiva esterna/ostile.",
      },
      {
        era: "Archeologia dei santuari (XIX-XXI sec.)",
        name: "La prova materiale",
        text: "Scavi di Gournay-sur-Aronde, Ribemont, Corent, Orval hanno documentato santuari celtici pre-romani con evidenza di pratiche rituali complesse, sacrifici animali e umani, accumuli votivi. L'archeologia ha confermato ampiamente le fonti letterarie.",
      },
      {
        era: "Cristianizzazione irlandese (V-VIII sec.)",
        name: "La conversione pacifica",
        text: "In Irlanda i druidi non furono perseguitati violentemente ma assorbiti nel sistema intellettuale cristiano. Molti divennero monaci dotti (scribi dei grandi manoscritti medievali irlandesi) o filid (poeti ufficiali). La transizione è stata cruciale per la conservazione letteraria gaelica.",
      },
      {
        era: "Revival moderno (XVIII-XXI sec.)",
        name: "L'invenzione di una tradizione",
        text: "Dal Settecento i druidi sono stati oggetto di revival antiquario, poi di reinvenzione romantica, poi di rifondazione neopagana. Il druidismo moderno non è continuità storica ma creazione culturale viva, con decine di migliaia di praticanti in Europa e Nord America.",
      },
    ],
    cult: "La 'terra dei Carnuti' (Beauce, regione di Chartres, Francia) era secondo Cesare il luogo dell'assemblea annuale dei druidi gallici. Gournay-sur-Aronde (Somme) è il santuario celtico più importante scavato archeologicamente. Mona (Anglesey, Galles) era il centro del druidismo insulare, distrutto dai Romani nel 61 d.C. Stonehenge (Wiltshire, Inghilterra) è culturalmente associato ai druidi per il mito antiquario stukeleyano, anche se archeologicamente è monumento neolitico di duemila anni più antico del druidismo storico.",
    influence: [
      {
        era: "L'intellettuale-sacerdote indoeuropeo",
        text: "I druidi formano — con i brahmani indiani, i magi persiani, i flamini romani — la categoria indoeuropea dell'intellettuale-sacerdote di prima funzione dumézilliana. La comparazione strutturale delle quattro categorie è un capitolo classico degli studi indoeuropei (Dumézil, Benveniste).",
      },
      {
        era: "L'immortalità dell'anima pre-cristiana",
        text: "La dottrina druidica dell'immortalità dell'anima ha segnato profondamente l'immagine antica della spiritualità 'barbara'. I Padri della Chiesa cristiana (Agostino, Origene) commentano il druidismo proprio su questo punto: i druidi insegnavano già — dicevano — una forma di 'dottrina della vita eterna' che il cristianesimo completava e corrigeva.",
      },
      {
        era: "Celtic Christianity e continuità spirituale",
        text: "Nel discorso del 'Celtic Christianity' contemporaneo, i druidi sono spesso presentati come antenati spirituali degli anacoreti irlandesi medievali (San Columba, San Brendano). L'idea è che il cristianesimo celtico abbia ereditato dai druidi la sensibilità ecologica, la spiritualità naturalistica, l'idea di 'luoghi sottili' (thin places).",
      },
      {
        era: "Neopaganesimo globale",
        text: "Il druidismo contemporaneo (OBOD, ADF, tradizioni wicca con elementi druidici) è tra le religioni neopagane più vitali e numerose. L'immagine popolare del druido barbuto con tunica bianca e falcetto che taglia il vischio — iconografia di libri per bambini, film, parchi tematici — è diventata patrimonio culturale globale. Il druido è 'l'antenato spirituale dell'Europa pre-cristiana' per eccellenza.",
      },
    ],
    texts: [
      {
        title: "Cesare sui druidi",
        source: "De Bello Gallico VI, 13-14, ca. 50 a.C., trad. dal latino",
        text: "Illi rebus divinis intersunt, sacrificia publica ac privata procurant, religiones interpretantur. Ad hos magnus adulescentium numerus disciplinae causa concurrit, magnoque hi sunt apud eos honore. Nam fere de omnibus controversiis publicis privatisque constituunt. // 'Essi [i druidi] presiedono alle cose divine, provvedono ai sacrifici pubblici e privati, interpretano i riti religiosi. A loro si rivolge per imparare un gran numero di giovani, e sono tenuti in grande onore. Infatti giudicano quasi ogni controversia pubblica e privata.'",
      },
      {
        title: "Plinio sul rituale del vischio",
        source:
          "Naturalis Historia XVI, 249-251, ca. 77 d.C., trad. dal latino",
        text: "Sacerdos candida veste cultus arborem scandit, falce aurea demetit, candido id excipitur sago. Tum deinde victimas immolant precantes, suum donum deus prosperum faceret his quibus dedisset. Fecunditatem eo poto dari cuicumque animali sterili arbitrantur. // 'Un sacerdote vestito di bianca veste sale sull'albero, recide il vischio con una falce d'oro, che viene raccolto in un drappo bianco. Poi immolano vittime pregando che il dio renda propizio il suo dono a coloro cui l'ha dato. Ritengono che la fecondità sia donata da quella bevanda a qualsiasi animale sterile.'",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   MITI
   Array vuoto nel Lotto 3A. Il Lotto 3B vi inserirà:
   - Il Calderone di Gundestrup
   - Alesia
   ══════════════════════════════════════════════════════════════════════ */

const GALLIC_MYTHS = [
  /* ════════════════════════════════════════════════════════════════════
     1. IL CALDERONE DI GUNDESTRUP
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "gundestrup",
    tag: "Oggetto sacro",
    title: "Il Calderone di Gundestrup — Il Bestiario Cosmico Celtico",
    type: "Mito",
    epithet:
      "Il più importante reperto di arte celtica d'Europa — un mito in argento",
    chips: ["II-I sec. a.C.", "Danimarca", "Argento", "Gundestrup"],
    heroColor: "linear-gradient(160deg,#100a0a,#3a2a25,#050303)",
    shortDesc:
      "Il calderone di Gundestrup (II-I sec. a.C.), rinvenuto in una torbiera danese nel 1891, è il più spettacolare reperto di arte celtica d'Europa. In argento pesante (quasi 9 kg), lavorato a sbalzo, mostra su piastre interne ed esterne un bestiario cosmico celtico: Cernunnos cornuto tra animali, il sacrificio a Teutates nel tino, il Tarvos Trigaranos, riti di iniziazione guerriera. È la più ricca 'iconografia mitologica' celtica sopravvissuta, benché di fabbricazione probabilmente tracia e interpretazione ancora dibattuta.",
    bio: {
      main: `Il calderone di Gundestrup è un grande recipiente rituale di argento massiccio, dal diametro di 69 cm e alto 42 cm, del peso di 8,9 kg, datato al II-I secolo a.C. Fu scoperto il 28 maggio 1891 nella torbiera di Rævemose vicino al villaggio di Gundestrup nello Jutland settentrionale (Danimarca) da un piccolo gruppo di taglialegna di torba. Il calderone era stato smontato nei suoi tredici componenti e deposto accuratamente nella torba — probabilmente come offerta votiva a una divinità paludale — in epoca antica. Era in condizioni eccezionalmente buone grazie alle proprietà conservative della torba. Oggi è conservato al Nationalmuseet di Copenaghen, dove è il pezzo più celebrato della collezione.

Il calderone è costruito di tredici piastre di argento (più lavorato e puro sulla superficie esterna, meno pregiato sulla superficie interna) decorate con intricatissime scene figurative a sbalzo, martellate dall'interno e rifinite a cesello. Il peso e la qualità del materiale, oltre al livello artistico del lavoro, lo identificano come oggetto di eccezionale importanza rituale. Si stima che il suo valore (di metallo + lavoro) fosse equivalente, in epoca celtica, a diverse centinaia di teste di bovino — una ricchezza considerevole.

La questione dell'origine geografica è stata controversa per oltre un secolo. Le analisi stilistiche mostrano chiare ispirazioni dell'arte tracia (popoli dei Balcani orientali), ma l'iconografia è inequivocabilmente celtica: Cernunnos, il torque, il toro con gru, le scene rituali celtiche sono tutti motivi tipici dell'arte celtica dell'età di La Tène. L'ipotesi oggi prevalente è che il calderone sia stato fabbricato in area balcanica (probabilmente traco-geto) su commissione celtica, o da artigiani misti tra traci e celti. Sarebbe poi giunto nel nord Europa attraverso i contatti commerciali delle tribù del Danubio con quelle del Mare del Nord, o come bottino di guerra, o come dono diplomatico tra aristocrazie.`,
      sub1: "Le piastre e il bestiario",
      text1: `Il calderone ha decorazioni su due livelli: cinque piastre esterne rettangolari e sette piastre interne (più il fondo e un possibile coperchio). Le piastre esterne mostrano prevalentemente divinità femminili o ninfe in busto frontale. Le piastre interne sono più elaborate: mostrano scene rituali complesse con molte figure, dinamiche narrative ricche.

**Piastra interna A — Cernunnos.** La più celebre. Al centro, in grande scala, il dio cornuto seduto in posizione "di loto" (gambe incrociate sotto di sé), con un torque in mano destra alzato in alto e un serpente cornuto nella sinistra. Intorno a lui: un cervo maschio a destra con corna identiche alle sue, un cane, un lupo, un cinghiale, un leone, un delfino in basso, una piccola figura umana. La scena è la rappresentazione più completa di Cernunnos che abbiamo: il "Signore degli Animali" al centro del cosmo.

**Piastra interna E — il sacrificio a Teutates.** Una scena in tre registri. In alto: una fila di sette guerrieri a piedi con scudi ovali, lance ed elmetti, accompagnati da un suonatore di carnyx. In basso: quattro cavalieri in armatura. Al centro: un enorme dio in piedi che tiene per i piedi un uomo (vittima?) e lo cala a testa in giù dentro un grande calderone. La scena è quasi unanimemente interpretata come rappresentazione del sacrificio rituale a Teutates per immersione — pratica descritta dai Commenta Bernensia a Lucano. È il documento iconografico più importante che abbiamo su questa pratica religiosa.

**Piastra interna B — il Tarvos Trigaranos.** Un grande toro al centro, con tre gru (o aironi) appollaiate sulla schiena, e un cacciatore con cane che lo affronta. La scena è quasi certamente legata al mito di Esus e del toro-con-gru descritto nel Pilastro dei Nautes. Qui il toro è già domestico o è stato catturato: il mito di cui è protagonista resta per noi enigmatico.

**Piastra interna C — il dio con la ruota.** Un dio enorme (forse Taranis?) tiene in mano una ruota cosmica, circondato da figure più piccole, cervi, altri animali. La scena è astronomica: il dio è il motore del cosmo, la ruota è il cielo che gira.

**Piastra interna D — la dea con elefanti.** Una grande dea seduta, con due elefanti ai suoi lati (!), un grifone, altri animali esotici. L'iconografia mostra nettamente influenze orientali. Questo suggerisce contatti culturali con la Persia achemenide, forse attraverso la Tracia e i celti orientali.

**Piastra interna F — l'iniziazione guerriera.** Una fila di guerrieri in armatura marciando verso un grande albero centrale. La scena è stata interpretata come iniziazione rituale dei giovani guerrieri. L'albero al centro è l'albero sacro — forse lo stesso di Esus.`,
      sub2: "La funzione rituale",
      text2: `Il calderone non era un oggetto d'arte puro ma un'attrezzatura rituale. Per cosa veniva usato, esattamente? Le ipotesi principali sono tre.

**Calderone per banchetti rituali.** I calderoni erano centrali nella religione celtica: oggetti simbolici del potere, della fertilità, del banchetto dell'Altro Mondo. Il Dagda irlandese aveva il "calderone dell'abbondanza" che non si svuotava mai. Il calderone del Gundestrup potrebbe essere stato riempito di birra, vino o idromele durante grandi banchetti rituali, a cui partecipavano notabili tribali. Il bere dal calderone sacro "nutriva" spiritualmente i partecipanti.

**Calderone per sacrifici per immersione.** L'ipotesi più scioccante: il calderone era un "tino rituale" per i sacrifici umani a Teutates. Se così fosse, la piastra E sarebbe autoreferenziale: il calderone mostra, sul suo fianco, l'uso a cui veniva destinato. La rappresentazione di un'offerta è, al tempo stesso, la rappresentazione dell'oggetto stesso che la compie. Si tratta di un meccanismo di autocoscienza rituale notevole per l'antichità.

**Offerta votiva irrevocabile.** Comunque sia stato usato in attività, alla fine il calderone ha avuto un ruolo chiaro: è stato smontato e deposto nella palude come offerta votiva. I popoli celtici praticavano abitualmente l'offerta di oggetti preziosi a divinità di acque e paludi (laghi di La Tène in Svizzera, paludi del Somme, paludi dello Jutland). Il calderone è dunque il più sontuoso "gettito votivo" celtico noto. La divinità destinataria è ignota — forse una dea-palude dello Jutland, forse una divinità traca portata dai celti in pellegrinaggio.`,
      sub3: "Analisi tecnica e origine",
      text3: `Le analisi tecnico-scientifiche del calderone sono state numerose e ingegnosissime. Gli isotopi del piombo delle argentature hanno permesso di identificare le miniere di origine del metallo: prevalentemente miniere traciche (area del Rodope, Bulgaria-Grecia settentrionale), con inserzioni di argento probabilmente di recupero di monete più antiche. Le tecniche di manifattura — sbalzo a freddo su placca semi-rigida, cesellatura dei dettagli, argentatura per elettrolisi — corrispondono a quelle della scuola argentaria tracia del II-I sec. a.C., conosciute da altri reperti bulgari coevi (tesori di Rogozen, Borovo, Panagjurište).

Gli studiosi concordano oggi che la fabbricazione fu opera di bottega artigianale tracia, ma su commissione celtica. Il mandante doveva essere un aristocratico celtico di alto rango, in contatto commerciale diretto con le botteghe argentarie tracie. La transazione sarebbe plausibile nel III-I sec. a.C. quando i celti dei Balcani (Scordisci in Serbia, celti della Galazia in Anatolia) erano ancora potenti in area danubiana. Il calderone sarebbe stato trasferito in Danimarca in un secondo tempo, forse attraverso la rotta commerciale del Nord-Sud che collegava il Mediterraneo al mare del Nord lungo il Reno.

La data precisa della deposizione in torbiera è incerta, ma le analisi stratigrafiche suggeriscono il periodo 100-1 a.C. — forse in contemporanea con le grandi espansioni celtiche e poi con la loro ritirata sotto la pressione romana-germanica. Il calderone potrebbe essere stato deposto nel momento della fuga di un clan celtico dallo Jutland sotto l'avanzata dei Cimbri germanici (113-101 a.C.): un'offerta di disperazione a una divinità locale prima dell'abbandono delle terre.`,
      sub4: "Il valore culturale contemporaneo",
      text4: `Il calderone di Gundestrup è diventato nel corso del XX secolo la "Mona Lisa dell'arte celtica": l'oggetto più riprodotto, più commentato, più iconico della visual identity celtica moderna. Copie sono in decine di musei del mondo (British Museum, Metropolitan di New York, Musée celtique di Saint-Germain-en-Laye, Museo Nazionale di Dublino). Libri di arte, monografie archeologiche, articoli scientifici si contano a centinaia. Ha attraversato anche la cultura pop: ritratti sulle copertine di romanzi celtici, sfondo di videogiochi, simbolo del metal celtico.

Il suo valore culturale contemporaneo è duplice: storico-artistico (testimonianza unica della produzione artistica dell'Europa dell'Età del Ferro) e identitario (simbolo dell'eredità celtica europea). Quest'ultimo aspetto ha creato piccole tensioni: il calderone è oggi in Danimarca, ma i "celti" danesi sono inesistenti — se c'è una rivendicazione identitaria possibile, sarebbe da parte di francesi, irlandesi, britannici, o forse dei traci-bulgari. Negli anni 1990-2000 ci sono state proposte informali di "prestiti permanenti" ad altri musei, tutte declinate dal museo di Copenaghen che considera il calderone parte irrinunciabile della propria collezione.

Per la mitologia celtica, il valore del calderone è inestimabile. Senza di esso, non avremmo che vaghi riferimenti letterari a Cernunnos, nessuna idea visiva del sacrificio a Teutates, nessuna possibilità di vedere il "bestiario cosmico" celtico con cui le divinità erano circondate. È la più ricca iconografia celtica pre-romana che abbiamo — un'immagine mitologica in metallo pesante, un mito raccontato attraverso le figure invece che attraverso le parole. Se il Libro di Kells è la Bibbia dell'arte celtica cristiana, il calderone di Gundestrup è l'Iliade dell'arte celtica pagana.`,
    },
    versions: [
      {
        era: "Fabbricazione (II-I sec. a.C.)",
        name: "Bottega tracia-celtica",
        text: "La fabbricazione è collocata dagli studiosi nelle botteghe argentarie traciche del II-I sec. a.C. (area Bulgaria-Romania attuale), su commissione di un aristocratico celtico danubiano. La tecnica mostra mestiere tracio, iconografia celtica — è un prodotto di interazione culturale complessa tra i due popoli.",
      },
      {
        era: "Deposizione in torbiera (I sec. a.C.)",
        name: "L'offerta votiva",
        text: "Il calderone fu smontato accuratamente nei suoi tredici pezzi e deposto nella torbiera di Rævemose, in Jutland. L'evento è da collocare probabilmente nel periodo delle migrazioni cimbriche (100-50 a.C.) o nell'epoca di grande contatto celtico-germanico nella regione. L'offerta era destinata a una divinità paludale locale.",
      },
      {
        era: "Scoperta archeologica (1891)",
        name: "La riscoperta moderna",
        text: "Il 28 maggio 1891 alcuni taglialegna di torba trovarono il calderone durante il loro lavoro quotidiano. Lo consegnarono al Nationalmuseet di Copenaghen, dove è rimasto conservato ininterrottamente da allora. La scoperta è stata uno degli eventi archeologici più importanti del XIX secolo scandinavo.",
      },
      {
        era: "Studio moderno (XX-XXI sec.)",
        name: "Un secolo di analisi",
        text: "Le analisi del calderone si sono susseguite per oltre un secolo: stilistiche (Paul-Marie Duval, Miranda Aldhouse-Green), metallurgiche (analisi isotopiche anni 1990), iconografiche (decine di studi su singole piastre), interpretative (Timothy Taylor, 'The Gundestrup Cauldron', 1992). Rimane oggetto di ricerca attiva. La bibliografia supera ormai i 500 titoli scientifici.",
      },
    ],
    cult: "Nationalmuseet (Museo Nazionale) di Copenaghen, Danimarca, dove il calderone è conservato dal 1891 come uno dei pezzi più preziosi della collezione archeologica. È visitabile nella 'Prehistory Section' come punto focale della narrazione preistorica europea. Numerose copie e riproduzioni sono in musei di tutto il mondo: British Museum, Musée d'Archéologie nationale, Metropolitan Museum.",
    influence: [
      {
        era: "Icona dell'arte celtica moderna",
        text: "Il calderone è diventato l'immagine emblematica dell'eredità celtica continentale. Appare su copertine di libri, manifesti di eventi culturali, merchandise museale, simboli di associazioni celtiche moderne. Nel neopaganesimo celtico è oggetto-culto: riproduzioni stilizzate sono altari domestici, il 'calderone di Cerridwen' gaelico è identificato iconograficamente con Gundestrup.",
      },
      {
        era: "Museo di Cernunnos — la visualizzazione della divinità",
        text: "Senza la piastra A del Gundestrup, non sapremmo come rappresentare Cernunnos. Tutte le rappresentazioni moderne del dio cornuto — dalle illustrazioni di libri per bambini alle sculture di parchi celtici, dai videogame alle illustrazioni neopagane — derivano direttamente o indirettamente da questa unica piastra d'argento del II-I sec. a.C.",
      },
      {
        era: "Eluveitie e il metal celtico",
        text: "Il gruppo svizzero Eluveitie (folk metal celtico con testi in gallico ricostruito) ha adottato il calderone di Gundestrup come simbolo identitario esplicito dei loro album. Hanno contribuito a diffonderlo presso una nuova generazione di fan in tutta Europa e Nord America.",
      },
      {
        era: "Mostre itineranti internazionali",
        text: "Il calderone (originale o replica) è stato protagonista di grandi mostre internazionali: 'I Celti' a Venezia (1991, Palazzo Grassi), 'Die Kelten' a Bonn (2002), 'Les Celtes' a Parigi (2007). Queste mostre hanno riacceso l'interesse per la cultura celtica continentale, spesso eclissata nell'immaginario popolare dalla celtica insulare.",
      },
    ],
    texts: [
      {
        title: "Descrizione tecnica ufficiale",
        source: "Nationalmuseet Copenaghen, scheda museale, 2021",
        text: "Grande calderone in argento, diametro 69 cm, altezza 42 cm, peso 8,9 kg. Composto da 13 placche d'argento originariamente saldate e unite a un fondo circolare. Datazione: II-I sec. a.C. Provenienza: area balcanica (Bulgaria meridionale o Romania), manifattura di scuola tracia su committenza celtica. Ritrovato: 28 maggio 1891 nella torbiera di Rævemose, Gundestrup, Jutland settentrionale, Danimarca. Stato di conservazione: eccellente, grazie alle proprietà anaerobiche della torba.",
      },
      {
        title: "Interpretazione iconografica",
        source: "Miranda Aldhouse-Green, The Gods of the Celts, 1986, cap. 5",
        text: "Il calderone di Gundestrup è un compendio visivo della religione celtica del II-I sec. a.C. Ogni piastra rappresenta un'epifania divina o un rituale. La piastra A con Cernunnos è la sintesi: al centro il dio-universo, attorno gli esseri viventi disposti in ordine cosmico. La piastra E con il sacrificio a Teutates documenta la pratica religiosa più controversa del druidismo: l'offerta umana per annegamento rituale. Il calderone, nel suo insieme, non è 'arte per l'arte': è teologia in argento, catechismo figurato, libro sacro metallico.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. ALESIA — il Mito della Resistenza Finale
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "alesia",
    tag: "Evento storico-mitico",
    title: "Alesia — L'Assedio Finale della Gallia Libera (52 a.C.)",
    type: "Mito",
    epithet: "Il luogo della sconfitta definitiva e dell'eroismo perenne",
    chips: [
      "52 a.C.",
      "Borgogna",
      "Cesare vs Vercingetorige",
      "Ultima battaglia",
    ],
    heroColor: "linear-gradient(160deg,#140500,#3a1505,#0a0200)",
    shortDesc:
      "Alesia (52 a.C.), oppidum gallico dove Cesare sconfisse definitivamente Vercingetorige, è diventata nei secoli ben più di una battaglia: è 'il mito della resistenza finale celtica', archetipo dell'eroismo per una causa perduta. La doppia cerchia fortificata di Cesare (33 km di trincee), l'assedio totale, la resa cavalleresca dell'eroe, la memoria ottocentesca francese hanno costruito attorno al sito un'aura quasi sacra. Alise-Sainte-Reine in Borgogna è oggi sito archeologico patrimonio europeo.",
    bio: {
      main: `Alesia non è solo una battaglia del 52 a.C. È un luogo-simbolo, un evento-mito, un motivo identitario europeo. Nei secoli successivi alla sua scomparsa fisica come oppidum gallico, Alesia è rinata come archetipo della "sconfitta sacra": il luogo dove si combatte sapendo di perdere, dove l'eroismo è commisurato non al successo ma al sacrificio. In questo Alesia appartiene alla stessa famiglia mitica delle Termopili spartane, di Masada zelota, dell'Alamo texano — i "Last Stand" nazionali della storia umana, reincarnati ciascuno in una tradizione diversa. Ma Alesia ha una peculiarità: ha un vincitore (Cesare) che l'ha documentata nel De Bello Gallico con cura così dettagliata da renderla il più rigorosamente ricostruibile degli "ultimi baluardi" antichi. Tutti i dati militari, logistici, tattici sono dati dallo stesso conquistatore. Ne è nata una leggibilità archeologica eccezionale.

Il sito è Alise-Sainte-Reine, un piccolo villaggio borgognone sulla collina del Monte Auxois, dipartimento della Côte-d'Or. L'oppidum gallico occupava la sommità della collina, tipica ubicazione celtica difensiva. Le campagne archeologiche commissionate da Napoleone III (1861-65) confermarono definitivamente l'identificazione del sito. Le ricerche archeologiche successive (Michel Reddé, 1991-97) hanno confermato in dettaglio le descrizioni cesariane: le trincee, le palizzate, le trappole, i fossati sono stati trovati esattamente dove Cesare dice. Il lavoro di Cesare come "testimonianza militare" è uno dei più accurati della letteratura antica.`,
      sub1: "La doppia cerchia — capolavoro ingegneristico",
      text1: `Ciò che rende Alesia strategicamente singolare è la soluzione di Cesare al problema dell'assedio di Vercingetorige. Cesare sapeva che il capo gallo aveva fatto uscire dall'oppidum tutta la cavalleria prima della chiusura del blocco, con l'incarico di radunare un esercito di soccorso. L'esercito romano avrebbe dovuto affrontare minaccia su due fronti: l'oppidum accerchiato (interno) e il soccorso in arrivo (esterno).

La soluzione di Cesare fu costruire due cerchie fortificate concentriche. La **contravallazione** (cerchia interna, rivolta verso l'oppidum) aveva circa 16 km di circonferenza e serviva a impedire a Vercingetorige di uscire. La **circumvallazione** (cerchia esterna, rivolta verso la campagna) aveva circa 21 km di circonferenza e serviva a respingere l'esercito di soccorso. Fra le due cerchie, i castra dove bivaccavano le 11 legioni romane (40.000-50.000 uomini più cavalleria e ausiliari).

Cesare descrive nei dettagli le fortificazioni (De Bello Gallico VII, 72-74). Ogni cerchia consisteva in: un fossato largo 4-5 metri e profondo 3 metri; una palizzata di tronchi e rami ritorti ("cervi"); una torre ogni 80 piedi (ca. 24 m); e — ingegnosità peculiarmente cesariana — una serie di campi di trappole disseminate davanti alla palizzata: i cippi (rami appuntiti conficcati nel terreno), i lilia (piccoli pozzi con punte acuminate nascoste da rami e foglie), gli stimuli (paletti ferrati conficcati). Le trappole, insieme, formavano un tratto di terra di nessuno di alcune decine di metri quasi impraticabile.

La costruzione richiese tre settimane di lavoro intensivo di tutte le 11 legioni. È uno dei più imponenti progetti di ingegneria militare dell'antichità. Le ricerche archeologiche moderne hanno confermato in dettaglio la descrizione di Cesare: sono stati trovati tratti delle trincee, resti di palizzate carbonizzate, campi di lilia con punte ferrate. Il sito di Alesia è oggi un "parco archeologico ingegneristico" unico in Europa.`,
      sub2: "La battaglia dei tre giorni",
      text2: `L'esercito di soccorso gallico arrivò nel settembre 52 a.C. Cesare parla di 8.000 cavalieri e 240.000 fanti, numeri quasi certamente esagerati (gli storici moderni stimano 60.000-80.000 fanti effettivi, il che resta enorme). L'armata era guidata da Commios degli Atrebati, Vercassivelauno degli Arverni (cugino di Vercingetorige), Viridomaro e Eporedorige degli Edui.

La battaglia durò tre giorni. **Primo giorno.** L'esercito gallico lancia un attacco di cavalleria contro la circumvallazione esterna. Contemporaneamente, Vercingetorige dall'oppidum attacca la contravallazione interna. L'attacco gallico è vigoroso ma disordinato; i Romani resistono bene. La giornata si chiude senza risultato decisivo.

**Secondo giorno.** I Galli cambiano strategia e lanciano un assalto notturno. Attaccano la circumvallazione usando scale, graffi, crowbar per infrangere le palizzate. Vercingetorige dall'oppidum attacca simultaneamente con tutte le sue forze. È la notte più difficile per i Romani, che combattono al buio. Ma gli ufficiali romani mantengono il controllo, le trombe segnalano i punti di crisi, le legioni di riserva accorrono. L'alba sorprende i Galli ancora impegnati senza aver ancora perforato le linee; ma le perdite romane sono severe.

**Terzo giorno.** L'assalto decisivo. Vercassivelauno con 60.000 uomini scelti attacca il punto più debole della circumvallazione (dove la linea passava su terreno paludoso). Vercingetorige attacca contemporaneamente dall'altro lato. I Romani di quel settore stanno cedendo. Cesare stesso, visibile nel suo celebre mantello rosso (paludamentum imperatorium), si dirige a cavallo con la cavalleria di riserva verso il punto di crisi. Il suo intervento è decisivo: la presenza di Cesare in persona galvanizza i romani e spaventa i Galli. Vercassivelauno è catturato. La cavalleria romana, uscendo da una porta laterale della circumvallazione, attacca l'esercito di soccorso alle spalle. L'armata gallica di soccorso si sfalda. Vercingetorige, vedendo la catastrofe, rientra nell'oppidum.

Il giorno successivo il consiglio dei capi galli affronta la situazione: l'esercito di soccorso è disperso, le scorte dell'oppidum sono agli sgoccioli, la fame incombe. Vercingetorige si offre: "Se la resa salva le vite dei miei, morirò io solo." Il consiglio accetta. Il giorno successivo — probabilmente 27 settembre 52 a.C. — Vercingetorige esce a cavallo dall'oppidum, compie la sua celebre ronda cerimoniale intorno al tribunale di Cesare, si spoglia delle armi, siede a terra. Alesia è caduta.`,
      sub3: "Le conseguenze — la Gallia conquistata",
      text3: `La resa di Vercingetorige segnò la fine effettiva della resistenza gallica organizzata. Le poche tribù che continuarono a opporsi a Cesare nell'anno seguente (51 a.C.) furono facilmente schiacciate. Con l'assoggettamento finale nel 50 a.C., la Gallia Transalpina diventò provincia romana, avviata a un processo di integrazione che avrebbe richiesto circa 150 anni per completarsi.

Le conseguenze umane dell'intera campagna cesariana (58-52 a.C.) furono enormi. Plutarco (Vita di Cesare 15) riporta cifre: 800 oppida conquistati, 300 tribù sottomesse, 3 milioni di Galli di cui un milione morti in battaglia e un milione fatti schiavi. Questi numeri sono probabilmente esagerati, ma gli storici moderni ritengono ragionevoli le stime di 500.000-1 milione di morti e altrettanti schiavi — su una popolazione gallica totale probabilmente di 5-8 milioni. La Gallia uscì dalla guerra decimata in popolazione, con l'aristocrazia terriera quasi sterminata, le città distrutte, i grandi santuari profanati.

Il lascito culturale fu complesso. La romanizzazione della Gallia procedette con velocità relativamente bassa nei primi decenni (I sec. d.C.), con parziale conservazione della cultura celtica indigena nelle zone rurali. Ma dal II sec. d.C. il processo accelerò: latino come lingua dominante, religione celtica cristianizzata o sincretizzata con quella romana, architettura urbana romanizzata. La "Gallia romana" — sintesi culturale gallo-romana — è una delle più ricche delle provincie dell'impero.

Della "Gallia libera" di Vercingetorige — la Gallia celtica autonoma, pre-romana, pagana — non sopravvissero pressoché nulla di istituzionale. I druidi furono repressi. Gli oppida furono abbandonati o trasformati in città romane. Le lingue celtiche continentali sopravvissero per alcuni secoli nelle zone rurali ma si estinsero prima dell'alto Medioevo. La "memoria celtica continentale" dovette essere rinata con il Celtic Revival del XVIII-XIX sec., sulla base di fonti latine e di ispirazione identitaria moderna.`,
      sub4: "La rinascita ottocentesca — Alesia come sito sacro",
      text4: `Per oltre 1.800 anni Alesia fu nome quasi dimenticato. Non era oggetto di pellegrinaggio né di rivendicazione identitaria. I francesi medievali non erano interessati: erano discendenti dei Franchi, invasori tardoantichi, e i Galli pre-romani appartenevano a un'altra stirpe.

La rinascita di Alesia è un fenomeno pienamente ottocentesco. Napoleone III (imperatore 1852-1870), appassionato di storia antica, intraprese una monumentale "Storia di Giulio Cesare" (2 volumi 1865-66) con lo scopo esplicito di glorificare Cesare come modello dell'"uomo di Stato-fondatore" e di legittimare il proprio regime bonapartista-imperiale. Parte dell'opera richiedeva la ricostruzione esatta dei siti delle battaglie gallico-romane: furono commissionati scavi archeologici metodici per la prima volta nella storia francese. Ad Alesia gli scavi iniziarono nel 1861 sotto la direzione di Eugène Stoffel e continuarono fino al 1865. Confermarono definitivamente l'identificazione di Alise-Sainte-Reine e documentarono in dettaglio le fortificazioni romane.

Nel 1865 Napoleone III fece erigere sulla sommità della collina di Alise una statua monumentale di Vercingetorige, scolpita da Aimé Millet. La statua è alta 6,6 metri, in rame dorato, rappresenta Vercingetorige in piedi con braccia conserte, barbato, con un mantello che svolazza. Sulla base c'è un'iscrizione in francese, scritta personalmente dall'imperatore: "La Gaule unie, formant une seule nation, animée d'un même esprit, peut défier l'univers" — "La Gallia unita, formando una sola nazione, animata da un medesimo spirito, può sfidare l'universo". L'iscrizione è testo chiave del "nazionalismo gallico" francese moderno.

Dopo il crollo del Secondo Impero (1870) e l'avvento della Terza Repubblica, Alesia e Vercingetorige furono rielaborati come simboli repubblicani. Ernest Lavisse nei suoi testi scolastici elementari elegge Vercingetorige primo eroe della "storia di Francia", e "Alesia" diventa prima parola che ogni studente francese incontra quando apre il libro di storia. Generazioni intere di francesi imparano a identificarsi con la resistenza gallica.

Nel XX sec. il mito continua. La statua di Alesia è restaurata. Il MuseoParc Alesia, inaugurato nel 2012, è un centro archeologico e museale di livello europeo: include una ricostruzione a grandezza naturale delle fortificazioni romane (palizzate, torri, fossati), un museo archeologico con reperti degli scavi, un centro didattico. È oggi meta di quasi 200.000 visitatori all'anno, più della metà francesi, il resto da tutta Europa. Il mito di Alesia, a lungo esclusivamente francese, è diventato patrimonio europeo.`,
    },
    versions: [
      {
        era: "De Bello Gallico di Cesare (I sec. a.C.)",
        name: "La fonte antica",
        text: "Il libro VII del De Bello Gallico è la fonte principale dell'assedio. Cesare descrive con straordinario dettaglio tecnico le fortificazioni, la logistica, le tre giornate di battaglia, la resa di Vercingetorige. La sua testimonianza è di parte ma è anche scrupolosa — Cesare scriveva per un pubblico di nobili romani che avrebbero controllato i dettagli militari.",
      },
      {
        era: "Scavi di Napoleone III (1861-65)",
        name: "La conferma archeologica",
        text: "Le campagne archeologiche di Eugène Stoffel sotto Napoleone III confermarono definitivamente Alise-Sainte-Reine come Alesia e documentarono in dettaglio le fortificazioni romane. Fu un momento pionieristico per l'archeologia militare europea.",
      },
      {
        era: "Ricerche moderne (1991-oggi)",
        name: "La verifica scientifica",
        text: "Le campagne di Michel Reddé (1991-97) e di altri team franco-tedeschi hanno usato tecnologie moderne (prospezioni geofisiche, scavi stratigrafici, analisi metallurgiche) per validare e raffinare le scoperte di Stoffel. Tutti i dettagli cesariani sono stati confermati, con precisione sorprendente.",
      },
      {
        era: "MuseoParc Alesia (2012)",
        name: "La valorizzazione contemporanea",
        text: "L'inaugurazione del MuseoParc Alesia nel 2012 — centro archeologico e museale progettato dall'architetto Bernard Tschumi — ha dato al sito una veste contemporanea. Il complesso include ricostruzioni di fortificazioni, spazi didattici, museo dei reperti. È uno dei grandi progetti di valorizzazione del patrimonio archeologico celtico in Europa.",
      },
    ],
    cult: "Alise-Sainte-Reine (Côte-d'Or, Borgogna) è oggi sito archeologico protetto di importanza europea. La statua monumentale di Vercingetorige (1865) è sulla sommità della collina, meta di visitatori. Il MuseoParc Alesia (inaugurato 2012) accoglie circa 200.000 visitatori all'anno. Sono stati identificati e segnalati sul terreno i tracciati delle fortificazioni cesariane (contravallazione e circumvallazione). Alesia è oggi sito della memoria (lieu de mémoire) riconosciuto come parte del 'patrimonio gallo-romano europeo'.",
    influence: [
      {
        era: "'Le dernier stand' — archetipo universale",
        text: "Alesia appartiene alla famiglia universale degli 'ultimi baluardi': Termopili, Masada, Alamo, Stalingrado, Dien Bien Phu. Tutti questi 'last stand' condividono struttura mitica: la piccola forza che resiste a una più grande, la sconfitta inevitabile ma onorata, la memoria perpetua del sacrificio. Alesia è il rappresentante celtico-gallico di questa categoria archetipica.",
      },
      {
        era: "Il 'nazionalismo gallico' francese",
        text: "La memoria di Alesia è stata nucleo del 'nazionalismo gallico' francese del XIX-XX sec. 'Nos ancêtres les Gaulois' è formula identitaria costruita sull'eredità alesiana. Il mito è stato patrimonio trasversale della politica francese — usato sia dalla destra nazionalista (Barrès, Maurras) sia dalla sinistra repubblicana (Michelet, Jaurès).",
      },
      {
        era: "Archeologia militare europea",
        text: "Le fortificazioni di Alesia sono oggi il manuale vivente dell'ingegneria militare romana. Vi si sono formate generazioni di archeologi militari in Francia, Germania, Italia. I 'lilia' cesariani di Alesia sono citati in manuali di fortificazione come prototipo delle trappole antipersona.",
      },
      {
        era: "Asterix — la memoria popolare",
        text: "La serie Asterix di Goscinny e Uderzo è, tra le altre cose, una continua riflessione umoristica su Alesia. Il villaggio gallico che 'resiste ancora all'invasore' è Alesia ideale che non si è arresa. 'Alesia ? Je ne sais pas où se trouve Alesia ! Personne ne sait où se trouve Alesia !' (storica battuta di Asterix che fa eco all'imbarazzo archeologico ottocentesco sull'identificazione del sito) è diventato meme della cultura francese.",
      },
    ],
    texts: [
      {
        title: "La costruzione delle fortificazioni",
        source: "Cesare, De Bello Gallico VII, 72-73, trad. dal latino",
        text: "Perfectis his operibus regiones secutus quam potuit aequissimas pro loci natura XIIII milia passuum complexus pares eiusdem generis munitiones, diversas ab his, contra exteriorem hostem perfecit. // 'Completate queste opere, seguendo il percorso più regolare possibile secondo la natura del luogo, e comprendendo una circonferenza di 14 miglia [21 km], portò a termine contro il nemico esterno fortificazioni dello stesso tipo ma rivolte in direzione opposta.'",
      },
      {
        title: "La resa di Vercingetorige",
        source: "Cesare, De Bello Gallico VII, 89, trad. dal latino",
        text: "Postero die Vercingetorix concilio convocato id bellum se suscepisse non suarum necessitatum, sed communis libertatis causa demonstrat. // 'Il giorno successivo, convocato il consiglio, Vercingetorige dichiara di aver intrapreso la guerra non per proprie necessità ma per la comune libertà.' E poi, come dicono Plutarco e Floro, uscì dall'oppidum a cavallo con le sue armi più belle, cavalcò attorno al tribunale di Cesare in una ronda rituale, gettò le armi ai piedi del vincitore e rimase seduto in silenzio.",
      },
    ],
  },
];
