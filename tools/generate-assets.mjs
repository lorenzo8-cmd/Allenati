import fs from 'node:fs';
const root=new URL('../',import.meta.url);fs.mkdirSync(new URL('assets/',root),{recursive:true});
// Original vector artwork. Each pose uses explicit joints, equipment and motion endpoints.
const clone=x=>structuredClone(x);
const stand={h:[200,43],s:[200,76],p:[200,151],el:[168,120],er:[232,120],wl:[165,155],wr:[235,155],kl:[180,193],kr:[220,193],fl:[174,239],fr:[226,239]};
const pose=(over={})=>({...clone(stand),...over});
const line=(a,b,color='#658676',width=7)=>`<path d="M${a} L${b}" stroke="${color}" stroke-width="${width}" fill="none" stroke-linecap="round"/>`;
const bench=line([100,175],[255,175])+line([125,175],[125,240])+line([235,175],[235,240]);
const inclineBench=line([108,125],[195,175])+line([195,175],[251,175])+line([135,143],[135,240])+line([236,175],[236,240]);
const chair=line([250,174],[325,174])+line([268,174],[268,240])+line([310,174],[310,240]);
const wall=line([320,35],[320,245]);
const specs={};
function add(id,label,a,b,gear='',weights='',hint=''){specs[id]={label,a,b,gear,weights,hint};}
const lying=pose({h:[104,148],s:[130,157],p:[220,158],el:[138,186],er:[156,189],wl:[118,147],wr:[149,148],kl:[263,193],kr:[244,194],fl:[270,239],fr:[247,239]});
add('flat','Panca piana',lying,{...lying,el:[136,112],er:[150,113],wl:[136,68],wr:[150,69]},bench,'db','Spingi sopra il petto');
const inc=pose({...lying,h:[104,99],s:[128,117],p:[213,163],el:[126,149],er:[155,158],wl:[110,111],wr:[146,119]});
add('incline','Panca inclinata 30°',inc,{...inc,el:[142,77],er:[158,84],wl:[148,35],wr:[162,40]},inclineBench,'db','Panca a 30° · scapole appoggiate');
const row=pose({h:[135,85],s:[156,107],p:[243,137],el:[166,145],er:[196,152],wl:[175,175],wr:[200,190],kl:[238,175],kr:[275,189],fl:[281,175],fr:[291,239]});
add('row','Rematore su panca',row,{...row,er:[228,128],wr:[198,145]},bench,'right','Gomito verso il fianco · poi cambia lato');
const curls=pose({el:[169,125],er:[231,125],wl:[164,166],wr:[236,166]});
const curlsEnd={...curls,wl:[175,84],wr:[225,84]};
add('ezcurl','Curl con EZ',curls,curlsEnd,'','ez','Gomiti fermi · niente slancio');
add('hammer','Curl a martello',curls,curlsEnd,'','hammer','Palmi uno verso l’altro');
const tri=pose({el:[175,35],er:[225,35],wl:[199,65],wr:[201,65]});
const triEnd={...tri,wl:[199,9],wr:[201,9]};
add('french','French press con manubrio',tri,triEnd,'','single','Gomiti stabili · muovi gli avambracci');
add('lighttriceps','Tricipiti leggeri',tri,triEnd,'','single','Peso leggero · almeno 5 ripetizioni di margine');
const supine=pose({h:[91,222],s:[121,224],p:[216,224],el:[148,236],er:[150,238],wl:[188,240],wr:[190,242],kl:[243,178],kr:[251,180],fl:[288,180],fr:[296,182]});
add('reverse','Crunch inverso',supine,{...supine,p:[207,207],kl:[180,167],kr:[188,169],fl:[223,147],fr:[231,149]},'','','Bacino leggermente sollevato · senza slancio');
const thor=pose({h:[90,200],s:[120,207],p:[208,211],el:[153,189],wl:[185,171],er:[155,193],wr:[186,174],kl:[226,239],kr:[230,242],fl:[284,231],fr:[288,234]});
add('thoracic','Rotazione toracica sul fianco',thor,{...thor,er:[107,164],wr:[90,121]},'','','Apri il torace · bacino fermo · cambia lato');
const band=pose({el:[152,115],er:[248,115],wl:[118,143],wr:[282,143]});
add('bandshoulder','Mobilità spalle con elastico',band,{...band,el:[160,43],er:[240,43],wl:[133,15],wr:[267,15]},'','band','Presa larga · sali solo nell’ampiezza comoda');
const sq=pose({h:[217,49],s:[223,77],p:[250,151],el:[192,90],er:[200,94],wl:[163,99],wr:[171,103],kl:[219,195],kr:[237,195],fl:[214,239],fr:[239,239]});
const sqEnd={...sq,h:[209,97],s:[218,124],p:[275,175],el:[188,115],er:[196,119],wl:[158,106],wr:[166,110],kl:[216,190],kr:[234,190]};
add('trxsquat','Squat assistito con TRX',sq,sqEnd,'','straps','Cinghie in lieve tensione · ginocchia comode');
add('chairsquat','Squat verso panca senza TRX',sq,sqEnd,chair,'','Siediti e rialzati · panca stabile');
const gob=pose({...sq,el:[186,100],er:[207,103],wl:[207,80],wr:[219,85]});
add('goblet','Goblet squat verso panca',gob,{...sqEnd,el:[184,147],er:[205,151],wl:[205,126],wr:[217,131]},chair,'single','Inizia senza peso · non forzare il ginocchio');
const trx=pose({h:[217,59],s:[228,84],p:[246,155],el:[190,93],er:[198,98],wl:[150,100],wr:[158,105],kl:[267,197],kr:[276,197],fl:[289,239],fr:[298,239]});
add('scaprow','TRX scapular row',trx,{...trx,h:[222,57],s:[233,82],p:[249,154],el:[193,91],er:[201,96],wl:[153,98],wr:[161,103]},'','straps','Gomiti distesi · solo un piccolo movimento scapolare');
add('scapfree','Retrazioni scapolari in piedi',stand,{...stand,el:[173,120],er:[227,120],wl:[170,155],wr:[230,155]},'','','Avvicina le scapole senza alzare le spalle');
const bug={...supine,el:[128,183],er:[140,183],wl:[130,143],wr:[145,143]};
add('deadbug','Dead bug · arti opposti',bug,{...bug,el:[86,214],wl:[47,207],kr:[262,211],fr:[310,220]},'','','Estendi braccio e gamba opposti · alterna');
const rdl=pose({h:[193,45],s:[199,73],p:[208,151],el:[187,113],er:[213,114],wl:[181,155],wr:[214,157]});
add('rdl','Stacco rumeno',rdl,{...rdl,h:[112,117],s:[139,126],p:[218,151],el:[142,165],er:[165,170],wl:[145,207],wr:[168,212],kl:[182,193],kr:[225,193]},'','db','Bacino indietro · pesi vicini alle gambe');
const seated=pose({h:[200,56],s:[200,87],p:[200,172],el:[152,101],er:[248,101],wl:[152,58],wr:[248,58],kl:[166,197],kr:[234,197],fl:[162,239],fr:[238,239]});
add('shoulderpress','Shoulder press da seduto',seated,{...seated,el:[171,54],er:[229,54],wl:[181,12],wr:[219,12]},line([160,184],[242,184])+line([200,184],[200,240])+line([205,177],[205,80]),'db','Spingi sopra le spalle · schiena stabile');
const lat=pose({el:[161,114],er:[239,114],wl:[149,151],wr:[251,151]});
add('lateral','Alzate laterali',lat,{...lat,el:[153,80],er:[247,80],wl:[109,87],wr:[291,87]},'','db','Sali fino alle spalle · gomiti morbidi');
add('calf','Calf raise',stand,Object.fromEntries(Object.entries(stand).map(([k,p])=>[k,[p[0],p[1]-(k==='fl'||k==='fr'?0:12)]])),'','db','Sali sulle punte · discesa lenta');
const wheel=pose({h:[166,98],s:[188,119],p:[252,161],el:[171,161],er:[181,162],wl:[156,206],wr:[166,207],kl:[239,230],kr:[250,232],fl:[301,217],fr:[312,219]});
add('abwheel','Ab Wheel dalle ginocchia',wheel,{...wheel,h:[110,145],s:[139,153],p:[221,182],el:[108,180],er:[118,182],wl:[77,206],wr:[87,207]},'','wheel','Escursione breve · non inarcare la schiena');
const plank=pose({h:[102,153],s:[127,165],p:[217,190],el:[124,232],er:[141,234],wl:[87,233],wr:[103,235],kl:[261,210],kr:[267,212],fl:[307,239],fr:[313,241]});
add('plank','Plank sugli avambracci',plank,{...plank,s:[127,164]},'','','Mantieni la posizione · respira regolarmente');
add('bandcurl','Curl con elastico leggero',curls,curlsEnd,'','bandfeet','Elastico sotto i piedi · tensione facile');
const apart=pose({el:[172,87],er:[228,87],wl:[179,100],wr:[221,100]});
add('pullapart','Band pull-apart',apart,{...apart,el:[151,83],er:[249,83],wl:[105,89],wr:[295,89]},'','band','Apri davanti al petto · spalle basse');
const ext=pose({el:[171,116],er:[229,116],wl:[194,101],wr:[206,101]});
add('external','Rotazione esterna con elastico',ext,{...ext,wr:[264,103]},'','band','Gomito al fianco · poi cambia lato');
const trxRow=pose({...trx,h:[231,80],s:[245,103],p:[269,161],kl:[286,201],kr:[295,201],el:[207,103],er:[215,108],wl:[168,105],wr:[176,110]});
add('trxrow','Rematore in sospensione',trxRow,{...trxRow,h:[193,62],s:[211,85],p:[250,151],el:[230,112],er:[238,117],wl:[193,115],wr:[201,120],kl:[279,196],kr:[288,196]},'','straps','Corpo allineato · tira le maniglie al torace');
const cr=pose({h:[152,94],s:[174,119],p:[235,169],el:[166,159],er:[188,165],wl:[160,199],wr:[182,205],kl:[258,200],kr:[271,201],fl:[271,239],fr:[286,240]});
add('chestrow','Rematore a petto appoggiato',cr,{...cr,el:[208,135],er:[227,145],wl:[174,157],wr:[196,167]},line([154,128],[237,189])+line([188,154],[188,240])+line([240,190],[240,240]),'db','Petto sulla panca · gomiti verso i fianchi');
const push=pose({...plank,h:[103,119],s:[128,136],p:[216,175],el:[123,181],er:[140,183],wl:[116,228],wr:[133,230]});
add('pushup','Push-up con maniglie',push,{...push,h:[101,165],s:[127,180],p:[217,205],el:[159,203],er:[175,205]},line([104,234],[129,234])+line([124,240],[124,230])+line([136,234],[154,234]),'','Corpo allineato · piega e distendi i gomiti');
const ezt={...lying,el:[137,114],er:[153,114],wl:[99,96],wr:[115,96]};
add('eztriceps','Estensioni con EZ da sdraiato',ezt,{...ezt,wl:[140,70],wr:[156,70]},bench,'ez','Braccia ferme · piega solo i gomiti');
const rear=pose({h:[143,95],s:[166,120],p:[230,164],el:[161,159],er:[187,161],wl:[159,199],wr:[185,201],kl:[171,199],kr:[229,199]});
add('rearfly','Alzate posteriori',rear,{...rear,el:[132,102],er:[207,110],wl:[93,109],wr:[248,122]},'','db','Busto inclinato · apri lateralmente');
const marchEnd=pose({el:[165,101],er:[236,127],wl:[184,72],wr:[248,164],kl:[164,162],fl:[163,205]});
add('march','Marcia sul posto',stand,marchEnd,'','','Passo comodo · alterna le gambe');
add('warmup','Riscaldamento · marcia e mobilità',stand,marchEnd,'','','Poi una serie leggera del primo esercizio');
const hip=pose({h:[180,80],s:[188,108],p:[208,172],el:[163,136],er:[214,140],wl:[144,165],wr:[230,175],kl:[145,183],kr:[247,235],fl:[130,239],fr:[300,237]});
const hip2={...hip,h:[171,80],s:[179,108],p:[199,172],kl:[135,183]};
const calf=pose({h:[255,61],s:[262,91],p:[234,161],el:[289,99],er:[295,105],wl:[316,91],wr:[318,107],kl:[260,196],kr:[197,200],fl:[279,239],fr:[159,239]});
const chest=pose({el:[151,89],er:[249,89],wl:[136,51],wr:[264,51]});
const shoulder=pose({el:[214,95],er:[218,109],wl:[252,104],wr:[197,80]});
add('hipankle','Mobilità anche e caviglie',hip,hip2,'','','Anca · cambia lato; poi mobilità caviglia');
add('stretchlower','Anche, petto e polpacci',hip,hip2,'','','Tensione lieve · cambia lato ad ogni posizione');
add('stretchupper','Stretching della parte superiore',shoulder,{...shoulder,wl:[255,102]},'','','Spalla · tricipite · apertura del petto');
function animate(attr,a,b){return `<animate attributeName="${attr}" values="${a};${b};${a}" dur="4s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines=".4 0 .6 1;.4 0 .6 1"/>`;}
function path(points){return 'M'+points.map(p=>p.join(',')).join(' L');}
function movingPath(a,b,color,width){return `<path d="${path(a)}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">${animate('d',path(a),path(b))}</path>`;}
function circle(a,b,r,fill){return `<circle cx="${a[0]}" cy="${a[1]}" r="${r}" fill="${fill}">${animate('cx',a[0],b[0])}${animate('cy',a[1],b[1])}</circle>`;}
function figure(a,b,gear,weights){let out=gear;const limb=(keys,color,width)=>movingPath(keys.map(k=>a[k]),keys.map(k=>b[k]),color,width);
 // Far limbs darker, near limbs brighter; a filled shirt and shorts make the person legible.
 out+=limb(['p','kr','fr'],'#577b7e',16)+limb(['s','er','wr'],'#b88061',13)+limb(['s','p'],'#75b9b0',35)+limb(['p','kl'],'#49616e',20)+limb(['p','kr'],'#405662',20)+limb(['kl','fl'],'#e2ab82',14)+limb(['s','el','wl'],'#edbd95',14);
 out+=circle(a.h,b.h,17,'#edbd95');out+=movingPath([[a.h[0]-12,a.h[1]-10],[a.h[0]+9,a.h[1]-14]],[[b.h[0]-12,b.h[1]-10],[b.h[0]+9,b.h[1]-14]],'#35433c',10);
 for(const k of ['fl','fr'])out+=movingPath([[a[k][0]-7,a[k][1]],[a[k][0]+10,a[k][1]]],[[b[k][0]-7,b[k][1]],[b[k][0]+10,b[k][1]]],'#d6e5e0',8);
 const dumb=(k,vertical=false)=>{const offsets=vertical?[[0,-11],[0,11]]:[[-11,0],[11,0]];let s=movingPath(offsets.map(o=>[a[k][0]+o[0],a[k][1]+o[1]]),offsets.map(o=>[b[k][0]+o[0],b[k][1]+o[1]]),'#d6e5e0',5);for(const o of offsets)s+=circle([a[k][0]+o[0],a[k][1]+o[1]],[b[k][0]+o[0],b[k][1]+o[1]],6,'#abc9db');return s;};
 if(weights==='db'||weights==='hammer')out+=dumb('wl',weights==='hammer')+dumb('wr',weights==='hammer');
 if(weights==='right')out+=dumb('wr');if(weights==='single')out+=dumb('wl',true);
 if(weights==='ez')out+=movingPath([a.wl,a.wr],[b.wl,b.wr],'#dce5eb',6)+dumb('wl',true)+dumb('wr',true);
 if(weights==='band')out+=movingPath([a.wl,a.wr],[b.wl,b.wr],'#eabf69',4);
 if(weights==='bandfeet')out+=movingPath([a.wl,a.fl,a.fr,a.wr],[b.wl,b.fl,b.fr,b.wr],'#eabf69',3);
 if(weights==='straps')out+=movingPath([[80,18],a.wl],[[80,18],b.wl],'#eabf69',4)+movingPath([[80,18],a.wr],[[80,18],b.wr],'#eabf69',4)+circle([80,18],[80,18],6,'#d2dfdb');
 if(weights==='wheel')out+=circle([a.wl[0],225],[b.wl[0],225],15,'#91b9c5')+circle([a.wl[0],225],[b.wl[0],225],6,'#28483a');
 return out;}
