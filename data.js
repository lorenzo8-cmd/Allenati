// Stable movement IDs share weight history across sessions; light variants stay separate.
export const PLAN = '2026-11-ae';
const e=(id,name,sets,reps,rest,cue,seconds=0)=>({id,name,sets,reps,rest,cue,seconds});
export const workouts={
 A:{name:'Petto, schiena, braccia e core',day:'Lunedì',intense:true,ex:[
 e('incline','Panca inclinata 30° con manubri',3,'8–12',120,'Panca a 30°. Piedi stabili, scapole appoggiate. Scendi con controllo e spingi sopra il petto.'),
 e('row','Rematore con manubrio su panca',3,'10 per lato',75,'Mano e ginocchio sulla panca. Tira il gomito verso il fianco, senza ruotare il busto. Completa entrambi i lati.'),
 e('flat','Panca piana con manubri',2,'10–12',90,'Piedi a terra e scapole stabili. Gomiti leggermente vicini al busto, discesa controllata.'),
 e('ezcurl','Curl con bilanciere EZ',2,'10–12',60,'Gomiti vicini ai fianchi. Solleva senza dondolare e distendi con controllo.'),
 e('french','French press con manubrio',2,'10–12',60,'Variante sopra la testa con un manubrio a due mani. Gomiti stabili, addome attivo, non inarcare la schiena.'),
 e('reverse','Crunch inverso',2,'12–15',45,'Da supino, ginocchia piegate. Arrotola leggermente il bacino verso il torace, senza slancio.') ]},
 B:{name:'Mobilità e stabilità',day:'Martedì',intense:false,ex:[
 e('thoracic','Mobilità toracica e rotazioni controllate',2,'8 per lato',30,'Sul fianco, ginocchia piegate e sovrapposte. Apri il braccio ruotando il torace senza muovere il bacino.'),
 e('bandshoulder','Mobilità delle spalle con elastico piatto',2,'10',30,'Presa larga e tensione minima. Solleva le braccia solo nell’ampiezza comoda, senza forzare dietro la testa.'),
 {...e('trxsquat','Squat assistito con TRX',2,'8',45,'Corpo controllato, cinghie in lieve tensione. Siedi indietro senza fastidio. Non forzare la profondità.'),alt:'chairsquat'},
 {...e('scaprow','TRX scapular row leggerissimo',2,'10',45,'Corpo quasi verticale, gomiti distesi. Muovi solo le scapole: avvicinale e poi rilasciale con controllo.'),alt:'scapfree'},
 e('deadbug','Dead bug controllato',2,'8 per lato',30,'Schiena stabile a terra. Allunga braccio e gamba opposti senza inarcare la zona lombare. Alterna i lati.'),
 e('stretchlower','Stretching di anche, petto e polpacci',1,'5 minuti',0,'Alterna allungamento delle anche in mezzo inginocchiamento, apertura del petto e polpaccio al muro. Circa 50 s per lato e zona; tensione lieve.',300) ]},
 C:{name:'Gambe, spalle e addominali',day:'Mercoledì',intense:true,ex:[
 e('rdl','Stacco rumeno con manubri',3,'8–12',90,'Ginocchia morbide. Sposta il bacino indietro, manubri vicini alle gambe e schiena neutra.'),
 e('goblet','Goblet squat verso panca',2,'10–12',90,'Inizia senza peso. Siedi indietro verso la panca stabile, ginocchia in linea con i piedi. Interrompi se il fastidio aumenta.'),
 e('shoulderpress','Shoulder press seduto con manubri',3,'8–12',90,'Schienale quasi verticale, piedi stabili. Spingi sopra le spalle senza inarcare la schiena.'),
 e('lateral','Alzate laterali con manubri',2,'12–15',60,'Gomiti morbidi. Solleva lateralmente fino circa alle spalle, senza slancio.'),
 e('calf','Calf raise con manubri',2,'15–20',45,'Sali sulle punte e scendi lentamente. Mantieni equilibrio e caviglie allineate.'),
 e('abwheel','Ab Wheel dalle ginocchia',2,'5–8',60,'Addome e glutei attivi. Allontana la ruota solo finché mantieni la schiena stabile, poi torna.'),
 e('plank','Plank',2,'30–45 s',45,'Gomiti sotto le spalle. Corpo allineato, bacino stabile e respiro regolare. Timer base 30 s; puoi continuare fino a 45 s.',30) ]},
 D:{name:'Braccia leggere e mobilità',day:'Giovedì',intense:false,ex:[
 e('bandcurl','Curl con elastico a resistenza leggera',2,'12–15',60,'Elastico sotto i piedi, gomiti ai fianchi. Resistenza facile: lascia almeno 5 ripetizioni di margine.'),
 e('lighttriceps','Estensioni tricipiti con manubrio leggero',2,'12–15',60,'Un manubrio leggero sopra la testa, a due mani. Muovi gli avambracci mantenendo i gomiti stabili.'),
 e('pullapart','Band pull-apart',2,'12–15',45,'Braccia davanti al petto. Apri un elastico leggero avvicinando le scapole, senza alzare le spalle.'),
 e('external','Rotazioni esterne delle spalle con elastico',2,'10 per lato',45,'Gomiti piegati a 90° e vicini ai fianchi. Con un elastico tra le mani, apri un avambraccio per volta; l’altra mano resta ferma.'),
 e('hipankle','Mobilità delle anche e caviglie',1,'5 minuti',0,'Alterna spostamenti lenti in mezzo inginocchiamento per l’anca e ginocchio verso la punta del piede con tallone a terra. Cambia lato.',300),
 e('stretchupper','Stretching leggero della parte superiore',1,'4 minuti',0,'Alterna braccio davanti al petto, tricipite sopra la testa e apertura delicata del petto. Respira e cambia lato senza molleggiare.',240) ]},
 E:{name:'Petto, schiena e braccia',day:'Venerdì',intense:true,ex:[
 e('incline','Panca inclinata 30° con manubri',3,'10–12',90,'Panca a 30°. Piedi stabili, scapole appoggiate. Scendi con controllo e spingi sopra il petto.'),
 {...e('trxrow','TRX Row · rematore in sospensione',3,'8–12',75,'Corpo allineato. Tira le maniglie verso il torace e torna lentamente. Riduci l’inclinazione per facilitare.'),alt:'chestrow'},
 e('pushup','Push-up con maniglie',2,'8–15',75,'Maniglie stabili su superficie antiscivolo. Corpo allineato; piega i gomiti senza forzare spalle o polsi.'),
 e('hammer','Curl a martello con manubri',2,'10–12',60,'Palmi rivolti uno verso l’altro. Gomiti fermi, niente oscillazioni del busto.'),
 e('eztriceps','Estensione tricipiti con EZ da sdraiato',2,'10–12',60,'Da supino sulla panca, braccia sopra le spalle. Piega i gomiti portando l’EZ verso la testa e distendi con controllo.'),
 e('rearfly','Alzate posteriori con manubri',2,'12–15',60,'Busto inclinato e schiena neutra. Apri le braccia lateralmente con gomiti morbidi e poco peso.'),
 e('reverse','Crunch inverso',2,'12–15',45,'Da supino, ginocchia piegate. Arrotola leggermente il bacino verso il torace, senza slancio.') ]}
};
export const alternatives={
 chairsquat:{id:'chairsquat',name:'Squat a corpo libero verso panca',cue:'Alternativa senza ancoraggio. Panca stabile contro una parete. Siediti e rialzati nell’ampiezza comoda, senza usare cinghie.'},
 scapfree:{id:'scapfree',name:'Retrazioni scapolari in piedi',cue:'Alternativa senza ancoraggio. In piedi, braccia rilassate. Avvicina delicatamente le scapole, senza alzare le spalle, e rilascia.'},
 chestrow:{id:'chestrow',name:'Rematore con manubri, petto su panca',cue:'Alternativa senza ancoraggio. Appoggia il petto alla panca inclinata, piedi stabili. Tira i gomiti verso i fianchi senza sollevare il busto.'}
};
export function exercises(id,settings){const w=workouts[id];return w.ex.map(x=>({...x,...(x.alt&&!settings.trx?alternatives[x.alt]:{}),sets:w.intense&&settings.phase==='intro'?Math.min(2,x.sets):x.sets}));}
