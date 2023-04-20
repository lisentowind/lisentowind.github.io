import{u as e}from"./useTheme-f31062af.js";import{u as t,a,b as l,c as s,d as o}from"./@vueuse-ffd23423.js";import{_ as r,u as n,a as i,r as u}from"./index-69ca360d.js";import{I as c,M as p,a as d,b as m,c as v,d as f,e as y,f as h,g,h as k,i as _,j,k as w,l as b,m as x}from"./@arco-design-acd8ebeb.js";import{e as C,k as I,l as M,m as V,v as B,a2 as D,n as E,j as P,x as S,Y as T,r as O,w as z,y as R,z as H,p as Y,R as L,F as W,c as $,o as q,O as A,s as F,u as N,q as U,aa as G,ab as K,A as X,T as J,a9 as Q,C as Z}from"./@vue-81915dab.js";import{u as ee}from"./vue-request-df4aa6aa.js";import{a as te}from"./axios-d4208f68.js";import{W as ae,a as le,C as se,b as oe,c as re,d as ne,e as ie,f as ue,I as ce,L as pe,g as de}from"./@vicons-2c42add2.js";import{_ as me}from"./lodash-f1cc60ca.js";import{d as ve}from"./dayjs-4e4130f1.js";import{l as fe}from"./tsparticles-a13294f6.js";import{C as ye}from"./vanta-f4b42271.js";import{T as he}from"./three-60c1b4bc.js";import"./vue-router-78513810.js";import"./pinia-be98640a.js";import"./vue-demi-71ba0ef2.js";import"./pinia-plugin-persistedstate-d2bd58cf.js";import"./@chenfengyuan-f3c7b2d3.js";import"./qrcode-5d60ce23.js";import"./encode-utf8-2ec93547.js";import"./dijkstrajs-b38e4460.js";import"./vue3-particles-2ac1cbe4.js";import"./resize-observer-polyfill-ad543aa3.js";import"./compute-scroll-into-view-2962e95c.js";import"./b-tween-5055d79e.js";import"./b-validate-42052d35.js";import"./number-precision-d9b928a1.js";import"./scroll-into-view-if-needed-59a60a09.js";import"./@xicons-cc4cf3e8.js";import"./css-render-68140524.js";import"./@emotion-b17c1a96.js";import"./tsparticles-plugin-absorbers-46f4bd18.js";import"./tsparticles-engine-3b45a3b7.js";import"./tsparticles-updater-destroy-348e76ff.js";import"./tsparticles-plugin-emitters-6e196431.js";import"./tsparticles-interaction-external-trail-fea9c673.js";import"./tsparticles-updater-roll-4abe98b5.js";import"./tsparticles-slim-63bc6ee7.js";import"./tsparticles-particles.js-dcf53db0.js";import"./tsparticles-updater-angle-75db1858.js";import"./tsparticles-move-base-2935de58.js";import"./tsparticles-shape-circle-737ec381.js";import"./tsparticles-updater-color-2bc31dc8.js";import"./tsparticles-interaction-external-attract-91ded9d0.js";import"./tsparticles-interaction-external-bounce-42a4f255.js";import"./tsparticles-interaction-external-bubble-bbd648f6.js";import"./tsparticles-interaction-external-connect-8dc84239.js";import"./tsparticles-interaction-external-grab-434f44e4.js";import"./tsparticles-interaction-external-pause-9cbadd08.js";import"./tsparticles-interaction-external-push-2a524e8f.js";import"./tsparticles-interaction-external-remove-8651acb5.js";import"./tsparticles-interaction-external-repulse-b2d991d2.js";import"./tsparticles-interaction-external-slow-8334f1bf.js";import"./tsparticles-shape-image-a2bf34bd.js";import"./tsparticles-updater-life-3fa7a8e9.js";import"./tsparticles-shape-line-612e86e8.js";import"./tsparticles-updater-opacity-1048c156.js";import"./tsparticles-updater-out-modes-8ee9e966.js";import"./tsparticles-move-parallax-fc96831d.js";import"./tsparticles-interaction-particles-attract-634fa4ad.js";import"./tsparticles-interaction-particles-collisions-7001b67f.js";import"./tsparticles-interaction-particles-links-dcf8cc2c.js";import"./tsparticles-shape-polygon-f9644a4d.js";import"./tsparticles-updater-size-15f2fe60.js";import"./tsparticles-shape-square-90b57f4a.js";import"./tsparticles-shape-star-16e96cc2.js";import"./tsparticles-updater-stroke-color-26d760f9.js";import"./tsparticles-shape-text-da60f468.js";import"./tsparticles-updater-tilt-06586844.js";import"./tsparticles-updater-twinkle-d6e8e874.js";import"./tsparticles-updater-wobble-1331d8a9.js";const ge="/assets/logos-11420ab1.png",ke=E("img",{alt:"avatar",src:ge},null,-1),_e=C({__name:"user-info",setup:e=>(e,t)=>{const a=P("a-avatar");return I(),M(a,{"trigger-type":"mask"},{"trigger-icon":V((()=>[B(D(c))])),default:V((()=>[ke])),_:1})}}),{VITE_API_WEATHER_KEY:je}={VITE_API_PROXY:"false",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},we=e=>te.get("/geoapi",{params:{location:e,key:je}}),be=e=>te.get("/weathernow/now",{params:{location:e,key:je}}),xe=e=>te.get("/weathernow/7d",{params:{location:e,key:je}});const Ce=r(C({__name:"index",props:{modelValue:{type:Boolean,default:!1},title:{default:"title"},verify:{type:Boolean,default:!0},width:{default:450},async:{type:Boolean,default:!1},footer:{type:Boolean,default:!0},bodyStyle:{default:""}},emits:["update:modelValue","confirm","cancel"],setup(e,{emit:l}){const s=e,{ModalWarning:o}=function(){const e={title:"提示",content:"是否退出？",width:420,closable:!0,hideCancel:!1,simple:!1,maskClosable:!1,modalClass:"hook-modal"};return{ModalOpen:async t=>new Promise(((a,l)=>{p.open({...e,...t,onOk:()=>a("ok"),onCancel:()=>l(new Error("cancel"))})})),ModalInfo:async t=>new Promise(((a,l)=>{p.info({...e,...t,onOk:()=>a("ok"),onCancel:()=>l(new Error("cancel"))})})),ModalSuccess:async t=>new Promise(((a,l)=>{p.success({...e,...t,onOk:()=>a("ok"),onCancel:()=>l(new Error("cancel"))})})),ModalWarning:t=>new Promise(((a,l)=>{p.warning({...e,...t,onOk:()=>a("ok"),onCancel:()=>l(new Error("cancel"))})})),ModalError:async t=>new Promise(((a,l)=>{p.error({...e,...t,onOk:()=>a("ok"),onCancel:()=>l(new Error("cancel"))})}))}}(),r=t(s,"modelValue",l),[n,i]=a(!1),u=me.throttle((e=>{e(!1),s.async&&i(!0),l("confirm",(()=>i(!1)))}),800),c=()=>!s.verify||(o().then((()=>{r.value=!1,i(!1),l("cancel")})),!1);return(t,a)=>{const l=P("a-scrollbar"),o=P("a-modal");return I(),M(o,{visible:D(r),"onUpdate:visible":a[0]||(a[0]=e=>T(r)?r.value=e:null),title:s.title,width:e.width,footer:s.footer,"title-align":"start","body-style":s.bodyStyle,"unmount-on-close":"","ok-loading":D(n),"mask-closable":!1,onBeforeOk:D(u),onBeforeCancel:c},{footer:V((()=>[S(t.$slots,"footer",{},void 0,!0)])),default:V((()=>[B(l,{style:{maxHeight:"75vh",overflow:"auto"}},{default:V((()=>[S(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["visible","title","width","footer","body-style","ok-loading","onBeforeOk"])}}}),[["__scopeId","data-v-979d6839"]]),Ie={class:"header-pre"},Me={style:{"font-size":"30px"}},Ve={class:"footer-pre"},Be=r(C({__name:"preweather-modal",props:{modelValue:{type:Boolean,default:!1},title:{default:"天气详情"},cityValue:{default:()=>({})},weatherValue:{default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:a}){const l=e,s=t(l,"modelValue",a),o=O(),{run:r}=ee(xe,{manual:!0,onSuccess:e=>{200===e.status&&(o.value=e.data.daily)}});return z((()=>l.cityValue),(e=>{e.id&&r(e.id)})),(t,a)=>{const r=P("a-typography-text"),n=P("a-space");return I(),M(Ce,{class:"modal-pre",modelValue:D(s),"onUpdate:modelValue":a[0]||(a[0]=e=>T(s)?s.value=e:null),title:l.title,verify:!1,footer:!1,width:650},{default:V((()=>[E("div",Ie,[B(n,{direction:"vertical"},{default:V((()=>[B(r,null,{default:V((()=>[R(H(e.cityValue.name),1)])),_:1}),E("span",Me,H(e.weatherValue.now.temp+"°"),1)])),_:1}),B(n,{direction:"vertical"},{default:V((()=>[B(r,null,{default:V((()=>[R(H(e.weatherValue.now.text),1)])),_:1}),B(r,null,{default:V((()=>[R(H("大气压强："+e.weatherValue.now.pressure+"Pa"),1)])),_:1}),B(r,null,{default:V((()=>[R(H("体感温度："+e.weatherValue.now.feelsLike+"°"),1)])),_:1})])),_:1})]),E("div",Ve,[B(n,{class:"footer-pre"},{default:V((()=>[(I(!0),Y(W,null,L(o.value,(e=>(I(),M(n,{key:e.wind360Day,direction:"vertical",align:"center",size:20},{default:V((()=>[B(r,null,{default:V((()=>[R(H(D(ve)(e.fxDate).format("MM-DD")),1)])),_:2},1024),B(r,null,{default:V((()=>[R(H(e.textDay),1)])),_:2},1024),B(r,null,{default:V((()=>[R(H(`${e.tempMin}° / ${e.tempMax}°`),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])])),_:1},8,["modelValue","title"])}}}),[["__scopeId","data-v-64e9bcb5"]]),De=r(C({__name:"index",setup(t){const{isDark:l}=e(),[s,o]=a(!1),{weatherIcon:r}={weatherIcon:e=>{const t=e.slice(0,1);return"1"===t?[ae,le]:"1"===e.slice(0,3)&&e.slice(0,3)>"0"?[se,oe]:"3"===t?[re,ne]:"4"===t?[ie,ie]:[ue,ie]}},{getIp:n,getCity:i}={getIp:async()=>{const e=await fetch("https://api.ipify.org?format=json");return(await e.json()).ip},getCity:async e=>{const t=await fetch(`https://ipapi.co/${e}/json/`);return(await t.json()).city}},u=O(""),c=O(),p=O(),v=()=>{c.value&&p.value?o(!0):m.info("天气详情正在加载中")},{run:f}=ee(we,{manual:!0,defaultParams:[u.value],onSuccess:e=>{var t;200===e.status&&(c.value=e.data.location[0],y(null==(t=c.value)?void 0:t.id))}}),{run:y}=ee(be,{manual:!0,onSuccess:e=>{200===e.status&&(p.value=e.data)}});z((()=>u.value),(e=>{""!==e&&f(e)}));const h=$((()=>{var e,t,a,l;return(null==(t=null==(e=p.value)?void 0:e.now)?void 0:t.icon)?r(null==(l=null==(a=p.value)?void 0:a.now)?void 0:l.icon):""}));return q((async()=>{const e=await n(),t=await i(e);u.value=t})),(e,t)=>{const a=P("a-typography-text"),o=P("a-space"),r=P("a-button");return I(),Y("div",{class:"weatherSpace",onClick:v},[B(r,{type:"text",style:U({color:D(l)?"#fff":"#000"})},{default:V((()=>[p.value?(I(),M(o,{key:0},{default:V((()=>{var e,t,s;return[B(D(ce),{size:"20"},{default:V((()=>[D(l)?F("",!0):(I(),M(A(D(h)[0]),{key:0})),D(l)?(I(),M(A(D(h)[1]),{key:1})):F("",!0)])),_:1}),B(a,null,{default:V((()=>{var e;return[E("span",{class:N(["cityName",{"cityName-Dark":!!D(l)}])},H(null==(e=c.value)?void 0:e.name)+H(),3)]})),_:1}),R(" "+H((null==(e=p.value)?void 0:e.now)&&p.value.now.temp+"°")+" "+H((null==(t=p.value)?void 0:t.now)&&(null==(s=p.value)?void 0:s.now.text))+" ",1),B(D(ce),{size:"20"},{default:V((()=>[D(l)?F("",!0):(I(),M(D(pe),{key:0})),D(l)?(I(),M(D(de),{key:1})):F("",!0)])),_:1})]})),_:1})):(I(),M(o,{key:1},{default:V((()=>[B(D(ce),{size:"20"},{default:V((()=>[D(l)?F("",!0):(I(),M(A(D(h)[0]),{key:0})),D(l)?(I(),M(A(D(h)[1]),{key:1})):F("",!0)])),_:1}),B(a,null,{default:V((()=>[E("span",{class:N(["cityName",{"cityName-Dark":!!D(l)}])},"天气加载中 ",2),B(D(d),{spin:""})])),_:1})])),_:1}))])),_:1},8,["style"]),B(Be,{modelValue:D(s),"onUpdate:modelValue":t[0]||(t[0]=e=>T(s)?s.value=e:null),title:"天气详情","city-value":c.value,"weather-value":p.value},null,8,["modelValue","city-value","weather-value"])])}}}),[["__scopeId","data-v-c99c8dec"]]),Ee=r(C({__name:"index",setup(t){const{now:r}=l({controls:!0}),i=s(),{isDark:u,changeBack:c}=e(),p=n(),d=o({selector:"body",attribute:"arco-theme",valueDark:"dark",valueLight:"light",storageKey:"arco-theme",onChanged(e){p.toggleTheme(e)}}),y=a(d),h=()=>{try{y(),m.success({id:"changeTheme",content:"切换主题成功"})}catch(e){m.error({id:"changeTheme",content:"切换主题失败"})}},g=e=>{try{c(e),m.success({id:"changeBack",content:"切换背景成功"})}catch(t){m.error({id:"changeBack",content:"切换背景失败"})}};return(e,t)=>{const a=P("a-typography-text"),l=P("a-button"),s=P("a-space");return I(),Y("div",{class:"menu-demo",style:U({color:D(u)?"#fff":"#000"})},[E("div",null,[B(s,{size:15},{default:V((()=>[E("span",null,[R("欢迎来到,"),B(a,{strong:!0},{default:V((()=>[R("TingFeng")])),_:1}),R(" 的世界!!!")]),B(De),B(l,{type:"text",style:U({color:D(u)?"#fff":"#000"})},{default:V((()=>[E("span",null,H(D(ve)(D(r)).format("YYYY-MM-DD HH:mm:ss")),1)])),_:1},8,["style"])])),_:1})]),B(s,{size:20},{default:V((()=>[E("span",{style:U({color:D(u)?"#fff":"#000"})},"FPS: "+H(D(i)),5),B(l,{type:"text",onClick:h,style:U({color:D(u)?"#fff":"#000"})},{icon:V((()=>[D(u)?(I(),M(D(v),{key:0,style:{color:"#fff"}})):(I(),M(D(f),{key:1,style:{color:"#000"}}))])),default:V((()=>[R(" 主题 ")])),_:1},8,["style"]),"Particles"===D(p).nowBack?(I(),M(l,{key:0,type:"text",onClick:t[0]||(t[0]=e=>g("vanta")),style:U({color:D(u)?"#fff":"#000"})},{default:V((()=>[R(" 切换动态背景 ")])),_:1},8,["style"])):"vanta"===D(p).nowBack?(I(),M(l,{key:1,type:"text",onClick:t[1]||(t[1]=e=>g("Particles")),style:U({color:D(u)?"#fff":"#000"})},{default:V((()=>[R(" 切换动态背景 ")])),_:1},8,["style"])):F("",!0),B(_e)])),_:1})],4)}}}),[["__scopeId","data-v-70d63368"]]),Pe={class:"img-music name-music"},Se={class:"img-music time-music"},Te={class:"img-music list-music"},Oe=["src"],ze=r(C({__name:"index",setup(t){let l=null;const{isDark:s}=e(),[o,r]=a(!1),n=O(),i=O(["/assets/春三月-司南.320-13c7bc95.mp3","/assets/如果没有你-萧敬腾.128-621d20e6.mp3"]),u=O(i.value[0]),c=()=>{n.value&&(n.value.play(),r(!0),l=setInterval((()=>{f()}),1e3))},p=()=>{n.value&&(n.value.pause(),r(!1),clearInterval(l))},d=O(),m=O(),v=O(0),f=()=>{n.value&&(d.value=Math.floor(n.value.duration/60)+":"+Math.floor(n.value.duration%60),m.value=Math.floor(n.value.currentTime/60)+":"+Math.floor(n.value.currentTime%60),v.value=Math.floor(n.value.currentTime/n.value.duration*100))};z((()=>d.value),(e=>{"0:0"===e&&(l=setInterval((()=>{f()}),1e3)),c()}));const w=e=>{const t=i.value.findIndex((e=>e===u.value));u.value=e?i.value[t-1]||i.value[i.value.length-1]:i.value[t+1]||i.value[0]},b=e=>{const t=i.value.findIndex((t=>{var a;return(null==(a=t.match(/[\u4e00-\u9fa5]+/g))?void 0:a.join())===e}));u.value=i.value[t]};return(e,t)=>{const a=P("a-image"),l=P("a-doption"),r=P("a-dropdown"),v=P("a-space");return I(),Y("div",{class:"musicBox",style:U({color:D(s)?"#fff":"#000"})},[B(v,null,{default:V((()=>[B(a,{class:N(["img-music",D(o)?"trans-img":""]),src:D(ge),width:54,preview:!1},null,8,["class","src"]),D(o)?(I(),M(D(h),{key:1,class:"img-music swap",rotate:90,onClick:p})):(I(),M(D(y),{key:0,class:"img-music play",onClick:c})),B(v,null,{default:V((()=>{var e;return[E("span",Pe,H(null==(e=u.value.match(/[\u4e00-\u9fa5]+/g))?void 0:e.join()),1),E("span",Se,H(m.value?m.value:"0:00")+" / "+H(d.value?d.value:"0:00"),1),E("span",{class:"img-music prev-music",onClick:t[0]||(t[0]=e=>w(!0))},[B(D(g))]),E("span",{class:"img-music next-music",onClick:t[1]||(t[1]=e=>w(!1))},[B(D(k))]),E("div",Te,[B(r,{trigger:"hover",position:"tr",onSelect:b},{content:V((()=>[(I(!0),Y(W,null,L(i.value,(e=>{var t;return I(),M(l,{key:e,value:null==(t=e.match(/[\u4e00-\u9fa5]+/g))?void 0:t.join()},{icon:V((()=>[B(D(j))])),default:V((()=>{var t;return[R(" "+H(null==(t=e.match(/[\u4e00-\u9fa5]+/g))?void 0:t.join()),1)]})),_:2},1032,["value"])})),128))])),default:V((()=>[B(D(_))])),_:1})])]})),_:1}),E("audio",{ref_key:"audio",ref:n,class:"audio-music",src:u.value,loop:""},null,8,Oe)])),_:1})],4)}}}),[["__scopeId","data-v-2f0b5e0b"]]),Re=e=>(G("data-v-49ef1b6b"),e=e(),K(),e),He={class:"user-left-avatar"},Ye=Re((()=>E("img",{src:ge,w60px:"",h60px:"",class:"user-left-avatar-img",alt:""},null,-1))),Le=Re((()=>E("span",{"font-bold":""},"我是小可爱",-1))),We=r(C({__name:"index",emits:["menuChange"],setup(t,{emit:a}){const l=i(),{isDark:s}=e(),o=e=>{a("menuChange",e)};return(e,t)=>{const a=P("a-tag"),r=P("a-space"),n=P("a-tab-pane"),i=P("a-tabs");return I(),Y("div",He,[B(r,{size:10,"mb-60px":""},{default:V((()=>[Ye,B(r,{direction:"vertical",class:N(D(s)?"user-left-avatar-isDark":"")},{default:V((()=>[Le,E("span",null,[B(a,null,{default:V((()=>[R("shisanlailin@outlook.com")])),_:1})])])),_:1},8,["class"])])),_:1}),B(i,{position:"left",onChange:o,"default-active-key":D(l).selectMenu},{default:V((()=>[B(n,{key:"1"},{title:V((()=>[B(D(w)),R(" 个人信息 ")])),_:1}),B(n,{key:"2"},{title:V((()=>[B(D(b)),R(" 工作经历 ")])),_:1}),B(n,{key:"3"},{title:V((()=>[B(D(x)),R(" 掌握技能 ")])),_:1})])),_:1},8,["default-active-key"]),B(ze,{class:"MusicPlayer"})])}}}),[["__scopeId","data-v-49ef1b6b"]]),$e={background:{color:{value:"#f6f6f6"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#32de72"},links:{color:"#32de72",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,area:1500},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!1,value:5}},detectRetina:!0};const qe={class:"content-blog-box"},Ae=r(C({__name:"index",setup(t){const a=async e=>{await fe(e)},{isDark:l}=e(),{innitVantaFun:s}={innitVantaFun:(e,t,a)=>{try{const l=n();if(!t)return;t.value&&t.value.destroy(),e&&"vanta"===l.nowBack?(t.value=ye({el:a.value,THREE:he}),t.value.setOptions({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,skyColor:0,cloudColor:5066129,cloudShadowColor:0,sunColor:0,sunGlareColor:986895,sunlightColor:8417457,speed:1.3})):e||"vanta"!==l.nowBack||(t.value=ye({el:a.value,THREE:he}),t.value.setOptions({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,skyColor:7188941,cloudColor:10921662,cloudShadowColor:2767696,sunColor:16738304,sunGlareColor:16726016,sunlightColor:16745008,speed:1.3}))}catch(l){throw m.error("vanta初始化失败"),new Error(l)}}},o=i(),r=n(),c=o.getMuenuList,p=e=>{o.setSelectMenu(String(e)),u.push({path:`/${c[Number(e)-1]}`})},d={...$e,background:{color:{value:"#242424"}},particles:{...$e.particles,color:{value:"#ffda8c"},links:{color:"#ffda8c",distance:150,enable:!0,opacity:.5,width:1}}};p(o.selectMenu);const v=O(),f=O();q((()=>{"vanta"===r.nowBack&&v.value&&y(l.value)})),z((()=>l.value),(e=>{"vanta"===r.nowBack&&v.value?y(e):f.value&&f.value.destroy()})),z((()=>r.nowBack),(e=>{"vanta"===e&&Z((()=>{v.value&&y(l.value)})),f.value&&f.value.destroy()}),{deep:!0});const y=e=>{s(e,f,v)};return X((()=>{f.value.destroy()})),(e,t)=>{const s=P("Particles"),o=P("router-view");return I(),Y("div",{class:N(["content-blog",D(l)?"content-blog-dark":""])},[D(l)||"Particles"!==D(r).nowBack?D(l)&&"Particles"===D(r).nowBack?(I(),M(s,{key:1,id:"tsparticles",particlesInit:a,options:d})):(I(),Y("div",{key:2,ref_key:"vantaRef",ref:v,class:"box-vanta"},null,512)):(I(),M(s,{key:0,id:"tsparticles",particlesInit:a,options:D($e)},null,8,["options"])),E("div",qe,[E("div",{w250px:"",class:N(["content-blog-box-left",D(l)?"content-blog-box-left-dark":""])},null,2),E("div",{class:N(["content-blog-box-top",D(l)?"content-blog-box-top-dark":""])},[E("div",{class:N(["content-blog-box-top-left",D(l)?"content-blog-box-top-left-dark":""])},[B(We,{onMenuChange:p})],2),E("div",{class:N(["content-blog-box-top-right",D(l)?"content-blog-box-top-right-dark":""])},[B(o,null,{default:V((({Component:e})=>[B(J,{name:"fade",mode:"out-in"},{default:V((()=>[(I(),M(Q,null,[(I(),M(A(e)))],1024))])),_:2},1024)])),_:1})],2)],2)])],2)}}}),[["__scopeId","data-v-93178a34"]]),Fe=C({__name:"default-layout",setup:e=>(e,t)=>{const a=P("a-layout-header"),l=P("a-layout-content"),s=P("a-layout");return I(),M(s,null,{default:V((()=>[B(a,null,{default:V((()=>[B(Ee)])),_:1}),B(l,null,{default:V((()=>[B(Ae)])),_:1})])),_:1})}}),Ne=r(C({__name:"index",setup(t){const{isDark:a}=e();return(e,t)=>(I(),Y("div",{h100vh:"","overflow-hidden":"",class:N(D(a)?"theme-color":"theme")},[B(Fe)],2))}}),[["__scopeId","data-v-17f7d22f"]]);export{Ne as default};