for(const [id,s] of Object.entries(specs)){
 let art=figure(s.a,s.b,s.gear,s.weights);
 if(['stretchlower','stretchupper','hipankle'].includes(id)){
 const variants=id==='stretchlower'?[[hip,hip2,'','Anche · entrambi i lati'],[chest,chest,'','Petto · apertura delicata'],[calf,calf,wall,'Polpacci · entrambi i lati']]:id==='stretchupper'?[[shoulder,shoulder,'','Spalla · entrambi i lati'],[tri,tri,'','Tricipite · entrambi i lati'],[chest,chest,'','Petto · apertura delicata']]:[[hip,hip2,'','Anche · entrambi i lati'],[calf,{...calf,kl:[268,196]},wall,'Caviglie · tallone a terra']];
 art=variants.map(([a,b,g,label],i)=>`<g opacity="${i===0?1:0}"><animate attributeName="opacity" values="${variants.map((_,j)=>i===j?1:0).join(';')};${i===0?1:0}" dur="${variants.length*5}s" repeatCount="indefinite" calcMode="discrete"/>${figure(a,b,g,'')}<rect x="0" y="254" width="400" height="26" fill="#11211c"/><text x="200" y="270" text-anchor="middle" fill="#bdd8ca" font-family="sans-serif" font-size="11">${label}</text></g>`).join('');
 }
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" role="img"><title>${s.label}</title><desc>${s.hint}. Illustration originale animée.</desc><rect width="400" height="280" fill="#11211c"/><ellipse cx="205" cy="246" rx="155" ry="7" fill="#0b1913"/>${line([40,246],[360,246],'#2c4838',2)}${art}</svg>`;
 fs.writeFileSync(new URL('assets/'+id+'.svg',root),svg);
}
const files=['./','./index.html','./style.css','./app.js','./data.js','./storage.js','./manifest.webmanifest','./icon.png',...Object.keys(specs).map(id=>'./assets/'+id+'.svg')];
fs.writeFileSync(new URL('service-worker.js',root),`// Versioned, complete offline bundle. A failed installation never replaces the working version.
const CACHE='allenati-v3-20261103-1';
const FILES=${JSON.stringify(files,null,2)};
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(url=>new Request(url,{cache:'reload'}))))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys()){if(key.startsWith('allenati-')&&key!==CACHE)await caches.delete(key);}await self.clients.claim();})()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith((async()=>{const cache=await caches.open(CACHE);if(event.request.mode==='navigate')return await cache.match('./index.html')||fetch(event.request);return await cache.match(event.request)||fetch(event.request);})());});
self.addEventListener('message',event=>{if(event.data?.type==='VERIFY_OFFLINE')event.waitUntil((async()=>{const cache=await caches.open(CACHE);let results=await Promise.all(FILES.map(url=>cache.match(url)));if(!results.every(Boolean)){try{const script=await fetch('./service-worker.js',{cache:'no-store'});if(script.ok&&(await script.text()).includes(CACHE)){await cache.addAll(FILES.filter((_,i)=>!results[i]).map(url=>new Request(url,{cache:'reload'})));results=await Promise.all(FILES.map(url=>cache.match(url)));}}catch{}}event.ports[0]?.postMessage({ready:results.every(Boolean),version:CACHE});})());});
`);
console.log('Created '+Object.keys(specs).length+' original animated assets and complete cache manifest.');

