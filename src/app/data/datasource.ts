/* tslint:disable */
/**
 * datasource
 */
export let userName: string = "Andrew Fuller";
export let userMail: string = "andrewfuller@syncfusion.com";

export let folderData: { [key: string]: Object }[] =
[{
    "ID": 1,
    "PID": null,
    "Name": "Favorites",
    "HasChild": true,
    "Expanded": true,
    "Count": ""
}, {
    "ID": 2,
    "PID": 1,
    "Name": "Inbox",
    "HasChild": false,
    "Expanded": false,
    "Count": 19,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 3,
    "PID": 1,
    "Name": "Sales Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": 4,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 4,
    "PID": 1,
    "Name": "Personnel",
    "HasChild": false,
    "Expanded": false,
    "Count": 2,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 5,
    "PID": 1,
    "Name": "Marketing Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": 6,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 6,
    "PID": 1,
    "Name": "Sent Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 7,
    "PID": null,
    "Name": userName,
    "HasChild": true,
    "Expanded": true,
    "Count": ""
}, {
    "ID": 8,
    "PID": 7,
    "Name": "Inbox",
    "HasChild": false,
    "Expanded": false,
    "Count": 19,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 9,
    "PID": 7,
    "Name": "Clutter",
    "HasChild": false,
    "Expanded": false,
    "Count": 5,
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 10,
    "PID": 7,
    "Name": "Drafts",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 11,
    "PID": 7,
    "Name": "Sent Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 12,
    "PID": 7,
    "Name": "Deleted Items",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 13,
    "PID": 7,
    "Name": "Archive",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 14,
    "PID": 7,
    "Name": "Junk Mail",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 15,
    "PID": 7,
    "Name": "Personnel",
    "HasChild": false,
    "Expanded": false,
    "Count": 2,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 16,
    "PID": 7,
    "Name": "Sales Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": 4,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 17,
    "PID": 7,
    "Name": "Marketing Reports",
    "HasChild": false,
    "Expanded": false,
    "Count": 6,
    "Favorite": "Favorite-Composite",
    "FavoriteMessage": "Remove from Favorites"
}, {
    "ID": 18,
    "PID": 7,
    "Name": "My Team",
    "HasChild": true,
    "Expanded": true,
    "Count": ""
}, {
    "ID": 19,
    "PID": 18,
    "Name": "Richelle Mead",
    "HasChild": false,
    "Expanded": false,
    "Count": 9,
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 20,
    "PID": 18,
    "Name": "krystine hobson",
    "HasChild": false,
    "Expanded": false,
    "Count": 11,
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 21,
    "PID": 7,
    "Name": "Trash",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}, {
    "ID": 22,
    "PID": 7,
    "Name": "Outbox",
    "HasChild": false,
    "Expanded": false,
    "Count": "",
    "Favorite": "Favorite",
    "FavoriteMessage": "Add to Favorites"
}] ;


export let messageDataSourceNew: { [key: string]: Object }[] = [
  {
    "ContactID": "SF10153",
    "text": "Oleg Oneill",
    "ContactTitle": "Get Together on March",
    "Message": "<p>Hi Gretchen Justice,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Equidem, sed audistine modo de Carneade? </p>\r\n\r\n<p><b>Non quam nostram quidem, inquit Pomponius iocans;</b> <i>Tenent mordicus.</i> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Summum enim bonum exposuit vacuitatem doloris; In qua quid est boni praeter summam voluptatem, et eam sempiternam? Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Quid ait Aristoteles reliquique Platonis alumni? Quid ergo attinet gloriose loqui, nisi constanter loquare? </p>\r\n\r\n<p>Summus dolor plures dies manere non potest? Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. Pugnant Stoici cum Peripateticis. Duo Reges: constructio interrete. Expressa vero in iis aetatibus, quae iam confirmatae sunt. <i>Scio enim esse quosdam, qui quavis lingua philosophari possint;</i> Qui autem esse poteris, nisi te amor ipse ceperit? Si qua in iis corrigere voluit, deteriora fecit. </p>\r\n\r\n<p>Thanks,</p><p>Oleg Oneill</p>",
    "Email": "olegoneill@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Gretchen Justice",
    "ToMail": "gretchenjustice@syncfusion.com",
    "Image": "assets/images/images/23.png",
    "Time": "12.1 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10057",
    "text": "Ila Russo",
    "ContactTitle": "Business dinner invitation",
    "Message": "<p>Hello Jelani Moreno,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Qui enim voluptatem ipsam contemnunt, iis licet dicere se acupenserem maenae non anteponere. Perturbationes autem nulla naturae vi commoventur, omniaque ea sunt opiniones ac iudicia levitatis. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Duo Reges: constructio interrete. Nihil illinc huc pervenit. </p>\r\n\r\n<ol>\r\n\t<li>Atque ita re simpliciter primo collocata reliqua subtilius persequentes corporis bona facilem quandam rationem habere censebant;</li>\r\n\t<li>Haec non erant eius, qui innumerabilis mundos infinitasque regiones, quarum nulla esset ora, nulla extremitas, mente peragravisset.</li>\r\n\t<li>Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure.</li>\r\n\t<li>Qui ita affectus, beatum esse numquam probabis;</li>\r\n</ol>\r\n\r\n\r\n<p>Ut pulsi recurrant? Expressa vero in iis aetatibus, quae iam confirmatae sunt. Semper enim ita adsumit aliquid, ut ea, quae prima dederit, non deserat. Tecum optime, deinde etiam cum mediocri amico. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Propter nos enim illam, non propter eam nosmet ipsos diligimus. </p>\r\n\r\n<p>Regards,</p><p>Ila Russo</p>",
    "Email": "ilarusso@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Zachery Peters"
    ],
    "BCCMail": [
      "zacherypeters@syncfusion.com"
    ],
    "To": "Jelani Moreno",
    "ToMail": "jelanimoreno@syncfusion.com",
    "Image": "assets/images/images/39.png",
    "Time": "12.13 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10155",
    "text": "Brielle Rich",
    "ContactTitle": "Holiday application",
    "Message": "<p>Hi Kerry Best,</p><h1>Sic enim censent, oportunitatis esse beate vivere.</h1>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut unde est hoc contritum vetustate proverbium: quicum in tenebris? Quam ob rem tandem, inquit, non satisfacit? <b>Quae cum dixisset paulumque institisset, Quid est?</b> Duo Reges: constructio interrete. <b>Sit sane ista voluptas.</b> Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Sin eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam Aristippi in prima commendatione poneret. Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas? Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. Satisne vobis videor pro meo iure in vestris auribus commentatus? <b>Sint modo partes vitae beatae.</b> </p>\r\n\r\n<h3>Si mala non sunt, iacet omnis ratio Peripateticorum.</h3>\r\n\r\n<p><b>Istic sum, inquit.</b> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Et adhuc quidem ita nobis progresso ratio est, ut ea duceretur omnis a prima commendatione naturae. Quid, si etiam iucunda memoria est praeteritorum malorum? Quid igitur, inquit, eos responsuros putas? Odium autem et invidiam facile vitabis. <mark>Idemque diviserunt naturam hominis in animum et corpus.</mark> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Qua igitur re ab deo vincitur, si aeternitate non vincitur? <b>Quod iam a me expectare noli.</b> </p>\r\n\r\n<h2>Maximus dolor, inquit, brevis est.</h2>\r\n\r\n<p>Quae diligentissime contra Aristonem dicuntur a Chryippo. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Quid me istud rogas? Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Hanc quoque iucunditatem, si vis, transfer in animum; Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt? Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Tum mihi Piso: Quid ergo? </p>\r\n\r\n<p>An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Hoc simile tandem est? Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. <b>Easdemne res?</b> </p>\r\n\r\n<p>Thanks,</p><p>Brielle Rich</p>",
    "Email": "briellerich@syncfusion.com",
    "CC": [
      "Leigh Rosales",
      "Rina Solis"
    ],
    "CCMail": [
      "leighrosales@syncfusion.com",
      "rinasolis@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "12.15 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10023",
    "text": "krystine hobson",
    "ContactTitle": "My life in New York",
    "Message": "<p>Hi Kerry Best,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Athena Mcintosh"
    ],
    "CCMail": [
      "athenamcintosh@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/12.png",
    "Time": "12.33 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10165",
    "text": "Chase Solomon",
    "ContactTitle": "New business relationship confirmation",
    "Message": "<p>Hi Sydnee Soto,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnia contraria, quos etiam insanos esse vultis. Ad eos igitur converte te, quaeso. Polycratem Samium felicem appellabant. Immo alio genere; Duo Reges: constructio interrete. Confecta res esset. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. <code>Eaedem res maneant alio modo.</code> </p>\r\n\r\n<p>Qui enim existimabit posse se miserum esse beatus non erit. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. <code>Primum in nostrane potestate est, quid meminerimus?</code> Nam si amitti vita beata potest, beata esse non potest. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Rationis enim perfectio est virtus; Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem, nos amemus; Quis istud possit, inquit, negare? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur. </p>\r\n\r\n<pre>Itaque in rebus minime obscuris non multus est apud eos\r\ndisserendi labor.\r\n\r\nCenasti in vita numquam bene, cum omnia in ista Consumis\r\nsquilla atque acupensere cum decimano.\r\n</pre>\r\n\r\n\r\n<p><code>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit?</code> <code>De illis, cum volemus.</code> Quid enim? Vitae autem degendae ratio maxime quidem illis placuit quieta. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat. Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur. </p>\r\n\r\n<p>Non quam nostram quidem, inquit Pomponius iocans; Aliter homines, aliter philosophos loqui putas oportere? Tum mihi Piso: Quid ergo? An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat? Nam Pyrrho, Aristo, Erillus iam diu abiecti. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sic enim censent, oportunitatis esse beate vivere. </p>\r\n\r\n<p>Thanks,</p><p>Chase Solomon</p>",
    "Email": "chasesolomon@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Sydnee Soto",
    "ToMail": "sydneesoto@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "12.39 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10014",
    "text": "Richelle Mead",
    "ContactTitle": "Follow up application",
    "Message": "<p>Hello Kerry Bray,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Sed mehercule pergrata mihi oratio tua. Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. Invidiosum nomen est, infame, suspectum. Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Duo Reges: constructio interrete. Summum enim bonum exposuit vacuitatem doloris; <b>Stoici scilicet.</b> Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Sed videbimus. </p>\r\n\r\n<ul>\r\n\t<li>Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen;</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur.</li>\r\n\t<li>Duo enim genera quae erant, fecit tria.</li>\r\n</ul>\r\n\r\n\r\n<p>Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. <i>Sed haec omittamus;</i> Aliter enim nosmet ipsos nosse non possumus. <i>Istic sum, inquit.</i> <i>Quid Zeno?</i> Quis hoc dicit? <i>Quae diligentissime contra Aristonem dicuntur a Chryippo.</i> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. </p>\r\n\r\n<p>Primum divisit ineleganter; Tecum optime, deinde etiam cum mediocri amico. <mark>Eam stabilem appellas.</mark> Ergo id est convenienter naturae vivere, a natura discedere. At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Haec para/doca illi, nos admirabilia dicamus. </p>\r\n\r\n<ol>\r\n\t<li>Quod autem principium officii quaerunt, melius quam Pyrrho;</li>\r\n\t<li>Quod autem principium officii quaerunt, melius quam Pyrrho;</li>\r\n\t<li>Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant.</li>\r\n\t<li>Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile.</li>\r\n\t<li>Qua igitur re ab deo vincitur, si aeternitate non vincitur?</li>\r\n</ol>\r\n\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Ruth Cervantes",
      "Oscar Mcconnell"
    ],
    "BCCMail": [
      "ruthcervantes@syncfusion.com",
      "oscarmcconnell@syncfusion.com"
    ],
    "To": "Kerry Bray",
    "ToMail": "kerrybray@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "12.4 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10182",
    "text": "Anastasia Callahan",
    "ContactTitle": "Training Announcement",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Polycratem Samium felicem appellabant. Quae in controversiam veniunt, de iis, si placet, disseramus. Universa enim illorum ratione cum tota vestra confligendum puto. Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. De quibus cupio scire quid sentias. Inde sermone vario <i>[redacted]</i> illa a Dipylo stadia confecimus. Itaque et vivere vitem et mori dicimus arboremque et novellan et vetulam et vigere et senescere. <b>Duo Reges: constructio interrete.</b> </p>\r\n\r\n<p>Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. An est aliquid, quod te sua sponte delectet? Itaque in rebus minime obscuris non multus est apud eos disserendi labor. Eaedem res maneant alio modo. Quis Aristidem non mortuum diligit? Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Qui ita affectus, beatum esse numquam probabis; Sed nimis multa. Utrum igitur percurri omnem Epicuri disciplinam placet an de una voluptate quaeri, de qua omne certamen est? Habent enim et bene longam et satis litigiosam disputationem. </p>\r\n\r\n<p><i>Tubulo putas dicere?</i> Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Si enim ita est, vide ne facinus facias, cum mori suadeas. Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nondum autem explanatum satis, erat, quid maxime natura vellet. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. </p>\r\n\r\n<p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Itaque his sapiens semper vacabit. Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Reguli reiciendam; Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Quae tamen a te agetur non melior, quam illae sunt, quas interdum optines. </p>\r\n\r\n<p>Thanks,</p><p>Anastasia Callahan</p>",
    "Email": "anastasiacallahan@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/32.png",
    "Time": "12.4 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10142",
    "text": "Elijah Berry",
    "ContactTitle": "Apology marketing email",
    "Message": "<p>Dear Kerry Best,</p><h1>Sed residamus, inquit, si placet.</h1>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Zenonis est, inquam, hoc Stoici. Superiores tres erant, quae esse possent, quarum est una sola defensa, eaque vehementer. Ut proverbia non nulla veriora sint quam vestra dogmata. Ne in odium veniam, si amicum destitero tueri. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Si stante, hoc natura videlicet vult, salvam esse se, quod concedimus; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Sed non sunt in eo genere tantae commoditates corporis tamque productae temporibus tamque multae. Tum Triarius: Posthac quidem, inquit, audacius. Nam, ut paulo ante docui, augendae voluptatis finis est doloris omnis amotio. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Istam voluptatem perpetuam quis potest praestare sapienti? Se dicere inter honestum et turpe nimium quantum, nescio quid inmensum, inter ceteras res nihil omnino interesse. Sin laboramus, quis est, qui alienae modum statuat industriae? Quid censes in Latino fore? </p>\r\n\r\n<h2>At ille pellit, qui permulcet sensum voluptate.</h2>\r\n\r\n<p>Ille enim occurrentia nescio quae comminiscebatur; Nobis Heracleotes ille Dionysius flagitiose descivisse videtur a Stoicis propter oculorum dolorem. An me, inquam, nisi te audire vellem, censes haec dicturum fuisse? </p>\r\n\r\n<p>Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Hoc est non dividere, sed frangere. Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid enim de amicitia statueris utilitatis causa expetenda vides. Solum praeterea formosum, solum liberum, solum civem, stultost; </p>\r\n\r\n<p>Thank you,</p><p>Elijah Berry</p>",
    "Email": "elijahberry@syncfusion.com",
    "CC": [
      "Sandra Snyder",
      "Jane Lyons"
    ],
    "CCMail": [
      "sandrasnyder@syncfusion.com",
      "janelyons@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "12.46 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10082",
    "text": "Camden Mcmillan",
    "ContactTitle": "Reference Request - Cameran Hester",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu enim ista lenius, hic Stoicorum more nos vexat. Quod maxime efficit Theophrasti de beata vita liber, in quo multum admodum fortunae datur. Sic vester sapiens magno aliquo emolumento commotus cicuta, si opus erit, dimicabit. Videamus igitur sententias eorum, tum ad verba redeamus. </p>\r\n\r\n<blockquote>\r\n\tHic si Peripateticus fuisset, permansisset, credo, in sententia, qui dolorem malum dicunt esse, de asperitate autem eius fortiter ferenda praecipiunt eadem, quae Stoici.\r\n</blockquote>\r\n\r\n\r\n<p>Quam illa ardentis amores excitaret sui! Cur tandem? Bonum integritas corporis: misera debilitas. Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Sed tamen intellego quid velit. Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Nam Pyrrho, Aristo, Erillus iam diu abiecti. Ergo ita: non posse honeste vivi, nisi honeste vivatur? </p>\r\n\r\n<p>Regards,</p><p>Camden Mcmillan</p>",
    "Email": "camdenmcmillan@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "12.46 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10205",
    "text": "Fletcher Beck",
    "ContactTitle": "Loan Application",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas? <b>Quae similitudo in genere etiam humano apparet.</b> Prodest, inquit, mihi eo esse animo. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quo studio Aristophanem putamus aetatem in litteris duxisse? Bonum negas esse divitias, praepos�tum esse dicis? Et quidem, inquit, vehementer errat; Aliter enim explicari, quod quaeritur, non potest. Itaque fecimus. </p>\r\n\r\n<p>Sed ego in hoc resisto; Tum Torquatus: Prorsus, inquit, assentior; <i>Eam tum adesse, cum dolor omnis absit;</i> Erit enim mecum, si tecum erit. </p>\r\n\r\n<ul>\r\n\t<li>Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</li>\r\n\t<li>Prioris generis est docilitas, memoria;</li>\r\n\t<li>Qui non moveatur et offensione turpitudinis et comprobatione honestatis?</li>\r\n\t<li>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.</li>\r\n</ul>\r\n\r\n\r\n<p>Duarum enim vitarum nobis erunt instituta capienda. Eadem fortitudinis ratio reperietur. Utram tandem linguam nescio? Consequentia exquirere, quoad sit id, quod volumus, effectum. Consequentia exquirere, quoad sit id, quod volumus, effectum. </p>\r\n\r\n<p>Thank you,</p><p>Fletcher Beck</p>",
    "Email": "fletcherbeck@syncfusion.com",
    "CC": [
      "Regan Hall"
    ],
    "CCMail": [
      "reganhall@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/42.png",
    "Time": "12.49 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10180",
    "text": "Avram Kent",
    "ContactTitle": "Thank you",
    "Message": "<p>Hi Igor Hyde,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Efficiens dici potest. Nondum autem explanatum satis, erat, quid maxime natura vellet. Duo Reges: constructio interrete. Gloriosa ostentatio in constituendo summo bono. </p>\r\n\r\n<p>Nam Pyrrho, Aristo, Erillus iam diu abiecti. Non est ista, inquam, Piso, magna dissensio. </p>\r\n\r\n<pre>Quocirca intellegi necesse est in ipsis rebus, quae\r\ndiscuntur et cognoscuntur, invitamenta inesse, quibus ad\r\ndiscendum cognoscendumque moveamur.\r\n\r\nNon pugnem cum homine, cur tantum habeat in natura boni;\r\n</pre>\r\n\r\n\r\n<p>Cur, nisi quod turpis oratio est? De vacuitate doloris eadem sententia erit. Bestiarum vero nullum iudicium puto. Vestri haec verecundius, illi fortasse constantius. Ille enim occurrentia nescio quae comminiscebatur; Illa tamen simplicia, vestra versuta. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Si quae forte-possumus. </p>\r\n\r\n<ol>\r\n\t<li>Tamen a proposito, inquam, aberramus.</li>\r\n\t<li>Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali.</li>\r\n\t<li>Nos cum te, M.</li>\r\n\t<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>\r\n\t<li>Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur.</li>\r\n</ol>\r\n\r\n\r\n<p>Philosophi autem in suis lectulis plerumque moriuntur. Sed potestne rerum maior esse dissensio? Haec dicuntur inconstantissime. Videsne quam sit magna dissensio? Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thanks,</p><p>Avram Kent</p>",
    "Email": "avramkent@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Iona Velasquez"
    ],
    "BCCMail": [
      "ionavelasquez@syncfusion.com"
    ],
    "To": "Igor Hyde",
    "ToMail": "igorhyde@syncfusion.com",
    "Image": "assets/images/images/53.png",
    "Time": "12.58 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10215",
    "text": "Gretchen Justice",
    "ContactTitle": "Party Invitation for Company’s Annual Day",
    "Message": "<p>Hello Kerry Best,</p><h1>Sic enim censent, oportunitatis esse beate vivere.</h1>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aut unde est hoc contritum vetustate proverbium: quicum in tenebris? Quam ob rem tandem, inquit, non satisfacit? <b>Quae cum dixisset paulumque institisset, Quid est?</b> Duo Reges: constructio interrete. <b>Sit sane ista voluptas.</b> Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Sin eam, quam Hieronymus, ne fecisset idem, ut voluptatem illam Aristippi in prima commendatione poneret. Tu autem, si tibi illa probabantur, cur non propriis verbis ea tenebas? Callipho ad virtutem nihil adiunxit nisi voluptatem, Diodorus vacuitatem doloris. Satisne vobis videor pro meo iure in vestris auribus commentatus? <b>Sint modo partes vitae beatae.</b> </p>\r\n\r\n<h3>Si mala non sunt, iacet omnis ratio Peripateticorum.</h3>\r\n\r\n<p><b>Istic sum, inquit.</b> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Et adhuc quidem ita nobis progresso ratio est, ut ea duceretur omnis a prima commendatione naturae. Quid, si etiam iucunda memoria est praeteritorum malorum? Quid igitur, inquit, eos responsuros putas? Odium autem et invidiam facile vitabis. <mark>Idemque diviserunt naturam hominis in animum et corpus.</mark> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Qua igitur re ab deo vincitur, si aeternitate non vincitur? <b>Quod iam a me expectare noli.</b> </p>\r\n\r\n<h2>Maximus dolor, inquit, brevis est.</h2>\r\n\r\n<p>Quae diligentissime contra Aristonem dicuntur a Chryippo. Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Quid me istud rogas? Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Hanc quoque iucunditatem, si vis, transfer in animum; Deinde qui fit, ut ego nesciam, sciant omnes, quicumque Epicurei esse voluerunt? Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Tum mihi Piso: Quid ergo? </p>\r\n\r\n<p>An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Hoc simile tandem est? Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. <b>Easdemne res?</b> </p>\r\n\r\n<p>Regards,</p><p>Gretchen Justice</p>",
    "Email": "gretchenjustice@syncfusion.com",
    "CC": [
      "Regan Haney"
    ],
    "CCMail": [
      "reganhaney@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/51.png",
    "Time": "1.13 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10199",
    "text": "Uma Vance",
    "ContactTitle": "Get Together on March",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Invidiosum nomen est, infame, suspectum.</mark> Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et comparari potest. Quid enim de amicitia statueris utilitatis causa expetenda vides. <mark>Cur, nisi quod turpis oratio est?</mark> Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <mark>Duo Reges: constructio interrete.</mark> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? </p>\r\n\r\n<p>At enim, qua in vita est aliquid mali, ea beata esse non potest. <i>Facile est hoc cernere in primis puerorum aetatulis.</i> Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae quo sunt excelsiores, eo dant clariora indicia naturae. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Non dolere, inquam, istud quam vim habeat postea videro; Est, ut dicis, inquit; </p>\r\n\r\n<p>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Huius ego nunc auctoritatem sequens idem faciam. Nihil illinc huc pervenit. <b>Non semper, inquam;</b> Tanta vis admonitionis inest in locis; Utilitatis causa amicitia est quaesita. </p>\r\n\r\n<p>Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quid iudicant sensus? Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quid enim de amicitia statueris utilitatis causa expetenda vides. Sit hoc ultimum bonorum, quod nunc a me defenditur; </p>\r\n\r\n<p>Thanks,</p><p>Uma Vance</p>",
    "Email": "umavance@syncfusion.com",
    "CC": [
      "Igor Hyde"
    ],
    "CCMail": [
      "igorhyde@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "1.15 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10185",
    "text": "Thor Harrison",
    "ContactTitle": "Anything I can help with",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Non est igitur summum malum dolor. Duo enim genera quae erant, fecit tria. At iam decimum annum in spelunca iacet. Cave putes quicquam esse verius. Sed plane dicit quod intellegit. Duo Reges: constructio interrete. Restatis igitur vos; </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Tria genera bonorum;</dfn></dt>\r\n\t<dd>Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Quo modo autem philosophus loquitur?</dd>\r\n\t<dt><dfn>Falli igitur possumus.</dfn></dt>\r\n\t<dd>Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.</dd>\r\n</dl>\r\n\r\n\r\n<p>Tecum optime, deinde etiam cum mediocri amico. Restatis igitur vos; Sed quot homines, tot sententiae; Memini me adesse P. Istam voluptatem, inquit, Epicurus ignorat? Quare ad ea primum, si videtur; Peccata paria. Ut aliquid scire se gaudeant? </p>\r\n\r\n<p>Minime vero, inquit ille, consentit. Tenent mordicus. Verum hoc idem saepe faciamus. Suo genere perveniant ad extremum; </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sed ne, dum huic obsequor, vobis molestus sim. Maximus dolor, inquit, brevis est. Tria genera bonorum; Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>\r\n\r\n<p>Sed ego in hoc resisto; Tenent mordicus. Nam ista vestra: Si gravis, brevis; Equidem e Cn. </p>\r\n\r\n<p>Qui est in parvis malis. Sed ad bona praeterita redeamus. Ita prorsus, inquam; Nunc omni virtuti vitium contrario nomine opponitur. Sed nimis multa. Que Manilium, ab iisque M. </p>\r\n\r\n<p>Esse enim quam vellet iniquus iustus poterat inpune. Deprehensus omnem poenam contemnet. Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Thanks,</p><p>Thor Harrison</p>",
    "Email": "thorharrison@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/30.png",
    "Time": "1.16 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10000",
    "text": "Richelle Mead",
    "ContactTitle": "Annual Conference",
    "Message": "<p>Hello Kerry Best,</p><h4>Duo Reges: constructio interrete.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Quamquam tu hanc copiosiorem etiam soles dicere. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Praeclarae mortes sunt imperatoriae; Bona autem corporis huic sunt, quod posterius posui, similiora. Et quidem, inquit, vehementer errat; Suo enim quisque studio maxime ducitur. Quorum altera prosunt, nocent altera. </p>\r\n\r\n<h4>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</h4>\r\n\r\n<p>Summae mihi videtur inscitiae. Quis istum dolorem timet? Quid ergo hoc loco intellegit honestum? Collige omnia, quae soletis: Praesidium amicorum. Idemque diviserunt naturam hominis in animum et corpus. Negat esse eam, inquit, propter se expetendam. </p>\r\n\r\n<p>Nam ante Aristippus, et ille melius. Praeteritis, inquit, gaudeo. Inde igitur, inquit, ordiendum est. At iam decimum annum in spelunca iacet. Cur post Tarentum ad Archytam? Comprehensum, quod cognitum non habet? Sed fac ista esse non inportuna; Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "1.24 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10019",
    "text": "Richelle Mead",
    "ContactTitle": "Hospitality Committee",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i>Contemnit enim disserendi elegantiam, confuse loquitur.</i> Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare? <mark>Confecta res esset.</mark> <i>Sint ista Graecorum;</i> Duo Reges: constructio interrete. Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. </p>\r\n\r\n<pre>Nam cum Academicis incerta luctatio est, qui nihil affirmant\r\net quasi desperata cognitione certi id sequi volunt,\r\nquodcumque veri simile videatur.\r\n\r\nMe ipsum esse dicerem, inquam, nisi mihi viderer habere bene\r\ncognitam voluptatem et satis firme conceptam animo atque\r\ncomprehensam.\r\n</pre>\r\n\r\n\r\n<blockquote>\r\n\tEquidem in omnibus istis conclusionibus hoc putarem philosophia nobisque dignum, et maxime, cum summum bonum quaereremus, vitam nostram, consilia, voluntates, non verba corrigi.\r\n</blockquote>\r\n\r\n\r\n<ol>\r\n\t<li>Ut optime, secundum naturam affectum esse possit.</li>\r\n\t<li>Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis.</li>\r\n\t<li>Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.</li>\r\n\t<li>An quod ita callida est, ut optime possit architectari voluptates?</li>\r\n</ol>\r\n\r\n\r\n<p>Sed fortuna fortis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. <b>Quid sequatur, quid repugnet, vident.</b> At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. Nemo igitur esse beatus potest. Et non ex maxima parte de tota iudicabis? Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. </p>\r\n\r\n<p>Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Quid ad utilitatem tantae pecuniae? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Negat enim summo bono afferre incrementum diem. Omnia contraria, quos etiam insanos esse vultis. Sed quanta sit alias, nunc tantum possitne esse tanta. Tecum optime, deinde etiam cum mediocri amico. Quis est, qui non oderit libidinosam, protervam adolescentiam? Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Lacota Lloyd"
    ],
    "CCMail": [
      "lacotalloyd@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/4.png",
    "Time": "1.27 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10026",
    "text": "krystine hobson",
    "ContactTitle": "Software evaluation follow-up",
    "Message": "<p>Hi Halla Hendricks,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Bestiarum vero nullum iudicium puto. Quid ergo hoc loco intellegit honestum? Duo Reges: constructio interrete. Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>\r\n\r\n<ul>\r\n\t<li>An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?</li>\r\n\t<li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li>\r\n\t<li>A mene tu?</li>\r\n\t<li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>\r\n</ul>\r\n\r\n\r\n<p>Iam enim adesse poterit. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Non laboro, inquit, de nomine. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. </p>\r\n\r\n<p>Hoc enim constituto in philosophia constituta sunt omnia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Laelius clamores sofow ille so lebat Edere compellans gumias ex ordine nostros. Quorum sine causa fieri nihil putandum est. An est aliquid, quod te sua sponte delectet? Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Quod autem ratione actum est, id officium appellamus. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Halla Hendricks",
    "ToMail": "hallahendricks@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "1.28 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10015",
    "text": "Richelle Mead",
    "ContactTitle": "Get Together on March",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit? Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quo modo autem philosophus loquitur? </p>\r\n\r\n<p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus. Hoc est non modo cor non habere, sed ne palatum quidem. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Bona autem corporis huic sunt, quod posterius posui, similiora. Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Numquam facies. Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. </p>\r\n\r\n<p>Quamquam id quidem licebit iis existimare, qui legerint. Ubi ut eam caperet aut quando? Sine ea igitur iucunde negat posse se vivere? Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Cum praesertim illa perdiscere ludus esset. Quis Aristidem non mortuum diligit? De vacuitate doloris eadem sententia erit. Ad eos igitur converte te, quaeso. Duo enim genera quae erant, fecit tria. Omnes enim iucundum motum, quo sensus hilaretur. Nos vero, inquit ille; Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "1.3 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10001",
    "text": "Richelle Mead",
    "ContactTitle": "Anything I can help with",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Cur post Tarentum ad Archytam? Facillimum id quidem est, inquam. Erat enim Polemonis. Satis est ad hoc responsum. Quonam, inquit, modo? Nam quid possumus facere melius? </p>\r\n\r\n<p>Respondeat totidem verbis. Qui convenit? Conferam tecum, quam cuique verso rem subicias; Re mihi non aeque satisfacit, et quidem locis pluribus. </p>\r\n\r\n<p>Cur deinde Metrodori liberos commendas? Eam stabilem appellas. Quid de Platone aut de Democrito loquar? Quid censes in Latino fore? Haec para/doca illi, nos admirabilia dicamus. Hoc tu nunc in illo probas. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Stoicos roga.</dfn></dt>\r\n\t<dd>Si quicquam extra virtutem habeatur in bonis.</dd>\r\n\t<dt><dfn>Recte dicis;</dfn></dt>\r\n\t<dd>Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.</dd>\r\n\t<dt><dfn>Certe non potest.</dfn></dt>\r\n\t<dd>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</dd>\r\n\t<dt><dfn>Idem adhuc;</dfn></dt>\r\n\t<dd>Cave putes quicquam esse verius.</dd>\r\n\t<dt><dfn>Paria sunt igitur.</dfn></dt>\r\n\t<dd>Hoc non est positum in nostra actione.</dd>\r\n</dl>\r\n\r\n\r\n<p>Videsne quam sit magna dissensio? Occultum facinus esse potuerit, gaudebit; Paria sunt igitur. </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Ursula Vasquez",
      "Regan Haney"
    ],
    "CCMail": [
      "ursulavasquez@syncfusion.com",
      "reganhaney@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "1.34 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10025",
    "text": "krystine hobson",
    "ContactTitle": "Networking Request",
    "Message": "<p>Hi Leslie Juarez,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prave, nequiter, turpiter cenabat; Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. </p>\r\n\r\n<p>Tum mihi Piso: Quid ergo? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Duo Reges: constructio interrete. Minime vero istorum quidem, inquit. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>\r\n\r\n<blockquote>\r\n\tAt iste non dolendi status non vocatur voluptas.\r\n</blockquote>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quid turpius quam sapientis vitam ex insipientium sermone pendere? Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Huius ego nunc auctoritatem sequens idem faciam. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Si enim ita est, vide ne facinus facias, cum mori suadeas. Dici enim nihil potest verius. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Leslie Juarez",
    "ToMail": "lesliejuarez@syncfusion.com",
    "Image": "assets/images/images/45.png",
    "Time": "1.38 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10168",
    "text": "Selma Talley",
    "ContactTitle": "Out of Office",
    "Message": "<p>Hello Amaya Singleton,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas? <b>Quae similitudo in genere etiam humano apparet.</b> Prodest, inquit, mihi eo esse animo. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quo studio Aristophanem putamus aetatem in litteris duxisse? Bonum negas esse divitias, praepos�tum esse dicis? Et quidem, inquit, vehementer errat; Aliter enim explicari, quod quaeritur, non potest. Itaque fecimus. </p>\r\n\r\n<p>Sed ego in hoc resisto; Tum Torquatus: Prorsus, inquit, assentior; <i>Eam tum adesse, cum dolor omnis absit;</i> Erit enim mecum, si tecum erit. </p>\r\n\r\n<ul>\r\n\t<li>Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</li>\r\n\t<li>Prioris generis est docilitas, memoria;</li>\r\n\t<li>Qui non moveatur et offensione turpitudinis et comprobatione honestatis?</li>\r\n\t<li>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.</li>\r\n</ul>\r\n\r\n\r\n<p>Duarum enim vitarum nobis erunt instituta capienda. Eadem fortitudinis ratio reperietur. Utram tandem linguam nescio? Consequentia exquirere, quoad sit id, quod volumus, effectum. Consequentia exquirere, quoad sit id, quod volumus, effectum. </p>\r\n\r\n<p>Regards,</p><p>Selma Talley</p>",
    "Email": "selmatalley@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Casey Mckenzie"
    ],
    "BCCMail": [
      "caseymckenzie@syncfusion.com"
    ],
    "To": "Amaya Singleton",
    "ToMail": "amayasingleton@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "1.49 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10008",
    "text": "Richelle Mead",
    "ContactTitle": "Application for the post of an IT analyst",
    "Message": "<p>Hello Prescott Snow,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Aileen Perkins",
      "Wyoming Cunningham"
    ],
    "BCCMail": [
      "aileenperkins@syncfusion.com",
      "wyomingcunningham@syncfusion.com"
    ],
    "To": "Prescott Snow",
    "ToMail": "prescottsnow@syncfusion.com",
    "Image": "assets/images/images/27.png",
    "Time": "1.57 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10148",
    "text": "Cameran Newman",
    "ContactTitle": "Business appointment request",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Invidiosum nomen est, infame, suspectum.</mark> Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et comparari potest. Quid enim de amicitia statueris utilitatis causa expetenda vides. <mark>Cur, nisi quod turpis oratio est?</mark> Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <mark>Duo Reges: constructio interrete.</mark> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? </p>\r\n\r\n<p>At enim, qua in vita est aliquid mali, ea beata esse non potest. <i>Facile est hoc cernere in primis puerorum aetatulis.</i> Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae quo sunt excelsiores, eo dant clariora indicia naturae. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Non dolere, inquam, istud quam vim habeat postea videro; Est, ut dicis, inquit; </p>\r\n\r\n<p>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Huius ego nunc auctoritatem sequens idem faciam. Nihil illinc huc pervenit. <b>Non semper, inquam;</b> Tanta vis admonitionis inest in locis; Utilitatis causa amicitia est quaesita. </p>\r\n\r\n<p>Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quid iudicant sensus? Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quid enim de amicitia statueris utilitatis causa expetenda vides. Sit hoc ultimum bonorum, quod nunc a me defenditur; </p>\r\n\r\n<p>Thank you,</p><p>Cameran Newman</p>",
    "Email": "camerannewman@syncfusion.com",
    "CC": [
      "Brielle Norman"
    ],
    "CCMail": [
      "briellenorman@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/45.png",
    "Time": "1.58 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10143",
    "text": "Fredericka Arnold",
    "ContactTitle": "Application for Job Title",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit sordidos, vanos, leves, futtiles? Primum quid tu dicis breve? At multis se probavit. <code>Age, inquies, ista parva sunt.</code> Duo Reges: constructio interrete. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? <code>Nihilo beatiorem esse Metellum quam Regulum.</code> Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Et si turpitudinem fugimus in statu et motu corporis, quid est cur pulchritudinem non sequamur? Si qua in iis corrigere voluit, deteriora fecit. </p>\r\n\r\n<p>Maximas vero virtutes iacere omnis necesse est voluptate dominante. Ea possunt paria non esse. Hanc quoque iucunditatem, si vis, transfer in animum; Nemo igitur esse beatus potest. Age nunc isti doceant, vel tu potius quis enim ista melius? Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. Omnia contraria, quos etiam insanos esse vultis. Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista popularia. Nunc omni virtuti vitium contrario nomine opponitur. </p>\r\n\r\n<pre>Nam si dicent ab illis has res esse tractatas, ne ipsos\r\nquidem Graecos est cur tam multos legant, quam legendi sunt.\r\n\r\nHomines optimi non intellegunt totam rationem everti, si ita\r\nres se habeat.\r\n</pre>\r\n\r\n\r\n<p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Indicant pueri, in quibus ut in speculis natura cernitur. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; </p>\r\n\r\n<p>Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure. Et quidem, Cato, hanc totam copiam iam Lucullo nostro notam esse oportebit; Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quid ergo dubitamus, quin, si non dolere voluptas sit summa, non esse in voluptate dolor sit maximus? Putabam equidem satis, inquit, me dixisse. Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; <code>Ego vero isti, inquam, permitto.</code> Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Ergo ita: non posse honeste vivi, nisi honeste vivatur? </p>\r\n\r\n<p>Thank you,</p><p>Fredericka Arnold</p>",
    "Email": "frederickaarnold@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "1.58 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10160",
    "text": "Daryl Valenzuela",
    "ContactTitle": "Marketing Team",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Satisne vobis videor pro meo iure in vestris auribus commentatus? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Duo Reges: constructio interrete. Teneo, inquit, finem illi videri nihil dolere. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. </p>\r\n\r\n<p>Iam id ipsum absurdum, maximum malum neglegi. Apparet statim, quae sint officia, quae actiones. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Philosophi autem in suis lectulis plerumque moriuntur. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. </p>\r\n\r\n<ol>\r\n\t<li>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</li>\r\n\t<li>Quae cum essent dicta, finem fecimus et ambulandi et disputandi.</li>\r\n\t<li>Disserendi artem nullam habuit.</li>\r\n\t<li>Verum hoc loco sumo verbis his eandem certe vim voluptatis Epicurum nosse quam ceteros.</li>\r\n</ol>\r\n\r\n\r\n<p>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Profectus in exilium Tubulus statim nec respondere ausus; Nam si amitti vita beata potest, beata esse non potest. Nos paucis ad haec additis finem faciamus aliquando; Homines optimi non intellegunt totam rationem everti, si ita res se habeat. Quae cum dixisset paulumque institisset, Quid est? </p>\r\n\r\n<p>Praeclare hoc quidem. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Oratio me istius philosophi non offendit; Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Sed fortuna fortis; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Poterat autem inpune; Omnia contraria, quos etiam insanos esse vultis. </p>\r\n\r\n<p>Regards,</p><p>Daryl Valenzuela</p>",
    "Email": "darylvalenzuela@syncfusion.com",
    "CC": [
      "Tamara Knox"
    ],
    "CCMail": [
      "tamaraknox@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "1.58 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10051",
    "text": "Garth Owen",
    "ContactTitle": "Application for Job Title",
    "Message": "<p>Hello Ila Russo,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. Sed hoc sane concedamus. Quod totum contra est. </p>\r\n\r\n<p>Idem iste, inquam, de voluptate quid sentit? Sed quae tandem ista ratio est? Itaque contra est, ac dicitis; Cur deinde Metrodori liberos commendas? Restatis igitur vos; Eam stabilem appellas. </p>\r\n\r\n<pre>Quae possunt eadem contra Carneadeum illud summum bonum\r\ndici, quod is non tam, ut probaret, protulit, quam ut\r\nStoicis, quibuscum bellum gerebat, opponeret.\r\n\r\nQuid, si reviviscant Platonis illi et deinceps qui eorum\r\nauditores fuerunt, et tecum ita loquantur?\r\n</pre>\r\n\r\n\r\n<p>Apparet statim, quae sint officia, quae actiones. Dici enim nihil potest verius. Ergo ita: non posse honeste vivi, nisi honeste vivatur? At multis se probavit. Cave putes quicquam esse verius. </p>\r\n\r\n<p>Age sane, inquam. Est, ut dicis, inquit; Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Regards,</p><p>Garth Owen</p>",
    "Email": "garthowen@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Ila Russo",
    "ToMail": "ilarusso@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "2.13 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10052",
    "text": "Inga Scott",
    "ContactTitle": "Application for Sales Associate",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Sed mehercule pergrata mihi oratio tua. Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. Invidiosum nomen est, infame, suspectum. Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret? Duo Reges: constructio interrete. Summum enim bonum exposuit vacuitatem doloris; <b>Stoici scilicet.</b> Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; Sed videbimus. </p>\r\n\r\n<ul>\r\n\t<li>Ita similis erit ei finis boni, atque antea fuerat, neque idem tamen;</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur.</li>\r\n\t<li>Duo enim genera quae erant, fecit tria.</li>\r\n</ul>\r\n\r\n\r\n<p>Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. <i>Sed haec omittamus;</i> Aliter enim nosmet ipsos nosse non possumus. <i>Istic sum, inquit.</i> <i>Quid Zeno?</i> Quis hoc dicit? <i>Quae diligentissime contra Aristonem dicuntur a Chryippo.</i> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Cum salvum esse flentes sui respondissent, rogavit essentne fusi hostes. </p>\r\n\r\n<p>Primum divisit ineleganter; Tecum optime, deinde etiam cum mediocri amico. <mark>Eam stabilem appellas.</mark> Ergo id est convenienter naturae vivere, a natura discedere. At quicum ioca seria, ut dicitur, quicum arcana, quicum occulta omnia? Haec para/doca illi, nos admirabilia dicamus. </p>\r\n\r\n<ol>\r\n\t<li>Quod autem principium officii quaerunt, melius quam Pyrrho;</li>\r\n\t<li>Quod autem principium officii quaerunt, melius quam Pyrrho;</li>\r\n\t<li>Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant.</li>\r\n\t<li>Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile.</li>\r\n\t<li>Qua igitur re ab deo vincitur, si aeternitate non vincitur?</li>\r\n</ol>\r\n\r\n\r\n<p>Regards,</p><p>Inga Scott</p>",
    "Email": "ingascott@syncfusion.com",
    "CC": [
      "Oscar Mcconnell",
      "Jelani Moreno"
    ],
    "CCMail": [
      "oscarmcconnell@syncfusion.com",
      "jelanimoreno@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/50.png",
    "Time": "2.17 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10039",
    "text": "krystine hobson",
    "ContactTitle": "Sandra Smith Update",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "2.19 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10188",
    "text": "Karen Gamble",
    "ContactTitle": "Apology marketing email",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Erat enim Polemonis. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Primum cur ista res digna odio est, nisi quod est turpis? Idemne, quod iucunde? Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. </p>\r\n\r\n<pre>Una voluptas e multis obscuratur in illa vita voluptaria,\r\nsed tamen ea, quamvis parva sit, pars est eius vitae, quae\r\nposita est in voluptate.\r\n\r\nTe enim iudicem aequum puto, modo quae dicat ille bene\r\nnoris.\r\n</pre>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Memini vero, inquam; Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quae similitudo in genere etiam humano apparet. Sed nunc, quod agimus; Quid dubitas igitur mutare principia naturae? Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed ea mala virtuti magnitudine obruebantur. </p>\r\n\r\n<p>Thanks,</p><p>Karen Gamble</p>",
    "Email": "karengamble@syncfusion.com",
    "CC": [
      "Regan Hall"
    ],
    "CCMail": [
      "reganhall@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "2.39 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10146",
    "text": "Marny Rosario",
    "ContactTitle": "Application for the post of an IT analyst",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Ut id aliis narrare gestiant? Quam illa ardentis amores excitaret sui! Cur tandem? Quonam, inquit, modo? Duo Reges: constructio interrete. Aliter enim explicari, quod quaeritur, non potest. </p>\r\n\r\n<p>Videsne quam sit magna dissensio? Sin aliud quid voles, postea. De hominibus dici non necesse est. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Torquatus, is qui consul cum Cn. </p>\r\n\r\n<p>Traditur, inquit, ab Epicuro ratio neglegendi doloris. Simus igitur contenti his. Istic sum, inquit. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quid de Pythagora? Si enim ad populum me vocas, eum. Esse enim quam vellet iniquus iustus poterat inpune. Verum hoc idem saepe faciamus. Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Vide, quaeso, rectumne sit.</dfn></dt>\r\n\t<dd>Sed in rebus apertissimis nimium longi sumus.</dd>\r\n\t<dt><dfn>Tu quidem reddes;</dfn></dt>\r\n\t<dd>Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.</dd>\r\n\t<dt><dfn>Pollicetur certe.</dfn></dt>\r\n\t<dd>Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt;</dd>\r\n</dl>\r\n\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Quae duo sunt, unum facit. Scisse enim te quis coarguere possit? Primum divisit ineleganter; Zenonis est, inquam, hoc Stoici. Sed videbimus. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Quae sequuntur igitur? Urgent tamen et nihil remittunt. Quae duo sunt, unum facit. Compensabatur, inquit, cum summis doloribus laetitia. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Sic enim censent, oportunitatis esse beate vivere. Tuo vero id quidem, inquam, arbitratu. Aliter homines, aliter philosophos loqui putas oportere? Quid enim est a Chrysippo praetermissum in Stoicis? Quae sequuntur igitur? </p>\r\n\r\n<p>Thank you,</p><p>Marny Rosario</p>",
    "Email": "marnyrosario@syncfusion.com",
    "CC": [
      "Juliet Barlow",
      "Uta Morgan"
    ],
    "CCMail": [
      "julietbarlow@syncfusion.com",
      "utamorgan@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/17.png",
    "Time": "2.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10213",
    "text": "Hanna Benjamin",
    "ContactTitle": "Opening for Sales Manager",
    "Message": "<p>Hello Uta Morgan,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Regards,</p><p>Hanna Benjamin</p>",
    "Email": "hannabenjamin@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Winifred Dyer",
      "Athena Mcintosh"
    ],
    "BCCMail": [
      "winifreddyer@syncfusion.com",
      "athenamcintosh@syncfusion.com"
    ],
    "To": "Uta Morgan",
    "ToMail": "utamorgan@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "2.52 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10050",
    "text": "Mariko Jacobson",
    "ContactTitle": "Apology marketing email",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Restinguet citius, si ardentem acceperit. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? An vero, inquit, quisquam potest probare, quod perceptfum, quod. Duo Reges: constructio interrete. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quam ob rem tandem, inquit, non satisfacit? </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Primum divisit ineleganter;</dfn></dt>\r\n\t<dd>Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Non quam nostram quidem, inquit Pomponius iocans;</dd>\r\n\t<dt><dfn>Quid ergo?</dfn></dt>\r\n\t<dd>Philosophi autem in suis lectulis plerumque moriuntur.</dd>\r\n</dl>\r\n\r\n\r\n<p><i>Nam ante Aristippus, et ille melius.</i> Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Res enim concurrent contrariae. Si verbum sequimur, primum longius verbum praepositum quam bonum. Non risu potius quam oratione eiciendum? Ne in odium veniam, si amicum destitero tueri. </p>\r\n\r\n<ul>\r\n\t<li>Quam tu ponis in verbis, ego positam in re putabam.</li>\r\n\t<li>In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt.</li>\r\n\t<li>Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo;</li>\r\n</ul>\r\n\r\n\r\n<p><mark>Suo enim quisque studio maxime ducitur.</mark> Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera videantur. Res enim se praeclare habebat, et quidem in utraque parte. Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Iam id ipsum absurdum, maximum malum neglegi. Vide igitur ne non debeas verbis nostris uti, sententiis tuis. </p>\r\n\r\n\r\n<p>Regards,</p><p>Mariko Jacobson</p>",
    "Email": "marikojacobson@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/39.png",
    "Time": "2.55 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10191",
    "text": "Gail Valencia",
    "ContactTitle": "Application for Transfer",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis non odit sordidos, vanos, leves, futtiles? Primum quid tu dicis breve? At multis se probavit. <code>Age, inquies, ista parva sunt.</code> Duo Reges: constructio interrete. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? <code>Nihilo beatiorem esse Metellum quam Regulum.</code> Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Et si turpitudinem fugimus in statu et motu corporis, quid est cur pulchritudinem non sequamur? Si qua in iis corrigere voluit, deteriora fecit. </p>\r\n\r\n<p>Maximas vero virtutes iacere omnis necesse est voluptate dominante. Ea possunt paria non esse. Hanc quoque iucunditatem, si vis, transfer in animum; Nemo igitur esse beatus potest. Age nunc isti doceant, vel tu potius quis enim ista melius? Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. Omnia contraria, quos etiam insanos esse vultis. Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista popularia. Nunc omni virtuti vitium contrario nomine opponitur. </p>\r\n\r\n<pre>Nam si dicent ab illis has res esse tractatas, ne ipsos\r\nquidem Graecos est cur tam multos legant, quam legendi sunt.\r\n\r\nHomines optimi non intellegunt totam rationem everti, si ita\r\nres se habeat.\r\n</pre>\r\n\r\n\r\n<p>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Indicant pueri, in quibus ut in speculis natura cernitur. Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; </p>\r\n\r\n<p>Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Hic ego: Pomponius quidem, inquam, noster iocari videtur, et fortasse suo iure. Et quidem, Cato, hanc totam copiam iam Lucullo nostro notam esse oportebit; Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quid ergo dubitamus, quin, si non dolere voluptas sit summa, non esse in voluptate dolor sit maximus? Putabam equidem satis, inquit, me dixisse. Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; <code>Ego vero isti, inquam, permitto.</code> Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Ergo ita: non posse honeste vivi, nisi honeste vivatur? </p>\r\n\r\n<p>Thanks,</p><p>Gail Valencia</p>",
    "Email": "gailvalencia@syncfusion.com",
    "CC": [
      "Zena Osborn"
    ],
    "CCMail": [
      "zenaosborn@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/42.png",
    "Time": "2.56 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10048",
    "text": "Keely Kemp",
    "ContactTitle": "Apology Email for Wrong Order",
    "Message": "<p>Hello Maxwell Nelson,</p><h4>Ergo illi intellegunt quid Epicurus dicat, ego non intellego?</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Torquatus: Prorsus, inquit, assentior; Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Duo Reges: constructio interrete. Non est enim vitium in oratione solum, sed etiam in moribus. </p>\r\n\r\n<ol>\r\n\t<li>Cur, nisi quod turpis oratio est?</li>\r\n\t<li>Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.</li>\r\n\t<li>Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio.</li>\r\n\t<li>At iste non dolendi status non vocatur voluptas.</li>\r\n\t<li>Sed quid sentiat, non videtis.</li>\r\n</ol>\r\n\r\n\r\n<p>Non igitur bene. Que Manilium, ab iisque M. Eadem nunc mea adversum te oratio est. Itaque hic ipse iam pridem est reiectus; Itaque hic ipse iam pridem est reiectus; <i>Quid enim est a Chrysippo praetermissum in Stoicis?</i> <i>Recte, inquit, intellegis.</i> <b>Beatum, inquit.</b> Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista popularia. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Etiam beatissimum?</dfn></dt>\r\n\t<dd>Ergo omni animali illud, quod appetiti positum est in eo, quod naturae est accommodatum.</dd>\r\n\t<dt><dfn>Certe non potest.</dfn></dt>\r\n\t<dd>Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam;</dd>\r\n\t<dt><dfn>Equidem e Cn.</dfn></dt>\r\n\t<dd>In qua quid est boni praeter summam voluptatem, et eam sempiternam?</dd>\r\n\t<dt><dfn>Etiam beatissimum?</dfn></dt>\r\n\t<dd>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</dd>\r\n</dl>\r\n\r\n\r\n<p>Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Tu vero, inquam, ducas licet, si sequetur; <b>Odium autem et invidiam facile vitabis.</b> Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Si verbum sequimur, primum longius verbum praepositum quam bonum. <i>Nemo igitur esse beatus potest.</i> Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt. Solum praeterea formosum, solum liberum, solum civem, stultost; </p>\r\n\r\n<p>Regards,</p><p>Keely Kemp</p>",
    "Email": "keelykemp@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Idona Stanton",
      "Francesca Conner"
    ],
    "BCCMail": [
      "idonastanton@syncfusion.com",
      "francescaconner@syncfusion.com"
    ],
    "To": "Maxwell Nelson",
    "ToMail": "maxwellnelson@syncfusion.com",
    "Image": "assets/images/images/2.png",
    "Time": "3.19 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10145",
    "text": "Aretha Barnes",
    "ContactTitle": "Application for Transfer",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verba tu fingas et ea dicas, quae non sentias? Esse enim quam vellet iniquus iustus poterat inpune. Non dolere, inquam, istud quam vim habeat postea videro; Duarum enim vitarum nobis erunt instituta capienda. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Duo Reges: constructio interrete. Nec enim ignoras his istud honestum non summum modo, sed etiam, ut tu vis, solum bonum videri. Quibus ego vehementer assentior. Hoc Hieronymus summum bonum esse dixit. </p>\r\n\r\n<p>Summum enim bonum exposuit vacuitatem doloris; Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Tuo vero id quidem, inquam, arbitratu. Ait enim se, si uratur, Quam hoc suave! dicturum. Quam illa ardentis amores excitaret sui! Cur tandem? Estne, quaeso, inquam, sitienti in bibendo voluptas? Quid est, quod ab ea absolvi et perfici debeat? Verum hoc idem saepe faciamus. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. </p>\r\n\r\n<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Omnes enim iucundum motum, quo sensus hilaretur. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Cur id non ita fit? Inde igitur, inquit, ordiendum est. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? </p>\r\n\r\n<p>Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Atque ita re simpliciter primo collocata reliqua subtilius persequentes corporis bona facilem quandam rationem habere censebant; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Ergo hoc quidem apparet, nos ad agendum esse natos. </p>\r\n\r\n<p>Thanks,</p><p>Aretha Barnes</p>",
    "Email": "arethabarnes@syncfusion.com",
    "CC": [
      "Eleanor Cotton",
      "Byron Weiss"
    ],
    "CCMail": [
      "eleanorcotton@syncfusion.com",
      "byronweiss@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/38.png",
    "Time": "3.24 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10002",
    "text": "Richelle Mead",
    "ContactTitle": "Apology Email for Wrong Order",
    "Message": "<p>Hello Zelda Walton,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Quam ob rem tandem, inquit, non satisfacit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>\r\n\r\n<p>Omnia peccata paria dicitis. Apparet statim, quae sint officia, quae actiones. Sed ad haec, nisi molestum est, habeo quae velim. Quid enim est a Chrysippo praetermissum in Stoicis? Quia dolori non voluptas contraria est, sed doloris privatio. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Bona autem corporis huic sunt, quod posterius posui, similiora. </p>\r\n\r\n<p>Age, inquies, ista parva sunt. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? </p>\r\n\r\n<ol>\r\n\t<li>Frater et T.</li>\r\n\t<li>An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P.</li>\r\n\t<li>Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat.</li>\r\n\t<li>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi.</li>\r\n</ol>\r\n\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Zelda Walton",
    "ToMail": "zeldawalton@syncfusion.com",
    "Image": "assets/images/images/32.png",
    "Time": "3.26 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10162",
    "text": "Anjolie Stokes",
    "ContactTitle": "Networking Referral",
    "Message": "<p>Hello Simone Barnes,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Regards,</p><p>Anjolie Stokes</p>",
    "Email": "anjoliestokes@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Simone Barnes",
    "ToMail": "simonebarnes@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "3.29 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10079",
    "text": "Ursula Patterson",
    "ContactTitle": "Programmer Position Application",
    "Message": "<p>Hello Kerry Best,</p><h4>Duo Reges: constructio interrete.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Quamquam tu hanc copiosiorem etiam soles dicere. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Praeclarae mortes sunt imperatoriae; Bona autem corporis huic sunt, quod posterius posui, similiora. Et quidem, inquit, vehementer errat; Suo enim quisque studio maxime ducitur. Quorum altera prosunt, nocent altera. </p>\r\n\r\n<h4>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</h4>\r\n\r\n<p>Summae mihi videtur inscitiae. Quis istum dolorem timet? Quid ergo hoc loco intellegit honestum? Collige omnia, quae soletis: Praesidium amicorum. Idemque diviserunt naturam hominis in animum et corpus. Negat esse eam, inquit, propter se expetendam. </p>\r\n\r\n<p>Nam ante Aristippus, et ille melius. Praeteritis, inquit, gaudeo. Inde igitur, inquit, ordiendum est. At iam decimum annum in spelunca iacet. Cur post Tarentum ad Archytam? Comprehensum, quod cognitum non habet? Sed fac ista esse non inportuna; Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Regards,</p><p>Ursula Patterson</p>",
    "Email": "ursulapatterson@syncfusion.com",
    "CC": [
      "Jane Lyons",
      "Knox Pitts"
    ],
    "CCMail": [
      "janelyons@syncfusion.com",
      "knoxpitts@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/1.png",
    "Time": "3.57 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10202",
    "text": "Oscar Mcconnell",
    "ContactTitle": "Home Furnishings",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Satisne vobis videor pro meo iure in vestris auribus commentatus? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Duo Reges: constructio interrete. Teneo, inquit, finem illi videri nihil dolere. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. </p>\r\n\r\n<p>Iam id ipsum absurdum, maximum malum neglegi. Apparet statim, quae sint officia, quae actiones. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Philosophi autem in suis lectulis plerumque moriuntur. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. </p>\r\n\r\n<ol>\r\n\t<li>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</li>\r\n\t<li>Quae cum essent dicta, finem fecimus et ambulandi et disputandi.</li>\r\n\t<li>Disserendi artem nullam habuit.</li>\r\n\t<li>Verum hoc loco sumo verbis his eandem certe vim voluptatis Epicurum nosse quam ceteros.</li>\r\n</ol>\r\n\r\n\r\n<p>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Profectus in exilium Tubulus statim nec respondere ausus; Nam si amitti vita beata potest, beata esse non potest. Nos paucis ad haec additis finem faciamus aliquando; Homines optimi non intellegunt totam rationem everti, si ita res se habeat. Quae cum dixisset paulumque institisset, Quid est? </p>\r\n\r\n<p>Praeclare hoc quidem. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Oratio me istius philosophi non offendit; Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Sed fortuna fortis; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Poterat autem inpune; Omnia contraria, quos etiam insanos esse vultis. </p>\r\n\r\n<p>Thank you,</p><p>Oscar Mcconnell</p>",
    "Email": "oscarmcconnell@syncfusion.com",
    "CC": [
      "Mona Bates"
    ],
    "CCMail": [
      "monabates@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "4.22 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10049",
    "text": "Haley Castillo",
    "ContactTitle": "Apology for late response email",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si longus, levis. Cur deinde Metrodori liberos commendas? Confecta res esset. Duo Reges: constructio interrete. Sed quot homines, tot sententiae; Hanc quoque iucunditatem, si vis, transfer in animum; </p>\r\n\r\n<p>Sit enim idem caecus, debilis. Sed residamus, inquit, si placet. Sed nimis multa. Quis negat? Iam in altera philosophiae parte. Negare non possum. </p>\r\n\r\n<ul>\r\n\t<li>Qui ita affectus, beatum esse numquam probabis;</li>\r\n\t<li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li>\r\n\t<li>Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus.</li>\r\n\t<li>An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?</li>\r\n\t<li>Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.</li>\r\n\t<li>Sed nimis multa.</li>\r\n</ul>\r\n\r\n\r\n<p>At hoc in eo M. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Sed quae tandem ista ratio est? Sin aliud quid voles, postea. </p>\r\n\r\n<p>Regards,</p><p>Haley Castillo</p>",
    "Email": "haleycastillo@syncfusion.com",
    "CC": [
      "Athena Mcintosh"
    ],
    "CCMail": [
      "athenamcintosh@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "4.29 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10187",
    "text": "Jordan Bowers",
    "ContactTitle": "Apology for late response email",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam de isto magna dissensio est. Ut aliquid scire se gaudeant? Sed tamen intellego quid velit. Non est igitur voluptas bonum. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Nam quid possumus facere melius? De quibus cupio scire quid sentias. An potest, inquit ille, quicquam esse suavius quam nihil dolere? Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Erat enim Polemonis.</dfn></dt>\r\n\t<dd>Inde sermone vario <i>[redacted]</i> illa a Dipylo stadia confecimus.</dd>\r\n\t<dt><dfn>Avaritiamne minuis?</dfn></dt>\r\n\t<dd>Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum.</dd>\r\n\t<dt><dfn>Sumenda potius quam expetenda.</dfn></dt>\r\n\t<dd>Audax negotium, dicerem impudens, nisi hoc institutum postea translatum ad philosophos nostros esset.</dd>\r\n\t<dt><dfn>Quid iudicant sensus?</dfn></dt>\r\n\t<dd>Ita fit cum gravior, tum etiam splendidior oratio.</dd>\r\n</dl>\r\n\r\n\r\n<p>Quid censes in Latino fore? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Regards,</p><p>Jordan Bowers</p>",
    "Email": "jordanbowers@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/20.png",
    "Time": "4.32 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10046",
    "text": "Nichole Rivas",
    "ContactTitle": "Annual Conference",
    "Message": "<p>Hi Igor Mccoy,</p><h4>Facillimum id quidem est, inquam.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Tum Torquatus: Prorsus, inquit, assentior; Tecum optime, deinde etiam cum mediocri amico. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Duo Reges: constructio interrete. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. </p>\r\n\r\n<p><b>Sed hoc sane concedamus.</b> Sit enim idem caecus, debilis. <mark>Eam tum adesse, cum dolor omnis absit;</mark> Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dic in quovis conventu te omnia facere, ne doleas. Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Neque solum ea communia, verum etiam paria esse dixerunt. Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. </p>\r\n\r\n<pre>Qui est in parvis malis.\r\n\r\nEt homini, qui ceteris animantibus plurimum praestat,\r\npraecipue a natura nihil datum esse dicemus?\r\n</pre>\r\n\r\n\r\n<ol>\r\n\t<li>Aut unde est hoc contritum vetustate proverbium: quicum in tenebris?</li>\r\n\t<li>Quis Aristidem non mortuum diligit?</li>\r\n\t<li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.</li>\r\n\t<li>Sed utrum hortandus es nobis, Luci, inquit, an etiam tua sponte propensus es?</li>\r\n</ol>\r\n\r\n\r\n<h4>Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur.</h4>\r\n\r\n<p>Etenim semper illud extra est, quod arte comprehenditur. Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam; Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Thanks,</p><p>Nichole Rivas</p>",
    "Email": "nicholerivas@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Mia Parrish",
      "Alika Rivers"
    ],
    "BCCMail": [
      "miaparrish@syncfusion.com",
      "alikarivers@syncfusion.com"
    ],
    "To": "Igor Mccoy",
    "ToMail": "igormccoy@syncfusion.com",
    "Image": "assets/images/images/1.png",
    "Time": "4.35 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10095",
    "text": "Gemma Roberson",
    "ContactTitle": "Apology for late response email",
    "Message": "<p>Hello Colette Wooten,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prave, nequiter, turpiter cenabat; Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. </p>\r\n\r\n<p>Tum mihi Piso: Quid ergo? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Duo Reges: constructio interrete. Minime vero istorum quidem, inquit. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>\r\n\r\n<blockquote>\r\n\tAt iste non dolendi status non vocatur voluptas.\r\n</blockquote>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quid turpius quam sapientis vitam ex insipientium sermone pendere? Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Huius ego nunc auctoritatem sequens idem faciam. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Si enim ita est, vide ne facinus facias, cum mori suadeas. Dici enim nihil potest verius. </p>\r\n\r\n<p>Regards,</p><p>Gemma Roberson</p>",
    "Email": "gemmaroberson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Leilani Mayer",
      "Ursula Vasquez"
    ],
    "BCCMail": [
      "leilanimayer@syncfusion.com",
      "ursulavasquez@syncfusion.com"
    ],
    "To": "Colette Wooten",
    "ToMail": "colettewooten@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "4.36 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10156",
    "text": "Austin Hancock",
    "ContactTitle": "Home Furnishings",
    "Message": "<p>Hi Leilani Mayer,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Thanks,</p><p>Austin Hancock</p>",
    "Email": "austinhancock@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Leilani Mayer",
    "ToMail": "leilanimayer@syncfusion.com",
    "Image": "assets/images/images/7.png",
    "Time": "4.38 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10097",
    "text": "Ann Garza",
    "ContactTitle": "Application for Job Title",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Regards,</p><p>Ann Garza</p>",
    "Email": "anngarza@syncfusion.com",
    "CC": [
      "Omar Curry"
    ],
    "CCMail": [
      "omarcurry@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/55.png",
    "Time": "4.4 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10131",
    "text": "Leilani Thomas",
    "ContactTitle": "Sandra Smith Update",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam in altera philosophiae parte. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Qui autem esse poteris, nisi te amor ipse ceperit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Recte dicis; </p>\r\n\r\n<p>Quid, si non sensus modo ei sit datus, verum etiam animus hominis? Non quam nostram quidem, inquit Pomponius iocans; Hoc est non modo cor non habere, sed ne palatum quidem. Certe non potest. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. </p>\r\n\r\n<blockquote>\r\n\tSi enim ad honestatem omnia referant neque in ea voluptatem dicant inesse, ait eos voce inani sonarehis enim ipsis verbis utitur-neque intellegere nec videre sub hanc vocem honestatis quae sit subicienda sententia.\r\n</blockquote>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Esse enim quam vellet iniquus iustus poterat inpune. Facillimum id quidem est, inquam. Expectoque quid ad id, quod quaerebam, respondeas. Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Omnes enim iucundum motum, quo sensus hilaretur. Esse enim quam vellet iniquus iustus poterat inpune. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. </p>\r\n\r\n<p>Nobis aliter videtur, recte secusne, postea; Quid est, quod ab ea absolvi et perfici debeat? Apud imperitos tum illa dicta sunt, aliquid etiam coronae datum; Ratio quidem vestra sic cogit. Qui ita affectus, beatum esse numquam probabis; Primum quid tu dicis breve? </p>\r\n\r\n<p>Regards,</p><p>Leilani Thomas</p>",
    "Email": "leilanithomas@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/44.png",
    "Time": "4.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10086",
    "text": "Idona Stanton",
    "ContactTitle": "Service appointment confirmation",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i>Contemnit enim disserendi elegantiam, confuse loquitur.</i> Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare? <mark>Confecta res esset.</mark> <i>Sint ista Graecorum;</i> Duo Reges: constructio interrete. Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. </p>\r\n\r\n<pre>Nam cum Academicis incerta luctatio est, qui nihil affirmant\r\net quasi desperata cognitione certi id sequi volunt,\r\nquodcumque veri simile videatur.\r\n\r\nMe ipsum esse dicerem, inquam, nisi mihi viderer habere bene\r\ncognitam voluptatem et satis firme conceptam animo atque\r\ncomprehensam.\r\n</pre>\r\n\r\n\r\n<blockquote>\r\n\tEquidem in omnibus istis conclusionibus hoc putarem philosophia nobisque dignum, et maxime, cum summum bonum quaereremus, vitam nostram, consilia, voluntates, non verba corrigi.\r\n</blockquote>\r\n\r\n\r\n<ol>\r\n\t<li>Ut optime, secundum naturam affectum esse possit.</li>\r\n\t<li>Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis.</li>\r\n\t<li>Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.</li>\r\n\t<li>An quod ita callida est, ut optime possit architectari voluptates?</li>\r\n</ol>\r\n\r\n\r\n<p>Sed fortuna fortis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. <b>Quid sequatur, quid repugnet, vident.</b> At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. Nemo igitur esse beatus potest. Et non ex maxima parte de tota iudicabis? Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. </p>\r\n\r\n<p>Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Quid ad utilitatem tantae pecuniae? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Negat enim summo bono afferre incrementum diem. Omnia contraria, quos etiam insanos esse vultis. Sed quanta sit alias, nunc tantum possitne esse tanta. Tecum optime, deinde etiam cum mediocri amico. Quis est, qui non oderit libidinosam, protervam adolescentiam? Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? </p>\r\n\r\n<p>Thanks,</p><p>Idona Stanton</p>",
    "Email": "idonastanton@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/54.png",
    "Time": "4.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10073",
    "text": "Diana Hansen",
    "ContactTitle": "New business relationship confirmation",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Dici enim nihil potest verius.</b> Respondent extrema primis, media utrisque, omnia omnibus. Egone non intellego, quid sit don Graece, Latine voluptas? Tu enim ista lenius, hic Stoicorum more nos vexat. Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere. Quod autem ratione actum est, id officium appellamus. Me igitur ipsum ames oportet, non mea, si veri amici futuri sumus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; <i>Summum enim bonum exposuit vacuitatem doloris;</i> </p>\r\n\r\n<ol>\r\n\t<li>Sed ne, dum huic obsequor, vobis molestus sim.</li>\r\n\t<li>Idem iste, inquam, de voluptate quid sentit?</li>\r\n\t<li>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</li>\r\n\t<li>Haec quo modo conveniant, non sane intellego.</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?</li>\r\n</ol>\r\n\r\n\r\n<p><mark>Omnis enim est natura diligens sui.</mark> Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. <b>At hoc in eo M.</b> Quid nunc honeste dicit? Ita multa dicunt, quae vix intellegam. Unum est sine dolore esse, alterum cum voluptate. Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? </p>\r\n\r\n<p>Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. <i>Quibusnam praeteritis?</i> Paulum, cum regem Persem captum adduceret, eodem flumine invectio? <b>Solum praeterea formosum, solum liberum, solum civem, stultost;</b> Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint. Ego vero isti, inquam, permitto. Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere. <mark>Scrupulum, inquam, abeunti;</mark> Summus dolor plures dies manere non potest? </p>\r\n\r\n<p>Thanks,</p><p>Diana Hansen</p>",
    "Email": "dianahansen@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/52.png",
    "Time": "4.58 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10071",
    "text": "Lewis Patton",
    "ContactTitle": "Networking Request",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Quorum sine causa fieri nihil putandum est. Erat enim Polemonis. Si longus, levis; Quid, si etiam iucunda memoria est praeteritorum malorum? </p>\r\n\r\n<p>Iam in altera philosophiae parte. Hunc vos beatum; At enim hic etiam dolore. Primum quid tu dicis breve? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Itaque contra est, ac dicitis; Quamquam te quidem video minime esse deterritum. Si longus, levis; </p>\r\n\r\n<ol>\r\n\t<li>An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?</li>\r\n\t<li>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</li>\r\n\t<li>An vero, inquit, quisquam potest probare, quod perceptfum, quod.</li>\r\n\t<li>Ergo illi intellegunt quid Epicurus dicat, ego non intellego?</li>\r\n\t<li>Hanc quoque iucunditatem, si vis, transfer in animum;</li>\r\n</ol>\r\n\r\n\r\n<p>Thanks,</p><p>Lewis Patton</p>",
    "Email": "lewispatton@syncfusion.com",
    "CC": [
      "Reuben Mercer"
    ],
    "CCMail": [
      "reubenmercer@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "5.22 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10208",
    "text": "Zena Osborn",
    "ContactTitle": "Networking Referral",
    "Message": "<p>Dear Kerry Best,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Best wishes,</p><p>Zena Osborn</p>",
    "Email": "zenaosborn@syncfusion.com",
    "CC": [
      "Clare Heath",
      "Mona Bates"
    ],
    "CCMail": [
      "clareheath@syncfusion.com",
      "monabates@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/3.png",
    "Time": "5.24 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10036",
    "text": "krystine hobson",
    "ContactTitle": "Reference Request - Idona Stanton",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; Bonum patria: miserum exilium. Uterque enim summo bono fruitur, id est voluptate. An haec ab eo non dicuntur? Negat esse eam, inquit, propter se expetendam. Quid censes in Latino fore? Quid igitur, inquit, eos responsuros putas? Duo Reges: constructio interrete. Ubi ut eam caperet aut quando? </p>\r\n\r\n<p>Dat enim intervalla et relaxat. Idem iste, inquam, de voluptate quid sentit? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Tu quidem reddes; Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ecce aliud simile dissimile. </p>\r\n\r\n<p>Optime, inquam. An nisi populari fama? Bonum patria: miserum exilium. Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Hoc mihi cum tuo fratre convenit. At ille pellit, qui permulcet sensum voluptate. At multis malis affectus. Quid sequatur, quid repugnet, vident. Si quae forte-possumus. Quod non faceret, si in voluptate summum bonum poneret. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Lareina Downs"
    ],
    "CCMail": [
      "lareinadowns@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/55.png",
    "Time": "5.25 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10093",
    "text": "Alfonso Burnett",
    "ContactTitle": "Anything I can help with",
    "Message": "<p>Hello Otto Ashley,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; Bonum patria: miserum exilium. Uterque enim summo bono fruitur, id est voluptate. An haec ab eo non dicuntur? Negat esse eam, inquit, propter se expetendam. Quid censes in Latino fore? Quid igitur, inquit, eos responsuros putas? Duo Reges: constructio interrete. Ubi ut eam caperet aut quando? </p>\r\n\r\n<p>Dat enim intervalla et relaxat. Idem iste, inquam, de voluptate quid sentit? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Tu quidem reddes; Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ecce aliud simile dissimile. </p>\r\n\r\n<p>Optime, inquam. An nisi populari fama? Bonum patria: miserum exilium. Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Hoc mihi cum tuo fratre convenit. At ille pellit, qui permulcet sensum voluptate. At multis malis affectus. Quid sequatur, quid repugnet, vident. Si quae forte-possumus. Quod non faceret, si in voluptate summum bonum poneret. </p>\r\n\r\n<p>Regards,</p><p>Alfonso Burnett</p>",
    "Email": "alfonsoburnett@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Igor Hyde"
    ],
    "BCCMail": [
      "igorhyde@syncfusion.com"
    ],
    "To": "Otto Ashley",
    "ToMail": "ottoashley@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "5.27 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10186",
    "text": "Latifah Combs",
    "ContactTitle": "Apology Email for Wrong Order",
    "Message": "<p>Hello Gretchen Justice,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Regards,</p><p>Latifah Combs</p>",
    "Email": "latifahcombs@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Gretchen Justice",
    "ToMail": "gretchenjustice@syncfusion.com",
    "Image": "assets/images/images/54.png",
    "Time": "5.34 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10078",
    "text": "Eden Poole",
    "ContactTitle": "Performance appraisal announcement",
    "Message": "<p>Hi Aretha Barnes,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit? Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quo modo autem philosophus loquitur? </p>\r\n\r\n<p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus. Hoc est non modo cor non habere, sed ne palatum quidem. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Bona autem corporis huic sunt, quod posterius posui, similiora. Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Numquam facies. Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. </p>\r\n\r\n<p>Quamquam id quidem licebit iis existimare, qui legerint. Ubi ut eam caperet aut quando? Sine ea igitur iucunde negat posse se vivere? Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Cum praesertim illa perdiscere ludus esset. Quis Aristidem non mortuum diligit? De vacuitate doloris eadem sententia erit. Ad eos igitur converte te, quaeso. Duo enim genera quae erant, fecit tria. Omnes enim iucundum motum, quo sensus hilaretur. Nos vero, inquit ille; Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. </p>\r\n\r\n<p>Thanks,</p><p>Eden Poole</p>",
    "Email": "edenpoole@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Juliet Barlow",
      "Brian Blackburn"
    ],
    "BCCMail": [
      "julietbarlow@syncfusion.com",
      "brianblackburn@syncfusion.com"
    ],
    "To": "Aretha Barnes",
    "ToMail": "arethabarnes@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "5.34 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10176",
    "text": "Giselle Booth",
    "ContactTitle": "Sales Team",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Eadem nunc mea adversum te oratio est. <b>Primum in nostrane potestate est, quid meminerimus?</b> Expectoque quid ad id, quod quaerebam, respondeas. Quod autem in homine praestantissimum atque optimum est, id deseruit. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus. </p>\r\n\r\n<ul>\r\n\t<li>Quorum sine causa fieri nihil putandum est.</li>\r\n\t<li>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</li>\r\n</ul>\r\n\r\n\r\n<p>Non autem hoc: igitur ne illud quidem. Tum Quintus: Est plane, Piso, ut dicis, inquit. Contemnit enim disserendi elegantiam, confuse loquitur. Si id dicis, vicimus. Sed fortuna fortis; </p>\r\n\r\n<p><b>Aliter homines, aliter philosophos loqui putas oportere?</b> De illis, cum volemus. <b>Huius ego nunc auctoritatem sequens idem faciam.</b> Quid ait Aristoteles reliquique Platonis alumni? </p>\r\n\r\n<p>Sincerely,</p><p>Giselle Booth</p>",
    "Email": "gisellebooth@syncfusion.com",
    "CC": [
      "Seth Pierce",
      "Avram Kent"
    ],
    "CCMail": [
      "sethpierce@syncfusion.com",
      "avramkent@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/35.png",
    "Time": "5.35 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10198",
    "text": "Ursula Vasquez",
    "ContactTitle": "Follow up application",
    "Message": "<p>Hi Ariel Wagner,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Ut id aliis narrare gestiant? Quam illa ardentis amores excitaret sui! Cur tandem? Quonam, inquit, modo? Duo Reges: constructio interrete. Aliter enim explicari, quod quaeritur, non potest. </p>\r\n\r\n<p>Videsne quam sit magna dissensio? Sin aliud quid voles, postea. De hominibus dici non necesse est. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Torquatus, is qui consul cum Cn. </p>\r\n\r\n<p>Traditur, inquit, ab Epicuro ratio neglegendi doloris. Simus igitur contenti his. Istic sum, inquit. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quid de Pythagora? Si enim ad populum me vocas, eum. Esse enim quam vellet iniquus iustus poterat inpune. Verum hoc idem saepe faciamus. Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Vide, quaeso, rectumne sit.</dfn></dt>\r\n\t<dd>Sed in rebus apertissimis nimium longi sumus.</dd>\r\n\t<dt><dfn>Tu quidem reddes;</dfn></dt>\r\n\t<dd>Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.</dd>\r\n\t<dt><dfn>Pollicetur certe.</dfn></dt>\r\n\t<dd>Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt;</dd>\r\n</dl>\r\n\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Quae duo sunt, unum facit. Scisse enim te quis coarguere possit? Primum divisit ineleganter; Zenonis est, inquam, hoc Stoici. Sed videbimus. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Quae sequuntur igitur? Urgent tamen et nihil remittunt. Quae duo sunt, unum facit. Compensabatur, inquit, cum summis doloribus laetitia. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Sic enim censent, oportunitatis esse beate vivere. Tuo vero id quidem, inquam, arbitratu. Aliter homines, aliter philosophos loqui putas oportere? Quid enim est a Chrysippo praetermissum in Stoicis? Quae sequuntur igitur? </p>\r\n\r\n<p>Thanks,</p><p>Ursula Vasquez</p>",
    "Email": "ursulavasquez@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Ariel Wagner",
    "ToMail": "arielwagner@syncfusion.com",
    "Image": "assets/images/images/17.png",
    "Time": "5.36 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10154",
    "text": "Kylee Weber",
    "ContactTitle": "Graduation Announcement",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam. Illis videtur, qui illud non dubitant bonum dicere -; Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. </p>\r\n\r\n<p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Sed ad rem redeamus; Hoc mihi cum tuo fratre convenit. Quod quidem iam fit etiam in Academia. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Apparet statim, quae sint officia, quae actiones. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quid est, quod ab ea absolvi et perfici debeat? Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter videt. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Quid de Platone aut de Democrito loquar? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nunc omni virtuti vitium contrario nomine opponitur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Magna laus.</dfn></dt>\r\n\t<dd>Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret?</dd>\r\n\t<dt><dfn>Quis negat?</dfn></dt>\r\n\t<dd>Is ita vivebat, ut nulla tam exquisita posset inveniri voluptas, qua non abundaret.</dd>\r\n\t<dt><dfn>Immo videri fortasse.</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Non igitur bene.</dfn></dt>\r\n\t<dd>Qua tu etiam inprudens utebare non numquam.</dd>\r\n\t<dt><dfn>Eam stabilem appellas.</dfn></dt>\r\n\t<dd>Quod si ita se habeat, non possit beatam praestare vitam sapientia.</dd>\r\n\t<dt><dfn>Sedulo, inquam, faciam.</dfn></dt>\r\n\t<dd>Quis hoc dicit?</dd>\r\n</dl>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis est, qui non oderit libidinosam, protervam adolescentiam? At Zeno eum non beatum modo, sed etiam divitem dicere ausus est. Huius, Lyco, oratione locuples, rebus ipsis ielunior. </p>\r\n\r\n<p>Thanks,</p><p>Kylee Weber</p>",
    "Email": "kyleeweber@syncfusion.com",
    "CC": [
      "Latifah Combs",
      "Leslie Juarez"
    ],
    "CCMail": [
      "latifahcombs@syncfusion.com",
      "lesliejuarez@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/14.png",
    "Time": "5.55 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10136",
    "text": "Aaron Hawkins",
    "ContactTitle": "Training Announcement",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Polycratem Samium felicem appellabant. Quae in controversiam veniunt, de iis, si placet, disseramus. Universa enim illorum ratione cum tota vestra confligendum puto. Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. De quibus cupio scire quid sentias. Inde sermone vario <i>[redacted]</i> illa a Dipylo stadia confecimus. Itaque et vivere vitem et mori dicimus arboremque et novellan et vetulam et vigere et senescere. <b>Duo Reges: constructio interrete.</b> </p>\r\n\r\n<p>Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. An est aliquid, quod te sua sponte delectet? Itaque in rebus minime obscuris non multus est apud eos disserendi labor. Eaedem res maneant alio modo. Quis Aristidem non mortuum diligit? Alterum significari idem, ut si diceretur, officia media omnia aut pleraque servantem vivere. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Qui ita affectus, beatum esse numquam probabis; Sed nimis multa. Utrum igitur percurri omnem Epicuri disciplinam placet an de una voluptate quaeri, de qua omne certamen est? Habent enim et bene longam et satis litigiosam disputationem. </p>\r\n\r\n<p><i>Tubulo putas dicere?</i> Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Si enim ita est, vide ne facinus facias, cum mori suadeas. Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Nondum autem explanatum satis, erat, quid maxime natura vellet. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. </p>\r\n\r\n<p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Itaque his sapiens semper vacabit. Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Reguli reiciendam; Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Quae tamen a te agetur non melior, quam illae sunt, quas interdum optines. </p>\r\n\r\n<p>Regards,</p><p>Aaron Hawkins</p>",
    "Email": "aaronhawkins@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "6.14 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10096",
    "text": "Alana Mccray",
    "ContactTitle": "Apology marketing email",
    "Message": "<p>Hello Amber Holmes,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Duo Reges: constructio interrete. An eiusdem modi? Pugnant Stoici cum Peripateticis. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Si enim ad populum me vocas, eum. Quis est tam dissimile homini. Estne, quaeso, inquam, sitienti in bibendo voluptas? Ut aliquid scire se gaudeant? Satis est ad hoc responsum. Quantum Aristoxeni ingenium consumptum videmus in musicis? </p>\r\n\r\n<p>Sullae consulatum? Minime vero, inquit ille, consentit. Haeret in salebra. </p>\r\n\r\n<p>Facillimum id quidem est, inquam. Itaque his sapiens semper vacabit. Sint modo partes vitae beatae. Nihil enim iam habes, quod ad corpus referas; Equidem e Cn. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Sed nimis multa.</dfn></dt>\r\n\t<dd>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</dd>\r\n\t<dt><dfn>Nihil sane.</dfn></dt>\r\n\t<dd>Nos autem non solum beatae vitae istam esse oblectationem videmus, sed etiam levamentum miseriarum.</dd>\r\n\t<dt><dfn>Si quae forte-possumus.</dfn></dt>\r\n\t<dd>Duo enim genera quae erant, fecit tria.</dd>\r\n\t<dt><dfn>Scrupulum, inquam, abeunti;</dfn></dt>\r\n\t<dd>De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.</dd>\r\n</dl>\r\n\r\n\r\n<p>Iam in altera philosophiae parte. Torquatus, is qui consul cum Cn. Restinguet citius, si ardentem acceperit. Bonum valitudo: miser morbus. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Regards,</p><p>Alana Mccray</p>",
    "Email": "alanamccray@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Amber Holmes",
    "ToMail": "amberholmes@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "6.16 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10122",
    "text": "Sarah Reid",
    "ContactTitle": "Out of Office",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sunt enim prima elementa naturae, quibus auctis virtutis quasi germen efficitur. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Nihilne te delectat umquam -video, quicum loquar-, te igitur, Torquate, ipsum per se nihil delectat? Itaque contra est, ac dicitis; Duo Reges: constructio interrete. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Tanta vis admonitionis inest in locis; Ad eos igitur converte te, quaeso. Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt; Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? </p>\r\n\r\n<ul>\r\n\t<li>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</li>\r\n\t<li>Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere.</li>\r\n\t<li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.</li>\r\n</ul>\r\n\r\n\r\n<p>Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. At hoc in eo M. Egone non intellego, quid sit don Graece, Latine voluptas? Positum est a nostris in iis esse rebus, quae secundum naturam essent, non dolere; Quonam modo? Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Quid est, quod ab ea absolvi et perfici debeat? Quod si ita se habeat, non possit beatam praestare vitam sapientia. Quod autem ratione actum est, id officium appellamus. Quia dolori non voluptas contraria est, sed doloris privatio. </p>\r\n\r\n<p>Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Graece donan, Latine voluptatem vocant. Et non ex maxima parte de tota iudicabis? Quamquam te quidem video minime esse deterritum. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Nam Pyrrho, Aristo, Erillus iam diu abiecti. </p>\r\n\r\n<p>Thanks,</p><p>Sarah Reid</p>",
    "Email": "sarahreid@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/1.png",
    "Time": "6.3 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10173",
    "text": "Mia Parrish",
    "ContactTitle": "Proposition for a new business",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est ista, inquam, Piso, magna dissensio. Eademne, quae restincta siti? Praeclarae mortes sunt imperatoriae; Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. </p>\r\n\r\n<ul>\r\n\t<li>Quid censes in Latino fore?</li>\r\n\t<li>Pauca mutat vel plura sane;</li>\r\n\t<li>Sed mehercule pergrata mihi oratio tua.</li>\r\n</ul>\r\n\r\n\r\n<p>Illud non continuo, ut aeque incontentae. Aliter homines, aliter philosophos loqui putas oportere? Tollenda est atque extrahenda radicitus. Itaque ab his ordiamur. Sed ad haec, nisi molestum est, habeo quae velim. </p>\r\n\r\n<p>Id <i>[redacted]</i>tilius factum negabat. Occultum facinus esse potuerit, gaudebit; Haec dicuntur inconstantissime. Non quam nostram quidem, inquit Pomponius iocans; </p>\r\n\r\n<pre>Nam ceteris in rebus sive praetermissum sive ignoratum est\r\nquippiam, non plus incommodi est, quam quanti quaeque earum\r\nrerum est, in quibus neglectum est aliquid.\r\n\r\nIdne consensisse de Calatino plurimas gentis arbitramur,\r\nprimarium populi fuisse, quod praestantissimus fuisset in\r\nconficiendis voluptatibus?\r\n</pre>\r\n\r\n\r\n<p>Quod equidem non reprehendo; Expectoque quid ad id, quod quaerebam, respondeas. Nunc vides, quid faciat. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Duo enim genera quae erant, fecit tria. Hoc non est positum in nostra actione. Pauca mutat vel plura sane; <code>Sed hoc sane concedamus.</code> </p>\r\n\r\n<p>Sincerely,</p><p>Mia Parrish</p>",
    "Email": "miaparrish@syncfusion.com",
    "CC": [
      "Xanthus Harmon",
      "Gail Pierce"
    ],
    "CCMail": [
      "xanthusharmon@syncfusion.com",
      "gailpierce@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "6.37 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10181",
    "text": "Prescott Mccormick",
    "ContactTitle": "Today’s meeting schedule",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Duo Reges: constructio interrete. Quid sequatur, quid repugnet, vident. Qui est in parvis malis. </p>\r\n\r\n<ol>\r\n\t<li>Quid igitur dubitamus in tota eius natura quaerere quid sit effectum?</li>\r\n\t<li>Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</li>\r\n\t<li>Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus;</li>\r\n</ol>\r\n\r\n\r\n<p>Sed quot homines, tot sententiae; Sin aliud quid voles, postea. Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Quid ergo? Efficiens dici potest. </p>\r\n\r\n<p>Quorum sine causa fieri nihil putandum est. Quae diligentissime contra Aristonem dicuntur a Chryippo. Et ille ridens: Video, inquit, quid agas; Tamen a proposito, inquam, aberramus. Tu vero, inquam, ducas licet, si sequetur; Pauca mutat vel plura sane; Quid nunc honeste dicit? </p>\r\n\r\n<p>Regards,</p><p>Prescott Mccormick</p>",
    "Email": "prescottmccormick@syncfusion.com",
    "CC": [
      "Cameran Roth"
    ],
    "CCMail": [
      "cameranroth@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/41.png",
    "Time": "6.42 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10152",
    "text": "Sandra Snyder",
    "ContactTitle": "Follow up application",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Sed ad illum redeo. Ille incendat? Stoicos roga. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. </p>\r\n\r\n<p>Sed nimis multa. Ea possunt paria non esse. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Iam id ipsum absurdum, maximum malum neglegi. Quid de Platone aut de Democrito loquar? Neutrum vero, inquit ille. Quid enim de amicitia statueris utilitatis causa expetenda vides. </p>\r\n\r\n<p>Si quae forte-possumus. Sed ad illum redeo. </p>\r\n\r\n<p>Quis Aristidem non mortuum diligit? Confecta res esset. Ita fit cum gravior, tum etiam splendidior oratio. Videmus igitur ut conquiescere ne infantes quidem possint. Aliter enim nosmet ipsos nosse non possumus. Ea possunt paria non esse. </p>\r\n\r\n<p>Quae sequuntur igitur? Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Cur post Tarentum ad Archytam? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Eam tum adesse, cum dolor omnis absit; Sed ad bona praeterita redeamus. Hic ambiguo ludimur. </p>\r\n\r\n<p>Satis est ad hoc responsum. Sed plane dicit quod intellegit. Summus dolor plures dies manere non potest? Murenam te accusante defenderem. Quis istud possit, inquit, negare? Summum enim bonum exposuit vacuitatem doloris; Eadem fortitudinis ratio reperietur. </p>\r\n\r\n<p>Thanks,</p><p>Sandra Snyder</p>",
    "Email": "sandrasnyder@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "6.45 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10125",
    "text": "Nayda Tate",
    "ContactTitle": "Programmer Position - Jane Doe Application",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Eadem nunc mea adversum te oratio est. <b>Primum in nostrane potestate est, quid meminerimus?</b> Expectoque quid ad id, quod quaerebam, respondeas. Quod autem in homine praestantissimum atque optimum est, id deseruit. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus. </p>\r\n\r\n<ul>\r\n\t<li>Quorum sine causa fieri nihil putandum est.</li>\r\n\t<li>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</li>\r\n</ul>\r\n\r\n\r\n<p>Non autem hoc: igitur ne illud quidem. Tum Quintus: Est plane, Piso, ut dicis, inquit. Contemnit enim disserendi elegantiam, confuse loquitur. Si id dicis, vicimus. Sed fortuna fortis; </p>\r\n\r\n<p><b>Aliter homines, aliter philosophos loqui putas oportere?</b> De illis, cum volemus. <b>Huius ego nunc auctoritatem sequens idem faciam.</b> Quid ait Aristoteles reliquique Platonis alumni? </p>\r\n\r\n<p>Thanks,</p><p>Nayda Tate</p>",
    "Email": "naydatate@syncfusion.com",
    "CC": [
      "Ashely Compton",
      "Aileen Perkins"
    ],
    "CCMail": [
      "ashelycompton@syncfusion.com",
      "aileenperkins@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/54.png",
    "Time": "6.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10115",
    "text": "Lacota Lloyd",
    "ContactTitle": "My life in New York",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Regards,</p><p>Lacota Lloyd</p>",
    "Email": "lacotalloyd@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/14.png",
    "Time": "6.52 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10101",
    "text": "Rogan Espinoza",
    "ContactTitle": "Assistant Marketing Department",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Quod ea non occurrentia fingunt, vincunt Aristonem; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Tubulo putas dicere? Vide igitur ne non debeas verbis nostris uti, sententiis tuis. Duo Reges: constructio interrete. Ea possunt paria non esse. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Eam tum adesse, cum dolor omnis absit; Istic sum, inquit. Quod quoniam in quo sit magna dissensio est, Carneadea nobis adhibenda divisio est, qua noster Antiochus libenter uti solet. Quod enim ne vivus quidem, inquit, diutius sentire poterat, quam dum fruebatur, quo modo id potuit mortuo permanere? Mihi enim satis est, ipsis non satis. </p>\r\n\r\n<p>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ne in odium veniam, si amicum destitero tueri. Ut enim, inquit, gubernator aeque peccat, si palearum navem evertit et si auri, item aeque peccat, qui parentem et qui servum iniuria verberat. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. </p>\r\n\r\n<p>Best wishes,</p><p>Rogan Espinoza</p>",
    "Email": "roganespinoza@syncfusion.com",
    "CC": [
      "Marny Rosario"
    ],
    "CCMail": [
      "marnyrosario@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "6.55 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10163",
    "text": "Kai Mason",
    "ContactTitle": "Networking Request",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quicquam extra virtutem habeatur in bonis. Nihil illinc huc pervenit. Duo Reges: constructio interrete. Omnia peccata paria dicitis. Sed ne, dum huic obsequor, vobis molestus sim. Quae sequuntur igitur? Quo modo autem optimum, si bonum praeterea nullum est? </p>\r\n\r\n<p>Nihil illinc huc pervenit. Videamus animi partes, quarum est conspectus illustrior; Beatus sibi videtur esse moriens. Haec quo modo conveniant, non sane intellego. Praeteritis, inquit, gaudeo. Quonam, inquit, modo? Equidem e Cn. </p>\r\n\r\n<p>Frater et T. Eam stabilem appellas. Praeteritis, inquit, gaudeo. Sed tamen intellego quid velit. Quid enim possumus hoc agere divinius? Quamquam tu hanc copiosiorem etiam soles dicere. </p>\r\n\r\n<p>Sin aliud quid voles, postea. Occultum facinus esse potuerit, gaudebit; Quid ad utilitatem tantae pecuniae? Quid est enim aliud esse versutum? Istam voluptatem perpetuam quis potest praestare sapienti? </p>\r\n\r\n<p>Pollicetur certe. Et nemo nimium beatus est; Quis negat? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Sint modo partes vitae beatae. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Yours,</p><p>Kai Mason</p>",
    "Email": "kaimason@syncfusion.com",
    "CC": [
      "Maxwell Nelson"
    ],
    "CCMail": [
      "maxwellnelson@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "6.57 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10099",
    "text": "Sierra Kerr",
    "ContactTitle": "Application for Transfer",
    "Message": "<p>Dear Halee Lindsey,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Duo Reges: constructio interrete. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Ita ne hoc quidem modo paria peccata sunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Expectoque quid ad id, quod quaerebam, respondeas. Et summatim quidem haec erant de corpore animoque dicenda, quibus quasi informatum est quid hominis natura postulet. Respondent extrema primis, media utrisque, omnia omnibus. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>\r\n\r\n<ul>\r\n\t<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>\r\n\t<li>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</li>\r\n\t<li>Habent enim et bene longam et satis litigiosam disputationem.</li>\r\n\t<li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem.</li>\r\n\t<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>\r\n</ul>\r\n\r\n\r\n<p>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Praeteritis, inquit, gaudeo. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Hoc sic expositum dissimile est superiori. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Sit enim idem caecus, debilis. </p>\r\n\r\n<p>Fortemne possumus dicere eundem illum Torquatum? Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Praetereo multos, in bis doctum hominem et suavem, Hieronymum, quem iam cur Peripateticum appellem nescio. Rationis enim perfectio est virtus; Minime vero istorum quidem, inquit. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? </p>\r\n\r\n<p>Best wishes,</p><p>Sierra Kerr</p>",
    "Email": "sierrakerr@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Otto Ashley"
    ],
    "BCCMail": [
      "ottoashley@syncfusion.com"
    ],
    "To": "Halee Lindsey",
    "ToMail": "haleelindsey@syncfusion.com",
    "Image": "assets/images/images/42.png",
    "Time": "7.12 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10044",
    "text": "Kirby Dickerson",
    "ContactTitle": "Training Announcement",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Cur post Tarentum ad Archytam?</b> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Si enim non fuit eorum iudicii, nihilo magis hoc non addito illud est iudicatum-. Sed quia studebat laudi et dignitati, multum in virtute processerat. <b>An hoc usque quaque, aliter in vita?</b> Duo Reges: constructio interrete. </p>\r\n\r\n<p>Eam tum adesse, cum dolor omnis absit; <b>Apparet statim, quae sint officia, quae actiones.</b> Deinde disputat, quod cuiusque generis animantium statui deceat extremum. <b>Quae similitudo in genere etiam humano apparet.</b> </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Isto modo ne improbos quidem, si essent boni viri. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Quo plebiscito decreta a senatu est consuli quaestio Cn. Aliter homines, aliter philosophos loqui putas oportere? Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Teneo, inquit, finem illi videri nihil dolere. Color egregius, integra valitudo, summa gratia, vita denique conferta voluptatum omnium varietate. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. </p>\r\n\r\n<p>De ingenio eius in his disputationibus, non de moribus quaeritur. Non quam nostram quidem, inquit Pomponius iocans; Sed haec in pueris; Isto modo, ne si avia quidem eius nata non esset. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Thanks,</p><p>Kirby Dickerson</p>",
    "Email": "kirbydickerson@syncfusion.com",
    "CC": [
      "Lewis Patton",
      "Evangeline Prince"
    ],
    "CCMail": [
      "lewispatton@syncfusion.com",
      "evangelineprince@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/36.png",
    "Time": "7.42 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10037",
    "text": "krystine hobson",
    "ContactTitle": "Request for meeting appointment email",
    "Message": "<p>Hi Rose Maldonado,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Duo Reges: constructio interrete. An eiusdem modi? Pugnant Stoici cum Peripateticis. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Si enim ad populum me vocas, eum. Quis est tam dissimile homini. Estne, quaeso, inquam, sitienti in bibendo voluptas? Ut aliquid scire se gaudeant? Satis est ad hoc responsum. Quantum Aristoxeni ingenium consumptum videmus in musicis? </p>\r\n\r\n<p>Sullae consulatum? Minime vero, inquit ille, consentit. Haeret in salebra. </p>\r\n\r\n<p>Facillimum id quidem est, inquam. Itaque his sapiens semper vacabit. Sint modo partes vitae beatae. Nihil enim iam habes, quod ad corpus referas; Equidem e Cn. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Sed nimis multa.</dfn></dt>\r\n\t<dd>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</dd>\r\n\t<dt><dfn>Nihil sane.</dfn></dt>\r\n\t<dd>Nos autem non solum beatae vitae istam esse oblectationem videmus, sed etiam levamentum miseriarum.</dd>\r\n\t<dt><dfn>Si quae forte-possumus.</dfn></dt>\r\n\t<dd>Duo enim genera quae erant, fecit tria.</dd>\r\n\t<dt><dfn>Scrupulum, inquam, abeunti;</dfn></dt>\r\n\t<dd>De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.</dd>\r\n</dl>\r\n\r\n\r\n<p>Iam in altera philosophiae parte. Torquatus, is qui consul cum Cn. Restinguet citius, si ardentem acceperit. Bonum valitudo: miser morbus. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Nayda Tate",
      "Cherokee Clements"
    ],
    "BCCMail": [
      "naydatate@syncfusion.com",
      "cherokeeclements@syncfusion.com"
    ],
    "To": "Rose Maldonado",
    "ToMail": "rosemaldonado@syncfusion.com",
    "Image": "assets/images/images/44.png",
    "Time": "7.45 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10203",
    "text": "Quynn Carr",
    "ContactTitle": "Hospitality Committee",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quicquam extra virtutem habeatur in bonis. Nihil illinc huc pervenit. Duo Reges: constructio interrete. Omnia peccata paria dicitis. Sed ne, dum huic obsequor, vobis molestus sim. Quae sequuntur igitur? Quo modo autem optimum, si bonum praeterea nullum est? </p>\r\n\r\n<p>Nihil illinc huc pervenit. Videamus animi partes, quarum est conspectus illustrior; Beatus sibi videtur esse moriens. Haec quo modo conveniant, non sane intellego. Praeteritis, inquit, gaudeo. Quonam, inquit, modo? Equidem e Cn. </p>\r\n\r\n<p>Frater et T. Eam stabilem appellas. Praeteritis, inquit, gaudeo. Sed tamen intellego quid velit. Quid enim possumus hoc agere divinius? Quamquam tu hanc copiosiorem etiam soles dicere. </p>\r\n\r\n<p>Sin aliud quid voles, postea. Occultum facinus esse potuerit, gaudebit; Quid ad utilitatem tantae pecuniae? Quid est enim aliud esse versutum? Istam voluptatem perpetuam quis potest praestare sapienti? </p>\r\n\r\n<p>Pollicetur certe. Et nemo nimium beatus est; Quis negat? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Sint modo partes vitae beatae. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Best wishes,</p><p>Quynn Carr</p>",
    "Email": "quynncarr@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/47.png",
    "Time": "7.46 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10063",
    "text": "Brynne Wise",
    "ContactTitle": "Holiday application",
    "Message": "<p>Hi Guinevere Gilmore,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sic consequentibus vestris sublatis prima tolluntur. <b>Sin aliud quid voles, postea.</b> <b>Quare attende, quaeso.</b> </p>\r\n\r\n<p><b>Sed tamen intellego quid velit.</b> <b>Hunc vos beatum;</b> <b>Et nemo nimium beatus est;</b> <b>Hanc ergo intuens debet institutum illud quasi signum absolvere.</b> Tubulo putas dicere? <b>Sed ne, dum huic obsequor, vobis molestus sim.</b> Quid ergo hoc loco intellegit honestum? Qua tu etiam inprudens utebare non numquam. </p>\r\n\r\n<p><b>Audeo dicere, inquit.</b> <i>Sed ille, ut dixi, vitiose.</i> Causa autem fuit huc veniendi ut quosdam hinc libros promerem. Summus dolor plures dies manere non potest? <mark>Moriatur, inquit.</mark> <b>Ea possunt paria non esse.</b> </p>\r\n\r\n<p><i>Omnia peccata paria dicitis.</i> Primum Theophrasti, Strato, physicum se voluit; Invidiosum nomen est, infame, suspectum. At coluit ipse amicitias. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Thanks,</p><p>Brynne Wise</p>",
    "Email": "brynnewise@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Avram Kent"
    ],
    "BCCMail": [
      "avramkent@syncfusion.com"
    ],
    "To": "Guinevere Gilmore",
    "ToMail": "guineveregilmore@syncfusion.com",
    "Image": "assets/images/images/20.png",
    "Time": "7.47 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10105",
    "text": "Jenette Dickerson",
    "ContactTitle": "Congratulations On Your New Position",
    "Message": "<p>Dear Jelani Moreno,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Best wishes,</p><p>Jenette Dickerson</p>",
    "Email": "jenettedickerson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Jelani Moreno",
    "ToMail": "jelanimoreno@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "7.53 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10197",
    "text": "Jane Lyons",
    "ContactTitle": "Congratulations On Your New Position",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verba tu fingas et ea dicas, quae non sentias? Esse enim quam vellet iniquus iustus poterat inpune. Non dolere, inquam, istud quam vim habeat postea videro; Duarum enim vitarum nobis erunt instituta capienda. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Duo Reges: constructio interrete. Nec enim ignoras his istud honestum non summum modo, sed etiam, ut tu vis, solum bonum videri. Quibus ego vehementer assentior. Hoc Hieronymus summum bonum esse dixit. </p>\r\n\r\n<p>Summum enim bonum exposuit vacuitatem doloris; Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Tuo vero id quidem, inquam, arbitratu. Ait enim se, si uratur, Quam hoc suave! dicturum. Quam illa ardentis amores excitaret sui! Cur tandem? Estne, quaeso, inquam, sitienti in bibendo voluptas? Quid est, quod ab ea absolvi et perfici debeat? Verum hoc idem saepe faciamus. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. </p>\r\n\r\n<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Omnes enim iucundum motum, quo sensus hilaretur. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Cur id non ita fit? Inde igitur, inquit, ordiendum est. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? </p>\r\n\r\n<p>Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Atque ita re simpliciter primo collocata reliqua subtilius persequentes corporis bona facilem quandam rationem habere censebant; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Ergo hoc quidem apparet, nos ad agendum esse natos. </p>\r\n\r\n<p>Thanks,</p><p>Jane Lyons</p>",
    "Email": "janelyons@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "7.54 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10024",
    "text": "krystine hobson",
    "ContactTitle": "Networking Referral",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Jane Lyons",
      "Callie Weiss"
    ],
    "CCMail": [
      "janelyons@syncfusion.com",
      "callieweiss@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "7.56 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10200",
    "text": "Iona Velasquez",
    "ContactTitle": "Graduation Announcement",
    "Message": "<p>Dear Sydnee Soto,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Quod ea non occurrentia fingunt, vincunt Aristonem; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Tubulo putas dicere? Vide igitur ne non debeas verbis nostris uti, sententiis tuis. Duo Reges: constructio interrete. Ea possunt paria non esse. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Eam tum adesse, cum dolor omnis absit; Istic sum, inquit. Quod quoniam in quo sit magna dissensio est, Carneadea nobis adhibenda divisio est, qua noster Antiochus libenter uti solet. Quod enim ne vivus quidem, inquit, diutius sentire poterat, quam dum fruebatur, quo modo id potuit mortuo permanere? Mihi enim satis est, ipsis non satis. </p>\r\n\r\n<p>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ne in odium veniam, si amicum destitero tueri. Ut enim, inquit, gubernator aeque peccat, si palearum navem evertit et si auri, item aeque peccat, qui parentem et qui servum iniuria verberat. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. </p>\r\n\r\n<p>Best wishes,</p><p>Iona Velasquez</p>",
    "Email": "ionavelasquez@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Hanna Benjamin",
      "Lareina Downs"
    ],
    "BCCMail": [
      "hannabenjamin@syncfusion.com",
      "lareinadowns@syncfusion.com"
    ],
    "To": "Sydnee Soto",
    "ToMail": "sydneesoto@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "8.17 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10020",
    "text": "krystine hobson",
    "ContactTitle": "Invitation for farewell party of Mr",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Quod ea non occurrentia fingunt, vincunt Aristonem; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Tubulo putas dicere? Vide igitur ne non debeas verbis nostris uti, sententiis tuis. Duo Reges: constructio interrete. Ea possunt paria non esse. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Eam tum adesse, cum dolor omnis absit; Istic sum, inquit. Quod quoniam in quo sit magna dissensio est, Carneadea nobis adhibenda divisio est, qua noster Antiochus libenter uti solet. Quod enim ne vivus quidem, inquit, diutius sentire poterat, quam dum fruebatur, quo modo id potuit mortuo permanere? Mihi enim satis est, ipsis non satis. </p>\r\n\r\n<p>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ne in odium veniam, si amicum destitero tueri. Ut enim, inquit, gubernator aeque peccat, si palearum navem evertit et si auri, item aeque peccat, qui parentem et qui servum iniuria verberat. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "8.27 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10054",
    "text": "Hector Gordon",
    "ContactTitle": "Application for the post of an IT analyst",
    "Message": "<p>Hi Ingrid Harding,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Cur post Tarentum ad Archytam? Facillimum id quidem est, inquam. Erat enim Polemonis. Satis est ad hoc responsum. Quonam, inquit, modo? Nam quid possumus facere melius? </p>\r\n\r\n<p>Respondeat totidem verbis. Qui convenit? Conferam tecum, quam cuique verso rem subicias; Re mihi non aeque satisfacit, et quidem locis pluribus. </p>\r\n\r\n<p>Cur deinde Metrodori liberos commendas? Eam stabilem appellas. Quid de Platone aut de Democrito loquar? Quid censes in Latino fore? Haec para/doca illi, nos admirabilia dicamus. Hoc tu nunc in illo probas. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Stoicos roga.</dfn></dt>\r\n\t<dd>Si quicquam extra virtutem habeatur in bonis.</dd>\r\n\t<dt><dfn>Recte dicis;</dfn></dt>\r\n\t<dd>Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.</dd>\r\n\t<dt><dfn>Certe non potest.</dfn></dt>\r\n\t<dd>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</dd>\r\n\t<dt><dfn>Idem adhuc;</dfn></dt>\r\n\t<dd>Cave putes quicquam esse verius.</dd>\r\n\t<dt><dfn>Paria sunt igitur.</dfn></dt>\r\n\t<dd>Hoc non est positum in nostra actione.</dd>\r\n</dl>\r\n\r\n\r\n<p>Videsne quam sit magna dissensio? Occultum facinus esse potuerit, gaudebit; Paria sunt igitur. </p>\r\n\r\n<p>Thanks,</p><p>Hector Gordon</p>",
    "Email": "hectorgordon@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Ingrid Harding",
    "ToMail": "ingridharding@syncfusion.com",
    "Image": "assets/images/images/23.png",
    "Time": "8.31 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10127",
    "text": "Imani Nieves",
    "ContactTitle": "Proposition for a new business",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est ista, inquam, Piso, magna dissensio. Eademne, quae restincta siti? Praeclarae mortes sunt imperatoriae; Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. </p>\r\n\r\n<ul>\r\n\t<li>Quid censes in Latino fore?</li>\r\n\t<li>Pauca mutat vel plura sane;</li>\r\n\t<li>Sed mehercule pergrata mihi oratio tua.</li>\r\n</ul>\r\n\r\n\r\n<p>Illud non continuo, ut aeque incontentae. Aliter homines, aliter philosophos loqui putas oportere? Tollenda est atque extrahenda radicitus. Itaque ab his ordiamur. Sed ad haec, nisi molestum est, habeo quae velim. </p>\r\n\r\n<p>Id <i>[redacted]</i>tilius factum negabat. Occultum facinus esse potuerit, gaudebit; Haec dicuntur inconstantissime. Non quam nostram quidem, inquit Pomponius iocans; </p>\r\n\r\n<pre>Nam ceteris in rebus sive praetermissum sive ignoratum est\r\nquippiam, non plus incommodi est, quam quanti quaeque earum\r\nrerum est, in quibus neglectum est aliquid.\r\n\r\nIdne consensisse de Calatino plurimas gentis arbitramur,\r\nprimarium populi fuisse, quod praestantissimus fuisset in\r\nconficiendis voluptatibus?\r\n</pre>\r\n\r\n\r\n<p>Quod equidem non reprehendo; Expectoque quid ad id, quod quaerebam, respondeas. Nunc vides, quid faciat. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Duo enim genera quae erant, fecit tria. Hoc non est positum in nostra actione. Pauca mutat vel plura sane; <code>Sed hoc sane concedamus.</code> </p>\r\n\r\n<p>Thanks,</p><p>Imani Nieves</p>",
    "Email": "imaninieves@syncfusion.com",
    "CC": [
      "Leilani Thomas"
    ],
    "CCMail": [
      "leilanithomas@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/51.png",
    "Time": "8.36 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10030",
    "text": "krystine hobson",
    "ContactTitle": "Out of Office",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Duo Reges: constructio interrete. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Ita ne hoc quidem modo paria peccata sunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Expectoque quid ad id, quod quaerebam, respondeas. Et summatim quidem haec erant de corpore animoque dicenda, quibus quasi informatum est quid hominis natura postulet. Respondent extrema primis, media utrisque, omnia omnibus. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>\r\n\r\n<ul>\r\n\t<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>\r\n\t<li>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</li>\r\n\t<li>Habent enim et bene longam et satis litigiosam disputationem.</li>\r\n\t<li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem.</li>\r\n\t<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>\r\n</ul>\r\n\r\n\r\n<p>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Praeteritis, inquit, gaudeo. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Hoc sic expositum dissimile est superiori. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Sit enim idem caecus, debilis. </p>\r\n\r\n<p>Fortemne possumus dicere eundem illum Torquatum? Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Praetereo multos, in bis doctum hominem et suavem, Hieronymum, quem iam cur Peripateticum appellem nescio. Rationis enim perfectio est virtus; Minime vero istorum quidem, inquit. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/33.png",
    "Time": "8.49 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10109",
    "text": "Callie Weiss",
    "ContactTitle": "Holiday application",
    "Message": "<p>Dear Quynn Carr,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Sed ad illum redeo. Ille incendat? Stoicos roga. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. </p>\r\n\r\n<p>Sed nimis multa. Ea possunt paria non esse. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Iam id ipsum absurdum, maximum malum neglegi. Quid de Platone aut de Democrito loquar? Neutrum vero, inquit ille. Quid enim de amicitia statueris utilitatis causa expetenda vides. </p>\r\n\r\n<p>Si quae forte-possumus. Sed ad illum redeo. </p>\r\n\r\n<p>Quis Aristidem non mortuum diligit? Confecta res esset. Ita fit cum gravior, tum etiam splendidior oratio. Videmus igitur ut conquiescere ne infantes quidem possint. Aliter enim nosmet ipsos nosse non possumus. Ea possunt paria non esse. </p>\r\n\r\n<p>Quae sequuntur igitur? Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Cur post Tarentum ad Archytam? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Eam tum adesse, cum dolor omnis absit; Sed ad bona praeterita redeamus. Hic ambiguo ludimur. </p>\r\n\r\n<p>Satis est ad hoc responsum. Sed plane dicit quod intellegit. Summus dolor plures dies manere non potest? Murenam te accusante defenderem. Quis istud possit, inquit, negare? Summum enim bonum exposuit vacuitatem doloris; Eadem fortitudinis ratio reperietur. </p>\r\n\r\n<p>Best wishes,</p><p>Callie Weiss</p>",
    "Email": "callieweiss@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Gail Pierce"
    ],
    "BCCMail": [
      "gailpierce@syncfusion.com"
    ],
    "To": "Quynn Carr",
    "ToMail": "quynncarr@syncfusion.com",
    "Image": "assets/images/images/35.png",
    "Time": "9.15 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10018",
    "text": "Richelle Mead",
    "ContactTitle": "Home Furnishings",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Regards,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/32.png",
    "Time": "9.16 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10128",
    "text": "Jordan Sheppard",
    "ContactTitle": "Reference Request - Ethan Kidd",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Sed virtutem ipsam inchoavit, nihil amplius. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Sed ad haec, nisi molestum est, habeo quae velim. Illa argumenta propria videamus, cur omnia sint paria peccata. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Age, inquies, ista parva sunt. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Contemnit enim disserendi elegantiam, confuse loquitur. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. Tollenda est atque extrahenda radicitus. Certe, nisi voluptatem tanti aestimaretis. </p>\r\n\r\n<p>Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Tubulo putas dicere? Bestiarum vero nullum iudicium puto. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Non semper, inquam; Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Nondum autem explanatum satis, erat, quid maxime natura vellet. </p>\r\n\r\n<p>Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nonne igitur tibi videntur, inquit, mala? Nam si +omnino nos+ neglegemus, in Aristonea vitia incidemus et peccata obliviscemurque quae virtuti ipsi principia dederimus; Cur deinde Metrodori liberos commendas? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Quis istud possit, inquit, negare? Nos commodius agimus. Quorum sine causa fieri nihil putandum est. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? </p>\r\n\r\n<p>An haec ab eo non dicuntur? Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Nemo nostrum istius generis asotos iucunde putat vivere. </p>\r\n\r\n<p>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Iam id ipsum absurdum, maximum malum neglegi. Sed quae tandem ista ratio est? Tibi hoc incredibile, quod beatissimum. Quae in controversiam veniunt, de iis, si placet, disseramus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Si mala non sunt, iacet omnis ratio Peripateticorum. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nulla profecto est, quin suam vim retineat a primo ad extremum. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<p>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Iam id ipsum absurdum, maximum malum neglegi. Non enim, si malum est dolor, carere eo malo satis est ad bene vivendum. </p>\r\n\r\n<p>Thanks,</p><p>Jordan Sheppard</p>",
    "Email": "jordansheppard@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/19.png",
    "Time": "9.17 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10204",
    "text": "Ariel Wagner",
    "ContactTitle": "Invitation for farewell party of Mr",
    "Message": "<p>Dear Rina Solis,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo putas dicere? Haeret in salebra. Omnes enim iucundum motum, quo sensus hilaretur. Si longus, levis dictata sunt. Duo Reges: constructio interrete. Utram tandem linguam nescio? Estne, quaeso, inquam, sitienti in bibendo voluptas? Nemo igitur esse beatus potest. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Bona autem corporis huic sunt, quod posterius posui, similiora. Satis est ad hoc responsum. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Quid ad utilitatem tantae pecuniae? Nihil enim hoc differt. Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Et ille ridens: Video, inquit, quid agas; Deprehensus omnem poenam contemnet. </p>\r\n\r\n<p>Nulla erit controversia. Zenonis est, inquam, hoc Stoici. Quorum altera prosunt, nocent altera. Tibi hoc incredibile, quod beatissimum. Quid igitur, inquit, eos responsuros putas? Quid turpius quam sapientis vitam ex insipientium sermone pendere? </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Duarum enim vitarum nobis erunt instituta capienda. Sed tamen intellego quid velit. Quae cum essent dicta, discessimus. Immo videri fortasse. Sed ego in hoc resisto; Cum audissem Antiochum, Brute, ut solebam, cum M. </p>\r\n\r\n<p>Quare conare, quaeso. An potest cupiditas finiri? Quod totum contra est. Nam ista vestra: Si gravis, brevis; Videsne, ut haec concinant? Quare attende, quaeso. Nescio quo modo praetervolavit oratio. </p>\r\n\r\n<p>Best wishes,</p><p>Ariel Wagner</p>",
    "Email": "arielwagner@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Gretchen Justice",
      "Fletcher Beck"
    ],
    "BCCMail": [
      "gretchenjustice@syncfusion.com",
      "fletcherbeck@syncfusion.com"
    ],
    "To": "Rina Solis",
    "ToMail": "rinasolis@syncfusion.com",
    "Image": "assets/images/images/34.png",
    "Time": "9.24 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10087",
    "text": "Tara Ruiz",
    "ContactTitle": "Thank You Very Much!",
    "Message": "<p>Hi Eleanor Cotton,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Sed tu istuc dixti bene Latine, parum plane. </p>\r\n\r\n<blockquote>\r\n\tIta enim se Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam cognomen videatur habiturus.\r\n</blockquote>\r\n\r\n\r\n<p>Nos cum te, M. Quis istud possit, inquit, negare? Quorum sine causa fieri nihil putandum est. Verum hoc idem saepe faciamus. Prodest, inquit, mihi eo esse animo. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Aliter homines, aliter philosophos loqui putas oportere? Facete M. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Quid iudicant sensus? Conferam avum tuum Drusum cum C. Invidiosum nomen est, infame, suspectum. Et nemo nimium beatus est; Nihil illinc huc pervenit. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Thanks,</p><p>Tara Ruiz</p>",
    "Email": "tararuiz@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Eleanor Cotton",
    "ToMail": "eleanorcotton@syncfusion.com",
    "Image": "assets/images/images/3.png",
    "Time": "9.34 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10076",
    "text": "Ethan Kidd",
    "ContactTitle": "Out of Office",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Expectoque quid ad id, quod quaerebam, respondeas.</b> Omnes enim iucundum motum, quo sensus hilaretur. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Restinguet citius, si ardentem acceperit. </p>\r\n\r\n<p>Iam in altera philosophiae parte. Idemque diviserunt naturam hominis in animum et corpus. Quia nec honesto quic quam honestius nec turpi turpius. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Num igitur eum postea censes anxio animo aut sollicito fuisse? Primum in nostrane potestate est, quid meminerimus? </p>\r\n\r\n<p><mark>Deinde disputat, quod cuiusque generis animantium statui deceat extremum.</mark> An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? <mark>Hoc loco tenere se Triarius non potuit.</mark> <mark>Nunc haec primum fortasse audientis servire debemus.</mark> Mihi enim satis est, ipsis non satis. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Ita multo sanguine profuso in laetitia et in victoria est mortuus. An vero, inquit, quisquam potest probare, quod perceptfum, quod. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Non dolere, inquam, istud quam vim habeat postea videro; </p>\r\n\r\n<p>Thanks,</p><p>Ethan Kidd</p>",
    "Email": "ethankidd@syncfusion.com",
    "CC": [
      "Austin Hancock"
    ],
    "CCMail": [
      "austinhancock@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "9.35 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10147",
    "text": "Amelia Curtis",
    "ContactTitle": "Assistant Marketing Department",
    "Message": "<p>Hi Brielle Norman,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Duo Reges: constructio interrete. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Ita ne hoc quidem modo paria peccata sunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Expectoque quid ad id, quod quaerebam, respondeas. Et summatim quidem haec erant de corpore animoque dicenda, quibus quasi informatum est quid hominis natura postulet. Respondent extrema primis, media utrisque, omnia omnibus. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>\r\n\r\n<ul>\r\n\t<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>\r\n\t<li>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</li>\r\n\t<li>Habent enim et bene longam et satis litigiosam disputationem.</li>\r\n\t<li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem.</li>\r\n\t<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>\r\n</ul>\r\n\r\n\r\n<p>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Praeteritis, inquit, gaudeo. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Hoc sic expositum dissimile est superiori. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Sit enim idem caecus, debilis. </p>\r\n\r\n<p>Fortemne possumus dicere eundem illum Torquatum? Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Praetereo multos, in bis doctum hominem et suavem, Hieronymum, quem iam cur Peripateticum appellem nescio. Rationis enim perfectio est virtus; Minime vero istorum quidem, inquit. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? </p>\r\n\r\n<p>Thanks,</p><p>Amelia Curtis</p>",
    "Email": "ameliacurtis@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Brielle Norman",
    "ToMail": "briellenorman@syncfusion.com",
    "Image": "assets/images/images/1.png",
    "Time": "9.42 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10053",
    "text": "Kalia Pacheco",
    "ContactTitle": "Application for Transfer",
    "Message": "<p>Hi Luke Velasquez,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Thanks,</p><p>Kalia Pacheco</p>",
    "Email": "kaliapacheco@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "McKenzie Mosley",
      "Rose Maldonado"
    ],
    "BCCMail": [
      "mckenziemosley@syncfusion.com",
      "rosemaldonado@syncfusion.com"
    ],
    "To": "Luke Velasquez",
    "ToMail": "lukevelasquez@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "9.42 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10067",
    "text": "Autumn Shepherd",
    "ContactTitle": "Loan Application",
    "Message": "<p>Hi Halla Hendricks,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Duo Reges: constructio interrete. Negat enim summo bono afferre incrementum diem. Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Quid de Pythagora?</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Cur iustitia laudatur?</dfn></dt>\r\n\t<dd>Odium autem et invidiam facile vitabis.</dd>\r\n</dl>\r\n\r\n\r\n<p>At iste non dolendi status non vocatur voluptas. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Inde sermone vario illa a Dipylo stadia confecimus. Inde sermone vario illa a Dipylo stadia confecimus. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Non quam nostram quidem, inquit Pomponius iocans; Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. </p>\r\n\r\n<p>Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Neque solum ea communia, verum etiam paria esse dixerunt. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Certe nihil nisi quod possit ipsum propter se iure laudari. Non autem hoc: igitur ne illud quidem. </p>\r\n\r\n<p>Thanks,</p><p>Autumn Shepherd</p>",
    "Email": "autumnshepherd@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Jelani Moreno",
      "Buffy Randolph"
    ],
    "BCCMail": [
      "jelanimoreno@syncfusion.com",
      "buffyrandolph@syncfusion.com"
    ],
    "To": "Halla Hendricks",
    "ToMail": "hallahendricks@syncfusion.com",
    "Image": "assets/images/images/34.png",
    "Time": "9.44 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10098",
    "text": "Paloma Battle",
    "ContactTitle": "Application for Sales Associate",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Erat enim Polemonis. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Primum cur ista res digna odio est, nisi quod est turpis? Idemne, quod iucunde? Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. </p>\r\n\r\n<pre>Una voluptas e multis obscuratur in illa vita voluptaria,\r\nsed tamen ea, quamvis parva sit, pars est eius vitae, quae\r\nposita est in voluptate.\r\n\r\nTe enim iudicem aequum puto, modo quae dicat ille bene\r\nnoris.\r\n</pre>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Memini vero, inquam; Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quae similitudo in genere etiam humano apparet. Sed nunc, quod agimus; Quid dubitas igitur mutare principia naturae? Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed ea mala virtuti magnitudine obruebantur. </p>\r\n\r\n<p>Best wishes,</p><p>Paloma Battle</p>",
    "Email": "palomabattle@syncfusion.com",
    "CC": [
      "Hammett Fox",
      "Scarlet Casey"
    ],
    "CCMail": [
      "hammettfox@syncfusion.com",
      "scarletcasey@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/24.png",
    "Time": "9.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10016",
    "text": "Richelle Mead",
    "ContactTitle": "Graduation Announcement",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo putas dicere? Haeret in salebra. Omnes enim iucundum motum, quo sensus hilaretur. Si longus, levis dictata sunt. Duo Reges: constructio interrete. Utram tandem linguam nescio? Estne, quaeso, inquam, sitienti in bibendo voluptas? Nemo igitur esse beatus potest. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Bona autem corporis huic sunt, quod posterius posui, similiora. Satis est ad hoc responsum. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Quid ad utilitatem tantae pecuniae? Nihil enim hoc differt. Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Et ille ridens: Video, inquit, quid agas; Deprehensus omnem poenam contemnet. </p>\r\n\r\n<p>Nulla erit controversia. Zenonis est, inquam, hoc Stoici. Quorum altera prosunt, nocent altera. Tibi hoc incredibile, quod beatissimum. Quid igitur, inquit, eos responsuros putas? Quid turpius quam sapientis vitam ex insipientium sermone pendere? </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Duarum enim vitarum nobis erunt instituta capienda. Sed tamen intellego quid velit. Quae cum essent dicta, discessimus. Immo videri fortasse. Sed ego in hoc resisto; Cum audissem Antiochum, Brute, ut solebam, cum M. </p>\r\n\r\n<p>Quare conare, quaeso. An potest cupiditas finiri? Quod totum contra est. Nam ista vestra: Si gravis, brevis; Videsne, ut haec concinant? Quare attende, quaeso. Nescio quo modo praetervolavit oratio. </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/19.png",
    "Time": "9.5 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10117",
    "text": "McKenzie Mosley",
    "ContactTitle": "Networking Request",
    "Message": "<p>Dear Oscar Mcconnell,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Bestiarum vero nullum iudicium puto. Quid ergo hoc loco intellegit honestum? Duo Reges: constructio interrete. Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>\r\n\r\n<ul>\r\n\t<li>An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?</li>\r\n\t<li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li>\r\n\t<li>A mene tu?</li>\r\n\t<li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>\r\n</ul>\r\n\r\n\r\n<p>Iam enim adesse poterit. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Non laboro, inquit, de nomine. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. </p>\r\n\r\n<p>Hoc enim constituto in philosophia constituta sunt omnia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Laelius clamores sofow ille so lebat Edere compellans gumias ex ordine nostros. Quorum sine causa fieri nihil putandum est. An est aliquid, quod te sua sponte delectet? Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Quod autem ratione actum est, id officium appellamus. </p>\r\n\r\n<p>Best wishes,</p><p>McKenzie Mosley</p>",
    "Email": "mckenziemosley@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Leslie Juarez",
      "Omar Curry"
    ],
    "BCCMail": [
      "lesliejuarez@syncfusion.com",
      "omarcurry@syncfusion.com"
    ],
    "To": "Oscar Mcconnell",
    "ToMail": "oscarmcconnell@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "9.53 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10047",
    "text": "Alika Rivers",
    "ContactTitle": "Anything I can help with",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Bestiarum vero nullum iudicium puto. Quid ergo hoc loco intellegit honestum? Duo Reges: constructio interrete. Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>\r\n\r\n<ul>\r\n\t<li>An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?</li>\r\n\t<li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li>\r\n\t<li>A mene tu?</li>\r\n\t<li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>\r\n</ul>\r\n\r\n\r\n<p>Iam enim adesse poterit. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Non laboro, inquit, de nomine. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. </p>\r\n\r\n<p>Hoc enim constituto in philosophia constituta sunt omnia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Laelius clamores sofow ille so lebat Edere compellans gumias ex ordine nostros. Quorum sine causa fieri nihil putandum est. An est aliquid, quod te sua sponte delectet? Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Quod autem ratione actum est, id officium appellamus. </p>\r\n\r\n<p>Thanks,</p><p>Alika Rivers</p>",
    "Email": "alikarivers@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/37.png",
    "Time": "9.54 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10179",
    "text": "Seth Pierce",
    "ContactTitle": "Thank You Very Much!",
    "Message": "<p>Dear Paula Dotson,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Sed virtutem ipsam inchoavit, nihil amplius. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Sed ad haec, nisi molestum est, habeo quae velim. Illa argumenta propria videamus, cur omnia sint paria peccata. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Age, inquies, ista parva sunt. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Contemnit enim disserendi elegantiam, confuse loquitur. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. Tollenda est atque extrahenda radicitus. Certe, nisi voluptatem tanti aestimaretis. </p>\r\n\r\n<p>Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Tubulo putas dicere? Bestiarum vero nullum iudicium puto. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Non semper, inquam; Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Nondum autem explanatum satis, erat, quid maxime natura vellet. </p>\r\n\r\n<p>Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nonne igitur tibi videntur, inquit, mala? Nam si +omnino nos+ neglegemus, in Aristonea vitia incidemus et peccata obliviscemurque quae virtuti ipsi principia dederimus; Cur deinde Metrodori liberos commendas? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Quis istud possit, inquit, negare? Nos commodius agimus. Quorum sine causa fieri nihil putandum est. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? </p>\r\n\r\n<p>An haec ab eo non dicuntur? Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Nemo nostrum istius generis asotos iucunde putat vivere. </p>\r\n\r\n<p>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Iam id ipsum absurdum, maximum malum neglegi. Sed quae tandem ista ratio est? Tibi hoc incredibile, quod beatissimum. Quae in controversiam veniunt, de iis, si placet, disseramus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Si mala non sunt, iacet omnis ratio Peripateticorum. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nulla profecto est, quin suam vim retineat a primo ad extremum. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<p>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Iam id ipsum absurdum, maximum malum neglegi. Non enim, si malum est dolor, carere eo malo satis est ad bene vivendum. </p>\r\n\r\n<p>Sincerely,</p><p>Seth Pierce</p>",
    "Email": "sethpierce@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Paula Dotson",
    "ToMail": "pauladotson@syncfusion.com",
    "Image": "assets/images/images/12.png",
    "Time": "9.59 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10022",
    "text": "krystine hobson",
    "ContactTitle": "Marketing Team",
    "Message": "<p>Hi Amity Slater,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Nayda Tate",
      "Athena Mcintosh"
    ],
    "BCCMail": [
      "naydatate@syncfusion.com",
      "athenamcintosh@syncfusion.com"
    ],
    "To": "Amity Slater",
    "ToMail": "amityslater@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "10.15 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10138",
    "text": "Knox Pitts",
    "ContactTitle": "Annual Conference",
    "Message": "<p>Hello Omar Curry,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Efficiens dici potest. Nondum autem explanatum satis, erat, quid maxime natura vellet. Duo Reges: constructio interrete. Gloriosa ostentatio in constituendo summo bono. </p>\r\n\r\n<p>Nam Pyrrho, Aristo, Erillus iam diu abiecti. Non est ista, inquam, Piso, magna dissensio. </p>\r\n\r\n<pre>Quocirca intellegi necesse est in ipsis rebus, quae\r\ndiscuntur et cognoscuntur, invitamenta inesse, quibus ad\r\ndiscendum cognoscendumque moveamur.\r\n\r\nNon pugnem cum homine, cur tantum habeat in natura boni;\r\n</pre>\r\n\r\n\r\n<p>Cur, nisi quod turpis oratio est? De vacuitate doloris eadem sententia erit. Bestiarum vero nullum iudicium puto. Vestri haec verecundius, illi fortasse constantius. Ille enim occurrentia nescio quae comminiscebatur; Illa tamen simplicia, vestra versuta. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Si quae forte-possumus. </p>\r\n\r\n<ol>\r\n\t<li>Tamen a proposito, inquam, aberramus.</li>\r\n\t<li>Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali.</li>\r\n\t<li>Nos cum te, M.</li>\r\n\t<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>\r\n\t<li>Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur.</li>\r\n</ol>\r\n\r\n\r\n<p>Philosophi autem in suis lectulis plerumque moriuntur. Sed potestne rerum maior esse dissensio? Haec dicuntur inconstantissime. Videsne quam sit magna dissensio? Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Regards,</p><p>Knox Pitts</p>",
    "Email": "knoxpitts@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Omar Curry",
    "ToMail": "omarcurry@syncfusion.com",
    "Image": "assets/images/images/35.png",
    "Time": "10.19 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10166",
    "text": "Buffy Randolph",
    "ContactTitle": "Office Holiday",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Quod ea non occurrentia fingunt, vincunt Aristonem; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Tubulo putas dicere? Vide igitur ne non debeas verbis nostris uti, sententiis tuis. Duo Reges: constructio interrete. Ea possunt paria non esse. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Eam tum adesse, cum dolor omnis absit; Istic sum, inquit. Quod quoniam in quo sit magna dissensio est, Carneadea nobis adhibenda divisio est, qua noster Antiochus libenter uti solet. Quod enim ne vivus quidem, inquit, diutius sentire poterat, quam dum fruebatur, quo modo id potuit mortuo permanere? Mihi enim satis est, ipsis non satis. </p>\r\n\r\n<p>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ne in odium veniam, si amicum destitero tueri. Ut enim, inquit, gubernator aeque peccat, si palearum navem evertit et si auri, item aeque peccat, qui parentem et qui servum iniuria verberat. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. </p>\r\n\r\n<p>Yours,</p><p>Buffy Randolph</p>",
    "Email": "buffyrandolph@syncfusion.com",
    "CC": [
      "Tamara Knox"
    ],
    "CCMail": [
      "tamaraknox@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/5.png",
    "Time": "10.23 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10116",
    "text": "Ebony White",
    "ContactTitle": "Networking Referral",
    "Message": "<p>Dear Paula Dotson,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Best wishes,</p><p>Ebony White</p>",
    "Email": "ebonywhite@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Quynn Carr"
    ],
    "BCCMail": [
      "quynncarr@syncfusion.com"
    ],
    "To": "Paula Dotson",
    "ToMail": "pauladotson@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "10.25 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10043",
    "text": "Tallulah Wheeler",
    "ContactTitle": "Today’s meeting schedule",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Quam ob rem tandem, inquit, non satisfacit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>\r\n\r\n<p>Omnia peccata paria dicitis. Apparet statim, quae sint officia, quae actiones. Sed ad haec, nisi molestum est, habeo quae velim. Quid enim est a Chrysippo praetermissum in Stoicis? Quia dolori non voluptas contraria est, sed doloris privatio. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Bona autem corporis huic sunt, quod posterius posui, similiora. </p>\r\n\r\n<p>Age, inquies, ista parva sunt. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? </p>\r\n\r\n<ol>\r\n\t<li>Frater et T.</li>\r\n\t<li>An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P.</li>\r\n\t<li>Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat.</li>\r\n\t<li>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi.</li>\r\n</ol>\r\n\r\n\r\n<p>Thanks,</p><p>Tallulah Wheeler</p>",
    "Email": "tallulahwheeler@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/31.png",
    "Time": "10.25 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10081",
    "text": "Desirae Burris",
    "ContactTitle": "Proposition for a new business",
    "Message": "<p>Hi Nichole Miranda,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prave, nequiter, turpiter cenabat; Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. </p>\r\n\r\n<p>Tum mihi Piso: Quid ergo? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Duo Reges: constructio interrete. Minime vero istorum quidem, inquit. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>\r\n\r\n<blockquote>\r\n\tAt iste non dolendi status non vocatur voluptas.\r\n</blockquote>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quid turpius quam sapientis vitam ex insipientium sermone pendere? Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Huius ego nunc auctoritatem sequens idem faciam. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Si enim ita est, vide ne facinus facias, cum mori suadeas. Dici enim nihil potest verius. </p>\r\n\r\n<p>Thanks,</p><p>Desirae Burris</p>",
    "Email": "desiraeburris@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Sarah Reid",
      "Paloma Battle"
    ],
    "BCCMail": [
      "sarahreid@syncfusion.com",
      "palomabattle@syncfusion.com"
    ],
    "To": "Nichole Miranda",
    "ToMail": "nicholemiranda@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "10.31 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10013",
    "text": "Richelle Mead",
    "ContactTitle": "Congratulations On Your New Position",
    "Message": "<p>Dear Nichole Rivas,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Leilani Mayer"
    ],
    "BCCMail": [
      "leilanimayer@syncfusion.com"
    ],
    "To": "Nichole Rivas",
    "ToMail": "nicholerivas@syncfusion.com",
    "Image": "assets/images/images/25.png",
    "Time": "10.31 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10102",
    "text": "Cecilia Leonard",
    "ContactTitle": "Business appointment request",
    "Message": "<p>Dear Halee Lindsey,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Sed tu istuc dixti bene Latine, parum plane. </p>\r\n\r\n<blockquote>\r\n\tIta enim se Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam cognomen videatur habiturus.\r\n</blockquote>\r\n\r\n\r\n<p>Nos cum te, M. Quis istud possit, inquit, negare? Quorum sine causa fieri nihil putandum est. Verum hoc idem saepe faciamus. Prodest, inquit, mihi eo esse animo. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Aliter homines, aliter philosophos loqui putas oportere? Facete M. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Quid iudicant sensus? Conferam avum tuum Drusum cum C. Invidiosum nomen est, infame, suspectum. Et nemo nimium beatus est; Nihil illinc huc pervenit. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Best wishes,</p><p>Cecilia Leonard</p>",
    "Email": "cecilialeonard@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Callie Weiss"
    ],
    "BCCMail": [
      "callieweiss@syncfusion.com"
    ],
    "To": "Halee Lindsey",
    "ToMail": "haleelindsey@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "10.39 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10045",
    "text": "Kathleen Walton",
    "ContactTitle": "We launched new Product!",
    "Message": "<p>Hi Cheyenne Cline,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Idem adhuc; Non potes, nisi retexueris illa. Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Duo Reges: constructio interrete. Erat enim Polemonis. </p>\r\n\r\n<p>Videamus igitur sententias eorum, tum ad verba redeamus. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ut in geometria, prima si dederis, danda sunt omnia. Duo enim genera quae erant, fecit tria. </p>\r\n\r\n<pre>Eamne rationem igitur sequere, qua tecum ipse et cum tuis\r\nutare, profiteri et in medium proferre non audeas?\r\n\r\nQuid paulo ante, inquit, dixerim nonne meministi, cum omnis\r\ndolor detractus esset, variari, non augeri voluptatem?\r\n</pre>\r\n\r\n<p>Estne, quaeso, inquam, sitienti in bibendo voluptas? Sed quid attinet de rebus tam apertis plura requirere? Nunc vides, quid faciat. Sed quod proximum fuit non vidit. Quae cum dixisset paulumque institisset, Quid est? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Ille igitur vidit, non modo quot fuissent adhuc philosophorum de summo bono, sed quot omnino esse possent sententiae. Suam denique cuique naturam esse ad vivendum ducem. Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? At hoc in eo M. </p>\r\n\r\n\r\n<p>Thanks,</p><p>Kathleen Walton</p>",
    "Email": "kathleenwalton@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Nayda Tate",
      "Willow Frye"
    ],
    "BCCMail": [
      "naydatate@syncfusion.com",
      "willowfrye@syncfusion.com"
    ],
    "To": "Cheyenne Cline",
    "ToMail": "cheyennecline@syncfusion.com",
    "Image": "assets/images/images/51.png",
    "Time": "10.45 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10032",
    "text": "krystine hobson",
    "ContactTitle": "Performance appraisal announcement",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Sed ad illum redeo. Ille incendat? Stoicos roga. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. </p>\r\n\r\n<p>Sed nimis multa. Ea possunt paria non esse. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Iam id ipsum absurdum, maximum malum neglegi. Quid de Platone aut de Democrito loquar? Neutrum vero, inquit ille. Quid enim de amicitia statueris utilitatis causa expetenda vides. </p>\r\n\r\n<p>Si quae forte-possumus. Sed ad illum redeo. </p>\r\n\r\n<p>Quis Aristidem non mortuum diligit? Confecta res esset. Ita fit cum gravior, tum etiam splendidior oratio. Videmus igitur ut conquiescere ne infantes quidem possint. Aliter enim nosmet ipsos nosse non possumus. Ea possunt paria non esse. </p>\r\n\r\n<p>Quae sequuntur igitur? Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Cur post Tarentum ad Archytam? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Eam tum adesse, cum dolor omnis absit; Sed ad bona praeterita redeamus. Hic ambiguo ludimur. </p>\r\n\r\n<p>Satis est ad hoc responsum. Sed plane dicit quod intellegit. Summus dolor plures dies manere non potest? Murenam te accusante defenderem. Quis istud possit, inquit, negare? Summum enim bonum exposuit vacuitatem doloris; Eadem fortitudinis ratio reperietur. </p>\r\n\r\n<p>Thanks,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Brooke Barlow",
      "Athena Mcintosh"
    ],
    "CCMail": [
      "brookebarlow@syncfusion.com",
      "athenamcintosh@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/17.png",
    "Time": "10.46 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10120",
    "text": "Erica Moses",
    "ContactTitle": "Office Holiday",
    "Message": "<p>Hello Ayanna Gregory,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At, si voluptas esset bonum, desideraret. Quo tandem modo? An hoc usque quaque, aliter in vita? Nam quid possumus facere melius? Non potes, nisi retexueris illa. Praeclare hoc quidem. </p>\r\n\r\n<p>Rationis enim perfectio est virtus; Deprehensus omnem poenam contemnet. Minime vero, inquit ille, consentit. Tum mihi Piso: Quid ergo? </p>\r\n\r\n<ul>\r\n\t<li>Traditur, inquit, ab Epicuro ratio neglegendi doloris.</li>\r\n\t<li>Vide igitur ne non debeas verbis nostris uti, sententiis tuis.</li>\r\n\t<li>Mihi, inquam, qui te id ipsum rogavi?</li>\r\n\t<li>Nam ante Aristippus, et ille melius.</li>\r\n\t<li>An ea, quae per vinitorem antea consequebatur, per se ipsa curabit?</li>\r\n\t<li>Quippe: habes enim a rhetoribus;</li>\r\n</ul>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Ita ne hoc quidem modo paria peccata sunt. Istam voluptatem, inquit, Epicurus ignorat? Tanta vis admonitionis inest in locis; Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Regards,</p><p>Erica Moses</p>",
    "Email": "ericamoses@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Uma Vance"
    ],
    "BCCMail": [
      "umavance@syncfusion.com"
    ],
    "To": "Ayanna Gregory",
    "ToMail": "ayannagregory@syncfusion.com",
    "Image": "assets/images/images/3.png",
    "Time": "10.48 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10021",
    "text": "krystine hobson",
    "ContactTitle": "Loan Application",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Erat enim Polemonis. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Primum cur ista res digna odio est, nisi quod est turpis? Idemne, quod iucunde? Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. </p>\r\n\r\n<pre>Una voluptas e multis obscuratur in illa vita voluptaria,\r\nsed tamen ea, quamvis parva sit, pars est eius vitae, quae\r\nposita est in voluptate.\r\n\r\nTe enim iudicem aequum puto, modo quae dicat ille bene\r\nnoris.\r\n</pre>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Memini vero, inquam; Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quae similitudo in genere etiam humano apparet. Sed nunc, quod agimus; Quid dubitas igitur mutare principia naturae? Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed ea mala virtuti magnitudine obruebantur. </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Lacota Lloyd",
      "Cecilia Leonard"
    ],
    "CCMail": [
      "lacotalloyd@syncfusion.com",
      "cecilialeonard@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "10.53 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10103",
    "text": "Grady Burch",
    "ContactTitle": "Business dinner invitation",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sic consequentibus vestris sublatis prima tolluntur. <b>Sin aliud quid voles, postea.</b> <b>Quare attende, quaeso.</b> </p>\r\n\r\n<p><b>Sed tamen intellego quid velit.</b> <b>Hunc vos beatum;</b> <b>Et nemo nimium beatus est;</b> <b>Hanc ergo intuens debet institutum illud quasi signum absolvere.</b> Tubulo putas dicere? <b>Sed ne, dum huic obsequor, vobis molestus sim.</b> Quid ergo hoc loco intellegit honestum? Qua tu etiam inprudens utebare non numquam. </p>\r\n\r\n<p><b>Audeo dicere, inquit.</b> <i>Sed ille, ut dixi, vitiose.</i> Causa autem fuit huc veniendi ut quosdam hinc libros promerem. Summus dolor plures dies manere non potest? <mark>Moriatur, inquit.</mark> <b>Ea possunt paria non esse.</b> </p>\r\n\r\n<p><i>Omnia peccata paria dicitis.</i> Primum Theophrasti, Strato, physicum se voluit; Invidiosum nomen est, infame, suspectum. At coluit ipse amicitias. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Best wishes,</p><p>Grady Burch</p>",
    "Email": "gradyburch@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "10.54 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10132",
    "text": "Ignatius Waters",
    "ContactTitle": "Service appointment confirmation",
    "Message": "<p>Hello Brielle Norman,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Non est igitur summum malum dolor. Duo enim genera quae erant, fecit tria. At iam decimum annum in spelunca iacet. Cave putes quicquam esse verius. Sed plane dicit quod intellegit. Duo Reges: constructio interrete. Restatis igitur vos; </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Tria genera bonorum;</dfn></dt>\r\n\t<dd>Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Quo modo autem philosophus loquitur?</dd>\r\n\t<dt><dfn>Falli igitur possumus.</dfn></dt>\r\n\t<dd>Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.</dd>\r\n</dl>\r\n\r\n\r\n<p>Tecum optime, deinde etiam cum mediocri amico. Restatis igitur vos; Sed quot homines, tot sententiae; Memini me adesse P. Istam voluptatem, inquit, Epicurus ignorat? Quare ad ea primum, si videtur; Peccata paria. Ut aliquid scire se gaudeant? </p>\r\n\r\n<p>Minime vero, inquit ille, consentit. Tenent mordicus. Verum hoc idem saepe faciamus. Suo genere perveniant ad extremum; </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sed ne, dum huic obsequor, vobis molestus sim. Maximus dolor, inquit, brevis est. Tria genera bonorum; Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>\r\n\r\n<p>Sed ego in hoc resisto; Tenent mordicus. Nam ista vestra: Si gravis, brevis; Equidem e Cn. </p>\r\n\r\n<p>Qui est in parvis malis. Sed ad bona praeterita redeamus. Ita prorsus, inquam; Nunc omni virtuti vitium contrario nomine opponitur. Sed nimis multa. Que Manilium, ab iisque M. </p>\r\n\r\n<p>Esse enim quam vellet iniquus iustus poterat inpune. Deprehensus omnem poenam contemnet. Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Regards,</p><p>Ignatius Waters</p>",
    "Email": "ignatiuswaters@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Gail Pierce"
    ],
    "BCCMail": [
      "gailpierce@syncfusion.com"
    ],
    "To": "Brielle Norman",
    "ToMail": "briellenorman@syncfusion.com",
    "Image": "assets/images/images/48.png",
    "Time": "10.54 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10080",
    "text": "Dalton Reilly",
    "ContactTitle": "Project Manager Interview",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Thanks,</p><p>Dalton Reilly</p>",
    "Email": "daltonreilly@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "11.12 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10092",
    "text": "Lacota Dejesus",
    "ContactTitle": "Annual Conference",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit? Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quo modo autem philosophus loquitur? </p>\r\n\r\n<p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus. Hoc est non modo cor non habere, sed ne palatum quidem. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Bona autem corporis huic sunt, quod posterius posui, similiora. Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Numquam facies. Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. </p>\r\n\r\n<p>Quamquam id quidem licebit iis existimare, qui legerint. Ubi ut eam caperet aut quando? Sine ea igitur iucunde negat posse se vivere? Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Cum praesertim illa perdiscere ludus esset. Quis Aristidem non mortuum diligit? De vacuitate doloris eadem sententia erit. Ad eos igitur converte te, quaeso. Duo enim genera quae erant, fecit tria. Omnes enim iucundum motum, quo sensus hilaretur. Nos vero, inquit ille; Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. </p>\r\n\r\n<p>Best wishes,</p><p>Lacota Dejesus</p>",
    "Email": "lacotadejesus@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/42.png",
    "Time": "11.22 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10094",
    "text": "Catherine Baldwin",
    "ContactTitle": "Apology Email for Wrong Order",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Dici enim nihil potest verius.</b> Respondent extrema primis, media utrisque, omnia omnibus. Egone non intellego, quid sit don Graece, Latine voluptas? Tu enim ista lenius, hic Stoicorum more nos vexat. Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere. Quod autem ratione actum est, id officium appellamus. Me igitur ipsum ames oportet, non mea, si veri amici futuri sumus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; <i>Summum enim bonum exposuit vacuitatem doloris;</i> </p>\r\n\r\n<ol>\r\n\t<li>Sed ne, dum huic obsequor, vobis molestus sim.</li>\r\n\t<li>Idem iste, inquam, de voluptate quid sentit?</li>\r\n\t<li>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</li>\r\n\t<li>Haec quo modo conveniant, non sane intellego.</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?</li>\r\n</ol>\r\n\r\n\r\n<p><mark>Omnis enim est natura diligens sui.</mark> Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. <b>At hoc in eo M.</b> Quid nunc honeste dicit? Ita multa dicunt, quae vix intellegam. Unum est sine dolore esse, alterum cum voluptate. Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? </p>\r\n\r\n<p>Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. <i>Quibusnam praeteritis?</i> Paulum, cum regem Persem captum adduceret, eodem flumine invectio? <b>Solum praeterea formosum, solum liberum, solum civem, stultost;</b> Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint. Ego vero isti, inquam, permitto. Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere. <mark>Scrupulum, inquam, abeunti;</mark> Summus dolor plures dies manere non potest? </p>\r\n\r\n<p>Best wishes,</p><p>Catherine Baldwin</p>",
    "Email": "catherinebaldwin@syncfusion.com",
    "CC": [
      "Casey Mckenzie"
    ],
    "CCMail": [
      "caseymckenzie@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/37.png",
    "Time": "11.35 AM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10201",
    "text": "Igor Hyde",
    "ContactTitle": "Holiday application",
    "Message": "<p>Dear Lareina Downs,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prave, nequiter, turpiter cenabat; Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. </p>\r\n\r\n<p>Tum mihi Piso: Quid ergo? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Duo Reges: constructio interrete. Minime vero istorum quidem, inquit. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>\r\n\r\n<blockquote>\r\n\tAt iste non dolendi status non vocatur voluptas.\r\n</blockquote>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quid turpius quam sapientis vitam ex insipientium sermone pendere? Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Huius ego nunc auctoritatem sequens idem faciam. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Si enim ita est, vide ne facinus facias, cum mori suadeas. Dici enim nihil potest verius. </p>\r\n\r\n<p>Best wishes,</p><p>Igor Hyde</p>",
    "Email": "igorhyde@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Winifred Dyer",
      "Ariel Wagner"
    ],
    "BCCMail": [
      "winifreddyer@syncfusion.com",
      "arielwagner@syncfusion.com"
    ],
    "To": "Lareina Downs",
    "ToMail": "lareinadowns@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "1.1 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10194",
    "text": "Cherokee Clements",
    "ContactTitle": "Business appointment request",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Duo Reges: constructio interrete. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Ita ne hoc quidem modo paria peccata sunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Expectoque quid ad id, quod quaerebam, respondeas. Et summatim quidem haec erant de corpore animoque dicenda, quibus quasi informatum est quid hominis natura postulet. Respondent extrema primis, media utrisque, omnia omnibus. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>\r\n\r\n<ul>\r\n\t<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>\r\n\t<li>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</li>\r\n\t<li>Habent enim et bene longam et satis litigiosam disputationem.</li>\r\n\t<li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem.</li>\r\n\t<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>\r\n</ul>\r\n\r\n\r\n<p>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Praeteritis, inquit, gaudeo. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Hoc sic expositum dissimile est superiori. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Sit enim idem caecus, debilis. </p>\r\n\r\n<p>Fortemne possumus dicere eundem illum Torquatum? Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Praetereo multos, in bis doctum hominem et suavem, Hieronymum, quem iam cur Peripateticum appellem nescio. Rationis enim perfectio est virtus; Minime vero istorum quidem, inquit. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? </p>\r\n\r\n<p>Thanks,</p><p>Cherokee Clements</p>",
    "Email": "cherokeeclements@syncfusion.com",
    "CC": [
      "Wanda Casey",
      "Cameran Roth"
    ],
    "CCMail": [
      "wandacasey@syncfusion.com",
      "cameranroth@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "1.16 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10033",
    "text": "krystine hobson",
    "ContactTitle": "Programmer Position - Jane Doe Application",
    "Message": "<p>Hello Sophia Mercado,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Sophia Mercado",
    "ToMail": "sophiamercado@syncfusion.com",
    "Image": "assets/images/images/41.png",
    "Time": "1.19 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10107",
    "text": "Laura Chang",
    "ContactTitle": "Get Together on March",
    "Message": "<p>Dear Kerry Best,</p><h4>Facillimum id quidem est, inquam.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Tum Torquatus: Prorsus, inquit, assentior; Tecum optime, deinde etiam cum mediocri amico. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Duo Reges: constructio interrete. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. </p>\r\n\r\n<p><b>Sed hoc sane concedamus.</b> Sit enim idem caecus, debilis. <mark>Eam tum adesse, cum dolor omnis absit;</mark> Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dic in quovis conventu te omnia facere, ne doleas. Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Neque solum ea communia, verum etiam paria esse dixerunt. Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. </p>\r\n\r\n<pre>Qui est in parvis malis.\r\n\r\nEt homini, qui ceteris animantibus plurimum praestat,\r\npraecipue a natura nihil datum esse dicemus?\r\n</pre>\r\n\r\n\r\n<ol>\r\n\t<li>Aut unde est hoc contritum vetustate proverbium: quicum in tenebris?</li>\r\n\t<li>Quis Aristidem non mortuum diligit?</li>\r\n\t<li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.</li>\r\n\t<li>Sed utrum hortandus es nobis, Luci, inquit, an etiam tua sponte propensus es?</li>\r\n</ol>\r\n\r\n\r\n<h4>Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur.</h4>\r\n\r\n<p>Etenim semper illud extra est, quod arte comprehenditur. Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam; Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Best wishes,</p><p>Laura Chang</p>",
    "Email": "laurachang@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "1.41 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10119",
    "text": "Chaney Nicholson",
    "ContactTitle": "New business relationship confirmation",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Regards,</p><p>Chaney Nicholson</p>",
    "Email": "chaneynicholson@syncfusion.com",
    "CC": [
      "Maxwell Nelson",
      "Ignatius Waters"
    ],
    "CCMail": [
      "maxwellnelson@syncfusion.com",
      "ignatiuswaters@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/9.png",
    "Time": "1.42 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10206",
    "text": "Wanda Casey",
    "ContactTitle": "Marketing Team",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Expectoque quid ad id, quod quaerebam, respondeas.</b> Omnes enim iucundum motum, quo sensus hilaretur. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Restinguet citius, si ardentem acceperit. </p>\r\n\r\n<p>Iam in altera philosophiae parte. Idemque diviserunt naturam hominis in animum et corpus. Quia nec honesto quic quam honestius nec turpi turpius. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Num igitur eum postea censes anxio animo aut sollicito fuisse? Primum in nostrane potestate est, quid meminerimus? </p>\r\n\r\n<p><mark>Deinde disputat, quod cuiusque generis animantium statui deceat extremum.</mark> An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? <mark>Hoc loco tenere se Triarius non potuit.</mark> <mark>Nunc haec primum fortasse audientis servire debemus.</mark> Mihi enim satis est, ipsis non satis. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Ita multo sanguine profuso in laetitia et in victoria est mortuus. An vero, inquit, quisquam potest probare, quod perceptfum, quod. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Non dolere, inquam, istud quam vim habeat postea videro; </p>\r\n\r\n<p>Best wishes,</p><p>Wanda Casey</p>",
    "Email": "wandacasey@syncfusion.com",
    "CC": [
      "Gail Pierce"
    ],
    "CCMail": [
      "gailpierce@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "1.45 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10137",
    "text": "Chaim Barber",
    "ContactTitle": "We launched new Product!",
    "Message": "<p>Hello Cameran Roth,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Erat enim Polemonis. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Primum cur ista res digna odio est, nisi quod est turpis? Idemne, quod iucunde? Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. </p>\r\n\r\n<pre>Una voluptas e multis obscuratur in illa vita voluptaria,\r\nsed tamen ea, quamvis parva sit, pars est eius vitae, quae\r\nposita est in voluptate.\r\n\r\nTe enim iudicem aequum puto, modo quae dicat ille bene\r\nnoris.\r\n</pre>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Memini vero, inquam; Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quae similitudo in genere etiam humano apparet. Sed nunc, quod agimus; Quid dubitas igitur mutare principia naturae? Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed ea mala virtuti magnitudine obruebantur. </p>\r\n\r\n<p>Regards,</p><p>Chaim Barber</p>",
    "Email": "chaimbarber@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Giselle Booth"
    ],
    "BCCMail": [
      "gisellebooth@syncfusion.com"
    ],
    "To": "Cameran Roth",
    "ToMail": "cameranroth@syncfusion.com",
    "Image": "assets/images/images/46.png",
    "Time": "1.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10195",
    "text": "Zelda Walton",
    "ContactTitle": "Business dinner invitation",
    "Message": "<p>Hi Oscar Mcconnell,</p><h4>Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum;</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Venit ad extremum; Quorum sine causa fieri nihil putandum est. Ubi ut eam caperet aut quando? Ac tamen hic mallet non dolere. Duo Reges: constructio interrete. Sed in rebus apertissimis nimium longi sumus. Hunc vos beatum; </p>\r\n\r\n<p>Sed quot homines, tot sententiae; Et quidem, inquit, vehementer errat; Idemne, quod iucunde? Negat enim summo bono afferre incrementum diem. </p>\r\n\r\n<h4>Et hercule-fatendum est enim, quod sentio -mirabilis est apud illos contextus rerum.</h4>\r\n\r\n<p>Si quicquam extra virtutem habeatur in bonis. Conferam tecum, quam cuique verso rem subicias; Scisse enim te quis coarguere possit? Cur iustitia laudatur? An hoc usque quaque, aliter in vita? Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Quis istud possit, inquit, negare? Est, ut dicis, inquit; Quibus ego vehementer assentior. Omnis enim est natura diligens sui. </p>\r\n\r\n<p>An eiusdem modi? Idem adhuc; Quid est enim aliud esse versutum? Quod quidem nobis non saepe contingit. </p>\r\n\r\n<h4>Sic consequentibus vestris sublatis prima tolluntur.</h4>\r\n\r\n<p>Hic ambiguo ludimur. Aliud igitur esse censet gaudere, aliud non dolere. Graccho, eius fere, aequali? Sint ista Graecorum; Nihil sane. Ut optime, secundum naturam affectum esse possit. Quo plebiscito decreta a senatu est consuli quaestio Cn. </p>\r\n\r\n<p>Thanks,</p><p>Zelda Walton</p>",
    "Email": "zeldawalton@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Ariel Wagner",
      "Willow Frye"
    ],
    "BCCMail": [
      "arielwagner@syncfusion.com",
      "willowfrye@syncfusion.com"
    ],
    "To": "Oscar Mcconnell",
    "ToMail": "oscarmcconnell@syncfusion.com",
    "Image": "assets/images/images/31.png",
    "Time": "1.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10129",
    "text": "Lara Knox",
    "ContactTitle": "Request for meeting appointment email",
    "Message": "<p>Hello Mona Bates,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam de isto magna dissensio est. Ut aliquid scire se gaudeant? Sed tamen intellego quid velit. Non est igitur voluptas bonum. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Nam quid possumus facere melius? De quibus cupio scire quid sentias. An potest, inquit ille, quicquam esse suavius quam nihil dolere? Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Erat enim Polemonis.</dfn></dt>\r\n\t<dd>Inde sermone vario <i>[redacted]</i> illa a Dipylo stadia confecimus.</dd>\r\n\t<dt><dfn>Avaritiamne minuis?</dfn></dt>\r\n\t<dd>Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum.</dd>\r\n\t<dt><dfn>Sumenda potius quam expetenda.</dfn></dt>\r\n\t<dd>Audax negotium, dicerem impudens, nisi hoc institutum postea translatum ad philosophos nostros esset.</dd>\r\n\t<dt><dfn>Quid iudicant sensus?</dfn></dt>\r\n\t<dd>Ita fit cum gravior, tum etiam splendidior oratio.</dd>\r\n</dl>\r\n\r\n\r\n<p>Quid censes in Latino fore? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Regards,</p><p>Lara Knox</p>",
    "Email": "laraknox@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Mona Bates",
    "ToMail": "monabates@syncfusion.com",
    "Image": "assets/images/images/47.png",
    "Time": "1.54 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10031",
    "text": "krystine hobson",
    "ContactTitle": "Party Invitation for Company’s Annual Day",
    "Message": "<p>Hello Imani Nieves,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Ut id aliis narrare gestiant? Quam illa ardentis amores excitaret sui! Cur tandem? Quonam, inquit, modo? Duo Reges: constructio interrete. Aliter enim explicari, quod quaeritur, non potest. </p>\r\n\r\n<p>Videsne quam sit magna dissensio? Sin aliud quid voles, postea. De hominibus dici non necesse est. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Torquatus, is qui consul cum Cn. </p>\r\n\r\n<p>Traditur, inquit, ab Epicuro ratio neglegendi doloris. Simus igitur contenti his. Istic sum, inquit. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quid de Pythagora? Si enim ad populum me vocas, eum. Esse enim quam vellet iniquus iustus poterat inpune. Verum hoc idem saepe faciamus. Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Vide, quaeso, rectumne sit.</dfn></dt>\r\n\t<dd>Sed in rebus apertissimis nimium longi sumus.</dd>\r\n\t<dt><dfn>Tu quidem reddes;</dfn></dt>\r\n\t<dd>Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.</dd>\r\n\t<dt><dfn>Pollicetur certe.</dfn></dt>\r\n\t<dd>Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt;</dd>\r\n</dl>\r\n\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Quae duo sunt, unum facit. Scisse enim te quis coarguere possit? Primum divisit ineleganter; Zenonis est, inquam, hoc Stoici. Sed videbimus. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Quae sequuntur igitur? Urgent tamen et nihil remittunt. Quae duo sunt, unum facit. Compensabatur, inquit, cum summis doloribus laetitia. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Sic enim censent, oportunitatis esse beate vivere. Tuo vero id quidem, inquam, arbitratu. Aliter homines, aliter philosophos loqui putas oportere? Quid enim est a Chrysippo praetermissum in Stoicis? Quae sequuntur igitur? </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Sierra Kerr",
      "Grady Burch"
    ],
    "BCCMail": [
      "sierrakerr@syncfusion.com",
      "gradyburch@syncfusion.com"
    ],
    "To": "Imani Nieves",
    "ToMail": "imaninieves@syncfusion.com",
    "Image": "assets/images/images/24.png",
    "Time": "1.56 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10193",
    "text": "Brielle Norman",
    "ContactTitle": "Assistant Marketing Department",
    "Message": "<p>Hi Jelani Moreno,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Thanks,</p><p>Brielle Norman</p>",
    "Email": "briellenorman@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Cameran Roth"
    ],
    "BCCMail": [
      "cameranroth@syncfusion.com"
    ],
    "To": "Jelani Moreno",
    "ToMail": "jelanimoreno@syncfusion.com",
    "Image": "assets/images/images/25.png",
    "Time": "1.58 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10159",
    "text": "Burton Larson",
    "ContactTitle": "Loan Application",
    "Message": "<p>Hi Karen Gamble,</p><p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NON IGITUR POTESTIS VOLUPTATE OMNIA DIRIGENTES AUT TUERI AUT RETINERE VIRTUTEM. IN EO ENIM POSITUM EST ID, QUOD DICIMUS ESSE EXPETENDUM. QUI-VERE FALSONE, QUAERERE MITTIMUS-DICITUR OCULIS SE PRIVASSE; DUO REGES: CONSTRUCTIO INTERRETE. QUIS CONTRA IN ILLA AETATE PUDOREM, CONSTANTIAM, ETIAMSI SUA NIHIL INTERSIT, NON TAMEN DILIGAT? </p>\r\n\r\n<p>SCIENTIAM POLLICENTUR, QUAM NON ERAT MIRUM SAPIENTIAE CUPIDO PATRIA ESSE CARIOREM. COMPENSABATUR, INQUIT, CUM SUMMIS DOLORIBUS LAETITIA. QUOD CUM DIXISSENT, ILLE CONTRA. SED AD HAEC, NISI MOLESTUM EST, HABEO QUAE VELIM. AT CUM DE PLURIMIS EADEM DICIT, TUM CERTE DE MAXIMIS. SIC ENIM CENSENT, OPORTUNITATIS ESSE BEATE VIVERE. </p>\r\n\r\n<p>DICI ENIM NIHIL POTEST VERIUS. VIDESNE, UT HAEC CONCINANT? NAM, UT SINT ILLA VENDIBILIORA, HAEC UBERIORA CERTE SUNT. AB HIS ORATORES, AB HIS IMPERATORES AC RERUM PUBLICARUM PRINCIPES EXTITERUNT. SED TU ISTUC DIXTI BENE LATINE, PARUM PLANE. IAM QUAE CORPORIS SUNT, EA NEC AUCTORITATEM CUM ANIMI PARTIBUS, COMPARANDAM ET COGNITIONEM HABENT FACILIOREM. PRIMUM IN NOSTRANE POTESTATE EST, QUID MEMINERIMUS? </p>\r\n\r\n<p>Thanks,</p><p>Burton Larson</p>",
    "Email": "burtonlarson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Karen Gamble",
    "ToMail": "karengamble@syncfusion.com",
    "Image": "assets/images/images/17.png",
    "Time": "1.24 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10011",
    "text": "Richelle Mead",
    "ContactTitle": "Business dinner invitation",
    "Message": "<p>Dear Leo Cooley,</p><p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NON IGITUR POTESTIS VOLUPTATE OMNIA DIRIGENTES AUT TUERI AUT RETINERE VIRTUTEM. IN EO ENIM POSITUM EST ID, QUOD DICIMUS ESSE EXPETENDUM. QUI-VERE FALSONE, QUAERERE MITTIMUS-DICITUR OCULIS SE PRIVASSE; DUO REGES: CONSTRUCTIO INTERRETE. QUIS CONTRA IN ILLA AETATE PUDOREM, CONSTANTIAM, ETIAMSI SUA NIHIL INTERSIT, NON TAMEN DILIGAT? </p>\r\n\r\n<p>SCIENTIAM POLLICENTUR, QUAM NON ERAT MIRUM SAPIENTIAE CUPIDO PATRIA ESSE CARIOREM. COMPENSABATUR, INQUIT, CUM SUMMIS DOLORIBUS LAETITIA. QUOD CUM DIXISSENT, ILLE CONTRA. SED AD HAEC, NISI MOLESTUM EST, HABEO QUAE VELIM. AT CUM DE PLURIMIS EADEM DICIT, TUM CERTE DE MAXIMIS. SIC ENIM CENSENT, OPORTUNITATIS ESSE BEATE VIVERE. </p>\r\n\r\n<p>DICI ENIM NIHIL POTEST VERIUS. VIDESNE, UT HAEC CONCINANT? NAM, UT SINT ILLA VENDIBILIORA, HAEC UBERIORA CERTE SUNT. AB HIS ORATORES, AB HIS IMPERATORES AC RERUM PUBLICARUM PRINCIPES EXTITERUNT. SED TU ISTUC DIXTI BENE LATINE, PARUM PLANE. IAM QUAE CORPORIS SUNT, EA NEC AUCTORITATEM CUM ANIMI PARTIBUS, COMPARANDAM ET COGNITIONEM HABENT FACILIOREM. PRIMUM IN NOSTRANE POTESTATE EST, QUID MEMINERIMUS? </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Ruth Cervantes"
    ],
    "BCCMail": [
      "ruthcervantes@syncfusion.com"
    ],
    "To": "Leo Cooley",
    "ToMail": "leocooley@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "1.25 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10068",
    "text": "Cynthia Lindsay",
    "ContactTitle": "Marketing Team",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Duo Reges: constructio interrete. Quid sequatur, quid repugnet, vident. Qui est in parvis malis. </p>\r\n\r\n<ol>\r\n\t<li>Quid igitur dubitamus in tota eius natura quaerere quid sit effectum?</li>\r\n\t<li>Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</li>\r\n\t<li>Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus;</li>\r\n</ol>\r\n\r\n\r\n<p>Sed quot homines, tot sententiae; Sin aliud quid voles, postea. Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Quid ergo? Efficiens dici potest. </p>\r\n\r\n<p>Quorum sine causa fieri nihil putandum est. Quae diligentissime contra Aristonem dicuntur a Chryippo. Et ille ridens: Video, inquit, quid agas; Tamen a proposito, inquam, aberramus. Tu vero, inquam, ducas licet, si sequetur; Pauca mutat vel plura sane; Quid nunc honeste dicit? </p>\r\n\r\n<p>Thanks,</p><p>Cynthia Lindsay</p>",
    "Email": "cynthialindsay@syncfusion.com",
    "CC": [
      "Brielle Rich",
      "Ayanna Gregory"
    ],
    "CCMail": [
      "briellerich@syncfusion.com",
      "ayannagregory@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/42.png",
    "Time": "1.26 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10077",
    "text": "Meghan Wilkinson",
    "ContactTitle": "Party Invitation for Company’s Annual Day",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; Bonum patria: miserum exilium. Uterque enim summo bono fruitur, id est voluptate. An haec ab eo non dicuntur? Negat esse eam, inquit, propter se expetendam. Quid censes in Latino fore? Quid igitur, inquit, eos responsuros putas? Duo Reges: constructio interrete. Ubi ut eam caperet aut quando? </p>\r\n\r\n<p>Dat enim intervalla et relaxat. Idem iste, inquam, de voluptate quid sentit? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Tu quidem reddes; Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ecce aliud simile dissimile. </p>\r\n\r\n<p>Optime, inquam. An nisi populari fama? Bonum patria: miserum exilium. Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Hoc mihi cum tuo fratre convenit. At ille pellit, qui permulcet sensum voluptate. At multis malis affectus. Quid sequatur, quid repugnet, vident. Si quae forte-possumus. Quod non faceret, si in voluptate summum bonum poneret. </p>\r\n\r\n<p>Thanks,</p><p>Meghan Wilkinson</p>",
    "Email": "meghanwilkinson@syncfusion.com",
    "CC": [
      "Idona Stanton"
    ],
    "CCMail": [
      "idonastanton@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "1.27 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10012",
    "text": "Richelle Mead",
    "ContactTitle": "Confirmation of the business appointment",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Rogan Espinoza"
    ],
    "CCMail": [
      "roganespinoza@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "1.45 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10006",
    "text": "Richelle Mead",
    "ContactTitle": "Application for Sales Associate",
    "Message": "<p>Dear Savannah Ortega,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verba tu fingas et ea dicas, quae non sentias? Esse enim quam vellet iniquus iustus poterat inpune. Non dolere, inquam, istud quam vim habeat postea videro; Duarum enim vitarum nobis erunt instituta capienda. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Duo Reges: constructio interrete. Nec enim ignoras his istud honestum non summum modo, sed etiam, ut tu vis, solum bonum videri. Quibus ego vehementer assentior. Hoc Hieronymus summum bonum esse dixit. </p>\r\n\r\n<p>Summum enim bonum exposuit vacuitatem doloris; Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Tuo vero id quidem, inquam, arbitratu. Ait enim se, si uratur, Quam hoc suave! dicturum. Quam illa ardentis amores excitaret sui! Cur tandem? Estne, quaeso, inquam, sitienti in bibendo voluptas? Quid est, quod ab ea absolvi et perfici debeat? Verum hoc idem saepe faciamus. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. </p>\r\n\r\n<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Omnes enim iucundum motum, quo sensus hilaretur. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Cur id non ita fit? Inde igitur, inquit, ordiendum est. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? </p>\r\n\r\n<p>Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Atque ita re simpliciter primo collocata reliqua subtilius persequentes corporis bona facilem quandam rationem habere censebant; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Ergo hoc quidem apparet, nos ad agendum esse natos. </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Savannah Ortega",
    "ToMail": "savannahortega@syncfusion.com",
    "Image": "assets/images/images/1.png",
    "Time": "1.46 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10061",
    "text": "Nelle Farrell",
    "ContactTitle": "Get Together on March",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo putas dicere? Haeret in salebra. Omnes enim iucundum motum, quo sensus hilaretur. Si longus, levis dictata sunt. Duo Reges: constructio interrete. Utram tandem linguam nescio? Estne, quaeso, inquam, sitienti in bibendo voluptas? Nemo igitur esse beatus potest. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Bona autem corporis huic sunt, quod posterius posui, similiora. Satis est ad hoc responsum. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Quid ad utilitatem tantae pecuniae? Nihil enim hoc differt. Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Et ille ridens: Video, inquit, quid agas; Deprehensus omnem poenam contemnet. </p>\r\n\r\n<p>Nulla erit controversia. Zenonis est, inquam, hoc Stoici. Quorum altera prosunt, nocent altera. Tibi hoc incredibile, quod beatissimum. Quid igitur, inquit, eos responsuros putas? Quid turpius quam sapientis vitam ex insipientium sermone pendere? </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Duarum enim vitarum nobis erunt instituta capienda. Sed tamen intellego quid velit. Quae cum essent dicta, discessimus. Immo videri fortasse. Sed ego in hoc resisto; Cum audissem Antiochum, Brute, ut solebam, cum M. </p>\r\n\r\n<p>Quare conare, quaeso. An potest cupiditas finiri? Quod totum contra est. Nam ista vestra: Si gravis, brevis; Videsne, ut haec concinant? Quare attende, quaeso. Nescio quo modo praetervolavit oratio. </p>\r\n\r\n<p>Thanks,</p><p>Nelle Farrell</p>",
    "Email": "nellefarrell@syncfusion.com",
    "CC": [
      "Wanda Casey"
    ],
    "CCMail": [
      "wandacasey@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/19.png",
    "Time": "1.46 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10134",
    "text": "Igor Mccoy",
    "ContactTitle": "Thank you",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Regards,</p><p>Igor Mccoy</p>",
    "Email": "igormccoy@syncfusion.com",
    "CC": [
      "Winifred Dyer",
      "Hanna Benjamin"
    ],
    "CCMail": [
      "winifreddyer@syncfusion.com",
      "hannabenjamin@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "1.46 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10066",
    "text": "Wyoming Cunningham",
    "ContactTitle": "Invitation for farewell party of Mr",
    "Message": "<p>Hi Eleanor Cotton,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Duo Reges: constructio interrete. An eiusdem modi? Pugnant Stoici cum Peripateticis. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Si enim ad populum me vocas, eum. Quis est tam dissimile homini. Estne, quaeso, inquam, sitienti in bibendo voluptas? Ut aliquid scire se gaudeant? Satis est ad hoc responsum. Quantum Aristoxeni ingenium consumptum videmus in musicis? </p>\r\n\r\n<p>Sullae consulatum? Minime vero, inquit ille, consentit. Haeret in salebra. </p>\r\n\r\n<p>Facillimum id quidem est, inquam. Itaque his sapiens semper vacabit. Sint modo partes vitae beatae. Nihil enim iam habes, quod ad corpus referas; Equidem e Cn. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Sed nimis multa.</dfn></dt>\r\n\t<dd>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</dd>\r\n\t<dt><dfn>Nihil sane.</dfn></dt>\r\n\t<dd>Nos autem non solum beatae vitae istam esse oblectationem videmus, sed etiam levamentum miseriarum.</dd>\r\n\t<dt><dfn>Si quae forte-possumus.</dfn></dt>\r\n\t<dd>Duo enim genera quae erant, fecit tria.</dd>\r\n\t<dt><dfn>Scrupulum, inquam, abeunti;</dfn></dt>\r\n\t<dd>De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.</dd>\r\n</dl>\r\n\r\n\r\n<p>Iam in altera philosophiae parte. Torquatus, is qui consul cum Cn. Restinguet citius, si ardentem acceperit. Bonum valitudo: miser morbus. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thanks,</p><p>Wyoming Cunningham</p>",
    "Email": "wyomingcunningham@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Eleanor Cotton",
    "ToMail": "eleanorcotton@syncfusion.com",
    "Image": "assets/images/images/7.png",
    "Time": "1.55 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10070",
    "text": "Sara Bond",
    "ContactTitle": "Networking Referral",
    "Message": "<p>Hi Kerry Best,</p><h4>Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum;</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Venit ad extremum; Quorum sine causa fieri nihil putandum est. Ubi ut eam caperet aut quando? Ac tamen hic mallet non dolere. Duo Reges: constructio interrete. Sed in rebus apertissimis nimium longi sumus. Hunc vos beatum; </p>\r\n\r\n<p>Sed quot homines, tot sententiae; Et quidem, inquit, vehementer errat; Idemne, quod iucunde? Negat enim summo bono afferre incrementum diem. </p>\r\n\r\n<h4>Et hercule-fatendum est enim, quod sentio -mirabilis est apud illos contextus rerum.</h4>\r\n\r\n<p>Si quicquam extra virtutem habeatur in bonis. Conferam tecum, quam cuique verso rem subicias; Scisse enim te quis coarguere possit? Cur iustitia laudatur? An hoc usque quaque, aliter in vita? Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Quis istud possit, inquit, negare? Est, ut dicis, inquit; Quibus ego vehementer assentior. Omnis enim est natura diligens sui. </p>\r\n\r\n<p>An eiusdem modi? Idem adhuc; Quid est enim aliud esse versutum? Quod quidem nobis non saepe contingit. </p>\r\n\r\n<h4>Sic consequentibus vestris sublatis prima tolluntur.</h4>\r\n\r\n<p>Hic ambiguo ludimur. Aliud igitur esse censet gaudere, aliud non dolere. Graccho, eius fere, aequali? Sint ista Graecorum; Nihil sane. Ut optime, secundum naturam affectum esse possit. Quo plebiscito decreta a senatu est consuli quaestio Cn. </p>\r\n\r\n<p>Thanks,</p><p>Sara Bond</p>",
    "Email": "sarabond@syncfusion.com",
    "CC": [
      "Christine Pugh"
    ],
    "CCMail": [
      "christinepugh@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "1.1 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10170",
    "text": "Byron Weiss",
    "ContactTitle": "Performance appraisal announcement",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At, si voluptas esset bonum, desideraret. Quo tandem modo? An hoc usque quaque, aliter in vita? Nam quid possumus facere melius? Non potes, nisi retexueris illa. Praeclare hoc quidem. </p>\r\n\r\n<p>Rationis enim perfectio est virtus; Deprehensus omnem poenam contemnet. Minime vero, inquit ille, consentit. Tum mihi Piso: Quid ergo? </p>\r\n\r\n<ul>\r\n\t<li>Traditur, inquit, ab Epicuro ratio neglegendi doloris.</li>\r\n\t<li>Vide igitur ne non debeas verbis nostris uti, sententiis tuis.</li>\r\n\t<li>Mihi, inquam, qui te id ipsum rogavi?</li>\r\n\t<li>Nam ante Aristippus, et ille melius.</li>\r\n\t<li>An ea, quae per vinitorem antea consequebatur, per se ipsa curabit?</li>\r\n\t<li>Quippe: habes enim a rhetoribus;</li>\r\n</ul>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Ita ne hoc quidem modo paria peccata sunt. Istam voluptatem, inquit, Epicurus ignorat? Tanta vis admonitionis inest in locis; Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Sincerely,</p><p>Byron Weiss</p>",
    "Email": "byronweiss@syncfusion.com",
    "CC": [
      "Leslie Juarez",
      "Cameran Roth"
    ],
    "CCMail": [
      "lesliejuarez@syncfusion.com",
      "cameranroth@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/22.png",
    "Time": "1.23 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10100",
    "text": "Brian Blackburn",
    "ContactTitle": "Application for the post of an IT analyst",
    "Message": "<p>Hi Kerry Best,</p><h4>Duo Reges: constructio interrete.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Quamquam tu hanc copiosiorem etiam soles dicere. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Praeclarae mortes sunt imperatoriae; Bona autem corporis huic sunt, quod posterius posui, similiora. Et quidem, inquit, vehementer errat; Suo enim quisque studio maxime ducitur. Quorum altera prosunt, nocent altera. </p>\r\n\r\n<h4>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</h4>\r\n\r\n<p>Summae mihi videtur inscitiae. Quis istum dolorem timet? Quid ergo hoc loco intellegit honestum? Collige omnia, quae soletis: Praesidium amicorum. Idemque diviserunt naturam hominis in animum et corpus. Negat esse eam, inquit, propter se expetendam. </p>\r\n\r\n<p>Nam ante Aristippus, et ille melius. Praeteritis, inquit, gaudeo. Inde igitur, inquit, ordiendum est. At iam decimum annum in spelunca iacet. Cur post Tarentum ad Archytam? Comprehensum, quod cognitum non habet? Sed fac ista esse non inportuna; Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Thanks,</p><p>Brian Blackburn</p>",
    "Email": "brianblackburn@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/31.png",
    "Time": "1.27 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10141",
    "text": "Halee Lindsey",
    "ContactTitle": "Apology for late response email",
    "Message": "<p>Hi Fletcher Beck,</p><h4>Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum;</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne in odium veniam, si amicum destitero tueri. Venit ad extremum; Quorum sine causa fieri nihil putandum est. Ubi ut eam caperet aut quando? Ac tamen hic mallet non dolere. Duo Reges: constructio interrete. Sed in rebus apertissimis nimium longi sumus. Hunc vos beatum; </p>\r\n\r\n<p>Sed quot homines, tot sententiae; Et quidem, inquit, vehementer errat; Idemne, quod iucunde? Negat enim summo bono afferre incrementum diem. </p>\r\n\r\n<h4>Et hercule-fatendum est enim, quod sentio -mirabilis est apud illos contextus rerum.</h4>\r\n\r\n<p>Si quicquam extra virtutem habeatur in bonis. Conferam tecum, quam cuique verso rem subicias; Scisse enim te quis coarguere possit? Cur iustitia laudatur? An hoc usque quaque, aliter in vita? Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Quis istud possit, inquit, negare? Est, ut dicis, inquit; Quibus ego vehementer assentior. Omnis enim est natura diligens sui. </p>\r\n\r\n<p>An eiusdem modi? Idem adhuc; Quid est enim aliud esse versutum? Quod quidem nobis non saepe contingit. </p>\r\n\r\n<h4>Sic consequentibus vestris sublatis prima tolluntur.</h4>\r\n\r\n<p>Hic ambiguo ludimur. Aliud igitur esse censet gaudere, aliud non dolere. Graccho, eius fere, aequali? Sint ista Graecorum; Nihil sane. Ut optime, secundum naturam affectum esse possit. Quo plebiscito decreta a senatu est consuli quaestio Cn. </p>\r\n\r\n<p>Thanks,</p><p>Halee Lindsey</p>",
    "Email": "haleelindsey@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Thor Harrison",
      "Sandra Snyder"
    ],
    "BCCMail": [
      "thorharrison@syncfusion.com",
      "sandrasnyder@syncfusion.com"
    ],
    "To": "Fletcher Beck",
    "ToMail": "fletcherbeck@syncfusion.com",
    "Image": "assets/images/images/5.png",
    "Time": "1.34 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10164",
    "text": "Ashely Compton",
    "ContactTitle": "Software evaluation follow-up",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tubulo putas dicere? Haeret in salebra. Omnes enim iucundum motum, quo sensus hilaretur. Si longus, levis dictata sunt. Duo Reges: constructio interrete. Utram tandem linguam nescio? Estne, quaeso, inquam, sitienti in bibendo voluptas? Nemo igitur esse beatus potest. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Bona autem corporis huic sunt, quod posterius posui, similiora. Satis est ad hoc responsum. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Quid ad utilitatem tantae pecuniae? Nihil enim hoc differt. Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Et ille ridens: Video, inquit, quid agas; Deprehensus omnem poenam contemnet. </p>\r\n\r\n<p>Nulla erit controversia. Zenonis est, inquam, hoc Stoici. Quorum altera prosunt, nocent altera. Tibi hoc incredibile, quod beatissimum. Quid igitur, inquit, eos responsuros putas? Quid turpius quam sapientis vitam ex insipientium sermone pendere? </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Duarum enim vitarum nobis erunt instituta capienda. Sed tamen intellego quid velit. Quae cum essent dicta, discessimus. Immo videri fortasse. Sed ego in hoc resisto; Cum audissem Antiochum, Brute, ut solebam, cum M. </p>\r\n\r\n<p>Quare conare, quaeso. An potest cupiditas finiri? Quod totum contra est. Nam ista vestra: Si gravis, brevis; Videsne, ut haec concinant? Quare attende, quaeso. Nescio quo modo praetervolavit oratio. </p>\r\n\r\n<p>Yours,</p><p>Ashely Compton</p>",
    "Email": "ashelycompton@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "1.36 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10085",
    "text": "Duncan Lindsey",
    "ContactTitle": "Sandra Smith Update",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? <i>Quae cum dixisset, finem ille.</i> Hic nihil fuit, quod quaereremus. Nemo igitur esse beatus potest. Duo Reges: constructio interrete. Quid de Platone aut de Democrito loquar? Vide, quantum, inquam, fallare, Torquate. </p>\r\n\r\n<p>Quid adiuvas? <mark>Verum hoc idem saepe faciamus.</mark> Qualem igitur hominem natura inchoavit? Et quidem, inquit, vehementer errat; <b>Sed quid sentiat, non videtis.</b> <b>Hoc mihi cum tuo fratre convenit.</b> </p>\r\n\r\n<p>Sequitur disserendi ratio cognitioque naturae; Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid dubitas igitur mutare principia naturae? Hic nihil fuit, quod quaereremus. Nos cum te, M. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Maximus dolor, inquit, brevis est. <b>Quorum altera prosunt, nocent altera.</b> </p>\r\n\r\n<p>Ita relinquet duas, de quibus etiam atque etiam consideret. At eum nihili facit; Omnia peccata paria dicitis. Quasi ego id curem, quid ille aiat aut neget. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p><b>Si quicquam extra virtutem habeatur in bonis.</b> Quae duo sunt, unum facit. Sedulo, inquam, faciam. Itaque his sapiens semper vacabit. Ratio enim nostra consentit, pugnat oratio. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Gloriosa ostentatio in constituendo summo bono. <mark>Nos vero, inquit ille;</mark> Ipse Epicurus fortasse redderet, ut Peducaeus. Sed nimis multa. </p>\r\n\r\n<p>Thanks,</p><p>Duncan Lindsey</p>",
    "Email": "duncanlindsey@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/50.png",
    "Time": "1.15 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10106",
    "text": "Louis Bowers",
    "ContactTitle": "Follow up application",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et complectitur verbis, quod vult, et dicit plane, quod intellegam; Restinguet citius, si ardentem acceperit. Fortasse id optimum, sed ubi illud: Plus semper voluptatis? An vero, inquit, quisquam potest probare, quod perceptfum, quod. Duo Reges: constructio interrete. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. Quam ob rem tandem, inquit, non satisfacit? </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Primum divisit ineleganter;</dfn></dt>\r\n\t<dd>Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Non quam nostram quidem, inquit Pomponius iocans;</dd>\r\n\t<dt><dfn>Quid ergo?</dfn></dt>\r\n\t<dd>Philosophi autem in suis lectulis plerumque moriuntur.</dd>\r\n</dl>\r\n\r\n\r\n<p><i>Nam ante Aristippus, et ille melius.</i> Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Res enim concurrent contrariae. Si verbum sequimur, primum longius verbum praepositum quam bonum. Non risu potius quam oratione eiciendum? Ne in odium veniam, si amicum destitero tueri. </p>\r\n\r\n<ul>\r\n\t<li>Quam tu ponis in verbis, ego positam in re putabam.</li>\r\n\t<li>In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt.</li>\r\n\t<li>Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo;</li>\r\n</ul>\r\n\r\n\r\n<p><mark>Suo enim quisque studio maxime ducitur.</mark> Nam illud quidem adduci vix possum, ut ea, quae senserit ille, tibi non vera videantur. Res enim se praeclare habebat, et quidem in utraque parte. Quas enim kakaw Graeci appellant, vitia malo quam malitias nominare. Mihi quidem Antiochum, quem audis, satis belle videris attendere. Iam id ipsum absurdum, maximum malum neglegi. Vide igitur ne non debeas verbis nostris uti, sententiis tuis. </p>\r\n\r\n\r\n<p>Thanks,</p><p>Louis Bowers</p>",
    "Email": "louisbowers@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/43.png",
    "Time": "1.22 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10214",
    "text": "Willow Frye",
    "ContactTitle": "Out of Office",
    "Message": "<p>Hello Maggy Randall,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam. Illis videtur, qui illud non dubitant bonum dicere -; Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. </p>\r\n\r\n<p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Sed ad rem redeamus; Hoc mihi cum tuo fratre convenit. Quod quidem iam fit etiam in Academia. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Apparet statim, quae sint officia, quae actiones. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quid est, quod ab ea absolvi et perfici debeat? Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter videt. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Quid de Platone aut de Democrito loquar? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nunc omni virtuti vitium contrario nomine opponitur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Magna laus.</dfn></dt>\r\n\t<dd>Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret?</dd>\r\n\t<dt><dfn>Quis negat?</dfn></dt>\r\n\t<dd>Is ita vivebat, ut nulla tam exquisita posset inveniri voluptas, qua non abundaret.</dd>\r\n\t<dt><dfn>Immo videri fortasse.</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Non igitur bene.</dfn></dt>\r\n\t<dd>Qua tu etiam inprudens utebare non numquam.</dd>\r\n\t<dt><dfn>Eam stabilem appellas.</dfn></dt>\r\n\t<dd>Quod si ita se habeat, non possit beatam praestare vitam sapientia.</dd>\r\n\t<dt><dfn>Sedulo, inquam, faciam.</dfn></dt>\r\n\t<dd>Quis hoc dicit?</dd>\r\n</dl>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis est, qui non oderit libidinosam, protervam adolescentiam? At Zeno eum non beatum modo, sed etiam divitem dicere ausus est. Huius, Lyco, oratione locuples, rebus ipsis ielunior. </p>\r\n\r\n<p>Regards,</p><p>Willow Frye</p>",
    "Email": "willowfrye@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Clare Heath",
      "Jade Gallegos"
    ],
    "BCCMail": [
      "clareheath@syncfusion.com",
      "jadegallegos@syncfusion.com"
    ],
    "To": "Maggy Randall",
    "ToMail": "maggyrandall@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "1.3 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10149",
    "text": "Amity Slater",
    "ContactTitle": "Business dinner invitation",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idemne, quod iucunde? Nosti, credo, illud: Nemo pius est, qui pietatem-; Deinde dolorem quem maximum? Magna laus. <code>Sed nimis multa.</code> Eam tum adesse, cum dolor omnis absit; Duo Reges: constructio interrete. Comprehensum, quod cognitum non habet? </p>\r\n\r\n<p>Sed ille, ut dixi, vitiose. Immo videri fortasse. Qui convenit? Primum quid tu dicis breve? Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quid sequatur, quid repugnet, vident. Quae cum essent dicta, discessimus. Ratio quidem vestra sic cogit. </p>\r\n\r\n<pre>Quae quidem res efficit, ne necesse sit isdem de rebus\r\nsemper quasi dictata decantare neque a commentariolis suis\r\ndiscedere.\r\n\r\nHaec bene dicuntur, nec ego repugno, sed inter sese ipsa\r\npugnant.\r\n</pre>\r\n\r\n\r\n<p>Sit sane ista voluptas. Utram tandem linguam nescio? Nescio quo modo praetervolavit oratio. <code>Efficiens dici potest.</code> Quid de Pythagora? Pugnant Stoici cum Peripateticis. Quamquam te quidem video minime esse deterritum. <code>Res enim concurrent contrariae.</code> </p>\r\n\r\n<p><code>Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae.</code> <code>Poterat autem inpune;</code> Que Manilium, ab iisque M. Quid nunc honeste dicit? Sed ea mala virtuti magnitudine obruebantur. Cui Tubuli nomen odio non est? </p>\r\n\r\n<p>Thanks,</p><p>Amity Slater</p>",
    "Email": "amityslater@syncfusion.com",
    "CC": [
      "Fletcher Beck"
    ],
    "CCMail": [
      "fletcherbeck@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/3.png",
    "Time": "1.32 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10121",
    "text": "Galena Roberson",
    "ContactTitle": "Opening for Sales Manager",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu enim ista lenius, hic Stoicorum more nos vexat. Fortemne possumus dicere eundem illum Torquatum? Duo Reges: constructio interrete. Sed ille, ut dixi, vitiose. <mark>Itaque hic ipse iam pridem est reiectus;</mark> Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Atqui reperies, inquit, in hoc quidem pertinacem; Philosophi autem in suis lectulis plerumque moriuntur. </p>\r\n\r\n<p>An vero, inquit, quisquam potest probare, quod perceptfum, quod. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Solum praeterea formosum, solum liberum, solum civem, stultost; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Quid ad utilitatem tantae pecuniae? Nos commodius agimus. Non autem hoc: igitur ne illud quidem. Post enim Chrysippum eum non sane est disputatum. </p>\r\n\r\n<p><b>Iam in altera philosophiae parte.</b> Non risu potius quam oratione eiciendum? Non quam nostram quidem, inquit Pomponius iocans; An potest, inquit ille, quicquam esse suavius quam nihil dolere? Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. <mark>Tibi hoc incredibile, quod beatissimum.</mark> <b>Apud ceteros autem philosophos, qui quaesivit aliquid, tacet;</b> </p>\r\n\r\n<p>Negat enim summo bono afferre incrementum diem. Aeque enim contingit omnibus fidibus, ut incontentae sint. <mark>Non enim solum Torquatus dixit quid sentiret, sed etiam cur.</mark> Ut in geometria, prima si dederis, danda sunt omnia. Bonum incolumis acies: misera caecitas. Omnia contraria, quos etiam insanos esse vultis. <b>Summus dolor plures dies manere non potest?</b> Hoc tu nunc in illo probas. </p>\r\n\r\n<p>Regards,</p><p>Galena Roberson</p>",
    "Email": "galenaroberson@syncfusion.com",
    "CC": [
      "Latifah Combs"
    ],
    "CCMail": [
      "latifahcombs@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/12.png",
    "Time": "1.32 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10040",
    "text": "Baxter Vargas",
    "ContactTitle": "Service appointment confirmation",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu enim ista lenius, hic Stoicorum more nos vexat. Fortemne possumus dicere eundem illum Torquatum? Duo Reges: constructio interrete. Sed ille, ut dixi, vitiose. <mark>Itaque hic ipse iam pridem est reiectus;</mark> Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Atqui reperies, inquit, in hoc quidem pertinacem; Philosophi autem in suis lectulis plerumque moriuntur. </p>\r\n\r\n<p>An vero, inquit, quisquam potest probare, quod perceptfum, quod. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Solum praeterea formosum, solum liberum, solum civem, stultost; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Quid ad utilitatem tantae pecuniae? Nos commodius agimus. Non autem hoc: igitur ne illud quidem. Post enim Chrysippum eum non sane est disputatum. </p>\r\n\r\n<p><b>Iam in altera philosophiae parte.</b> Non risu potius quam oratione eiciendum? Non quam nostram quidem, inquit Pomponius iocans; An potest, inquit ille, quicquam esse suavius quam nihil dolere? Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. <mark>Tibi hoc incredibile, quod beatissimum.</mark> <b>Apud ceteros autem philosophos, qui quaesivit aliquid, tacet;</b> </p>\r\n\r\n<p>Negat enim summo bono afferre incrementum diem. Aeque enim contingit omnibus fidibus, ut incontentae sint. <mark>Non enim solum Torquatus dixit quid sentiret, sed etiam cur.</mark> Ut in geometria, prima si dederis, danda sunt omnia. Bonum incolumis acies: misera caecitas. Omnia contraria, quos etiam insanos esse vultis. <b>Summus dolor plures dies manere non potest?</b> Hoc tu nunc in illo probas. </p>\r\n\r\n<p>Thanks,</p><p>Baxter Vargas</p>",
    "Email": "baxtervargas@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/23.png",
    "Time": "1.33 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10178",
    "text": "Ayanna Gregory",
    "ContactTitle": "Service appointment confirmation",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Thanks,</p><p>Ayanna Gregory</p>",
    "Email": "ayannagregory@syncfusion.com",
    "CC": [
      "Quynn Carr",
      "Christine Pugh"
    ],
    "CCMail": [
      "quynncarr@syncfusion.com",
      "christinepugh@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "1.45 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10056",
    "text": "Cameran Hester",
    "ContactTitle": "Business appointment request",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. Themistocles quidem, cum ei Simonides an quis alius artem memoriae polliceretur, Oblivionis, inquit, mallem. Quod ea non occurrentia fingunt, vincunt Aristonem; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Tubulo putas dicere? Vide igitur ne non debeas verbis nostris uti, sententiis tuis. Duo Reges: constructio interrete. Ea possunt paria non esse. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Quae hic rei publicae vulnera inponebat, eadem ille sanabat. Eam tum adesse, cum dolor omnis absit; Istic sum, inquit. Quod quoniam in quo sit magna dissensio est, Carneadea nobis adhibenda divisio est, qua noster Antiochus libenter uti solet. Quod enim ne vivus quidem, inquit, diutius sentire poterat, quam dum fruebatur, quo modo id potuit mortuo permanere? Mihi enim satis est, ipsis non satis. </p>\r\n\r\n<p>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ne in odium veniam, si amicum destitero tueri. Ut enim, inquit, gubernator aeque peccat, si palearum navem evertit et si auri, item aeque peccat, qui parentem et qui servum iniuria verberat. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. </p>\r\n\r\n<p>Thanks,</p><p>Cameran Hester</p>",
    "Email": "cameranhester@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "1.45 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10055",
    "text": "Jaime Boyd",
    "ContactTitle": "Assistant Marketing Department",
    "Message": "<p>Hi Kerry Best,</p><p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NON IGITUR POTESTIS VOLUPTATE OMNIA DIRIGENTES AUT TUERI AUT RETINERE VIRTUTEM. IN EO ENIM POSITUM EST ID, QUOD DICIMUS ESSE EXPETENDUM. QUI-VERE FALSONE, QUAERERE MITTIMUS-DICITUR OCULIS SE PRIVASSE; DUO REGES: CONSTRUCTIO INTERRETE. QUIS CONTRA IN ILLA AETATE PUDOREM, CONSTANTIAM, ETIAMSI SUA NIHIL INTERSIT, NON TAMEN DILIGAT? </p>\r\n\r\n<p>SCIENTIAM POLLICENTUR, QUAM NON ERAT MIRUM SAPIENTIAE CUPIDO PATRIA ESSE CARIOREM. COMPENSABATUR, INQUIT, CUM SUMMIS DOLORIBUS LAETITIA. QUOD CUM DIXISSENT, ILLE CONTRA. SED AD HAEC, NISI MOLESTUM EST, HABEO QUAE VELIM. AT CUM DE PLURIMIS EADEM DICIT, TUM CERTE DE MAXIMIS. SIC ENIM CENSENT, OPORTUNITATIS ESSE BEATE VIVERE. </p>\r\n\r\n<p>DICI ENIM NIHIL POTEST VERIUS. VIDESNE, UT HAEC CONCINANT? NAM, UT SINT ILLA VENDIBILIORA, HAEC UBERIORA CERTE SUNT. AB HIS ORATORES, AB HIS IMPERATORES AC RERUM PUBLICARUM PRINCIPES EXTITERUNT. SED TU ISTUC DIXTI BENE LATINE, PARUM PLANE. IAM QUAE CORPORIS SUNT, EA NEC AUCTORITATEM CUM ANIMI PARTIBUS, COMPARANDAM ET COGNITIONEM HABENT FACILIOREM. PRIMUM IN NOSTRANE POTESTATE EST, QUID MEMINERIMUS? </p>\r\n\r\n<p>Thanks,</p><p>Jaime Boyd</p>",
    "Email": "jaimeboyd@syncfusion.com",
    "CC": [
      "Cecilia Leonard",
      "Leilani Mayer"
    ],
    "CCMail": [
      "cecilialeonard@syncfusion.com",
      "leilanimayer@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/5.png",
    "Time": "1.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10110",
    "text": "Kerry Bray",
    "ContactTitle": "Home Furnishings",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. Sed hoc sane concedamus. Quod totum contra est. </p>\r\n\r\n<p>Idem iste, inquam, de voluptate quid sentit? Sed quae tandem ista ratio est? Itaque contra est, ac dicitis; Cur deinde Metrodori liberos commendas? Restatis igitur vos; Eam stabilem appellas. </p>\r\n\r\n<pre>Quae possunt eadem contra Carneadeum illud summum bonum\r\ndici, quod is non tam, ut probaret, protulit, quam ut\r\nStoicis, quibuscum bellum gerebat, opponeret.\r\n\r\nQuid, si reviviscant Platonis illi et deinceps qui eorum\r\nauditores fuerunt, et tecum ita loquantur?\r\n</pre>\r\n\r\n\r\n<p>Apparet statim, quae sint officia, quae actiones. Dici enim nihil potest verius. Ergo ita: non posse honeste vivi, nisi honeste vivatur? At multis se probavit. Cave putes quicquam esse verius. </p>\r\n\r\n<p>Age sane, inquam. Est, ut dicis, inquit; Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Thanks,</p><p>Kerry Bray</p>",
    "Email": "kerrybray@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/4.png",
    "Time": "1.52 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10010",
    "text": "Richelle Mead",
    "ContactTitle": "Business appointment request",
    "Message": "<p>Dear Kerry Best,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/52.png",
    "Time": "1.16 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10130",
    "text": "Patricia Boyle",
    "ContactTitle": "Sales Team",
    "Message": "<p>Hello Amelia Curtis,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Duo Reges: constructio interrete. Quid sequatur, quid repugnet, vident. Qui est in parvis malis. </p>\r\n\r\n<ol>\r\n\t<li>Quid igitur dubitamus in tota eius natura quaerere quid sit effectum?</li>\r\n\t<li>Equidem etiam Epicurum, in physicis quidem, Democriteum puto.</li>\r\n\t<li>Neque enim civitas in seditione beata esse potest nec in discordia dominorum domus;</li>\r\n</ol>\r\n\r\n\r\n<p>Sed quot homines, tot sententiae; Sin aliud quid voles, postea. Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Quid ergo? Efficiens dici potest. </p>\r\n\r\n<p>Quorum sine causa fieri nihil putandum est. Quae diligentissime contra Aristonem dicuntur a Chryippo. Et ille ridens: Video, inquit, quid agas; Tamen a proposito, inquam, aberramus. Tu vero, inquam, ducas licet, si sequetur; Pauca mutat vel plura sane; Quid nunc honeste dicit? </p>\r\n\r\n<p>Regards,</p><p>Patricia Boyle</p>",
    "Email": "patriciaboyle@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Amanda Hardin",
      "Chase Solomon"
    ],
    "BCCMail": [
      "amandahardin@syncfusion.com",
      "chasesolomon@syncfusion.com"
    ],
    "To": "Amelia Curtis",
    "ToMail": "ameliacurtis@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "1.16 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10075",
    "text": "Rana Jefferson",
    "ContactTitle": "Opening for Sales Manager",
    "Message": "<p>Hi Igor Hyde,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verum esto: verbum ipsum voluptatis non habet dignitatem, nec nos fortasse intellegimus. Duo Reges: constructio interrete. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Ita ne hoc quidem modo paria peccata sunt. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Expectoque quid ad id, quod quaerebam, respondeas. Et summatim quidem haec erant de corpore animoque dicenda, quibus quasi informatum est quid hominis natura postulet. Respondent extrema primis, media utrisque, omnia omnibus. Quis Pullum Numitorium Fregellanum, proditorem, quamquam rei publicae nostrae profuit, non odit? </p>\r\n\r\n<ul>\r\n\t<li>Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam;</li>\r\n\t<li>Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere?</li>\r\n\t<li>Habent enim et bene longam et satis litigiosam disputationem.</li>\r\n\t<li>Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem.</li>\r\n\t<li>Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo.</li>\r\n</ul>\r\n\r\n\r\n<p>Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Praeteritis, inquit, gaudeo. Conclusum est enim contra Cyrenaicos satis acute, nihil ad Epicurum. Sed tamen est aliquid, quod nobis non liceat, liceat illis. His enim rebus detractis negat se reperire in asotorum vita quod reprehendat. Hoc sic expositum dissimile est superiori. Non quaero, quid dicat, sed quid convenienter possit rationi et sententiae suae dicere. Sit enim idem caecus, debilis. </p>\r\n\r\n<p>Fortemne possumus dicere eundem illum Torquatum? Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. Praetereo multos, in bis doctum hominem et suavem, Hieronymum, quem iam cur Peripateticum appellem nescio. Rationis enim perfectio est virtus; Minime vero istorum quidem, inquit. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Est enim tanti philosophi tamque nobilis audacter sua decreta defendere. An ea, quae per vinitorem antea consequebatur, per se ipsa curabit? </p>\r\n\r\n<p>Thanks,</p><p>Rana Jefferson</p>",
    "Email": "ranajefferson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Callie Weiss"
    ],
    "BCCMail": [
      "callieweiss@syncfusion.com"
    ],
    "To": "Igor Hyde",
    "ToMail": "igorhyde@syncfusion.com",
    "Image": "assets/images/images/44.png",
    "Time": "1.18 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10029",
    "text": "krystine hobson",
    "ContactTitle": "Opening for Sales Manager",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Sed virtutem ipsam inchoavit, nihil amplius. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Sed ad haec, nisi molestum est, habeo quae velim. Illa argumenta propria videamus, cur omnia sint paria peccata. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Age, inquies, ista parva sunt. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Contemnit enim disserendi elegantiam, confuse loquitur. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. Tollenda est atque extrahenda radicitus. Certe, nisi voluptatem tanti aestimaretis. </p>\r\n\r\n<p>Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Tubulo putas dicere? Bestiarum vero nullum iudicium puto. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Non semper, inquam; Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Nondum autem explanatum satis, erat, quid maxime natura vellet. </p>\r\n\r\n<p>Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nonne igitur tibi videntur, inquit, mala? Nam si +omnino nos+ neglegemus, in Aristonea vitia incidemus et peccata obliviscemurque quae virtuti ipsi principia dederimus; Cur deinde Metrodori liberos commendas? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Quis istud possit, inquit, negare? Nos commodius agimus. Quorum sine causa fieri nihil putandum est. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? </p>\r\n\r\n<p>An haec ab eo non dicuntur? Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Nemo nostrum istius generis asotos iucunde putat vivere. </p>\r\n\r\n<p>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Iam id ipsum absurdum, maximum malum neglegi. Sed quae tandem ista ratio est? Tibi hoc incredibile, quod beatissimum. Quae in controversiam veniunt, de iis, si placet, disseramus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Si mala non sunt, iacet omnis ratio Peripateticorum. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nulla profecto est, quin suam vim retineat a primo ad extremum. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<p>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Iam id ipsum absurdum, maximum malum neglegi. Non enim, si malum est dolor, carere eo malo satis est ad bene vivendum. </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Ethan Kidd"
    ],
    "CCMail": [
      "ethankidd@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/46.png",
    "Time": "1.2 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10157",
    "text": "Hector Harding",
    "ContactTitle": "Hospitality Committee",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Duo Reges: constructio interrete. An eiusdem modi? Pugnant Stoici cum Peripateticis. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Si enim ad populum me vocas, eum. Quis est tam dissimile homini. Estne, quaeso, inquam, sitienti in bibendo voluptas? Ut aliquid scire se gaudeant? Satis est ad hoc responsum. Quantum Aristoxeni ingenium consumptum videmus in musicis? </p>\r\n\r\n<p>Sullae consulatum? Minime vero, inquit ille, consentit. Haeret in salebra. </p>\r\n\r\n<p>Facillimum id quidem est, inquam. Itaque his sapiens semper vacabit. Sint modo partes vitae beatae. Nihil enim iam habes, quod ad corpus referas; Equidem e Cn. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Sed nimis multa.</dfn></dt>\r\n\t<dd>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</dd>\r\n\t<dt><dfn>Nihil sane.</dfn></dt>\r\n\t<dd>Nos autem non solum beatae vitae istam esse oblectationem videmus, sed etiam levamentum miseriarum.</dd>\r\n\t<dt><dfn>Si quae forte-possumus.</dfn></dt>\r\n\t<dd>Duo enim genera quae erant, fecit tria.</dd>\r\n\t<dt><dfn>Scrupulum, inquam, abeunti;</dfn></dt>\r\n\t<dd>De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.</dd>\r\n</dl>\r\n\r\n\r\n<p>Iam in altera philosophiae parte. Torquatus, is qui consul cum Cn. Restinguet citius, si ardentem acceperit. Bonum valitudo: miser morbus. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thanks,</p><p>Hector Harding</p>",
    "Email": "hectorharding@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/2.png",
    "Time": "1.23 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10217",
    "text": "Clare Heath",
    "ContactTitle": "Programmer Position - Jane Doe Application",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Sed ad illum redeo. Ille incendat? Stoicos roga. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. </p>\r\n\r\n<p>Sed nimis multa. Ea possunt paria non esse. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Iam id ipsum absurdum, maximum malum neglegi. Quid de Platone aut de Democrito loquar? Neutrum vero, inquit ille. Quid enim de amicitia statueris utilitatis causa expetenda vides. </p>\r\n\r\n<p>Si quae forte-possumus. Sed ad illum redeo. </p>\r\n\r\n<p>Quis Aristidem non mortuum diligit? Confecta res esset. Ita fit cum gravior, tum etiam splendidior oratio. Videmus igitur ut conquiescere ne infantes quidem possint. Aliter enim nosmet ipsos nosse non possumus. Ea possunt paria non esse. </p>\r\n\r\n<p>Quae sequuntur igitur? Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Cur post Tarentum ad Archytam? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Eam tum adesse, cum dolor omnis absit; Sed ad bona praeterita redeamus. Hic ambiguo ludimur. </p>\r\n\r\n<p>Satis est ad hoc responsum. Sed plane dicit quod intellegit. Summus dolor plures dies manere non potest? Murenam te accusante defenderem. Quis istud possit, inquit, negare? Summum enim bonum exposuit vacuitatem doloris; Eadem fortitudinis ratio reperietur. </p>\r\n\r\n<p>Regards,</p><p>Clare Heath</p>",
    "Email": "clareheath@syncfusion.com",
    "CC": [
      "Jade Gallegos"
    ],
    "CCMail": [
      "jadegallegos@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "1.28 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10192",
    "text": "Amaya Singleton",
    "ContactTitle": "Application for the post of an IT analyst",
    "Message": "<p>Hi Amanda Hardin,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Duo Reges: constructio interrete. Negat enim summo bono afferre incrementum diem. Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Quid de Pythagora?</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Cur iustitia laudatur?</dfn></dt>\r\n\t<dd>Odium autem et invidiam facile vitabis.</dd>\r\n</dl>\r\n\r\n\r\n<p>At iste non dolendi status non vocatur voluptas. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Inde sermone vario illa a Dipylo stadia confecimus. Inde sermone vario illa a Dipylo stadia confecimus. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Non quam nostram quidem, inquit Pomponius iocans; Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. </p>\r\n\r\n<p>Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Neque solum ea communia, verum etiam paria esse dixerunt. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Certe nihil nisi quod possit ipsum propter se iure laudari. Non autem hoc: igitur ne illud quidem. </p>\r\n\r\n<p>Thanks,</p><p>Amaya Singleton</p>",
    "Email": "amayasingleton@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Ivan Fitzpatrick"
    ],
    "BCCMail": [
      "ivanfitzpatrick@syncfusion.com"
    ],
    "To": "Amanda Hardin",
    "ToMail": "amandahardin@syncfusion.com",
    "Image": "assets/images/images/44.png",
    "Time": "1.3 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10158",
    "text": "Juliet Barlow",
    "ContactTitle": "Invitation for farewell party of Mr",
    "Message": "<p>Hi Tamara Knox,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Idem adhuc; Non potes, nisi retexueris illa. Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Duo Reges: constructio interrete. Erat enim Polemonis. </p>\r\n\r\n<p>Videamus igitur sententias eorum, tum ad verba redeamus. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ut in geometria, prima si dederis, danda sunt omnia. Duo enim genera quae erant, fecit tria. </p>\r\n\r\n<pre>Eamne rationem igitur sequere, qua tecum ipse et cum tuis\r\nutare, profiteri et in medium proferre non audeas?\r\n\r\nQuid paulo ante, inquit, dixerim nonne meministi, cum omnis\r\ndolor detractus esset, variari, non augeri voluptatem?\r\n</pre>\r\n\r\n<p>Estne, quaeso, inquam, sitienti in bibendo voluptas? Sed quid attinet de rebus tam apertis plura requirere? Nunc vides, quid faciat. Sed quod proximum fuit non vidit. Quae cum dixisset paulumque institisset, Quid est? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Ille igitur vidit, non modo quot fuissent adhuc philosophorum de summo bono, sed quot omnino esse possent sententiae. Suam denique cuique naturam esse ad vivendum ducem. Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? At hoc in eo M. </p>\r\n\r\n\r\n<p>Thanks,</p><p>Juliet Barlow</p>",
    "Email": "julietbarlow@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Tamara Knox",
    "ToMail": "tamaraknox@syncfusion.com",
    "Image": "assets/images/images/55.png",
    "Time": "1.4 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10139",
    "text": "Guinevere Gilmore",
    "ContactTitle": "Anything I can help with",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Bestiarum vero nullum iudicium puto. Quid ergo hoc loco intellegit honestum? Duo Reges: constructio interrete. Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>\r\n\r\n<ul>\r\n\t<li>An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?</li>\r\n\t<li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li>\r\n\t<li>A mene tu?</li>\r\n\t<li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>\r\n</ul>\r\n\r\n\r\n<p>Iam enim adesse poterit. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Non laboro, inquit, de nomine. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. </p>\r\n\r\n<p>Hoc enim constituto in philosophia constituta sunt omnia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Laelius clamores sofow ille so lebat Edere compellans gumias ex ordine nostros. Quorum sine causa fieri nihil putandum est. An est aliquid, quod te sua sponte delectet? Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Quod autem ratione actum est, id officium appellamus. </p>\r\n\r\n<p>Regards,</p><p>Guinevere Gilmore</p>",
    "Email": "guineveregilmore@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/6.png",
    "Time": "1.45 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10035",
    "text": "krystine hobson",
    "ContactTitle": "Proposition for a new business",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Autumn Shepherd"
    ],
    "CCMail": [
      "autumnshepherd@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/18.png",
    "Time": "1.16 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10112",
    "text": "Colette Wooten",
    "ContactTitle": "Invitation for farewell party of Mr",
    "Message": "<p>Hi Kerry Best,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Thanks,</p><p>Colette Wooten</p>",
    "Email": "colettewooten@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/39.png",
    "Time": "1.21 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10114",
    "text": "Rebekah Mcdowell",
    "ContactTitle": "Marketing Team",
    "Message": "<p>Hi Wanda Casey,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Ut id aliis narrare gestiant? Quam illa ardentis amores excitaret sui! Cur tandem? Quonam, inquit, modo? Duo Reges: constructio interrete. Aliter enim explicari, quod quaeritur, non potest. </p>\r\n\r\n<p>Videsne quam sit magna dissensio? Sin aliud quid voles, postea. De hominibus dici non necesse est. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Torquatus, is qui consul cum Cn. </p>\r\n\r\n<p>Traditur, inquit, ab Epicuro ratio neglegendi doloris. Simus igitur contenti his. Istic sum, inquit. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quid de Pythagora? Si enim ad populum me vocas, eum. Esse enim quam vellet iniquus iustus poterat inpune. Verum hoc idem saepe faciamus. Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Vide, quaeso, rectumne sit.</dfn></dt>\r\n\t<dd>Sed in rebus apertissimis nimium longi sumus.</dd>\r\n\t<dt><dfn>Tu quidem reddes;</dfn></dt>\r\n\t<dd>Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.</dd>\r\n\t<dt><dfn>Pollicetur certe.</dfn></dt>\r\n\t<dd>Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt;</dd>\r\n</dl>\r\n\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Quae duo sunt, unum facit. Scisse enim te quis coarguere possit? Primum divisit ineleganter; Zenonis est, inquam, hoc Stoici. Sed videbimus. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Quae sequuntur igitur? Urgent tamen et nihil remittunt. Quae duo sunt, unum facit. Compensabatur, inquit, cum summis doloribus laetitia. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Sic enim censent, oportunitatis esse beate vivere. Tuo vero id quidem, inquam, arbitratu. Aliter homines, aliter philosophos loqui putas oportere? Quid enim est a Chrysippo praetermissum in Stoicis? Quae sequuntur igitur? </p>\r\n\r\n<p>Thanks,</p><p>Rebekah Mcdowell</p>",
    "Email": "rebekahmcdowell@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Halla Hendricks",
      "Tamara Knox"
    ],
    "BCCMail": [
      "hallahendricks@syncfusion.com",
      "tamaraknox@syncfusion.com"
    ],
    "To": "Wanda Casey",
    "ToMail": "wandacasey@syncfusion.com",
    "Image": "assets/images/images/31.png",
    "Time": "1.22 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10038",
    "text": "krystine hobson",
    "ContactTitle": "Sales Team",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Efficiens dici potest. Nondum autem explanatum satis, erat, quid maxime natura vellet. Duo Reges: constructio interrete. Gloriosa ostentatio in constituendo summo bono. </p>\r\n\r\n<p>Nam Pyrrho, Aristo, Erillus iam diu abiecti. Non est ista, inquam, Piso, magna dissensio. </p>\r\n\r\n<pre>Quocirca intellegi necesse est in ipsis rebus, quae\r\ndiscuntur et cognoscuntur, invitamenta inesse, quibus ad\r\ndiscendum cognoscendumque moveamur.\r\n\r\nNon pugnem cum homine, cur tantum habeat in natura boni;\r\n</pre>\r\n\r\n\r\n<p>Cur, nisi quod turpis oratio est? De vacuitate doloris eadem sententia erit. Bestiarum vero nullum iudicium puto. Vestri haec verecundius, illi fortasse constantius. Ille enim occurrentia nescio quae comminiscebatur; Illa tamen simplicia, vestra versuta. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Si quae forte-possumus. </p>\r\n\r\n<ol>\r\n\t<li>Tamen a proposito, inquam, aberramus.</li>\r\n\t<li>Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali.</li>\r\n\t<li>Nos cum te, M.</li>\r\n\t<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>\r\n\t<li>Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur.</li>\r\n</ol>\r\n\r\n\r\n<p>Philosophi autem in suis lectulis plerumque moriuntur. Sed potestne rerum maior esse dissensio? Haec dicuntur inconstantissime. Videsne quam sit magna dissensio? Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Sincerely,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Lareina Downs",
      "Rebekah Mcdowell"
    ],
    "CCMail": [
      "lareinadowns@syncfusion.com",
      "rebekahmcdowell@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/7.png",
    "Time": "1.29 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10003",
    "text": "Richelle Mead",
    "ContactTitle": "Apology for late response email",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Non est igitur summum malum dolor. Duo enim genera quae erant, fecit tria. At iam decimum annum in spelunca iacet. Cave putes quicquam esse verius. Sed plane dicit quod intellegit. Duo Reges: constructio interrete. Restatis igitur vos; </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Tria genera bonorum;</dfn></dt>\r\n\t<dd>Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Quo modo autem philosophus loquitur?</dd>\r\n\t<dt><dfn>Falli igitur possumus.</dfn></dt>\r\n\t<dd>Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.</dd>\r\n</dl>\r\n\r\n\r\n<p>Tecum optime, deinde etiam cum mediocri amico. Restatis igitur vos; Sed quot homines, tot sententiae; Memini me adesse P. Istam voluptatem, inquit, Epicurus ignorat? Quare ad ea primum, si videtur; Peccata paria. Ut aliquid scire se gaudeant? </p>\r\n\r\n<p>Minime vero, inquit ille, consentit. Tenent mordicus. Verum hoc idem saepe faciamus. Suo genere perveniant ad extremum; </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sed ne, dum huic obsequor, vobis molestus sim. Maximus dolor, inquit, brevis est. Tria genera bonorum; Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>\r\n\r\n<p>Sed ego in hoc resisto; Tenent mordicus. Nam ista vestra: Si gravis, brevis; Equidem e Cn. </p>\r\n\r\n<p>Qui est in parvis malis. Sed ad bona praeterita redeamus. Ita prorsus, inquam; Nunc omni virtuti vitium contrario nomine opponitur. Sed nimis multa. Que Manilium, ab iisque M. </p>\r\n\r\n<p>Esse enim quam vellet iniquus iustus poterat inpune. Deprehensus omnem poenam contemnet. Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Hector Harding"
    ],
    "CCMail": [
      "hectorharding@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/44.png",
    "Time": "1.31 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10065",
    "text": "Chelsea Bass",
    "ContactTitle": "Hospitality Committee",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam de isto magna dissensio est. Ut aliquid scire se gaudeant? Sed tamen intellego quid velit. Non est igitur voluptas bonum. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Nam quid possumus facere melius? De quibus cupio scire quid sentias. An potest, inquit ille, quicquam esse suavius quam nihil dolere? Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Erat enim Polemonis.</dfn></dt>\r\n\t<dd>Inde sermone vario <i>[redacted]</i> illa a Dipylo stadia confecimus.</dd>\r\n\t<dt><dfn>Avaritiamne minuis?</dfn></dt>\r\n\t<dd>Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum.</dd>\r\n\t<dt><dfn>Sumenda potius quam expetenda.</dfn></dt>\r\n\t<dd>Audax negotium, dicerem impudens, nisi hoc institutum postea translatum ad philosophos nostros esset.</dd>\r\n\t<dt><dfn>Quid iudicant sensus?</dfn></dt>\r\n\t<dd>Ita fit cum gravior, tum etiam splendidior oratio.</dd>\r\n</dl>\r\n\r\n\r\n<p>Quid censes in Latino fore? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Yours,</p><p>Chelsea Bass</p>",
    "Email": "chelseabass@syncfusion.com",
    "CC": [
      "Meghan Wilkinson"
    ],
    "CCMail": [
      "meghanwilkinson@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "1.35 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10009",
    "text": "Richelle Mead",
    "ContactTitle": "Assistant Marketing Department",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/20.png",
    "Time": "1.44 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10034",
    "text": "krystine hobson",
    "ContactTitle": "Project Manager Interview",
    "Message": "<p>Dear Georgia Church,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas? <b>Quae similitudo in genere etiam humano apparet.</b> Prodest, inquit, mihi eo esse animo. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quo studio Aristophanem putamus aetatem in litteris duxisse? Bonum negas esse divitias, praepos�tum esse dicis? Et quidem, inquit, vehementer errat; Aliter enim explicari, quod quaeritur, non potest. Itaque fecimus. </p>\r\n\r\n<p>Sed ego in hoc resisto; Tum Torquatus: Prorsus, inquit, assentior; <i>Eam tum adesse, cum dolor omnis absit;</i> Erit enim mecum, si tecum erit. </p>\r\n\r\n<ul>\r\n\t<li>Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</li>\r\n\t<li>Prioris generis est docilitas, memoria;</li>\r\n\t<li>Qui non moveatur et offensione turpitudinis et comprobatione honestatis?</li>\r\n\t<li>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.</li>\r\n</ul>\r\n\r\n\r\n<p>Duarum enim vitarum nobis erunt instituta capienda. Eadem fortitudinis ratio reperietur. Utram tandem linguam nescio? Consequentia exquirere, quoad sit id, quod volumus, effectum. Consequentia exquirere, quoad sit id, quod volumus, effectum. </p>\r\n\r\n<p>Sincerely,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Idona Stanton"
    ],
    "BCCMail": [
      "idonastanton@syncfusion.com"
    ],
    "To": "Georgia Church",
    "ToMail": "georgiachurch@syncfusion.com",
    "Image": "assets/images/images/41.png",
    "Time": "1.47 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10218",
    "text": "Regan Haney",
    "ContactTitle": "Project Manager Interview",
    "Message": "<p>Hello Kerry Best,</p><p>LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NON IGITUR POTESTIS VOLUPTATE OMNIA DIRIGENTES AUT TUERI AUT RETINERE VIRTUTEM. IN EO ENIM POSITUM EST ID, QUOD DICIMUS ESSE EXPETENDUM. QUI-VERE FALSONE, QUAERERE MITTIMUS-DICITUR OCULIS SE PRIVASSE; DUO REGES: CONSTRUCTIO INTERRETE. QUIS CONTRA IN ILLA AETATE PUDOREM, CONSTANTIAM, ETIAMSI SUA NIHIL INTERSIT, NON TAMEN DILIGAT? </p>\r\n\r\n<p>SCIENTIAM POLLICENTUR, QUAM NON ERAT MIRUM SAPIENTIAE CUPIDO PATRIA ESSE CARIOREM. COMPENSABATUR, INQUIT, CUM SUMMIS DOLORIBUS LAETITIA. QUOD CUM DIXISSENT, ILLE CONTRA. SED AD HAEC, NISI MOLESTUM EST, HABEO QUAE VELIM. AT CUM DE PLURIMIS EADEM DICIT, TUM CERTE DE MAXIMIS. SIC ENIM CENSENT, OPORTUNITATIS ESSE BEATE VIVERE. </p>\r\n\r\n<p>DICI ENIM NIHIL POTEST VERIUS. VIDESNE, UT HAEC CONCINANT? NAM, UT SINT ILLA VENDIBILIORA, HAEC UBERIORA CERTE SUNT. AB HIS ORATORES, AB HIS IMPERATORES AC RERUM PUBLICARUM PRINCIPES EXTITERUNT. SED TU ISTUC DIXTI BENE LATINE, PARUM PLANE. IAM QUAE CORPORIS SUNT, EA NEC AUCTORITATEM CUM ANIMI PARTIBUS, COMPARANDAM ET COGNITIONEM HABENT FACILIOREM. PRIMUM IN NOSTRANE POTESTATE EST, QUID MEMINERIMUS? </p>\r\n\r\n<p>Regards,</p><p>Regan Haney</p>",
    "Email": "reganhaney@syncfusion.com",
    "CC": [
      "Leigh Rosales",
      "Maggy Randall"
    ],
    "CCMail": [
      "leighrosales@syncfusion.com",
      "maggyrandall@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/37.png",
    "Time": "1.55 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10007",
    "text": "Richelle Mead",
    "ContactTitle": "Application for Transfer",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non est ista, inquam, Piso, magna dissensio. Eademne, quae restincta siti? Praeclarae mortes sunt imperatoriae; Sit hoc ultimum bonorum, quod nunc a me defenditur; Duo Reges: constructio interrete. </p>\r\n\r\n<ul>\r\n\t<li>Quid censes in Latino fore?</li>\r\n\t<li>Pauca mutat vel plura sane;</li>\r\n\t<li>Sed mehercule pergrata mihi oratio tua.</li>\r\n</ul>\r\n\r\n\r\n<p>Illud non continuo, ut aeque incontentae. Aliter homines, aliter philosophos loqui putas oportere? Tollenda est atque extrahenda radicitus. Itaque ab his ordiamur. Sed ad haec, nisi molestum est, habeo quae velim. </p>\r\n\r\n<p>Id <i>[redacted]</i>tilius factum negabat. Occultum facinus esse potuerit, gaudebit; Haec dicuntur inconstantissime. Non quam nostram quidem, inquit Pomponius iocans; </p>\r\n\r\n<pre>Nam ceteris in rebus sive praetermissum sive ignoratum est\r\nquippiam, non plus incommodi est, quam quanti quaeque earum\r\nrerum est, in quibus neglectum est aliquid.\r\n\r\nIdne consensisse de Calatino plurimas gentis arbitramur,\r\nprimarium populi fuisse, quod praestantissimus fuisset in\r\nconficiendis voluptatibus?\r\n</pre>\r\n\r\n\r\n<p>Quod equidem non reprehendo; Expectoque quid ad id, quod quaerebam, respondeas. Nunc vides, quid faciat. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Duo enim genera quae erant, fecit tria. Hoc non est positum in nostra actione. Pauca mutat vel plura sane; <code>Sed hoc sane concedamus.</code> </p>\r\n\r\n<p>Best wishes,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Amelia Curtis",
      "Sophia Mercado"
    ],
    "CCMail": [
      "ameliacurtis@syncfusion.com",
      "sophiamercado@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/35.png",
    "Time": "2.1 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10177",
    "text": "Simone Barnes",
    "ContactTitle": "Sandra Smith Update",
    "Message": "<p>Hi Fletcher Beck,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tu enim ista lenius, hic Stoicorum more nos vexat. Fortemne possumus dicere eundem illum Torquatum? Duo Reges: constructio interrete. Sed ille, ut dixi, vitiose. <mark>Itaque hic ipse iam pridem est reiectus;</mark> Non igitur de improbo, sed de callido improbo quaerimus, qualis Q. Atqui reperies, inquit, in hoc quidem pertinacem; Philosophi autem in suis lectulis plerumque moriuntur. </p>\r\n\r\n<p>An vero, inquit, quisquam potest probare, quod perceptfum, quod. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Solum praeterea formosum, solum liberum, solum civem, stultost; Ita enim vivunt quidam, ut eorum vita refellatur oratio. Quid ad utilitatem tantae pecuniae? Nos commodius agimus. Non autem hoc: igitur ne illud quidem. Post enim Chrysippum eum non sane est disputatum. </p>\r\n\r\n<p><b>Iam in altera philosophiae parte.</b> Non risu potius quam oratione eiciendum? Non quam nostram quidem, inquit Pomponius iocans; An potest, inquit ille, quicquam esse suavius quam nihil dolere? Fieri, inquam, Triari, nullo pacto potest, ut non dicas, quid non probes eius, a quo dissentias. Nec vero pietas adversus deos nec quanta iis gratia debeatur sine explicatione naturae intellegi potest. <mark>Tibi hoc incredibile, quod beatissimum.</mark> <b>Apud ceteros autem philosophos, qui quaesivit aliquid, tacet;</b> </p>\r\n\r\n<p>Negat enim summo bono afferre incrementum diem. Aeque enim contingit omnibus fidibus, ut incontentae sint. <mark>Non enim solum Torquatus dixit quid sentiret, sed etiam cur.</mark> Ut in geometria, prima si dederis, danda sunt omnia. Bonum incolumis acies: misera caecitas. Omnia contraria, quos etiam insanos esse vultis. <b>Summus dolor plures dies manere non potest?</b> Hoc tu nunc in illo probas. </p>\r\n\r\n<p>Thanks,</p><p>Simone Barnes</p>",
    "Email": "simonebarnes@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Stella Calderon"
    ],
    "BCCMail": [
      "stellacalderon@syncfusion.com"
    ],
    "To": "Fletcher Beck",
    "ToMail": "fletcherbeck@syncfusion.com",
    "Image": "assets/images/images/5.png",
    "Time": "2.18 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10219",
    "text": "Stella Calderon",
    "ContactTitle": "Proposition for a new business",
    "Message": "<p>Dear Gail Pierce,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Confecta res esset. Cupiditates non Epicuri divisione finiebat, sed sua satietate. Duo Reges: constructio interrete. An eiusdem modi? Pugnant Stoici cum Peripateticis. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Si enim ad populum me vocas, eum. Quis est tam dissimile homini. Estne, quaeso, inquam, sitienti in bibendo voluptas? Ut aliquid scire se gaudeant? Satis est ad hoc responsum. Quantum Aristoxeni ingenium consumptum videmus in musicis? </p>\r\n\r\n<p>Sullae consulatum? Minime vero, inquit ille, consentit. Haeret in salebra. </p>\r\n\r\n<p>Facillimum id quidem est, inquam. Itaque his sapiens semper vacabit. Sint modo partes vitae beatae. Nihil enim iam habes, quod ad corpus referas; Equidem e Cn. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Sed nimis multa.</dfn></dt>\r\n\t<dd>Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere?</dd>\r\n\t<dt><dfn>Nihil sane.</dfn></dt>\r\n\t<dd>Nos autem non solum beatae vitae istam esse oblectationem videmus, sed etiam levamentum miseriarum.</dd>\r\n\t<dt><dfn>Si quae forte-possumus.</dfn></dt>\r\n\t<dd>Duo enim genera quae erant, fecit tria.</dd>\r\n\t<dt><dfn>Scrupulum, inquam, abeunti;</dfn></dt>\r\n\t<dd>De malis autem et bonis ab iis animalibus, quae nondum depravata sint, ait optime iudicari.</dd>\r\n</dl>\r\n\r\n\r\n<p>Iam in altera philosophiae parte. Torquatus, is qui consul cum Cn. Restinguet citius, si ardentem acceperit. Bonum valitudo: miser morbus. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Huius ego nunc auctoritatem sequens idem faciam. Praeclarae mortes sunt imperatoriae; Prodest, inquit, mihi eo esse animo. Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thank you,</p><p>Stella Calderon</p>",
    "Email": "stellacalderon@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Gail Pierce",
    "ToMail": "gailpierce@syncfusion.com",
    "Image": "assets/images/images/37.png",
    "Time": "2.4 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10151",
    "text": "Eleanor Cotton",
    "ContactTitle": "Congratulations On Your New Position",
    "Message": "<p>Hi Regan Haney,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Thanks,</p><p>Eleanor Cotton</p>",
    "Email": "eleanorcotton@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Leilani Mayer"
    ],
    "BCCMail": [
      "leilanimayer@syncfusion.com"
    ],
    "To": "Regan Haney",
    "ToMail": "reganhaney@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "2.41 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10108",
    "text": "Honorato Delgado",
    "ContactTitle": "Graduation Announcement",
    "Message": "<p>Hi Regan Hall,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Sed virtutem ipsam inchoavit, nihil amplius. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Sed ad haec, nisi molestum est, habeo quae velim. Illa argumenta propria videamus, cur omnia sint paria peccata. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Age, inquies, ista parva sunt. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Contemnit enim disserendi elegantiam, confuse loquitur. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. Tollenda est atque extrahenda radicitus. Certe, nisi voluptatem tanti aestimaretis. </p>\r\n\r\n<p>Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Tubulo putas dicere? Bestiarum vero nullum iudicium puto. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Non semper, inquam; Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Nondum autem explanatum satis, erat, quid maxime natura vellet. </p>\r\n\r\n<p>Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nonne igitur tibi videntur, inquit, mala? Nam si +omnino nos+ neglegemus, in Aristonea vitia incidemus et peccata obliviscemurque quae virtuti ipsi principia dederimus; Cur deinde Metrodori liberos commendas? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Quis istud possit, inquit, negare? Nos commodius agimus. Quorum sine causa fieri nihil putandum est. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? </p>\r\n\r\n<p>An haec ab eo non dicuntur? Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Nemo nostrum istius generis asotos iucunde putat vivere. </p>\r\n\r\n<p>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Iam id ipsum absurdum, maximum malum neglegi. Sed quae tandem ista ratio est? Tibi hoc incredibile, quod beatissimum. Quae in controversiam veniunt, de iis, si placet, disseramus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Si mala non sunt, iacet omnis ratio Peripateticorum. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nulla profecto est, quin suam vim retineat a primo ad extremum. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<p>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Iam id ipsum absurdum, maximum malum neglegi. Non enim, si malum est dolor, carere eo malo satis est ad bene vivendum. </p>\r\n\r\n<p>Thanks,</p><p>Honorato Delgado</p>",
    "Email": "honoratodelgado@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Mona Bates",
      "Leigh Rosales"
    ],
    "BCCMail": [
      "monabates@syncfusion.com",
      "leighrosales@syncfusion.com"
    ],
    "To": "Regan Hall",
    "ToMail": "reganhall@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "2.43 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10072",
    "text": "Yen Steele",
    "ContactTitle": "Software evaluation follow-up",
    "Message": "<p>Dear Daryl Valenzuela,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla profecto est, quin suam vim retineat a primo ad extremum. An haec ab eo non dicuntur? <b>Huius, Lyco, oratione locuples, rebus ipsis ielunior.</b> Duo Reges: constructio interrete. Illa argumenta propria videamus, cur omnia sint paria peccata. Sed quid attinet de rebus tam apertis plura requirere? </p>\r\n\r\n<p>Nam memini etiam quae nolo, oblivisci non possum quae volo. Tum Piso: Atqui, Cicero, inquit, ista studia, si ad imitandos summos viros spectant, ingeniosorum sunt; Idem adhuc; Sed haec nihil sane ad rem; Comprehensum, quod cognitum non habet? <b>Nemo igitur esse beatus potest.</b> <i>Aliter homines, aliter philosophos loqui putas oportere?</i> </p>\r\n\r\n<p>Tum ille timide vel potius verecunde: Facio, inquit. <mark>A mene tu?</mark> Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. Qua ex cognitione facilior facta est investigatio rerum occultissimarum. At enim hic etiam dolore. An tu me de L. Quodsi, ne quo incommodo afficiare, non relinques amicum, tamen, ne sine fructu alligatus sis, ut moriatur optabis. Idemque diviserunt naturam hominis in animum et corpus. Quod non faceret, si in voluptate summum bonum poneret. Nam his libris eum malo quam reliquo ornatu villae delectari. </p>\r\n\r\n<ul>\r\n\t<li>Sic, et quidem diligentius saepiusque ista loquemur inter nos agemusque communiter.</li>\r\n\t<li>Eadem nunc mea adversum te oratio est.</li>\r\n\t<li>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis.</li>\r\n\t<li>In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur.</li>\r\n</ul>\r\n\r\n\r\n<p>Yours,</p><p>Yen Steele</p>",
    "Email": "yensteele@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Byron Weiss",
      "Todd Hebert"
    ],
    "BCCMail": [
      "byronweiss@syncfusion.com",
      "toddhebert@syncfusion.com"
    ],
    "To": "Daryl Valenzuela",
    "ToMail": "darylvalenzuela@syncfusion.com",
    "Image": "assets/images/images/36.png",
    "Time": "2.47 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10090",
    "text": "Sharon Maxwell",
    "ContactTitle": "Training Announcement",
    "Message": "<p>Hi Imani Nieves,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Thanks,</p><p>Sharon Maxwell</p>",
    "Email": "sharonmaxwell@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Imani Nieves",
    "ToMail": "imaninieves@syncfusion.com",
    "Image": "assets/images/images/7.png",
    "Time": "2.5 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10135",
    "text": "Zachery Peters",
    "ContactTitle": "Today’s meeting schedule",
    "Message": "<p>Hello Leslie Juarez,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Cur post Tarentum ad Archytam? Facillimum id quidem est, inquam. Erat enim Polemonis. Satis est ad hoc responsum. Quonam, inquit, modo? Nam quid possumus facere melius? </p>\r\n\r\n<p>Respondeat totidem verbis. Qui convenit? Conferam tecum, quam cuique verso rem subicias; Re mihi non aeque satisfacit, et quidem locis pluribus. </p>\r\n\r\n<p>Cur deinde Metrodori liberos commendas? Eam stabilem appellas. Quid de Platone aut de Democrito loquar? Quid censes in Latino fore? Haec para/doca illi, nos admirabilia dicamus. Hoc tu nunc in illo probas. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Stoicos roga.</dfn></dt>\r\n\t<dd>Si quicquam extra virtutem habeatur in bonis.</dd>\r\n\t<dt><dfn>Recte dicis;</dfn></dt>\r\n\t<dd>Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.</dd>\r\n\t<dt><dfn>Certe non potest.</dfn></dt>\r\n\t<dd>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</dd>\r\n\t<dt><dfn>Idem adhuc;</dfn></dt>\r\n\t<dd>Cave putes quicquam esse verius.</dd>\r\n\t<dt><dfn>Paria sunt igitur.</dfn></dt>\r\n\t<dd>Hoc non est positum in nostra actione.</dd>\r\n</dl>\r\n\r\n\r\n<p>Videsne quam sit magna dissensio? Occultum facinus esse potuerit, gaudebit; Paria sunt igitur. </p>\r\n\r\n<p>Regards,</p><p>Zachery Peters</p>",
    "Email": "zacherypeters@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Zelda Walton",
      "Cameran Newman"
    ],
    "BCCMail": [
      "zeldawalton@syncfusion.com",
      "camerannewman@syncfusion.com"
    ],
    "To": "Leslie Juarez",
    "ToMail": "lesliejuarez@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "2.5 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10069",
    "text": "Stuart Morrison",
    "ContactTitle": "My life in New York",
    "Message": "<p>Dear Avram Kent,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quicquam extra virtutem habeatur in bonis. Nihil illinc huc pervenit. Duo Reges: constructio interrete. Omnia peccata paria dicitis. Sed ne, dum huic obsequor, vobis molestus sim. Quae sequuntur igitur? Quo modo autem optimum, si bonum praeterea nullum est? </p>\r\n\r\n<p>Nihil illinc huc pervenit. Videamus animi partes, quarum est conspectus illustrior; Beatus sibi videtur esse moriens. Haec quo modo conveniant, non sane intellego. Praeteritis, inquit, gaudeo. Quonam, inquit, modo? Equidem e Cn. </p>\r\n\r\n<p>Frater et T. Eam stabilem appellas. Praeteritis, inquit, gaudeo. Sed tamen intellego quid velit. Quid enim possumus hoc agere divinius? Quamquam tu hanc copiosiorem etiam soles dicere. </p>\r\n\r\n<p>Sin aliud quid voles, postea. Occultum facinus esse potuerit, gaudebit; Quid ad utilitatem tantae pecuniae? Quid est enim aliud esse versutum? Istam voluptatem perpetuam quis potest praestare sapienti? </p>\r\n\r\n<p>Pollicetur certe. Et nemo nimium beatus est; Quis negat? Disserendi artem nullam habuit. </p>\r\n\r\n<p>Sint modo partes vitae beatae. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Yours,</p><p>Stuart Morrison</p>",
    "Email": "stuartmorrison@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Ingrid Harding",
      "Uma Vance"
    ],
    "BCCMail": [
      "ingridharding@syncfusion.com",
      "umavance@syncfusion.com"
    ],
    "To": "Avram Kent",
    "ToMail": "avramkent@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "2.12 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10113",
    "text": "Leah Munoz",
    "ContactTitle": "Loan Application",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Efficiens dici potest. Nondum autem explanatum satis, erat, quid maxime natura vellet. Duo Reges: constructio interrete. Gloriosa ostentatio in constituendo summo bono. </p>\r\n\r\n<p>Nam Pyrrho, Aristo, Erillus iam diu abiecti. Non est ista, inquam, Piso, magna dissensio. </p>\r\n\r\n<pre>Quocirca intellegi necesse est in ipsis rebus, quae\r\ndiscuntur et cognoscuntur, invitamenta inesse, quibus ad\r\ndiscendum cognoscendumque moveamur.\r\n\r\nNon pugnem cum homine, cur tantum habeat in natura boni;\r\n</pre>\r\n\r\n\r\n<p>Cur, nisi quod turpis oratio est? De vacuitate doloris eadem sententia erit. Bestiarum vero nullum iudicium puto. Vestri haec verecundius, illi fortasse constantius. Ille enim occurrentia nescio quae comminiscebatur; Illa tamen simplicia, vestra versuta. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. Si quae forte-possumus. </p>\r\n\r\n<ol>\r\n\t<li>Tamen a proposito, inquam, aberramus.</li>\r\n\t<li>Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali.</li>\r\n\t<li>Nos cum te, M.</li>\r\n\t<li>Cum audissem Antiochum, Brute, ut solebam, cum M.</li>\r\n\t<li>Etsi ea quidem, quae adhuc dixisti, quamvis ad aetatem recte isto modo dicerentur.</li>\r\n</ol>\r\n\r\n\r\n<p>Philosophi autem in suis lectulis plerumque moriuntur. Sed potestne rerum maior esse dissensio? Haec dicuntur inconstantissime. Videsne quam sit magna dissensio? Cur, nisi quod turpis oratio est? </p>\r\n\r\n<p>Thanks,</p><p>Leah Munoz</p>",
    "Email": "leahmunoz@syncfusion.com",
    "CC": [
      "Elijah Berry",
      "Xanthus Harmon"
    ],
    "CCMail": [
      "elijahberry@syncfusion.com",
      "xanthusharmon@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "2.12 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10211",
    "text": "Mona Bates",
    "ContactTitle": "New business relationship confirmation",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Mene ergo et Triarium dignos existimas, apud quos turpiter loquare? Idem adhuc; Non potes, nisi retexueris illa. Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Duo Reges: constructio interrete. Erat enim Polemonis. </p>\r\n\r\n<p>Videamus igitur sententias eorum, tum ad verba redeamus. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; Tantum dico, magis fuisse vestrum agere Epicuri diem natalem, quam illius testamento cavere ut ageretur. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Ut in geometria, prima si dederis, danda sunt omnia. Duo enim genera quae erant, fecit tria. </p>\r\n\r\n<pre>Eamne rationem igitur sequere, qua tecum ipse et cum tuis\r\nutare, profiteri et in medium proferre non audeas?\r\n\r\nQuid paulo ante, inquit, dixerim nonne meministi, cum omnis\r\ndolor detractus esset, variari, non augeri voluptatem?\r\n</pre>\r\n\r\n<p>Estne, quaeso, inquam, sitienti in bibendo voluptas? Sed quid attinet de rebus tam apertis plura requirere? Nunc vides, quid faciat. Sed quod proximum fuit non vidit. Quae cum dixisset paulumque institisset, Quid est? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Ille igitur vidit, non modo quot fuissent adhuc philosophorum de summo bono, sed quot omnino esse possent sententiae. Suam denique cuique naturam esse ad vivendum ducem. Tum ille: Tu autem cum ipse tantum librorum habeas, quos hic tandem requiris? At hoc in eo M. </p>\r\n\r\n\r\n<p>Thank you,</p><p>Mona Bates</p>",
    "Email": "monabates@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/49.png",
    "Time": "2.17 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10161",
    "text": "Amber Holmes",
    "ContactTitle": "My life in New York",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prave, nequiter, turpiter cenabat; Facit enim ille duo seiuncta ultima bonorum, quae ut essent vera, coniungi debuerunt; Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest. </p>\r\n\r\n<p>Tum mihi Piso: Quid ergo? Illud dico, ea, quae dicat, praeclare inter se cohaerere. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Duo Reges: constructio interrete. Minime vero istorum quidem, inquit. Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; </p>\r\n\r\n<blockquote>\r\n\tAt iste non dolendi status non vocatur voluptas.\r\n</blockquote>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Quid turpius quam sapientis vitam ex insipientium sermone pendere? Scientiam pollicentur, quam non erat mirum sapientiae cupido patria esse cariorem. Huius ego nunc auctoritatem sequens idem faciam. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Si enim ita est, vide ne facinus facias, cum mori suadeas. Dici enim nihil potest verius. </p>\r\n\r\n<p>Yours,</p><p>Amber Holmes</p>",
    "Email": "amberholmes@syncfusion.com",
    "CC": [
      "Amanda Hardin"
    ],
    "CCMail": [
      "amandahardin@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/8.png",
    "Time": "2.25 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10111",
    "text": "Francesca Conner",
    "ContactTitle": "Hospitality Committee",
    "Message": "<p>Hi Patricia Boyle,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas? <b>Quae similitudo in genere etiam humano apparet.</b> Prodest, inquit, mihi eo esse animo. Mihi, inquam, qui te id ipsum rogavi? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quo studio Aristophanem putamus aetatem in litteris duxisse? Bonum negas esse divitias, praepos�tum esse dicis? Et quidem, inquit, vehementer errat; Aliter enim explicari, quod quaeritur, non potest. Itaque fecimus. </p>\r\n\r\n<p>Sed ego in hoc resisto; Tum Torquatus: Prorsus, inquit, assentior; <i>Eam tum adesse, cum dolor omnis absit;</i> Erit enim mecum, si tecum erit. </p>\r\n\r\n<ul>\r\n\t<li>Stulti autem malorum memoria torquentur, sapientes bona praeterita grata recordatione renovata delectant.</li>\r\n\t<li>Prioris generis est docilitas, memoria;</li>\r\n\t<li>Qui non moveatur et offensione turpitudinis et comprobatione honestatis?</li>\r\n\t<li>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit.</li>\r\n</ul>\r\n\r\n\r\n<p>Duarum enim vitarum nobis erunt instituta capienda. Eadem fortitudinis ratio reperietur. Utram tandem linguam nescio? Consequentia exquirere, quoad sit id, quod volumus, effectum. Consequentia exquirere, quoad sit id, quod volumus, effectum. </p>\r\n\r\n<p>Thanks,</p><p>Francesca Conner</p>",
    "Email": "francescaconner@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Nayda Tate"
    ],
    "BCCMail": [
      "naydatate@syncfusion.com"
    ],
    "To": "Patricia Boyle",
    "ToMail": "patriciaboyle@syncfusion.com",
    "Image": "assets/images/images/5.png",
    "Time": "2.26 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10123",
    "text": "Mercedes Rojas",
    "ContactTitle": "Party Invitation for Company’s Annual Day",
    "Message": "<p>Hello Amity Slater,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; Bonum patria: miserum exilium. Uterque enim summo bono fruitur, id est voluptate. An haec ab eo non dicuntur? Negat esse eam, inquit, propter se expetendam. Quid censes in Latino fore? Quid igitur, inquit, eos responsuros putas? Duo Reges: constructio interrete. Ubi ut eam caperet aut quando? </p>\r\n\r\n<p>Dat enim intervalla et relaxat. Idem iste, inquam, de voluptate quid sentit? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Tu quidem reddes; Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ecce aliud simile dissimile. </p>\r\n\r\n<p>Optime, inquam. An nisi populari fama? Bonum patria: miserum exilium. Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Hoc mihi cum tuo fratre convenit. At ille pellit, qui permulcet sensum voluptate. At multis malis affectus. Quid sequatur, quid repugnet, vident. Si quae forte-possumus. Quod non faceret, si in voluptate summum bonum poneret. </p>\r\n\r\n<p>Regards,</p><p>Mercedes Rojas</p>",
    "Email": "mercedesrojas@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Willow Frye",
      "Maggy Randall"
    ],
    "BCCMail": [
      "willowfrye@syncfusion.com",
      "maggyrandall@syncfusion.com"
    ],
    "To": "Amity Slater",
    "ToMail": "amityslater@syncfusion.com",
    "Image": "assets/images/images/48.png",
    "Time": "2.29 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10058",
    "text": "Cole Collier",
    "ContactTitle": "Confirmation of the business appointment",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facete M. Ego vero isti, inquam, permitto. Sed virtutem ipsam inchoavit, nihil amplius. Ut optime, secundum naturam affectum esse possit. Quae duo sunt, unum facit. Quod quidem iam fit etiam in Academia. Duo Reges: constructio interrete. Tecum optime, deinde etiam cum mediocri amico. </p>\r\n\r\n<p>Sed ad illum redeo. Ille incendat? Stoicos roga. Iubet igitur nos Pythius Apollo noscere nosmet ipsos. </p>\r\n\r\n<p>Sed nimis multa. Ea possunt paria non esse. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Iam id ipsum absurdum, maximum malum neglegi. Quid de Platone aut de Democrito loquar? Neutrum vero, inquit ille. Quid enim de amicitia statueris utilitatis causa expetenda vides. </p>\r\n\r\n<p>Si quae forte-possumus. Sed ad illum redeo. </p>\r\n\r\n<p>Quis Aristidem non mortuum diligit? Confecta res esset. Ita fit cum gravior, tum etiam splendidior oratio. Videmus igitur ut conquiescere ne infantes quidem possint. Aliter enim nosmet ipsos nosse non possumus. Ea possunt paria non esse. </p>\r\n\r\n<p>Quae sequuntur igitur? Eadem fortitudinis ratio reperietur. Bonum integritas corporis: misera debilitas. Tamen a proposito, inquam, aberramus. </p>\r\n\r\n<p>Cur post Tarentum ad Archytam? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Eam tum adesse, cum dolor omnis absit; Sed ad bona praeterita redeamus. Hic ambiguo ludimur. </p>\r\n\r\n<p>Satis est ad hoc responsum. Sed plane dicit quod intellegit. Summus dolor plures dies manere non potest? Murenam te accusante defenderem. Quis istud possit, inquit, negare? Summum enim bonum exposuit vacuitatem doloris; Eadem fortitudinis ratio reperietur. </p>\r\n\r\n<p>Yours,</p><p>Cole Collier</p>",
    "Email": "colecollier@syncfusion.com",
    "CC": [
      "Rana Jefferson"
    ],
    "CCMail": [
      "ranajefferson@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/14.png",
    "Time": "2.36 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10190",
    "text": "Connor George",
    "ContactTitle": "Application for Sales Associate",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sic consequentibus vestris sublatis prima tolluntur. <b>Sin aliud quid voles, postea.</b> <b>Quare attende, quaeso.</b> </p>\r\n\r\n<p><b>Sed tamen intellego quid velit.</b> <b>Hunc vos beatum;</b> <b>Et nemo nimium beatus est;</b> <b>Hanc ergo intuens debet institutum illud quasi signum absolvere.</b> Tubulo putas dicere? <b>Sed ne, dum huic obsequor, vobis molestus sim.</b> Quid ergo hoc loco intellegit honestum? Qua tu etiam inprudens utebare non numquam. </p>\r\n\r\n<p><b>Audeo dicere, inquit.</b> <i>Sed ille, ut dixi, vitiose.</i> Causa autem fuit huc veniendi ut quosdam hinc libros promerem. Summus dolor plures dies manere non potest? <mark>Moriatur, inquit.</mark> <b>Ea possunt paria non esse.</b> </p>\r\n\r\n<p><i>Omnia peccata paria dicitis.</i> Primum Theophrasti, Strato, physicum se voluit; Invidiosum nomen est, infame, suspectum. At coluit ipse amicitias. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Regards,</p><p>Connor George</p>",
    "Email": "connorgeorge@syncfusion.com",
    "CC": [
      "Ursula Vasquez"
    ],
    "CCMail": [
      "ursulavasquez@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/38.png",
    "Time": "2.38 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10124",
    "text": "Scarlet Casey",
    "ContactTitle": "Performance appraisal announcement",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Quam ob rem tandem, inquit, non satisfacit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>\r\n\r\n<p>Omnia peccata paria dicitis. Apparet statim, quae sint officia, quae actiones. Sed ad haec, nisi molestum est, habeo quae velim. Quid enim est a Chrysippo praetermissum in Stoicis? Quia dolori non voluptas contraria est, sed doloris privatio. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Bona autem corporis huic sunt, quod posterius posui, similiora. </p>\r\n\r\n<p>Age, inquies, ista parva sunt. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? </p>\r\n\r\n<ol>\r\n\t<li>Frater et T.</li>\r\n\t<li>An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P.</li>\r\n\t<li>Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat.</li>\r\n\t<li>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi.</li>\r\n</ol>\r\n\r\n\r\n<p>Regards,</p><p>Scarlet Casey</p>",
    "Email": "scarletcasey@syncfusion.com",
    "CC": [
      "Leo Cooley"
    ],
    "CCMail": [
      "leocooley@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/25.png",
    "Time": "2.4 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10133",
    "text": "Reuben Mercer",
    "ContactTitle": "Thank You Very Much!",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Dici enim nihil potest verius.</b> Respondent extrema primis, media utrisque, omnia omnibus. Egone non intellego, quid sit don Graece, Latine voluptas? Tu enim ista lenius, hic Stoicorum more nos vexat. Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere. Quod autem ratione actum est, id officium appellamus. Me igitur ipsum ames oportet, non mea, si veri amici futuri sumus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; <i>Summum enim bonum exposuit vacuitatem doloris;</i> </p>\r\n\r\n<ol>\r\n\t<li>Sed ne, dum huic obsequor, vobis molestus sim.</li>\r\n\t<li>Idem iste, inquam, de voluptate quid sentit?</li>\r\n\t<li>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</li>\r\n\t<li>Haec quo modo conveniant, non sane intellego.</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?</li>\r\n</ol>\r\n\r\n\r\n<p><mark>Omnis enim est natura diligens sui.</mark> Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. <b>At hoc in eo M.</b> Quid nunc honeste dicit? Ita multa dicunt, quae vix intellegam. Unum est sine dolore esse, alterum cum voluptate. Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? </p>\r\n\r\n<p>Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. <i>Quibusnam praeteritis?</i> Paulum, cum regem Persem captum adduceret, eodem flumine invectio? <b>Solum praeterea formosum, solum liberum, solum civem, stultost;</b> Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint. Ego vero isti, inquam, permitto. Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere. <mark>Scrupulum, inquam, abeunti;</mark> Summus dolor plures dies manere non potest? </p>\r\n\r\n<p>Regards,</p><p>Reuben Mercer</p>",
    "Email": "reubenmercer@syncfusion.com",
    "CC": [
      "Gretchen Justice"
    ],
    "CCMail": [
      "gretchenjustice@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/21.png",
    "Time": "2.43 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Drafts",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10210",
    "text": "Christine Pugh",
    "ContactTitle": "Software evaluation follow-up",
    "Message": "<p>Dear Amanda Hardin,</p><h4>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Illa sunt similia: hebes acies est cuipiam oculorum, corpore alius senescit; Et quod est munus, quod opus sapientiae? Duo Reges: constructio interrete. Non enim quaero quid verum, sed quid cuique dicendum sit. Quid adiuvas? </p>\r\n\r\n<p>Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Immo videri fortasse. Quod idem cum vestri faciant, non satis magnam tribuunt inventoribus gratiam. Tenent mordicus. Sed ego in hoc resisto; Illa argumenta propria videamus, cur omnia sint paria peccata. Quae quidem vel cum periculo est quaerenda vobis; -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. </p>\r\n\r\n<h4>Ego vero volo in virtute vim esse quam maximam;</h4>\r\n\r\n<p>Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Profectus in exilium Tubulus statim nec respondere ausus; Nulla profecto est, quin suam vim retineat a primo ad extremum. Aliter enim nosmet ipsos nosse non possumus. Utram tandem linguam nescio? Qui igitur convenit ab alia voluptate dicere naturam proficisci, in alia summum bonum ponere? Quis enim potest ea, quae probabilia videantur ei, non probare? Nihil enim iam habes, quod ad corpus referas; Ergo, inquit, tibi Q. Oratio me istius philosophi non offendit; </p>\r\n\r\n<p>Thank you,</p><p>Christine Pugh</p>",
    "Email": "christinepugh@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Gretchen Justice"
    ],
    "BCCMail": [
      "gretchenjustice@syncfusion.com"
    ],
    "To": "Amanda Hardin",
    "ToMail": "amandahardin@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "2.49 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10027",
    "text": "krystine hobson",
    "ContactTitle": "New business relationship confirmation",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Invidiosum nomen est, infame, suspectum.</mark> Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et comparari potest. Quid enim de amicitia statueris utilitatis causa expetenda vides. <mark>Cur, nisi quod turpis oratio est?</mark> Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <mark>Duo Reges: constructio interrete.</mark> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? </p>\r\n\r\n<p>At enim, qua in vita est aliquid mali, ea beata esse non potest. <i>Facile est hoc cernere in primis puerorum aetatulis.</i> Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae quo sunt excelsiores, eo dant clariora indicia naturae. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Non dolere, inquam, istud quam vim habeat postea videro; Est, ut dicis, inquit; </p>\r\n\r\n<p>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Huius ego nunc auctoritatem sequens idem faciam. Nihil illinc huc pervenit. <b>Non semper, inquam;</b> Tanta vis admonitionis inest in locis; Utilitatis causa amicitia est quaesita. </p>\r\n\r\n<p>Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quid iudicant sensus? Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quid enim de amicitia statueris utilitatis causa expetenda vides. Sit hoc ultimum bonorum, quod nunc a me defenditur; </p>\r\n\r\n<p>Sincerely,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "2.51 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10042",
    "text": "Brooke Barlow",
    "ContactTitle": "Thank you",
    "Message": "<p>Dear Desirae Burris,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Verba tu fingas et ea dicas, quae non sentias? Esse enim quam vellet iniquus iustus poterat inpune. Non dolere, inquam, istud quam vim habeat postea videro; Duarum enim vitarum nobis erunt instituta capienda. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Duo Reges: constructio interrete. Nec enim ignoras his istud honestum non summum modo, sed etiam, ut tu vis, solum bonum videri. Quibus ego vehementer assentior. Hoc Hieronymus summum bonum esse dixit. </p>\r\n\r\n<p>Summum enim bonum exposuit vacuitatem doloris; Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Tuo vero id quidem, inquam, arbitratu. Ait enim se, si uratur, Quam hoc suave! dicturum. Quam illa ardentis amores excitaret sui! Cur tandem? Estne, quaeso, inquam, sitienti in bibendo voluptas? Quid est, quod ab ea absolvi et perfici debeat? Verum hoc idem saepe faciamus. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. </p>\r\n\r\n<p>Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. Omnes enim iucundum motum, quo sensus hilaretur. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Cur id non ita fit? Inde igitur, inquit, ordiendum est. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Rhetorice igitur, inquam, nos mavis quam dialectice disputare? </p>\r\n\r\n<p>Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Atque ita re simpliciter primo collocata reliqua subtilius persequentes corporis bona facilem quandam rationem habere censebant; Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Ergo hoc quidem apparet, nos ad agendum esse natos. </p>\r\n\r\n<p>Yours,</p><p>Brooke Barlow</p>",
    "Email": "brookebarlow@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Meghan Wilkinson"
    ],
    "BCCMail": [
      "meghanwilkinson@syncfusion.com"
    ],
    "To": "Desirae Burris",
    "ToMail": "desiraeburris@syncfusion.com",
    "Image": "assets/images/images/25.png",
    "Time": "2.53 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10171",
    "text": "Aileen Perkins",
    "ContactTitle": "Programmer Position - Jane Doe Application",
    "Message": "<p>Hi Leilani Mayer,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eam tum adesse, cum dolor omnis absit; Bonum patria: miserum exilium. Uterque enim summo bono fruitur, id est voluptate. An haec ab eo non dicuntur? Negat esse eam, inquit, propter se expetendam. Quid censes in Latino fore? Quid igitur, inquit, eos responsuros putas? Duo Reges: constructio interrete. Ubi ut eam caperet aut quando? </p>\r\n\r\n<p>Dat enim intervalla et relaxat. Idem iste, inquam, de voluptate quid sentit? Huius, Lyco, oratione locuples, rebus ipsis ielunior. Tu quidem reddes; Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Ecce aliud simile dissimile. </p>\r\n\r\n<p>Optime, inquam. An nisi populari fama? Bonum patria: miserum exilium. Urgent tamen et nihil remittunt. </p>\r\n\r\n<p>Hoc mihi cum tuo fratre convenit. At ille pellit, qui permulcet sensum voluptate. At multis malis affectus. Quid sequatur, quid repugnet, vident. Si quae forte-possumus. Quod non faceret, si in voluptate summum bonum poneret. </p>\r\n\r\n<p>Thanks,</p><p>Aileen Perkins</p>",
    "Email": "aileenperkins@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Leilani Mayer",
    "ToMail": "leilanimayer@syncfusion.com",
    "Image": "assets/images/images/19.png",
    "Time": "2.16 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10167",
    "text": "Omar Curry",
    "ContactTitle": "Opening for Sales Manager",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Expectoque quid ad id, quod quaerebam, respondeas.</b> Omnes enim iucundum motum, quo sensus hilaretur. Diodorus, eius auditor, adiungit ad honestatem vacuitatem doloris. Restinguet citius, si ardentem acceperit. </p>\r\n\r\n<p>Iam in altera philosophiae parte. Idemque diviserunt naturam hominis in animum et corpus. Quia nec honesto quic quam honestius nec turpi turpius. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. Num igitur eum postea censes anxio animo aut sollicito fuisse? Primum in nostrane potestate est, quid meminerimus? </p>\r\n\r\n<p><mark>Deinde disputat, quod cuiusque generis animantium statui deceat extremum.</mark> An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? <mark>Hoc loco tenere se Triarius non potuit.</mark> <mark>Nunc haec primum fortasse audientis servire debemus.</mark> Mihi enim satis est, ipsis non satis. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Ita multo sanguine profuso in laetitia et in victoria est mortuus. An vero, inquit, quisquam potest probare, quod perceptfum, quod. Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Non dolere, inquam, istud quam vim habeat postea videro; </p>\r\n\r\n<p>Yours,</p><p>Omar Curry</p>",
    "Email": "omarcurry@syncfusion.com",
    "CC": [
      "Mia Parrish",
      "Ruth Cervantes"
    ],
    "CCMail": [
      "miaparrish@syncfusion.com",
      "ruthcervantes@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/33.png",
    "Time": "2.43 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10189",
    "text": "Stewart Gibbs",
    "ContactTitle": "Application for Job Title",
    "Message": "<p>Hello Gail Pierce,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A primo, ut opinor, animantium ortu petitur origo summi boni. Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Non enim, si omnia non sequebatur, idcirco non erat ortus illinc. Itaque sensibus rationem adiunxit et ratione effecta sensus non reliquit. Bestiarum vero nullum iudicium puto. Quid ergo hoc loco intellegit honestum? Duo Reges: constructio interrete. Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. </p>\r\n\r\n<ul>\r\n\t<li>An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat?</li>\r\n\t<li>Age nunc isti doceant, vel tu potius quis enim ista melius?</li>\r\n\t<li>A mene tu?</li>\r\n\t<li>Nam nec vir bonus ac iustus haberi debet qui, ne malum habeat, abstinet se ab iniuria.</li>\r\n</ul>\r\n\r\n\r\n<p>Iam enim adesse poterit. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Non laboro, inquit, de nomine. Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera. Gracchum patrem non beatiorem fuisse quam fillum, cum alter stabilire rem publicam studuerit, alter evertere. </p>\r\n\r\n<p>Hoc enim constituto in philosophia constituta sunt omnia. Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Laelius clamores sofow ille so lebat Edere compellans gumias ex ordine nostros. Quorum sine causa fieri nihil putandum est. An est aliquid, quod te sua sponte delectet? Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur. Quod autem ratione actum est, id officium appellamus. </p>\r\n\r\n<p>Regards,</p><p>Stewart Gibbs</p>",
    "Email": "stewartgibbs@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Leslie Juarez",
      "Oscar Mcconnell"
    ],
    "BCCMail": [
      "lesliejuarez@syncfusion.com",
      "oscarmcconnell@syncfusion.com"
    ],
    "To": "Gail Pierce",
    "ToMail": "gailpierce@syncfusion.com",
    "Image": "assets/images/images/34.png",
    "Time": "2.44 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10216",
    "text": "Xanthus Harmon",
    "ContactTitle": "Performance appraisal announcement",
    "Message": "<p>Dear Clare Heath,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Cur post Tarentum ad Archytam?</b> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Si enim non fuit eorum iudicii, nihilo magis hoc non addito illud est iudicatum-. Sed quia studebat laudi et dignitati, multum in virtute processerat. <b>An hoc usque quaque, aliter in vita?</b> Duo Reges: constructio interrete. </p>\r\n\r\n<p>Eam tum adesse, cum dolor omnis absit; <b>Apparet statim, quae sint officia, quae actiones.</b> Deinde disputat, quod cuiusque generis animantium statui deceat extremum. <b>Quae similitudo in genere etiam humano apparet.</b> </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Isto modo ne improbos quidem, si essent boni viri. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Quo plebiscito decreta a senatu est consuli quaestio Cn. Aliter homines, aliter philosophos loqui putas oportere? Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Teneo, inquit, finem illi videri nihil dolere. Color egregius, integra valitudo, summa gratia, vita denique conferta voluptatum omnium varietate. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. </p>\r\n\r\n<p>De ingenio eius in his disputationibus, non de moribus quaeritur. Non quam nostram quidem, inquit Pomponius iocans; Sed haec in pueris; Isto modo, ne si avia quidem eius nata non esset. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Thank you,</p><p>Xanthus Harmon</p>",
    "Email": "xanthusharmon@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Rina Solis",
      "Leigh Rosales"
    ],
    "BCCMail": [
      "rinasolis@syncfusion.com",
      "leighrosales@syncfusion.com"
    ],
    "To": "Clare Heath",
    "ToMail": "clareheath@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "2.47 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10174",
    "text": "Casey Mckenzie",
    "ContactTitle": "Reference Request - Desirae Burris",
    "Message": "<p>Hi Jade Gallegos,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod non faceret, si in voluptate summum bonum poneret. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Quem Tiberina descensio festo illo die tanto gaudio affecit, quanto L. Quam ob rem tandem, inquit, non satisfacit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. </p>\r\n\r\n<p>Omnia peccata paria dicitis. Apparet statim, quae sint officia, quae actiones. Sed ad haec, nisi molestum est, habeo quae velim. Quid enim est a Chrysippo praetermissum in Stoicis? Quia dolori non voluptas contraria est, sed doloris privatio. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Bona autem corporis huic sunt, quod posterius posui, similiora. </p>\r\n\r\n<p>Age, inquies, ista parva sunt. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Ne tum quidem te respicies et cogitabis sibi quemque natum esse et suis voluptatibus? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? </p>\r\n\r\n<ol>\r\n\t<li>Frater et T.</li>\r\n\t<li>An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P.</li>\r\n\t<li>Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat.</li>\r\n\t<li>Effluit igitur voluptas corporis et prima quaeque avolat saepiusque relinquit causam paenitendi quam recordandi.</li>\r\n</ol>\r\n\r\n\r\n<p>Thanks,</p><p>Casey Mckenzie</p>",
    "Email": "caseymckenzie@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Jade Gallegos",
    "ToMail": "jadegallegos@syncfusion.com",
    "Image": "assets/images/images/29.png",
    "Time": "2.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10212",
    "text": "Cheyenne Cline",
    "ContactTitle": "Office Holiday",
    "Message": "<p>Dear Kerry Best,</p><h4>Facillimum id quidem est, inquam.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vos autem cum perspicuis dubia debeatis illustrare, dubiis perspicua conamini tollere. Tum Torquatus: Prorsus, inquit, assentior; Tecum optime, deinde etiam cum mediocri amico. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Duo Reges: constructio interrete. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. </p>\r\n\r\n<p><b>Sed hoc sane concedamus.</b> Sit enim idem caecus, debilis. <mark>Eam tum adesse, cum dolor omnis absit;</mark> Dicam, inquam, et quidem discendi causa magis, quam quo te aut Epicurum reprehensum velim. Dic in quovis conventu te omnia facere, ne doleas. Quod cum accidisset ut alter alterum necopinato videremus, surrexit statim. Neque solum ea communia, verum etiam paria esse dixerunt. Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Ex ea difficultate illae fallaciloquae, ut ait Accius, malitiae natae sunt. </p>\r\n\r\n<pre>Qui est in parvis malis.\r\n\r\nEt homini, qui ceteris animantibus plurimum praestat,\r\npraecipue a natura nihil datum esse dicemus?\r\n</pre>\r\n\r\n\r\n<ol>\r\n\t<li>Aut unde est hoc contritum vetustate proverbium: quicum in tenebris?</li>\r\n\t<li>Quis Aristidem non mortuum diligit?</li>\r\n\t<li>Ab his oratores, ab his imperatores ac rerum publicarum principes extiterunt.</li>\r\n\t<li>Sed utrum hortandus es nobis, Luci, inquit, an etiam tua sponte propensus es?</li>\r\n</ol>\r\n\r\n\r\n<h4>Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur.</h4>\r\n\r\n<p>Etenim semper illud extra est, quod arte comprehenditur. Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam; Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit? Paulum, cum regem Persem captum adduceret, eodem flumine invectio? Quid de Platone aut de Democrito loquar? </p>\r\n\r\n<p>Thank you,</p><p>Cheyenne Cline</p>",
    "Email": "cheyennecline@syncfusion.com",
    "CC": [
      "Cheyenne Cline",
      "Willow Frye"
    ],
    "CCMail": [
      "cheyennecline@syncfusion.com",
      "willowfrye@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/53.png",
    "Time": "2.59 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Outbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10144",
    "text": "Rose Maldonado",
    "ContactTitle": "Application for Sales Associate",
    "Message": "<p>Hi Athena Mcintosh,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers? Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. Igitur neque stultorum quisquam beatus neque sapientium non beatus. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos. Duo Reges: constructio interrete. Negat enim summo bono afferre incrementum diem. Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Quid de Pythagora?</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Cur iustitia laudatur?</dfn></dt>\r\n\t<dd>Odium autem et invidiam facile vitabis.</dd>\r\n</dl>\r\n\r\n\r\n<p>At iste non dolendi status non vocatur voluptas. Sed finge non solum callidum eum, qui aliquid improbe faciat, verum etiam praepotentem, ut M. Inde sermone vario illa a Dipylo stadia confecimus. Inde sermone vario illa a Dipylo stadia confecimus. Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. Non quam nostram quidem, inquit Pomponius iocans; Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. </p>\r\n\r\n<p>Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Neque solum ea communia, verum etiam paria esse dixerunt. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Certe nihil nisi quod possit ipsum propter se iure laudari. Non autem hoc: igitur ne illud quidem. </p>\r\n\r\n<p>Thanks,</p><p>Rose Maldonado</p>",
    "Email": "rosemaldonado@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Hanna Benjamin",
      "Prescott Snow"
    ],
    "BCCMail": [
      "hannabenjamin@syncfusion.com",
      "prescottsnow@syncfusion.com"
    ],
    "To": "Athena Mcintosh",
    "ToMail": "athenamcintosh@syncfusion.com",
    "Image": "assets/images/images/36.png",
    "Time": "2.12 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10028",
    "text": "krystine hobson",
    "ContactTitle": "Office Holiday",
    "Message": "<p>Hello Mariko Jacobson,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Eadem nunc mea adversum te oratio est. <b>Primum in nostrane potestate est, quid meminerimus?</b> Expectoque quid ad id, quod quaerebam, respondeas. Quod autem in homine praestantissimum atque optimum est, id deseruit. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus. </p>\r\n\r\n<ul>\r\n\t<li>Quorum sine causa fieri nihil putandum est.</li>\r\n\t<li>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</li>\r\n</ul>\r\n\r\n\r\n<p>Non autem hoc: igitur ne illud quidem. Tum Quintus: Est plane, Piso, ut dicis, inquit. Contemnit enim disserendi elegantiam, confuse loquitur. Si id dicis, vicimus. Sed fortuna fortis; </p>\r\n\r\n<p><b>Aliter homines, aliter philosophos loqui putas oportere?</b> De illis, cum volemus. <b>Huius ego nunc auctoritatem sequens idem faciam.</b> Quid ait Aristoteles reliquique Platonis alumni? </p>\r\n\r\n<p>Regards,</p><p>krystine hobson</p>",
    "Email": "krystinehobson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Desirae Burris"
    ],
    "BCCMail": [
      "desiraeburris@syncfusion.com"
    ],
    "To": "Mariko Jacobson",
    "ToMail": "marikojacobson@syncfusion.com",
    "Image": "assets/images/images/17.png",
    "Time": "2.17 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "krystine hobson",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10183",
    "text": "Todd Thompson",
    "ContactTitle": "We launched new Product!",
    "Message": "<p>Hello Thor Harrison,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duo Reges: constructio interrete. Apud ceteros autem philosophos, qui quaesivit aliquid, tacet; Cur post Tarentum ad Archytam? Facillimum id quidem est, inquam. Erat enim Polemonis. Satis est ad hoc responsum. Quonam, inquit, modo? Nam quid possumus facere melius? </p>\r\n\r\n<p>Respondeat totidem verbis. Qui convenit? Conferam tecum, quam cuique verso rem subicias; Re mihi non aeque satisfacit, et quidem locis pluribus. </p>\r\n\r\n<p>Cur deinde Metrodori liberos commendas? Eam stabilem appellas. Quid de Platone aut de Democrito loquar? Quid censes in Latino fore? Haec para/doca illi, nos admirabilia dicamus. Hoc tu nunc in illo probas. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Stoicos roga.</dfn></dt>\r\n\t<dd>Si quicquam extra virtutem habeatur in bonis.</dd>\r\n\t<dt><dfn>Recte dicis;</dfn></dt>\r\n\t<dd>Quamquam in hac divisione rem ipsam prorsus probo, elegantiam desidero.</dd>\r\n\t<dt><dfn>Certe non potest.</dfn></dt>\r\n\t<dd>Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.</dd>\r\n\t<dt><dfn>Idem adhuc;</dfn></dt>\r\n\t<dd>Cave putes quicquam esse verius.</dd>\r\n\t<dt><dfn>Paria sunt igitur.</dfn></dt>\r\n\t<dd>Hoc non est positum in nostra actione.</dd>\r\n</dl>\r\n\r\n\r\n<p>Videsne quam sit magna dissensio? Occultum facinus esse potuerit, gaudebit; Paria sunt igitur. </p>\r\n\r\n<p>Regards,</p><p>Todd Thompson</p>",
    "Email": "toddthompson@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Thor Harrison",
      "Uma Vance"
    ],
    "BCCMail": [
      "thorharrison@syncfusion.com",
      "umavance@syncfusion.com"
    ],
    "To": "Thor Harrison",
    "ToMail": "thorharrison@syncfusion.com",
    "Image": "assets/images/images/2.png",
    "Time": "2.2 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10064",
    "text": "Lee Randall",
    "ContactTitle": "Home Furnishings",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Licet hic rursus ea commemores, quae optimis verbis ab Epicuro de laude amicitiae dicta sunt. Erat enim Polemonis. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. Primum cur ista res digna odio est, nisi quod est turpis? Idemne, quod iucunde? Scripta sane et multa et polita, sed nescio quo pacto auctoritatem oratio non habet. </p>\r\n\r\n<pre>Una voluptas e multis obscuratur in illa vita voluptaria,\r\nsed tamen ea, quamvis parva sit, pars est eius vitae, quae\r\nposita est in voluptate.\r\n\r\nTe enim iudicem aequum puto, modo quae dicat ille bene\r\nnoris.\r\n</pre>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Memini vero, inquam; Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quae similitudo in genere etiam humano apparet. Sed nunc, quod agimus; Quid dubitas igitur mutare principia naturae? Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Sed ea mala virtuti magnitudine obruebantur. </p>\r\n\r\n<p>Yours,</p><p>Lee Randall</p>",
    "Email": "leerandall@syncfusion.com",
    "CC": [
      "Brian Blackburn",
      "Guinevere Gilmore"
    ],
    "CCMail": [
      "brianblackburn@syncfusion.com",
      "guineveregilmore@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/2.png",
    "Time": "2.36 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10083",
    "text": "Tad Parsons",
    "ContactTitle": "Request for meeting appointment email",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At, si voluptas esset bonum, desideraret. Quo tandem modo? An hoc usque quaque, aliter in vita? Nam quid possumus facere melius? Non potes, nisi retexueris illa. Praeclare hoc quidem. </p>\r\n\r\n<p>Rationis enim perfectio est virtus; Deprehensus omnem poenam contemnet. Minime vero, inquit ille, consentit. Tum mihi Piso: Quid ergo? </p>\r\n\r\n<ul>\r\n\t<li>Traditur, inquit, ab Epicuro ratio neglegendi doloris.</li>\r\n\t<li>Vide igitur ne non debeas verbis nostris uti, sententiis tuis.</li>\r\n\t<li>Mihi, inquam, qui te id ipsum rogavi?</li>\r\n\t<li>Nam ante Aristippus, et ille melius.</li>\r\n\t<li>An ea, quae per vinitorem antea consequebatur, per se ipsa curabit?</li>\r\n\t<li>Quippe: habes enim a rhetoribus;</li>\r\n</ul>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Ita ne hoc quidem modo paria peccata sunt. Istam voluptatem, inquit, Epicurus ignorat? Tanta vis admonitionis inest in locis; Tibi hoc incredibile, quod beatissimum. </p>\r\n\r\n<p>Yours,</p><p>Tad Parsons</p>",
    "Email": "tadparsons@syncfusion.com",
    "CC": [
      "Juliet Barlow",
      "Leilani Thomas"
    ],
    "CCMail": [
      "julietbarlow@syncfusion.com",
      "leilanithomas@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/27.png",
    "Time": "2.36 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10207",
    "text": "Regan Hall",
    "ContactTitle": "My life in New York",
    "Message": "<p>Dear Regan Hall,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit? Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quo modo autem philosophus loquitur? </p>\r\n\r\n<p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus. Hoc est non modo cor non habere, sed ne palatum quidem. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Bona autem corporis huic sunt, quod posterius posui, similiora. Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Numquam facies. Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. </p>\r\n\r\n<p>Quamquam id quidem licebit iis existimare, qui legerint. Ubi ut eam caperet aut quando? Sine ea igitur iucunde negat posse se vivere? Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Cum praesertim illa perdiscere ludus esset. Quis Aristidem non mortuum diligit? De vacuitate doloris eadem sententia erit. Ad eos igitur converte te, quaeso. Duo enim genera quae erant, fecit tria. Omnes enim iucundum motum, quo sensus hilaretur. Nos vero, inquit ille; Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. </p>\r\n\r\n<p>Best wishes,</p><p>Regan Hall</p>",
    "Email": "reganhall@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Maggy Randall",
      "Clare Heath"
    ],
    "BCCMail": [
      "maggyrandall@syncfusion.com",
      "clareheath@syncfusion.com"
    ],
    "To": "Regan Hall",
    "ToMail": "reganhall@syncfusion.com",
    "Image": "assets/images/images/18.png",
    "Time": "2.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10169",
    "text": "Prescott Snow",
    "ContactTitle": "Party Invitation for Company’s Annual Day",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quando enim Socrates, qui parens philosophiae iure dici potest, quicquam tale fecit? Idem etiam dolorem saepe perpetiuntur, ne, si id non faciant, incidant in maiorem. Quo modo autem philosophus loquitur? </p>\r\n\r\n<p>Tu autem negas fortem esse quemquam posse, qui dolorem malum putet. Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus. Hoc est non modo cor non habere, sed ne palatum quidem. Quid enim ab antiquis ex eo genere, quod ad disserendum valet, praetermissum est? Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Cuius quidem, quoniam Stoicus fuit, sententia condemnata mihi videtur esse inanitas ista verborum. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Bona autem corporis huic sunt, quod posterius posui, similiora. Hoc est vim afferre, Torquate, sensibus, extorquere ex animis cognitiones verborum, quibus inbuti sumus. Numquam facies. Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti. </p>\r\n\r\n<p>Quamquam id quidem licebit iis existimare, qui legerint. Ubi ut eam caperet aut quando? Sine ea igitur iucunde negat posse se vivere? Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Cum praesertim illa perdiscere ludus esset. Quis Aristidem non mortuum diligit? De vacuitate doloris eadem sententia erit. Ad eos igitur converte te, quaeso. Duo enim genera quae erant, fecit tria. Omnes enim iucundum motum, quo sensus hilaretur. Nos vero, inquit ille; Inscite autem medicinae et gubernationis ultimum cum ultimo sapientiae comparatur. </p>\r\n\r\n<p>Yours,</p><p>Prescott Snow</p>",
    "Email": "prescottsnow@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/10.png",
    "Time": "2.48 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Junk Mail",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10126",
    "text": "Luke Velasquez",
    "ContactTitle": "Project Manager Interview",
    "Message": "<p>Hello Seth Pierce,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Sed tu istuc dixti bene Latine, parum plane. </p>\r\n\r\n<blockquote>\r\n\tIta enim se Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam cognomen videatur habiturus.\r\n</blockquote>\r\n\r\n\r\n<p>Nos cum te, M. Quis istud possit, inquit, negare? Quorum sine causa fieri nihil putandum est. Verum hoc idem saepe faciamus. Prodest, inquit, mihi eo esse animo. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Aliter homines, aliter philosophos loqui putas oportere? Facete M. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Quid iudicant sensus? Conferam avum tuum Drusum cum C. Invidiosum nomen est, infame, suspectum. Et nemo nimium beatus est; Nihil illinc huc pervenit. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Regards,</p><p>Luke Velasquez</p>",
    "Email": "lukevelasquez@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Selma Talley",
      "Winifred Dyer"
    ],
    "BCCMail": [
      "selmatalley@syncfusion.com",
      "winifreddyer@syncfusion.com"
    ],
    "To": "Seth Pierce",
    "ToMail": "sethpierce@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "2.17 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Clutter",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10074",
    "text": "Jennifer Ford",
    "ContactTitle": "Office Holiday",
    "Message": "<p>Dear Gail Pierce,</p><h4>Quia dolori non voluptas contraria est, sed doloris privatio.</h4>\r\n\r\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam quidem dicturam pater aiebat, si loqui posset. Sed quanta sit alias, nunc tantum possitne esse tanta. Legimus tamen Diogenem, Antipatrum, Mnesarchum, Panaetium, multos alios in primisque familiarem nostrum Posidonium. Sed residamus, inquit, si placet. Teneo, inquit, finem illi videri nihil dolere. Duo Reges: constructio interrete. Et harum quidem rerum facilis est et expedita distinctio. Tubulo putas dicere? </p>\r\n\r\n<p>Miserum hominem! Si dolor summum malum est, dici aliter non potest. Haec et tu ita posuisti, et verba vestra sunt. Saepe ab Aristotele, a Theophrasto mirabiliter est laudata per se ipsa rerum scientia; Sed quid minus probandum quam esse aliquem beatum nec satis beatum? </p>\r\n\r\n<h4>Frater et T.</h4>\r\n\r\n<p>Quo invento omnis ab eo quasi capite de summo bono et malo disputatio ducitur. Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Sin aliud quid voles, postea. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Nam aliquando posse recte fieri dicunt nulla expectata nec quaesita voluptate. Et quidem, inquit, vehementer errat; Suam denique cuique naturam esse ad vivendum ducem. Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis. Res enim se praeclare habebat, et quidem in utraque parte. Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere? </p>\r\n\r\n<h4>An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</h4>\r\n\r\n<p>Nam illud vehementer repugnat, eundem beatum esse et multis malis oppressum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Quo tandem modo? Eadem nunc mea adversum te oratio est. Aliter enim nosmet ipsos nosse non possumus. Sed quid sentiat, non videtis. Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Sit ista in Graecorum levitate perversitas, qui maledictis insectantur eos, a quibus de veritate dissentiunt. Nunc omni virtuti vitium contrario nomine opponitur. Illis videtur, qui illud non dubitant bonum dicere -; </p>\r\n\r\n<p>Yours,</p><p>Jennifer Ford</p>",
    "Email": "jenniferford@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Jelani Moreno"
    ],
    "BCCMail": [
      "jelanimoreno@syncfusion.com"
    ],
    "To": "Gail Pierce",
    "ToMail": "gailpierce@syncfusion.com",
    "Image": "assets/images/images/39.png",
    "Time": "2.37 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10005",
    "text": "Richelle Mead",
    "ContactTitle": "Application for Job Title",
    "Message": "<p>Hi Ursula Patterson,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Invidiosum nomen est, infame, suspectum.</mark> Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et comparari potest. Quid enim de amicitia statueris utilitatis causa expetenda vides. <mark>Cur, nisi quod turpis oratio est?</mark> Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <mark>Duo Reges: constructio interrete.</mark> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? </p>\r\n\r\n<p>At enim, qua in vita est aliquid mali, ea beata esse non potest. <i>Facile est hoc cernere in primis puerorum aetatulis.</i> Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae quo sunt excelsiores, eo dant clariora indicia naturae. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Non dolere, inquam, istud quam vim habeat postea videro; Est, ut dicis, inquit; </p>\r\n\r\n<p>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Huius ego nunc auctoritatem sequens idem faciam. Nihil illinc huc pervenit. <b>Non semper, inquam;</b> Tanta vis admonitionis inest in locis; Utilitatis causa amicitia est quaesita. </p>\r\n\r\n<p>Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quid iudicant sensus? Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quid enim de amicitia statueris utilitatis causa expetenda vides. Sit hoc ultimum bonorum, quod nunc a me defenditur; </p>\r\n\r\n<p>Thanks,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Ursula Patterson",
    "ToMail": "ursulapatterson@syncfusion.com",
    "Image": "assets/images/images/37.png",
    "Time": "2.37 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10017",
    "text": "Richelle Mead",
    "ContactTitle": "Holiday application",
    "Message": "<p>Hi Brynne Wise,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnia contraria, quos etiam insanos esse vultis. Ad eos igitur converte te, quaeso. Polycratem Samium felicem appellabant. Immo alio genere; Duo Reges: constructio interrete. Confecta res esset. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. <code>Eaedem res maneant alio modo.</code> </p>\r\n\r\n<p>Qui enim existimabit posse se miserum esse beatus non erit. Quodcumque in mentem incideret, et quodcumque tamquam occurreret. <code>Primum in nostrane potestate est, quid meminerimus?</code> Nam si amitti vita beata potest, beata esse non potest. Ut in voluptate sit, qui epuletur, in dolore, qui torqueatur. Rationis enim perfectio est virtus; Intellegi quidem, ut propter aliam quampiam rem, verbi gratia propter voluptatem, nos amemus; Quis istud possit, inquit, negare? Hoc etsi multimodis reprehendi potest, tamen accipio, quod dant. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur. </p>\r\n\r\n<pre>Itaque in rebus minime obscuris non multus est apud eos\r\ndisserendi labor.\r\n\r\nCenasti in vita numquam bene, cum omnia in ista Consumis\r\nsquilla atque acupensere cum decimano.\r\n</pre>\r\n\r\n\r\n<p><code>Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit?</code> <code>De illis, cum volemus.</code> Quid enim? Vitae autem degendae ratio maxime quidem illis placuit quieta. Quis contra in illa aetate pudorem, constantiam, etiamsi sua nihil intersit, non tamen diligat? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Varietates autem iniurasque fortunae facile veteres philosophorum praeceptis instituta vita superabat. Cuius ad naturam apta ratio vera illa et summa lex a philosophis dicitur. </p>\r\n\r\n<p>Non quam nostram quidem, inquit Pomponius iocans; Aliter homines, aliter philosophos loqui putas oportere? Tum mihi Piso: Quid ergo? An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat? Nam Pyrrho, Aristo, Erillus iam diu abiecti. Itaque eos id agere, ut a se dolores, morbos, debilitates repellant. Sic enim censent, oportunitatis esse beate vivere. </p>\r\n\r\n<p>Thanks,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Brynne Wise",
    "ToMail": "brynnewise@syncfusion.com",
    "Image": "assets/images/images/40.png",
    "Time": "2.4 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10041",
    "text": "Georgia Church",
    "ContactTitle": "Thank You Very Much!",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo in utroque exercebantur, eaque disciplina effecit tantam illorum utroque in genere dicendi copiam. Illis videtur, qui illud non dubitant bonum dicere -; Atque ab his initiis profecti omnium virtutum et originem et progressionem persecuti sunt. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. </p>\r\n\r\n<p>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Sed ad rem redeamus; Hoc mihi cum tuo fratre convenit. Quod quidem iam fit etiam in Academia. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? Apparet statim, quae sint officia, quae actiones. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Quid est, quod ab ea absolvi et perfici debeat? Hi curatione adhibita levantur in dies, valet alter plus cotidie, alter videt. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Quid de Platone aut de Democrito loquar? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nunc omni virtuti vitium contrario nomine opponitur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Magna laus.</dfn></dt>\r\n\t<dd>Ampulla enim sit necne sit, quis non iure optimo irrideatur, si laboret?</dd>\r\n\t<dt><dfn>Quis negat?</dfn></dt>\r\n\t<dd>Is ita vivebat, ut nulla tam exquisita posset inveniri voluptas, qua non abundaret.</dd>\r\n\t<dt><dfn>Immo videri fortasse.</dfn></dt>\r\n\t<dd>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</dd>\r\n\t<dt><dfn>Non igitur bene.</dfn></dt>\r\n\t<dd>Qua tu etiam inprudens utebare non numquam.</dd>\r\n\t<dt><dfn>Eam stabilem appellas.</dfn></dt>\r\n\t<dd>Quod si ita se habeat, non possit beatam praestare vitam sapientia.</dd>\r\n\t<dt><dfn>Sedulo, inquam, faciam.</dfn></dt>\r\n\t<dd>Quis hoc dicit?</dd>\r\n</dl>\r\n\r\n\r\n<p>Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Quis est, qui non oderit libidinosam, protervam adolescentiam? At Zeno eum non beatum modo, sed etiam divitem dicere ausus est. Huius, Lyco, oratione locuples, rebus ipsis ielunior. </p>\r\n\r\n<p>Yours,</p><p>Georgia Church</p>",
    "Email": "georgiachurch@syncfusion.com",
    "CC": [
      "Brielle Rich",
      "Ariel Wagner"
    ],
    "CCMail": [
      "briellerich@syncfusion.com",
      "arielwagner@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/34.png",
    "Time": "2.41 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10059",
    "text": "Basia Yates",
    "ContactTitle": "Congratulations On Your New Position",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sumenda potius quam expetenda. Ut id aliis narrare gestiant? Quam illa ardentis amores excitaret sui! Cur tandem? Quonam, inquit, modo? Duo Reges: constructio interrete. Aliter enim explicari, quod quaeritur, non potest. </p>\r\n\r\n<p>Videsne quam sit magna dissensio? Sin aliud quid voles, postea. De hominibus dici non necesse est. Ita enim vivunt quidam, ut eorum vita refellatur oratio. Torquatus, is qui consul cum Cn. </p>\r\n\r\n<p>Traditur, inquit, ab Epicuro ratio neglegendi doloris. Simus igitur contenti his. Istic sum, inquit. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Deinde disputat, quod cuiusque generis animantium statui deceat extremum. Quid de Pythagora? Si enim ad populum me vocas, eum. Esse enim quam vellet iniquus iustus poterat inpune. Verum hoc idem saepe faciamus. Hic ambiguo ludimur. </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Vide, quaeso, rectumne sit.</dfn></dt>\r\n\t<dd>Sed in rebus apertissimis nimium longi sumus.</dd>\r\n\t<dt><dfn>Tu quidem reddes;</dfn></dt>\r\n\t<dd>Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit.</dd>\r\n\t<dt><dfn>Pollicetur certe.</dfn></dt>\r\n\t<dd>Verum tamen cum de rebus grandioribus dicas, ipsae res verba rapiunt;</dd>\r\n</dl>\r\n\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Quae duo sunt, unum facit. Scisse enim te quis coarguere possit? Primum divisit ineleganter; Zenonis est, inquam, hoc Stoici. Sed videbimus. </p>\r\n\r\n<p>Et quidem, inquit, vehementer errat; Quae sequuntur igitur? Urgent tamen et nihil remittunt. Quae duo sunt, unum facit. Compensabatur, inquit, cum summis doloribus laetitia. Et quod est munus, quod opus sapientiae? </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Sic enim censent, oportunitatis esse beate vivere. Tuo vero id quidem, inquam, arbitratu. Aliter homines, aliter philosophos loqui putas oportere? Quid enim est a Chrysippo praetermissum in Stoicis? Quae sequuntur igitur? </p>\r\n\r\n<p>Yours,</p><p>Basia Yates</p>",
    "Email": "basiayates@syncfusion.com",
    "CC": [
      "Paloma Battle"
    ],
    "CCMail": [
      "palomabattle@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/51.png",
    "Time": "2.44 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10089",
    "text": "Evangeline Prince",
    "ContactTitle": "Today’s meeting schedule",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <mark>Invidiosum nomen est, infame, suspectum.</mark> Ex quo, id quod omnes expetunt, beate vivendi ratio inveniri et comparari potest. Quid enim de amicitia statueris utilitatis causa expetenda vides. <mark>Cur, nisi quod turpis oratio est?</mark> Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? <mark>Duo Reges: constructio interrete.</mark> Nam Pyrrho, Aristo, Erillus iam diu abiecti. Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? </p>\r\n\r\n<p>At enim, qua in vita est aliquid mali, ea beata esse non potest. <i>Facile est hoc cernere in primis puerorum aetatulis.</i> Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Scio enim esse quosdam, qui quavis lingua philosophari possint; Quae quo sunt excelsiores, eo dant clariora indicia naturae. An, partus ancillae sitne in fructu habendus, disseretur inter principes civitatis, P. Non dolere, inquam, istud quam vim habeat postea videro; Est, ut dicis, inquit; </p>\r\n\r\n<p>Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Huius ego nunc auctoritatem sequens idem faciam. Nihil illinc huc pervenit. <b>Non semper, inquam;</b> Tanta vis admonitionis inest in locis; Utilitatis causa amicitia est quaesita. </p>\r\n\r\n<p>Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quid iudicant sensus? Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Quamquam haec quidem praeposita recte et reiecta dicere licebit. Quid enim de amicitia statueris utilitatis causa expetenda vides. Sit hoc ultimum bonorum, quod nunc a me defenditur; </p>\r\n\r\n<p>Thank you,</p><p>Evangeline Prince</p>",
    "Email": "evangelineprince@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/38.png",
    "Time": "2.55 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10175",
    "text": "Leilani Mayer",
    "ContactTitle": "Request for meeting appointment email",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Sed tu istuc dixti bene Latine, parum plane. </p>\r\n\r\n<blockquote>\r\n\tIta enim se Athenis collocavit, ut sit paene unus ex Atticis, ut id etiam cognomen videatur habiturus.\r\n</blockquote>\r\n\r\n\r\n<p>Nos cum te, M. Quis istud possit, inquit, negare? Quorum sine causa fieri nihil putandum est. Verum hoc idem saepe faciamus. Prodest, inquit, mihi eo esse animo. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Aliter homines, aliter philosophos loqui putas oportere? Facete M. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Quid iudicant sensus? Conferam avum tuum Drusum cum C. Invidiosum nomen est, infame, suspectum. Et nemo nimium beatus est; Nihil illinc huc pervenit. Quod ea non occurrentia fingunt, vincunt Aristonem; </p>\r\n\r\n<p>Thanks,</p><p>Leilani Mayer</p>",
    "Email": "leilanimayer@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/26.png",
    "Time": "2.59 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10196",
    "text": "Ivan Fitzpatrick",
    "ContactTitle": "Confirmation of the business appointment",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <i>Contemnit enim disserendi elegantiam, confuse loquitur.</i> Sin autem eos non probabat, quid attinuit cum iis, quibuscum re concinebat, verbis discrepare? <mark>Confecta res esset.</mark> <i>Sint ista Graecorum;</i> Duo Reges: constructio interrete. Mihi vero, inquit, placet agi subtilius et, ut ipse dixisti, pressius. </p>\r\n\r\n<pre>Nam cum Academicis incerta luctatio est, qui nihil affirmant\r\net quasi desperata cognitione certi id sequi volunt,\r\nquodcumque veri simile videatur.\r\n\r\nMe ipsum esse dicerem, inquam, nisi mihi viderer habere bene\r\ncognitam voluptatem et satis firme conceptam animo atque\r\ncomprehensam.\r\n</pre>\r\n\r\n\r\n<blockquote>\r\n\tEquidem in omnibus istis conclusionibus hoc putarem philosophia nobisque dignum, et maxime, cum summum bonum quaereremus, vitam nostram, consilia, voluntates, non verba corrigi.\r\n</blockquote>\r\n\r\n\r\n<ol>\r\n\t<li>Ut optime, secundum naturam affectum esse possit.</li>\r\n\t<li>Nam adhuc, meo fortasse vitio, quid ego quaeram non perspicis.</li>\r\n\t<li>Quare hoc videndum est, possitne nobis hoc ratio philosophorum dare.</li>\r\n\t<li>An quod ita callida est, ut optime possit architectari voluptates?</li>\r\n</ol>\r\n\r\n\r\n<p>Sed fortuna fortis; Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. <b>Quid sequatur, quid repugnet, vident.</b> At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. Nemo igitur esse beatus potest. Et non ex maxima parte de tota iudicabis? Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Serpere anguiculos, nare anaticulas, evolare merulas, cornibus uti videmus boves, nepas aculeis. </p>\r\n\r\n<p>Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Quid ad utilitatem tantae pecuniae? Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Negat enim summo bono afferre incrementum diem. Omnia contraria, quos etiam insanos esse vultis. Sed quanta sit alias, nunc tantum possitne esse tanta. Tecum optime, deinde etiam cum mediocri amico. Quis est, qui non oderit libidinosam, protervam adolescentiam? Idne consensisse de Calatino plurimas gentis arbitramur, primarium populi fuisse, quod praestantissimus fuisset in conficiendis voluptatibus? </p>\r\n\r\n<p>Regards,</p><p>Ivan Fitzpatrick</p>",
    "Email": "ivanfitzpatrick@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/23.png",
    "Time": "2.26 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Marketing Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10184",
    "text": "Otto Ashley",
    "ContactTitle": "Annual Conference",
    "Message": "<p>Hello Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Dici enim nihil potest verius.</b> Respondent extrema primis, media utrisque, omnia omnibus. Egone non intellego, quid sit don Graece, Latine voluptas? Tu enim ista lenius, hic Stoicorum more nos vexat. Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere. Quod autem ratione actum est, id officium appellamus. Me igitur ipsum ames oportet, non mea, si veri amici futuri sumus. Duo Reges: constructio interrete. </p>\r\n\r\n<p>Uterque enim summo bono fruitur, id est voluptate. Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Nam Metrodorum non puto ipsum professum, sed, cum appellaretur ab Epicuro, repudiare tantum beneficium noluisse; Zenonis est, inquam, hoc Stoici. Nulla profecto est, quin suam vim retineat a primo ad extremum. Istam voluptatem perpetuam quis potest praestare sapienti? Animum autem reliquis rebus ita perfecit, ut corpus; <i>Summum enim bonum exposuit vacuitatem doloris;</i> </p>\r\n\r\n<ol>\r\n\t<li>Sed ne, dum huic obsequor, vobis molestus sim.</li>\r\n\t<li>Idem iste, inquam, de voluptate quid sentit?</li>\r\n\t<li>Octavio fuit, cum illam severitatem in eo filio adhibuit, quem in adoptionem D.</li>\r\n\t<li>Haec quo modo conveniant, non sane intellego.</li>\r\n\t<li>Quia dolori non voluptas contraria est, sed doloris privatio.</li>\r\n\t<li>Quantam rem agas, ut Circeis qui habitet totum hunc mundum suum municipium esse existimet?</li>\r\n</ol>\r\n\r\n\r\n<p><mark>Omnis enim est natura diligens sui.</mark> Non enim ipsa genuit hominem, sed accepit a natura inchoatum. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant. <b>At hoc in eo M.</b> Quid nunc honeste dicit? Ita multa dicunt, quae vix intellegam. Unum est sine dolore esse, alterum cum voluptate. Quis suae urbis conservatorem Codrum, quis Erechthei filias non maxime laudat? </p>\r\n\r\n<p>Habent enim et bene longam et satis litigiosam disputationem. Sed tu istuc dixti bene Latine, parum plane. <i>Quibusnam praeteritis?</i> Paulum, cum regem Persem captum adduceret, eodem flumine invectio? <b>Solum praeterea formosum, solum liberum, solum civem, stultost;</b> Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Hanc ergo intuens debet institutum illud quasi signum absolvere. Quamquam id quidem licebit iis existimare, qui legerint. Ego vero isti, inquam, permitto. Nam prius a se poterit quisque discedere quam appetitum earum rerum, quae sibi conducant, amittere. <mark>Scrupulum, inquam, abeunti;</mark> Summus dolor plures dies manere non potest? </p>\r\n\r\n<p>Regards,</p><p>Otto Ashley</p>",
    "Email": "ottoashley@syncfusion.com",
    "CC": [
      "Winifred Dyer"
    ],
    "CCMail": [
      "winifreddyer@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/3.png",
    "Time": "2.36 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sales Reports",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10060",
    "text": "Buffy Hicks",
    "ContactTitle": "Follow up application",
    "Message": "<p>Hi Hector Harding,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si enim ad populum me vocas, eum. Non est igitur summum malum dolor. Duo enim genera quae erant, fecit tria. At iam decimum annum in spelunca iacet. Cave putes quicquam esse verius. Sed plane dicit quod intellegit. Duo Reges: constructio interrete. Restatis igitur vos; </p>\r\n\r\n<dl>\r\n\t<dt><dfn>Tria genera bonorum;</dfn></dt>\r\n\t<dd>Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</dd>\r\n\t<dt><dfn>Quid vero?</dfn></dt>\r\n\t<dd>Quo modo autem philosophus loquitur?</dd>\r\n\t<dt><dfn>Falli igitur possumus.</dfn></dt>\r\n\t<dd>Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis.</dd>\r\n</dl>\r\n\r\n\r\n<p>Tecum optime, deinde etiam cum mediocri amico. Restatis igitur vos; Sed quot homines, tot sententiae; Memini me adesse P. Istam voluptatem, inquit, Epicurus ignorat? Quare ad ea primum, si videtur; Peccata paria. Ut aliquid scire se gaudeant? </p>\r\n\r\n<p>Minime vero, inquit ille, consentit. Tenent mordicus. Verum hoc idem saepe faciamus. Suo genere perveniant ad extremum; </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sed ne, dum huic obsequor, vobis molestus sim. Maximus dolor, inquit, brevis est. Tria genera bonorum; Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. Estne, quaeso, inquam, sitienti in bibendo voluptas? </p>\r\n\r\n<p>Sed ego in hoc resisto; Tenent mordicus. Nam ista vestra: Si gravis, brevis; Equidem e Cn. </p>\r\n\r\n<p>Qui est in parvis malis. Sed ad bona praeterita redeamus. Ita prorsus, inquam; Nunc omni virtuti vitium contrario nomine opponitur. Sed nimis multa. Que Manilium, ab iisque M. </p>\r\n\r\n<p>Esse enim quam vellet iniquus iustus poterat inpune. Deprehensus omnem poenam contemnet. Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Thanks,</p><p>Buffy Hicks</p>",
    "Email": "buffyhicks@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Karen Gamble",
      "Halla Padilla"
    ],
    "BCCMail": [
      "karengamble@syncfusion.com",
      "hallapadilla@syncfusion.com"
    ],
    "To": "Hector Harding",
    "ToMail": "hectorharding@syncfusion.com",
    "Image": "assets/images/images/35.png",
    "Time": "2.53 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10172",
    "text": "Tamara Knox",
    "ContactTitle": "Project Manager Interview",
    "Message": "<p>Hi Leslie Juarez,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egone quaeris, inquit, quid sentiam? Quorum sine causa fieri nihil putandum est. Erat enim Polemonis. Si longus, levis; Quid, si etiam iucunda memoria est praeteritorum malorum? </p>\r\n\r\n<p>Iam in altera philosophiae parte. Hunc vos beatum; At enim hic etiam dolore. Primum quid tu dicis breve? </p>\r\n\r\n<p>Duo Reges: constructio interrete. Itaque contra est, ac dicitis; Quamquam te quidem video minime esse deterritum. Si longus, levis; </p>\r\n\r\n<ol>\r\n\t<li>An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?</li>\r\n\t<li>Nam, ut sint illa vendibiliora, haec uberiora certe sunt.</li>\r\n\t<li>An vero, inquit, quisquam potest probare, quod perceptfum, quod.</li>\r\n\t<li>Ergo illi intellegunt quid Epicurus dicat, ego non intellego?</li>\r\n\t<li>Hanc quoque iucunditatem, si vis, transfer in animum;</li>\r\n</ol>\r\n\r\n\r\n<p>Thanks,</p><p>Tamara Knox</p>",
    "Email": "tamaraknox@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Leslie Juarez",
    "ToMail": "lesliejuarez@syncfusion.com",
    "Image": "assets/images/images/52.png",
    "Time": "2.54 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Personnel",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10084",
    "text": "Sophia Mercado",
    "ContactTitle": "Sales Team",
    "Message": "<p>Hi Cherokee Clements,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Sed virtutem ipsam inchoavit, nihil amplius. </p>\r\n\r\n<p>Utilitatis causa amicitia est quaesita. Sin autem est in ea, quod quidam volunt, nihil impedit hanc nostram comprehensionem summi boni. Sed ad haec, nisi molestum est, habeo quae velim. Illa argumenta propria videamus, cur omnia sint paria peccata. Quae enim adhuc protulisti, popularia sunt, ego autem a te elegantiora desidero. Age, inquies, ista parva sunt. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Contemnit enim disserendi elegantiam, confuse loquitur. Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. Tollenda est atque extrahenda radicitus. Certe, nisi voluptatem tanti aestimaretis. </p>\r\n\r\n<p>Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Tubulo putas dicere? Bestiarum vero nullum iudicium puto. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Non semper, inquam; Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Nondum autem explanatum satis, erat, quid maxime natura vellet. </p>\r\n\r\n<p>Theophrasti igitur, inquit, tibi liber ille placet de beata vita? Nonne igitur tibi videntur, inquit, mala? Nam si +omnino nos+ neglegemus, in Aristonea vitia incidemus et peccata obliviscemurque quae virtuti ipsi principia dederimus; Cur deinde Metrodori liberos commendas? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Quis istud possit, inquit, negare? Nos commodius agimus. Quorum sine causa fieri nihil putandum est. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? </p>\r\n\r\n<p>An haec ab eo non dicuntur? Duo Reges: constructio interrete. Hoc non est positum in nostra actione. Nemo nostrum istius generis asotos iucunde putat vivere. </p>\r\n\r\n<p>Cum ageremus, inquit, vitae beatum et eundem supremum diem, scribebamus haec. Iam id ipsum absurdum, maximum malum neglegi. Sed quae tandem ista ratio est? Tibi hoc incredibile, quod beatissimum. Quae in controversiam veniunt, de iis, si placet, disseramus. Atque haec ita iustitiae propria sunt, ut sint virtutum reliquarum communia. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium. </p>\r\n\r\n<p>Quae similitudo in genere etiam humano apparet. Pisone in eo gymnasio, quod Ptolomaeum vocatur, unaque nobiscum Q. Si mala non sunt, iacet omnis ratio Peripateticorum. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Quia, si mala sunt, is, qui erit in iis, beatus non erit. Quicquid enim a sapientia proficiscitur, id continuo debet expletum esse omnibus suis partibus; Nunc dicam de voluptate, nihil scilicet novi, ea tamen, quae te ipsum probaturum esse confidam. Nulla profecto est, quin suam vim retineat a primo ad extremum. Roges enim Aristonem, bonane ei videantur haec: vacuitas doloris, divitiae, valitudo; Quamquam id quidem licebit iis existimare, qui legerint. </p>\r\n\r\n<p>Et quidem iure fortasse, sed tamen non gravissimum est testimonium multitudinis. Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Scaevola tribunus plebis ferret ad plebem vellentne de ea re quaeri. Iam id ipsum absurdum, maximum malum neglegi. Non enim, si malum est dolor, carere eo malo satis est ad bene vivendum. </p>\r\n\r\n<p>Thanks,</p><p>Sophia Mercado</p>",
    "Email": "sophiamercado@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Cherokee Clements",
    "ToMail": "cherokeeclements@syncfusion.com",
    "Image": "assets/images/images/11.png",
    "Time": "2.54 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10088",
    "text": "Savannah Ortega",
    "ContactTitle": "Thank you",
    "Message": "<p>Hi Zena Osborn,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? Satisne vobis videor pro meo iure in vestris auribus commentatus? Cum autem venissemus in Academiae non sine causa nobilitata spatia, solitudo erat ea, quam volueramus. Duo Reges: constructio interrete. Teneo, inquit, finem illi videri nihil dolere. Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. </p>\r\n\r\n<p>Iam id ipsum absurdum, maximum malum neglegi. Apparet statim, quae sint officia, quae actiones. In qua quid est boni praeter summam voluptatem, et eam sempiternam? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Philosophi autem in suis lectulis plerumque moriuntur. Non igitur potestis voluptate omnia dirigentes aut tueri aut retinere virtutem. </p>\r\n\r\n<ol>\r\n\t<li>Sed quid minus probandum quam esse aliquem beatum nec satis beatum?</li>\r\n\t<li>Quae cum essent dicta, finem fecimus et ambulandi et disputandi.</li>\r\n\t<li>Disserendi artem nullam habuit.</li>\r\n\t<li>Verum hoc loco sumo verbis his eandem certe vim voluptatis Epicurum nosse quam ceteros.</li>\r\n</ol>\r\n\r\n\r\n<p>Quasi vero, inquit, perpetua oratio rhetorum solum, non etiam philosophorum sit. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Profectus in exilium Tubulus statim nec respondere ausus; Nam si amitti vita beata potest, beata esse non potest. Nos paucis ad haec additis finem faciamus aliquando; Homines optimi non intellegunt totam rationem everti, si ita res se habeat. Quae cum dixisset paulumque institisset, Quid est? </p>\r\n\r\n<p>Praeclare hoc quidem. Tamen aberramus a proposito, et, ne longius, prorsus, inquam, Piso, si ista mala sunt, placet. Oratio me istius philosophi non offendit; Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Sed fortuna fortis; Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Poterat autem inpune; Omnia contraria, quos etiam insanos esse vultis. </p>\r\n\r\n<p>Thanks,</p><p>Savannah Ortega</p>",
    "Email": "savannahortega@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Sandra Snyder",
      "Rebekah Mcdowell"
    ],
    "BCCMail": [
      "sandrasnyder@syncfusion.com",
      "rebekahmcdowell@syncfusion.com"
    ],
    "To": "Zena Osborn",
    "ToMail": "zenaosborn@syncfusion.com",
    "Image": "assets/images/images/41.png",
    "Time": "2.56 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10004",
    "text": "Richelle Mead",
    "ContactTitle": "Apology marketing email",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam in altera philosophiae parte. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Qui autem esse poteris, nisi te amor ipse ceperit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Recte dicis; </p>\r\n\r\n<p>Quid, si non sensus modo ei sit datus, verum etiam animus hominis? Non quam nostram quidem, inquit Pomponius iocans; Hoc est non modo cor non habere, sed ne palatum quidem. Certe non potest. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. </p>\r\n\r\n<blockquote>\r\n\tSi enim ad honestatem omnia referant neque in ea voluptatem dicant inesse, ait eos voce inani sonarehis enim ipsis verbis utitur-neque intellegere nec videre sub hanc vocem honestatis quae sit subicienda sententia.\r\n</blockquote>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Esse enim quam vellet iniquus iustus poterat inpune. Facillimum id quidem est, inquam. Expectoque quid ad id, quod quaerebam, respondeas. Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Omnes enim iucundum motum, quo sensus hilaretur. Esse enim quam vellet iniquus iustus poterat inpune. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. </p>\r\n\r\n<p>Nobis aliter videtur, recte secusne, postea; Quid est, quod ab ea absolvi et perfici debeat? Apud imperitos tum illa dicta sunt, aliquid etiam coronae datum; Ratio quidem vestra sic cogit. Qui ita affectus, beatum esse numquam probabis; Primum quid tu dicis breve? </p>\r\n\r\n<p>Thanks,</p><p>Richelle Mead</p>",
    "Email": "richellemead@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/50.png",
    "Time": "2.13 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Richelle Mead",
    "ReadStyle": "Unread",
    "ReadTitle": "Mark as read",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10118",
    "text": "Halla Hendricks",
    "ContactTitle": "Software evaluation follow-up",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Honesta oratio, Socratica, Platonis etiam. Nec vero alia sunt quaerenda contra Carneadeam illam sententiam. Eadem nunc mea adversum te oratio est. <b>Primum in nostrane potestate est, quid meminerimus?</b> Expectoque quid ad id, quod quaerebam, respondeas. Quod autem in homine praestantissimum atque optimum est, id deseruit. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas? Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Tollenda est atque extrahenda radicitus. </p>\r\n\r\n<ul>\r\n\t<li>Quorum sine causa fieri nihil putandum est.</li>\r\n\t<li>Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur.</li>\r\n</ul>\r\n\r\n\r\n<p>Non autem hoc: igitur ne illud quidem. Tum Quintus: Est plane, Piso, ut dicis, inquit. Contemnit enim disserendi elegantiam, confuse loquitur. Si id dicis, vicimus. Sed fortuna fortis; </p>\r\n\r\n<p><b>Aliter homines, aliter philosophos loqui putas oportere?</b> De illis, cum volemus. <b>Huius ego nunc auctoritatem sequens idem faciam.</b> Quid ait Aristoteles reliquique Platonis alumni? </p>\r\n\r\n<p>Thank you,</p><p>Halla Hendricks</p>",
    "Email": "hallahendricks@syncfusion.com",
    "CC": [
      "Selma Talley"
    ],
    "CCMail": [
      "selmatalley@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/18.png",
    "Time": "2.15 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10140",
    "text": "Leo Cooley",
    "ContactTitle": "Apology Email for Wrong Order",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ne amores quidem sanctos a sapiente alienos esse arbitrantur. Duo Reges: constructio interrete. An hoc usque quaque, aliter in vita? Sic consequentibus vestris sublatis prima tolluntur. <b>Sin aliud quid voles, postea.</b> <b>Quare attende, quaeso.</b> </p>\r\n\r\n<p><b>Sed tamen intellego quid velit.</b> <b>Hunc vos beatum;</b> <b>Et nemo nimium beatus est;</b> <b>Hanc ergo intuens debet institutum illud quasi signum absolvere.</b> Tubulo putas dicere? <b>Sed ne, dum huic obsequor, vobis molestus sim.</b> Quid ergo hoc loco intellegit honestum? Qua tu etiam inprudens utebare non numquam. </p>\r\n\r\n<p><b>Audeo dicere, inquit.</b> <i>Sed ille, ut dixi, vitiose.</i> Causa autem fuit huc veniendi ut quosdam hinc libros promerem. Summus dolor plures dies manere non potest? <mark>Moriatur, inquit.</mark> <b>Ea possunt paria non esse.</b> </p>\r\n\r\n<p><i>Omnia peccata paria dicitis.</i> Primum Theophrasti, Strato, physicum se voluit; Invidiosum nomen est, infame, suspectum. At coluit ipse amicitias. Primum Theophrasti, Strato, physicum se voluit; </p>\r\n\r\n<p>Thanks,</p><p>Leo Cooley</p>",
    "Email": "leocooley@syncfusion.com",
    "CC": [
      "Gail Pierce"
    ],
    "CCMail": [
      "gailpierce@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/36.png",
    "Time": "2.2 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Deleted Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10062",
    "text": "Odette Sharpe",
    "ContactTitle": "Graduation Announcement",
    "Message": "<p>Hi Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa argumenta propria videamus, cur omnia sint paria peccata. Honesta oratio, Socratica, Platonis etiam. Ut necesse sit omnium rerum, quae natura vigeant, similem esse finem, non eundem. In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret. </p>\r\n\r\n<p>Duo Reges: constructio interrete. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Erat enim res aperta. Facillimum id quidem est, inquam. Cur igitur easdem res, inquam, Peripateticis dicentibus verbum nullum est, quod non intellegatur? </p>\r\n\r\n<ul>\r\n\t<li>Certe nihil nisi quod possit ipsum propter se iure laudari.</li>\r\n\t<li>Et ille ridens: Video, inquit, quid agas;</li>\r\n\t<li>Hanc ergo intuens debet institutum illud quasi signum absolvere.</li>\r\n\t<li>Sed quanta sit alias, nunc tantum possitne esse tanta.</li>\r\n\t<li>Nunc de hominis summo bono quaeritur;</li>\r\n\t<li>Ea, quae dialectici nunc tradunt et docent, nonne ab illis instituta sunt aut inventa sunt?</li>\r\n</ul>\r\n\r\n\r\n<p>Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Sed haec ab Antiocho, familiari nostro, dicuntur multo melius et fortius, quam a Stasea dicebantur. Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis, imitari etiam velis. Quid nunc honeste dicit? Quos quidem tibi studiose et diligenter tractandos magnopere censeo. Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. An hoc usque quaque, aliter in vita? Dic in quovis conventu te omnia facere, ne doleas. </p>\r\n\r\n<p>Atqui reperies, inquit, in hoc quidem pertinacem; Neque solum ea communia, verum etiam paria esse dixerunt. Nos paucis ad haec additis finem faciamus aliquando; Suo genere perveniant ad extremum; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Isto modo ne improbos quidem, si essent boni viri. Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Iam id ipsum absurdum, maximum malum neglegi. Quasi ego id curem, quid ille aiat aut neget. Sin dicit obscurari quaedam nec apparere, quia valde parva sint, nos quoque concedimus; </p>\r\n\r\n<p>Thanks,</p><p>Odette Sharpe</p>",
    "Email": "odettesharpe@syncfusion.com",
    "CC": [
      "Paula Dotson",
      "Nichole Miranda"
    ],
    "CCMail": [
      "pauladotson@syncfusion.com",
      "nicholemiranda@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/14.png",
    "Time": "2.25 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Inbox",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10150",
    "text": "Halla Padilla",
    "ContactTitle": "Confirmation of the business appointment",
    "Message": "<p>Hi Maggy Randall,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Cur post Tarentum ad Archytam?</b> Eorum enim omnium multa praetermittentium, dum eligant aliquid, quod sequantur, quasi curta sententia; Si enim non fuit eorum iudicii, nihilo magis hoc non addito illud est iudicatum-. Sed quia studebat laudi et dignitati, multum in virtute processerat. <b>An hoc usque quaque, aliter in vita?</b> Duo Reges: constructio interrete. </p>\r\n\r\n<p>Eam tum adesse, cum dolor omnis absit; <b>Apparet statim, quae sint officia, quae actiones.</b> Deinde disputat, quod cuiusque generis animantium statui deceat extremum. <b>Quae similitudo in genere etiam humano apparet.</b> </p>\r\n\r\n<p>Profectus in exilium Tubulus statim nec respondere ausus; Isto modo ne improbos quidem, si essent boni viri. Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Quo plebiscito decreta a senatu est consuli quaestio Cn. Aliter homines, aliter philosophos loqui putas oportere? Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Teneo, inquit, finem illi videri nihil dolere. Color egregius, integra valitudo, summa gratia, vita denique conferta voluptatum omnium varietate. Ergo opifex plus sibi proponet ad formarum quam civis excellens ad factorum pulchritudinem? Itaque rursus eadem ratione, qua sum paulo ante usus, haerebitis. </p>\r\n\r\n<p>De ingenio eius in his disputationibus, non de moribus quaeritur. Non quam nostram quidem, inquit Pomponius iocans; Sed haec in pueris; Isto modo, ne si avia quidem eius nata non esset. Hoc loco tenere se Triarius non potuit. </p>\r\n\r\n<p>Thanks,</p><p>Halla Padilla</p>",
    "Email": "hallapadilla@syncfusion.com",
    "CC": [
      "Kerry Best"
    ],
    "CCMail": [
      "kerrybest@syncfusion.com"
    ],
    "BCC": [
      "Mia Parrish"
    ],
    "BCCMail": [
      "miaparrish@syncfusion.com"
    ],
    "To": "Maggy Randall",
    "ToMail": "maggyrandall@syncfusion.com",
    "Image": "assets/images/images/13.png",
    "Time": "2.25 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Archive",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10209",
    "text": "Nichole Miranda",
    "ContactTitle": "Networking Request",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si longus, levis. Cur deinde Metrodori liberos commendas? Confecta res esset. Duo Reges: constructio interrete. Sed quot homines, tot sententiae; Hanc quoque iucunditatem, si vis, transfer in animum; </p>\r\n\r\n<p>Sit enim idem caecus, debilis. Sed residamus, inquit, si placet. Sed nimis multa. Quis negat? Iam in altera philosophiae parte. Negare non possum. </p>\r\n\r\n<ul>\r\n\t<li>Qui ita affectus, beatum esse numquam probabis;</li>\r\n\t<li>Eiuro, inquit adridens, iniquum, hac quidem de re;</li>\r\n\t<li>Nihil est enim, de quo aliter tu sentias atque ego, modo commutatis verbis ipsas res conferamus.</li>\r\n\t<li>An dubium est, quin virtus ita maximam partem optineat in rebus humanis, ut reliquas obruat?</li>\r\n\t<li>Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L.</li>\r\n\t<li>Sed nimis multa.</li>\r\n</ul>\r\n\r\n\r\n<p>At hoc in eo M. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Sed quae tandem ista ratio est? Sin aliud quid voles, postea. </p>\r\n\r\n<p>Best wishes,</p><p>Nichole Miranda</p>",
    "Email": "nicholemiranda@syncfusion.com",
    "CC": [
      "Rina Solis",
      "Winifred Dyer"
    ],
    "CCMail": [
      "rinasolis@syncfusion.com",
      "winifreddyer@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/28.png",
    "Time": "2.31 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Trash",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  },
  {
    "ContactID": "SF10091",
    "text": "Ingrid Harding",
    "ContactTitle": "We launched new Product!",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. -, sed ut hoc iudicaremus, non esse in iis partem maximam positam beate aut secus vivendi. Equidem, sed audistine modo de Carneade? </p>\r\n\r\n<p><b>Non quam nostram quidem, inquit Pomponius iocans;</b> <i>Tenent mordicus.</i> Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt. Summum enim bonum exposuit vacuitatem doloris; In qua quid est boni praeter summam voluptatem, et eam sempiternam? Ut optime, secundum naturam affectum esse possit. </p>\r\n\r\n<p>Quae cum ita sint, effectum est nihil esse malum, quod turpe non sit. Quamvis enim depravatae non sint, pravae tamen esse possunt. Quid ait Aristoteles reliquique Platonis alumni? Quid ergo attinet gloriose loqui, nisi constanter loquare? </p>\r\n\r\n<p>Summus dolor plures dies manere non potest? Naturales divitias dixit parabiles esse, quod parvo esset natura contenta. Pugnant Stoici cum Peripateticis. Duo Reges: constructio interrete. Expressa vero in iis aetatibus, quae iam confirmatae sunt. <i>Scio enim esse quosdam, qui quavis lingua philosophari possint;</i> Qui autem esse poteris, nisi te amor ipse ceperit? Si qua in iis corrigere voluit, deteriora fecit. </p>\r\n\r\n<p>Thank you,</p><p>Ingrid Harding</p>",
    "Email": "ingridharding@syncfusion.com",
    "CC": [
      "Jade Gallegos"
    ],
    "CCMail": [
      "jadegallegos@syncfusion.com"
    ],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/31.png",
    "Time": "2.39 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "None",
    "FlagTitle": "Flag this message"
  },
  {
    "ContactID": "SF10104",
    "text": "Frances Welch",
    "ContactTitle": "Confirmation of the business appointment",
    "Message": "<p>Dear Kerry Best,</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iam in altera philosophiae parte. At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Voluptatem cum summum bonum diceret, primum in eo ipso parum vidit, deinde hoc quoque alienum; Qui autem esse poteris, nisi te amor ipse ceperit? Hoc dixerit potius Ennius: Nimium boni est, cui nihil est mali. Recte dicis; </p>\r\n\r\n<p>Quid, si non sensus modo ei sit datus, verum etiam animus hominis? Non quam nostram quidem, inquit Pomponius iocans; Hoc est non modo cor non habere, sed ne palatum quidem. Certe non potest. Et quidem saepe quaerimus verbum Latinum par Graeco et quod idem valeat; At miser, si in flagitiosa et vitiosa vita afflueret voluptatibus. </p>\r\n\r\n<blockquote>\r\n\tSi enim ad honestatem omnia referant neque in ea voluptatem dicant inesse, ait eos voce inani sonarehis enim ipsis verbis utitur-neque intellegere nec videre sub hanc vocem honestatis quae sit subicienda sententia.\r\n</blockquote>\r\n\r\n\r\n<p>Duo Reges: constructio interrete. Esse enim quam vellet iniquus iustus poterat inpune. Facillimum id quidem est, inquam. Expectoque quid ad id, quod quaerebam, respondeas. Idcirco enim non desideraret, quia, quod dolore caret, id in voluptate est. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Omnes enim iucundum motum, quo sensus hilaretur. Esse enim quam vellet iniquus iustus poterat inpune. Sin tantum modo ad indicia veteris memoriae cognoscenda, curiosorum. </p>\r\n\r\n<p>Nobis aliter videtur, recte secusne, postea; Quid est, quod ab ea absolvi et perfici debeat? Apud imperitos tum illa dicta sunt, aliquid etiam coronae datum; Ratio quidem vestra sic cogit. Qui ita affectus, beatum esse numquam probabis; Primum quid tu dicis breve? </p>\r\n\r\n<p>Thank you,</p><p>Frances Welch</p>",
    "Email": "franceswelch@syncfusion.com",
    "CC": [],
    "CCMail": [],
    "BCC": [],
    "BCCMail": [],
    "To": "Kerry Best",
    "ToMail": "kerrybest@syncfusion.com",
    "Image": "assets/images/images/16.png",
    "Time": "2.5 PM",
    "Date": "24/10/2017",
    "Day": "Friday",
    "Folder": "Sent Items",
    "ReadStyle": "Read",
    "ReadTitle": "Mark as unread",
    "Flagged": "Flagged",
    "FlagTitle": "Remove the flag from this Message"
  }
];

export function getContacts(): { [key: string]: Object }[] {
    let contacts1: { [key: string]: Object }[] = [];
    for (let i: number = 0; i < messageDataSourceNew.length; i++) {
        addContacts(messageDataSourceNew[i], 'Email', 'text', contacts1);
    }
    return contacts1;
}

function addContacts(messageData: { [key: string]: Object }, mailId: string, text: string, contacts: { [key: string]: Object }[]): { [key: string]: Object }[] {
    let fieldId: string = 'MailId';
    let contacts1: { [key: string]: Object }[] = [];
    let contactData: { [key: string]: Object } = {};
    if (messageData[mailId]) {
        if (messageData[mailId] instanceof Array) {
            let mailIdList: string[] = messageData[mailId] as string[];
            let contactsList: string[] = messageData[text] as string[];
            for (let j: number = 0; j < mailIdList.length; j++) {
                contactData = {};
                if (!istextExist(contacts, mailIdList[j])) {
                    fieldId = 'MailId';
                    contactData[fieldId] = mailIdList[j];
                    fieldId = 'text';
                    contactData[fieldId] = contactsList[j];
                    contactData['Image'] = messageData['Image'];
                    contacts.push(contactData);
                }
            }
        } else {
            if (!istextExist(contacts, messageData[mailId].toString())) {
                contactData[fieldId] = messageData[mailId];
                mailId = 'text';
                contactData[mailId] = messageData[text];
                contactData['Image'] = messageData['Image'];
                contacts.push(contactData);
            }
        }
    }
    return contacts;
}

function istextExist(contacts: { [key: string]: Object }[], text: string): boolean {
    let key: string = 'MailId';
    for (let i: number = 0; i < contacts.length; i++) {
        if (contacts[i][key]) {
            if (contacts[i][key].toString() === text) {
                return true;
            }
        }
    }
    return false;
}
/* tslint:enable */