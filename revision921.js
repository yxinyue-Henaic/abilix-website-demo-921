/* September 21 PDF revision. Content remains live HTML in both languages. */
images.homeHero='assets/revision921/home-robots.jpg';
// Keep all downloads; match the PDF's public-download-first order.
downloadItems.sort((a,b)=>Number(!!a.localPath)-Number(!!b.localPath));
const previous921 = {...pages};
const headerBefore921 = header;
header = active => {
 const doc = template0911(headerBefore921(active));
 doc.content.querySelector('.logo').innerHTML='<img class="brand921" src="assets/revision921/abilix-logo.png" alt="Abilix 能力风暴">';
 const nav=doc.content.querySelector('.primary-nav');
 const items=['solutions','products','curriculum','techniques','wer','resources','stories'];
 nav.innerHTML=items.map(r=>link(r,L(t(routeLabel[r]),routeLabel[r]),active===r?'active':'')).join('');
 doc.content.querySelector('.language-switch span').textContent=L('En','中');
 return html0911(doc);
};
const footerBefore921=footer;
footer=()=>{const doc=template0911(footerBefore921());doc.content.querySelectorAll('.c-contact-row,.c-footer-bottom').forEach(e=>e.remove());return html0911(doc);};
const philosophyIcons921=[
 '<path d="M24 4 30 20 46 26 30 32 24 48 18 32 2 26 18 20Z"/><path d="m46 2 3 8 8 3-8 3-3 8-3-8-8-3 8-3Zm4 36 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z"/>',
 '<rect x="8" y="42" width="12" height="16" rx="6"/><rect x="26" y="24" width="12" height="34" rx="6"/><rect x="44" y="4" width="12" height="54" rx="6"/>',
 '<circle cx="39" cy="16" r="14"/><path d="M5 27h10v31H5zm17 0 15 4 11 10 13 3-2 8-23-1-14-9Zm0 20h12v11H22z"/>'
];
pages.home=()=>{
 const doc=template0911(previous921.home()),main=doc.content.querySelector('main');
 main.insertAdjacentHTML('afterbegin',`<section class="intro921" aria-label="${L('能力风暴主视觉','Abilix highlights')}" aria-roledescription="carousel"><div class="intro921-slides">${[images.homeHero,images.wer,images.productHero,images.children,S+'training-centers.png',images.xiaoxingHero].map((src,i)=>`<img class="intro921-slide ${i===0?'active':''}" src="${src}" alt="${L('教育机器人与学习实践','Educational robotics and learning')}" ${i?'loading="lazy"':''}>`).join('')}</div><div class="intro921-shade"></div><div class="intro921-copy"><p>${L('教育机器人 · STEAM 课程 · 全球赛事','Educational Robots · STEAM Curriculum · Global Competition')}</p><h2>${L('教育机器人<br>全球开创者','Pioneering<br>Educational<br>Robotics')}</h2><div>${L('能力风暴将教育机器人、课堂解决方案、课程支持与 WER 竞赛成长路径融入一体化优质学习生态。','Abilix brings educational robots, classroom solutions,<br>curriculum support and WER competition pathways into one<br>premium learning ecosystem.')}</div></div><div class="intro921-pages">${Array.from({length:6},(_,i)=>`<button type="button" data-intro-slide="${i}" class="${i===0?'active':''}" aria-label="${L('显示第 '+(i+1)+' 张','Show slide '+(i+1))}" aria-current="${i===0}"></button>`).join('')}</div></section>`);
 doc.content.querySelector('.c-hero-bottom').remove();
 doc.content.querySelector('.c-hero-text .c-button').href='#/stories';
 doc.content.querySelectorAll('.c-news-card').forEach(card=>{
  card.querySelector('[data-news-toggle]')?.remove();
  const body=card.querySelector('.r-news-body');
  if(body){body.hidden=false;body.className='news921-summary';}
 });
 doc.content.querySelector('.c-hero-text h1').innerHTML=L('教育机器人<br>全球开创者','Pioneering<br>educational<br>robotics.');
 const caption=doc.content.querySelector('.c-collage-caption');caption.querySelector('b').remove();caption.append(doc.content.querySelector('.c-hero-year'));
 doc.content.querySelectorAll('.c-section-heading .c-eyebrow').forEach(e=>{e.textContent=e.textContent.replace(/^\d+\s*\/\s*/,'');});
 doc.content.querySelectorAll('.r-ability-row>div').forEach((el,i)=>{el.querySelector('span').outerHTML=`<svg viewBox="0 0 64 64" aria-hidden="true">${philosophyIcons921[i]}</svg>`;});
 main.insertAdjacentHTML('beforeend',`<section class="facts921"><div class="container"><div><h2>${L('一家机器人教育公司，<br>更是一套完整的学习体系','A robotics education<br>company built as a complete<br>learning system.')}</h2><p>${L('能力风暴提供面向 STEAM 的机器人产品、系统化学校实验室、家庭学习中心、教学材料与 WER 竞赛成长路径。','From the brand manual: Abilix provides STEAM-ready robot products, systematic school labs, home learning centers, teaching materials and WER competition pathways.')}</p></div><div class="facts921-grid">${[['600+',L('专利技术','patented technologies')],['120+',L('机器人种类','robot types')],['100+',L('教学材料','teaching materials')],['50+',L('国家与地区','countries & regions')],['40K+',L('学校与机构','schools & institutes')],['500K+',L('每年 WER 参赛者','WER contestants yearly')]].map(v=>`<div><strong>${v[0]}</strong><span>${v[1]}</span></div>`).join('')}</div></div></section>`);
 return html0911(doc);
};
pages.curriculum=()=>{
 const doc=template0911(previous921.curriculum());doc.content.querySelector('main').classList.add('curriculum921');
 doc.content.querySelector('.c-local-nav').remove();
 doc.content.querySelector('.page-hero').style.setProperty('--hero-image',"url('assets/revision921/curriculum-hero.jpg')");
 doc.content.querySelector('.page-hero').insertAdjacentHTML('afterend',strapline(L('我们创造的不只是机器人，更激发创造者。','We Build More Than Robots. We Inspire Creators.')));
 doc.content.querySelector('.hero-summary').textContent=L('能力风暴将机器人、编程软件、教师资源与课程教材整合为系统化的 AI 素养教育体系。','Abilix combines robots, programming software, teacher resources and course materials into a structured AI literacy system.');
 doc.content.querySelectorAll('.c-course-title .c-eyebrow,.c-course-layout .c-link,.c-curriculum-note').forEach(e=>e.remove());
 doc.content.querySelectorAll('.c-course-disclosure').forEach(e=>{const block=document.createElement('article');block.className='course921-group';block.innerHTML=`<h3>${e.querySelector('summary').childNodes[0].textContent}</h3>${e.querySelector('p').outerHTML}`;e.replaceWith(block);});
 return html0911(doc);
};
pages.products=()=>{
 const doc=template0911(previous921.products());doc.content.querySelector('main').classList.add('products921');
 doc.content.querySelector('.pc-hero').outerHTML=pageHero({title:L('产品','Products'),summary:L('浏览产品系列或按年龄筛选，了解产品详情与配套信息。','Browse product families or filter by age. Each card leads into product details with product information and Add to Bag.'),image:images.productHero})+strapline(L('我们创造的不只是机器人，更激发创造者。','We Build More Than Robots. We Inspire Creators.'));
 doc.content.querySelector('.pc-ai-copy h2').textContent=L('AI 机器人','AI Robots');
 doc.content.querySelectorAll('.pc-section-index,.pc-ai-copy>.eyebrow,.pc-highlight-list').forEach(e=>e.remove());
 doc.content.querySelector('.r-family-overview .c-section-heading h2').innerHTML=L('教育机器人','Educational<br>Robots');
 doc.content.querySelectorAll('.r-family-overview .c-section-heading .c-eyebrow').forEach(e=>e.remove());
 doc.content.querySelector('.series-accordion').innerHTML=seriesCatalog.filter(s=>['krypton','school-krypton'].includes(s.id)).map(productCenterSeriesPanel).join('');
 doc.content.querySelectorAll('.series-type').forEach((el,i)=>el.textContent=i?'AGE 9-12/12+':'AGE 9-12');
 doc.content.querySelectorAll('.series-accordion-image').forEach((im,i)=>im.src='assets/revision921/'+(i?'school-krypton':'krypton')+'.jpg');
 doc.content.querySelectorAll('.series-models span').forEach(el=>{if(currentLanguage==='zh')el.textContent=t(el.textContent);});
 doc.content.querySelectorAll('.series-accordion-action').forEach((a,i)=>a.href=i?'#/products-education?family=sk':'#/products-education?family=krypton');
 return html0911(doc);
};
const originalEnvironments921=solutionItems.map(s=>({...s}));
pages.solutions=()=>{
 solutionItems.splice(0,solutionItems.length,...originalEnvironments921);
 const doc=template0911(originalSolutions910());doc.content.querySelector('main').classList.add('solutions921');
 doc.content.querySelector('[data-panel="environments"].solution-mode-tab').textContent=L('浏览三大场景','Explore three environments');
 const panel=doc.content.querySelector('.solution-mode-panel[data-panel="environments"]');
 const cards=template0911(previous921.solutions()).content.querySelector('#choose-solution');
 solutionItems.splice(0,solutionItems.length,...originalEnvironments921);
 cards.classList.remove('solution-mode-panel');cards.hidden=false;
 panel.insertBefore(cards,panel.querySelector('.education-functions'));
 const host=document.createElement('div');host.id='solution-details';host.className='container r-solution-detail-host';host.setAttribute('aria-live','polite');
 const id=new URLSearchParams(location.hash.split('?')[1]||'').get('id')||'base';host.innerHTML=solutionDetail0911(id);panel.insertBefore(host,panel.querySelector('.education-functions'));
 panel.querySelector('.education-functions').insertAdjacentHTML('afterbegin',`<p class="c-eyebrow">${L('核心学习领域','KEY LEARNING AREAS')}</p>`);
 if(location.hash.includes('id=')||location.hash.includes('section=solution-scenes')){doc.content.querySelectorAll('.solution-mode-panel').forEach(e=>e.hidden=e!==panel);doc.content.querySelectorAll('.solution-mode-tab').forEach(e=>{const on=e.dataset.panel==='environments';e.classList.toggle('active',on);e.setAttribute('aria-selected',String(on));});}
 return html0911(doc);
};
pages['solution-detail']=pages.solutions;
pages.techniques=()=>{const doc=template0911(previous921.techniques());doc.content.querySelector('main').classList.add('techniques921');doc.content.querySelector('.c-theory-hero>.c-eyebrow')?.remove();doc.content.querySelector('.c-theory-hero .c-eyebrow').remove();doc.content.querySelector('.c-soft').id='theory-foundations';const more=doc.content.querySelector('.c-theory-hero .c-button');more.href='#theory-foundations';more.innerHTML=L('了解更多','Learn More')+'<span class="r-arrow" aria-hidden="true">↓</span>';doc.content.querySelectorAll('.c-eyebrow').forEach(e=>e.textContent=e.textContent.replace(/^\d+\s*\/\s*/,''));return html0911(doc);};
pages.stories=()=>{const doc=template0911(previous921.stories());doc.content.querySelector('main').classList.add('stories921');doc.content.querySelector('#partnerx .c-eyebrow').textContent='PARTNERX';const first=doc.content.querySelector('.r-company-facts>div');first.querySelector('strong').textContent='30+';first.querySelector('span').textContent=L('能力风暴研发累计年限','Years of research and development');doc.content.querySelectorAll('.c-eyebrow').forEach(e=>e.textContent=e.textContent.replace(/^\d+\s*\/\s*/,''));return html0911(doc);};
const normalizeTitles921=root=>{
 if(currentLanguage!=='zh')return;
 root.querySelectorAll('h1,h2,h3,h4').forEach(el=>{if(parseFloat(getComputedStyle(el).fontSize)<=40)return;const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);for(let i=nodes.length-1;i>=0;i--){if(!nodes[i].nodeValue.trim())continue;nodes[i].nodeValue=nodes[i].nodeValue.replace(/。(?=\s*$)/,'');break;}});
};
const bindBefore921=bindPage;
bindPage=function(route){
 bindBefore921(route);
 const root=document.getElementById('app');root.dataset.route=route;
 if(currentLanguage==='zh')root.querySelectorAll('.c-home .c-section-heading h2,.techniques921 h2,.stories921 .c-section-heading h2').forEach(e=>e.innerHTML=e.innerHTML.replace(/。(?=<|$)/g,''));
 normalizeTitles921(root);
 const observer=new MutationObserver(()=>normalizeTitles921(root));observer.observe(root,{childList:true,subtree:true});
 const previousCleanup=cleanup910;cleanup910=()=>{observer.disconnect();previousCleanup();};
 if(route==='home'){
  const slides=[...root.querySelectorAll('.intro921-slide')],buttons=[...root.querySelectorAll('[data-intro-slide]')];let index=0;
  const select=i=>{index=i;slides.forEach((e,n)=>e.classList.toggle('active',n===i));buttons.forEach((e,n)=>{e.classList.toggle('active',n===i);e.setAttribute('aria-current',String(n===i));});};
  buttons.forEach((b,i)=>b.addEventListener('click',()=>select(i)));
  const timer=matchMedia('(prefers-reduced-motion:reduce)').matches?null:setInterval(()=>select((index+1)%slides.length),5500);
  const milestones=[...root.querySelectorAll('[data-milestone]')];
  const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
  let timelineTimer;
  const wave=i=>{
   if(reduced)return;
   milestones.forEach((button,n)=>{
    const dot=button.querySelector('i');
    if(dot){dot.getAnimations().forEach(a=>a.cancel());dot.animate([{transform:'translateY(0)'},{transform:`translateY(-${n===i?12:6}px)`},{transform:'translateY(0)'}],{duration:500,delay:Math.abs(n-i)*70,easing:'ease-in-out'});}
   });
   const panel=root.querySelector('#milestone-panel');
   panel.getAnimations().forEach(a=>a.cancel());
   panel.animate([{opacity:.35,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:400,easing:'ease-out'});
  };
  const startTimeline=()=>{
   clearInterval(timelineTimer);
   timelineTimer=setInterval(()=>{
    const active=milestones.findIndex(b=>b.classList.contains('active'));
    milestones[(active+1)%milestones.length]?.click();
   },5000);
  };
  milestones.forEach((button,i)=>{
   button.addEventListener('click',()=>{wave(i);startTimeline();});
   button.addEventListener('pointerenter',()=>{if(!button.classList.contains('active'))button.click();});
   button.addEventListener('focus',()=>{if(!button.classList.contains('active'))button.click();});
  });
  if(milestones.length)startTimeline();
  const old=cleanup910;cleanup910=()=>{clearInterval(timer);clearInterval(timelineTimer);old();};
 }
};
Object.defineProperty(bindPage,'solutionCleanup',{get:()=>bindBefore921.solutionCleanup,set:v=>{bindBefore921.solutionCleanup=v;}});
const educationProductDetails = {
  "modular-h1-b": { name: "Modular H1-B", availability: "archive", series: "Modular", image: A + "588bc550-185b-4e1f-8376-235aed024885.png", stage: "Ages 4-6 · Creative foundations", focus: "Creative construction and observation", competition: "Classroom projects", specs: ["Modular joints", "Reusable components", "Open-ended forms", "Beginner projects"] },
  "modular-h1-s": { name: "Modular H1-S", availability: "archive", series: "Modular", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", stage: "Ages 7-12 · Build and program", focus: "Computational thinking and logic", competition: "Local events", specs: ["Six-face attachment", "Voice interaction", "Image recognition", "Programmable motion"] },
  "krypton-8": { name: "Krypton 8", availability: "available", series: "Krypton", image: A + "b4f5f090-a00c-413c-97dd-31a6e010bd1d.png", stage: "Ages 7-12 · Build and program", focus: "Structures, transmission and dynamics", competition: "Regional selection", specs: ["53 brick types", "1550 components", "33 sensor modes", "10 programmable actuators"] },
  "school-krypton-201": { name: "School Krypton 201", availability: "available", series: "School Krypton", image: A + "0d23e4fe-1d11-42c0-8e77-7d179d104666.png", stage: "Ages 13-18 · Engineer and compete", focus: "Programming, sensors and control", competition: "National & global WER", specs: ["Scratch / C / Python", "AI module interface", "Classroom sensors", "Team projects"] },
  "c203": { name: "C203", availability: "archive", series: "Creative", image: A + "g4a5a54f-esd4f4-02.png", stage: "Ages 7-12 · Build and program", focus: "Strategy, testing and iteration", competition: "Regional selection", specs: ["Free-build platform", "Programmable controller", "Competition drivetrain", "Reusable game set"] },
  "krypton-6": { name: "Krypton 6", availability: "available", series: "Krypton", image: A + "77c3cccc-ad08-43e5-ba90-0b6ad01207e5.png", stage: "Ages 7-12 · Build and program", focus: "Hands-on STEM projects", competition: "Local events", specs: ["Modular construction", "Sensor projects", "Programmable controller", "Curriculum ready"] },
  "transmission-kit": { name: "Transmission Kit", availability: "archive", series: "Creative", image: A + "9c57f744-1e50-4fdf-bf8e-8faa5619fa73.png", stage: "Ages 13-18 · Engineer and compete", focus: "Mechanisms and engineering design", competition: "National & global WER", specs: ["Multiple-DOF design", "Action editor", "Reconfigurable projects", "Engineering challenges"] },
  "creative-series": { name: "Creative", availability: "archive", series: "Creative", image: A + "044086fe-6d3b-473d-a292-f515f6ef8f73.png", stage: "Legacy classroom platform", focus: "Six-face brick construction and flowchart programming", competition: "Historical classroom and WER use", specs: ["C1-T transmission kit", "C1-X dynamics kit", "C1-P intelligent control kit", "C1-S STEM kit"] },
  "modular-series": { name: "Modular", availability: "archive", series: "Modular", image: A + "27c19766-1ef2-428f-b1d2-f1ec44d499c5.png", stage: "Legacy creative platform", focus: "Multi-DOF structures and action editing", competition: "Historical project use", specs: ["H1-B basic kit", "H1-S standard kit", "Reconfigurable joints", "Flowchart and C programming"] },
  "oculus-series": { name: "Oculus", availability: "archive", series: "Oculus", image: A + "1649d71a-b80c-499b-96ca-73ed67f54c79.png", stage: "Legacy home platform", focus: "Autonomous movement and interactive exploration", competition: "Reference only", specs: ["Mobile robot series", "Home learning", "Movement exploration", "Brand archive"] },
  "everest-series": { name: "Everest", availability: "archive", series: "Everest", image: A + "588bc550-185b-4e1f-8376-235aed024885.png", stage: "Legacy humanoid platform", focus: "Humanoid robotics and motion", competition: "Reference only", specs: ["Humanoid robot series", "Motion projects", "Interactive robotics", "Brand archive"] }
};

function educationProductPage921() {
  const params = new URLSearchParams(location.hash.split("?")[1] || location.search.slice(1));
  const selected = educationProductDetails[params.get("model")] || educationProductDetails["krypton-8"];
  const isAvailable = selected.availability === "available";
  const statusLabel = isAvailable ? "Available for purchase" : "Display only · Not for sale";
  const lead = isAvailable ? "Purchase and project enquiries are available through Abilix partners." : "This series is retained for reference and legacy support. It is not currently available for purchase.";
  return `${header("products")}<main id="main" class="education-product-page detail921"><section class="product-breadcrumb container"><a href="#/products-education">← Back to Educational Robots</a><span>${L('产品 / 教育机器人 / ','Products / Educational Robots / ')}${t(selected.name)}</span></section><section class="section container education-product-hero"><div class="education-product-image ${isAvailable ? "" : "archive-image"}"><img src="${selected.image}" alt="${selected.name}"></div><div><div class="detail-status ${isAvailable ? "available" : "archive"}"><span>${statusLabel}</span></div><p class="route-kicker">Educational robot detail</p><h1>${selected.name}</h1><p class="product-lead">${lead}</p><dl><div><dt>Series status</dt><dd>${isAvailable ? "Current product" : "Legacy product archive"}</dd></div><div><dt>Recommended stage</dt><dd>${selected.stage}</dd></div><div><dt>Learning focus</dt><dd>${selected.focus}</dd></div><div><dt>Competition use</dt><dd>${selected.competition}</dd></div></dl><a class="button" href="#product-specs">Key specifications <span>↓</span></a></div></section>
    <section id="product-specs" class="product-spec-band"><div class="container"><div><p class="eyebrow">Key specifications</p><h2>Quick facts for product comparison.</h2></div><ul>${selected.specs.map(spec=>`<li>${spec}</li>`).join("")}</ul></div></section>
    <section class="section container curriculum-fit"><div><p class="eyebrow">Curriculum fit</p><h2>Suggested learning flow</h2></div><ol>${["Explore the concept","Build and program","Test and improve","Present or compete"].map((item,index)=>`<li><span>0${index+1}</span><strong>${item}</strong></li>`).join("")}</ol></section>
    <section class="section container product-resource-links"><div><p class="eyebrow">Resources for this model</p><h2>Continue without searching again.</h2></div><div>${["Specifications","Building manual","Course materials","Competition guide"].map(item=>`<a href="#/resources-download">${item}<span>→</span></a>`).join("")}</div></section>
    <section class="closing"><h2>${selected.name}</h2><p>${isAvailable ? "Purchase and project enquiries are available through Abilix partners." : "This series is retained for reference and legacy support. It is not currently available for purchase."}</p><a class="button" href="#/products-education">${isAvailable ? "Back to all products" : "View available products"} <span>→</span></a></section>
  </main>${footer()}`;
}


const consolidatedEducation921=pages['products-education'];
const detailRoute921=()=>{const q=new URLSearchParams(location.hash.split('?')[1]||'');return educationProductDetails[q.get('model')] || q.get('series')==='creative';};
pages['product-education']=()=>detailRoute921()?educationProductPage921():consolidatedEducation921();
pages.series=()=>{const q=new URLSearchParams(location.hash.split('?')[1]||'');if(q.get('series')==='creative'){history.replaceState(null,'','#/product-education?model=creative-series');return educationProductPage921();}return consolidatedEducation921();};
const xiaoxingBefore921=pages.product;
pages.product=()=>{
 const doc=template0911(xiaoxingBefore921());doc.content.querySelector('main').classList.add('xiaoxing921');
 doc.content.querySelector('.blue-section img').src='assets/revision921/xiaoxing-learning.jpg';
 doc.content.querySelector('.courses img').src='assets/revision921/six-courses.jpg';
 doc.content.querySelector('.reference img').src='assets/revision921/learning-reference.jpg';
 doc.content.querySelector('#main-product-image').src='assets/revision921/xiaoxing-bundle.jpg';
 const firstThumb=doc.content.querySelector('.thumb');firstThumb.dataset.src='assets/revision921/xiaoxing-bundle.jpg';firstThumb.querySelector('img').src=firstThumb.dataset.src;
 const recommendations=doc.content.querySelector('.recommendations');
 recommendations.classList.remove('ch910');
 recommendations.innerHTML=`<div class="recommendations921-heading"><h2>${L('你可能也喜欢','You may also like')}</h2>${link('products',L('查看全部产品 →','View all products →'))}</div><div class="catalog-grid compact">${[['krypton-6',L('轻松开启搭建与编程的第一步。','A playful first step into building and coding.')],['krypton-8',L('更多传感器，更多创造的可能。','More sensors and possibilities for growing creators.')],['modular-h1-s',L('面向复杂工程项目的强大平台。','A powerful platform for complex engineering projects.')]].map(([id,text])=>productCard({...products.find(p=>p.id===id),text})).join('')}</div>`;
 return html0911(doc);
};
Object.assign(zhTranslations,{
 'THREE WAYS TO BEGIN':'三种教育场景','Krypton 0':'氪0','Krypton 2':'氪2','Krypton 4':'氪4','Krypton 6':'氪6','Krypton 8':'氪8','Legacy classroom platform':'经典课堂平台','Six-face brick construction and flowchart programming':'六面搭建与流程图编程','Historical classroom and WER use':'历史课堂及 WER 应用',
 'C1-T transmission kit':'C1-T 传动套件','C1-X dynamics kit':'C1-X 动力套件','C1-P intelligent control kit':'C1-P 智能控制套件','C1-S STEM kit':'C1-S STEM 套件',
 'THE FOUNDATIONS':'教育理论基石','ENGINEERED FOR LEARNING':'为学习而设计','COMPANY OVERVIEW':'公司概况','SUCCESSFUL INTELLIGENCE & SCI-TECH ACCOMPLISHMENT':'成功能力与科技素养',
 'EDUCATIONAL ROBOTS / SK SERIES':'教育机器人 / SK 系列','EDUCATIONAL ROBOTS / KRYPTON':'教育机器人 / 氪系列',
 'Ages 7-12 · Build and program':'7–12 岁 · 搭建与编程','Structures, transmission and dynamics':'结构、传动与动力','Regional selection':'区域选拔',
 '53 brick types':'53 种积木件','1550 components':'1550 个组件','33 sensor modes':'33 种传感模式','10 programmable actuators':'10 个可编程执行器'
});

render();
