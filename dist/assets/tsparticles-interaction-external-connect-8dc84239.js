import{E as t,i,u as n,s as e,v as o,w as s}from"./tsparticles-engine-3b45a3b7.js";class a{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class c{constructor(){this.distance=80,this.links=new a,this.radius=60}get lineLinked(){return this.links}set lineLinked(t){this.links=t}get line_linked(){return this.links}set line_linked(t){this.links=t}load(t){var i,n;t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(null!==(n=null!==(i=t.links)&&void 0!==i?i:t.lineLinked)&&void 0!==n?n:t.line_linked),void 0!==t.radius&&(this.radius=t.radius))}}function r(t,i,n,a){const c=t.actualOptions.interactivity.modes.connect;if(c)return function(t,i,n,a){const c=Math.floor(n.getRadius()/i.getRadius()),r=i.getFillColor(),l=n.getFillColor();if(!r||!l)return;const d=i.getPosition(),u=n.getPosition(),v=e(r,l,i.getRadius(),n.getRadius()),h=t.createLinearGradient(d.x,d.y,u.x,u.y);return h.addColorStop(0,o(r,a)),h.addColorStop(c>1?1:c,s(v,a)),h.addColorStop(1,o(l,a)),h}(i,n,a,c.links.opacity)}function l(t,i,e){t.canvas.draw((o=>{var s;const a=r(t,o,i,e);if(!a)return;const c=i.getPosition(),l=e.getPosition();var d,u,v;d=o,u=null!==(s=i.retina.linksWidth)&&void 0!==s?s:0,v=a,n(d,c,l),d.lineWidth=u,d.strokeStyle=v,d.stroke()}))}class d extends t{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}async interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position;if(!t.retina.connectModeDistance||t.retina.connectModeDistance<0||!t.retina.connectModeRadius||t.retina.connectModeRadius<0||!i)return;const n=Math.abs(t.retina.connectModeRadius),e=t.particles.quadTree.queryCircle(i,n,(t=>this.isEnabled(t)));let o=0;for(const s of e){const i=s.getPosition();for(const n of e.slice(o+1)){const e=n.getPosition(),o=Math.abs(t.retina.connectModeDistance),a=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);a<o&&c<o&&l(t,s,n)}++o}}}isEnabled(t){var n;const e=this.container,o=e.interactivity.mouse,s=(null!==(n=null==t?void 0:t.interactivity)&&void 0!==n?n:e.actualOptions.interactivity).events;return!(!s.onHover.enable||!o.position)&&i("connect",s.onHover.mode)}loadModeOptions(t,...i){t.connect||(t.connect=new c);for(const n of i)t.connect.load(null==n?void 0:n.connect)}reset(){}}async function u(t){await t.addInteractor("externalConnect",(t=>new d(t)))}export{u as l};
