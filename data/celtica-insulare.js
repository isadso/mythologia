/* data/celtica-insulare.js
   Mitologia Celtica — Tradizione Gaelica Scozzese e Insulare
   (Scozia, Isola di Man, Ebridi, Irlanda del Nord)

   Fonti primarie:
   - Carmina Gadelica di Alexander Carmichael (1900), raccolta monumentale di
     preghiere, incantesimi e canti gaelici delle Highlands
   - Buile Shuibhne ("La Frenesia di Suibhne"), testo medio-irlandese XII sec.
   - Manx Folklore di Walter Gill (1929-1963), studi sul folklore mannese
   - Carmichael Watson Collection, Edinburgh University Library
   - Folklore of the Scottish Highlands di Anne Ross (1976)

   Studi: John Gregorson Campbell, The Gaelic Otherworld (1900); J.F. Campbell,
          Popular Tales of the West Highlands (1860); George Broderick, Manx
          Traditional Ballads (1984); Donald Mackenzie, Scottish Folk-Lore and
          Folk Life (1935).
*/

/* ══════════════════════════════════════════════════════════════════════
   FIGURE DIVINE E SOPRANNATURALI
   ══════════════════════════════════════════════════════════════════════ */

const SCOTTISH_DEITIES = [
  /* ════════════════════════════════════════════════════════════════════
     1. CAILLEACH BHEUR — la Vecchia dell'Inverno
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "cailleach",
    name: "Cailleach Bheur",
    role: "Dea-Vecchia dell'Inverno, Creatrice del Paesaggio",
    tags: ["Inverno", "Paesaggio", "Creazione", "Ciclo stagionale"],
    epithet: "La Velata, la Vecchia di Beare, Regina dell'Inverno",
    type: "Divinità",
    chips: ["Scozia", "Irlanda", "Pre-celtica", "Beira"],
    heroColor: "linear-gradient(160deg,#08141f,#1a3550,#050a14)",
    bio: {
      main: `La Cailleach — il cui nome in gaelico scozzese e irlandese significa letteralmente "la Velata" o "la Incappucciata" (da caille, "velo, copertura", termine di probabile origine latina tarda ma con radicamento profondo nel lessico gaelico pre-cristiano; alcune proposte etimologiche derivano il nome dal proto-celtico *kali-, "vecchia", affine al gallese cailleach; in ogni caso il velo evoca sia il cappuccio delle donne anziane sia il manto di neve che copre la terra) — è forse la figura più arcaica e stratificata di tutta la mitologia celtica insulare. Non appartiene ai Tuatha Dé Danann né al pantheon ordinato della letteratura medievale irlandese: è più antica, più selvaggia, pre-indoeuropea nelle sue stratificazioni più profonde. L'appellativo Bheur ("acuta, pungente, tagliente" in gaelico scozzese, riferito al freddo e al vento) la connette ai rigori dell'inverno; quello Bhéarra (di Beare, in Irlanda) la radica geograficamente nella penisola di Beara, nella contea di Cork.
 
La genealogia della Cailleach è deliberatamente opaca: non ha genitori attestati, non ha sposo fisso nella tradizione principale, non appartiene a nessuna stirpe divina codificata. Questa assenza genealogica è essa stessa un dato teologico: la Cailleach è anteriore al sistema. In alcune tradizioni scozzesi delle Highlands ha un marito — il Bodach, "il Vecchio", figura complementare — e una figlia, Nighean; ma il centro della sua identità è la solitudine cosmica, non la famiglia. Alcune versioni la descrivono come immortale e cicclicamente giovane: ogni Beltane beve dal Pozzo della Giovinezza e si trasforma in Brigid, la dea primaverile; ogni Samhain ridiventa vecchia, e il ciclo ricomincia. In questa struttura Cailleach e Brigid non sono due divinità separate ma due fasi della stessa forza cosmica — il femminile divino che alterna inverno e primavera, morte e rinascita, aridità e fioritura.
 
La funzione cosmica della Cailleach è duplice: è la regina dell'inverno che governa i mesi da Samhain (1° novembre) a Beltane (1° maggio), battendo la terra con la sua mazza (slachdan) per congelare i fiumi e scatenare le tempeste; ed è al tempo stesso la creatrice del paesaggio, la gigantessa la cui azione fisica ha modellato le Highlands. La tradizione folklorica scozzese la descrive intenta a trasportare pietre nel suo grembiule: dove le pietre cadono sorgono i monti, dove posa un piede nasce una collina, dove si siede a riposare si forma un promontorio. Questa funzione di creatrice-paesaggista la distingue nettamente dalle divinità antropomorfe tardo-celtiche e la avvicina alle dee pre-indoeuropee della Grande Madre, identificate da Marija Gimbutas come la tradizione dell'Antica Europa. John Arnott MacCulloch (The Religion of the Ancient Celts, T. & T. Clark, 1911) la considera "la più arcaica sopravvivenza di una dea-terra pre-celtica nelle isole britanniche", e la sua assenza dalla letteratura medievale irlandese — che pure conserva materiale mitologico abbondante — è coerente con questa antichità: la Cailleach non è stata mai pienamente "addomesticata" dal sistema narrativo celtico.
 
L'iconografia della Cailleach è quella della vecchia cosmica: un solo occhio al centro della fronte (tratto pan-europeo pre-indoeuropeo, condiviso con i Fomori irlandesi e i ciclopi greci), capelli bianchi come la neve, un mantello grigio-blu del colore del cielo invernale, la mazza di legno di sambuco. I suoi animali sacri sono il cervo rosso delle Highlands (il "bestiame della Cailleach"), il corvo e la lepre bianca. Non ha colori sacri codificati, ma il bianco della neve, il grigio della pietra e il blu dell'acqua gelata sono i suoi attributi cromatici naturali.`,

      sub1: `La creazione del paesaggio delle Highlands`,
      text1: `Il mito della Cailleach come creatrice del paesaggio scozzese è documentato in decine di varianti locali raccolte sistematicamente da John Francis Campbell in Popular Tales of the West Highlands (vol. IV, 1862) e da Alexander Carmichael nel Carmina Gadelica (1900). La struttura narrativa è costante: la gigantessa attraversa le Highlands trasportando pietre nel grembiule, e il paesaggio nasce dai suoi incidenti e dalle sue azioni. I monti di Ross-shire sarebbero nati dove il grembiule si strappò; i crinali di Sutherland — "i più disordinati della Scozia" secondo Campbell — sarebbero detriti di una camminata frettolosa; le isole delle Ebridi sarebbero pietre che le scivolarono di mano mentre attraversava il Minch.
 
Questo tipo di mitologia del paesaggio — in cui le caratteristiche geografiche sono spiegate come conseguenze dirette delle azioni di una divinità — è documentata in Irlanda (lo Hag's Head, promontorio delle scogliere di Moher, è identificato come la sagoma della Cailleach pietrificata), in Galles (Y Wrekin è un sasso che un gigante stava per gettare su Shrewsbury), e in numerose tradizioni nordeuropee. Anne Ross (Pagan Celtic Britain, Routledge, 1967) ha analizzato come questa "mitologia topografica" sia una forma di pensiero religioso in cui il paesaggio fisico non è sfondo neutro ma testo sacro — la scrittura corporea della divinità nel mondo materiale.
 
Il monte Beinn na Cailliche sull'Isola di Skye è il sito più specificamente associato alla Cailleach come figura localizzata: la tradizione locale lo descrive come il luogo dove la dea si sedette a riposare durante la creazione, e sulla sua sommità si trova un grande cairn di pietre che i pastori dell'isola identificavano come la sua tomba o la sua dimora. John MacCulloch (A Description of the Western Islands of Scotland, 1819) lo visita e registra la tradizione. Il Pass of Brander nel Lochaber — gola stretta e impervia — è il luogo dove la Cailleach avrebbe combattuto l'eroe Diarmuid, e le rocce del passo portano ancora tracce narrative di questo scontro nel folklore locale. La funzione cosmogonico di questi miti è precisa: trasformare ogni elemento del paesaggio in un luogo sacro con storia propria, rendendo il territorio gaelico una mappa teologica vivente.`,

      sub2: `Il ciclo stagionale: Cailleach e Brigid`,
      text2: `Il mito della relazione tra Cailleach e Brigid — la dea-vecchia dell'inverno e la dea-giovane della primavera — è la formulazione celtica del ciclo stagionale più elaborata e teologicamente ricca della tradizione insulare. Le due figure non sono semplicemente opposte ma strutturalmente connesse: alcune tradizioni le presentano come la stessa divinità in due fasi della propria vita ciclica; altre le presentano come rivali in conflitto permanente; altre ancora come due principi cosmici che si alternano nella sovranità dell'anno. La fonte principale è il folklore delle Highlands scozzesi raccolto da Campbell e Carmichael, con paralleli irlandesi documentati nelle versioni della tradizione di Beare.
 
Nella tradizione scozzese più diffusa, il ciclo funziona così: dalla vigilia di Samhain (31 ottobre) la Cailleach prende il bastone e batte la terra per congelare i fiumi e stendere la neve. Governa l'inverno con poteri assoluti. Ma all'avvicinarsi di Imbolc (1° febbraio) Brigid — che la Cailleach tiene imprigionata in una grotta o dentro Ben Nevis — comincia a scaldarsi. A Imbolc, Brigid riesce a fuggire brevemente: il primo giorno di tepore invernale è la sua comparsa. La Cailleach, furiosa, scatena l'ultima tempesta dell'inverno — la "tempesta di Brigid", le nevicate di febbraio-marzo che la tradizione chiama "i giorni di Cailleach". Ma a Beltane (1° maggio) il suo potere cede definitivamente: beve al Pozzo della Giovinezza, si trasforma in giovane donna, e lascia il campo a Brigid per i sei mesi estivi.
 
La struttura duale Cailleach-Brigid ha profonde analogie con altri miti stagionali indoeuropei — Demetra-Persefone nel mondo greco, il ciclo di Freyr e Skadi nel nord germanico, il conflitto Indra-Vritra vedico — ma con una specificità celtica: non è un mito di morte e resurrezione ma di alternanza perpetua senza prevalenza definitiva. Nessuna delle due dèe vince per sempre. Donald Alexander Mackenzie (Scottish Folk-lore and Folk Life, Blackie & Son, 1935) ha analizzato questa struttura come la formulazione religiosa di un paesaggio nord-atlantico in cui le stagioni non sono mai nette e le transizioni sono sempre contestate — dove la neve può cadere a maggio e il sole può splendere a gennaio.`,

      sub3: `Il Lamento della Vecchia di Beare`,
      text3: `Il Caoineadh na Caillí Béara — il "Lamento della Vecchia di Beare" — è uno dei testi poetici più antichi e più studiati della letteratura irlandese, datato al IX secolo e conservato in diversi manoscritti medievali (tra cui il Liber Hymnorum e il Codice di Rawlinson B. 502). È una lirica in prima persona in cui una donna anziana — identificata dalla tradizione con la Cailleach Bhéarra, la dea della penisola di Beara — si lamenta della giovinezza perduta, degli amanti morti, della povertà dell'età. Il testo è stato tradotto e commentato da Gerard Murphy in Early Irish Lyrics (Clarendon Press, 1956) e da Nuala Ní Dhomhnaill come archetipo della poesia femminile gaelica.
 
La complessità del testo sta nella sua natura stratificata: la superficie è cristiana (la vecchia si pente dei peccati mondani e si rifugia nella fede), ma il sostrato è pagano e antico. La Cailleach del poema non è solo una donna vecchia: è una dea che ha amato re dopo re per secoli, che ha visto generazioni di eroi crescere e morire, che ha abitato il paesaggio di Beare da prima che gli uomini lo colonizzassero. Kuno Meyer (Selections from Ancient Irish Poetry, Constable, 1911) ha proposto che il poema conservi frammenti di un canto rituale preceltico attribuito alla dea stessa, poi rielaborato in chiave cristiana da scribi monastici che ne cambiarono il tono ma non riuscirono a eliminare il nucleo pagano. La struttura metrica — il séadna, una delle forme più antiche della poesia irlandese — è coerente con questa datazione alta.
 
Nella tradizione della penisola di Beara il testo è connesso a un sito fisico preciso: An Chailleach Bhéara, una pietra alta circa 1,5 metri su un promontorio della penisola, che la tradizione locale identifica come la dea stessa pietrificata mentre aspettava il ritorno del marito dal mare. La pietra — oggi ancora meta di offerte informali di fiori e oggetti rituali — è il punto di contatto tra il testo letterario e il culto materiale: il lamento del poema è il lamento di questa pietra, la dea che ha scelto di diventare roccia piuttosto che sopravvivere alla perdita di tutti i suoi amanti. La medievalista Máire Ní Mhaonaigh (Brian Boru, Ireland's Greatest King, Tempus, 2007) ha analizzato come questo mito della pietrificazione della dea per dolore sia un tema pan-celtico con paralleli in Galles (le pietre di Blodeuwedd) e in Scozia (le pietre di Fionn).`,

      sub4: `Il Tigh nam Bodach e i riti di Glen Lyon`,
      text4: `Il Tigh nam Bodach — la "Casa del Vecchio" — di Glen Lyon nel Perthshire è probabilmente il santuario pagano più antico e ininterrottamente frequentato delle isole britanniche, e il suo rito annuale connesso alla Cailleach è uno dei casi più documentati di continuità religiosa pre-cristiana in Europa settentrionale. Il sito consiste in una piccola costruzione di pietra a secco, poco più di un metro di altezza, situata in una gola remota della valle di Glen Lyon; al suo interno si trovano tre pietre grezze di forma antropomorfa che la tradizione identifica come la Cailleach, il marito Bodach e la figlia Nighean.
 
Il rituale è semplice e preciso: ogni anno, il 1° maggio (Beltane, l'inizio dell'estate celtica), le tre pietre vengono portate fuori dalla casa di pietra e disposte all'esterno della gola, dove restano per i mesi estivi. Il 1° novembre (Samhain, l'inizio dell'inverno celtico), vengono riportate all'interno e la casa viene chiusa. Il rito è attestato per iscritto dal XVIII secolo (menzione in Thomas Pennant, A Tour in Scotland, 1769) ma è quasi certamente molto più antico: la struttura del rito — la dea che "esce" in estate e "rientra" in inverno — è la traduzione in gesto fisico del mito del ciclo stagionale. Pennant lo documenta come pratica corrente nella comunità locale: non una curiosità antiquaria ma un rito vivo, gestito dai pastori della gola con senso di responsabilità religiosa.
 
Ronald Hutton (The Stations of the Sun, Oxford University Press, 1996) ha analizzato il Tigh nam Bodach come uno dei pochissimi siti britannici in cui si può parlare di continuità rituale veramente ininterrotta tra un culto preistorico e il presente: le pietre sono state spostate ogni anno a Beltane e Samhain senza interruzione documentata. Il rito è tuttora praticato dalla comunità locale e da un piccolo gruppo di custodi informali. John MacInnes, folklorista delle Ebridi, ha registrato nei suoi materiali inediti depositi all'Università di Edimburgo le testimonianze di anziani locali che ricordano il rito come "sempre stato così, da prima che i nonni dei nonni ricordassero". La connessione tra il Tigh nam Bodach e il mito della Cailleach-Brigid è esplicita nella tradizione locale: le pietre non sono semplici oggetti rituali ma la dea stessa nella sua manifestazione invernale, che "riposa" nell'estate protetta dalla casa e "cammina" nell'inverno quando il suo potere è attivo.`,
    },

    versions: [
      {
        era: "Tradizione scozzese — Cailleach Bheur",
        name: "La gigantessa delle Highlands",
        text: "Nella Scozia gaelica la Cailleach è una figura imponente, alta come una montagna, con un solo occhio al centro della fronte (tratto pre-celtico e paneuropeo, condiviso con i Fomori irlandesi e i ciclopi). Governa il tempo atmosferico: una tempesta particolarmente violenta è 'l'ira della Cailleach'; una nevicata fuori stagione è 'il respiro della Cailleach'. Alcune versioni la fanno sposa di un gigante delle rocce, e signora del cervo selvatico: i cervi rossi delle Highlands sarebbero il suo bestiame sacro.",
      },
      {
        era: "Tradizione irlandese — Cailleach Bhéarra",
        name: "La Vecchia di Beare",
        text: "Nell'Irlanda sud-occidentale la dea è centrata sulla penisola di Beara (contea di Cork), con un sito-chiave: An Chailleach Bhéara, una pietra rituale che si dice sia la dea stessa pietrificata dopo aver atteso invano il ritorno del marito dal mare. Il 'Lament of the Old Woman of Beare' (Caoineadh na Caillí, IX sec.) è uno dei più antichi poemi in lingua irlandese, in cui la vecchia si lamenta della gioventù perduta e del tempo che scorre — probabile rielaborazione cristiana di un canto pagano originariamente attribuito alla dea stessa.",
      },
      {
        era: "Isola di Man e Mannin",
        name: "Caillagh ny Groamagh",
        text: "Nell'Isola di Man la dea diventa Caillagh ny Groamagh ('la Vecchia dei Giorni Bui'). È responsabile del tempo atmosferico a Imbolc (1° febbraio): se il 1° febbraio è bello e soleggiato, la Vecchia esce a raccogliere legna, e questo significa che l'inverno sarà lungo perché ha fatto provviste; se il 1° febbraio è brutto, resta in casa — non ha bisogno di scorte, quindi l'inverno finirà presto. È il parallelo esatto del groundhog day americano e del candelora europeo.",
      },
      {
        era: "Relazione con Brigid",
        name: "Il duplice volto della dea",
        text: "La relazione Cailleach-Brigid è uno dei punti teologicamente più interessanti della mitologia celtica. Nella tradizione scozzese delle Highlands, la Cailleach 'beve dal Pozzo della Giovinezza' ogni Beltane e si trasforma in Brigid — oppure imprigiona Brigid dentro Ben Nevis tutto l'inverno, e Brigid emerge a Imbolc. La dualità vecchia/giovane è forse la più antica manifestazione del ciclo divino femminile, antecedente alla trinità vergine/madre/vecchia popolarizzata in epoca moderna.",
      },
    ],
    cult: `I luoghi sacri della Cailleach sono rocce, vette e promontori esposti ai venti atlantici. In Scozia: Beinn na Cailliche (sull'Isola di Skye), Cailleach Point nelle Ebridi, il Pass of Brander nel Lochaber dove la dea avrebbe combattuto contro l'eroe Diarmuid. A Glen Lyon (Perthshire) esiste ancora oggi il Tigh nam Bodach, la "Casa del Vecchio": un piccolo santuario di pietra nella valle in cui tre pietre grezze rappresentano la Cailleach, il marito-Bodach e la figlia Nighean. Ogni 1° maggio le pietre vengono portate fuori dalla casa di pietra (dove trascorrono l'inverno); ogni 1° novembre vi vengono riposte. Il rituale è attestato dal XVIII secolo ed è tuttora praticato — probabilmente uno dei più antichi rituali pagani ininterrotti d'Europa.

In Irlanda il centro di culto è la penisola di Beara, dove si trova An Chailleach Bhéara (la "Vecchia di Beare"), una pietra alta circa 1,5 metri che viene ancora visitata come sito sacro. Offerte di fiori e piccoli oggetti vi si trovano regolarmente.

Il culto della Cailleach non è stato mai sincretizzato completamente nel cristianesimo: rimane tratto pagano sopravvissuto, tollerato come folklore perché troppo legato al paesaggio per essere estirpato.`,
    influence: [
      {
        era: 'La "Dea Madre" preistorica',
        text: "La Cailleach è stata letta dalla scuola archeo-mitologica di Marija Gimbutas come superstite dell'Antica Europa pre-indoeuropea: una dea della terra e della creazione paesaggistica antecedente agli dèi patriarcali celtici. La sua caratteristica di 'cristallizzarsi' nel paesaggio (diventare monte, pietra, promontorio) la lega alla più antica religione megalitica atlantica.",
      },
      {
        era: "Jean Markale e il mito celtico",
        text: "Il celtologo francese Jean Markale ha dedicato alla Cailleach un'intera monografia ('La Femme Celte', 1972), considerandola archetipo chiave della femminilità sacra celtica. La sua interpretazione — talvolta speculativa — ha influenzato il neopaganesimo contemporaneo e il movimento Goddess Spirituality.",
      },
      {
        era: "Folk revival scozzese",
        text: "Nel XX e XXI secolo la Cailleach è diventata simbolo identitario del movimento folk scozzese. Canzoni tradizionali ('The Old Hag', 'Cailleach nan Cnoc'), gruppi di musica celtica (Capercaillie), letteratura (Sorley MacLean, Nan Shepherd). Nan Shepherd nel suo capolavoro 'The Living Mountain' (scritto 1940s, pubblicato 1977) riconosce esplicitamente le Cairngorm come 'corpo della Cailleach', inaugurando un filone di nature writing scozzese contemporaneo.",
      },
      {
        era: "Il climate change e la dea",
        text: "Negli ultimi decenni, con la crescente preoccupazione per il cambiamento climatico nelle Highlands, la figura della Cailleach è stata riattivata come metafora: la 'regina dell'inverno' che sta perdendo il suo regno. Poeti scozzesi contemporanei (Kathleen Jamie, Robin Robertson) ne fanno simbolo di un paesaggio in trasformazione.",
      },
    ],
    texts: [
      {
        title: "Lamento della Vecchia di Beare",
        source: "Caoineadh na Caillí, IX sec., trad. Gerard Murphy (1956)",
        text: "La marea mi porta: / è la bassa marea della vita. / Ormai la mia giovinezza è passata, / e la gioia del corpo. / Vergogna! Mi restano gli ossi. / Mie sono le tre pietre alte / che stanno sulla rupe a testa di capra. / Mio era un tempo il palazzo del re / quando il re mi amava. / Il mare si fa duro, / una marea fredda si alza. / Non ho più né bellezza né vestiti di porpora. / Vecchia sono, e la morte mi cerca.",
      },
      {
        title: "La Cailleach ai monti",
        source:
          "J.F. Campbell, Popular Tales of the West Highlands, vol. IV, 1862",
        text: "Un tempo la Cailleach di Ben Nevis portava un grembiule colmo di pietre. Camminava per le Highlands e ogni tanto le pietre cadevano. Dove cadevano crescevano i monti. Un giorno le si strappò il grembiule su Ross, e tutte le pietre caddero insieme: così nacquero i monti di Sutherland, che sono i più disordinati della Scozia. Poi la dea si sedette su un pendio per riposarsi; e il pendio divenne Beinn na Cailliche, 'il monte della Vecchia', che si vede ancora oggi.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. SCÁTHACH — la Maestra Guerriera di Dún Scáith
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "scathach",
    name: "Scáthach",
    role: "Maestra d'Armi dell'Isola di Skye",
    tags: ["Guerra", "Istruzione", "Shapeshifter", "Skye"],
    epithet: "L'Ombra, Regina Guerriera di Dún Scáith, Custode del Gáe Bolga",
    type: "Divinità",
    chips: ["Isola di Skye", "Ciclo dell'Ulster", "Guerriere", "Ombra"],
    heroColor: "linear-gradient(160deg,#0a0614,#1a1030,#040208)",
    bio: {
      main: `Scáthach — il cui nome significa letteralmente "l'Ombra" (dal gaelico scáth, "ombra, oscurità, riflesso", con il suffisso aggettivale -ach che indica "colei che appartiene all'ombra" o "colei che è fatta di ombra") — è una delle figure più straordinarie e teologicamente originali della mitologia celtica insulare: una dea-guerriera, o donna divinizzata, che dirige la più formidabile scuola d'armi del mondo mitico gaelico. La sua dimora è Dún Scáith, la "Fortezza dell'Ombra", tradizionalmente localizzata sull'Isola di Skye nelle Ebridi scozzesi, in un luogo al di là del mondo ordinario raggiungibile solo attraverso prove soprannaturali. Un rudere medievale sulla costa sud-ovest di Skye (Dunscaith Castle, penisola di Sleat) porta ancora oggi quel nome, riconosciuto dalla tradizione locale come il sito del mito.
 
La genealogia di Scáthach è volutamente incompleta nelle fonti. Non ha genitori esplicitamente nominati nei testi principali — il Tochmarc Emire ("Il Corteggiamento di Emer", Book of Leinster, XII sec.) e la Aided Óenfir Aífe — il che la colloca fuori dalle genealogie divine ordinarie e ne afferma la natura primordiale. Ha una figlia, Uathach ("la Terribile"), che funge da portinaia di Dún Scáith e diventa amante di Cú Chulainn durante il suo addestramento. Ha una sorella-rivale, Aífe — altrettanto guerriera, altrettanto potente — con cui è in perenne conflitto bellico. Alcune fonti tardive le attribuiscono un marito del sídhe, ma questo elemento è marginale: l'identità di Scáthach è definita dalla guerra e dall'insegnamento, non dalla maternità o dall'unione.
 
La funzione cosmica di Scáthach è quella di guardiana e trasmettitrice del sapere guerriero nella sua forma più alta e segreta. Non è una semplice istruttrice di tecniche: insegna conoscenze impossibili da apprendere nel mondo ordinario — il salto del salmone (Léim an Bhradáin, tecnica di balzo acrobatico in battaglia), il colpo del tuono, e soprattutto il Gáe Bolga, la "lancia-saetta" con trenta punte che si aprono dentro il corpo del nemico causando trecento ferite, la cui tecnica di lancio è rituale e precisa (col piede sinistro, da sotto, mentre ci si immerge in un guado). Questi insegnamenti non sono semplicemente tecnici ma iniziatici: chi li riceve accede a un piano di esistenza guerriera che trascende il normale combattimento e sfiora il soprannaturale. Sharon Paice MacLeod (Celtic Myth and Religion, McFarland, 2012) ha analizzato Scáthach come figura iniziatica che incarna il passaggio dall'eroismo potenziale all'eroismo compiuto: solo chi ha studiato a Dún Scáith può essere considerato un campione nel senso pieno del termine.
 
Scáthach non è mortale: è descritta come capace di shapeshifting, di profezia, di viaggiare tra i mondi. Vede il futuro dei discepoli con la stessa chiarezza con cui un esperto di magia gaelica legge un'acqua ferma. La sua immortalità è confermata implicitamente dalla tradizione folklorica dell'Isola di Skye, che la descrive come ancora presente nel Cuillin, la catena montuosa centrale dell'isola, in attesa dei prossimi eroi degni del suo insegnamento.`,

      sub1: `Il viaggio di Cú Chulainn e il ponte magico`,
      text1: `Il racconto del viaggio di Cú Chulainn a Dún Scáith è uno dei più elaborati e narrativamente ricchi del Ciclo dell'Ulster, e la sua struttura è quella del viaggio iniziatico verso la fonte del sapere soprannaturale — un archetipo presente in tutte le grandi tradizioni mitologiche, dalla discesa di Gilgamesh da Utnapishtim al viaggio di Odisseo da Circe, dalla ricerca del Graal alle tradizioni sciamaniche siberiane. La fonte principale è il Tochmarc Emire ("Il Corteggiamento di Emer"), conservato nel Book of Leinster (XII sec.) e nel Book of the Dun Cow (XI sec.), con traduzioni di Kuno Meyer (1890) e A.H. Krappe (1927).
 
Cú Chulainn deve raggiungere Dún Scáith per soddisfare le condizioni impossibili imposte da Forgall Monach, padre di Emer, per concedere la mano della figlia. Il viaggio attraverso le Highlands scozzesi e poi attraverso una zona liminale — né pienamente nel mondo dei vivi né nell'Altro Mondo — è già parte della prova: il cammino è lastricato di ostacoli che selezionano i degni dagli indegni. L'ultimo ostacolo è il Ponte Pericoloso: un ponte che attraversa un abisso le cui proprietà magiche fanno sì che quando un discepolo mette il piede su un'estremità, l'altra si solleva e il viandante precipita. Il testo del Tochmarc Emire descrive Cú Chulainn che tenta il ponte tre volte e tre volte cade — la struttura del tentativo triplicato, tipica della narrativa celtica, che misura la distanza tra l'eroismo sufficiente e quello necessario.
 
Alla quarta prova Cú Chulainn esegue il Léim an Bhradáin — il "salto del salmone", la tecnica acrobatica che non ha ancora appreso ma che esegue istintivamente nell'emergenza — e atterra nel punto esatto di mezzo del ponte, che non può sollevarsi perché il peso è perfettamente bilanciato. Scáthach osserva dalla fortezza e pronuncia il giudizio alla figlia Uathach: "Questo è un vero eroe. Vai a riceverlo." Il momento è teologicamente preciso: Scáthach non viene da lui — è lui che deve arrivare a lei. Il suo compito è riconoscere il degno quando si presenta, non andare a cercarlo. Come Elias che non risponde alle prime chiamate di Samuele, come il Maestro Zen che non insegna finché lo studente non ha dimostrato la domanda autentica, Scáthach attende che l'eroe si riveli attraverso la prova. Il passaggio del ponte è già parte dell'insegnamento.`,

      sub2: `Il Gáe Bolga e i segreti dell'armamento`,
      text2: `L'insegnamento del Gáe Bolga — la "lancia del ventre" o "lancia del sacco" (etimologia dibattuta: bolga potrebbe derivare da bolg, "sacco, ventre", o da belga, una tribù gallica) — è il momento culminante dell'addestramento di Cú Chulainn a Dún Scáith, e l'arma più temibile e cosmologicamente significativa dell'intera mitologia irlandese. La lancia è descritta nel Tochmarc Emire e nell'Aided Óenfir Aífe come un'arma dotata di proprietà soprannaturali: quando è scagliata nel corpo del nemico, le trenta punte si aprono come i petali di un fiore, causando trecento ferite interne tutte mortali. Non può essere estratta dal corpo senza uccidere il ferito — che morirebbe per l'emorragia interna — e non può essere fermata da nessuno scudo o armatura. È un'arma che uccide con certezza assoluta, senza possibilità di sopravvivenza per chi la riceve.
 
La tecnica di lancio è rituale e precisa, e questa precisione è parte integrante dell'insegnamento: il Gáe Bolga si lancia con il piede sinistro, non con la mano destra. Ci si deve trovare in acqua fino alla cintola — in un guado, tipico dei combattimenti dell'Ulster — e si aziona la lancia spingendola con l'alluce sinistro verso l'alto mentre il piede è ancora sommerso. Questa tecnica impossibile — che richiede una coordinazione e una forza del piede che nessun essere umano ordinario possiede — è il segnale che il Gáe Bolga non è un'arma convenzionale ma un dispositivo magico che funziona solo attraverso il corpo del suo portatore come tramite. Kim McCone (Pagan Past and Christian Present in Early Irish Literature, Maynooth Monographs, 1990) ha analizzato il Gáe Bolga come simbolo del potere guerriero che trascende i limiti fisici normali: non è l'arma a essere magica ma la relazione tra l'eroe e l'arma, mediata dall'insegnamento di Scáthach.
 
La tragicità del Gáe Bolga emerge nel racconto dell'Aided Óenfir Aífe ("La Morte del Figlio Unico di Aífe"): Cú Chulainn usa il Gáe Bolga per uccidere Connla, il figlio che ha avuto da Aífe durante il suo soggiorno a Skye, senza riconoscerlo. L'arma che Scáthach gli ha insegnato diventa lo strumento della più grande tragedia della sua vita. Questa ironia — il dono supremo della maestra che si trasforma nello strumento della rovina del discepolo — è la misura della complessità teologica di Scáthach: non è una dispensatrice di potere positivo ma una iniziatrice che conferisce strumenti la cui valenza dipende dal modo in cui vengono usati.`,

      sub3: `La guerra con Aífe e Connla, il figlio non riconosciuto`,
      text3: `Il racconto del conflitto tra Scáthach e Aífe — e della catena di conseguenze che genera nella vita di Cú Chulainn — è uno dei più complessi e tragicamente elaborati dell'intera letteratura gaelica medievale, e la sua fonte principale è l'Aided Óenfir Aífe ("La Morte del Figlio Unico di Aífe"), testo del Ciclo dell'Ulster conservato nel Book of Leinster e nel Yellow Book of Lecan, tradotto da Kuno Meyer in Ériu I (1904).
 
Durante il soggiorno di Cú Chulainn a Dún Scáith, Scáthach è in guerra con sua sorella Aífe, guerriera altrettanto potente che governa un regno adiacente. Cú Chulainn, ancora discepolo ma già mostrante capacità fuori dal comune, propone a Scáthach di combattere Aífe in suo nome. Scáthach — che conosce il futuro del discepolo — cerca di impedirlo: secondo alcune versioni gli dà da bere un sonnifero che lo terrebbe addormentato per ventiquattro ore, tempo sufficiente per risolvere il conflitto senza rischiare la sua vita. Ma Cú Chulainn — figura eroica che sempre eccede il normale — si sveglia dopo un'ora e marcia comunque contro Aífe. Nel duello la sconfigge non con la forza ma con l'astuzia: distrae Aífe gridando "Il tuo carro è caduto nel precipizio, i tuoi cavalli sono morti!" e nel momento in cui lei si volta la disarma e le impone le proprie condizioni. Tra queste condizioni c'è il concepire un figlio con lui.
 
Il figlio nato da questa unione è Connla (o Conlaoch). Cú Chulainn prima di partire impone ad Aífe tre geasa (tabù sacri): che non riveli mai il nome del padre al figlio; che il figlio non si faccia mai da parte per nessun uomo; che non si riveli mai a nessuno. Sette anni dopo, Connla giunge in Irlanda con un anello di riconoscimento che il padre gli ha lasciato, ma i guerrieri dell'Ulster che lo affrontano vengono sconfitti uno dopo l'altro. Cú Chulainn — legato dai geasa di non poter rivelare la propria identità — combatte il figlio sconosciuto, e solo quando lo ha mortalmente ferito con il Gáe Bolga l'anello di riconoscimento svela la verità. Il figlio muore tra le braccia del padre. La tragedia ha la struttura dell'inevitabilità assoluta: ogni gesa imposta da Cú Chulainn per proteggere il figlio diventa la causa della sua morte, e Scáthach — che aveva previsto tutto — non poteva fare altro che insegnargli la tecnica che avrebbe ucciso suo figlio.`,

      sub4: `La profezia finale e il dono dell'ombra`,
      text4: `Al termine dell'addestramento, Scáthach pronuncia una profezia sulla vita futura di Cú Chulainn — un gesto che trasforma il testo chiamato Verba Scáthaige ("Le Parole di Scáthach"), conservato nel Book of the Dun Cow (XI sec.), in uno dei documenti più densi e significativi dell'intera letteratura gaelica. La profezia è un catalogo di battaglie, vittorie, ferite e morte che Cú Chulainn incontrerà nel corso della vita — strutturata nella forma di una kenning poetica, uno stile di enumerazione allusiva tipico della letteratura gaelica arcaica, tradotta da Rudolf Thurneysen in Irische Texte (1904).
 
Il testo profetico nomina la battaglia del guado (il Táin Bó Cúailnge, la grande guerra con il Connacht per il toro bruno), la morte di Ferdia — il migliore amico e compagno di addestramento a Dún Scáith che Cú Chulainn dovrà uccidere nel guado del Ardee — e infine la morte in piedi al pilastro di Muirthemne, quando l'eroe si legherà a una pietra per non cadere da morto davanti ai nemici. Scáthach vede tutto questo come guardando in un'acqua ferma — l'immagine è nel testo — e lo enumera non con compianto ma con la neutralità di chi sa che il destino non può essere cambiato, solo conosciuto.
 
Questa profezia finale ha una funzione teologica precisa: rivela che l'insegnamento di Scáthach non è solo tecnico ma cosmologico. Non ha insegnato a Cú Chulainn come combattere meglio: gli ha dato gli strumenti per compiere il proprio destino, che include sia le vittorie più grandi sia le sconfitte più devastanti. Il "dono dell'ombra" — il dono di Scáthach, la dea che si chiama "l'Ombra" — è la conoscenza completa del proprio cammino, incluso il suo epilogo. Jean-Pierre Vernant (Mito e tragedia nell'antica Grecia, Einaudi, 1976) ha analizzato la struttura della profezia come motore del tragico nei miti eroici greci; la stessa struttura vale per la profezia di Scáthach: Cú Chulainn sa cosa lo attende, e questa conoscenza non gli permette di evitarlo ma gli dà la dignità di affrontarlo consapevolmente. Il padre di Antigone è il padre di un eroe che ha studiato dall'ombra stessa.`,
    },

    versions: [
      {
        era: "Tochmarc Emire (Ciclo dell'Ulster, IX sec.)",
        name: "L'istruttrice di Cú Chulainn",
        text: "Il testo principale che parla di Scáthach è il Tochmarc Emire ('Il Corteggiamento di Emer'), IX sec. Cú Chulainn vuole sposare Emer, ma il padre di lei Forgall Monach pone condizioni impossibili: deve prima andare a Skye per apprendere da Scáthach. Cú Chulainn attraversa l'oceano, raggiunge Dún Scáith passando attraverso un ponte magico che si alza sotto i piedi di chi non è degno, e si presenta a Scáthach. Per un anno e un giorno apprende da lei tutte le tecniche guerriere, inclusa quella del salto del salmone (Léim an Bhradáin) e del colpo col tuono.",
      },
      {
        era: "Aided Óenfir Aífe",
        name: "Il tradimento di Aífe e il figlio non riconosciuto",
        text: "Durante l'addestramento a Skye, Scáthach è in guerra con sua sorella Aífe. Cú Chulainn propone di combattere Aífe in duello per conto della maestra. La sconfigge e la costringe a giacere con lui — da questa unione nasce Connla. Per un giuramento imposto ad Aífe, Cú Chulainn non potrà rivelarsi come padre. Sette anni dopo Connla verrà in Irlanda con un segno di riconoscimento (un anello), e Cú Chulainn — legato dal giuramento — lo ucciderà senza riconoscerlo. È una delle più strazianti tragedie della letteratura gaelica.",
      },
      {
        era: "Tradizione folklorica dell'Isola di Skye",
        name: "La dimora immortale",
        text: "Il folklore dell'Isola di Skye conserva memoria di Scáthach fino al XX secolo. I pescatori locali indicavano il rudere di Dunscaith Castle come 'Dún Scáith della regina guerriera'. Una leggenda dice che Scáthach non sia mai morta: dorme ancora nelle profondità del Cuillin — la catena montuosa centrale di Skye — e tornerà quando un vero campione verrà da lei.",
      },
      {
        era: "Modernità e cultura pop",
        name: "La guerriera archetipica",
        text: "Scáthach è riemersa con forza nella cultura pop tra fine XX e XXI sec.: è personaggio centrale in 'Fate/Grand Order' (videogame giapponese) dove incarna l'archetipo della maestra guerriera; appare in Marvel Comics come Scathach; in Neil Gaiman e altri autori fantasy; in decine di romanzi di young adult celtici. La sua figura ha colpito l'immaginario come 'l'amazzone celtica', parallela per funzione alle guerriere scita-sarmate storiche.",
      },
    ],
    cult: `Dunscaith Castle (Dún Scáith), sulla costa sud-ovest dell'Isola di Skye (penisola di Sleat), è il sito archeologico associato a Scáthach. Il rudere visibile oggi è di epoca medievale (XIII-XIV sec.) costruito probabilmente dai Mac Donald, ma si erge su un promontorio che la tradizione gaelica locale identifica fin dal Medioevo con la mitica fortezza. Il nome "Dún Scáith" è attestato nei testi irlandesi medievali, dunque il toponimo è anteriore al castello materiale.

Il Cuillin — la drammatica catena montuosa centrale di Skye, una delle più impervie della Scozia — è la "terra di Scáthach" per eccellenza. Il Loch Coruisk, lago glaciale ai piedi del Cuillin, è descritto nella tradizione come il luogo dove Scáthach si ritirava per praticare la magia.

In epoca moderna, Dún Scáith è luogo di pellegrinaggio culturale: lo visitano praticanti di arti marziali celtiche contemporanee (SCA, HEMA con interesse celtico), appassionati di mitologia gaelica, e — curiosamente — molti fan giapponesi del franchise 'Fate/Grand Order'.`,
    influence: [
      {
        era: "L'archetipo dell'amazzone gaelica",
        text: "Scáthach è il membro più celebre di una piccola ma potente categoria mitologica: le donne guerriere gaeliche che addestrano gli eroi. Insieme a Aífe e a Liath Luachra (che allena Fionn), forma una triade di maestre d'armi femminili che non hanno paralleli nelle altre mitologie indoeuropee occidentali. Alcune studiose (Sharon Paice MacLeod, Dorothy Carrington) hanno ipotizzato che queste figure riflettano memorie di un matriarcato militare pre-celtico nelle isole atlantiche.",
      },
      {
        era: "Il viaggio iniziatico oltremare",
        text: "Il motivo del 'giovane eroe che attraversa il mare per addestrarsi presso la maestra sovrannaturale' è archetipico ed è passato in molte tradizioni successive. Alcuni studiosi (Jean Markale) hanno visto in Scáthach il modello arcaico della 'Dama del Lago' arturiana che addestra Lancillotto: stessa funzione iniziatica, stesso ambiente acquatico-insulare.",
      },
      {
        era: "Neopaganesimo femminista",
        text: "Nel movimento Goddess Spirituality contemporaneo Scáthach è una delle divinità celtiche più popolari, reinterpretata come simbolo di 'femminile guerriero'. La sua immagine ha circolato ampiamente nelle comunità Wicca e Reclaiming dagli anni '90.",
      },
      {
        era: "Cultura popolare giapponese",
        text: "Paradossalmente, la maggior diffusione moderna di Scáthach come personaggio avviene attraverso la cultura pop giapponese. In 'Fate/Grand Order' è tra i personaggi più popolari dal 2015; ispira cosplay, fan art, merchandise globale. L'Isola di Skye registra un aumento di visitatori giapponesi che chiedono specificamente di Dún Scáith.",
      },
    ],
    texts: [
      {
        title: "L'arrivo di Cú Chulainn a Dún Scáith",
        source:
          "Tochmarc Emire, Book of Leinster, XII sec., trad. Kuno Meyer (1890)",
        text: "Cú Chulainn giunse alla fine alla terra delle Scáthach. Vide davanti a sé un ponte che attraversava l'abisso, e i discepoli che vi passavano sopra. Ma quando un discepolo metteva il piede su un'estremità, l'altra estremità si alzava improvvisamente, e il discepolo precipitava. Cú Chulainn tentò tre volte e tre volte cadde. Alla quarta volta fece il salto del salmone — la tecnica che non conosceva ancora — e atterrò nel mezzo del ponte, che non poté alzarsi. Scáthach lo vide dalla fortezza e disse alla figlia Uathach: 'Questo è un vero eroe. Vai a riceverlo.'",
      },
      {
        title: "La profezia di Scáthach",
        source:
          "Verba Scáthaige ('Le Parole di Scáthach'), Book of the Dun Cow, XII sec., trad. Rudolf Thurneysen",
        text: "Scáthach pose la mano sulla spalla di Cú Chulainn e profetizzò la sua vita: 'Grande vittoria sul ford settentrionale; il toro bruno dell'Ulster in fuga; mille colpi nella notte di battaglia; ferite mortali, ma non immediate; acqua di palma versata; la Morrígan in veste di corvo; e infine la cintura al pilastro — la morte in piedi a Muirthemne.' Così parlò Scáthach, 'l'Ombra', vedendo nel futuro di Cú Chulainn come guardando un'acqua ferma.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. MANANNÁN MANNESE — il Patrono dell'Isola di Man
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "manannan-mannese",
    name: "Manannán (mannese)",
    role: "Patrono e Re Mitico dell'Isola di Man",
    tags: ["Isola di Man", "Tynwald", "Nebbia", "Identità nazionale"],
    epithet: "Manannán Beg mac y Leirr — il Piccolo Manannán figlio del Mare",
    type: "Divinità",
    chips: ["Isola di Man", "Mannese", "Tynwald", "Folklore insulare"],
    heroColor: "linear-gradient(160deg,#081624,#12395c,#040814)",
    bio: {
      main: `Manannán mac Lir — "Manannán figlio del Mare" (da mac, "figlio", e Lir, "mare" o "oceano", con il significato letterale di "Figlio dell'Oceano") — è una delle figure divine più antiche e geograficamente estese dell'intero pantheon celtico insulare, presente in forma distinta ma correlata nella tradizione irlandese, scozzese e mannese. Questa scheda tratta specificamente la manifestazione mannese del dio, che l'Isola di Man conosce come Manannán Beg mac y Leirr — "Il Piccolo Manannán figlio del Mare", dove Beg ("piccolo" in mannese) non è diminutivo peggiorativo ma appellativo di affettuosa intimità, il dio-padre ancestrale che si fa vicino alla sua gente.
 
La genealogia di Manannán nella tradizione mannese è semplice e diretta: è figlio del Mare stesso — non di una divinità marina ma dell'oceano come principio cosmico. Questa genealogia lo distingue dalla versione irlandese, dove Lir è un personaggio mitico relativamente secondario nel pantheon dei Tuatha Dé Danann: nella versione mannese, il padre è l'elemento stesso, non una persona. Non ha sposa nominata nella tradizione principale, non ha figli documentati nel corpus mannese (le figure come Mongán mac Fiachnai che in Irlanda sono dette sue figlie non compaiono nel folklore dell'isola). Questo isolamento genealogico lo rende ancora più simile a una divinità primordiale che a un membro di un pantheon strutturato: Manannán mannese è solo, come il mare è solo.
 
La funzione cosmica di Manannán nell'Isola di Man è quella del re-fondatore, del patrono e protettore che ha scelto l'isola come propria residenza e popolo come propria gente. Fu il primo re dell'isola, insegnò ai mannesi l'arte della navigazione, della pesca, dell'agricoltura e della magia. La sua forma di protezione è la nebbia: quando sente avvicinarsi nemici dal mare, solleva il suo mantello magico e lo stende sopra l'isola, che diventa invisibile alle flotte invasore. La nebbia improvvisa che si alza spesso nel Mar d'Irlanda — fenomeno meteorologico reale e frequente — è chiamata ancora oggi dai pescatori mannesi "Il Mantello di Manannán" (Manannán's Cloak). Dopo secoli di regno visibile, si ritirò sulla vetta più alta dell'isola, Snaefell, dove "dorme" pronto a risvegliarsi nei momenti di pericolo.
 
Il suo simbolo nazionale — la triskele delle tre gambe armate, ny tree cassyn in mannese — non ha paralleli diretti nell'iconografia irlandese o scozzese del dio e rappresenta una elaborazione mannese originale. Il motto associato allo stemma, Quocunque jeceris stabit ("Dovunque la getti, sta in piedi"), ha la struttura di una formula magica che richiama la capacità del dio-mago di ristabilire l'equilibrio in qualsiasi condizione. Il tributo annuale — un fascio di giunchi verdi portato sulla cima del monte Barrule ogni vigilia di mezzestate — è attestato per iscritto dal XVIII secolo e probabilmente risale all'epoca pre-cristiana: non oro, non animali, non sangue, ma giunchi — le piante dei bordi dell'acqua, il confine tra terra e mare dove Manannán abita.`,

      sub1: `Il mantello di nebbia e la protezione dell'isola`,
      text1: `Il mito del mantello di Manannán è il racconto fondativo dell'identità insulare mannese: la storia che spiega perché l'Isola di Man sia sopravvissuta come entità politica e culturale autonoma nonostante la sua posizione geografica al centro del Mar d'Irlanda, esposta alle pressioni di Irlanda, Scozia, Galles e Inghilterra. La fonte principale è la Manannan Ballad, il lungo canto tradizionale mannese trascritto per la prima volta nel XVIII secolo e raccolto sistematicamente da George Broderick in Handbook of Late Spoken Manx (University of Tübingen, 1984); varianti narrative in prosa sono in Walter Gill (A Manx Scrapbook, Arrowsmith, 1929) e Arthur Moore (The Folk-lore of the Isle of Man, D. Nutt, 1891).
 
Il funzionamento del mantello è descritto con precisione nelle versioni più elaborate: Manannán, seduto sulla vetta di Snaefell o di South Barrule, osserva continuamente il mare in tutte le direzioni. Quando intravede una flotta ostile avvicinarsi, solleva il suo mantello magico — descritto in alcune versioni come blu-grigio, del colore della nebbia atlantica — e lo agita sopra l'isola. La nebbia scende immediatamente, fitta e improvvisa, rendendo l'isola invisibile ai navigatori nemici. Walter Gill (1929) documenta come i pescatori di Peel e Port St Mary usassero ancora nella prima metà del XX secolo l'espressione "Manannán ha steso il mantello" ogni volta che una nebbia improvvisa rendeva pericolosa la navigazione, e come questa espressione non fosse sentita come metafora ma come spiegazione causale.
 
La connessione tra questa tradizione e la storia politica reale dell'isola è notevole: l'Isola di Man ha mantenuto uno statuto di autonomia insolito per una territorio delle sue dimensioni — non è parte del Regno Unito in senso pieno, ha il proprio parlamento (il Tynwald, il più antico d'Europa ancora in funzione), la propria legge e la propria moneta. Il mito del mantello di Manannán è la narrazione sacra di questa autonomia: non è la fortuna politica né la forza militare che ha protetto l'isola, ma la fedeltà al proprio re ancestrale e la sua fedeltà reciproca. A.W. Moore (A History of the Isle of Man, Fisher Unwin, 1900) ha documentato come la tradizione del mantello fosse ancora viva nella coscienza politica mannese del XIX secolo come argomento di identità nazionale.`,

      sub2: `Il tributo dei giunchi e il Tynwald`,
      text2: `Il rito del tributo annuale a Manannán — un fascio di giunchi verdi portato sulla cima del monte Barrule (South Barrule, 483 m, il secondo monte più alto dell'isola) ogni vigilia di mezzestate — è uno dei riti pre-cristiani meglio documentati delle isole britanniche, e la sua connessione con le cerimonie del Tynwald (il parlamento mannese) costituisce uno dei casi più affascinanti di continuità tra ritualità pagana e istituzioni politiche moderne. Le fonti principali sono la Manannan Ballad (XVIII sec., raccolta da Broderick 1984), il Manx Miscellany di Caesar Caine (1913) e i resoconti parlamentari del Tynwald Day dal XVII sec.
 
Il tributo è descritto nella Manannan Ballad con una specificità che rivela la sua antichità: non oro, non bestiame, non grano — ma giunchi verdi freschi (luss, in mannese). I giunchi crescono lungo i bordi dell'acqua, al confine tra la terra ferma e l'elemento liquido che è il dominio di Manannán. Portare giunchi sulla vetta del monte — dal bordo dell'acqua alla cima della terra — è un gesto che riunisce i due regni del dio in un atto di omaggio. La ballata dice esplicitamente che Manannán "spandeva i giunchi su Barrule" — li distribuiva sulla collina come segno di possesso e benedizione. Il rito di portare giunchi al monte in cambio della protezione del re ancestrale è la versione mannese della relazione fondamentale tra divinità e comunità in molte tradizioni: il tributo che mantiene attivo il patto cosmico.
 
Il Tynwald Day — il 5 luglio, cerimonia annuale in cui il parlamento mannese si riunisce sul Tynwald Hill (un tumulo artificiale a terrazze a St John's) per proclamare le leggi dell'anno passato nelle due lingue dell'isola — conserva elementi rituali che gli antiquari del XVIII e XIX secolo hanno riconosciuto come pre-cristiani. La processione circolare intorno al tumulo, la distribuzione rituale di erbe sul sentiero percorso dai deputati, la proclamazione in mannese prima che in inglese sono tutti elementi che Ronald Hutton (The Stations of the Sun, Oxford University Press, 1996) ha identificato come possibili sopravvivenze di un rito assembleare pre-cristiano associato al culto di Manannán. La tradizione locale attribuisce l'istituzione del primo Tynwald al dio stesso: sarebbe stato Manannán a stabilire le regole dell'assemblea giudiziaria mannese, rendendo ogni riunione successiva una ripetizione del gesto fondativo del re ancestrale.`,

      sub3: `La triskele, i tre salti e il simbolo nazionale`,
      text3: `Il simbolo nazionale dell'Isola di Man — le tre gambe armate in configurazione triskele, ny tree cassyn ("le tre gambe") in mannese — è uno degli stemmi nazionali più riconoscibili d'Europa e uno dei più antichi ancora in uso, attestato dall'XI secolo nell'iconografia mannese e adottato ufficialmente nel XIII secolo dai re dell'isola sotto la dinastia Crovan. Il suo collegamento con Manannán — non certo filologicamente ma solidamente radicato nella tradizione popolare — costituisce uno dei punti più interessanti dell'iconografia religiosa mannese.
 
La tradizione popolare, documentata da Gill (1929) e Moore (1891), narra che la triskele rappresenti i tre balzi di Manannán attraverso l'isola: il dio-mago che in tre salti cosmici percorre l'intera estensione del territorio, rivendicandolo come proprio. Questa lettura — che trasforma un simbolo geometrico in un'immagine narrativa del patrono — è difficile da datare con precisione ma è coerente con la funzione di Manannán come garante dell'integrità territoriale dell'isola. Il motto che accompagna la triskele negli stemmi ufficiali mannesi — Quocunque jeceris stabit, "Dovunque la getti, sta in piedi", in latino medievale — ha la struttura di una formula magica di stabilità e resilienza che richiama direttamente il potere del dio-mago: qualunque cosa Manannán "getti" (il suo mantello, la sua protezione, la sua presenza) rimane stabile e salda.
 
Il simbolo della triskele ha distribuzioni geografiche che vanno ben oltre l'Isola di Man: si trova in Sicilia (Trinacria, con analoga struttura a tre gambe), in Irlanda (prevalentemente in contesti pre-cristiani come le incisioni di Newgrange), nella cultura celtica continentale del periodo la Tène. Philip Bernhardt-House (Totems and Taboos: A History of the Celtic Triskele, 2003) ha proposto che la triskele celtica derivi da un simbolo solare pre-indoeuropeo connesso al movimento rotatorio del sole, reinterpretato in ogni tradizione locale secondo il proprio pantheon. Nella versione mannese, questa reinterpretazione ha fissato il simbolo cosmico sul corpo narrativo di Manannán — il re del mare che percorre l'isola in tre balzi — creando uno dei casi più eleganti di sincretismo iconografico nella storia delle religioni atlantiche.`,
    },

    versions: [
      {
        era: "Tradizione folklorica mannese",
        name: "Il re che avvolge l'isola di nebbia",
        text: "La tradizione popolare mannese descrive Manannán come un re-mago vestito di un mantello magico. Quando sente venire nemici dal mare, solleva il mantello e lo stende sopra l'isola: una nebbia improvvisa e fitta la rende invisibile. Per questo — dice il folklore — l'Isola di Man ha resistito per secoli a molte invasioni che hanno travolto la vicina Irlanda e Scozia. Le nebbie improvvise del Mar d'Irlanda sono ancora oggi chiamate 'Manannán's Cloak' dai pescatori.",
      },
      {
        era: "Il Tynwald — il parlamento millenario",
        name: "Il dio e il rito politico",
        text: "Il Tynwald è il parlamento dell'Isola di Man — l'assemblea legislativa più antica d'Europa ancora in funzione, attestata dal 979 d.C. Si riunisce ogni 5 luglio (Tynwald Day) sul Tynwald Hill, tumulo artificiale a tre o quattro terrazze situato a St John's. Le cerimonie conservano elementi che gli antiquari riconoscono come pre-cristiani: la proclamazione delle leggi nelle due lingue (mannese e inglese), la distribuzione rituale di erbe sul sentiero, la processione circolare. La tradizione locale attribuisce l'origine del rituale a Manannán stesso, che avrebbe istituito la prima assemblea giudiziaria mannese.",
      },
      {
        era: "La triskele e lo stemma",
        name: "Il simbolo nazionale",
        text: "Il simbolo dell'Isola di Man — le tre gambe armate in configurazione triskele (ny tree cassyn, 'le tre gambe' in mannese) — è attestato dal XIII secolo ed è simbolo nazionale ufficiale. Il folklore locale lo collega a Manannán: sarebbe un simbolo solare del dio, o la raffigurazione stilizzata del suo 'salto' magico (si diceva che Manannán potesse attraversare l'isola in tre balzi). Il motto mannese associato al simbolo — 'Quocunque jeceris stabit' ('Dovunque la getti, sta in piedi') — conferma la dimensione magica dell'emblema.",
      },
      {
        era: "Canti tradizionali — Manannan Ballad",
        name: "La ballata del primo re",
        text: "La 'Manannan Ballad' (Mannese: 'Manannan Beg mac y Leirr') è un lungo canto tradizionale mannese trascritto per la prima volta nel XVIII secolo. Narra la storia del primo re dell'isola, del suo regno prospero, dell'arrivo del Cristianesimo con San Patrizio e della conseguente cessazione del culto. Un passaggio celebre recita: 'Pagavano a Manannán il loro affitto / un fascio di giunchi verdi ogni anno / alla vigilia di mezz'estate — / giunchi che lui spandeva su Barrule'. Il 'Barrule' è il monte sacro dell'isola.",
      },
    ],
    cult: `Il centro del culto di Manannán è il South Barrule, il secondo monte più alto dell'isola (483 m), che la tradizione popolare indica come sua residenza. La tradizione del tributo — un fascio di giunchi freschi portato sulla cima ogni vigilia di mezz'estate — è attestata per iscritto dal XVII secolo ma è probabilmente molto più antica. Il rito è stato rivitalizzato negli ultimi decenni da gruppi di revival culturale mannese.

Il Tynwald Hill (Cronk-y-Keeillown, "Collina della Chiesetta di San Giovanni"), sito dell'assemblea parlamentare del 5 luglio, è centro rituale-politico connesso al culto di Manannán. Le cerimonie del Tynwald Day conservano elementi arcaici: una processione di giudici e deputati sale al tumulo, le leggi dell'anno sono proclamate pubblicamente, viene distribuito simbolicamente pane — rito forse derivato da offerte votive pre-cristiane.

Snaefell ("Monte della Neve"), la vetta più alta dell'isola (621 m), è il luogo dove Manannán 'dorme'. Nel folklore popolare è sede di profezie: salire al monte a mezzanotte di Samhain dava la possibilità di 'vedere' il futuro, perché il velo del dio-mago si diradava.`,
    influence: [
      {
        era: "Identità culturale mannese contemporanea",
        text: "Manannán è il più importante simbolo dell'identità culturale mannese. Appare nella toponomastica (Port St Mary/Port le Murray, Peel/Perrik), nella numismatica (monete commemorative dell'isola), nell'arte pubblica (la scultura 'Manannan's Cloak' del 2009 a Peel), nel logo del governo, nel nome di navi traghetto ('Manannan' è il nome del fast ferry Isle of Man-Liverpool dal 2009).",
      },
      {
        era: "Il mannese — la lingua risorta",
        text: "Il mannese (gaelico-mannese) era considerato estinto nel 1974 (morte dell'ultimo parlante nativo Ned Maddrell), ma è stato rivitalizzato attraverso sforzi di recupero culturale. Oggi ci sono scuole mannesi-medium e circa 1.800 parlanti. Il recupero della lingua è andato di pari passo con il recupero del folklore di Manannán — che era il contenuto culturale più denso del mannese tradizionale.",
      },
      {
        era: "Tynwald Day e democrazia antica",
        text: "Il Tynwald Day attira ogni anno migliaia di visitatori internazionali come 'il più antico parlamento d'Europa'. Le cerimonie, con elementi riconosciuti come pre-cristiani connessi al culto di Manannán, sono oggetto di studio di antropologi politici: rappresentano uno dei rari casi europei di continuità ininterrotta tra ritualità pagana e istituzioni politiche moderne.",
      },
      {
        era: "Cultura pop e fantasy",
        text: "Manannán mannese appare in numerosi romanzi fantasy che pescano dal folklore celtico insulare (Neil Gaiman in 'American Gods', Susan Cooper nel ciclo 'The Dark is Rising'). La sua specificità mannese — distinta da quella irlandese — è stata riscoperta e valorizzata dal XXI secolo in cultura pop.",
      },
    ],
    texts: [
      {
        title: "La Manannan Ballad — strofa di apertura",
        source:
          "Traslitterazione del XVIII sec. dal mannese, raccolta da George Broderick (1984)",
        text: "Sentite, riguarda Manannán Beg mac y Leirr, / un gran mago del mare / che seppe l'isola dagli altri difendere: / coprivala di nebbia, quando invadere / la volevano uomini di Norvegia o d'altrove. / Pagavano a lui i mannesi l'affitto / un fascio di giunchi verdi / alla vigilia di mezz'estate, / e i giunchi lui spandeva su Barrule. / Sedeva sopra quel monte in trono, / vedeva ogni nave, governava il mare / e la sua fama non mai si spegne / finché mannesi parlano mannese.",
      },
      {
        title: "Il mantello di Manannán nella nebbia",
        source: "Walter Gill, A Manx Scrapbook (1929)",
        text: "I pescatori di Peel e di Port St Mary — ancora nel 1920, quando raccolsi queste voci — chiamavano 'Manannán's Cloak' la nebbia improvvisa che si alza sul mare a est dell'isola. Dicevano: 'Quando il mantello cala, i nemici non trovano la strada.' Una donna di Cregneash mi raccontò che suo nonno, in barca nel 1890, era stato sorpreso da una di queste nebbie così fitta che non vide la costa per sei ore; e quando si diradò, si trovò esattamente davanti al suo molo. 'Fu Manannán', disse. 'Mio nonno non morì in mare perché il re antico lo protesse.'",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     4. I SELKIE — i Popoli-Foca
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "selkie",
    name: "I Selkie",
    role: "Popoli-Foca delle Ebridi e delle Orcadi",
    tags: ["Foche", "Shapeshifter", "Mare", "Tragedia romantica"],
    epithet:
      "Maighdeann-ròin in gaelico — le Donne-Foca che dimettono la pelle",
    type: "Divinità",
    chips: ["Ebridi", "Orcadi", "Shetland", "Shapeshifter"],
    heroColor: "linear-gradient(160deg,#0a1828,#1a3850,#040814)",
    bio: {
      main: `I Selkie — nome scozzese derivato dal vecchio inglese selch o sealch, "foca", con il diminutivo affettuoso -ie tipico del dialetto scots (selkie, silkie, sylkie nelle varianti orcadese e shetlandese) — sono esseri soprannaturali del folklore delle isole scozzesi settentrionali (Ebridi, Orcadi, Shetland) e della costa nord-occidentale dell'Irlanda. Non sono divinità nel senso tecnico del termine — non creano il mondo, non governano forze cosmiche, non ricevono culto sacerdotale — ma creature intermedie, una razza soprannaturale autonoma che abita la zona di confine tra il mondo umano e quello marino: popolo che vive sotto le onde nella forma di foche, con la capacità di spogliarsi della pelle per apparire in forma umana sulla riva. In gaelico scozzese sono detti Ròn (la parola ordinaria per "foca") o più specificamente Maighdeann-ròin ("donzella-foca") per le femmine; in norn — il dialetto scandinavo delle Orcadi e Shetland, oggi estinto — sono Finfolk nelle versioni più arcaiche, Silkie nelle versioni successive.
 
La struttura tipologica dei Selkie li colloca in una categoria che la folkloristica comparata chiama "bride from the wild" o "animal bride": esseri di natura non-umana che assumono temporaneamente forma umana e si trovano in contatto con il mondo degli uomini attraverso un elemento materiale che media tra le due nature (la pelle di foca, che è al tempo stesso il corpo animale e l'abito magico). La detenzione forzata di questo elemento è la struttura narrativa fondamentale del mito: chi trattiene la pelle trattiene la selkie. Katherine Briggs (A Dictionary of Fairies, Allen Lane, 1976) ha classificato i Selkie come appartenenti alla categoria più ampia dei "seal-folk", distinti dalle "mermaids" (sirene) per la loro natura anfibica e la loro capacità di esistere pienamente sia in acqua sia sulla terra.
 
La genealogia dei Selkie nella tradizione gaelica più elaborata — raccolta da John Francis Campbell (Popular Tales of the West Highlands, vol. IV, 1862) e da Alexander Carmichael (Carmina Gadelica, 1900) — li fa discendere dai Fomori, gli esseri primordiali del mondo pre-celtico irlandese, o dai Tuatha Dé Danann caduti: gli dèi sconfitti dagli invasori Milesi che si ritirarono nel mare e sotto la terra, trasformandosi nella razza del sídhe marino. Questa genealogia divina — che non è presente nelle versioni orcadesi e shetlandesi, dove i Silkie hanno un'origine più vagamente soprannaturale — conferisce alla versione gaelica dei Selkie una densità teologica assente nelle versioni nordiche: non sono semplicemente creature magiche, sono la memoria dei dèi perduti.
 
I Selkie maschi e femmine hanno funzioni narrative distinte. Le selkie femmine sono catturate: la loro storia è sempre quella della pelle rubata, del matrimonio forzato, dell'adattamento tormentato e della fuga finale. I selkie maschi vengono sulla riva di propria iniziativa per sedurre donne umane insoddisfatte — vedove, mogli di mariti assenti o crudeli — in unioni brevi, intense e conseguenti: il figlio nato dal selkie è sempre segnato dall'elemento marino, tendente al mare sin dall'infanzia, destinato a tornare prima o poi all'elemento del padre.`,

      sub1: `La pelle rubata e il matrimonio forzato`,
      text1: `Il mito della pelle rubata — il nucleo narrativo che tutte le versioni del mito Selkie condividono — è una delle strutture narrative più costanti e geograficamente diffuse del folklore eurasiatico nord-atlantico, con paralleli nelle ragazze-cigno germaniche e scandinave (Schwanenmädchen), nelle fox-wives giapponesi (kitsune), nelle selkie islandesi (kópakonan) e nelle figure analoghe della tradizione inuit. La versione gaelica è quella raccolta più sistematicamente da Campbell (1860-62) e da Carmichael (1900), con varianti documentate da Eric Linklater (The Man on My Back, Macmillan, 1941) per le Orcadi e da Jessie Saxby (Shetland Traditional Lore, Grant, 1932) per le Shetland.
 
La struttura del mito è sempre la stessa nella sua tripartizione: visione (il pescatore che osserva le selkie danzare sulla spiaggia al chiaro di luna), furto (la pelle nascosta mentre le selkie erano in forma umana), coercizione (la selkie senza pelle non può tornare al mare e accetta il matrimonio). La versione raccolta da Campbell da un narratore di Lewis descrive il matrimonio con una concretezza che rivela quanto fosse sentito come psicologicamente reale dalla comunità: la selkie diventa moglie efficiente, madre amorevole, compagna capace; ma c'è sempre qualcosa — gli occhi che guardano il mare, il modo di muoversi nell'acqua piovana, la malinconia improvvisa nelle giornate di libeccio — che la separa dalle donne nate sulla terra.
 
Il ritorno al mare è innescato quasi sempre dal ritrovamento accidentale della pelle, spesso da parte di un figlio innocente che non capisce il significato di ciò che ha trovato. Questo elemento narrativo ha una precisione psicologica che Clarissa Pinkola Estés (Women Who Run with the Wolves, Rider, 1992) ha analizzato come uno dei momenti più potenti della letteratura mitologica femminile: è il figlio — il frutto del matrimonio forzato, la persona più amata — che inconsapevolmente libera la madre dall'oppressione. La selkie non ha altra scelta che partire: la pelle è la sua natura, e rifiutarla sarebbe la morte. L'abbraccio finale ai figli prima di entrare in mare è il momento di massima intensità emotiva del mito, e le varianti locali lo descrivono con dettagli diversi ma uguale carica: alcuni narrano di una foca che nuota periodicamente vicino alla riva dove i figli giocano, riconoscibile per un segno particolare.`,

      sub2: `Il selkie maschio e il figlio del mare`,
      text2: `La versione maschile del mito Selkie è strutturalmente speculare a quella femminile ma emotivamente distinta: mentre la selkie femmina è una vittima (della pelle rubata, del matrimonio forzato), il selkie maschio è un agente che sceglie di venire sulla riva. Questa asimmetria non riflette una valutazione morale ma una logica narrativa diversa: il selkie maschio rappresenta il desiderio che viene dall'elemento selvaggio verso il mondo umano, non il desiderio umano di possedere il selvaggio. Le fonti principali sono le ballate delle Orcadi e Shetland, in particolare The Great Silkie of Sule Skerry (Child Ballad 113, raccolta nella seconda metà del XIX sec.) e varianti in prosa raccolte da Saxby (1932) e da J.M.E. Saxby (Vikings of the Dawn, Blackie, 1891).
 
Il selkie maschio viene sulla riva di notte, di preferenza nelle giornate di vento e pioggia quando la distinzione tra i due mondi è più sottile. Si presenta a donne sole — vedove di pescatori, mogli di uomini partiti in mare da mesi, donne insoddisfatte delle loro vite terrestri — in forma umana di straordinaria bellezza, sempre con i capelli umidi e gli occhi di un colore indefinito tra il grigio e il verde. L'incontro è breve (una notte, raramente più) ma intenso; il selkie poi scompare tornando in mare, lasciando la donna incinta. Non c'è inganno nella versione maschile del mito: il selkie non mente sulla propria natura, non promette ciò che non può mantenere. Il folklore orcadese, raccolto da Linklater, descrive alcuni selkie maschi che tornano periodicamente dalla stessa donna per anni — non per possederla ma per vedere il figlio.
 
I figli nati da queste unioni portano segni della doppia natura: pelle più grigia del normale, un leggero strato di peluria corta che scompare nell'adolescenza, membrane tra le dita dei piedi (in alcune varianti), capacità natatorie fuori dal comune fin da bambini. Più di ogni altra cosa, provano un'attrazione irresistibile verso il mare fin dalla primissima infanzia: anche prima di capire perché, si siedono sulla riva a guardare le onde per ore. Quando crescono, l'attrazione diventa insostenibile: molti di loro, raggiunta l'età adulta, entrano in mare un giorno e non tornano — riassorbiti dall'elemento del padre che non hanno mai conosciuto. Le comunità costiere delle Ebridi, Orcadi e Shetland mantenevano fino al XX secolo l'abitudine di identificare certi caratteri fisici (il colore degli occhi, le orecchie piccole e ravvicinate, la tendenza al nuoto) come "segni del selkie" in un neonato.`,

      sub3: `The Great Silkie di Sule Skerry e il destino fatale`,
      text3: `The Great Silkie of Sule Skerry (Child Ballad 113) è la più celebre e letterariamente elaborata delle ballate Selkie, e il suo fatalismo nordico — l'ineluttabilità della morte che il padre-selkie annuncia per se stesso e per il figlio — la distingue da tutte le altre versioni del mito per la densità tragica e la coerenza cosmologica. La ballata fu raccolta nelle Orcadi nella seconda metà del XIX secolo ed è oggi inclusa nella raccolta di Francis James Child (The English and Scottish Popular Ballads, Houghton Mifflin, 1882-1898), il corpus fondamentale della ballata folklorica anglosassone; è stata registrata da Joan Baez (1961), Judy Collins, Pentangle e decine di altri artisti.
 
La struttura narrativa è riducibile a tre momenti di rivelazione successiva. Una donna siede a cullare un figlio di cui non conosce il padre. Un uomo compare al suo fianco — grigio, "coperto di pelle" secondo la ballata — e si rivela: "Sono un uomo sulla terra, sono un silkie nel mare, e quando sono lontano da ogni riva, la mia dimora è su Sule Skerry." Sule Skerry è un isolotto reale a circa sessanta miglia a ovest delle Orcadi, privo di abitanti umani ma ricco di foche: la geografia è precisa, il mito è ancorato a un luogo fisico specifico. Il silkie riconosce il bambino come proprio figlio, lascia alla donna oro per il suo mantenimento, e annuncia il destino: la donna sposerà un cacciatore, il cacciatore ucciderà sia il silkie sia il figlio nel corso della stessa battuta di caccia alle foche.
 
Questa profezia di morte reciproca — il padre che preannuncia la propria uccisione e quella del figlio a opera del futuro marito della donna — ha la struttura del tragico destino nordico (Schicksal) che nessuna azione umana può evitare. Il silkie sa che andrà a morire, sa che il figlio morirà, e tuttavia consegna oro e fa il proprio dovere di padre prima di tornare in mare. Questa rassegnazione dignitosa al destino noto — che ricorda la serenità eroica dell'edda norrena di fronte al Ragnarök — è stata letta da Seamus Heaney (The Redress of Poetry, Faber, 1995) come "la forma più pura di fatalismo atlantico: non la disperazione, ma la pace di chi sa che il cosmo ha un ordine e che quell'ordine include la propria morte". La ballata non moralizza, non punisce nessuno, non offre consolazione: registra il destino con la stessa neutralità con cui il mare registra le maree.`,
    },

    versions: [
      {
        era: "Tradizione delle Orcadi e Shetland",
        name: "L'origine norrena: i silkie di Sule Skerry",
        text: "Nelle Orcadi e Shetland la figura dei Selkie si chiama Silkie ed è fortemente influenzata dal folklore scandinavo. Il più famoso canto è 'The Great Silkie of Sule Skerry' (Child Ballad 113, raccolta metà XIX sec.), dove un silkie maschio visita una donna di Sule Skerry, le racconta di essere uomo sulla terra e foca in mare ('I am a man upon the land / I am a silkie in the sea'), la lascia incinta di un figlio che ucciderà anni dopo casualmente insieme alla madre nella stessa spedizione di caccia. È una delle più belle ballate folkloriche britanniche, intrisa di fatalismo nordico.",
      },
      {
        era: "Tradizione delle Ebridi",
        name: "Le Maighdeann-ròin gaeliche",
        text: "Nelle Ebridi (Lewis, Harris, Skye, Barra) il folklore selkie è stato raccolto estesamente da John Francis Campbell (Popular Tales of the West Highlands, 1860) e da Alexander Carmichael (Carmina Gadelica, 1900). La versione gaelica è meno nordica e più 'celtica': i Selkie sono parenti dei Fomori e dei Tuatha Dé, un popolo marino autonomo con propria cultura, proprie leggi, proprio re. Le selkie femmine sono donne intelligenti e tristi — non semplici prede del pescatore ma personaggi compiuti.",
      },
      {
        era: "Irlanda del Nord-Ovest — Roán",
        name: "I Roans del Donegal",
        text: "Sulla costa del Donegal e di Connemara le selkie sono dette Roans (dal gaelico rón, 'foca'). Il folklore locale racconta di intere famiglie costiere che vantano discendenza da un Roan — i MacCodrum delle Ebridi sud rivendicano origine selkie, così come i Coneelly e i Sullivan irlandesi. Queste rivendicazioni non erano poste come metafora: erano letterali. Fino al XX secolo alcune famiglie rifiutavano di cacciare foche perché 'parenti'.",
      },
      {
        era: "Modernità — il mito Selkie nella cultura contemporanea",
        name: "Rebirth letterario e cinematografico",
        text: "I Selkie hanno avuto un revival potente nella cultura contemporanea. Film: 'The Secret of Roan Inish' (John Sayles, 1994), 'Ondine' (Neil Jordan, 2009), 'Song of the Sea' (Tomm Moore, 2014, animato). Letteratura: Margaret Elphinstone ('The Sea Road', 2000), Susan Cooper ('Seaward', 1983). I Selkie sono diventati metafora della doppia identità, della nostalgia, del conflitto tra mondo 'domestico' e 'vocazione'. Nel femminismo contemporaneo la selkie rubata della sua pelle è figura chiave: la donna privata della sua identità più profonda, costretta a una vita non sua.",
      },
    ],
    cult: `Non esiste un "culto" formale dei Selkie. Ma il loro ruolo nel folklore costiero è così profondo da aver prodotto pratiche sociali specifiche: divieti di uccisione delle foche in determinate comunità dell'Atlantico settentrionale, tabù sulla pesca in luoghi considerati "passaggi Selkie" (rocce specifiche delle Orcadi, canali delle Ebridi), offerte rituali lasciate in mare dopo una pesca abbondante.

Il "Selkie Rock" di North Ronaldsay (Orcadi) è un sito folklorico noto: una formazione rocciosa dove — si dice — le selkie depongono le loro pelli prima di ballare sulla spiaggia. I locali fino al XIX secolo evitavano di frequentarlo nelle notti di luna piena. Oggi è meta turistica.

Fino al XX secolo alcune comunità celebravano "notte delle foche" particolari (spesso intorno a Beltane o a Samhain), in cui si evitava il mare o si lasciavano offerte sulla battigia. Queste pratiche sono documentate dagli etnografi Eric Linklater (Orcadi) e John MacInnes (Ebridi).`,
    influence: [
      {
        era: 'Il mito universale dello "sposo animale"',
        text: "Il mito Selkie è la variante celtica del motivo universale dello 'sposo animale' (Animal Bride/Groom): lo sposo o sposa di natura magica che deve tornare alla sua forma originaria. Paralleli nel mondo: le ragazze-cigno scandinave, le fox-wives giapponesi (kitsune), le moglie-stella degli inuit, le apsara indù. Il motivo Selkie è tra i più 'moderni' nella sua dimensione tragica: non c'è lieto fine, c'è nostalgia perpetua, conflitto insanabile tra due mondi.",
      },
      {
        era: 'La "cappa" come simbolo femminista',
        text: "Clarissa Pinkola Estés in 'Women Who Run with the Wolves' (1992) — bestseller internazionale del movimento femminista spirituale — dedica un intero capitolo al mito Selkie. La pelle rubata diventa metafora dell'anima autentica sottratta alla donna; la ricerca della pelle perduta diventa paradigma della ricerca di identità femminile. L'interpretazione ha avuto grande fortuna e ha reso il mito Selkie quello celtico più diffuso nella cultura psicologica-popolare.",
      },
      {
        era: "Il cinema animato di Cartoon Saloon",
        text: "Il film 'Song of the Sea' (Tomm Moore, 2014) — prodotto dallo studio irlandese Cartoon Saloon, nominato agli Oscar 2015 — è forse la più bella rielaborazione moderna del mito Selkie. Il film mescola selkie, Cailleach, Mac Lir, sidhe in una narrazione per bambini-adulti che ha riportato il folklore gaelico al pubblico globale. Ha contribuito al revival culturale di Donegal e Dingle.",
      },
      {
        era: "Musica folk contemporanea",
        text: "Il mito Selkie è cuore di un vasto repertorio musicale folk contemporaneo. 'The Great Silkie of Sule Skerry' è stata registrata da Joan Baez (1961), Judy Collins, Pentangle, e decine di altri. 'Sealwoman' di Kate Bush, canzoni di The Waterboys, Capercaillie, Solas. L'immaginario musicale Selkie è ormai parte del patrimonio emotivo europeo-celtico globale.",
      },
    ],
    texts: [
      {
        title: "The Great Silkie of Sule Skerry (fram.)",
        source:
          "Child Ballad 113, raccolta in Orcadi nel XIX sec., trad. dall'inglese-scozzese",
        text: "Una donna siede e canta un figlio suo: / 'Piccolo oh, non conosco il padre tuo, / né conosco il luogo dove abita.' / Un uomo allora sorge ai piedi del letto suo, / grigio e terribile, coperto di pelle: / 'Io sono un uomo sopra la terra / io sono un silkie nel mare / e quando sono lontano da ogni sponda / la mia casa è su Sule Skerry.' / 'Verrà il giorno in cui prenderò il mio figlio / e lo addentrerò nella fredda acqua / e lo condurrò con me a Sule Skerry.' / 'Tu sposerai un cacciatore d'armi, / un buon tiratore sarà / e al primo colpo che farà nel mare / ucciderà me e il nostro figlio.'",
      },
      {
        title: "La Maighdeann-ròin di Sandaigh",
        source:
          "J.F. Campbell, Popular Tales of the West Highlands, vol. IV, 1862, storia di Lewis",
        text: "Un giovane pescatore di Sandaigh vide sette donne bellissime danzare sulla spiaggia di sabbia. Sulle rocce c'erano sette pelli di foca. Si avvicinò e ne rubò una, nascondendola sotto un mucchio di fucus. Sei donne si rivestirono di pelle e tornarono in mare; la settima rimase nuda e piangeva. Il pescatore le offrì il suo mantello e le chiese di sposarlo. Ella accettò in silenzio. Vissero insieme sette anni ed ebbero tre figli. Una sera ella sentì un canto venire dal mare, e il più piccolo dei figli le chiese: 'Mamma, perché babbo ha quella pelle strana in soffitta?' Ella salì, prese la pelle, abbracciò i figli, entrò in mare e non tornò mai più. I tre figli piansero sulla battigia per anni. Si dice che le sette foche sulle rocce di Sandaigh siano ancora loro — la madre che viene a guardarli dalla superficie dell'acqua.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     5. I KELPIE — i Cavalli d'Acqua
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "kelpie",
    name: "I Kelpie",
    role: "Cavalli d'Acqua Demoniaci dei Laghi Scozzesi",
    tags: ["Cavalli", "Acqua", "Predatori", "Shapeshifter"],
    epithet:
      "Each-uisge in gaelico — i Cavalli d'Acqua che affogano i cavalieri",
    type: "Divinità",
    chips: ["Highlands", "Laghi scozzesi", "Shapeshifter", "Demoniaco"],
    heroColor: "linear-gradient(160deg,#061016,#0c2030,#020810)",
    bio: {
      main: `I Kelpie — il cui nome deriva con alta probabilità dal gaelico scozzese cailpeach o colpach, "puledro, giovane cavallo", con il passaggio fonologico tipico dello scots a kelpie attraverso il dialetto delle Lowlands — sono creature soprannaturali del folklore scozzese, spiriti acquatici nella forma di cavallo che abitano fiumi, laghi, pozzi e acque interne delle Highlands e delle Lowlands scozzesi. Sono tra le figure del folklore gaelico insulare più uniformemente temute: a differenza dei Selkie (ambigui, tragici, capaci di amore e nostalgia) e dei Sídhe (potenti ma neutrali), i Kelpie sono senza attenuanti predatori — esseri che assumono una forma attraente per uccidere chi si lascia ingannare.
 
La distinzione fondamentale nella tradizione gaelica è tra due figure correlate ma distinte. Il Kelpie propriamente detto — termine prevalentemente usato nelle Lowlands scozzesi e nel dialetto scots — abita i fiumi e le pozze di marea, è di dimensioni relativamente normali (un cavallo ordinario) e attacca individualmente. L'Each-uisge ("cavallo d'acqua" in gaelico scozzese, da each, "cavallo", e uisge, "acqua" — la stessa radice di whisky, "acqua della vita") è la figura più arcaica e dei grandi laghi delle Highlands: abita il Loch Ness, il Loch Morar, il Loch Awe, il Loch Rannoch. L'Each-uisge è più potente, più feroce, e ha in più la capacità di assumere forma umana — può presentarsi come un bel giovane uomo, non solo come un cavallo — aumentando il proprio repertorio di inganno. John Gregorson Campbell (Superstitions of the Highlands and Islands of Scotland, MacLehose, 1900) è il folklorista che ha documentato più sistematicamente la distinzione, raccogliendo varianti da comunità di tutto il territorio gaelico.
 
La genealogia e la natura ontologica dei Kelpie sono deliberatamente opache nelle fonti: non hanno creatori, non hanno famiglie, non appartengono a nessun pantheon strutturato. Sono creature elementali — spiriti dell'acqua nel senso più primordiale — antecedenti al sistema mitologico celtico elaborato e resistenti a qualsiasi tentativo di integrazione in esso. Anne Ross (Pagan Celtic Britain, Routledge, 1967) ha proposto che i Kelpie siano sopravvivenze di culti acquatici pre-celtici delle isole britanniche, connessi ai depositi votivi nei fiumi e nei laghi documentati dall'archeologia (le armi nel Tamigi, i tesori nel Loch Ness, le offerte nei pozzi sacri irlandesi): la "divinità acquatica che richiede tributi" si sarebbe trasformata, nel folklore post-cristiano, nel "predatore acquatico che uccide chi si avvicina all'acqua senza rispetto".
 
L'iconografia del Kelpie è semplice e precisa: un cavallo dalla criniera sempre bagnata, il mantello che gronda acqua anche lontano dai corsi d'acqua, gli occhi che riflettono la luce in modo innaturale (come gli occhi di un pesce, non di un cavallo). Il segno di riconoscimento invariabile — sia nella forma di cavallo sia in quella umana — è la presenza di alghe, conchiglie o sabbia acquatica nei capelli o sulla pelle, che un osservatore attento può notare. La sua vulnerabilità è altrettanto precisa: il metallo bianco (argento nella tradizione più tarda, ferro bianco in quella più arcaica) rompe l'incantesimo; una briglia d'argento posta sul suo muso lo rende soggetto al controllo umano. Chi riesce a imbrigliarlo possiede il cavallo da lavoro più potente possibile — capace di arare dieci campi in un giorno — finché non intravede l'acqua, nel qual caso trascina il padrone in fondo al lago e si libera.`,

      sub1: `La cavalcata fatale: il meccanismo della trappola`,
      text1: `Il racconto della cavalcata fatale — la storia tipologica in cui i Kelpie appaiono in forma di cavallo bellissimo, attraggono i viandanti a montarvi, e li trascinano in acqua dove li uccidono e divorano — è documentato in centinaia di varianti locali attraverso tutta la Scozia, dalla tradizione scritta di Walter Scott (Letters on Demonology and Witchcraft, Murray, 1830) alle raccolte folkloriche di Campbell (1900) e di Otta Swire (The Highlands and Their Legends, Oliver & Boyd, 1963). La struttura narrativa è costante nella sua meccanica, con variazioni nel numero delle vittime e nei dettagli locali.
 
Il Kelpie appare sempre sulla riva di un lago o di un fiume, in un momento di vulnerabilità del viandante (stanchezza, oscurità, solitudine). Si presenta come un cavallo domestico — sella e briglia già indossate in alcune versioni, completamente libero in altre — di insolita bellezza: il mantello lucido, la corporatura perfetta, il comportamento docile e invitante. La prima vittima sale in groppa. Ma la groppa del Kelpie ha una proprietà magica: la pelle è adesiva, e chiunque la tocchi rimane incollato. La groppa si allunga per accogliere altre vittime (nelle versioni in cui il Kelpie attacca gruppi), finché tutte sono montate. A quel punto il cavallo si getta a capofitto nel lago, trascina tutti sotto la superficie, e li divora. L'unica parte che emerge è sempre la stessa: il fegato e i polmoni, gli organi interni che il Kelpie lascia sulla riva come firma.
 
La versione raccolta da Walter Scott nel Pertshire — nove bambini che montano uno dopo l'altro sulla groppa che si allunga magicamente, mentre il decimo sfugge perché distratto a raccogliere sassi — è la più letterariamente elaborata e ha influenzato tutte le successive rielaborazioni. La struttura del decimo bambino che sopravvive per distrazione (non per eroismo, non per saggezza, ma per caso) ha la coerenza pedagogica del folklore: nessuna strategia deliberata salva dal Kelpie, solo l'assenza dalla scena nel momento critico. Katherine Briggs (The Anatomy of Puck, Routledge, 1959) ha analizzato il Kelpie come "la forma più pura di moralità folklorica negativa": non insegna cosa fare, insegna cosa non fare con una radicalità che non ammette eccezioni. Non montare cavalli sconosciuti vicino all'acqua. Mai. Per nessuna ragione.`,

      sub2: `L'Each-uisge di Loch Ness e i mostri dei grandi laghi`,
      text2: `La connessione tra l'Each-uisge dei grandi laghi delle Highlands e il fenomeno moderno degli "avvistamenti di Nessie" al Loch Ness è uno dei casi più studiati di trasformazione di un archetipo folklorico in un fenomeno criptozoologico contemporaneo, e rivela come le strutture del folklore pre-moderno possano sopravvivere e rimodellarsi in forme nuove senza perdere il nucleo essenziale. Il Loch Ness ha la sua tradizione di each-uisge documentata da secoli prima del primo avvistamento moderno di "Nessie" nel 1933: Adamnan, il biografo di San Colombano, menziona nel VII sec. un mostro acquatico nel fiume Ness (Vita Columbae, ca. 690 d.C.) che viene esorcizzato dal santo con il segno della croce.
 
L'each-uisge del Loch Ness nella tradizione gaelica delle Highlands è descritto come un essere di dimensioni enormi, capace di afferrare e trascinare in acqua sia cavalli sia uomini, che si manifesta preferibilmente nelle notti di piena luna e nei periodi di transizione stagionale (Samhain, Beltane). La sua differenza dall'each-uisge ordinario è la scala: nei grandi laghi profondi delle Highlands, la creatura acquatica è proporzionata alla profondità dell'acqua — e il Loch Ness ha profondità massima di 230 metri, la maggiore della Gran Bretagna. Robert Rickard e Paul Sieveking (Fortean Times, vari numeri dal 1973) hanno documentato come gli avvistamenti di Nessie dal 1933 in avanti si innestino su una tradizione folklorica locale che aveva già "preparato" la percezione della comunità: i pescatori del Loch Ness sapevano già cosa aspettarsi di vedere, e quando la percezione moderna ha cercato una spiegazione per le forme insolite nel lago, il modello dell'each-uisge era disponibile.
 
Il Loch Morar ha Morag, il Loch Shiel ha Seileag, il Loch Awe ha il Water Bull (Tarbh-uisge) — ogni grande lago delle Highlands ha la sua creatura specifica con nome proprio e caratteristiche locali, tutti derivati dalla figura dell'each-uisge. Questa capillarità — ogni specchio d'acqua profondo ha la sua creatura soprannaturale — riflette la funzione pedagogica del folklore: in un paese dove ogni anno pescatori e pastori morivano annegati nei laghi delle Highlands, la creatura che "abita" ogni lago specifico era il dispositivo narrativo che comunicava alla comunità il rispetto necessario per quell'acqua specifica. Darren Naish (Hunting Monsters: Cryptozoology and the Reality Behind the Myths, Bloomsbury, 2016) ha analizzato la criptozoologia moderna dei laghi scozzesi come "folklore secolarizzato": la stessa funzione culturale (rispetto per le acque pericolose, spiegazione degli annegamenti inspiegabili), la stessa struttura narrativa (creatura invisibile che emerge di rado), in un vocabolario pseudoscientifico invece che soprannaturale.`,

      sub3: `La briglia d'argento e il kelpie domato`,
      text3: `Il motivo del kelpie catturato e domato — la storia in cui un uomo coraggioso o scaltro riesce a imbrigliare un kelpie e a utilizzarlo come bestia da lavoro, prima che la creatura trovi il modo di liberarsi — è la variante più ottimista e narrativamente complessa del folklore del Kelpie, e rivela la struttura di negoziazione con il selvaggio che è comune a molti miti di "bestia domata" nelle tradizioni indo-europee. Le fonti principali sono in Campbell (1900), in Andrew Lang (The Brown Fairy Book, Longmans, 1904) e in varianti raccolte da Otta Swire (1963) e da R.L. Tongue (Forgotten Folk-Tales of the English Counties, Routledge, 1970).
 
La procedura per domare un kelpie è precisa e tramandata come sapere tecnico nel folklore delle Highlands: si deve trovare un kelpie mentre è in forma di cavallo sulla riva, avvicinarsi da sopravvento (per non essere sentiti dall'olfatto acuto della creatura), e gettare sulle sue narici una briglia fatta di metallo bianco — preferibilmente argento, o ferro bianco in alcune varianti. La briglia d'argento posta sul muso del kelpie rompe l'incantesimo della sua natura soprannaturale e lo trasforma in un cavallo straordinariamente potente ma soggetto al controllo umano. Un kelpie imbrigliato può arare dieci campi in un giorno, trasportare pesi che richiederebbero dieci cavalli ordinari, e non si stanca mai. La comunità che ha un kelpie imbrigliato è ricca.
 
La condizione assoluta è una: il kelpie non deve mai vedere l'acqua. Se intravede anche solo un ruscello, uno stagno, o anche l'acqua piovana raccolta in un'impronta nel fango, il patto si rompe istantaneamente: il kelpie si getta verso l'acqua trascinando con sé chiunque tenga le briglie, e una volta nel lago è di nuovo libero e predatore. Alcune versioni narrano di contadini che hanno tenuto un kelpie imbrigliato per anni — coprendo ogni specchio, riempiendo i canali di terriccio, tenendo il bestiame al chiuso nelle giornate di pioggia — prima che un momento di distrazione o una notte di tempesta permettesse alla creatura di intravedere il suo elemento e fuggire. Il motivo della "bestia domata che attende il momento di fuggire" ha paralleli nelle tradizioni dello spirito-servitore (Djinn nella tradizione islamica, folletti nei contratti faustiani europei, kitsune nella tradizione giapponese): il soprannaturale può essere temporaneamente assoggettato ma non definitivamente sconfitto. Duncan Williamson, storyteller tradizionale dei Travellers scozzesi (registrato da Linda Williamson, Fireside Tales of the Traveller Children, Canongate, 1983), ha narrato versioni del kelpie domato che rappresentano la tradizione orale più vitale di questo motivo nel XX secolo.`,
    },

    versions: [
      {
        era: "Tradizione delle Highlands",
        name: "L'each-uisge dei grandi laghi",
        text: "Nelle Highlands scozzesi, ogni grande lago ha tradizionalmente il suo each-uisge. Il più famoso è quello di Loch Ness — la cui 'Nessie' moderna (avvistamenti dal 1933 in avanti) è stata letta da folkloristi come Robert Rickard (Fortean Times) e Katherine Briggs come la versione 'modernizzata' dell'each-uisge locale: la creatura criptida del Loch Ness è discendenza folklorica diretta del cavallo-mostro del lago. Il Loch Morar ha Morag, Loch Shiel ha Seileag — tutte 'cugine' folkloriche di Nessie.",
      },
      {
        era: "Tradizione delle lowlands scozzesi",
        name: "Il Kelpie dei guadi",
        text: "Nelle lowlands e nella Scozia meridionale il Kelpie è figura più prosaica e localizzata: spirito di singoli fiumi e guadi. Il Kelpie di Carterhaugh, di Avon, di Tweed sono tutti menzionati in ballate tradizionali. La ballata 'Tam Lin' (Child Ballad 39) e 'Thomas the Rhymer' (Child 37) includono episodi con creature acquatiche che alcuni interpretano come Kelpie. Robert Burns nel poema 'Address to the Deil' menziona il Kelpie come tra i demoni più terribili che il diavolo scozzese gestisce.",
      },
      {
        era: "Irlanda settentrionale — Aughisky",
        name: "Il cavallo del Donegal",
        text: "In Irlanda del Nord (Donegal, Derry) l'equivalente è l'Aughisky (dal gaelico each-uisce, stessa etimologia). Il folklore del Donegal descrive l'Aughisky come particolarmente pericoloso a novembre. Se un contadino riesce a catturarne uno, a tenergli la briglia e a impedirgli di vedere l'acqua per un anno, l'Aughisky diventa il cavallo da lavoro più formidabile possibile; ma se mai intravede uno specchio d'acqua, trascina il padrone al fondo e se ne torna al suo elemento. Il motivo è probabilmente una trasposizione simbolica della 'domesticazione impossibile del selvaggio'.",
      },
      {
        era: "Modernità — la Kelpies sculpture",
        name: "Icona dell'arte pubblica scozzese",
        text: "Nel 2013-14 l'artista scozzese Andy Scott ha realizzato 'The Kelpies' a Falkirk: due sculture monumentali di cavalli alte 30 metri ciascuna, in acciaio inossidabile, sulle rive del Forth and Clyde Canal. È il più grande monumento equestre del mondo. Le sculture rappresentano insieme i cavalli da traino industriali della Scozia vittoriana e i Kelpie mitici — fondendo ingegneria, mitologia e identità nazionale. Le Kelpies di Falkirk sono oggi una delle attrazioni turistiche più fotografate della Scozia.",
      },
    ],
    cult: `Non esiste un 'culto' dei Kelpie — sono figure da evitare, non da venerare. Tuttavia i luoghi associati hanno uno statuto folklorico. Il Loch Ness, il Loch Morar, il Loch Shiel nelle Highlands; il Loch Awe e il Loch Rannoch; il fiume Spey in particolari gole sono tutti 'luoghi di Kelpie' nella tradizione popolare. Le guide locali fino al XX secolo sconsigliavano ai viaggiatori di camminare da soli lungo certi tratti di riva al crepuscolo.

Il culto negativo — pratiche apotropaiche per proteggersi dai Kelpie — è invece documentato. Nel gaelico scozzese è comune la benedizione 'Dia eadar mi 's an each-uisge' ("Dio fra me e il cavallo d'acqua"), recitata dai pescatori prima di attraversare un guado. La 'briglia d'argento' (capestro con borchie d'argento) era creduta l'unico strumento in grado di dominare un Kelpie; briglie d'argento votive sono state trovate in offerte lacustri scozzesi di epoca tardo-medievale.`,
    influence: [
      {
        era: "Mostri lacustri moderni e criptozoologia",
        text: "L'archetipo del 'mostro del lago' — Nessie, Morag, Seileag scozzesi, Champ americano, Ogopogo canadese — deriva culturalmente dal folklore dell'each-uisge. Gli avvistamenti moderni si innestano su una tradizione pre-esistente che ha plasmato cosa la gente 'si aspetta di vedere' nei laghi profondi. Darren Naish e altri criptozoologi culturali riconoscono questa continuità.",
      },
      {
        era: "Il 'cavallo demoniaco' nel fantasy globale",
        text: "Il motivo del cavallo-demone acquatico ha permeato il fantasy moderno. In Harry Potter compaiono i 'water horses'. In 'The Scorpio Races' di Maggie Stiefvater (2011) i capaill uisce sono l'elemento centrale del romanzo. Diana Gabaldon in 'Outlander' cita i kelpie. Il cavallo-mostro celtico è entrato stabilmente nell'immaginario fantasy globale.",
      },
      {
        era: "Metafora della natura selvaggia",
        text: "Il Kelpie è stato letto dai folkloristi moderni (Katherine Briggs, Ronald Hutton) come rappresentazione delle forze pericolose della natura non-umanizzata: fiumi improvvisi, laghi profondi, acque traditrici. In un paese come la Scozia, dove ogni anno persone muoiono annegate in laghi e fiumi impervi, il Kelpie era anche pedagogia: avverte bambini e viaggiatori dei pericoli reali dell'ambiente.",
      },
      {
        era: "Musica e cultura popolare scozzese",
        text: "'Kelpie' è titolo di canzoni, pub, squadre sportive, navi nell'universo culturale scozzese contemporaneo. Il Kelpie di Falkirk è diventato emblema di un modo moderno — artistico, industriale — di reintegrare mitologia antica nell'identità culturale.",
      },
    ],
    texts: [
      {
        title: "La cavalcata fatale — racconto delle Highlands",
        source: "Sir Walter Scott, Letters on Demonology and Witchcraft, 1830",
        text: "I bambini del Loch nel Pertshire, nove in tutto, giocavano sulla riva una domenica d'autunno. Un bellissimo puledro grigio venne a loro, docile e invitante. Uno salì sulla schiena; la schiena si allungò, e un altro vi montò; ancora un altro; finché tutti e nove furono sul dorso della bestia. Un solo ragazzo, il decimo, rimase sulla riva: era stato distratto a raccogliere sassi. Il puledro piegò improvvisamente il collo e si gettò in corsa verso le acque nere del lago. Entrò fino alle ginocchia, poi fino al petto, poi scomparve del tutto. I nove bambini non furono mai più visti. Solo il decimo ragazzo, superstite, vide nel crepuscolo i loro fegati galleggiare sull'acqua. Il lago, da allora, è detto 'lago dei Nove Figli'.",
      },
      {
        title: "Benedizione gaelica contro l'each-uisge",
        source: "Carmina Gadelica, Alexander Carmichael, 1900, vol. I",
        text: "Dia eadar mi 's an each-uisge, / Dia eadar mi 's an t-siothaiche, / Dia eadar mi 's an t-sluagh, / Dia eadar mi 's a' bhàs. / Anam na mna sòr-bhàn ann mo làimh / aig a cheud bheum den siubhal shàmhraidh. / ('Dio fra me e il cavallo d'acqua, / Dio fra me e il popolo fatato, / Dio fra me e la schiera morta, / Dio fra me e la morte. / L'anima della donna-bianca sia nella mia mano / al primo colpo del viaggio d'estate.')",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   EROI SCOZZESI E INSULARI
   ══════════════════════════════════════════════════════════════════════ */

const SCOTTISH_HEROES = [
  /* ════════════════════════════════════════════════════════════════════
     1. SUIBHNE — il Re Pazzo Profeta
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "suibhne",
    name: "Suibhne Geilt",
    role: "Il Re Pazzo Profeta dalle Piume",
    tags: ["Follia sacra", "Poesia", "Foresta", "Re"],
    epithet: "Buile Shuibhne — la Frenesia di Suibhne, l'Uomo-Uccello",
    type: "Eroe",
    chips: ["Alba", "Irlanda", "Buile Shuibhne", "Poesia estatica"],
    heroColor: "linear-gradient(160deg,#0a140a,#1a301f,#05100a)",
    shortDesc:
      "Re ulaid maledetto da un santo nella battaglia di Mag Rath (637 d.C.), diventa uccello-uomo per follia sacra: vola di albero in albero tra Irlanda e Scozia, compone poesie estatiche sulla natura, vive nudo nelle foreste per decenni. Figura-ponte tra Alba (Scozia gaelica) e Irlanda, archetipo del profeta-folle celtico, uno dei testi più belli della letteratura medievale europea sulla natura.",
    bio: {
      main: `Suibhne mac Colmáin Cuair — noto come Suibhne Geilt ("Suibhne il Folle" o "Suibhne l'Uccello") — è il protagonista del Buile Shuibhne ("La Frenesia di Suibhne"), un testo medio-irlandese del XII secolo basato su materiali più antichi, uno dei capolavori della letteratura medievale europea e forse la più bella opera sulla natura della tradizione gaelica. La sua figura attraversa Scozia e Irlanda — è re ulaid che si rifugia in Alba (il nome gaelico della Scozia) e torna, figura-ponte tra le due terre-sorelle del mondo gaelico insulare, e proprio per questa dimensione transinsulare è centrale in questa sezione di Mythologia.

Suibhne è re di Dál nAraidi, un piccolo regno dell'Ulster orientale, sotto l'alta sovranità del re Domnall mac Aedo. Secondo la storia mitico-cronachistica (che mescola memoria storica della battaglia di Mag Rath del 637 d.C. con il mito), Suibhne si comporta con arroganza e violenza quando un santo monaco — Rónán di Drumiskin — cerca di consacrare una chiesa vicino al suo palazzo. Suibhne, infuriato dal suono della campana cristiana che disturba la sua quiete pagana, scaglia il libro liturgico di Rónán in un lago e minaccia il santo di morte. Rónán, protetto miracolosamente, scaglia contro Suibhne una maledizione: "Che tu diventi come un uccello, senza casa e senza pace, vagando senza fine fino alla morte."

La maledizione si compie durante la grande battaglia di Mag Rath (Moira, Contea di Down). Nel fragore dello scontro, Suibhne è colpito da un terrore soprannaturale: il suo senno lo abbandona, il suo corpo si alleggerisce, gli spuntano piume sulle braccia e sulle gambe, non può più toccare terra con i piedi senza dolore. Vola via dal campo di battaglia, di albero in albero, incapace di fermarsi. Comincia così la sua vita di uomo-uccello.`,
      sub1: "La vita nelle foreste — 30 anni di follia",
      text1: `Per trent'anni Suibhne vive nelle foreste d'Irlanda e di Scozia, posandosi sui rami più alti degli alberi, dormendo raramente, mangiando erbe amare (crescione, nasturzio, cardo) e bevendo acqua. Il suo regno gli è stato tolto; la moglie Eorann si è risposata con un altro ulaid (anche se continua ad amarlo); i suoi cari lo cercano senza trovarlo. Gli abitanti dei villaggi lo intravedono talvolta di sfuggita: un uomo-figura tra i rami, coperto di piume, gli occhi sperduti. Quando qualcuno si avvicina per aiutarlo, Suibhne fugge: ha paura del suono della voce umana quasi quanto del suono della campana.

Ma nella sua follia Suibhne diventa poeta. Il Buile Shuibhne è interamente un'alternanza tra brevi capitoli narrativi in prosa e lunghi poemi in versi composti da Suibhne stesso sui rami dei suoi alberi. Questi poemi — una trentina in totale — sono il cuore letterario dell'opera e la ragione della sua importanza culturale. Suibhne canta gli alberi: il melo, il frassino, la quercia, il biancospino, il tasso. Canta le stagioni: l'inverno crudele, la primavera verde, l'estate piena, l'autunno dorato. Canta gli animali: il cervo, l'airone, il merlo, il salmone. Canta il dolore della nudità, la fame, il freddo, la nostalgia della casa. Ma canta anche, progressivamente, una strana gioia: la libertà totale dall'umano, l'amicizia con la natura, una pace che gli uomini non conoscono.

La qualità poetica di questi brani è eccezionale. Alcuni poemi del Buile Shuibhne sono considerati tra i più belli mai scritti in lingua irlandese. 'The Praise of Glen Bolcáin', 'The Tree of Ross', 'The Songs of the Months' hanno una attenzione osservativa alla natura — i nomi precisi delle specie arboree, i colori delle foglie in autunno, i suoni specifici degli uccelli — senza paragoni nella letteratura europea medievale prima dei poeti provenzali. Suibhne è un santo della natura prima di San Francesco.`,
      sub2: "Il viaggio in Alba — il matto gaelico scozzese",
      text2: `In un periodo della sua follia, Suibhne lascia l'Irlanda e vola in Alba, la Scozia gaelica. Atterra in una valle remota delle Highlands — alcuni testi la identificano con Glen Etive, altri con Glen Orchy — e vi vive per anni. In Alba incontra un altro 'matto sacro': Ealadhan (o Fer Caille, "l'uomo della foresta"), uno scozzese anch'egli maledetto in battaglia e divenuto uomo-uccello. I due si riconoscono come fratelli di follia. Viaggiano insieme per le foreste di Alba, si proteggono a vicenda, si scambiano poesie.

Questo episodio è culturalmente cruciale. Mostra che il fenomeno del "geilt" — l'uomo-uccello folle — non è un singolo caso ma una categoria riconosciuta nel mondo gaelico, condivisa tra Irlanda e Scozia. Il termine "geilt" appare in testi giuridici gaelici (la legge brehon irlandese e la legge scozzese antica) come categoria tecnica: il geilt è persona con statuto legale particolare, protetta da determinati crimini, non soggetta ad altri. L'esistenza di questa categoria suggerisce che casi reali di geilt (uomini impazziti in battaglia, rifugiati nelle foreste, viventi di erbe) esistessero effettivamente in Irlanda e Scozia gaelica, e che il Buile Shuibhne sia elaborazione letteraria di un fenomeno reale. È un'importante finestra su fenomeni di stress post-traumatico e schizofrenia riconosciuti dalla società gaelica molto prima della psichiatria moderna.

Ealadhan predice a Suibhne che sarà lui, tra i due, il primo a morire; e così infatti accade: Ealadhan cade da una rupe, Suibhne lo piange, e successivamente ritorna solo in Irlanda.`,
      sub3: "Il ritorno, la riconciliazione, la morte",
      text3: `Dopo decenni di follia, Suibhne comincia gradualmente a riacquistare lucidità — non completamente, ma abbastanza da poter tornare tra gli uomini. Incontra San Moling di Tech Moling (nell'Irlanda sud-orientale), santo patrono della poesia: Moling lo accoglie, lo nutre, gli dà rifugio nel chiostro. Per alcuni mesi Suibhne vive presso Moling; il santo lo ascolta recitare i suoi poemi e — figura cruciale — li memorizza e li trascrive. Il Buile Shuibhne si presenta narrativamente come "trascritto dall'orale dalla bocca di Suibhne stesso attraverso l'ascolto di Moling": è un'elegante finzione per conferire autorità storico-testimoniale a un corpus poetico trasmesso per tradizione orale. Moling è il primo editore di Suibhne.

La riconciliazione non è però totale. Un giorno il porcaro di Moling (personaggio minore di nome Mongán) uccide Suibhne per un malinteso, credendolo ladro di porci. Colpito di lancia, Suibhne muore tra le braccia di Moling. Il santo gli dà sepoltura nel cimitero del monastero. La morte è tragica, ma anche concede al folle reintegrazione cristiana post mortem — come Oisín e Caílte nell'Acallam, come Conchobar con la morte di Cristo, Suibhne è un pagano che viene 'riscattato' nel finale del racconto.

Il Buile Shuibhne si chiude con un'ultima elegia di Moling su Suibhne: il santo prega per la sua anima e proclama che i suoi poemi saranno cantati finché esisterà la lingua gaelica. È un'affermazione di continuità culturale più che religiosa: la poesia del folle è più preziosa della sua conversione.`,
      sub4: "Il mito Suibhne nella modernità — Heaney, Flann O'Brien",
      text4: `Il Buile Shuibhne è tra i testi gaelici che hanno avuto la più potente vita moderna. Nel 1939 Flann O'Brien (Brian O'Nolan) pubblica 'At Swim-Two-Birds', romanzo postmoderno capolavoro, in cui Suibhne è uno dei personaggi principali — il matto-poeta catapultato in un frame narrativo dublinese del XX secolo. È una delle più raffinate rielaborazioni moderne di un testo medievale, e ha dato nuova vita internazionale al mito.

Nel 1983 Seamus Heaney — premio Nobel 1995 — pubblica 'Sweeney Astray' ("Sweeney errante"), una traduzione poetica del Buile Shuibhne in inglese moderno. È una delle sue opere maggiori e la pietra miliare della ricezione contemporanea del mito. Heaney seguirà con 'Station Island' (1984), dove Sweeney è voce poetica interlocutoria. Attraverso Heaney, Suibhne è entrato in dialogo con la coscienza letteraria globale del tardo XX secolo.

Per l'ambiente culturale nord-irlandese in particolare, Suibhne è diventato simbolo potente: l'uomo ulaid esiliato, strappato dalla guerra civile, che trova rifugio nella poesia e nella natura. Durante i Troubles (1969-98) la figura di Sweeney ha acquistato valenza politico-emotiva — l'identità fratturata di chi vive in territorio di conflitto. Heaney ha confermato esplicitamente questa lettura.

Suibhne oggi è anche figura eco-poetica. Con la crescente attenzione alla letteratura della natura (nature writing) e alla poesia ecologica, il Buile Shuibhne è letto come testo fondante di una sensibilità antieurocentrica verso la natura — una voce che, già nel medioevo gaelico, rinunciava all'umano per riconoscersi fratello degli alberi. Robert Macfarlane, Kathleen Jamie, Mark Cocker nel Regno Unito contemporaneo dialogano esplicitamente con Suibhne.`,
    },
    versions: [
      {
        era: "Buile Shuibhne (XII sec.)",
        name: "Il testo medievale",
        text: "Il testo principale conservato nel Book of Leinster e altri manoscritti del XII sec., ma composto su materiali più antichi (IX-X sec.). Alterna prosa narrativa e circa 30 poemi lirici. È considerato capolavoro del medio-irlandese.",
      },
      {
        era: "At Swim-Two-Birds (Flann O'Brien, 1939)",
        name: "Il romanzo postmoderno",
        text: "Flann O'Brien (alias Brian O'Nolan) utilizza Suibhne come uno dei personaggi centrali del suo capolavoro postmoderno. Il romanzo mescola Suibhne medievale, cowboy del Far West, un folclore gigante di nome Finn MacCool, e un autore dublinese contemporaneo, in una girandola narrativa che ha influenzato autori da Beckett a Pynchon.",
      },
      {
        era: "Sweeney Astray (Seamus Heaney, 1983)",
        name: "La traduzione-capolavoro di Heaney",
        text: "Seamus Heaney, premio Nobel 1995, pubblica la traduzione poetica in inglese del Buile Shuibhne. È uno dei suoi lavori maggiori e ha reso il testo accessibile al pubblico globale. In 'Station Island' (1984) Heaney dialoga direttamente con Sweeney come voce interiore.",
      },
      {
        era: "Revival contemporaneo",
        name: "Il Suibhne eco-poetico",
        text: "Dagli anni 2000 Suibhne è diventato figura centrale del nature writing britannico e irlandese contemporaneo. Robert Macfarlane, Kathleen Jamie, Nan Shepherd (postumo), Mark Cocker lo citano come antenato letterario della loro sensibilità eco-poetica.",
      },
    ],
    cult: "Glen Bolcáin — localizzato variamente nella tradizione (alcuni lo identificano con Glenbuck in Scozia, altri con una valle del Down irlandese) — è il 'regno dei matti' del Buile Shuibhne. Tech Moling (St Mullins, Contea di Carlow) è il monastero dove Suibhne muore: è sito di pellegrinaggio ancora attivo, con pozzo sacro e cimitero. In Scozia Glen Etive è tradizionalmente associato al soggiorno di Suibhne in Alba. Non c'è 'culto' di Suibhne come santo, ma una fortissima tradizione letteraria continua da otto secoli.",
    influence: [
      {
        era: "San Francesco e la tradizione eco-religiosa",
        text: "Suibhne precede di 500 anni San Francesco d'Assisi (1181-1226) come figura di santità naturale — uomo che rinuncia al mondo sociale, vive tra gli animali, riconosce nella creazione un ordine sacro. L'influenza di Suibhne su Francesco è storicamente improbabile (i testi celtici non circolavano in Italia medievale), ma la parentela tipologica è impressionante.",
      },
      {
        era: "Il tema della 'follia sacra'",
        text: "Suibhne è membro di una categoria mitologico-religiosa paneuropea: i 'santi folli' (holy fools). Cristo Clodoveo orientale, i 'yurodivy' russi, gli 'afurd' sufi — tutti figure che abbandonano il senno sociale per accedere a una sapienza più profonda. Suibhne è il rappresentante gaelico insulare di questa categoria.",
      },
      {
        era: "Heaney e la coscienza nord-irlandese",
        text: "La traduzione di Heaney (Sweeney Astray, 1983) ha reso Suibhne simbolo della coscienza nord-irlandese durante i Troubles. L'uomo ulaid strappato dalla guerra, condannato all'esilio, che trova voce solo nella poesia: metafora perfetta della condizione emotiva di Heaney stesso e della sua generazione.",
      },
      {
        era: "Nature writing contemporaneo",
        text: "Il revival ecologico-letterario degli anni 2000 ha eletto Suibhne antenato ideale. La precisione con cui il Buile Shuibhne nomina ogni specie arborea, osserva ogni stagione, distingue ogni uccello, ha reso il testo un modello per autori come Robert Macfarlane ('Landmarks', 2015; 'Underland', 2019) e Kathleen Jamie ('Findings', 2005).",
      },
    ],
    texts: [
      {
        title: "L'invocazione degli alberi",
        source: "Buile Shuibhne, §40, trad. J.G. O'Keeffe (1913)",
        text: "O quercia, piccola e verdeggiante, / alta sulla vetta del colle, / il fruscio delle tue foglie / conforta più di ogni voce umana. // O biancospino, piccolo e rude, / tessitore di spine lungo il sentiero, / quando il merlo canta dalla tua chioma / dimentico le mie ferite. // O tasso, amico dei sepolcri, / ombra sui cimiteri della mia terra, / tu sei albero di pianto e di pace — / la tua bacca rossa è il sangue dei morti. // Melo, amico più mio tra tutti: / alti sono i tuoi rami, e bianchi i tuoi fiori / di primavera, come il mantello di una sposa. / Sotto di te voglio essere seppellito.",
      },
      {
        title: "Il lamento dell'inverno",
        source: "Buile Shuibhne, §39, trad. Seamus Heaney (1983)",
        text: "Dura è la mia vita senza tetto / dura nella gelida neve; / vento pungente, bruma, ghiaccio — / mio letto sono i rami secchi. / Gli altri dormono al caldo, / io tremo nudo sui rami. / La mia carne è violacea, / le mie ossa sono vetro. / O Cristo, Cristo che mi hai creato, / perché m'hai fatto piume invece di mantello, / beccata di uccello invece di pasto? / Giallo è il cardo, amara è l'erba d'inverno — / ma canterò lo stesso, finché ho voce, / questa gelida foresta che mi è stata casa.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. DEIRDRE IN ALBA — i 16 Anni d'Esilio in Scozia
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "deirdre-alba",
    name: "Deirdre in Alba",
    role: "L'Esiliata Bellezza nelle Terre Scozzesi",
    tags: ["Esilio", "Bellezza", "Scozia", "Ciclo dell'Ulster"],
    epithet: "Deirdre degli Scotti — i 16 Anni di Libertà nelle Highlands",
    type: "Eroe",
    chips: ["Alba", "Loch Etive", "Glen Etive", "Ciclo dell'Ulster"],
    heroColor: "linear-gradient(160deg,#140008,#3a0020,#0a0005)",
    shortDesc:
      "Questa scheda tratta specificamente il periodo dei 16 anni che Deirdre, Naoise e i Figli di Uisliu trascorrono in Alba (Scozia) dopo la fuga dall'Ulster — un capitolo di felicità rara nella tragedia, ambientato nei paesaggi del Loch Etive e dei Highlands. È il cuore della tradizione scozzese del mito di Deirdre, preservato nelle ballate delle Ebridi e coniugato al paesaggio scozzese come in nessun'altra mitologia celtica.",
    bio: {
      main: `Questa scheda approfondisce un aspetto specifico del mito di Deirdre — i sedici anni di esilio felice in Alba (la Scozia gaelica) — che la tradizione scozzese ha sviluppato con particolare intensità, mentre la versione irlandese del mito (trattata nella sezione dedicata a Conchobar mac Nessa) tende a passarci sopra rapidamente. Per la cultura gaelica insulare Deirdre non è solo "la donna più bella d'Irlanda": è anche "Deirdre degli Scotti", la donna la cui storia si è inscritta nei paesaggi di Argyll, del Loch Etive, dei Highlands occidentali. I suoi canti di addio alla Scozia sono tra i più belli della letteratura celtica.

L'antefatto è già narrato nel mito principale. Deirdre, figlia del cantastorie Fedlimid, è stata riservata alla nascita al re Conchobar mac Nessa per una profezia. Cresce isolata in una fortezza-foresta. A vent'anni, scorgendo un corvo che beve sangue sulla neve accanto a un telo nero, dichiara che amerà solo l'uomo con capelli neri come corvo, pelle bianca come neve, guance rosse come sangue. Scopre che tale uomo è Naoise, figlio di Uisliu, guerriero del Ramo Rosso di Conchobar. Gli impone un geis di fuggire con lei. Naoise, con i due fratelli Ainnle e Ardan, accetta — e i quattro scappano attraversando il mare verso Alba.`,
      sub1: "L'arrivo in Alba — l'accoglienza del re di Scozia",
      text1: `I Figli di Uisliu e Deirdre sbarcano sulla costa occidentale della Scozia, attorno a quello che oggi è Loch Etive (Argyll). La terra è loro sconosciuta; il gaelico di Alba è leggermente diverso da quello dell'Ulster; gli abitanti sono fratelli ma stranieri. Eppure vengono accolti. Il re di Alba dell'epoca (variamente identificato nelle fonti) nota Naoise e i fratelli come guerrieri di enorme capacità, e li assume come mercenari al suo servizio. I Figli di Uisliu si distinguono in numerose campagne militari — difendono Alba dai vicini piratici, reprimono ribellioni, scortano convogli mercantili. Guadagnano rispetto, guadagnano terre: il re di Alba concede loro un feudo vicino a Loch Etive, dove si stabiliscono.

Qui, per sedici anni, vivono la loro vita più felice. Naoise e Deirdre costruiscono una dimora sulle rive del loch, circondata da foreste di quercia, frassino e betulla. I fratelli Ainnle e Ardan hanno case vicine, prendono mogli locali, hanno figli. Deirdre impara a cacciare il cervo nelle Highlands, a pescare il salmone nei fiumi che scendono dalle colline, a intessere tessuti con la lana delle pecore nere locali. Naoise è cantante come era suo padre Uisliu: la sera la sua voce risuona sul loch, e — dice la tradizione — anche gli animali si fermavano per ascoltare.`,
      sub2: "I luoghi — la geografia emotiva delle Highlands",
      text2: `La tradizione scozzese ha punteggiato il paesaggio di Argyll e del Lorne con i toponimi legati a Deirdre e ai Figli di Uisliu. Alcuni sono attestati ufficialmente, altri sono folklore locale; insieme formano una "geografia del mito" che ancora oggi è riconoscibile sul territorio.

Glen Etive — la valle del Loch Etive — è "Gleann Èite" in gaelico, e molti dei suoi siti portano nomi collegati: Gualann na Deirdre ("la Spalla di Deirdre") è una cima sul lato nord; Grianan Deirdre ("il Solarium di Deirdre") è una terrazza naturale dove tradizionalmente ella si sedeva a tessere al sole. Il Ben Cruachan, la grande montagna che domina il loch dal sud, è associato alle cacce dei Figli di Uisliu; le sue pendici più alte sono "le Vedette di Naoise". Sul Loch Etive stesso, un'isola minore è "Eilean Uisneach" — l'"Isola di Uisliu".

Anche oltre Argyll la tradizione ha lasciato segni. Dunstaffnage, vicino a Oban, è un castello medievale dove il folklore locale colloca un palazzo precedente di Naoise. Loch Leven e Glen Coe, più a nord, hanno toponimi collegati. Addirittura le Hebrides — Mull, Iona — conservano leggende di visite della coppia durante la loro vita in Alba.

Questa densità toponimica è l'indizio di una tradizione orale lunga secoli: la cultura gaelica scozzese ha incorporato il mito di Deirdre così profondamente da farne parte del paesaggio stesso. Quando nel XVIII-XIX secolo Alexander Carmichael e altri raccoglitori giravano le Highlands, si vedevano additate pietre e colline "dove Deirdre camminava".`,
      sub3: "Il richiamo a casa — l'inganno di Conchobar",
      text3: `Dopo sedici anni, il richiamo da Emain Macha. Conchobar mac Nessa, il re dell'Ulster, finge di voler la riconciliazione. Manda Fergus mac Róich come garante del salvacondotto — scelta politicamente pesante, perché Fergus era l'ex-re legittimo e il suo onore personale è impegnato nel voto. Il messaggio arriva a Deirdre e Naoise sulle rive del loch. La reazione di Deirdre è profetica: ha sogni di cattivo presagio, raccomanda a Naoise di rifiutare. Ma Naoise, dopo sedici anni di esilio, sente il richiamo della patria e del proprio onore di guerriero ulaid. "Non rifiuteremo il salvacondotto di Fergus mac Róich. Andiamo."

Deirdre compone allora il suo canto d'addio — il 'Farewell to Alba', uno dei più bei testi della letteratura gaelica antica, conservato in varie versioni (la più completa nel Glen Massan Manuscript, XVI sec.). In una delle sue stanze più celebri dichiara: "Amata Alba, amata terra / non vorrei lasciarti / non fosse che con Naoise vado. / Valle delle anatre e delle allodole, / valle dei cervi e delle cerve, / valle del salmone che nuota controcorrente, / ti amo più del cielo d'Irlanda."

Il canto è ambivalente: lei parte per amore, ma vorrebbe restare. Tutte le sue premonizioni si realizzeranno. Sbarcando in Irlanda, Conchobar trattiene Fergus con un geis forzato (un banchetto da cui Fergus non può andarsene senza disonore), separandolo dai suoi protetti. I Figli di Uisliu, soli e senza salvacondotto effettivo, vengono attaccati a Emain da Eógan mac Durthacht. Naoise è ucciso per primo, poi Ainnle, poi Ardan. Deirdre è catturata.

Nel mito classico Deirdre muore lanciandosi dal carro che la sta portando da Eógan (suo nuovo "padrone" assegnato da Conchobar). Nella versione scozzese il finale è leggermente diverso: Deirdre si getta nella tomba di Naoise durante la sua sepoltura e vi muore di dolore. Le ceneri o i corpi vengono seppelliti, ma ogni tentativo di tenerli separati fallisce: da entrambe le tombe crescono alberi di tasso i cui rami si intrecciano in cielo a formare una volta unica. È il simbolo dell'amore più forte della morte.`,
      sub4: "Il canto di Deirdre — la tradizione scozzese del XIX-XX secolo",
      text4: `I lamenti di Deirdre — in particolare il 'Farewell to Alba' — sono stati conservati nella tradizione orale delle Ebridi scozzesi fino al XX secolo, molto più vivi che nella stessa Irlanda. Alexander Carmichael nel Carmina Gadelica registra varianti del canto raccolte a Barra, South Uist, Harris. Alcuni pescatori e donne anziane delle Ebridi, ancora nel 1870-1900, potevano cantare versioni di 200-300 versi del lamento, trasmesse oralmente di generazione in generazione. Era considerato canto femminile per eccellenza, spesso cantato durante lavori domestici (filatura, burrificazione, allattamento), per la sua potenza emotiva e per la sua lunghezza — adatta a scandire il tempo del lavoro.

John Francis Campbell nel 1860 pubblicò una delle versioni più complete (nei 'Popular Tales of the West Highlands'), indicando come fonte una donna di Barra di nome Mairi Mac-a-Phí, che lo aveva imparato dalla nonna. La qualità poetica di queste versioni orali è alta: il dialetto scozzese-gaelico aveva preservato la metrica e la costruzione strofica dell'originale medievale in modo mirabile.

Nel XX secolo, con il declino del gaelico scozzese, la tradizione orale si è quasi estinta. Ma la memoria è passata al revival gaelico accademico: il School of Scottish Studies di Edinburgh (fondato 1951) ha registrato le ultime testimonianze sonore del Lamento di Deirdre negli anni '50-'70, preservando voci di Donald MacRury, Cáit Ní Dheargan, e altri ultimi cantori tradizionali.

Oggi "Deirdre of the Sorrows" (in irlandese Deirdre an Bhróin, in scozzese Deirdre na Truaighe) è anche figura di ricezione letteraria moderna. J.M. Synge ha scritto 'Deirdre of the Sorrows' (1910, incompiuto alla sua morte), uno dei grandi drammi dell'Abbey Theatre. W.B. Yeats ha scritto 'Deirdre' (1907), dramma in versi. AE Russell ha scritto un 'Deirdre' (1905). Nel XX secolo numerose altre rielaborazioni. Il mito è vivo oggi come mille anni fa.`,
    },
    versions: [
      {
        era: "Longes mac nUislenn (IX-XII sec.)",
        name: "Versione irlandese antica",
        text: "Il testo-base del mito, conservato nel Book of Leinster (XII sec.) con nuclei linguisticamente più antichi. È la versione 'canonica' in cui i 16 anni in Alba sono appena accennati: la focalizzazione irlandese è sulla tragedia di Conchobar.",
      },
      {
        era: "Glen Massan Manuscript (XVI sec.)",
        name: "Versione scozzese con il Farewell to Alba",
        text: "Un manoscritto gaelico-scozzese del XVI sec. conservato nella National Library of Scotland: contiene una versione della storia in cui i capitoli scozzesi sono espansi e il 'Farewell to Alba' (Soraidh slán leat, Albainn) è dato nella sua forma più completa. È la fonte principale della tradizione scozzese del mito.",
      },
      {
        era: "Popular Tales of the West Highlands (1860)",
        name: "J.F. Campbell e la raccolta orale",
        text: "John Francis Campbell raccoglie nell'Ottocento le versioni orali sopravvissute nelle Ebridi. Scopre che la tradizione popolare scozzese ha preservato elementi del mito perduti in Irlanda — specialmente la dimensione paesaggistica (toponomastica Deirdre) e la lirica del lamento.",
      },
      {
        era: "Drammi moderni (Yeats, Synge, AE)",
        name: "La rinascita letteraria novecentesca",
        text: "Il Celtic Revival irlandese ha prodotto una fioritura di rielaborazioni del mito di Deirdre. J.M. Synge, W.B. Yeats, George William Russell ('AE'), Lady Gregory — tutti hanno scritto versioni teatrali. 'Deirdre of the Sorrows' di Synge (1910) è considerato il capolavoro del genere, ultimo dramma del suo autore morente di Hodgkin a 37 anni.",
      },
    ],
    cult: "Glen Etive e il Loch Etive (Argyll, Scozia occidentale) sono il cuore paesaggistico del mito di Deirdre nella tradizione scozzese. Gualann na Deirdre ('Spalla di Deirdre') è una cima identificabile sulla costa nord del loch. Grianan Deirdre è una terrazza naturale non lontana. Nel XIX-XX sec. erano meta di pellegrinaggio per persone di cultura celtica. Oggi il Glen Etive è noto anche come luogo di riprese cinematografiche (Skyfall, 2012), ma la dimensione mitica resiste nella tradizione locale.",
    influence: [
      {
        era: "Tristano e Isotta — probabile archetipo",
        text: "Il triangolo Conchobar-Naoise-Deirdre è strutturalmente identico a quello Marco-Tristano-Isotta. La fuga in una terra straniera, il lungo esilio felice, il richiamo ingannevole, la morte violenta della coppia, le tombe cui crescono alberi intrecciati — tutti elementi presenti in entrambi i miti. L'ipotesi di derivazione da Deirdre a Tristano è filologicamente forte (James Carney, Rachel Bromwich) e colloca questo mito alla radice del grande romanzo medievale europeo.",
      },
      {
        era: "Il Celtic Revival e il teatro irlandese",
        text: "Deirdre è stata figura centrale della rinascita letteraria irlandese del primo Novecento. Il suo mito ha fornito la materia per alcune delle più grandi opere del teatro irlandese moderno e ha contribuito a fondare l'identità culturale della nuova Irlanda.",
      },
      {
        era: "Paesaggio culturale scozzese",
        text: "La mappa emotiva di Argyll e Lorne è ancora oggi percorsa dalla tradizione di Deirdre. Le guide turistiche delle Highlands occidentali menzionano regolarmente i siti Deirdre come 'landmarks culturali'. Nel 2012 il governo scozzese ha incluso i 'Deirdre sites' di Glen Etive tra i luoghi di interesse culturale tutelato.",
      },
      {
        era: "Archetipo della bellezza tragica",
        text: "'Deirdre of the Sorrows' è universalmente riconosciuta come uno degli archetipi più potenti della letteratura mondiale: la bellezza che, per sua natura, porta alla tragedia. Paralleli: Elena di Troia, Ismaela, Violetta Valery. L'unicità di Deirdre è la dimensione geografica — è anche 'bellezza del luogo', inseparabile dal paesaggio scozzese e irlandese.",
      },
    ],
    texts: [
      {
        title: "Il Farewell to Alba",
        source: "Glen Massan Manuscript, XVI sec., trad. Kuno Meyer (1902)",
        text: "Amata Alba, amata terra! / Non lascerei mai la tua riva / non fosse che con Naoise viaggio. / Amato Dún Fidhga, amato Dún Finn! / amato il tuo fiume che scende dai monti, / amati i cervi nelle tue valli, / amato il merlo nel biancospino. / Valle delle anatre e delle allodole, / valle dei cervi del manto rosso, / valle del salmone che balza, / ti amo più della piana di Muirthemne. / Glen Orchy, Glen Etive, Glen Massan! / Dolci, dolci nomi al mio orecchio — / dolce l'aria del mattino sul loch, / dolce il sole che scende su Ben Cruachan. / Addio Alba — non ti rivedrò più. / Le mie lacrime bagnano la prua della barca. / Il mare ci porta verso l'Ulster del re crudele. / Il cuore mi dice: là è la morte.",
      },
      {
        title: "Il lamento finale sopra Naoise",
        source:
          "Longes mac nUislenn, Book of Leinster, XII sec., trad. Vernam Hull (1949)",
        text: "'Bella è la vostra tomba, o Figli di Uisliu. Amato mio Naoise: i tuoi occhi erano fari per chi ti guardava, i tuoi capelli come l'ala di un corvo, la tua voce come il miele versato nella ciotola. Dimmi: come vivrò dopo di te? Non mangerò più, non berrò più, non riderò più, non posso vivere un solo giorno senza Naoise. Il mondo senza di te è una caverna buia. I re mi offrono la regalità — rifiuto. Conchobar mi offre le sue braccia — sputo nelle sue braccia. Non resterò tra gli uomini.' Allora Deirdre si gettò nella tomba e abbracciò il cadavere di Naoise, e il suo cuore si spezzò; e morì sopra di lui, e così li seppellirono insieme. Dalle loro due tombe crebbero due tassi, che si allungarono verso il cielo e si incontrarono sopra l'Emain Macha formando una volta. Conchobar fece abbattere i tassi tre volte, e tre volte rinacquero.",
      },
    ],
  },
];

/* ══════════════════════════════════════════════════════════════════════
   MITI SCOZZESI E INSULARI
   ══════════════════════════════════════════════════════════════════════ */

const SCOTTISH_MYTHS = [
  /* ════════════════════════════════════════════════════════════════════
     1. CARMINA GADELICA — il Corpus della Spiritualità Gaelica
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "carmina-gadelica",
    tag: "Corpus spirituale",
    title: "Carmina Gadelica — Il Corpus della Spiritualità Gaelica",
    type: "Mito",
    epithet:
      "Il Grande Archivio di Preghiere, Benedizioni e Incantesimi delle Highlands",
    chips: ["Ebridi", "Alexander Carmichael", "Preghiera", "Folklore"],
    heroColor: "linear-gradient(160deg,#0a0c1a,#1a2030,#050810)",
    shortDesc:
      "Il Carmina Gadelica è la monumentale raccolta di preghiere, benedizioni, incantesimi e canti gaelici delle Highlands e delle Ebridi, compilata da Alexander Carmichael tra il 1860 e il 1910. Sei volumi che contengono centinaia di testi tradizionali sul filo che intreccia cristianesimo e paganesimo nell'anima gaelica scozzese: preghiere alla Vergine che hanno la cadenza delle invocazioni a Brigid, benedizioni del lavoro, formule contro il malocchio, inni all'alba e al tramonto. È la Bibbia folklorica della cultura gaelica.",
    bio: {
      main: `Il Carmina Gadelica ("Canti Gaelici") è una delle più grandi opere di raccolta etnografica del XIX secolo, e la sorgente principale per la comprensione della spiritualità popolare gaelica scozzese. Il suo compilatore, Alexander Carmichael (1832-1912), nacque nell'isola di Lismore in Argyll, fu impiegato doganale che percorse per 50 anni le Ebridi e le Highlands nord-occidentali, e dedicò la vita a un progetto che molti considerarono stravagante: registrare le preghiere, gli incantesimi, le benedizioni, le canzoni di lavoro che le persone anziane di quelle terre ancora sapevano a memoria, in un gaelico puro antico, e che stavano scomparendo con l'urbanizzazione e l'anglicizzazione.

Il risultato del suo lavoro è straordinario: sei volumi pubblicati tra il 1900 e il 1971 (gli ultimi postumi), per un totale di oltre 600 testi gaelici con traduzione inglese a fronte, accompagnati da note etnografiche di grande valore. La raccolta è oggi riconosciuta come una delle più importanti opere folkloriche europee, paragonabile alle raccolte dei fratelli Grimm ma più profondamente spirituale e meno narrativa — focalizzata sulla lirica devozionale-magica più che sulla fiaba.

Ciò che rende il Carmina Gadelica mitologicamente rilevante — e motivo per cui merita una scheda nella sezione mitologica di Mythologia — è che conserva uno strato di spiritualità pre-cristiana intrecciato al cristianesimo superficiale in modo tale da essere a volte inestricabile. Le preghiere "alla Vergine Maria" hanno spesso la cadenza, il metro, le invocazioni proprie di canti alla dea Brigid. Le benedizioni del fuoco del focolare hanno elementi ritualmente pre-cristiani (il fuoco perpetuo del focolare, simbolo di Brigid-Brighid). Le formule contro il malocchio invocano sincreticamente santi cristiani e figure del folklore pre-cristiano. Il Carmina Gadelica documenta come la cultura gaelica abbia conservato nell'involucro cristiano un nucleo pagano continuo.`,
      sub1: "Alexander Carmichael — il raccoglitore",
      text1: `Alexander Carmichael (in gaelico Alasdair MacGilleMhìcheil) era uomo di cultura mista: poliglotta (gaelico, inglese, latino, greco), poeta dilettante, profondo conoscitore della cultura gaelica. Il suo impiego come esattore dei dazi doganali ("excise officer") lo portò a vivere per lunghi periodi nelle Ebridi: Lismore, Mull, Tiree, Barra, North Uist, South Uist, Benbecula, Harris, Lewis. Invece di limitarsi al suo lavoro ufficiale, in ogni posto dove si trovava cercava le persone anziane — soprattutto donne — e si faceva recitare canti, preghiere, formule.

Il suo approccio era metodologicamente ambivalente per gli standard moderni. Da una parte, era rigoroso: trascriveva in gaelico esatto, annotava il nome dell'informatore, il luogo, la data, il contesto. Dall'altra, "editava" liberamente: mescolava versioni, completava lacune, a volte aggiungeva versi suoi (come chiarito dai filologi successivi, specialmente John Lorne Campbell nell'edizione critica del 1940-50). Il Carmina Gadelica non è dunque "registrazione scientifica" nel senso moderno, ma antologia letterariamente rielaborata — più vicina, come genere, alle raccolte di Herder o di Macpherson che a quelle di Franz Boas. Ciò non ne sminuisce il valore: i nuclei autentici sono potenti, e le liberi rielaborazioni di Carmichael sono comunque in gaelico competente e culturalmente integrate.

Il suo metodo sul campo è affascinante. Le informatrici più preziose erano donne anziane, spesso analfabete, che avevano appreso i testi da madri e nonne. Carmichael si sedeva accanto a loro mentre filavano, mentre allattavano, mentre preparavano il pane, e le registrava. Molte di loro — alle luce della letteratura cristiana ufficiale — si sentivano in colpa di conoscere certi testi (perché "pagani" o "superstizione"), e Carmichael dovette spesso rassicurarle. Alcune informatrici ricorrenti: Catherine MacNeill di Barra, Bean-a'-Ghobhainn (la "donna del fabbro") di South Uist, Christine MacInnes di Harris.`,
      sub2: "Il contenuto — preghiere, incantesimi, canti di lavoro",
      text2: `Il Carmina Gadelica è organizzato in sezioni tematiche. I primi due volumi (1900) contengono principalmente "Rannan Beannachaidh" (rime di benedizione) e preghiere. I successivi (1940-1971, postumi, editati da altri) aggiungono canzoni di lavoro, incantesimi, formule magiche.

Preghiere del mattino e della sera: testi in cui chi prega saluta il sole al levarsi e al tramonto. Molti studiosi li leggono come rielaborazione cristiana di culti solari pagani — il sole è "Dio" o "Cristo" ma l'atteggiamento è quello di una devozione solare antica. "Salutò tutti gli esseri viventi / venne verso di me il sole levante. / Vivo nella sua luce, / vivo per la sua grazia" — passaggi simili abbondano.

Preghiere a "Bride" (Brigid, cristianizzata come Santa Brigida): centinaia di benedizioni. La "Bride dei Canti" del Carmina è simultaneamente santa e dea, figura del fuoco e della protezione, invocata nei parti, nelle malattie, al risveglio dei bambini, contro le volpi che assaltano il pollame.

Benedizioni del lavoro: una delle sezioni più affascinanti. Ogni gesto del lavoro tradizionale aveva la sua preghiera: benedizione del telaio (l'Òran Beannachaidh a' Bheairt), del pane che lievita (Beannachd an Arain), del mungere (Beannachd Bleoghain), del pescare (Beannachd Iasgaich). È la spiritualizzazione totale del quotidiano: nessun gesto senza invocazione sacra.

Incantesimi terapeutici e apotropaici: formule contro il malocchio (an cronachadh), contro l'herpes zoster, contro le dislocazioni (interessantissime quelle contro le slogature: invocano San Colombano ma contengono riferimenti a nodi e fili che rimandano al magismo pre-cristiano).

Canti funebri (caoineadh), canti di nascita, canti di matrimonio. Ogni soglia della vita ha il suo corpus lirico.`,
      sub3: "Pagano e cristiano — l'intreccio inestricabile",
      text3: `Il tratto più interessante del Carmina Gadelica, dal punto di vista mitologico, è il sincretismo. I testi non distinguono tra cristiano e pagano: sono tutti "gaelici", parte di un unico tessuto spirituale. Ma il filologo, analizzandoli, riconosce strati.

Esempio paradigmatico: 'Bride's Praise' ("Lode di Brigid"). Il testo invoca esplicitamente "Sancta Bridget", ma le virtù che le attribuisce sono quelle dell'antica dea: protezione degli animali partorienti, accensione del fuoco del focolare, custodia del latte e del burro, benedizione delle erbe medicinali. Sono le prerogative di Brigid dea pagana, sovrapposte a Brigida santa del VI sec.

Altro esempio: il 'Beannachadh Dûsga' ("Benedizione del Risveglio"). Il testo saluta il giorno ringraziando "Dio e Bride" insieme. Poi enumera la colazione, il fuoco, il latte delle mucche, il sole che si alza — ciascun elemento benedetto con una formula. La formula è cristiana nei nomi (Dio, Cristo, Maria, Brigid), ma la logica è quella di un'offerta rituale al sole-giorno-ritmo-cosmico di origine precristiana.

Un terzo esempio: le formule contro il malocchio (an cronachadh). Dichiaratamente "magiche" nel senso arcaico, esse invocano nel testo stesso Cristo e San Colombano, ma il rituale prescritto (versare acqua in una ciotola con pietre, recitare 7x, bere l'acqua rimasta, buttare il resto verso est) è manifestamente pagano.

Per gli studiosi del folklore gaelico (Anne Ross, John MacInnes, Donald Meek) il Carmina Gadelica è dunque un palinsesto: un testo cristiano sovrapposto a un testo pagano più antico, in cui entrambi gli strati sono leggibili.`,
      sub4: "L'eredità — revival gaelico, spiritualità contemporanea, celtic Christianity",
      text4: `Il Carmina Gadelica ha avuto un'influenza enorme nel XX e XXI secolo, ben oltre il mondo gaelico-scozzese.

Nell'ambiente del Celtic Christianity revival (fine XX sec.), iniziato dalla Iona Community di George MacLeod, il Carmina è stato letto come documento di una "spiritualità celtica alternativa": più corporea, più ecologica, più femminile, più integrata alla natura, rispetto alla spiritualità anglicana o cattolica romana. Autori come John O'Donohue ('Anam Cara', 1997 — bestseller globale) hanno attinto a piene mani al Carmina come fonte di una spiritualità "celtica" contemporanea. Questa operazione è stata criticata da alcuni studiosi (Donald Meek in 'The Quest for Celtic Christianity', 2000) per la sua selettività romantica, ma ha diffuso nel mondo una conoscenza del Carmina.

Nel movimento neopagano globale il Carmina è stato utilizzato come fonte per pratiche spirituali gaeliche: Wicca celtica, Druidism ricostruzionista, neo-druidi si sono serviti abbondantemente dei testi. Alcune pratiche attuali (invocazioni a Brigid a Imbolc, "benedizioni del fuoco" quotidiane, rituali stagionali) attingono direttamente al Carmina.

Per la cultura gaelica scozzese contemporanea il Carmina è testo identitario. Il governo scozzese lo ha usato come riferimento per la sua politica di sostegno al gaelico. I corsi universitari di gaelico lo studiano. Traduttori continuano a proporne nuove versioni inglesi (la più recente e completa è quella di 2023 a cura della Scottish Poetry Library).

E per la poesia contemporanea ha influenza continua: Kathleen Jamie, Rody Gorman, Meg Bateman, Aonghas MacNeacail attingono esplicitamente al Carmina come serbatoio lirico. È ancora un testo vivo, non un oggetto archeologico.`,
    },
    versions: [
      {
        era: "Prima edizione Carmichael (1900-1912)",
        name: "I due volumi originali",
        text: "I primi due volumi del Carmina Gadelica sono pubblicati da Carmichael stesso nel 1900, con una seconda edizione riveduta nel 1928 postuma. Contengono principalmente preghiere, benedizioni e qualche incantesimo. Sono l'edizione 'pura' di Carmichael, con le sue note etnografiche originali.",
      },
      {
        era: "Edizione completa (1940-1971)",
        name: "Volumi III-VI postumi",
        text: "Gli ultimi quattro volumi sono pubblicati postumi, curati da James Carmichael Watson (nipote di Carmichael) e altri. Aggiungono canti di lavoro, incantesimi più oscuri, note etnografiche supplementari. L'edizione critica di John Lorne Campbell (1948) ha evidenziato le libertà testuali di Carmichael.",
      },
      {
        era: "Traduzioni inglesi",
        name: "Diffusione globale",
        text: "Il Carmina è stato più volte tradotto integralmente in inglese (oltre al bilingue originale). La traduzione più diffusa è quella di Esther de Waal (1988). Sono state pubblicate anche selezioni tematiche: 'The Sun Dances' (1977), 'Celtic Prayers' (1981), 'Bride's Book' (raccolte specifiche su Brigid).",
      },
      {
        era: "Digitalizzazione e accesso online (2000s)",
        name: "L'era digitale",
        text: "La Carmichael-Watson Collection dell'Università di Edinburgh ha digitalizzato migliaia di pagine di manoscritti originali di Carmichael, accessibili online dal 2010. Oggi è possibile consultare direttamente i taccuini del raccoglitore, inclusi testi mai pubblicati nell'edizione a stampa.",
      },
    ],
    cult: "Il Carmina Gadelica è esso stesso un 'luogo di culto' letterario. La Carmichael-Watson Collection è ospitata alla Edinburgh University Library (Centre for Research Collections). Le Ebridi — Barra, South Uist, Harris, Lewis — dove Carmichael raccolse i testi sono meta di pellegrinaggio culturale per persone di ambiente celtic Christian o gaelic revival. La Iona Community sull'isola di Iona conserva una tradizione liturgica che incorpora preghiere del Carmina.",
    influence: [
      {
        era: "Celtic Christianity revival (anni 1980-2000)",
        text: "Il Carmina è la fonte principale del movimento 'celtic Christianity' contemporaneo. Autori bestseller: John O'Donohue ('Anam Cara', 1997; 'Beauty', 2004), Philip Newell ('Celtic Spirituality', 1997), Esther de Waal. Hanno venduto milioni di copie nel mondo, estendendo la fama del Carmina enormemente.",
      },
      {
        era: "Neopaganesimo celtico",
        text: "Gaelic Witchcraft, Reclaiming, Druidism ricostruzionista — tutte queste tradizioni neopagane contemporanee usano il Carmina come fonte. Brigid è diventata una delle divinità più invocate nel neopaganesimo globale, in larga parte grazie alla disponibilità testuale del Carmina.",
      },
      {
        era: "Poesia scozzese contemporanea",
        text: "Sorley MacLean, Iain Crichton Smith, Meg Bateman, Rody Gorman — la grande poesia gaelica-scozzese del XX-XXI sec. dialoga esplicitamente con il Carmina come canone. Lo stesso avviene per autori in inglese: Kathleen Jamie ('Findings', 2005) ne riprende il tono delle benedizioni del quotidiano.",
      },
      {
        era: "Etnomusicologia e world music",
        text: "Molti canti del Carmina sono stati musicati da artisti contemporanei: Julie Fowlis (registrazioni delle Ebridi), Capercaillie, Karine Polwart. 'Thu Fhéin, a Bhrighde' ('Tu, oh Bride') è diventata quasi un inno del gaelic revival musicale.",
      },
    ],
    texts: [
      {
        title: "Preghiera del mattino",
        source:
          "Carmina Gadelica, Vol. I, §26, raccolto da Catherine MacNeil a Barra, 1873",
        text: "Tu sei il sole della mia casa al mattino, / tu il fuoco del focolare di sera, / tu la lampada che guida nella notte. / Grazie a te, Brigid dalle otto virtù, / grazie a te, Cristo dei chiodi, / grazie a te, Maria della corona. / Che nessuno spirito maligno / attraversi la mia soglia oggi. / Che la mia parola sia miele, / la mia mano generosa, / i miei passi sicuri, / il mio cuore libero / fino alla sera.",
      },
      {
        title: "Benedizione per far lievitare il pane",
        source: "Carmina Gadelica, Vol. III, §292",
        text: "Il tuo pane cresca, il tuo pane cresca, / come cresce la luna a partire dal suo piccolo corno — / Brigid delle mandrie, / donna della pace, / metti la mano sul mio impasto. / Il tuo pane cresca come cresce Cristo / nel grembo della sua santa madre. / Il tuo pane sia buono per ogni viaggiatore / che bussa alla mia porta oggi, / il tuo pane sia bianco e dolce / come la neve sulla vetta al mattino.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     2. AN DÀ SHEALLADH — la Seconda Vista
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "da-shealladh",
    tag: "Dono profetico",
    title: "An Dà Shealladh — la Seconda Vista",
    type: "Mito",
    epithet: "Il Dono-Maledizione della Veggenza nelle Highlands",
    chips: ["Highlands", "Veggenza", "Profezia", "Kenneth Mackenzie"],
    heroColor: "linear-gradient(160deg,#0c0620,#201035,#050210)",
    shortDesc:
      "An Dà Shealladh — 'la Seconda Vista' — è il dono-maledizione della veggenza nelle Highlands scozzesi: la capacità di vedere eventi futuri o distanti spazialmente, spesso connessi a morte imminente. Attestata da centinaia di testimonianze dal XVI al XX secolo, è la più documentata forma di presunta chiaroveggenza della cultura europea. Il suo rappresentante leggendario è Kenneth Mackenzie (Coinneach Odhar), il 'Veggente di Brahan' — trascritto in centinaia di profezie molte delle quali avverate.",
    bio: {
      main: `An Dà Shealladh — letteralmente "la Seconda Vista" (dà = due, sealladh = vista) — è una delle più caratteristiche credenze del folklore gaelico scozzese: la capacità paranormale di vedere eventi non accessibili ai sensi ordinari, siano essi futuri (precognizione), distanti nello spazio (telepresenza) o oggi invisibili (fantasmi). Il fenomeno è attestato nelle Highlands scozzesi e nelle Ebridi con una continuità e densità documentaria uniche in Europa: testimonianze affidabili, raccolte da studiosi ecclesiastici, filosofi, medici, da metà del XVI secolo fino alla metà del XX, formano un corpus quasi ininterrotto.

Il nome stesso è rivelatore. La "prima vista" è quella normale: vedo quel che è qui e ora. La "seconda" è un senso aggiuntivo — non sostitutivo né oppositivo — che si affianca al primo. Un veggente (taibhsear in gaelico, fìshich — "colui che vede" in un'altra attestazione) non vede "invece di" ma "in aggiunta a". Questa distinzione fenomenologica è importante: le visioni del Dà Shealladh non sono allucinazioni sostitutive ma sovrapposte, come un doppio strato di realtà visibile simultaneamente. I veggenti descrivono spesso questa coesistenza come spiacevole e stancante.

Il contenuto delle visioni è quasi sempre negativo. Morte imminente di conoscenti, incidenti, disgrazie familiari, eventi catastrofici. Raramente il Dà Shealladh mostra cose belle — nozze, nascite, successi. Questo carattere predominantemente infausto del dono ne fa una maledizione più che un privilegio: i veggenti anziani di solito pregano di perdere il dono nella vecchiaia, e alcuni dicono che avviene effettivamente. È una caratteristica del folklore che si ripete: "vedere" è gravoso.`,
      sub1: "Le forme tipiche delle visioni",
      text1: `Gli studi etnografici hanno catalogato le forme ricorrenti delle visioni del Dà Shealladh. Le più frequenti sono:

'Sudari': vedere un vivo con il sudario della morte già addosso. Il grado in cui il sudario copre il corpo indica la lontananza temporale della morte: un sudario al ginocchio significa morte tra molti anni, al petto tra alcuni mesi, al volto nei prossimi giorni. Questo motivo è attestato dal XVI sec. fino al XX in centinaia di testimonianze.

Cortei funebri 'fantasma': vedere un corteo di persone vestite a lutto che trasporta una bara lungo un sentiero. La persona che sarà seppellita cammina nel corteo, o ne è assente (nel qual caso è quella nella bara). I veggenti descrivono di incontrare fisicamente tali cortei sulle strade: devono scansarsi per non farsi urtare da individui visibili a loro ma invisibili ai compagni.

Fuochi spettrali: luci fluttuanti ('fuochi fatui' nei boschi, ma anche luci dentro case vuote). Indicano futuri incidenti, specialmente morti per fuoco.

Doppi ('còmhlan'): vedere due copie di una persona, una sovrapposta all'altra. La "seconda" copia è spesso in abiti diversi, e preannuncia un cambiamento significativo nella vita della persona.

Visioni di animali: soprattutto il "cane nero" (cù dubh), presagio universale di morte. Vedere un grosso cane nero in circostanze anomale era segno quasi sicuro di un decesso in famiglia entro settimane.

Visioni di eventi lontani: vedere naufragi di navi che erano effettivamente in corso a centinaia di chilometri di distanza, incendi di case, battaglie. Alcuni veggenti raccontavano le scene in diretta — e i dettagli venivano confermati a giorni di distanza quando le notizie arrivavano.`,
      sub2: "Kenneth Mackenzie, il Veggente di Brahan",
      text2: `Il più famoso veggente della tradizione scozzese è Kenneth Mackenzie, detto Coinneach Odhar ("Kenneth il Biondo" o "Kenneth il Pallido"), noto come il Brahan Seer ("Veggente di Brahan"). Figura semi-leggendaria, attivo probabilmente nel XVII secolo (anche se alcuni studiosi ritengono che la sua figura conflettesse memorie di più veggenti reali in uno solo), Kenneth Mackenzie è ricordato per centinaia di profezie — molte delle quali, secondo la tradizione locale e documenti successivi, si sono avverate.

Le profezie di Brahan Seer (raccolte da Alexander Mackenzie, parente omonimo, in 'The Prophecies of the Brahan Seer', 1877) sono specifiche e sorprendenti. Alcune tra le più famose:
- "Navi viaggeranno attorno alla retro di Tomnahurich" (una collina presso Inverness): all'epoca apparentemente assurdo, si realizzò con la costruzione del Canale Caledoniano nel 1822-47.
- "Le Highlands saranno deserte per il ferro nero" (i binari della ferrovia): attestato nei decenni seguenti con le Highland Clearances e l'arrivo delle ferrovie.
- "Un principe con sei dita alla mano arriverà da oltre il mare": non chiaro a quale evento si riferisca, ma circolano ipotesi.

La fine di Brahan Seer, secondo la tradizione, è tragica. La contessa di Seaforth (sua patrona) gli chiese cosa stesse facendo suo marito Kenneth Mackenzie, terzo conte di Seaforth, lontano in Francia. Il veggente vide il conte in un palazzo parigino con un'altra donna. Pressato, lo disse alla contessa, che per rabbia lo condannò al rogo per stregoneria. Prima di morire, Brahan Seer pronunciò la più celebre delle sue profezie: il 'Seaforth Doom', predicendo l'estinzione della stirpe del marito infedele attraverso una serie di specifiche caratteristiche dei futuri conti. La profezia — sbalorditivamente — si realizzò nel 1815 con l'estinzione della linea Seaforth. Il che ha naturalmente sollevato sospetti sulla sua autenticità retrospettiva.`,
      sub3: "Le attestazioni ecclesiastiche e scientifiche",
      text3: `Un tratto straordinario del Dà Shealladh è la sua attestazione da parte di osservatori cristianamente ortodossi o scientificamente inclini, che non avevano ragione di favorire credenze "superstiziose" ma che pure riconoscevano la realtà fenomenologica del dono.

Il reverendo Robert Kirk, ministro della chiesa di Aberfoyle, nel 1691 pubblicò 'The Secret Commonwealth of Elves, Fauns and Fairies' — uno dei primi trattati sistematici sul sovrannaturale gaelico scritto da un ministro protestante. Kirk registra numerosi casi di Dà Shealladh tra i suoi parrocchiani, descrivendoli con rispetto e precisione. Muore in circostanze misteriose nel 1692 — la tradizione locale dice che il Popolo Fatato lo rapì per rappresaglia per aver rivelato i loro segreti.

Martin Martin, un gaelico delle Ebridi pubblicò nel 1703 'A Description of the Western Islands of Scotland', che includeva una trattazione sistematica del Dà Shealladh con numerose testimonianze. Martin era illuminista nelle sue altre analisi (storia, etnografia), ma sul Dà Shealladh presenta i dati con cautelosa neutralità, citando testimonianze affidabili e lasciando al lettore la valutazione.

Samuel Johnson, nel suo 'Journey to the Western Islands of Scotland' (1775), viaggiando nelle Highlands con James Boswell, discute estensivamente del Dà Shealladh. Johnson — illuminista, scettico per natura — afferma di non essere riuscito a confermare né a smentire il fenomeno, ma registra testimonianze abbondanti da persone che riteneva credibili (ministri locali, nobili, medici).

Nel XIX-XX sec. la Society for Psychical Research (fondata 1882, Londra) ha raccolto materiale sistematico sul Dà Shealladh scozzese, considerandolo uno dei casi europei meglio documentati di presunta chiaroveggenza. La monografia di Norman Macrae ('Highland Second-Sight', 1908) è riferimento classico.`,
      sub4: "Il declino e la persistenza",
      text4: `Il Dà Shealladh ha seguito il declino generale della cultura gaelica tradizionale. Con le Highland Clearances (1780-1850), l'emigrazione massiva, l'urbanizzazione, l'anglicizzazione, e soprattutto con l'industrializzazione del XX secolo, il fenomeno si è ridotto. Le ultime generazioni di veggenti di tradizione ininterrotta risalgono agli anni 1920-1960.

Eppure non è estinto. Testimonianze continuano a essere registrate. Nel 1988 la BBC Scotland ha prodotto un documentario 'An Dà Shealladh' con testimonianze contemporanee di persone delle Ebridi che dichiaravano di possedere il dono. Nel 2010 un progetto di ricerca dell'Università di Edinburgh ha raccolto oltre 50 testimonianze contemporanee, pubblicate in forma accademica da Shari Cohn ('Second Sight in the Highlands', 2015).

La pertinenza mitologica del Dà Shealladh è multipla. È un tratto culturale specifico, non replicato con la stessa intensità in altre culture celtiche; è radicato in un paesaggio specifico (le Highlands) e in una lingua specifica (il gaelico); è oggetto di una tradizione documentaria di straordinaria ricchezza; ed è tuttora percepito — da chi ne fa esperienza — come reale.

Dal punto di vista antropologico, il Dà Shealladh può essere interpretato come un sistema culturale di attribuzione di significato a esperienze percettive anomale (stati ipnagogici, déjà-vu, coincidenze significative, intuizioni pre-lutto). La cultura gaelica ha fornito un vocabolario strutturato per queste esperienze, validandole socialmente. Che questa "validazione" corrisponda a un fenomeno paranormale reale o a una costruzione culturale è questione aperta — ma il fatto culturale, in sé, è perfettamente documentato.`,
    },
    versions: [
      {
        era: "Secret Commonwealth (Robert Kirk, 1691)",
        name: "Il primo trattato",
        text: "Il reverendo Robert Kirk di Aberfoyle scrive 'The Secret Commonwealth of Elves, Fauns and Fairies', primo trattato sistematico sul sovrannaturale gaelico, che include trattazione del Dà Shealladh. Pubblicato postumo nel 1815. È la fonte più antica e una delle più importanti.",
      },
      {
        era: "Descrizione delle Ebridi (Martin Martin, 1703)",
        name: "L'etnografia illuminista",
        text: "Martin Martin pubblica 'A Description of the Western Islands of Scotland': include capitolo sistematico sul Dà Shealladh con casistica raccolta direttamente. Opera di grande valore per l'approccio pre-illuminista ma già metodologicamente attento.",
      },
      {
        era: "Profezie del Brahan Seer (1877)",
        name: "Il mito del veggente",
        text: "Alexander Mackenzie pubblica 'The Prophecies of the Brahan Seer', raccolta (in parte leggendaria) delle profezie attribuite a Coinneach Odhar, veggente semi-leggendario del XVII sec. Il libro è diventato cultuale nella cultura scozzese.",
      },
      {
        era: "Ricerche moderne (2000s-2010s)",
        name: "L'accademia contemporanea",
        text: "Shari Cohn ('Second Sight in the Highlands', 2015) ha pubblicato la prima analisi accademica sistematica contemporanea, con raccolta di oltre 50 testimonianze recenti. Il tema è stato studiato anche in ambito medico (psichiatria delle Highlands, psicologia delle esperienze anomale).",
      },
    ],
    cult: "Non c'è culto nel senso religioso del termine. Il Dà Shealladh è 'cultura' più che 'culto': una tradizione popolare diffusa, soprattutto nelle Ebridi (Skye, Lewis, Harris, North Uist) e nelle Highlands nord-occidentali. Lo stesso Brahan Seer è talvolta indicato come 'semi-santificato' nel folklore locale della zona di Strathpeffer (Ross-shire).",
    influence: [
      {
        era: "Letteratura scozzese",
        text: "Il Dà Shealladh permea la letteratura scozzese moderna. Walter Scott lo evoca in 'The Lady of the Lake' e in altri romanzi. R.L. Stevenson in 'The Master of Ballantrae'. Nel XX sec., Neil Gunn ('The Silver Darlings'), George Mackay Brown (Orcadi), Naomi Mitchison. L'intera 'tradizione sovrannaturale' della letteratura scozzese è debitrice al motivo.",
      },
      {
        era: "Parapsychology e Society for Psychical Research",
        text: "Il Dà Shealladh scozzese è stato per oltre un secolo 'caso di riferimento' nei dibattiti scientifici sulla parapsicologia. Frederic Myers, Henry Sidgwick, e altri founding fathers della SPR hanno analizzato materiale scozzese. Anche oggi, studi sulla presunta precognizione (Daryl Bem, Dean Radin) citano i casi scozzesi come parte della base empirica.",
      },
      {
        era: "Cinema, televisione, fiction",
        text: "Le profezie del Brahan Seer sono oggetto di film, documentari BBC, drammi radiofonici. 'Outlander' di Diana Gabaldon attinge al Dà Shealladh. 'The Highlander' (film e serie) ne porta tracce. Il motivo del veggente scozzese è ormai universale in cultura pop.",
      },
      {
        era: "Tradizione vivente contemporanea",
        text: "Diversamente da molti fenomeni folklorici, il Dà Shealladh non è solo memoria: è tradizione ancora attiva. Persone nelle Ebridi oggi dichiarano di averlo. Il fenomeno, nella sua dimensione soggettiva, è fatto contemporaneo oltre che patrimonio.",
      },
    ],
    texts: [
      {
        title: "Racconto di un veggente di North Uist",
        source:
          "Carmichael Watson Collection, Edinburgh University, MS 7, raccolto ca. 1875",
        text: "Quando ero giovane — dice l'uomo — ho visto per tre volte mio padre, e ogni volta in forma diversa. La prima: camminava verso casa nostra con un sudario fino al ginocchio. La seconda: un mese dopo, il sudario era già al petto. La terza: una sera di Samhain, il sudario gli copriva la bocca. Seppi allora che sarebbe morto entro l'inverno. Infatti morì a gennaio, di una caduta dal tetto. Nessuno gli disse mai che io lo avevo visto così: pensai che sarebbe stato crudele. Portai il peso della visione da solo per anni, piansi mio padre due volte: una quando lo vidi la terza volta, una quando morì veramente. Il dono è peso, non privilegio. Chi lo invidia non sa cosa chiede.",
      },
      {
        title: "La profezia del Seaforth Doom",
        source:
          "Alexander Mackenzie, The Prophecies of the Brahan Seer, 1877, cap. XI, trad. dall'inglese",
        text: "'Vedo un ultimo conte di Seaforth — sordo e muto. Egli sopravviverà a tutti i suoi figli: quattro figli nati e quattro sepolti prima del padre. La sua figlia — una Mackenzie di Mackenzie — tornerà dal mare e ucciderà la sorella in un incidente. E quando tutto questo sarà avvenuto — quando un conte di Seaforth sordo e muto vedrà seppellire tutti i suoi figli e la sua figlia porterà morte in famiglia — allora la gloria della Casa di Seaforth svanirà per sempre dalla Scozia, e nemmeno l'erba crescerà dove stava il loro palazzo di Brahan.' Così predisse Coinneach Odhar; e così avvenne, nel 1815, quando l'ultimo conte Francis Humberston Mackenzie di Seaforth — sordo e muto per malattia infantile — morì senza eredi maschi sopravvissuti. Il castello di Brahan fu demolito cinquant'anni dopo.",
      },
    ],
  },

  /* ════════════════════════════════════════════════════════════════════
     3. TYNWALD — l'Assemblea Millenaria dell'Isola di Man
     ════════════════════════════════════════════════════════════════════ */
  {
    id: "tynwald",
    tag: "Istituzione sacra",
    title: "Tynwald — l'Assemblea Millenaria di Manannán",
    type: "Mito",
    epithet: "Il più Antico Parlamento Continuo d'Europa",
    chips: ["Isola di Man", "Tynwald Hill", "5 luglio", "Democrazia antica"],
    heroColor: "linear-gradient(160deg,#081828,#16405c,#030810)",
    shortDesc:
      "Il Tynwald è il parlamento dell'Isola di Man, attestato dal 979 d.C. e quindi l'assemblea legislativa più antica d'Europa ancora in funzione. Si riunisce ogni 5 luglio sul Tynwald Hill, tumulo artificiale con terrazze rituali, per proclamare le leggi dell'anno. La cerimonia conserva elementi pre-cristiani che la tradizione attribuisce a Manannán mac Lir stesso — che si dice abbia istituito la prima assemblea mannese. È uno dei rari casi in Europa di continuità rituale ininterrotta tra paganesimo e istituzioni moderne.",
    bio: {
      main: `Il Tynwald è l'assemblea legislativa nazionale dell'Isola di Man, ed è la più antica istituzione parlamentare continua d'Europa ancora in funzione. Storicamente attestato dal 979 d.C. — oltre mille anni di continuità ininterrotta — è oggetto di studio sia per il diritto costituzionale comparato sia per l'antropologia politica. Ma la sua inclusione nella sezione mitologica di Mythologia ha una ragione specifica: le cerimonie annuali del Tynwald, celebrate ogni 5 luglio, conservano elementi rituali che i filologi e antropologi riconoscono come di origine pre-cristiana, probabilmente collegati al culto di Manannán mac Lir, re mitico e patrono dell'isola. Il Tynwald è dunque un raro esempio europeo di continuità rituale tra religione pagana e istituzione politica contemporanea.

Il nome stesso rivela l'origine. "Tynwald" deriva dal norreno antico "Þingvǫllr" — letteralmente "campo dell'assemblea" — lo stesso nome del sito islandese (Þingvellir) dove si riuniva l'Althing vichingo dal 930 d.C. L'etimologia norrena rimanda al periodo vichingo dell'Isola di Man (IX-XIII sec.), quando l'isola era parte del regno norreno-scozzese delle Ebridi e governata da jarl vichinghi. Furono i Vichinghi a formalizzare l'assemblea come "Thing", in continuità con le loro tradizioni scandinave. Ma la tradizione mannese sostiene che già prima dei Vichinghi l'isola avesse un'assemblea giudiziaria — istituita dal re mitico Manannán stesso — e che i Vichinghi si sovrapposero a una pratica pre-esistente celtica invece di inaugurarla.

Le prove storiche di continuità pre-vichinga sono indirette ma suggestive. La toponimia della collina del Tynwald (Cronk-y-Keeillown in mannese) mostra strati celtici. L'orientamento della collina è astronomicamente significativo (asse est-ovest allineato all'alba del solstizio). La struttura a terrazze circolari sovrapposte trova paralleli in monumenti celtici pre-cristiani (Tara in Irlanda, Silbury Hill in Inghilterra). Tutto questo suggerisce che la collina fosse sito rituale molto prima dell'adozione del modello vichingo.`,
      sub1: "Tynwald Hill — la struttura e il paesaggio",
      text1: `Il Tynwald Hill si trova a St John's, nel centro dell'Isola di Man. È un tumulo artificiale (almeno nel suo aspetto attuale) di quattro terrazze concentriche sovrapposte, alto circa 4 metri, di diametro variabile (24 metri alla base, 2 metri al vertice). Le quattro terrazze sono:
- Terrazza 1 (base, la più ampia): dove si posizionano i cittadini comuni dell'Isola durante la cerimonia
- Terrazza 2: dove si posizionano i deputati della Camera delle Chiavi (House of Keys), la camera elettiva del Tynwald
- Terrazza 3: dove si posizionano i membri del Consiglio Legislativo (Legislative Council), la camera alta
- Terrazza 4 (vertice): dove siede il Governatore (oggi rappresentante della Corona britannica) e, simbolicamente, dove una volta sedeva il re mannese

Il numero quattro è mitologicamente suggestivo. Quattro sono le province d'Irlanda (cinque con il Meath centrale), quattro le direzioni cosmiche, quattro le funzioni della sovranità celtica. La struttura a quattro terrazze potrebbe essere reinterpretazione del cosmogramma celtico classico.

L'area circostante la collina include: il sentiero processionale (Processional Way, lungo circa 90 metri), che congiunge la collina alla piccola chiesa di St John; un piccolo prato circolare ("National Fair Grounds") dove si svolge la fiera popolare connessa alla cerimonia; e varie pietre marcatrici rituali. L'intero complesso è gestito dal governo mannese ed è patrimonio nazionale.`,
      sub2: "La cerimonia del Tynwald Day — 5 luglio",
      text2: `Ogni 5 luglio si celebra il Tynwald Day, giorno nazionale dell'Isola di Man. La cerimonia è pubblica, partecipata da migliaia di persone (la popolazione dell'isola è di 85.000 abitanti, il giorno del Tynwald molti residenti si riuniscono a St John's). La liturgia rituale segue passi precisi codificati nei secoli:

1. Servizio religioso nella chiesa di St John. Cristiano in forma anglicana, ma con preghiere in mannese e ringraziamenti tradizionali. Termina con una processione solenne dalla chiesa alla collina.

2. Processione sul sentiero processionale. Il Governatore, i giudici, i deputati della House of Keys, i Membri del Consiglio Legislativo, i capi delle parrocchie avanzano in un ordine preciso verso la collina. Durante il cammino vengono sparsi rituali sul sentiero: giunchi freschi, petali di rose, erbe. Questo rito di aspersione delle erbe è riconosciuto come pre-cristiano. La tradizione locale attribuisce specificamente a Manannán la prescrizione: "un fascio di giunchi deve essere sparso davanti al sovrano".

3. Disposizione sulla collina. I partecipanti prendono posto sulle terrazze secondo la loro funzione. La struttura spaziale rispecchia l'ordine sociale: popolo alla base, governanti al vertice, ma tutti visibili a tutti — caratteristica delle democrazie pre-moderne.

4. Proclamazione delle leggi. Il messo del Tynwald (Coroner of Glenfaba) proclama a voce alta tutte le leggi approvate nell'anno precedente dal Tynwald e ratificate dal Governatore in nome del sovrano britannico. La proclamazione avviene in due lingue: prima in inglese, poi in mannese. Questa bilinguità non è formalità: è testimonianza della sopravvivenza culturale mannese, ed è stata recuperata nel XX secolo quando la lingua si stava estinguendo.

5. Ascolto delle petizioni. Qualunque cittadino dell'Isola, in virtù della legge antica, ha il diritto di presentare petizione al Tynwald nel giorno della cerimonia. Le petizioni vengono lette e annotate per considerazione futura. Questo elemento è estremamente arcaico: rimanda a una concezione della sovranità come "ascolto diretto del popolo", pre-burocratica, pre-rappresentativa.

6. Chiusura con la preghiera e il ritorno. La cerimonia si conclude con una preghiera finale, poi la processione ritorna alla chiesa.

7. Fiera popolare. Per tutto il giorno — e per il weekend attorno — si svolge la grande fiera tradizionale con musica folk, danze, cibo mannese, esibizioni di lingua. È festa popolare che ricorda fiere mitiche di Lughnasadh celtico.`,
      sub3: "Gli elementi pre-cristiani — Manannán nel rituale",
      text3: `I filologi e antropologi politici (Sir Frank Kermode, George Broderick, Jennifer Kewley Draskau) hanno identificato nel rituale del Tynwald diversi elementi di probabile origine pre-cristiana, attribuibili a un substrato cultuale celtico-mannese precedente alla cristianizzazione dell'isola (V-VI sec. d.C.) e sopravvissuto dentro le sovrapposizioni cristiane e norrene.

L'aspersione delle erbe. La prescrizione di cospargere giunchi (in mannese: shelliu) freschi sul sentiero processionale è priva di corrispettivo cristiano ed è invece ben attestata nella religione celtica pre-cristiana come rito di purificazione spaziale. Il manoscritto mannese 'Manx Ballad' (XVIII sec.) attribuisce esplicitamente a Manannán questa prescrizione: "Egli insegnò al popolo a spargere giunchi davanti al re, così come lui stesso li spargeva su Barrule".

L'orientamento astronomico. La collina è orientata con l'asse principale est-ovest, allineata all'alba del solstizio estivo (il 5 luglio cade poche settimane dopo il solstizio — possibile spostamento calendariale). Il solstizio estivo era festività celtica importante, collegata al culto solare di Lugh/Lugus e, sull'Isola di Man, probabilmente a Manannán stesso come "re-sole" dell'oceano.

La struttura a terrazze concentriche. Il modello di "collina a gradoni circolari" non ha paralleli vichinghi (il Þingvellir islandese è un campo piatto, non una collina). Ha invece paralleli celtici: Tara in Irlanda ha un "Rath of the Synods" a tre gradini; Silbury Hill in Inghilterra è un tumulo monumentale pre-celtico a terrazze. Il cosmogramma celtico della "sovranità in quattro direzioni" è ben attestato.

La proclamazione bilingue. Il fatto che anche sotto la pressione coloniale britannica il Tynwald abbia mantenuto (e nel XX sec. ripristinato) la proclamazione in mannese rivela la dimensione rituale del linguaggio: il mannese non è solo "una lingua" per il Tynwald, è la lingua degli antenati e di Manannán, indispensabile per l'efficacia rituale.

L'ascolto delle petizioni. La concezione del sovrano come "ascoltatore diretto del popolo" è tratto celtico arcaico (il brehonismo irlandese aveva il concetto di "drui" come mediatore giudiziario universale) più che vichingo (il modello norreno era più aristocratico).

Questi elementi, presi insieme, configurano il Tynwald come sincretismo stratificato: sotto il cristianesimo anglicano, uno strato norreno-vichingo; sotto di quello, uno strato celtico-mannese legato a Manannán. Le tre religioni coesistono nella stessa cerimonia, in un palinsesto rituale unico in Europa.`,
      sub4: "Il Tynwald oggi — identità, politica, turismo",
      text4: `Il Tynwald contemporaneo ha multiple dimensioni. È parlamento effettivamente funzionante: l'Isola di Man è una dipendenza della Corona britannica, ma ha ampia autonomia legislativa, e il Tynwald vota leggi su tasse, pianificazione, istruzione, sanità, molti aspetti della vita pubblica. È quindi istituzione politica sostanziale, non solo ceremoniale.

È anche simbolo identitario nazionale. Per i mannesi il Tynwald Day è l'equivalente del 4 luglio americano o del 14 luglio francese: festa nazionale di identità collettiva. L'Isola di Man ha lottato per preservare la sua autonomia contro pressioni di assorbimento britannico: il Tynwald è lo strumento e il simbolo di questa autonomia.

È recupero culturale attivo. Il ripristino del mannese al Tynwald nella seconda metà del XX sec. è stato parte del revival della lingua. Il governo mannese oggi sostiene economicamente l'uso del mannese in ambito pubblico, e il Tynwald Day è il momento annuale di massima visibilità della lingua.

È attrazione turistica. Migliaia di visitatori — soprattutto dal Regno Unito, Irlanda, ma anche Stati Uniti e Canada (grande comunità mannese-americana) — arrivano ogni anno per la cerimonia del 5 luglio. Alberghi, ristoranti, eventi culturali fioriscono attorno a Tynwald Day. È il motore turistico principale dell'estate mannese.

È oggetto di studio accademico. Il Tynwald è citato in decine di trattati di diritto costituzionale comparato, di antropologia politica, di storia religiosa. Le sue specificità — durata, sincretismo, continuità — lo rendono caso di studio eccezionale per chi analizza le istituzioni politiche come "sistemi rituali".

È anche — aspetto meno noto ma non banale — un esempio vivente di ciò che le istituzioni politiche potrebbero essere: comunità, ritualità, partecipazione diretta, memoria culturale. In un'epoca di crisi democratica occidentale, il Tynwald — piccolo, isolano, arcaico — mostra una forma democratica che conserva il senso rituale della decisione collettiva. Non necessariamente replicabile su scala nazionale grande, ma istruttivo come contro-modello.`,
    },
    versions: [
      {
        era: "Origine vichinga documentata (979 d.C.)",
        name: "L'attestazione storica",
        text: "Il Tynwald è attestato documentariamente dal 979 d.C., quando i jarl vichinghi dell'Isola di Man lo formalizzarono come assemblea giudiziaria-legislativa sul modello del Þing scandinavo. La data di fondazione 979 è la cifra ufficiale che appare nella documentazione mannese.",
      },
      {
        era: "Tradizione di Manannán (pre-vichinga)",
        name: "Il substrato mitico",
        text: "La tradizione mitica mannese attribuisce l'origine del Tynwald a Manannán mac Lir stesso, re mitico primordiale dell'isola. Si presume una continuità di assemblee celtiche pre-vichinghe sullo stesso sito, adottate poi dai Vichinghi con nome norreno. Questa dimensione mitica è inseparabile dalla dimensione storica nella coscienza mannese.",
      },
      {
        era: "Periodo scozzese e britannico (1265-oggi)",
        name: "Continuità attraverso i cambi di sovranità",
        text: "L'Isola di Man cambia sovranità molte volte (Norrena, Scozia, Inghilterra), ma il Tynwald sopravvive a tutti i cambi, adattandosi ai nuovi re ma mantenendo la propria struttura. La continuità attraverso le diverse dominazioni è una delle caratteristiche più notevoli.",
      },
      {
        era: "Revival contemporaneo (1970s-oggi)",
        name: "La rinascita identitaria",
        text: "Dal revival gaelico-mannese degli anni 1970 in avanti, il Tynwald è stato rivalorizzato come simbolo di identità nazionale. La lingua mannese — che era vicina all'estinzione — è stata riportata nella cerimonia ufficiale. Il Tynwald è oggi tra le istituzioni politico-culturali più partecipate dell'Europa insulare.",
      },
    ],
    cult: "Tynwald Hill (Cronk-y-Keeillown), St John's, Isola di Man. Accessibile al pubblico tutto l'anno; centro nevralgico solo il 5 luglio per la cerimonia ufficiale. L'area è patrimonio nazionale e include il Tynwald Hill, il sentiero processionale e la chiesa di St John. Il 'Tynwald National Park' visitabile quotidianamente.",
    influence: [
      {
        era: "Diritto costituzionale comparato",
        text: "Il Tynwald è caso di studio obbligatorio nei trattati di storia costituzionale comparata (Sir Frank Kermode, Geoffrey Marshall, Vernon Bogdanor). La sua continuità millenaria lo rende laboratorio unico per lo studio dell'evoluzione delle istituzioni parlamentari.",
      },
      {
        era: "Antropologia politica e sincretismo rituale",
        text: "Il Tynwald è caso canonico di studio sul 'ritual kingship' e sul sincretismo religioso-politico. Studiosi come Maurice Bloch, Clifford Geertz, Marshall Sahlins ne hanno analizzato le forme cerimoniali come testo culturale denso.",
      },
      {
        era: "Celtic Revival e identità insulare",
        text: "Il Tynwald è emblema del revival culturale mannese e più in generale dell'identità celtica insulare del Nord Atlantico. Funge da modello per altri movimenti identitari minoritari (Cornovaglia, Galles, Bretagna) che cercano istituzioni distintive.",
      },
      {
        era: "Diplomazia della piccola scala",
        text: "Il governo mannese ha usato il Tynwald come strumento diplomatico: inviti a parlamentari di altre nazioni, gemellaggi istituzionali, presenza attiva del Tynwald in reti internazionali (Commonwealth, Consiglio d'Europa). Il Tynwald è ambasciatore culturale dell'Isola di Man.",
      },
    ],
    texts: [
      {
        title: "Proclamazione tradizionale di apertura",
        source:
          "Tynwald Day Ceremony, testo ufficiale trasmesso dal XIV sec. in forma attestata",
        text: "In nome del nostro gracioso sovrano — qui sull'antica collina di Tynwald — voi uomini di Mann presenti — dichiaro aperto questo Tynwald, assemblea del popolo di Mann, istituita nei giorni di Manannán Beg mac y Leirr, continuata attraverso i giorni dei Re Norreni, attraverso i giorni dei Signori di Mann sotto la Corona Scozzese, attraverso i giorni dei Signori sotto la Corona Inglese, e attraverso i giorni della nostra attuale sovranità. Le leggi saranno proclamate. Le petizioni saranno ascoltate. Che ciascuno parli nella sua lingua: in inglese o in mannese, come il suo cuore gli detta. La volontà del popolo di Mann è sovrana sull'Isola di Mann.",
      },
      {
        title: "Manx Ballad — i giunchi di Manannán",
        source: "Manannan Beg mac y Leirr, versione del XVIII sec. in mannese",
        text: "E Manannán insegnò agli uomini di Mann / di spargere giunchi fresche davanti ai loro re / e quando un'assemblea si tenesse sulla collina / di spargere giunchi verdi sul sentiero: / 'Perché i giunchi crescono dove scorrono le acque pure, / e dove scorrono le acque pure lì è la mia presenza. / Chiunque spargerà i giunchi al suo passaggio, / sarà sotto il mio mantello. / Chiunque ascolterà la voce del popolo sulla collina, / sarà re giusto. / Chiunque proclamerà le leggi in due lingue, / sarà re che rispetta gli antenati.'",
      },
    ],
  },
];
